import { describe, it, expect } from 'vitest';
import { TODAS_LAS_PREGUNTAS } from '@/data/clfC02/registroContenido';
import { TODAS_LAS_PREGUNTAS_PROFESIONAL } from '@/data/clfC02/profesional/registro';
import { crearAleatorioSemilla, prepararSesion } from '@/lib/clfC02Practice';

/**
 * Guardrail de dispersión posicional real en sesión (G8). La barajadura de
 * runtime debe neutralizar el sesgo de posición del banco, incluido el
 * profesional, que antes no se medía. Se mide la posición efectiva tras
 * `prepararSesion`, no la posición cruda del banco.
 */
function distribucionTrasBarajar(
	preguntas: Array<{ options: string[]; correctAnswer: number }>,
	muestras = 200,
): number[] {
	const conteo = [0, 0, 0, 0];
	for (let semilla = 0; semilla < muestras; semilla += 1) {
		const rng = crearAleatorioSemilla(semilla + 1);
		for (const pregunta of prepararSesion(preguntas, rng)) {
			if (pregunta.options.length !== 4) continue;
			conteo[pregunta.correctAnswer] += 1;
		}
	}
	return conteo;
}

describe('clfC02 · guardrail de dispersión en sesión', () => {
	it('el banco estándar reparte la posición entre el 20% y el 30%', () => {
		const conteo = distribucionTrasBarajar(TODAS_LAS_PREGUNTAS);
		const total = conteo.reduce((acumulado, valor) => acumulado + valor, 0);
		expect(total).toBeGreaterThan(0);
		for (const posicion of conteo) {
			const cuota = posicion / total;
			expect(cuota).toBeGreaterThan(0.2);
			expect(cuota).toBeLessThan(0.3);
		}
	});

	it('el banco profesional reparte la posición tras barajar', () => {
		const conteo = distribucionTrasBarajar(TODAS_LAS_PREGUNTAS_PROFESIONAL);
		const total = conteo.reduce((acumulado, valor) => acumulado + valor, 0);
		expect(total).toBeGreaterThan(0);
		for (const posicion of conteo) {
			const cuota = posicion / total;
			expect(cuota).toBeGreaterThan(0.15);
			expect(cuota).toBeLessThan(0.4);
		}
	});
});
