<template>
	<ion-page>
		<ion-header :translucent="true" class="app-header">
			<ion-toolbar>
				<ion-buttons slot="start">
					<ion-menu-button></ion-menu-button>
				</ion-buttons>
				<ion-title>Chat</ion-title>
			</ion-toolbar>
		</ion-header>

		<ion-content>
			<ion-refresher slot="fixed" @ionRefresh="onRefresh">
				<ion-refresher-content
					pulling-text="Suelta para actualizar"
					refreshing-text="Actualizando…"
				></ion-refresher-content>
			</ion-refresher>
			<div class="page-shell">
				<header class="page-head">
					<p class="mt-kicker">Asistente</p>
					<h1 class="mt-h-display">Chats</h1>
					<p class="mt-body page-head__desc">
						Tus conversaciones se guardan en tu cuenta. Retoma donde lo dejaste.
					</p>
				</header>

				<!-- Sin sesión -->
				<div v-if="!user" class="state-block">
					<div class="state-block__icon">
						<ion-icon :icon="lockClosedOutline"></ion-icon>
					</div>
					<p class="state-block__title">Inicia sesión para guardar tus chats</p>
					<p class="state-block__hint">
						Tus conversaciones con el asistente se guardan en tu cuenta.
					</p>
					<ion-button class="state-block__cta" router-link="/login">Iniciar sesión</ion-button>
				</div>

				<template v-else>
					<button type="button" class="new-chat-btn" @click="startNewChat">
						<span class="new-chat-btn__icon">
							<ion-icon :icon="chatbubbleOutline"></ion-icon>
						</span>
						<span class="new-chat-btn__text">
							<strong>Nueva conversación</strong>
							<small>Pregunta o crea una sección con el asistente</small>
						</span>
						<ion-icon class="new-chat-btn__arrow" :icon="chevronForward"></ion-icon>
					</button>

					<!-- Cargando -->
					<div v-if="loading" class="loading-row">
						<ion-spinner name="crescent" class="spinner-primary"></ion-spinner>
						<p class="loading-row__text">Cargando conversaciones…</p>
					</div>

					<!-- Error -->
					<div v-else-if="error" class="state-block state-block--slim">
						<p class="state-block__title">No se pudieron cargar tus chats</p>
						<p class="state-block__hint">{{ error }}</p>
						<ion-button class="state-block__cta" @click="loadChats">
							<ion-icon slot="start" :icon="refresh"></ion-icon>
							Reintentar
						</ion-button>
					</div>

					<!-- Sin chats -->
					<div v-else-if="chats.length === 0" class="empty-chat">
						<div class="empty-chat__orb">
							<ion-icon :icon="sparklesOutline"></ion-icon>
						</div>
						<p class="empty-chat__title">Aún no tienes conversaciones</p>
						<p class="empty-chat__hint">
							Empieza una y el historial se guardará automáticamente en tu cuenta.
						</p>
					</div>

					<!-- Lista -->
					<div v-else class="chat-list-area">
						<p class="section-label">{{ chats.length }} conversación{{ chats.length === 1 ? '' : 'es' }}</p>
						<div class="group-list">
							<button
								v-for="chat in chats"
								:key="chat.id"
								type="button"
								class="chat-row"
								@click="openChat(chat.id)"
							>
								<div class="chat-row__main">
									<p class="chat-row__title">{{ chat.title }}</p>
									<p class="chat-row__preview">{{ lastPreview(chat) }}</p>
								</div>
								<div class="chat-row__meta">
									<span class="chat-row__date">{{ formatDate(chat.updatedAt) }}</span>
									<button
										type="button"
										class="chat-row__delete"
										:aria-label="`Eliminar ${chat.title}`"
										@click.stop="removeChat(chat)"
									>
										<ion-icon :icon="trashOutline"></ion-icon>
									</button>
								</div>
							</button>
						</div>
					</div>
				</template>
			</div>
		</ion-content>
	</ion-page>
</template>

<script setup lang="ts">
import {
	IonButton,
	IonButtons,
	IonContent,
	IonHeader,
	IonIcon,
	IonMenuButton,
	IonPage,
	IonRefresher,
	IonRefresherContent,
	IonSpinner,
	IonTitle,
	IonToolbar,
} from '@ionic/vue';
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import {
	chatbubbleOutline,
	chevronForward,
	lockClosedOutline,
	refresh,
	sparklesOutline,
	trashOutline,
} from 'ionicons/icons';
import { getAuth, onAuthStateChanged, type User } from 'firebase/auth';
import { onIonViewWillEnter } from '@ionic/vue';
import { deleteChat, subscribeChats, type StoredChat } from '../services/aiChats';

