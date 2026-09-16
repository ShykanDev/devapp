<template>
	<AppPage>
		<AppHeader title="Nuevo examen" back="/examenes" />

		<main class="app-content">
			<div class="page-shell">
				<!-- Sin sesión -->
				<div v-if="!user" class="state-block">
					<div class="state-block__icon">
						<AppIcon :icon="lockClosedOutline" />
					</div>
					<p class="state-block__title">Inicia sesión para crear exámenes</p>
					<p class="state-block__hint">Guarda tus exámenes de práctica en tu cuenta.</p>
					<AppButton class="state-block__cta" to="/login">Iniciar sesión</AppButton>
				</div>

				<!-- Elección de tema y dificultad -->
				<div v-else-if="phase === 'topic'" class="create-view">
					<header class="create-head">
						<p class="mt-kicker">Asistente educativo</p>
						<h1 class="mt-h-display">Crea tu examen</h1>
						<p class="mt-body create-head__desc">
							Escribe el tema que quieres practicar y elige la dificultad; la IA
							preparará un examen de opción múltiple para ti.
						</p>
					</header>

					<div class="panel">
						<AppInput
							v-model="topicInput"
							type="text"
							class="panel__input"
							placeholder="¿De qué quieres tu examen? (ej. Fundamentos de JavaScript)"
							@keyup.enter="startCreation"
						/>
						<p v-if="topicWarning" class="panel__note">{{ topicWarning }}</p>

						<p class="panel__label">Dificultad</p>
						<div class="difficulty-list">
							<button
								v-for="option in EXAM_DIFFICULTIES"
								:key="option.id"
								type="button"
								class="difficulty-option"
								:class="{ 'difficulty-option--selected': difficulty === option.id }"
								:style="{ '--opt-color': difficultyColor(option.id) }"
								:aria-pressed="difficulty === option.id"
								@click="selectDifficulty(option.id)"
							>
								<span class="difficulty-option__text">
									<span class="difficulty-option__name">{{ option.label }}</span>
									<span class="difficulty-option__desc">{{ option.description }}</span>
								</span>
								<AppIcon
									class="difficulty-option__check"
									:icon="checkmarkCircle"
								/>
							</button>
						</div>

						<AppButton
							class="panel__submit"
							:disabled="!canGenerate"
							@click="startCreation"
						>
							<template #start><AppIcon :icon="sparkles" /></template>
							Generar examen
						</AppButton>
					</div>

					<div class="create-hints">
						<p class="create-hints__label">Ideas de temas</p>
						<div class="create-hints__chips">
							<button
								type="button"
								v-for="idea in topicIdeas"
								:key="idea"
								class="chip-btn"
								@click="pickIdea(idea)"
							>
								{{ idea }}
							</button>
						</div>
					</div>
				</div>

				<!-- Generando / guardando -->
				<div v-else-if="phase === 'generating' || phase === 'saving'" class="state-block generating">
					<div class="generating__orb">
						<AppSpinner />
					</div>
					<p class="state-block__title">{{ statusText }}</p>
					<p class="state-block__hint">Esto puede tardar unos segundos. No cierres la pantalla.</p>
				</div>

				<!-- Error -->
				<div v-else class="state-block">
					<div class="state-block__icon state-block__icon--danger">
						<AppIcon :icon="warningOutline" />
					</div>
					<p class="state-block__title">No se pudo generar el examen</p>
					<p class="state-block__hint">{{ createError }}</p>
					<p v-for="(issue, i) in createIssues" :key="i" class="state-block__hint">
						{{ issue }}
					</p>
					<div class="state-block__actions">
						<AppButton class="state-block__cta" @click="startCreation">
							<template #start><AppIcon :icon="refresh" /></template>
							Reintentar
						</AppButton>
						<AppButton variant="clear" @click="resetCreate">Cambiar de tema</AppButton>
					</div>
				</div>
			</div>
		</main>
	</AppPage>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from 'vue';
import { useRouter } from 'vue-router';
import { checkmarkCircle, lockClosedOutline, refresh, sparkles, warningOutline } from 'ionicons/icons';
import { getAuth, onAuthStateChanged, type User } from 'firebase/auth';
import AppButton from '../components/ui/AppButton.vue';
import AppHeader from '../components/ui/AppHeader.vue';
import AppIcon from '../components/ui/AppIcon.vue';
import AppInput from '../components/ui/AppInput.vue';
import AppPage from '../components/ui/AppPage.vue';
import AppSpinner from '../components/ui/AppSpinner.vue';
import { requestExamGeneration, ExamGenerationClientError } from '../lib/examen';
import { saveExamen } from '../services/examenes';
import {
	parseExamen,
	EXAM_DIFFICULTIES,
	type DifficultyId,
} from '../schemas/examen';

