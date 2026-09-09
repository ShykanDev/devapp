<template>
	<ion-app>
		<ion-router-outlet v-if="isAuthRoute" id="main-content"></ion-router-outlet>

		<ion-split-pane v-else content-id="main-content" class="app-shell">
			<ion-menu content-id="main-content" side="start" type="overlay" class="app-menu">
				<ion-content class="app-menu__content">
					<div class="app-menu__brand">
						<span class="app-menu__mark" aria-hidden="true">
							<svg viewBox="0 0 24 24" width="16" height="16">
								<path
									d="M10.5 3.2h3v7.3h7.3v3h-7.3v7.3h-3v-7.3H3.2v-3h7.3V3.2z"
									fill="#ffffff"
								/>
							</svg>
						</span>
						<div class="app-menu__brand-text">
							<span class="app-menu__brand-name">MediApp</span>
							<span class="app-menu__brand-tag">Tu espacio de salud</span>
						</div>
					</div>

					<div class="app-menu__nav">
						<ion-menu-toggle :auto-hide="false" v-for="p in appPages" :key="p.url">
							<router-link
								:to="p.url"
								class="app-menu__link"
								:class="{ 'app-menu__link--active': selectedUrl === p.url }"
							>
								<ion-icon :icon="p.iosIcon" slot="start"></ion-icon>
								<span class="app-menu__link-label">{{ p.title }}</span>
								<span class="app-menu__link-dot" aria-hidden="true"></span>
							</router-link>
						</ion-menu-toggle>
					</div>

					<div class="app-menu__theme">
						<button
							type="button"
							class="app-menu__theme-btn"
							role="switch"
							:aria-checked="isDark"
							@click="toggleTheme()"
						>
							<span class="app-menu__theme-icon" aria-hidden="true">
								<ion-icon :icon="isDark ? moon : sunny"></ion-icon>
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
							Tus secciones creadas con IA se guardan de forma segura en tu cuenta.
						</span>
					</div>
				</ion-content>
			</ion-menu>

			<ion-router-outlet id="main-content"></ion-router-outlet>
		</ion-split-pane>
	</ion-app>
</template>

<script setup lang="ts">
import {
	IonApp,
	IonContent,
	IonIcon,
	IonMenu,
	IonMenuToggle,
	IonRouterOutlet,
	IonSplitPane,
} from '@ionic/vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import {
	bookOutline,
	chatbubbleOutline,
	clipboardOutline,
	libraryOutline,
	moon,
	sunny,
} from 'ionicons/icons';
import { toggleTheme, useTheme } from './theme/store';

const { isDark } = useTheme();

const route = useRoute();
const isAuthRoute = computed(() => route.path.startsWith('/login'));

const appPages = [
	{
		title: 'Chat',
		url: '/folder/chat',
		iosIcon: chatbubbleOutline,
	},
	{
		title: 'Enciclopedia',
		url: '/enciclopedia',
		iosIcon: bookOutline,
	},
	{
		title: 'Exámenes',
		url: '/examenes',
		iosIcon: clipboardOutline,
	},
	{
		title: 'Mis secciones',
		url: '/mis-secciones',
		iosIcon: libraryOutline,
	},
];

const selectedUrl = computed(
	() =>
		appPages.find((p) => route.path.startsWith(p.url))?.url ??
		route.path
);
</script>

<style scoped>
.app-shell {
	--side-width: 272px;
	--side-max-width: 272px;
}

:global(ion-router-outlet) {
	--background: var(--mt-canvas);
}

.app-menu {
	--width: 272px;
	--background: var(--mt-surface);
	--border-width: 0px;
}

.app-menu ion-menu-toggle {
	display: block;
}

.app-menu__content {
	--background: var(--mt-surface);
	--padding-top: 0;
}

.app-menu__content::part(scroll) {
	display: flex;
	flex-direction: column;
	min-height: 100%;
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
	gap: 12px;
	min-height: 48px;
	padding: 0 14px;
	border-radius: 13px;
	text-decoration: none;
	transition: background 0.15s ease;
}

.app-menu__link ion-icon {
	font-size: 21px;
	color: var(--mt-ink-2);
	flex-shrink: 0;
}

.app-menu__link-label {
	flex: 1;
	font-size: 15.5px;
	font-weight: 500;
	letter-spacing: -0.01em;
	color: var(--mt-ink);
}

.app-menu__link-dot {
	width: 6px;
	height: 6px;
	border-radius: 999px;
	background: transparent;
}

.app-menu__link:hover {
	background: color-mix(in srgb, var(--mt-ink) 4%, transparent);
}

.app-menu__link--active {
	background: var(--mt-accent-soft);
}

.app-menu__link--active ion-icon {
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
	gap: 12px;
	width: 100%;
	min-height: 48px;
	padding: 0 14px;
	border: none;
	border-radius: 13px;
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

.app-menu__theme-icon ion-icon {
	font-size: 21px;
}

.app-menu__theme-label {
	flex: 1;
	text-align: left;
	font-size: 15.5px;
	font-weight: 500;
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
	margin-top: 0;
	padding: 20px;
}

.app-menu__foot-note {
	font-size: 11.5px;
	line-height: 1.55;
	color: var(--mt-ink-3);
}

@media (min-width: 768px) {
	.app-menu {
		border-right: 1px solid var(--mt-line);
	}
}
</style>
