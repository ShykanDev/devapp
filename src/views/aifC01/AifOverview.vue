<template>
	<AppPage>
		<AppHeader title="AI Practitioner" />

		<main class="app-content">
			<div class="app-container">
				<header class="page-head">
					<p class="mt-kicker">Certificación AWS</p>
					<h1 class="mt-h-display">{{ certificado.nombre }}</h1>
					<p class="page-head__code">{{ certificado.codigo }} · {{ certificado.nivel }}</p>
					<p class="mt-body page-head__desc">
						Centro de preparación offline para los 5 dominios, 14 task statements y 69
						objectives del exam guide. Todo el contenido vive en la app: no se guarda en tu
						cuenta ni se genera con IA.
					</p>
					<ul class="page-head__meta">
						<li>{{ certificado.preguntasTotales }} preguntas · {{ certificado.duracionMinutos }} min</li>
						<li>Escala {{ certificado.escala }} · mínimo {{ certificado.notaAprobacion }}</li>
						<li>Vigencia {{ certificado.vigenciaAnios }} años · revisado {{ certificado.revisado }}</li>
					</ul>
					<a class="page-head__fuente" :href="certificado.fuente" target="_blank" rel="noopener">
						<AppIcon :icon="openOutline" />
						Exam guide oficial
					</a>
				</header>

				<section class="overview-card">
					<div class="overview-card__head">
						<p class="mt-kicker">Tu progreso</p>
						<span class="overview-card__value">{{ progresoPonderadoActual }}%</span>
					</div>
					<AifProgressBar :valor="progresoPonderadoActual" etiqueta="Progreso global ponderado" />
					<p class="overview-card__hint">
						Ponderado por el peso oficial de cada dominio (20 · 24 · 28 · 14 · 14): el
						Dominio 3 mueve más la aguja que el Dominio 4.
					</p>
					<AppButton class="overview-card__cta" @click="continuar">
						<template #start><AppIcon :icon="playOutline" /></template>
						{{ continuarTexto }}
					</AppButton>
				</section>

				<section class="section">
					<div class="section__head">
						<h2 class="mt-h-2">Dominios</h2>
						<p class="mt-label">Peso y avance de cada uno</p>
					</div>
					<div class="group-list">
						<AifDomainCard
							v-for="dominio in dominios"
							:key="dominio.dominio.id"
							:dominio="dominio.dominio"
							:progreso="dominio.progreso"
							:tasks-con-contenido="dominio.tasksConContenido"
							:tasks-totales="dominio.tasksTotales"
							:pendiente="dominio.pendiente"
						/>
					</div>
				</section>

				<section class="section">
					<div class="section__head">
						<h2 class="mt-h-2">Necesita repaso</h2>
						<RouterLink class="section__link" to="/ai-practitioner/debiles">
							Ver todo
							<AppIcon :icon="chevronForward" />
						</RouterLink>
					</div>
					<div v-if="debilidades.length > 0" class="group-list">
						<div v-for="area in debilidades" :key="area.objetivoId" class="weak-row">
							<div class="weak-row__text">
								<p class="weak-row__title">{{ area.titulo }}</p>
								<p class="weak-row__meta">Task {{ area.taskId }} · {{ area.motivos.join(' · ') }}</p>
							</div>
							<AifWeightBadge
								:texto="area.porcentajeAcierto === null ? 'Sin datos' : `${area.porcentajeAcierto}%`"
								:tono="tonoDebilidad(area)"
							/>
						</div>
					</div>
					<div v-else class="empty-card">
						<AppIcon :icon="sparklesOutline" />
						<p class="empty-card__title">Sin debilidades registradas</p>
						<p class="empty-card__hint">
							Practica para que el módulo detecte qué objectives necesitan repaso.
						</p>
					</div>
				</section>

				<section class="section">
					<div class="section__head">
						<h2 class="mt-h-2">Accesos</h2>
					</div>
					<div class="shortcuts">
						<RouterLink v-for="acceso in accesos" :key="acceso.to" :to="acceso.to" class="shortcut">
							<span class="shortcut__icon"><AppIcon :icon="acceso.icon" /></span>
							<span class="shortcut__text">
								<span class="shortcut__title">{{ acceso.titulo }}</span>
								<span class="shortcut__hint">{{ acceso.pista }}</span>
							</span>
							<AppIcon :icon="chevronForward" class="shortcut__chevron" />
						</RouterLink>
					</div>
				</section>

				<section class="section">
					<div class="section__head">
						<h2 class="mt-h-2">Estado del contenido</h2>
					</div>
					<div class="coverage-card">
						<p class="coverage-card__line">
							<strong>{{ tareasConContenido.length }}</strong> de {{ totalTasks }} tasks con contenido ·
							<strong>{{ totalObjetivos }}</strong> objectives en el blueprint
						</p>
						<p class="coverage-card__line">
							Banco actual: {{ totalPreguntas }} preguntas · {{ totalTarjetas }} tarjetas ·
							{{ totalPares }} comparaciones
						</p>
						<p v-if="motivoExamenFinal" class="coverage-card__warn">
							<AppIcon :icon="alertCircleOutline" />
							<span>Examen final deshabilitado: {{ motivoExamenFinal }}</span>
						</p>
						<RouterLink class="coverage-card__link" to="/ai-practitioner/cobertura">
							Ver checklist de cobertura
							<AppIcon :icon="chevronForward" />
						</RouterLink>
					</div>
				</section>
			</div>
		</main>
	</AppPage>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import {
	alertCircleOutline,
	chevronForward,
	clipboardOutline,
	gitCompareOutline,
	libraryOutline,
	listOutline,
	openOutline,
	playOutline,
	searchOutline,
	sparklesOutline,
	storefrontOutline,
} from 'ionicons/icons';
import { certificadoAifC01, dominiosAifC01 } from '@/data/aifC01';
import {
	TAREAS_CON_CONTENIDO,
	TAREAS_PENDIENTES,
	TODAS_LAS_PREGUNTAS,
	TODAS_LAS_TARJETAS,
	TODOS_LOS_PARES,
} from '@/data/aifC01/registroContenido';
import {
	areasDebiles,
	progresoDominio,
	progresoPonderado,
	useAifC01Progress,
	type AreaDebilAifC01,
} from '@/lib/aifC01Progress';
import { construirExamenFinal } from '@/lib/aifC01Practice';
import AppPage from '@/components/ui/AppPage.vue';
import AppHeader from '@/components/ui/AppHeader.vue';
import AppButton from '@/components/ui/AppButton.vue';
import AppIcon from '@/components/ui/AppIcon.vue';
import AifDomainCard from '@/components/aifC01/AifDomainCard.vue';
import AifProgressBar from '@/components/aifC01/AifProgressBar.vue';
import AifWeightBadge from '@/components/aifC01/AifWeightBadge.vue';

