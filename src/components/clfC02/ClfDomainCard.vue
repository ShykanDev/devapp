<template>
	<RouterLink :to="`/cloud-practitioner/dominio/${dominio.id}`" class="clf-domain">
		<div class="clf-domain__head">
			<span class="clf-domain__number">{{ dominio.numero }}</span>
			<div class="clf-domain__text">
				<p class="clf-domain__name">{{ dominio.nombreEs }}</p>
				<p class="clf-domain__tasks">
					{{ tasksConContenido }} de {{ tasksTotales }} tasks con contenido
				</p>
			</div>
			<ClfWeightBadge :peso="dominio.peso" />
		</div>

		<ClfProgressBar :valor="progreso" compacta />

		<p v-if="pendiente" class="clf-domain__pendiente">
			Contenido en preparación: este dominio todavía no está completo.
		</p>
		<p v-else class="clf-domain__desc">{{ dominio.descripcion }}</p>
	</RouterLink>
</template>

<script setup lang="ts">
import type { DominioClfC02 } from '@/data/clfC02';
import ClfProgressBar from './ClfProgressBar.vue';
import ClfWeightBadge from './ClfWeightBadge.vue';

defineProps<{
	dominio: DominioClfC02;
	progreso: number;
	tasksConContenido: number;
	tasksTotales: number;
	pendiente: boolean;
}>();
</script>

<style scoped>
.clf-domain {
	display: flex;
	flex-direction: column;
	gap: 12px;
	padding: 16px;
	text-decoration: none;
	transition: background 0.15s ease;
}

.clf-domain:active {
	background: var(--mt-muted);
}

.clf-domain__head {
	display: flex;
	align-items: center;
	gap: 12px;
}

.clf-domain__number {
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

.clf-domain__text {
	flex: 1;
	min-width: 0;
}

.clf-domain__name {
	margin: 0;
	font-size: 15.5px;
	font-weight: 650;
	letter-spacing: -0.012em;
	color: var(--mt-ink);
}

.clf-domain__tasks {
	margin: 3px 0 0;
	font-size: 12.5px;
	color: var(--mt-ink-3);
}

.clf-domain__desc {
	margin: 0;
	font-size: 13px;
	line-height: 1.5;
	color: var(--mt-ink-2);
}

.clf-domain__pendiente {
	margin: 0;
	font-size: 12.5px;
	line-height: 1.5;
	color: var(--mt-warning);
}
</style>
