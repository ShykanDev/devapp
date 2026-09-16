<template>
	<input ref="inputRef" v-model="model" class="field" v-bind="$attrs" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineOptions({ inheritAttrs: false });

const model = defineModel<string>({ default: '' });

const inputRef = ref<HTMLInputElement | null>(null);

defineExpose({
	focus: () => inputRef.value?.focus(),
	blur: () => inputRef.value?.blur(),
});
</script>
