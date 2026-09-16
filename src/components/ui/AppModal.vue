<template>
	<Teleport to="body">
		<Transition name="app-modal">
			<div
				v-if="model"
				class="app-modal"
				role="dialog"
				aria-modal="true"
				@click.self="close"
			>
				<div class="app-modal__panel">
					<slot />
				</div>
			</div>
		</Transition>
	</Teleport>
</template>

<script setup lang="ts">
import { onBeforeUnmount, watch } from 'vue';

const model = defineModel<boolean>({ default: false });

function close() {
	model.value = false;
}

function onKeydown(event: KeyboardEvent) {
	if (event.key === 'Escape') close();
}

watch(
	model,
	(open) => {
		if (typeof document === 'undefined') return;
		if (open) {
			document.body.style.overflow = 'hidden';
			window.addEventListener('keydown', onKeydown);
		} else {
			document.body.style.overflow = '';
			window.removeEventListener('keydown', onKeydown);
		}
	},
	{ immediate: true }
);

onBeforeUnmount(() => {
	if (typeof document !== 'undefined') document.body.style.overflow = '';
	if (typeof window !== 'undefined') window.removeEventListener('keydown', onKeydown);
});
</script>

<style scoped>
.app-modal {
	position: fixed;
	inset: 0;
	z-index: 1000;
	display: flex;
	align-items: flex-end;
	justify-content: center;
	background: rgba(0, 0, 0, 0.42);
}

.app-modal__panel {
	position: relative;
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 640px;
	max-height: 92vh;
	overflow: hidden;
	background: var(--mt-canvas);
	color: var(--mt-ink);
	border-radius: 20px 20px 0 0;
	box-shadow: var(--shadow-pop);
}

@media (min-width: 768px) {
	.app-modal {
		align-items: center;
		padding: 24px;
	}

	.app-modal__panel {
		border-radius: var(--radius-card);
		max-height: 86vh;
	}
}

.app-modal-enter-active,
.app-modal-leave-active {
	transition: opacity 0.2s ease;
}

.app-modal-enter-from,
.app-modal-leave-to {
	opacity: 0;
}
</style>
