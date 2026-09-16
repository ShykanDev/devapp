<template>
	<div class="dp-sections">
		<section v-for="(section, sIdx) in sections" :key="sIdx" class="dp-section">
			<h2 class="dp-section__title">{{ section.title }}</h2>
			<div class="dp-section__body">
				<DynamicRichText :text="section.content" />
			</div>

			<div v-if="section.subsections?.length" class="dp-subsection-list">
				<div v-for="(sub, subIdx) in section.subsections" :key="subIdx" class="dp-subsection">
					<h3 class="dp-subsection__title">{{ sub.title }}</h3>
					<DynamicRichText :text="sub.content" />
				</div>
			</div>

			<DynamicSuggestions
				:suggestions="section.suggestions ?? []"
				:generated="(childrenBySection?.[sIdx] ?? []).map((child) => child.topic)"
				@pick="(topic) => emitPick(sIdx, section.title, topic)"
			/>
		</section>
	</div>
</template>

<script setup lang="ts">
import type { DynamicPageSection } from '../../schemas/dynamicPage';
import DynamicRichText from './DynamicRichText.vue';
import DynamicSuggestions from './DynamicSuggestions.vue';

defineProps<{
	sections: DynamicPageSection[];
	childrenBySection?: Record<number, { topic: string; pageId: string }[]>;
}>();

const emit = defineEmits<{
	pickSubtopic: [payload: { sectionIndex: number; sectionTitle: string; topic: string }];
}>();

const emitPick = (sectionIndex: number, sectionTitle: string, topic: string) => {
	emit('pickSubtopic', { sectionIndex, sectionTitle, topic });
};
</script>

<style scoped>
.dp-sections {
	display: flex;
	flex-direction: column;
}

.dp-section {
	padding: 22px 0 4px;
}

.dp-section__title {
	margin: 0;
	font-size: 21px;
	font-weight: 700;
	line-height: 1.25;
	letter-spacing: -0.02em;
	color: var(--mt-ink);
}

.dp-section__body {
	margin-top: 10px;
}

.dp-subsection-list {
	display: flex;
	flex-direction: column;
	gap: 12px;
	margin-top: 18px;
}

.dp-subsection {
	background: var(--mt-muted);
	border-radius: var(--radius-box);
	padding: 16px 18px;
}

.dp-subsection__title {
	margin: 0 0 8px;
	font-size: 15.5px;
	font-weight: 650;
	letter-spacing: -0.012em;
	color: var(--mt-ink);
}
</style>
