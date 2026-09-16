<template>
	<AppPage>
		<AppHeader title="Mis secciones" />

		<main class="app-content">
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
						<AppIcon :icon="lockClosedOutline" />
					</div>
					<p class="state-block__title">Inicia sesión para ver tus secciones</p>
					<p class="state-block__hint">Guarda tus páginas educativas en tu cuenta.</p>
					<AppButton class="state-block__cta" to="/login">Iniciar sesión</AppButton>
				</div>

				<!-- Cargando -->
				<div v-else-if="loading" class="state-block">
					<AppSpinner class="spinner-primary" />
					<p class="state-block__title">Cargando secciones…</p>
				</div>

				<!-- Error -->
				<div v-else-if="error" class="state-block">
					<div class="state-block__icon">
						<AppIcon :icon="warningOutline" />
					</div>
					<p class="state-block__title">No se pudieron cargar tus secciones</p>
					<p class="state-block__hint">{{ error }}</p>
					<AppButton class="state-block__cta" @click="loadPages">
						<template #start><AppIcon :icon="refresh" /></template>
						Reintentar
					</AppButton>
				</div>

				<!-- Vacío -->
				<div v-else-if="pages.length === 0" class="state-block">
					<div class="state-block__icon">
						<AppIcon :icon="libraryOutline" />
					</div>
					<p class="state-block__title">Todavía no tienes secciones</p>
					<p class="state-block__hint">
						Pídele al asistente en el chat que cree una sección para ti y aparecerá aquí.
					</p>
					<AppButton class="state-block__cta" to="/folder/chat">
						<template #start><AppIcon :icon="chatbubbleOutline" /></template>
						Ir al chat
					</AppButton>
				</div>

				<!-- Lista -->
				<div v-else class="section-area">
					<div class="section-head">
						<h2 class="section-head__title">{{ pages.length }} sección{{ pages.length === 1 ? '' : 'es' }}</h2>
						<button type="button" class="section-head__action" @click="goToChat">
							<AppIcon :icon="add" />
							<span>Nueva</span>
						</button>
					</div>

					<div class="page-list">
						<div
							v-for="node in visibleNodes"
							:key="node.page.id"
							class="page-row"
							:class="{ 'page-row--child': node.depth > 0 }"
							:style="{ paddingLeft: `${18 + node.depth * 22}px` }"
							role="link"
							tabindex="0"
							@click="openPage(node.page)"
							@keydown.enter="openPage(node.page)"
							@keydown.space.prevent="openPage(node.page)"
						>
							<button
								v-if="node.children.length"
								type="button"
								class="tree-toggle"
								:aria-label="collapsed.has(node.page.id) ? 'Expandir subtemas' : 'Ocultar subtemas'"
								@click.stop="toggleCollapsed(node.page.id)"
							>
								<AppIcon :icon="collapsed.has(node.page.id) ? chevronForward : chevronDown" />
							</button>
							<span v-else-if="node.depth > 0" class="tree-branch tree-branch--leaf">↳</span>
							<span v-else class="tree-branch" />

							<div class="page-row__main">
								<h3 class="page-row__title">
									{{ node.page.data.title }}
									<span v-if="node.depth > 0" class="page-row__badge">Subtema</span>
								</h3>
								<p class="page-row__meta">
									<span>{{ node.page.data.description }}</span>
								</p>
							</div>

							<div class="page-row__side">
								<span class="page-row__topic">{{ node.page.topic }}</span>
								<span class="page-row__date">{{ formatDate(node.page.updatedAt) }}</span>
							</div>

							<div class="page-row__actions">
								<button
									type="button"
									class="icon-btn"
									:class="{ 'icon-btn--spin': regeneratingId === node.page.id }"
									aria-label="Regenerar contenido"
									:disabled="regeneratingId === node.page.id"
									@click.stop="regenerate(node.page)"
								>
									<AppIcon :icon="refresh" />
								</button>
								<button
									type="button"
									class="icon-btn icon-btn--danger"
									aria-label="Eliminar sección"
									@click.stop="remove(node)"
								>
									<AppIcon :icon="trashOutline" />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	</AppPage>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import {
	add,
	chatbubbleOutline,
	chevronDown,
	chevronForward,
	libraryOutline,
	lockClosedOutline,
	refresh,
	trashOutline,
	warningOutline,
} from 'ionicons/icons';
import { getAuth, type User } from 'firebase/auth';
import AppButton from '../components/ui/AppButton.vue';
import AppHeader from '../components/ui/AppHeader.vue';
import AppIcon from '../components/ui/AppIcon.vue';
import AppPage from '../components/ui/AppPage.vue';
import AppSpinner from '../components/ui/AppSpinner.vue';
import {
	deleteDynamicPageTree,
	listDynamicPages,
	updateDynamicPage,
	type StoredDynamicPage,
} from '../services/dynamicPages';
import { requestPageGeneration, PageGenerationClientError } from '../lib/dynamicPage';
import { buildPageTree, countDescendants, flattenPageTree, type PageTreeNode } from '../lib/pageTree';
import { parseDynamicPage } from '../schemas/dynamicPage';
import { useRouter } from 'vue-router';

