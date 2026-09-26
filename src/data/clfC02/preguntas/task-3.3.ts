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
			'Una máquina virtual no permite instalar software propio ni elegir el sistema operativo por el cliente, a diferencia de una función serverless, que sí lo permite.',
			'En el cómputo serverless no se aprovisionan ni administran servidores, mientras que con máquinas virtuales sí se gestiona el sistema operativo.',
			'Los contenedores solo pueden ejecutarse en instancias que el cliente administra y nunca en un motor serverless.',
			'El cómputo serverless obliga a pagar por capacidad reservada aunque no haya tráfico ni eventos que procesar.',
		],
		correctAnswer: 1,
		explanation:
			'El espectro va del control total de la máquina virtual, que incluye gestionar el sistema operativo, al cómputo serverless, donde no se aprovisionan ni administran servidores. Las máquinas virtuales sí permiten instalar software, los contenedores pueden correr en un motor serverless y el cómputo serverless no exige capacidad reservada. Si el requisito fuera controlar el sistema operativo, la respuesta se inclinaría por las máquinas virtuales; si cambiara a ejecución solo ante eventos, por el cómputo serverless.',
		porQueOpcion: [
			'Incorrecta: la máquina virtual sí permite instalar software propio y elegir el sistema operativo.',
			'Correcta: en serverless no se aprovisionan ni administran servidores, mientras que con máquinas virtuales se gestiona el sistema operativo.',
			'Incorrecta: los contenedores sí pueden ejecutarse en un motor serverless.',
			'Incorrecta: el cómputo serverless no exige capacidad reservada y se cobra por uso.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/ec2/',
		],
	},
	{
		id: '3.3-q2',
		taskId: '3.3',
		objetivos: ['3.3#2'],
		tipo: 'conocimiento',
		question:
			'Una carga se caracteriza por un volumen muy alto de operaciones de lectura y escritura sobre discos locales. ¿Qué familia de instancias encaja mejor?',
		options: [
			'Memory optimized, porque prioriza la memoria RAM y mantiene en ella el conjunto de datos activo de la carga.',
			'Compute optimized, porque prioriza la CPU y ofrece la mejor relación de cálculo por núcleo.',
			'Storage optimized, porque prioriza la entrada/salida y el almacenamiento local.',
			'General purpose, porque equilibra todos los recursos y sirve como punto de partida habitual.',
		],
		correctAnswer: 2,
		explanation:
			'Las familias storage optimized están diseñadas para cargas con muchas operaciones de disco y requisitos altos de almacenamiento local. Compute optimized prioriza la CPU, memory optimized la memoria y general purpose es el equilibrio, no el tipo especializado para entrada/salida. Si cambiara el cuello de botella a la CPU, la familia adecuada pasaría a ser compute optimized.',
		porQueOpcion: [
			'Incorrecta: memory optimized prioriza la memoria RAM, no la entrada/salida sobre discos locales.',
			'Incorrecta: compute optimized prioriza la CPU, no el rendimiento de los discos locales.',
			'Correcta: storage optimized está diseñada para cargas con muchas operaciones de entrada/salida y almacenamiento local.',
			'Incorrecta: general purpose equilibra recursos, pero no es la familia especializada para alto rendimiento de disco.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/ram/latest/userguide/what-is.html',
		],
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
			'Cuando el recurso limitante es la CPU, la familia compute optimized ofrece la mejor relación entre capacidad de cálculo y coste. Storage optimized y memory optimized optimizan recursos que esta carga no necesita, y accelerated computing solo se justifica si el trabajo aprovecha un acelerador. Si el requisito cambiara a un conjunto de datos que vive en memoria, la familia sería memory optimized.',
		porQueOpcion: [
			'Correcta: la familia compute optimized ofrece la mejor relación de cálculo por coste cuando el recurso limitante es la CPU.',
			'Incorrecta: storage optimized optimiza la entrada/salida, que esta carga no necesita.',
			'Incorrecta: memory optimized optimiza la memoria, que esta carga no necesita.',
			'Incorrecta: accelerated computing solo se justifica si el trabajo aprovecha un acelerador.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/ec2/',
		],
	},
	{
		id: '3.3-q4',
		taskId: '3.3',
		objetivos: ['3.3#3'],
		tipo: 'comparacion',
		question:
			'Un equipo debe decidir cómo ejecutar sus contenedores. ¿Qué afirmación distingue correctamente un orquestador propietario, Kubernetes gestionado y un motor de cómputo serverless?',
		options: [
			'Amazon ECS y Amazon EKS son motores serverless que ejecutan contenedores, y AWS Fargate es un orquestador de Kubernetes que organiza esos contenedores.',
			'Amazon ECS y Amazon EKS son orquestadores de contenedores, mientras que AWS Fargate es un motor de cómputo que los ejecuta sin administrar servidores.',
			'Los tres son orquestadores equivalentes y solo cambian de nombre según la región donde se despliegan los contenedores.',
			'AWS Fargate sustituye a Amazon ECS y a Amazon EKS, por lo que no se pueden combinar entre ellos en la misma cuenta.',
		],
		correctAnswer: 1,
		explanation:
			'Amazon ECS es el orquestador propio de AWS y Amazon EKS es Kubernetes gestionado; ambos organizan los contenedores. AWS Fargate es el motor serverless que ejecuta las tareas y se combina con cualquiera de los dos. No son alternativas entre sí: presentarlos como motores o como sustitutos invierte sus papeles. Si el requisito fuera ejecutar en nodos que el equipo administra, la alternativa a Fargate serían instancias de Amazon EC2.',
		porQueOpcion: [
			'Incorrecta: Amazon ECS y Amazon EKS son orquestadores, no motores serverless, y AWS Fargate no es un orquestador de Kubernetes.',
			'Correcta: Amazon ECS y Amazon EKS son orquestadores de contenedores y AWS Fargate es el motor serverless que los ejecuta sin administrar servidores.',
			'Incorrecta: no son tres orquestadores equivalentes; AWS Fargate es un motor de cómputo.',
			'Incorrecta: AWS Fargate no sustituye a ECS ni a EKS, sino que se combina con cualquiera de ellos.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/ecs/',
			'https://docs.aws.amazon.com/eks/',
			'https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html',
			'https://docs.aws.amazon.com/ec2/',
		],
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
			'Amazon Elastic Container Registry (Amazon ECR), porque almacena las imágenes de contenedor y las ejecuta sin administrar servidores.',
		],
		correctAnswer: 0,
		explanation:
			'Si no se necesita Kubernetes y se busca simplicidad, Amazon ECS es el orquestador adecuado; como no se quieren administrar servidores, se ejecuta con el motor serverless AWS Fargate. Amazon EKS tendría sentido con experiencia previa en Kubernetes, gestionar instancias a mano añade trabajo innecesario y Amazon ECR solo almacena las imágenes, no ejecuta la carga. Si cambiara el requisito a portabilidad de Kubernetes, la elección sería Amazon EKS.',
		porQueOpcion: [
			'Correcta: Amazon ECS es el orquestador simple y AWS Fargate el motor serverless, sin administrar servidores ni exigir Kubernetes.',
			'Incorrecta: Amazon EKS con nodos administrados a mano añade la complejidad y la administración que la startup quiere evitar.',
			'Incorrecta: ejecutar contenedores manualmente en Amazon EC2 obliga a administrar servidores y prescinde del orquestador.',
			'Incorrecta: Amazon ECR almacena y versiona las imágenes de contenedor, pero no es un motor de cómputo ni ejecuta la aplicación.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/ecs/',
			'https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html',
			'https://docs.aws.amazon.com/eks/',
			'https://docs.aws.amazon.com/ec2/',
			'https://docs.aws.amazon.com/ecr/',
		],
	},
	{
		id: '3.3-q6',
		taskId: '3.3',
		objetivos: ['3.3#4'],
		tipo: 'comparacion',
		question:
			'¿Qué diferencia fundamental separa a un servidor virtual que administra el cliente de una función serverless por evento?',
		options: [
			'Amazon EC2 cobra solo por invocación y AWS Lambda cobra por hora de instancia encendida, aunque no reciba tráfico ni eventos.',
			'Amazon EC2 entrega servidores que el cliente administra; AWS Lambda ejecuta funciones por evento sin gestionar servidores.',
			'AWS Lambda permite instalar el sistema operativo que se quiera y Amazon EC2 no permite elegirlo ni configurarlo.',
			'Ambos son idénticos, salvo que AWS Lambda está limitado a un único usuario y no admite escalado.',
		],
		correctAnswer: 1,
		explanation:
			'Amazon EC2 proporciona instancias que el cliente configura y administra, con capacidad disponible de forma continua. AWS Lambda ejecuta funciones disparadas por eventos, sin servidores que gestionar y con pago por uso. Invertir los modelos de cobro, el control del sistema operativo o el escalado describe justo lo contrario. Si el requisito cambiara a un proceso continuo y con estado, la respuesta se inclinaría por Amazon EC2.',
		porQueOpcion: [
			'Incorrecta: invierte los modelos de cobro, ya que Amazon EC2 cobra por capacidad y AWS Lambda por invocación.',
			'Correcta: Amazon EC2 entrega servidores que el cliente administra y AWS Lambda ejecuta funciones por evento sin gestionar servidores.',
			'Incorrecta: AWS Lambda no permite instalar el sistema operativo y Amazon EC2 sí permite elegirlo y configurarlo.',
			'Incorrecta: Amazon EC2 y AWS Lambda no son idénticos; no están limitados a un único usuario y Lambda escala automáticamente.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/ec2/',
			'https://docs.aws.amazon.com/lambda/latest/dg/welcome.html',
		],
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
			'El patrón es orientado a eventos y de ejecución corta, justo el caso de AWS Lambda: se activa cuando llega cada archivo, escala con los eventos y no cuesta cuando no hay ninguno. Un servidor encendido de forma permanente desperdicia capacidad entre archivos, y ni la base de datos ni el balanceador transforman archivos. Si cambiara el requisito a un proceso largo con estado, la opción sería un servidor virtual.',
		porQueOpcion: [
			'Incorrecta: un servidor de Amazon EC2 siempre encendido desperdicia capacidad entre archivos y no encaja con la llegada imprevisible.',
			'Correcta: una función de AWS Lambda se activa con cada archivo, escala con los eventos y no cuesta cuando no hay ninguno.',
			'Incorrecta: una base de datos relacional no procesa archivos dentro de la misma consulta.',
			'Incorrecta: un balanceador de carga reparte tráfico y no transforma archivos en el momento de la subida.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/ec2/',
			'https://docs.aws.amazon.com/lambda/latest/dg/welcome.html',
		],
	},
	{
		id: '3.3-q8',
		taskId: '3.3',
		objetivos: ['3.3#5'],
		tipo: 'conocimiento',
		question: '¿Qué aporta AWS Auto Scaling a un sistema que debe atender demanda variable?',
		options: [
			'Cifra los datos en reposo de forma automática y rota las claves de cifrado según una programación definida por el equipo.',
			'Ajusta el número de recursos a la demanda, añadiendo capacidad en los picos y retirándola en los valles.',
			'Reemplaza la necesidad de un balanceador de carga al repartir el tráfico entre los recursos disponibles.',
			'Garantiza que el precio por hora de cada instancia sea siempre el más bajo posible del mercado.',
		],
		correctAnswer: 1,
		explanation:
			'AWS Auto Scaling aporta elasticidad: ajusta automáticamente la cantidad de recursos según la demanda. No cifra datos, no sustituye al balanceador de carga ni cambia por sí solo el modelo de precios. Si el requisito fuera repartir el tráfico entre los destinos activos, la pieza sería un balanceador de carga.',
		porQueOpcion: [
			'Incorrecta: el cifrado y la rotación de claves no son funciones de AWS Auto Scaling.',
			'Correcta: AWS Auto Scaling ajusta el número de recursos a la demanda, añadiendo capacidad en los picos y retirándola en los valles.',
			'Incorrecta: Auto Scaling no sustituye al balanceador de carga, que sigue repartiendo el tráfico.',
			'Incorrecta: Auto Scaling no garantiza el precio por hora más bajo del mercado.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/autoscaling/',
		],
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
			'Un balanceador de carga distribuye las peticiones entre varios destinos y verifica su salud para dejar de enviar tráfico a los que fallan. Mejora la disponibilidad y la distribución de la carga, y se complementa con auto scaling, que decide cuántos destinos existen. Si el requisito fuera decidir cuántas instancias debe haber según la demanda, la pieza sería auto scaling.',
		porQueOpcion: [
			'Incorrecta: el balanceador no ejecuta el código de la aplicación, sino que reparte el tráfico.',
			'Correcta: un balanceador de carga reparte el tráfico entrante entre varios destinos y comprueba su estado.',
			'Incorrecta: un balanceador de carga no almacena de forma permanente los archivos estáticos.',
			'Incorrecta: el balanceador se complementa con auto scaling, no lo sustituye cuando no hay tráfico.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/ec2/',
		],
	},
	{
		id: '3.3-q10',
		taskId: '3.3',
		objetivos: ['3.3#4'],
		tipo: 'tradeoff',
		question:
			'Un equipo sopesa ejecutar un proceso en funciones serverless frente a instancias de servidor virtual. ¿Qué criterio inclina la decisión hacia las funciones?',
		options: [
			'Que el proceso sea continuo, de larga duración y necesite control del sistema operativo.',
			'Que la carga llegue por eventos, sea de ejecución corta y no requiera estado entre invocaciones.',
			'Que el proceso necesite conservar datos en memoria entre ejecuciones.',
			'Que se quiera pagar por capacidad reservada durante todo el año.',
		],
		correctAnswer: 1,
		explanation:
			'Las funciones serverless brillan con cargas orientadas a eventos, cortas y sin estado, porque solo se ejecutan y se cobran cuando hay eventos. Los procesos continuos, largos o con estado encajan mejor en un servidor virtual, donde existe una máquina disponible de forma permanente. Si el requisito cambiara a conservar estado entre ejecuciones, la decisión pasaría a instancias de servidor virtual.',
		porQueOpcion: [
			'Incorrecta: un proceso continuo y de larga duración con control del sistema operativo encaja mejor en un servidor virtual.',
			'Correcta: las cargas que llegan por eventos, son cortas y no requieren estado son el caso ideal de las funciones serverless.',
			'Incorrecta: conservar datos en memoria entre ejecuciones encaja mejor en un servidor virtual con estado.',
			'Incorrecta: pagar capacidad reservada todo el año es lo opuesto al pago por uso de serverless.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/ec2/',
		],
	},
	{
		id: '3.3-q11',
		taskId: '3.3',
		objetivos: ['3.3#1'],
		tipo: 'comparacion',
		question:
			'Un equipo compara ejecutar su carga en máquinas virtuales o en cómputo serverless. ¿Qué afirmación distingue correctamente ambos modelos?',
		options: [
			'En las máquinas virtuales el cliente administra el sistema operativo y la capacidad está disponible; en serverless no se gestionan servidores y se paga por uso.',
			'En serverless el cliente administra el sistema operativo de cada servidor y paga por adelantado la capacidad reservada que necesitará durante todo el año, sin depender del consumo real.',
			'En las máquinas virtuales no se puede instalar software y en serverless solo se ejecutan contenedores ya empaquetados.',
			'Ambos modelos ofrecen el mismo control y el mismo modelo de pago, y solo cambia el nombre comercial.',
		],
		correctAnswer: 0,
		explanation:
			'En las máquinas virtuales el cliente controla el sistema operativo y la capacidad permanece disponible; en serverless no se gestionan servidores y se paga por uso. Invertir el control o el pago, o tratarlos como equivalentes, niega la diferencia central del espectro de cómputo. Si el requisito fuera instalar software específico en el sistema operativo, la respuesta serían las máquinas virtuales.',
		porQueOpcion: [
			'Correcta: en las máquinas virtuales el cliente administra el sistema operativo y en serverless no se gestionan servidores y se paga por uso.',
			'Incorrecta: invierte el modelo, ya que en serverless no se administra el sistema operativo y se paga por uso, no por capacidad reservada.',
			'Incorrecta: en las máquinas virtuales sí se puede instalar software y serverless no se limita a contenedores empaquetados.',
			'Incorrecta: ambos modelos difieren en control y modelo de pago, no solo en el nombre comercial.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/ec2/',
		],
	},
	{
		id: '3.3-q12',
		taskId: '3.3',
		objetivos: ['3.3#2'],
		tipo: 'comparacion',
		question:
			'Una carga tiene cuellos de botella distintos según el componente. ¿Qué afirmación distingue correctamente las familias de instancias?',
		options: [
			'Compute optimized prioriza la CPU, memory optimized la memoria RAM y storage optimized la entrada/salida y el almacenamiento local.',
			'Compute optimized prioriza la memoria RAM, memory optimized el almacenamiento local y storage optimized la capacidad de CPU de cada instancia contratada.',
			'Las tres familias son equivalentes y solo se diferencian en el tamaño de la instancia y en la región elegida.',
			'Accelerated computing es la opción por defecto para cualquier carga porque siempre ofrece más rendimiento.',
		],
		correctAnswer: 0,
		explanation:
			'Cada familia responde a un cuello de botella: compute optimized a la CPU, memory optimized a la RAM y storage optimized a la entrada/salida y el almacenamiento local. Intercambiar las especializaciones lleva a elegir la familia equivocada, y ninguna familia es la opción por defecto para todo. Si el requisito cambiara a entrenamiento de aprendizaje automático, la familia adecuada sería accelerated computing.',
		porQueOpcion: [
			'Correcta: compute optimized prioriza la CPU, memory optimized la RAM y storage optimized la entrada/salida y el almacenamiento local.',
			'Incorrecta: intercambia las especializaciones de las tres familias.',
			'Incorrecta: las tres familias no son equivalentes; cada una responde a un cuello de botella distinto.',
			'Incorrecta: accelerated computing no es la opción por defecto y solo se justifica con aceleradores.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/ram/latest/userguide/what-is.html',
		],
	},
	{
		id: '3.3-q13',
		taskId: '3.3',
		objetivos: ['3.3#1'],
		tipo: 'escenario',
		question:
			'Una empresa debe elegir un modelo de cómputo para tres cargas: una API web con picos, un proceso nocturno de larga duración y un servicio de contenedores ya empaquetado. ¿Qué asignación es más razonable?',
		options: [
			'Serverless por función para la API, servidor virtual para el proceso largo y motor serverless de contenedores para el servicio empaquetado.',
			'Servidor virtual para las tres cargas, porque es el modelo con más control, admite cualquier proceso y permite instalar todo el software necesario.',
			'Serverless por función para las tres cargas, porque elimina los servidores en todos los casos.',
			'Motor serverless de contenedores para las tres cargas, porque acepta funciones y procesos largos indistintamente.',
		],
		correctAnswer: 0,
		explanation:
			'Cada carga encaja con un modelo distinto: la API con picos en funciones serverless, el proceso largo en un servidor virtual y el contenedor ya empaquetado en un motor serverless de contenedores. Forzar un único modelo para todo desaprovecha las ventajas de cada uno. Si el escenario pidiera ejecutar todo el código como funciones, habría que descartar el proceso largo, que no encaja en ese modelo.',
		porQueOpcion: [
			'Correcta: asigna serverless a la API con picos, servidor virtual al proceso largo y motor serverless de contenedores al servicio empaquetado.',
			'Incorrecta: usar servidor virtual para las tres cargas desaprovecha las ventajas de serverless y de los contenedores gestionados.',
			'Incorrecta: serverless por función no encaja con el proceso nocturno de larga duración ni con el contenedor empaquetado.',
			'Incorrecta: el motor serverless de contenedores no acepta funciones ni procesos largos indistintamente.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/ec2/',
		],
	},
	{
		id: '3.3-q14',
		taskId: '3.3',
		objetivos: ['3.3#5'],
		tipo: 'escenario',
		question:
			'Una tienda en línea ve multiplicarse el tráfico en las rebajas y caer después al nivel habitual. Sin embargo, el equipo quiere mantener el presupuesto anual bajo control. ¿Cómo debe responder la arquitectura para ser elástica y eficiente en coste?',
		options: [
			'Dimensionar la capacidad para el pico de rebajas y mantenerla contratada durante todo el año, aunque quede infrautilizada.',
			'Ajustar automáticamente el número de recursos a la demanda, añadiendo capacidad en el pico y retirándola en el valle.',
			'Mantener una capacidad fija pequeña y rechazar el tráfico excedente durante las horas de mayor demanda.',
			'Replicar los recursos en varias regiones para repartir la carga entre todas ellas en cualquier momento.',
		],
		correctAnswer: 1,
		explanation:
			'La elasticidad ajusta el número de recursos a la demanda: crece en el pico y se retira en el valle, pagando solo por lo usado. Dimensionar para el pico deja capacidad ociosa el resto del año y limitar la capacidad rechaza clientes. Si el objetivo cambiara a resistir el fallo de una región, la decisión sería replicar entre regiones, no solo escalar.',
		porQueOpcion: [
			'Incorrecta: dimensionar para el pico deja capacidad ociosa e infrautilizada durante todo el año.',
			'Correcta: ajustar automáticamente el número de recursos a la demanda añade capacidad en el pico y la retira en el valle.',
			'Incorrecta: mantener capacidad fija y rechazar el tráfico excedente pierde clientes en las horas de mayor demanda.',
			'Incorrecta: replicar en varias regiones reparte la carga, pero no ajusta la capacidad a la demanda ni reduce el coste ocioso.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/ec2/',
		],
	},
	{
		id: '3.3-q15',
		taskId: '3.3',
		objetivos: ['3.3#6'],
		tipo: 'casoDeUso',
		question:
			'Un equipo despliega varias instancias detrás de un componente que reparte el tráfico y comprueba su estado. ¿Qué aporta ese componente a la arquitectura?',
		options: [
			'Distribuye las peticiones, mejora la disponibilidad y deja de enviar tráfico a los destinos que fallan.',
			'Amazon API Gateway, porque publica la API, la protege con límites de uso y reparte las peticiones entre los destinos según su estado.',
			'Almacena de forma permanente los archivos estáticos que sirve a los usuarios.',
			'Decide cuántos destinos deben existir y crea o elimina instancias según la demanda.',
		],
		correctAnswer: 0,
		explanation:
			'El balanceador de carga reparte las peticiones entre varios destinos y retira de la rotación los que no responden, mejorando la disponibilidad. No publica ni gestiona APIs, como hace Amazon API Gateway, no almacena archivos de forma permanente y no decide cuántos destinos existen, tarea de auto scaling. Si el requisito fuera ajustar cuántas instancias hay según la demanda, la pieza responsable sería auto scaling.',
		porQueOpcion: [
			'Correcta: el balanceador distribuye las peticiones, mejora la disponibilidad y deja de enviar tráfico a los destinos que fallan.',
			'Incorrecta: Amazon API Gateway publica y gestiona APIs, pero no reparte el tráfico entre destinos ni comprueba su estado, función del balanceador.',
			'Incorrecta: el balanceador no almacena de forma permanente los archivos estáticos.',
			'Incorrecta: decidir cuántos destinos existen y crearlos o eliminarlos es tarea de auto scaling, no del balanceador.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html',
		],
	},
];
