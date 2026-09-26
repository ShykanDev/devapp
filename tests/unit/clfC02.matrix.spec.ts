import { describe, it, expect } from 'vitest';
import { esObjetivoCritico } from '@/data/clfC02/blueprint-ext';
import { coberturaTiposEscenario, filasAuditoria, resumenAuditoria } from './clfC02.audit';

/**
 * Matriz reproducible de los 135 objectives (tarea B1 del plan de auditoría).
 *
 * No escribe en el repo: imprime la matriz y falla si hay objectives sin
 * contenido o con señales de falso dominio (correcta más larga o fuga de
 * servicio en el enunciado).
 */
describe('clfC02 · matriz de cobertura de los 135 objectives', () => {
	const filas = filasAuditoria();

	it('cubre los 135 objectives sin dejar ninguno fuera', () => {
		expect(filas).toHaveLength(135);
	});

	it('no hay objectives sin contenido (nivel 0)', () => {
		const faltantes = filas.filter((fila) => fila.nivel === 0);
		expect(faltantes.map((fila) => fila.id), 'objectives sin contenido').toEqual([]);
		expect(resumenAuditoria(filas).faltantes).toBe(0);
	});

	it('no hay señales de falso dominio', () => {
		const falsos = filas.filter((fila) => fila.falsoDominio.length > 0);
		expect(
			falsos.map((fila) => `${fila.id}: ${fila.falsoDominio.join(' | ')}`),
			'señales de falso dominio',
		).toEqual([]);
	});

	it('clasifica la cobertura por tipos de escenario (10 tipos)', () => {
		const cobertura = coberturaTiposEscenario();
		console.log('COBERTURA TIPOS DE ESCENARIO', JSON.stringify(cobertura, null, 2));
		expect(Object.keys(cobertura)).toHaveLength(10);
	});

	it('imprime la matriz', () => {
		for (const fila of filas) {
			const etiqueta = esObjetivoCritico(fila.id) ? 'CRIT' : '    ';
			console.log(
				`${fila.id.padEnd(7)} ${etiqueta} nivel=${fila.nivel} preg=${fila.preguntas} dif=${fila.tieneDiferenciacion ? 's' : '-'} neg=${fila.tieneNegativo ? 's' : '-'} apl=${fila.tieneAplicacion ? 's' : '-'} rec=${fila.tieneReconocimiento ? 's' : '-'} trf=${fila.tieneTransferencia ? 's' : '-'}`,
			);
		}
		expect(true).toBe(true);
	});
});
