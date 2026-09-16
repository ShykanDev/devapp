import { certificadoAifC01, dominiosAifC01 } from '@/data/aifC01';
import { dominioDeTaskId } from '@/data/aifC01/blueprint-ext';
import {
	TAREAS_PENDIENTES,
	TODAS_LAS_PREGUNTAS,
	paresDeObjetivos,
	preguntasDeObjetivos,
	preguntasDeTask,
	tarjetasDeObjetivos,
} from '@/data/aifC01/registroContenido';
import { CUOTAS_EXAMEN_FINAL } from '@/data/aifC01/validacion';
import type { ParConfusionAifC01, PreguntaAifC01, TarjetaAifC01 } from '@/data/aifC01/types';

export type Aleatorio = () => number;

export interface OpcionesPractica {
	n?: number;
	rng?: Aleatorio;
}

export interface ConstruccionOk {
	ok: true;
	preguntas: PreguntaAifC01[];
	avisos: string[];
}

export interface ConstruccionError {
	ok: false;
	motivo: string;
}

export type ResultadoConstruccion = ConstruccionOk | ConstruccionError;

export interface SesionRepasoOk {
	ok: true;
	preguntas: PreguntaAifC01[];
	tarjetas: TarjetaAifC01[];
	pares: ParConfusionAifC01[];
	avisos: string[];
}

export type ResultadoRepaso = SesionRepasoOk | ConstruccionError;

export interface PuntajeDominio {
	dominioId: string;
	numero: number;
	nombreEs: string;
	peso: number;
	total: number;
	correctas: number;
	porcentaje: number;
}

export interface PuntajeObjetivo {
	objetivoId: string;
	total: number;
	correctas: number;
	porcentaje: number;
}

export interface FinalizacionPractica {
	puntaje: PuntajeIntento;
	respuestas: Record<string, number>;
	duracionMs: number;
}

export interface PuntajeIntento {
	total: number;
	correctas: number;
	porcentaje: number;
	falladas: string[];
	porDominio: PuntajeDominio[];
	porObjetivo: PuntajeObjetivo[];
	orientativo: string;
}

export const AVISO_ORIENTATIVO =
	'El porcentaje es orientativo y no equivale al scoring escalado de AWS (100-1000, mínimo 700 en el examen real).';

/** Generador determinista para tests (mulberry32). */
export function crearAleatorioSemilla(semilla: number): Aleatorio {
	let estado = semilla >>> 0;
	return () => {
		estado = (estado + 0x6d2b79f5) >>> 0;
		let resultado = Math.imul(estado ^ (estado >>> 15), 1 | estado);
		resultado = (resultado + Math.imul(resultado ^ (resultado >>> 7), 61 | resultado)) ^ resultado;
		return ((resultado ^ (resultado >>> 14)) >>> 0) / 4294967296;
	};
}

export function mezclar<T>(elementos: T[], rng: Aleatorio = Math.random): T[] {
	const copia = [...elementos];
	for (let i = copia.length - 1; i > 0; i -= 1) {
		const j = Math.floor(rng() * (i + 1));
		[copia[i], copia[j]] = [copia[j], copia[i]];
	}
	return copia;
}

export function cuotaExamenFinal(
	peso: number,
	total: number = certificadoAifC01.preguntasTotales,
): number {
	return Math.round((peso / 100) * total);
}

export function cuotasExamenFinal(): Record<string, number> {
	return { ...CUOTAS_EXAMEN_FINAL };
}

export function preguntasDeDominio(dominioId: string): PreguntaAifC01[] {
	return TODAS_LAS_PREGUNTAS.filter(
		(pregunta) => dominioDeTaskId(pregunta.taskId) === dominioId,
	);
}

function avisoBancoIncompleto(tipo: 'task' | 'dominio', scope: string, disponibles: number, solicitadas: number): string {
	if (disponibles >= solicitadas) return '';
	return tipo === 'dominio'
		? `Banco incompleto: ${scope} tiene ${disponibles} pregunta${disponibles === 1 ? '' : 's'} disponibles y se pidieron ${solicitadas}. Se practica con lo que existe; hay tasks pendientes de contenido.`
		: `Banco incompleto: ${scope} tiene ${disponibles} pregunta${disponibles === 1 ? '' : 's'} disponibles y se pidieron ${solicitadas}.`;
}

