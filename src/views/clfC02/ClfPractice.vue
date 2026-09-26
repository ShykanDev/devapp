<template>
	<AppPage>
		<AppHeader :title="tituloCabecera" :back="rutaVolver" />

		<main class="app-content">
			<div class="app-container">
				<div v-if="!construccion" class="state-block">
					<AppIcon :icon="alertCircleOutline" class="state-block__icon" />
					<p class="state-block__title">Práctica no disponible</p>
					<p class="state-block__hint">No se pudo preparar la sesión solicitada.</p>
					<AppButton class="state-block__cta" to="/cloud-practitioner">Volver</AppButton>
				</div>

				<div v-else-if="!construccion.ok" class="state-block">
					<AppIcon :icon="alertCircleOutline" class="state-block__icon" />
					<p class="state-block__title">Práctica no disponible</p>
					<p class="state-block__hint">{{ construccion.motivo }}</p>
					<AppButton class="state-block__cta" to="/cloud-practitioner">Volver</AppButton>
				</div>

				<template v-else>
					<ul v-if="avisos.length > 0 && fase !== 'resultado'" class="avisos">
						<li v-for="aviso in avisos" :key="aviso">
							<AppIcon :icon="informationCircleOutline" />
							<span>{{ aviso }}</span>
						</li>
					</ul>

					<!-- Portada del examen final -->
					<section v-if="fase === 'intro'" class="intro">
						<header class="page-head">
							<p class="mt-kicker">Simulacro ponderado</p>
							<h1 class="mt-h-page">Examen final {{ certificado.codigo }}</h1>
							<p class="mt-body page-head__desc">
								{{ preguntas.length }} preguntas repartidas con el peso oficial de los
								{{ totalDominios }} dominios. Sin repetidos dentro del intento.
							</p>
						</header>

						<div class="intro__card">
							<div class="intro__row">
								<span class="intro__label">Distribución</span>
								<span class="intro__value">{{ distribucionTexto }}</span>
							</div>
							<div class="intro__row">
								<span class="intro__label">Duración real del examen</span>
								<span class="intro__value">{{ certificado.duracionMinutos }} min</span>
							</div>
							<button
								type="button"
								class="intro__toggle"
								role="switch"
								:aria-checked="temporizadorActivo"
								@click="alternarTemporizador"
							>
								<span class="intro__toggle-text">
									{{ temporizadorActivo ? 'Temporizador activado' : 'Sin temporizador' }}
								</span>
								<span class="intro__track" :class="{ 'intro__track--on': temporizadorActivo }">
									<span class="intro__thumb"></span>
								</span>
							</button>
						</div>

						<AppButton block @click="comenzar">
							<template #start><AppIcon :icon="playOutline" /></template>
							Comenzar examen
						</AppButton>
						<p class="intro__nota">
							El resultado es orientativo: no equivale al scoring escalado de AWS.
						</p>
					</section>

					<!-- Resultado -->
					<ClfPracticeResult
						v-else-if="fase === 'resultado' && resultado"
						:puntaje="resultado"
						:preguntas="preguntas"
						:respuestas="respuestas"
						:etiqueta="etiquetaResultado"
						@repetir="repetir"
						@repetir-falladas="repetirFalladas"
					/>

					<!-- Sesión -->
					<ClfPracticeRunner
						v-else
						:key="claveSesion"
						:preguntas="preguntas"
						:modo="esFinal ? 'final' : 'practica'"
						:minutos="minutosSesion"
						:titulo="tituloSesion"
						:subtitulo="subtituloSesion"
						@finalizado="alFinalizar"
					/>
				</template>
			</div>
		</main>
	</AppPage>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import {
	alertCircleOutline,
	informationCircleOutline,
	playOutline,
} from 'ionicons/icons';
import { certificadoClfC02, dominiosClfC02 } from '@/data/clfC02';
import { TODAS_LAS_PREGUNTAS } from '@/data/clfC02/registroContenido';
import type { PreguntaClfC02 } from '@/data/clfC02/types';
import {
	construirExamenFinal,
	construirPracticaDebil,
	construirPracticaDominio,
	construirPracticaTask,
	distribucionPorDominio,
	esRespuestaCorrecta,
	type FinalizacionPractica,
	type PuntajeIntento,
	type RespuestaClfC02,
	type ResultadoConstruccion,
} from '@/lib/clfC02Practice';
import {
	areasDebiles,
	fijarTemporizadorFinal,
	registrarIntento,
	registrarRespuesta,
	useClfC02Progress,
	type TipoIntentoClfC02,
} from '@/lib/clfC02Progress';
import AppPage from '@/components/ui/AppPage.vue';
import AppHeader from '@/components/ui/AppHeader.vue';
import AppButton from '@/components/ui/AppButton.vue';
import AppIcon from '@/components/ui/AppIcon.vue';
import ClfPracticeRunner from '@/components/clfC02/ClfPracticeRunner.vue';
import ClfPracticeResult from '@/components/clfC02/ClfPracticeResult.vue';

