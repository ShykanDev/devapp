<template>
	<AppPage>
		<AppHeader title="Cobertura" back="/ai-practitioner" />

		<main class="app-content">
			<div class="app-container">
				<header class="page-head">
					<p class="mt-kicker">Checklist del blueprint</p>
					<h1 class="mt-h-page">Cobertura</h1>
					<p class="mt-body page-head__desc">
						5 dominios · 14 task statements · 69 objectives. Cada objective indica si tiene
						contenido, preguntas, tarjetas y comparación.
					</p>
				</header>

				<section class="summary">
					<div class="summary__row">
						<span class="summary__value">{{ cobertura.porcentaje }}%</span>
						<span class="summary__label">objectives completos</span>
					</div>
					<div class="summary__grid">
						<div class="summary__cell">
							<span class="summary__cell-value">{{ cobertura.totales.dominios }}</span>
							<span class="summary__cell-label">dominios</span>
						</div>
						<div class="summary__cell">
							<span class="summary__cell-value">{{ cobertura.totales.tasks }}</span>
							<span class="summary__cell-label">tasks</span>
						</div>
						<div class="summary__cell">
							<span class="summary__cell-value">{{ cobertura.totales.objetivos }}</span>
							<span class="summary__cell-label">objectives</span>
						</div>
						<div class="summary__cell">
							<span class="summary__cell-value">{{ cobertura.totales.conContenido }}</span>
							<span class="summary__cell-label">con contenido</span>
						</div>
						<div class="summary__cell">
							<span class="summary__cell-value">{{ cobertura.totales.conPreguntas }}</span>
							<span class="summary__cell-label">con preguntas</span>
						</div>
						<div class="summary__cell">
							<span class="summary__cell-value">{{ cobertura.totales.conTarjetas }}</span>
							<span class="summary__cell-label">con tarjetas</span>
						</div>
						<div class="summary__cell">
							<span class="summary__cell-value">{{ cobertura.totales.conComparacion }}</span>
							<span class="summary__cell-label">con comparación</span>
						</div>
						<div class="summary__cell">
							<span class="summary__cell-value">{{ cobertura.totales.huerfanos.length }}</span>
							<span class="summary__cell-label">huérfanos</span>
						</div>
					</div>
				</section>

				<section class="section">
					<div class="section__head">
						<h2 class="mt-h-2">Validación</h2>
					</div>
					<div v-if="cobertura.hallazgos.length === 0" class="ok-card">
						<AppIcon :icon="checkmarkCircleOutline" />
						<span>Sin hallazgos: no hay objetivos huérfanos ni referencias rotas.</span>
					</div>
					<ul v-else class="issue-list">
						<li v-for="hallazgo in cobertura.hallazgos" :key="`${hallazgo.codigo}-${hallazgo.mensaje}`">
							<AppIcon :icon="alertCircleOutline" />
							<span>{{ hallazgo.mensaje }}</span>
						</li>
					</ul>

					<ul v-if="cobertura.avisosBanco.length > 0" class="issue-list issue-list--muted">
						<li v-for="aviso in cobertura.avisosBanco" :key="aviso.codigo + aviso.mensaje">
							<AppIcon :icon="informationCircleOutline" />
							<span>{{ aviso.mensaje }}</span>
						</li>
					</ul>
				</section>

				<section class="section">
					<div class="section__head">
						<h2 class="mt-h-2">Excepciones declaradas</h2>
					</div>
					<div class="excepciones">
						<p class="excepciones__line">
							Sin tarjeta: {{ listar(OBJETIVOS_SIN_TARJETA) }}
						</p>
						<p class="excepciones__line">
							Sin pregunta: {{ listar(OBJETIVOS_SIN_PREGUNTA) }}
						</p>
						<p class="excepciones__line">
							Tasks pendientes ({{ TAREAS_PENDIENTES.length }}):
							{{ TAREAS_PENDIENTES.join(', ') }}
						</p>
					</div>
				</section>

				<section v-for="dominio in cobertura.dominios" :key="dominio.id" class="section">
					<header class="domain-head">
						<span class="domain-head__num">{{ dominio.numero }}</span>
						<div class="domain-head__text">
							<h2 class="mt-h-3">{{ dominio.nombreEs }}</h2>
							<p class="domain-head__meta">
								{{ dominio.peso }}% · {{ dominio.completos }}/{{ dominio.objetivos.length }} objectives
								completos
								<span v-if="dominio.pendiente"> · contenido en preparación</span>
							</p>
						</div>
						<AifWeightBadge :peso="dominio.peso" />
					</header>

					<div class="group-list">
						<div v-for="task in dominio.tasks" :key="task.taskId" class="task">
							<div class="task__head">
								<span class="task__id">{{ task.taskId }}</span>
								<p class="task__title">{{ task.titulo }}</p>
								<AifWeightBadge
									v-if="task.pendiente"
									texto="Pendiente"
									tono="muted"
								/>
							</div>
							<div class="task__objectives">
								<div
									v-for="objetivo in task.objetivos"
									:key="objetivo.id"
									class="objective"
								>
									<div class="objective__text">
										<p class="objective__title">{{ objetivo.titulo }}</p>
										<p class="objective__reason">{{ razonEstado(objetivo) }}</p>
									</div>
									<div class="objective__marks">
										<span class="mark" :class="{ 'mark--on': objetivo.grupos > 0 }">contenido</span>
										<span class="mark" :class="{ 'mark--on': objetivo.preguntas > 0 }">preguntas</span>
										<span class="mark" :class="{ 'mark--on': objetivo.tarjetas > 0 }">tarjetas</span>
										<span class="mark" :class="{ 'mark--on': objetivo.pares > 0 }">comparación</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</main>
	</AppPage>
