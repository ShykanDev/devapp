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
	font-size: 15.5px;
	line-height: 1.7;
	color: var(--mt-ink-2);
	overflow-wrap: break-word;
}

.rich-text :deep(h1),
.rich-text :deep(h2),
.rich-text :deep(h3),
.rich-text :deep(h4) {
	margin: 22px 0 8px;
	line-height: 1.3;
	font-weight: 700;
	letter-spacing: -0.016em;
	color: var(--mt-ink);
}

.rich-text :deep(h1) {
	font-size: 19px;
}

.rich-text :deep(h2) {
	font-size: 18px;
}

.rich-text :deep(h3),
.rich-text :deep(h4) {
	font-size: 16px;
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
	line-height: 1.6;
}

.rich-text :deep(ul > li)::before {
	content: '';
	position: absolute;
	left: 4px;
	top: 0.66em;
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
	font-weight: 650;
	color: var(--mt-ink);
}
</style>
