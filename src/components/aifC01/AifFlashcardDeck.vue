<template>
	<section class="aif-deck">
		<header class="aif-deck__head">
			<span class="aif-deck__tile"><AppIcon :icon="albumsOutline" /></span>
			<div class="aif-deck__head-text">
				<p class="aif-deck__title">{{ titulo }}</p>
				<p class="aif-deck__sub">Toca la tarjeta para ver la respuesta</p>
			</div>
			<span class="aif-deck__counter">{{ Math.min(indice + 1, tarjetas.length) }} / {{ tarjetas.length }}</span>
		</header>

		<div v-if="tarjetas.length === 0" class="aif-deck__empty">
			<AppIcon :icon="albumsOutline" />
			<p>Todavía no hay tarjetas para esta selección.</p>
		</div>

		<div v-else-if="terminado" class="aif-deck__summary">
			<p class="aif-deck__summary-title">Mazo completado</p>
			<p class="aif-deck__summary-text">
				{{ sabidas }} de {{ tarjetas.length }} marcadas como sabidas.
			</p>
			<AppButton variant="outline" size="small" @click="reiniciar">
				<template #start><AppIcon :icon="refresh" /></template>
				Repetir mazo
			</AppButton>
		</div>

		<div v-else class="aif-deck__body">
			<div
				class="aif-deck__card"
				:class="{ 'aif-deck__card--flipped': mostrandoReverso }"
				role="button"
				tabindex="0"
				:aria-label="mostrandoReverso ? 'Ocultar respuesta' : 'Ver respuesta'"
				@click="voltear"
				@keydown.enter.prevent="voltear"
				@keydown.space.prevent="voltear"
			>
				<div class="aif-deck__inner">
					<div class="aif-deck__face aif-deck__face--frente">
						<span class="aif-deck__label">Pregunta</span>
						<p class="aif-deck__text">{{ actual.frente }}</p>
					</div>
					<div class="aif-deck__face aif-deck__face--reverso">
						<span class="aif-deck__label">Respuesta</span>
						<p class="aif-deck__text">{{ actual.reverso }}</p>
					</div>
				</div>
			</div>

			<div class="aif-deck__actions">
				<AppButton variant="outline" size="small" :disabled="indice === 0" @click="anterior">
					<template #start><AppIcon :icon="chevronBack" /></template>
					Anterior
				</AppButton>
				<AppButton size="small" @click="voltear">
					{{ mostrandoReverso ? 'Ocultar' : 'Ver respuesta' }}
				</AppButton>
				<AppButton size="small" :disabled="indice >= tarjetas.length - 1" @click="siguiente">
					Siguiente
					<template #end><AppIcon :icon="chevronForward" /></template>
				</AppButton>
			</div>

			<div v-if="mostrandoReverso" class="aif-deck__mark">
				<AppButton size="small" variant="outline" @click="marcar(false)">
					<template #start><AppIcon :icon="closeCircleOutline" /></template>
					A repasar
				</AppButton>
				<AppButton size="small" @click="marcar(true)">
					<template #start><AppIcon :icon="checkmarkCircleOutline" /></template>
					La sabía
				</AppButton>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import {
	albumsOutline,
	checkmarkCircleOutline,
	chevronBack,
	chevronForward,
	closeCircleOutline,
	refresh,
} from 'ionicons/icons';
import type { TarjetaAifC01 } from '@/data/aifC01/types';
import AppButton from '@/components/ui/AppButton.vue';
import AppIcon from '@/components/ui/AppIcon.vue';

const props = withDefaults(
	defineProps<{ tarjetas: TarjetaAifC01[]; titulo?: string }>(),
	{ titulo: 'Flashcards' }
);

const emit = defineEmits<{ sabida: [id: string]; fallada: [id: string] }>();

const indice = ref(0);
const mostrandoReverso = ref(false);
const terminado = ref(false);
const sabidas = ref(0);

const actual = computed(
	() => props.tarjetas[Math.min(indice.value, props.tarjetas.length - 1)]
);

function voltear() {
	mostrandoReverso.value = !mostrandoReverso.value;
}

