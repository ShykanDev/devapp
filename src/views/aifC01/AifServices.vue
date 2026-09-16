<template>
	<AppPage>
		<AppHeader title="Servicios" back="/ai-practitioner" />

		<main class="app-content">
			<div class="app-container">
				<header class="page-head">
					<p class="mt-kicker">En alcance del exam guide</p>
					<h1 class="mt-h-page">Servicios</h1>
					<p class="mt-body page-head__desc">
						Solo servicios presentes en la lista oficial del blueprint: qué problema resuelven,
						para qué se usan y de qué otros servicios conviene diferenciarlos.
					</p>
				</header>

				<div v-if="resaltado" class="highlight">
					<AppIcon :icon="bookmarkOutline" />
					<span>Mostrando {{ resaltado }}</span>
				</div>

				<section v-for="grupo in grupos" :key="grupo.categoria" class="section">
					<div class="section__head">
						<h2 class="mt-h-2">{{ grupo.categoria }}</h2>
						<p class="mt-label">{{ grupo.items.length }}</p>
					</div>
					<div class="servicios">
						<AifServiceCard
							v-for="servicio in grupo.items"
							:key="servicio.nombre"
							:servicio="servicio"
							:class="{ 'servicio--resaltado': servicio.nombre === resaltado }"
						/>
					</div>
				</section>

				<p class="nota">
					Todo servicio citado en el contenido del módulo debe existir en esta lista. Las
					capacidades del propio servicio (por ejemplo, la gestión de prompts de Amazon Bedrock)
					se explican dentro de su ficha.
				</p>
			</div>
		</main>
	</AppPage>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { bookmarkOutline } from 'ionicons/icons';
import { serviciosGeneralAifC01 } from '@/data/aifC01/servicios/general';
import type { ServicioAifC01 } from '@/data/aifC01/types';
import AppPage from '@/components/ui/AppPage.vue';
import AppHeader from '@/components/ui/AppHeader.vue';
import AppIcon from '@/components/ui/AppIcon.vue';
import AifServiceCard from '@/components/aifC01/AifServiceCard.vue';

const route = useRoute();
const resaltado = computed(() => String(route.query.servicio ?? '').trim());

const grupos = computed(() => {
	const mapa = new Map<string, ServicioAifC01[]>();
	for (const servicio of [...serviciosGeneralAifC01].sort(
		(a, b) => Number(b.nombre === resaltado.value) - Number(a.nombre === resaltado.value)
	)) {
		const lista = mapa.get(servicio.categoria) ?? [];
		lista.push(servicio);
		mapa.set(servicio.categoria, lista);
	}
	return [...mapa.entries()].map(([categoria, items]) => ({ categoria, items }));
});

onMounted(async () => {
	if (!resaltado.value) return;
	await nextTick();
	const elemento = document.getElementById(`servicio-${resaltado.value}`);
	if (elemento && typeof elemento.scrollIntoView === 'function') {
		elemento.scrollIntoView({ block: 'start' });
	}
});
</script>

<style scoped>
.page-head {
	padding: 20px 0 18px;
}

.page-head__desc {
	margin: 10px 0 0;
	max-width: 58ch;
}

.highlight {
	display: inline-flex;
	align-items: center;
	gap: 6px;
	margin-bottom: 16px;
	padding: 6px 11px;
	border-radius: 999px;
	background: var(--mt-accent-soft);
	color: var(--mt-accent);
	font-size: 12.5px;
	font-weight: 600;
}

.section {
	margin-bottom: 24px;
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

.servicios {
	display: flex;
	flex-direction: column;
	gap: 14px;
}

.servicio--resaltado {
	border-color: color-mix(in srgb, var(--mt-accent) 45%, var(--mt-line));
	box-shadow: 0 0 0 3px color-mix(in srgb, var(--mt-accent) 12%, transparent);
}

.nota {
	margin: 8px 0 0;
	font-size: 12px;
	line-height: 1.55;
	color: var(--mt-ink-3);
}
</style>
