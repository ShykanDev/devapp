import { describe, it, expect } from 'vitest';
import { serviciosEnAlcanceClfC02 } from '@/data/clfC02';
import { evaluarServicio } from '@/data/clfC02/auditoriaServicios';

/**
 * Guardrail de cobertura de servicios en el banco (G2).
 *
 * Cierra el gap de los 16 servicios in-scope que no aparecían en ninguna
 * pregunta, opción o grupo. Se exige que el chequeo `banco` de la rúbrica pase
 * para los 111 servicios del núcleo.
 */
describe('clfC02 · guardrail de cobertura de servicios (G2)', () => {
	const servicios = Object.entries(serviciosEnAlcanceClfC02).flatMap(([categoria, nombres]) =>
		nombres.map((nombre) => ({ nombre, rubrica: evaluarServicio(nombre, categoria) })),
	);

	it('todo servicio in-scope aparece en el banco de preguntas o grupos', () => {
		const fallan = servicios
			.filter(({ rubrica }) => !rubrica.chequeos.find((item) => item.id === 'banco')?.cumple)
			.map(({ nombre }) => nombre);
		expect(fallan, `servicios sin banco:\n${fallan.join(' | ')}`).toEqual([]);
	});
});
