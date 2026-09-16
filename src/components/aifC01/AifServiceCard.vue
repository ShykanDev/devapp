<template>
	<article class="aif-service" :id="`servicio-${servicio.nombre}`">
		<header class="aif-service__head">
			<span class="aif-service__tile"><AppIcon :icon="cubeOutline" /></span>
			<div class="aif-service__head-text">
				<h3 class="aif-service__name">{{ servicio.nombre }}</h3>
				<p class="aif-service__category">{{ servicio.categoria }}</p>
			</div>
		</header>

		<div class="aif-service__field">
			<p class="aif-service__label">Qué resuelve</p>
			<p class="aif-service__text">{{ servicio.queResuelve }}</p>
		</div>

		<div class="aif-service__field">
			<p class="aif-service__label">Para qué se usa</p>
			<p class="aif-service__text">{{ servicio.paraQueSeUsa }}</p>
		</div>

		<div v-if="servicio.seDiferenciaDe.length > 0" class="aif-service__field">
			<p class="aif-service__label">Se diferencia de</p>
			<div class="aif-service__chips">
				<RouterLink
					v-for="diferencia in servicio.seDiferenciaDe"
					:key="diferencia"
					:to="`/ai-practitioner/servicios?servicio=${encodeURIComponent(diferencia)}`"
					class="aif-service__chip"
				>
					{{ diferencia }}
				</RouterLink>
			</div>
		</div>

		<footer class="aif-service__foot">
			<RouterLink
				v-for="taskId in servicio.tareas"
				:key="taskId"
				:to="`/ai-practitioner/task/${taskId}`"
				class="aif-service__task"
			>
				<AppIcon :icon="schoolOutline" />
				Task {{ taskId }}
			</RouterLink>
			<div v-if="servicio.relacionados.length > 0" class="aif-service__chips">
				<RouterLink
					v-for="relacionado in servicio.relacionados"
					:key="relacionado"
					:to="`/ai-practitioner/glosario?termino=${encodeURIComponent(relacionado)}`"
					class="aif-service__chip aif-service__chip--muted"
				>
					{{ relacionado }}
				</RouterLink>
			</div>
		</footer>
	</article>
</template>

<script setup lang="ts">
import { cubeOutline, schoolOutline } from 'ionicons/icons';
import type { ServicioAifC01 } from '@/data/aifC01/types';
import AppIcon from '@/components/ui/AppIcon.vue';

defineProps<{ servicio: ServicioAifC01 }>();
</script>

<style scoped>
.aif-service {
	display: flex;
	flex-direction: column;
	gap: 14px;
	padding: 16px;
	border: 1px solid var(--mt-line);
	border-radius: var(--radius-card);
	background: var(--mt-surface);
	scroll-margin-top: 70px;
}

.aif-service__head {
	display: flex;
	align-items: center;
	gap: 12px;
}

.aif-service__tile {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 40px;
	height: 40px;
	flex-shrink: 0;
	border-radius: 12px;
	background: var(--mt-accent-soft);
	color: var(--mt-accent);
}

.aif-service__head-text {
	flex: 1;
	min-width: 0;
}

.aif-service__name {
	margin: 0;
	font-size: 15.5px;
	font-weight: 700;
	letter-spacing: -0.012em;
	color: var(--mt-ink);
}

.aif-service__category {
	margin: 3px 0 0;
	font-size: 12px;
	color: var(--mt-ink-3);
}

.aif-service__field {
	display: flex;
	flex-direction: column;
	gap: 5px;
}

.aif-service__label {
	margin: 0;
	font-size: 10.5px;
	font-weight: 700;
	letter-spacing: 0.08em;
	text-transform: uppercase;
	color: var(--mt-ink-3);
}

.aif-service__text {
	margin: 0;
	font-size: 13.5px;
	line-height: 1.6;
	color: var(--mt-ink-2);
}

.aif-service__chips {
	display: flex;
	flex-wrap: wrap;
	gap: 6px;
}

.aif-service__chip {
	padding: 4px 10px;
	border: 1px solid color-mix(in srgb, var(--mt-accent) 28%, var(--mt-line));
	border-radius: 999px;
	background: var(--mt-accent-soft);
	font-size: 11.5px;
	font-weight: 600;
	color: var(--mt-accent);
	text-decoration: none;
}

.aif-service__chip--muted {
	background: var(--mt-muted);
	border-color: var(--mt-line);
	color: var(--mt-ink-2);
}

.aif-service__foot {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	gap: 10px;
	padding-top: 12px;
	border-top: 1px solid var(--mt-line);
}

.aif-service__task {
	display: inline-flex;
	align-items: center;
	gap: 6px;
	min-height: 36px;
	padding: 0 10px;
	border-radius: 10px;
	background: var(--mt-muted);
	font-size: 12.5px;
	font-weight: 600;
	color: var(--mt-ink);
	text-decoration: none;
}
</style>
