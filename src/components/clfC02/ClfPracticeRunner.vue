<template>
	<section class="clf-runner">
		<header class="clf-runner__head">
			<div class="clf-runner__head-text">
				<p class="clf-runner__title">{{ titulo }}</p>
				<p class="clf-runner__sub">{{ subtitulo }}</p>
			</div>
			<div class="clf-runner__indicators">
				<span v-if="cuentaAtras !== null" class="clf-runner__timer" :class="{ 'clf-runner__timer--low': segundosRestantes <= 300 }">
					<AppIcon :icon="timeOutline" />
					{{ tiempoFormateado }}
				</span>
				<span class="clf-runner__counter">
					{{ Math.min(indice + 1, preguntas.length) }} / {{ preguntas.length }}
				</span>
			</div>
		</header>

		<ClfProgressBar :valor="porcentajeRespondido" compacta />

		<div class="clf-runner__body">
			<p class="clf-runner__question">{{ actual.question }}</p>

			<div class="clf-runner__options">
				<button
					v-for="(opcion, opcionIndice) in actual.options"
					:key="opcionIndice"
					type="button"
					class="clf-runner__option"
					:class="claseOpcion(opcionIndice)"
					:disabled="bloqueada"
					:aria-pressed="esElegida(opcionIndice)"
					@click="seleccionar(opcionIndice)"
				>
					<span class="clf-runner__letter">{{ letra(opcionIndice) }}</span>
					<span class="clf-runner__option-text">{{ opcion }}</span>
					<AppIcon
						v-if="revelado && esCorrectaOpcion(opcionIndice)"
						class="clf-runner__mark clf-runner__mark--ok"
						:icon="checkmark"
					/>
					<AppIcon
						v-else-if="revelado && esElegida(opcionIndice)"
						class="clf-runner__mark clf-runner__mark--bad"
						:icon="close"
					/>
				</button>
			</div>

			<div v-if="esMultiple && modo === 'practica' && !revelado" class="clf-runner__check">
				<AppButton :disabled="!respondida" @click="comprobar">Comprobar selección</AppButton>
			</div>

			<div
				v-if="revelado"
				class="clf-runner__feedback"
				:class="esCorrecta ? 'clf-runner__feedback--ok' : 'clf-runner__feedback--bad'"
			>
				<p class="clf-runner__feedback-title">
					{{ esCorrecta ? 'Correcto' : 'Incorrecto' }}
				</p>
				<p class="clf-runner__feedback-text">{{ actual.explanation }}</p>
				<div v-if="actual.porQueOpcion" class="clf-runner__why">
					<p
						v-for="(motivo, opcionIndice) in actual.porQueOpcion"
						:key="opcionIndice"
						class="clf-runner__why-item"
						:class="{ 'clf-runner__why-item--ok': esCorrectaOpcion(opcionIndice) }"
					>
						<strong>{{ letra(opcionIndice) }}.</strong> {{ motivo }}
					</p>
				</div>
				<p v-if="actual.fuentes && actual.fuentes.length > 0" class="clf-runner__fuentes">
					<span>Más información:</span>
					<a
						v-for="(url, fuenteIndice) in actual.fuentes"
						:key="fuenteIndice"
						:href="url"
						target="_blank"
						rel="noopener noreferrer"
					>{{ fuenteIndice + 1 }}</a>
				</p>
			</div>

			<div class="clf-runner__nav">
				<button
					type="button"
					class="clf-runner__back"
					:disabled="indice === 0"
					@click="anterior"
				>
					<AppIcon :icon="chevronBack" />
					Anterior
				</button>

				<AppButton
					v-if="!esUltima"
					:disabled="requiereRespuesta && !respondida"
					@click="siguiente"
				>
					Siguiente
					<template #end><AppIcon :icon="chevronForward" /></template>
				</AppButton>
				<AppButton v-else :disabled="requiereRespuesta && !respondida" @click="finalizar">
					{{ modo === 'final' ? 'Entregar examen' : 'Terminar práctica' }}
					<template #end><AppIcon :icon="flagOutline" /></template>
				</AppButton>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from 'vue';
