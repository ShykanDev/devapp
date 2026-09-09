<template>
	<section class="callout callout--info">
		<div class="callout__head">
			<span class="callout__icon">
				<ion-icon :icon="informationCircle"></ion-icon>
			</span>
			<h3 class="callout__title">{{ info.title }}</h3>
		</div>
		<div class="callout__body">
			<DynamicRichText :text="info.content" />
		</div>
	</section>
</template>

<script setup lang="ts">
import { IonIcon } from '@ionic/vue';
import { informationCircle } from 'ionicons/icons';
import type { DynamicPage } from '../../schemas/dynamicPage';
import DynamicRichText from './DynamicRichText.vue';

defineProps<{ info: DynamicPage['informativeSection'] }>();
</script>

<style scoped>
.callout {
	border-radius: var(--radius-box);
	padding: 18px 20px;
	border: 1px solid color-mix(in srgb, var(--mt-accent) 22%, var(--mt-line));
	background: color-mix(in srgb, var(--mt-accent) 5%, var(--mt-surface));
}

.callout__head {
	display: flex;
	align-items: center;
	gap: 10px;
	margin-bottom: 6px;
}

.callout__icon {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 26px;
	height: 26px;
	flex-shrink: 0;
	border-radius: 8px;
	background: var(--mt-accent-soft);
	color: var(--mt-accent);
}

.callout__icon ion-icon {
	font-size: 15px;
}

.callout__title {
	margin: 0;
	font-size: 15.5px;
	font-weight: 650;
	letter-spacing: -0.012em;
	color: var(--mt-ink);
}

.callout__body :deep(.rich-text) {
	color: var(--mt-ink-2);
}
</style>
