import { describe, it, expect } from 'vitest';
import { TODAS_LAS_PREGUNTAS } from '@/data/clfC02/registroContenido';
import { TODAS_LAS_PREGUNTAS_PROFESIONAL } from '@/data/clfC02/profesional/registro';
import { esObjetivoCritico } from '@/data/clfC02/blueprint-ext';
import { transferenciaClfC02 } from '@/data/clfC02/transferencia';
import type { PreguntaBaseClfC02 } from '@/data/clfC02/types';
import {
	correctaEsEstrictamenteMasLarga,
	explicacionesSinCierre,
	filasAuditoria,
	paresSimilares,
	reporteSesgo,
} from './clfC02.audit';

/**
 * Guardrail de transferencia y sesgos del banco (DoD 6/7/8).
 */
describe('clfC02 · guardrail de transferencia y sesgos', () => {
	const filas = filasAuditoria();

	it('todo objective crítico tiene escenario de transferencia propio', () => {
		const fallan = filas
			.filter((fila) => esObjetivoCritico(fila.id) && !fila.tieneTransferencia)
			.map((fila) => fila.id);
		expect(fallan, `críticos sin transferencia:\n${fallan.join(' ')}`).toEqual([]);
	});

	it('los escenarios de transferencia no nombran el servicio en el requisito', () => {
		const fallan = transferenciaClfC02
			.filter((escenario) => /amazon|\baws\b/i.test(escenario.requisito))
			.map((escenario) => escenario.id);
		expect(fallan, `requisitos con nombre de servicio:\n${fallan.join(' ')}`).toEqual([]);
	});

	it('en transferencia la correcta tampoco es la más larga', () => {
		const fallan = transferenciaClfC02
			.filter((escenario) =>
				correctaEsEstrictamenteMasLarga({
					options: escenario.opciones,
					correctAnswer: escenario.correctAnswer,
				} as PreguntaBaseClfC02),
			)
			.map((escenario) => escenario.id);
		expect(fallan, `transfer con correcta más larga:\n${fallan.join(' ')}`).toEqual([]);
	});

	it('la respuesta correcta no es la más larga en más del 20% del banco', () => {
		const reporte = reporteSesgo();
		expect(reporte.correctaMasLargaRatio).toBeLessThan(0.2);
	});

	it('no hay preguntas con ventaja de longitud superior a 25 caracteres', () => {
		const reporte = reporteSesgo();
		expect(reporte.conMargenMayor25, 'preguntas con margen > 25').toBe(0);
	});

	it('ningún enunciado de reconocimiento nombra el servicio', () => {
		const reporte = reporteSesgo();
		expect(reporte.fugasServicio).toBe(0);
	});

	it('no hay preguntas casi duplicadas (similitud > 0,7)', () => {
		const similares = paresSimilares();
		expect(
			similares.map((par) => `${par.a} ~ ${par.b} (${par.similitud.toFixed(2)})`),
			'pares casi duplicados',
		).toEqual([]);
	});

	it('toda explicación cierra con "si cambia X → Y"', () => {
		const fallan = [
			...explicacionesSinCierre(TODAS_LAS_PREGUNTAS),
			...explicacionesSinCierre(TODAS_LAS_PREGUNTAS_PROFESIONAL),
		];
		expect(fallan, `explicaciones sin cierre:\n${fallan.join(' ')}`).toEqual([]);
	});
});
