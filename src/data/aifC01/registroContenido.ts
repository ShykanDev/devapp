import { taskStatementsAifC01 } from '@/data/aifC01';
import type {
	GrupoTematico,
	ParConfusionAifC01,
	PreguntaAifC01,
	RecursosObjetivo,
	TarjetaAifC01,
} from '@/data/aifC01/types';
import { gruposTask11 } from '@/data/aifC01/grupos/task-1.1';
import { gruposTask12 } from '@/data/aifC01/grupos/task-1.2';
import { gruposTask13 } from '@/data/aifC01/grupos/task-1.3';
import { gruposTask21 } from '@/data/aifC01/grupos/task-2.1';
import { gruposTask22 } from '@/data/aifC01/grupos/task-2.2';
import { gruposTask23 } from '@/data/aifC01/grupos/task-2.3';
import { gruposTask31 } from '@/data/aifC01/grupos/task-3.1';
import { gruposTask32 } from '@/data/aifC01/grupos/task-3.2';
import { gruposTask33 } from '@/data/aifC01/grupos/task-3.3';
import { gruposTask34 } from '@/data/aifC01/grupos/task-3.4';
import { gruposTask41 } from '@/data/aifC01/grupos/task-4.1';
import { gruposTask42 } from '@/data/aifC01/grupos/task-4.2';
import { gruposTask51 } from '@/data/aifC01/grupos/task-5.1';
import { gruposTask52 } from '@/data/aifC01/grupos/task-5.2';
import { paresTask11 } from '@/data/aifC01/comparaciones/task-1.1';
import { paresTask12 } from '@/data/aifC01/comparaciones/task-1.2';
import { paresTask13 } from '@/data/aifC01/comparaciones/task-1.3';
import { paresTask21 } from '@/data/aifC01/comparaciones/task-2.1';
import { paresTask22 } from '@/data/aifC01/comparaciones/task-2.2';
import { paresTask23 } from '@/data/aifC01/comparaciones/task-2.3';
import { paresTask31 } from '@/data/aifC01/comparaciones/task-3.1';
import { paresTask32 } from '@/data/aifC01/comparaciones/task-3.2';
import { paresTask33 } from '@/data/aifC01/comparaciones/task-3.3';
import { paresTask34 } from '@/data/aifC01/comparaciones/task-3.4';
import { paresTask41 } from '@/data/aifC01/comparaciones/task-4.1';
import { paresTask42 } from '@/data/aifC01/comparaciones/task-4.2';
import { paresTask51 } from '@/data/aifC01/comparaciones/task-5.1';
import { paresTask52 } from '@/data/aifC01/comparaciones/task-5.2';
import { preguntasTask11 } from '@/data/aifC01/preguntas/task-1.1';
import { preguntasTask12 } from '@/data/aifC01/preguntas/task-1.2';
import { preguntasTask13 } from '@/data/aifC01/preguntas/task-1.3';
import { preguntasTask21 } from '@/data/aifC01/preguntas/task-2.1';
import { preguntasTask22 } from '@/data/aifC01/preguntas/task-2.2';
import { preguntasTask23 } from '@/data/aifC01/preguntas/task-2.3';
import { preguntasTask31 } from '@/data/aifC01/preguntas/task-3.1';
import { preguntasTask32 } from '@/data/aifC01/preguntas/task-3.2';
import { preguntasTask33 } from '@/data/aifC01/preguntas/task-3.3';
import { preguntasTask34 } from '@/data/aifC01/preguntas/task-3.4';
import { preguntasTask41 } from '@/data/aifC01/preguntas/task-4.1';
import { preguntasTask42 } from '@/data/aifC01/preguntas/task-4.2';
import { preguntasTask51 } from '@/data/aifC01/preguntas/task-5.1';
import { preguntasTask52 } from '@/data/aifC01/preguntas/task-5.2';
import { tarjetasTask11 } from '@/data/aifC01/tarjetas/task-1.1';
import { tarjetasTask12 } from '@/data/aifC01/tarjetas/task-1.2';
import { tarjetasTask13 } from '@/data/aifC01/tarjetas/task-1.3';
import { tarjetasTask21 } from '@/data/aifC01/tarjetas/task-2.1';
import { tarjetasTask22 } from '@/data/aifC01/tarjetas/task-2.2';
import { tarjetasTask23 } from '@/data/aifC01/tarjetas/task-2.3';
import { tarjetasTask31 } from '@/data/aifC01/tarjetas/task-3.1';
import { tarjetasTask32 } from '@/data/aifC01/tarjetas/task-3.2';
import { tarjetasTask33 } from '@/data/aifC01/tarjetas/task-3.3';
import { tarjetasTask34 } from '@/data/aifC01/tarjetas/task-3.4';
import { tarjetasTask41 } from '@/data/aifC01/tarjetas/task-4.1';
import { tarjetasTask42 } from '@/data/aifC01/tarjetas/task-4.2';
import { tarjetasTask51 } from '@/data/aifC01/tarjetas/task-5.1';
import { tarjetasTask52 } from '@/data/aifC01/tarjetas/task-5.2';

