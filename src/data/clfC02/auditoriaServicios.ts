/**
 * Rúbrica de auditoría por servicio in-scope (sección 5 del prompt de auditoría).
 *
 * Cada servicio del alcance oficial se evalúa con 10 comprobaciones derivadas de
 * la evidencia real del módulo (no de una declaración manual): ficha, categoría,
 * diferenciación, tareas, glosario, reconocimiento, comparación, presencia en el
 * banco y cobertura de la capa de reconocimiento. El resultado es un informe con
 * los servicios que no llegan a 10/10 y el motivo.
 */
import { TASK_POR_ID } from '@/data/clfC02/blueprint-ext';
import { esEtiquetaEnAlcance } from '@/data/clfC02/alcance';
import { reconocimientoClfC02 } from '@/data/clfC02/reconocimiento';
import { serviciosGeneralClfC02 } from '@/data/clfC02/servicios/general';
import {
	TODAS_LAS_PREGUNTAS,
	TODOS_LOS_GRUPOS,
	TODOS_LOS_PARES,
} from '@/data/clfC02/registroContenido';

export interface ChequeoServicio {
	id: string;
	descripcion: string;
	cumple: boolean;
	detalle: string;
}

export interface RubricaServicio {
	nombre: string;
	categoria: string;
	chequeos: ChequeoServicio[];
	puntuacion: number;
}

const servicioPorNombre = new Map(
	serviciosGeneralClfC02.map((servicio) => [servicio.nombre, servicio]),
);

function textoBanco(): string {
	const preguntas = TODAS_LAS_PREGUNTAS.map((pregunta) =>
		[pregunta.question, ...pregunta.options, ...pregunta.objetivos].join(' '),
	);
	const grupos = TODOS_LOS_GRUPOS.map((grupo) => JSON.stringify(grupo.bloques));
	return [...preguntas, ...grupos].join('\n');
}

let cacheBanco: string | null = null;
function banco(): string {
	cacheBanco ??= textoBanco();
	return cacheBanco;
}

function tieneCasoReconocimiento(nombre: string): boolean {
	return reconocimientoClfC02.some((familia) =>
		familia.casos.some((caso) => caso.servicio === nombre),
	);
}

function apareceEnComparacion(nombre: string): boolean {
	const enPar = TODOS_LOS_PARES.some(
		(par) =>
			par.a.titulo.includes(nombre) ||
			par.b.titulo.includes(nombre) ||
			par.etiqueta.includes(nombre),
	);
	const enGrupo = TODOS_LOS_GRUPOS.some((grupo) =>
		grupo.bloques.some((bloque) => bloque.tipo === 'servicio' && bloque.nombre === nombre),
	);
	return enPar || enGrupo;
}

export function evaluarServicio(nombre: string, categoriaBlueprint: string): RubricaServicio {
	const ficha = servicioPorNombre.get(nombre);
	const chequeos: ChequeoServicio[] = [
		{
			id: 'ficha',
			descripcion: 'Tiene ficha enriquecida (queResuelve/paraQueSeUsa)',
			cumple: Boolean(ficha && ficha.queResuelve.trim() && ficha.paraQueSeUsa.trim()),
			detalle: ficha ? 'ficha presente' : 'sin ficha',
		},
		{
			id: 'categoria',
			descripcion: 'Categoría coincide con el blueprint',
			cumple: ficha?.categoria === categoriaBlueprint,
			detalle: ficha ? `declarada: ${ficha.categoria}` : 'sin categoría',
		},
		{
			id: 'diferenciacion',
			descripcion: 'Declara con qué servicios se confunde (seDiferenciaDe)',
			cumple: Boolean(ficha && ficha.seDiferenciaDe.length > 0),
			detalle: ficha ? `${ficha.seDiferenciaDe.length} diferencias` : 'sin datos',
		},
		{
			id: 'diferenciacionEnAlcance',
			descripcion: 'Sus comparaciones son servicios in-scope',
			cumple: Boolean(ficha && ficha.seDiferenciaDe.every((otro) => esEtiquetaEnAlcance(otro))),
			detalle: ficha ? ficha.seDiferenciaDe.filter((otro) => !esEtiquetaEnAlcance(otro)).join(', ') || 'todas in-scope' : 'sin datos',
		},
		{
			id: 'tareas',
			descripcion: 'Se asigna a tasks reales del blueprint',
			cumple: Boolean(
				ficha && ficha.tareas.length > 0 && ficha.tareas.every((taskId) => TASK_POR_ID[taskId]),
			),
			detalle: ficha ? ficha.tareas.join(', ') || 'sin tareas' : 'sin datos',
		},
		{
			id: 'glosario',
			descripcion: 'Se relaciona con términos del glosario',
			cumple: Boolean(ficha && ficha.relacionados.length > 0),
			detalle: ficha ? `${ficha.relacionados.length} términos` : 'sin datos',
		},
		{
			id: 'reconocimiento',
			descripcion: 'Tiene caso requisito → servicio en la capa de reconocimiento',
			cumple: tieneCasoReconocimiento(nombre),
			detalle: tieneCasoReconocimiento(nombre) ? 'cubierto' : 'sin caso',
		},
		{
			id: 'comparacion',
			descripcion: 'Aparece en un par de comparación o bloque de servicio',
			cumple: apareceEnComparacion(nombre),
			detalle: apareceEnComparacion(nombre) ? 'cubierto' : 'sin comparación',
		},
		{
			id: 'banco',
			descripcion: 'Aparece en el banco de preguntas o en un grupo',
			cumple: banco().includes(nombre),
			detalle: banco().includes(nombre) ? 'citado' : 'no citado',
		},
		{
			id: 'capaAlcance',
			descripcion: 'Cubierto por el alcance oficial (servicio o capacidad)',
			cumple: esEtiquetaEnAlcance(nombre),
			detalle: 'alcance verificado',
		},
	];
	const puntuacion = chequeos.filter((chequeo) => chequeo.cumple).length;
	return { nombre, categoria: categoriaBlueprint, chequeos, puntuacion };
}