const router = useRouter();
const progreso = useAifC01Progress();

const certificado = certificadoAifC01;
const totalTasks = dominiosAifC01.reduce((total, dominio) => total + dominio.taskStatements.length, 0);
const totalObjetivos = 69;
const totalPreguntas = TODAS_LAS_PREGUNTAS.length;
const totalTarjetas = TODAS_LAS_TARJETAS.length;
const totalPares = TODOS_LOS_PARES.length;

const tareasConContenido = TAREAS_CON_CONTENIDO;

const progresoPonderadoActual = computed(() => progresoPonderado(progreso.value));

const dominios = computed(() =>
	dominiosAifC01.map((dominio) => {
		const pendiente = dominio.taskStatements.some((task) => TAREAS_PENDIENTES.includes(task.id));
		return {
			dominio,
			progreso: progresoDominio(progreso.value, dominio.id),
			tasksConContenido: dominio.taskStatements.filter(
				(task) => !TAREAS_PENDIENTES.includes(task.id)
			).length,
			tasksTotales: dominio.taskStatements.length,
			pendiente,
		};
	})
);

const debilidades = computed<AreaDebilAifC01[]>(() => areasDebiles(progreso.value).slice(0, 3));

const motivoExamenFinal = computed(() => {
	const resultado = construirExamenFinal();
	return resultado.ok ? '' : resultado.motivo;
});

