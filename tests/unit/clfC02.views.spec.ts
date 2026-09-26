import { beforeEach, describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { createMemoryHistory, createRouter, type RouteRecordRaw } from 'vue-router';
import ClfOverview from '@/views/clfC02/ClfOverview.vue';
import ClfDomain from '@/views/clfC02/ClfDomain.vue';
import ClfTask from '@/views/clfC02/ClfTask.vue';
import ClfComparisons from '@/views/clfC02/ClfComparisons.vue';
import ClfWeak from '@/views/clfC02/ClfWeak.vue';
import ClfReview from '@/views/clfC02/ClfReview.vue';
import ClfPractice from '@/views/clfC02/ClfPractice.vue';
import ClfGlossary from '@/views/clfC02/ClfGlossary.vue';
import ClfServices from '@/views/clfC02/ClfServices.vue';
import ClfSearch from '@/views/clfC02/ClfSearch.vue';
import ClfCoverage from '@/views/clfC02/ClfCoverage.vue';
import ClfProfessional from '@/views/clfC02/ClfProfessional.vue';
import ClfRecognition from '@/views/clfC02/ClfRecognition.vue';
import ClfEvaluables from '@/views/clfC02/ClfEvaluables.vue';
import ClfTransfer from '@/views/clfC02/ClfTransfer.vue';
import { TODOS_LOS_PARES, TAREAS_PENDIENTES } from '@/data/clfC02/registroContenido';
import { serviciosGeneralClfC02 } from '@/data/clfC02/servicios/general';
import { reconocimientoClfC02 } from '@/data/clfC02/reconocimiento';
import { evaluablesClfC02 } from '@/data/clfC02/evaluables';
import { transferenciaClfC02 } from '@/data/clfC02/transferencia';
import { construirExamenFinal } from '@/lib/clfC02Practice';
import { reiniciarProgresoClfC02 } from '@/lib/clfC02Progress';

const rutas: RouteRecordRaw[] = [
	{ path: '/cloud-practitioner', component: { template: '<div />' } },
	{ path: '/cloud-practitioner/dominio/:domainId', component: { template: '<div />' } },
	{ path: '/cloud-practitioner/task/:taskId', component: { template: '<div />' } },
	{ path: '/cloud-practitioner/comparaciones', component: { template: '<div />' } },
	{ path: '/cloud-practitioner/debiles', component: { template: '<div />' } },
	{ path: '/cloud-practitioner/repaso', component: { template: '<div />' } },
	{ path: '/cloud-practitioner/practica/:scope', component: { template: '<div />' } },
	{ path: '/cloud-practitioner/glosario', component: { template: '<div />' } },
	{ path: '/cloud-practitioner/servicios', component: { template: '<div />' } },
	{ path: '/cloud-practitioner/buscar', component: { template: '<div />' } },
	{ path: '/cloud-practitioner/cobertura', component: { template: '<div />' } },
	{ path: '/cloud-practitioner/profesional', component: { template: '<div />' } },
	{ path: '/cloud-practitioner/reconocimiento', component: { template: '<div />' } },
	{ path: '/cloud-practitioner/evaluables', component: { template: '<div />' } },
	{ path: '/cloud-practitioner/transferencia', component: { template: '<div />' } },
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
	reiniciarProgresoClfC02();
});