function construirDesde(
	pool: PreguntaAifC01[],
	opciones: OpcionesPractica,
	avisos: string[],
): ResultadoConstruccion {
	const solicitadas = opciones.n ?? pool.length;
	if (pool.length === 0) {
		return { ok: false, motivo: 'Todavía no hay preguntas para esta selección.' };
	}
	const rng = opciones.rng ?? Math.random;
	const seleccion = mezclar(pool, rng).slice(0, solicitadas);
	return {
		ok: true,
		preguntas: seleccion,
		avisos: avisos.length > 0 ? avisos : [AVISO_ORIENTATIVO],
	};
}

export function construirPracticaTask(
	taskId: string,
	opciones: OpcionesPractica = {},
): ResultadoConstruccion {
	const pool = preguntasDeTask(taskId);
	const solicitadas = opciones.n ?? 12;
	const aviso = avisoBancoIncompleto('task', `la task ${taskId}`, pool.length, solicitadas);
	const avisos = aviso ? [aviso, AVISO_ORIENTATIVO] : [];
	return construirDesde(pool, opciones, avisos);
}

export function construirPracticaDominio(
	dominioId: string,
	opciones: OpcionesPractica = {},
): ResultadoConstruccion {
	const pool = preguntasDeDominio(dominioId);
	const solicitadas = opciones.n ?? 12;
	const dominio = dominiosAifC01.find((candidato) => candidato.id === dominioId);
	if (!dominio) {
		return { ok: false, motivo: `El dominio ${dominioId} no existe en el blueprint.` };
	}
	const pendientes = dominio.taskStatements
		.filter((task) => TAREAS_PENDIENTES.includes(task.id))
		.map((task) => task.id);
	if (pool.length === 0) {
		return {
			ok: false,
			motivo: `El Dominio ${dominio.numero} (${dominio.nombreEs}) todavía no tiene preguntas: faltan los tasks ${pendientes.join(', ')}.`,
		};
	}
	const aviso = avisoBancoIncompleto(
		'dominio',
		dominio.nombreEs,
		pool.length,
		solicitadas,
	);
	const avisos = aviso ? [aviso, AVISO_ORIENTATIVO] : [];
	return construirDesde(pool, opciones, avisos);
}

export function construirExamenFinal(opciones: OpcionesPractica = {}): ResultadoConstruccion {
	const faltantes: string[] = [];
	const seleccion: PreguntaAifC01[] = [];
	const rng = opciones.rng ?? Math.random;

	for (const dominio of dominiosAifC01) {
		const cuota = CUOTAS_EXAMEN_FINAL[dominio.id] ?? 0;
		const pool = preguntasDeDominio(dominio.id);
		if (pool.length < cuota) {
			faltantes.push(`Dominio ${dominio.numero} (${pool.length}/${cuota})`);
			continue;
		}
		seleccion.push(...mezclar(pool, rng).slice(0, cuota));
	}

	if (faltantes.length > 0) {
		return {
			ok: false,
			motivo: `El examen final requiere el banco completo: falta contenido en ${faltantes.join(', ')}.`,
		};
	}

	return {
		ok: true,
		preguntas: seleccion,
		avisos: [
			`Examen de ${seleccion.length} preguntas ponderado por peso oficial (${dominiosAifC01
				.map((dominio) => `${dominio.numero}: ${CUOTAS_EXAMEN_FINAL[dominio.id]}`)
				.join(' · ')}).`,
			AVISO_ORIENTATIVO,
		],
	};
}

export function construirPracticaDebil(
	objetivoIds: string[],
	opciones: OpcionesPractica & { priorizarFalladas?: string[] } = {},
): ResultadoConstruccion {
	const pool = preguntasDeObjetivos(objetivoIds);
	if (pool.length === 0) {
		return { ok: false, motivo: 'No hay preguntas para las debilidades seleccionadas.' };
	}
	const rng = opciones.rng ?? Math.random;
	const priorizadas = new Set(opciones.priorizarFalladas ?? []);
	const primeras = mezclar(
		pool.filter((pregunta) => priorizadas.has(pregunta.id)),
		rng,
	);
	const resto = mezclar(
		pool.filter((pregunta) => !priorizadas.has(pregunta.id)),
		rng,
	);
	const solicitadas = opciones.n ?? 12;
	const seleccion = [...primeras, ...resto].slice(0, solicitadas);
	return {
		ok: true,
		preguntas: seleccion,
		avisos: [
			`Sesión centrada en ${objetivoIds.length} objective${objetivoIds.length === 1 ? '' : 's'} con debilidades.`,
			AVISO_ORIENTATIVO,
		],
	};
}

