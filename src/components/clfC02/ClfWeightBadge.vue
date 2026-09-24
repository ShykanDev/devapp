<template>
	<span class="clf-weight" :class="`clf-weight--${tono}`">
		<slot>{{ texto ?? `${peso}%` }}</slot>
	</span>
</template>

<script setup lang="ts">
withDefaults(
	defineProps<{
		peso?: number;
		texto?: string;
		tono?: 'accent' | 'muted' | 'success' | 'warning' | 'danger';
	}>(),
	{
		tono: 'accent',
	}
);
</script>

<style scoped>
.clf-weight {
	display: inline-flex;
	align-items: center;
	gap: 4px;
	flex-shrink: 0;
	padding: 3px 9px;
	border-radius: 999px;
	font-size: 11.5px;
	font-weight: 700;
	letter-spacing: 0.01em;
	font-variant-numeric: tabular-nums;
	background: var(--mt-accent-soft);
	color: var(--mt-accent);
}

.clf-weight--muted {
	background: var(--mt-muted);
	color: var(--mt-ink-3);
}

.clf-weight--success {
	background: color-mix(in srgb, var(--mt-success) 14%, transparent);
	color: var(--mt-success);
}

.clf-weight--warning {
	background: color-mix(in srgb, var(--mt-warning) 16%, transparent);
	color: var(--mt-warning);
}

.clf-weight--danger {
	background: color-mix(in srgb, var(--mt-danger) 14%, transparent);
	color: var(--mt-danger);
}
</style>
