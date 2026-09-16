import { ref } from 'vue';

const DRAWER_QUERY = '(min-width: 768px)';

export const menuOpen = ref(false);

function isDesktop() {
  return typeof window !== 'undefined' && window.matchMedia(DRAWER_QUERY).matches;
}

export function openMenu() {
  menuOpen.value = true;
}

export function closeMenu() {
  menuOpen.value = false;
}

export function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}

export function useShell() {
  return { menuOpen, openMenu, closeMenu, toggleMenu, isDesktop };
}