import {
	checkmark,
	chevronBack,
	chevronForward,
	close,
	flagOutline,
	timeOutline,
} from 'ionicons/icons';
import type { PreguntaBaseClfC02 } from '@/data/clfC02/types';
import { esPreguntaMultiple, respuestasCorrectas } from '@/data/clfC02/types';
import {
	esRespuestaCorrecta,
	puntuarIntento,
	type FinalizacionPractica,
	type RespuestaClfC02,
} from '@/lib/clfC02Practice';
import AppButton from '@/components/ui/AppButton.vue';
import AppIcon from '@/components/ui/AppIcon.vue';
import ClfProgressBar from './ClfProgressBar.vue';

const props = withDefaults(
	defineProps<{
		preguntas: PreguntaBaseClfC02[];
		modo?: 'practica' | 'final';
		minutos?: number | null;
		titulo?: string;
		subtitulo?: string;
	}>(),
	{
		modo: 'practica',
		minutos: null,
		titulo: 'Práctica',
		subtitulo: 'Elige la mejor respuesta para cada caso',
	}
);

const emit = defineEmits<{ finalizado: [resultado: FinalizacionPractica] }>();

const indice = ref(0);
const respuestas = ref<Record<string, RespuestaClfC02>>({});
const comprobados = ref<Set<string>>(new Set());
const iniciadoEn = ref(Date.now());
const segundosRestantes = ref(0);
const enviado = ref(false);
let temporizador: ReturnType<typeof setInterval> | null = null;

const actual = computed(
	() => props.preguntas[Math.min(indice.value, props.preguntas.length - 1)]
);
const esMultiple = computed(() => Boolean(actual.value && esPreguntaMultiple(actual.value)));
const seleccionActual = computed<number[]>(() => {
	const valor = actual.value ? respuestas.value[actual.value.id] : undefined;
	if (Array.isArray(valor)) return valor;
	if (typeof valor === 'number') return [valor];
	return [];
});
const respondida = computed(() => {
	if (!actual.value) return false;
	if (esMultiple.value) return seleccionActual.value.length > 0;
	return respuestas.value[actual.value.id] !== undefined;
});
const esUltima = computed(() => indice.value >= props.preguntas.length - 1);
const requiereRespuesta = computed(() => props.modo === 'practica');
const revelado = computed(
	() =>
		props.modo === 'practica' &&
		respondida.value &&
		(!esMultiple.value || comprobados.value.has(actual.value.id)),
);
const esCorrecta = computed(() =>
	actual.value ? esRespuestaCorrecta(actual.value, respuestas.value[actual.value.id]) : false,
);
const bloqueada = computed(() => revelado.value);

const cuentaAtras = computed(() =>
	props.modo === 'final' && props.minutos && props.minutos > 0 ? props.minutos * 60 : null
);

const porcentajeRespondido = computed(() => {
	if (props.preguntas.length === 0) return 0;
	const contestadas = props.preguntas.filter((pregunta) => {
		const valor = respuestas.value[pregunta.id];
		return Array.isArray(valor) ? valor.length > 0 : valor !== undefined;
	}).length;
	return Math.round((contestadas / props.preguntas.length) * 100);
});

const tiempoFormateado = computed(() => {
	const total = Math.max(0, segundosRestantes.value);
	const minutos = Math.floor(total / 60);
	const segundos = total % 60;
	return `${minutos}:${String(segundos).padStart(2, '0')}`;
});

const letra = (posicion: number) => String.fromCharCode(65 + posicion);

function esCorrectaOpcion(opcionIndice: number): boolean {
	return Boolean(actual.value && respuestasCorrectas(actual.value).includes(opcionIndice));
}

function esElegida(opcionIndice: number): boolean {
	return seleccionActual.value.includes(opcionIndice);
}

function claseOpcion(opcionIndice: number) {
	const elegida = esElegida(opcionIndice);
	if (!revelado.value) return elegida ? 'clf-runner__option--elegida' : '';
	if (esCorrectaOpcion(opcionIndice)) return 'clf-runner__option--correcta';
	if (elegida) return 'clf-runner__option--incorrecta';
	return 'clf-runner__option--apagada';
}

