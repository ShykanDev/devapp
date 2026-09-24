<template>
	<article class="clf-objective" :class="`clf-objective--${estado}`">
		<div class="clf-objective__head">
			<span class="clf-objective__index" aria-hidden="true">
				{{ indice ?? objetivo.index }}
			</span>
			<div class="clf-objective__text">
				<p class="clf-objective__title">{{ objetivo.titulo }}</p>
				<p class="clf-objective__meta">
					<span class="clf-objective__estado">{{ etiquetaEstado(estado) }}</span>
					<span class="clf-objective__motivo">{{ motivo }}</span>
				</p>
			</div>
			<ClfWeightBadge :texto="etiquetaProfundidad(objetivo.profundidad)" :tono="tonoProfundidad" />
		</div>

		<div v-if="objetivo.conceptos.length > 0" class="clf-objective__conceptos">
			<span v-for="concepto in objetivo.conceptos.slice(0, 5)" :key="concepto" class="clf-objective__chip">
				{{ concepto }}
			</span>
		</div>

		<div v-if="accionable && estado === 'pendiente'" class="clf-objective__acciones">
			<AppButton size="small" variant="outline" @click="emit('estudiado')">
				<template #start><AppIcon :icon="checkmarkCircleOutline" /></template>
				Marcar como entendido
			</AppButton>
		</div>
	</article>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { checkmarkCircleOutline } from 'ionicons/icons';
import { etiquetaProfundidad } from '@/data/clfC02/blueprint-ext';
import type { ObjetivoClfC02 } from '@/data/clfC02';
import { etiquetaEstado, type EstadoObjetivo } from '@/lib/clfC02Progress';
import AppButton from '@/components/ui/AppButton.vue';
import AppIcon from '@/components/ui/AppIcon.vue';
import ClfWeightBadge from './ClfWeightBadge.vue';

const props = withDefaults(
	defineProps<{
		objetivo: ObjetivoClfC02;
		estado: EstadoObjetivo;
		motivo: string;
		indice?: number;
		accionable?: boolean;
	}>(),
	{ accionable: false }
);

const emit = defineEmits<{ estudiado: [] }>();

const tonoProfundidad = computed(() =>
	props.objetivo.profundidad === 'critico'
		? 'warning'
		: props.objetivo.profundidad === 'esencial'
			? 'muted'
			: 'accent'
);
</script>

<style scoped>
.clf-objective {
	display: flex;
	flex-direction: column;
	gap: 10px;
	padding: 14px 16px;
}

.clf-objective__head {
	display: flex;
	align-items: flex-start;
	gap: 12px;
}

.clf-objective__index {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 26px;
	height: 26px;
	flex-shrink: 0;
	margin-top: 1px;
	border-radius: 999px;
	background: var(--mt-muted);
	color: var(--mt-ink-3);
	font-size: 12px;
	font-weight: 700;
	font-variant-numeric: tabular-nums;
}

.clf-objective--dominado .clf-objective__index {
	background: color-mix(in srgb, var(--mt-success) 16%, transparent);
	color: var(--mt-success);
}

.clf-objective--practicado .clf-objective__index {
	background: var(--mt-accent-soft);
	color: var(--mt-accent);
}

.clf-objective__text {
	flex: 1;
	min-width: 0;
}

.clf-objective__title {
	margin: 0;
	font-size: 14.5px;
	font-weight: 550;
	line-height: 1.45;
	color: var(--mt-ink);
}

.clf-objective__meta {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 6px;
	margin: 6px 0 0;
	font-size: 12px;
	color: var(--mt-ink-3);
}

.clf-objective__estado {
	font-weight: 700;
	text-transform: uppercase;
	letter-spacing: 0.05em;
	font-size: 10.5px;
	color: var(--mt-ink-2);
}

.clf-objective--dominado .clf-objective__estado {
	color: var(--mt-success);
}

.clf-objective--practicado .clf-objective__estado {
	color: var(--mt-accent);
}

.clf-objective__motivo::before {
	content: '· ';
}

.clf-objective__conceptos {
	display: flex;
	flex-wrap: wrap;
	gap: 6px;
	padding-left: 38px;
}

.clf-objective__chip {
	padding: 3px 8px;
	border-radius: 8px;
	background: var(--mt-muted);
	font-size: 11.5px;
	color: var(--mt-ink-2);
}

.clf-objective__acciones {
	padding-left: 38px;
}
</style>
