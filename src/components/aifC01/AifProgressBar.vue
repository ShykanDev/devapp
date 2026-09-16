<template>
	<div class="aif-progress" :class="{ 'aif-progress--compacta': compacta }">
		<div
			class="aif-progress__track"
			role="progressbar"
			:aria-valuenow="valorSeguro"
			aria-valuemin="0"
			aria-valuemax="100"
			:aria-label="etiqueta ?? `Progreso ${valorSeguro}%`"
		>
			<span class="aif-progress__fill" :style="{ width: `${valorSeguro}%` }"></span>
		</div>
		<p v-if="etiqueta" class="aif-progress__label">
			<span>{{ etiqueta }}</span>
			<span class="aif-progress__value">{{ valorSeguro }}%</span>
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
.aif-progress {
	display: flex;
	flex-direction: column;
	gap: 7px;
	width: 100%;
}

.aif-progress__track {
	position: relative;
	height: 8px;
	border-radius: 999px;
	background: var(--mt-muted);
	overflow: hidden;
}

.aif-progress--compacta .aif-progress__track {
	height: 6px;
}

.aif-progress__fill {
	display: block;
	height: 100%;
	border-radius: 999px;
	background: var(--mt-accent);
	transition: width 0.3s ease;
}

.aif-progress__label {
	display: flex;
	align-items: baseline;
	justify-content: space-between;
	gap: 10px;
	margin: 0;
	font-size: 12.5px;
	font-weight: 500;
	color: var(--mt-ink-2);
}

.aif-progress__value {
	font-weight: 700;
	font-variant-numeric: tabular-nums;
	color: var(--mt-ink);
}
</style>
