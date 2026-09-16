<template>
	<AppPage>
		<AppHeader
			:title="mode === 'create' ? 'Nueva sección' : 'Sección'"
			:back="mode === 'view' ? viewBack : false"
		>
			<template #end>
				<AppButton
					v-if="mode === 'view' && viewState === 'ready' && user"
					variant="clear"
					iconOnly
					class="header-edit-btn"
					aria-label="Editar sección"
					@click="openEditor"
				>
					<AppIcon :icon="createOutline" />
				</AppButton>
			</template>
		</AppHeader>

		<main class="app-content">
			<div class="page-shell">
				<!-- ============ MODO CREAR ============ -->
				<template v-if="mode === 'create'">
					<!-- Sin sesión -->
					<div v-if="!user" class="state-block">
						<div class="state-block__icon">
							<AppIcon :icon="lockClosedOutline" />
						</div>
						<p class="state-block__title">Inicia sesión para crear secciones</p>
						<p class="state-block__hint">Guarda tus páginas educativas personalizadas en tu cuenta.</p>
						<AppButton class="state-block__cta" to="/login">Iniciar sesión</AppButton>
					</div>

					<!-- Selección de tema -->
					<div v-else-if="createPhase === 'topic'" class="create-view">
						<header class="create-head">
							<p class="mt-kicker">Asistente educativo</p>
							<h1 class="mt-h-display">Crea tu sección</h1>
							<p class="mt-body create-head__desc">
								Elige un tema y el asistente preparará una página con explicaciones,
								flashcards y un mini examen para repasar.
							</p>
						</header>

						<div class="panel">
							<AppInput
								v-model="topicInput"
								type="text"
								class="panel__input"
								placeholder="¿Sobre qué tema? Ej. Fundamentos de JavaScript"
								@keyup.enter="startCreation"
							/>
							<AppButton
								class="panel__submit"
								:disabled="!topicInput.trim() || creating"
								@click="startCreation"
							>
								<template #start><AppIcon :icon="sparkles" /></template>
								Generar sección
							</AppButton>
						</div>

						<div class="create-hints">
							<p class="create-hints__label">Ideas de temas</p>
							<div class="create-hints__chips">
								<button
									type="button"
									v-for="idea in topicIdeas"
									:key="idea"
									class="chip-btn"
									@click="pickIdea(idea)"
								>
									{{ idea }}
								</button>
							</div>
						</div>
					</div>

					<!-- Generando / validando / reparando -->
					<div v-else-if="creating" class="state-block generating">
						<div class="generating__orb">
							<AppSpinner />
						</div>
						<p class="state-block__title">{{ createStatusText }}</p>
						<p class="state-block__hint">Esto puede tardar unos segundos. No cierres la pantalla.</p>
					</div>

					<!-- Error -->
					<div v-else-if="createPhase === 'error'" class="state-block">
						<div class="state-block__icon state-block__icon--danger">
							<AppIcon :icon="warningOutline" />
						</div>
						<p class="state-block__title">No se pudo generar la sección</p>
						<p class="state-block__hint">{{ createError }}</p>
						<div class="state-block__actions">
							<AppButton class="state-block__cta" @click="startCreation">
								<template #start><AppIcon :icon="refresh" /></template>
								Reintentar
							</AppButton>
							<AppButton variant="clear" @click="resetCreate">Cambiar de tema</AppButton>
						</div>
					</div>
				</template>

				<!-- ============ MODO VER ============ -->
				<template v-else>
					<!-- Cargando -->
					<div v-if="viewLoading" class="state-block">
						<AppSpinner class="spinner-primary" />
						<p class="state-block__title">Cargando sección…</p>
					</div>

					<!-- Sin sesión -->
					<div v-else-if="!user" class="state-block">
						<div class="state-block__icon">
							<AppIcon :icon="lockClosedOutline" />
						</div>
						<p class="state-block__title">Inicia sesión para ver tus secciones</p>
						<AppButton class="state-block__cta" to="/login">Iniciar sesión</AppButton>
					</div>

					<!-- No encontrada -->
					<div v-else-if="viewState === 'not-found'" class="state-block">
						<div class="state-block__icon">
							<AppIcon :icon="documentTextOutline" />
						</div>
						<p class="state-block__title">Página no encontrada</p>
						<p class="state-block__hint">Puede que ya haya sido eliminada.</p>
						<AppButton class="state-block__cta" to="/mis-secciones">
							Ver mis secciones
						</AppButton>
					</div>

					<!-- Versión no soportada -->
					<div v-else-if="viewState === 'unsupported'" class="state-block">
						<div class="state-block__icon">
							<AppIcon :icon="warningOutline" />
						</div>
						<p class="state-block__title">Versión no soportada</p>
						<p class="state-block__hint">Esta página usa un formato más reciente que la app no reconoce.</p>
					</div>

					<!-- Error de lectura -->
					<div v-else-if="viewState === 'error'" class="state-block">
						<div class="state-block__icon state-block__icon--danger">
							<AppIcon :icon="warningOutline" />
						</div>
						<p class="state-block__title">No se pudo cargar esta sección</p>
						<p class="state-block__hint">{{ viewError }}</p>
						<div class="state-block__actions">
							<AppButton class="state-block__cta" @click="loadPage">
								<template #start><AppIcon :icon="refresh" /></template>
								Reintentar
							</AppButton>
							<AppButton variant="clear" to="/mis-secciones">
								Ver mis secciones
							</AppButton>
						</div>
					</div>

					<!-- Contenido válido -->
					<template v-else-if="validatedPage">
						<p v-if="parentTitle" class="dp-parent-kicker">Subtema de: {{ parentTitle }}</p>
						<DynamicHeader :title="validatedPage.title" :description="validatedPage.description" />
						<div class="dp-blocks">
							<div class="dp-block-group">
								<DynamicSections
									:sections="validatedPage.sections"
									:children-by-section="childrenBySection"
									@pick-subtopic="onPickSubtopic"
								/>
								<DynamicInformativeSection :info="validatedPage.informativeSection" />
								<DynamicMoreInformation :info="validatedPage.moreInformation" />
							</div>
							<div class="dp-block-group">
								<DynamicFlashcards :flashcards="validatedPage.flashcards" />
								<DynamicExam :questions="validatedPage.exam.questions" />
							</div>
						</div>
					</template>
				</template>
			</div>
		</main>

		<!-- Modal: editar sección -->
		<AppModal v-model="editOpen">
			<AppHeader title="Editar sección" :menu="false">
				<template #end>
					<AppButton variant="clear" :disabled="editBusy" @click="closeEditor">Cerrar</AppButton>
				</template>
			</AppHeader>

			<main class="app-content">
				<div class="edit-panel">
					<p class="edit-panel__intro">
						Dile al asistente qué quieres cambiar de esta sección: editar, ampliar,
						orientar o eliminar contenido. Ejemplo: <em>"agrega una sección sobre
						promesas"</em> o <em>"quita la flashcard sobre closures"</em>.
					</p>

					<AppTextarea
						v-model="editInstruction"
						:disabled="editBusy"
						class="edit-panel__input"
						placeholder="¿Qué quieres editar de esta sección?"
					/>

					<div v-if="editError" class="edit-panel__status edit-panel__status--error">
						<AppIcon :icon="warningOutline" />
						<span>{{ editError }}</span>
					</div>

					<div v-if="editSuccess" class="edit-panel__status edit-panel__status--ok">
						<AppIcon :icon="checkmarkCircleOutline" />
						<span>Sección actualizada</span>
					</div>

					<div class="edit-panel__busy" v-if="editBusy">
						<AppSpinner />
						<span>Editando la sección… puede tardar unos segundos.</span>
					</div>

					<AppButton
						class="edit-panel__submit"
						:disabled="!editInstruction.trim() || editBusy"
						@click="applyEdit"
					>
						<template #start><AppIcon :icon="sparkles" /></template>
						Aplicar cambios
					</AppButton>
				</div>
			</main>
		</AppModal>
	</AppPage>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { checkmarkCircleOutline, createOutline, documentTextOutline, lockClosedOutline, refresh, sparkles, warningOutline } from 'ionicons/icons';
