<template>
	<AppPage>
		<AppHeader title="Qué evalúa AWS" back="/cloud-practitioner" />

		<main class="app-content">
			<div class="app-container">
				<header class="page-head">
					<p class="mt-kicker">Por conocimiento, no por preguntas</p>
					<h1 class="mt-h-page">Qué puede evaluar AWS</h1>
					<p class="mt-body page-head__desc">
						No anticipa preguntas: describe, para cada task statement, las capacidades que el
						exam guide espera. Úsalo para comprobar que puedes reconocer, explicar, distinguir,
						seleccionar y descartar un concepto con una redacción y un escenario nuevos.
					</p>
				</header>

				<section v-for="dominio in dominios" :key="dominio.id" class="section">
					<div class="section__head">
						<h2 class="mt-h-2">Dominio {{ dominio.numero }} · {{ dominio.nombreEs }}</h2>
						<p class="mt-label">{{ dominio.peso }}% del examen</p>
					</div>

					<div class="tasks">
						<article v-for="entrada in entradaDeDominio(dominio.id)" :key="entrada.taskId" class="task">
							<header class="task__head">
								<span class="task__id">Task {{ entrada.taskId }}</span>
								<RouterLink class="task__link" :to="`/cloud-practitioner/task/${entrada.taskId}`">
									{{ entrada.titulo }}
								</RouterLink>
							</header>

							<ul class="capacidades">
								<li v-for="(capacidad, indice) in entrada.queDebesPoder" :key="indice">
									<span class="capacidades__verbo">{{ capacidad.verbo }}</span>
									<span class="capacidades__texto">{{ capacidad.capacidad }}</span>
									<span class="capacidades__objs">{{ capacidad.objetivos.join(' · ') }}</span>
								</li>
							</ul>

							<p class="senales">
								<AppIcon :icon="searchOutline" />
								<span
									>El escenario puede describir esto sin nombrar el servicio:
									{{ entrada.senalesDeEscenario.join(' · ') }}</span
								>
							</p>
						</article>
					</div>
				</section>
			</div>
		</main>
	</AppPage>
</template>

<script setup lang="ts">
import { searchOutline } from 'ionicons/icons';
import { dominiosClfC02 } from '@/data/clfC02';
import { evaluablesDeDominio, tasksSinEvaluables } from '@/data/clfC02/evaluables';
import AppPage from '@/components/ui/AppPage.vue';
import AppHeader from '@/components/ui/AppHeader.vue';
import AppIcon from '@/components/ui/AppIcon.vue';

const dominios = dominiosClfC02;
function entradaDeDominio(dominioId: string) {
	return evaluablesDeDominio(dominioId);
}

if (import.meta.env.DEV && tasksSinEvaluables().length > 0) {
	console.warn('Tasks sin capacidades evaluables:', tasksSinEvaluables().join(', '));
}
</script>

<style scoped>
.page-head {
	padding: 20px 0 18px;
}

.page-head__desc {
	margin: 10px 0 0;
	max-width: 62ch;
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
	flex-shrink: 0;
}

.tasks {
	display: flex;
	flex-direction: column;
	gap: 12px;
}

.task {
	padding: 14px 15px;
	border: 1px solid var(--mt-line);
	border-radius: var(--radius-card);
	background: var(--mt-surface);
}

.task__head {
	display: flex;
	align-items: baseline;
	gap: 9px;
	margin-bottom: 10px;
}

.task__id {
	flex-shrink: 0;
	padding: 3px 9px;
	border-radius: 999px;
	background: var(--mt-accent-soft);
	font-size: 11.5px;
	font-weight: 700;
	color: var(--mt-accent);
}

.task__link {
	font-size: 14px;
	font-weight: 600;
	line-height: 1.45;
	color: var(--mt-ink);
	text-decoration: none;
}

.capacidades {
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-direction: column;
	gap: 9px;
}

.capacidades li {
	display: grid;
	grid-template-columns: auto 1fr;
	gap: 4px 9px;
	align-items: baseline;
}

.capacidades__verbo {
	grid-row: span 2;
	padding: 2px 8px;
	border-radius: 999px;
	background: var(--mt-muted);
	font-size: 11px;
	font-weight: 700;
	text-transform: lowercase;
	color: var(--mt-ink-2);
}

.capacidades__texto {
	font-size: 13px;
	line-height: 1.55;
	color: var(--mt-ink-2);
}

.capacidades__objs {
	font-size: 11px;
	font-weight: 600;
	color: var(--mt-ink-3);
}

.senales {
	display: flex;
	align-items: flex-start;
	gap: 7px;
	margin: 12px 0 0;
	padding-top: 10px;
	border-top: 1px dashed var(--mt-line);
	font-size: 12.5px;
	line-height: 1.5;
	color: var(--mt-ink-3);
}

.senales .app-icon {
	flex-shrink: 0;
	margin-top: 2px;
	font-size: 14px;
}
</style>