describe('clfC02 · montaje de vistas', () => {
	it('monta el overview con las 4 tarjetas de dominio', async () => {
		const wrapper = await montarEn(ClfOverview, '/cloud-practitioner');
		expect(wrapper.text()).toContain('AWS Certified Cloud Practitioner');
		expect(wrapper.findAll('.clf-domain')).toHaveLength(4);
		expect(wrapper.text()).toContain('revisado');
		expect(wrapper.text()).toContain('24 · 30 · 34 · 12');
	});

	it('monta el dominio 3 con sus 8 tasks', async () => {
		const wrapper = await montarEn(ClfDomain, '/cloud-practitioner/dominio/dominio-3');
		expect(wrapper.text()).toContain('Dominio 3');
		expect(wrapper.findAll('.task-row')).toHaveLength(8);
	});

	it('monta una task pendiente y una inexistente', async () => {
		const pendiente = await montarEn(ClfTask, '/cloud-practitioner/task/3.6');
		if (TAREAS_PENDIENTES.includes('3.6')) {
			expect(pendiente.text()).toContain('Contenido en preparación');
		} else {
			expect(pendiente.findAll('.grupo').length).toBeGreaterThan(0);
		}

		const inexistente = await montarEn(ClfTask, '/cloud-practitioner/task/9.9');
		expect(inexistente.text()).toContain('Task no encontrado');
	});

	it('monta la práctica del task según disponibilidad del banco', async () => {
		const wrapper = await montarEn(ClfPractice, '/cloud-practitioner/practica/task-3.6');
		if (TAREAS_PENDIENTES.includes('3.6')) {
			expect(wrapper.text()).toContain('Práctica no disponible');
		} else {
			expect(wrapper.find('.clf-runner').exists()).toBe(true);
		}
	});

	it('monta el examen final según disponibilidad del banco', async () => {
		const wrapper = await montarEn(ClfPractice, '/cloud-practitioner/practica/final');
		if (construirExamenFinal().ok) {
			expect(wrapper.text()).toContain('Comenzar examen');
		} else {
			expect(wrapper.text()).toContain('Práctica no disponible');
		}
	});

	it('monta el examen profesional con su estado de banco', async () => {
		const wrapper = await montarEn(ClfProfessional, '/cloud-practitioner/profesional');
		expect(
			wrapper.text().includes('Banco en preparación') ||
				wrapper.text().includes('Comenzar examen')
		).toBe(true);
	});

	it('monta comparaciones, debilidades, repaso, glosario, servicios, búsqueda y cobertura', async () => {
		const comparaciones = await montarEn(ClfComparisons, '/cloud-practitioner/comparaciones');
		expect(comparaciones.findAll('.clf-pair')).toHaveLength(TODOS_LOS_PARES.length);

		const debiles = await montarEn(ClfWeak, '/cloud-practitioner/debiles');
		expect(debiles.text()).toContain('Qué necesita repaso');

		const repaso = await montarEn(ClfReview, '/cloud-practitioner/repaso');
		expect(repaso.text()).toMatch(/Repaso|Nada que repasar/);

		const glosario = await montarEn(ClfGlossary, '/cloud-practitioner/glosario');
		expect(glosario.find('.clf-glossary').exists()).toBe(true);

		const servicios = await montarEn(ClfServices, '/cloud-practitioner/servicios');
		expect(servicios.findAll('.clf-service')).toHaveLength(serviciosGeneralClfC02.length);

		const buscar = await montarEn(ClfSearch, '/cloud-practitioner/buscar');
		expect(buscar.text()).toContain('Busca en');

		const cobertura = await montarEn(ClfCoverage, '/cloud-practitioner/cobertura');
		expect(cobertura.text()).toContain('4 dominios · 19 task statements · 135 objectives');
		expect(cobertura.text()).toContain('Sin hallazgos');
	});

	it('monta las capas de reconocimiento y de capacidades evaluables', async () => {
		const reconocimiento = await montarEn(ClfRecognition, '/cloud-practitioner/reconocimiento');
		expect(reconocimiento.findAll('.familia')).toHaveLength(reconocimientoClfC02.length);
		expect(reconocimiento.text()).toContain('Reconocer servicios');

		const evaluables = await montarEn(ClfEvaluables, '/cloud-practitioner/evaluables');
		expect(evaluables.findAll('.task')).toHaveLength(evaluablesClfC02.length);
		expect(evaluables.text()).toContain('Qué puede evaluar AWS');

		const transferencia = await montarEn(ClfTransfer, '/cloud-practitioner/transferencia');
		expect(transferencia.text()).toContain('Transferencia de escenarios');
		expect(transferencia.findAll('.escenario')).toHaveLength(transferenciaClfC02.length);
	});
});
