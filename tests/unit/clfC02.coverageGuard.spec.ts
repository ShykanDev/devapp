import { describe, it, expect } from 'vitest';
import { esObjetivoCritico } from '@/data/clfC02/blueprint-ext';
import { filasAuditoria, objetivosConPocaVariedad } from './clfC02.audit';

/**
 * Guardrail de cobertura por objective (tareas C1–C4 y DoD 2/3/4/5/9).
 *
 * Verifica, objective a objective, que hay aplicación, diferenciación de
 * alternativas relevantes, conocimiento negativo y reconocimiento por
 * requisito, y que los críticos cumplen el checklist completo.
 */
describe('clfC02 · guardrail de cobertura por objective', () => {
	const filas = filasAuditoria();
	const listar = (ids: string[]) => ids.join(' ');

	it('todo objective enseña conocimiento negativo (noUsar o error común)', () => {
		const fallan = filas.filter((fila) => !fila.tieneNegativo).map((fila) => fila.id);
		expect(fallan, `sin negativo:\n${listar(fallan)}`).toEqual([]);
	});

	it('todo objective con alternativas relevantes tiene diferenciación', () => {
		const fallan = filas
			.filter((fila) => fila.diferenciacionRelevante && !fila.tieneDiferenciacion)
			.map((fila) => fila.id);
		expect(fallan, `sin diferenciación:\n${listar(fallan)}`).toEqual([]);
	});

	it('todo objective tiene al menos una pregunta de aplicación', () => {
		const fallan = filas.filter((fila) => !fila.tieneAplicacion).map((fila) => fila.id);
		expect(fallan, `sin aplicación:\n${listar(fallan)}`).toEqual([]);
	});

	it('todo objective de servicio tiene caso requisito → servicio', () => {
		const fallan = filas
			.filter((fila) => fila.reconocimientoRelevante && !fila.tieneReconocimiento)
			.map((fila) => fila.id);
		expect(fallan, `sin reconocimiento:\n${listar(fallan)}`).toEqual([]);
	});

	it('todo objective cubre al menos dos tipos de razonamiento', () => {
		const fallan = objetivosConPocaVariedad();
		expect(fallan, `poca variedad:\n${listar(fallan)}`).toEqual([]);
	});

	it('los objectives críticos cumplen el checklist completo (9/9)', () => {
		const criticos = filas.filter((fila) => esObjetivoCritico(fila.id));
		expect(criticos.length).toBeGreaterThan(0);
		const incompletos = criticos.filter(
			(fila) =>
				fila.grupos === 0 ||
				fila.preguntas === 0 ||
				fila.tarjetas === 0 ||
				!fila.tieneNegativo ||
				!fila.tieneDiferenciacion ||
				!fila.tieneAplicacion ||
				(fila.reconocimientoRelevante && !fila.tieneReconocimiento) ||
				!fila.tieneTransferencia ||
				fila.tiposPregunta.length < 2,
		);
		expect(
			incompletos.map((fila) => `${fila.id}: ${fila.gaps.join(', ') || fila.falsoDominio.join(', ')}`),
			'críticos incompletos',
		).toEqual([]);
	});
});