const route = useRoute();
const progreso = useClfC02Progress();
const certificado = certificadoClfC02;
const totalDominios = dominiosClfC02.length;

const scope = computed(() => String(route.params.scope ?? ''));
const esFinal = computed(() => scope.value === 'final');

const objetivosDebiles = computed(() => {
	const desdeQuery = String(route.query.objetivos ?? '')
		.split(',')
		.map((valor) => valor.trim())
		.filter(Boolean);
	if (desdeQuery.length > 0) return desdeQuery;
	return areasDebiles(progreso.value).slice(0, 5).map((area) => area.objetivoId);
});

function construir(scopeValor: string): ResultadoConstruccion {
	if (scopeValor.startsWith('task-')) {
		return construirPracticaTask(scopeValor.slice('task-'.length));
	}
	if (scopeValor.startsWith('dominio-')) {
		const numero = scopeValor.slice('dominio-'.length);
		const dominio = dominiosClfC02.find((candidato) => String(candidato.numero) === numero);
		return dominio
			? construirPracticaDominio(dominio.id)
			: { ok: false, motivo: `El dominio ${numero} no existe.` };
	}
	if (scopeValor === 'final') return construirExamenFinal();
	if (scopeValor === 'debil') {
		return construirPracticaDebil(objetivosDebiles.value, {
			priorizarFalladas: preguntasFalladasDeObjetivos(objetivosDebiles.value),
		});
	}
	return { ok: false, motivo: `Tipo de práctica desconocido: «${scopeValor}».` };
}

/** Preguntas ya falladas por el usuario en los objectives seleccionados. */
function preguntasFalladasDeObjetivos(objetivoIds: string[]): string[] {
	const seleccion = new Set(objetivoIds);
	return progreso.value.intentos
		.flatMap((intento) => intento.falladas)
		.filter((preguntaId) => {
			const pregunta = TODAS_LAS_PREGUNTAS.find((candidata) => candidata.id === preguntaId);
			return Boolean(pregunta?.objetivos.some((objetivoId) => seleccion.has(objetivoId)));
		});
}

const construccion = ref<ResultadoConstruccion | null>(null);
const preguntas = ref<PreguntaClfC02[]>([]);
const respuestas = ref<Record<string, RespuestaClfC02>>({});
const resultado = ref<PuntajeIntento | null>(null);
const fase = ref<'intro' | 'enCurso' | 'resultado'>('enCurso');
const claveSesion = ref(0);

const temporizadorActivo = computed(() => progreso.value.preferencias.temporizadorFinal);
const minutosSesion = computed(() => (esFinal.value && temporizadorActivo.value ? 90 : null));

const avisos = computed(() => (construccion.value?.ok ? construccion.value.avisos : []));

const distribucionTexto = computed(() => {
	const distribucion = distribucionPorDominio(preguntas.value);
	return dominiosClfC02
		.map((dominio) => `${dominio.numero}: ${distribucion[dominio.id] ?? 0}`)
		.join(' · ');
});

const tituloCabecera = computed(() => {
	if (scope.value === 'final') return 'Examen final';
	if (scope.value === 'debil') return 'Práctica de debilidades';
	if (scope.value.startsWith('task-')) return `Práctica · Task ${scope.value.slice(5)}`;
	if (scope.value.startsWith('dominio-')) return `Práctica · Dominio ${scope.value.slice(8)}`;
	return 'Práctica';
});

const rutaVolver = computed(() => {
	if (scope.value.startsWith('task-')) {
		return `/cloud-practitioner/task/${scope.value.slice(5)}`;
	}
	if (scope.value.startsWith('dominio-')) {
		const dominio = dominiosClfC02.find(
			(candidato) => String(candidato.numero) === scope.value.slice(8)
		);
		if (dominio) return `/cloud-practitioner/dominio/${dominio.id}`;
	}
	return '/cloud-practitioner';
});

const tituloSesion = computed(() => tituloCabecera.value);
const subtituloSesion = computed(() =>
	esFinal.value
		? 'Sin feedback hasta el final'
		: 'Feedback y explicación tras cada respuesta'
);

const etiquetaResultado = computed(() => {
	if (scope.value === 'final') return 'Examen final';
	return tituloCabecera.value;
});

const tipoIntento = computed<TipoIntentoClfC02>(() => {
	if (scope.value === 'final') return 'final';
	if (scope.value === 'debil') return 'repaso';
	if (scope.value.startsWith('dominio-')) return 'dominio';
	return 'task';
});

