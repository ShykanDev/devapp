import { describe, it, expect } from 'vitest';
import { serviciosCitadosConAlias } from '@/data/clfC02/citas';

/**
 * Regresión del falso positivo `RAM` (red team C1, 2026-09-26): la sigla corta
 * de AWS Resource Access Manager no debe confundirse con la memoria RAM.
 */
describe('clfC02 · detección de citas de servicio', () => {
	it('no confunde "memoria RAM" con AWS Resource Access Manager', () => {
		expect(serviciosCitadosConAlias('la memoria RAM del servidor es limitada')).toEqual([]);
		expect(serviciosCitadosConAlias('una base de datos en memoria (RAM) para caché')).toEqual([]);
	});

	it('reconoce AWS RAM por su nombre completo y por la sigla con proveedor', () => {
		expect(serviciosCitadosConAlias('AWS RAM comparte recursos entre cuentas')).toContain(
			'AWS Resource Access Manager (AWS RAM)',
		);
		expect(serviciosCitadosConAlias('AWS Resource Access Manager (AWS RAM)')).toContain(
			'AWS Resource Access Manager (AWS RAM)',
		);
	});

	it('reconoce nombres y alias habituales de otros servicios', () => {
		expect(serviciosCitadosConAlias('almacena objetos en Amazon S3')).toContain('Amazon S3');
		expect(serviciosCitadosConAlias('ejecuta la función en AWS Lambda')).toContain('AWS Lambda');
		expect(serviciosCitadosConAlias('comparte la subred con VPC')).not.toContain(
			'AWS Resource Access Manager (AWS RAM)',
		);
	});
});
