<template>
	<AppPage>
		<AppHeader :title="categoria?.nombre ?? 'Temas'" back="/enciclopedia">
			<template #end>
				<AppButton
					variant="clear"
					icon-only
					class="header-add-btn"
					aria-label="Agregar tema"
					@click="openAdd"
				>
					<template #start>
						<AppIcon :icon="add" />
					</template>
				</AppButton>
			</template>
		</AppHeader>

		<main class="app-content">
			<div class="page-shell">
				<header class="page-head" v-if="categoria">
					<p class="mt-kicker">Categoría</p>
					<div class="page-head__title-row">
						<span
							class="page-head__icon"
							:style="{ background: colorize(categoria.color).bg, color: categoria.color }"
						>
							<AppIcon :icon="iconOf(categoria.icon)" />
						</span>
						<div>
							<h1 class="mt-h-display page-head__title">{{ categoria.nombre }}</h1>
							<p class="mt-label page-head__count">
								{{ temas.length }} tema{{ temas.length === 1 ? '' : 's' }}
							</p>
						</div>
					</div>
					<p class="mt-body page-head__desc">{{ categoria.descripcion }}</p>
				</header>

				<div class="add-card" v-if="user">
					<p class="add-card__text">
						¿No encuentras un tema? Agrégalo y el asistente preparará su artículo.
					</p>
					<button type="button" class="add-card__btn" @click="openAdd">
						<AppIcon :icon="sparkles" />
						<span>Agregar tema</span>
					</button>
				</div>

				<div class="section-area">
					<!-- Cargando -->
					<div v-if="loading" class="loading-row">
						<AppSpinner class="spinner-primary" />
						<p class="loading-row__text">Cargando temas…</p>
					</div>

					<!-- Error -->
					<div v-else-if="error" class="state-block">
						<div class="state-block__icon state-block__icon--danger">
							<AppIcon :icon="warningOutline" />
						</div>
						<p class="state-block__title">No se pudieron cargar los temas</p>
						<p class="state-block__hint">{{ error }}</p>
						<AppButton class="state-block__cta" @click="load">
							<template #start>
								<AppIcon :icon="refresh" />
							</template>
							Reintentar
						</AppButton>
					</div>

					<!-- Vacío -->
					<div v-else-if="temas.length === 0" class="state-block">
						<div class="state-block__icon">
							<AppIcon :icon="bookOutline" />
						</div>
						<p class="state-block__title">Esta categoría no tiene temas aún</p>
						<p class="state-block__hint">Agrega el primero y el asistente lo preparará para ti.</p>
					</div>

					<!-- Lista -->
					<div class="group-list" v-else>
						<router-link
							v-for="t in temas"
							:key="t.id"
							:to="`/enciclopedia/tema/${t.id}`"
							class="topic-row"
						>
							<span class="topic-row__dot" :class="{ 'topic-row__dot--custom': t.source === 'custom' }"></span>
							<div class="topic-row__main">
								<p class="topic-row__name">
									{{ t.nombre }}
									<span v-if="t.source === 'custom'" class="topic-row__badge">Tuyo</span>
								</p>
								<p class="topic-row__desc">{{ t.descripcion }}</p>
							</div>
							<button
								v-if="t.source === 'custom'"
								type="button"
								class="topic-row__remove"
								:aria-label="`Eliminar ${t.nombre}`"
								@click.prevent.stop="removeTema(t)"
							>
								<AppIcon :icon="trashOutline" />
							</button>
							<AppIcon class="topic-row__chevron" :icon="chevronForward" />
						</router-link>
					</div>
				</div>
			</div>
		</main>

		<!-- Modal: agregar tema -->
		<AppModal v-model="addOpen">
			<AppHeader title="Agregar tema" :menu="false">
				<template #end>
					<AppButton :disabled="adding" @click="closeAdd">Cerrar</AppButton>
				</template>
			</AppHeader>

			<main class="app-content">
				<div class="add-panel">
					<p class="add-panel__intro">
						Escribe el tema que quieres aprender en esta categoría. El asistente
						preparará un artículo educativo y quedará guardado en tu cuenta.
					</p>

					<AppInput
						v-model="newTemaNombre"
						:disabled="adding"
						class="add-panel__input"
						type="text"
						placeholder="Ej. Recursión, APIs REST, índices…"
						@keyup.enter="submitTema"
					/>

					<AppTextarea
						v-model="newTemaDescripcion"
						:disabled="adding"
						class="add-panel__input"
						placeholder="Descripción breve del tema (opcional)"
					/>

					<div v-if="addError" class="add-panel__status add-panel__status--error">
						<AppIcon :icon="warningOutline" />
						<span>{{ addError }}</span>
					</div>

					<div class="add-panel__busy" v-if="adding">
						<AppSpinner />
						<span>Guardando tema…</span>
					</div>

					<AppButton
						class="add-panel__submit"
						:disabled="!newTemaNombre.trim() || adding"
						@click="submitTema"
					>
						<template #start>
							<AppIcon :icon="sparkles" />
						</template>
						Guardar y ver artículo
					</AppButton>
				</div>
			</main>
		</AppModal>
	</AppPage>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import {
	add,
	bookOutline,
	chevronForward,
	cloudOutline,
	codeSlashOutline,
	gitBranchOutline,
	layersOutline,
	phonePortraitOutline,
	refresh,
	schoolOutline,
	serverOutline,
	shieldCheckmarkOutline,
	sparkles,
	trashOutline,
	warningOutline,
} from 'ionicons/icons';
import { getAuth, onAuthStateChanged, type User } from 'firebase/auth';
import { categoriasEnciclopedia, temasEnciclopedia } from '../data/enciclopedia';
import type { CategoriaEnciclopedia, TemaEnciclopedia } from '../data/enciclopedia';
import {
	deleteEnciclopediaTema,
	listEnciclopediaTemas,
	saveEnciclopediaTema,
	type StoredEnciclopediaTema,
} from '../services/enciclopediaTopics';
import { deleteEnciclopediaArticle } from '../services/enciclopediaArticulos';
import AppPage from '../components/ui/AppPage.vue';
import AppHeader from '../components/ui/AppHeader.vue';
import AppButton from '../components/ui/AppButton.vue';
import AppIcon from '../components/ui/AppIcon.vue';
import AppInput from '../components/ui/AppInput.vue';
import AppTextarea from '../components/ui/AppTextarea.vue';
import AppSpinner from '../components/ui/AppSpinner.vue';
import AppModal from '../components/ui/AppModal.vue';