import { getAuth, type User } from 'firebase/auth';
import AppButton from '../components/ui/AppButton.vue';
import AppHeader from '../components/ui/AppHeader.vue';
import AppIcon from '../components/ui/AppIcon.vue';
import AppInput from '../components/ui/AppInput.vue';
import AppModal from '../components/ui/AppModal.vue';
import AppPage from '../components/ui/AppPage.vue';
import AppSpinner from '../components/ui/AppSpinner.vue';
import AppTextarea from '../components/ui/AppTextarea.vue';
import DynamicHeader from '../components/dynamic/DynamicHeader.vue';
import DynamicSections from '../components/dynamic/DynamicSections.vue';
import DynamicInformativeSection from '../components/dynamic/DynamicInformativeSection.vue';
import DynamicMoreInformation from '../components/dynamic/DynamicMoreInformation.vue';
import DynamicFlashcards from '../components/dynamic/DynamicFlashcards.vue';
import DynamicExam from '../components/dynamic/DynamicExam.vue';
import { requestPageGeneration, requestPageEdit, requestSectionSuggestions, PageGenerationClientError } from '../lib/dynamicPage';
import { parseDynamicPage, type DynamicPage } from '../schemas/dynamicPage';
import { getDynamicPage, listChildPages, saveDynamicPage, updateDynamicPage } from '../services/dynamicPages';