const router = useRouter();
const user = ref<User | null>(getAuth().currentUser);
const chats = ref<StoredChat[]>([]);
const loading = ref(false);
const error = ref('');

let unsubChats: (() => void) | null = null;

const startNewChat = () => {
	router.push({ name: 'aiChat-thread', params: { chatId: 'nuevo' } });
};

const openChat = (id: string) => {
	router.push({ name: 'aiChat-thread', params: { chatId: id } });
};

const lastPreview = (chat: StoredChat) => {
	if (chat.messages.length === 0) return 'Conversación vacía';
	const last = chat.messages[chat.messages.length - 1];
	const content = (last?.content ?? '').replace(/\s+/g, ' ').replace(/\*\*/g, '').trim();
	return content.length > 72 ? `${content.slice(0, 72).trimEnd()}…` : content || 'Conversación vacía';
};

const formatDate = (ts: unknown) => {
	if (ts && typeof ts === 'object' && 'toDate' in ts && typeof ts.toDate === 'function') {
		try {
			const date = ts.toDate() as Date;
			const now = new Date();
			const sameDay = date.toDateString() === now.toDateString();
			return sameDay
				? date.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' })
				: date.toLocaleDateString('es-MX', { day: 'numeric', month: 'short' });
		} catch {
			return '';
		}
	}
	return '';
};

const loadChats = () => {
	const uid = user.value?.uid;
	if (!uid) return;

	if (unsubChats) {
		unsubChats();
		unsubChats = null;
	}

	loading.value = true;
	error.value = '';
	unsubChats = subscribeChats(
		uid,
		(items) => {
			chats.value = items;
			loading.value = false;
		},
		(message) => {
			error.value = message;
			loading.value = false;
		}
	);
};

const removeChat = async (chat: StoredChat) => {
	if (!user.value) return;
	const confirmed = window.confirm(`¿Eliminar "${chat.title}"?`);
	if (!confirmed) return;

	try {
		await deleteChat(user.value.uid, chat.id);
	} catch (e) {
		console.error(e);
		error.value = 'No se pudo eliminar la conversación. Intenta de nuevo.';
	}
};

const onRefresh = async (e: CustomEvent) => {
	loadChats();
	setTimeout(() => {
		(e.target as HTMLIonRefresherElement).complete();
	}, 500);
};

watch(
	() => user.value,
	(u) => {
		if (u) {
			loadChats();
		} else {
			if (unsubChats) {
				unsubChats();
				unsubChats = null;
			}
			chats.value = [];
		}
	}
);

onMounted(() => {
	if (user.value) {
		loadChats();
	}
});

onIonViewWillEnter(() => {
	if (user.value) {
		loadChats();
	}
});

let unsubAuth: (() => void) | null = null;

unsubAuth = onAuthStateChanged(getAuth(), (current) => {
	if (current?.uid !== user.value?.uid) {
		user.value = current as User | null;
	}
});

onBeforeUnmount(() => {
	unsubAuth?.();
	unsubChats?.();
});
</script>

<style scoped>
.page-shell {
	max-width: 720px;
	margin: 0 auto;
	padding: 12px 20px 48px;
}

.page-head {
	padding: 20px 0 24px;
}

.page-head__desc {
	margin: 10px 0 0;
	max-width: 48ch;
}

.section-label {
	margin: 0 0 12px;
	padding: 0 2px;
	font-size: 13px;
	font-weight: 600;
	letter-spacing: 0.06em;
	text-transform: uppercase;
	color: var(--mt-ink-3);
}

/* ---------- Nueva conversación ---------- */
.new-chat-btn {
	display: flex;
	align-items: center;
	gap: 14px;
	width: 100%;
	text-align: left;
	padding: 16px;
	border: 1px solid var(--mt-line);
	border-radius: var(--radius-card);
	background: var(--mt-surface);
	box-shadow: var(--shadow-soft);
	cursor: pointer;
	font-family: var(--font-sans);
	margin-bottom: 28px;
	transition: transform 0.12s ease, border-color 0.15s ease;
}

