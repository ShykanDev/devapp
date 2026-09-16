<template>
	<AppPage>
		<AppHeader
			title="Chat"
			:back="isNewChat ? false : '/folder/chat'"
			:menu="isNewChat"
		>
			<template v-if="isNewChat && hasMessages" #end>
				<AppButton
					variant="clear"
					iconOnly
					class="header-saved-btn"
					aria-label="Ver mis chats"
					@click="goToList"
				>
					<AppIcon :icon="listOutline" :size="20" />
				</AppButton>
			</template>
		</AppHeader>

		<main ref="contentEl" class="app-content chat-content">
			<div class="chat-scroll">
				<div class="chat-col">
					<!-- Sin sesión -->
					<div v-if="!user" class="chat-empty">
						<div class="chat-empty__orb">
							<AppIcon :icon="lockClosedOutline" />
						</div>
						<h2 class="chat-empty__title">Inicia sesión para guardar tus chats</h2>
						<p class="chat-empty__text">
							Si entras sin cuenta, la conversación no se guardará al salir.
						</p>
						<AppButton class="chat-shortcut" to="/login">Iniciar sesión</AppButton>
					</div>

					<!-- Cargando hilo -->
					<div v-else-if="loadingThread" class="chat-loading">
						<AppSpinner class="spinner-primary" />
						<p class="chat-loading__text">Cargando conversación…</p>
					</div>

					<!-- Hilo no encontrado -->
					<div v-else-if="notFound" class="chat-empty">
						<div class="chat-empty__orb">
							<AppIcon :icon="documentTextOutline" />
						</div>
						<h2 class="chat-empty__title">Conversación no encontrada</h2>
						<p class="chat-empty__text">Puede que ya haya sido eliminada.</p>
						<AppButton class="chat-shortcut" to="/folder/chat">Ver mis chats</AppButton>
					</div>

					<!-- Estado vacío (chat nuevo) -->
					<div v-else-if="chatHistory.length === 0 && !isThinking" class="chat-empty">
						<div class="chat-empty__orb">
							<AppIcon :icon="sparklesOutline" />
						</div>
						<h2 class="chat-empty__title">¿Sobre qué tema quieres aprender?</h2>
						<p class="chat-empty__text">
							Tus conversaciones se guardan automáticamente. Si le pides
							<strong>«crear una sección sobre…»</strong>, la guardará en
							Mis secciones como contenido educativo con flashcards y examen.
						</p>

						<div class="chat-suggest">
							<button
								type="button"
								class="chat-suggest__item"
								v-for="s in suggestions"
								:key="s"
								@click="sendSuggestion(s)"
							>
								<span class="chat-suggest__dot"></span>
								<span>{{ s }}</span>
							</button>
						</div>

						<AppButton variant="clear" class="chat-shortcut" @click="goToSections">
							<template #start><AppIcon :icon="libraryOutline" /></template>
							Ver mis secciones guardadas
						</AppButton>
					</div>

					<!-- Conversación -->
					<div v-else class="chat-thread" ref="threadEl">
						<article
							v-for="(m, i) in chatHistory"
							:key="i"
							class="chat-row"
							:class="m.role === 'user' ? 'chat-row--user' : 'chat-row--assistant'"
						>
							<div
								v-if="m.role === 'assistant'"
								class="chat-avatar"
								aria-hidden="true"
							>
								<AppIcon :icon="sparklesOutline" />
							</div>
							<div class="chat-bubble" :class="m.role === 'user' ? 'chat-bubble--user' : 'chat-bubble--assistant'">
								<span v-if="m.role === 'assistant' && !m.content && isThinking" class="chat-typing">
									<i></i><i></i><i></i>
								</span>
								<span v-else-if="m.role === 'assistant'" class="chat-rich" v-html="renderMessage(m.content)"></span>
								<span v-else>{{ m.content }}</span>
							</div>
						</article>
					</div>
				</div>
			</div>
		</main>

		<footer class="chat-footer" v-if="user && !loadingThread && !notFound">
			<div class="composer-bar">
				<div class="composer-field">
					<AppInput
						v-model="userRequest"
						class="composer-input"
						type="text"
						placeholder="Escribe tu consulta…"
						@keyup.enter="sendMessage"
					/>
					<button
						type="button"
						class="composer-send"
						:disabled="!userRequest.trim() || isThinking"
						@click="sendMessage"
						aria-label="Enviar mensaje"
					>
						<AppIcon :icon="send" />
					</button>
				</div>
				<div class="composer-status">
					<p v-if="savedState" class="composer-saved">
						<AppIcon :icon="checkmarkCircleOutline" />
						{{ savedState }}
					</p>
					<p v-if="saveError" class="composer-save-error">
						<AppIcon :icon="warningOutline" />
						{{ saveError }}
					</p>
				</div>
			</div>
		</footer>
	</AppPage>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue';
