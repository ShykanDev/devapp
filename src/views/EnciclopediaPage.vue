<template>
	<ion-page>
		<ion-header :translucent="true" class="app-header">
			<ion-toolbar>
				<ion-buttons slot="start">
					<ion-menu-button></ion-menu-button>
				</ion-buttons>
				<ion-title>Enciclopedia</ion-title>
			</ion-toolbar>
		</ion-header>

		<ion-content>
			<div class="page-shell">
				<header class="page-head">
					<p class="mt-kicker">Enciclopedia médica</p>
					<h1 class="mt-h-display">Aprende sobre tu salud</h1>
					<p class="mt-body page-head__desc">
						Explicaciones claras, con base científica, preparadas para ti.
					</p>
				</header>

				<!-- Buscador -->
				<div class="search-well">
					<ion-icon :icon="searchOutline" class="search-well__icon"></ion-icon>
					<ion-input
						v-model="searchTerm"
						class="search-well__input"
						placeholder="Buscar un tema…"
					></ion-input>
					<button
						v-if="searchTerm.trim()"
						type="button"
						class="search-well__clear"
						aria-label="Limpiar búsqueda"
						@click="searchTerm = ''"
					>
						<ion-icon :icon="close"></ion-icon>
					</button>
				</div>

				<!-- Resultados -->
				<template v-if="searchTerm.trim()">
					<div v-if="searchResults.length > 0" class="result-block">
						<p class="mt-label">{{ searchResults.length }} resultado{{ searchResults.length === 1 ? '' : 's' }}</p>
						<div class="group-list">
							<router-link
								v-for="t in searchResults"
								:key="t.id"
								:to="`/enciclopedia/tema/${t.id}`"
								class="result-row"
							>
								<div class="result-row__main">
									<p class="result-row__title">{{ t.nombre }}</p>
									<p class="result-row__desc">{{ t.descripcion }}</p>
								</div>
								<span
									class="result-row__chip"
									:style="{ color: categoryColorOf(t.categoriaId) }"
								>
									{{ categoryNameOf(t.categoriaId) }}
								</span>
								<ion-icon class="result-row__chevron" :icon="chevronForward"></ion-icon>
							</router-link>
						</div>
					</div>

					<div v-else class="no-results">
						<div class="no-results__icon">
							<ion-icon :icon="searchOutline"></ion-icon>
						</div>
						<p class="no-results__title">Sin resultados</p>
						<p class="no-results__hint">
							No encontramos nada para «{{ searchTerm }}». Prueba con otra palabra.
						</p>
					</div>
				</template>

				<!-- Categorías -->
				<template v-else>
					<div class="section-area">
						<p class="section-label">Explorar por categoría</p>
						<div class="group-list">
							<router-link
								v-for="cat in categoriasEnciclopedia"
								:key="cat.id"
								:to="`/enciclopedia/categoria/${cat.id}`"
								class="cat-row"
							>
								<span
									class="cat-row__icon"
									:style="{
										background: colorize(cat.color).bg,
										color: cat.color,
									}"
								>
									<ion-icon :icon="iconOf(cat.icon)"></ion-icon>
								</span>
								<div class="cat-row__main">
									<p class="cat-row__name">{{ cat.nombre }}</p>
									<p class="cat-row__desc">{{ cat.descripcion }}</p>
								</div>
								<span class="cat-row__count">{{ temasDe(cat.id).length }}</span>
								<ion-icon class="cat-row__chevron" :icon="chevronForward"></ion-icon>
							</router-link>
						</div>
					</div>
				</template>
			</div>
		</ion-content>
	</ion-page>
</template>

<script setup lang="ts">
import {
	IonButtons,
	IonContent,
	IonHeader,
	IonIcon,
	IonInput,
	IonMenuButton,
	IonPage,
	IonTitle,
	IonToolbar,
} from '@ionic/vue';
import { computed, onBeforeUnmount, ref } from 'vue';
import { onIonViewWillEnter } from '@ionic/vue';
import {
	bandage,
	body,
	book,
	chevronForward,
	close,
	happy,
	heart,
	medkit,
	nutrition,
	pulse,
	searchOutline,
	shieldCheckmark,
} from 'ionicons/icons';
import { categoriasEnciclopedia, temasEnciclopedia } from '../data/enciclopedia';
import type { CategoriaEnciclopedia } from '../data/enciclopedia';
import { getAuth, onAuthStateChanged, type User } from 'firebase/auth';
import {
	listEnciclopediaTemas,
	type StoredEnciclopediaTema,
} from '../services/enciclopediaTopics';

const iconMap: Record<string, any> = {
	body,
	book,
	heart,
	happy,
	nutrition,
	bandage,
	medkit,
	pulse,
	shieldCheckmark,
};

const iconOf = (name: string) => iconMap[name] ?? book;

const searchTerm = ref('');

const user = ref<User | null>(getAuth().currentUser);
const customTemas = ref<StoredEnciclopediaTema[]>([]);

const allTemas = computed(() => [...temasEnciclopedia, ...customTemas.value]);

const searchResults = computed(() => {
	const q = searchTerm.value.trim().toLowerCase();
	if (!q) return [];
	return allTemas.value.filter(
		(t) =>
			t.nombre.toLowerCase().includes(q) ||
			t.descripcion.toLowerCase().includes(q) ||
			categoriaDe(t.categoriaId).nombre.toLowerCase().includes(q)
	);
});

