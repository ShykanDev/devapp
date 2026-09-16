<template>
	<section class="aif-runner">
		<header class="aif-runner__head">
			<div class="aif-runner__head-text">
				<p class="aif-runner__title">{{ titulo }}</p>
				<p class="aif-runner__sub">{{ subtitulo }}</p>
			</div>
			<div class="aif-runner__indicators">
				<span v-if="cuentaAtras !== null" class="aif-runner__timer" :class="{ 'aif-runner__timer--low': segundosRestantes <= 300 }">
					<AppIcon :icon="timeOutline" />
					{{ tiempoFormateado }}
				</span>
				<span class="aif-runner__counter">
					{{ Math.min(indice + 1, preguntas.length) }} / {{ preguntas.length }}
				</span>
			</div>
		</header>

		<AifProgressBar :valor="porcentajeRespondido" compacta />

		<div class="aif-runner__body">
			<p class="aif-runner__question">{{ actual.question }}</p>

			<div class="aif-runner__options">
				<button
					v-for="(opcion, opcionIndice) in actual.options"
					:key="opcionIndice"
					type="button"
					class="aif-runner__option"
					:class="claseOpcion(opcionIndice)"
					:disabled="bloqueada"
					:aria-pressed="respuestas[actual.id] === opcionIndice"
					@click="seleccionar(opcionIndice)"
				>
					<span class="aif-runner__letter">{{ letra(opcionIndice) }}</span>
					<span class="aif-runner__option-text">{{ opcion }}</span>
					<AppIcon
						v-if="revelado && opcionIndice === actual.correctAnswer"
						class="aif-runner__mark aif-runner__mark--ok"
						:icon="checkmark"
					/>
					<AppIcon
						v-else-if="revelado && opcionIndice === respuestas[actual.id]"
						class="aif-runner__mark aif-runner__mark--bad"
						:icon="close"
					/>
				</button>
			</div>

			<div
				v-if="revelado"
				class="aif-runner__feedback"
				:class="esCorrecta ? 'aif-runner__feedback--ok' : 'aif-runner__feedback--bad'"
			>
				<p class="aif-runner__feedback-title">
					{{ esCorrecta ? 'Correcto' : 'Incorrecto' }}
				</p>
				<p class="aif-runner__feedback-text">{{ actual.explanation }}</p>
			</div>

			<div class="aif-runner__nav">
				<button
					type="button"
					class="aif-runner__back"
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
import type { PreguntaAifC01 } from '@/data/aifC01/types';
import { puntuarIntento, type FinalizacionPractica } from '@/lib/aifC01Practice';
import AppButton from '@/components/ui/AppButton.vue';
import AppIcon from '@/components/ui/AppIcon.vue';
import AifProgressBar from './AifProgressBar.vue';

