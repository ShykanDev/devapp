import type { TarjetaClfC02 } from '@/data/clfC02/types';

export const tarjetasTask33: TarjetaClfC02[] = [
	{
		id: '3.3-t1',
		taskId: '3.3',
		objetivos: ['3.3#3'],
		tipo: 'diferencia',
		frente:
			'Un compañero pregunta: «¿Amazon ECS y Amazon EKS son lo mismo que AWS Fargate?». ¿Qué le aclaras?',
		reverso:
			'No. Amazon ECS y Amazon EKS son orquestadores que organizan los contenedores: ECS es propio de AWS y EKS es Kubernetes gestionado. AWS Fargate es un motor de cómputo serverless que ejecuta esos contenedores sin administrar servidores, y se combina con ECS o con EKS.',
	},
	{
		id: '3.3-t2',
		taskId: '3.3',
		objetivos: ['3.3#4'],
		tipo: 'diferencia',
		frente: 'AWS Lambda o AWS Fargate: ¿cuál ejecuta funciones y cuál ejecuta contenedores?',
		reverso:
			'AWS Lambda ejecuta funciones disparadas por eventos, pensadas para ejecuciones cortas y sin estado. AWS Fargate ejecuta contenedores sin administrar la infraestructura. Ambos evitan gestionar servidores, pero Lambda se invoca como función y Fargate ejecuta una tarea de contenedor.',
	},
	{
		id: '3.3-t3',
		taskId: '3.3',
		objetivos: ['3.3#2'],
		tipo: 'definicion',
		frente:
			'El cuello de botella de una carga es la entrada/salida de disco. ¿Qué familia de instancias de Amazon EC2 encaja mejor?',
		reverso:
			'Una familia storage optimized, diseñada para cargas con muchas operaciones de disco y almacenamiento local de alto rendimiento. Si el límite fuera la CPU, encajaría compute optimized; si fuera la memoria, memory optimized.',
	},
	{
		id: '3.3-t4',
		taskId: '3.3',
		objetivos: ['3.3#5'],
		tipo: 'definicion',
		frente: '¿Cómo aporta AWS Auto Scaling elasticidad a una aplicación?',
		reverso:
			'Observa una métrica, por ejemplo el uso de CPU, y ajusta el número de recursos: añade capacidad cuando la demanda crece y la retira cuando baja. Así se atienden los picos sin mantener capacidad fija sobredimensionada el resto del tiempo.',
	},
	{
		id: '3.3-t5',
		taskId: '3.3',
		objetivos: ['3.3#6'],
		tipo: 'definicion',
		frente: '¿Cuáles son las funciones principales de un balanceador de carga?',
		reverso:
			'Repartir el tráfico entrante entre varios destinos, comprobar su estado y dejar de enviar tráfico a los que fallan. Aporta distribución de carga y tolerancia a fallos, y trabaja junto con auto scaling, que decide cuántos destinos existen.',
	},
	{
		id: '3.3-t6',
		taskId: '3.3',
		objetivos: ['3.3#1'],
		tipo: 'servicio',
		frente:
			'Ordena de mayor a menor control y responsabilidad operativa: AWS Lambda, Amazon EC2 y contenedores gestionados.',
		reverso:
			'Amazon EC2 con control total del servidor, contenedores gestionados con Amazon ECS o Amazon EKS donde tú defines el contenedor y el orquestador lo coordina, y AWS Lambda donde solo existe tu función. A más control, más administración.',
	},
];
