import { describe, it, expect } from 'vitest';
import { objetivosAifC01, taskStatementsAifC01 } from '@/data/aifC01';
import { OBJETIVO_POR_ID } from '@/data/aifC01/blueprint-ext';
import {
	TAREAS_CON_CONTENIDO,
	TAREAS_PENDIENTES,
	recursosDeObjetivo,
} from '@/data/aifC01/registroContenido';
import { erroresValidacion, validarAifC01 } from '@/data/aifC01/validacion';

/**
 * Red de seguridad que se mantiene verde en todas las fases: valida solo el
 * contenido realmente registrado y deja pendientes las tasks sin módulo.
 */
describe('aifC01 · integridad del contenido registrado', () => {
	it('no tiene hallazgos de validación', () => {
		const errores = erroresValidacion();
		expect(errores, errores.join('\n')).toEqual([]);
		expect(validarAifC01()).toEqual([]);
	});

	it('TAREAS_PENDIENTES es exactamente el complemento de TAREAS_CON_CONTENIDO', () => {
		const esperado = taskStatementsAifC01
			.filter((task) => !TAREAS_CON_CONTENIDO.includes(task.id))
			.map((task) => task.id);
		expect([...TAREAS_PENDIENTES].sort()).toEqual([...esperado].sort());
		expect(new Set(TAREAS_PENDIENTES).size).toBe(TAREAS_PENDIENTES.length);
	});

	it('todo objective con contenido tiene grupo, pregunta y (si es crítico) tarjeta', () => {
		for (const objetivo of objetivosAifC01) {
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

	it('ninguna referencia apunta a un objective inexistente', () => {
		expect(Object.keys(OBJETIVO_POR_ID)).toHaveLength(69);
	});
});
