<template>
	<div class="aif-glossary">
		<div class="aif-glossary__search">
			<AppIcon :icon="searchOutline" class="aif-glossary__search-icon" />
			<input
				v-model="filtro"
				class="aif-glossary__input"
				type="search"
				placeholder="Filtrar términos…"
				aria-label="Filtrar términos del glosario"
			/>
			<button
				v-if="filtro.trim()"
				type="button"
				class="aif-glossary__clear"
				aria-label="Limpiar filtro"
				@click="filtro = ''"
			>
				<AppIcon :icon="close" />
			</button>
		</div>

		<p class="aif-glossary__count">
			{{ visibles.length }} de {{ terminos.length }} términos
		</p>

		<div v-if="visibles.length === 0" class="aif-glossary__empty">
			<AppIcon :icon="bookOutline" />
			<p>No hay términos que coincidan con «{{ filtro }}».</p>
		</div>

		<div v-else class="aif-glossary__list">
			<article v-for="termino in visibles" :key="termino.id" class="aif-glossary__item">
				<h3 class="aif-glossary__term">{{ termino.termino }}</h3>
				<p class="aif-glossary__def">{{ termino.definicion }}</p>
				<div v-if="termino.relacionados.length > 0" class="aif-glossary__related">
					<span class="aif-glossary__related-label">Relacionado</span>
					<button
						v-for="relacionado in termino.relacionados"
						:key="relacionado"
						type="button"
						class="aif-glossary__chip"
						@click="buscarRelacionado(relacionado)"
					>
						{{ nombreDe(relacionado) }}
					</button>
				</div>
			</article>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { bookOutline, close, searchOutline } from 'ionicons/icons';
import { normalizar } from '@/data/aifC01/busqueda';
import type { TerminoAifC01 } from '@/data/aifC01/types';
import AppIcon from '@/components/ui/AppIcon.vue';

const props = withDefaults(
	defineProps<{ terminos: TerminoAifC01[]; filtroInicial?: string }>(),
	{ filtroInicial: '' }
);

const filtro = ref(props.filtroInicial);

watch(
	() => props.filtroInicial,
	(valor) => {
		filtro.value = valor;
	}
);

const visibles = computed(() => {
	const consulta = normalizar(filtro.value.trim());
	if (!consulta) return props.terminos;
	return props.terminos.filter(
		(termino) =>
			normalizar(termino.termino).includes(consulta) ||
			normalizar(termino.definicion).includes(consulta)
	);
});

function nombreDe(id: string): string {
	return props.terminos.find((termino) => termino.id === id)?.termino ?? id;
}

function buscarRelacionado(id: string) {
	filtro.value = nombreDe(id);
}
</script>

<style scoped>
.aif-glossary {
	display: flex;
	flex-direction: column;
	gap: 14px;
}

.aif-glossary__search {
	display: flex;
	align-items: center;
	gap: 8px;
	padding: 0 10px 0 14px;
	border-radius: 14px;
	background: var(--mt-muted);
}

.aif-glossary__search-icon {
	font-size: 17px;
	color: var(--mt-ink-3);
	flex-shrink: 0;
}

.aif-glossary__input {
	flex: 1;
	min-width: 0;
	min-height: 48px;
	border: none;
	background: transparent;
	color: var(--mt-ink);
	font-size: 15px;
	outline: none;
}

.aif-glossary__clear {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 32px;
	height: 32px;
	border: none;
	border-radius: 999px;
	background: transparent;
	color: var(--mt-ink-3);
	cursor: pointer;
}

.aif-glossary__count {
	margin: 0;
	font-size: 12.5px;
	color: var(--mt-ink-3);
}

.aif-glossary__list {
	display: flex;
	flex-direction: column;
	gap: 12px;
}

.aif-glossary__item {
	padding: 14px 16px;
	border: 1px solid var(--mt-line);
	border-radius: var(--radius-card);
	background: var(--mt-surface);
}

.aif-glossary__term {
	margin: 0;
	font-size: 15px;
	font-weight: 700;
	letter-spacing: -0.012em;
	color: var(--mt-ink);
}

.aif-glossary__def {
	margin: 6px 0 0;
	font-size: 13.5px;
	line-height: 1.6;
	color: var(--mt-ink-2);
}

.aif-glossary__related {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 6px;
	margin-top: 10px;
}

.aif-glossary__related-label {
	font-size: 10.5px;
	font-weight: 700;
	letter-spacing: 0.07em;
	text-transform: uppercase;
	color: var(--mt-ink-3);
}

.aif-glossary__chip {
	padding: 4px 9px;
	border: 1px solid var(--mt-line);
	border-radius: 999px;
	background: var(--mt-muted);
	font-size: 11.5px;
	color: var(--mt-ink-2);
	cursor: pointer;
}

.aif-glossary__empty {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
	padding: 36px 16px;
	text-align: center;
	color: var(--mt-ink-3);
	font-size: 13.5px;
}

.aif-glossary__empty .app-icon {
	font-size: 24px;
}
</style>
