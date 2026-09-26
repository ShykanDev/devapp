import { describe, it, expect } from 'vitest';
import { TODAS_LAS_PREGUNTAS } from '@/data/clfC02/registroContenido';
import { TODAS_LAS_PREGUNTAS_PROFESIONAL } from '@/data/clfC02/profesional/registro';
import type { PreguntaBaseClfC02 } from '@/data/clfC02/types';
import { TASK_POR_ID } from '@/data/clfC02/blueprint-ext';
import { esItemConRuido, MINIMOS_RUIDO_POR_DOMINIO } from '@/data/clfC02/ruido';

const BANCOS: PreguntaBaseClfC02[] = [
	...TODAS_LAS_PREGUNTAS,
	...TODAS_LAS_PREGUNTAS_PROFESIONAL,
];

/** G10 — escenarios con ruido/restricciones bajo criterio fijo. */
describe('clfC02 · guardrail de escenarios con ruido (G10)', () => {
	it('cada dominio alcanza el mínimo de ítems con ruido y restricción', () => {
		const conteo: Record<string, number> = {};
		for (const pregunta of BANCOS) {
			if (!esItemConRuido(pregunta)) continue;
			const dominioId = TASK_POR_ID[pregunta.taskId]?.dominioId ?? 'desconocido';
			conteo[dominioId] = (conteo[dominioId] ?? 0) + 1;
		}
		const fallos = Object.entries(MINIMOS_RUIDO_POR_DOMINIO)
			.filter(([dominioId, minimo]) => (conteo[dominioId] ?? 0) < minimo)
			.map(
				([dominioId, minimo]) =>
					`${dominioId}: ${conteo[dominioId] ?? 0} con ruido (mínimo ${minimo})`,
			);
		expect(fallos, `dominios por debajo del mínimo:\n${fallos.join('\n')}`).toEqual([]);
	});
});
