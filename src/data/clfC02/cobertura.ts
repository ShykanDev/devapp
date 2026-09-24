import { dominiosClfC02, objetivosClfC02, type ProfundidadClfC02 } from '@/data/clfC02';
import {
	DOMINIO_POR_ID,
	TASK_POR_ID,
	TODOS_LOS_IDS_OBJETIVO,
} from '@/data/clfC02/blueprint-ext';
import {
	OBJETIVOS_SIN_PREGUNTA,
	OBJETIVOS_SIN_TARJETA,
	TAREAS_PENDIENTES,
	TODAS_LAS_PREGUNTAS,
	TODAS_LAS_TARJETAS,
	TODOS_LOS_GRUPOS,
	TODOS_LOS_PARES,
	recursosDeObjetivo,
} from '@/data/clfC02/registroContenido';
import {
	avisosBancoPorDominio,
	validarClfC02,
	type HallazgoValidacion,
} from '@/data/clfC02/validacion';

export type EstadoCobertura = 'completo' | 'parcial' | 'pendiente';

export interface CoberturaObjetivo {
	id: string;
	taskId: string;
	index: number;
	titulo: string;
	profundidad: ProfundidadClfC02;
	conceptos: string[];
	grupos: number;
	preguntas: number;
	tarjetas: number;
	pares: number;
	exencionTarjeta: boolean;
	exencionPregunta: boolean;
	estado: EstadoCobertura;
}

export interface CoberturaTask {
	taskId: string;
	titulo: string;
	dominioId: string;
	pendiente: boolean;
	objetivos: CoberturaObjetivo[];
	dominados: number;
	porcentaje: number;
}

export interface CoberturaDominio {
	id: string;
	numero: number;
	nombreEs: string;
	peso: number;
	pendiente: boolean;
	objetivos: CoberturaObjetivo[];
	tasks: CoberturaTask[];
	completos: number;
	porcentaje: number;
}

export interface CoberturaClfC02 {
	dominios: CoberturaDominio[];
	totales: {
		dominios: number;
		tasks: number;
		objetivos: number;
		conContenido: number;
		conPreguntas: number;
		conTarjetas: number;
		conComparacion: number;
		huerfanos: string[];
	};
	tareasPendientes: string[];
	hallazgos: HallazgoValidacion[];
	avisosBanco: HallazgoValidacion[];
	porcentaje: number;
}

function idsReferenciados(): string[] {
	const refs = [
		...TODOS_LOS_GRUPOS.flatMap((grupo) => grupo.objetivos),
		...TODAS_LAS_PREGUNTAS.flatMap((pregunta) => pregunta.objetivos),
		...TODAS_LAS_TARJETAS.flatMap((tarjeta) => tarjeta.objetivos),
		...TODOS_LOS_PARES.flatMap((par) => par.objetivos),
	];
	return Array.from(new Set(refs));
}

export function objetivosHuerfanos(): string[] {
	return idsReferenciados().filter((id) => !TODOS_LOS_IDS_OBJETIVO.includes(id));
}

function construirObjetivo(objetivo: (typeof objetivosClfC02)[number]): CoberturaObjetivo {
	const id = `${objetivo.taskId}#${objetivo.index}`;
	const recursos = recursosDeObjetivo(id);
	const exencionTarjeta = OBJETIVOS_SIN_TARJETA.includes(id);
	const exencionPregunta = OBJETIVOS_SIN_PREGUNTA.includes(id);
	const requiereTarjeta = objetivo.profundidad === 'critico' && !exencionTarjeta;
	const tienePregunta = recursos.preguntas.length > 0 || exencionPregunta;

	let estado: EstadoCobertura = 'completo';
	if (recursos.grupos.length === 0) {
		estado = 'parcial';
	} else if (!tienePregunta) {
		estado = 'parcial';
	} else if (requiereTarjeta && recursos.tarjetas.length === 0) {
		estado = 'parcial';
	}

	return {
		id,
		taskId: objetivo.taskId,
		index: objetivo.index,
		titulo: objetivo.titulo,
		profundidad: objetivo.profundidad,
		conceptos: objetivo.conceptos,
		grupos: recursos.grupos.length,
		preguntas: recursos.preguntas.length,
		tarjetas: recursos.tarjetas.length,
		pares: recursos.pares.length,
		exencionTarjeta,
		exencionPregunta,
		estado,
	};
}