import { onBeforeRouteLeave, useRoute, useRouter } from 'vue-router';
import {
	checkmarkCircleOutline,
	documentTextOutline,
	libraryOutline,
	listOutline,
	lockClosedOutline,
	send,
	sparklesOutline,
	warningOutline,
} from 'ionicons/icons';
import { getAuth, onAuthStateChanged, type User } from 'firebase/auth';
import { streamChat } from '../services/streamChat';
import { parseMarkdown } from '../lib/markdown';
import {
	createChat,
	getChat,
	messageListToParams,
	saveChat,
} from '../services/aiChats';
import AppPage from '../components/ui/AppPage.vue';
import AppHeader from '../components/ui/AppHeader.vue';
import AppButton from '../components/ui/AppButton.vue';
import AppInput from '../components/ui/AppInput.vue';
import AppIcon from '../components/ui/AppIcon.vue';
import AppSpinner from '../components/ui/AppSpinner.vue';

const route = useRoute();
const router = useRouter();
const 	userRequest = ref('');
const isThinking = ref(false);
const streamStarted = ref(false);
const chatHistory = ref<{ role: string; content: string }[]>([]);

const user = ref<User | null>(getAuth().currentUser);
const contentEl = ref<HTMLElement | null>(null);
const threadEl = ref<HTMLElement | null>(null);

const loadingThread = ref(false);
const notFound = ref(false);
const loadedChatId = ref<string | null>(null);
const isNewChat = computed(() => !route.params.chatId || route.params.chatId === 'nuevo');
const hasMessages = computed(() => chatHistory.value.length > 0);
const savedState = ref('');
const saveError = ref('');

let persistTimer: ReturnType<typeof setTimeout> | null = null;
let suppressNextLoad = false;
let saveRunning = false;
let saveRequested = false;
let saveUpdateUrl = false;
let saveWaiters: Array<(value: boolean) => void> = [];

const suggestionPool = [
	'¿Qué es una variable en programación?',
	'Explícame las promesas en JavaScript',
	'¿Qué es Big-O?',
	'Diferencia entre SQL y NoSQL',
	'Cómo funciona Git rebase',
	'¿Qué es una API REST?',
	'¿Qué es la programación orientada a objetos?',
	'Explícame async y await en JavaScript',
	'¿Qué es un closure en JavaScript?',
	'Diferencia entre let, const y var',
	'¿Cómo funciona el event loop de JavaScript?',
	'¿Qué es la recursión?',
	'¿Qué es un arreglo y un objeto en JavaScript?',
	'¿Qué es una función pura?',
	'Explícame el DOM',
	'Diferencia entre == y ===',
	'¿Qué es TypeScript?',
	'¿Cómo funciona un hook en React?',
	'¿Qué es el estado en una aplicación?',
	'Diferencia entre componente y elemento',
	'¿Qué es CSS Flexbox?',
	'¿Cómo funciona CSS Grid?',
	'¿Qué es el modelo de caja en CSS?',
	'Diferencia entre rem, em y px',
	'¿Qué es la especificidad en CSS?',
	'¿Cómo funciona una media query?',
	'¿Qué es un endpoint?',
	'Diferencia entre GET y POST',
	'¿Qué es un status code HTTP?',
	'¿Cómo funciona la autenticación con tokens?',
	'¿Qué es CORS?',
	'Diferencia entre síncrono y asíncrono',
	'¿Qué es una promesa y cómo se encadena?',
	'¿Cómo funciona la búsqueda binaria?',
	'¿Qué es una lista enlazada?',
	'¿Qué es una pila y una cola?',
	'¿Qué es una tabla hash?',
	'Diferencia entre ordenamiento burbuja y quicksort',
	'¿Qué es la programación funcional?',
	'¿Qué es un callback?',
	'¿Cómo funciona el hoisting en JavaScript?',
	'¿Qué es un error de tipo en JavaScript?',
	'¿Cómo depurar código en el navegador?',
	'¿Qué es una prueba unitaria?',
	'Diferencia entre git merge y git rebase',
	'¿Qué es un pull request?',
	'¿Cómo funciona el control de versiones con Git?',
	'¿Qué es una base de datos relacional?',
	'Crea una sección sobre React',
	'Crea una sección sobre Docker',
	'Crea una sección sobre complejidad algorítmica',
	'Crea una sección sobre consultas SQL',
];