type CreatePhase = 'topic' | 'generating' | 'saving' | 'error';

const router = useRouter();
const user = ref<User | null>(getAuth().currentUser);

const phase = ref<CreatePhase>('topic');
const topicInput = ref('');
const difficulty = ref<DifficultyId | null>(null);
const createError = ref('');
const createIssues = ref<string[]>([]);

const topicIdeas = [
	'Fundamentos de JavaScript',
	'Complejidad algorítmica',
	'SQL y bases de datos',
	'Git y ramas',
	'APIs REST',
	'Vue 3: composables',
	'Programación orientada a objetos',
	'Docker y contenedores',
];

const DIFFICULTY_COLORS: Record<DifficultyId, string> = {
	facil: 'var(--mt-success)',
	media: 'var(--mt-warning)',
	dificil: 'var(--mt-danger)',
};

const difficultyColor = (id: DifficultyId) => DIFFICULTY_COLORS[id];

const trimmedTopic = computed(() => topicInput.value.trim());

const topicWarning = computed(() => {
	const topic = trimmedTopic.value;
	if (!topic) return '';
	if (topic.length < 3) return 'Escribe al menos 3 caracteres para describir el tema.';
	if (topic.length > 200) return 'El tema es muy largo; usa 200 caracteres como máximo.';
	return '';
});

const canGenerate = computed(
	() =>
		trimmedTopic.value.length >= 3 &&
		trimmedTopic.value.length <= 200 &&
		difficulty.value !== null
);

const statusText = computed(() =>
	phase.value === 'saving' ? 'Guardando en tu cuenta…' : 'Generando tu examen…'
);

const setPhase = (next: CreatePhase, message = '') => {
	phase.value = next;
	createError.value = message;
};

const selectDifficulty = (id: DifficultyId) => {
	difficulty.value = id;
};

const pickIdea = (idea: string) => {
	topicInput.value = idea;
};

const resetCreate = () => {
	createIssues.value = [];
	setPhase('topic');
};

const startCreation = async () => {
	const uid = user.value?.uid;
	const topic = trimmedTopic.value;
	const difficultyId = difficulty.value;
	if (!uid || !topic || !difficultyId || phase.value === 'generating' || phase.value === 'saving') {
		return;
	}
	if (topic.length < 3 || topic.length > 200) {
		return;
	}

	createIssues.value = [];
	setPhase('generating');

	try {
		const result = await requestExamGeneration(topic, difficultyId);

		const parsed = parseExamen(result.exam);
		if (!parsed.success) {
			setPhase('error', 'El servidor devolvió un examen que no pasó la validación. Intenta de nuevo.');
			return;
		}

		setPhase('saving');
		const examId = await saveExamen(uid, parsed.data, topic);
		router.replace({ name: 'examen-view', params: { examId } });
	} catch (e) {
		console.error(e);
		if (e instanceof ExamGenerationClientError) {
			if (e.code === 'MAX_REPAIR') {
				createIssues.value = e.issues ?? [];
				setPhase('error', 'No se pudo generar un examen válido. Intenta de nuevo.');
			} else {
				setPhase('error', e.message);
			}
		} else {
			setPhase('error', 'Ocurrió un error inesperado. Intenta de nuevo.');
		}
	}
};

let unsubAuth: (() => void) | null = null;

unsubAuth = onAuthStateChanged(getAuth(), (current) => {
	if (current?.uid !== user.value?.uid) {
		user.value = current as User | null;
	}
});

onBeforeUnmount(() => {
	unsubAuth?.();
});
</script>

<style scoped>
.page-shell {
	max-width: 720px;
	margin: 0 auto;
	padding: 12px 20px 48px;
}

.create-head {
	padding: 20px 0 22px;
}

.create-head__desc {
	margin: 12px 0 0;
	max-width: 52ch;
}

.panel {
	background: var(--mt-surface);
	border: 1px solid var(--mt-line);
	border-radius: var(--radius-card);
	padding: 18px;
	box-shadow: var(--shadow-soft);
}

.panel__input {
	--background: var(--mt-muted);
}

