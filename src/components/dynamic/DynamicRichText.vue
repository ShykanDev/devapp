<template>
	<div class="rich-text" v-html="html"></div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { parseMarkdown } from '../../lib/markdown';

const props = defineProps<{ text: string }>();

const html = computed(() => parseMarkdown(props.text));
</script>

<style scoped>
.rich-text {
	font-size: 15px;
	line-height: 1.7;
	color: var(--mt-ink-2);
	overflow-wrap: break-word;
}

.rich-text :deep(h1),
.rich-text :deep(h2),
.rich-text :deep(h3),
.rich-text :deep(h4) {
	margin: 22px 0 8px;
	line-height: 1.35;
	font-weight: 700;
	letter-spacing: -0.01em;
	color: var(--mt-ink);
}

.rich-text :deep(h1) {
	font-size: 18px;
}

.rich-text :deep(h2) {
	font-size: 16.5px;
}

.rich-text :deep(h3),
.rich-text :deep(h4) {
	font-size: 15.5px;
}

.rich-text :deep(p) {
	margin: 10px 0;
}

.rich-text :deep(ul),
.rich-text :deep(ol) {
	margin: 10px 0;
	padding-left: 2px;
	list-style: none;
}

.rich-text :deep(li) {
	position: relative;
	margin: 8px 0;
	padding-left: 24px;
	line-height: 1.66;
}

.rich-text :deep(ul > li)::before {
	content: '';
	position: absolute;
	left: 4px;
	top: 0.62em;
	width: 5px;
	height: 5px;
	border-radius: 999px;
	background: var(--mt-accent);
}

.rich-text :deep(ol) {
	counter-reset: rich-ol;
}

.rich-text :deep(ol > li) {
	counter-increment: rich-ol;
}

.rich-text :deep(ol > li)::before {
	content: counter(rich-ol);
	position: absolute;
	left: 0;
	top: 0;
	width: 18px;
	font-size: 12px;
	font-weight: 650;
	font-variant-numeric: tabular-nums;
	color: var(--mt-accent);
}

.rich-text :deep(strong) {
	font-weight: 700;
	color: var(--mt-ink);
}

/* ---------- Código inline ---------- */
.rich-text :deep(.md-inline-code) {
	font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
	font-size: 0.88em;
	padding: 1px 6px;
	border-radius: 6px;
	border: 1px solid var(--mt-line);
	background: var(--mt-muted);
	color: var(--mt-ink);
}

/* ---------- Bloques de código ---------- */
.rich-text :deep(.md-code-block) {
	margin: 14px 0;
	border: 1px solid var(--mt-line);
	border-radius: var(--radius-box);
	background: var(--mt-muted);
	overflow: hidden;
}

.rich-text :deep(.md-code-block__bar) {
	display: flex;
	align-items: center;
	gap: 10px;
	padding: 8px 14px;
	border-bottom: 1px solid var(--mt-line);
}

.rich-text :deep(.md-code-block__lang) {
	font-size: 11px;
	font-weight: 600;
	letter-spacing: 0.06em;
	text-transform: uppercase;
	color: var(--mt-ink-3);
}

.rich-text :deep(.md-code-block__pre) {
	margin: 0;
	padding: 14px 16px;
	overflow-x: auto;
	-webkit-overflow-scrolling: touch;
}

.rich-text :deep(.md-code-block__pre code) {
	display: block;
	font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
	font-size: 13px;
	line-height: 1.65;
	color: var(--mt-ink);
	background: none;
	border: none;
	padding: 0;
}

.rich-text :deep(.md-code-line) {
	display: block;
	white-space: pre;
}
</style>
