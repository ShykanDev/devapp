<template>
	<div class="clf-blocks">
		<template v-for="(bloque, indice) in bloques" :key="indice">
			<!-- Concepto -->
			<section v-if="bloque.tipo === 'concepto'" class="clf-block">
				<h4 class="clf-block__label">Concepto</h4>
				<div class="clf-markdown" v-html="render(bloque.md)"></div>
			</section>

			<!-- Ejemplo -->
			<section v-else-if="bloque.tipo === 'ejemplo'" class="clf-block">
				<h4 class="clf-block__label">Ejemplo</h4>
				<div class="clf-markdown" v-html="render(bloque.md)"></div>
			</section>

			<!-- Comparación -->
			<section v-else-if="bloque.tipo === 'comparacion'" class="clf-block">
				<h4 class="clf-block__label">Comparación</h4>
				<ClfComparisonCard v-if="parDe(bloque.parId)" :par="parDe(bloque.parId)!" compacto />
				<p v-else class="clf-block__huerfano">
					Comparación no encontrada ({{ bloque.parId }}).
				</p>
			</section>

			<!-- Cuándo usar -->
			<section v-else-if="bloque.tipo === 'cuandoUsar'" class="clf-block">
				<h4 class="clf-block__label">Cuándo usarlo</h4>
				<div class="clf-usar">
					<div class="clf-usar__col">
						<p class="clf-usar__title clf-usar__title--si">Sí</p>
						<ul class="clf-usar__list">
							<li v-for="item in bloque.usar" :key="item">
								<AppIcon :icon="checkmarkCircleOutline" class="clf-usar__icon clf-usar__icon--si" />
								<span>{{ item }}</span>
							</li>
						</ul>
					</div>
					<div class="clf-usar__col">
						<p class="clf-usar__title clf-usar__title--no">No</p>
						<ul class="clf-usar__list">
							<li v-for="item in bloque.noUsar" :key="item">
								<AppIcon :icon="closeCircleOutline" class="clf-usar__icon clf-usar__icon--no" />
								<span>{{ item }}</span>
							</li>
						</ul>
					</div>
				</div>
			</section>

			<!-- Escenario -->
			<section v-else-if="bloque.tipo === 'escenario'" class="clf-block">
				<h4 class="clf-block__label">Escenario</h4>
				<div class="clf-card clf-card--escenario">
					<p class="clf-card__situacion">{{ bloque.situacion }}</p>
					<p class="clf-card__analisis">{{ bloque.analisis }}</p>
					<RouterLink
						v-if="bloque.servicio"
						:to="`/cloud-practitioner/servicios?servicio=${encodeURIComponent(bloque.servicio)}`"
						class="clf-card__servicio"
					>
						<AppIcon :icon="cubeOutline" />
						{{ bloque.servicio }}
					</RouterLink>
				</div>
			</section>

			<!-- Error común -->
			<section v-else-if="bloque.tipo === 'errorComun'" class="clf-block">
				<h4 class="clf-block__label">Error común</h4>
				<div class="clf-card clf-card--error">
					<p class="clf-card__error">
						<AppIcon :icon="alertCircleOutline" />
						<span>{{ bloque.error }}</span>
					</p>
					<p class="clf-card__correccion">{{ bloque.correccion }}</p>
				</div>
			</section>

			<!-- Claves -->
			<section v-else-if="bloque.tipo === 'clave'" class="clf-block">
				<h4 class="clf-block__label">Claves</h4>
				<ul class="clf-claves">
					<li v-for="item in bloque.items" :key="item">
						<AppIcon :icon="keyOutline" class="clf-claves__icon" />
						<span>{{ item }}</span>
					</li>
				</ul>
			</section>

			<!-- Servicio -->
			<section v-else-if="bloque.tipo === 'servicio'" class="clf-block">
				<h4 class="clf-block__label">Servicio</h4>
				<RouterLink
					:to="`/cloud-practitioner/servicios?servicio=${encodeURIComponent(bloque.nombre)}`"
					class="clf-servicio"
				>
					<span class="clf-servicio__icon">
						<AppIcon :icon="cubeOutline" />
					</span>
					<span class="clf-servicio__text">
						<span class="clf-servicio__name">{{ bloque.nombre }}</span>
						<span class="clf-servicio__hint">Ver ficha del servicio</span>
					</span>
					<AppIcon :icon="chevronForward" class="clf-servicio__chevron" />
				</RouterLink>
			</section>
		</template>
	</div>
