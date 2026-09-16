<template>
	<div class="aif-blocks">
		<template v-for="(bloque, indice) in bloques" :key="indice">
			<!-- Concepto -->
			<section v-if="bloque.tipo === 'concepto'" class="aif-block">
				<h4 class="aif-block__label">Concepto</h4>
				<div class="aif-markdown" v-html="render(bloque.md)"></div>
			</section>

			<!-- Ejemplo -->
			<section v-else-if="bloque.tipo === 'ejemplo'" class="aif-block">
				<h4 class="aif-block__label">Ejemplo</h4>
				<div class="aif-markdown" v-html="render(bloque.md)"></div>
			</section>

			<!-- Comparación -->
			<section v-else-if="bloque.tipo === 'comparacion'" class="aif-block">
				<h4 class="aif-block__label">Comparación</h4>
				<AifComparisonCard v-if="parDe(bloque.parId)" :par="parDe(bloque.parId)!" compacto />
				<p v-else class="aif-block__huerfano">
					Comparación no encontrada ({{ bloque.parId }}).
				</p>
			</section>

			<!-- Cuándo usar -->
			<section v-else-if="bloque.tipo === 'cuandoUsar'" class="aif-block">
				<h4 class="aif-block__label">Cuándo usarlo</h4>
				<div class="aif-usar">
					<div class="aif-usar__col">
						<p class="aif-usar__title aif-usar__title--si">Sí</p>
						<ul class="aif-usar__list">
							<li v-for="item in bloque.usar" :key="item">
								<AppIcon :icon="checkmarkCircleOutline" class="aif-usar__icon aif-usar__icon--si" />
								<span>{{ item }}</span>
							</li>
						</ul>
					</div>
					<div class="aif-usar__col">
						<p class="aif-usar__title aif-usar__title--no">No</p>
						<ul class="aif-usar__list">
							<li v-for="item in bloque.noUsar" :key="item">
								<AppIcon :icon="closeCircleOutline" class="aif-usar__icon aif-usar__icon--no" />
								<span>{{ item }}</span>
							</li>
						</ul>
					</div>
				</div>
			</section>

			<!-- Escenario -->
			<section v-else-if="bloque.tipo === 'escenario'" class="aif-block">
				<h4 class="aif-block__label">Escenario</h4>
				<div class="aif-card aif-card--escenario">
					<p class="aif-card__situacion">{{ bloque.situacion }}</p>
					<p class="aif-card__analisis">{{ bloque.analisis }}</p>
					<RouterLink
						v-if="bloque.servicio"
						:to="`/ai-practitioner/servicios?servicio=${encodeURIComponent(bloque.servicio)}`"
						class="aif-card__servicio"
					>
						<AppIcon :icon="cubeOutline" />
						{{ bloque.servicio }}
					</RouterLink>
				</div>
			</section>

			<!-- Error común -->
			<section v-else-if="bloque.tipo === 'errorComun'" class="aif-block">
				<h4 class="aif-block__label">Error común</h4>
				<div class="aif-card aif-card--error">
					<p class="aif-card__error">
						<AppIcon :icon="alertCircleOutline" />
						<span>{{ bloque.error }}</span>
					</p>
					<p class="aif-card__correccion">{{ bloque.correccion }}</p>
				</div>
			</section>

			<!-- Claves -->
			<section v-else-if="bloque.tipo === 'clave'" class="aif-block">
				<h4 class="aif-block__label">Claves</h4>
				<ul class="aif-claves">
					<li v-for="item in bloque.items" :key="item">
						<AppIcon :icon="keyOutline" class="aif-claves__icon" />
						<span>{{ item }}</span>
					</li>
				</ul>
			</section>

			<!-- Servicio -->
			<section v-else-if="bloque.tipo === 'servicio'" class="aif-block">
				<h4 class="aif-block__label">Servicio</h4>
				<RouterLink
					:to="`/ai-practitioner/servicios?servicio=${encodeURIComponent(bloque.nombre)}`"
					class="aif-servicio"
				>
					<span class="aif-servicio__icon">
						<AppIcon :icon="cubeOutline" />
					</span>
					<span class="aif-servicio__text">
						<span class="aif-servicio__name">{{ bloque.nombre }}</span>
						<span class="aif-servicio__hint">Ver ficha del servicio</span>
					</span>
					<AppIcon :icon="chevronForward" class="aif-servicio__chevron" />
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
import { MAPA_PARES } from '@/data/aifC01/registroContenido';
import type { Bloque, ParConfusionAifC01 } from '@/data/aifC01/types';
import { parseMarkdown } from '@/lib/markdown';
import AppIcon from '@/components/ui/AppIcon.vue';
import AifComparisonCard from './AifComparisonCard.vue';

