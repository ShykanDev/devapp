<template>
	<AppPage>
		<AppHeader :title="`Task ${taskId}`" :back="rutaVolver" />

		<main class="app-content">
			<div class="app-container">
				<div v-if="!task" class="state-block">
					<AppIcon :icon="alertCircleOutline" class="state-block__icon" />
					<p class="state-block__title">Task no encontrado</p>
					<p class="state-block__hint">La task {{ taskId }} no existe en el blueprint.</p>
					<AppButton class="state-block__cta" to="/cloud-practitioner">Volver</AppButton>
				</div>

				<div v-else-if="pendiente" class="state-block">
					<AppIcon :icon="timeOutline" class="state-block__icon" />
					<p class="state-block__title">Contenido en preparación</p>
					<p class="state-block__hint">
						La task {{ task.id }} forma parte del blueprint, pero su contenido de estudio aún no
						está autorizado. Todavía no hay objectives, tarjetas ni preguntas que mostrar aquí.
					</p>
					<AppButton class="state-block__cta" :to="rutaVolver">Volver al dominio</AppButton>
				</div>

				<template v-else>
					<header class="page-head">
						<p class="mt-kicker">Dominio {{ task.dominioNumero }} · {{ task.pesoDominio }}% del examen</p>
						<h1 class="mt-h-page">{{ task.titulo }}</h1>
						<ul class="page-head__meta">
							<li>{{ objetivos.length }} objectives</li>
							<li>{{ objetivosCriticos.length }} críticos</li>
							<li>{{ grupos.length }} grupos temáticos</li>
							<li>{{ tarjetas.length }} flashcards · {{ preguntas.length }} preguntas</li>
						</ul>
					</header>

					<section class="section">
						<div class="section__head">
							<h2 class="mt-h-2">Objectives</h2>
							<p class="mt-label">{{ objetivosConEvidencia }}/{{ objetivos.length }} con evidencia</p>
						</div>
						<div class="group-list">
							<ClfObjectiveRow
								v-for="objetivo in objetivos"
								:key="objetivo.id"
								:objetivo="objetivo.datos"
								:indice="objetivo.datos.index"
								:estado="objetivo.estado"
								:motivo="objetivo.motivo"
								accionable
								@estudiado="marcarEntendido(objetivo.id)"
							/>
						</div>
						<p class="section__nota">
							Estados por evidencia: <strong>pendiente</strong> → <strong>estudiado</strong> (marcas
							«Entendido») → <strong>practicado</strong> (respondes o aciertas una tarjeta) →
							<strong>dominado</strong> (≥4 aciertos en las últimas 5 respuestas, la última correcta
							y ≥1 tarjeta sabida).
						</p>
					</section>

					<section class="section">
						<div class="section__head">
							<h2 class="mt-h-2">Contenido</h2>
							<p class="mt-label">{{ grupos.length }} grupos</p>
						</div>
						<div class="grupos">
							<article v-for="grupo in grupos" :id="grupo.id" :key="grupo.id" class="grupo">
								<header class="grupo__head">
									<h3 class="grupo__title">{{ grupo.titulo }}</h3>
									<div class="grupo__objetivos">
										<span v-for="objetivoId in grupo.objetivos" :key="objetivoId" class="grupo__chip">
											Objective {{ objetivoId.split('#')[1] }}
										</span>
									</div>
								</header>
								<ClfContentBlocks :bloques="grupo.bloques" />
								<div v-if="grupo.preguntasGuia.length > 0" class="grupo__guia">
									<p class="grupo__guia-label">Preguntas guía</p>
									<ul>
										<li v-for="pregunta in grupo.preguntasGuia" :key="pregunta">{{ pregunta }}</li>
									</ul>
								</div>
							</article>
						</div>
					</section>

					<section v-if="tarjetas.length > 0" class="section">
						<ClfFlashcardDeck
							:tarjetas="tarjetas"
							titulo="Flashcards del task"
							@sabida="marcarTarjeta($event, true)"
							@fallada="marcarTarjeta($event, false)"
						/>
					</section>

					<section class="section">
						<div class="practice-card">
							<div class="practice-card__text">
								<p class="practice-card__title">Practicar {{ task.id }}</p>
								<p class="practice-card__sub">
									{{ preguntas.length }} preguntas con feedback y explicación en modo práctica.
								</p>
							</div>
							<AppButton v-if="preguntas.length > 0" :to="`/cloud-practitioner/practica/task-${task.id}`">
								<template #start><AppIcon :icon="clipboardOutline" /></template>
								Practicar {{ task.id }}
							</AppButton>
							<AppButton v-else disabled>Sin preguntas todavía</AppButton>
						</div>
					</section>
				</template>
			</div>
		</main>
	</AppPage>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { alertCircleOutline, clipboardOutline, timeOutline } from 'ionicons/icons';
import { objetivosClfC02, taskStatementsClfC02 } from '@/data/clfC02';
import {
	TAREAS_PENDIENTES,
	gruposDeTask,
	preguntasDeTask,
	tarjetasDeTask,
} from '@/data/clfC02/registroContenido';
import {
	estadoDeObjetivo,
	marcarEstudiado,
	motivoEstadoObjetivo,
	registrarTarjeta as registrarTarjetaProgreso,
	useClfC02Progress,
} from '@/lib/clfC02Progress';
import type { GrupoTematico, PreguntaClfC02, TarjetaClfC02 } from '@/data/clfC02/types';
import AppPage from '@/components/ui/AppPage.vue';
import AppHeader from '@/components/ui/AppHeader.vue';
import AppButton from '@/components/ui/AppButton.vue';
import AppIcon from '@/components/ui/AppIcon.vue';
import ClfObjectiveRow from '@/components/clfC02/ClfObjectiveRow.vue';
import ClfContentBlocks from '@/components/clfC02/ClfContentBlocks.vue';
import ClfFlashcardDeck from '@/components/clfC02/ClfFlashcardDeck.vue';

