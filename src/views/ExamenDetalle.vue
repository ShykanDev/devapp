<template>
	<AppPage>
		<AppHeader title="Examen" back="/examenes" />

		<main class="app-content">
			<div class="page-shell">
				<!-- Cargando -->
				<div v-if="viewLoading" class="state-block">
					<AppSpinner class="spinner-primary" />
					<p class="state-block__title">Cargando examen…</p>
				</div>

				<!-- Sin sesión -->
				<div v-else-if="!user" class="state-block">
					<div class="state-block__icon">
						<AppIcon :icon="lockClosedOutline" />
					</div>
					<p class="state-block__title">Inicia sesión para ver tus exámenes</p>
					<AppButton class="state-block__cta" to="/login">Iniciar sesión</AppButton>
				</div>

				<!-- No encontrado -->
				<div v-else-if="viewState === 'not-found'" class="state-block">
					<div class="state-block__icon">
						<AppIcon :icon="documentTextOutline" />
					</div>
					<p class="state-block__title">Examen no encontrado</p>
					<p class="state-block__hint">Puede que ya haya sido eliminado.</p>
					<AppButton class="state-block__cta" to="/examenes">
						Ver mis exámenes
					</AppButton>
				</div>

				<!-- Versión no soportada o datos inválidos -->
				<div v-else-if="viewState === 'unsupported'" class="state-block">
					<div class="state-block__icon">
						<AppIcon :icon="warningOutline" />
					</div>
					<p class="state-block__title">Examen no compatible</p>
					<p class="state-block__hint">Este examen no es compatible con esta versión de la app.</p>
					<AppButton class="state-block__cta" to="/examenes">
						Ver mis exámenes
					</AppButton>
				</div>

				<!-- Error de lectura -->
				<div v-else-if="viewState === 'error'" class="state-block">
					<div class="state-block__icon state-block__icon--danger">
						<AppIcon :icon="warningOutline" />
					</div>
					<p class="state-block__title">No se pudo cargar el examen</p>
					<p class="state-block__hint">{{ viewError }}</p>
					<div class="state-block__actions">
						<AppButton class="state-block__cta" @click="loadExam">
							<template #start><AppIcon :icon="refresh" /></template>
							Reintentar
						</AppButton>
						<AppButton variant="clear" to="/examenes">
							Ver mis exámenes
						</AppButton>
					</div>
				</div>

				<!-- Contenido válido -->
				<template v-else-if="viewState === 'ready' && examen">
					<header class="page-head">
						<p class="mt-kicker">Evaluación</p>
						<h1 class="mt-h-display page-head__title">{{ examen.title }}</h1>
						<div class="page-head__meta">
							<span
								class="difficulty-chip"
								:style="{ '--chip-color': difficultyColor(examen.difficulty) }"
							>
								{{ difficultyLabel(examen.difficulty) }} ·
								{{ examen.questions.length }} preguntas
							</span>
						</div>
					</header>

					<div class="player-area">
						<DynamicExam
							:questions="examen.questions"
							:title="examen.title"
							:subtitle="subtitle"
						/>
					</div>

					<div class="detail-actions">
						<AppButton variant="outline" to="/examenes" class="detail-actions__btn">
							<template #start><AppIcon :icon="chevronBack" /></template>
							Volver a mis exámenes
						</AppButton>
					</div>
				</template>
			</div>
		</main>
	</AppPage>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import {
	chevronBack,
	documentTextOutline,
	lockClosedOutline,
	refresh,
	warningOutline,
} from 'ionicons/icons';
import { getAuth, onAuthStateChanged, type User } from 'firebase/auth';
import AppButton from '../components/ui/AppButton.vue';
import AppHeader from '../components/ui/AppHeader.vue';
import AppIcon from '../components/ui/AppIcon.vue';
import AppPage from '../components/ui/AppPage.vue';
import AppSpinner from '../components/ui/AppSpinner.vue';
import DynamicExam from '../components/dynamic/DynamicExam.vue';
import { getExamen } from '../services/examenes';
import {
	parseExamen,
	SCHEMA_VERSION,
	EXAM_DIFFICULTIES,
	type DifficultyId,
	type Examen,
} from '../schemas/examen';