const router = useRouter();
const user = ref<User | null>(getAuth().currentUser);
const pages = ref<StoredDynamicPage[]>([]);
const loading = ref(false);
const error = ref('');
const regeneratingId = ref<string | null>(null);
const collapsed = ref<Set<string>>(new Set());

const tree = computed(() => buildPageTree(pages.value));
const visibleNodes = computed(() => flattenPageTree(tree.value, collapsed.value));

const toggleCollapsed = (id: string) => {
	const next = new Set(collapsed.value);
	if (next.has(id)) {
		next.delete(id);
	} else {
		next.add(id);
	}
	collapsed.value = next;
};

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

		await updateDynamicPage(user.value.uid, page.id, parsed.data);
		const target = pages.value.find((item) => item.id === page.id);
		if (target) {
			target.data = parsed.data;
		}
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

const remove = async (node: PageTreeNode) => {
	if (!user.value) return;
	const descendants = countDescendants(node);
	const message =
		descendants > 0
			? `¿Eliminar "${node.page.data.title}" y sus ${descendants} subtema${descendants === 1 ? '' : 's'}?`
			: `¿Eliminar "${node.page.data.title}"?`;
	if (!window.confirm(message)) return;

	try {
		await deleteDynamicPageTree(user.value.uid, node.page.id);
		const removed = new Set<string>([node.page.id]);
		const collect = (item: PageTreeNode) => {
			for (const child of item.children) {
				removed.add(child.page.id);
				collect(child);
			}
		};
		collect(node);
		pages.value = pages.value.filter((p) => !removed.has(p.id));
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

.section-head__action .app-icon {
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

.page-row--child {
	background: color-mix(in srgb, var(--mt-muted) 45%, transparent);
}

.tree-toggle {
	width: 26px;
	height: 26px;
	flex-shrink: 0;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border: none;
	border-radius: 8px;
	background: transparent;
	color: var(--mt-ink-3);
	cursor: pointer;
	transition: background 0.15s ease, color 0.15s ease;
}

.tree-toggle .app-icon {
	font-size: 16px;
}

@media (hover: hover) {
	.tree-toggle:hover {
		background: var(--mt-muted);
		color: var(--mt-ink-2);
	}
}

.tree-branch {
	width: 26px;
	flex-shrink: 0;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	color: var(--mt-ink-3);
	font-size: 14px;
}

.tree-branch--leaf {
	color: var(--mt-line-strong);
}

.page-row__badge {
	margin-left: 8px;
	padding: 2px 8px;
	border-radius: 999px;
	background: var(--mt-accent-soft);
	color: var(--mt-accent);
	font-size: 11px;
	font-weight: 600;
	letter-spacing: 0.02em;
	vertical-align: middle;
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

.icon-btn--spin .app-icon {
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

.state-block__icon .app-icon {
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
	color: var(--mt-accent);
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