function seleccionar(opcionIndice: number) {
	if (bloqueada.value || !actual.value) return;
	if (esMultiple.value) {
		const seleccion = new Set(seleccionActual.value);
		if (seleccion.has(opcionIndice)) seleccion.delete(opcionIndice);
		else seleccion.add(opcionIndice);
		respuestas.value = {
			...respuestas.value,
			[actual.value.id]: [...seleccion].sort((a, b) => a - b),
		};
		return;
	}
	respuestas.value = { ...respuestas.value, [actual.value.id]: opcionIndice };
}

function comprobar() {
	if (!actual.value || !respondida.value) return;
	const siguientes = new Set(comprobados.value);
	siguientes.add(actual.value.id);
	comprobados.value = siguientes;
}

function anterior() {
	if (indice.value > 0) indice.value -= 1;
}

function siguiente() {
	if (!esUltima.value) indice.value += 1;
}

function detenerTemporizador() {
	if (temporizador !== null) {
		clearInterval(temporizador);
		temporizador = null;
	}
}

function finalizar() {
	if (enviado.value) return;
	enviado.value = true;
	detenerTemporizador();
	emit('finalizado', {
		puntaje: puntuarIntento(props.preguntas, respuestas.value),
		respuestas: { ...respuestas.value },
		duracionMs: Date.now() - iniciadoEn.value,
	});
}

function reiniciarTemporizador() {
	detenerTemporizador();
	const total = cuentaAtras.value;
	if (total === null) {
		segundosRestantes.value = 0;
		return;
	}
	segundosRestantes.value = total;
	temporizador = setInterval(() => {
		if (segundosRestantes.value <= 1) {
			segundosRestantes.value = 0;
			finalizar();
			return;
		}
		segundosRestantes.value -= 1;
	}, 1000);
}

watch(
	() => props.preguntas,
	() => {
		indice.value = 0;
		respuestas.value = {};
		comprobados.value = new Set();
		enviado.value = false;
		iniciadoEn.value = Date.now();
		reiniciarTemporizador();
	}
);

watch(cuentaAtras, reiniciarTemporizador, { immediate: true });

onBeforeUnmount(detenerTemporizador);
</script>

<style scoped>
.clf-runner {
	border: 1px solid var(--mt-line);
	border-radius: var(--radius-card);
	background: var(--mt-surface);
	overflow: hidden;
}

.clf-runner__head {
	display: flex;
	align-items: center;
	gap: 12px;
	padding: 14px 16px;
	border-bottom: 1px solid var(--mt-line);
}

.clf-runner__head-text {
	flex: 1;
	min-width: 0;
}

.clf-runner__title {
	margin: 0;
	font-size: 15px;
	font-weight: 700;
	color: var(--mt-ink);
}

.clf-runner__sub {
	margin: 3px 0 0;
	font-size: 12.5px;
	color: var(--mt-ink-3);
}

.clf-runner__indicators {
	display: flex;
	align-items: center;
	gap: 10px;
	flex-shrink: 0;
}

.clf-runner__timer {
	display: inline-flex;
	align-items: center;
	gap: 4px;
	font-size: 13px;
	font-weight: 700;
	font-variant-numeric: tabular-nums;
	color: var(--mt-accent);
}

.clf-runner__timer--low {
	color: var(--mt-danger);
}

.clf-runner__counter {
	font-size: 12.5px;
	font-weight: 600;
	font-variant-numeric: tabular-nums;
	color: var(--mt-ink-3);
}

.clf-runner__body {
	padding: 16px;
	display: flex;
	flex-direction: column;
	gap: 14px;
}

.clf-runner__question {
	margin: 0;
	font-size: 15px;
	font-weight: 600;
	line-height: 1.55;
	letter-spacing: -0.006em;
	color: var(--mt-ink);
}

.clf-runner__options {
	display: flex;
	flex-direction: column;
	gap: 9px;
}

.clf-runner__option {
	display: flex;
	align-items: center;
	gap: 12px;
	width: 100%;
	min-height: 54px;
	padding: 10px 14px;
	text-align: left;
	border: 1px solid var(--mt-line);
	border-radius: 12px;
	background: var(--mt-surface);
	font-size: 14px;
	line-height: 1.5;
	color: var(--mt-ink);
	cursor: pointer;
	transition: border-color 0.15s ease, background 0.15s ease;
}

