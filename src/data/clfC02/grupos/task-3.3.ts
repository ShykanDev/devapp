import type { GrupoTematico } from '@/data/clfC02/types';

export const gruposTask33: GrupoTematico[] = [
	{
		id: '3.3-g1',
		titulo: 'Panorama de los servicios de cómputo',
		objetivos: ['3.3#1'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'El **cómputo** en AWS es un espectro según cuánto controlas y cuánto gestionas tú:\n\n- **Máquinas virtuales**: servidores completos que aprovisionas y administras, con el máximo control sobre el sistema operativo y el software. El servicio de referencia es Amazon EC2.\n- **Contenedores**: empaquetan la aplicación con sus dependencias para ejecutarse de forma portable; el clúster que los organiza lo aporta Amazon Elastic Container Service (Amazon ECS) o Amazon Elastic Kubernetes Service (Amazon EKS).\n- **Serverless**: no gestionas servidores ni capacidad; AWS Lambda ejecuta funciones por evento y AWS Fargate ejecuta contenedores sin que administres la infraestructura.\n- **Plataformas gestionadas**: AWS Elastic Beanstalk y Amazon Lightsail reducen la operación en escenarios sencillos.\n\nHacia un extremo del espectro hay más control y más responsabilidad operativa; hacia el otro, más gestión por parte de AWS y menos control. Elegir el servicio correcto es ajustar ese equilibrio al requisito del negocio.',
			},
			{ tipo: 'servicio', nombre: 'Amazon EC2' },
			{ tipo: 'servicio', nombre: 'AWS Lambda' },
			{ tipo: 'servicio', nombre: 'AWS Elastic Beanstalk' },
			{
				tipo: 'clave',
				items: [
					'El cómputo en AWS va del control total de la máquina virtual al cómputo serverless sin servidores.',
					'Amazon EC2 entrega instancias; los contenedores se orquestan con Amazon ECS o Amazon EKS; AWS Lambda ejecuta funciones por evento.',
					'AWS Elastic Beanstalk y Amazon Lightsail reducen la administración en escenarios sencillos.',
					'A más control, más responsabilidad operativa; a más gestión de AWS, menos control.',
				],
			},
		],
		preguntasGuia: [
			'¿Qué opciones de cómputo ofrece AWS y en qué se diferencian por nivel de control?',
			'¿Cuándo conviene una máquina virtual y cuándo una función serverless?',
			'¿Qué papel cumplen los contenedores dentro del panorama de cómputo?',
		],
	},
	{
		id: '3.3-g2',
		titulo: 'Contenedores gestionados: Amazon ECS, Amazon EKS y AWS Fargate',
		objetivos: ['3.3#3'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'Los **contenedores** empaquetan la aplicación con sus dependencias y se ejecutan de forma aislada y portable. Para coordinar muchos contenedores hace falta un **orquestador**, y AWS ofrece dos:\n\n- **Amazon ECS**: orquestador propio de AWS, sencillo y muy integrado con el resto del ecosistema. La definición de tareas y servicios es directa.\n- **Amazon EKS**: Kubernetes gestionado. Útil si ya usas Kubernetes en otro sitio o necesitas su portabilidad y su ecosistema.\n\nEl **motor de cómputo** es distinto del orquestador. **AWS Fargate** es un motor serverless: ejecuta los contenedores sin que aprovisiones ni administres instancias, y puede usarse con ECS o con EKS. La alternativa es ejecutar los contenedores en instancias de Amazon EC2 que tú gestionas, con más control pero también más trabajo operativo.\n\nEn resumen: ECS o EKS deciden **dónde y cómo se orquesta**; Fargate decide **en qué se ejecuta**, sin servidores.',
			},
			{
				tipo: 'comparacion',
				parId: 'ecs-vs-eks-vs-fargate',
			},
			{
				tipo: 'escenario',
				situacion:
					'Un equipo con perfil de desarrollo migra una API en contenedores. No tiene personal dedicado a administrar sistemas operativos ni a aplicar parches, pero sí conoce Kubernetes y quiere evitar quedar atado a una herramienta propietaria.',
				analisis:
					'El equipo necesita un orquestador y, a la vez, no quiere gestionar servidores. Kubernetes gestionado apunta a Amazon Elastic Kubernetes Service (Amazon EKS), y la ejecución sin administrar máquinas encaja con AWS Fargate como motor de cómputo. Si no necesitara Kubernetes, Amazon ECS sería la opción más simple.',
				servicio: 'AWS Fargate',
			},
			{
				tipo: 'errorComun',
				error: 'Creer que Amazon ECS y AWS Fargate son alternativas una de la otra.',
				correccion:
					'Amazon ECS es el orquestador y AWS Fargate es un motor de cómputo: no compiten, se combinan. Puedes ejecutar tareas de ECS sobre Fargate, o sobre instancias de Amazon EC2 que tú administras.',
			},
			{
				tipo: 'clave',
				items: [
					'Amazon ECS es el orquestador propio de AWS; Amazon EKS es Kubernetes gestionado.',
					'AWS Fargate es un motor de cómputo serverless, no un orquestador.',
					'Fargate se combina con ECS o con EKS para ejecutar contenedores sin administrar servidores.',
					'Si ya usas Kubernetes y buscas portabilidad, EKS; si buscas simplicidad en AWS, ECS.',
				],
			},
		],
		preguntasGuia: [
			'¿Qué diferencia hay entre un orquestador de contenedores y un motor de cómputo?',
			'¿Cuándo elegir Amazon ECS y cuándo Amazon EKS?',
			'¿Qué aporta AWS Fargate frente a ejecutar contenedores en instancias que administras?',
		],
	},
	{
		id: '3.3-g3',
		titulo: 'Cómputo serverless: AWS Lambda y AWS Fargate',
		objetivos: ['3.3#4'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'El **cómputo serverless** elimina la administración de servidores: no aprovisionas ni mantienes instancias y pagas por el uso. En el alcance del examen aparecen dos opciones que conviene no confundir:\n\n- **AWS Lambda**: ejecuta **funciones** disparadas por eventos, como una petición HTTP, un objeto nuevo o un mensaje. No hay servidor que gestionar y el servicio escala de forma automática. Está pensado para ejecuciones cortas y sin estado.\n- **AWS Fargate**: ejecuta **contenedores** sin que administres la infraestructura subyacente. Es el motor serverless para cargas que ya están empaquetadas como contenedor.\n\nLa diferencia práctica: Lambda es para código y eventos; Fargate es para contenedores. Ambos comparten la promesa de no ocuparte de servidores, pero no el mismo modelo de empaquetado ni de ejecución.',
			},
			{
				tipo: 'comparacion',
				parId: 'ec2-vs-lambda',
			},
			{
				tipo: 'escenario',
				situacion:
					'Una empresa debe procesar imágenes cada vez que se sube un archivo a un almacenamiento de objetos. El tráfico es irregular: hay horas sin subidas y picos de miles de archivos.',
				analisis:
					'El patrón es orientado a eventos y de duración corta por archivo. AWS Lambda se activa con cada subida, escala solo cuando hay eventos y no cuesta nada cuando no los hay; administrar servidores para ese tráfico irregular sería caro e innecesario.',
				servicio: 'AWS Lambda',
			},
			{
				tipo: 'errorComun',
				error: 'Pensar que AWS Lambda sirve para cualquier carga, incluidas las de ejecución larga o las que necesitan estado en memoria entre invocaciones.',
				correccion:
					'Lambda está diseñado para ejecuciones cortas y sin estado. Para procesos largos, con estado o con contenedores ya construidos encajan mejor AWS Fargate o instancias de Amazon EC2.',
			},
			{
				tipo: 'ejemplo',
				md: '```text\nDisparador -> opción serverless típica\n- Petición HTTP o evento nuevo -> AWS Lambda (función)\n- Contenedor ya empaquetado    -> AWS Fargate (tarea)\n```',
			},
		],
		preguntasGuia: [
			'¿Qué caracteriza al cómputo serverless?',
			'¿En qué se diferencian AWS Lambda y AWS Fargate?',
			'¿Qué tipo de cargas encajan mejor en cada opción serverless?',
		],
	},
	{
		id: '3.3-g4',
		titulo: 'Tipos de instancia de Amazon EC2',
		objetivos: ['3.3#2'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'No todas las cargas necesitan el mismo tipo de instancia. Amazon EC2 ofrece **familias de instancias** optimizadas para distintos cuellos de botella:\n\n- **General purpose**: equilibrio entre cómputo, memoria y red; punto de partida habitual.\n- **Compute optimized**: prioriza la CPU; procesamiento intensivo, servidores web muy exigentes o procesamiento por lotes.\n- **Memory optimized**: prioriza la memoria RAM; bases de datos en memoria, cachés y análisis en tiempo real.\n- **Storage optimized**: prioriza la entrada/salida de disco y el almacenamiento local; bases de datos con muchas lecturas y escrituras y sistemas de archivos de alto rendimiento.\n- **Accelerated computing**: incorpora aceleradores; entrenamiento e inferencia de aprendizaje automático y procesamiento gráfico.\n\nElegir bien la familia evita pagar recursos que la carga no aprovecha: es la base del *rightsizing*.',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Usa compute optimized cuando el cuello de botella es la CPU: procesamiento por lotes, codificación o servidores con mucha carga de cálculo.',
					'Usa storage optimized cuando el cuello de botella es la entrada/salida de disco o necesitas almacenamiento local de alto rendimiento.',
					'Usa memory optimized cuando el conjunto de datos activo vive en memoria, como en cachés o bases de datos en memoria.',
				],
				noUsar: [
					'No elijas una familia solo por su tamaño: la familia responde al perfil de la carga y el tamaño, al volumen.',
					'No uses accelerated computing si la carga no aprovecha el acelerador: pagarías por capacidad sin uso.',
				],
			},
			{
				tipo: 'ejemplo',
				md: '```text\nCuello de botella -> familia\n- CPU intensiva       -> compute optimized\n- I/O de disco alto   -> storage optimized\n- Datos en memoria    -> memory optimized\n- Carga equilibrada   -> general purpose\n- IA o gráficos       -> accelerated computing\n```',
			},
			{
				tipo: 'errorComun',
				error: 'Elegir la instancia más grande o más potente en lugar de la familia adecuada al perfil de la carga.',
				correccion:
					'Primero se identifica el recurso limitante (CPU, memoria, disco, red o acelerador) y se elige la familia; después se dimensiona el tamaño. Sobredimensionar no arregla un cuello de botella mal identificado.',
			},
		],
		preguntasGuia: [
			'¿Qué familias de instancias ofrece Amazon EC2 y para qué sirve cada una?',
			'¿Cómo se elige la familia de instancia adecuada a una carga?',
			'¿Qué diferencia hay entre familia y tamaño de instancia?',
		],
	},
	{
		id: '3.3-g5',
		titulo: 'Elasticidad con auto scaling y balanceadores de carga',
		objetivos: ['3.3#5', '3.3#6'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'La **elasticidad** es la capacidad de ajustar automáticamente los recursos a la demanda. AWS Auto Scaling la implementa observando una métrica y ajustando el número de recursos: cuando la demanda sube añade capacidad, y cuando baja la retira. Así el sistema soporta los picos sin quedar infrautilizado el resto del tiempo, y se paga por lo que se usa.\n\nUn **balanceador de carga** reparte el tráfico entrante entre varios destinos y comprueba su estado. Aporta tres cosas: distribuye la carga, evita depender de un único servidor y retira de la rotación los destinos que no responden. Auto scaling y balanceador se complementan: el balanceador reparte entre los destinos activos y auto scaling decide cuántos hay.',
			},
			{
				tipo: 'ejemplo',
				md: '```text\nPico de tráfico   -> auto scaling añade recursos\nValle de tráfico  -> auto scaling retira recursos\nBalanceador       -> reparte el tráfico entre los destinos activos\nDestino que falla -> el balanceador deja de enviarle tráfico\n```',
			},
			{
				tipo: 'errorComun',
				error: 'Confundir elasticidad con tener capacidad fija de sobra para el peor caso.',
				correccion:
					'La elasticidad ajusta la capacidad a la demanda; la capacidad fija sobredimensionada desperdicia dinero la mayor parte del tiempo. AWS Auto Scaling es el mecanismo que aporta esa elasticidad.',
			},
			{
				tipo: 'clave',
				items: [
					'AWS Auto Scaling ajusta el número de recursos según una métrica: añade capacidad en los picos y la retira en los valles.',
					'Elasticidad significa pagar por lo que se usa, no mantener capacidad para el peor caso.',
					'Un balanceador de carga reparte el tráfico entre varios destinos y comprueba su estado.',
					'Balanceador y auto scaling se complementan: uno reparte y el otro decide cuántos destinos existen.',
				],
			},
		],
		preguntasGuia: [
			'¿Qué significa que un sistema sea elástico?',
			'¿Cómo aporta AWS Auto Scaling elasticidad a una aplicación?',
			'¿Qué aporta un balanceador de carga además de repartir el tráfico?',
		],
	},
];
