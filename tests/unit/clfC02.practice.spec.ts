import { describe, it, expect } from 'vitest';
import { dominiosClfC02 } from '@/data/clfC02';
import { TASK_POR_ID } from '@/data/clfC02/blueprint-ext';
import { TODAS_LAS_PREGUNTAS } from '@/data/clfC02/registroContenido';
import {
	AVISO_ORIENTATIVO,
	construirExamenFinal,
	construirPracticaDebil,
	construirPracticaDominio,
	construirPracticaTask,
	construirSesionRepaso,
	crearAleatorioSemilla,
	cuotaExamenFinal,
	cuotasExamenFinal,
	distribucionPorDominio,
	mezclar,
	puntuarIntento,
} from '@/lib/clfC02Practice';

const rng = () => crearAleatorioSemilla(20260924);
const hayBanco = TODAS_LAS_PREGUNTAS.length > 0;

function idsUnicos(preguntas: Array<{ id: string }>): boolean {
	return new Set(preguntas.map((pregunta) => pregunta.id)).size === preguntas.length;
}

describe('clfC02 · práctica por task y dominio', () => {
	it('construye la práctica de una task con su banco y sin repetidos', () => {
		const resultado = construirPracticaTask('3.6', { rng: rng() });
		if (!hayBanco) {
			expect(resultado.ok).toBe(false);
			return;
		}
		const banco = TODAS_LAS_PREGUNTAS.filter((pregunta) => pregunta.taskId === '3.6');
		expect(banco.length).toBeGreaterThan(0);
		expect(resultado.ok).toBe(true);
		if (!resultado.ok) return;
		expect(idsUnicos(resultado.preguntas)).toBe(true);
		expect(resultado.preguntas.every((pregunta) => pregunta.taskId === '3.6')).toBe(true);
		expect(resultado.avisos).toContain(AVISO_ORIENTATIVO);
	});

	it('avisa cuando se piden más preguntas que las disponibles', () => {
		if (!hayBanco) return;
		const resultado = construirPracticaTask('3.6', { n: 999, rng: rng() });
		expect(resultado.ok).toBe(true);
		if (!resultado.ok) return;
		expect(resultado.avisos.some((aviso) => aviso.includes('Banco incompleto'))).toBe(true);
	});

	it('rechaza una task desconocida sin preguntas', () => {
		const resultado = construirPracticaTask('9.9', { rng: rng() });
		expect(resultado.ok).toBe(false);
	});

	it('practica un dominio con su banco disponible', () => {
		const resultado = construirPracticaDominio('dominio-3', { n: 999, rng: rng() });
		if (!hayBanco) {
			expect(resultado.ok).toBe(false);
			return;
		}
		expect(resultado.ok).toBe(true);
		if (!resultado.ok) return;
		expect(idsUnicos(resultado.preguntas)).toBe(true);
		expect(resultado.preguntas.every((pregunta) => pregunta.taskId.startsWith('3.'))).toBe(true);
	});

	it('no permite practicar un dominio inexistente', () => {
		const resultado = construirPracticaDominio('dominio-9', { rng: rng() });
		expect(resultado.ok).toBe(false);
		if (!resultado.ok) expect(resultado.motivo).toContain('no existe');
	});
});

