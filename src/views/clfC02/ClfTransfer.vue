<template>
	<AppPage>
		<AppHeader title="Transferencia" back="/cloud-practitioner" />

		<main class="app-content">
			<div class="app-container">
				<header class="page-head">
					<p class="mt-kicker">Mismo criterio, otro escenario</p>
					<h1 class="mt-h-page">Transferencia de escenarios</h1>
					<p class="mt-body page-head__desc">
						Cada escenario mantiene el requisito de un objective crítico pero cambia la
						redacción, el contexto y la industria, y no nombra el servicio. Sirve para
						comprobar si el criterio se entendió o solo se memorizó una pregunta.
					</p>
					<p class="page-head__meta">{{ escenarios.length }} escenarios de transferencia</p>
				</header>

				<article v-for="escenario in escenarios" :key="escenario.id" class="escenario">
					<p class="escenario__requisito">{{ escenario.requisito }}</p>

					<ul class="escenario__opciones">
						<li
							v-for="(opcion, indice) in escenario.opciones"
							:key="indice"
							class="opcion"
							:class="{ 'opcion--correcta': indice === escenario.correctAnswer }"
						>
							<AppIcon
								v-if="indice === escenario.correctAnswer"
								:icon="checkmarkCircleOutline"
							/>
							<span>{{ opcion }}</span>
						</li>
					</ul>

					<p class="escenario__porque">
						<AppIcon :icon="bulbOutline" />
						<span>{{ escenario.porque }}</span>
					</p>

					<p class="escenario__cambio">
						<AppIcon :icon="swapIcon" />
						<span>{{ escenario.cambioQueInvertiria }}</span>
					</p>
				</article>

				<p v-if="escenarios.length === 0" class="vacio">
					Todavía no hay escenarios de transferencia.
				</p>
			</div>
		</main>
	</AppPage>
</template>

<script setup lang="ts">
import { bulbOutline, checkmarkCircleOutline, swapHorizontalOutline as swapIcon } from 'ionicons/icons';
import { transferenciaClfC02 } from '@/data/clfC02/transferencia';
import AppPage from '@/components/ui/AppPage.vue';
import AppHeader from '@/components/ui/AppHeader.vue';
import AppIcon from '@/components/ui/AppIcon.vue';

const escenarios = transferenciaClfC02;
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

.escenario {
	margin-bottom: 16px;
	padding: 16px;
	border: 1px solid var(--mt-line);
	border-radius: var(--radius-card);
	background: var(--mt-surface);
}

.escenario__requisito {
	margin: 0;
	font-size: 14px;
	font-weight: 600;
	line-height: 1.55;
	color: var(--mt-ink);
}

.escenario__opciones {
	margin: 12px 0 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-direction: column;
	gap: 6px;
}

.opcion {
	display: flex;
	align-items: flex-start;
	gap: 7px;
	padding: 9px 12px;
	border: 1px solid var(--mt-line);
	border-radius: var(--radius-box);
	font-size: 13px;
	line-height: 1.5;
	color: var(--mt-ink-2);
}

.opcion--correcta {
	border-color: var(--mt-success);
	background: var(--mt-accent-soft);
	color: var(--mt-ink);
}

.opcion--correcta .app-icon {
	flex-shrink: 0;
	margin-top: 1px;
	font-size: 15px;
	color: var(--mt-success);
}

.escenario__porque {
	display: flex;
	align-items: flex-start;
	gap: 7px;
	margin: 12px 0 0;
	font-size: 12.5px;
	line-height: 1.55;
	color: var(--mt-ink-2);
}

.escenario__porque .app-icon,
.escenario__cambio .app-icon {
	flex-shrink: 0;
	margin-top: 2px;
	font-size: 14px;
	color: var(--mt-accent);
}

.escenario__cambio {
	display: flex;
	align-items: flex-start;
	gap: 7px;
	margin: 10px 0 0;
	padding-top: 9px;
	border-top: 1px dashed var(--mt-line);
	font-size: 12.5px;
	line-height: 1.55;
	color: var(--mt-ink-3);
}

.vacio {
	padding: 24px 0;
	text-align: center;
	font-size: 13px;
	color: var(--mt-ink-3);
}
</style>
