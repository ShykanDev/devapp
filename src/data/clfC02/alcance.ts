/**
 * Fuente única de verdad para las decisiones de alcance del módulo CLF-C02.
 *
 * La usan el motor de auditoría (`tests/unit/clfC02.audit.ts`), el guardrail de
 * capas (`tests/unit/clfC02.layers.spec.ts`) y la validación de citas en texto
 * (`src/data/clfC02/validacion.ts`), de modo que todos midan exactamente lo
 * mismo. Este archivo no importa nada del motor de auditoría para evitar ciclos.
 */
import { FEATURES_EN_ALCANCE_CLFC02, SERVICIOS_PERMITIDOS } from '@/data/clfC02/blueprint-ext';
import { CONCEPTOS_RECONOCIMIENTO_EN_ALCANCE } from '@/data/clfC02/reconocimiento';

/**
 * Términos observados en material oficial de práctica de AWS (dec. D7) que no
 * figuran en la lista de 111 servicios in-scope, pero que la guía declara
 * «non-exhaustive». Valen como distractores y material de estudio, nunca como
 * respuesta correcta ni como parte del núcleo de 111. No se cuentan en
 * `serviciosEnAlcanceClfC02` ni en `SERVICIOS_PERMITIDOS`.
 */
export const TERMINOS_MATERIAL_OFICIAL: ReadonlySet<string> = new Set([
	'Amazon DynamoDB Accelerator (DAX)',
	'DAX',
	'Elastic Load Balancing (ELB)',
	'Elastic Load Balancing',
	'ELB',
	'AWS Systems Manager OpsCenter',
	'OpsCenter',
]);

/** ¿La etiqueta es un término admitido del material oficial (distractor/estudio)? */
export function esTerminoMaterialOficial(etiqueta: string): boolean {
	if (TERMINOS_MATERIAL_OFICIAL.has(etiqueta)) return true;
	for (const termino of TERMINOS_MATERIAL_OFICIAL) {
		if (coincidePorPrefijo(etiqueta, termino)) return true;
	}
	return false;
}

/** Un nombre coincide si es igual o si uno es prefijo del otro a nivel de palabra. */
function coincidePorPrefijo(a: string, b: string): boolean {
	if (a === b) return true;
	return a.startsWith(`${b} `) || b.startsWith(`${a} `);
}

function esServicioPermitido(etiqueta: string): boolean {
	if (SERVICIOS_PERMITIDOS.has(etiqueta)) return true;
	for (const nombre of SERVICIOS_PERMITIDOS) {
		if (coincidePorPrefijo(etiqueta, nombre)) return true;
	}
	return false;
}

/**
 * Servicio citado de forma literal: la etiqueta es exactamente un servicio en
 * alcance o una versión truncada de su nombre (la etiqueta es prefijo del
 * nombre, nunca al revés). Así `AWS Support` cuenta como servicio, pero
 * `AWS Support Center` (una capacidad más larga) no se confunde con él.
 */
function esServicioCitadoLiteral(etiqueta: string): boolean {
	if (SERVICIOS_PERMITIDOS.has(etiqueta)) return true;
	for (const nombre of SERVICIOS_PERMITIDOS) {
		if (nombre.startsWith(`${etiqueta} `)) return true;
	}
	return false;
}

/**
 * Etiqueta en alcance amplio: sirve para descartes y citas de texto, donde
 * valen tanto servicios como capacidades y conceptos reconocibles.
 */
export function esEtiquetaEnAlcance(etiqueta: string): boolean {
	if (esTerminoMaterialOficial(etiqueta)) return true;
	if (esServicioPermitido(etiqueta)) return true;
	if (CONCEPTOS_RECONOCIMIENTO_EN_ALCANCE.includes(etiqueta)) return true;
	for (const feature of FEATURES_EN_ALCANCE_CLFC02) {
		if (coincidePorPrefijo(etiqueta, feature)) return true;
	}
	return false;
}

/**
 * Etiqueta reconocible como servicio o caso de reconocimiento: más estricta que
 * `esEtiquetaEnAlcance` porque no acepta features sueltas ni capacidades más
 * largas que un servicio. La pertenencia explícita a `SERVICIOS_PERMITIDOS` o a
 * `CONCEPTOS_RECONOCIMIENTO_EN_ALCANCE` manda: un servicio en alcance (p. ej.
 * `AWS Support`, `AWS Marketplace`, `AWS Well-Architected Tool`) siempre es
 * reconocible, aunque su nombre aparezca también en textos genéricos.
 */
export function esServicioReconocible(etiqueta: string): boolean {
	return (
		esServicioCitadoLiteral(etiqueta) ||
		CONCEPTOS_RECONOCIMIENTO_EN_ALCANCE.includes(etiqueta)
	);
}
