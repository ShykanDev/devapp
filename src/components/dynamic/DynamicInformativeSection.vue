<template>
	<section class="callout callout--info">
		<div class="callout__body">
			<span class="callout__tag">
				<AppIcon :icon="informationCircle" />
				Nota
			</span>
			<h3 class="callout__title">{{ info.title }}</h3>
			<DynamicRichText :text="info.content" />
		</div>
	</section>
</template>

<script setup lang="ts">
import { informationCircle } from 'ionicons/icons';
import type { DynamicPage } from '../../schemas/dynamicPage';
import AppIcon from '../ui/AppIcon.vue';
import DynamicRichText from './DynamicRichText.vue';

defineProps<{ info: DynamicPage['informativeSection'] }>();
</script>

<style scoped>
.callout {
	border: 1px solid var(--mt-line);
	border-radius: var(--radius-card);
	background: var(--mt-surface);
	box-shadow: var(--shadow-soft);
	overflow: hidden;
}

.callout--info {
	border-color: color-mix(in srgb, var(--mt-accent) 26%, var(--mt-line));
}

.callout__body {
	padding: 16px 18px;
}

.callout__tag {
	display: inline-flex;
	align-items: center;
	gap: 5px;
	font-size: 12px;
	font-weight: 600;
	letter-spacing: 0.06em;
	text-transform: uppercase;
	color: var(--mt-accent);
}

.callout__tag .app-icon {
	font-size: 14px;
}

.callout__title {
	margin: 8px 0 6px;
	font-size: 16px;
	font-weight: 700;
	letter-spacing: -0.012em;
	color: var(--mt-ink);
}
</style>
