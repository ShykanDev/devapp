/**
 * Motor de auditoría del módulo CLF-C02.
 *
 * No es un test: es la lógica compartida que usan los guardrails permanentes
 * (`clfC02.matrix.spec.ts`, `clfC02.coverageGuard.spec.ts`,
 * `clfC02.transferGuard.spec.ts`, `clfC02.servicesGuard.spec.ts`). Se mantiene
 * separado para que todos los guardrails midan exactamente lo mismo.
 *
 * Los criterios están documentados aquí porque son la definición operativa de
 * la "Definition of Done" del plan de auditoría.
 */
import { objetivosClfC02 } from '@/data/clfC02';
import { reconocimientoClfC02 } from '@/data/clfC02/reconocimiento';
import { esServicioReconocible } from '@/data/clfC02/alcance';
import { esObjetivoCritico, SERVICIOS_PERMITIDOS } from '@/data/clfC02/blueprint-ext';
import { transferenciaClfC02 } from '@/data/clfC02/transferencia';
import {
	TODAS_LAS_PREGUNTAS,
	TODOS_LOS_GRUPOS,
	TODOS_LOS_PARES,
	recursosDeObjetivo,
} from '@/data/clfC02/registroContenido';
import { TODAS_LAS_PREGUNTAS_PROFESIONAL } from '@/data/clfC02/profesional/registro';
import { serviciosCitadosEnTexto } from '@/data/clfC02/validacion';
import { respuestasCorrectas } from '@/data/clfC02/types';
import type { Bloque, PreguntaBaseClfC02 } from '@/data/clfC02/types';

/** Tipos de pregunta que cuentan como "aplicación" (escenario razonado). */
export const TIPOS_APLICACION: ReadonlySet<string> = new Set([
	'escenario',
	'casoDeUso',
	'tradeoff',
]);

export interface FilaAuditoria {
	id: string;
	taskId: string;
	objetivo: string;
	profundidad: string;
	grupos: number;
	preguntas: number;
	tarjetas: number;
	pares: number;
	tieneNegativo: boolean;
	tieneDiferenciacion: boolean;
	diferenciacionRelevante: boolean;
	reconocimientoRelevante: boolean;
	tieneAplicacion: boolean;
	tieneReconocimiento: boolean;
	tieneTransferencia: boolean;
	tiposPregunta: string[];
	nivel: number;
	gaps: string[];
	falsoDominio: string[];
}

function gruposDelObjetivo(objetivoId: string): typeof TODOS_LOS_GRUPOS {
	return TODOS_LOS_GRUPOS.filter((grupo) => grupo.objetivos.includes(objetivoId));
}

const PARES_POR_ID = new Map(TODOS_LOS_PARES.map((par) => [par.id, par]));

export function preguntasDelObjetivo(objetivoId: string): PreguntaBaseClfC02[] {
	return TODAS_LAS_PREGUNTAS.filter((pregunta) => pregunta.objetivos.includes(objetivoId));
}

function paresDelObjetivo(objetivoId: string): typeof TODOS_LOS_PARES {
	return TODOS_LOS_PARES.filter((par) => par.objetivos.includes(objetivoId));
}

/**
 * Negativo = el objective enseña cuándo NO usar algo. Se considera cubierto si
 * algún grupo suyo declara `cuandoUsar.noUsar` o un `errorComun`.
 */
export function tieneNegativo(objetivoId: string): boolean {
	return gruposDelObjetivo(objetivoId).some((grupo) =>
		grupo.bloques.some(
			(bloque: Bloque) =>
				(bloque.tipo === 'cuandoUsar' && bloque.noUsar.length > 0) ||
				bloque.tipo === 'errorComun',
		),
	);
}

/** Diferenciación = par de confusión, bloque de comparación o pregunta de comparación. */
export function tieneDiferenciacion(objetivoId: string): boolean {
	if (paresDelObjetivo(objetivoId).length > 0) return true;
	if (
		gruposDelObjetivo(objetivoId).some((grupo) =>
			grupo.bloques.some(
				(bloque: Bloque) =>
					bloque.tipo === 'comparacion' &&
					(PARES_POR_ID.get(bloque.parId)?.objetivos.includes(objetivoId) ?? false),
			),
		)
	) {
		return true;
	}
	return preguntasDelObjetivo(objetivoId).some((pregunta) => pregunta.tipo === 'comparacion');
}

/** Aplicación = alguna pregunta de escenario, caso de uso o tradeoff. */
export function tieneAplicacion(objetivoId: string): boolean {
	return preguntasDelObjetivo(objetivoId).some((pregunta) => TIPOS_APLICACION.has(pregunta.tipo));
}

