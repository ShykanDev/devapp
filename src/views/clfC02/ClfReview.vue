<template>
	<AppPage>
		<AppHeader title="Repaso" back="/cloud-practitioner/debiles" />

		<main class="app-content">
			<div class="app-container">
				<div v-if="!sesion" class="state-block">
					<AppIcon :icon="sparklesOutline" class="state-block__icon" />
					<p class="state-block__title">Nada que repasar todavía</p>
					<p class="state-block__hint">
						El repaso se construye con tus debilidades registradas. Practica o estudia un task
						para que haya material.
					</p>
					<AppButton class="state-block__cta" :to="`/cloud-practitioner/task/${primeraTask}`">
						Empezar por Task {{ primeraTask }}
					</AppButton>
				</div>

				<div v-else-if="!sesion.ok" class="state-block">
					<AppIcon :icon="alertCircleOutline" class="state-block__icon" />
					<p class="state-block__title">Repaso no disponible</p>
					<p class="state-block__hint">{{ sesion.motivo }}</p>
					<AppButton class="state-block__cta" to="/cloud-practitioner">Volver</AppButton>
				</div>

				<template v-else>
					<ol class="pasos">
						<li
							v-for="(paso, indice) in pasos"
							:key="paso.fase"
							:class="{
								'pasos__item': true,
								'pasos__item--activo': paso.fase === fase,
								'pasos__item--hecho': indice < indiceFase,
							}"
						>
							<span class="pasos__num">{{ indice + 1 }}</span>
							<span class="pasos__label">{{ paso.etiqueta }}</span>
						</li>
					</ol>

					<!-- Introducción -->
					<section v-if="fase === 'intro'" class="intro">
						<header class="page-head">
							<p class="mt-kicker">Sesión mixta</p>
							<h1 class="mt-h-page">Repaso dirigido</h1>
							<p class="mt-body page-head__desc">
								Prioriza tus errores frecuentes, los objectives sin practicar y los críticos
								sin dominar.
							</p>
						</header>
						<div class="intro__card">
							<p class="intro__line">{{ sesion.preguntas.length }} preguntas</p>
							<p class="intro__line">{{ sesion.tarjetas.length }} tarjetas</p>
							<p class="intro__line">{{ sesion.pares.length }} comparaciones</p>
						</div>
						<AppButton block @click="empezarPreguntas">
							<template #start><AppIcon :icon="playOutline" /></template>
							Comenzar repaso
						</AppButton>
					</section>

					<!-- Preguntas -->
					<section v-else-if="fase === 'preguntas'" class="fase">
						<ClfPracticeRunner
							:key="claveSesion"
							:preguntas="preguntasActivas"
							modo="practica"
							titulo="Repaso · preguntas"
							subtitulo="Feedback y explicación tras cada respuesta"
							@finalizado="alFinalizarPreguntas"
						/>
					</section>

					<!-- Tarjetas -->
					<section v-else-if="fase === 'tarjetas'" class="fase">
						<ClfFlashcardDeck
							:tarjetas="sesion.tarjetas"
							titulo="Repaso · flashcards"
							@sabida="marcarTarjeta($event, true)"
							@fallada="marcarTarjeta($event, false)"
						/>
						<AppButton block class="fase__cta" @click="siguienteFase">
							Continuar
							<template #end><AppIcon :icon="chevronForward" /></template>
						</AppButton>
					</section>

					<!-- Comparaciones -->
					<section v-else-if="fase === 'comparaciones'" class="fase">
						<div class="pares">
							<ClfComparisonCard v-for="par in sesion.pares" :key="par.id" :par="par" />
						</div>
						<AppButton block class="fase__cta" @click="fase = 'resumen'">
							Terminar repaso
							<template #end><AppIcon :icon="checkmarkOutline" /></template>
						</AppButton>
					</section>

					<!-- Resumen -->
					<section v-else class="fase">
						<div class="resumen-card">
							<p class="resumen-card__title">Repaso completado</p>
							<p class="resumen-card__text">
								{{ resultadoRepaso?.correctas ?? 0 }} de
								{{ resultadoRepaso?.total ?? 0 }} preguntas correctas
								({{ resultadoRepaso?.porcentaje ?? 0 }}%).
							</p>
							<p class="resumen-card__hint">
								El porcentaje es orientativo y no equivale al scoring escalado de AWS.
							</p>
						</div>
						<AppButton
							v-if="(resultadoRepaso?.falladas.length ?? 0) > 0"
							block
							@click="repetirFalladas"
						>
							<template #start><AppIcon :icon="repeatOutline" /></template>
							Repetir solo lo fallado
						</AppButton>
						<RouterLink class="resumen-link" to="/cloud-practitioner/debiles">
							Volver a debilidades
						</RouterLink>
					</section>
				</template>
			</div>
		</main>
	</AppPage>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import {
	alertCircleOutline,
	checkmarkOutline,
	chevronForward,
	playOutline,
	repeatOutline,
	sparklesOutline,
} from 'ionicons/icons';
import { taskStatementsClfC02 } from '@/data/clfC02';
import { TAREAS_CON_CONTENIDO } from '@/data/clfC02/registroContenido';
import type { PreguntaClfC02 } from '@/data/clfC02/types';
import {
	construirSesionRepaso,
	type FinalizacionPractica,
	type PuntajeIntento,
	type ResultadoRepaso,
} from '@/lib/clfC02Practice';
import {
	areasDebiles,
	registrarIntento,
	registrarRespuesta,
	registrarTarjeta,
	useClfC02Progress,
} from '@/lib/clfC02Progress';
import AppPage from '@/components/ui/AppPage.vue';
import AppHeader from '@/components/ui/AppHeader.vue';
import AppButton from '@/components/ui/AppButton.vue';
import AppIcon from '@/components/ui/AppIcon.vue';
import ClfComparisonCard from '@/components/clfC02/ClfComparisonCard.vue';
import ClfFlashcardDeck from '@/components/clfC02/ClfFlashcardDeck.vue';
import ClfPracticeRunner from '@/components/clfC02/ClfPracticeRunner.vue';

