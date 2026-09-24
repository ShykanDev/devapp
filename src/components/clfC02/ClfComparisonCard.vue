<template>
	<article class="clf-pair" :class="{ 'clf-pair--compacto': compacto }">
		<header class="clf-pair__head">
			<AppIcon :icon="swapHorizontalOutline" class="clf-pair__icon" />
			<h3 class="clf-pair__title">{{ par.etiqueta }}</h3>
		</header>

		<div class="clf-pair__sides">
			<section class="clf-pair__side clf-pair__side--a">
				<p class="clf-pair__side-title">{{ par.a.titulo }}</p>
				<p class="clf-pair__side-text">{{ par.a.resumen }}</p>
			</section>
			<section class="clf-pair__side clf-pair__side--b">
				<p class="clf-pair__side-title">{{ par.b.titulo }}</p>
				<p class="clf-pair__side-text">{{ par.b.resumen }}</p>
			</section>
		</div>

		<div class="clf-pair__clave">
			<p class="clf-pair__clave-label">Diferencia fundamental</p>
			<p class="clf-pair__clave-text">{{ par.diferenciaClave }}</p>
		</div>

		<template v-if="!compacto">
			<div class="clf-pair__when">
				<div class="clf-pair__when-col">
					<p class="clf-pair__when-title">Usa {{ par.a.titulo }} cuando</p>
					<ul>
						<li v-for="item in par.cuandoA" :key="item">{{ item }}</li>
					</ul>
				</div>
				<div class="clf-pair__when-col">
					<p class="clf-pair__when-title">Usa {{ par.b.titulo }} cuando</p>
					<ul>
						<li v-for="item in par.cuandoB" :key="item">{{ item }}</li>
					</ul>
				</div>
			</div>

			<div class="clf-pair__escenarios">
				<div class="clf-pair__escenario">
					<p class="clf-pair__escenario-label">Escenario A</p>
					<p class="clf-pair__escenario-text">{{ par.escenarioA }}</p>
				</div>
				<div class="clf-pair__escenario">
					<p class="clf-pair__escenario-label">Escenario B</p>
					<p class="clf-pair__escenario-text">{{ par.escenarioB }}</p>
				</div>
			</div>
		</template>
	</article>
</template>

<script setup lang="ts">
import { swapHorizontalOutline } from 'ionicons/icons';
import type { ParConfusionClfC02 } from '@/data/clfC02/types';
import AppIcon from '@/components/ui/AppIcon.vue';

withDefaults(defineProps<{ par: ParConfusionClfC02; compacto?: boolean }>(), {
	compacto: false,
});
</script>

<style scoped>
.clf-pair {
	display: flex;
	flex-direction: column;
	gap: 14px;
	padding: 16px;
	border: 1px solid var(--mt-line);
	border-radius: var(--radius-card);
	background: var(--mt-surface);
}

.clf-pair__head {
	display: flex;
	align-items: center;
	gap: 10px;
}

.clf-pair__icon {
	font-size: 18px;
	color: var(--mt-accent);
}

.clf-pair__title {
	margin: 0;
	font-size: 15.5px;
	font-weight: 700;
	letter-spacing: -0.012em;
	color: var(--mt-ink);
}

.clf-pair__sides {
	display: grid;
	gap: 10px;
}

@media (min-width: 560px) {
	.clf-pair__sides {
		grid-template-columns: 1fr 1fr;
	}
}

.clf-pair__side {
	padding: 12px 14px;
	border-radius: var(--radius-box);
	border: 1px solid var(--mt-line);
}

.clf-pair__side--a {
	background: var(--mt-muted);
}

.clf-pair__side--b {
	background: var(--mt-accent-soft);
	border-color: color-mix(in srgb, var(--mt-accent) 22%, var(--mt-line));
}

.clf-pair__side-title {
	margin: 0 0 5px;
	font-size: 14px;
	font-weight: 650;
	color: var(--mt-ink);
}

.clf-pair__side-text {
	margin: 0;
	font-size: 13px;
	line-height: 1.55;
	color: var(--mt-ink-2);
}

.clf-pair__clave {
	padding: 12px 14px;
	border-radius: var(--radius-box);
	background: color-mix(in srgb, var(--mt-accent) 6%, var(--mt-surface));
	border: 1px dashed color-mix(in srgb, var(--mt-accent) 32%, var(--mt-line));
}

.clf-pair__clave-label {
	margin: 0 0 4px;
	font-size: 10.5px;
	font-weight: 700;
	letter-spacing: 0.08em;
	text-transform: uppercase;
	color: var(--mt-accent);
}

.clf-pair__clave-text {
	margin: 0;
	font-size: 13.5px;
	font-weight: 550;
	line-height: 1.55;
	color: var(--mt-ink);
}

.clf-pair__when {
	display: grid;
	gap: 12px;
}

@media (min-width: 560px) {
	.clf-pair__when {
		grid-template-columns: 1fr 1fr;
	}
}

.clf-pair__when-title {
	margin: 0 0 7px;
	font-size: 12px;
	font-weight: 700;
	color: var(--mt-ink-2);
}

.clf-pair__when ul {
	margin: 0;
	padding-left: 18px;
	display: flex;
	flex-direction: column;
	gap: 6px;
}

.clf-pair__when li {
	font-size: 12.5px;
	line-height: 1.5;
	color: var(--mt-ink-2);
}

.clf-pair__escenarios {
	display: grid;
	gap: 10px;
}

@media (min-width: 560px) {
	.clf-pair__escenarios {
		grid-template-columns: 1fr 1fr;
	}
}

.clf-pair__escenario {
	padding: 12px 14px;
	border-radius: var(--radius-box);
	border: 1px solid var(--mt-line);
	background: var(--mt-muted);
}

.clf-pair__escenario-label {
	margin: 0 0 4px;
	font-size: 10.5px;
	font-weight: 700;
	letter-spacing: 0.08em;
	text-transform: uppercase;
	color: var(--mt-ink-3);
}

.clf-pair__escenario-text {
	margin: 0;
	font-size: 13px;
	line-height: 1.55;
	color: var(--mt-ink-2);
}
</style>