export const GRUPOS_POR_TASK: Record<string, GrupoTematico[]> = {
	'1.1': gruposTask11,
	'1.2': gruposTask12,
	'1.3': gruposTask13,
	'2.1': gruposTask21,
	'2.2': gruposTask22,
	'2.3': gruposTask23,
	'3.1': gruposTask31,
	'3.2': gruposTask32,
	'3.3': gruposTask33,
	'3.4': gruposTask34,
	'4.1': gruposTask41,
	'4.2': gruposTask42,
	'5.1': gruposTask51,
	'5.2': gruposTask52,
};

export const PREGUNTAS_POR_TASK: Record<string, PreguntaAifC01[]> = {
	'1.1': preguntasTask11,
	'1.2': preguntasTask12,
	'1.3': preguntasTask13,
	'2.1': preguntasTask21,
	'2.2': preguntasTask22,
	'2.3': preguntasTask23,
	'3.1': preguntasTask31,
	'3.2': preguntasTask32,
	'3.3': preguntasTask33,
	'3.4': preguntasTask34,
	'4.1': preguntasTask41,
	'4.2': preguntasTask42,
	'5.1': preguntasTask51,
	'5.2': preguntasTask52,
};

export const TARJETAS_POR_TASK: Record<string, TarjetaAifC01[]> = {
	'1.1': tarjetasTask11,
	'1.2': tarjetasTask12,
	'1.3': tarjetasTask13,
	'2.1': tarjetasTask21,
	'2.2': tarjetasTask22,
	'2.3': tarjetasTask23,
	'3.1': tarjetasTask31,
	'3.2': tarjetasTask32,
	'3.3': tarjetasTask33,
	'3.4': tarjetasTask34,
	'4.1': tarjetasTask41,
	'4.2': tarjetasTask42,
	'5.1': tarjetasTask51,
	'5.2': tarjetasTask52,
};

export const PARES_POR_TASK: Record<string, ParConfusionAifC01[]> = {
	'1.1': paresTask11,
	'1.2': paresTask12,
	'1.3': paresTask13,
	'2.1': paresTask21,
	'2.2': paresTask22,
	'2.3': paresTask23,
	'3.1': paresTask31,
	'3.2': paresTask32,
	'3.3': paresTask33,
	'3.4': paresTask34,
	'4.1': paresTask41,
	'4.2': paresTask42,
	'5.1': paresTask51,
	'5.2': paresTask52,
};

export const TODOS_LOS_GRUPOS: GrupoTematico[] = Object.values(GRUPOS_POR_TASK).flat();
export const TODAS_LAS_PREGUNTAS: PreguntaAifC01[] = Object.values(PREGUNTAS_POR_TASK).flat();
export const TODAS_LAS_TARJETAS: TarjetaAifC01[] = Object.values(TARJETAS_POR_TASK).flat();
export const TODOS_LOS_PARES: ParConfusionAifC01[] = Object.values(PARES_POR_TASK).flat();

export const TAREAS_CON_CONTENIDO: string[] = Array.from(
	new Set([
		...Object.keys(GRUPOS_POR_TASK),
		...Object.keys(PREGUNTAS_POR_TASK),
		...Object.keys(TARJETAS_POR_TASK),
		...Object.keys(PARES_POR_TASK),
	]),
).sort();

/**
 * Tasks declarados explícitamente como pendientes: son los del blueprint que
 * todavía no tienen módulo de contenido. Se deriva para que no haya deriva
 * entre el registro real y la declaración de cobertura.
 */