type Fase = 'intro' | 'preguntas' | 'tarjetas' | 'comparaciones' | 'resumen';

const progreso = useClfC02Progress();
const primeraTask = TAREAS_CON_CONTENIDO[0] ?? taskStatementsClfC02[0]?.id ?? '';

/** La sesión se congela al entrar: la evidencia de la propia sesión no debe alterarla. */
function construirSesionInicial(): ResultadoRepaso {
	const objetivos = areasDebiles(progreso.value)
		.slice(0, 5)
		.map((area) => area.objetivoId);
	if (objetivos.length === 0) {
		return { ok: false, motivo: 'Sin debilidades registradas.' };
	}
	return construirSesionRepaso(objetivos, { n: 8 });
}

const sesion = ref<ResultadoRepaso>(construirSesionInicial());

const pasos: Array<{ fase: Fase; etiqueta: string }> = [
	{ fase: 'intro', etiqueta: 'Preparación' },
	{ fase: 'preguntas', etiqueta: 'Preguntas' },
	{ fase: 'tarjetas', etiqueta: 'Tarjetas' },
	{ fase: 'comparaciones', etiqueta: 'Comparaciones' },
	{ fase: 'resumen', etiqueta: 'Resumen' },
];

const fase = ref<Fase>('intro');
const claveSesion = ref(0);
const resultadoRepaso = ref<PuntajeIntento | null>(null);
const preguntasActivas = ref<PreguntaClfC02[]>([]);

const indiceFase = computed(() => pasos.findIndex((paso) => paso.fase === fase.value));

function empezarPreguntas() {
	if (!sesion.value.ok) return;
	preguntasActivas.value = sesion.value.preguntas;
	fase.value = 'preguntas';
	claveSesion.value += 1;
}

function siguienteFase() {
	if (fase.value === 'tarjetas' && sesion.value.ok && sesion.value.pares.length > 0) {
		fase.value = 'comparaciones';
		return;
	}
	fase.value = 'resumen';
}

