import { describe, it, expect } from 'vitest';
import { objetivosClfC02, taskStatementsClfC02 } from '@/data/clfC02';
import { OBJETIVO_POR_ID } from '@/data/clfC02/blueprint-ext';
import {
	TAREAS_CON_CONTENIDO,
	TAREAS_PENDIENTES,
	recursosDeObjetivo,
} from '@/data/clfC02/registroContenido';
import { erroresValidacionClfC02, validarClfC02 } from '@/data/clfC02/validacion';

/**
 * Red de seguridad que se mantiene verde en todas las fases: valida solo el
 * contenido realmente registrado y deja pendientes las tasks sin módulo.
 */
describe('clfC02 · integridad del contenido registrado', () => {
	it('no tiene hallazgos de validación', () => {
		const errores = erroresValidacionClfC02();
		expect(errores, errores.join('\n')).toEqual([]);
		expect(validarClfC02()).toEqual([]);
	});

	it('TAREAS_PENDIENTES es exactamente el complemento de TAREAS_CON_CONTENIDO', () => {
		const esperado = taskStatementsClfC02
			.filter((task) => !TAREAS_CON_CONTENIDO.includes(task.id))
			.map((task) => task.id);
		expect([...TAREAS_PENDIENTES].sort()).toEqual([...esperado].sort());
		expect(new Set(TAREAS_PENDIENTES).size).toBe(TAREAS_PENDIENTES.length);
	});

	it('todo objective con contenido tiene grupo, pregunta y (si es crítico) tarjeta', () => {
		for (const objetivo of objetivosClfC02) {
			const id = `${objetivo.taskId}#${objetivo.index}`;
			if (TAREAS_PENDIENTES.includes(objetivo.taskId)) continue;
			const recursos = recursosDeObjetivo(id);
			expect(recursos.grupos.length).toBeGreaterThan(0);
			expect(recursos.preguntas.length).toBeGreaterThan(0);
			if (objetivo.profundidad === 'critico') {
				expect(recursos.tarjetas.length).toBeGreaterThan(0);
			}
		}
	});

	it('deriva exactamente 135 objectives del blueprint oficial', () => {
		expect(Object.keys(OBJETIVO_POR_ID)).toHaveLength(135);
	});
});
