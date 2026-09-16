<template>
	<RouterLink
		v-if="to"
		:to="to"
		class="btn"
		:class="classes"
		:aria-disabled="disabled || undefined"
	>
		<span v-if="$slots.start" class="btn__icon"><slot name="start" /></span>
		<slot />
		<span v-if="$slots.end" class="btn__icon"><slot name="end" /></span>
	</RouterLink>

	<a
		v-else-if="href"
		:href="href"
		class="btn"
		:class="classes"
		:aria-disabled="disabled || undefined"
	>
		<span v-if="$slots.start" class="btn__icon"><slot name="start" /></span>
		<slot />
		<span v-if="$slots.end" class="btn__icon"><slot name="end" /></span>
	</a>

	<button
		v-else
		:type="type"
		class="btn"
		:class="classes"
		:disabled="disabled"
	>
		<span v-if="$slots.start" class="btn__icon"><slot name="start" /></span>
		<slot />
		<span v-if="$slots.end" class="btn__icon"><slot name="end" /></span>
	</button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

const props = withDefaults(
	defineProps<{
		variant?: 'solid' | 'outline' | 'clear';
		size?: 'default' | 'small';
		block?: boolean;
		iconOnly?: boolean;
		disabled?: boolean;
		type?: 'button' | 'submit';
		to?: string | Record<string, unknown>;
		href?: string;
	}>(),
	{
		variant: 'solid',
		size: 'default',
		block: false,
		iconOnly: false,
		disabled: false,
		type: 'button',
	}
);

const classes = computed(() => ({
	[`btn--${props.variant}`]: props.variant !== 'solid',
	'btn--small': props.size === 'small',
	'btn--block': props.block,
	'btn--icon': props.iconOnly,
}));
</script>