const suggestions = ref<string[]>([]);

const pickSuggestions = () => {
	const copy = [...suggestionPool];
	for (let i = copy.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[copy[i], copy[j]] = [copy[j], copy[i]];
	}
	suggestions.value = copy.slice(0, 3);
};

const vibrate = () => {
	navigator.vibrate?.(10);
};

const renderMessage = (content: string) => parseMarkdown(content);

const scrollContentToBottom = async (smooth = true) => {
	await nextTick();
	const el = contentEl.value;
	if (!el) return;
	if (smooth) {
		el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
	} else {
		el.scrollTop = el.scrollHeight;
	}
};

// ---------- Persistencia ----------

const doPersist = async (opts: { updateUrl?: boolean } = {}): Promise<boolean> => {
	const uid = user.value?.uid;
	if (!uid) return false;
	if (chatHistory.value.length === 0) return false;

	saveError.value = '';
	try {
		let chatId = loadedChatId.value;
		if (!chatId) {
			chatId = await createChat(uid, chatHistory.value);
			loadedChatId.value = chatId;
			if (opts.updateUrl) {
				await router.replace({ name: 'aiChat-thread', params: { chatId } });
				suppressNextLoad = true;
			}
		} else {
			await saveChat(uid, chatId, chatHistory.value);
		}
		savedState.value = 'Guardado';
		return true;
	} catch (e) {
		console.error('No se pudo guardar el chat', e);
		saveError.value = 'No se pudo guardar en la nube. Revisa tu conexión.';
		return false;
	}
};

const drainPersist = async () => {
	if (saveRunning) return;
	saveRunning = true;
	try {
		while (saveRequested) {
			saveRequested = false;
			const updateUrl = saveUpdateUrl;
			saveUpdateUrl = false;
			const waiters = saveWaiters;
			saveWaiters = [];
			const result = await doPersist({ updateUrl });
			waiters.forEach((resolve) => resolve(result));
		}
	} finally {
		saveRunning = false;
	}
};

const persistNow = (opts: { updateUrl?: boolean } = {}): Promise<boolean> => {
	return new Promise((resolve) => {
		saveRequested = true;
		saveUpdateUrl = saveUpdateUrl || Boolean(opts.updateUrl);
		saveWaiters.push(resolve);
		void drainPersist();
	});
};

const schedulePersist = () => {
	if (persistTimer) clearTimeout(persistTimer);
	persistTimer = setTimeout(() => {
		persistTimer = null;
		persistNow({ updateUrl: true });
	}, 800);
};

const flushPersist = () => {
	if (persistTimer) {
		clearTimeout(persistTimer);
		persistTimer = null;
	}
	return persistNow();
};

const resetSaved = () => {
	savedState.value = '';
	saveError.value = '';
};

// ---------- Carga del hilo ----------

const loadThread = async () => {
	const uid = user.value?.uid;
	const chatId = typeof route.params.chatId === 'string' ? route.params.chatId : '';

	loadingThread.value = true;
	notFound.value = false;
	loadedChatId.value = null;
	chatHistory.value = [];

	if (!uid) {
		loadingThread.value = false;
		return;
	}

	if (!chatId || chatId === 'nuevo') {
		loadingThread.value = false;
		pickSuggestions();
		return;
	}

	try {
		const stored = await getChat(uid, chatId);
		if (!stored) {
			notFound.value = true;
			return;
		}
		loadedChatId.value = chatId;
		chatHistory.value = messageListToParams(stored.messages);
	} catch (e) {
		console.error(e);
		notFound.value = true;
	} finally {
		loadingThread.value = false;
	}
};

