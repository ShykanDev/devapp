<template>
	<header class="dp-header">
		<p class="mt-kicker">Sección educativa</p>
		<h1 class="mt-h-display dp-header__title">{{ title }}</h1>
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
	padding: 12px 0 6px;
}

.dp-header__title {
	margin: 12px 0 0;
}

.dp-header__desc {
	margin: 12px 0 0;
	max-width: 52ch;
}
</style>
