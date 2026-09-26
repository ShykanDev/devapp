import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import ClfPracticeRunner from '@/components/clfC02/ClfPracticeRunner.vue';
import type { PreguntaClfC02 } from '@/data/clfC02/types';

const multiple: PreguntaClfC02 = {
	id: 'm-runner',
	taskId: '3.1',
	objetivos: ['3.1#1'],
	tipo: 'conocimiento',
	formato: 'multiple',
	question: '¿Qué dos opciones son repetibles y versionables? (Elige DOS)',
	options: ['Plantillas', 'Papel', 'API/CLI', 'Correo', 'Memoria'],
	correctAnswer: 0,
	correctAnswers: [0, 2],
	explanation: 'Plantillas y API/CLI son repetibles. Si cambia el requisito, cambia la herramienta.',
	porQueOpcion: [
		'Correcta: las plantillas se versionan.',
		'Incorrecta: el papel no es reproducible.',
		'Correcta: la API o CLI automatizan.',
		'Incorrecta: el correo es manual.',
		'Incorrecta: la memoria no audita.',
	],
};

async function montar(pregunta: PreguntaClfC02 = multiple) {
	const wrapper = mount(ClfPracticeRunner, {
		props: { preguntas: [pregunta], modo: 'practica' },
	});
	await wrapper.vm.$nextTick();
	return wrapper;
}

describe('clfC02 · runner de respuesta múltiple', () => {
	it('renderiza las 5 opciones y exige comprobar antes de revelar', async () => {
		const wrapper = await montar();
		const opciones = wrapper.findAll('.clf-runner__option');
		expect(opciones).toHaveLength(5);
		expect(wrapper.find('.clf-runner__feedback').exists()).toBe(false);

		await opciones[0].trigger('click');
		await opciones[2].trigger('click');
		expect(wrapper.find('.clf-runner__feedback').exists()).toBe(false);

		const comprobar = wrapper.findAll('button').find((boton) => boton.text().includes('Comprobar'));
		expect(comprobar).toBeTruthy();
		await comprobar?.trigger('click');
		await wrapper.vm.$nextTick();

		expect(wrapper.find('.clf-runner__feedback').exists()).toBe(true);
		expect(wrapper.text()).toContain('Correcto');
		expect(wrapper.findAll('.clf-runner__why-item')).toHaveLength(5);
	});

	it('marcar todas las opciones no acierta', async () => {
		const wrapper = await montar();
		const opciones = wrapper.findAll('.clf-runner__option');
		for (const opcion of opciones) await opcion.trigger('click');
		const comprobar = wrapper.findAll('button').find((boton) => boton.text().includes('Comprobar'));
		await comprobar?.trigger('click');
		await wrapper.vm.$nextTick();
		expect(wrapper.text()).toContain('Incorrecto');
	});
});