.clf-runner__option:disabled {
	cursor: default;
}

.clf-runner__option--elegida {
	border-color: color-mix(in srgb, var(--mt-accent) 50%, var(--mt-line));
	background: var(--mt-accent-soft);
}

.clf-runner__option--correcta {
	border-color: color-mix(in srgb, var(--mt-success) 45%, var(--mt-line));
	background: color-mix(in srgb, var(--mt-success) 7%, var(--mt-surface));
}

.clf-runner__option--incorrecta {
	border-color: color-mix(in srgb, var(--mt-danger) 45%, var(--mt-line));
	background: color-mix(in srgb, var(--mt-danger) 6%, var(--mt-surface));
}

.clf-runner__option--apagada {
	opacity: 0.55;
}

.clf-runner__letter {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 26px;
	height: 26px;
	flex-shrink: 0;
	border-radius: 999px;
	background: var(--mt-muted);
	font-size: 12.5px;
	font-weight: 700;
	color: var(--mt-ink-2);
}

.clf-runner__option--correcta .clf-runner__letter {
	background: color-mix(in srgb, var(--mt-success) 16%, transparent);
	color: var(--mt-success);
}

.clf-runner__option--incorrecta .clf-runner__letter {
	background: color-mix(in srgb, var(--mt-danger) 16%, transparent);
	color: var(--mt-danger);
}

.clf-runner__option-text {
	flex: 1;
	min-width: 0;
}

.clf-runner__mark {
	font-size: 19px;
	flex-shrink: 0;
}

.clf-runner__mark--ok {
	color: var(--mt-success);
}

.clf-runner__mark--bad {
	color: var(--mt-danger);
}

.clf-runner__feedback {
	padding: 12px 14px;
	border-radius: var(--radius-box);
	border: 1px solid var(--mt-line);
}

.clf-runner__feedback--ok {
	background: color-mix(in srgb, var(--mt-success) 8%, var(--mt-surface));
	border-color: color-mix(in srgb, var(--mt-success) 25%, var(--mt-line));
}

.clf-runner__feedback--bad {
	background: color-mix(in srgb, var(--mt-danger) 7%, var(--mt-surface));
	border-color: color-mix(in srgb, var(--mt-danger) 22%, var(--mt-line));
}

.clf-runner__feedback-title {
	margin: 0;
	font-size: 13px;
	font-weight: 700;
}

.clf-runner__feedback--ok .clf-runner__feedback-title {
	color: var(--mt-success);
}

.clf-runner__feedback--bad .clf-runner__feedback-title {
	color: var(--mt-danger);
}

.clf-runner__feedback-text {
	margin: 5px 0 0;
	font-size: 13px;
	line-height: 1.6;
	color: var(--mt-ink-2);
}

.clf-runner__check {
	display: flex;
	justify-content: flex-end;
}

.clf-runner__why {
	display: flex;
	flex-direction: column;
	gap: 5px;
	margin-top: 9px;
	padding-top: 8px;
	border-top: 1px dashed var(--mt-line);
}

.clf-runner__why-item {
	margin: 0;
	font-size: 12.5px;
	line-height: 1.5;
	color: var(--mt-ink-2);
}

.clf-runner__why-item--ok {
	color: var(--mt-success);
}

.clf-runner__fuentes {
	display: flex;
	flex-wrap: wrap;
	gap: 6px;
	align-items: center;
	margin: 9px 0 0;
	font-size: 12px;
	color: var(--mt-ink-3);
}

.clf-runner__fuentes a {
	color: var(--mt-accent);
	text-decoration: none;
	font-weight: 600;
}

.clf-runner__nav {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 10px;
}

.clf-runner__back {
	display: inline-flex;
	align-items: center;
	gap: 4px;
	min-height: 44px;
	padding: 0 8px;
	border: none;
	background: transparent;
	color: var(--mt-ink-2);
	font-size: 13.5px;
	font-weight: 600;
	cursor: pointer;
}

.clf-runner__back:disabled {
	opacity: 0.35;
	cursor: default;
}
</style>