const route = useRoute();
const router = useRouter();

type CreatePhase = 'topic' | 'generating' | 'validating' | 'repairing' | 'saving' | 'error';
type ViewState = 'loading' | 'not-found' | 'unsupported' | 'error' | 'ready';

const user = ref<User | null>(getAuth().currentUser);
const mode = computed(() => (route.name === 'dynamic-create' ? 'create' : 'view'));

const topicIdeas = [
	'Fundamentos de JavaScript',
	'Promesas y async/await',
	'Complejidad algorítmica',
	'SQL: consultas básicas',
];

// ---- Estado de creación ----
const createPhase = ref<CreatePhase>('topic');
const topicInput = ref('');
const topicSubmitted = ref('');
const createError = ref('');
const creating = ref(false);

// ---- Estado de lectura ----
const viewLoading = ref(false);
const viewState = ref<ViewState>('loading');
const viewError = ref('');
const storedPage = ref<{ schemaVersion: number; topic: string; parentId: string | null; parentTitle: string } | null>(null);
const validatedPage = ref<DynamicPage | null>(null);
const childrenBySection = ref<Record<number, { topic: string; pageId: string }[]>>({});

const parentTitle = computed(() => storedPage.value?.parentTitle ?? '');
const viewBack = computed(() => (storedPage.value?.parentId ? `/page/${storedPage.value.parentId}` : '/mis-secciones'));

// ---- Estado de edición ----
const editOpen = ref(false);
const editInstruction = ref('');
const editBusy = ref(false);
const editError = ref('');
const editSuccess = ref(false);

const createStatusText = computed(() => {
	switch (createPhase.value) {
		case 'generating':
			return 'Generando contenido…';
		case 'validating':
			return 'Validando la página…';
		case 'repairing':
			return 'Corrigiendo detalles…';
		case 'saving':
			return 'Guardando en tu cuenta…';
		default:
			return 'Preparando…';
	}
});

const setPhase = (phase: CreatePhase, errorMessage = '') => {
	createPhase.value = phase;
	createError.value = errorMessage;
};

