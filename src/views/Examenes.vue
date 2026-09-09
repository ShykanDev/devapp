<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<ion-page>
		<ion-header :translucent="true" class="app-header">
			<ion-toolbar>
				<ion-buttons slot="start">
					<ion-menu-button></ion-menu-button>
				</ion-buttons>
				<ion-title>Exámenes</ion-title>
			</ion-toolbar>
		</ion-header>

		<ion-content>
			<ion-refresher slot="fixed" @ionRefresh="onRefresh">
				<ion-refresher-content pulling-text="Suelta para actualizar" refreshing-text="Actualizando…"></ion-refresher-content>
			</ion-refresher>

			<div class="page-shell">
				<header class="page-head">
					<p class="mt-kicker">Biblioteca</p>
					<h1 class="mt-h-display">Exámenes</h1>
					<p class="mt-body page-head__desc">
						Los exámenes que la IA genera para practicar se guardan aquí.
					</p>
				</header>

				<!-- Sin sesión -->
				<div v-if="!user" class="state-block">
					<div class="state-block__icon">
						<ion-icon :icon="lockClosedOutline"></ion-icon>
					</div>
					<p class="state-block__title">Inicia sesión para ver tus exámenes</p>
					<p class="state-block__hint">Guarda tus exámenes de práctica en tu cuenta.</p>
					<ion-button class="state-block__cta" router-link="/login">Iniciar sesión</ion-button>
				</div>

				<!-- Cargando -->
				<div v-else-if="loading" class="state-block">
					<ion-spinner name="crescent" class="spinner-primary"></ion-spinner>
					<p class="state-block__title">Cargando exámenes…</p>
				</div>

				<!-- Error de lectura -->
				<div v-else-if="error" class="state-block">
					<div class="state-block__icon">
						<ion-icon :icon="warningOutline"></ion-icon>
					</div>
					<p class="state-block__title">No se pudieron cargar tus exámenes</p>
					<p class="state-block__hint">{{ error }}</p>
					<ion-button class="state-block__cta" @click="loadExamenes()">
						<ion-icon slot="start" :icon="refresh"></ion-icon>
						Reintentar
					</ion-button>
				</div>

				<!-- Vacío -->
				<div v-else-if="examenes.length === 0" class="state-block">
					<div class="state-block__icon">
						<ion-icon :icon="clipboardOutline"></ion-icon>
					</div>
					<p class="state-block__title">Todavía no tienes exámenes</p>
					<p class="state-block__hint">
						Elige un tema y una dificultad; la IA preparará un examen de opción múltiple para practicar.
					</p>
					<ion-button class="state-block__cta" @click="goToCreate">
						<ion-icon slot="start" :icon="add"></ion-icon>
						Crear examen
					</ion-button>
				</div>

				<!-- Lista -->
				<div v-else class="section-area">
					<div class="section-head">
						<h2 class="section-head__title">
							{{ examenes.length }} examen{{ examenes.length === 1 ? '' : 'es' }}
						</h2>
						<button type="button" class="section-head__action" @click="goToCreate">
							<ion-icon :icon="add"></ion-icon>
							<span>Nueva</span>
						</button>
					</div>

					<div v-if="actionError" class="list-alert">
						<ion-icon :icon="warningOutline"></ion-icon>
						<span>{{ actionError }}</span>
					</div>

					<div class="page-list">
						<div
							v-for="examen in examenes"
							:key="examen.id"
							class="page-row"
							role="link"
							tabindex="0"
							@click="openExam(examen)"
							@keydown.enter="openExam(examen)"
							@keydown.space.prevent="openExam(examen)"
						>
							<div class="page-row__main">
								<h3 class="page-row__title">{{ examen.data.title }}</h3>
								<div class="page-row__meta">
									<span
										class="difficulty-chip"
										:style="{ '--chip-color': difficultyColor(examen.difficulty) }"
									>
										{{ difficultyLabel(examen.difficulty) }} ·
										{{ examen.data.questions.length }} preguntas
									</span>
									<span class="page-row__date">{{ formatDate(examen.updatedAt) }}</span>
								</div>
							</div>

							<div class="page-row__actions">
								<button
									type="button"
									class="icon-btn"
									:class="{ 'icon-btn--spin': regeneratingId === examen.id }"
									aria-label="Regenerar examen"
									:disabled="regeneratingId === examen.id"
									@click.stop="regenerate(examen)"
								>
									<ion-icon :icon="refresh"></ion-icon>
								</button>
								<button
									type="button"
									class="icon-btn icon-btn--danger"
									aria-label="Eliminar examen"
									:disabled="regeneratingId === examen.id"
									@click.stop="remove(examen)"
								>
									<ion-icon :icon="trashOutline"></ion-icon>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</ion-content>
	</ion-page>
</template>

