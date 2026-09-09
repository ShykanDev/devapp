<template>
	<section class="dp-exam surface">
		<div class="dp-head">
			<span class="mt-icon-tile">
				<ion-icon :icon="helpCircle"></ion-icon>
			</span>
			<div class="dp-head__text">
				<h3 class="dp-head__title">{{ title }}</h3>
				<p class="dp-head__sub">{{ subtitle }}</p>
			</div>
			<span v-if="showResult" class="dp-head__score">{{ percent }}%</span>
			<span v-else class="dp-head__count">Pregunta {{ currentQuestion + 1 }} de {{ questions.length }}</span>
		</div>

		<!-- Resultado -->
		<div v-if="showResult" class="dp-result">
			<div class="dp-result__score">
				<span class="dp-result__num">{{ correctCount }}<small>/{{ questions.length }}</small></span>
				<span class="dp-result__pct">{{ percent }}%</span>
			</div>
			<p class="dp-result__text">
				{{
					percent >= 70
						? '¡Buen trabajo! Dominas el tema.'
						: 'Repasa el contenido y vuelve a intentarlo.'
				}}
			</p>
			<ion-button class="dp-result__cta" @click="restart">
				<ion-icon slot="start" :icon="refresh"></ion-icon>
				Repetir examen
			</ion-button>
		</div>

		<!-- Pregunta -->
		<template v-else>
			<p class="dp-question">{{ current.question }}</p>

			<div class="dp-options">
				<button
					v-for="(option, optIdx) in current.options"
					:key="optIdx"
					type="button"
					class="dp-option"
					:class="optionClass(optIdx)"
					:disabled="answered"
					@click="selectOption(optIdx)"
				>
					<span class="dp-option__letter">{{ letterOf(optIdx) }}</span>
					<span class="dp-option__text">{{ option }}</span>
					<ion-icon
						v-if="answered && optIdx === current.correctAnswer"
						class="dp-option__mark dp-option__mark--ok"
						:icon="checkmark"
					></ion-icon>
					<ion-icon
						v-else-if="answered && optIdx === selectedIndex"
						class="dp-option__mark dp-option__mark--bad"
						:icon="close"
					></ion-icon>
				</button>
			</div>

			<div v-if="answered" class="dp-feedback" :class="isLastAnswerCorrect ? 'dp-feedback--ok' : 'dp-feedback--bad'">
				<p class="dp-feedback__text">
					{{
						isLastAnswerCorrect
							? 'Correcto'
							: `Incorrecto. La respuesta correcta es «${current.options[current.correctAnswer]}».`
					}}
				</p>
				<p v-if="current.explanation" class="dp-feedback__explain">{{ current.explanation }}</p>
			</div>

			<div class="dp-nav">
				<button type="button" class="dp-nav__link" :disabled="currentQuestion === 0" @click="previous">
					<ion-icon :icon="chevronBack"></ion-icon>
					Anterior
				</button>
				<ion-button class="dp-nav__next" :disabled="!answered" @click="next">
					{{ isLastQuestion ? 'Terminar' : 'Siguiente' }}
					<ion-icon slot="end" :icon="chevronForward"></ion-icon>
				</ion-button>
			</div>
		</template>
	</section>
</template>

<script setup lang="ts">
import { IonButton, IonIcon } from '@ionic/vue';
import { checkmark, chevronBack, chevronForward, close, helpCircle, refresh } from 'ionicons/icons';
import { computed, ref, watch } from 'vue';
import type { DynamicPageExamQuestion } from '../../schemas/dynamicPage';

const props = withDefaults(
	defineProps<{ questions: DynamicPageExamQuestion[]; title?: string; subtitle?: string }>(),
	{ title: 'Mini examen', subtitle: 'Comprueba lo que aprendiste' }
);

const answers = ref<(number | null)[]>(props.questions.map(() => null));
const currentQuestion = ref(0);
const selectedIndex = ref<number | null>(null);
const finished = ref(false);

const current = computed(() => props.questions[Math.min(currentQuestion.value, props.questions.length - 1)]);
const answered = computed(() => selectedIndex.value !== null);
const isLastAnswerCorrect = computed(() => selectedIndex.value === current.value.correctAnswer);
const isLastQuestion = computed(() => currentQuestion.value === props.questions.length - 1);
const showResult = computed(() => finished.value || answers.value.every((a) => a !== null));

const correctCount = computed(
	() => answers.value.filter((a, i) => a === props.questions[i]?.correctAnswer).length
);
const percent = computed(() =>
	props.questions.length === 0 ? 0 : Math.round((correctCount.value / props.questions.length) * 100)
);

const letterOf = (i: number) => String.fromCharCode(65 + i);

const optionClass = (optIdx: number) => {
	if (!answered.value) return '';
	if (optIdx === current.value.correctAnswer) return 'dp-option--correct';
	if (optIdx === selectedIndex.value) return 'dp-option--wrong';
	return 'dp-option--dim';
};

const selectOption = (optIdx: number) => {
	if (answered.value) return;
	selectedIndex.value = optIdx;
	answers.value[currentQuestion.value] = optIdx;
};

const previous = () => {
	if (currentQuestion.value > 0) {
		currentQuestion.value -= 1;
		selectedIndex.value = answers.value[currentQuestion.value] ?? null;
	}
};

const next = () => {
	if (currentQuestion.value < props.questions.length - 1) {
		currentQuestion.value += 1;
		selectedIndex.value = answers.value[currentQuestion.value] ?? null;
	} else {
		finished.value = true;
	}
};