const sendSuggestion = (text: string) => {
	userRequest.value = text;
	sendMessage();
};

const goToList = () => {
	router.push('/folder/chat');
};

const goToSections = () => {
	router.push('/mis-secciones');
};

const routerCleanQuery = async () => {
	try {
		await router.replace({ query: {} });
	} catch (e) {
		console.log(e);
	}
};

const handleArticleQuestion = () => {
	const pregunta: unknown = route.query.pregunta;
	if (typeof pregunta === 'string' && pregunta.trim()) {
		userRequest.value = pregunta;
		sendMessage();
		routerCleanQuery();
	}
};

const sendMessage = async () => {
	const text = userRequest.value.trim();
	if (!text || isThinking.value) return;

	chatHistory.value.push({ role: 'user', content: text });
	userRequest.value = '';
	resetSaved();

	try {
		isThinking.value = true;
		streamStarted.value = false;

		chatHistory.value.push({ role: 'assistant', content: '' });
		const lastIndex = chatHistory.value.length - 1;

		vibrate();
		scrollContentToBottom();

		await streamChat(chatHistory.value, {
			onDelta: (delta) => {
				if (!streamStarted.value) {
					streamStarted.value = true;
					vibrate();
				}
				chatHistory.value[lastIndex].content += delta;
				scrollContentToBottom(false);
			},
			onCreatePage: (topic) => {
				persistNow();
				router.push({
					name: 'dynamic-create',
					query: { topic },
				});
			},
			onError: (message) => {
				console.error(message);
				if (!chatHistory.value[lastIndex].content) {
					chatHistory.value[lastIndex].content =
						'No se pudo conectar con el asistente. Intenta de nuevo.';
				}
			},
			onDone: () => {
				if (!chatHistory.value[lastIndex].content) {
					chatHistory.value[lastIndex].content =
						'Disculpa, no obtuve respuesta del asistente. Intenta de nuevo.';
				}
				vibrate();
				scrollContentToBottom();
			},
		});
	} catch (error) {
		console.log(error);
	} finally {
		isThinking.value = false;
		streamStarted.value = false;
		// Guarda completo el intercambio terminado (crea el doc en el primer mensaje)
		schedulePersist();
	}
};

// Guarda al cambiar de conversación o salir de la pantalla
const leavePage = async () => {
	if (chatHistory.value.length === 0) return;

	// Si el asistente aún responde, guarda lo que haya (sin el mensaje vacío en curso)
	if (isThinking.value) {
		const last = chatHistory.value[chatHistory.value.length - 1];
		if (last && last.role === 'assistant' && !last.content) {
			chatHistory.value = chatHistory.value.slice(0, -1);
		}
	}
	await flushPersist();
};

watch(
	() => chatHistory.value.length,
	() => {
		if (chatHistory.value.length === 0 && !isThinking.value) {
			pickSuggestions();
		}
		if (!isThinking.value && chatHistory.value.length > 0) {
			schedulePersist();
		}
		scrollContentToBottom();
	}
);

watch(
	() => user.value,
	(u) => {
		if (u) {
			loadThread();
		} else {
			chatHistory.value = [];
			loadedChatId.value = null;
		}
	}
);

watch(
	() => route.params.chatId,
	() => {
		if (suppressNextLoad) {
			suppressNextLoad = false;
			return;
		}
		loadThread();
	},
	{ immediate: true }
);

watch(
	() => route.query.pregunta,
	() => {
		handleArticleQuestion();
	},
	{ immediate: true }
);

onBeforeRouteLeave(async () => {
	await leavePage();
});

let unsubAuth: (() => void) | null = null;

unsubAuth = onAuthStateChanged(getAuth(), (current) => {
	if (current?.uid !== user.value?.uid) {
		user.value = current as User | null;
	}
});

