<template>
	<AppPage>
		<AppHeader title="Debilidades" back="/cloud-practitioner" />

		<main class="app-content">
			<div class="app-container">
				<header class="page-head">
					<p class="mt-kicker">Weak areas</p>
					<h1 class="mt-h-page">Qué necesita repaso</h1>
					<p class="mt-body page-head__desc">
						Prioridad: error ratio con al menos 2 respuestas, objectives sin practicar, fallos
						de los últimos 7 días y objectives críticos sin dominar.
					</p>
				</header>

				<div v-if="areas.length === 0" class="empty-card">
					<AppIcon :icon="sparklesOutline" />
					<p class="empty-card__title">Sin datos todavía</p>
					<p class="empty-card__hint">
						Estudia y practica un task para que el módulo detecte debilidades con evidencia.
					</p>
					<AppButton class="empty-card__cta" :to="`/cloud-practitioner/task/${primeraTask}`">
						Empezar por Task {{ primeraTask }}
					</AppButton>
				</div>

				<template v-else>
					<div class="cta-card">
						<div class="cta-card__text">
							<p class="cta-card__title">Sesión de repaso dirigida</p>
							<p class="cta-card__sub">
								{{ objetivosSeleccionados.length }} objectives priorizados, con preguntas y
								comparaciones.
							</p>
						</div>
						<AppButton :to="rutaPractica">
							<template #start><AppIcon :icon="clipboardOutline" /></template>
							Practicar
						</AppButton>
					</div>

					<div class="group-list">
						<RouterLink
							v-for="(area, posicion) in areas"
							:key="area.objetivoId"
							:to="`/cloud-practitioner/practica/debil?objetivos=${encodeURIComponent(area.objetivoId)}`"
							class="weak-row"
						>
							<span class="weak-row__rank">{{ posicion + 1 }}</span>
							<div class="weak-row__text">
								<p class="weak-row__title">{{ area.titulo }}</p>
								<p class="weak-row__meta">
									Task {{ area.taskId }} · {{ area.motivos.join(' · ') }}
								</p>
								<p v-if="area.respuestas > 0" class="weak-row__stats">
									{{ area.respuestas }} respuestas · {{ area.fallos }} fallos
								</p>
							</div>
							<ClfWeightBadge
								:texto="area.porcentajeAcierto === null ? 'Sin datos' : `${area.porcentajeAcierto}%`"
								:tono="tono(area)"
							/>
							<AppIcon :icon="chevronForward" class="weak-row__chevron" />
						</RouterLink>
					</div>
				</template>
			</div>
		</main>
	</AppPage>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { chevronForward, clipboardOutline, sparklesOutline } from 'ionicons/icons';
import { taskStatementsClfC02 } from '@/data/clfC02';
import { TAREAS_CON_CONTENIDO } from '@/data/clfC02/registroContenido';
import {
	areasDebiles,
	useClfC02Progress,
	type AreaDebilClfC02,
} from '@/lib/clfC02Progress';
import AppPage from '@/components/ui/AppPage.vue';
import AppHeader from '@/components/ui/AppHeader.vue';
import AppButton from '@/components/ui/AppButton.vue';
import AppIcon from '@/components/ui/AppIcon.vue';
import ClfWeightBadge from '@/components/clfC02/ClfWeightBadge.vue';

const progreso = useClfC02Progress();
const areas = computed<AreaDebilClfC02[]>(() => areasDebiles(progreso.value));
const primeraTask = TAREAS_CON_CONTENIDO[0] ?? taskStatementsClfC02[0]?.id ?? '';

const objetivosSeleccionados = computed(() => areas.value.slice(0, 8).map((area) => area.objetivoId));
const rutaPractica = computed(
	() => `/cloud-practitioner/practica/debil?objetivos=${encodeURIComponent(objetivosSeleccionados.value.join(','))}`
);

function tono(area: AreaDebilClfC02): 'danger' | 'warning' | 'muted' {
	if (area.prioridad === 0) return 'danger';
	if (area.prioridad <= 2) return 'warning';
	return 'muted';
}
</script>

<style scoped>
.page-head {
	padding: 20px 0 20px;
}

.page-head__desc {
	margin: 10px 0 0;
	max-width: 60ch;
}

.cta-card {
	display: flex;
	align-items: center;
	gap: 16px;
	flex-wrap: wrap;
	padding: 16px;
	margin-bottom: 20px;
	border: 1px solid var(--mt-line);
	border-radius: var(--radius-card);
	background: var(--mt-surface);
}

.cta-card__text {
	flex: 1;
	min-width: 200px;
}

.cta-card__title {
	margin: 0;
	font-size: 15px;
	font-weight: 650;
	color: var(--mt-ink);
}

.cta-card__sub {
	margin: 4px 0 0;
	font-size: 13px;
	color: var(--mt-ink-2);
}

.weak-row {
	display: flex;
	align-items: center;
	gap: 12px;
	padding: 13px 16px;
	text-decoration: none;
	transition: background 0.15s ease;
}

.weak-row:active {
	background: var(--mt-muted);
}

.weak-row__rank {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 26px;
	height: 26px;
	flex-shrink: 0;
	border-radius: 999px;
	background: var(--mt-muted);
	font-size: 12px;
	font-weight: 700;
	color: var(--mt-ink-3);
	font-variant-numeric: tabular-nums;
}

.weak-row__text {
	flex: 1;
	min-width: 0;
}

.weak-row__title {
	margin: 0;
	font-size: 13.5px;
	font-weight: 550;
	line-height: 1.45;
	color: var(--mt-ink);
}

.weak-row__meta {
	margin: 4px 0 0;
	font-size: 12px;
	color: var(--mt-ink-3);
}

.weak-row__stats {
	margin: 3px 0 0;
	font-size: 11.5px;
	color: var(--mt-ink-3);
}

.weak-row__chevron {
	font-size: 15px;
	color: var(--mt-ink-3);
	opacity: 0.6;
}

.empty-card {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 6px;
	padding: 40px 16px;
	text-align: center;
	border: 1px solid var(--mt-line);
	border-radius: var(--radius-card);
	background: var(--mt-surface);
}

.empty-card .app-icon {
	font-size: 26px;
	color: var(--mt-accent);
}

.empty-card__title {
	margin: 8px 0 0;
	font-size: 16px;
	font-weight: 600;
	color: var(--mt-ink);
}

.empty-card__hint {
	margin: 0;
	max-width: 42ch;
	font-size: 13px;
	line-height: 1.55;
	color: var(--mt-ink-2);
}

.empty-card__cta {
	margin-top: 14px;
}
</style>
