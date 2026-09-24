<template>
	<AppPage>
		<AppHeader title="Examen profesional" back="/cloud-practitioner" />

		<main class="app-content">
			<div class="app-container">
				<div v-if="!construccion" class="state-block">
					<AppIcon :icon="alertCircleOutline" class="state-block__icon" />
					<p class="state-block__title">Examen no disponible</p>
					<p class="state-block__hint">No se pudo preparar el examen profesional.</p>
					<AppButton class="state-block__cta" to="/cloud-practitioner">Volver</AppButton>
				</div>

				<div v-else-if="!construccion.ok" class="state-block">
					<AppIcon :icon="alertCircleOutline" class="state-block__icon" />
					<p class="state-block__title">Banco en preparación</p>
					<p class="state-block__hint">{{ construccion.motivo }}</p>
					<AppButton class="state-block__cta" to="/cloud-practitioner">Volver</AppButton>
				</div>

				<template v-else>
					<!-- Portada -->
					<section v-if="fase === 'intro'" class="intro">
						<header class="page-head">
							<p class="mt-kicker">Nivel difícil · orientativo</p>
							<h1 class="mt-h-page">Examen profesional {{ certificado.codigo }}</h1>
							<p class="mt-body page-head__desc">
								{{ preguntas.length }} preguntas de nivel difícil con distractores muy
								similares, repartidas con la cuota oficial de los {{ totalDominios }} dominios.
								Sin feedback hasta el final.
							</p>
						</header>

						<ul class="avisos">
							<li v-for="aviso in avisos" :key="aviso">
								<AppIcon :icon="informationCircleOutline" />
								<span>{{ aviso }}</span>
							</li>
						</ul>

						<div class="intro__card">
							<div class="intro__row">
								<span class="intro__label">Distribución por dominio</span>
								<span class="intro__value">{{ distribucionTexto }}</span>
							</div>
							<div class="intro__row">
								<span class="intro__label">Cuota oficial</span>
								<span class="intro__value">{{ cuotaTexto }} = {{ preguntas.length }}</span>
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
							El resultado es orientativo: no equivale al scoring escalado de AWS. Aprueba
							orientativamente desde el 70%.
						</p>
					</section>

					<!-- Resultado -->
					<ClfProfessionalResult
						v-else-if="fase === 'resultado' && resultado"
						:puntaje="resultado"
						:preguntas="preguntas"
						:respuestas="respuestas"
						etiqueta="Examen profesional"
						@repetir="iniciar"
						@repetir-falladas="repetirFalladas"
					/>

					<!-- Sesión -->
					<ClfPracticeRunner
						v-else
						:key="claveSesion"
						:preguntas="preguntas"
						modo="final"
						:minutos="minutosSesion"
						titulo="Examen profesional"
						subtitulo="Sin feedback hasta el final"
						@finalizado="alFinalizar"
					/>
				</template>
			</div>
		</main>
	</AppPage>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import {
	alertCircleOutline,
	informationCircleOutline,
	playOutline,
} from 'ionicons/icons';
import { certificadoClfC02, dominiosClfC02 } from '@/data/clfC02';
import { CUOTAS_PROFESIONAL } from '@/data/clfC02/validacion';
import type { PreguntaProfesionalClfC02 } from '@/data/clfC02/profesional/types';
import {
	construirExamenProfesional,
	distribucionPorDominio,
	type FinalizacionPractica,
	type PuntajeIntento,
	type ResultadoProfesional,
} from '@/lib/clfC02Practice';
import {
	fijarTemporizadorFinal,
	registrarIntento,
	registrarRespuesta,
	useClfC02Progress,
} from '@/lib/clfC02Progress';
import AppPage from '@/components/ui/AppPage.vue';
import AppHeader from '@/components/ui/AppHeader.vue';
import AppButton from '@/components/ui/AppButton.vue';
import AppIcon from '@/components/ui/AppIcon.vue';
import ClfPracticeRunner from '@/components/clfC02/ClfPracticeRunner.vue';
import ClfProfessionalResult from '@/components/clfC02/ClfProfessionalResult.vue';

const progreso = useClfC02Progress();
const certificado = certificadoClfC02;
const totalDominios = dominiosClfC02.length;

const construccion = ref<ResultadoProfesional | null>(null);
const preguntas = ref<PreguntaProfesionalClfC02[]>([]);
const respuestas = ref<Record<string, number>>({});
const resultado = ref<PuntajeIntento | null>(null);
const fase = ref<'intro' | 'enCurso' | 'resultado'>('intro');
const claveSesion = ref(0);

const temporizadorActivo = computed(() => progreso.value.preferencias.temporizadorFinal);
const minutosSesion = computed(() => (temporizadorActivo.value ? 90 : null));

const avisos = computed(() => (construccion.value?.ok ? construccion.value.avisos : []));

const distribucionTexto = computed(() => {
	const distribucion = distribucionPorDominio(preguntas.value);
	return dominiosClfC02
		.map((dominio) => `${dominio.numero}: ${distribucion[dominio.id] ?? 0}`)
		.join(' · ');
});

const cuotaTexto = computed(() =>
	dominiosClfC02
		.map((dominio) => `${dominio.numero}: ${CUOTAS_PROFESIONAL[dominio.id] ?? 0}`)
		.join(' · ')
);

function iniciar() {
	const construido = construirExamenProfesional();
	construccion.value = construido;
	if (!construido.ok) {
		preguntas.value = [];
		return;
	}
	preguntas.value = construido.preguntas;
	respuestas.value = {};
	resultado.value = null;
	fase.value = 'intro';
	claveSesion.value += 1;
}

function comenzar() {
	fase.value = 'enCurso';
	claveSesion.value += 1;
}

function alternarTemporizador() {
	fijarTemporizadorFinal(!temporizadorActivo.value);
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
	for (const pregunta of preguntas.value) {
		const correcto = payload.respuestas[pregunta.id] === pregunta.correctAnswer;
		for (const objetivoId of pregunta.objetivos) {
			registrarRespuesta(objetivoId, correcto);
		}
	}

	registrarIntento({
		tipo: 'profesional',
		scope: 'profesional',
		total: payload.puntaje.total,
		correctas: payload.puntaje.correctas,
		duracionMs: payload.duracionMs,
		falladas: payload.puntaje.falladas,
	});

	respuestas.value = payload.respuestas;
	resultado.value = payload.puntaje;
	fase.value = 'resultado';
}

iniciar();
</script>

<style scoped>
.page-head {
	padding: 8px 0 16px;
}

.page-head__desc {
	margin: 10px 0 0;
	max-width: 60ch;
}

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
	text-align: right;
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
	max-width: 52ch;
	font-size: 13px;
	line-height: 1.55;
	color: var(--mt-ink-2);
}

.state-block__cta {
	margin-top: 12px;
}
</style>
