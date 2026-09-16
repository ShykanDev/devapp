<template>
	<AppPage>
		<AppHeader title="Buscar" back="/ai-practitioner" />

		<main class="app-content">
			<div class="app-container">
				<header class="page-head">
					<p class="mt-kicker">Index local</p>
					<h1 class="mt-h-page">Buscar</h1>
					<p class="mt-body page-head__desc">
						Busca en {{ totalEntradas }} entradas: grupos temáticos, objectives, tarjetas,
						preguntas, comparaciones, glosario y servicios del contenido autorizado.
					</p>
				</header>

				<div class="search-well">
					<AppIcon :icon="searchOutline" class="search-well__icon" />
					<input
						v-model="consulta"
						class="search-well__input"
						type="search"
						placeholder="Ej. prompt, few-shot, Bedrock…"
						aria-label="Buscar en el módulo"
					/>
					<button
						v-if="consulta.trim()"
						type="button"
						class="search-well__clear"
						aria-label="Limpiar búsqueda"
						@click="consulta = ''"
					>
						<AppIcon :icon="close" />
					</button>
				</div>

				<template v-if="consulta.trim().length >= 2">
					<p class="mt-label">{{ resultados.length }} resultado{{ resultados.length === 1 ? '' : 's' }}</p>

					<div v-if="resultados.length === 0" class="empty-card">
						<AppIcon :icon="searchOutline" />
						<p class="empty-card__title">Sin resultados</p>
						<p class="empty-card__hint">
							Nada coincide con «{{ consulta }}». Recuerda que solo se indexa el contenido ya
							autorizado: los temas de tasks pendientes todavía no aparecen.
						</p>
					</div>

					<div v-else class="grupos">
						<section v-for="grupo in grupos" :key="grupo.tipo" class="grupo">
							<p class="grupo__label">
								{{ etiquetaTipo(grupo.tipo) }} · {{ grupo.resultados.length }}
							</p>
							<div class="group-list">
								<RouterLink
									v-for="resultado in grupo.resultados"
									:key="`${resultado.tipo}-${resultado.id}`"
									:to="resultado.ruta"
									class="result-row"
								>
									<div class="result-row__text">
										<p class="result-row__title">{{ resultado.titulo }}</p>
										<p class="result-row__snippet">{{ recortar(resultado.texto) }}</p>
									</div>
									<AppIcon :icon="chevronForward" class="result-row__chevron" />
								</RouterLink>
							</div>
						</section>
					</div>
				</template>

				<div v-else class="sugerencias">
					<p class="mt-label">Prueba con</p>
					<div class="sugerencias__chips">
						<button
							v-for="sugerencia in sugerencias"
							:key="sugerencia"
							type="button"
							class="sugerencias__chip"
							@click="consulta = sugerencia"
						>
							{{ sugerencia }}
						</button>
					</div>
					<p class="sugerencias__nota">
						La búsqueda cubre solo el contenido autorizado del módulo. «RAG» o «vector
						databases» viven en Task 3.1 y todavía no están.
					</p>
				</div>
			</div>
		</main>
	</AppPage>
</template>

<script setup lang="ts">
import { chevronForward, close, searchOutline } from 'ionicons/icons';
import { useAifC01Index } from '@/lib/aifC01Index';
import AppPage from '@/components/ui/AppPage.vue';
import AppHeader from '@/components/ui/AppHeader.vue';
import AppIcon from '@/components/ui/AppIcon.vue';

const { consulta, resultados, grupos, totalEntradas, etiquetaTipo } = useAifC01Index();

const sugerencias = ['prompt', 'few-shot', 'jailbreak', 'Bedrock', 'temperatura', 'chain-of-thought'];

function recortar(texto: string, maximo = 120): string {
	const limpio = texto.replace(/\s+/g, ' ').trim();
	return limpio.length > maximo ? `${limpio.slice(0, maximo - 1)}…` : limpio;
}
</script>

<style scoped>
.page-head {
	padding: 20px 0 18px;
}

.page-head__desc {
	margin: 10px 0 0;
	max-width: 60ch;
}

.search-well {
	display: flex;
	align-items: center;
	gap: 8px;
	padding: 0 10px 0 14px;
	margin-bottom: 22px;
	border-radius: 15px;
	background: var(--mt-muted);
}

.search-well__icon {
	font-size: 17px;
	color: var(--mt-ink-3);
	flex-shrink: 0;
}

.search-well__input {
	flex: 1;
	min-width: 0;
	min-height: 50px;
	border: none;
	background: transparent;
	color: var(--mt-ink);
	font-size: 15.5px;
	outline: none;
}

.search-well__clear {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 32px;
	height: 32px;
	border: none;
	border-radius: 999px;
	background: transparent;
	color: var(--mt-ink-3);
	cursor: pointer;
}

.grupos {
	display: flex;
	flex-direction: column;
	gap: 20px;
}

.grupo__label {
	margin: 0 0 8px;
	padding: 0 2px;
	font-size: 11.5px;
	font-weight: 700;
	letter-spacing: 0.07em;
	text-transform: uppercase;
	color: var(--mt-ink-3);
}

.result-row {
	display: flex;
	align-items: center;
	gap: 12px;
	padding: 12px 16px;
	text-decoration: none;
	transition: background 0.15s ease;
}

.result-row:active {
	background: var(--mt-muted);
}

.result-row__text {
	flex: 1;
	min-width: 0;
}

.result-row__title {
	margin: 0;
	font-size: 14px;
	font-weight: 600;
	line-height: 1.42;
	color: var(--mt-ink);
}

.result-row__snippet {
	margin: 4px 0 0;
	font-size: 12.5px;
	line-height: 1.45;
	color: var(--mt-ink-2);
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
}

.result-row__chevron {
	font-size: 15px;
	color: var(--mt-ink-3);
	opacity: 0.6;
}

.sugerencias {
	display: flex;
	flex-direction: column;
	gap: 10px;
}

.sugerencias__chips {
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
}

.sugerencias__chip {
	padding: 7px 13px;
	border: 1px solid var(--mt-line);
	border-radius: 999px;
	background: var(--mt-surface);
	font-size: 13px;
	color: var(--mt-ink);
	cursor: pointer;
}

.sugerencias__nota {
	margin: 6px 0 0;
	font-size: 12.5px;
	line-height: 1.55;
	color: var(--mt-ink-3);
}

.empty-card {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 6px;
	padding: 36px 16px;
	text-align: center;
	border: 1px solid var(--mt-line);
	border-radius: var(--radius-card);
	background: var(--mt-surface);
}

.empty-card .app-icon {
	font-size: 26px;
	color: var(--mt-ink-3);
}

.empty-card__title {
	margin: 8px 0 0;
	font-size: 16px;
	font-weight: 600;
	color: var(--mt-ink);
}

.empty-card__hint {
	margin: 0;
	max-width: 46ch;
	font-size: 13px;
	line-height: 1.55;
	color: var(--mt-ink-2);
}
</style>
