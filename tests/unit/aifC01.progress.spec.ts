import { beforeEach, describe, it, expect } from 'vitest';
import { dominiosAifC01 } from '@/data/aifC01';
import { idsObjetivosDeDominio, idsObjetivosDeTask } from '@/data/aifC01/blueprint-ext';
import {
	CLAVE_PROGRESO_AIFC01,
	DIAS_REPASO_DOMINADO,
	areasDebiles,
	calcularEstadoObjetivo,
	estadoDeObjetivo,
	fijarTemporizadorFinal,
	marcarEstudiado,
	motivoEstadoObjetivo,
	normalizarProgresoAifC01,
	progresoAifC01Vacio,
	progresoDeObjetivos,
	progresoDominio,
	progresoPonderado,
	progresoTask,
	recargarProgresoAifC01,
	registrarIntento,
	registrarRespuesta,
	registrarTarjeta,
	reiniciarProgresoAifC01,
	useAifC01Progress,
	type EstadoObjetivo,
	type ProgresoAifC01V1,
	type RegistroObjetivo,
} from '@/lib/aifC01Progress';

const OBJETIVO = '3.2#2';
const OBJETIVO_RIESGOS = '3.2#4';

function progreso(): ProgresoAifC01V1 {
	return useAifC01Progress().value;
}

function registro(estado: EstadoObjetivo, extra: Partial<RegistroObjetivo> = {}): RegistroObjetivo {
	return {
		estado,
		historial: [],
		tarjetasSabidas: 0,
		...extra,
	};
}

beforeEach(() => {
	localStorage.clear();
	reiniciarProgresoAifC01();
});

describe('aifC01 · heurística de estados', () => {
	it('empieza pendiente y pasa a estudiado al marcarlo', () => {
		expect(estadoDeObjetivo(progreso(), OBJETIVO)).toBe('pendiente');
		marcarEstudiado(OBJETIVO);
		expect(estadoDeObjetivo(progreso(), OBJETIVO)).toBe('estudiado');
		expect(progreso().objetivos[OBJETIVO].leidoEn).toBeTruthy();
	});

	it('pasa a practicado con una respuesta y a dominado con 4/5 aciertos, última correcta y tarjeta', () => {
		marcarEstudiado(OBJETIVO);
		registrarRespuesta(OBJETIVO, true);
		expect(estadoDeObjetivo(progreso(), OBJETIVO)).toBe('practicado');

		registrarRespuesta(OBJETIVO, true);
		registrarRespuesta(OBJETIVO, true);
		registrarRespuesta(OBJETIVO, true);
		expect(estadoDeObjetivo(progreso(), OBJETIVO)).toBe('practicado');

		registrarTarjeta('3.2-t4', [OBJETIVO], true);
		expect(estadoDeObjetivo(progreso(), OBJETIVO)).toBe('dominado');
	});

	it('no domina sin tarjeta sabida ni con la última respuesta fallada', () => {
		registrarRespuesta(OBJETIVO, true);
		registrarRespuesta(OBJETIVO, true);
		registrarRespuesta(OBJETIVO, true);
		registrarRespuesta(OBJETIVO, true);
		expect(estadoDeObjetivo(progreso(), OBJETIVO)).toBe('practicado');

		registrarTarjeta('3.2-t4', [OBJETIVO], true);
		expect(estadoDeObjetivo(progreso(), OBJETIVO)).toBe('dominado');

		registrarRespuesta(OBJETIVO, false);
		registrarRespuesta(OBJETIVO, true);
		registrarRespuesta(OBJETIVO, false);
		expect(estadoDeObjetivo(progreso(), OBJETIVO)).toBe('practicado');
	});

	it('fija y limpia proximoRepaso según el estado', () => {
		const fecha = new Date('2026-01-01T10:00:00.000Z');
		for (let i = 0; i < 4; i += 1) registrarRespuesta(OBJETIVO, true, fecha);
		registrarTarjeta('3.2-t4', [OBJETIVO], true, fecha);
		expect(estadoDeObjetivo(progreso(), OBJETIVO)).toBe('dominado');

		const proximoRepaso = progreso().objetivos[OBJETIVO].proximoRepaso;
		expect(proximoRepaso).toBeTruthy();
		const dias =
			(new Date(proximoRepaso as string).getTime() - fecha.getTime()) / (24 * 3600 * 1000);
		expect(Math.round(dias)).toBe(DIAS_REPASO_DOMINADO);

		registrarRespuesta(OBJETIVO, false, fecha);
		registrarRespuesta(OBJETIVO, false, fecha);
		expect(estadoDeObjetivo(progreso(), OBJETIVO)).toBe('practicado');
		expect(progreso().objetivos[OBJETIVO].proximoRepaso).toBeUndefined();
	});

	it('calcula el estado de un registro vacío como pendiente', () => {
		expect(calcularEstadoObjetivo(undefined)).toBe('pendiente');
		expect(calcularEstadoObjetivo(registro('pendiente'))).toBe('pendiente');
		expect(calcularEstadoObjetivo(registro('pendiente', { leidoEn: '2026-01-01T00:00:00.000Z' }))).toBe(
			'estudiado'
		);
	});

	it('explica el motivo del estado con evidencia', () => {
		for (let i = 0; i < 4; i += 1) registrarRespuesta(OBJETIVO, true);
		registrarTarjeta('3.2-t4', [OBJETIVO], true);
		const motivo = motivoEstadoObjetivo(progreso(), OBJETIVO);
		expect(motivo).toContain('Dominado');
		expect(motivo).toContain('4/4 aciertos recientes');
		expect(motivo).toContain('tarjeta');
	});
});