type ViewState = 'loading' | 'not-found' | 'unsupported' | 'error' | 'ready';

const route = useRoute();
const user = ref<User | null>(getAuth().currentUser);

const examId = computed(() => (typeof route.params.examId === 'string' ? route.params.examId : ''));

const viewLoading = ref(false);
const viewState = ref<ViewState>('loading');
const viewError = ref('');
const examen = ref<Examen | null>(null);

const DIFFICULTY_COLORS: Record<DifficultyId, string> = {
	facil: 'var(--mt-success)',
	media: 'var(--mt-warning)',
	dificil: 'var(--mt-danger)',
};

const difficultyLabel = (id: DifficultyId) =>
	EXAM_DIFFICULTIES.find((d) => d.id === id)?.label ?? id;

const difficultyColor = (id: DifficultyId) => DIFFICULTY_COLORS[id];

const subtitle = computed(() => {
	if (!examen.value) return '';
	return `${difficultyLabel(examen.value.difficulty)} · ${examen.value.questions.length} preguntas`;
});

const loadExam = async () => {
	const uid = user.value?.uid;
	const id = examId.value;

	viewLoading.value = true;
	viewState.value = 'loading';
	viewError.value = '';
	examen.value = null;

	if (!uid) {
		viewLoading.value = false;
		return;
	}

	if (!id) {
		viewLoading.value = false;
		viewState.value = 'not-found';
		return;
	}

	try {
		const stored = await getExamen(uid, id);
		if (!stored) {
			viewState.value = 'not-found';
			return;
		}

		if (stored.schemaVersion !== SCHEMA_VERSION) {
			viewState.value = 'unsupported';
			return;
		}

		const parsed = parseExamen(stored.data);
		if (!parsed.success) {
			viewState.value = 'unsupported';
			return;
		}

		examen.value = parsed.data;
		viewState.value = 'ready';
	} catch (e) {
		console.error(e);
		viewState.value = 'error';
		viewError.value = 'No se pudo conectar con el servidor. Intenta de nuevo.';
	} finally {
		viewLoading.value = false;
	}
};

let unsubAuth: (() => void) | null = null;

unsubAuth = onAuthStateChanged(getAuth(), (current) => {
	if (current?.uid !== user.value?.uid) {
		user.value = current as User | null;
	}
});

watch(
	() => [user.value, examId.value],
	() => {
		loadExam();
	},
	{ immediate: true }
);

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
	padding: 20px 0 18px;
}

.page-head__title {
	margin: 12px 0 0;
}

.page-head__meta {
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	gap: 8px;
	margin-top: 12px;
}

.difficulty-chip {
	--chip-color: var(--mt-ink-3);
	display: inline-flex;
	align-items: center;
	padding: 4px 12px;
	border-radius: 999px;
	background: color-mix(in srgb, var(--chip-color) 13%, transparent);
	color: var(--chip-color);
	font-size: 12px;
	font-weight: 600;
	line-height: 1.5;
	white-space: nowrap;
}

.player-area {
	margin-top: 2px;
}

.detail-actions {
	display: flex;
	justify-content: center;
	margin-top: 20px;
}

.detail-actions__btn {
	min-height: 44px;
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

.state-block__icon .app-icon {
	font-size: 24px;
}

.state-block__icon--danger {
	background: color-mix(in srgb, var(--mt-danger) 12%, transparent);
	color: var(--mt-danger);
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
	max-width: 40ch;
	font-size: 13.5px;
	line-height: 1.55;
	color: var(--mt-ink-2);
}

.state-block__actions {
	display: flex;
	align-items: center;
	gap: 8px;
	margin-top: 8px;
}

.state-block__cta {
	margin-top: 16px;
	min-height: 44px;
}

.state-block__actions .state-block__cta {
	margin-top: 0;
}

.spinner-primary {
	color: var(--mt-accent);
	width: 24px;
	height: 24px;
	margin-bottom: 8px;
}
</style>
