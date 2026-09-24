<template>
	<AppPage>
		<AppHeader :title="tituloCabecera" back="/cloud-practitioner" />

		<main class="app-content">
			<div class="app-container">
				<div v-if="!dominio" class="state-block">
					<AppIcon :icon="alertCircleOutline" class="state-block__icon" />
					<p class="state-block__title">Dominio no encontrado</p>
					<p class="state-block__hint">{{ dominioId }} no existe en el blueprint.</p>
					<AppButton class="state-block__cta" to="/cloud-practitioner">Volver</AppButton>
				</div>

				<template v-else>
					<header class="page-head">
						<p class="mt-kicker">Dominio {{ dominio.numero }} · {{ dominio.peso }}% del examen</p>
						<h1 class="mt-h-page">{{ dominio.nombreEs }}</h1>
						<p class="mt-body page-head__desc">{{ dominio.descripcion }}</p>
					</header>

					<section class="progress-card">
						<ClfProgressBar :valor="progreso" etiqueta="Avance del dominio" />
						<p class="progress-card__hint">
							{{ objetivosConEvidencia }} de {{ objetivosTotales }} objectives con evidencia de
							estudio o práctica.
						</p>
					</section>

					<section class="section">
						<div class="section__head">
							<h2 class="mt-h-2">Task statements</h2>
							<p class="mt-label">{{ tasks.length }}</p>
						</div>
						<div class="group-list">
							<RouterLink
								v-for="task in tasks"
								:key="task.id"
								:to="`/cloud-practitioner/task/${task.id}`"
								class="task-row"
							>
								<span class="task-row__id">{{ task.id }}</span>
								<div class="task-row__main">
									<p class="task-row__title">{{ task.titulo }}</p>
									<p class="task-row__meta">
										{{ task.objectives.length }} objectives
										<span v-if="task.pendiente"> · contenido en preparación</span>
										<span v-else> · {{ task.completos }}/{{ task.objectives.length }} cubiertos</span>
									</p>
									<ClfProgressBar :valor="task.progreso" compacta />
								</div>
								<AppIcon class="task-row__chevron" :icon="chevronForward" />
							</RouterLink>
						</div>
					</section>

					<section class="section">
						<div class="section__head">
							<h2 class="mt-h-2">Practicar este dominio</h2>
						</div>
						<div class="practice-card">
							<p v-if="practica.ok" class="practice-card__text">
								{{ practica.preguntas.length }} preguntas disponibles
								{{ practica.avisos.length > 0 ? `· ${practica.avisos.length} aviso(s)` : '' }}
							</p>
							<p v-else class="practice-card__text practice-card__text--warn">
								{{ practica.motivo }}
							</p>
							<ul v-if="practica.ok && avisos.length > 0" class="practice-card__avisos">
								<li v-for="aviso in avisos" :key="aviso">{{ aviso }}</li>
							</ul>
							<AppButton v-if="practica.ok" :to="rutaPractica" class="practice-card__cta">
								<template #start><AppIcon :icon="clipboardOutline" /></template>
								Practicar Dominio {{ dominio.numero }}
							</AppButton>
							<AppButton v-else disabled class="practice-card__cta">
								Práctica no disponible
							</AppButton>
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
import { alertCircleOutline, chevronForward, clipboardOutline } from 'ionicons/icons';
import { dominiosClfC02 } from '@/data/clfC02';
import { TAREAS_PENDIENTES } from '@/data/clfC02/registroContenido';
import { construirPracticaDominio } from '@/lib/clfC02Practice';
import { estadoDeObjetivo, progresoDominio, progresoTask, useClfC02Progress } from '@/lib/clfC02Progress';
import AppPage from '@/components/ui/AppPage.vue';
import AppHeader from '@/components/ui/AppHeader.vue';
import AppButton from '@/components/ui/AppButton.vue';
import AppIcon from '@/components/ui/AppIcon.vue';
import ClfProgressBar from '@/components/clfC02/ClfProgressBar.vue';

const route = useRoute();
const progresoRef = useClfC02Progress();

const dominioId = computed(() => String(route.params.domainId ?? ''));
const dominio = computed(() => dominiosClfC02.find((candidato) => candidato.id === dominioId.value));

const tituloCabecera = computed(() =>
	dominio.value
		? `Dominio ${dominio.value.numero} · ${dominio.value.peso}%`
		: 'Dominio'
);

