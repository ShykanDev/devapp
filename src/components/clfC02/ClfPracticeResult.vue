<template>
	<section class="clf-result">
		<header class="clf-result__head">
			<p class="clf-result__score">
				<span class="clf-result__num">{{ puntaje.porcentaje }}<small>%</small></span>
				<span class="clf-result__fraction">{{ puntaje.correctas }} / {{ puntaje.total }} correctas</span>
			</p>
			<p v-if="etiqueta" class="clf-result__etiqueta">{{ etiqueta }}</p>
		</header>

		<p class="clf-result__orientativo">
			<AppIcon :icon="informationCircleOutline" />
			<span>{{ puntaje.orientativo }}</span>
		</p>

		<div class="clf-result__section">
			<p class="clf-result__label">Desglose por dominio</p>
			<div class="clf-result__dominios">
				<div v-for="dominio in puntaje.porDominio" :key="dominio.dominioId" class="clf-result__dominio">
					<div class="clf-result__dominio-head">
						<span class="clf-result__dominio-name">
							Dominio {{ dominio.numero }} · {{ dominio.nombreEs }}
						</span>
						<span class="clf-result__dominio-value">{{ dominio.correctas }}/{{ dominio.total }}</span>
					</div>
					<ClfProgressBar :valor="dominio.porcentaje" compacta />
				</div>
			</div>
		</div>

		<div v-if="puntaje.falladas.length > 0" class="clf-result__section">
			<p class="clf-result__label">
				Para repasar ({{ puntaje.falladas.length }})
			</p>
			<div class="clf-result__falladas">
				<div v-for="fallada in falladas" :key="fallada.id" class="clf-result__fallada">
					<p class="clf-result__fallada-q">{{ fallada.question }}</p>
					<p class="clf-result__fallada-a">
						<AppIcon :icon="checkmarkCircleOutline" />
						<span>{{ fallada.options[fallada.correctAnswer] }}</span>
					</p>
					<p v-if="respuestaDe(fallada.id) !== undefined" class="clf-result__fallada-elegida">
						Tu respuesta: {{ fallada.options[respuestaDe(fallada.id)!] }}
					</p>
					<p class="clf-result__fallada-exp">{{ fallada.explanation }}</p>
				</div>
			</div>
		</div>

		<div class="clf-result__acciones">
			<AppButton variant="outline" @click="emit('repetir')">
				<template #start><AppIcon :icon="refresh" /></template>
				Repetir práctica
			</AppButton>
			<AppButton v-if="puntaje.falladas.length > 0" @click="emit('repetirFalladas')">
				<template #start><AppIcon :icon="repeatOutline" /></template>
				Solo lo fallado
			</AppButton>
		</div>
	</section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import {
	checkmarkCircleOutline,
	informationCircleOutline,
	refresh,
	repeatOutline,
} from 'ionicons/icons';
import type { PreguntaBaseClfC02 } from '@/data/clfC02/types';
import type { PuntajeIntento } from '@/lib/clfC02Practice';
import AppButton from '@/components/ui/AppButton.vue';
import AppIcon from '@/components/ui/AppIcon.vue';
import ClfProgressBar from './ClfProgressBar.vue';

const props = withDefaults(
	defineProps<{
		puntaje: PuntajeIntento;
		preguntas: PreguntaBaseClfC02[];
		respuestas?: Record<string, number>;
		etiqueta?: string;
	}>(),
	{ respuestas: () => ({}) }
);

const emit = defineEmits<{ repetir: []; repetirFalladas: [] }>();

const falladas = computed(() =>
	props.puntaje.falladas
		.map((id) => props.preguntas.find((pregunta) => pregunta.id === id))
		.filter((pregunta): pregunta is PreguntaBaseClfC02 => Boolean(pregunta))
);

function respuestaDe(id: string): number | undefined {
	return props.respuestas[id];
}
</script>

<style scoped>
.clf-result {
	display: flex;
	flex-direction: column;
	gap: 18px;
	padding: 20px 18px;
	border: 1px solid var(--mt-line);
	border-radius: var(--radius-card);
	background: var(--mt-surface);
}

.clf-result__head {
	display: flex;
	flex-direction: column;
	gap: 4px;
}

.clf-result__score {
	display: flex;
	align-items: baseline;
	gap: 12px;
	margin: 0;
	flex-wrap: wrap;
}

.clf-result__num {
	font-size: 40px;
	font-weight: 750;
	line-height: 1;
	letter-spacing: -0.04em;
	color: var(--mt-ink);
	font-variant-numeric: tabular-nums;
}

.clf-result__num small {
	font-size: 18px;
	font-weight: 600;
	color: var(--mt-ink-3);
}

.clf-result__fraction {
	font-size: 13.5px;
	color: var(--mt-ink-2);
}

.clf-result__etiqueta {
	margin: 2px 0 0;
	font-size: 12.5px;
	font-weight: 600;
	color: var(--mt-accent);
}

.clf-result__orientativo {
	display: flex;
	align-items: flex-start;
	gap: 8px;
	margin: 0;
	padding: 11px 13px;
	border-radius: var(--radius-box);
	background: var(--mt-muted);
	font-size: 12.5px;
	line-height: 1.55;
	color: var(--mt-ink-2);
}

.clf-result__orientativo .app-icon {
	flex-shrink: 0;
	margin-top: 2px;
	font-size: 15px;
	color: var(--mt-ink-3);
}

.clf-result__section {
	display: flex;
	flex-direction: column;
	gap: 10px;
}

.clf-result__label {
	margin: 0;
	font-size: 11px;
	font-weight: 700;
	letter-spacing: 0.08em;
	text-transform: uppercase;
	color: var(--mt-ink-3);
}

.clf-result__dominios {
	display: flex;
	flex-direction: column;
	gap: 12px;
}

.clf-result__dominio {
	display: flex;
	flex-direction: column;
	gap: 7px;
}

.clf-result__dominio-head {
	display: flex;
	align-items: baseline;
	justify-content: space-between;
	gap: 10px;
}

.clf-result__dominio-name {
	font-size: 13px;
	color: var(--mt-ink-2);
}

.clf-result__dominio-value {
	font-size: 12.5px;
	font-weight: 700;
	font-variant-numeric: tabular-nums;
	color: var(--mt-ink);
}

.clf-result__falladas {
	display: flex;
	flex-direction: column;
	gap: 12px;
}

.clf-result__fallada {
	padding: 12px 14px;
	border-radius: var(--radius-box);
	border: 1px solid var(--mt-line);
	background: var(--mt-muted);
	display: flex;
	flex-direction: column;
	gap: 7px;
}

.clf-result__fallada-q {
	margin: 0;
	font-size: 13.5px;
	font-weight: 600;
	line-height: 1.5;
	color: var(--mt-ink);
}

.clf-result__fallada-a {
	display: flex;
	align-items: flex-start;
	gap: 6px;
	margin: 0;
	font-size: 13px;
	line-height: 1.5;
	color: var(--mt-success);
}

.clf-result__fallada-a .app-icon {
	flex-shrink: 0;
	margin-top: 3px;
	font-size: 14px;
}

.clf-result__fallada-elegida {
	margin: 0;
	font-size: 12.5px;
	color: var(--mt-danger);
}

.clf-result__fallada-exp {
	margin: 0;
	font-size: 12.5px;
	line-height: 1.55;
	color: var(--mt-ink-2);
}

.clf-result__acciones {
	display: grid;
	gap: 10px;
}

@media (min-width: 480px) {
	.clf-result__acciones {
		grid-template-columns: 1fr 1fr;
	}
}
</style>