const getTopicFromQuery = () => {
	const q = route.query.topic;
	return typeof q === 'string' ? q.trim() : '';
};

const pickIdea = (idea: string) => {
	topicInput.value = idea;
	startCreation();
};

const resetCreate = () => {
	topicInput.value = topicSubmitted.value;
	setPhase('topic');
};

const requestAndValidate = async (topic: string, review: boolean, context = ''): Promise<DynamicPage> => {
	setPhase('generating');
	const result = await requestPageGeneration(topic, { review, context });
	return result.page;
};

const getParentQuery = () => {
	const parentId = typeof route.query.parentId === 'string' ? route.query.parentId.trim() : '';
	const parentTitle = typeof route.query.parentTitle === 'string' ? route.query.parentTitle.trim() : '';
	const section = typeof route.query.section === 'string' ? route.query.section.trim() : '';
	return { parentId, parentTitle, section };
};

const createContext = () => {
	const { parentTitle: parentTitleValue, section } = getParentQuery();
	if (!parentTitleValue) return '';
	return section
		? `Este tema es un subtema de la página "${parentTitleValue}", dentro de la sección "${section}".`
		: `Este tema es un subtema de la página "${parentTitleValue}".`;
};

const save = async (page: DynamicPage, topic: string) => {
	if (!user.value) {
		setPhase('error', 'Debes iniciar sesión para guardar tu sección.');
		return null;
	}
	setPhase('saving');
	try {
		const { parentId, parentTitle: parentTitleValue, section } = getParentQuery();
		const id = await saveDynamicPage(user.value.uid, page, topic, {
			parentId: parentId || null,
			parentTitle: parentTitleValue,
			originSectionTitle: section,
		});
		router.replace({ name: 'dynamic-view', params: { pageId: id } });
		return id;
	} catch (e) {
		console.error(e);
		setPhase('error', 'No se pudo guardar la sección en tu cuenta. Intenta de nuevo.');
		return null;
	}
};

// ---- Modo editar ----
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
	if (!user.value || !validatedPage.value || editBusy.value) return;
	const instruction = editInstruction.value.trim();
	if (!instruction) return;

	editBusy.value = true;
	editError.value = '';
	editSuccess.value = false;

	try {
		const result = await requestPageEdit(validatedPage.value, instruction);
		const parsed = parseDynamicPage(result.page);
		if (!parsed.success) {
			editError.value = 'La página editada no pasó la validación. Intenta con otra instrucción.';
			return;
		}

		const pageId = typeof route.params.pageId === 'string' ? route.params.pageId : '';
		if (!pageId) {
			editError.value = 'No se pudo identificar la sección. Intenta de nuevo.';
			return;
		}

		await updateDynamicPage(user.value.uid, pageId, parsed.data);
		validatedPage.value = parsed.data;
		editSuccess.value = true;
		setTimeout(() => {
			if (editOpen.value) {
				editOpen.value = false;
				editSuccess.value = false;
			}
		}, 1200);
	} catch (e) {
		console.error(e);
		if (e instanceof PageGenerationClientError) {
			editError.value = e.message;
		} else {
			editError.value = 'Ocurrió un error al editar la sección. Intenta de nuevo.';
		}
	} finally {
		editBusy.value = false;
	}
};

const startCreation = async () => {
	if (!user.value) return;
	const topic = topicInput.value.trim();
	if (!topic || creating.value) return;

	topicSubmitted.value = topic;
	creating.value = true;
	setPhase('generating');

	try {
		const page = await requestAndValidate(topic, false, createContext());
		const parsedLocally = parseDynamicPage(page);
		if (parsedLocally.success) {
			await save(parsedLocally.data, topic);
		} else {
			setPhase('error', 'El servidor devolvió una página que no pasó la validación. Intenta de nuevo.');
		}
	} catch (e) {
		if (e instanceof PageGenerationClientError) {
			setPhase('error', e.message);
		} else {
			console.error(e);
			setPhase('error', 'Ocurrió un error inesperado. Intenta de nuevo.');
		}
	} finally {
		creating.value = false;
	}
};