const ultimoIntento = computed(
	() =>
		[...progreso.value.intentos].sort((a, b) => b.fecha.localeCompare(a.fecha))[0] ?? null
);

const ultimoObjetivo = computed(() => {
	const registros = Object.entries(progreso.value.objetivos)
		.filter(([, registro]) => registro.estado !== 'pendiente')
		.map(([objetivoId, registro]) => ({
			objetivoId,
			fecha:
				registro.historial[registro.historial.length - 1]?.fecha ??
				registro.leidoEn ??
				'',
		}))
		.sort((a, b) => b.fecha.localeCompare(a.fecha));
	return registros[0]?.objetivoId ?? '';
});

const continuarTexto = computed(() => {
	if (ultimoIntento.value) return 'Continuar donde ibas';
	if (ultimoObjetivo.value) return 'Seguir estudiando';
	return 'Empezar por Task 3.2';
});

function continuar() {
	const intento = ultimoIntento.value;
	if (intento) {
		if (intento.tipo === 'repaso') {
			router.push('/ai-practitioner/repaso');
			return;
		}
		router.push(`/ai-practitioner/practica/${intento.scope}`);
		return;
	}
	if (ultimoObjetivo.value) {
		const taskId = ultimoObjetivo.value.split('#')[0];
		router.push(`/ai-practitioner/task/${taskId}`);
		return;
	}
	router.push(`/ai-practitioner/task/${TAREAS_CON_CONTENIDO[0] ?? ''}`);
}

function tonoDebilidad(area: AreaDebilAifC01): 'danger' | 'warning' | 'muted' {
	if (area.prioridad === 0) return 'danger';
	if (area.prioridad <= 2) return 'warning';
	return 'muted';
}

const accesos = [
	{
		to: '/ai-practitioner/practica/final',
		titulo: 'Examen final',
		pista: '65 preguntas ponderadas',
		icon: clipboardOutline,
	},
	{
		to: '/ai-practitioner/comparaciones',
		titulo: 'Comparaciones',
		pista: 'Pares que se confunden',
		icon: gitCompareOutline,
	},
	{
		to: '/ai-practitioner/repaso',
		titulo: 'Repaso mixto',
		pista: 'Tarjetas, preguntas y pares',
		icon: listOutline,
	},
	{
		to: '/ai-practitioner/glosario',
		titulo: 'Glosario',
		pista: 'Términos de consulta rápida',
		icon: libraryOutline,
	},
	{
		to: '/ai-practitioner/servicios',
		titulo: 'Servicios',
		pista: 'Qué resuelve cada servicio',
		icon: storefrontOutline,
	},
	{
		to: '/ai-practitioner/buscar',
		titulo: 'Buscar',
		pista: 'En todo el contenido del módulo',
		icon: searchOutline,
	},
];
</script>

<style scoped>
.page-head {
	padding: 20px 0 24px;
}

.page-head__code {
	margin: 8px 0 0;
	font-size: 12.5px;
	font-weight: 600;
	color: var(--mt-accent);
}

.page-head__desc {
	margin: 14px 0 0;
	max-width: 60ch;
}

.page-head__meta {
	margin: 14px 0 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-direction: column;
	gap: 5px;
	font-size: 13px;
	color: var(--mt-ink-3);
}

.page-head__fuente {
	display: inline-flex;
	align-items: center;
	gap: 6px;
	margin-top: 14px;
	font-size: 13px;
	font-weight: 600;
	color: var(--mt-accent);
}

