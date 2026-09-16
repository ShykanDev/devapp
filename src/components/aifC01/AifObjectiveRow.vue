<template>
	<article class="aif-objective" :class="`aif-objective--${estado}`">
		<div class="aif-objective__head">
			<span class="aif-objective__index" aria-hidden="true">
				{{ indice ?? objetivo.index }}
			</span>
			<div class="aif-objective__text">
				<p class="aif-objective__title">{{ objetivo.titulo }}</p>
				<p class="aif-objective__meta">
					<span class="aif-objective__estado">{{ etiquetaEstado(estado) }}</span>
					<span class="aif-objective__motivo">{{ motivo }}</span>
				</p>
			</div>
			<AifWeightBadge :texto="etiquetaProfundidad(objetivo.profundidad)" :tono="tonoProfundidad" />
		</div>

		<div v-if="objetivo.conceptos.length > 0" class="aif-objective__conceptos">
			<span v-for="concepto in objetivo.conceptos.slice(0, 5)" :key="concepto" class="aif-objective__chip">
				{{ concepto }}
			</span>
		</div>

		<div v-if="accionable && estado === 'pendiente'" class="aif-objective__acciones">
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
import { etiquetaProfundidad } from '@/data/aifC01/blueprint-ext';
import type { ObjetivoAifC01 } from '@/data/aifC01';
import { etiquetaEstado, type EstadoObjetivo } from '@/lib/aifC01Progress';
import AppButton from '@/components/ui/AppButton.vue';
import AppIcon from '@/components/ui/AppIcon.vue';
import AifWeightBadge from './AifWeightBadge.vue';

const props = withDefaults(
	defineProps<{
		objetivo: ObjetivoAifC01;
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
.aif-objective {
	display: flex;
	flex-direction: column;
	gap: 10px;
	padding: 14px 16px;
}

.aif-objective__head {
	display: flex;
	align-items: flex-start;
	gap: 12px;
}

.aif-objective__index {
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

.aif-objective--dominado .aif-objective__index {
	background: color-mix(in srgb, var(--mt-success) 16%, transparent);
	color: var(--mt-success);
}

.aif-objective--practicado .aif-objective__index {
	background: var(--mt-accent-soft);
	color: var(--mt-accent);
}

.aif-objective__text {
	flex: 1;
	min-width: 0;
}

.aif-objective__title {
	margin: 0;
	font-size: 14.5px;
	font-weight: 550;
	line-height: 1.45;
	color: var(--mt-ink);
}

.aif-objective__meta {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 6px;
	margin: 6px 0 0;
	font-size: 12px;
	color: var(--mt-ink-3);
}

.aif-objective__estado {
	font-weight: 700;
	text-transform: uppercase;
	letter-spacing: 0.05em;
	font-size: 10.5px;
	color: var(--mt-ink-2);
}

.aif-objective--dominado .aif-objective__estado {
	color: var(--mt-success);
}

.aif-objective--practicado .aif-objective__estado {
	color: var(--mt-accent);
}

.aif-objective__motivo::before {
	content: '· ';
}

.aif-objective__conceptos {
	display: flex;
	flex-wrap: wrap;
	gap: 6px;
	padding-left: 38px;
}

.aif-objective__chip {
	padding: 3px 8px;
	border-radius: 8px;
	background: var(--mt-muted);
	font-size: 11.5px;
	color: var(--mt-ink-2);
}

.aif-objective__acciones {
	padding-left: 38px;
}
</style>
