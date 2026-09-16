<template>
	<div v-if="isAuthRoute" class="app-auth">
		<router-view />
	</div>

	<div v-else class="app-shell">
		<aside class="app-menu" :class="{ 'app-menu--open': menuOpen }">
			<div class="app-menu__brand">
				<span class="app-menu__mark" aria-hidden="true">
					<svg viewBox="0 0 24 24" width="18" height="18">
						<path
							d="M9.4 6.6 4 12l5.4 5.4 1.5-1.5L7 12l3.9-3.9-1.5-1.5Zm5.2 0L19.4 12l-4.8 4.8-1.5-1.5L16.9 12l-3.8-3.9 1.5-1.5Z"
							fill="#ffffff"
						/>
					</svg>
				</span>
				<div class="app-menu__brand-text">
					<span class="app-menu__brand-name">DevApp</span>
					<span class="app-menu__brand-tag">Tu espacio de código</span>
				</div>
			</div>

			<nav class="app-menu__nav">
				<router-link
					v-for="p in appPages"
					:key="p.url"
					:to="p.url"
					class="app-menu__link"
					:class="{ 'app-menu__link--active': selectedUrl === p.url }"
					@click="closeMenu"
				>
					<AppIcon :icon="p.icon" :size="24" class="app-menu__link-icon" />
					<span class="app-menu__link-label">{{ p.title }}</span>
					<span class="app-menu__link-dot" aria-hidden="true"></span>
				</router-link>
			</nav>

			<div class="app-menu__theme">
				<button
					type="button"
					class="app-menu__theme-btn"
					role="switch"
					:aria-checked="isDark"
					@click="toggleTheme()"
				>
					<span class="app-menu__theme-icon" aria-hidden="true">
						<AppIcon :icon="isDark ? moon : sunny" :size="23" />
					</span>
					<span class="app-menu__theme-label">
						{{ isDark ? 'Modo oscuro' : 'Modo claro' }}
					</span>
					<span
						class="app-menu__theme-track"
						:class="{ 'app-menu__theme-track--on': isDark }"
						aria-hidden="true"
					>
						<span class="app-menu__theme-thumb"></span>
					</span>
				</button>
			</div>

			<div class="app-menu__foot">
				<span class="app-menu__foot-note">
					Tus secciones y exámenes creados con IA se guardan de forma segura en tu cuenta.
				</span>
			</div>
		</aside>

		<div v-if="menuOpen" class="app-scrim" @click="closeMenu" />

		<div class="app-main">
			<router-view />
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import {
	bookOutline,
	chatbubbleOutline,
	clipboardOutline,
	libraryOutline,
	moon,
	ribbonOutline,
	sunny,
} from 'ionicons/icons';
import AppIcon from './components/ui/AppIcon.vue';
import { closeMenu, menuOpen } from './components/ui/shell';
import { toggleTheme, useTheme } from './theme/store';

const { isDark } = useTheme();

const route = useRoute();
const isAuthRoute = computed(() => route.path.startsWith('/login'));

const appPages = [
	{ title: 'Chat', url: '/folder/chat', icon: chatbubbleOutline },
	{ title: 'Enciclopedia', url: '/enciclopedia', icon: bookOutline },
	{ title: 'Exámenes', url: '/examenes', icon: clipboardOutline },
	{ title: 'AI Practitioner', url: '/ai-practitioner', icon: ribbonOutline },
	{ title: 'Mis secciones', url: '/mis-secciones', icon: libraryOutline },
];

const selectedUrl = computed(
	() => appPages.find((p) => route.path.startsWith(p.url))?.url ?? route.path
);

watch(
	() => route.fullPath,
	() => closeMenu()
);
</script>

<style scoped>
.app-auth {
	height: 100dvh;
	display: flex;
	flex-direction: column;
}

.app-shell {
	display: flex;
	height: 100dvh;
	overflow: hidden;
}

.app-main {
	flex: 1 1 auto;
	min-width: 0;
	display: flex;
	flex-direction: column;
	height: 100dvh;
	overflow: hidden;
}

.app-main > * {
	flex: 1 1 auto;
	min-height: 0;
}

.app-menu {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	z-index: 60;
	display: flex;
	flex-direction: column;
	width: 272px;
	max-width: 82vw;
	padding-top: env(safe-area-inset-top, 0px);
	padding-bottom: env(safe-area-inset-bottom, 0px);
	background: var(--mt-surface);
	transform: translateX(-100%);
	transition: transform 0.22s ease;
	overflow-y: auto;
}