/**
 * Objectives "de servicio": su enunciado o sus conceptos derivados citan al
 * menos un servicio dentro del alcance oficial. Esos son los que el examen
 * pregunta en dirección requisito → servicio.
 */
export function serviciosCitadosDelObjetivo(objetivoId: string): string[] {
	const fila = objetivosClfC02.find(
		(objetivo) => `${objetivo.taskId}#${objetivo.index}` === objetivoId,
	);
	if (!fila) return [];
	const citados = [...serviciosCitadosEnTexto(fila.titulo), ...fila.conceptos];
	return Array.from(new Set(citados));
}

export function esObjetivoDeServicio(objetivoId: string): boolean {
	return serviciosCitadosDelObjetivo(objetivoId).some(esServicioReconocible);
}

export function tieneReconocimiento(objetivoId: string): boolean {
	return reconocimientoClfC02.some((familia) =>
		familia.casos.some((caso) => (caso.objetivos ?? []).includes(objetivoId)),
	);
}

export function tieneTransferencia(objetivoId: string): boolean {
	return transferenciaClfC02.some((escenario) => escenario.objetivos.includes(objetivoId));
}

function calcularNivel(fila: Omit<FilaAuditoria, 'nivel'>): number {
	if (fila.grupos === 0) return 0;
	if (fila.preguntas === 0) return 1;
	let nivel = 2;
	if (fila.tieneNegativo) nivel += 1;
	if (fila.tieneDiferenciacion || fila.tieneAplicacion) nivel += 1;
	if (fila.tieneReconocimiento && fila.tieneTransferencia) nivel = 5;
	return nivel;
}

export function filasAuditoria(): FilaAuditoria[] {
	return objetivosClfC02.map((objetivo) => {
		const id = `${objetivo.taskId}#${objetivo.index}`;
		const recursos = recursosDeObjetivo(id);
		const grupos = gruposDelObjetivo(id);
		const preguntas = preguntasDelObjetivo(id);
		const pares = paresDelObjetivo(id);
		const reconocimientoRelevante = esObjetivoDeServicio(id);
		const diferenciacionRelevante =
			reconocimientoRelevante ||
			grupos.some((grupo) =>
				grupo.bloques.some(
					(bloque: Bloque) =>
						bloque.tipo === 'servicio' ||
						(bloque.tipo === 'escenario' && Boolean(bloque.servicio)),
				),
			);

		const base: Omit<FilaAuditoria, 'nivel'> = {
			id,
			taskId: objetivo.taskId,
			objetivo: objetivo.titulo,
			profundidad: objetivo.profundidad,
			grupos: grupos.length,
			preguntas: preguntas.length,
			tarjetas: recursos.tarjetas.length,
			pares: pares.length,
			tieneNegativo: tieneNegativo(id),
			tieneDiferenciacion: tieneDiferenciacion(id),
			diferenciacionRelevante,
			reconocimientoRelevante,
			tieneAplicacion: tieneAplicacion(id),
			tieneReconocimiento: tieneReconocimiento(id),
			tieneTransferencia: tieneTransferencia(id),
			tiposPregunta: Array.from(new Set(preguntas.map((pregunta) => pregunta.tipo))).sort(),
			gaps: [],
			falsoDominio: [],
		};

		const gaps: string[] = [];
		if (base.grupos === 0) gaps.push('sin contenido');
		if (base.preguntas === 0) gaps.push('sin preguntas');
		if (!base.tieneNegativo) gaps.push('sin conocimiento negativo');
		if (diferenciacionRelevante && !base.tieneDiferenciacion) {
			gaps.push('sin diferenciación pese a tener alternativas');
		}
		if (!base.tieneAplicacion) gaps.push('sin aplicación/escenario');
		if (reconocimientoRelevante && !base.tieneReconocimiento) {
			gaps.push('sin reconocimiento por requisito');
		}
		if (esObjetivoCritico(id) && !base.tieneTransferencia) {
			gaps.push('sin transferencia comprobable');
		}

		const falsoDominio: string[] = [];
		if (preguntas.length > 0) {
			const largas = preguntas.filter((pregunta) => correctaEsEstrictamenteMasLarga(pregunta));
			if (largas.length / preguntas.length >= 0.6) {
				falsoDominio.push(`correcta más larga en ${largas.length}/${preguntas.length}`);
			}
		}
		if (preguntas.some((pregunta) => fugaServicioEnEnunciado(pregunta))) {
			falsoDominio.push('servicio en el enunciado');
		}
		base.gaps = gaps;
		base.falsoDominio = falsoDominio;

		return { ...base, nivel: calcularNivel(base) };
	});
}

