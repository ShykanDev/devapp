<template>
	<AppPage>
		<AppHeader title="Glosario" back="/cloud-practitioner" />

		<main class="app-content">
			<div class="app-container">
				<header class="page-head">
					<p class="mt-kicker">Referencia rápida</p>
					<h1 class="mt-h-page">Glosario</h1>
					<p class="mt-body page-head__desc">
						Términos del contenido ya autorizado. Filtra por palabra y salta entre términos
						relacionados.
					</p>
				</header>

				<ClfGlossaryList :terminos="terminos" :filtro-inicial="filtroInicial" />
			</div>
		</main>
	</AppPage>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { glosarioGeneralClfC02 } from '@/data/clfC02/glosario/general';
import AppPage from '@/components/ui/AppPage.vue';
import AppHeader from '@/components/ui/AppHeader.vue';
import ClfGlossaryList from '@/components/clfC02/ClfGlossaryList.vue';

const route = useRoute();
const terminos = glosarioGeneralClfC02;

const filtroInicial = computed(() => {
	const valor = String(route.query.termino ?? '').trim();
	if (!valor) return '';
	const porId = terminos.find((termino) => termino.id === valor);
	return porId ? porId.termino : valor;
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
</style>