.app-menu--open {
	transform: translateX(0);
	box-shadow: var(--shadow-pop);
}

.app-scrim {
	position: fixed;
	inset: 0;
	z-index: 50;
	background: rgba(0, 0, 0, 0.42);
}

.app-menu__brand {
	display: flex;
	align-items: center;
	gap: 12px;
	padding: 24px 20px 20px;
}

.app-menu__mark {
	width: 34px;
	height: 34px;
	flex-shrink: 0;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border-radius: 10px;
	background: var(--mt-accent);
	color: #fff;
}

.app-menu__brand-text {
	display: flex;
	flex-direction: column;
	gap: 1px;
	min-width: 0;
}

.app-menu__brand-name {
	font-size: 17px;
	font-weight: 700;
	letter-spacing: -0.02em;
	color: var(--mt-ink);
}

.app-menu__brand-tag {
	font-size: 11.5px;
	color: var(--mt-ink-3);
}

.app-menu__nav {
	display: flex;
	flex-direction: column;
	gap: 3px;
	padding: 8px 12px;
	margin-top: 6px;
	border-top: 1px solid var(--mt-line);
}

.app-menu__link {
	display: flex;
	align-items: center;
	gap: 14px;
	min-height: 56px;
	padding: 0 16px;
	border-radius: 15px;
	text-decoration: none;
	transition: background 0.15s ease;
}

.app-menu__link-icon {
	color: var(--mt-ink-2);
}

.app-menu__link-label {
	flex: 1;
	font-size: 16.5px;
	font-weight: 600;
	letter-spacing: -0.01em;
	color: var(--mt-ink);
}

.app-menu__link-dot {
	width: 8px;
	height: 8px;
	border-radius: 999px;
	background: transparent;
}

.app-menu__link:hover {
	background: color-mix(in srgb, var(--mt-ink) 4%, transparent);
}

.app-menu__link--active {
	background: var(--mt-accent-soft);
}

.app-menu__link--active .app-menu__link-icon {
	color: var(--mt-accent);
}

.app-menu__link--active .app-menu__link-label {
	color: var(--mt-accent);
	font-weight: 600;
}

.app-menu__link--active .app-menu__link-dot {
	background: var(--mt-accent);
}

.app-menu__theme {
	margin-top: auto;
	padding: 10px 12px 2px;
	border-top: 1px solid var(--mt-line);
}

.app-menu__theme-btn {
	display: flex;
	align-items: center;
	gap: 14px;
	width: 100%;
	min-height: 54px;
	padding: 0 16px;
	border: none;
	border-radius: 15px;
	background: transparent;
	cursor: pointer;
	font-family: var(--font-sans);
	transition: background 0.15s ease;
}

.app-menu__theme-btn:hover {
	background: color-mix(in srgb, var(--mt-ink) 4%, transparent);
}

.app-menu__theme-icon {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 24px;
	flex-shrink: 0;
	color: var(--mt-ink-2);
}

.app-menu__theme-label {
	flex: 1;
	text-align: left;
	font-size: 16.5px;
	font-weight: 600;
	letter-spacing: -0.01em;
	color: var(--mt-ink);
}

.app-menu__theme-track {
	position: relative;
	width: 46px;
	height: 27px;
	flex-shrink: 0;
	border-radius: 999px;
	background: var(--mt-muted);
	border: 1px solid var(--mt-line-strong);
	transition: background 0.2s ease, border-color 0.2s ease;
}

.app-menu__theme-track--on {
	background: var(--mt-accent);
	border-color: var(--mt-accent);
}

.app-menu__theme-thumb {
	position: absolute;
	top: 2px;
	left: 2px;
	width: 21px;
	height: 21px;
	border-radius: 999px;
	background: #fff;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
	transition: transform 0.2s ease;
}

.app-menu__theme-track--on .app-menu__theme-thumb {
	transform: translateX(19px);
}

.app-menu__foot {
	padding: 20px;
}

.app-menu__foot-note {
	font-size: 11.5px;
	line-height: 1.55;
	color: var(--mt-ink-3);
}

@media (min-width: 768px) {
	.app-menu {
		position: static;
		transform: none;
		flex-shrink: 0;
		border-right: 1px solid var(--mt-line);
	}

	.app-scrim {
		display: none;
	}
}
</style>
