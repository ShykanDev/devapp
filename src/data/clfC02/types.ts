import type { ExamenQuestion } from '@/schemas/examen';
import type { ProfundidadClfC02 } from '@/data/clfC02';

export type { ProfundidadClfC02 };

export type TipoBloque =
	| 'concepto'
	| 'comparacion'
	| 'cuandoUsar'
	| 'escenario'
	| 'errorComun'
	| 'clave'
	| 'ejemplo'
	| 'servicio';

export type Bloque =
	| { tipo: 'concepto'; md: string }
	| { tipo: 'comparacion'; parId: string }
	| { tipo: 'cuandoUsar'; usar: string[]; noUsar: string[] }
	| { tipo: 'escenario'; situacion: string; analisis: string; servicio?: string }
	| { tipo: 'errorComun'; error: string; correccion: string }
	| { tipo: 'clave'; items: string[] }
	| { tipo: 'ejemplo'; md: string }
	| { tipo: 'servicio'; nombre: string };

export interface GrupoTematico {
	/** Id estable, p. ej. '3.2-g1'. */
	id: string;
	titulo: string;
	/** Ids de objective, p. ej. ['3.2#1']. Nunca vacío. */
	objetivos: string[];
	bloques: Bloque[];
	preguntasGuia: string[];
}

export type TipoPreguntaClfC02 =
	| 'conocimiento'
	| 'comparacion'
	| 'escenario'
	| 'servicio'
	| 'tradeoff'
	| 'seguridad'
	| 'metrica'
	| 'casoDeUso';

/**
 * Campos comunes a cualquier pregunta del módulo (banco normal y banco
 * profesional). Permite que un mismo runner puntúe ambos bancos.
 *
 * `formato` distingue la opción única oficial (4 opciones / 1 correcta) de la
 * respuesta múltiple oficial (5 opciones / 2+ correctas, etiquetada
 * `(Elige DOS)`/`(Elige TRES)` en el enunciado). En respuesta múltiple
 * `correctAnswers` lleva los índices correctos y `correctAnswer` conserva el
 * primero como respaldo de presentación.
 */
export type FormatoPreguntaClfC02 = 'single' | 'multiple';

export interface PreguntaBaseClfC02 extends ExamenQuestion {
	id: string;
	taskId: string;
	objetivos: string[];
	explanation: string;
	/** Ausente equivale a `'single'`. */
	formato?: FormatoPreguntaClfC02;
	/** Solo cuando `formato === 'multiple'`: 2+ índices, incluye `correctAnswer`. */
	correctAnswers?: number[];
	/**
	 * Razonamiento por opción ("Por qué es correcta" / "Por qué es incorrecta"),
	 * alineado con `options`. Sustituye a la explicación única como mecanismo
	 * principal (la explicación se conserva como resumen).
	 */
	porQueOpcion?: string[];
	/** Fuentes oficiales (`docs.aws.amazon.com`) que respaldan el ítem. */
	fuentes?: string[];
}

export function esPreguntaMultiple(pregunta: PreguntaBaseClfC02): boolean {
	return pregunta.formato === 'multiple';
}

/** Índices correctos de una pregunta, sea single o multiple. */
export function respuestasCorrectas(pregunta: PreguntaBaseClfC02): number[] {
	if (esPreguntaMultiple(pregunta)) {
		return pregunta.correctAnswers ?? [pregunta.correctAnswer];
	}
	return [pregunta.correctAnswer];
}

export interface PreguntaClfC02 extends PreguntaBaseClfC02 {
	tipo: TipoPreguntaClfC02;
}

export type TipoTarjetaClfC02 =
	| 'definicion'
	| 'diferencia'
	| 'servicio'
	| 'tradeoff'
	| 'riesgo'
	| 'metrica';

export interface TarjetaClfC02 {
	id: string;
	taskId: string;
	objetivos: string[];
	tipo: TipoTarjetaClfC02;
	frente: string;
	reverso: string;
}

export interface CaraComparacion {
	titulo: string;
	resumen: string;
}

export interface ParConfusionClfC02 {
	/** Id estable, p. ej. 's3-vs-ebs-vs-efs'. */
	id: string;
	etiqueta: string;
	a: CaraComparacion;
	b: CaraComparacion;
	diferenciaClave: string;
	cuandoA: string[];
	cuandoB: string[];
	escenarioA: string;
	escenarioB: string;
	/** Preguntas de comparación del par. Obligatorio al menos una. */
	preguntaIds: string[];
	objetivos: string[];
}

export interface TerminoClfC02 {
	id: string;
	termino: string;
	definicion: string;
	dominios: string[];
	relacionados: string[];
}

export interface ServicioClfC02 {
	/** Debe existir en `serviciosEnAlcanceClfC02`. */
	nombre: string;
	categoria: string;
	queResuelve: string;
	paraQueSeUsa: string;
	seDiferenciaDe: string[];
	tareas: string[];
	relacionados: string[];
}

export interface RecursosObjetivo {
	grupos: string[];
	preguntas: string[];
	tarjetas: string[];
	pares: string[];
}