</template>

<script setup lang="ts">
import { checkmarkCircleOutline, alertCircleOutline, informationCircleOutline } from 'ionicons/icons';
import { coberturaAifC01, razonEstadoCobertura, type CoberturaObjetivo } from '@/data/aifC01/cobertura';
import { OBJETIVOS_SIN_PREGUNTA, OBJETIVOS_SIN_TARJETA, TAREAS_PENDIENTES } from '@/data/aifC01/registroContenido';
import AppPage from '@/components/ui/AppPage.vue';
import AppHeader from '@/components/ui/AppHeader.vue';
import AppIcon from '@/components/ui/AppIcon.vue';
import AifWeightBadge from '@/components/aifC01/AifWeightBadge.vue';

const cobertura = coberturaAifC01();

function razonEstado(objetivo: CoberturaObjetivo): string {
	return `${objetivo.id} · ${objetivo.profundidad} · ${razonEstadoCobertura(objetivo)}`;
}

function listar(ids: string[]): string {
	return ids.length === 0 ? 'ninguna' : ids.join(', ');
}
</script>

<style scoped>
.page-head {
	padding: 20px 0 18px;
}

.page-head__desc {
	margin: 10px 0 0;
	max-width: 60ch;
}

.summary {
	display: flex;
	flex-direction: column;
	gap: 14px;
	padding: 18px;
	margin-bottom: 26px;
	border: 1px solid var(--mt-line);
	border-radius: var(--radius-card);
	background: var(--mt-surface);
}

.summary__row {
	display: flex;
	align-items: baseline;
	gap: 10px;
}

.summary__value {
	font-size: 30px;
	font-weight: 750;
	letter-spacing: -0.03em;
	color: var(--mt-ink);
	font-variant-numeric: tabular-nums;
}

.summary__label {
	font-size: 13px;
	color: var(--mt-ink-3);
}

.summary__grid {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 10px;
}

@media (min-width: 560px) {
	.summary__grid {
		grid-template-columns: repeat(4, 1fr);
	}
}

.summary__cell {
	display: flex;
	flex-direction: column;
	gap: 2px;
	padding: 10px 12px;
	border-radius: var(--radius-box);
	background: var(--mt-muted);
}