const objetivoIds = computed(() => {
	if (!dominio.value) return [];
	return dominio.value.taskStatements.flatMap((task) =>
		task.objectives.map((_, indice) => `${task.id}#${indice + 1}`)
	);
});

const objetivosTotales = computed(() => objetivoIds.value.length);

const progreso = computed(() =>
	dominio.value ? progresoDominio(progresoRef.value, dominio.value.id) : 0
);

const objetivosConEvidencia = computed(
	() =>
		objetivoIds.value.filter(
			(objetivoId) => estadoDeObjetivo(progresoRef.value, objetivoId) !== 'pendiente'
		).length
);

const tasks = computed(() => {
	if (!dominio.value) return [];
	return dominio.value.taskStatements.map((task) => {
		const pendiente = TAREAS_PENDIENTES.includes(task.id);
		const completos = task.objectives.filter(
			(_, indice) => estadoDeObjetivo(progresoRef.value, `${task.id}#${indice + 1}`) !== 'pendiente'
		).length;
		return {
			id: task.id,
			titulo: task.titulo,
			objectives: task.objectives,
			pendiente,
			completos,
			progreso: progresoTask(progresoRef.value, task.id),
		};
	});
});

const practica = computed(() =>
	dominio.value
		? construirPracticaDominio(dominio.value.id, { n: 12 })
		: { ok: false as const, motivo: 'Dominio no encontrado.' }
);

const avisos = computed(() =>
	practica.value.ok ? practica.value.avisos.slice(0, 1) : []
);

const rutaPractica = computed(() =>
	dominio.value ? `/cloud-practitioner/practica/dominio-${dominio.value.numero}` : '/cloud-practitioner'
);
</script>

<style scoped>
.page-head {
	padding: 20px 0 22px;
}

.page-head__desc {
	margin: 10px 0 0;
	max-width: 58ch;
}

.progress-card {
	display: flex;
	flex-direction: column;
	gap: 10px;
	padding: 16px;
	margin-bottom: 26px;
	border: 1px solid var(--mt-line);
	border-radius: var(--radius-card);
	background: var(--mt-surface);
}

.progress-card__hint {
	margin: 0;
	font-size: 12.5px;
	color: var(--mt-ink-3);
}

.section {
	margin-bottom: 26px;
}

.section__head {
	display: flex;
	align-items: baseline;
	justify-content: space-between;
	margin-bottom: 12px;
}

.section__head h2 {
	margin: 0;
}

.section__head .mt-label {
	margin: 0;
}

.task-row {
	display: flex;
	align-items: center;
	gap: 12px;
	padding: 14px 16px;
	text-decoration: none;
	transition: background 0.15s ease;
}

.task-row:active {
	background: var(--mt-muted);
}

.task-row__id {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	min-width: 40px;
	height: 26px;
	flex-shrink: 0;
	border-radius: 8px;
	background: var(--mt-accent-soft);
	color: var(--mt-accent);
	font-size: 12px;
	font-weight: 700;
	font-variant-numeric: tabular-nums;
}

.task-row__main {
	flex: 1;
	min-width: 0;
	display: flex;
	flex-direction: column;
	gap: 6px;
}

.task-row__title {
	margin: 0;
	font-size: 14px;
	font-weight: 550;
	line-height: 1.45;
	color: var(--mt-ink);
}

.task-row__meta {
	margin: 0;
	font-size: 12px;
	color: var(--mt-ink-3);
}

.task-row__chevron {
	font-size: 15px;
	color: var(--mt-ink-3);
	opacity: 0.6;
}

.practice-card {
	display: flex;
	flex-direction: column;
	gap: 10px;
	padding: 16px;
	border: 1px solid var(--mt-line);
	border-radius: var(--radius-card);
	background: var(--mt-surface);
}

.practice-card__text {
	margin: 0;
	font-size: 13.5px;
	color: var(--mt-ink-2);
}

.practice-card__text--warn {
	color: var(--mt-warning);
}

.practice-card__avisos {
	margin: 0;
	padding-left: 18px;
	display: flex;
	flex-direction: column;
	gap: 5px;
	font-size: 12px;
	line-height: 1.5;
	color: var(--mt-ink-3);
}

.practice-card__cta {
	align-self: flex-start;
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
	font-size: 13px;
	color: var(--mt-ink-2);
}

.state-block__cta {
	margin-top: 12px;
}
</style>
