<template>
	<AppPage>
		<AppHeader title="Reconocer servicios" back="/cloud-practitioner" />

		<main class="app-content">
			<div class="app-container">
				<header class="page-head">
					<p class="mt-kicker">Requisito → servicio</p>
					<h1 class="mt-h-page">Reconocer servicios</h1>
					<p class="mt-body page-head__desc">
						El examen no pregunta qué es un servicio: describe una necesidad y espera que elijas
						la solución. Cada familia parte de un requisito, indica qué servicio encaja, por qué
						los candidatos parecidos no resuelven y qué cambio invertiría la respuesta.
					</p>
					<p class="page-head__meta">
						{{ familias.length }} familias · {{ totalCasos }} casos de reconocimiento
					</p>
				</header>

				<article v-for="familia in familias" :id="familia.id" :key="familia.id" class="familia">
					<header class="familia__head">
						<div>
							<h2 class="familia__title">{{ familia.titulo }}</h2>
							<p class="familia__pregunta">{{ familia.preguntaClave }}</p>
						</div>
						<RouterLink class="familia__task" :to="`/cloud-practitioner/task/${familia.taskId}`">
							Task {{ familia.taskId }}
						</RouterLink>
					</header>

					<p class="familia__regla">
						<AppIcon :icon="keyOutline" />
						<span>{{ familia.regla }}</span>
					</p>

					<div class="casos">
						<div v-for="(caso, indice) in familia.casos" :key="indice" class="caso">
							<p class="caso__requisito">{{ caso.requisito }}</p>

							<p class="caso__respuesta">
								<AppIcon :icon="checkmarkCircleOutline" />
								<span>{{ caso.servicio }}</span>
							</p>
							<p class="caso__porque">{{ caso.porque }}</p>

							<div class="caso__descarte">
								<p class="caso__label">Por qué no los parecidos</p>
								<ul>
									<li v-for="item in caso.descartar" :key="item.servicio">
										<strong>{{ item.servicio }}:</strong> {{ item.motivo }}
									</li>
								</ul>
							</div>

							<p v-if="caso.cambioQueInvertiria" class="caso__cambio">
								<AppIcon :icon="swapIcon" />
								<span>{{ caso.cambioQueInvertiria }}</span>
							</p>
						</div>
					</div>
				</article>
			</div>
		</main>
	</AppPage>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import {
	checkmarkCircleOutline,
	keyOutline,
	swapHorizontalOutline as swapIcon,
} from 'ionicons/icons';
import { reconocimientoClfC02 } from '@/data/clfC02/reconocimiento';
import AppPage from '@/components/ui/AppPage.vue';
import AppHeader from '@/components/ui/AppHeader.vue';
import AppIcon from '@/components/ui/AppIcon.vue';

const familias = reconocimientoClfC02;
const totalCasos = computed(() =>
	familias.reduce((total, familia) => total + familia.casos.length, 0),
);
</script>

<style scoped>
.page-head {
	padding: 20px 0 18px;
}

.page-head__desc {
	margin: 10px 0 0;
	max-width: 62ch;
}

.page-head__meta {
	margin: 12px 0 0;
	font-size: 13px;
	color: var(--mt-ink-3);
}

.familia {
	margin-bottom: 28px;
	padding: 16px;
	border: 1px solid var(--mt-line);
	border-radius: var(--radius-card);
	background: var(--mt-surface);
}

.familia__head {
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	gap: 12px;
	margin-bottom: 10px;
}

.familia__title {
	margin: 0;
	font-size: 16px;
	font-weight: 700;
	letter-spacing: -0.012em;
	color: var(--mt-ink);
}

.familia__pregunta {
	margin: 6px 0 0;
	font-size: 13px;
	line-height: 1.5;
	color: var(--mt-ink-3);
}

.familia__task {
	flex-shrink: 0;
	padding: 5px 10px;
	border-radius: 999px;
	background: var(--mt-muted);
	font-size: 12px;
	font-weight: 600;
	color: var(--mt-ink-2);
	text-decoration: none;
}

.familia__regla {
	display: flex;
	align-items: flex-start;
	gap: 7px;
	margin: 0 0 14px;
	padding: 10px 12px;
	border-radius: var(--radius-box);
	background: var(--mt-accent-soft);
	font-size: 13px;
	line-height: 1.55;
	color: var(--mt-accent);
}

.familia__regla .app-icon {
	flex-shrink: 0;
	margin-top: 2px;
	font-size: 15px;
}

.casos {
	display: flex;
	flex-direction: column;
	gap: 12px;
}

.caso {
	padding: 13px 14px;
	border: 1px solid var(--mt-line);
	border-radius: var(--radius-box);
	background: var(--mt-muted);
}

.caso__requisito {
	margin: 0;
	font-size: 13.5px;
	font-weight: 550;
	line-height: 1.5;
	color: var(--mt-ink);
}

.caso__respuesta {
	display: flex;
	align-items: center;
	gap: 6px;
	margin: 8px 0 0;
	font-size: 14px;
	font-weight: 700;
	color: var(--mt-success);
}

.caso__respuesta .app-icon {
	font-size: 16px;
}

.caso__porque {
	margin: 4px 0 0;
	font-size: 12.5px;
	line-height: 1.55;
	color: var(--mt-ink-2);
}

.caso__descarte {
	margin-top: 10px;
}

.caso__label {
	margin: 0 0 4px;
	font-size: 10.5px;
	font-weight: 700;
	letter-spacing: 0.08em;
	text-transform: uppercase;
	color: var(--mt-ink-3);
}

.caso__descarte ul {
	margin: 0;
	padding-left: 18px;
	display: flex;
	flex-direction: column;
	gap: 3px;
}

.caso__descarte li {
	font-size: 12.5px;
	line-height: 1.5;
	color: var(--mt-ink-2);
}

.caso__cambio {
	display: flex;
	align-items: flex-start;
	gap: 6px;
	margin: 10px 0 0;
	padding-top: 9px;
	border-top: 1px dashed var(--mt-line);
	font-size: 12.5px;
	line-height: 1.55;
	color: var(--mt-ink-3);
}

.caso__cambio .app-icon {
	flex-shrink: 0;
	margin-top: 2px;
	font-size: 14px;
}
</style>
