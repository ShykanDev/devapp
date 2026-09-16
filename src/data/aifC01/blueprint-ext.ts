import {
	certificadoAifC01,
	dominiosAifC01,
	idObjetivoAifC01 as idObjetivo,
	objetivosAifC01,
	serviciosEnAlcanceAifC01,
	taskStatementsAifC01,
	type DominioAifC01,
	type ObjetivoAifC01,
	type ProfundidadAifC01,
	type TaskStatementPlanoAifC01,
} from '@/data/aifC01';

export const TASK_POR_ID: Record<string, TaskStatementPlanoAifC01> = Object.fromEntries(
	taskStatementsAifC01.map((task) => [task.id, task]),
);

export const DOMINIO_POR_ID: Record<string, DominioAifC01> = Object.fromEntries(
	dominiosAifC01.map((dominio) => [dominio.id, dominio]),
);

export const OBJETIVO_POR_ID: Record<string, ObjetivoAifC01> = Object.fromEntries(
	objetivosAifC01.map((objetivo) => [idObjetivo(objetivo.taskId, objetivo.index), objetivo]),
);

export const TODOS_LOS_IDS_OBJETIVO: string[] = objetivosAifC01.map((objetivo) =>
	idObjetivo(objetivo.taskId, objetivo.index),
);

export function dominioDeTaskId(taskId: string): string {
	return TASK_POR_ID[taskId]?.dominioId ?? '';
}

export function ponderacionDeTaskId(taskId: string): number {
	return TASK_POR_ID[taskId]?.pesoDominio ?? 0;
}

export function idsObjetivosDeTask(taskId: string): string[] {
	return objetivosAifC01.filter((objetivo) => objetivo.taskId === taskId).map((objetivo) =>
		idObjetivo(objetivo.taskId, objetivo.index),
	);
}

export function idsObjetivosDeDominio(dominioId: string): string[] {
	return objetivosAifC01
		.filter((objetivo) => dominioDeTaskId(objetivo.taskId) === dominioId)
		.map((objetivo) => idObjetivo(objetivo.taskId, objetivo.index));
}

export function dominiosDeObjetivo(objetivoId: string): string[] {
	const taskId = objetivoId.split('#')[0];
	const dominioId = dominioDeTaskId(taskId);
	return dominioId ? [dominioId] : [];
}

export function esObjetivoCritico(objetivoId: string): boolean {
	return OBJETIVO_POR_ID[objetivoId]?.profundidad === 'critico';
}

export function etiquetaProfundidad(profundidad: ProfundidadAifC01): string {
	if (profundidad === 'critico') return 'Crítico';
	if (profundidad === 'esencial') return 'Esencial';
	return 'Estándar';
}

export interface PresupuestoProfundidad {
	profundidad: ProfundidadAifC01;
	etiqueta: string;
	minBloques: number;
	maxBloques: number;
	minPalabras: number;
	maxPalabras: number;
	obligatorios: string[];
}

export const PRESUPUESTO_PROFUNDIDAD: PresupuestoProfundidad[] = [
	{
		profundidad: 'esencial',
		etiqueta: etiquetaProfundidad('esencial'),
		minBloques: 1,
		maxBloques: 3,
		minPalabras: 80,
		maxPalabras: 200,
		obligatorios: ['concepto', 'clave o error común'],
	},
	{
		profundidad: 'estandar',
		etiqueta: etiquetaProfundidad('estandar'),
		minBloques: 2,
		maxBloques: 5,
		minPalabras: 200,
		maxPalabras: 450,
		obligatorios: ['concepto', 'comparación o cuándo usar', 'ejemplo'],
	},
	{
		profundidad: 'critico',
		etiqueta: etiquetaProfundidad('critico'),
		minBloques: 4,
		maxBloques: 8,
		minPalabras: 400,
		maxPalabras: 800,
		obligatorios: ['concepto profundo', 'comparación', 'escenario', 'error común'],
	},
];

export function presupuestoDe(profundidad: ProfundidadAifC01): PresupuestoProfundidad {
	return (
		PRESUPUESTO_PROFUNDIDAD.find((entrada) => entrada.profundidad === profundidad) ??
		PRESUPUESTO_PROFUNDIDAD[1]
	);
}

export const SERVICIOS_PERMITIDOS: ReadonlySet<string> = new Set(
	Object.values(serviciosEnAlcanceAifC01).flat(),
);

export function categoriaDeServicio(nombre: string): string {
	for (const [categoria, servicios] of Object.entries(serviciosEnAlcanceAifC01)) {
		if (servicios.includes(nombre)) return categoria;
	}
	return '';
}

export function existeServicioAifC01(nombre: string): boolean {
	return SERVICIOS_PERMITIDOS.has(nombre);
}

/**
 * Capacidades del propio servicio que el blueprint nombra como parte de un
 * servicio en alcance (p. ej. «Amazon Bedrock Prompt Management» es una
 * feature de «Amazon Bedrock»). Se listan aparte para que la validación de
 * citas no las confunda con servicios inventados.
 */
export const FEATURES_EN_ALCANCE_AIFC01: string[] = [
	'Amazon Bedrock Prompt Management',
	'Amazon Bedrock Guardrails',
	'Amazon Bedrock Knowledge Bases',
	'Amazon Bedrock Model Evaluation',
	'Amazon Bedrock Model Evaluations',
	'Amazon Bedrock AgentCore Identity',
	'Amazon Bedrock AgentCore Runtime',
	'Amazon SageMaker Model Cards',
	'AWS PrivateLink',
	'AWS KMS',
	'AWS IAM',
	'AWS shared responsibility model',
	'Generative AI Security Scoping Matrix',
];

export const DOMINIOS_ORDENADOS: string[] = dominiosAifC01.map((dominio) => dominio.id);

export const TOTAL_OBJETIVOS_AIFC01 = objetivosAifC01.length;
export const TOTAL_TASKS_AIFC01 = taskStatementsAifC01.length;
export const PESO_TOTAL_AIFC01 = dominiosAifC01.reduce((total, dominio) => total + dominio.peso, 0);
export const TOTAL_PREGUNTAS_EXAMEN = certificadoAifC01.preguntasTotales;