type TemasRow = (TemaEnciclopedia | StoredEnciclopediaTema) & { source: 'preset' | 'custom' };

const iconMap: Record<string, any> = {
	school: schoolOutline,
	codeSlash: codeSlashOutline,
	server: serverOutline,
	layers: layersOutline,
	gitBranch: gitBranchOutline,
	cloud: cloudOutline,
	shieldCheckmark: shieldCheckmarkOutline,
	phonePortrait: phonePortraitOutline,
};

const iconOf = (name: string) => iconMap[name] ?? bookOutline;

const colorize = (hex: string) => ({
	bg: `${hex}1a`,
	color: hex,
});

const route = useRoute();
const router = useRouter();

const user = ref<User | null>(getAuth().currentUser);

const categoria = computed<CategoriaEnciclopedia | undefined>(() =>
	categoriasEnciclopedia.find((c) => c.id === route.params.id)
);

const customTemas = ref<StoredEnciclopediaTema[]>([]);
const loading = ref(false);
const error = ref('');

const temas = computed<TemasRow[]>(() => {
	const catId = categoria.value?.id;
	if (!catId) return [];
	const presets: TemasRow[] = temasEnciclopedia
		.filter((t) => t.categoriaId === catId)
		.map((t) => ({ ...t, source: 'preset' }));
	const customs: TemasRow[] = customTemas.value
		.filter((t) => t.categoriaId === catId)
		.map((t) => ({ ...t, source: 'custom' }));
	return [...presets, ...customs];
});

// ---- Estado de agregar ----
const addOpen = ref(false);
const adding = ref(false);
const addError = ref('');
const newTemaNombre = ref('');
const newTemaDescripcion = ref('');

const openAdd = () => {
	addError.value = '';
	newTemaNombre.value = '';
	newTemaDescripcion.value = '';
	addOpen.value = true;
};

const closeAdd = () => {
	if (adding.value) return;
	addOpen.value = false;
	addError.value = '';
};