function anterior() {
	if (indice.value > 0) {
		indice.value -= 1;
		mostrandoReverso.value = false;
	}
}

function siguiente() {
	if (indice.value < props.tarjetas.length - 1) {
		indice.value += 1;
		mostrandoReverso.value = false;
	} else {
		terminado.value = true;
	}
}

function marcar(sabia: boolean) {
	const tarjeta = actual.value;
	if (!tarjeta) return;
	if (sabia) {
		sabidas.value += 1;
		emit('sabida', tarjeta.id);
	} else {
		emit('fallada', tarjeta.id);
	}
	siguiente();
}

function reiniciar() {
	indice.value = 0;
	mostrandoReverso.value = false;
	terminado.value = false;
	sabidas.value = 0;
}

watch(
	() => props.tarjetas,
	() => reiniciar()
);
</script>

<style scoped>
.aif-deck {
	border: 1px solid var(--mt-line);
	border-radius: var(--radius-card);
	background: var(--mt-surface);
	overflow: hidden;
}

.aif-deck__head {
	display: flex;
	align-items: center;
	gap: 12px;
	padding: 14px 16px;
	border-bottom: 1px solid var(--mt-line);
}

.aif-deck__tile {
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

.aif-deck__head-text {
	flex: 1;
	min-width: 0;
}

.aif-deck__title {
	margin: 0;
	font-size: 15px;
	font-weight: 700;
	color: var(--mt-ink);
}

.aif-deck__sub {
	margin: 3px 0 0;
	font-size: 12.5px;
	color: var(--mt-ink-3);
}

.aif-deck__counter {
	flex-shrink: 0;
	font-size: 12.5px;
	font-weight: 600;
	font-variant-numeric: tabular-nums;
	color: var(--mt-ink-3);
}

.aif-deck__body {
	padding: 16px;
	display: flex;
	flex-direction: column;
	gap: 14px;
}

.aif-deck__card {
	perspective: 1200px;
	min-height: 190px;
	cursor: pointer;
}

.aif-deck__inner {
	position: relative;
	width: 100%;
	height: 190px;
	transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
	transform-style: preserve-3d;
}

.aif-deck__card--flipped .aif-deck__inner {
	transform: rotateY(180deg);
}

.aif-deck__face {
	position: absolute;
	inset: 0;
	backface-visibility: hidden;
	-webkit-backface-visibility: hidden;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 12px;
	padding: 20px;
	border-radius: var(--radius-box);
	border: 1px solid var(--mt-line);
}

.aif-deck__face--frente {
	background: var(--mt-muted);
}

.aif-deck__face--reverso {
	background: var(--mt-accent-soft);
	border-color: color-mix(in srgb, var(--mt-accent) 26%, var(--mt-line));
	transform: rotateY(180deg);
}

.aif-deck__label {
	font-size: 10.5px;
	font-weight: 700;
	letter-spacing: 0.08em;
	text-transform: uppercase;
	color: var(--mt-ink-3);
}

.aif-deck__face--reverso .aif-deck__label {
	color: var(--mt-accent);
}

.aif-deck__text {
	margin: 0;
	font-size: 14.5px;
	font-weight: 500;
	line-height: 1.6;
	color: var(--mt-ink);
	overflow-wrap: break-word;
}

.aif-deck__actions {
	display: grid;
	grid-template-columns: 1fr auto 1fr;
	gap: 8px;
	align-items: center;
}

.aif-deck__mark {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 8px;
}

.aif-deck__summary {
	padding: 24px 20px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 8px;
}

.aif-deck__summary-title {
	margin: 0;
	font-size: 16px;
	font-weight: 700;
	color: var(--mt-ink);
}

.aif-deck__summary-text {
	margin: 0 0 6px;
	font-size: 13.5px;
	color: var(--mt-ink-2);
}

.aif-deck__empty {
	padding: 30px 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
	text-align: center;
	color: var(--mt-ink-3);
	font-size: 13.5px;
}

.aif-deck__empty .app-icon {
	font-size: 24px;
}

@media (prefers-reduced-motion: reduce) {
	.aif-deck__inner {
		transition: none;
	}
}
</style>
