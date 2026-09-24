import type { TarjetaClfC02 } from '@/data/clfC02/types';

export const tarjetasTask13: TarjetaClfC02[] = [
	{
		id: '1.3-t1',
		taskId: '1.3',
		objetivos: ['1.3#1'],
		tipo: 'definicion',
		frente: '¿Qué beneficios de negocio se buscan al migrar a la nube?',
		reverso:
			'Reducir costes de infraestructura, ganar agilidad de despliegue, obtener elasticidad, mejorar la resiliencia y ampliar el alcance global. La adopción se planifica por olas y con enfoque cloud-first para no trasladar el modelo anterior.',
	},
	{
		id: '1.3-t2',
		taskId: '1.3',
		objetivos: ['1.3#2'],
		tipo: 'servicio',
		frente:
			'¿Qué recurso usar para construir el caso de negocio de la migración y cuál para inventariar el entorno?',
		reverso:
			'Migration Evaluator estima el ahorro y el caso de negocio; AWS Application Discovery Service inventaría servidores, dependencias y uso real. AWS Migration Hub sigue el progreso de las migraciones entre herramientas y regiones.',
	},
	{
		id: '1.3-t3',
		taskId: '1.3',
		objetivos: ['1.3#3'],
		tipo: 'diferencia',
		frente: 'AWS CAF y AWS Well-Architected Framework: ¿cuándo aplica cada uno?',
		reverso:
			'El AWS CAF ordena la adopción y el cambio organizativo mediante seis perspectivas (Business, People, Governance, Platform, Security y Operations). El AWS Well-Architected Framework guía el diseño técnico de las cargas mediante sus pilares. Adopción frente a arquitectura.',
	},
	{
		id: '1.3-t4',
		taskId: '1.3',
		objetivos: ['1.3#4'],
		tipo: 'tradeoff',
		frente: 'Estás migrando con poco plazo y quieres aprovechar servicios gestionados. ¿Rehost o replatform?',
		reverso:
			'Rehost (*lift and shift*) es más rápido y barato en el momento, pero mantiene la deuda técnica. Replatform (*lift, tuck and reshape*) exige ajustes, pero gana en operación y explotación a cambio de un esfuerzo puntual. La elección depende del plazo y del valor de cada aplicación.',
	},
];
