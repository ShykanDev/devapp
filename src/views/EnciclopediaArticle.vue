<template>
	<AppPage>
		<AppHeader title="Artículo" back="/enciclopedia">
			<template v-if="user && article && !loading" #end>
				<AppButton
					variant="clear"
					icon-only
					class="header-edit-btn"
					aria-label="Editar artículo"
					@click="openEditor"
				>
					<template #start>
						<AppIcon :icon="createOutline" />
					</template>
				</AppButton>
			</template>
		</AppHeader>

		<main class="app-content">
			<div class="page-shell">
				<!-- Resolviendo tema -->
				<div v-if="loading && !article && !tema" class="loading-box">
					<AppSpinner class="spinner-primary" />
					<p class="loading-box__text">
						Preparando la explicación… puede tardar unos segundos.
					</p>
				</div>

				<!-- No encontrado -->
				<div v-else-if="!tema" class="state-block">
					<div class="state-block__icon">
						<AppIcon :icon="bookOutline" />
					</div>
					<p class="state-block__title">Ese tema no existe</p>
				</div>

				<template v-else>
					<header class="article-head">
						<p class="mt-kicker">{{ categoriaNombre }}</p>
						<h1 class="mt-h-display">{{ tema.nombre }}</h1>
						<p class="mt-body article-head__desc">{{ tema.descripcion }}</p>
					</header>

					<!-- Generando -->
					<div v-if="loading && !article" class="loading-box">
						<AppSpinner class="spinner-primary" />
						<p class="loading-box__text">
							Preparando la explicación… puede tardar unos segundos.
						</p>
					</div>

					<!-- Error -->
					<div v-else-if="error && !article" class="state-block">
						<div class="state-block__icon state-block__icon--danger">
							<AppIcon :icon="warningOutline" />
						</div>
						<p class="state-block__title">No se pudo cargar el artículo</p>
						<p class="state-block__hint">{{ error }}</p>
						<AppButton class="state-block__cta" @click="loadArticle">
							<template #start>
								<AppIcon :icon="refresh" />
							</template>
							Reintentar
						</AppButton>
					</div>

					<!-- Artículo -->
					<article v-else class="article">
						<div class="article__body" v-html="renderedArticle"></div>
						<div v-if="loading" class="article__streaming">
							<span class="article__streaming-label">Generando…</span>
						</div>
					</article>

					<!-- CTA -->
					<div v-if="!loading && article && !error" class="article-cta">
						<button type="button" class="article-cta__ask" @click="askTutor">
							<span class="article-cta__orb">
								<AppIcon :icon="chatbubbleOutline" />
							</span>
							<span class="article-cta__text">
								<strong>¿Te quedó alguna duda?</strong>
								<small>Pregúntale más al asistente</small>
							</span>
							<AppIcon class="article-cta__arrow" :icon="chevronForward" />
						</button>
						<p class="article-cta__note">
							Contenido educativo de programación.
						</p>
					</div>
				</template>
			</div>
		</main>

		<!-- Modal: editar artículo -->
		<AppModal v-model="editOpen">
			<AppHeader title="Editar artículo" :menu="false">
				<template #end>
					<AppButton :disabled="editBusy" @click="closeEditor">Cerrar</AppButton>
				</template>
			</AppHeader>

			<main class="app-content">
				<div class="edit-panel">
					<p class="edit-panel__intro">
						Dile al asistente qué quieres cambiar de este artículo: editar, ampliar,
						orientar o eliminar contenido. Ejemplo:
						<em>"agrega una sección sobre buenas prácticas"</em> o
						<em>"quita el apartado sobre despliegue"</em>.
					</p>

					<AppTextarea
						v-model="editInstruction"
						:disabled="editBusy"
						class="edit-panel__input"
						placeholder="¿Qué quieres editar de este artículo?"
					/>

					<div v-if="editError" class="edit-panel__status edit-panel__status--error">
						<AppIcon :icon="warningOutline" />
						<span>{{ editError }}</span>
					</div>

					<div v-if="editSuccess" class="edit-panel__status edit-panel__status--ok">
						<AppIcon :icon="checkmarkCircleOutline" />
						<span>Artículo actualizado</span>
					</div>

					<div class="edit-panel__busy" v-if="editBusy">
						<AppSpinner />
						<span>Editando el artículo… puede tardar unos segundos.</span>
					</div>

					<AppButton
						class="edit-panel__submit"
						:disabled="!editInstruction.trim() || editBusy"
						@click="applyEdit"
					>
						<template #start>
							<AppIcon :icon="sparkles" />
						</template>
						Aplicar cambios
					</AppButton>
				</div>
			</main>
		</AppModal>
	</AppPage>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from 'vue';
