import { taskStatementsClfC02 } from '@/data/clfC02';
import type { PreguntaProfesionalClfC02 } from '@/data/clfC02/profesional/types';
import { profesionalTask11 } from '@/data/clfC02/profesional/preguntas/task-1.1';
import { profesionalTask12 } from '@/data/clfC02/profesional/preguntas/task-1.2';
import { profesionalTask13 } from '@/data/clfC02/profesional/preguntas/task-1.3';
import { profesionalTask14 } from '@/data/clfC02/profesional/preguntas/task-1.4';
import { profesionalTask21 } from '@/data/clfC02/profesional/preguntas/task-2.1';
import { profesionalTask22 } from '@/data/clfC02/profesional/preguntas/task-2.2';
import { profesionalTask23 } from '@/data/clfC02/profesional/preguntas/task-2.3';
import { profesionalTask24 } from '@/data/clfC02/profesional/preguntas/task-2.4';
import { profesionalTask31 } from '@/data/clfC02/profesional/preguntas/task-3.1';
import { profesionalTask32 } from '@/data/clfC02/profesional/preguntas/task-3.2';
import { profesionalTask33 } from '@/data/clfC02/profesional/preguntas/task-3.3';
import { profesionalTask34 } from '@/data/clfC02/profesional/preguntas/task-3.4';
import { profesionalTask35 } from '@/data/clfC02/profesional/preguntas/task-3.5';
import { profesionalTask36 } from '@/data/clfC02/profesional/preguntas/task-3.6';
import { profesionalTask37 } from '@/data/clfC02/profesional/preguntas/task-3.7';
import { profesionalTask38 } from '@/data/clfC02/profesional/preguntas/task-3.8';
import { profesionalTask41 } from '@/data/clfC02/profesional/preguntas/task-4.1';
import { profesionalTask42 } from '@/data/clfC02/profesional/preguntas/task-4.2';
import { profesionalTask43 } from '@/data/clfC02/profesional/preguntas/task-4.3';

/**
 * Banco del examen profesional por task. Se agrega a partir de los archivos
 * `profesional/preguntas/task-N.N.ts`.
 */
export const PREGUNTAS_PROFESIONAL_POR_TASK: Record<string, PreguntaProfesionalClfC02[]> = {
	'1.1': profesionalTask11,
	'1.2': profesionalTask12,
	'1.3': profesionalTask13,
	'1.4': profesionalTask14,
	'2.1': profesionalTask21,
	'2.2': profesionalTask22,
	'2.3': profesionalTask23,
	'2.4': profesionalTask24,
	'3.1': profesionalTask31,
	'3.2': profesionalTask32,
	'3.3': profesionalTask33,
	'3.4': profesionalTask34,
	'3.5': profesionalTask35,
	'3.6': profesionalTask36,
	'3.7': profesionalTask37,
	'3.8': profesionalTask38,
	'4.1': profesionalTask41,
	'4.2': profesionalTask42,
	'4.3': profesionalTask43,
};

export const TODAS_LAS_PREGUNTAS_PROFESIONAL: PreguntaProfesionalClfC02[] = Object.values(
	PREGUNTAS_PROFESIONAL_POR_TASK,
).flat();

export const MAPA_PROFESIONAL: Record<string, PreguntaProfesionalClfC02> = Object.fromEntries(
	TODAS_LAS_PREGUNTAS_PROFESIONAL.map((pregunta) => [pregunta.id, pregunta]),
);

export const TAREAS_PROFESIONAL_PENDIENTES: string[] = taskStatementsClfC02
	.filter((task) => (PREGUNTAS_PROFESIONAL_POR_TASK[task.id] ?? []).length === 0)
	.map((task) => task.id);
