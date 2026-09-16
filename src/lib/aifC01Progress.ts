import { ref } from 'vue';
import { dominiosAifC01 } from '@/data/aifC01';
import {
	OBJETIVO_POR_ID,
	dominioDeTaskId,
	idsObjetivosDeDominio,
	idsObjetivosDeTask,
} from '@/data/aifC01/blueprint-ext';
import { recursosDeObjetivo } from '@/data/aifC01/registroContenido';

export type EstadoObjetivo = 'pendiente' | 'estudiado' | 'practicado' | 'dominado';

export const ESTADOS_OBJETIVO: readonly EstadoObjetivo[] = [
	'pendiente',
	'estudiado',
	'practicado',
	'dominado',
];

export const CLAVE_PROGRESO_AIFC01 = 'devapp:aif-c01:progress';
export const DIAS_REPASO_DOMINADO = 7;
const MAX_HISTORIAL = 20;
const MAX_INTENTOS = 100;

export interface RespuestaRegistrada {
	fecha: string;
	correcto: boolean;
}

export interface RegistroObjetivo {
	estado: EstadoObjetivo;
	leidoEn?: string;
	historial: RespuestaRegistrada[];
	tarjetasSabidas: number;
	proximoRepaso?: string;
}

export interface RegistroTarjeta {
	sabidas: number;
	falladas: number;
	ultimaVez: string;
}

export type TipoIntentoAifC01 = 'task' | 'dominio' | 'final' | 'repaso';

export interface IntentoAifC01 {
	id: string;
	tipo: TipoIntentoAifC01;
	scope: string;
	fecha: string;
	total: number;
	correctas: number;
	duracionMs: number;
	falladas: string[];
}

export interface PreferenciasAifC01 {
	temporizadorFinal: boolean;
}

export interface ProgresoAifC01V1 {
	version: 1;
	objetivos: Record<string, RegistroObjetivo>;
	tarjetas: Record<string, RegistroTarjeta>;
	intentos: IntentoAifC01[];
	preferencias: PreferenciasAifC01;
}

export interface AreaDebilAifC01 {
	objetivoId: string;
	taskId: string;
	dominioId: string;
	dominioNumero: number;
	titulo: string;
	estado: EstadoObjetivo;
	critico: boolean;
	respuestas: number;
	fallos: number;
	porcentajeAcierto: number | null;
	proximoRepaso?: string;
	repasoVencido: boolean;
	prioridad: number;
	motivos: string[];
}

export function progresoAifC01Vacio(): ProgresoAifC01V1 {
	return {
		version: 1,
		objetivos: {},
		tarjetas: {},
		intentos: [],
		preferencias: { temporizadorFinal: true },
	};
}

function clonarVacio(): ProgresoAifC01V1 {
	return progresoAifC01Vacio();
}

function esEstadoValido(valor: unknown): valor is EstadoObjetivo {
	return typeof valor === 'string' && (ESTADOS_OBJETIVO as readonly string[]).includes(valor);
}

function normalizarHistorial(valor: unknown): RespuestaRegistrada[] {
	if (!Array.isArray(valor)) return [];
	return valor
		.filter(
			(entrada): entrada is RespuestaRegistrada =>
				typeof entrada === 'object' &&
				entrada !== null &&
				typeof (entrada as RespuestaRegistrada).fecha === 'string' &&
				typeof (entrada as RespuestaRegistrada).correcto === 'boolean',
		)
		.slice(-MAX_HISTORIAL);
}

