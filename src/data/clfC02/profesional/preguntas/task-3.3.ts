import type { PreguntaProfesionalClfC02 } from '@/data/clfC02/profesional/types';

export const profesionalTask33: PreguntaProfesionalClfC02[] = [
	{
		id: 'prof-3.3-q1',
		taskId: '3.3',
		objetivos: ['3.3#1'],
		tipo: 'servicio',
		question:
			'Una empresa revisa qué servicios de AWS puede usar para ejecutar su carga de trabajo. ¿Qué afirmación describe correctamente las opciones de cómputo?',
		options: [
			'Amazon EC2 ofrece servidores virtuales, AWS Lambda ejecuta código sin administrar servidores y AWS Fargate ejecuta contenedores sin administrar la infraestructura.',
			'AWS Lambda y AWS Fargate son exactamente el mismo servicio serverless y solo cambia el nombre comercial según la Región donde se despliegan las cargas de trabajo.',
			'Amazon EC2 solo ejecuta contenedores y AWS Lambda solo ejecuta máquinas virtuales.',
			'Todo el cómputo de AWS exige administrar el sistema operativo subyacente.',
		],
		correctAnswer: 0,
		explanation:
			'AWS agrupa el cómputo en servidores virtuales (Amazon EC2), contenedores (Amazon ECS y Amazon EKS, con AWS Fargate como opción sin administrar servidores) y cómputo sin servidor basado en funciones (AWS Lambda). Igualar Lambda y Fargate o invertir sus modelos ignora que uno ejecuta funciones y el otro contenedores. Si el requisito cambiara a ejecutar contenedores sin gestionar servidores, la respuesta sería AWS Fargate.',
		porQueOpcion: [
			'Correcta: distingue instancias, contenedores y funciones serverless.',
			'Incorrecto: son modelos distintos; AWS Lambda ejecuta funciones y AWS Fargate contenedores.',
			'Incorrecto: Amazon EC2 ejecuta máquinas virtuales; la relación es la inversa.',
			'Incorrecto: precisamente AWS Lambda y AWS Fargate evitan administrar el sistema operativo.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/ec2/',
			'https://docs.aws.amazon.com/lambda/latest/dg/welcome.html',
			'https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html',
			'https://docs.aws.amazon.com/ecs/',
			'https://docs.aws.amazon.com/eks/',
		],
	},
	{
		id: 'prof-3.3-q2',
		taskId: '3.3',
		objetivos: ['3.3#2'],
		tipo: 'escenario',
		question:
			'Una carga de análisis financiero exige procesadores de alto rendimiento y mucha memoria por núcleo, y por otro lado un clúster de datos necesita discos de alto IOPS y gran capacidad. ¿Qué tipos de instancia encajan mejor?',
		options: [
			'Optimizadas para cómputo para el análisis financiero y optimizadas para almacenamiento para el clúster de datos.',
			'Optimizadas para almacenamiento para el análisis y de propósito general para el clúster de datos.',
			'Aceleradas por GPU para ambos casos, porque siempre ofrecen más rendimiento.',
			'De propósito general para ambos, porque el tipo de instancia no afecta al rendimiento.',
		],
		correctAnswer: 0,
		explanation:
			'Los tipos de instancia se eligen según la carga: las optimizadas para cómputo maximizan CPU y memoria por núcleo para cálculo intensivo, y las optimizadas para almacenamiento ofrecen alto IOPS y capacidad para bases de datos y clústeres. Invertir las especializaciones o usar GPU sin aprovecharla lleva a pagar recursos sin uso. Si el requisito cambiara a entrenamiento de aprendizaje automático, la familia adecuada sería accelerated computing.',
		porQueOpcion: [
			'Correcta: asigna cada carga al tipo de instancia especializado que la favorece.',
			'Incorrecto: invierte las especializaciones; el análisis necesita cómputo y el clúster, almacenamiento.',
			'Incorrecto: las GPU se justifican en cargas gráficas o de aprendizaje automático, no en estos dos casos.',
			'Incorrecto: el tipo de instancia es determinante para el rendimiento de la carga.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/ec2/',
		],
	},
	{
		id: 'prof-3.3-q3',
		taskId: '3.3',
		objetivos: ['3.3#3'],
		tipo: 'comparacion',
		question:
			'Un equipo quiere ejecutar contenedores. ¿Qué distingue a un orquestador propietario de un servicio de Kubernetes gestionado?',
		options: [
			'Amazon ECS es el orquestador de contenedores propio de AWS y Amazon EKS es el servicio gestionado de Kubernetes.',
			'Amazon ECS gestiona clústeres de Kubernetes y Amazon EKS es un orquestador propietario.',
			'Ambos son servicios de máquinas virtuales sin relación con los contenedores.',
			'Amazon EKS solo ejecuta funciones serverless y Amazon ECS solo bases de datos.',
		],
		correctAnswer: 0,
		explanation:
			'Amazon ECS es el orquestador nativo de AWS para ejecutar contenedores, mientras que Amazon EKS ofrece Kubernetes gestionado. La elección depende de si se quiere la integración propia de AWS o el ecosistema estándar de Kubernetes. Intercambiar los papeles de ambos servicios o negar su relación con los contenedores es el error típico. Si el requisito fuera portabilidad de Kubernetes entre nubes, la respuesta sería Amazon EKS.',
		porQueOpcion: [
			'Correcta: distingue el orquestador propio de AWS del Kubernetes gestionado.',
			'Incorrecto: intercambia los papeles de ambos servicios.',
			'Incorrecto: los dos son servicios de contenedores.',
			'Incorrecto: ninguno de los dos se dedica a funciones serverless ni a bases de datos.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/ecs/',
			'https://docs.aws.amazon.com/eks/',
		],
	},
	{
		id: 'prof-3.3-q4',
		taskId: '3.3',
		objetivos: ['3.3#4'],
		tipo: 'trampa',
		question:
			'Un equipo afirma que una función serverless y un motor serverless de contenedores son intercambiables. ¿Qué afirmación es correcta?',
		options: [
			'AWS Lambda ejecuta funciones activadas por eventos, mientras que AWS Fargate ejecuta contenedores sin que el equipo administre la infraestructura.',
			'Ambos ejecutan exactamente las mismas funciones y solo se diferencian en la cantidad de memoria disponible para cada invocación y en el nombre que recibe el servicio según la Región.',
			'AWS Fargate ejecuta funciones y AWS Lambda ejecuta contenedores.',
			'AWS Lambda obliga a administrar clústeres de Kubernetes.',
		],
		correctAnswer: 0,
		explanation:
			'Comparten que no hay servidores que administrar, pero difieren en el modelo: AWS Lambda ejecuta funciones por evento con escalado automático, y AWS Fargate ejecuta contenedores aportando el cómputo sin gestionar instancias. Invertir los modelos o atribuir clústeres de Kubernetes a Lambda contradice la definición de cada servicio. Si el requisito fuera ejecutar una aplicación ya empaquetada como contenedor, la opción sería AWS Fargate, no Lambda.',
		porQueOpcion: [
			'Correcta: aclara el modelo de cada opción serverless.',
			'Incorrecto: AWS Fargate no ejecuta funciones, ejecuta contenedores.',
			'Incorrecto: invierte los modelos de ambos servicios.',
			'Incorrecto: AWS Lambda no expone clústeres; el propio modelo serverless evita esa administración.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/lambda/latest/dg/welcome.html',
			'https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html',
		],
	},
	{
		id: 'prof-3.3-q5',
		taskId: '3.3',
		objetivos: ['3.3#5'],
		tipo: 'escenario',
		question:
			'El tráfico de una aplicación web sube y baja a lo largo del día. ¿Cómo aporta AWS Auto Scaling elasticidad?',
		options: [
			'Ajusta automáticamente el número de instancias según la demanda, añadiendo capacidad en los picos y retirándola cuando baja.',
			'Reparte las peticiones entre varias Availability Zones y comprueba su estado, pero sin cambiar el número de instancias en ningún momento.',
			'Almacena en caché el contenido estático para reducir la carga del origen.',
			'Convierte las instancias en contenedores gestionados.',
		],
		correctAnswer: 0,
		explanation:
			'AWS Auto Scaling proporciona elasticidad ajustando el número de recursos en función de la demanda: aprovisiona en los picos y reduce cuando el tráfico baja, controlando a la vez el coste. Repartir tráfico entre Availability Zones es función del balanceador; la caché reduce carga pero no añade ni retira capacidad; y escalar no transforma el tipo de cómputo. Si el requisito fuera distribuir las peticiones entre destinos activos, la pieza sería un balanceador de carga.',
		porQueOpcion: [
			'Correcta: describe la elasticidad como ajuste dinámico de la capacidad.',
			'Incorrecto: eso describe el balanceo de carga, no el escalado.',
			'Incorrecto: la caché reduce carga pero no añade ni retira capacidad.',
			'Incorrecto: el escalado no transforma el tipo de cómputo.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/autoscaling/',
		],
	},
	{
		id: 'prof-3.3-q6',
		taskId: '3.3',
		objetivos: ['3.3#6'],
		tipo: 'servicio',
		question:
			'Una aplicación se ejecuta en varias instancias idénticas y el equipo quiere repartir las peticiones solo entre las que responden, retirando del reparto las que fallan. ¿Para qué sirve el componente que cumple esa función?',
		options: [
			'Distribuir el tráfico entrante entre varios destinos y comprobar su estado para mejorar la disponibilidad.',
			'Aumentar el tamaño de la instancia para que soporte por sí sola todo el tráfico entrante de la aplicación.',
			'Ejecutar el código de la aplicación sin administrar servidores.',
			'Guardar copias de seguridad de las instancias.',
		],
		correctAnswer: 0,
		explanation:
			'El balanceador de carga reparte las peticiones entre varios destinos y detecta los que no responden para dejar de enviarles tráfico, lo que aumenta la disponibilidad y la tolerancia a fallos. No redimensiona instancias, no ejecuta código ni hace copias. Si cambia el requisito a decidir cuántos destinos existen según la demanda, la pieza sería auto scaling.',
		porQueOpcion: [
			'Correcta: distribución de tráfico y comprobación de estado.',
			'Incorrecto: el redimensionado es tarea del escalado y del tipo de instancia.',
			'Incorrecto: eso describe el cómputo serverless, no un balanceador.',
			'Incorrecto: las copias de seguridad corresponden a otros servicios.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/ec2/',
		],
	},
];
