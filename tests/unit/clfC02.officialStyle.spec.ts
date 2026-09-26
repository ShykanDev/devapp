import { describe, it, expect } from 'vitest';
import { serviciosEnAlcanceClfC02 } from '@/data/clfC02';
import { esEtiquetaEnAlcance, esServicioReconocible, TERMINOS_MATERIAL_OFICIAL } from '@/data/clfC02/alcance';
import { TODAS_LAS_PREGUNTAS } from '@/data/clfC02/registroContenido';
import { clfC02QuestionSchema } from '@/schemas/clfC02';

/**
 * Estilo oficial (§0b): opción única = 4 opciones / 1 correcta; respuesta
 * múltiple = 5 opciones / 2+ correctas con etiqueta visible `(Elige DOS)` o
 * `(Elige TRES)`. Incluye la decisión D7: los términos del material oficial
 * valen como distractores pero no engrosan el núcleo de 111 servicios.
 */
describe('clfC02 · guardrail de estilo oficial', () => {
	it('cada pregunta declara el número de opciones de su formato', () => {
		const fallos: string[] = [];
		for (const pregunta of TODAS_LAS_PREGUNTAS) {
			const multiple = pregunta.formato === 'multiple';
			const esperadas = multiple ? 5 : 4;
			if (pregunta.options.length !== esperadas) {
				fallos.push(`${pregunta.id}: ${pregunta.options.length} opciones`);
			}
		}
		expect(fallos, `formato de opciones incorrecto:\n${fallos.join('\n')}`).toEqual([]);
	});

	it('la opción única tiene una sola correcta y sin correctAnswers', () => {
		const fallos = TODAS_LAS_PREGUNTAS.filter(
			(pregunta) =>
				(pregunta.formato ?? 'single') === 'single' &&
				(pregunta.correctAnswer < 0 ||
					pregunta.correctAnswer > 3 ||
					pregunta.correctAnswers !== undefined),
		).map((pregunta) => pregunta.id);
		expect(fallos, `opción única mal formada:\n${fallos.join(' ')}`).toEqual([]);
	});

	it('la respuesta múltiple usa 5 opciones, 2+ correctas y etiqueta visible', () => {
		const multiples = TODAS_LAS_PREGUNTAS.filter(
			(pregunta) => pregunta.formato === 'multiple',
		);
		expect(multiples.length).toBeGreaterThan(0);
		const fallos: string[] = [];
		for (const pregunta of multiples) {
			const correctas = pregunta.correctAnswers ?? [];
			const etiqueta = pregunta.question.match(/\(Elige (DOS|TRES)\)/);
			if (pregunta.options.length !== 5) fallos.push(`${pregunta.id}: no tiene 5 opciones`);
			if (correctas.length < 2) fallos.push(`${pregunta.id}: menos de 2 correctas`);
			if (!correctas.includes(pregunta.correctAnswer)) {
				fallos.push(`${pregunta.id}: correctAnswer fuera de correctAnswers`);
			}
			if (!etiqueta) {
				fallos.push(`${pregunta.id}: sin etiqueta (Elige DOS/TRES)`);
			} else if (etiqueta[1] === 'DOS' && correctas.length !== 2) {
				fallos.push(`${pregunta.id}: etiqueta DOS con ${correctas.length} correctas`);
			} else if (etiqueta[1] === 'TRES' && correctas.length !== 3) {
				fallos.push(`${pregunta.id}: etiqueta TRES con ${correctas.length} correctas`);
			}
		}
		expect(fallos, `respuesta múltiple incorrecta:\n${fallos.join('\n')}`).toEqual([]);
	});

	it('todo el banco estándar cumple el esquema CLF propio', () => {
		const invalidas = TODAS_LAS_PREGUNTAS.filter(
			(pregunta) => !clfC02QuestionSchema.safeParse(pregunta).success,
		).map((pregunta) => pregunta.id);
		expect(invalidas, `preguntas inválidas:\n${invalidas.join(' ')}`).toEqual([]);
	});
});

describe('clfC02 · alcance (decisión D7)', () => {
	it('mantiene exactamente 111 servicios in-scope', () => {
		const total = Object.values(serviciosEnAlcanceClfC02).flat().length;
		expect(total).toBe(111);
	});

	it('admite los términos del material oficial como distractores, no como núcleo', () => {
		for (const termino of ['Elastic Load Balancing (ELB)', 'Amazon DynamoDB Accelerator (DAX)', 'AWS Systems Manager OpsCenter']) {
			expect(TERMINOS_MATERIAL_OFICIAL.has(termino), `falta ${termino}`).toBe(true);
			expect(esEtiquetaEnAlcance(termino), `${termino} debería ser citable`).toBe(true);
		}
		expect(esServicioReconocible('Elastic Load Balancing (ELB)')).toBe(false);
		expect(esServicioReconocible('Amazon DynamoDB Accelerator (DAX)')).toBe(false);
	});

	it('no incluye términos del material oficial en la lista de 111', () => {
		const nucleo = new Set(Object.values(serviciosEnAlcanceClfC02).flat());
		for (const termino of TERMINOS_MATERIAL_OFICIAL) {
			expect(nucleo.has(termino), `${termino} no debe contar como núcleo`).toBe(false);
		}
	});
});