@media (hover: hover) {
	.new-chat-btn:hover {
		border-color: var(--mt-line-strong);
		transform: translateY(-1px);
	}
}

.new-chat-btn__icon {
	width: 44px;
	height: 44px;
	flex-shrink: 0;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border-radius: 13px;
	background: var(--mt-accent-soft);
	color: var(--mt-accent);
}

.new-chat-btn__icon ion-icon {
	font-size: 21px;
}

.new-chat-btn__text {
	flex: 1;
	min-width: 0;
	display: flex;
	flex-direction: column;
	gap: 3px;
}

.new-chat-btn__text strong {
	font-size: 16px;
	font-weight: 600;
	letter-spacing: -0.012em;
	color: var(--mt-ink);
}

.new-chat-btn__text small {
	font-size: 13px;
	color: var(--mt-ink-2);
}

.new-chat-btn__arrow {
	font-size: 15px;
	color: var(--mt-ink-3);
	opacity: 0.6;
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

.state-block--slim {
	padding: 32px 16px;
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

.state-block__icon ion-icon {
	font-size: 24px;
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
	max-width: 36ch;
	font-size: 13.5px;
	line-height: 1.55;
	color: var(--mt-ink-2);
}

.state-block__cta {
	margin-top: 16px;
	min-height: 44px;
}

.spinner-primary {
	--color: var(--mt-accent);
	width: 24px;
	height: 24px;
	margin-bottom: 8px;
}

.loading-row {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 12px;
	padding: 40px 16px;
}

.loading-row .spinner-primary {
	margin-bottom: 0;
}

.loading-row__text {
	margin: 0;
	font-size: 13.5px;
	color: var(--mt-ink-3);
}

.empty-chat {
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	gap: 6px;
	padding: 36px 16px;
	border: 1px dashed var(--mt-line-strong);
	border-radius: var(--radius-card);
}

.empty-chat__orb {
	width: 48px;
	height: 48px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 15px;
	background: var(--mt-muted);
	color: var(--mt-ink-3);
	margin-bottom: 8px;
}

.empty-chat__orb ion-icon {
	font-size: 22px;
}

.empty-chat__title {
	margin: 4px 0 0;
	font-size: 15px;
	font-weight: 600;
	color: var(--mt-ink);
}

.empty-chat__hint {
	margin: 6px 0 0;
	max-width: 36ch;
	font-size: 13.5px;
	line-height: 1.55;
	color: var(--mt-ink-2);
}

/* ---------- Lista ---------- */
.chat-list-area {
	padding-top: 4px;
}

.group-list {
	background: var(--mt-surface);
	border: 1px solid var(--mt-line);
	border-radius: var(--radius-card);
	overflow: hidden;
}

.chat-row {
	display: flex;
	align-items: center;
	gap: 14px;
	width: 100%;
	text-align: left;
	padding: 16px;
	border: none;
	background: transparent;
	cursor: pointer;
	font-family: var(--font-sans);
	transition: background 0.15s ease;
}

.chat-row + .chat-row {
	border-top: 1px solid var(--mt-line);
}

.chat-row:active {
	background: var(--mt-muted);
}

.chat-row__main {
	flex: 1;
	min-width: 0;
}

.chat-row__title {
	margin: 0;
	font-size: 15.5px;
	font-weight: 600;
	letter-spacing: -0.012em;
	color: var(--mt-ink);
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.chat-row__preview {
	margin: 4px 0 0;
	font-size: 13px;
	line-height: 1.45;
	color: var(--mt-ink-2);
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
}

.chat-row__meta {
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	gap: 8px;
	flex-shrink: 0;
}

.chat-row__date {
	font-size: 11.5px;
	color: var(--mt-ink-3);
	white-space: nowrap;
}

.chat-row__delete {
	width: 32px;
	height: 32px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border: none;
	border-radius: 10px;
	background: transparent;
	color: var(--mt-ink-3);
	cursor: pointer;
	transition: background 0.15s ease, color 0.15s ease;
}

.chat-row__delete ion-icon {
	font-size: 17px;
}

@media (hover: hover) {
	.chat-row__delete:hover {
		background: color-mix(in srgb, var(--mt-danger) 12%, transparent);
		color: var(--mt-danger);
	}
}
</style>
