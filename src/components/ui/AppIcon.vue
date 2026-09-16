<template>
	<span class="app-icon" :style="iconStyle" aria-hidden="true" v-html="svg"></span>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
	icon: string;
	size?: number | string;
}>();

const svg = computed(() => {
	const raw = props.icon ?? '';
	const comma = raw.indexOf(',');
	return comma >= 0 ? raw.slice(comma + 1) : raw;
});

const iconStyle = computed(() => {
	if (props.size == null) return undefined;
	const value = typeof props.size === 'number' ? `${props.size}px` : props.size;
	return { fontSize: value, width: value, height: value };
});
</script>