const route = useRoute();
const progreso = useClfC02Progress();

const taskId = computed(() => String(route.params.taskId ?? ''));
const task = computed(() => taskStatementsClfC02.find((candidato) => candidato.id === taskId.value));
const pendiente = computed(() => TAREAS_PENDIENTES.includes(taskId.value));

const rutaVolver = computed(() =>
	task.value ? `/cloud-practitioner/dominio/${task.value.dominioId}` : '/cloud-practitioner'
);

const objetivos = computed(() =>
	objetivosClfC02
		.filter((objetivo) => objetivo.taskId === taskId.value)
		.map((datos) => {
			const id = `${datos.taskId}#${datos.index}`;
			return {
				id,
				datos,
				estado: estadoDeObjetivo(progreso.value, id),
				motivo: motivoEstadoObjetivo(progreso.value, id),
			};
		})
);

const objetivosCriticos = computed(() =>
	objetivos.value.filter((objetivo) => objetivo.datos.profundidad === 'critico')
);

const objetivosConEvidencia = computed(
	() => objetivos.value.filter((objetivo) => objetivo.estado !== 'pendiente').length
);

const grupos = computed<GrupoTematico[]>(() => gruposDeTask(taskId.value));
const preguntas = computed<PreguntaClfC02[]>(() => preguntasDeTask(taskId.value));
const tarjetas = computed<TarjetaClfC02[]>(() => tarjetasDeTask(taskId.value));

function marcarEntendido(objetivoId: string) {
	marcarEstudiado(objetivoId);
}

function marcarTarjeta(tarjetaId: string, sabia: boolean) {
	const tarjeta = tarjetas.value.find((candidata) => candidata.id === tarjetaId);
	if (!tarjeta) return;
	registrarTarjetaProgreso(tarjeta.id, tarjeta.objetivos, sabia);
}
</script>

<style scoped>
.page-head {
	padding: 20px 0 22px;
}

.page-head__meta {
	margin: 14px 0 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-wrap: wrap;
	gap: 6px;
}

.page-head__meta li {
	padding: 4px 10px;
	border-radius: 999px;
	background: var(--mt-muted);
	font-size: 12px;
	color: var(--mt-ink-2);
}

.section {
	margin-bottom: 26px;
}

.section__head {
	display: flex;
	align-items: baseline;
	justify-content: space-between;
	gap: 12px;
	margin-bottom: 12px;
}

.section__head h2 {
	margin: 0;
}

.section__head .mt-label {
	margin: 0;
}

.section__nota {
	margin: 10px 2px 0;
	font-size: 12px;
	line-height: 1.55;
	color: var(--mt-ink-3);
}

.grupos {
	display: flex;
	flex-direction: column;
	gap: 16px;
}

.grupo {
	display: flex;
	flex-direction: column;
	gap: 16px;
	padding: 16px;
	border: 1px solid var(--mt-line);
	border-radius: var(--radius-card);
	background: var(--mt-surface);
	scroll-margin-top: 70px;
}

.grupo__head {
	display: flex;
	flex-direction: column;
	gap: 8px;
}

.grupo__title {
	margin: 0;
	font-size: 16.5px;
	font-weight: 700;
	letter-spacing: -0.014em;
	color: var(--mt-ink);
}

.grupo__objetivos {
	display: flex;
	flex-wrap: wrap;
	gap: 6px;
}

.grupo__chip {
	padding: 3px 8px;
	border-radius: 8px;
	background: var(--mt-accent-soft);
	color: var(--mt-accent);
	font-size: 11px;
	font-weight: 700;
}

.grupo__guia {
	padding-top: 14px;
	border-top: 1px dashed var(--mt-line);
}

.grupo__guia-label {
	margin: 0 0 6px;
	font-size: 10.5px;
	font-weight: 700;
	letter-spacing: 0.08em;
	text-transform: uppercase;
	color: var(--mt-ink-3);
}

.grupo__guia ul {
	margin: 0;
	padding-left: 18px;
	display: flex;
	flex-direction: column;
	gap: 5px;
}

.grupo__guia li {
	font-size: 13px;
	line-height: 1.5;
	color: var(--mt-ink-2);
}

.practice-card {
	display: flex;
	align-items: center;
	gap: 16px;
	flex-wrap: wrap;
	padding: 16px;
	border: 1px solid var(--mt-line);
	border-radius: var(--radius-card);
	background: var(--mt-surface);
}

.practice-card__text {
	flex: 1;
	min-width: 200px;
}

.practice-card__title {
	margin: 0;
	font-size: 15px;
	font-weight: 650;
	color: var(--mt-ink);
}

.practice-card__sub {
	margin: 4px 0 0;
	font-size: 13px;
	color: var(--mt-ink-2);
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
	max-width: 46ch;
	font-size: 13px;
	line-height: 1.55;
	color: var(--mt-ink-2);
}

.state-block__cta {
	margin-top: 12px;
}
</style>