export interface ResumenAuditoria {
	total: number;
	completos: number;
	parciales: number;
	faltantes: number;
	falsosDominio: number;
	sinNegativo: number;
	sinDiferenciacionRelevante: number;
	sinAplicacion: number;
	sinReconocimiento: number;
	sinTransferencia: number;
}

export function resumenAuditoria(filas: FilaAuditoria[] = filasAuditoria()): ResumenAuditoria {
	return {
		total: filas.length,
		completos: filas.filter((fila) => fila.gaps.length === 0).length,
		parciales: filas.filter((fila) => fila.gaps.length > 0 && fila.nivel > 0).length,
		faltantes: filas.filter((fila) => fila.nivel === 0).length,
		falsosDominio: filas.filter((fila) => fila.falsoDominio.length > 0).length,
		sinNegativo: filas.filter((fila) => !fila.tieneNegativo).length,
		sinDiferenciacionRelevante: filas.filter(
			(fila) => fila.diferenciacionRelevante && !fila.tieneDiferenciacion,
		).length,
		sinAplicacion: filas.filter((fila) => !fila.tieneAplicacion).length,
		sinReconocimiento: filas.filter(
			(fila) => fila.reconocimientoRelevante && !fila.tieneReconocimiento,
		).length,
		sinTransferencia: filas.filter(
			(fila) => esObjetivoCritico(fila.id) && !fila.tieneTransferencia,
		).length,
	};
}

/* ---------------------------------------------------------------------------
   Sesgos del banco
--------------------------------------------------------------------------- */

export interface SesgoPregunta {
	id: string;
	banca: 'estandar' | 'profesional';
	posicion: number;
	correctaEsMasLarga: boolean;
	margen: number;
	fugaServicio: boolean;
}

export function preguntasDelBanco(): Array<{
	banca: SesgoPregunta['banca'];
	pregunta: PreguntaBaseClfC02;
}> {
	return [
		...TODAS_LAS_PREGUNTAS.map((pregunta) => ({ banca: 'estandar' as const, pregunta })),
		...TODAS_LAS_PREGUNTAS_PROFESIONAL.map((pregunta) => ({
			banca: 'profesional' as const,
			pregunta,
		})),
	];
}

export function correctaEsEstrictamenteMasLarga(pregunta: PreguntaBaseClfC02): boolean {
	const correctas = new Set(respuestasCorrectas(pregunta));
	const maxCorrecta = Math.max(...[...correctas].map((indice) => pregunta.options[indice].length));
	const maxDistractor = Math.max(
		...pregunta.options.map((opcion, indice) => (correctas.has(indice) ? -1 : opcion.length)),
	);
	return maxCorrecta > maxDistractor;
}

/** Diferencia de longitud entre la correcta y el distractor más largo. */
export function margenCorrecta(pregunta: PreguntaBaseClfC02): number {
	const correctas = new Set(respuestasCorrectas(pregunta));
	const maxCorrecta = Math.max(...[...correctas].map((indice) => pregunta.options[indice].length));
	const maxDistractor = Math.max(
		...pregunta.options.map((opcion, indice) => (correctas.has(indice) ? -1 : opcion.length)),
	);
	return maxCorrecta - maxDistractor;
}

/* ---------------------------------------------------------------------------
   Detección de servicios citados en un enunciado
--------------------------------------------------------------------------- */

/**
 * Palabras que no bastan por sí solas para citar un servicio. Se exige un
 * token distintivo para no confundir lenguaje genérico (Cloud, Support,
 * Connect) con el nombre de un servicio.
 */
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
	// Siglas que en el banco se usan como capacidades y no como cita del
	// servicio concreto (p. ej. «diferencia entre security group y network ACL
	// en una VPC»): nombrarlas no revela la respuesta.
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
]);

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

/**
 * Alias cortos derivados de `SERVICIOS_PERMITIDOS` (Amazon S3 → S3,
 * Amazon ElastiCache → ElastiCache, AWS Lambda → Lambda) más las siglas entre
 * paréntesis (Amazon Elastic Block Store (Amazon EBS) → EBS).
 */
