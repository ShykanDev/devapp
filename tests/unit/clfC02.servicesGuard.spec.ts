import { describe, it, expect } from 'vitest';
import { serviciosEnAlcanceClfC02 } from '@/data/clfC02';
import { evaluarServicio } from '@/data/clfC02/auditoriaServicios';

/**
 * Guardrail de servicios in-scope (sección 5 y C4).
 *
 * Todo servicio del alcance oficial debe tener ficha enriquecida y un caso de
 * reconocimiento requisito → servicio. Las excepciones se declaran aquí con
 * motivo; el objetivo es que la lista quede vacía.
 */
export const SERVICIOS_CON_EXCEPCION: Record<string, string> = {};

describe('clfC02 · guardrail de servicios in-scope', () => {
	const servicios = Object.entries(serviciosEnAlcanceClfC02).flatMap(([categoria, nombres]) =>
		nombres.map((nombre) => ({ nombre, rubrica: evaluarServicio(nombre, categoria) })),
	);

	it('todo servicio in-scope tiene ficha enriquecida', () => {
		const fallan = servicios
			.filter(({ nombre, rubrica }) => {
				const chequeo = rubrica.chequeos.find((item) => item.id === 'ficha');
				return !chequeo?.cumple && !SERVICIOS_CON_EXCEPCION[nombre];
			})
			.map(({ nombre }) => nombre);
		expect(fallan, `sin ficha:\n${fallan.join(' | ')}`).toEqual([]);
	});

	it('todo servicio in-scope tiene caso de reconocimiento', () => {
		const fallan = servicios
			.filter(({ nombre, rubrica }) => {
				const chequeo = rubrica.chequeos.find((item) => item.id === 'reconocimiento');
				return !chequeo?.cumple && !SERVICIOS_CON_EXCEPCION[nombre];
			})
			.map(({ nombre }) => nombre);
		expect(fallan, `sin caso de reconocimiento:\n${fallan.join(' | ')}`).toEqual([]);
	});

	it('la rúbrica cubre exactamente el alcance oficial', () => {
		const nombresOficiales = Object.values(serviciosEnAlcanceClfC02).flat();
		const nombresEvaluados = servicios.map(({ nombre }) => nombre);
		const unicosOficiales = new Set(nombresOficiales);
		const unicosEvaluados = new Set(nombresEvaluados);

		expect(
			unicosEvaluados.size,
			`nombres duplicados entre servicios evaluados:\n${nombresEvaluados.join(' | ')}`,
		).toBe(nombresEvaluados.length);
		expect(
			[...unicosEvaluados].sort(),
			`servicios evaluados no coinciden con el alcance oficial`,
		).toEqual([...unicosOficiales].sort());
		for (const { nombre, rubrica } of servicios) {
			expect(rubrica.chequeos, `checks de ${nombre}`).toHaveLength(10);
		}
	});
});