</template>

<script setup lang="ts">
import {
	alertCircleOutline,
	checkmarkCircleOutline,
	chevronForward,
	closeCircleOutline,
	cubeOutline,
	keyOutline,
} from 'ionicons/icons';
import { MAPA_PARES } from '@/data/clfC02/registroContenido';
import type { Bloque, ParConfusionClfC02 } from '@/data/clfC02/types';
import { parseMarkdown } from '@/lib/markdown';
import AppIcon from '@/components/ui/AppIcon.vue';
import ClfComparisonCard from './ClfComparisonCard.vue';

defineProps<{ bloques: Bloque[] }>();

const render = (markdown: string) => parseMarkdown(markdown);

const parDe = (parId: string): ParConfusionClfC02 | undefined => MAPA_PARES[parId];
</script>

<style scoped>
.clf-blocks {
	display: flex;
	flex-direction: column;
	gap: 18px;
}

.clf-block {
	display: flex;
	flex-direction: column;
	gap: 8px;
}

.clf-block__label {
	margin: 0;
	font-size: 11px;
	font-weight: 700;
	letter-spacing: 0.09em;
	text-transform: uppercase;
	color: var(--mt-ink-3);
}

.clf-block__huerfano {
	margin: 0;
	font-size: 13px;
	color: var(--mt-warning);
}

/* ---------- Cuándo usar ---------- */
.clf-usar {
	display: grid;
	gap: 12px;
}

@media (min-width: 560px) {
	.clf-usar {
		grid-template-columns: 1fr 1fr;
	}
}

.clf-usar__col {
	padding: 12px 14px;
	border-radius: var(--radius-box);
	border: 1px solid var(--mt-line);
	background: var(--mt-surface);
}

.clf-usar__title {
	margin: 0 0 8px;
	font-size: 11.5px;
	font-weight: 700;
	letter-spacing: 0.06em;
	text-transform: uppercase;
}

.clf-usar__title--si {
	color: var(--mt-success);
}

.clf-usar__title--no {
	color: var(--mt-warning);
}

.clf-usar__list {
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-direction: column;
	gap: 8px;
}

.clf-usar__list li {
	display: flex;
	align-items: flex-start;
	gap: 8px;
	font-size: 13px;
	line-height: 1.5;
	color: var(--mt-ink-2);
}

.clf-usar__icon {
	flex-shrink: 0;
	margin-top: 3px;
	font-size: 14px;
}

.clf-usar__icon--si {
	color: var(--mt-success);
}

.clf-usar__icon--no {
	color: var(--mt-warning);
}

/* ---------- Tarjetas ---------- */
.clf-card {
	padding: 14px 16px;
	border-radius: var(--radius-box);
	border: 1px solid var(--mt-line);
	background: var(--mt-surface);
	display: flex;
	flex-direction: column;
	gap: 10px;
}

.clf-card--escenario {
	background: var(--mt-accent-soft);
	border-color: color-mix(in srgb, var(--mt-accent) 24%, var(--mt-line));
}

.clf-card--error {
	background: color-mix(in srgb, var(--mt-warning) 7%, var(--mt-surface));
	border-color: color-mix(in srgb, var(--mt-warning) 22%, var(--mt-line));
}

.clf-card__situacion {
	margin: 0;
	font-size: 13.5px;
	font-weight: 600;
	line-height: 1.5;
	color: var(--mt-ink);
}

.clf-card__analisis {
	margin: 0;
	font-size: 13.5px;
	line-height: 1.6;
	color: var(--mt-ink-2);
}

.clf-card__servicio {
	display: inline-flex;
	align-items: center;
	gap: 6px;
	align-self: flex-start;
	font-size: 12.5px;
	font-weight: 600;
	color: var(--mt-accent);
}

