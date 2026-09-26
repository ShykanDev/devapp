import { describe, it, expect } from 'vitest';
import { taskStatementsClfC02, serviciosFueraDeAlcanceClfC02 } from '@/data/clfC02';
import { TODOS_LOS_IDS_OBJETIVO } from '@/data/clfC02/blueprint-ext';
import { evaluablesClfC02, tasksSinEvaluables } from '@/data/clfC02/evaluables';
import { reconocimientoClfC02 } from '@/data/clfC02/reconocimiento';
import { esEtiquetaEnAlcance, esServicioReconocible } from '@/data/clfC02/alcance';
import { TASK_POR_ID } from '@/data/clfC02/blueprint-ext';

describe('clfC02 · capa de capacidades evaluables', () => {
	it('cubre los 19 task statements del blueprint', () => {
		expect(tasksSinEvaluables()).toEqual([]);
		expect(evaluablesClfC02).toHaveLength(taskStatementsClfC02.length);
	});

	it('solo referencia objectives existentes y tasks reales', () => {
		for (const entrada of evaluablesClfC02) {
			expect(TASK_POR_ID[entrada.taskId]).toBeDefined();
			expect(entrada.queDebesPoder.length).toBeGreaterThan(0);
			expect(entrada.senalesDeEscenario.length).toBeGreaterThan(0);
			for (const capacidad of entrada.queDebesPoder) {
				expect(capacidad.objetivos.length).toBeGreaterThan(0);
				for (const objetivoId of capacidad.objetivos) {
					expect(TODOS_LOS_IDS_OBJETIVO).toContain(objetivoId);
				}
			}
		}
	});
});

describe('clfC02 · capa de reconocimiento de servicios', () => {
	it('solo propone servicios y conceptos del alcance oficial', () => {
		const invalidas: string[] = [];
		for (const familia of reconocimientoClfC02) {
			expect(TASK_POR_ID[familia.taskId]).toBeDefined();
			for (const caso of familia.casos) {
				if (!esServicioReconocible(caso.servicio)) invalidas.push(caso.servicio);
				for (const item of caso.descartar) {
					if (!esEtiquetaEnAlcance(item.servicio)) invalidas.push(item.servicio);
					expect(serviciosFueraDeAlcanceClfC02).not.toContain(item.servicio);
				}
			}
		}
		expect([...new Set(invalidas)], `etiquetas fuera de alcance`).toEqual([]);
	});

	it('cada familia entrena reconocimiento y conocimiento negativo', () => {
		expect(reconocimientoClfC02.length).toBeGreaterThanOrEqual(12);
		for (const familia of reconocimientoClfC02) {
			expect(familia.casos.length).toBeGreaterThanOrEqual(3);
			for (const caso of familia.casos) {
				expect(caso.descartar.length).toBeGreaterThanOrEqual(2);
				expect(caso.requisito.trim().length).toBeGreaterThan(0);
				expect(caso.porque.trim().length).toBeGreaterThan(0);
			}
		}
	});
});