// ---- Modo ver ----
const loadChildren = async (uid: string, pageId: string) => {
	try {
		const children = await listChildPages(uid, pageId);
		const sectionTitles = (validatedPage.value?.sections ?? []).map((section) => section.title.trim().toLowerCase());
		const next: Record<number, { topic: string; pageId: string }[]> = {};
		for (const child of children) {
			const origin = child.originSectionTitle.trim().toLowerCase();
			const index = sectionTitles.indexOf(origin);
			if (index < 0) continue;
			(next[index] ??= []).push({ topic: child.topic, pageId: child.id });
		}
		childrenBySection.value = next;
	} catch (e) {
		console.error(e);
	}
};

const ensureSuggestions = async (uid: string, pageId: string) => {
	const page = validatedPage.value;
	if (!page) return;
	const missing = page.sections.some((section) => (section.suggestions?.length ?? 0) === 0);
	if (!missing) return;

	try {
		const result = await requestSectionSuggestions(storedPage.value?.topic ?? '', page.sections);
		const updated: DynamicPage = {
			...page,
			sections: page.sections.map((section, index) => ({
				...section,
				suggestions:
					(section.suggestions?.length ?? 0) > 0
						? section.suggestions
						: result.suggestions[index] ?? section.suggestions,
			})),
		};

		const parsed = parseDynamicPage(updated);
		if (!parsed.success) return;

		validatedPage.value = parsed.data;
		await updateDynamicPage(uid, pageId, parsed.data);
	} catch (e) {
		console.error(e);
	}
};

const onPickSubtopic = ({ sectionIndex, sectionTitle, topic }: { sectionIndex: number; sectionTitle: string; topic: string }) => {
	if (!user.value || !validatedPage.value) return;
	const cleanTopic = topic.trim();
	if (!cleanTopic) return;

	const existing = (childrenBySection.value[sectionIndex] ?? []).find(
		(child) => child.topic.trim().toLowerCase() === cleanTopic.toLowerCase()
	);
	if (existing) {
		router.push({ name: 'dynamic-view', params: { pageId: existing.pageId } });
		return;
	}

	const pageId = typeof route.params.pageId === 'string' ? route.params.pageId : '';
	router.push({
		name: 'dynamic-create',
		query: {
			topic: cleanTopic,
			parentId: pageId,
			parentTitle: validatedPage.value.title,
			section: sectionTitle,
		},
	});
};

const loadPage = async () => {
	const uid = user.value?.uid;
	const pageId = typeof route.params.pageId === 'string' ? route.params.pageId : '';

	viewLoading.value = true;
	viewState.value = 'loading';
	validatedPage.value = null;
	storedPage.value = null;
	childrenBySection.value = {};
	viewError.value = '';

	if (!uid) {
		viewLoading.value = false;
		viewState.value = 'error';
		viewError.value = 'Inicia sesión para ver tus secciones.';
		return;
	}

	if (!pageId) {
		viewLoading.value = false;
		viewState.value = 'not-found';
		return;
	}

	try {
		const page = await getDynamicPage(uid, pageId);
		if (!page) {
			viewState.value = 'not-found';
			return;
		}

		storedPage.value = {
			schemaVersion: page.schemaVersion,
			topic: page.topic,
			parentId: page.parentId,
			parentTitle: page.parentTitle,
		};

		if (page.schemaVersion !== 1) {
			viewState.value = 'unsupported';
			return;
		}

		const parsed = parseDynamicPage(page.data);
		if (!parsed.success) {
			viewState.value = 'error';
			viewError.value = 'Esta sección está corrupta y no puede mostrarse.';
			return;
		}

		validatedPage.value = parsed.data;
		viewState.value = 'ready';

		void loadChildren(uid, pageId);
		void ensureSuggestions(uid, pageId);
	} catch (e) {
		console.error(e);
		viewState.value = 'error';
		viewError.value = 'No se pudo conectar con el servidor. Intenta de nuevo.';
	} finally {
		viewLoading.value = false;
	}
};

