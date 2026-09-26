import { describe, it, expect } from 'vitest';
import { TODAS_LAS_PREGUNTAS } from '@/data/clfC02/registroContenido';
import { TODAS_LAS_PREGUNTAS_PROFESIONAL } from '@/data/clfC02/profesional/registro';
import { urlDeServicio } from '@/data/clfC02/fuentes';
import { serviciosCitadosConAlias } from '@/data/clfC02/citas';
import type { PreguntaBaseClfC02 } from '@/data/clfC02/types';

const BANCOS: PreguntaBaseClfC02[] = [
	...TODAS_LAS_PREGUNTAS,
	...TODAS_LAS_PREGUNTAS_PROFESIONAL,
];

/**
 * G9 (fuente por opción, D-G9): toda opción que cite un servicio in-scope debe
 * estar respaldada por la fuente oficial de ese servicio en las `fuentes` del
 * ítem. No se exige un array independiente por opción.
 */
describe('clfC02 · guardrail de fuente por opción (G9)', () => {
	it('cada servicio citado en una opción está cubierto por las fuentes del ítem', () => {
		const fallos: string[] = [];
		for (const pregunta of BANCOS) {
			const fuentes = new Set(pregunta.fuentes ?? []);
			pregunta.options.forEach((opcion, indice) => {
				for (const servicio of serviciosCitadosConAlias(opcion)) {
					const url = urlDeServicio(servicio);
					if (url && !fuentes.has(url)) {
						fallos.push(`${pregunta.id}[${indice}]: ${servicio} sin fuente oficial`);
					}
				}
			});
		}
		expect(fallos, `opciones sin fuente:\n${fallos.join('\n')}`).toEqual([]);
	});
});
