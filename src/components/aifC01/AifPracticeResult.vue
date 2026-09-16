<template>
	<section class="aif-result">
		<header class="aif-result__head">
			<p class="aif-result__score">
				<span class="aif-result__num">{{ puntaje.porcentaje }}<small>%</small></span>
				<span class="aif-result__fraction">{{ puntaje.correctas }} / {{ puntaje.total }} correctas</span>
			</p>
			<p v-if="etiqueta" class="aif-result__etiqueta">{{ etiqueta }}</p>
		</header>

		<p class="aif-result__orientativo">
			<AppIcon :icon="informationCircleOutline" />
			<span>{{ puntaje.orientativo }}</span>
		</p>

		<div class="aif-result__section">
			<p class="aif-result__label">Desglose por dominio</p>
			<div class="aif-result__dominios">
				<div v-for="dominio in puntaje.porDominio" :key="dominio.dominioId" class="aif-result__dominio">
					<div class="aif-result__dominio-head">
						<span class="aif-result__dominio-name">
							Dominio {{ dominio.numero }} · {{ dominio.nombreEs }}
						</span>
						<span class="aif-result__dominio-value">{{ dominio.correctas }}/{{ dominio.total }}</span>
					</div>
					<AifProgressBar :valor="dominio.porcentaje" compacta />
				</div>
			</div>
		</div>

		<div v-if="puntaje.falladas.length > 0" class="aif-result__section">
			<p class="aif-result__label">
				Para repasar ({{ puntaje.falladas.length }})
			</p>
			<div class="aif-result__falladas">
				<div v-for="fallada in falladas" :key="fallada.id" class="aif-result__fallada">
					<p class="aif-result__fallada-q">{{ fallada.question }}</p>
					<p class="aif-result__fallada-a">
						<AppIcon :icon="checkmarkCircleOutline" />
						<span>{{ fallada.options[fallada.correctAnswer] }}</span>
					</p>
					<p v-if="respuestaDe(fallada.id) !== undefined" class="aif-result__fallada-elegida">
						Tu respuesta: {{ fallada.options[respuestaDe(fallada.id)!] }}
					</p>
					<p class="aif-result__fallada-exp">{{ fallada.explanation }}</p>
				</div>
			</div>
		</div>

		<div class="aif-result__acciones">
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
import type { PreguntaAifC01 } from '@/data/aifC01/types';
import type { PuntajeIntento } from '@/lib/aifC01Practice';
import AppButton from '@/components/ui/AppButton.vue';
import AppIcon from '@/components/ui/AppIcon.vue';
import AifProgressBar from './AifProgressBar.vue';

const props = withDefaults(
	defineProps<{
		puntaje: PuntajeIntento;
		preguntas: PreguntaAifC01[];
		respuestas?: Record<string, number>;
		etiqueta?: string;
	}>(),
	{ respuestas: () => ({}) }
);

const emit = defineEmits<{ repetir: []; repetirFalladas: [] }>();

const falladas = computed(() =>
	props.puntaje.falladas
		.map((id) => props.preguntas.find((pregunta) => pregunta.id === id))
		.filter((pregunta): pregunta is PreguntaAifC01 => Boolean(pregunta))
);

function respuestaDe(id: string): number | undefined {
	return props.respuestas[id];
}
</script>

<style scoped>
.aif-result {
	display: flex;
	flex-direction: column;
	gap: 18px;
	padding: 20px 18px;
	border: 1px solid var(--mt-line);
	border-radius: var(--radius-card);
	background: var(--mt-surface);
}

.aif-result__head {
	display: flex;
	flex-direction: column;
	gap: 4px;
}

.aif-result__score {
	display: flex;
	align-items: baseline;
	gap: 12px;
	margin: 0;
	flex-wrap: wrap;
}

.aif-result__num {
	font-size: 40px;
	font-weight: 750;
	line-height: 1;
	letter-spacing: -0.04em;
	color: var(--mt-ink);
	font-variant-numeric: tabular-nums;
}

.aif-result__num small {
	font-size: 18px;
	font-weight: 600;
	color: var(--mt-ink-3);
}

.aif-result__fraction {
	font-size: 13.5px;
	color: var(--mt-ink-2);
}

.aif-result__etiqueta {
	margin: 2px 0 0;
	font-size: 12.5px;
	font-weight: 600;
	color: var(--mt-accent);
}

.aif-result__orientativo {
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

.aif-result__orientativo .app-icon {
	flex-shrink: 0;
	margin-top: 2px;
	font-size: 15px;
	color: var(--mt-ink-3);
}

.aif-result__section {
	display: flex;
	flex-direction: column;
	gap: 10px;
}

.aif-result__label {
	margin: 0;
	font-size: 11px;
	font-weight: 700;
	letter-spacing: 0.08em;
	text-transform: uppercase;
	color: var(--mt-ink-3);
}

.aif-result__dominios {
	display: flex;
	flex-direction: column;
	gap: 12px;
}

.aif-result__dominio {
	display: flex;
	flex-direction: column;
	gap: 7px;
}

.aif-result__dominio-head {
	display: flex;
	align-items: baseline;
	justify-content: space-between;
	gap: 10px;
}

.aif-result__dominio-name {
	font-size: 13px;
	color: var(--mt-ink-2);
}

.aif-result__dominio-value {
	font-size: 12.5px;
	font-weight: 700;
	font-variant-numeric: tabular-nums;
	color: var(--mt-ink);
}

.aif-result__falladas {
	display: flex;
	flex-direction: column;
	gap: 12px;
}

.aif-result__fallada {
	padding: 12px 14px;
	border-radius: var(--radius-box);
	border: 1px solid var(--mt-line);
	background: var(--mt-muted);
	display: flex;
	flex-direction: column;
	gap: 7px;
}

.aif-result__fallada-q {
	margin: 0;
	font-size: 13.5px;
	font-weight: 600;
	line-height: 1.5;
	color: var(--mt-ink);
}

.aif-result__fallada-a {
	display: flex;
	align-items: flex-start;
	gap: 6px;
	margin: 0;
	font-size: 13px;
	line-height: 1.5;
	color: var(--mt-success);
}

.aif-result__fallada-a .app-icon {
	flex-shrink: 0;
	margin-top: 3px;
	font-size: 14px;
}

.aif-result__fallada-elegida {
	margin: 0;
	font-size: 12.5px;
	color: var(--mt-danger);
}

.aif-result__fallada-exp {
	margin: 0;
	font-size: 12.5px;
	line-height: 1.55;
	color: var(--mt-ink-2);
}

.aif-result__acciones {
	display: grid;
	gap: 10px;
}

@media (min-width: 480px) {
	.aif-result__acciones {
		grid-template-columns: 1fr 1fr;
	}
}
</style>
