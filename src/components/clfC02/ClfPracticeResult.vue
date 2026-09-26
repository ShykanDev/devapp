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
						<span>{{ textoCorrectas(fallada) }}</span>
					</p>
					<p v-if="textoElegidas(fallada)" class="clf-result__fallada-elegida">
						Tu respuesta: {{ textoElegidas(fallada) }}
					</p>
					<p class="clf-result__fallada-exp">{{ fallada.explanation }}</p>
					<div v-if="fallada.porQueOpcion" class="clf-result__opciones">
						<p
							v-for="(motivo, indice) in fallada.porQueOpcion"
							:key="indice"
							class="clf-result__opcion"
							:class="{ 'clf-result__opcion--correcta': esCorrecta(fallada, indice) }"
						>
							<span class="clf-result__opcion-letra">{{ letra(indice) }}</span>
							<span>{{ motivo }}</span>
						</p>
					</div>
					<p v-if="fallada.fuentes && fallada.fuentes.length > 0" class="clf-result__fuentes">
						<span>Más información:</span>
						<a
							v-for="(url, fuenteIndice) in fallada.fuentes"
							:key="fuenteIndice"
							:href="url"
							target="_blank"
							rel="noopener noreferrer"
						>{{ fuenteIndice + 1 }}</a>
					</p>
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
import { respuestasCorrectas } from '@/data/clfC02/types';
import type { PuntajeIntento, RespuestaClfC02 } from '@/lib/clfC02Practice';
import AppButton from '@/components/ui/AppButton.vue';
import AppIcon from '@/components/ui/AppIcon.vue';
import ClfProgressBar from './ClfProgressBar.vue';

const props = withDefaults(
	defineProps<{
		puntaje: PuntajeIntento;
		preguntas: PreguntaBaseClfC02[];
		respuestas?: Record<string, RespuestaClfC02>;
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

function textoCorrectas(pregunta: PreguntaBaseClfC02): string {
	return respuestasCorrectas(pregunta)
		.map((indice) => pregunta.options[indice])
		.join(' · ');
}

function textoElegidas(pregunta: PreguntaBaseClfC02): string {
	const valor = props.respuestas[pregunta.id];
	const indices = Array.isArray(valor) ? valor : typeof valor === 'number' ? [valor] : [];
	if (indices.length === 0) return '';
	return indices.map((indice) => pregunta.options[indice]).join(' · ');
}

function esCorrecta(pregunta: PreguntaBaseClfC02, indice: number): boolean {
	return respuestasCorrectas(pregunta).includes(indice);
}

function letra(posicion: number): string {
	return String.fromCharCode(65 + posicion);
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

.clf-result__opciones {
	display: flex;
	flex-direction: column;
	gap: 5px;
	padding-top: 6px;
	border-top: 1px dashed var(--mt-line);
}

.clf-result__opcion {
	display: flex;
	align-items: flex-start;
	gap: 7px;
	margin: 0;
	font-size: 12px;
	line-height: 1.5;
	color: var(--mt-ink-3);
}

.clf-result__opcion--correcta {
	color: var(--mt-success);
}

.clf-result__opcion-letra {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 18px;
	height: 18px;
	flex-shrink: 0;
	border-radius: 999px;
	background: var(--mt-surface);
	font-size: 10.5px;
	font-weight: 700;
}

.clf-result__fuentes {
	display: flex;
	flex-wrap: wrap;
	gap: 6px;
	align-items: center;
	margin: 0;
	font-size: 12px;
	color: var(--mt-ink-3);
}

.clf-result__fuentes a {
	color: var(--mt-accent);
	text-decoration: none;
	font-weight: 600;
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