.clf-card__error {
	display: flex;
	align-items: flex-start;
	gap: 8px;
	margin: 0;
	font-size: 13.5px;
	font-weight: 600;
	line-height: 1.5;
	color: var(--mt-ink);
}

.clf-card__error .app-icon {
	flex-shrink: 0;
	margin-top: 2px;
	color: var(--mt-warning);
}

.clf-card__correccion {
	margin: 0;
	font-size: 13px;
	line-height: 1.6;
	color: var(--mt-ink-2);
}

/* ---------- Claves ---------- */
.clf-claves {
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-direction: column;
	gap: 9px;
}

.clf-claves li {
	display: flex;
	align-items: flex-start;
	gap: 9px;
	font-size: 13.5px;
	line-height: 1.55;
	color: var(--mt-ink);
}

.clf-claves__icon {
	flex-shrink: 0;
	margin-top: 3px;
	font-size: 14px;
	color: var(--mt-accent);
}

/* ---------- Servicio ---------- */
.clf-servicio {
	display: flex;
	align-items: center;
	gap: 12px;
	padding: 12px 14px;
	border-radius: var(--radius-box);
	border: 1px solid var(--mt-line);
	background: var(--mt-surface);
	text-decoration: none;
}

.clf-servicio__icon {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 34px;
	height: 34px;
	flex-shrink: 0;
	border-radius: 11px;
	background: var(--mt-accent-soft);
	color: var(--mt-accent);
}

.clf-servicio__text {
	flex: 1;
	min-width: 0;
	display: flex;
	flex-direction: column;
	gap: 2px;
}

.clf-servicio__name {
	font-size: 14.5px;
	font-weight: 600;
	color: var(--mt-ink);
}

.clf-servicio__hint {
	font-size: 12px;
	color: var(--mt-ink-3);
}

.clf-servicio__chevron {
	font-size: 15px;
	color: var(--mt-ink-3);
	opacity: 0.6;
}

/* ---------- Markdown ---------- */
.clf-markdown {
	font-size: 14.5px;
	line-height: 1.68;
	color: var(--mt-ink-2);
	overflow-wrap: break-word;
}

.clf-markdown :deep(p) {
	margin: 8px 0;
}

.clf-markdown :deep(strong) {
	font-weight: 700;
	color: var(--mt-ink);
}

.clf-markdown :deep(ul),
.clf-markdown :deep(ol) {
	margin: 8px 0;
	padding-left: 2px;
	list-style: none;
}

.clf-markdown :deep(li) {
	position: relative;
	margin: 7px 0;
	padding-left: 20px;
	line-height: 1.6;
}

.clf-markdown :deep(ul > li)::before {
	content: '';
	position: absolute;
	left: 4px;
	top: 0.62em;
	width: 5px;
	height: 5px;
	border-radius: 999px;
	background: var(--mt-accent);
}

.clf-markdown :deep(.md-inline-code) {
	font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
	font-size: 0.88em;
	padding: 1px 6px;
	border-radius: 6px;
	border: 1px solid var(--mt-line);
	background: var(--mt-muted);
	color: var(--mt-ink);
}

.clf-markdown :deep(.md-code-block) {
	margin: 12px 0;
	border: 1px solid var(--mt-line);
	border-radius: var(--radius-box);
	background: var(--mt-muted);
	overflow: hidden;
}

.clf-markdown :deep(.md-code-block__bar) {
	padding: 7px 14px;
	border-bottom: 1px solid var(--mt-line);
}

.clf-markdown :deep(.md-code-block__lang) {
	font-size: 11px;
	font-weight: 600;
	letter-spacing: 0.06em;
	text-transform: uppercase;
	color: var(--mt-ink-3);
}

.clf-markdown :deep(.md-code-block__pre) {
	margin: 0;
	padding: 12px 14px;
	overflow-x: auto;
	-webkit-overflow-scrolling: touch;
}

.clf-markdown :deep(.md-code-block__pre code) {
	display: block;
	font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
	font-size: 12.5px;
	line-height: 1.6;
	color: var(--mt-ink);
}

.clf-markdown :deep(.md-code-line) {
	display: block;
	white-space: pre;
}
</style>