export function construirSesionRepaso(
	objetivoIds: string[],
	opciones: OpcionesPractica & { priorizarFalladas?: string[] } = {},
): ResultadoRepaso {
	const base = construirPracticaDebil(objetivoIds, { ...opciones, n: opciones.n ?? 8 });
	if (!base.ok) return base;

	const rng = opciones.rng ?? Math.random;
	return {
		ok: true,
		preguntas: base.preguntas,
		tarjetas: mezclar(tarjetasDeObjetivos(objetivoIds), rng).slice(0, 6),
		pares: mezclar(paresDeObjetivos(objetivoIds), rng).slice(0, 3),
		avisos: base.avisos,
	};
}

export function puntuarIntento(
	preguntas: PreguntaAifC01[],
	respuestas: Record<string, number | null | undefined>,
): PuntajeIntento {
	const falladas: string[] = [];
	const porDominio = new Map<string, { total: number; correctas: number }>();
	const porObjetivo = new Map<string, { total: number; correctas: number }>();
	let correctas = 0;

	for (const pregunta of preguntas) {
		const respuesta = respuestas[pregunta.id];
		const acierto = respuesta === pregunta.correctAnswer;
		if (acierto) correctas += 1;
		else falladas.push(pregunta.id);

		const dominioId = dominioDeTaskId(pregunta.taskId);
		const acumuladoDominio = porDominio.get(dominioId) ?? { total: 0, correctas: 0 };
		acumuladoDominio.total += 1;
		if (acierto) acumuladoDominio.correctas += 1;
		porDominio.set(dominioId, acumuladoDominio);

		for (const objetivoId of pregunta.objetivos) {
			const acumuladoObjetivo = porObjetivo.get(objetivoId) ?? { total: 0, correctas: 0 };
			acumuladoObjetivo.total += 1;
			if (acierto) acumuladoObjetivo.correctas += 1;
			porObjetivo.set(objetivoId, acumuladoObjetivo);
		}
	}

	const desgloseDominio: PuntajeDominio[] = dominiosAifC01
		.filter((dominio) => porDominio.has(dominio.id))
		.map((dominio) => {
			const datos = porDominio.get(dominio.id) ?? { total: 0, correctas: 0 };
			return {
				dominioId: dominio.id,
				numero: dominio.numero,
				nombreEs: dominio.nombreEs,
				peso: dominio.peso,
				total: datos.total,
				correctas: datos.correctas,
				porcentaje: datos.total === 0 ? 0 : Math.round((datos.correctas / datos.total) * 100),
			};
		});

	const desgloseObjetivo: PuntajeObjetivo[] = [...porObjetivo.entries()]
		.map(([objetivoId, datos]) => ({
			objetivoId,
			total: datos.total,
			correctas: datos.correctas,
			porcentaje: datos.total === 0 ? 0 : Math.round((datos.correctas / datos.total) * 100),
		}))
		.sort((a, b) => a.objetivoId.localeCompare(b.objetivoId));

	const total = preguntas.length;
	return {
		total,
		correctas,
		porcentaje: total === 0 ? 0 : Math.round((correctas / total) * 100),
		falladas,
		porDominio: desgloseDominio,
		porObjetivo: desgloseObjetivo,
		orientativo: AVISO_ORIENTATIVO,
	};
}

export function distribucionPorDominio(preguntas: PreguntaAifC01[]): Record<string, number> {
	const distribucion: Record<string, number> = {};
	for (const pregunta of preguntas) {
		const dominioId = dominioDeTaskId(pregunta.taskId);
		distribucion[dominioId] = (distribucion[dominioId] ?? 0) + 1;
	}
	return distribucion;
}
