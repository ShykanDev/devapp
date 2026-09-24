import {
	certificadoClfC02,
	dominiosClfC02,
	idObjetivoClfC02 as idObjetivo,
	objetivosClfC02,
	serviciosEnAlcanceClfC02,
	taskStatementsClfC02,
	type DominioClfC02,
	type ObjetivoClfC02,
	type ProfundidadClfC02,
	type TaskStatementPlanoClfC02,
} from '@/data/clfC02';

export const TASK_POR_ID: Record<string, TaskStatementPlanoClfC02> = Object.fromEntries(
	taskStatementsClfC02.map((task) => [task.id, task]),
);

export const DOMINIO_POR_ID: Record<string, DominioClfC02> = Object.fromEntries(
	dominiosClfC02.map((dominio) => [dominio.id, dominio]),
);

export const OBJETIVO_POR_ID: Record<string, ObjetivoClfC02> = Object.fromEntries(
	objetivosClfC02.map((objetivo) => [idObjetivo(objetivo.taskId, objetivo.index), objetivo]),
);

export const TODOS_LOS_IDS_OBJETIVO: string[] = objetivosClfC02.map((objetivo) =>
	idObjetivo(objetivo.taskId, objetivo.index),
);

export function dominioDeTaskId(taskId: string): string {
	return TASK_POR_ID[taskId]?.dominioId ?? '';
}

export function ponderacionDeTaskId(taskId: string): number {
	return TASK_POR_ID[taskId]?.pesoDominio ?? 0;
}

export function idsObjetivosDeTask(taskId: string): string[] {
	return objetivosClfC02
		.filter((objetivo) => objetivo.taskId === taskId)
		.map((objetivo) => idObjetivo(objetivo.taskId, objetivo.index));
}

export function idsObjetivosDeDominio(dominioId: string): string[] {
	return objetivosClfC02
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

export function etiquetaProfundidad(profundidad: ProfundidadClfC02): string {
	if (profundidad === 'critico') return 'Crítico';
	if (profundidad === 'esencial') return 'Esencial';
	return 'Estándar';
}

export interface PresupuestoProfundidad {
	profundidad: ProfundidadClfC02;
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

export function presupuestoDe(profundidad: ProfundidadClfC02): PresupuestoProfundidad {
	return (
		PRESUPUESTO_PROFUNDIDAD.find((entrada) => entrada.profundidad === profundidad) ??
		PRESUPUESTO_PROFUNDIDAD[1]
	);
}

export const SERVICIOS_PERMITIDOS: ReadonlySet<string> = new Set(
	Object.values(serviciosEnAlcanceClfC02).flat(),
);

export function categoriaDeServicio(nombre: string): string {
	for (const [categoria, servicios] of Object.entries(serviciosEnAlcanceClfC02)) {
		if (servicios.includes(nombre)) return categoria;
	}
	return '';
}

export function existeServicioClfC02(nombre: string): boolean {
	return SERVICIOS_PERMITIDOS.has(nombre);
}

/**
 * Capacidades y conceptos que el blueprint nombra como parte del alcance y que
 * la validación de citas no debe confundir con servicios inventados.
 */
export const FEATURES_EN_ALCANCE_CLFC02: string[] = [
	// Abreviaturas de servicios en alcance
	'Amazon EBS',
	'Amazon EFS',
	'Amazon ECR',
	'Amazon ECS',
	'Amazon EKS',
	'Amazon SNS',
	'Amazon SQS',
	'Amazon SES',
	'Amazon SCT',
	'AWS DMS',
	'AWS SCT',
	'AWS RAM',
	'AWS KMS',
	'AWS IAM',
	'AWS CAF',
	// Opciones y conceptos del blueprint
	'AWS Savings Plans',
	'AWS Health API',
	'AWS Health',
	'AWS Cost and Usage Report',
	'AWS Cost and Usage Reports',
	'AWS Security Center',
	'AWS Security Blog',
	'AWS Knowledge Center',
	'AWS Well-Architected Framework',
	'AWS Well-Architected',
	'AWS Well',
	'AWS Cloud Adoption Framework',
	'AWS Prescriptive Guidance',
	'AWS Professional Services',
	'AWS Partner Network (APN)',
	'AWS Partner Network',
	'AWS SDKs',
	'AWS SDK',
	'AWS Trust',
	'AWS Partners',
	'AWS Partner',
	'AWS Regions',
	'AWS Cloud',
	'AWS Pricing Calculator',
	'AWS re',
	'AWS Support Center',
	'Amazon Web Services',
	'AWS Enterprise Support',
	'AWS Enterprise On-Ramp Support',
	'AWS Developer Support',
	'AWS Business Support',
	'AWS Enterprise',
	'AWS Business',
	'AWS Developer',
	'AWS Support plans',
	'AWS Support',
	'Amazon EC2 instance types',
	'Amazon EC2 On-Demand',
	'Amazon EC2 Spot',
	'AWS pricing',
];

export const DOMINIOS_ORDENADOS: string[] = dominiosClfC02.map((dominio) => dominio.id);

export const TOTAL_OBJETIVOS_CLFC02 = objetivosClfC02.length;
export const TOTAL_TASKS_CLFC02 = taskStatementsClfC02.length;
export const PESO_TOTAL_CLFC02 = dominiosClfC02.reduce((total, dominio) => total + dominio.peso, 0);
export const TOTAL_PREGUNTAS_EXAMEN = certificadoClfC02.preguntasTotales;