const submitTema = async () => {
	if (!user.value || !categoria.value || adding.value) return;
	const nombre = newTemaNombre.value.trim();
	if (!nombre) return;

	adding.value = true;
	addError.value = '';

	try {
		const pregunta = `Explícame qué es ${nombre} y cómo funciona, con claridad y ejemplos sencillos.`;
		const descripcion =
			newTemaDescripcion.value.trim() ||
			`Todo lo que necesitas saber sobre ${nombre}.`;
		const id = await saveEnciclopediaTema(user.value.uid, {
			nombre,
			descripcion,
			categoriaId: categoria.value.id,
			pregunta,
		});
		loading.value = true;
		try {
			customTemas.value = await listEnciclopediaTemas(user.value.uid);
		} finally {
			loading.value = false;
		}
		closeAdd();
		router.push(`/enciclopedia/tema/${id}`);
	} catch (e) {
		console.error(e);
		addError.value = 'No se pudo guardar el tema. Revisa tu conexión e intenta de nuevo.';
	} finally {
		adding.value = false;
	}
};

const removeTema = async (t: TemasRow) => {
	if (!user.value) return;
	const confirmed = window.confirm(`¿Eliminar "${t.nombre}" de tu enciclopedia?`);
	if (!confirmed) return;

	try {
		await deleteEnciclopediaTema(user.value.uid, t.id);
		await deleteEnciclopediaArticle(user.value.uid, t.id);
		customTemas.value = customTemas.value.filter((ct) => ct.id !== t.id);
	} catch (e) {
		console.error(e);
		error.value = 'No se pudo eliminar el tema. Intenta de nuevo.';
	}
};

const load = async () => {
	const uid = user.value?.uid;
	if (!uid) return;

	loading.value = true;
	error.value = '';
	try {
		customTemas.value = await listEnciclopediaTemas(uid);
	} catch (e) {
		console.error(e);
		error.value = 'No se pudieron cargar tus temas personalizados.';
	} finally {
		loading.value = false;
	}
};

watch(
	() => user.value,
	(u) => {
		if (u) {
			load();
		} else {
			customTemas.value = [];
		}
	}
);

watch(
	() => route.params.id,
	() => {
		addError.value = '';
		newTemaNombre.value = '';
		newTemaDescripcion.value = '';
	}
);

if (user.value) {
	load();
}

onMounted(() => {
	if (user.value) {
		load();
	}
});