const temasDe = (categoriaId: string) => allTemas.value.filter((t) => t.categoriaId === categoriaId);

const categoriaDe = (categoriaId: string): CategoriaEnciclopedia =>
	categoriasEnciclopedia.find((c) => c.id === categoriaId) ?? categoriasEnciclopedia[0];

const categoryNameOf = (categoriaId: string) => categoriaDe(categoriaId).nombre;
const categoryColorOf = (categoriaId: string) => categoriaDe(categoriaId).color;

const colorize = (hex: string) => ({
	bg: `${hex}1a`,
	color: hex,
});

const loadCustomTemas = async () => {
	const uid = user.value?.uid;
	if (!uid) return;
	try {
		customTemas.value = await listEnciclopediaTemas(uid);
	} catch (e) {
		console.error(e);
	}
};

let unsubAuth: (() => void) | null = null;
unsubAuth = onAuthStateChanged(getAuth(), (current) => {
	if (current?.uid !== user.value?.uid) {
		user.value = current as User | null;
		if (current) {
			loadCustomTemas();
		} else {
			customTemas.value = [];
		}
	}
});

onBeforeUnmount(() => {
	unsubAuth?.();
});

if (user.value) {
	loadCustomTemas();
}

onIonViewWillEnter(() => {
	if (user.value) {
		loadCustomTemas();
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
	max-width: 44ch;
}

/* ---------- Buscador ---------- */
.search-well {
	display: flex;
	align-items: center;
	gap: 10px;
	background: var(--mt-muted);
	border-radius: 15px;
	padding: 0 6px 0 14px;
	margin-bottom: 30px;
}

.search-well__icon {
	font-size: 18px;
	color: var(--mt-ink-3);
	flex-shrink: 0;
}

.search-well__input {
	--background: transparent;
	--placeholder-color: var(--mt-ink-3);
	min-height: 48px;
	padding-left: 0;
	flex: 1;
}

.search-well__clear {
	width: 34px;
	height: 34px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border: none;
	border-radius: 999px;
	background: transparent;
	color: var(--mt-ink-3);
	cursor: pointer;
	flex-shrink: 0;
}

.search-well__clear ion-icon {
	font-size: 16px;
}

/* ---------- Secciones ---------- */
.section-area {
	padding-top: 4px;
}

.section-label,
.mt-label {
	margin: 0 0 12px;
	padding: 0 2px;
}

/* ---------- Categorías ---------- */
.group-list {
	background: var(--mt-surface);
	border: 1px solid var(--mt-line);
	border-radius: var(--radius-card);
	overflow: hidden;
}

.cat-row {
	display: flex;
	align-items: center;
	gap: 14px;
	min-height: 76px;
	padding: 12px 16px 12px 14px;
	text-decoration: none;
	transition: background 0.15s ease;
}

.cat-row + .cat-row {
	border-top: 1px solid var(--mt-line);
}

.cat-row:active {
	background: var(--mt-muted);
}

.cat-row__icon {
	width: 44px;
	height: 44px;
	flex-shrink: 0;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border-radius: 13px;
}

.cat-row__icon ion-icon {
	font-size: 22px;
}

.cat-row__main {
	flex: 1;
	min-width: 0;
}

.cat-row__name {
	margin: 0;
	font-size: 16px;
	font-weight: 600;
	letter-spacing: -0.012em;
	color: var(--mt-ink);
}

.cat-row__desc {
	margin: 4px 0 0;
	font-size: 13px;
	line-height: 1.45;
	color: var(--mt-ink-2);
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.cat-row__count {
	font-size: 13px;
	font-weight: 600;
	color: var(--mt-ink-3);
	font-variant-numeric: tabular-nums;
}

.cat-row__chevron {
	font-size: 15px;
	color: var(--mt-ink-3);
	opacity: 0.6;
}

/* ---------- Resultados de búsqueda ---------- */
.result-row {
	display: flex;
	align-items: center;
	gap: 12px;
	min-height: 64px;
	padding: 10px 14px;
	text-decoration: none;
	transition: background 0.15s ease;
}

.result-row + .result-row {
	border-top: 1px solid var(--mt-line);
}

.result-row:active {
	background: var(--mt-muted);
}

.result-row__main {
	flex: 1;
	min-width: 0;
}

.result-row__title {
	margin: 0;
	font-size: 15.5px;
	font-weight: 600;
	letter-spacing: -0.01em;
	color: var(--mt-ink);
}

.result-row__desc {
	margin: 3px 0 0;
	font-size: 13px;
	color: var(--mt-ink-2);
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.result-row__chip {
	font-size: 11.5px;
	font-weight: 600;
	flex-shrink: 0;
}

.result-row__chevron {
	font-size: 15px;
	color: var(--mt-ink-3);
	opacity: 0.6;
}

.result-block {
	padding-top: 4px;
}

/* ---------- Sin resultados ---------- */
.no-results {
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	padding: 40px 16px;
}

.no-results__icon {
	width: 52px;
	height: 52px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 16px;
	background: var(--mt-muted);
	color: var(--mt-ink-3);
	margin-bottom: 14px;
}

.no-results__icon ion-icon {
	font-size: 24px;
}

.no-results__title {
	margin: 0;
	font-size: 16px;
	font-weight: 600;
	color: var(--mt-ink);
}

.no-results__hint {
	margin: 6px 0 0;
	max-width: 32ch;
	font-size: 13.5px;
	line-height: 1.55;
	color: var(--mt-ink-2);
}
</style>
