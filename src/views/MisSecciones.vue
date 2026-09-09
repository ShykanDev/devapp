<template>
	<ion-page>
		<ion-header :translucent="true" class="app-header">
			<ion-toolbar>
				<ion-buttons slot="start">
					<ion-menu-button></ion-menu-button>
				</ion-buttons>
				<ion-title>Mis secciones</ion-title>
			</ion-toolbar>
		</ion-header>

		<ion-content>
			<ion-refresher slot="fixed" @ionRefresh="onRefresh">
				<ion-refresher-content pulling-text="Suelta para actualizar" refreshing-text="Actualizando…"></ion-refresher-content>
			</ion-refresher>

			<div class="page-shell">
				<header class="page-head">
					<p class="mt-kicker">Biblioteca</p>
					<h1 class="mt-h-display">Mis secciones</h1>
					<p class="mt-body page-head__desc">
						Las páginas educativas que el asistente crea para ti se guardan aquí.
					</p>
				</header>

				<!-- Sin sesión -->
				<div v-if="!user" class="state-block">
					<div class="state-block__icon">
						<ion-icon :icon="lockClosedOutline"></ion-icon>
					</div>
					<p class="state-block__title">Inicia sesión para ver tus secciones</p>
					<p class="state-block__hint">Guarda tus páginas educativas en tu cuenta.</p>
					<ion-button class="state-block__cta" router-link="/login">Iniciar sesión</ion-button>
				</div>

				<!-- Cargando -->
				<div v-else-if="loading" class="state-block">
					<ion-spinner name="crescent" class="spinner-primary"></ion-spinner>
					<p class="state-block__title">Cargando secciones…</p>
				</div>

				<!-- Error -->
				<div v-else-if="error" class="state-block">
					<div class="state-block__icon">
						<ion-icon :icon="warningOutline"></ion-icon>
					</div>
					<p class="state-block__title">No se pudieron cargar tus secciones</p>
					<p class="state-block__hint">{{ error }}</p>
					<ion-button class="state-block__cta" @click="loadPages">
						<ion-icon slot="start" :icon="refresh"></ion-icon>
						Reintentar
					</ion-button>
				</div>

				<!-- Vacío -->
				<div v-else-if="pages.length === 0" class="state-block">
					<div class="state-block__icon">
						<ion-icon :icon="libraryOutline"></ion-icon>
					</div>
					<p class="state-block__title">Todavía no tienes secciones</p>
					<p class="state-block__hint">
						Pídele al asistente en el chat que cree una sección para ti y aparecerá aquí.
					</p>
					<ion-button class="state-block__cta" router-link="/folder/chat">
						<ion-icon slot="start" :icon="chatbubbleOutline"></ion-icon>
						Ir al chat
					</ion-button>
				</div>

				<!-- Lista -->
				<div v-else class="section-area">
					<div class="section-head">
						<h2 class="section-head__title">{{ pages.length }} sección{{ pages.length === 1 ? '' : 'es' }}</h2>
						<button type="button" class="section-head__action" @click="goToChat">
							<ion-icon :icon="add"></ion-icon>
							<span>Nueva</span>
						</button>
					</div>

					<div class="page-list">
						<div
							v-for="page in pages"
							:key="page.id"
							class="page-row"
							role="link"
							tabindex="0"
							@click="openPage(page)"
							@keydown.enter="openPage(page)"
							@keydown.space.prevent="openPage(page)"
						>
							<div class="page-row__main">
								<h3 class="page-row__title">{{ page.data.title }}</h3>
								<p class="page-row__meta">
									<span>{{ page.data.description }}</span>
								</p>
							</div>

							<div class="page-row__side">
								<span class="page-row__topic">{{ page.topic }}</span>
								<span class="page-row__date">{{ formatDate(page.updatedAt) }}</span>
							</div>

							<div class="page-row__actions">
								<button
									type="button"
									class="icon-btn"
									:class="{ 'icon-btn--spin': regeneratingId === page.id }"
									aria-label="Regenerar contenido"
									:disabled="regeneratingId === page.id"
									@click.stop="regenerate(page)"
								>
									<ion-icon :icon="refresh"></ion-icon>
								</button>
								<button
									type="button"
									class="icon-btn icon-btn--danger"
									aria-label="Eliminar sección"
									@click.stop="remove(page)"
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
import { onMounted, ref, watch } from 'vue';
import {
	add,
	chatbubbleOutline,
	libraryOutline,
	lockClosedOutline,
	refresh,
	trashOutline,
	warningOutline,
} from 'ionicons/icons';
import { getAuth, type User } from 'firebase/auth';
import { deleteDynamicPage, listDynamicPages, saveDynamicPage, type StoredDynamicPage } from '../services/dynamicPages';
import { requestPageGeneration, PageGenerationClientError } from '../lib/dynamicPage';
import { parseDynamicPage } from '../schemas/dynamicPage';
import { useRouter } from 'vue-router';

