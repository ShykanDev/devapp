import { describe, it, expect } from 'vitest';
import { dominiosAifC01 } from '@/data/aifC01';
import { TASK_POR_ID } from '@/data/aifC01/blueprint-ext';
import { TODAS_LAS_PREGUNTAS } from '@/data/aifC01/registroContenido';
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
} from '@/lib/aifC01Practice';

const rng = () => crearAleatorioSemilla(20260916);

function idsUnicos(preguntas: Array<{ id: string }>): boolean {
	return new Set(preguntas.map((pregunta) => pregunta.id)).size === preguntas.length;
}

describe('aifC01 · práctica por task y dominio', () => {
	it('construye la práctica de 3.2 con todo su banco y sin repetidos', () => {
		const banco32 = TODAS_LAS_PREGUNTAS.filter((pregunta) => pregunta.taskId === '3.2');
		const resultado = construirPracticaTask('3.2', { rng: rng() });
		expect(resultado.ok).toBe(true);
		if (!resultado.ok) return;
		expect(resultado.preguntas).toHaveLength(banco32.length);
		expect(idsUnicos(resultado.preguntas)).toBe(true);
		expect(resultado.preguntas.every((pregunta) => pregunta.taskId === '3.2')).toBe(true);
		expect(resultado.avisos).toContain(AVISO_ORIENTATIVO);
	});

	it('avisa cuando se piden más preguntas que las disponibles', () => {
		const banco32 = TODAS_LAS_PREGUNTAS.filter((pregunta) => pregunta.taskId === '3.2');
		const resultado = construirPracticaTask('3.2', { n: banco32.length + 18, rng: rng() });
		expect(resultado.ok).toBe(true);
		if (!resultado.ok) return;
		expect(resultado.preguntas).toHaveLength(banco32.length);
		expect(resultado.avisos.some((aviso) => aviso.includes('Banco incompleto'))).toBe(true);
	});

	it('rechaza una task desconocida sin preguntas', () => {
		const resultado = construirPracticaTask('9.9', { rng: rng() });
		expect(resultado.ok).toBe(false);
	});

	it('practica un dominio con todo su banco disponible y avisa si se pide de más', () => {
		const pool = TODAS_LAS_PREGUNTAS.filter((pregunta) => pregunta.taskId.startsWith('3.'));
		expect(pool.length).toBeGreaterThanOrEqual(20);

		const resultado = construirPracticaDominio('dominio-3', {
			n: pool.length + 5,
			rng: rng(),
		});
		expect(resultado.ok).toBe(true);
		if (!resultado.ok) return;
		expect(resultado.preguntas).toHaveLength(pool.length);
		expect(idsUnicos(resultado.preguntas)).toBe(true);
		expect(resultado.avisos.some((aviso) => aviso.includes('Banco incompleto'))).toBe(true);
		expect(resultado.preguntas.every((pregunta) => pregunta.taskId.startsWith('3.'))).toBe(true);
	});

	it('no permite practicar un dominio inexistente', () => {
		const resultado = construirPracticaDominio('dominio-9', { rng: rng() });
		expect(resultado.ok).toBe(false);
		if (!resultado.ok) expect(resultado.motivo).toContain('no existe');
	});
});

describe('aifC01 · examen final', () => {
	it('calcula cuotas ponderadas que suman 65', () => {
		const cuotas = cuotasExamenFinal();
		expect(Object.values(cuotas).reduce((total, cuota) => total + cuota, 0)).toBe(65);
		expect(cuotas['dominio-3']).toBe(18);
		expect(cuotaExamenFinal(28)).toBe(18);
		for (const dominio of dominiosAifC01) {
			expect(Math.abs((cuotas[dominio.id] ?? 0) - (dominio.peso / 100) * 65)).toBeLessThanOrEqual(1);
		}
	});

	it('construye el examen final completo sin repetidos', () => {
		const resultado = construirExamenFinal({ rng: rng() });
		expect(resultado.ok).toBe(true);
		if (!resultado.ok) return;
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

describe('aifC01 · práctica de debilidades y repaso', () => {
	it('filtra preguntas por los objectives seleccionados', () => {
		const resultado = construirPracticaDebil(['3.2#4'], { rng: rng() });
		expect(resultado.ok).toBe(true);
		if (!resultado.ok) return;
		expect(resultado.preguntas.length).toBeGreaterThan(0);
		expect(resultado.preguntas.every((pregunta) => pregunta.objetivos.includes('3.2#4'))).toBe(true);
	});

	it('prioriza las preguntas falladas sin repetirlas', () => {
		const falladas = TODAS_LAS_PREGUNTAS.filter((pregunta) => pregunta.objetivos.includes('3.2#4'))
			.slice(0, 2)
			.map((pregunta) => pregunta.id);
		const resultado = construirPracticaDebil(['3.2#4'], {
			n: 3,
			rng: rng(),
			priorizarFalladas: falladas,
		});
		expect(resultado.ok).toBe(true);
		if (!resultado.ok) return;
		expect(idsUnicos(resultado.preguntas)).toBe(true);
		expect(resultado.preguntas[0].id).toMatch(/^3\.2-q/);
		expect(falladas.length).toBeGreaterThan(0);
		expect(falladas).toContain(resultado.preguntas[0].id);
	});

	it('rechaza una selección sin preguntas', () => {
		const resultado = construirPracticaDebil(['9.9#1'], { rng: rng() });
		expect(resultado.ok).toBe(false);
	});

	it('construye una sesión de repaso mixta', () => {
		const resultado = construirSesionRepaso(['3.2#2', '3.2#4'], { n: 4, rng: rng() });
		expect(resultado.ok).toBe(true);
		if (!resultado.ok) return;
		expect(resultado.preguntas.length).toBeGreaterThan(0);
		expect(resultado.tarjetas.length).toBeGreaterThan(0);
		expect(resultado.pares.length).toBeGreaterThan(0);
	});
});

describe('aifC01 · puntuación', () => {
	it('cuenta aciertos, falladas y desglose por dominio y objective', () => {
		const preguntas = TODAS_LAS_PREGUNTAS.filter((pregunta) => pregunta.taskId === '3.2').slice(0, 4);
		expect(preguntas).toHaveLength(4);
		const respuestas: Record<string, number> = {};
		respuestas[preguntas[0].id] = preguntas[0].correctAnswer;
		respuestas[preguntas[1].id] = (preguntas[1].correctAnswer + 1) % 4;
		respuestas[preguntas[2].id] = preguntas[2].correctAnswer;
		// preguntas[3] queda sin responder y cuenta como fallada.

		const puntaje = puntuarIntento(preguntas, respuestas);
		expect(puntaje.total).toBe(4);
		expect(puntaje.correctas).toBe(2);
		expect(puntaje.porcentaje).toBe(50);
		expect(puntaje.falladas).toEqual([preguntas[1].id, preguntas[3].id]);
		expect(puntaje.orientativo).toBe(AVISO_ORIENTATIVO);
		expect(puntaje.porDominio).toHaveLength(1);
		expect(puntaje.porDominio[0].dominioId).toBe('dominio-3');
		expect(puntaje.porDominio[0].correctas).toBe(2);
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

describe('aifC01 · utilidades deterministas', () => {
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