onBeforeUnmount(() => {
	if (persistTimer) clearTimeout(persistTimer);
	unsubAuth?.();
	window.removeEventListener('pagehide', handlePageHide);
});

const handlePageHide = () => {
	if (persistTimer) clearTimeout(persistTimer);
	if (chatHistory.value.length === 0) return;
	if (isThinking.value) {
		const last = chatHistory.value[chatHistory.value.length - 1];
		if (last && last.role === 'assistant' && !last.content) {
			chatHistory.value = chatHistory.value.slice(0, -1);
		}
	}
	if (chatHistory.value.length > 0) {
		persistNow();
	}
};

window.addEventListener('pagehide', handlePageHide);
</script>

<style scoped>
.chat-content {
	background: var(--mt-canvas);
}

.chat-scroll {
	display: flex;
	justify-content: center;
	min-height: 100%;
}

.chat-col {
	width: 100%;
	max-width: 680px;
	min-height: 100%;
	display: flex;
	flex-direction: column;
	padding: 24px 20px 16px;
}

/* ---------- Carga ---------- */
.header-saved-btn {
	min-height: 36px;
}

.chat-loading {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 12px;
	margin: auto;
	padding: 40px 16px;
}

.spinner-primary {
	width: 24px;
	height: 24px;
}

.chat-loading__text {
	margin: 0;
	font-size: 13.5px;
	color: var(--mt-ink-3);
}

/* ---------- Vacío ---------- */
.chat-empty {
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	margin: auto;
	padding: 32px 4px;
}

.chat-empty__orb {
	width: 64px;
	height: 64px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 21px;
	background: var(--mt-accent-soft);
	color: var(--mt-accent);
	margin-bottom: 26px;
}

.chat-empty__orb .app-icon {
	font-size: 30px;
}

.chat-empty__title {
	margin: 0;
	font-size: 23px;
	font-weight: 700;
	letter-spacing: -0.022em;
	line-height: 1.2;
	color: var(--mt-ink);
}

.chat-empty__text {
	margin: 14px 0 0;
	max-width: 44ch;
	font-size: 15px;
	line-height: 1.6;
	color: var(--mt-ink-2);
}

.chat-empty__text strong {
	color: var(--mt-ink);
	font-weight: 600;
}

.chat-suggest {
	display: flex;
	flex-direction: column;
	align-items: stretch;
	gap: 8px;
	width: 100%;
	max-width: 420px;
	margin: 28px auto 0;
}

.chat-suggest__item {
	display: flex;
	align-items: center;
	gap: 12px;
	padding: 14px 18px;
	border-radius: 16px;
	background: var(--mt-surface);
	border: 1px solid var(--mt-line);
	box-shadow: var(--shadow-soft);
	font-size: 14.5px;
	line-height: 1.45;
	text-align: left;
	color: var(--mt-ink);
	font-family: var(--font-sans);
	cursor: pointer;
	transition: transform 0.12s ease, border-color 0.15s ease;
}

.chat-suggest__item:hover {
	border-color: var(--mt-line-strong);
}

.chat-suggest__dot {
	width: 7px;
	height: 7px;
	flex-shrink: 0;
	border-radius: 999px;
	background: var(--mt-accent);
}

.chat-shortcut {
	margin-top: 8px;
}

/* ---------- Conversación ---------- */
.chat-thread {
	display: flex;
	flex-direction: column;
	padding: 8px 0 24px;
}

.chat-row {
	display: flex;
	align-items: flex-end;
	gap: 10px;
	margin-bottom: 20px;
}

.chat-row--user {
	justify-content: flex-end;
}

.chat-row--assistant {
	align-items: flex-start;
}

.chat-avatar {
	width: 30px;
	height: 30px;
	flex-shrink: 0;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border-radius: 9px;
	background: var(--mt-accent-soft);
	color: var(--mt-accent);
	margin-top: 4px;
}

.chat-avatar .app-icon {
	font-size: 15px;
}

.chat-bubble {
	max-width: 82%;
	padding: 12px 16px;
	font-size: 15.5px;
	line-height: 1.58;
	letter-spacing: -0.005em;
	white-space: pre-wrap;
	word-break: break-word;
}

