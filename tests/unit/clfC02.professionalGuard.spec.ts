import { describe, it, expect } from 'vitest';
import { TODAS_LAS_PREGUNTAS } from '@/data/clfC02/registroContenido';
import { TODAS_LAS_PREGUNTAS_PROFESIONAL } from '@/data/clfC02/profesional/registro';
import {
	correctaEsEstrictamenteMasLarga,
	jaccard,
	margenCorrecta,
	palabrasSignificativas,
	paresSimilares,
} from './clfC02.audit';

/**
 * Audit del banco profesional (A7, G7). Antes no existía: el banco profesional
 * quedaba fuera de los guardrails de sesgo y duplicados.
 */
describe('clfC02 · guardrail del banco profesional', () => {
	it('no tiene casi duplicados internos (similitud > 0,6)', () => {
		const similares = paresSimilares(TODAS_LAS_PREGUNTAS_PROFESIONAL, 0.6);
		expect(
			similares.map((par) => `${par.a} ~ ${par.b} (${par.similitud.toFixed(2)})`),
			'casi duplicados profesionales',
		).toEqual([]);
	});

	it('no replica enunciados del banco estándar (similitud > 0,6)', () => {
		const estandar = TODAS_LAS_PREGUNTAS.map((pregunta) => ({
			id: pregunta.id,
			palabras: palabrasSignificativas(pregunta.question),
		}));
		const fallos: string[] = [];
		for (const pregunta of TODAS_LAS_PREGUNTAS_PROFESIONAL) {
			const palabras = palabrasSignificativas(pregunta.question);
			for (const otra of estandar) {
				const similitud = jaccard(palabras, otra.palabras);
				if (similitud > 0.6) {
					fallos.push(`${pregunta.id} ~ ${otra.id} (${similitud.toFixed(2)})`);
				}
			}
		}
		expect(fallos, `duplicados entre bancos:\n${fallos.join('\n')}`).toEqual([]);
	});

	it('la correcta no es la estrictamente más larga en más del 20%', () => {
		const total = TODAS_LAS_PREGUNTAS_PROFESIONAL.length;
		const largas = TODAS_LAS_PREGUNTAS_PROFESIONAL.filter((pregunta) =>
			correctaEsEstrictamenteMasLarga(pregunta),
		).length;
		expect(total).toBeGreaterThan(0);
		expect(largas / total).toBeLessThan(0.2);
	});

	it('no hay ventaja de longitud superior a 25 caracteres', () => {
		const fallos = TODAS_LAS_PREGUNTAS_PROFESIONAL.filter(
			(pregunta) => margenCorrecta(pregunta) > 25,
		).map((pregunta) => pregunta.id);
		expect(fallos, `ventaja de longitud:\n${fallos.join(' ')}`).toEqual([]);
	});

	it('cada dominio y task profesional tiene banco suficiente', () => {
		const porTask = new Map<string, number>();
		for (const pregunta of TODAS_LAS_PREGUNTAS_PROFESIONAL) {
			porTask.set(pregunta.taskId, (porTask.get(pregunta.taskId) ?? 0) + 1);
		}
		const vacias = [...porTask.entries()].filter(([, total]) => total === 0);
		expect(vacias).toEqual([]);
		expect(porTask.size).toBe(19);
	});
});