.summary__cell-value {
	font-size: 16px;
	font-weight: 700;
	color: var(--mt-ink);
	font-variant-numeric: tabular-nums;
}

.summary__cell-label {
	font-size: 11.5px;
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

.ok-card {
	display: flex;
	align-items: center;
	gap: 8px;
	padding: 12px 14px;
	border-radius: var(--radius-box);
	background: color-mix(in srgb, var(--mt-success) 9%, var(--mt-surface));
	border: 1px solid color-mix(in srgb, var(--mt-success) 24%, var(--mt-line));
	font-size: 13px;
	color: var(--mt-ink);
}

.ok-card .app-icon {
	color: var(--mt-success);
	font-size: 16px;
}

.issue-list {
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-direction: column;
	gap: 8px;
}

.issue-list li {
	display: flex;
	align-items: flex-start;
	gap: 8px;
	padding: 10px 12px;
	border-radius: var(--radius-box);
	background: color-mix(in srgb, var(--mt-danger) 7%, var(--mt-surface));
	font-size: 12.5px;
	line-height: 1.5;
	color: var(--mt-ink-2);
}

.issue-list .app-icon {
	flex-shrink: 0;
	margin-top: 2px;
	color: var(--mt-danger);
}

.issue-list--muted {
	margin-top: 10px;
}

.issue-list--muted li {
	background: var(--mt-muted);
}

.issue-list--muted .app-icon {
	color: var(--mt-ink-3);
}

.excepciones {
	display: flex;
	flex-direction: column;
	gap: 6px;
	padding: 14px 16px;
	border-radius: var(--radius-box);
	background: var(--mt-surface);
	border: 1px solid var(--mt-line);
}

.excepciones__line {
	margin: 0;
	font-size: 12.5px;
	line-height: 1.5;
	color: var(--mt-ink-2);
}

.domain-head {
	display: flex;
	align-items: center;
	gap: 12px;
	margin-bottom: 12px;
}

.domain-head__num {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 32px;
	height: 32px;
	flex-shrink: 0;
	border-radius: 10px;
	background: var(--mt-accent-soft);
	color: var(--mt-accent);
	font-size: 14px;
	font-weight: 700;
}

.domain-head__text {
	flex: 1;
	min-width: 0;
}

.domain-head__text h2 {
	margin: 0;
}

.domain-head__meta {
	margin: 3px 0 0;
	font-size: 12px;
	color: var(--mt-ink-3);
}

.task {
	padding: 14px 16px;
}

.task__head {
	display: flex;
	align-items: center;
	gap: 10px;
}

.task__id {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	min-width: 38px;
	height: 24px;
	flex-shrink: 0;
	border-radius: 8px;
	background: var(--mt-muted);
	font-size: 11.5px;
	font-weight: 700;
	color: var(--mt-ink-2);
}

.task__title {
	flex: 1;
	min-width: 0;
	margin: 0;
	font-size: 13.5px;
	font-weight: 600;
	line-height: 1.4;
	color: var(--mt-ink);
}

.task__objectives {
	display: flex;
	flex-direction: column;
	gap: 12px;
	margin-top: 12px;
	padding-top: 12px;
	border-top: 1px dashed var(--mt-line);
}

.objective {
	display: flex;
	flex-direction: column;
	gap: 7px;
}

.objective__title {
	margin: 0;
	font-size: 12.5px;
	line-height: 1.5;
	color: var(--mt-ink-2);
}

.objective__reason {
	margin: 3px 0 0;
	font-size: 11px;
	color: var(--mt-ink-3);
}

.objective__marks {
	display: flex;
	flex-wrap: wrap;
	gap: 5px;
}

.mark {
	padding: 3px 8px;
	border-radius: 999px;
	border: 1px solid var(--mt-line);
	background: var(--mt-muted);
	font-size: 10.5px;
	color: var(--mt-ink-3);
}

.mark--on {
	background: var(--mt-accent-soft);
	border-color: transparent;
	color: var(--mt-accent);
	font-weight: 600;
}
</style>
