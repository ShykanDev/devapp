<template>
	<textarea
		ref="textareaRef"
		v-model="model"
		class="field field--area"
		v-bind="$attrs"
	></textarea>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineOptions({ inheritAttrs: false });

const model = defineModel<string>({ default: '' });

const textareaRef = ref<HTMLTextAreaElement | null>(null);

defineExpose({
	focus: () => textareaRef.value?.focus(),
	blur: () => textareaRef.value?.blur(),
});
</script>