.panel__note {
	margin: 8px 2px 0;
	font-size: 12.5px;
	line-height: 1.5;
	color: var(--mt-warning);
}

.panel__label {
	margin: 18px 0 10px;
	font-size: 13px;
	font-weight: 600;
	letter-spacing: 0.06em;
	text-transform: uppercase;
	color: var(--mt-ink-3);
}

.difficulty-list {
	display: flex;
	flex-direction: column;
	gap: 8px;
}

.difficulty-option {
	--opt-color: var(--mt-accent);
	display: flex;
	align-items: center;
	gap: 12px;
	width: 100%;
	min-height: 58px;
	padding: 10px 14px;
	text-align: left;
	border: 1px solid var(--mt-line);
	background: var(--mt-surface);
	border-radius: 15px;
	font-family: var(--font-sans);
	cursor: pointer;
	transition: border-color 0.15s ease, background 0.15s ease;
}

@media (hover: hover) {
	.difficulty-option:hover {
		background: var(--mt-muted);
	}
}

.difficulty-option--selected {
	border-color: color-mix(in srgb, var(--opt-color) 50%, var(--mt-line));
	background: color-mix(in srgb, var(--opt-color) 6%, var(--mt-surface));
}

.difficulty-option__text {
	flex: 1;
	min-width: 0;
	display: flex;
	flex-direction: column;
	gap: 2px;
}

.difficulty-option__name {
	font-size: 15px;
	font-weight: 600;
	letter-spacing: -0.01em;
	color: var(--mt-ink);
}

.difficulty-option__desc {
	font-size: 13px;
	color: var(--mt-ink-2);
}

.difficulty-option__check {
	font-size: 20px;
	flex-shrink: 0;
	color: var(--opt-color);
	opacity: 0;
	transition: opacity 0.15s ease;
}

.difficulty-option--selected .difficulty-option__check {
	opacity: 1;
}

.panel__submit {
	margin-top: 14px;
	width: 100%;
}

.create-hints {
	margin-top: 28px;
}

.create-hints__label {
	margin: 0 0 12px;
	padding: 0 2px;
	font-size: 13px;
	font-weight: 600;
	letter-spacing: 0.06em;
	text-transform: uppercase;
	color: var(--mt-ink-3);
}

.create-hints__chips {
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
}

.chip-btn {
	min-height: 36px;
	padding: 0 14px;
	border: 1px solid var(--mt-line);
	border-radius: 999px;
	background: var(--mt-surface);
	color: var(--mt-ink-2);
	font-family: var(--font-sans);
	font-size: 13.5px;
	font-weight: 500;
	cursor: pointer;
	transition: border-color 0.15s ease, color 0.15s ease;
}

@media (hover: hover) {
	.chip-btn:hover {
		border-color: var(--mt-line-strong);
		color: var(--mt-ink);
	}
}

/* ---------- Estados ---------- */
.state-block {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 6px;
	text-align: center;
	padding: 48px 16px;
	background: var(--mt-surface);
	border: 1px solid var(--mt-line);
	border-radius: var(--radius-card);
}

.state-block__icon {
	width: 52px;
	height: 52px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 16px;
	background: var(--mt-muted);
	color: var(--mt-ink-3);
	margin-bottom: 8px;
}

.state-block__icon .app-icon {
	font-size: 24px;
}

.state-block__icon--danger {
	background: color-mix(in srgb, var(--mt-danger) 12%, transparent);
	color: var(--mt-danger);
}

.state-block__title {
	margin: 4px 0 0;
	font-size: 16px;
	font-weight: 600;
	letter-spacing: -0.01em;
	color: var(--mt-ink);
}

.state-block__hint {
	margin: 6px 0 0;
	max-width: 40ch;
	font-size: 13.5px;
	line-height: 1.55;
	color: var(--mt-ink-2);
}

.state-block__actions {
	display: flex;
	align-items: center;
	gap: 8px;
	margin-top: 8px;
}

.state-block__cta {
	margin-top: 16px;
	min-height: 44px;
}

.state-block__actions .state-block__cta {
	margin-top: 0;
}

.generating {
	gap: 12px;
}

.generating__orb {
	width: 56px;
	height: 56px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 17px;
	background: var(--mt-accent-soft);
	color: var(--mt-accent);
	margin-bottom: 8px;
}

.generating__orb .app-spinner {
	width: 26px;
	height: 26px;
	color: var(--mt-accent);
}
</style>