describe('clfC02 · examen final', () => {
	it('declara cuotas ponderadas que suman 65', () => {
		const cuotas = cuotasExamenFinal();
		expect(Object.values(cuotas).reduce((total, cuota) => total + cuota, 0)).toBe(65);
		expect(cuotas['dominio-3']).toBe(22);
		expect(cuotaExamenFinal(34)).toBe(22);
		for (const dominio of dominiosClfC02) {
			expect(Math.abs((cuotas[dominio.id] ?? 0) - (dominio.peso / 100) * 65)).toBeLessThanOrEqual(1);
		}
	});

	it('construye el examen final completo sin repetidos cuando el banco lo permite', () => {
		const resultado = construirExamenFinal({ rng: rng() });
		if (!resultado.ok) {
			expect(resultado.motivo).toContain('banco completo');
			return;
		}
		expect(resultado.preguntas).toHaveLength(65);
		expect(idsUnicos(resultado.preguntas)).toBe(true);
	});

	it('distribuye el banco por dominio según el blueprint', () => {
		const distribucion = distribucionPorDominio(TODAS_LAS_PREGUNTAS);
		const esperado: Record<string, number> = {};
		for (const pregunta of TODAS_LAS_PREGUNTAS) {
			const dominioId = TASK_POR_ID[pregunta.taskId]?.dominioId ?? '';
			esperado[dominioId] = (esperado[dominioId] ?? 0) + 1;
		}
		expect(distribucion).toEqual(esperado);
		expect(Object.values(distribucion).reduce((total, n) => total + n, 0)).toBe(
			TODAS_LAS_PREGUNTAS.length
		);
	});
});

describe('clfC02 · práctica de debilidades y repaso', () => {
	it('filtra preguntas por los objectives seleccionados', () => {
		const resultado = construirPracticaDebil(['3.6#2'], { rng: rng() });
		if (!hayBanco) {
			expect(resultado.ok).toBe(false);
			return;
		}
		expect(resultado.ok).toBe(true);
		if (!resultado.ok) return;
		expect(resultado.preguntas.length).toBeGreaterThan(0);
		expect(resultado.preguntas.every((pregunta) => pregunta.objetivos.includes('3.6#2'))).toBe(true);
	});

	it('rechaza una selección sin preguntas', () => {
		const resultado = construirPracticaDebil(['9.9#1'], { rng: rng() });
		expect(resultado.ok).toBe(false);
	});

	it('construye una sesión de repaso mixta', () => {
		if (!hayBanco) return;
		const resultado = construirSesionRepaso(['3.6#2'], { n: 4, rng: rng() });
		if (!resultado.ok) return;
		expect(resultado.preguntas.length).toBeGreaterThan(0);
	});
});

describe('clfC02 · puntuación', () => {
	it('cuenta aciertos, falladas y desglose por dominio y objective', () => {
		if (!hayBanco) {
			const vacio = puntuarIntento([], {});
			expect(vacio.total).toBe(0);
			expect(vacio.porcentaje).toBe(0);
			return;
		}
		const preguntas = TODAS_LAS_PREGUNTAS.slice(0, 4);
		expect(preguntas).toHaveLength(4);
		const respuestas: Record<string, number> = {};
		respuestas[preguntas[0].id] = preguntas[0].correctAnswer;
		respuestas[preguntas[1].id] = (preguntas[1].correctAnswer + 1) % 4;
		respuestas[preguntas[2].id] = preguntas[2].correctAnswer;

		const puntaje = puntuarIntento(preguntas, respuestas);
		expect(puntaje.total).toBe(4);
		expect(puntaje.correctas).toBe(2);
		expect(puntaje.porcentaje).toBe(50);
		expect(puntaje.orientativo).toBe(AVISO_ORIENTATIVO);
		expect(puntaje.porObjetivo.length).toBeGreaterThan(0);
		for (const objetivo of puntaje.porObjetivo) {
			expect(objetivo.porcentaje).toBeGreaterThanOrEqual(0);
			expect(objetivo.porcentaje).toBeLessThanOrEqual(100);
		}
	});

	it('devuelve 0% sin preguntas', () => {
		const puntaje = puntuarIntento([], {});
		expect(puntaje.total).toBe(0);
		expect(puntaje.porcentaje).toBe(0);
	});
});

describe('clfC02 · utilidades deterministas', () => {
	it('mezcla sin mutar el arreglo original y de forma reproducible con semilla', () => {
		const original = [1, 2, 3, 4, 5, 6];
		const copia = [...original];
		const primera = mezclar(original, crearAleatorioSemilla(7));
		const segunda = mezclar(original, crearAleatorioSemilla(7));
		expect(original).toEqual(copia);
		expect(primera).toEqual(segunda);
		expect([...primera].sort()).toEqual(copia);
	});
});
