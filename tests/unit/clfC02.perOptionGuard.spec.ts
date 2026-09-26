import { describe, it, expect } from 'vitest';
import { TODAS_LAS_PREGUNTAS } from '@/data/clfC02/registroContenido';
import { TODAS_LAS_PREGUNTAS_PROFESIONAL } from '@/data/clfC02/profesional/registro';
import type { PreguntaBaseClfC02 } from '@/data/clfC02/types';

const BANCOS: PreguntaBaseClfC02[] = [
	...TODAS_LAS_PREGUNTAS,
	...TODAS_LAS_PREGUNTAS_PROFESIONAL,
];

/**
 * Guardrail de razonamiento por opción (D6, §0b). Cada opción —correcta e
 * incorrecta— debe explicar por qué lo es, igual que el formato oficial
 * `Why this is correct` / `Why this would be incorrect`.
 */
describe('clfC02 · guardrail de razonamiento por opción', () => {
	it('cada pregunta razona todas sus opciones', () => {
		const fallos: string[] = [];
		for (const pregunta of BANCOS) {
			if (!pregunta.porQueOpcion) {
				fallos.push(`${pregunta.id}: sin porQueOpcion`);
				continue;
			}
			if (pregunta.porQueOpcion.length !== pregunta.options.length) {
				fallos.push(
					`${pregunta.id}: ${pregunta.porQueOpcion.length} motivos para ${pregunta.options.length} opciones`,
				);
			}
			if (pregunta.porQueOpcion.some((motivo) => motivo.trim().length === 0)) {
				fallos.push(`${pregunta.id}: motivo vacío`);
			}
		}
		expect(fallos, `razonamiento por opción incompleto:\n${fallos.join('\n')}`).toEqual([]);
	});

	it('la opción correcta se explica como correcta y ningún distractor se etiqueta como correcto', () => {
		const fallos: string[] = [];
		for (const pregunta of BANCOS) {
			if (!pregunta.porQueOpcion) continue;
			const correctas =
				pregunta.formato === 'multiple'
					? pregunta.correctAnswers ?? [pregunta.correctAnswer]
					: [pregunta.correctAnswer];
			pregunta.porQueOpcion.forEach((motivo, indice) => {
				const texto = motivo.trim();
				const esCorrecta = correctas.includes(indice);
				const empiezaCorrecta = /^correcta\b/i.test(texto);
				if (esCorrecta && !/correcta/i.test(texto.slice(0, 40))) {
					fallos.push(`${pregunta.id}[${indice}]: debería explicar por qué es correcta`);
				}
				if (!esCorrecta && empiezaCorrecta) {
					fallos.push(`${pregunta.id}[${indice}]: un distractor no puede etiquetarse como correcto`);
				}
			});
		}
		expect(fallos, `justificación desalineada:\n${fallos.join('\n')}`).toEqual([]);
	});
});