import { onBeforeRouteLeave, useRoute, useRouter } from 'vue-router';
import {
	bookOutline,
	chatbubbleOutline,
	checkmarkCircleOutline,
	chevronForward,
	createOutline,
	refresh,
	sparkles,
	warningOutline,
} from 'ionicons/icons';
import { getAuth, onAuthStateChanged, type User } from 'firebase/auth';
import { categoriasEnciclopedia, temasEnciclopedia } from '../data/enciclopedia';
import type { CategoriaEnciclopedia } from '../data/enciclopedia';
import { parseMarkdown } from '../lib/markdown';
import { streamChat } from '../services/streamChat';
import { getEnciclopediaTema } from '../services/enciclopediaTopics';
import {
	getEnciclopediaArticle,
	saveEnciclopediaArticle,
} from '../services/enciclopediaArticulos';
import { requestArticleEdit, ArticleEditClientError } from '../lib/articleEdit';
import AppPage from '../components/ui/AppPage.vue';
import AppHeader from '../components/ui/AppHeader.vue';
import AppButton from '../components/ui/AppButton.vue';
import AppIcon from '../components/ui/AppIcon.vue';
import AppTextarea from '../components/ui/AppTextarea.vue';
import AppSpinner from '../components/ui/AppSpinner.vue';
import AppModal from '../components/ui/AppModal.vue';

interface ResolvedTema {
	id: string;
	nombre: string;
	descripcion: string;
	categoriaId: string;
	pregunta: string;
	source: 'preset' | 'custom';
}

const route = useRoute();
const router = useRouter();

const article = ref('');
const loading = ref(false);
const error = ref('');

const user = ref<User | null>(getAuth().currentUser);

const tema = ref<ResolvedTema | null>(null);
const categoria = ref<CategoriaEnciclopedia | null>(null);
const categoriaNombre = computed(() => categoria.value?.nombre ?? '');

// ---- Estado de edición ----
const editOpen = ref(false);
const editInstruction = ref('');
const editBusy = ref(false);
const editError = ref('');
const editSuccess = ref(false);

const renderedArticle = computed(() => parseMarkdown(article.value));

const topicId = computed(() => (typeof route.params.id === 'string' ? route.params.id : ''));

let persistTimer: ReturnType<typeof setTimeout> | null = null;
let persisting = false;
let suppressNextPersist = false;
let activeToken = 0;

const resolveStaticTema = (id: string): ResolvedTema | null => {
	const found = temasEnciclopedia.find((t) => t.id === id);
	if (!found) return null;
	return { ...found, source: 'preset' };
};

const resolveCustomTema = async (uid: string, id: string): Promise<ResolvedTema | null> => {
	try {
		const stored = await getEnciclopediaTema(uid, id);
		if (!stored) return null;
		return {
			id: stored.id,
			nombre: stored.nombre,
			descripcion: stored.descripcion,
			categoriaId: stored.categoriaId,
			pregunta: stored.pregunta,
			source: 'custom',
		};
	} catch (e) {
		console.error(e);
		return null;
	}
};

const categoriaDe = (temaResuelto: ResolvedTema): CategoriaEnciclopedia | null =>
	categoriasEnciclopedia.find((c) => c.id === temaResuelto.categoriaId) ?? null;

// ---------- Persistencia ----------

const persistNow = async (id: string = topicId.value): Promise<void> => {
	const uid = user.value?.uid;
	const content = article.value.trim();
	if (!uid || !id || !tema.value || !content) return;
	if (persisting) return;

	persisting = true;
	try {
		await saveEnciclopediaArticle(uid, id, content);
	} catch (e) {
		console.error('No se pudo guardar el artículo', e);
	} finally {
		persisting = false;
	}
};

const schedulePersist = () => {
	if (persistTimer) clearTimeout(persistTimer);
	persistTimer = setTimeout(() => {
		persistTimer = null;
		persistNow();
	}, 1200);
};

