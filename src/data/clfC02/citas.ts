/**
 * Detección de servicios citados en texto libre (enunciados, opciones,
 * explicaciones). Fuente única para diagnósticos y guardrails.
 *
 * Reconoce el nombre completo (`Amazon S3`), el nombre sin proveedor (`S3`) y
 * las siglas entre paréntesis (`AWS Key Management Service (AWS KMS)` → `AWS KMS`,
 * `KMS`). Evita falsos positivos de tokens genéricos (`Cloud`, `Support`).
 */
import { SERVICIOS_PERMITIDOS } from '@/data/clfC02/blueprint-ext';

/** Palabras que no bastan por sí solas para citar un servicio. */
const TOKENS_GENERICOS: ReadonlySet<string> = new Set([
	'aws',
	'amazon',
	'cloud',
	'support',
	'connect',
	'services',
	'service',
	'web',
	'plans',
	'plan',
	'pricing',
	'marketplace',
	'iam',
	'cli',
	'vpc',
	'vpn',
	'framework',
	'adoption',
	'guidance',
	'professional',
	'partner',
	'partners',
	'trust',
	'region',
	'regions',
	'sdk',
	'sdks',
	'health',
	// `RAM` es memoria, no el servicio AWS Resource Access Manager: la sigla del
	// servicio solo se reconoce por su nombre completo o `AWS RAM` (queda como
	// alias explícito abajo).
	'ram',
]);

export function serviciosCitadosEnTexto(texto: string): string[] {
	const coincidencias =
		texto.match(/\b(?:Amazon|AWS)\s+[A-Z][A-Za-z0-9]+(?:\s+[A-Z][A-Za-z0-9]+)*/g) ?? [];
	return Array.from(new Set(coincidencias));
}

function esAliasDistintivo(alias: string): boolean {
	const normalizado = alias.toLowerCase().trim();
	if (normalizado.length === 0) return false;
	if (TOKENS_GENERICOS.has(normalizado)) return false;
	const compacto = normalizado.replace(/[^a-z0-9]/g, '');
	if (compacto.length < 2) return false;
	if (compacto.length < 3 && !/\d/.test(compacto)) return false;
	return true;
}

function escaparRegex(texto: string): string {
	return texto.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function aliasDeServicio(nombre: string): string[] {
	const alias = new Set<string>([nombre]);
	const base = nombre.replace(/\s*\([^)]*\)/g, ' ').replace(/\s+/g, ' ').trim();
	if (base) alias.add(base);
	const sinProveedor = base.replace(/^(Amazon|AWS)\s+/i, '').trim();
	if (sinProveedor && sinProveedor !== base) alias.add(sinProveedor);
	for (const parentesis of nombre.match(/\([^)]*\)/g) ?? []) {
		const interior = parentesis.slice(1, -1).trim();
		if (!interior) continue;
		alias.add(interior);
		const interiorSinProveedor = interior.replace(/^(Amazon|AWS)\s+/i, '').trim();
		if (interiorSinProveedor && interiorSinProveedor !== interior) {
			alias.add(interiorSinProveedor);
		}
	}
	return [...alias].filter(esAliasDistintivo);
}

const ALIAS_A_SERVICIO = new Map<string, string>();
for (const nombre of SERVICIOS_PERMITIDOS) {
	for (const alias of aliasDeServicio(nombre)) {
		if (!ALIAS_A_SERVICIO.has(alias)) ALIAS_A_SERVICIO.set(alias, nombre);
	}
}

const ALIAS_ORDENADOS: string[] = [...ALIAS_A_SERVICIO.keys()].sort((a, b) => b.length - a.length);

const PATRON_ALIAS = new RegExp(
	`(?:^|[^A-Za-z0-9])(${ALIAS_ORDENADOS.map(escaparRegex).join('|')})(?![A-Za-z0-9])`,
	'gi',
);

/**
 * Servicios in-scope citados en un texto, devueltos por su nombre canónico de
 * `SERVICIOS_PERMITIDOS`. Detecta nombre completo y alias corto.
 */
export function serviciosCitadosConAlias(texto: string): string[] {
	const encontrados = new Set<string>();
	for (const cita of serviciosCitadosEnTexto(texto)) {
		if (ALIAS_A_SERVICIO.has(cita)) encontrados.add(ALIAS_A_SERVICIO.get(cita)!);
	}
	PATRON_ALIAS.lastIndex = 0;
	let coincidencia: RegExpExecArray | null;
	while ((coincidencia = PATRON_ALIAS.exec(texto)) !== null) {
		const canonico = ALIAS_A_SERVICIO.get(coincidencia[1]);
		if (canonico) encontrados.add(canonico);
		if (coincidencia.index === PATRON_ALIAS.lastIndex) PATRON_ALIAS.lastIndex += 1;
	}
	return [...encontrados];
}

/** ¿El texto cita algún servicio in-scope, por nombre completo o alias? */
export function textoCitaServicio(texto: string): boolean {
	return serviciosCitadosConAlias(texto).length > 0;
}
