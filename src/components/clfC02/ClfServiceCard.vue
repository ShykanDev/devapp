<template>
	<article class="clf-service" :id="`servicio-${servicio.nombre}`">
		<header class="clf-service__head">
			<span class="clf-service__tile"><AppIcon :icon="cubeOutline" /></span>
			<div class="clf-service__head-text">
				<h3 class="clf-service__name">{{ servicio.nombre }}</h3>
				<p class="clf-service__category">{{ servicio.categoria }}</p>
			</div>
		</header>

		<div class="clf-service__field">
			<p class="clf-service__label">Qué resuelve</p>
			<p class="clf-service__text">{{ servicio.queResuelve }}</p>
		</div>

		<div class="clf-service__field">
			<p class="clf-service__label">Para qué se usa</p>
			<p class="clf-service__text">{{ servicio.paraQueSeUsa }}</p>
		</div>

		<div v-if="servicio.seDiferenciaDe.length > 0" class="clf-service__field">
			<p class="clf-service__label">Se diferencia de</p>
			<div class="clf-service__chips">
				<RouterLink
					v-for="diferencia in servicio.seDiferenciaDe"
					:key="diferencia"
					:to="`/cloud-practitioner/servicios?servicio=${encodeURIComponent(diferencia)}`"
					class="clf-service__chip"
				>
					{{ diferencia }}
				</RouterLink>
			</div>
		</div>

		<footer class="clf-service__foot">
			<RouterLink
				v-for="taskId in servicio.tareas"
				:key="taskId"
				:to="`/cloud-practitioner/task/${taskId}`"
				class="clf-service__task"
			>
				<AppIcon :icon="schoolOutline" />
				Task {{ taskId }}
			</RouterLink>
			<div v-if="servicio.relacionados.length > 0" class="clf-service__chips">
				<RouterLink
					v-for="relacionado in servicio.relacionados"
					:key="relacionado"
					:to="`/cloud-practitioner/glosario?termino=${encodeURIComponent(relacionado)}`"
					class="clf-service__chip clf-service__chip--muted"
				>
					{{ relacionado }}
				</RouterLink>
			</div>
		</footer>
	</article>
</template>

<script setup lang="ts">
import { cubeOutline, schoolOutline } from 'ionicons/icons';
import type { ServicioClfC02 } from '@/data/clfC02/types';
import AppIcon from '@/components/ui/AppIcon.vue';

defineProps<{ servicio: ServicioClfC02 }>();
</script>

<style scoped>
.clf-service {
	display: flex;
	flex-direction: column;
	gap: 14px;
	padding: 16px;
	border: 1px solid var(--mt-line);
	border-radius: var(--radius-card);
	background: var(--mt-surface);
	scroll-margin-top: 70px;
}

.clf-service__head {
	display: flex;
	align-items: center;
	gap: 12px;
}

.clf-service__tile {
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

.clf-service__head-text {
	flex: 1;
	min-width: 0;
}

.clf-service__name {
	margin: 0;
	font-size: 15.5px;
	font-weight: 700;
	letter-spacing: -0.012em;
	color: var(--mt-ink);
}

.clf-service__category {
	margin: 3px 0 0;
	font-size: 12px;
	color: var(--mt-ink-3);
}

.clf-service__field {
	display: flex;
	flex-direction: column;
	gap: 5px;
}

.clf-service__label {
	margin: 0;
	font-size: 10.5px;
	font-weight: 700;
	letter-spacing: 0.08em;
	text-transform: uppercase;
	color: var(--mt-ink-3);
}

.clf-service__text {
	margin: 0;
	font-size: 13.5px;
	line-height: 1.6;
	color: var(--mt-ink-2);
}

.clf-service__chips {
	display: flex;
	flex-wrap: wrap;
	gap: 6px;
}

.clf-service__chip {
	padding: 4px 10px;
	border: 1px solid color-mix(in srgb, var(--mt-accent) 28%, var(--mt-line));
	border-radius: 999px;
	background: var(--mt-accent-soft);
	font-size: 11.5px;
	font-weight: 600;
	color: var(--mt-accent);
	text-decoration: none;
}

.clf-service__chip--muted {
	background: var(--mt-muted);
	border-color: var(--mt-line);
	color: var(--mt-ink-2);
}

.clf-service__foot {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	gap: 10px;
	padding-top: 12px;
	border-top: 1px solid var(--mt-line);
}

.clf-service__task {
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
