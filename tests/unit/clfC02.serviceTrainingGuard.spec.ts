import { describe, it, expect } from 'vitest';
import { serviciosSinCumplir } from '@/data/clfC02/coberturaServicios';

/**
 * D-SERVICE — entrenamiento estricto por servicio in-scope: cada uno debe ser
 * correcto, distractor y aparecer en contexto de escenario/reconocimiento/
 * transferencia. Los servicios eximidos viven en `exencionesServicio.ts` con
 * justificación declarada.
 */
describe('clfC02 · guardrail de entrenamiento por servicio (SERVICE)', () => {
	it('los 111 servicios cumplen el criterio estricto (salvo exenciones)', () => {
		const fallan = serviciosSinCumplir();
		const detalle = fallan.map(
			(fila) => `${fila.nombre}: correcta=${fila.correcta} distractor=${fila.distractor} escenario=${fila.escenario}`,
		);
		expect(detalle, `servicios sin entrenamiento completo:\n${detalle.join('\n')}`).toEqual([]);
	});
});