const restart = () => {
	answers.value = props.questions.map(() => null);
	currentQuestion.value = 0;
	selectedIndex.value = null;
	finished.value = false;
};

watch(
	() => props.questions,
	() => {
		answers.value = props.questions.map(() => null);
		currentQuestion.value = 0;
		selectedIndex.value = null;
		finished.value = false;
	}
);
</script>

<style scoped>
.dp-exam {
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

.dp-head__count,
.dp-head__score {
	font-size: 13px;
	font-weight: 600;
	color: var(--mt-ink-2);
	font-variant-numeric: tabular-nums;
}

.dp-head__score {
	color: var(--mt-accent);
}

/* ---------- Pregunta ---------- */
.dp-question {
	margin: 4px 0 16px;
	font-size: 16.5px;
	font-weight: 600;
	line-height: 1.5;
	letter-spacing: -0.01em;
	color: var(--mt-ink);
}

.dp-options {
	display: flex;
	flex-direction: column;
	gap: 9px;
}

.dp-option {
	display: flex;
	align-items: center;
	gap: 12px;
	width: 100%;
	min-height: 54px;
	text-align: left;
	border: 1px solid var(--mt-line);
	background: var(--mt-surface);
	border-radius: 15px;
	padding: 10px 14px;
	font-family: var(--font-sans);
	font-size: 14.5px;
	line-height: 1.45;
	color: var(--mt-ink);
	cursor: pointer;
	transition: border-color 0.15s ease, background 0.15s ease;
}

@media (hover: hover) {
	.dp-option:not(:disabled):hover {
		background: var(--mt-muted);
	}
}

.dp-option:disabled {
	cursor: default;
}

.dp-option__letter {
	width: 28px;
	height: 28px;
	flex-shrink: 0;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border-radius: 9px;
	background: var(--mt-muted);
	font-size: 12.5px;
	font-weight: 650;
	color: var(--mt-ink-2);
}

.dp-option__text {
	flex: 1;
	min-width: 0;
}

.dp-option__mark {
	font-size: 19px;
	flex-shrink: 0;
}

.dp-option__mark--ok {
	color: var(--mt-success);
}

.dp-option__mark--bad {
	color: var(--mt-danger);
}

.dp-option--correct {
	border-color: color-mix(in srgb, var(--mt-success) 45%, var(--mt-line));
	background: color-mix(in srgb, var(--mt-success) 7%, var(--mt-surface));
}

.dp-option--correct .dp-option__letter {
	background: var(--mt-success);
	color: #fff;
}

.dp-option--wrong {
	border-color: color-mix(in srgb, var(--mt-danger) 45%, var(--mt-line));
	background: color-mix(in srgb, var(--mt-danger) 6%, var(--mt-surface));
}

.dp-option--wrong .dp-option__letter {
	background: var(--mt-danger);
	color: #fff;
}

.dp-option--dim {
	opacity: 0.55;
}

/* ---------- Feedback ---------- */
.dp-feedback {
	margin-top: 14px;
	padding: 14px 16px;
	border-radius: 14px;
	font-size: 14px;
}

.dp-feedback--ok {
	background: color-mix(in srgb, var(--mt-success) 9%, var(--mt-surface));
	border: 1px solid color-mix(in srgb, var(--mt-success) 25%, var(--mt-line));
}

.dp-feedback--bad {
	background: color-mix(in srgb, var(--mt-danger) 8%, var(--mt-surface));
	border: 1px solid color-mix(in srgb, var(--mt-danger) 22%, var(--mt-line));
}

.dp-feedback__text {
	margin: 0;
	font-weight: 600;
	font-size: 14px;
	color: var(--mt-ink);
}

.dp-feedback--ok .dp-feedback__text {
	color: var(--mt-success);
}

.dp-feedback--bad .dp-feedback__text {
	color: var(--mt-danger);
}

.dp-feedback__explain {
	margin: 6px 0 0;
	font-size: 13px;
	font-weight: 400;
	line-height: 1.55;
	color: var(--mt-ink-2);
}

/* ---------- Nav ---------- */
.dp-nav {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 18px;
}

.dp-nav__link {
	display: inline-flex;
	align-items: center;
	gap: 4px;
	min-height: 44px;
	padding: 0 8px;
	border: none;
	background: transparent;
	color: var(--mt-ink-2);
	font-family: var(--font-sans);
	font-size: 14px;
	font-weight: 600;
	cursor: pointer;
}

.dp-nav__link:disabled {
	opacity: 0.35;
	cursor: default;
}

.dp-nav__next {
	min-height: 44px;
}

/* ---------- Resultado ---------- */
.dp-result {
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	padding: 12px 0 4px;
}

.dp-result__score {
	display: flex;
	align-items: baseline;
	gap: 10px;
}

.dp-result__num {
	font-size: 44px;
	font-weight: 750;
	letter-spacing: -0.04em;
	color: var(--mt-ink);
	line-height: 1;
	font-variant-numeric: tabular-nums;
}

.dp-result__num small {
	font-size: 20px;
	font-weight: 600;
	color: var(--mt-ink-3);
	letter-spacing: -0.02em;
}

.dp-result__pct {
	font-size: 15px;
	font-weight: 650;
	color: var(--mt-accent);
}

.dp-result__text {
	margin: 14px 0 0;
	font-size: 14px;
	color: var(--mt-ink-2);
}

.dp-result__cta {
	margin-top: 18px;
	min-height: 44px;
}
</style>