watch(
	() => route.params.pageId,
	() => {
		if (mode.value === 'view') {
			loadPage();
		}
	}
);

watch(
	() => route.query.topic,
	(q) => {
		if (mode.value === 'create' && typeof q === 'string' && q.trim()) {
			topicInput.value = q.trim();
		}
	},
	{ immediate: true }
);

watch(
	() => user.value,
	(u) => {
		if (!u && mode.value === 'view') {
			viewState.value = 'error';
			viewError.value = 'Inicia sesión para ver tus secciones.';
		}
		if (u) {
			loadPage();
		}
	}
);

if (mode.value === 'create') {
	const initial = getTopicFromQuery();
	if (initial) {
		topicInput.value = initial;
	}
} else {
	loadPage();
}
</script>

<style scoped>
.page-shell {
	max-width: 720px;
	margin: 0 auto;
	padding: 12px 20px 48px;
}

/* ---------- Crear ---------- */
.header-edit-btn {
	min-height: 36px;
	color: var(--mt-accent);
}

.header-edit-btn::part(native) {
	padding: 0 6px;
}

.create-head {
	padding: 20px 0 22px;
}

.create-head__desc {
	margin: 12px 0 0;
	max-width: 50ch;
}

.panel {
	background: var(--mt-surface);
	border: 1px solid var(--mt-line);
	border-radius: var(--radius-card);
	padding: 18px;
	box-shadow: var(--shadow-soft);
}

.panel__input {
	--background: var(--mt-muted);
}

.panel__submit {
	margin-top: 12px;
	width: 100%;
}

.create-hints {
	margin-top: 28px;
}

.create-hints__label {
	margin: 0 0 12px;
	padding: 0 2px;
	font-size: 13px;
	font-weight: 600;
	letter-spacing: 0.06em;
	text-transform: uppercase;
	color: var(--mt-ink-3);
}

.create-hints__chips {
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
}

.chip-btn {
	min-height: 36px;
	padding: 0 14px;
	border: 1px solid var(--mt-line);
	border-radius: 999px;
	background: var(--mt-surface);
	color: var(--mt-ink-2);
	font-family: var(--font-sans);
	font-size: 13.5px;
	font-weight: 500;
	cursor: pointer;
	transition: border-color 0.15s ease, color 0.15s ease;
}

.chip-btn:hover {
	border-color: var(--mt-line-strong);
	color: var(--mt-ink);
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

.generating {
	gap: 12px;
}

.generating__orb {
	width: 56px;
	height: 56px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 17px;
	background: var(--mt-accent-soft);
	color: var(--mt-accent);
	margin-bottom: 8px;
}

.generating__orb .app-spinner {
	width: 26px;
	height: 26px;
	color: var(--mt-accent);
}

/* ---------- Contenido generado ---------- */
.dp-parent-kicker {
	margin: 0 0 10px;
	font-size: 12px;
	font-weight: 600;
	letter-spacing: 0.06em;
	text-transform: uppercase;
	color: var(--mt-accent);
}

.dp-blocks {
	display: flex;
	flex-direction: column;
	gap: 24px;
	margin-top: 16px;
}

.dp-block-group {
	display: flex;
	flex-direction: column;
	gap: 14px;
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

:global(.edit-modal .edit-sheet) {
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	background: var(--mt-canvas);
}

@media (min-width: 600px) {
	:global(.edit-modal) {
		--height: 100%;
		--border-radius: 24px 24px 0 0;
		margin: auto auto 0;
	}
}
</style>