const flushPersist = (id: string = topicId.value) => {
	if (persistTimer) {
		clearTimeout(persistTimer);
		persistTimer = null;
	}
	return persistNow(id);
};

// ---------- Generación ----------

const loadArticle = async () => {
	if (!tema.value) return;

	const token = ++activeToken;

	article.value = '';
	error.value = '';
	loading.value = true;

	try {
		await streamChat(
			[
				{
					role: 'user',
					content: `${tema.value.pregunta} Dame una explicación educativa, bien estructurada y con ejemplos claros, como artículo corto para aprender. Usa secciones cortas con títulos y listas con bullets (formato markdown simple con #, ##, - bullet). Termina con un apartado de "Errores comunes y buenas prácticas".`,
				},
			],
			{
				onDelta: (delta) => {
					if (token !== activeToken) return;
					loading.value = false;
					article.value += delta;
				},
				onError: (message) => {
					console.error(message);
					if (token !== activeToken) return;
					if (!article.value) {
						error.value = 'No se pudo conectar con el asistente. Intenta de nuevo.';
					}
				},
				onDone: () => {
					if (token !== activeToken) return;
					loading.value = false;
					flushPersist();
				},
			}
		);
	} catch (e) {
		console.error(e);
		if (token !== activeToken) return;
		if (!article.value) {
			error.value = 'No se pudo conectar con el asistente. Intenta de nuevo.';
		}
	} finally {
		if (token === activeToken) {
			loading.value = false;
		}
	}
};

const init = async () => {
	const token = ++activeToken;
	const id = topicId.value;

	if (!id) {
		tema.value = null;
		loading.value = false;
		return;
	}

	article.value = '';
	error.value = '';
	loading.value = true;
	tema.value = null;
	categoria.value = null;

	const staticTema = resolveStaticTema(id);
	const uid = user.value?.uid;

	let resolved: ResolvedTema | null = staticTema;
	if (!resolved && uid) {
		resolved = await resolveCustomTema(uid, id);
	}
	if (token !== activeToken) return;

	if (!resolved) {
		loading.value = false;
		return;
	}

	tema.value = resolved;
	categoria.value = categoriaDe(resolved);

	if (!uid) {
		loading.value = true;
		await loadArticle();
		return;
	}

	// Intenta cargar un artículo guardado
	let saved: string | null = null;
	try {
		saved = await getEnciclopediaArticle(uid, id);
	} catch (e) {
		console.error(e);
	}
	if (token !== activeToken) return;

	if (saved && saved.trim()) {
		suppressNextPersist = true;
		article.value = saved;
		loading.value = false;
		return;
	}

	loading.value = true;
	await loadArticle();
};

// ---------- Edición ----------

const openEditor = () => {
	editInstruction.value = '';
	editError.value = '';
	editSuccess.value = false;
	editOpen.value = true;
};

const closeEditor = () => {
	if (editBusy.value) return;
	editOpen.value = false;
	editError.value = '';
	editSuccess.value = false;
};

const applyEdit = async () => {
	if (!user.value || !tema.value || !article.value || editBusy.value) return;
	const instruction = editInstruction.value.trim();
	if (!instruction) return;

	editBusy.value = true;
	editError.value = '';
	editSuccess.value = false;

	try {
		const result = await requestArticleEdit({
			tema: {
				nombre: tema.value.nombre,
				descripcion: tema.value.descripcion,
				categoria: categoriaNombre.value,
				pregunta: tema.value.pregunta,
			},
			content: article.value,
			instruction,
		});

		const edited = result.content.trim();
		if (!edited) {
			editError.value = 'El asistente no devolvió contenido. Intenta de nuevo.';
			return;
		}

		suppressNextPersist = true;
		article.value = edited;
		await saveEnciclopediaArticle(user.value.uid, topicId.value, edited);
		editSuccess.value = true;
		setTimeout(() => {
			if (editOpen.value) {
				editOpen.value = false;
				editSuccess.value = false;
			}
		}, 1200);
	} catch (e) {
		console.error(e);
		if (e instanceof ArticleEditClientError) {
			editError.value = e.message;
		} else {
			editError.value = 'Ocurrió un error al editar el artículo. Intenta de nuevo.';
		}
	} finally {
		editBusy.value = false;
	}
};

// ---------- Navegación ----------

