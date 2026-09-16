<template>
	<section class="dp-suggest">
		<div class="dp-suggest__head">
			<h3 class="dp-suggest__title">Continúa explorando</h3>
			<p class="dp-suggest__sub">Elige un subtema y se abrirá como una nueva sección.</p>
		</div>

		<div v-if="suggestions.length" class="dp-suggest__chips">
			<button
				v-for="suggestion in suggestions"
				:key="suggestion"
				type="button"
				class="suggest-chip"
				:class="{ 'suggest-chip--done': isGenerated(suggestion) }"
				:disabled="busy"
				@click="pick(suggestion)"
			>
				<AppIcon
					v-if="isGenerated(suggestion)"
					class="suggest-chip__done"
					:icon="checkmarkCircleOutline"
				/>
				<span class="suggest-chip__label">{{ suggestion }}</span>
			</button>
		</div>
		<p v-else class="dp-suggest__empty">Sin sugerencias por ahora. Escribe el subtema que quieras explorar.</p>

		<form class="dp-suggest__form" @submit.prevent="submitCustom">
			<AppInput
				v-model="customTopic"
				type="text"
				class="suggest-input"
				:disabled="busy"
				placeholder="Otro subtema"
			/>
			<AppButton type="submit" variant="outline" :disabled="busy || !customTopic.trim()">
				<template #start><AppIcon :icon="arrowForward" /></template>
				Explorar
			</AppButton>
		</form>

		<div v-if="busy" class="dp-suggest__busy">
			<AppSpinner />
			<span>Abriendo un nuevo subtema…</span>
		</div>
	</section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { arrowForward, checkmarkCircleOutline } from 'ionicons/icons';
import AppButton from '../ui/AppButton.vue';
import AppIcon from '../ui/AppIcon.vue';
import AppInput from '../ui/AppInput.vue';
import AppSpinner from '../ui/AppSpinner.vue';

const props = withDefaults(
	defineProps<{
		suggestions: string[];
		generated?: string[];
		busy?: boolean;
	}>(),
	{
		generated: () => [],
		busy: false,
	}
);

const emit = defineEmits<{ pick: [topic: string] }>();

const customTopic = ref('');

const isGenerated = (suggestion: string) =>
	props.generated.some((item) => item.trim().toLowerCase() === suggestion.trim().toLowerCase());

const pick = (topic: string) => {
	if (props.busy) return;
	emit('pick', topic.trim());
};

const submitCustom = () => {
	const topic = customTopic.value.trim();
	if (!topic || props.busy) return;
	emit('pick', topic);
	customTopic.value = '';
};
</script>

<style scoped>
.dp-suggest {
	margin-top: 16px;
	padding-top: 16px;
	border-top: 1px solid var(--mt-line);
}

.dp-suggest__title {
	margin: 0;
	font-size: 14.5px;
	font-weight: 700;
	letter-spacing: -0.01em;
	color: var(--mt-ink);
}

.dp-suggest__sub {
	margin: 3px 0 0;
	font-size: 13px;
	line-height: 1.5;
	color: var(--mt-ink-3);
}

.dp-suggest__chips {
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
	margin-top: 12px;
}

.suggest-chip {
	display: inline-flex;
	align-items: center;
	gap: 6px;
	min-height: 36px;
	max-width: 100%;
	padding: 0 14px;
	border: 1px solid var(--mt-line);
	border-radius: 999px;
	background: var(--mt-muted);
	color: var(--mt-ink);
	font-size: 13.5px;
	font-weight: 500;
	cursor: pointer;
	transition: border-color 0.15s ease, background 0.15s ease;
}

.suggest-chip__done {
	flex-shrink: 0;
	font-size: 15px;
	color: var(--mt-success);
}

.suggest-chip__label {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.suggest-chip:disabled {
	opacity: 0.6;
	cursor: default;
}

.suggest-chip--done {
	color: var(--mt-ink-3);
}

@media (hover: hover) {
	.suggest-chip:not(:disabled):hover {
		border-color: var(--mt-line-strong);
		background: var(--mt-surface);
	}
}

.dp-suggest__empty {
	margin: 12px 0 0;
	font-size: 13px;
	color: var(--mt-ink-3);
}

.dp-suggest__form {
	display: flex;
	align-items: center;
	gap: 8px;
	margin-top: 14px;
}

.suggest-input {
	flex: 1;
	min-width: 0;
}

.dp-suggest__busy {
	display: flex;
	align-items: center;
	gap: 9px;
	margin-top: 12px;
	font-size: 13px;
	color: var(--mt-ink-3);
}

.dp-suggest__busy .app-spinner {
	width: 16px;
	height: 16px;
	flex-shrink: 0;
	color: var(--mt-accent);
}
</style>