/** Normaliza el progreso almacenado: descarta formas inválidas sin lanzar. */
export function normalizarProgresoAifC01(crudo: unknown): ProgresoAifC01V1 {
	const base = clonarVacio();
	if (typeof crudo !== 'object' || crudo === null) return base;
	const datos = crudo as Partial<ProgresoAifC01V1>;

	for (const [objetivoId, registro] of Object.entries(datos.objetivos ?? {})) {
		if (typeof registro !== 'object' || registro === null) continue;
		const candidato = registro as Partial<RegistroObjetivo>;
		base.objetivos[objetivoId] = {
			estado: esEstadoValido(candidato.estado) ? candidato.estado : 'pendiente',
			leidoEn: typeof candidato.leidoEn === 'string' ? candidato.leidoEn : undefined,
			historial: normalizarHistorial(candidato.historial),
			tarjetasSabidas:
				typeof candidato.tarjetasSabidas === 'number' && candidato.tarjetasSabidas > 0
					? Math.floor(candidato.tarjetasSabidas)
					: 0,
			proximoRepaso:
				typeof candidato.proximoRepaso === 'string' ? candidato.proximoRepaso : undefined,
		};
	}

	for (const [tarjetaId, registro] of Object.entries(datos.tarjetas ?? {})) {
		if (typeof registro !== 'object' || registro === null) continue;
		const candidato = registro as Partial<RegistroTarjeta>;
		base.tarjetas[tarjetaId] = {
			sabidas:
				typeof candidato.sabidas === 'number' && candidato.sabidas > 0
					? Math.floor(candidato.sabidas)
					: 0,
			falladas:
				typeof candidato.falladas === 'number' && candidato.falladas > 0
					? Math.floor(candidato.falladas)
					: 0,
			ultimaVez: typeof candidato.ultimaVez === 'string' ? candidato.ultimaVez : '',
		};
	}

	if (Array.isArray(datos.intentos)) {
		base.intentos = datos.intentos
			.filter(
				(intento): intento is IntentoAifC01 =>
					typeof intento === 'object' &&
					intento !== null &&
					typeof (intento as IntentoAifC01).total === 'number' &&
					typeof (intento as IntentoAifC01).correctas === 'number',
			)
			.slice(-MAX_INTENTOS);
	}

	if (datos.preferencias && typeof datos.preferencias.temporizadorFinal === 'boolean') {
		base.preferencias.temporizadorFinal = datos.preferencias.temporizadorFinal;
	}

	return base;
}

function cargarProgreso(): ProgresoAifC01V1 {
	try {
		const crudo = localStorage.getItem(CLAVE_PROGRESO_AIFC01);
		if (!crudo) return clonarVacio();
		return normalizarProgresoAifC01(JSON.parse(crudo));
	} catch {
		return clonarVacio();
	}
}

const progreso = ref<ProgresoAifC01V1>(cargarProgreso());

function persistir(): void {
	try {
		localStorage.setItem(CLAVE_PROGRESO_AIFC01, JSON.stringify(progreso.value));
	} catch {
		// Sin acceso a localStorage: el progreso vive solo en memoria.
	}
}

export function progresoAifC01(): ProgresoAifC01V1 {
	return progreso.value;
}

export function useAifC01Progress() {
	return progreso;
}

export function recargarProgresoAifC01(): void {
	progreso.value = cargarProgreso();
}

/** Solo para tests: deja el progreso en blanco sin tocar localStorage. */
export function reiniciarProgresoAifC01(): void {
	progreso.value = clonarVacio();
}

function sumarDias(fecha: Date, dias: number): string {
	const copia = new Date(fecha.getTime());
	copia.setDate(copia.getDate() + dias);
	return copia.toISOString();
}

function registroDe(objetivoId: string): RegistroObjetivo {
	return (progreso.value.objetivos[objetivoId] ??= {
		estado: 'pendiente',
		historial: [],
		tarjetasSabidas: 0,
	});
}

function refrescarEstado(registro: RegistroObjetivo, fecha: Date): void {
	const anterior = registro.estado;
	registro.estado = calcularEstadoObjetivo(registro);
	if (registro.estado === 'dominado' && anterior !== 'dominado') {
		registro.proximoRepaso = sumarDias(fecha, DIAS_REPASO_DOMINADO);
	}
	if (registro.estado !== 'dominado') {
		registro.proximoRepaso = undefined;
	}
}

/**
 * Heurística de dominio, visible en la interfaz:
 * - dominado: ≥4 aciertos en las últimas 5 respuestas, última correcta y ≥1 tarjeta sabida.
 * - caída: 2 fallos en las últimas 3 respuestas devuelven a practicado.
 * - practicado: hay respuestas o tarjetas.
 * - estudiado: se marcó como leído, sin evidencia de práctica.
 */
export function calcularEstadoObjetivo(registro: RegistroObjetivo | undefined): EstadoObjetivo {
	if (!registro) return 'pendiente';

	const historial = registro.historial;
	const tarjetas = registro.tarjetasSabidas;

	if (historial.length === 0 && tarjetas === 0) {
		return registro.leidoEn ? 'estudiado' : 'pendiente';
	}

	const ultimas3 = historial.slice(-3);
	const fallosRecientes = ultimas3.filter((respuesta) => !respuesta.correcto).length;
	if (fallosRecientes >= 2) return 'practicado';

	const ultimas5 = historial.slice(-5);
	const aciertos = ultimas5.filter((respuesta) => respuesta.correcto).length;
	const ultimaCorrecta = historial.length > 0 && historial[historial.length - 1].correcto;

	if (aciertos >= 4 && ultimaCorrecta && tarjetas >= 1) return 'dominado';

	return 'practicado';
}

