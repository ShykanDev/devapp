import type { ParConfusionClfC02 } from '@/data/clfC02/types';

export const paresTask33: ParConfusionClfC02[] = [
	{
		id: 'ecs-vs-eks-vs-fargate',
		etiqueta: 'Amazon ECS y Amazon EKS vs AWS Fargate',
		a: {
			titulo: 'Amazon ECS y Amazon EKS (orquestadores de contenedores)',
			resumen:
				'Organizan, programan y escalan los contenedores. Amazon ECS es el orquestador propio de AWS, sencillo y muy integrado con el resto del ecosistema; Amazon EKS es Kubernetes gestionado, adecuado si ya usas Kubernetes o necesitas su portabilidad.',
		},
		b: {
			titulo: 'AWS Fargate (motor de cómputo serverless)',
			resumen:
				'Motor que ejecuta contenedores sin que aprovisiones ni administres servidores. No es un orquestador: se combina con Amazon ECS o con Amazon EKS para decidir en qué se ejecutan las tareas.',
		},
		diferenciaClave:
			'ECS y EKS deciden cómo se orquesta; Fargate decide en qué se ejecuta, sin servidores. No son alternativas: ECS o EKS con Fargate es una combinación habitual, mientras que la alternativa a Fargate es ejecutar los contenedores en instancias de Amazon EC2 que tú gestionas.',
		cuandoA: [
			'Cuando necesitas coordinar muchos contenedores, definir tareas o servicios y elegir un orquestador.',
			'Cuando quieres Kubernetes gestionado con Amazon EKS o la integración más directa con AWS mediante Amazon ECS.',
		],
		cuandoB: [
			'Cuando no quieres administrar instancias ni aplicar parches y prefieres pagar solo por los recursos que consumen las tareas.',
			'Cuando ya usas ECS o EKS y quieres liberarte de gestionar el plano de datos.',
		],
		escenarioA:
			'Una empresa estandariza sus aplicaciones en Kubernetes porque ya lo usa en otros entornos y necesita portabilidad entre nubes; despliega sus clústeres con Amazon Elastic Kubernetes Service (Amazon EKS).',
		escenarioB:
			'La misma empresa no quiere gestionar nodos ni aplicar parches al sistema operativo, así que ejecuta las tareas de sus contenedores con AWS Fargate como motor de cómputo.',
		preguntaIds: ['3.3-q4'],
		objetivos: ['3.3#3'],
	},
	{
		id: 'ec2-vs-lambda',
		etiqueta: 'Amazon EC2 vs AWS Lambda',
		a: {
			titulo: 'Amazon EC2 (servidores virtuales)',
			resumen:
				'Proporciona instancias: servidores virtuales que aprovisionas y administras. Tienes control total del sistema operativo y de la configuración, eliges familia y tamaño, y la capacidad queda disponible de forma continua aunque no haya trabajo.',
		},
		b: {
			titulo: 'AWS Lambda (cómputo serverless orientado a eventos)',
			resumen:
				'Ejecuta funciones disparadas por eventos sin gestionar servidores. Escala de forma automática con los eventos y solo se paga por las invocaciones y el tiempo de ejecución; no hay capacidad encendida por defecto.',
		},
		diferenciaClave:
			'EC2 es un servidor que controlas tú; Lambda es una función que se ejecuta cuando ocurre un evento. EC2 conviene para procesos continuos, de ejecución larga o que requieren control del sistema operativo; Lambda, para lógica corta y sin estado disparada por eventos.',
		cuandoA: [
			'Cuando necesitas control del sistema operativo, instalar software específico o ejecutar procesos de larga duración.',
			'Cuando la carga es continua y estable, o el proceso necesita conservar estado en la propia máquina.',
		],
		cuandoB: [
			'Cuando la lógica se activa por eventos y las ejecuciones son cortas.',
			'Cuando quieres escalar automáticamente sin aprovisionar capacidad ni pagar mientras no hay eventos.',
		],
		escenarioA:
			'Una empresa mantiene una base de datos auto-gestionada y varios procesos de larga duración que necesitan control total del sistema operativo; esos componentes se ejecutan en instancias de Amazon EC2.',
		escenarioB:
			'Otra parte del sistema reacciona a cada archivo nuevo y a cada petición web con lógica breve; se implementa con funciones de AWS Lambda que se activan solo cuando llega el evento.',
		preguntaIds: ['3.3-q6'],
		objetivos: ['3.3#4'],
	},
];