const askTutor = () => {
	router.push({
		name: 'aiChat-thread',
		params: { chatId: 'nuevo' },
		query: { pregunta: tema.value?.pregunta ?? '' },
	});
};

watch(
	() => route.params.id,
	async (newId, oldId) => {
		if (typeof oldId === 'string' && oldId) {
			await flushPersist(oldId);
		}
		init();
	},
	{ immediate: true }
);

watch(
	() => user.value,
	(u) => {
		flushPersist();
		if (u) {
			init();
		} else {
			tema.value = null;
			categoria.value = null;
			article.value = '';
		}
	}
);

watch(
	() => article.value,
	() => {
		if (suppressNextPersist) {
			suppressNextPersist = false;
			return;
		}
		if (!article.value.trim()) return;
		schedulePersist();
	}
);

onBeforeRouteLeave(() => {
	flushPersist();
});

const handlePageHide = () => {
	if (persistTimer) {
		clearTimeout(persistTimer);
		persistTimer = null;
	}
	persistNow();
};

window.addEventListener('pagehide', handlePageHide);

let unsubAuth: (() => void) | null = null;
unsubAuth = onAuthStateChanged(getAuth(), (current) => {
	if (current?.uid !== user.value?.uid) {
		user.value = current as User | null;
	}
});

onBeforeUnmount(() => {
	if (persistTimer) {
		clearTimeout(persistTimer);
		persistTimer = null;
	}
	unsubAuth?.();
	window.removeEventListener('pagehide', handlePageHide);
});
</script>

<style scoped>
.page-shell {
	max-width: 720px;
	margin: 0 auto;
	padding: 12px 20px 48px;
}

.header-edit-btn {
	min-height: 36px;
	--color: var(--mt-accent);
}

.header-edit-btn::part(native) {
	padding: 0 6px;
}

.article-head {
	padding: 20px 0 8px;
}

.article-head__desc {
	margin: 12px 0 0;
	max-width: 52ch;
}

/* ---------- Carga ---------- */
.loading-box {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 12px;
	padding: 64px 16px;
	text-align: center;
}

.spinner-primary {
	--color: var(--mt-accent);
	width: 24px;
	height: 24px;
}

.loading-box__text {
	margin: 0;
	font-size: 14px;
	color: var(--mt-ink-3);
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
	color: var(--mt-ink);
}

.state-block__hint {
	margin: 6px 0 0;
	font-size: 13.5px;
	color: var(--mt-ink-2);
}

.state-block__cta {
	margin-top: 16px;
	min-height: 44px;
}

/* ---------- Artículo ---------- */
.article {
	background: var(--mt-surface);
	border: 1px solid var(--mt-line);
	border-radius: var(--radius-card);
	padding: 26px 24px;
	margin-top: 14px;
	box-shadow: var(--shadow-soft);
}

.article__body {
	font-size: 16px;
	line-height: 1.72;
	letter-spacing: -0.004em;
	color: var(--mt-ink);
	overflow-wrap: break-word;
}

.article__body :deep(h1),
.article__body :deep(h2),
.article__body :deep(h3),
.article__body :deep(h4) {
	margin: 26px 0 10px;
	line-height: 1.28;
	font-weight: 700;
	letter-spacing: -0.018em;
	color: var(--mt-ink);
}

.article__body :deep(h1) {
	font-size: 22px;
	margin-top: 8px;
}

.article__body :deep(h2) {
	font-size: 19px;
}

.article__body :deep(h3) {
	font-size: 17px;
}

.article__body :deep(p) {
	margin: 12px 0;
}

.article__body :deep(ul),
.article__body :deep(ol) {
	margin: 12px 0;
	padding-left: 4px;
	list-style: none;
}

.article__body :deep(li) {
	position: relative;
	margin: 9px 0;
	padding-left: 26px;
	line-height: 1.6;
}

.article__body :deep(ul > li)::before {
	content: '';
	position: absolute;
	left: 6px;
	top: 0.68em;
	width: 6px;
	height: 6px;
	border-radius: 999px;
	background: var(--mt-accent);
}

.article__body :deep(strong) {
	font-weight: 650;
	color: var(--mt-ink);
}

.article__streaming {
	padding-top: 8px;
}

.article__streaming-label {
	display: inline-flex;
	align-items: center;
	gap: 8px;
	font-size: 12px;
	color: var(--mt-ink-3);
}