<script setup lang="ts">
import {
	IonButton,
	IonButtons,
	IonContent,
	IonHeader,
	IonIcon,
	IonMenuButton,
	IonPage,
	IonRefresher,
	IonRefresherContent,
	IonSpinner,
	IonTitle,
	IonToolbar,
} from '@ionic/vue';
import { onIonViewWillEnter } from '@ionic/vue';
import { onBeforeUnmount, ref, watch } from 'vue';
import {
	add,
	clipboardOutline,
	lockClosedOutline,
	refresh,
	trashOutline,
	warningOutline,
} from 'ionicons/icons';
import { getAuth, onAuthStateChanged, type User } from 'firebase/auth';
import { useRouter } from 'vue-router';
import {
	deleteExamen,
	listExamenes,
	updateExamen,
	type StoredExamen,
} from '../services/examenes';
import { requestExamGeneration, ExamGenerationClientError } from '../lib/examen';
import { parseExamen, EXAM_DIFFICULTIES, type DifficultyId } from '../schemas/examen';

const router = useRouter();
const user = ref<User | null>(getAuth().currentUser);
const examenes = ref<StoredExamen[]>([]);
const loading = ref(false);
const error = ref('');
const actionError = ref('');
const regeneratingId = ref<string | null>(null);

const DIFFICULTY_COLORS: Record<DifficultyId, string> = {
	facil: 'var(--mt-success)',
	media: 'var(--mt-warning)',
	dificil: 'var(--mt-danger)',
};

const difficultyLabel = (id: DifficultyId) =>
	EXAM_DIFFICULTIES.find((d) => d.id === id)?.label ?? id;

const difficultyColor = (id: DifficultyId) => DIFFICULTY_COLORS[id];

const formatDate = (ts: unknown) => {
	if (ts && typeof ts === 'object' && 'toDate' in ts && typeof ts.toDate === 'function') {
		try {
			const date = ts.toDate() as Date;
			return date.toLocaleDateString('es-MX', { year: 'numeric', month: 'short', day: 'numeric' });
		} catch {
			return '';
		}
	}
	if (ts instanceof Date) {
		return ts.toLocaleDateString('es-MX', { year: 'numeric', month: 'short', day: 'numeric' });
	}
	return '';
};

const goToCreate = () => {
	router.push('/examenes/crear');
};

const openExam = (examen: StoredExamen) => {
	router.push(`/examenes/${examen.id}`);
};

const loadExamenes = async (silent = false) => {
	const uid = user.value?.uid;
	if (!uid) return;

	if (!silent) {
		loading.value = true;
		error.value = '';
	}
	try {
		examenes.value = await listExamenes(uid);
	} catch (e) {
		console.error(e);
		if (!silent) {
			error.value = 'No se pudo conectar con el servidor. Intenta de nuevo.';
		}
	} finally {
		if (!silent) {
			loading.value = false;
		}
	}
};

const onRefresh = async (e: CustomEvent) => {
	try {
		await loadExamenes();
	} finally {
		(e.target as HTMLIonRefresherElement).complete();
	}
};

const regenerate = async (examen: StoredExamen) => {
	const uid = user.value?.uid;
	if (!uid || regeneratingId.value) return;

	regeneratingId.value = examen.id;
	actionError.value = '';
	try {
		const result = await requestExamGeneration(examen.topic, examen.difficulty);

		const parsed = parseExamen(result.exam);
		if (!parsed.success) {
			actionError.value = 'El examen regenerado no pasó la validación. Intenta de nuevo.';
			return;
		}

		await updateExamen(uid, examen.id, parsed.data);
		await loadExamenes(true);
	} catch (e) {
		console.error(e);
		if (e instanceof ExamGenerationClientError) {
			actionError.value = e.message;
		} else {
			actionError.value = 'Ocurrió un error al regenerar el examen. Intenta de nuevo.';
		}
	} finally {
		regeneratingId.value = null;
	}
};

const remove = async (examen: StoredExamen) => {
	const uid = user.value?.uid;
	if (!uid || regeneratingId.value) return;

	const confirmed = window.confirm(`¿Eliminar "${examen.data.title}"?`);
	if (!confirmed) return;

	try {
		await deleteExamen(uid, examen.id);
		examenes.value = examenes.value.filter((e) => e.id !== examen.id);
	} catch (e) {
		console.error(e);
		actionError.value = 'No se pudo eliminar el examen. Intenta de nuevo.';
	}
};

let unsubAuth: (() => void) | null = null;

unsubAuth = onAuthStateChanged(getAuth(), (current) => {
	if (current?.uid !== user.value?.uid) {
		user.value = current as User | null;
	}
});

watch(
	() => user.value,
	(u) => {
		actionError.value = '';
		if (u) {
			loadExamenes();
		} else {
			examenes.value = [];
		}
	}
);

onIonViewWillEnter(() => {
	if (user.value) {
		loadExamenes(true);
	}
});

onBeforeUnmount(() => {
	unsubAuth?.();
});
</script>

<style scoped>
.page-shell {
	max-width: 720px;
	margin: 0 auto;
	padding: 12px 20px 48px;
}

