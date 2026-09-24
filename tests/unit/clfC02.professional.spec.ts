import { describe, it, expect } from 'vitest';
import { dominiosClfC02 } from '@/data/clfC02';
import { TASK_POR_ID, TODOS_LOS_IDS_OBJETIVO } from '@/data/clfC02/blueprint-ext';
import {
	MAPA_PROFESIONAL,
	TODAS_LAS_PREGUNTAS_PROFESIONAL,
} from '@/data/clfC02/profesional/registro';
import { CUOTAS_PROFESIONAL } from '@/data/clfC02/validacion';
import {
	construirExamenProfesional,
	crearAleatorioSemilla,
	cuotasProfesional,
	preguntasProfesionalDeDominio,
} from '@/lib/clfC02Practice';

const hayBancoProfesional = TODAS_LAS_PREGUNTAS_PROFESIONAL.length > 0;

describe('clfC02 · examen profesional', () => {
	it('declara cuotas oficiales que suman 65', () => {
		expect(CUOTAS_PROFESIONAL).toEqual({
			'dominio-1': 16,
			'dominio-2': 19,
			'dominio-3': 22,
			'dominio-4': 8,
		});
		expect(Object.values(CUOTAS_PROFESIONAL).reduce((total, cuota) => total + cuota, 0)).toBe(65);
		expect(cuotasProfesional()).toEqual(CUOTAS_PROFESIONAL);
		for (const dominio of dominiosClfC02) {
			expect(Object.prototype.hasOwnProperty.call(CUOTAS_PROFESIONAL, dominio.id)).toBe(true);
		}
	});

	it('mantiene el banco profesional completo y bien formado', () => {
		const ids = new Set<string>();
		for (const pregunta of TODAS_LAS_PREGUNTAS_PROFESIONAL) {
			expect(ids.has(pregunta.id)).toBe(false);
			ids.add(pregunta.id);
			expect(MAPA_PROFESIONAL[pregunta.id]).toBe(pregunta);
			expect(pregunta.id).toMatch(/^prof-\d\.\d-q\d+$/);
			expect(TASK_POR_ID[pregunta.taskId]).toBeDefined();
			expect(pregunta.options).toHaveLength(4);
			expect(pregunta.correctAnswer).toBeGreaterThanOrEqual(0);
			expect(pregunta.correctAnswer).toBeLessThanOrEqual(3);
			expect(pregunta.explanation.trim().length).toBeGreaterThan(0);
			expect(pregunta.objetivos.length).toBeGreaterThan(0);
			for (const objetivoId of pregunta.objetivos) {
				expect(TODOS_LOS_IDS_OBJETIVO).toContain(objetivoId);
			}
			if (pregunta.porQueOpcion) {
				expect(pregunta.porQueOpcion).toHaveLength(4);
			}
		}
	});

	it('exige justificación por opción en todo el banco', () => {
		for (const pregunta of TODAS_LAS_PREGUNTAS_PROFESIONAL) {
			expect(pregunta.porQueOpcion, `falta porQueOpcion en ${pregunta.id}`).toBeDefined();
			expect(pregunta.porQueOpcion).toHaveLength(4);
			for (const motivo of pregunta.porQueOpcion ?? []) {
				expect(motivo.trim().length).toBeGreaterThan(0);
			}
		}
	});

	it('construye el examen profesional de 65 preguntas con las cuotas', () => {
		expect(hayBancoProfesional).toBe(true);
		const resultado = construirExamenProfesional({ rng: crearAleatorioSemilla(20260924) });
		expect(resultado.ok).toBe(true);
		if (!resultado.ok) return;
		expect(resultado.preguntas).toHaveLength(65);
		expect(new Set(resultado.preguntas.map((pregunta) => pregunta.id)).size).toBe(65);
		const porDominio: Record<string, number> = {};
		for (const pregunta of resultado.preguntas) {
			const dominioId = TASK_POR_ID[pregunta.taskId]?.dominioId ?? '';
			porDominio[dominioId] = (porDominio[dominioId] ?? 0) + 1;
		}
		expect(porDominio).toEqual(CUOTAS_PROFESIONAL);
	});

	it('cada dominio supera su cuota con margen de banco', () => {
		for (const dominio of dominiosClfC02) {
			const pool = preguntasProfesionalDeDominio(dominio.id);
			const cuota = CUOTAS_PROFESIONAL[dominio.id] ?? 0;
			expect(pool.length).toBeGreaterThanOrEqual(cuota + 2);
		}
		const total = TODAS_LAS_PREGUNTAS_PROFESIONAL.length;
		expect(total).toBeGreaterThanOrEqual(130);
	});
});