describe('aifC01 · métricas de progreso', () => {
	it('pondera los dominios por su peso oficial', () => {
		const fake = progresoAifC01Vacio();
		for (const objetivoId of idsObjetivosDeDominio('dominio-3')) {
			fake.objetivos[objetivoId] = registro('dominado');
		}
		expect(progresoDominio(fake, 'dominio-3')).toBe(100);
		expect(progresoDominio(fake, 'dominio-1')).toBe(0);
		expect(progresoPonderado(fake)).toBe(28);
		expect(dominiosAifC01.find((dominio) => dominio.id === 'dominio-3')?.peso).toBe(28);
	});

	it('calcula el progreso de una task y de una lista de objectives', () => {
		const fake = progresoAifC01Vacio();
		const objetivos = idsObjetivosDeTask('3.2');
		fake.objetivos[objetivos[0]] = registro('dominado');
		fake.objetivos[objetivos[1]] = registro('practicado');
		fake.objetivos[objetivos[2]] = registro('estudiado');
		expect(progresoDeObjetivos(fake, [])).toBe(0);
		expect(progresoTask(fake, '3.2')).toBe(Math.round(((1 + 2 / 3 + 1 / 3) / objetivos.length) * 100));
	});
});

describe('aifC01 · debilidades', () => {
	it('prioriza el error ratio alto sobre los objectives sin practicar', () => {
		for (let i = 0; i < 4; i += 1) registrarRespuesta(OBJETIVO, i % 2 === 0);
		const areas = areasDebiles(progreso());
		expect(areas[0].objetivoId).toBe(OBJETIVO);
		expect(areas[0].prioridad).toBe(0);
		expect(areas[0].porcentajeAcierto).toBe(50);
		expect(areas.some((area) => area.motivos.includes('sin practicar todavía'))).toBe(true);
	});

	it('excluye los objectives dominados sin repaso vencido', () => {
		for (let i = 0; i < 4; i += 1) registrarRespuesta(OBJETIVO, true);
		registrarTarjeta('3.2-t4', [OBJETIVO], true);
		const areas = areasDebiles(progreso());
		expect(areas.some((area) => area.objetivoId === OBJETIVO)).toBe(false);
	});

	it('incluye los objectives con repaso vencido aunque estén dominados', () => {
		const pasado = new Date('2026-01-01T00:00:00.000Z');
		for (let i = 0; i < 4; i += 1) registrarRespuesta(OBJETIVO, true, pasado);
		registrarTarjeta('3.2-t4', [OBJETIVO], true, pasado);
		const areas = areasDebiles(progreso(), new Date('2026-02-01T00:00:00.000Z'));
		const area = areas.find((candidata) => candidata.objetivoId === OBJETIVO);
		expect(area).toBeDefined();
		expect(area?.repasoVencido).toBe(true);
		expect(area?.motivos).toContain('repaso vencido');
	});

	it('considera crítico un objective crítico sin dominar', () => {
		registrarRespuesta(OBJETIVO_RIESGOS, true);
		const areas = areasDebiles(progreso());
		const area = areas.find((candidata) => candidata.objetivoId === OBJETIVO_RIESGOS);
		expect(area?.critico).toBe(true);
		expect(area?.motivos).toContain('objective crítico');
	});
});