const props = withDefaults(
	defineProps<{
		preguntas: PreguntaAifC01[];
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
const respuestas = ref<Record<string, number>>({});
const iniciadoEn = ref(Date.now());
const segundosRestantes = ref(0);
const enviado = ref(false);
let temporizador: ReturnType<typeof setInterval> | null = null;

const actual = computed(
	() => props.preguntas[Math.min(indice.value, props.preguntas.length - 1)]
);
const respondida = computed(() => respuestas.value[actual.value?.id] !== undefined);
const esUltima = computed(() => indice.value >= props.preguntas.length - 1);
const requiereRespuesta = computed(() => props.modo === 'practica');
const revelado = computed(() => props.modo === 'practica' && respondida.value);
const esCorrecta = computed(
	() => respuestas.value[actual.value?.id] === actual.value?.correctAnswer
);
const bloqueada = computed(() => revelado.value);

const cuentaAtras = computed(() =>
	props.modo === 'final' && props.minutos && props.minutos > 0 ? props.minutos * 60 : null
);

const porcentajeRespondido = computed(() => {
	if (props.preguntas.length === 0) return 0;
	return Math.round((Object.keys(respuestas.value).length / props.preguntas.length) * 100);
});

const tiempoFormateado = computed(() => {
	const total = Math.max(0, segundosRestantes.value);
	const minutos = Math.floor(total / 60);
	const segundos = total % 60;
	return `${minutos}:${String(segundos).padStart(2, '0')}`;
});

const letra = (posicion: number) => String.fromCharCode(65 + posicion);

function claseOpcion(opcionIndice: number) {
	const elegida = respuestas.value[actual.value?.id] === opcionIndice;
	if (!revelado.value) return elegida ? 'aif-runner__option--elegida' : '';
	if (opcionIndice === actual.value.correctAnswer) return 'aif-runner__option--correcta';
	if (elegida) return 'aif-runner__option--incorrecta';
	return 'aif-runner__option--apagada';
}

function seleccionar(opcionIndice: number) {
	if (bloqueada.value || !actual.value) return;
	respuestas.value = { ...respuestas.value, [actual.value.id]: opcionIndice };
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
		enviado.value = false;
		iniciadoEn.value = Date.now();
		reiniciarTemporizador();
	}
);

watch(cuentaAtras, reiniciarTemporizador, { immediate: true });

onBeforeUnmount(detenerTemporizador);
</script>

<style scoped>
.aif-runner {
	border: 1px solid var(--mt-line);
	border-radius: var(--radius-card);
	background: var(--mt-surface);
	overflow: hidden;
}

.aif-runner__head {
	display: flex;
	align-items: center;
	gap: 12px;
	padding: 14px 16px;
	border-bottom: 1px solid var(--mt-line);
}

.aif-runner__head-text {
	flex: 1;
	min-width: 0;
}

.aif-runner__title {
	margin: 0;
	font-size: 15px;
	font-weight: 700;
	color: var(--mt-ink);
}

.aif-runner__sub {
	margin: 3px 0 0;
	font-size: 12.5px;
	color: var(--mt-ink-3);
}

.aif-runner__indicators {
	display: flex;
	align-items: center;
	gap: 10px;
	flex-shrink: 0;
}

.aif-runner__timer {
	display: inline-flex;
	align-items: center;
	gap: 4px;
	font-size: 13px;
	font-weight: 700;
	font-variant-numeric: tabular-nums;
	color: var(--mt-accent);
}

.aif-runner__timer--low {
	color: var(--mt-danger);
}

.aif-runner__counter {
	font-size: 12.5px;
	font-weight: 600;
	font-variant-numeric: tabular-nums;
	color: var(--mt-ink-3);
}

.aif-runner__body {
	padding: 16px;
	display: flex;
	flex-direction: column;
	gap: 14px;
}

.aif-runner__question {
	margin: 0;
	font-size: 15px;
	font-weight: 600;
	line-height: 1.55;
	letter-spacing: -0.006em;
	color: var(--mt-ink);
}

.aif-runner__options {
	display: flex;
	flex-direction: column;
	gap: 9px;
}

.aif-runner__option {
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

.aif-runner__option:disabled {
	cursor: default;
}

.aif-runner__option--elegida {
	border-color: color-mix(in srgb, var(--mt-accent) 50%, var(--mt-line));
	background: var(--mt-accent-soft);
}

.aif-runner__option--correcta {
	border-color: color-mix(in srgb, var(--mt-success) 45%, var(--mt-line));
	background: color-mix(in srgb, var(--mt-success) 7%, var(--mt-surface));
}

.aif-runner__option--incorrecta {
	border-color: color-mix(in srgb, var(--mt-danger) 45%, var(--mt-line));
	background: color-mix(in srgb, var(--mt-danger) 6%, var(--mt-surface));
}

.aif-runner__option--apagada {
	opacity: 0.55;
}

.aif-runner__letter {
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

.aif-runner__option--correcta .aif-runner__letter {
	background: color-mix(in srgb, var(--mt-success) 16%, transparent);
	color: var(--mt-success);
}

.aif-runner__option--incorrecta .aif-runner__letter {
	background: color-mix(in srgb, var(--mt-danger) 16%, transparent);
	color: var(--mt-danger);
}

.aif-runner__option-text {
	flex: 1;
	min-width: 0;
}

.aif-runner__mark {
	font-size: 19px;
	flex-shrink: 0;
}

.aif-runner__mark--ok {
	color: var(--mt-success);
}

.aif-runner__mark--bad {
	color: var(--mt-danger);
}

.aif-runner__feedback {
	padding: 12px 14px;
	border-radius: var(--radius-box);
	border: 1px solid var(--mt-line);
}

.aif-runner__feedback--ok {
	background: color-mix(in srgb, var(--mt-success) 8%, var(--mt-surface));
	border-color: color-mix(in srgb, var(--mt-success) 25%, var(--mt-line));
}

.aif-runner__feedback--bad {
	background: color-mix(in srgb, var(--mt-danger) 7%, var(--mt-surface));
	border-color: color-mix(in srgb, var(--mt-danger) 22%, var(--mt-line));
}

.aif-runner__feedback-title {
	margin: 0;
	font-size: 13px;
	font-weight: 700;
}

.aif-runner__feedback--ok .aif-runner__feedback-title {
	color: var(--mt-success);
}

.aif-runner__feedback--bad .aif-runner__feedback-title {
	color: var(--mt-danger);
}

.aif-runner__feedback-text {
	margin: 5px 0 0;
	font-size: 13px;
	line-height: 1.6;
	color: var(--mt-ink-2);
}

.aif-runner__nav {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 10px;
}

.aif-runner__back {
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

.aif-runner__back:disabled {
	opacity: 0.35;
	cursor: default;
}
</style>
