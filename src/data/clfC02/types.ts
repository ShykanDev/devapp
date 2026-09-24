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
 */
export interface PreguntaBaseClfC02 extends ExamenQuestion {
	id: string;
	taskId: string;
	objetivos: string[];
	explanation: string;
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