.article__streaming-label::before {
	content: '';
	width: 6px;
	height: 6px;
	border-radius: 999px;
	background: var(--mt-accent);
	animation: pulse-dot 1.2s ease-in-out infinite;
}

@keyframes pulse-dot {
	0%, 100% {
		opacity: 0.35;
	}
	50% {
		opacity: 1;
	}
}

/* ---------- CTA ---------- */
.article-cta {
	margin-top: 18px;
}

.article-cta__ask {
	display: flex;
	align-items: center;
	gap: 14px;
	width: 100%;
	text-align: left;
	padding: 16px;
	border: 1px solid var(--mt-line);
	border-radius: var(--radius-card);
	background: var(--mt-surface);
	box-shadow: var(--shadow-soft);
	cursor: pointer;
	font-family: var(--font-sans);
	transition: transform 0.12s ease, border-color 0.15s ease;
}

@media (hover: hover) {
	.article-cta__ask:hover {
		border-color: var(--mt-line-strong);
		transform: translateY(-1px);
	}
}

.article-cta__orb {
	width: 42px;
	height: 42px;
	flex-shrink: 0;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border-radius: 13px;
	background: var(--mt-accent-soft);
	color: var(--mt-accent);
}

.article-cta__orb .app-icon {
	font-size: 20px;
}

.article-cta__text {
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 2px;
	min-width: 0;
}

.article-cta__text strong {
	font-size: 15px;
	font-weight: 600;
	color: var(--mt-ink);
}

.article-cta__text small {
	font-size: 13px;
	color: var(--mt-ink-2);
}

.article-cta__arrow {
	font-size: 16px;
	color: var(--mt-ink-3);
	opacity: 0.6;
}

.article-cta__note {
	margin: 12px 4px 0;
	font-size: 12px;
	line-height: 1.5;
	color: var(--mt-ink-3);
	text-align: center;
}

/* ---------- Panel de edición ---------- */
.edit-panel {
	max-width: 640px;
	margin: 0 auto;
	padding: 18px 20px 32px;
	display: flex;
	flex-direction: column;
	gap: 14px;
}

.edit-panel__intro {
	margin: 0;
	font-size: 13.5px;
	line-height: 1.6;
	color: var(--mt-ink-2);
}

.edit-panel__intro em {
	color: var(--mt-ink);
}

.edit-panel__input {
	--background: var(--mt-muted);
	--padding-start: 14px;
	--padding-end: 14px;
	border-radius: var(--radius-box);
}

.edit-panel__status {
	display: flex;
	align-items: flex-start;
	gap: 8px;
	padding: 12px 14px;
	border-radius: var(--radius-box);
	font-size: 13.5px;
	line-height: 1.5;
}

.edit-panel__status .app-icon {
	flex-shrink: 0;
	margin-top: 1px;
	font-size: 17px;
}

.edit-panel__status--error {
	background: color-mix(in srgb, var(--mt-danger) 9%, var(--mt-surface));
	border: 1px solid color-mix(in srgb, var(--mt-danger) 22%, var(--mt-line));
	color: var(--mt-danger);
}

.edit-panel__status--ok {
	background: color-mix(in srgb, var(--mt-success) 9%, var(--mt-surface));
	border: 1px solid color-mix(in srgb, var(--mt-success) 22%, var(--mt-line));
	color: var(--mt-success);
}

.edit-panel__submit {
	width: 100%;
	margin-top: 4px;
}

.edit-panel__busy {
	display: flex;
	align-items: center;
	gap: 10px;
	padding: 12px 14px;
	border-radius: var(--radius-box);
	background: var(--mt-muted);
	font-size: 13.5px;
	color: var(--mt-ink-2);
}

.edit-panel__busy .app-spinner {
	width: 18px;
	height: 18px;
	flex-shrink: 0;
	color: var(--mt-accent);
}

:global(.edit-modal) {
	--width: 100%;
	--height: 100%;
	--border-radius: 0;
	--max-width: 560px;
	--backdrop-opacity: 0.3;
	--background: var(--mt-canvas);
}

@media (min-width: 600px) {
	:global(.edit-modal) {
		--height: 100%;
		--border-radius: 24px 24px 0 0;
		margin: auto auto 0;
	}
}

@media (min-width: 768px) {
	.article {
		padding: 32px 36px;
	}
}
</style>
