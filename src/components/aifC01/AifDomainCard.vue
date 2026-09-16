<template>
	<RouterLink :to="`/ai-practitioner/dominio/${dominio.id}`" class="aif-domain">
		<div class="aif-domain__head">
			<span class="aif-domain__number">{{ dominio.numero }}</span>
			<div class="aif-domain__text">
				<p class="aif-domain__name">{{ dominio.nombreEs }}</p>
				<p class="aif-domain__tasks">
					{{ tasksConContenido }} de {{ tasksTotales }} tasks con contenido
				</p>
			</div>
			<AifWeightBadge :peso="dominio.peso" />
		</div>

		<AifProgressBar :valor="progreso" compacta />

		<p v-if="pendiente" class="aif-domain__pendiente">
			Contenido en preparación: este dominio todavía no está completo.
		</p>
		<p v-else class="aif-domain__desc">{{ dominio.descripcion }}</p>
	</RouterLink>
</template>

<script setup lang="ts">
import type { DominioAifC01 } from '@/data/aifC01';
import AifProgressBar from './AifProgressBar.vue';
import AifWeightBadge from './AifWeightBadge.vue';

defineProps<{
	dominio: DominioAifC01;
	progreso: number;
	tasksConContenido: number;
	tasksTotales: number;
	pendiente: boolean;
}>();
</script>

<style scoped>
.aif-domain {
	display: flex;
	flex-direction: column;
	gap: 12px;
	padding: 16px;
	text-decoration: none;
	transition: background 0.15s ease;
}

.aif-domain:active {
	background: var(--mt-muted);
}

.aif-domain__head {
	display: flex;
	align-items: center;
	gap: 12px;
}

.aif-domain__number {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 34px;
	height: 34px;
	flex-shrink: 0;
	border-radius: 11px;
	background: var(--mt-accent-soft);
	color: var(--mt-accent);
	font-size: 15px;
	font-weight: 700;
	font-variant-numeric: tabular-nums;
}

.aif-domain__text {
	flex: 1;
	min-width: 0;
}

.aif-domain__name {
	margin: 0;
	font-size: 15.5px;
	font-weight: 650;
	letter-spacing: -0.012em;
	color: var(--mt-ink);
}

.aif-domain__tasks {
	margin: 3px 0 0;
	font-size: 12.5px;
	color: var(--mt-ink-3);
}

.aif-domain__desc {
	margin: 0;
	font-size: 13px;
	line-height: 1.5;
	color: var(--mt-ink-2);
}

.aif-domain__pendiente {
	margin: 0;
	font-size: 12.5px;
	line-height: 1.5;
	color: var(--mt-warning);
}
</style>