.chat-bubble--assistant {
	background: var(--mt-surface);
	border: 1px solid var(--mt-line);
	border-radius: 20px 20px 20px 7px;
	color: var(--mt-ink);
	box-shadow: var(--shadow-soft);
}

.chat-bubble--user {
	background: var(--mt-accent);
	color: #fff;
	border-radius: 20px 20px 7px 20px;
	font-weight: 500;
}

.chat-rich {
	display: block;
}

.chat-rich :deep(strong) {
	font-weight: 700;
	color: var(--mt-ink);
}

.chat-rich :deep(p) {
	margin: 0;
}

.chat-rich :deep(p) + :deep(p) {
	margin-top: 8px;
}

.chat-rich :deep(ul),
.chat-rich :deep(ol) {
	margin: 8px 0 0;
	padding-left: 20px;
}

.chat-rich :deep(li) {
	margin: 4px 0;
}

.chat-rich :deep(h1),
.chat-rich :deep(h2),
.chat-rich :deep(h3),
.chat-rich :deep(h4) {
	margin: 10px 0 4px;
	font-size: 15px;
	font-weight: 700;
	line-height: 1.3;
	color: var(--mt-ink);
}

.chat-rich :deep(h1:first-child),
.chat-rich :deep(h2:first-child),
.chat-rich :deep(p:first-child) {
	margin-top: 0;
}

.chat-typing {
	display: inline-flex;
	align-items: center;
	gap: 5px;
	height: 18px;
}

.chat-typing i {
	width: 5px;
	height: 5px;
	border-radius: 999px;
	background: var(--mt-ink-3);
	opacity: 0.5;
	animation: typing-dot 1.2s ease-in-out infinite;
}

.chat-typing i:nth-child(2) {
	animation-delay: 0.15s;
}

.chat-typing i:nth-child(3) {
	animation-delay: 0.3s;
}

@keyframes typing-dot {
	0%, 60%, 100% {
		opacity: 0.35;
		transform: translateY(0);
	}
	30% {
		opacity: 1;
		transform: translateY(-2px);
	}
}

/* ---------- Composer ---------- */
.chat-footer {
	background: var(--mt-canvas);
}

.composer-bar {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 10px 20px calc(env(safe-area-inset-bottom, 0px) + 14px);
	background: var(--mt-canvas);
	border-top: 1px solid var(--mt-line);
}

.composer-field {
	display: flex;
	align-items: center;
	gap: 6px;
	width: 100%;
	max-width: 680px;
	background: var(--mt-surface);
	border: 1px solid var(--mt-line);
	border-radius: 22px;
	padding: 4px 4px 4px 8px;
	box-shadow: var(--shadow-soft);
}

.composer-input {
	min-height: 44px;
	flex: 1;
	background: transparent;
	border: none;
	padding: 4px 8px;
}

.composer-input:focus {
	border-color: transparent;
	box-shadow: none;
}

.composer-send {
	width: 40px;
	height: 40px;
	flex-shrink: 0;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border: none;
	border-radius: 14px;
	background: var(--mt-accent);
	color: #fff;
	cursor: pointer;
	transition: opacity 0.15s ease, transform 0.1s ease;
}

.composer-send .app-icon {
	font-size: 18px;
}

.composer-send:disabled {
	opacity: 0.45;
	cursor: default;
}

.composer-saved {
	display: flex;
	align-items: center;
	gap: 5px;
	margin: 6px 0 0;
	font-size: 11.5px;
	color: var(--mt-ink-3);
}

.composer-saved .app-icon {
	font-size: 13px;
	color: var(--mt-success);
}

.composer-save-error {
	display: flex;
	align-items: center;
	gap: 5px;
	margin: 6px 0 0;
	font-size: 11.5px;
	color: var(--mt-danger);
}

.composer-save-error .app-icon {
	font-size: 13px;
	flex-shrink: 0;
}

@media (min-width: 768px) {
	.composer-bar {
		padding-left: 24px;
		padding-right: 24px;
	}
}

@media (prefers-reduced-motion: reduce) {
	.chat-typing i {
		animation: none;
		opacity: 0.6;
	}
}
</style>