.page-head {
	padding: 20px 0 24px;
}

.page-head__desc {
	margin: 10px 0 0;
	max-width: 46ch;
}

.section-area {
	padding-top: 4px;
}

.section-head {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 14px;
	padding: 0 2px;
}

.section-head__title {
	margin: 0;
	font-size: 13px;
	font-weight: 600;
	letter-spacing: 0.06em;
	text-transform: uppercase;
	color: var(--mt-ink-3);
}

.section-head__action {
	display: inline-flex;
	align-items: center;
	gap: 6px;
	min-height: 36px;
	padding: 0 8px;
	border: none;
	background: transparent;
	color: var(--mt-accent);
	font-family: var(--font-sans);
	font-size: 14px;
	font-weight: 600;
	cursor: pointer;
	border-radius: 10px;
}

.section-head__action ion-icon {
	font-size: 17px;
}

.list-alert {
	display: flex;
	align-items: flex-start;
	gap: 8px;
	padding: 12px 14px;
	margin-bottom: 14px;
	border-radius: var(--radius-box);
	background: color-mix(in srgb, var(--mt-danger) 8%, var(--mt-surface));
	border: 1px solid color-mix(in srgb, var(--mt-danger) 22%, var(--mt-line));
	color: var(--mt-danger);
	font-size: 13.5px;
	line-height: 1.5;
}

.list-alert ion-icon {
	flex-shrink: 0;
	margin-top: 1px;
	font-size: 17px;
}

.page-list {
	display: flex;
	flex-direction: column;
	background: var(--mt-surface);
	border: 1px solid var(--mt-line);
	border-radius: var(--radius-card);
	overflow: hidden;
}

.page-row {
	position: relative;
	display: flex;
	align-items: center;
	gap: 14px;
	padding: 16px 16px 16px 18px;
	text-decoration: none;
	cursor: pointer;
	transition: background 0.15s ease;
}

.page-row:focus-visible {
	outline: 2px solid var(--mt-accent);
	outline-offset: -2px;
}

.page-row + .page-row {
	border-top: 1px solid var(--mt-line);
}

.page-row:active {
	background: var(--mt-muted);
}

.page-row__main {
	flex: 1;
	min-width: 0;
}

.page-row__title {
	margin: 0;
	font-size: 16px;
	font-weight: 600;
	letter-spacing: -0.012em;
	line-height: 1.3;
	color: var(--mt-ink);
}

.page-row__meta {
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	gap: 8px;
	margin-top: 7px;
}

.difficulty-chip {
	--chip-color: var(--mt-ink-3);
	display: inline-flex;
	align-items: center;
	padding: 3px 10px;
	border-radius: 999px;
	background: color-mix(in srgb, var(--chip-color) 13%, transparent);
	color: var(--chip-color);
	font-size: 11.5px;
	font-weight: 600;
	line-height: 1.5;
	white-space: nowrap;
}

.page-row__date {
	font-size: 12px;
	color: var(--mt-ink-3);
}

.page-row__actions {
	display: flex;
	gap: 2px;
	flex-shrink: 0;
}

.icon-btn {
	width: 38px;
	height: 38px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border: none;
	border-radius: 11px;
	background: transparent;
	color: var(--mt-ink-3);
	cursor: pointer;
	transition: background 0.15s ease, color 0.15s ease;
}

.icon-btn:disabled {
	opacity: 0.5;
}

.icon-btn--spin ion-icon {
	animation: icon-btn-spin 0.9s linear infinite;
}

@keyframes icon-btn-spin {
	to {
		transform: rotate(360deg);
	}
}

@media (hover: hover) {
	.icon-btn:hover {
		background: var(--mt-muted);
		color: var(--mt-ink-2);
	}

	.icon-btn--danger:hover {
		background: color-mix(in srgb, var(--mt-danger) 12%, transparent);
		color: var(--mt-danger);
	}
}

/* ---------- Estados ---------- */
.state-block {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 6px;
	text-align: center;
	padding: 48px 16px;
	background: var(--mt-surface);
	border: 1px solid var(--mt-line);
	border-radius: var(--radius-card);
}

.state-block__icon {
	width: 52px;
	height: 52px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 16px;
	background: var(--mt-muted);
	color: var(--mt-ink-3);
	margin-bottom: 8px;
}

.state-block__icon ion-icon {
	font-size: 24px;
}

.state-block__title {
	margin: 4px 0 0;
	font-size: 16px;
	font-weight: 600;
	letter-spacing: -0.01em;
	color: var(--mt-ink);
}

.state-block__hint {
	margin: 6px 0 0;
	max-width: 34ch;
	font-size: 13.5px;
	line-height: 1.55;
	color: var(--mt-ink-2);
}

.state-block__cta {
	margin-top: 18px;
	min-height: 44px;
}

.spinner-primary {
	--color: var(--mt-accent);
	width: 24px;
	height: 24px;
	margin-bottom: 8px;
}
</style>