defineProps<{ bloques: Bloque[] }>();

const render = (markdown: string) => parseMarkdown(markdown);

const parDe = (parId: string): ParConfusionAifC01 | undefined => MAPA_PARES[parId];
</script>

<style scoped>
.aif-blocks {
	display: flex;
	flex-direction: column;
	gap: 18px;
}

.aif-block {
	display: flex;
	flex-direction: column;
	gap: 8px;
}

.aif-block__label {
	margin: 0;
	font-size: 11px;
	font-weight: 700;
	letter-spacing: 0.09em;
	text-transform: uppercase;
	color: var(--mt-ink-3);
}

.aif-block__huerfano {
	margin: 0;
	font-size: 13px;
	color: var(--mt-warning);
}

/* ---------- Cuándo usar ---------- */
.aif-usar {
	display: grid;
	gap: 12px;
}

@media (min-width: 560px) {
	.aif-usar {
		grid-template-columns: 1fr 1fr;
	}
}

.aif-usar__col {
	padding: 12px 14px;
	border-radius: var(--radius-box);
	border: 1px solid var(--mt-line);
	background: var(--mt-surface);
}

.aif-usar__title {
	margin: 0 0 8px;
	font-size: 11.5px;
	font-weight: 700;
	letter-spacing: 0.06em;
	text-transform: uppercase;
}

.aif-usar__title--si {
	color: var(--mt-success);
}

.aif-usar__title--no {
	color: var(--mt-warning);
}

.aif-usar__list {
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-direction: column;
	gap: 8px;
}

.aif-usar__list li {
	display: flex;
	align-items: flex-start;
	gap: 8px;
	font-size: 13px;
	line-height: 1.5;
	color: var(--mt-ink-2);
}

.aif-usar__icon {
	flex-shrink: 0;
	margin-top: 3px;
	font-size: 14px;
}

.aif-usar__icon--si {
	color: var(--mt-success);
}

.aif-usar__icon--no {
	color: var(--mt-warning);
}

/* ---------- Tarjetas ---------- */
.aif-card {
	padding: 14px 16px;
	border-radius: var(--radius-box);
	border: 1px solid var(--mt-line);
	background: var(--mt-surface);
	display: flex;
	flex-direction: column;
	gap: 10px;
}

.aif-card--escenario {
	background: var(--mt-accent-soft);
	border-color: color-mix(in srgb, var(--mt-accent) 24%, var(--mt-line));
}

.aif-card--error {
	background: color-mix(in srgb, var(--mt-warning) 7%, var(--mt-surface));
	border-color: color-mix(in srgb, var(--mt-warning) 22%, var(--mt-line));
}

.aif-card__situacion {
	margin: 0;
	font-size: 13.5px;
	font-weight: 600;
	line-height: 1.5;
	color: var(--mt-ink);
}

.aif-card__analisis {
	margin: 0;
	font-size: 13.5px;
	line-height: 1.6;
	color: var(--mt-ink-2);
}

.aif-card__servicio {
	display: inline-flex;
	align-items: center;
	gap: 6px;
	align-self: flex-start;
	font-size: 12.5px;
	font-weight: 600;
	color: var(--mt-accent);
}