function aliasDeServicio(nombre: string): string[] {
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

const ALIAS_SERVICIOS: string[] = [
	...new Set([...SERVICIOS_PERMITIDOS].flatMap(aliasDeServicio)),
].sort((a, b) => b.length - a.length);

const PATRON_ALIAS = new RegExp(
	`(?:^|[^A-Za-z0-9])(${ALIAS_SERVICIOS.map(escaparRegex).join('|')})(?![A-Za-z0-9])`,
	'i',
);

/** El enunciado cita un servicio, ya sea con nombre completo o con alias corto. */
function enunciadoCitaServicio(texto: string): boolean {
	if (serviciosCitadosEnTexto(texto).length > 0) return true;
	return PATRON_ALIAS.test(texto);
}

/**
 * Fuga de servicio: el enunciado nombra un servicio de AWS (nombre completo o
 * alias corto como S3, Lambda, EC2) cuando el objective evalúa reconocimiento
 * (requisito → servicio) en vez de definición.
 */
export function fugaServicioEnEnunciado(pregunta: PreguntaBaseClfC02): boolean {
	if (!enunciadoCitaServicio(pregunta.question)) return false;
	return pregunta.objetivos.some((objetivoId) => esObjetivoDeServicio(objetivoId));
}

export function sesgosBanco(): SesgoPregunta[] {
	return preguntasDelBanco().map(({ banca, pregunta }) => ({
		id: pregunta.id,
		banca,
		posicion: pregunta.correctAnswer,
		correctaEsMasLarga: correctaEsEstrictamenteMasLarga(pregunta),
		margen: margenCorrecta(pregunta),
		fugaServicio: fugaServicioEnEnunciado(pregunta),
	}));
}

export interface ReporteSesgo {
	total: number;
	correctaMasLarga: number;
	correctaMasLargaRatio: number;
	conMargenMayor25: number;
	fugasServicio: number;
	porPosicion: number[];
}

export function reporteSesgo(sesgos: SesgoPregunta[] = sesgosBanco()): ReporteSesgo {
	const total = sesgos.length;
	const correctaMasLarga = sesgos.filter((sesgo) => sesgo.correctaEsMasLarga).length;
	const porPosicion = [0, 0, 0, 0, 0];
	for (const sesgo of sesgos) {
		if (sesgo.posicion >= 0 && sesgo.posicion < porPosicion.length) porPosicion[sesgo.posicion] += 1;
	}
	return {
		total,
		correctaMasLarga,
		correctaMasLargaRatio: total === 0 ? 0 : correctaMasLarga / total,
		conMargenMayor25: sesgos.filter((sesgo) => sesgo.margen > 25).length,
		fugasServicio: sesgos.filter((sesgo) => sesgo.fugaServicio).length,
		porPosicion,
	};
}

/* ---------------------------------------------------------------------------
   Similitud de preguntas (casi duplicados)
--------------------------------------------------------------------------- */

const PALABRAS_VACIAS = new Set([
	'que','de','la','el','los','las','un','una','unos','unas','y','o','en','a','para','por','con','sin','se','su','sus','al','del','es','son','como','mas','no','lo','le','les','e','u','the','of','and','to','in','on','for','with','an','is','are',
]);

export function palabrasSignificativas(texto: string): Set<string> {
	return new Set(
		texto
			.toLowerCase()
			.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '')
			.replace(/[^a-z0-9\s]/g, ' ')
			.split(/\s+/)
			.map((palabra) => palabra.replace(/(es|as|os|s)$/, ''))
			.filter((palabra) => palabra.length > 2 && !PALABRAS_VACIAS.has(palabra)),
	);
}

export function jaccard(a: Set<string>, b: Set<string>): number {
	if (a.size === 0 && b.size === 0) return 0;
	let interseccion = 0;
	for (const palabra of a) if (b.has(palabra)) interseccion += 1;
	const union = a.size + b.size - interseccion;
	return union === 0 ? 0 : interseccion / union;
}

export interface ParSimilar {
	a: string;
	b: string;
	similitud: number;
}

export function paresSimilares(
	preguntas: Array<{ id: string; question: string }> = TODAS_LAS_PREGUNTAS,
	umbral = 0.7,
): ParSimilar[] {
	const preparadas = preguntas.map((pregunta) => ({
		id: pregunta.id,
		palabras: palabrasSignificativas(pregunta.question),
	}));
	const similares: ParSimilar[] = [];
	for (let i = 0; i < preparadas.length; i += 1) {
		for (let j = i + 1; j < preparadas.length; j += 1) {
			const similitud = jaccard(preparadas[i].palabras, preparadas[j].palabras);
			if (similitud > umbral) {
				similares.push({ a: preparadas[i].id, b: preparadas[j].id, similitud });
			}
		}
	}
	return similares.sort((x, y) => y.similitud - x.similitud);
}