export function coberturaClfC02(): CoberturaClfC02 {
	const objetivos = objetivosClfC02.map(construirObjetivo);

	const dominios: CoberturaDominio[] = dominiosClfC02.map((dominio) => {
		const pendiente = dominio.taskStatements.some((task) => TAREAS_PENDIENTES.includes(task.id));
		const tasks: CoberturaTask[] = dominio.taskStatements.map((task) => {
			const objetivosTask = objetivos.filter((objetivo) => objetivo.taskId === task.id);
			const completos = objetivosTask.filter((objetivo) => objetivo.estado === 'completo').length;
			return {
				taskId: task.id,
				titulo: task.titulo,
				dominioId: dominio.id,
				pendiente: TAREAS_PENDIENTES.includes(task.id),
				objetivos: objetivosTask,
				dominados: completos,
				porcentaje:
					objetivosTask.length === 0
						? 0
						: Math.round((completos / objetivosTask.length) * 100),
			};
		});
		const objetivosDominio = tasks.flatMap((task) => task.objetivos);
		const completos = objetivosDominio.filter((objetivo) => objetivo.estado === 'completo').length;
		return {
			id: dominio.id,
			numero: dominio.numero,
			nombreEs: dominio.nombreEs,
			peso: dominio.peso,
			pendiente,
			objetivos: objetivosDominio,
			tasks,
			completos,
			porcentaje:
				objetivosDominio.length === 0
					? 0
					: Math.round((completos / objetivosDominio.length) * 100),
		};
	});

	const completos = objetivos.filter((objetivo) => objetivo.estado === 'completo').length;

	return {
		dominios,
		totales: {
			dominios: dominios.length,
			tasks: dominios.reduce((total, dominio) => total + dominio.tasks.length, 0),
			objetivos: objetivos.length,
			conContenido: objetivos.filter((objetivo) => objetivo.grupos > 0).length,
			conPreguntas: objetivos.filter((objetivo) => objetivo.preguntas > 0).length,
			conTarjetas: objetivos.filter((objetivo) => objetivo.tarjetas > 0).length,
			conComparacion: objetivos.filter((objetivo) => objetivo.pares > 0).length,
			huerfanos: objetivosHuerfanos(),
		},
		tareasPendientes: [...TAREAS_PENDIENTES],
		hallazgos: validarClfC02(),
		avisosBanco: avisosBancoPorDominio(),
		porcentaje:
			objetivos.length === 0 ? 0 : Math.round((completos / objetivos.length) * 100),
	};
}

export function razonEstadoCobertura(objetivo: CoberturaObjetivo): string {
	if (objetivo.estado === 'completo') {
		const partes = [
			`${objetivo.grupos} grupo${objetivo.grupos === 1 ? '' : 's'}`,
			`${objetivo.preguntas} pregunta${objetivo.preguntas === 1 ? '' : 's'}`,
			`${objetivo.tarjetas} tarjeta${objetivo.tarjetas === 1 ? '' : 's'}`,
		];
		if (objetivo.pares > 0) partes.push(`${objetivo.pares} comparación`);
		return partes.join(' · ');
	}
	const faltantes: string[] = [];
	if (objetivo.grupos === 0) faltantes.push('contenido');
	if (objetivo.preguntas === 0 && !objetivo.exencionPregunta) faltantes.push('preguntas');
	if (objetivo.profundidad === 'critico' && objetivo.tarjetas === 0 && !objetivo.exencionTarjeta) {
		faltantes.push('tarjetas');
	}
	return faltantes.length === 0 ? 'Pendiente' : `Falta ${faltantes.join(', ')}`;
}

export function dominioDeObjetivo(objetivoId: string): string {
	const taskId = objetivoId.split('#')[0];
	return TASK_POR_ID[taskId]?.dominioId ?? '';
}

export function nombreDominio(dominioId: string): string {
	const dominio = DOMINIO_POR_ID[dominioId];
	return dominio ? `Dominio ${dominio.numero} · ${dominio.nombreEs}` : dominioId;
}