.aif-card__error {
	display: flex;
	align-items: flex-start;
	gap: 8px;
	margin: 0;
	font-size: 13.5px;
	font-weight: 600;
	line-height: 1.5;
	color: var(--mt-ink);
}

.aif-card__error .app-icon {
	flex-shrink: 0;
	margin-top: 2px;
	color: var(--mt-warning);
}

.aif-card__correccion {
	margin: 0;
	font-size: 13px;
	line-height: 1.6;
	color: var(--mt-ink-2);
}

/* ---------- Claves ---------- */
.aif-claves {
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-direction: column;
	gap: 9px;
}

.aif-claves li {
	display: flex;
	align-items: flex-start;
	gap: 9px;
	font-size: 13.5px;
	line-height: 1.55;
	color: var(--mt-ink);
}

.aif-claves__icon {
	flex-shrink: 0;
	margin-top: 3px;
	font-size: 14px;
	color: var(--mt-accent);
}

/* ---------- Servicio ---------- */
.aif-servicio {
	display: flex;
	align-items: center;
	gap: 12px;
	padding: 12px 14px;
	border-radius: var(--radius-box);
	border: 1px solid var(--mt-line);
	background: var(--mt-surface);
	text-decoration: none;
}

.aif-servicio__icon {
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

.aif-servicio__text {
	flex: 1;
	min-width: 0;
	display: flex;
	flex-direction: column;
	gap: 2px;
}

.aif-servicio__name {
	font-size: 14.5px;
	font-weight: 600;
	color: var(--mt-ink);
}

.aif-servicio__hint {
	font-size: 12px;
	color: var(--mt-ink-3);
}

.aif-servicio__chevron {
	font-size: 15px;
	color: var(--mt-ink-3);
	opacity: 0.6;
}

/* ---------- Markdown ---------- */
.aif-markdown {
	font-size: 14.5px;
	line-height: 1.68;
	color: var(--mt-ink-2);
	overflow-wrap: break-word;
}

.aif-markdown :deep(p) {
	margin: 8px 0;
}

.aif-markdown :deep(strong) {
	font-weight: 700;
	color: var(--mt-ink);
}

.aif-markdown :deep(ul),
.aif-markdown :deep(ol) {
	margin: 8px 0;
	padding-left: 2px;
	list-style: none;
}

.aif-markdown :deep(li) {
	position: relative;
	margin: 7px 0;
	padding-left: 20px;
	line-height: 1.6;
}

.aif-markdown :deep(ul > li)::before {
	content: '';
	position: absolute;
	left: 4px;
	top: 0.62em;
	width: 5px;
	height: 5px;
	border-radius: 999px;
	background: var(--mt-accent);
}

.aif-markdown :deep(.md-inline-code) {
	font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
	font-size: 0.88em;
	padding: 1px 6px;
	border-radius: 6px;
	border: 1px solid var(--mt-line);
	background: var(--mt-muted);
	color: var(--mt-ink);
}

.aif-markdown :deep(.md-code-block) {
	margin: 12px 0;
	border: 1px solid var(--mt-line);
	border-radius: var(--radius-box);
	background: var(--mt-muted);
	overflow: hidden;
}

.aif-markdown :deep(.md-code-block__bar) {
	padding: 7px 14px;
	border-bottom: 1px solid var(--mt-line);
}

.aif-markdown :deep(.md-code-block__lang) {
	font-size: 11px;
	font-weight: 600;
	letter-spacing: 0.06em;
	text-transform: uppercase;
	color: var(--mt-ink-3);
}

.aif-markdown :deep(.md-code-block__pre) {
	margin: 0;
	padding: 12px 14px;
	overflow-x: auto;
	-webkit-overflow-scrolling: touch;
}

.aif-markdown :deep(.md-code-block__pre code) {
	display: block;
	font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
	font-size: 12.5px;
	line-height: 1.6;
	color: var(--mt-ink);
}

.aif-markdown :deep(.md-code-line) {
	display: block;
	white-space: pre;
}
</style>
