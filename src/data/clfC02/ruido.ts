/**
 * Criterio fijo de "escenario con ruido" (G10).
 *
 * Un ítem cuenta como ruidoso cuando, siendo de aplicación
 * (`escenario`/`casoDeUso`/`tradeoff`), su enunciado combina al menos una marca
 * de información irrelevante deliberada con una restricción de negocio o
 * técnica. El guard `clfC02.g10RuidoGuard.spec.ts` exige mínimos por dominio.
 */
import type { PreguntaBaseClfC02 } from '@/data/clfC02/types';

export const TIPOS_APLICACION_RUIDO: ReadonlySet<string> = new Set([
	'escenario',
	'casoDeUso',
	'tradeoff',
]);

export const MARCADOR_RUIDO =
	/(aunque|independientemente|no importa|sin embargo|adem[aá]s de|no afecta|pese a|a pesar de|no es relevante|irrelevante)/i;

export const RESTRICCION_NEGOCIO =
	/(presupuesto|coste|costo|econ[oó]mic|plazo|urgent|mensual|anual|factura|regulatori|cumplimiento|normativa|equipo reducido|sin personal|latencia|disponibilidad|residencia de datos|auditor[ií]a)/i;

export function esItemConRuido(pregunta: PreguntaBaseClfC02 & { tipo?: string }): boolean {
	if (!pregunta.tipo || !TIPOS_APLICACION_RUIDO.has(pregunta.tipo)) return false;
	return MARCADOR_RUIDO.test(pregunta.question) && RESTRICCION_NEGOCIO.test(pregunta.question);
}

/** Mínimos por dominio (D-G10). */
export const MINIMOS_RUIDO_POR_DOMINIO: Record<string, number> = {
	'dominio-1': 5,
	'dominio-2': 5,
	'dominio-3': 8,
	'dominio-4': 4,
};