export function marcarEstudiado(objetivoId: string, fecha: Date = new Date()): void {
	const registro = registroDe(objetivoId);
	if (!registro.leidoEn) registro.leidoEn = fecha.toISOString();
	refrescarEstado(registro, fecha);
	persistir();
}

export function registrarRespuesta(
	objetivoId: string,
	correcto: boolean,
	fecha: Date = new Date(),
): void {
	const registro = registroDe(objetivoId);
	registro.historial.push({ fecha: fecha.toISOString(), correcto });
	if (registro.historial.length > MAX_HISTORIAL) {
		registro.historial = registro.historial.slice(-MAX_HISTORIAL);
	}
	refrescarEstado(registro, fecha);
	persistir();
}

export function registrarTarjeta(
	tarjetaId: string,
	objetivoIds: string[],
	sabia: boolean,
	fecha: Date = new Date(),
): void {
	const actual = (progreso.value.tarjetas[tarjetaId] ??= {
		sabidas: 0,
		falladas: 0,
		ultimaVez: '',
	});
	if (sabia) actual.sabidas += 1;
	else actual.falladas += 1;
	actual.ultimaVez = fecha.toISOString();

	if (sabia) {
		for (const objetivoId of objetivoIds) {
			const registro = registroDe(objetivoId);
			registro.tarjetasSabidas += 1;
			refrescarEstado(registro, fecha);
		}
	}

	persistir();
}

