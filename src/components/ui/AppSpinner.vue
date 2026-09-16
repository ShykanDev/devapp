<template>
	<span
		class="app-spinner"
		role="status"
		aria-label="Cargando"
		:style="spinnerStyle"
	></span>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
	size?: number | string;
}>();

const spinnerStyle = computed(() => {
	if (props.size == null) return undefined;
	const value = typeof props.size === 'number' ? `${props.size}px` : props.size;
	return { width: value, height: value };
});
</script>
