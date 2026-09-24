import type { PreguntaBaseClfC02 } from '@/data/clfC02/types';

export type TipoPreguntaProfesionalClfC02 =
	| 'trampa'
	| 'comparacion'
	| 'escenario'
	| 'tradeoff'
	| 'multiConcepto'
	| 'servicio';

export interface PreguntaProfesionalClfC02 extends PreguntaBaseClfC02 {
	tipo: TipoPreguntaProfesionalClfC02;
	/**
	 * Justifica por qué cada distractor es incorrecto. Longitud 4, alineada
	 * con `options` (el índice de la correcta puede repetir la explicación).
	 */
	porQueOpcion?: string[];
}
