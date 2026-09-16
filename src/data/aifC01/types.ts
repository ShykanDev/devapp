import type { ExamenQuestion } from '@/schemas/examen';
import type { ProfundidadAifC01 } from '@/data/aifC01';

export type { ProfundidadAifC01 };

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

export type TipoPreguntaAifC01 =
	| 'conocimiento'
	| 'comparacion'
	| 'escenario'
	| 'servicio'
	| 'tradeoff'
	| 'seguridad'
	| 'metrica'
	| 'casoDeUso';

export interface PreguntaAifC01 extends ExamenQuestion {
	id: string;
	taskId: string;
	objetivos: string[];
	tipo: TipoPreguntaAifC01;
	explanation: string;
}

export type TipoTarjetaAifC01 =
	| 'definicion'
	| 'diferencia'
	| 'servicio'
	| 'tradeoff'
	| 'riesgo'
	| 'metrica';

export interface TarjetaAifC01 {
	id: string;
	taskId: string;
	objetivos: string[];
	tipo: TipoTarjetaAifC01;
	frente: string;
	reverso: string;
}

export interface CaraComparacion {
	titulo: string;
	resumen: string;
}

export interface ParConfusionAifC01 {
	/** Id estable, p. ej. 'zero-shot-vs-few-shot'. */
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

export interface TerminoAifC01 {
	id: string;
	termino: string;
	definicion: string;
	dominios: string[];
	relacionados: string[];
}

export interface ServicioAifC01 {
	/** Debe existir en `serviciosEnAlcanceAifC01`. */
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