.overview-card {
	display: flex;
	flex-direction: column;
	gap: 12px;
	padding: 18px;
	margin-bottom: 28px;
	border: 1px solid var(--mt-line);
	border-radius: var(--radius-card);
	background: var(--mt-surface);
	box-shadow: var(--shadow-soft);
}

.overview-card__head {
	display: flex;
	align-items: baseline;
	justify-content: space-between;
	gap: 12px;
}

.overview-card__value {
	font-size: 26px;
	font-weight: 750;
	letter-spacing: -0.03em;
	color: var(--mt-ink);
	font-variant-numeric: tabular-nums;
}

.overview-card__hint {
	margin: 0;
	font-size: 12.5px;
	line-height: 1.55;
	color: var(--mt-ink-3);
}

.overview-card__cta {
	margin-top: 4px;
	align-self: flex-start;
}

.section {
	margin-bottom: 28px;
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

.section__link {
	display: inline-flex;
	align-items: center;
	gap: 3px;
	font-size: 13px;
	font-weight: 600;
	color: var(--mt-accent);
}

.weak-row {
	display: flex;
	align-items: center;
	gap: 12px;
	padding: 12px 16px;
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
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
}

.weak-row__meta {
	margin: 4px 0 0;
	font-size: 12px;
	color: var(--mt-ink-3);
}

.empty-card {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 6px;
	padding: 28px 16px;
	text-align: center;
	border: 1px solid var(--mt-line);
	border-radius: var(--radius-card);
	background: var(--mt-surface);
	color: var(--mt-ink-3);
}

.empty-card .app-icon {
	font-size: 24px;
	color: var(--mt-accent);
}

.empty-card__title {
	margin: 6px 0 0;
	font-size: 14.5px;
	font-weight: 600;
	color: var(--mt-ink);
}

.empty-card__hint {
	margin: 0;
	max-width: 40ch;
	font-size: 13px;
	line-height: 1.55;
	color: var(--mt-ink-2);
}

.shortcuts {
	display: grid;
	gap: 10px;
}

@media (min-width: 560px) {
	.shortcuts {
		grid-template-columns: 1fr 1fr;
	}
}

.shortcut {
	display: flex;
	align-items: center;
	gap: 12px;
	padding: 13px 14px;
	border: 1px solid var(--mt-line);
	border-radius: var(--radius-card);
	background: var(--mt-surface);
	text-decoration: none;
	transition: background 0.15s ease;
}

.shortcut:active {
	background: var(--mt-muted);
}

.shortcut__icon {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 36px;
	height: 36px;
	flex-shrink: 0;
	border-radius: 11px;
	background: var(--mt-accent-soft);
	color: var(--mt-accent);
}

.shortcut__text {
	flex: 1;
	min-width: 0;
	display: flex;
	flex-direction: column;
	gap: 2px;
}

.shortcut__title {
	font-size: 14px;
	font-weight: 600;
	color: var(--mt-ink);
}

.shortcut__hint {
	font-size: 12px;
	color: var(--mt-ink-3);
}

.shortcut__chevron {
	font-size: 15px;
	color: var(--mt-ink-3);
	opacity: 0.6;
}

.coverage-card {
	display: flex;
	flex-direction: column;
	gap: 8px;
	padding: 16px;
	border: 1px solid var(--mt-line);
	border-radius: var(--radius-card);
	background: var(--mt-surface);
}

.coverage-card__line {
	margin: 0;
	font-size: 13px;
	line-height: 1.55;
	color: var(--mt-ink-2);
}

.coverage-card__warn {
	display: flex;
	align-items: flex-start;
	gap: 7px;
	margin: 0;
	font-size: 12.5px;
	line-height: 1.5;
	color: var(--mt-warning);
}

.coverage-card__warn .app-icon {
	flex-shrink: 0;
	margin-top: 2px;
	font-size: 15px;
}

.coverage-card__link {
	display: inline-flex;
	align-items: center;
	gap: 4px;
	margin-top: 2px;
	font-size: 13px;
	font-weight: 600;
	color: var(--mt-accent);
}
</style>
