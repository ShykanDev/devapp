import { computed, ref } from 'vue';

export type ThemeMode = 'light' | 'dark';

const STORAGE_KEY = 'mediApp:theme';

function readStoredMode(): ThemeMode {
	try {
		const stored = localStorage.getItem(STORAGE_KEY);
		if (stored === 'dark' || stored === 'light') return stored;
	} catch {
		// Sin acceso a localStorage (navegadores privados, etc.)
	}
	return 'light';
}

const themeMode = ref<ThemeMode>(readStoredMode());

function syncNativeStatusBar(mode: ThemeMode) {
	const cap = (window as unknown as { Capacitor?: { isNativePlatform?: () => boolean } }).Capacitor;
	if (!cap?.isNativePlatform?.()) return;

	import('@capacitor/status-bar')
		.then(({ StatusBar, Style }) => {
			StatusBar.setStyle({ style: mode === 'dark' ? Style.Dark : Style.Light });
			StatusBar.setBackgroundColor({ color: mode === 'dark' ? '#000000' : '#f5f5f7' });
		})
		.catch(() => {
			// Plugin no disponible
		});
}

function applyTheme(mode: ThemeMode) {
	const root = document.documentElement;
	root.classList.toggle('ion-palette-dark', mode === 'dark');

	try {
		localStorage.setItem(STORAGE_KEY, mode);
	} catch {
		// Sin acceso a localStorage
	}

	const meta = document.querySelector('meta[name="theme-color"]');
	if (meta) {
		meta.setAttribute('content', mode === 'dark' ? '#000000' : '#0a68d6');
	}

	syncNativeStatusBar(mode);
}

applyTheme(themeMode.value);

export function setTheme(mode: ThemeMode) {
	if (themeMode.value === mode) return;
	themeMode.value = mode;
	applyTheme(mode);
}

export function toggleTheme() {
	setTheme(themeMode.value === 'dark' ? 'light' : 'dark');
}

export function useTheme() {
	return {
		themeMode,
		isDark: computed(() => themeMode.value === 'dark'),
	};
}
