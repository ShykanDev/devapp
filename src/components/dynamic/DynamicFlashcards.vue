<template>
	<section class="dp-flashcards surface">
		<div class="dp-head">
			<span class="mt-icon-tile">
				<ion-icon :icon="flash"></ion-icon>
			</span>
			<div class="dp-head__text">
				<h3 class="dp-head__title">Flashcards</h3>
				<p class="dp-head__sub">Toca la tarjeta para ver la respuesta</p>
			</div>
			<span class="dp-progress">{{ currentIndex + 1 }} / {{ flashcards.length }}</span>
		</div>

		<div class="dp-flashcard-box" :class="{ 'dp-flashcard-box--flipped': showAnswer }" @click="flip">
			<div class="dp-flashcard-inner">
				<div class="dp-flashcard-face dp-flashcard-question">
					<span class="dp-flashcard-label">Pregunta</span>
					<p class="dp-flashcard-text">{{ current.question }}</p>
				</div>
				<div class="dp-flashcard-face dp-flashcard-answer">
					<span class="dp-flashcard-label">Respuesta</span>
					<p class="dp-flashcard-text">{{ current.answer }}</p>
				</div>
			</div>
		</div>

		<div class="dp-flashcard-actions">
			<button type="button" class="dp-flashcard-nav dp-flashcard-nav--prev" :disabled="currentIndex === 0" @click="previous">
				<ion-icon :icon="chevronBack"></ion-icon>
				<span>Anterior</span>
			</button>
			<button type="button" class="dp-flashcard-flip" @click="flip">
				{{ showAnswer ? 'Ocultar respuesta' : 'Ver respuesta' }}
			</button>
			<button type="button" class="dp-flashcard-nav" :disabled="currentIndex === flashcards.length - 1" @click="next">
				<span>Siguiente</span>
				<ion-icon :icon="chevronForward"></ion-icon>
			</button>
		</div>
	</section>
</template>

<script setup lang="ts">
import { IonIcon } from '@ionic/vue';
import { chevronBack, chevronForward, flash } from 'ionicons/icons';
import { computed, ref, watch } from 'vue';
import type { DynamicPageFlashcard } from '../../schemas/dynamicPage';

const props = defineProps<{ flashcards: DynamicPageFlashcard[] }>();

const currentIndex = ref(0);
const showAnswer = ref(false);

const current = computed(() => props.flashcards[Math.min(currentIndex.value, props.flashcards.length - 1)]);

const flip = () => {
	showAnswer.value = !showAnswer.value;
};

const previous = () => {
	if (currentIndex.value > 0) {
		currentIndex.value -= 1;
		showAnswer.value = false;
	}
};

const next = () => {
	if (currentIndex.value < props.flashcards.length - 1) {
		currentIndex.value += 1;
		showAnswer.value = false;
	}
};

watch(
	() => props.flashcards,
	() => {
		currentIndex.value = 0;
		showAnswer.value = false;
	}
);
</script>

<style scoped>
.dp-flashcards {
	border: 1px solid var(--mt-line);
	border-radius: var(--radius-card);
	padding: 20px;
	box-shadow: var(--shadow-soft);
}

.dp-head {
	display: flex;
	align-items: center;
	gap: 12px;
	margin-bottom: 18px;
}

.dp-head__text {
	flex: 1;
	min-width: 0;
}

.dp-head__title {
	margin: 0;
	font-size: 16.5px;
	font-weight: 650;
	letter-spacing: -0.014em;
	color: var(--mt-ink);
}

.dp-head__sub {
	margin: 3px 0 0;
	font-size: 12.5px;
	color: var(--mt-ink-3);
}

.dp-progress {
	font-size: 13px;
	font-weight: 600;
	color: var(--mt-ink-2);
	font-variant-numeric: tabular-nums;
}

.dp-flashcard-box {
	perspective: 1200px;
	margin-bottom: 16px;
	cursor: pointer;
	min-height: 190px;
}

.dp-flashcard-inner {
	position: relative;
	width: 100%;
	height: 190px;
	transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
	transform-style: preserve-3d;
}

.dp-flashcard-box--flipped .dp-flashcard-inner {
	transform: rotateY(180deg);
}

.dp-flashcard-face {
	position: absolute;
	inset: 0;
	backface-visibility: hidden;
	-webkit-backface-visibility: hidden;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 12px;
	padding: 24px;
	border-radius: 18px;
}

.dp-flashcard-question {
	background: var(--mt-muted);
	border: 1px solid var(--mt-line);
	align-items: center;
	text-align: center;
}

.dp-flashcard-answer {
	background: var(--mt-accent-soft);
	border: 1px solid color-mix(in srgb, var(--mt-accent) 24%, var(--mt-line));
	transform: rotateY(180deg);
	align-items: center;
	text-align: center;
	color: var(--mt-ink);
}

.dp-flashcard-label {
	font-size: 11px;
	font-weight: 700;
	letter-spacing: 0.1em;
	text-transform: uppercase;
	color: var(--mt-ink-3);
}

.dp-flashcard-answer .dp-flashcard-label {
	color: var(--mt-accent);
}

.dp-flashcard-text {
	margin: 0;
	font-size: 16.5px;
	font-weight: 600;
	line-height: 1.5;
	color: var(--mt-ink);
	letter-spacing: -0.008em;
}

.dp-flashcard-actions {
	display: grid;
	grid-template-columns: 1fr auto 1fr;
	gap: 8px;
	align-items: center;
}

.dp-flashcard-nav {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 4px;
	min-height: 42px;
	padding: 0 8px;
	border: none;
	border-radius: 12px;
	background: transparent;
	color: var(--mt-accent);
	font-family: var(--font-sans);
	font-size: 13.5px;
	font-weight: 600;
	cursor: pointer;
	transition: opacity 0.15s ease;
}

.dp-flashcard-nav:disabled {
	opacity: 0.35;
	cursor: default;
}

.dp-flashcard-nav--prev {
	color: var(--mt-ink-2);
}

.dp-flashcard-flip {
	min-height: 42px;
	padding: 0 20px;
	border: 1px solid var(--mt-line-strong);
	border-radius: 999px;
	background: var(--mt-surface);
	color: var(--mt-ink);
	font-family: var(--font-sans);
	font-size: 13.5px;
	font-weight: 600;
	cursor: pointer;
}

@media (prefers-reduced-motion: reduce) {
	.dp-flashcard-inner {
		transition: none;
	}
}
</style>
