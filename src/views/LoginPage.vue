<template>
	<AppPage>
		<main class="app-content">
			<div class="container">
				<header class="brand">
					<span class="brand__mark" aria-hidden="true">
						<svg viewBox="0 0 24 24" width="18" height="18">
							<path
								d="M8 6 2 12l6 6"
								fill="none"
								stroke="#ffffff"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M16 6l6 6-6 6"
								fill="none"
								stroke="#ffffff"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M13.5 5 10.5 19"
								fill="none"
								stroke="#ffffff"
								stroke-width="2"
								stroke-linecap="round"
							/>
						</svg>
					</span>
					<span class="brand__name">DevApp</span>
				</header>

				<section class="hero">
					<p class="mt-kicker">Desarrollo de software</p>
					<h1 class="mt-h-display hero__title">
						Bienvenido a tu espacio de código
					</h1>
					<p class="mt-body hero__text">
						Aprende a programar, guarda tus secciones de estudio y resuelve tus
						dudas con el asistente.
					</p>
				</section>

				<footer class="actions">
					<button
						type="button"
						class="google-btn"
						:disabled="loading"
						@click="handleGoogleLogin"
					>
						<AppSpinner v-if="loading" class="google-btn__spinner" />
						<template v-else>
							<svg class="google-btn__logo" viewBox="0 0 48 48" aria-hidden="true">
								<path fill="#FFC107"
									d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3l5.7-5.7C34.2 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.6-.4-3.9z" />
								<path fill="#FF3D00"
									d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.9 1.2 8 3l5.7-5.7C34.2 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
								<path fill="#4CAF50"
									d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
								<path fill="#1976D2"
									d="M43.6 20.1H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.1 5.7l6.2 5.2C37.8 40.3 44 36 44 24c0-1.3-.1-2.6-.4-3.9z" />
							</svg>
							<span>Continuar con Google</span>
						</template>
					</button>

					<p class="terms">
						Al continuar aceptas los <a href="#" @click.prevent="openTerms">términos</a>
						y la <a href="#" @click.prevent="openPrivacy">política de privacidad</a>.
					</p>
				</footer>
			</div>
		</main>
	</AppPage>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { doc, getFirestore, Timestamp, writeBatch } from 'firebase/firestore';
import { getAuth, onAuthStateChanged, type User } from 'firebase/auth';
import { useRouter } from 'vue-router';
import { resolveGoogleRedirect, signInWithGoogleJS } from '../services/googleAuth';
import AppPage from '../components/ui/AppPage.vue';
import AppSpinner from '../components/ui/AppSpinner.vue';

const router = useRouter();

const auth = getAuth();
const loading = ref(false);
const db = getFirestore();

let unsubscribe: (() => void) | null = null;

const upsertUserDoc = async (user: User, isNewUser: boolean) => {
	const batch = writeBatch(db);
	const userDoc = doc(db, 'users', user.uid);

	batch.set(
		userDoc,
		{
			name: user.displayName,
			email: user.email,
			uid: user.uid,
			createdAt: Timestamp.now(),
			isBanned: false,
		},
		{ merge: true }
	);

	if (isNewUser) {
		batch.set(userDoc, { plan: 'free' }, { merge: true });
	}

	await batch.commit();
};

const handleGoogleLogin = async () => {
	if (loading.value) return;

	loading.value = true;
	try {
		const result = await signInWithGoogleJS();
		await upsertUserDoc(result.user, result.isNewUser);
		router.push({ name: 'mis-secciones' });
	} catch (error) {
		const err = error as any;
		console.log('Error while trying to login using Google', err);
	} finally {
		loading.value = false;
	}
};

const openTerms = () => {
	console.log('Abrir términos');
};

const openPrivacy = () => {
	console.log('Abrir política de privacidad');
};

onMounted(async () => {
	const redirectResult = await resolveGoogleRedirect();

	if (redirectResult) {
		try {
			await upsertUserDoc(redirectResult.user, redirectResult.isNewUser);
			router.push({ name: 'mis-secciones' });
		} catch (error) {
			const err = error as any;
			console.log('Error while resolving Google redirect', err);
		}
	}

	unsubscribe = onAuthStateChanged(auth, (current) => {
		if (current) {
			router.push({ name: 'mis-secciones' });
		}
	});
});

onBeforeUnmount(() => {
	unsubscribe?.();
	unsubscribe = null;
});
</script>

<style scoped>
.container {
	position: relative;
	z-index: 2;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-height: 100%;
	max-width: 480px;
	margin: 0 auto;
	padding: calc(env(safe-area-inset-top, 0px) + 28px) 28px calc(env(safe-area-inset-bottom, 0px) + 48px);
}

.brand {
	display: inline-flex;
	align-items: center;
	gap: 10px;
	padding-top: 8px;
}

.brand__mark {
	width: 34px;
	height: 34px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border-radius: 10px;
	background: var(--mt-accent);
}

.brand__name {
	font-size: 18px;
	font-weight: 700;
	letter-spacing: -0.02em;
	color: var(--mt-ink);
}

.hero {
	padding: 56px 0 48px;
}

.hero__title {
	margin: 14px 0 0;
}

.hero__text {
	margin: 18px 0 0;
	max-width: 36ch;
}

.actions {
	display: flex;
	flex-direction: column;
}

.google-btn {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	width: 100%;
	height: 54px;
	border-radius: var(--radius-btn);
	border: 1px solid var(--mt-line-strong);
	background: var(--mt-surface);
	color: var(--mt-ink);
	font-family: var(--font-sans);
	font-size: 16px;
	font-weight: 600;
	letter-spacing: -0.008em;
	cursor: pointer;
	transition:
		transform 0.12s ease,
		box-shadow 0.2s ease;
	box-shadow: var(--shadow-soft);
}

.google-btn:disabled {
	opacity: 0.7;
}

@media (hover: hover) {
	.google-btn:not(:disabled):hover {
		transform: translateY(-1px);
		box-shadow: var(--shadow-pop);
	}
}

.google-btn__logo {
	width: 20px;
	height: 20px;
	flex-shrink: 0;
}

.google-btn__spinner {
	color: var(--mt-accent);
	width: 22px;
	height: 22px;
}

.terms {
	margin: 18px 4px 0;
	font-size: 12.5px;
	line-height: 1.6;
	color: var(--mt-ink-3);
	text-align: center;
}

.terms a {
	color: var(--mt-accent);
	font-weight: 500;
}

@media (min-height: 640px) {
	.hero {
		padding-top: 80px;
	}
}
</style>