const router = useRouter();
const user = ref<User | null>(getAuth().currentUser);
const pages = ref<StoredDynamicPage[]>([]);
const loading = ref(false);
const error = ref('');
const regeneratingId = ref<string | null>(null);

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

const goToChat = () => {
	router.push('/folder/chat');
};

const openPage = (page: StoredDynamicPage) => {
	router.push(`/page/${page.id}`);
};

const loadPages = async () => {
	const uid = user.value?.uid;
	if (!uid) return;

	loading.value = true;
	error.value = '';
	try {
		pages.value = await listDynamicPages(uid);
	} catch (e) {
		console.error(e);
		error.value = 'No se pudo conectar con el servidor. Intenta de nuevo.';
	} finally {
		loading.value = false;
	}
};

const onRefresh = async (e: CustomEvent) => {
	try {
		const uid = user.value?.uid;
		if (uid) {
			pages.value = await listDynamicPages(uid);
		}
	} catch (err) {
		console.error(err);
	} finally {
		(e.target as HTMLIonRefresherElement).complete();
	}
};

const regenerate = async (page: StoredDynamicPage) => {
	if (!user.value || regeneratingId.value) return;

	regeneratingId.value = page.id;
	try {
		const result = await requestPageGeneration(page.topic, { review: true });

		const parsed = parseDynamicPage(result.page);
		if (!parsed.success) {
			error.value = 'La página regenerada no pasó la validación. Intenta de nuevo.';
			return;
		}

		const uid = user.value.uid;
		await deleteDynamicPage(uid, page.id);
		const newId = await saveDynamicPage(uid, parsed.data, page.topic);
		router.replace({ name: 'dynamic-view', params: { pageId: newId } });
	} catch (e) {
		console.error(e);
		if (e instanceof PageGenerationClientError) {
			error.value = e.message;
		} else {
			error.value = 'Ocurrió un error al regenerar la sección. Intenta de nuevo.';
		}
	} finally {
		regeneratingId.value = null;
	}
};

const remove = async (page: StoredDynamicPage) => {
	if (!user.value) return;
	const confirmed = window.confirm(`¿Eliminar "${page.data.title}"?`);
	if (!confirmed) return;

	try {
		await deleteDynamicPage(user.value.uid, page.id);
		pages.value = pages.value.filter((p) => p.id !== page.id);
	} catch (e) {
		console.error(e);
		error.value = 'No se pudo eliminar la sección. Intenta de nuevo.';
	}
};

watch(
	() => user.value,
	(u) => {
		if (u) {
			loadPages();
		} else {
			pages.value = [];
		}
	}
);

onMounted(() => {
	if (user.value) {
		loadPages();
	}
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
	margin: 5px 0 0;
	font-size: 13.5px;
	line-height: 1.5;
	color: var(--mt-ink-2);
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
}

.page-row__side {
	display: none;
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

@media (min-width: 720px) {
	.page-row__side {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 6px;
		flex-shrink: 0;
		max-width: 180px;
	}

	.page-row__topic {
		font-size: 12px;
		font-weight: 600;
		color: var(--mt-accent);
		background: var(--mt-accent-soft);
		padding: 4px 10px;
		border-radius: 999px;
		max-width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.page-row__date {
		font-size: 12px;
		color: var(--mt-ink-3);
	}
}
</style>