let unsubAuth: (() => void) | null = null;
unsubAuth = onAuthStateChanged(getAuth(), (current) => {
	if (current?.uid !== user.value?.uid) {
		user.value = current as User | null;
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

.header-add-btn {
	min-height: 36px;
	--color: var(--mt-accent);
}

.header-add-btn::part(native) {
	padding: 0 8px;
}

.page-head {
	padding: 20px 0 24px;
}

.page-head__title-row {
	display: flex;
	align-items: center;
	gap: 16px;
	margin-top: 14px;
}

.page-head__icon {
	width: 56px;
	height: 56px;
	flex-shrink: 0;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border-radius: 17px;
}

.page-head__icon .app-icon {
	font-size: 28px;
}

.page-head__title {
	margin: 0;
}

.page-head__count {
	margin: 6px 0 0;
}

.page-head__desc {
	margin: 16px 0 0;
	max-width: 52ch;
}

/* ---------- Agregar ---------- */
.add-card {
	display: flex;
	align-items: center;
	gap: 12px;
	padding: 14px 16px;
	margin-bottom: 24px;
	border: 1px dashed var(--mt-line-strong);
	border-radius: var(--radius-card);
	background: var(--mt-muted);
}

.add-card__text {
	flex: 1;
	min-width: 0;
	margin: 0;
	font-size: 13px;
	line-height: 1.5;
	color: var(--mt-ink-2);
}

.add-card__btn {
	display: inline-flex;
	align-items: center;
	gap: 6px;
	flex-shrink: 0;
	min-height: 38px;
	padding: 0 14px;
	border: none;
	border-radius: 12px;
	background: var(--mt-accent);
	color: #fff;
	font-family: var(--font-sans);
	font-size: 13.5px;
	font-weight: 600;
	cursor: pointer;
}

.add-card__btn .app-icon {
	font-size: 16px;
}

/* ---------- Estados ---------- */
.loading-row {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 12px;
	padding: 32px 16px;
}

.loading-row__text {
	margin: 0;
	font-size: 13.5px;
	color: var(--mt-ink-3);
}

.spinner-primary {
	--color: var(--mt-accent);
	width: 24px;
	height: 24px;
	margin-bottom: 4px;
}

.state-block {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 6px;
	text-align: center;
	padding: 40px 16px;
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
	max-width: 36ch;
	font-size: 13.5px;
	line-height: 1.55;
	color: var(--mt-ink-2);
}

.state-block__cta {
	margin-top: 16px;
	min-height: 44px;
}

.section-area {
	padding-top: 4px;
}

.group-list {
	background: var(--mt-surface);
	border: 1px solid var(--mt-line);
	border-radius: var(--radius-card);
	overflow: hidden;
}

.topic-row {
	display: flex;
	align-items: center;
	gap: 14px;
	min-height: 68px;
	padding: 12px 16px;
	text-decoration: none;
	transition: background 0.15s ease;
}

.topic-row + .topic-row {
	border-top: 1px solid var(--mt-line);
}

.topic-row:active {
	background: var(--mt-muted);
}

.topic-row__dot {
	width: 8px;
	height: 8px;
	flex-shrink: 0;
	border-radius: 999px;
	background: var(--mt-accent-soft);
}

.topic-row__dot--custom {
	background: var(--mt-accent);
}

.topic-row__main {
	flex: 1;
	min-width: 0;
}

.topic-row__name {
	margin: 0;
	font-size: 16px;
	font-weight: 600;
	letter-spacing: -0.012em;
	color: var(--mt-ink);
}

.topic-row__badge {
	display: inline-block;
	margin-left: 6px;
	padding: 2px 8px;
	border-radius: 999px;
	background: var(--mt-accent-soft);
	color: var(--mt-accent);
	font-size: 10.5px;
	font-weight: 700;
	letter-spacing: 0.02em;
	vertical-align: 1px;
}

.topic-row__desc {
	margin: 4px 0 0;
	font-size: 13px;
	line-height: 1.45;
	color: var(--mt-ink-2);
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.topic-row__remove {
	width: 34px;
	height: 34px;
	flex-shrink: 0;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border: none;
	border-radius: 10px;
	background: transparent;
	color: var(--mt-ink-3);
	cursor: pointer;
	transition: background 0.15s ease, color 0.15s ease;
}

.topic-row__remove .app-icon {
	font-size: 16px;
}

@media (hover: hover) {
	.topic-row__remove:hover {
		background: color-mix(in srgb, var(--mt-danger) 12%, transparent);
		color: var(--mt-danger);
	}
}

.topic-row__chevron {
	font-size: 15px;
	color: var(--mt-ink-3);
	opacity: 0.6;
}

/* ---------- Modal: agregar ---------- */
.add-panel {
	max-width: 560px;
	margin: 0 auto;
	padding: 18px 20px 32px;
	display: flex;
	flex-direction: column;
	gap: 14px;
}

.add-panel__intro {
	margin: 0;
	font-size: 13.5px;
	line-height: 1.6;
	color: var(--mt-ink-2);
}

.add-panel__input {
	--background: var(--mt-muted);
	--padding-start: 14px;
	--padding-end: 14px;
	border-radius: var(--radius-box);
}

.add-panel__status {
	display: flex;
	align-items: flex-start;
	gap: 8px;
	padding: 12px 14px;
	border-radius: var(--radius-box);
	font-size: 13.5px;
	line-height: 1.5;
}

.add-panel__status .app-icon {
	flex-shrink: 0;
	margin-top: 1px;
	font-size: 17px;
}

.add-panel__status--error {
	background: color-mix(in srgb, var(--mt-danger) 9%, var(--mt-surface));
	border: 1px solid color-mix(in srgb, var(--mt-danger) 22%, var(--mt-line));
	color: var(--mt-danger);
}

.add-panel__busy {
	display: flex;
	align-items: center;
	gap: 10px;
	padding: 12px 14px;
	border-radius: var(--radius-box);
	background: var(--mt-muted);
	font-size: 13.5px;
	color: var(--mt-ink-2);
}

.add-panel__busy .app-spinner {
	width: 18px;
	height: 18px;
	flex-shrink: 0;
	color: var(--mt-accent);
}

.add-panel__submit {
	width: 100%;
	margin-top: 4px;
}

:global(.add-modal) {
	--width: 100%;
	--height: 100%;
	--border-radius: 0;
	--max-width: 560px;
	--backdrop-opacity: 0.3;
	--background: var(--mt-canvas);
}

@media (min-width: 600px) {
	:global(.add-modal) {
		--height: 100%;
		--border-radius: 24px 24px 0 0;
		margin: auto auto 0;
	}
}
</style>
