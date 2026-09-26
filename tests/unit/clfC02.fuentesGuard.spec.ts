import { describe, it, expect } from 'vitest';
import { TODAS_LAS_PREGUNTAS } from '@/data/clfC02/registroContenido';
import { TODAS_LAS_PREGUNTAS_PROFESIONAL } from '@/data/clfC02/profesional/registro';
import { URLS_FUENTES_OFICIALES, urlDeServicio } from '@/data/clfC02/fuentes';
import { serviciosCitadosConAlias } from '@/data/clfC02/citas';
import type { PreguntaBaseClfC02 } from '@/data/clfC02/types';

const BANCOS: Array<{ banca: string; pregunta: PreguntaBaseClfC02 }> = [
	...TODAS_LAS_PREGUNTAS.map((pregunta) => ({ banca: 'estandar', pregunta })),
	...TODAS_LAS_PREGUNTAS_PROFESIONAL.map((pregunta) => ({ banca: 'profesional', pregunta })),
];

const PREFIJOS_OFICIALES = ['https://docs.aws.amazon.com/', 'https://aws.amazon.com/'];

function textoItem(pregunta: PreguntaBaseClfC02): string {
	return [
		pregunta.question,
		...pregunta.options,
		...(pregunta.porQueOpcion ?? []),
		pregunta.explanation ?? '',
	].join(' ');
}

/** G9 — trazabilidad de fuentes oficiales. */
describe('clfC02 · guardrail de fuentes oficiales (G9)', () => {
	it('toda pregunta declara al menos una fuente oficial', () => {
		const fallos = BANCOS.filter(({ pregunta }) => (pregunta.fuentes ?? []).length === 0).map(
			({ pregunta }) => pregunta.id,
		);
		expect(fallos, `preguntas sin fuentes:\n${fallos.join('\n')}`).toEqual([]);
	});

	it('toda URL declarada es oficial y pertenece al registro', () => {
		const fallos: string[] = [];
		for (const { pregunta } of BANCOS) {
			for (const url of pregunta.fuentes ?? []) {
				if (!PREFIJOS_OFICIALES.some((prefijo) => url.startsWith(prefijo))) {
					fallos.push(`${pregunta.id}: fuente no oficial ${url}`);
				} else if (!URLS_FUENTES_OFICIALES.has(url)) {
					fallos.push(`${pregunta.id}: URL fuera del registro ${url}`);
				}
			}
		}
		expect(fallos, `fuentes inválidas:\n${fallos.join('\n')}`).toEqual([]);
	});

	it('todo servicio citado en el ítem tiene su fuente en el ítem', () => {
		const fallos: string[] = [];
		for (const { pregunta } of BANCOS) {
			const fuentes = new Set(pregunta.fuentes ?? []);
			for (const servicio of serviciosCitadosConAlias(textoItem(pregunta))) {
				const url = urlDeServicio(servicio);
				if (url && !fuentes.has(url)) {
					fallos.push(`${pregunta.id}: cita ${servicio} sin su fuente`);
				}
			}
		}
		expect(fallos, `servicios citados sin fuente:\n${fallos.join('\n')}`).toEqual([]);
	});
});
