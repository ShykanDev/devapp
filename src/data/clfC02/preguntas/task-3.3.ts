import type { PreguntaClfC02 } from '@/data/clfC02/types';

export const preguntasTask33: PreguntaClfC02[] = [
	{
		id: '3.3-q1',
		taskId: '3.3',
		objetivos: ['3.3#1'],
		tipo: 'conocimiento',
		question:
			'¿Qué afirmación describe correctamente la diferencia general entre los modelos de cómputo de AWS?',
		options: [
			'Una máquina virtual no permite instalar software propio, a diferencia de una función serverless.',
			'En el cómputo serverless no se aprovisionan ni administran servidores, mientras que con máquinas virtuales sí se gestiona el sistema operativo.',
			'Los contenedores solo pueden ejecutarse en instancias que el cliente administra.',
			'El cómputo serverless obliga a pagar por capacidad reservada aunque no haya tráfico.',
		],
		correctAnswer: 1,
		explanation:
			'El espectro va del control total de la máquina virtual, que incluye gestionar el sistema operativo, al cómputo serverless, donde no se aprovisionan ni administran servidores. Los contenedores pueden ejecutarse tanto en instancias gestionadas por el cliente como en un motor serverless como AWS Fargate.',
	},
	{
		id: '3.3-q2',
		taskId: '3.3',
		objetivos: ['3.3#2'],
		tipo: 'conocimiento',
		question:
			'Una carga se caracteriza por un volumen muy alto de operaciones de lectura y escritura sobre discos locales. ¿Qué familia de instancias de Amazon EC2 es la más adecuada?',
		options: [
			'Memory optimized, porque prioriza la memoria RAM.',
			'Compute optimized, porque prioriza la CPU.',
			'Storage optimized, porque prioriza la entrada/salida y el almacenamiento local.',
			'General purpose, porque equilibra todos los recursos.',
		],
		correctAnswer: 2,
		explanation:
			'Las familias storage optimized están diseñadas para cargas con muchas operaciones de disco y requisitos altos de almacenamiento local. Compute optimized prioriza la CPU y memory optimized la memoria; general purpose es el equilibrio, no el tipo especializado para entrada/salida.',
	},
	{
		id: '3.3-q3',
		taskId: '3.3',
		objetivos: ['3.3#2'],
		tipo: 'casoDeUso',
		question:
			'Un equipo ejecuta un trabajo de procesamiento por lotes que satura la CPU de forma constante y no necesita mucha memoria ni disco. ¿Qué elección es la más razonable?',
		options: [
			'Instancias de la familia compute optimized.',
			'Instancias de la familia storage optimized.',
			'Instancias de la familia memory optimized.',
			'Instancias de la familia accelerated computing.',
		],
		correctAnswer: 0,
		explanation:
			'Cuando el recurso limitante es la CPU, la familia compute optimized ofrece la mejor relación entre capacidad de cálculo y coste. Storage optimized y memory optimized optimizan recursos que esta carga no necesita, y accelerated computing solo se justifica si el trabajo aprovecha un acelerador.',
	},
	{
		id: '3.3-q4',
		taskId: '3.3',
		objetivos: ['3.3#3'],
		tipo: 'comparacion',
		question:
			'Un equipo debe decidir cómo ejecutar sus contenedores. ¿Qué afirmación distingue correctamente Amazon ECS, Amazon EKS y AWS Fargate?',
		options: [
			'Amazon ECS y Amazon EKS son motores serverless, y AWS Fargate es un orquestador de Kubernetes.',
			'Amazon ECS y Amazon EKS son orquestadores de contenedores, mientras que AWS Fargate es un motor de cómputo que los ejecuta sin administrar servidores.',
			'Los tres son orquestadores equivalentes y solo cambian de nombre según la región.',
			'AWS Fargate sustituye a Amazon ECS y a Amazon EKS, por lo que no se pueden combinar.',
		],
		correctAnswer: 1,
		explanation:
			'Amazon ECS es el orquestador propio de AWS y Amazon EKS es Kubernetes gestionado; ambos organizan los contenedores. AWS Fargate es el motor serverless que ejecuta las tareas y puede combinarse con cualquiera de los dos. No son alternativas entre sí.',
	},
	{
		id: '3.3-q5',
		taskId: '3.3',
		objetivos: ['3.3#3'],
		tipo: 'escenario',
		question:
			'Una startup despliega microservicios en contenedores. Su equipo no tiene experiencia en Kubernetes, valora la simplicidad y no quiere administrar servidores. ¿Qué combinación encaja mejor?',
		options: [
			'Amazon ECS con AWS Fargate como motor de cómputo.',
			'Amazon EKS con nodos que el equipo administra a mano.',
			'Instancias de Amazon EC2 sin orquestador, ejecutando los contenedores manualmente.',
			'AWS Lambda, porque toda aplicación en contenedores debe convertirse en funciones.',
		],
		correctAnswer: 0,
		explanation:
			'Si no se necesita Kubernetes y se busca simplicidad, Amazon ECS es el orquestador adecuado; como no se quieren administrar servidores, se ejecuta con el motor serverless AWS Fargate. Amazon EKS tendría sentido con experiencia previa en Kubernetes, y gestionar instancias a mano añade trabajo innecesario.',
	},
	{
		id: '3.3-q6',
		taskId: '3.3',
		objetivos: ['3.3#4'],
		tipo: 'comparacion',
		question: '¿Qué diferencia fundamental separa a Amazon EC2 de AWS Lambda?',
		options: [
			'Amazon EC2 cobra solo por invocación y AWS Lambda por hora de instancia.',
			'Amazon EC2 entrega servidores que el cliente administra; AWS Lambda ejecuta funciones por evento sin gestionar servidores.',
			'AWS Lambda permite instalar el sistema operativo que se quiera y Amazon EC2 no.',
			'Ambos son idénticos, salvo que AWS Lambda está limitado a un único usuario.',
		],
		correctAnswer: 1,
		explanation:
			'Amazon EC2 proporciona instancias que el cliente configura y administra, con capacidad disponible de forma continua. AWS Lambda ejecuta funciones disparadas por eventos, sin servidores que gestionar y con pago por uso; por eso encaja mejor en cargas cortas y sin estado.',
	},
	{
		id: '3.3-q7',
		taskId: '3.3',
		objetivos: ['3.3#4'],
		tipo: 'escenario',
		question:
			'Una empresa recibe archivos de forma imprevisible y debe ejecutar un proceso corto por cada uno. No quiere mantener servidores encendidos entre archivos. ¿Qué opción es la más adecuada?',
		options: [
			'Un servidor de Amazon EC2 siempre encendido que comprueba si hay archivos.',
			'Una función de AWS Lambda que se active con cada archivo nuevo.',
			'Una base de datos relacional que procese los archivos dentro de la misma consulta.',
			'Un balanceador de carga que transforme los archivos en el momento de la subida.',
		],
		correctAnswer: 1,
		explanation:
			'El patrón es orientado a eventos y de ejecución corta, justo el caso de AWS Lambda: se activa cuando llega cada archivo, escala con los eventos y no cuesta cuando no hay ninguno. Un servidor encendido de forma permanente desperdicia capacidad entre archivos.',
	},
	{
		id: '3.3-q8',
		taskId: '3.3',
		objetivos: ['3.3#5'],
		tipo: 'conocimiento',
		question: '¿Qué aporta AWS Auto Scaling a un sistema que debe atender demanda variable?',
		options: [
			'Cifra los datos en reposo de forma automática.',
			'Ajusta el número de recursos a la demanda, añadiendo capacidad en los picos y retirándola en los valles.',
			'Reemplaza la necesidad de un balanceador de carga.',
			'Garantiza que el precio por hora de cada instancia sea el más bajo posible.',
		],
		correctAnswer: 1,
		explanation:
			'AWS Auto Scaling aporta elasticidad: ajusta automáticamente la cantidad de recursos según la demanda. No cifra datos, no sustituye al balanceador de carga y no cambia por sí solo el modelo de precios.',
	},
	{
		id: '3.3-q9',
		taskId: '3.3',
		objetivos: ['3.3#6'],
		tipo: 'servicio',
		question: '¿Cuál es el propósito principal de un balanceador de carga?',
		options: [
			'Ejecutar el código de la aplicación en lugar de los servidores.',
			'Repartir el tráfico entrante entre varios destinos y comprobar su estado.',
			'Almacenar de forma permanente los archivos estáticos de la aplicación.',
			'Sustituir a auto scaling cuando no hay tráfico.',
		],
		correctAnswer: 1,
		explanation:
			'Un balanceador de carga distribuye las peticiones entre varios destinos y verifica su salud para dejar de enviar tráfico a los que fallan. Mejora la disponibilidad y la distribución de la carga, y se complementa con auto scaling, que decide cuántos destinos existen.',
	},
	{
		id: '3.3-q10',
		taskId: '3.3',
		objetivos: ['3.3#4'],
		tipo: 'tradeoff',
		question:
			'Un equipo sopesa AWS Lambda frente a ejecutar el mismo proceso en instancias de Amazon EC2. ¿Qué criterio inclina la decisión hacia AWS Lambda?',
		options: [
			'Que el proceso sea continuo, de larga duración y necesite control del sistema operativo.',
			'Que la carga llegue por eventos, sea de ejecución corta y no requiera estado entre invocaciones.',
			'Que el proceso necesite conservar datos en memoria entre ejecuciones.',
			'Que se quiera pagar por capacidad reservada durante todo el año.',
		],
		correctAnswer: 1,
		explanation:
			'AWS Lambda brilla con cargas orientadas a eventos, cortas y sin estado, porque solo se ejecuta y se cobra cuando hay eventos. Los procesos continuos, largos o con estado encajan mejor en Amazon EC2, donde existe una máquina disponible de forma permanente.',
	},
];