/** Objetivos cuyo banco cubre con menos de 2 tipos de razonamiento distintos. */
export function objetivosConPocaVariedad(): string[] {
	return filasAuditoria()
		.filter((fila) => fila.preguntas > 0 && fila.tiposPregunta.length < 2)
		.map((fila) => fila.id);
}

/* ---------------------------------------------------------------------------
   Explicaciones con cierre "si cambia X → Y"
--------------------------------------------------------------------------- */

export const MARCADOR_CIERRE =
	/si (?:cambia|el requisito|el escenario|se (?:pidiera|necesitara|usara)|en su lugar|el objetivo)/i;

/** Preguntas cuya explicación no incluye un cierre explícito "si cambia X → Y". */
export function explicacionesSinCierre(
	preguntas: PreguntaBaseClfC02[] = TODAS_LAS_PREGUNTAS,
): string[] {
	return preguntas
		.filter((pregunta) => !MARCADOR_CIERRE.test(pregunta.explanation ?? ''))
		.map((pregunta) => pregunta.id);
}

/* ---------------------------------------------------------------------------
   Tipos de escenario (sección 18 del prompt de auditoría)
--------------------------------------------------------------------------- */

export const TIPOS_ESCENARIO = [
	'reconocimientoDirecto',
	'reconocimientoIndirecto',
	'diferenciacion',
	'seleccionEntreAlternativas',
	'descarteDeAlternativas',
	'escenarioEmpresarial',
	'escenarioTecnico',
	'informacionIrrelevante',
	'redaccionDiferente',
	'transferencia',
] as const;

export type TipoEscenarioClfC02 = (typeof TIPOS_ESCENARIO)[number];

const PALABRAS_EMPRESA =
	/(empresa|organizaci[oó]n|negocio|cliente|presupuesto|ingresos|audiencia|equipo|compañ[ií]a|startup|banco|hospital|tienda|fabrica|gobierno)/i;
const PALABRAS_TECNICAS =
	/(instancia|red|latencia|almacenamiento|base de datos|cifrado|subred|servidor|tr[aá]fico|nodo|contenedor|cl[uú]ster|api)/i;

/** Clasifica una pregunta en uno o varios de los 10 tipos de escenario. */
export function tiposDeEscenario(pregunta: PreguntaBaseClfC02): TipoEscenarioClfC02[] {
	const texto = pregunta.question;
	const citados = serviciosCitadosEnTexto(texto);
	const tipos = new Set<TipoEscenarioClfC02>();

	if (pregunta.tipo === 'servicio' || pregunta.tipo === 'casoDeUso') {
		tipos.add(citados.length === 0 ? 'reconocimientoIndirecto' : 'reconocimientoDirecto');
	}
	if (pregunta.tipo === 'comparacion') tipos.add('diferenciacion');
	if (/(cu[aá]l de|mejor|en lugar de|conviene|elegir|seleccionar)/i.test(texto)) {
		tipos.add('seleccionEntreAlternativas');
	}
	if (/(\bno\b.{0,30}(es|ser[ií]a|aplica|corresponde)|excepto|descartar|incorrect)/i.test(texto)) {
		tipos.add('descarteDeAlternativas');
	}
	if (PALABRAS_EMPRESA.test(texto)) tipos.add('escenarioEmpresarial');
	if (PALABRAS_TECNICAS.test(texto)) tipos.add('escenarioTecnico');
	if (/(aunque|independientemente|no importa|sin embargo|adem[aá]s de|no afecta)/i.test(texto)) {
		tipos.add('informacionIrrelevante');
	}
	if (texto.length > 160) tipos.add('redaccionDiferente');
	if (
		['escenario', 'casoDeUso', 'tradeoff'].includes(pregunta.tipo) &&
		citados.length === 0 &&
		!correctaEsEstrictamenteMasLarga(pregunta)
	) {
		tipos.add('transferencia');
	}
	return [...tipos];
}

export function coberturaTiposEscenario(): Record<TipoEscenarioClfC02, number> {
	const conteo = Object.fromEntries(TIPOS_ESCENARIO.map((tipo) => [tipo, 0])) as Record<
		TipoEscenarioClfC02,
		number
	>;
	for (const pregunta of TODAS_LAS_PREGUNTAS) {
		for (const tipo of tiposDeEscenario(pregunta)) conteo[tipo] += 1;
	}
	return conteo;
}
