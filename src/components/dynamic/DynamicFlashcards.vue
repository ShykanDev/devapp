<template>
	<section class="dp-flashcards surface">
		<div class="dp-head">
			<span class="mt-icon-tile">
				<AppIcon :icon="flash" />
			</span>
			<div class="dp-head__text">
				<h3 class="dp-head__title">Flashcards</h3>
				<p class="dp-head__sub">Toca la tarjeta para ver la respuesta</p>
			</div>
			<span class="dp-progress">{{ currentIndex + 1 }} / {{ flashcards.length }}</span>
		</div>

		<div class="dp-flashcards__body">
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
					<AppIcon :icon="chevronBack" />
					<span>Anterior</span>
				</button>
				<button type="button" class="dp-flashcard-flip" @click="flip">
					{{ showAnswer ? 'Ocultar respuesta' : 'Ver respuesta' }}
				</button>
				<button type="button" class="dp-flashcard-nav" :disabled="currentIndex === flashcards.length - 1" @click="next">
					<span>Siguiente</span>
					<AppIcon :icon="chevronForward" />
				</button>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { chevronBack, chevronForward, flash } from 'ionicons/icons';
import { computed, ref, watch } from 'vue';
import type { DynamicPageFlashcard } from '../../schemas/dynamicPage';
import AppIcon from '../ui/AppIcon.vue';

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
	box-shadow: var(--shadow-soft);
	overflow: hidden;
}

.dp-head {
	display: flex;
	align-items: center;
	gap: 12px;
	padding: 16px 18px;
	border-bottom: 1px solid var(--mt-line);
}

.dp-head__text {
	flex: 1;
	min-width: 0;
}

.dp-head__title {
	margin: 0;
	font-size: 15.5px;
	font-weight: 700;
	letter-spacing: -0.012em;
	color: var(--mt-ink);
}

.dp-head__sub {
	margin: 3px 0 0;
	font-size: 13px;
	line-height: 1.4;
	color: var(--mt-ink-3);
}

.dp-progress {
	flex-shrink: 0;
	font-size: 13px;
	font-weight: 600;
	font-variant-numeric: tabular-nums;
	color: var(--mt-ink-3);
}

.dp-flashcards__body {
	padding: 18px 20px 20px;
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
	padding: 22px;
	border-radius: 14px;
	border: 1px solid var(--mt-line);
}

.dp-flashcard-question {
	background: var(--mt-muted);
	align-items: flex-start;
	text-align: left;
}

.dp-flashcard-answer {
	background: var(--mt-accent-soft);
	border-color: color-mix(in srgb, var(--mt-accent) 26%, var(--mt-line));
	transform: rotateY(180deg);
	align-items: flex-start;
	text-align: left;
}

.dp-flashcard-label {
	display: inline-flex;
	align-items: center;
	gap: 6px;
	font-size: 11px;
	font-weight: 600;
	letter-spacing: 0.08em;
	text-transform: uppercase;
	color: var(--mt-ink-3);
}

.dp-flashcard-answer .dp-flashcard-label {
	color: var(--mt-accent);
}

.dp-flashcard-text {
	margin: 0;
	font-size: 15px;
	font-weight: 500;
	line-height: 1.6;
	color: var(--mt-ink);
	letter-spacing: -0.005em;
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
	font-size: 13px;
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
	font-size: 13px;
	font-weight: 600;
	cursor: pointer;
}

@media (prefers-reduced-motion: reduce) {
	.dp-flashcard-inner {
		transition: none;
	}
}
</style>