function iniciar() {
	const construido = construir(scope.value);
	construccion.value = construido;
	if (!construido.ok) {
		preguntas.value = [];
		return;
	}
	preguntas.value = construido.preguntas;
	respuestas.value = {};
	resultado.value = null;
	fase.value = esFinal.value ? 'intro' : 'enCurso';
	claveSesion.value += 1;
}

function comenzar() {
	fase.value = 'enCurso';
	claveSesion.value += 1;
}

function alternarTemporizador() {
	fijarTemporizadorFinal(!temporizadorActivo.value);
}

function repetir() {
	iniciar();
}

function repetirFalladas() {
	const falladas = new Set(resultado.value?.falladas ?? []);
	preguntas.value = preguntas.value.filter((pregunta) => falladas.has(pregunta.id));
	respuestas.value = {};
	resultado.value = null;
	fase.value = 'enCurso';
	claveSesion.value += 1;
}

function alFinalizar(payload: FinalizacionPractica) {
	// Evidencia por objective: cada intento mueve el estado de la unidad.
	for (const pregunta of preguntas.value) {
		const correcto = esRespuestaCorrecta(pregunta, payload.respuestas[pregunta.id]);
		for (const objetivoId of pregunta.objetivos) {
			registrarRespuesta(objetivoId, correcto);
		}
	}

	registrarIntento({
		tipo: tipoIntento.value,
		scope: scope.value,
		total: payload.puntaje.total,
		correctas: payload.puntaje.correctas,
		duracionMs: payload.duracionMs,
		falladas: payload.puntaje.falladas,
	});

	respuestas.value = payload.respuestas;
	resultado.value = payload.puntaje;
	fase.value = 'resultado';
}

// Se prepara la sesión en el propio setup para no mostrar un estado vacío intermedio.
iniciar();
</script>

<style scoped>
.avisos {
	margin: 0 0 16px;
	padding: 12px 14px;
	list-style: none;
	display: flex;
	flex-direction: column;
	gap: 8px;
	border-radius: var(--radius-box);
	background: var(--mt-muted);
}

.avisos li {
	display: flex;
	align-items: flex-start;
	gap: 8px;
	font-size: 12.5px;
	line-height: 1.5;
	color: var(--mt-ink-2);
}

.avisos .app-icon {
	flex-shrink: 0;
	margin-top: 2px;
	font-size: 14px;
	color: var(--mt-ink-3);
}

.page-head {
	padding: 8px 0 20px;
}

.page-head__desc {
	margin: 10px 0 0;
	max-width: 58ch;
}

.intro {
	display: flex;
	flex-direction: column;
	gap: 16px;
}

.intro__card {
	display: flex;
	flex-direction: column;
	gap: 12px;
	padding: 16px;
	border: 1px solid var(--mt-line);
	border-radius: var(--radius-card);
	background: var(--mt-surface);
}

.intro__row {
	display: flex;
	align-items: baseline;
	justify-content: space-between;
	gap: 12px;
}

.intro__label {
	font-size: 12.5px;
	color: var(--mt-ink-3);
}

.intro__value {
	font-size: 13.5px;
	font-weight: 600;
	color: var(--mt-ink);
}

.intro__toggle {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 12px;
	width: 100%;
	min-height: 48px;
	padding: 0;
	border: none;
	background: transparent;
	cursor: pointer;
}

.intro__toggle-text {
	font-size: 13.5px;
	font-weight: 600;
	color: var(--mt-ink);
}

.intro__track {
	position: relative;
	width: 46px;
	height: 27px;
	flex-shrink: 0;
	border-radius: 999px;
	background: var(--mt-muted);
	border: 1px solid var(--mt-line-strong);
	transition: background 0.2s ease, border-color 0.2s ease;
}

.intro__track--on {
	background: var(--mt-accent);
	border-color: var(--mt-accent);
}

.intro__thumb {
	position: absolute;
	top: 2px;
	left: 2px;
	width: 21px;
	height: 21px;
	border-radius: 999px;
	background: #fff;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
	transition: transform 0.2s ease;
}

.intro__track--on .intro__thumb {
	transform: translateX(19px);
}

.intro__nota {
	margin: 0;
	font-size: 12px;
	line-height: 1.5;
	color: var(--mt-ink-3);
}

.state-block {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 8px;
	padding: 40px 16px;
	text-align: center;
}

.state-block__icon {
	font-size: 28px;
	color: var(--mt-warning);
}

.state-block__title {
	margin: 0;
	font-size: 16px;
	font-weight: 600;
	color: var(--mt-ink);
}

.state-block__hint {
	margin: 0;
	max-width: 46ch;
	font-size: 13px;
	line-height: 1.55;
	color: var(--mt-ink-2);
}

.state-block__cta {
	margin-top: 12px;
}
</style>