function alFinalizarPreguntas(payload: FinalizacionPractica) {
	for (const pregunta of preguntasActivas.value) {
		const correcto = payload.respuestas[pregunta.id] === pregunta.correctAnswer;
		for (const objetivoId of pregunta.objetivos) {
			registrarRespuesta(objetivoId, correcto);
		}
	}

	registrarIntento({
		tipo: 'repaso',
		scope: 'repaso',
		total: payload.puntaje.total,
		correctas: payload.puntaje.correctas,
		duracionMs: payload.duracionMs,
		falladas: payload.puntaje.falladas,
	});

	resultadoRepaso.value = payload.puntaje;
	fase.value = sesion.value.ok && sesion.value.tarjetas.length > 0 ? 'tarjetas' : 'comparaciones';
}

function marcarTarjeta(tarjetaId: string, sabia: boolean) {
	if (!sesion.value.ok) return;
	const tarjeta = sesion.value.tarjetas.find((candidata) => candidata.id === tarjetaId);
	if (!tarjeta) return;
	registrarTarjeta(tarjeta.id, tarjeta.objetivos, sabia);
}

function repetirFalladas() {
	const falladas = new Set(resultadoRepaso.value?.falladas ?? []);
	const restantes = preguntasActivas.value.filter((pregunta) => falladas.has(pregunta.id));
	if (restantes.length === 0) return;
	preguntasActivas.value = restantes;
	resultadoRepaso.value = null;
	fase.value = 'preguntas';
	claveSesion.value += 1;
}
</script>

<style scoped>
.pasos {
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
	margin: 0 0 20px;
	padding: 0;
	list-style: none;
}

.pasos__item {
	display: inline-flex;
	align-items: center;
	gap: 6px;
	padding: 5px 10px 5px 6px;
	border-radius: 999px;
	background: var(--mt-muted);
	font-size: 11.5px;
	color: var(--mt-ink-3);
}

.pasos__item--activo {
	background: var(--mt-accent-soft);
	color: var(--mt-accent);
	font-weight: 600;
}

.pasos__num {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 18px;
	height: 18px;
	border-radius: 999px;
	background: var(--mt-surface);
	font-size: 10.5px;
	font-weight: 700;
}

.page-head {
	padding: 4px 0 18px;
}

.page-head__desc {
	margin: 10px 0 0;
	max-width: 56ch;
}

.intro,
.fase {
	display: flex;
	flex-direction: column;
	gap: 16px;
}

.intro__card {
	display: flex;
	flex-direction: column;
	gap: 10px;
	padding: 16px;
	border: 1px solid var(--mt-line);
	border-radius: var(--radius-card);
	background: var(--mt-surface);
}

.intro__line {
	margin: 0;
	font-size: 13.5px;
	color: var(--mt-ink-2);
}

.fase__cta {
	margin-top: 4px;
}

.pares {
	display: flex;
	flex-direction: column;
	gap: 12px;
}

.resumen-card {
	display: flex;
	flex-direction: column;
	gap: 8px;
	padding: 18px;
	border: 1px solid var(--mt-line);
	border-radius: var(--radius-card);
	background: var(--mt-surface);
}

.resumen-card__title {
	margin: 0;
	font-size: 16px;
	font-weight: 700;
	color: var(--mt-ink);
}

.resumen-card__text {
	margin: 0;
	font-size: 14px;
	color: var(--mt-ink-2);
}

.resumen-card__hint {
	margin: 0;
	font-size: 12px;
	color: var(--mt-ink-3);
}

.resumen-link {
	margin-top: 4px;
	font-size: 13.5px;
	font-weight: 600;
	color: var(--mt-accent);
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
	color: var(--mt-accent);
}

.state-block__title {
	margin: 0;
	font-size: 16px;
	font-weight: 600;
	color: var(--mt-ink);
}

.state-block__hint {
	margin: 0;
	max-width: 44ch;
	font-size: 13px;
	line-height: 1.55;
	color: var(--mt-ink-2);
}

.state-block__cta {
	margin-top: 12px;
}
</style>
