import { objetivosClfC02 } from '@/data/clfC02';
import {
	DOMINIO_POR_ID,
	TASK_POR_ID,
	dominioDeTaskId,
	ponderacionDeTaskId,
} from '@/data/clfC02/blueprint-ext';
import {
	TODAS_LAS_PREGUNTAS,
	TODAS_LAS_TARJETAS,
	TODOS_LOS_GRUPOS,
	TODOS_LOS_PARES,
	recursosDeObjetivo,
} from '@/data/clfC02/registroContenido';
import { glosarioGeneralClfC02 } from '@/data/clfC02/glosario/general';
import { serviciosGeneralClfC02 } from '@/data/clfC02/servicios/general';
import type { Bloque, GrupoTematico } from '@/data/clfC02/types';

export type TipoEntradaIndice =
	| 'objetivo'
	| 'grupo'
	| 'tarjeta'
	| 'pregunta'
	| 'comparacion'
	| 'glosario'
	| 'servicio';

export interface EntradaIndice {
	id: string;
	tipo: TipoEntradaIndice;
	titulo: string;
	texto: string;
	dominios: string[];
	taskId: string;
	ruta: string;
	pesoDominio: number;
}

export interface ResultadoBusqueda extends EntradaIndice {
	peso: number;
}

const ETIQUETA_TIPO: Record<TipoEntradaIndice, string> = {
	objetivo: 'Objective',
	grupo: 'Tema',
	tarjeta: 'Flashcard',
	pregunta: 'Pregunta',
	comparacion: 'Comparación',
	glosario: 'Glosario',
	servicio: 'Servicio',
};

export function etiquetaTipoEntrada(tipo: TipoEntradaIndice): string {
	return ETIQUETA_TIPO[tipo];
}

/** Normaliza para búsqueda: minúsculas y sin acentos. */
export function normalizar(texto: string): string {
	return texto
		.toLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '');
}

function rutaDeTask(taskId: string): string {
	return `/cloud-practitioner/task/${taskId}`;
}

function prefijoDeTask(taskId: string): string {
	if (!taskId) return '';
	const dominio = DOMINIO_POR_ID[dominioDeTaskId(taskId)];
	const numero = dominio ? dominio.numero : '·';
	const titulo = TASK_POR_ID[taskId]?.titulo ?? '';
	return `Dominio ${numero} · Task ${taskId}${titulo ? ` — ${titulo}` : ''}`;
}

function textoDeBloque(bloque: Bloque): string {
	switch (bloque.tipo) {
		case 'concepto':
			return bloque.md;
		case 'ejemplo':
			return bloque.md;
		case 'clave':
			return bloque.items.join(' ');
		case 'cuandoUsar':
			return [...bloque.usar, ...bloque.noUsar].join(' ');
		case 'errorComun':
			return `${bloque.error} ${bloque.correccion}`;
		case 'escenario':
			return `${bloque.situacion} ${bloque.analisis}`;
		case 'comparacion':
			return bloque.parId;
		case 'servicio':
			return bloque.nombre;
		default:
			return '';
	}
}

function textoDeGrupo(grupo: GrupoTematico): string {
	return grupo.bloques
		.map(textoDeBloque)
		.concat(grupo.preguntasGuia)
		.join(' ');
}