describe('aifC01 · persistencia', () => {
	it('guarda el progreso en localStorage y lo recarga', () => {
		marcarEstudiado(OBJETIVO);
		registrarRespuesta(OBJETIVO, true);
		registrarIntento({
			tipo: 'task',
			scope: 'task-3.2',
			total: 12,
			correctas: 9,
			duracionMs: 1000,
			falladas: ['3.2-q3'],
		});
		fijarTemporizadorFinal(false);

		const crudo = localStorage.getItem(CLAVE_PROGRESO_AIFC01);
		expect(crudo).toBeTruthy();
		const guardado = JSON.parse(crudo as string);
		expect(guardado.version).toBe(1);
		expect(guardado.intentos).toHaveLength(1);
		expect(guardado.preferencias.temporizadorFinal).toBe(false);

		reiniciarProgresoAifC01();
		expect(estadoDeObjetivo(progreso(), OBJETIVO)).toBe('pendiente');
		recargarProgresoAifC01();
		expect(estadoDeObjetivo(progreso(), OBJETIVO)).toBe('practicado');
		expect(progreso().intentos).toHaveLength(1);
	});

	it('tolera datos corruptos sin lanzar', () => {
		const normalizado = normalizarProgresoAifC01({
			version: 1,
			objetivos: {
				'3.2#1': { estado: 'inventado', historial: [{ fecha: 1, correcto: 'no' }], tarjetasSabidas: -3 },
			},
			tarjetas: { '3.2-t1': { sabidas: 'x' } },
			intentos: [null, { total: 3, correctas: 1 }],
			preferencias: { temporizadorFinal: 'si' },
		});
		expect(normalizado.objetivos['3.2#1'].estado).toBe('pendiente');
		expect(normalizado.objetivos['3.2#1'].historial).toEqual([]);
		expect(normalizado.objetivos['3.2#1'].tarjetasSabidas).toBe(0);
		expect(normalizado.intentos).toHaveLength(1);
		expect(normalizado.preferencias.temporizadorFinal).toBe(true);
		expect(normalizarProgresoAifC01(null).version).toBe(1);
	});

	it('acumula tarjetas y respuestas sin desbordar el historial útil', () => {
		for (let i = 0; i < 30; i += 1) registrarRespuesta(OBJETIVO, true);
		expect(progreso().objetivos[OBJETIVO].historial.length).toBeLessThanOrEqual(20);

		registrarTarjeta('3.2-t4', [OBJETIVO], true);
		registrarTarjeta('3.2-t4', [OBJETIVO], false);
		expect(progreso().tarjetas['3.2-t4'].sabidas).toBe(1);
		expect(progreso().tarjetas['3.2-t4'].falladas).toBe(1);
		expect(progreso().objetivos[OBJETIVO].tarjetasSabidas).toBe(1);
	});
});
