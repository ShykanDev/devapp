<template>
	<header class="dp-header">
		<p class="mt-kicker">Sección educativa</p>
		<h1 class="mt-h-display dp-header__title">{{ title }}</h1>
		<p v-if="subtitle" class="dp-header__sub">{{ subtitle }}</p>
		<p class="mt-body dp-header__desc">{{ description }}</p>
	</header>
</template>

<script setup lang="ts">
defineProps<{
	title: string;
	description: string;
	subtitle?: string;
}>();
</script>

<style scoped>
.dp-header {
	padding: 8px 0 4px;
}

.dp-header__title {
	margin: 10px 0 0;
}

.dp-header__sub {
	margin: 8px 0 0;
	font-size: 15px;
	font-weight: 600;
	line-height: 1.4;
	color: var(--mt-ink-2);
}

.dp-header__desc {
	margin: 10px 0 0;
	max-width: 52ch;
}
</style>
