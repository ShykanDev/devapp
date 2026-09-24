<template>
	<div class="clf-progress" :class="{ 'clf-progress--compacta': compacta }">
		<div
			class="clf-progress__track"
			role="progressbar"
			:aria-valuenow="valorSeguro"
			aria-valuemin="0"
			aria-valuemax="100"
			:aria-label="etiqueta ?? `Progreso ${valorSeguro}%`"
		>
			<span class="clf-progress__fill" :style="{ width: `${valorSeguro}%` }"></span>
		</div>
		<p v-if="etiqueta" class="clf-progress__label">
			<span>{{ etiqueta }}</span>
			<span class="clf-progress__value">{{ valorSeguro }}%</span>
		</p>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
	defineProps<{ valor: number; etiqueta?: string; compacta?: boolean }>(),
	{ compacta: false }
);

const valorSeguro = computed(() => Math.max(0, Math.min(100, Math.round(props.valor))));
</script>

<style scoped>
.clf-progress {
	display: flex;
	flex-direction: column;
	gap: 7px;
	width: 100%;
}

.clf-progress__track {
	position: relative;
	height: 8px;
	border-radius: 999px;
	background: var(--mt-muted);
	overflow: hidden;
}

.clf-progress--compacta .clf-progress__track {
	height: 6px;
}

.clf-progress__fill {
	display: block;
	height: 100%;
	border-radius: 999px;
	background: var(--mt-accent);
	transition: width 0.3s ease;
}

.clf-progress__label {
	display: flex;
	align-items: baseline;
	justify-content: space-between;
	gap: 10px;
	margin: 0;
	font-size: 12.5px;
	font-weight: 500;
	color: var(--mt-ink-2);
}

.clf-progress__value {
	font-weight: 700;
	font-variant-numeric: tabular-nums;
	color: var(--mt-ink);
}
</style>
