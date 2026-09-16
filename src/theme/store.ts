import { computed, ref } from 'vue';

export type ThemeMode = 'light' | 'dark';

const STORAGE_KEY = 'devapp:theme';

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

function applyTheme(mode: ThemeMode) {
	const root = document.documentElement;
	root.classList.toggle('theme-dark', mode === 'dark');

	try {
		localStorage.setItem(STORAGE_KEY, mode);
	} catch {
		// Sin acceso a localStorage
	}

	const meta = document.querySelector('meta[name="theme-color"]');
	if (meta) {
		meta.setAttribute('content', mode === 'dark' ? '#000000' : '#0a68d6');
	}
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
