<template>
	<AppPage>
		<AppHeader title="Comparaciones" back="/cloud-practitioner" />

		<main class="app-content">
			<div class="app-container">
				<header class="page-head">
					<p class="mt-kicker">Pares que se confunden</p>
					<h1 class="mt-h-page">Comparaciones</h1>
					<p class="mt-body page-head__desc">
						Cada par incluye la diferencia fundamental, cuándo usar cada opción, un escenario
						para cada lado y la pregunta de comparación asociada.
					</p>
				</header>

				<p class="mt-label">{{ pares.length }} pares disponibles</p>

				<div class="pares">
					<ClfComparisonCard v-for="par in pares" :key="par.id" :par="par" />
				</div>

				<section class="section">
					<div class="practice-card">
						<p class="practice-card__text">
							Pon a prueba estos pares en una sesión mixta de repaso con preguntas y
							comparaciones de todos los dominios.
						</p>
						<AppButton to="/cloud-practitioner/repaso">
							<template #start><AppIcon :icon="clipboardOutline" /></template>
							Practicar comparaciones
						</AppButton>
					</div>
				</section>
			</div>
		</main>
	</AppPage>
</template>

<script setup lang="ts">
import { clipboardOutline } from 'ionicons/icons';
import { TODOS_LOS_PARES } from '@/data/clfC02/registroContenido';
import AppPage from '@/components/ui/AppPage.vue';
import AppHeader from '@/components/ui/AppHeader.vue';
import AppButton from '@/components/ui/AppButton.vue';
import AppIcon from '@/components/ui/AppIcon.vue';
import ClfComparisonCard from '@/components/clfC02/ClfComparisonCard.vue';

const pares = TODOS_LOS_PARES;
</script>

<style scoped>
.page-head {
	padding: 20px 0 20px;
}

.page-head__desc {
	margin: 10px 0 0;
	max-width: 58ch;
}

.pares {
	display: flex;
	flex-direction: column;
	gap: 14px;
	margin-top: 12px;
}

.section {
	margin-top: 22px;
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
	margin: 0;
	font-size: 13.5px;
	color: var(--mt-ink-2);
}
</style>
