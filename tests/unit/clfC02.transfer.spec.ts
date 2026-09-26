import { describe, it, expect } from 'vitest';
import { TODAS_LAS_PREGUNTAS } from '@/data/clfC02/registroContenido';
import {
	crearAleatorioSemilla,
	esOrdenSensible,
	permutarOpciones,
	prepararSesion,
} from '@/lib/clfC02Practice';

describe('clfC02 · anti-overfitting de opciones', () => {
	it('permuta opciones sin mutar la original y conserva la opción correcta', () => {
		const pregunta = TODAS_LAS_PREGUNTAS[0];
		const antes = [...pregunta.options];
		const correctaAntes = pregunta.options[pregunta.correctAnswer];

		const permutada = permutarOpciones(pregunta, crearAleatorioSemilla(11));

		expect(pregunta.options).toEqual(antes);
		expect(permutada.options).toHaveLength(antes.length);
		expect([...permutada.options].sort()).toEqual([...antes].sort());
		expect(permutada.options[permutada.correctAnswer]).toBe(correctaAntes);
	});

	it('detecta opciones con orden significativo', () => {
		expect(esOrdenSensible(['Todas las anteriores', 'Solo A', 'Solo B', 'Solo C'])).toBe(true);
		expect(esOrdenSensible(['Amazon S3', 'Amazon EBS', 'Amazon EFS', 'AWS Backup'])).toBe(false);
	});

	it('deja intactas las preguntas con opciones sensibles al orden', () => {
		const sensible = { ...TODAS_LAS_PREGUNTAS[0], options: ['Todas las anteriores', 'A', 'B', 'C'] };
		const resultado = permutarOpciones(sensible, crearAleatorioSemilla(3));
		expect(resultado).toBe(sensible);
	});

	it('reparte la posición de la respuesta sin sesgo tras preparar la sesión', () => {
		const conteo = [0, 0, 0, 0];
		const muestras = 200;
		for (let semilla = 0; semilla < muestras; semilla += 1) {
			const rng = crearAleatorioSemilla(semilla + 1);
			for (const pregunta of prepararSesion(TODAS_LAS_PREGUNTAS, rng)) {
				if (pregunta.options.length !== 4) continue;
				conteo[pregunta.correctAnswer] += 1;
			}
		}
		const total = conteo.reduce((acumulado, valor) => acumulado + valor, 0);
		expect(total).toBeGreaterThan(0);
		for (const posicion of conteo) {
			const cuota = posicion / total;
			expect(cuota).toBeGreaterThan(0.2);
			expect(cuota).toBeLessThan(0.3);
		}
	});

	it('también reparte la posición en las preguntas de respuesta múltiple', () => {
		const multiples = TODAS_LAS_PREGUNTAS.filter(
			(pregunta) => pregunta.options.length === 5,
		);
		expect(multiples.length).toBeGreaterThan(0);
		const conteo = [0, 0, 0, 0, 0];
		const muestras = 200;
		for (let semilla = 0; semilla < muestras; semilla += 1) {
			const rng = crearAleatorioSemilla(semilla + 1);
			for (const pregunta of prepararSesion(multiples, rng)) {
				for (const indice of pregunta.correctAnswers ?? []) {
					conteo[indice] += 1;
				}
			}
		}
		const total = conteo.reduce((acumulado, valor) => acumulado + valor, 0);
		expect(total).toBeGreaterThan(0);
		for (const posicion of conteo) {
			expect(posicion / total).toBeLessThan(0.4);
		}
	});
});
