<template>
	<ion-page>
		<ion-header :translucent="true" class="app-header">
			<ion-toolbar>
				<ion-buttons slot="start">
					<ion-menu-button></ion-menu-button>
				</ion-buttons>
				<ion-title>{{ pageTitle }}</ion-title>
			</ion-toolbar>
		</ion-header>

		<ion-content>
			<div class="page-shell">
				<!-- ============ ASISTENTE IA ============ -->
				<template v-if="isAssistantPage">
					<header class="page-head">
						<p class="mt-kicker">Asistente</p>
						<h1 class="mt-h-display">Asistente médico IA</h1>
						<p class="mt-body page-head__desc">
							Consulta tus dudas de salud con el asistente inteligente de MediApp.
						</p>
					</header>

					<div class="panel panel--input">
						<ion-input
							v-model="userRequest"
							placeholder="Escribe tu consulta médica…"
							@keyup.enter="getAiResponse"
						></ion-input>

						<ion-button class="panel__submit" :disabled="loading || !userRequest.trim()" @click="getAiResponse">
							<ion-icon slot="start" :icon="loading ? hourglass : send"></ion-icon>
							{{ loading ? 'Consultando…' : 'Consultar' }}
						</ion-button>

						<div v-if="apiResponse" class="ai-answer">
							{{ apiResponse }}
						</div>
					</div>
				</template>

				<!-- ============ RESTO DE SECCIONES ============ -->
				<template v-else>
					<header class="page-head">
						<p class="mt-kicker">{{ pageTitle }}</p>
						<h1 class="mt-h-display">{{ pageTitle }}</h1>
						<p class="mt-body page-head__desc">{{ heroDescription }}</p>
					</header>

					<div class="panel panel--notice">
						<div class="panel--notice__row">
							<span class="mt-icon-tile">
								<ion-icon :icon="currentIcon"></ion-icon>
							</span>
							<div>
								<p class="panel--notice__title">Sección en desarrollo</p>
								<p class="panel--notice__text">
									Aquí verás el contenido de {{ pageTitle.toLowerCase() }} en MediApp.
								</p>
							</div>
						</div>
						<ion-button fill="outline" class="panel__submit" @click="handlePlaceholderAction">
							<ion-icon slot="start" :icon="add"></ion-icon>
							Agregar nuevo registro
						</ion-button>
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
	IonInput,
	IonMenuButton,
	IonPage,
	IonTitle,
	IonToolbar,
} from '@ionic/vue';
import { computed, ref, watch } from 'vue';
import {
	add,
	calendarClear,
	hourglass,
	home,
	medical,
	medkit,
	pulse,
	send,
} from 'ionicons/icons';
import { useRoute } from 'vue-router';
import { streamChat } from '../services/streamChat';

const route = useRoute();

const userRequest = ref('');
const apiResponse = ref('');
const loading = ref(false);

type SectionConfig = {
	title: string;
	description: string;
	icon: string;
};

const sections: Record<string, SectionConfig> = {
	Inicio: { title: 'Inicio', description: 'Bienvenido a tu panel de salud.', icon: home },
	Medicamentos: { title: 'Medicamentos', description: 'Controla tus dosis y tratamientos activos.', icon: medkit },
	Citas: { title: 'Citas', description: 'Agenda y consulta tus próximas citas médicas.', icon: calendarClear },
	Signos: { title: 'Signos vitales', description: 'Lleva el registro de tus signos vitales.', icon: pulse },
	Recetas: { title: 'Recetas', description: 'Accede a tus recetas electrónicas y medicación.', icon: medical },
	Asistente: { title: 'Asistente IA', description: 'Consulta tus dudas de salud con la IA.', icon: pulse },
};

const sectionName = computed(() => {
	const id = route.params.id as string;
	return sections[id] ? id : 'Inicio';
});

const currentSection = computed(() => sections[sectionName.value]);

const pageTitle = computed(() => currentSection.value.title);
const heroDescription = computed(() => currentSection.value.description);
const currentIcon = computed(() => currentSection.value.icon);
const isAssistantPage = computed(() => sectionName.value === 'Asistente');

const handlePlaceholderAction = () => {
	// Sin implementación por ahora
};

watch(
	() => route.params.id,
	() => {
		userRequest.value = '';
		apiResponse.value = '';
	}
);

const getAiResponse = async () => {
	if (!userRequest.value.trim() || loading.value) return;
	loading.value = true;
	apiResponse.value = '';
	try {
		await streamChat(
			[
				{
					role: 'user',
					content: userRequest.value,
				},
			],
			{
				onDelta: (delta) => {
					apiResponse.value += delta;
				},
				onError: (message) => {
					console.error(message);
					if (!apiResponse.value) {
						apiResponse.value = 'No se pudo conectar con el asistente. Intenta de nuevo.';
					}
				},
				onDone: () => {
					if (!apiResponse.value) {
						apiResponse.value = 'No se obtuvo respuesta del asistente. Intenta de nuevo.';
					}
				},
			}
		);
	} catch (error) {
		console.log(error);
		apiResponse.value = 'No se pudo conectar con el asistente. Intenta de nuevo.';
	} finally {
		loading.value = false;
	}
};
</script>

<style scoped>
.page-shell {
	max-width: 720px;
	margin: 0 auto;
	padding: 12px 20px 40px;
}

.page-head {
	padding: 20px 0 28px;
}

.page-head__desc {
	max-width: 44ch;
	margin: 10px 0 0;
}

.panel {
	background: var(--mt-surface);
	border: 1px solid var(--mt-line);
	border-radius: var(--radius-card);
	padding: 18px;
	box-shadow: var(--shadow-soft);
}

.panel__submit {
	margin-top: 12px;
	width: 100%;
}

.panel--notice__row {
	display: flex;
	gap: 14px;
	align-items: flex-start;
}

.panel--notice__title {
	margin: 0;
	font-size: 15px;
	font-weight: 600;
	color: var(--mt-ink);
}

.panel--notice__text {
	margin: 4px 0 0;
	font-size: 13.5px;
	line-height: 1.55;
	color: var(--mt-ink-2);
}

.ai-answer {
	margin-top: 16px;
	padding: 16px;
	border-radius: 14px;
	background: var(--mt-muted);
	font-size: 15px;
	line-height: 1.6;
	white-space: pre-wrap;
	word-break: break-word;
	color: var(--mt-ink);
}

@media (min-width: 768px) {
	.page-shell {
		padding-top: 28px;
	}
}
</style>