export function construirIndice(): EntradaIndice[] {
	const entradas: EntradaIndice[] = [];

	for (const objetivo of objetivosClfC02) {
		const id = `${objetivo.taskId}#${objetivo.index}`;
		// Solo se indexa contenido autorizado: los objectives de tasks pendientes
		// existen en el blueprint pero todavía no son navegables.
		if (recursosDeObjetivo(id).grupos.length === 0) continue;
		entradas.push({
			id,
			tipo: 'objetivo',
			titulo: `Task ${objetivo.taskId} · Objective ${objetivo.index}`,
			texto: `${objetivo.titulo} ${objetivo.conceptos.join(' ')}`,
			dominios: [dominioDeTaskId(objetivo.taskId)],
			taskId: objetivo.taskId,
			ruta: rutaDeTask(objetivo.taskId),
			pesoDominio: ponderacionDeTaskId(objetivo.taskId),
		});
	}

	for (const grupo of TODOS_LOS_GRUPOS) {
		const taskId = grupo.objetivos[0]?.split('#')[0] ?? '';
		entradas.push({
			id: grupo.id,
			tipo: 'grupo',
			titulo: grupo.titulo,
			texto: `${prefijoDeTask(taskId)} ${textoDeGrupo(grupo)}`,
			dominios: [dominioDeTaskId(taskId)],
			taskId,
			ruta: rutaDeTask(taskId),
			pesoDominio: ponderacionDeTaskId(taskId),
		});
	}

	for (const tarjeta of TODAS_LAS_TARJETAS) {
		entradas.push({
			id: tarjeta.id,
			tipo: 'tarjeta',
			titulo: tarjeta.frente,
			texto: tarjeta.reverso,
			dominios: [dominioDeTaskId(tarjeta.taskId)],
			taskId: tarjeta.taskId,
			ruta: rutaDeTask(tarjeta.taskId),
			pesoDominio: ponderacionDeTaskId(tarjeta.taskId),
		});
	}

	for (const pregunta of TODAS_LAS_PREGUNTAS) {
		entradas.push({
			id: pregunta.id,
			tipo: 'pregunta',
			titulo: pregunta.question,
			texto: `${pregunta.options.join(' ')} ${pregunta.explanation}`,
			dominios: [dominioDeTaskId(pregunta.taskId)],
			taskId: pregunta.taskId,
			ruta: rutaDeTask(pregunta.taskId),
			pesoDominio: ponderacionDeTaskId(pregunta.taskId),
		});
	}

	for (const par of TODOS_LOS_PARES) {
		const taskId = par.objetivos[0]?.split('#')[0] ?? '';
		entradas.push({
			id: par.id,
			tipo: 'comparacion',
			titulo: par.etiqueta,
			texto: `${par.a.titulo} ${par.a.resumen} ${par.b.titulo} ${par.b.resumen} ${par.diferenciaClave}`,
			dominios: [dominioDeTaskId(taskId)],
			taskId,
			ruta: '/cloud-practitioner/comparaciones',
			pesoDominio: ponderacionDeTaskId(taskId),
		});
	}

	for (const termino of glosarioGeneralClfC02) {
		entradas.push({
			id: termino.id,
			tipo: 'glosario',
			titulo: termino.termino,
			texto: termino.definicion,
			dominios: termino.dominios,
			taskId: '',
			ruta: '/cloud-practitioner/glosario',
			pesoDominio: 34,
		});
	}

	for (const servicio of serviciosGeneralClfC02) {
		const taskId = servicio.tareas[0] ?? '';
		entradas.push({
			id: servicio.nombre,
			tipo: 'servicio',
			titulo: servicio.nombre,
			texto: `${servicio.queResuelve} ${servicio.paraQueSeUsa}`,
			dominios: [dominioDeTaskId(taskId)],
			taskId,
			ruta: '/cloud-practitioner/servicios',
			pesoDominio: ponderacionDeTaskId(taskId),
		});
	}

	return entradas;
}

export function buscarEnIndice(
	consulta: string,
	indice: EntradaIndice[] = construirIndice(),
	limite = 40,
): ResultadoBusqueda[] {
	const terminos = normalizar(consulta)
		.split(/\s+/)
		.map((termino) => termino.trim())
		.filter((termino) => termino.length >= 2);

	if (terminos.length === 0) return [];

	const resultados: ResultadoBusqueda[] = [];
	for (const entrada of indice) {
		const titulo = normalizar(entrada.titulo);
		const texto = normalizar(entrada.texto);
		let peso = 0;
		let coincideTodo = true;

		for (const termino of terminos) {
			const enTitulo = titulo.includes(termino);
			const enTexto = texto.includes(termino);
			if (!enTitulo && !enTexto) {
				coincideTodo = false;
				break;
			}
			peso += enTitulo ? 3 : 1;
		}

		if (coincideTodo && peso > 0) {
			resultados.push({ ...entrada, peso });
		}
	}

	resultados.sort(
		(a, b) =>
			b.peso - a.peso ||
			b.pesoDominio - a.pesoDominio ||
			a.titulo.localeCompare(b.titulo, 'es'),
	);

	return resultados.slice(0, limite);
}

export function agruparResultados(
	resultados: ResultadoBusqueda[],
): Array<{ tipo: TipoEntradaIndice; resultados: ResultadoBusqueda[] }> {
	const orden: TipoEntradaIndice[] = [
		'objetivo',
		'grupo',
		'tarjeta',
		'pregunta',
		'comparacion',
		'glosario',
		'servicio',
	];
	return orden
		.map((tipo) => ({ tipo, resultados: resultados.filter((resultado) => resultado.tipo === tipo) }))
		.filter((grupo) => grupo.resultados.length > 0);
}