export const TAREAS_PENDIENTES: string[] = taskStatementsAifC01
	.filter((task) => !TAREAS_CON_CONTENIDO.includes(task.id))
	.map((task) => task.id);

/** Excepciones declaradas: objectives críticos que no exigen tarjeta propia. */
export const OBJETIVOS_SIN_TARJETA: string[] = [];

/** Excepciones declaradas: objectives cubiertos solo por preguntas de su task. */
export const OBJETIVOS_SIN_PREGUNTA: string[] = [];

export const MAPA_GRUPOS: Record<string, GrupoTematico> = Object.fromEntries(
	TODOS_LOS_GRUPOS.map((grupo) => [grupo.id, grupo]),
);

export const MAPA_PREGUNTAS: Record<string, PreguntaAifC01> = Object.fromEntries(
	TODAS_LAS_PREGUNTAS.map((pregunta) => [pregunta.id, pregunta]),
);

export const MAPA_TARJETAS: Record<string, TarjetaAifC01> = Object.fromEntries(
	TODAS_LAS_TARJETAS.map((tarjeta) => [tarjeta.id, tarjeta]),
);

export const MAPA_PARES: Record<string, ParConfusionAifC01> = Object.fromEntries(
	TODOS_LOS_PARES.map((par) => [par.id, par]),
);

function crearRecursosVacios(): RecursosObjetivo {
	return { grupos: [], preguntas: [], tarjetas: [], pares: [] };
}

export const RECURSOS_POR_OBJETIVO: Record<string, RecursosObjetivo> = {};

function registrar(objetivoId: string, campo: keyof RecursosObjetivo, id: string): void {
	const recursos = (RECURSOS_POR_OBJETIVO[objetivoId] ??= crearRecursosVacios());
	if (!recursos[campo].includes(id)) {
		recursos[campo].push(id);
	}
}

for (const grupo of TODOS_LOS_GRUPOS) {
	for (const objetivoId of grupo.objetivos) registrar(objetivoId, 'grupos', grupo.id);
}

for (const pregunta of TODAS_LAS_PREGUNTAS) {
	for (const objetivoId of pregunta.objetivos) registrar(objetivoId, 'preguntas', pregunta.id);
}

for (const tarjeta of TODAS_LAS_TARJETAS) {
	for (const objetivoId of tarjeta.objetivos) registrar(objetivoId, 'tarjetas', tarjeta.id);
}

for (const par of TODOS_LOS_PARES) {
	for (const objetivoId of par.objetivos) registrar(objetivoId, 'pares', par.id);
}

export function recursosDeObjetivo(objetivoId: string): RecursosObjetivo {
	return RECURSOS_POR_OBJETIVO[objetivoId] ?? crearRecursosVacios();
}

export function preguntasDeObjetivos(objetivoIds: string[]): PreguntaAifC01[] {
	const seleccion = new Set(objetivoIds);
	return TODAS_LAS_PREGUNTAS.filter((pregunta) =>
		pregunta.objetivos.some((objetivoId) => seleccion.has(objetivoId)),
	);
}

export function tarjetasDeObjetivos(objetivoIds: string[]): TarjetaAifC01[] {
	const seleccion = new Set(objetivoIds);
	return TODAS_LAS_TARJETAS.filter((tarjeta) =>
		tarjeta.objetivos.some((objetivoId) => seleccion.has(objetivoId)),
	);
}

export function paresDeObjetivos(objetivoIds: string[]): ParConfusionAifC01[] {
	const seleccion = new Set(objetivoIds);
	return TODOS_LOS_PARES.filter((par) =>
		par.objetivos.some((objetivoId) => seleccion.has(objetivoId)),
	);
}

export function gruposDeTask(taskId: string): GrupoTematico[] {
	return GRUPOS_POR_TASK[taskId] ?? [];
}

export function preguntasDeTask(taskId: string): PreguntaAifC01[] {
	return PREGUNTAS_POR_TASK[taskId] ?? [];
}

export function tarjetasDeTask(taskId: string): TarjetaAifC01[] {
	return TARJETAS_POR_TASK[taskId] ?? [];
}

export function paresDeTask(taskId: string): ParConfusionAifC01[] {
	return PARES_POR_TASK[taskId] ?? [];
}
