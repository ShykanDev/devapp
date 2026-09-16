import { beforeEach, describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { createMemoryHistory, createRouter, type RouteRecordRaw } from 'vue-router';
import AifOverview from '@/views/aifC01/AifOverview.vue';
import AifDomain from '@/views/aifC01/AifDomain.vue';
import AifTask from '@/views/aifC01/AifTask.vue';
import AifComparisons from '@/views/aifC01/AifComparisons.vue';
import AifWeak from '@/views/aifC01/AifWeak.vue';
import AifReview from '@/views/aifC01/AifReview.vue';
import AifPractice from '@/views/aifC01/AifPractice.vue';
import AifGlossary from '@/views/aifC01/AifGlossary.vue';
import AifServices from '@/views/aifC01/AifServices.vue';
import AifSearch from '@/views/aifC01/AifSearch.vue';
import AifCoverage from '@/views/aifC01/AifCoverage.vue';
import { TODOS_LOS_PARES } from '@/data/aifC01/registroContenido';
import { reiniciarProgresoAifC01 } from '@/lib/aifC01Progress';

const rutas: RouteRecordRaw[] = [
	{ path: '/ai-practitioner', component: { template: '<div />' } },
	{ path: '/ai-practitioner/dominio/:domainId', component: { template: '<div />' } },
	{ path: '/ai-practitioner/task/:taskId', component: { template: '<div />' } },
	{ path: '/ai-practitioner/comparaciones', component: { template: '<div />' } },
	{ path: '/ai-practitioner/debiles', component: { template: '<div />' } },
	{ path: '/ai-practitioner/repaso', component: { template: '<div />' } },
	{ path: '/ai-practitioner/practica/:scope', component: { template: '<div />' } },
	{ path: '/ai-practitioner/glosario', component: { template: '<div />' } },
	{ path: '/ai-practitioner/servicios', component: { template: '<div />' } },
	{ path: '/ai-practitioner/buscar', component: { template: '<div />' } },
	{ path: '/ai-practitioner/cobertura', component: { template: '<div />' } },
];

async function montarEn(
	componente: Parameters<typeof mount>[0],
	ruta: string,
	query: Record<string, string> = {}
) {
	const router = createRouter({ history: createMemoryHistory(), routes: rutas });
	await router.push({ path: ruta, query });
	await router.isReady();
	const wrapper = mount(componente, { global: { plugins: [router] } });
	await wrapper.vm.$nextTick();
	return wrapper;
}

beforeEach(() => {
	localStorage.clear();
	reiniciarProgresoAifC01();
});

describe('aifC01 · montaje de vistas', () => {
	it('monta el overview con las 5 tarjetas de dominio', async () => {
		const wrapper = await montarEn(AifOverview, '/ai-practitioner');
		expect(wrapper.text()).toContain('AWS Certified AI Practitioner');
		expect(wrapper.findAll('.aif-domain')).toHaveLength(5);
		expect(wrapper.text()).toContain('revisado');
	});

	it('monta el dominio 3 con sus 4 tasks y la práctica', async () => {
		const wrapper = await montarEn(AifDomain, '/ai-practitioner/dominio/dominio-3');
		expect(wrapper.text()).toContain('Dominio 3');
		expect(wrapper.findAll('.task-row')).toHaveLength(4);
		expect(wrapper.text()).toContain('Practicar Dominio 3');
	});

	it('monta el task 3.2 con contenido, objetivos y flashcards', async () => {
		const wrapper = await montarEn(AifTask, '/ai-practitioner/task/3.2');
		expect(wrapper.findAll('.grupo')).toHaveLength(6);
		expect(wrapper.findAll('.aif-deck__card')).toHaveLength(1);
		expect(wrapper.text()).toContain('Practicar 3.2');
	});

	it('monta una task con contenido completo (3.1) y otra inexistente', async () => {
		const conContenido = await montarEn(AifTask, '/ai-practitioner/task/3.1');
		expect(conContenido.findAll('.grupo').length).toBeGreaterThan(0);
		expect(conContenido.text()).toContain('Practicar 3.1');

		const inexistente = await montarEn(AifTask, '/ai-practitioner/task/9.9');
		expect(inexistente.text()).toContain('Task no encontrado');
	});

	it('monta la práctica del task con runner', async () => {
		const wrapper = await montarEn(AifPractice, '/ai-practitioner/practica/task-3.2');
		expect(wrapper.find('.aif-runner').exists()).toBe(true);
		expect(wrapper.text()).toContain('Task 3.2');
	});

	it('monta el examen final disponible con portada de inicio', async () => {
		const wrapper = await montarEn(AifPractice, '/ai-practitioner/practica/final');
		expect(wrapper.text()).toContain('Comenzar examen');
		expect(wrapper.text()).not.toContain('Práctica no disponible');
	});

	it('monta comparaciones, debilidades, repaso y referencia', async () => {
		const comparaciones = await montarEn(AifComparisons, '/ai-practitioner/comparaciones');
		expect(comparaciones.findAll('.aif-pair')).toHaveLength(TODOS_LOS_PARES.length);
		expect(TODOS_LOS_PARES.length).toBeGreaterThanOrEqual(14);

		// Sin evidencia, las debilidades son los objectives sin practicar (prioridad 2 del plan).
		const debiles = await montarEn(AifWeak, '/ai-practitioner/debiles');
		expect(debiles.findAll('.weak-row').length).toBeGreaterThanOrEqual(5);
		expect(debiles.text()).toContain('sin practicar todavía');

		const repaso = await montarEn(AifReview, '/ai-practitioner/repaso');
		expect(repaso.text()).toContain('Repaso dirigido');
		expect(repaso.text()).toContain('Comenzar repaso');

		const glosario = await montarEn(AifGlossary, '/ai-practitioner/glosario');
		expect(glosario.findAll('.aif-glossary__item').length).toBeGreaterThan(10);

		const servicios = await montarEn(AifServices, '/ai-practitioner/servicios');
		expect(servicios.findAll('.aif-service').length).toBeGreaterThanOrEqual(3);

		const buscar = await montarEn(AifSearch, '/ai-practitioner/buscar');
		expect(buscar.text()).toContain('Busca en');

		const cobertura = await montarEn(AifCoverage, '/ai-practitioner/cobertura');
		expect(cobertura.text()).toContain('5 dominios · 14 task statements · 69 objectives');
		expect(cobertura.text()).toContain('Sin hallazgos');
	});
});
