<template>
	<header class="app-header">
		<div class="app-header__bar">
			<div class="app-header__start">
				<button
					v-if="back"
					type="button"
					class="app-header__icon-btn"
					aria-label="Volver"
					@click="goBack"
				>
					<AppIcon :icon="chevronBack" :size="22" />
				</button>
				<button
					v-else-if="menu"
					type="button"
					class="app-header__icon-btn"
					aria-label="Abrir menú"
					@click="openMenu"
				>
					<AppIcon :icon="menuOutline" :size="22" />
				</button>
				<slot name="start" />
			</div>

			<h1 class="app-header__title">
				<slot>{{ title }}</slot>
			</h1>

			<div class="app-header__end">
				<slot name="end" />
			</div>
		</div>
	</header>
</template>

<script setup lang="ts">
import { chevronBack, menuOutline } from 'ionicons/icons';
import { useRouter } from 'vue-router';
import AppIcon from './AppIcon.vue';
import { openMenu } from './shell';

const props = withDefaults(
	defineProps<{
		title?: string;
		back?: boolean | string;
		menu?: boolean;
	}>(),
	{
		title: '',
		back: false,
		menu: true,
	}
);

const router = useRouter();

function goBack() {
	if (typeof props.back === 'string') {
		router.push(props.back);
		return;
	}
	if (window.history.length > 1) {
		router.back();
	} else {
		router.push('/');
	}
}
</script>