export function registrarIntento(entrada: {
	tipo: TipoIntentoAifC01;
	scope: string;
	total: number;
	correctas: number;
	duracionMs: number;
	falladas: string[];
	fecha?: Date;
}): IntentoAifC01 {
	const fecha = entrada.fecha ?? new Date();
	const intento: IntentoAifC01 = {
		id: `intento-${fecha.getTime().toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
		tipo: entrada.tipo,
		scope: entrada.scope,
		fecha: fecha.toISOString(),
		total: entrada.total,
		correctas: entrada.correctas,
		duracionMs: entrada.duracionMs,
		falladas: [...entrada.falladas],
	};
	progreso.value.intentos.push(intento);
	if (progreso.value.intentos.length > MAX_INTENTOS) {
		progreso.value.intentos = progreso.value.intentos.slice(-MAX_INTENTOS);
	}
	persistir();
	return intento;
}

export function fijarTemporizadorFinal(valor: boolean): void {
	progreso.value.preferencias.temporizadorFinal = valor;
	persistir();
}

export function estadoDeObjetivo(progresoActual: ProgresoAifC01V1, objetivoId: string): EstadoObjetivo {
	const registro = progresoActual.objetivos[objetivoId];
	if (!registro) return 'pendiente';
	return registro.estado ?? calcularEstadoObjetivo(registro);
}

export function etiquetaEstado(estado: EstadoObjetivo): string {
	if (estado === 'dominado') return 'Dominado';
	if (estado === 'practicado') return 'Practicado';
	if (estado === 'estudiado') return 'Estudiado';
	return 'Pendiente';
}

export function motivoEstadoObjetivo(
	progresoActual: ProgresoAifC01V1,
	objetivoId: string,
	fecha: Date = new Date(),
): string {
	const registro = progresoActual.objetivos[objetivoId];
	const estado = estadoDeObjetivo(progresoActual, objetivoId);
	if (!registro || estado === 'pendiente') return 'Sin estudiar todavía';

	const ultimas5 = registro.historial.slice(-5);
	const aciertos = ultimas5.filter((respuesta) => respuesta.correcto).length;
	const partes: string[] = [];

	if (registro.historial.length === 0) partes.push('sin respuestas todavía');
	else partes.push(`${aciertos}/${ultimas5.length} aciertos recientes`);

	if (registro.tarjetasSabidas > 0) {
		partes.push(`${registro.tarjetasSabidas} tarjeta${registro.tarjetasSabidas === 1 ? '' : 's'} sabida${registro.tarjetasSabidas === 1 ? '' : 's'}`);
	}

	if (registro.proximoRepaso && new Date(registro.proximoRepaso).getTime() <= fecha.getTime()) {
		partes.push('repaso vencido');
	}

	return `${etiquetaEstado(estado)} · ${partes.join(' · ')}`;
}

export function puntosDeEstado(estado: EstadoObjetivo): number {
	if (estado === 'dominado') return 1;
	if (estado === 'practicado') return 2 / 3;
	if (estado === 'estudiado') return 1 / 3;
	return 0;
}

export function progresoDeObjetivos(
	progresoActual: ProgresoAifC01V1,
	objetivoIds: string[],
): number {
	if (objetivoIds.length === 0) return 0;
	const total = objetivoIds.reduce(
		(sumatoria, objetivoId) => sumatoria + puntosDeEstado(estadoDeObjetivo(progresoActual, objetivoId)),
		0,
	);
	return Math.round((total / objetivoIds.length) * 100);
}

export function progresoTask(progresoActual: ProgresoAifC01V1, taskId: string): number {
	return progresoDeObjetivos(progresoActual, idsObjetivosDeTask(taskId));
}

export function progresoDominio(progresoActual: ProgresoAifC01V1, dominioId: string): number {
	return progresoDeObjetivos(progresoActual, idsObjetivosDeDominio(dominioId));
}

/** Progreso global ponderado por el peso oficial de cada dominio. */
export function progresoPonderado(progresoActual: ProgresoAifC01V1): number {
	const total = dominiosAifC01.reduce(
		(sumatoria, dominio) =>
			sumatoria + (dominio.peso * progresoDominio(progresoActual, dominio.id)) / 100,
		0,
	);
	return Math.round(total);
}

export function objetivosEstudiables(): string[] {
	return Object.keys(OBJETIVO_POR_ID).filter(
		(objetivoId) => recursosDeObjetivo(objetivoId).preguntas.length > 0,
	);
}

function segundosDesde(fecha: Date, referencia: Date): number {
	return (referencia.getTime() - fecha.getTime()) / 1000;
}

export function areasDebiles(
	progresoActual: ProgresoAifC01V1,
	fecha: Date = new Date(),
	objetivoIds: string[] = objetivosEstudiables(),
): AreaDebilAifC01[] {
	const areas: AreaDebilAifC01[] = [];

	for (const objetivoId of objetivoIds) {
		const objetivo = OBJETIVO_POR_ID[objetivoId];
		if (!objetivo) continue;
		const registro = progresoActual.objetivos[objetivoId];
		const estado = estadoDeObjetivo(progresoActual, objetivoId);
		const historial = registro?.historial ?? [];
		const respuestas = historial.length;
		const fallos = historial.filter((respuesta) => !respuesta.correcto).length;
		const recientes = historial.filter((respuesta) => segundosDesde(new Date(respuesta.fecha), fecha) <= 7 * 24 * 3600);
		const fallosRecientes = recientes.filter((respuesta) => !respuesta.correcto).length;
		const proximoRepaso = registro?.proximoRepaso;
		const repasoVencido = Boolean(
			proximoRepaso && new Date(proximoRepaso).getTime() <= fecha.getTime(),
		);
		const critico = objetivo.profundidad === 'critico';

		if (estado === 'dominado' && !repasoVencido) continue;

		const motivos: string[] = [];
		let prioridad = 4;

		if (respuestas >= 2 && fallos / respuestas >= 0.5) {
			prioridad = 0;
			motivos.push(`${Math.round((fallos / respuestas) * 100)}% de fallos recientes`);
		} else if (respuestas === 0) {
			prioridad = 1;
			motivos.push('sin practicar todavía');
		} else if (fallosRecientes > 0) {
			prioridad = 2;
			motivos.push(`${fallosRecientes} fallo${fallosRecientes === 1 ? '' : 's'} en los últimos 7 días`);
		}

		if (critico) {
			prioridad = Math.min(prioridad, 3);
			motivos.push('objective crítico');
		}
		if (repasoVencido) {
			prioridad = 0;
			motivos.push('repaso vencido');
		}

		areas.push({
			objetivoId,
			taskId: objetivo.taskId,
			dominioId: dominioDeTaskId(objetivo.taskId),
			dominioNumero: Number(objetivo.taskId.split('.')[0]),
			titulo: objetivo.titulo,
			estado,
			critico,
			respuestas,
			fallos,
			porcentajeAcierto: respuestas === 0 ? null : Math.round(((respuestas - fallos) / respuestas) * 100),
			proximoRepaso,
			repasoVencido,
			prioridad,
			motivos,
		});
	}

	areas.sort(
		(a, b) =>
			a.prioridad - b.prioridad ||
			(b.porcentajeAcierto ?? -1) - (a.porcentajeAcierto ?? -1) ||
			a.objetivoId.localeCompare(b.objetivoId),
	);

	return areas;
}
