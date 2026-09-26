import type { PreguntaClfC02 } from '@/data/clfC02/types';

export const preguntasTask38: PreguntaClfC02[] = [
	{
		id: '3.8-q1',
		taskId: '3.8',
		objetivos: ['3.8#1'],
		tipo: 'conocimiento',
		question:
			'¿Qué servicio de integración de aplicaciones entrega el mismo mensaje a múltiples suscriptores mediante publicación/suscripción, adecuado para alertas y notificaciones?',
		options: [
			'Amazon Simple Queue Service (Amazon SQS), porque cada suscriptor retira su propio mensaje de la cola.',
			'Amazon Simple Notification Service (Amazon SNS), porque difunde el mensaje a todos los suscriptores a la vez.',
			'Amazon EventBridge, porque construye una máquina de estados con los pasos del flujo y los ejecuta en orden de principio a fin.',
			'AWS Step Functions, porque retiene los mensajes en una cola hasta que el consumidor los lee.',
		],
		correctAnswer: 1,
		explanation:
			'Amazon SNS implementa publicación/suscripción: un mensaje se difunde a muchos suscriptores, que es el patrón de alertas y notificaciones. La cola que retiene mensajes para un consumidor es Amazon SQS; Amazon EventBridge enruta eventos según reglas y AWS Step Functions orquesta pasos. Si el requisito fuera que cada mensaje lo procesara un solo consumidor, el servicio sería Amazon SQS.',
		porQueOpcion: [
			'Incorrecta: Amazon SQS es una cola donde cada consumidor retira su mensaje, no difunde a múltiples suscriptores.',
			'Correcta: Amazon SNS difunde el mismo mensaje a todos los suscriptores mediante publicación/suscripción, ideal para alertas y notificaciones.',
			'Incorrecta: Amazon EventBridge enruta eventos según reglas y no implementa publicación/suscripción para notificaciones masivas.',
			'Incorrecta: AWS Step Functions orquesta pasos y no retiene mensajes en una cola.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/sqs/',
			'https://docs.aws.amazon.com/sns/',
			'https://docs.aws.amazon.com/eventbridge/',
			'https://docs.aws.amazon.com/step-functions/',
		],
	},
	{
		id: '3.8-q2',
		taskId: '3.8',
		objetivos: ['3.8#1', '3.8#8'],
		tipo: 'comparacion',
		question:
			'Un equipo debe elegir entre los servicios de integración de aplicaciones del alcance. ¿Qué afirmación describe correctamente cuándo usar cada uno?',
		options: [
			'Amazon SQS difunde alertas a muchos suscriptores, Amazon SNS retiene los mensajes en cola y Amazon EventBridge ejecuta los pasos secuenciales del flujo.',
			'Amazon SQS desacopla con una cola que el consumidor recoge, Amazon SNS difunde alertas a muchos suscriptores y Amazon EventBridge enruta eventos según reglas.',
			'Los tres servicios son equivalentes para desacoplar y solo cambia el nombre del producto y el precio por millón de mensajes.',
			'Amazon EventBridge es una cola de mensajes, Amazon SQS es un bus de eventos y Amazon SNS orquesta los flujos de trabajo paso a paso.',
		],
		correctAnswer: 1,
		explanation:
			'Amazon SQS es la cola que desacopla productor y consumidor, Amazon SNS es el modelo pub/sub para alertas y notificaciones, y Amazon EventBridge es el bus de eventos que enruta según reglas. Los tres resuelven entrega de información con patrones distintos. Si el escenario exigiera reaccionar a eventos de otros servicios sin conocer al receptor, el servicio sería Amazon EventBridge.',
		porQueOpcion: [
			'Incorrecta: intercambia las funciones de SQS, SNS y EventBridge.',
			'Correcta: SQS desacopla con una cola que el consumidor recoge, SNS difunde alertas a muchos suscriptores y EventBridge enruta eventos según reglas.',
			'Incorrecta: no son equivalentes, cada uno implementa un patrón de integración distinto.',
			'Incorrecta: confunde las definiciones, EventBridge no es una cola ni SNS orquesta flujos de trabajo.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/sqs/',
			'https://docs.aws.amazon.com/sns/',
			'https://docs.aws.amazon.com/eventbridge/',
		],
	},
	{
		id: '3.8-q3',
		taskId: '3.8',
		objetivos: ['3.8#8'],
		tipo: 'escenario',
		question:
			'Una empresa genera pedidos y necesita que un componente los procese a su propio ritmo, sin perder ninguno si el consumidor está ocupado. Aunque el equipo crecerá el próximo trimestre, el presupuesto mensual es limitado. ¿Qué servicio es el más adecuado?',
		options: [
			'Amazon Simple Notification Service (Amazon SNS), para difundir el pedido inmediatamente a todos los suscriptores a la vez.',
			'Amazon Simple Queue Service (Amazon SQS), para encolar los pedidos y que el consumidor los procese cuando pueda.',
			'Amazon EventBridge, para dibujar el flujo como una máquina de estados.',
			'AWS Step Functions, para sustituir al consumidor del pedido.',
		],
		correctAnswer: 1,
		explanation:
			'Cuando el trabajo debe esperar y procesarse una sola vez sin pérdidas, el patrón es una cola: Amazon SQS. Amazon SNS difundiría el mensaje a varios suscriptores, Amazon EventBridge enruta eventos y AWS Step Functions orquesta pasos, no sustituye al consumidor. Si el escenario exigiera avisar a muchos destinatarios a la vez, el servicio sería Amazon SNS.',
		porQueOpcion: [
			'Incorrecta: SNS difunde de inmediato a todos los suscriptores y no permite que el consumidor procese a su propio ritmo.',
			'Correcta: Amazon SQS encola los pedidos para que el consumidor los procese cuando pueda, sin perder ninguno.',
			'Incorrecta: EventBridge enruta eventos y no dibuja ni ejecuta una máquina de estados.',
			'Incorrecta: AWS Step Functions orquesta pasos y no sustituye al consumidor del pedido.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/sns/',
			'https://docs.aws.amazon.com/sqs/',
			'https://docs.aws.amazon.com/eventbridge/',
			'https://docs.aws.amazon.com/step-functions/',
		],
	},
	{
		id: '3.8-q4',
		taskId: '3.8',
		objetivos: ['3.8#8'],
		tipo: 'tradeoff',
		question:
			'Un sistema debe avisar de inmediato a operaciones por correo y SMS cuando se supera un umbral y, además, guardar trabajos para que un proceso los consuma más tarde. ¿Qué combinación es correcta?',
		options: [
			'Amazon Simple Notification Service (Amazon SNS) para la alerta inmediata a varios suscriptores y Amazon Simple Queue Service (Amazon SQS) para encolar el trabajo pendiente.',
			'Amazon Simple Queue Service (Amazon SQS) para la alerta inmediata a los suscriptores y Amazon Simple Notification Service (Amazon SNS) para el trabajo pendiente que se procesa después.',
			'Amazon EventBridge, que cubre ambas necesidades —alerta inmediata y encolado— sin necesidad de otros servicios.',
			'AWS Step Functions, que envía directamente el correo y los SMS y además encola el trabajo pendiente.',
		],
		correctAnswer: 0,
		explanation:
			'La alerta inmediata a muchos destinatarios es publicación/suscripción (Amazon SNS) y el trabajo que se procesa después encaja en una cola (Amazon SQS). Amazon EventBridge enruta eventos y AWS Step Functions orquesta pasos, pero ninguno sustituye a esa combinación. Si el objetivo fuera solo guardar trabajo para más tarde, bastaría con la cola.',
		porQueOpcion: [
			'Correcta: Amazon SNS cubre la alerta inmediata a varios suscriptores y Amazon SQS encola el trabajo pendiente para procesarlo después.',
			'Incorrecta: intercambia los servicios, SQS no alerta de inmediato ni SNS encola trabajo pendiente.',
			'Incorrecta: EventBridge enruta eventos y no cubre por sí solo la alerta inmediata y el encolado.',
			'Incorrecta: AWS Step Functions orquesta pasos y no envía directamente correo ni SMS.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/sns/',
			'https://docs.aws.amazon.com/sqs/',
			'https://docs.aws.amazon.com/eventbridge/',
			'https://docs.aws.amazon.com/step-functions/',
		],
	},
	{
		id: '3.8-q5',
		taskId: '3.8',
		objetivos: ['3.8#2'],
		tipo: 'conocimiento',
		question:
			'¿Qué par de servicios de aplicaciones de negocio ofrece atención al cliente y envío de correo electrónico, respectivamente?',
		options: [
			'Amazon Connect para el centro de contacto y Amazon Simple Email Service (Amazon SES) para el correo.',
			'Amazon Simple Email Service (Amazon SES) para el centro de contacto y Amazon Connect para el correo.',
			'Amazon Simple Notification Service (Amazon SNS) para el centro de contacto y Amazon Simple Queue Service (Amazon SQS) para el correo.',
			'AWS Amplify para el centro de contacto y AWS IoT Core para el correo.',
		],
		correctAnswer: 0,
		explanation:
			'Amazon Connect es el centro de contacto omnicanal (voz y chat) y Amazon Simple Email Service (Amazon SES) es el servicio de correo electrónico a escala. Los demás pares cruzan categorías: SNS y SQS son integración de aplicaciones, y Amplify e IoT Core son frontend e IoT. Si el objetivo fuera enrutar eventos entre servicios, el enfoque sería otro distinto.',
		porQueOpcion: [
			'Correcta: Amazon Connect es el centro de contacto y Amazon Simple Email Service (Amazon SES) el servicio de correo electrónico.',
			'Incorrecta: intercambia los servicios, SES no es centro de contacto ni Connect envía correo masivo.',
			'Incorrecta: SNS y SQS son integración de aplicaciones y no cubren centro de contacto ni correo.',
			'Incorrecta: AWS Amplify y AWS IoT Core son frontend e IoT y no ofrecen esas funciones.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/connect/',
			'https://docs.aws.amazon.com/ses/',
			'https://docs.aws.amazon.com/sns/',
			'https://docs.aws.amazon.com/sqs/',
			'https://docs.aws.amazon.com/amplify/',
			'https://docs.aws.amazon.com/iot/',
		],
	},
	{
		id: '3.8-q6',
		taskId: '3.8',
		objetivos: ['3.8#9'],
		tipo: 'escenario',
		question:
			'Una empresa quiere montar un centro de contacto omnicanal en la nube, con enrutamiento de llamadas y agentes que trabajan desde cualquier lugar, sin mantener infraestructura telefónica propia. Pese a que la plantilla cambia de turnos cada mes, la disponibilidad del servicio no puede resentirse. ¿Qué servicio satisface la necesidad?',
		options: [
			'Amazon Simple Email Service (Amazon SES).',
			'Amazon Connect.',
			'Amazon Simple Notification Service (Amazon SNS).',
			'Amazon WorkSpaces.',
		],
		correctAnswer: 1,
		explanation:
			'Amazon Connect es el centro de contacto gestionado que enruta voz y chat a los agentes sin infraestructura telefónica propia. Amazon SES envía correo, Amazon SNS difunde notificaciones y Amazon WorkSpaces entrega escritorios virtuales. Si el requisito fuera enviar correo transaccional, el servicio sería Amazon SES.',
		porQueOpcion: [
			'Incorrecta: Amazon SES envía correo y no enruta llamadas ni chat.',
			'Correcta: Amazon Connect es el centro de contacto omnicanal que enruta voz y chat sin infraestructura telefónica propia.',
			'Incorrecta: Amazon SNS difunde notificaciones y no es un centro de contacto.',
			'Incorrecta: Amazon WorkSpaces entrega escritorios virtuales y no atiende llamadas.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/ses/',
			'https://docs.aws.amazon.com/connect/',
			'https://docs.aws.amazon.com/sns/',
			'https://docs.aws.amazon.com/workspaces/',
		],
	},
	{
		id: '3.8-q7',
		taskId: '3.8',
		objetivos: ['3.8#3'],
		tipo: 'conocimiento',
		question:
			'¿Qué categoría de servicio de AWS agrupa los planes de soporte y qué plan incluye un Technical Account Manager (TAM)?',
		options: [
			'Es un servicio de integración de aplicaciones y el TAM viene en el plan Basic.',
			'Es un servicio de habilitación del cliente y el TAM lo incluye AWS Enterprise Support.',
			'Es un servicio de computación de usuario final y el TAM solo existe en AWS Developer Support.',
			'Es una herramienta de desarrollo que sustituye a AWS CodePipeline.',
		],
		correctAnswer: 1,
		explanation:
			'AWS Support pertenece a la categoría de habilitación del cliente. El Technical Account Manager (TAM) forma parte de AWS Enterprise Support, el nivel más alto; el plan Basic no incluye soporte técnico de producción ni TAM. Si el objetivo fuera una carga de producción con cobertura 24/7 pero sin TAM, bastaría con AWS Business Support.',
		porQueOpcion: [
			'Incorrecta: AWS Support no es un servicio de integración de aplicaciones y el plan Basic no incluye TAM.',
			'Correcta: AWS Support pertenece a la categoría de habilitación del cliente y el TAM lo incluye AWS Enterprise Support.',
			'Incorrecta: no es computación de usuario final y el TAM no existe en AWS Developer Support.',
			'Incorrecta: no sustituye a AWS CodePipeline ni es una herramienta de desarrollo.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/codepipeline/',
			'https://docs.aws.amazon.com/awssupport/latest/user/getting-started.html',
		],
	},
	{
		id: '3.8-q8',
		taskId: '3.8',
		objetivos: ['3.8#10'],
		tipo: 'escenario',
		question:
			'Una empresa ejecuta cargas críticas y necesita cobertura 24/7, tiempos de respuesta rápidos y un interlocutor técnico dedicado. ¿Qué opción de asistencia elige?',
		options: [
			'El plan Basic, porque está incluido y basta para producción.',
			'AWS Developer Support, porque incluye el Technical Account Manager (TAM).',
			'AWS Enterprise Support, porque ofrece cobertura completa y Technical Account Manager (TAM).',
			'No contratar soporte y depender solo de la comunidad.',
		],
		correctAnswer: 2,
		explanation:
			'Para cargas críticas con cobertura 24/7, respuesta rápida y un Technical Account Manager (TAM) el plan adecuado es AWS Enterprise Support. El plan Basic no cubre soporte de producción y AWS Developer Support no ofrece cobertura 24/7 ni TAM. Si el objetivo fuera una etapa de desarrollo sin cargas críticas, bastaría con AWS Developer Support.',
		porQueOpcion: [
			'Incorrecta: el plan Basic no cubre soporte de producción ni ofrece cobertura 24/7.',
			'Incorrecta: AWS Developer Support no incluye TAM ni cobertura 24/7 para cargas críticas.',
			'Correcta: AWS Enterprise Support ofrece cobertura completa 24/7 y Technical Account Manager para cargas críticas.',
			'Incorrecta: depender solo de la comunidad no aporta cobertura ni interlocutor técnico dedicado.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html',
		],
	},
	{
		id: '3.8-q9',
		taskId: '3.8',
		objetivos: ['3.8#4'],
		tipo: 'conocimiento',
		question:
			'¿Qué herramienta de desarrollo compila y ejecuta pruebas para construir el artefacto de una aplicación, y cuál rastrea las solicitudes entre componentes para depurar?',
		options: [
			'AWS CodePipeline compila el código y lo prueba, y AWS CodeBuild rastrea las solicitudes distribuidas.',
			'AWS CodeBuild compila y ejecuta pruebas, y AWS X-Ray rastrea las solicitudes para depurar.',
			'AWS Systems Manager automatiza la compilación, las pruebas y el despliegue, y AWS CodePipeline rastrea las solicitudes distribuidas.',
			'AWS Amplify compila y Amazon Connect rastrea las solicitudes.',
		],
		correctAnswer: 1,
		explanation:
			'AWS CodeBuild construye y prueba el código, y AWS X-Ray traza las solicitudes a través de los componentes para localizar errores y latencia. AWS CodePipeline coordina las etapas, no compila ni rastrea por sí mismo. Si el objetivo fuera coordinar toda la canalización, el servicio sería AWS CodePipeline.',
		porQueOpcion: [
			'Incorrecta: CodePipeline coordina las etapas y CodeBuild compila, no al contrario.',
			'Correcta: AWS CodeBuild compila y ejecuta pruebas, y AWS X-Ray rastrea las solicitudes para depurar.',
			'Incorrecta: AWS Systems Manager gestiona operaciones sobre los recursos y no compila ni despliega código, y AWS CodePipeline coordina las etapas en lugar de rastrear solicitudes.',
			'Incorrecta: Amplify es frontend e IoT Core gestiona dispositivos; ninguno compila ni rastrea.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/codepipeline/',
			'https://docs.aws.amazon.com/codebuild/',
			'https://docs.aws.amazon.com/systems-manager/',
			'https://docs.aws.amazon.com/amplify/',
			'https://docs.aws.amazon.com/connect/',
			'https://docs.aws.amazon.com/xray/',
			'https://docs.aws.amazon.com/iot/',
		],
	},
	{
		id: '3.8-q10',
		taskId: '3.8',
		objetivos: ['3.8#4', '3.8#11'],
		tipo: 'comparacion',
		question:
			'Un equipo distingue dos piezas de su canalización: una que compila y prueba el código y otra que coordina las etapas de principio a fin. ¿Qué afirmación es correcta?',
		options: [
			'AWS CodePipeline compila el código y ejecuta las pruebas, y AWS CodeBuild coordina todas las etapas de la canalización.',
			'AWS CodeBuild compila y prueba el código, y AWS CodePipeline coordina las etapas de la canalización.',
			'Ambos servicios hacen lo mismo y se eligen por precio.',
			'AWS CodeBuild es un bus de eventos y AWS CodePipeline un servicio de correo.',
		],
		correctAnswer: 1,
		explanation:
			'AWS CodeBuild es la fase de construcción y pruebas; AWS CodePipeline modela y coordina la canalización completa. Son complementarios: uno ejecuta el trabajo, el otro define y dirige el flujo. Si el objetivo fuera solo depurar errores en ejecución, la herramienta sería AWS X-Ray.',
		porQueOpcion: [
			'Incorrecta: intercambia los papeles, CodePipeline no compila ni CodeBuild coordina la canalización.',
			'Correcta: AWS CodeBuild compila y prueba el código, y AWS CodePipeline coordina las etapas de la canalización.',
			'Incorrecta: no hacen lo mismo, son complementarios dentro del ciclo de entrega.',
			'Incorrecta: ni CodeBuild es un bus de eventos ni CodePipeline un servicio de correo.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/codepipeline/',
			'https://docs.aws.amazon.com/codebuild/',
			'https://docs.aws.amazon.com/xray/',
		],
	},
	{
		id: '3.8-q11',
		taskId: '3.8',
		objetivos: ['3.8#11'],
		tipo: 'escenario',
		question:
			'Una empresa quiere automatizar la compilación, las pruebas y el despliegue cada vez que hay un cambio en el repositorio, y además diagnosticar cuellos de botella entre microservicios. ¿Qué herramientas usa?',
		options: [
			'AWS CodePipeline para coordinar el flujo, AWS CodeBuild para compilar y AWS X-Ray para el diagnóstico.',
			'Amazon Simple Notification Service (Amazon SNS) para compilar, Amazon Simple Queue Service (Amazon SQS) para desplegar y Amazon Connect para el diagnóstico.',
			'AWS Amplify para compilar, Amazon AppStream 2.0 para desplegar y AWS Support para el diagnóstico.',
			'AWS IoT Core para compilar y Amazon WorkSpaces para el diagnóstico.',
		],
		correctAnswer: 0,
		explanation:
			'El ciclo de integración y entrega continua se arma con AWS CodePipeline (coordinación), AWS CodeBuild (compilación y pruebas) y AWS X-Ray (diagnóstico en ejecución). Los demás servicios pertenecen a otras categorías y no cubren esas funciones. Si el objetivo fuera solo crear y desplegar el frontend, el servicio sería AWS Amplify.',
		porQueOpcion: [
			'Correcta: AWS CodePipeline coordina el flujo, AWS CodeBuild compila y prueba, y AWS X-Ray diagnostica los cuellos de botella entre microservicios.',
			'Incorrecta: SNS, SQS y Connect son mensajería y contacto, no cubren compilación ni diagnóstico.',
			'Incorrecta: Amplify, AppStream 2.0 y AWS Support pertenecen a otras categorías y no cubren ese ciclo.',
			'Incorrecta: AWS IoT Core y Amazon WorkSpaces no compilan ni diagnostican microservicios.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/codepipeline/',
			'https://docs.aws.amazon.com/codebuild/',
			'https://docs.aws.amazon.com/sns/',
			'https://docs.aws.amazon.com/sqs/',
			'https://docs.aws.amazon.com/connect/',
			'https://docs.aws.amazon.com/amplify/',
			'https://docs.aws.amazon.com/awssupport/latest/user/getting-started.html',
			'https://docs.aws.amazon.com/iot/',
			'https://docs.aws.amazon.com/workspaces/',
			'https://docs.aws.amazon.com/xray/',
			'https://docs.aws.amazon.com/appstream2/',
		],
	},
	{
		id: '3.8-q12',
		taskId: '3.8',
		objetivos: ['3.8#5'],
		tipo: 'conocimiento',
		question:
			'¿Qué servicio entrega aplicaciones de escritorio a los usuarios mediante streaming, sin instalar la aplicación en el dispositivo del usuario?',
		options: [
			'Amazon WorkSpaces.',
			'Amazon AppStream 2.0.',
			'Amazon Connect.',
			'AWS Amplify.',
		],
		correctAnswer: 1,
		explanation:
			'Amazon AppStream 2.0 publica aplicaciones concretas por streaming: la aplicación se ejecuta en AWS y el usuario solo recibe su salida. Amazon WorkSpaces entrega un escritorio virtual completo, Amazon Connect atiende llamadas y AWS Amplify despliega frontend web y móvil. Si el objetivo fuera un escritorio completo por usuario, el servicio sería Amazon WorkSpaces.',
		porQueOpcion: [
			'Incorrecta: Amazon WorkSpaces entrega un escritorio virtual completo, no aplicaciones concretas por streaming.',
			'Correcta: Amazon AppStream 2.0 publica aplicaciones concretas por streaming sin instalarlas en el dispositivo del usuario.',
			'Incorrecta: Amazon Connect atiende llamadas y no entrega aplicaciones.',
			'Incorrecta: AWS Amplify despliega frontend web y móvil, no aplicaciones de escritorio por streaming.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/workspaces/',
			'https://docs.aws.amazon.com/connect/',
			'https://docs.aws.amazon.com/amplify/',
			'https://docs.aws.amazon.com/appstream2/',
		],
	},
	{
		id: '3.8-q13',
		taskId: '3.8',
		objetivos: ['3.8#5', '3.8#12'],
		tipo: 'comparacion',
		question:
			'Un equipo compara las opciones de computación de usuario final. ¿Qué afirmación distingue una opción que entrega aplicaciones concretas por streaming de otra que entrega un escritorio completo?',
		options: [
			'La que entrega aplicaciones concretas por streaming publica apps individuales y la que entrega un escritorio virtual completo y persistente por usuario publica el puesto entero.',
			'La que entrega un escritorio virtual completo publica aplicaciones por streaming y la que entrega aplicaciones concretas publica escritorios completos para cada usuario del equipo en cualquier momento.',
			'Ambas opciones entregan escritorios completos y persistentes por usuario y solo cambian el sistema operativo del puesto de trabajo.',
			'Una opción es un servicio de correo electrónico a escala y la otra un bus de eventos para aplicaciones, sin relación con los escritorios.',
		],
		correctAnswer: 0,
		explanation:
			'La entrega de aplicaciones individuales por streaming presenta solo la aplicación, mientras que la entrega de escritorios virtuales completos publica un puesto de trabajo persistente por usuario. La elección depende de si hay que publicar una aplicación o un puesto entero. Si el escenario pidiera un navegador aislado para sitios internos, la opción sería la variante de navegador seguro.',
		porQueOpcion: [
			'Correcta: una opción publica aplicaciones individuales por streaming y la otra entrega un escritorio virtual completo y persistente por usuario.',
			'Incorrecta: intercambia las definiciones de ambas opciones.',
			'Incorrecta: no ambas entregan escritorios completos, una solo publica la aplicación concreta.',
			'Incorrecta: ninguna de las dos es un servicio de correo ni un bus de eventos.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html',
		],
	},
	{
		id: '3.8-q14',
		taskId: '3.8',
		objetivos: ['3.8#12'],
		tipo: 'escenario',
		question:
			'Una empresa necesita que sus empleados accedan desde cualquier dispositivo, incluso uno personal, a un escritorio corporativo persistente con su propio sistema operativo y sus aplicaciones. ¿Qué servicio es el adecuado?',
		options: [
			'Amazon AppStream 2.0, porque entrega solo una aplicación concreta.',
			'Amazon WorkSpaces, porque proporciona un escritorio virtual completo por usuario.',
			'Amazon WorkSpaces Secure Browser, porque entrega un escritorio completo con sistema operativo.',
			'AWS IoT Core, porque conecta los dispositivos de los empleados.',
		],
		correctAnswer: 1,
		explanation:
			'Amazon WorkSpaces entrega un escritorio virtual completo y persistente por usuario, al que se accede desde distintos dispositivos. Amazon AppStream 2.0 solo publica aplicaciones y Amazon WorkSpaces Secure Browser ofrece un navegador aislado, no un escritorio con sistema operativo. Si el requisito fuera publicar una sola aplicación, el servicio sería Amazon AppStream 2.0.',
		porQueOpcion: [
			'Incorrecta: Amazon AppStream 2.0 entrega solo una aplicación concreta, no un escritorio completo.',
			'Correcta: Amazon WorkSpaces proporciona un escritorio virtual completo y persistente por usuario.',
			'Incorrecta: Amazon WorkSpaces Secure Browser ofrece un navegador aislado, no un escritorio con sistema operativo.',
			'Incorrecta: AWS IoT Core conecta dispositivos y no entrega escritorios.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/workspaces/',
			'https://docs.aws.amazon.com/workspaces-web/',
			'https://docs.aws.amazon.com/iot/',
			'https://docs.aws.amazon.com/appstream2/',
		],
	},
	{
		id: '3.8-q15',
		taskId: '3.8',
		objetivos: ['3.8#6'],
		tipo: 'conocimiento',
		question:
			'¿Qué servicio de AWS simplifica la creación y el despliegue de aplicaciones web y móviles, incluyendo frontend, autenticación y hosting?',
		options: [
			'AWS Amplify.',
			'AWS CodeBuild.',
			'Amazon AppStream 2.0.',
			'Amazon Connect.',
		],
		correctAnswer: 0,
		explanation:
			'AWS Amplify está orientado al frontend web y móvil: permite crear la interfaz, integrar capacidades como la autenticación y desplegar con hosting y entrega continua. AWS CodeBuild compila, AppStream 2.0 entrega aplicaciones y Amazon Connect atiende clientes. Si el objetivo fuera una canalización genérica de entrega, el servicio sería AWS CodePipeline.',
		porQueOpcion: [
			'Correcta: AWS Amplify integra frontend, autenticación y hosting para aplicaciones web y móviles.',
			'Incorrecta: AWS CodeBuild solo compila y ejecuta pruebas del código.',
			'Incorrecta: Amazon AppStream 2.0 publica aplicaciones de escritorio por streaming.',
			'Incorrecta: Amazon Connect es un centro de contacto y no publica aplicaciones.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/amplify/',
			'https://docs.aws.amazon.com/codebuild/',
			'https://docs.aws.amazon.com/connect/',
			'https://docs.aws.amazon.com/codepipeline/',
			'https://docs.aws.amazon.com/appstream2/',
		],
	},
	{
		id: '3.8-q16',
		taskId: '3.8',
		objetivos: ['3.8#13'],
		tipo: 'escenario',
		question:
			'Un equipo quiere publicar una aplicación móvil con backend y una web con inicio de sesión, y desplegarla sin montar toda la infraestructura a mano. ¿Qué servicio encaja mejor?',
		options: [
			'AWS IoT Core, porque conecta los dispositivos móviles con la nube y construye el frontend.',
			'AWS Amplify, porque integra frontend, autenticación y despliegue de aplicaciones web y móviles.',
			'Amazon WorkSpaces, porque publica escritorios virtuales completos para los usuarios de la aplicación.',
			'AWS X-Ray, porque construye el frontend y despliega la aplicación móvil en producción.',
		],
		correctAnswer: 1,
		explanation:
			'AWS Amplify cubre la creación y el despliegue de frontend web y móvil, integrando autenticación, APIs y hosting. AWS IoT Core gestiona dispositivos, Amazon WorkSpaces entrega escritorios y AWS X-Ray depura solicitudes. Si el objetivo fuera diagnosticar errores en ejecución, la herramienta sería AWS X-Ray.',
		porQueOpcion: [
			'Incorrecta: AWS IoT Core conecta dispositivos y no construye el frontend de la aplicación.',
			'Correcta: AWS Amplify integra frontend, autenticación y despliegue de aplicaciones web y móviles.',
			'Incorrecta: Amazon WorkSpaces publica escritorios virtuales, no la aplicación móvil.',
			'Incorrecta: AWS X-Ray depura solicitudes y no construye ni despliega aplicaciones.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/iot/',
			'https://docs.aws.amazon.com/amplify/',
			'https://docs.aws.amazon.com/workspaces/',
			'https://docs.aws.amazon.com/xray/',
		],
	},
	{
		id: '3.8-q17',
		taskId: '3.8',
		objetivos: ['3.8#7'],
		tipo: 'conocimiento',
		question:
			'¿Qué servicio permite conectar, administrar y asegurar dispositivos IoT y recopilar los datos que envían a la nube?',
		options: [
			'AWS IoT Core.',
			'Amazon Connect.',
			'Amazon EventBridge.',
			'AWS Amplify.',
		],
		correctAnswer: 0,
		explanation:
			'AWS IoT Core registra y autentica los dispositivos, recibe sus mensajes y, mediante reglas, los enruta a otros servicios. Amazon Connect es un centro de contacto, Amazon EventBridge enruta eventos entre aplicaciones y AWS Amplify despliega frontend web y móvil. Si el requisito fuera encolar los mensajes de una aplicación, el servicio sería Amazon SQS.',
		porQueOpcion: [
			'Correcta: AWS IoT Core conecta, administra y asegura los dispositivos IoT y recopila los datos que envían a la nube.',
			'Incorrecta: Amazon Connect es un centro de contacto y no gestiona dispositivos.',
			'Incorrecta: Amazon EventBridge enruta eventos entre aplicaciones, no administra dispositivos.',
			'Incorrecta: AWS Amplify despliega frontend web y móvil, no gestiona IoT.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/iot/',
			'https://docs.aws.amazon.com/connect/',
			'https://docs.aws.amazon.com/eventbridge/',
			'https://docs.aws.amazon.com/amplify/',
			'https://docs.aws.amazon.com/sqs/',
		],
	},
	{
		id: '3.8-q18',
		taskId: '3.8',
		objetivos: ['3.8#14'],
		tipo: 'escenario',
		question:
			'Una fábrica tiene miles de sensores que deben registrarse, comunicarse de forma segura con la nube y publicar sus lecturas para su análisis. ¿Qué servicio gestiona los dispositivos?',
		options: [
			'Amazon Simple Queue Service (Amazon SQS), porque encola las lecturas.',
			'AWS IoT Core, porque conecta y administra los dispositivos IoT.',
			'Amazon WorkSpaces Secure Browser, porque administra los sensores.',
			'AWS X-Ray, porque rastrea los sensores.',
		],
		correctAnswer: 1,
		explanation:
			'AWS IoT Core gestiona la identidad, la conexión segura y los mensajes de los dispositivos IoT, y los enruta a otros servicios con reglas. Amazon SQS desacopla aplicaciones con colas, Amazon WorkSpaces Secure Browser ofrece un navegador aislado y AWS X-Ray traza solicitudes. Si el objetivo fuera únicamente desacoplar el procesamiento de las lecturas, bastaría con la cola.',
		porQueOpcion: [
			'Incorrecta: Amazon SQS encola lecturas, pero no registra ni autentica los dispositivos.',
			'Correcta: AWS IoT Core registra y administra los dispositivos, asegura su conexión y recibe sus lecturas.',
			'Incorrecta: Amazon WorkSpaces Secure Browser ofrece un navegador aislado y no administra sensores.',
			'Incorrecta: AWS X-Ray rastrea solicitudes y no gestiona dispositivos.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/sqs/',
			'https://docs.aws.amazon.com/iot/',
			'https://docs.aws.amazon.com/workspaces-web/',
			'https://docs.aws.amazon.com/xray/',
		],
	},
	{
		id: '3.8-q19',
		taskId: '3.8',
		objetivos: ['3.8#2', '3.8#9'],
		tipo: 'comparacion',
		question:
			'Una empresa necesita atender a sus clientes por voz y chat y, por separado, enviar correos transaccionales a gran escala. ¿Qué servicios corresponden a cada canal?',
		options: [
			'Un centro de contacto omnicanal en la nube para voz y chat, y un servicio de correo electrónico a escala para los envíos.',
			'Un servicio de correo electrónico a escala para voz y chat, y un centro de contacto omnicanal para los envíos.',
			'Una cola de mensajes para voz y chat, y un bus de eventos para el correo.',
			'Un servicio de escritorios virtuales para voz y chat, y un almacén de datos para el correo.',
		],
		correctAnswer: 0,
		explanation:
			'Cada canal apunta a una aplicación de negocio distinta: la voz y el chat a un centro de contacto omnicanal y el correo electrónico a un servicio de correo a escala. Las demás opciones asignan servicios de mensajería o de escritorio que no cubren esos canales. Si cambia el canal a solo correo masivo, bastaría con el servicio de correo electrónico.',
		porQueOpcion: [
			'Correcta: un centro de contacto omnicanal cubre voz y chat y un servicio de correo a escala cubre los envíos.',
			'Incorrecta: intercambia los canales y asigna cada servicio a la función equivocada.',
			'Incorrecta: una cola y un bus de eventos son integración de aplicaciones y no atienden canales de cliente.',
			'Incorrecta: los escritorios virtuales y el almacén de datos no son canales de atención ni correo electrónico.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html',
		],
	},
	{
		id: '3.8-q20',
		taskId: '3.8',
		objetivos: ['3.8#3', '3.8#10'],
		tipo: 'comparacion',
		question:
			'Una empresa compara opciones de asistencia: un plan para cargas críticas con cobertura 24/7 y un interlocutor técnico dedicado, y un plan orientado a desarrollo y pruebas con atención por correo en horario laboral. ¿Qué afirmación los distingue?',
		options: [
			'El plan empresarial cubre cargas críticas con cobertura 24/7 y un Technical Account Manager; el de desarrollo atiende desarrollo y pruebas por correo.',
			'El plan de desarrollo cubre cargas críticas con cobertura 24/7 y el plan empresarial se limita a desarrollo y pruebas con soporte por correo en horario laboral.',
			'Ambos planes son idénticos y solo cambia el precio; ninguno incluye un Technical Account Manager.',
			'Ninguno de los dos planes da acceso a soporte técnico y todos dependen solo de la comunidad.',
		],
		correctAnswer: 0,
		explanation:
			'Los planes de AWS Support escalan el nivel de asistencia: el empresarial cubre cargas críticas con cobertura completa y Technical Account Manager, y el de desarrollo se orienta a desarrollo y pruebas con soporte por correo. El plan Basic no incluye soporte de producción. Si el requisito fuera una carga de producción sin interlocutor dedicado, bastaría con AWS Business Support.',
		porQueOpcion: [
			'Correcta: el plan empresarial cubre cargas críticas 24/7 con Technical Account Manager y el de desarrollo se orienta a desarrollo y pruebas por correo.',
			'Incorrecta: invierte los planes y sus características de soporte.',
			'Incorrecta: no son idénticos y el plan empresarial sí incluye Technical Account Manager.',
			'Incorrecta: ambos planes dan acceso a soporte técnico; no dependen solo de la comunidad.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/awssupport/latest/user/getting-started.html',
		],
	},
	{
		id: '3.8-q21',
		taskId: '3.8',
		objetivos: ['3.8#6', '3.8#13'],
		tipo: 'comparacion',
		question:
			'Un equipo compara dos herramientas: una que crea y despliega el frontend web y móvil con autenticación y hosting integrados y otra que coordina las etapas de una canalización de entrega. ¿Qué afirmación es correcta?',
		options: [
			'La primera está orientada al frontend web y móvil con capacidades integradas; la segunda orquesta las etapas de la canalización de extremo a extremo.',
			'La primera orquesta las etapas de la canalización de entrega y la segunda crea y despliega el frontend web y móvil con autenticación integrada.',
			'Ambas hacen lo mismo y se eligen por el lenguaje de programación del proyecto.',
			'La primera es un bus de eventos y la segunda un servicio de correo electrónico.',
		],
		correctAnswer: 0,
		explanation:
			'Una herramienta está especializada en crear y desplegar el frontend web y móvil, integrando autenticación, APIs y hosting; la otra es una orquestación genérica de las etapas de la canalización. No son sustitutas: una publica la aplicación y la otra dirige el flujo de entrega. Si el objetivo fuera solo compilar y probar el código, la pieza sería otra distinta.',
		porQueOpcion: [
			'Correcta: la primera está orientada al frontend web y móvil con capacidades integradas y la segunda orquesta las etapas de la canalización de extremo a extremo.',
			'Incorrecta: intercambia las funciones de ambas herramientas.',
			'Incorrecta: no hacen lo mismo; una publica la aplicación y la otra dirige el flujo de entrega.',
			'Incorrecta: ninguna es un bus de eventos ni un servicio de correo electrónico.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html',
		],
	},
	{
		id: '3.8-q22',
		taskId: '3.8',
		objetivos: ['3.8#7', '3.8#14'],
		tipo: 'comparacion',
		question:
			'Una fábrica necesita registrar miles de sensores, autenticar su conexión y recibir sus lecturas para análisis, y además desacoplar el procesamiento posterior de esas lecturas. ¿Qué afirmación distingue las dos piezas?',
		options: [
			'La conexión y administración de los dispositivos la cubre un servicio de IoT gestionado; el desacople del procesamiento posterior, una cola de mensajes.',
			'La conexión y administración de los dispositivos la cubre una cola de mensajes; el desacople del procesamiento posterior, un servicio de IoT gestionado.',
			'Ambas piezas son la misma: una cola de mensajes gestiona la identidad de los dispositivos, su conexión segura y el enrutado de las lecturas a otros servicios.',
			'Ninguna de las dos sirve: los dispositivos se conectan directamente a un centro de contacto.',
		],
		correctAnswer: 0,
		explanation:
			'El servicio de IoT gestionado se encarga de la identidad, la conexión segura y la recepción de los mensajes de los dispositivos; la cola desacopla el procesamiento posterior reteniendo las lecturas. Una cola no administra dispositivos y un centro de contacto no gestiona una flota. Si el escenario pidiera reaccionar a eventos y enrutarlos según reglas, entraría además un bus de eventos.',
		porQueOpcion: [
			'Correcta: un servicio de IoT gestionado cubre la conexión y administración de los dispositivos y una cola de mensajes desacopla el procesamiento posterior.',
			'Incorrecta: intercambia las piezas, una cola no administra dispositivos.',
			'Incorrecta: una cola de mensajes no gestiona la identidad ni la conexión segura de los dispositivos.',
			'Incorrecta: un centro de contacto no gestiona una flota de sensores IoT.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html',
		],
	},
	{
		id: '3.8-q23',
		taskId: '3.8',
		objetivos: ['3.8#1'],
		tipo: 'escenario',
		question:
			'Una plataforma de comercio debe reaccionar a un evento de pedido cancelado y disparar automáticamente la devolución del stock y la notificación al equipo de logística, sin que el sistema de pedidos conozca a esos receptores. ¿Qué patrón de integración encaja mejor?',
		options: [
			'Un bus de eventos que reacciona a los eventos y los enruta a los destinos según reglas.',
			'Una cola de mensajes que retiene el pedido hasta que un único consumidor lo retire y lo procese a su ritmo.',
			'Un modelo de publicación/suscripción que difunde el mismo mensaje a todos los suscriptores.',
			'Una máquina de estados que ejecuta pasos secuenciales definidos en el flujo.',
		],
		correctAnswer: 0,
		explanation:
			'Reaccionar a eventos de los servicios y enrutarlos a destinos según reglas, sin que el emisor conozca al receptor, es el patrón de un bus de eventos. Una cola retiene trabajo para un consumidor, la publicación/suscripción difunde a suscriptores y la máquina de estados orquesta pasos. Si el escenario pidiera alertar a muchos destinatarios a la vez, el patrón sería publicación/suscripción.',
		porQueOpcion: [
			'Correcta: un bus de eventos reacciona a los eventos y los enruta a los destinos según reglas sin que el emisor conozca al receptor.',
			'Incorrecta: una cola de mensajes retiene el trabajo para un único consumidor, no lo enruta a varios destinos.',
			'Incorrecta: la publicación/suscripción difunde el mismo mensaje a los suscriptores, pero no lo enruta según reglas a destinos distintos.',
			'Incorrecta: una máquina de estados ejecuta pasos definidos y no reacciona a eventos de otros servicios.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html',
		],
	},
	{
		id: '3.8-q24',
		taskId: '3.8',
		objetivos: ['3.8#2'],
		tipo: 'escenario',
		question:
			'Una empresa quiere lanzar una campaña de correo a cien mil clientes con alta entregabilidad y, a la vez, atender las respuestas por teléfono en un centro de contacto sin infraestructura propia. ¿Qué combinación de aplicaciones de negocio cubre ambos canales?',
		options: [
			'Un servicio de correo electrónico a escala para la campaña y un centro de contacto omnicanal para las llamadas.',
			'Un centro de contacto omnicanal para la campaña de correo y un servicio de correo electrónico para las llamadas.',
			'Una cola de mensajes para enviar el correo a escala y un bus de eventos para enrutar las llamadas telefónicas.',
			'Un servicio de escritorios virtuales para el correo y un almacén de datos para las llamadas.',
		],
		correctAnswer: 0,
		explanation:
			'La campaña de correo masiva con alta entregabilidad corresponde a un servicio de correo electrónico a escala, y la atención telefónica a un centro de contacto omnicanal. Las colas y los buses de eventos son integración de aplicaciones y no atienden canales de cliente. Si cambia el canal a solo correo, el centro de contacto dejaría de ser necesario.',
		porQueOpcion: [
			'Correcta: un servicio de correo electrónico a escala cubre la campaña y un centro de contacto omnicanal cubre las llamadas.',
			'Incorrecta: intercambia los servicios respecto a cada canal.',
			'Incorrecta: las colas y los buses de eventos son integración de aplicaciones y no atienden clientes.',
			'Incorrecta: los escritorios virtuales y el almacén de datos no envían correo ni atienden llamadas.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html',
		],
	},
	{
		id: '3.8-q25',
		taskId: '3.8',
		objetivos: ['3.8#3'],
		tipo: 'escenario',
		question:
			'Una empresa ejecuta una plataforma de ventas con tráfico continuo y quiere asistencia con tiempos de respuesta acordados y un interlocutor técnico que conozca su arquitectura. ¿Qué tipo de recurso de habilitación del cliente necesita?',
		options: [
			'Un plan de soporte de nivel empresarial, con cobertura para cargas críticas y un Technical Account Manager.',
			'El plan de soporte incluido por defecto en toda cuenta, que ya cubre producción sin coste adicional ni niveles de respuesta.',
			'Una herramienta de revisión de buenas prácticas, que actúa como canal de soporte técnico con tiempos acordados.',
			'Un catálogo de software de terceros, que incluye asistencia técnica con niveles de servicio y un interlocutor dedicado.',
		],
		correctAnswer: 0,
		explanation:
			'La combinación de tiempos de respuesta acordados y un Technical Account Manager que conoce la arquitectura corresponde a un plan de soporte de nivel empresarial. El plan incluido por defecto no cubre producción, las herramientas de revisión no son canales de soporte y un catálogo de software no presta asistencia técnica. Si el objetivo fuera solo desarrollo y pruebas, bastaría con un plan de nivel inferior.',
		porQueOpcion: [
			'Correcta: un plan de soporte de nivel empresarial aporta cobertura para cargas críticas y un Technical Account Manager.',
			'Incorrecta: el plan incluido por defecto no cubre producción ni ofrece niveles de respuesta acordados.',
			'Incorrecta: una herramienta de revisión de buenas prácticas no es un canal de soporte técnico.',
			'Incorrecta: un catálogo de software no presta asistencia técnica con niveles de servicio.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html',
		],
	},
	{
		id: '3.8-q26',
		taskId: '3.8',
		objetivos: ['3.8#4'],
		tipo: 'escenario',
		question:
			'Un equipo quiere que cada cambio en el repositorio compile, pase pruebas y se despliegue a producción sin pasos manuales, y poder diagnosticar después dónde se ralentizan las solicitudes entre microservicios. ¿Qué herramientas debe usar?',
		options: [
			'Una herramienta que coordine las etapas del flujo, otra que compile y pruebe el código y otra que rastree las solicitudes para diagnosticar.',
			'Una herramienta que compile el código, otra que rastree las solicitudes y ninguna que coordine las etapas del flujo de entrega continua.',
			'Un centro de contacto para compilar el código y un escritorio virtual para rastrear las solicitudes.',
			'Un almacén de objetos para compilar el código y un servicio de correo para coordinar las etapas del flujo.',
		],
		correctAnswer: 0,
		explanation:
			'El flujo se arma con una herramienta que compila y prueba, otra que coordina las etapas de la canalización y otra que rastrea las solicitudes para diagnosticar latencia y errores. Las opciones que omiten la orquestación o sustituyen las herramientas por servicios de otras categorías no cubren el ciclo. Si el objetivo fuera solo publicar el frontend, la herramienta sería otra distinta.',
		porQueOpcion: [
			'Correcta: se combinan una herramienta que coordina las etapas del flujo, otra que compila y prueba el código y otra que rastrea las solicitudes.',
			'Incorrecta: omite la herramienta que coordina las etapas del flujo de entrega continua.',
			'Incorrecta: un centro de contacto y un escritorio virtual no compilan ni rastrean solicitudes.',
			'Incorrecta: el almacenamiento de objetos y el correo no cubren la compilación ni la coordinación.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html',
		],
	},
	{
		id: '3.8-q27',
		taskId: '3.8',
		objetivos: ['3.8#5'],
		tipo: 'escenario',
		question:
			'Una empresa quiere dar acceso a un programa de diseño pesado a colaboradores externos con equipos modestos, sin instalarlo en esos equipos ni enviarles licencias locales. ¿Qué servicio encaja mejor?',
		options: [
			'Un servicio que publica aplicaciones individuales por streaming, ejecutándolas en la nube.',
			'Un servicio que entrega un escritorio virtual completo y persistente por usuario, con su sistema operativo y aplicaciones.',
			'Un servicio que entrega un navegador aislado para acceder de forma segura a sitios internos.',
			'Un servicio de correo electrónico a escala que distribuye la aplicación a los colaboradores.',
		],
		correctAnswer: 0,
		explanation:
			'Publicar una sola aplicación por streaming, ejecutándola en la nube, es exactamente el caso de una sola aplicación sin instalación ni licencia local. Un escritorio completo entrega un puesto entero, el navegador aislado no publica aplicaciones de escritorio y el correo no las ejecuta. Si el requisito fuera un puesto de trabajo completo por usuario, cambiaría el servicio elegido.',
		porQueOpcion: [
			'Correcta: un servicio que publica aplicaciones individuales por streaming permite usar un programa pesado sin instalarlo ni enviar licencias locales.',
			'Incorrecta: un escritorio virtual completo entrega un puesto entero, no solo la aplicación solicitada.',
			'Incorrecta: un navegador aislado no publica aplicaciones de escritorio.',
			'Incorrecta: un servicio de correo electrónico no distribuye ni ejecuta la aplicación.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html',
		],
	},
	{
		id: '3.8-q28',
		taskId: '3.8',
		objetivos: ['3.8#6'],
		tipo: 'escenario',
		question:
			'Una startup quiere publicar una aplicación móvil con registro de usuarios y una web de marketing, y desplegar ambas desde el repositorio sin configurar a mano autenticación, hosting y entrega. ¿Qué servicio encaja mejor?',
		options: [
			'Un servicio de frontend web y móvil que integra autenticación, APIs y hosting en un flujo guiado.',
			'Una herramienta de compilación genérica que solo ejecuta las pruebas unitarias del código y produce el artefacto desplegable.',
			'Un servicio de rastreo de solicitudes que diagnostica errores en ejecución entre microservicios.',
			'Un centro de contacto que atiende a los usuarios que usan el frontend de la aplicación.',
		],
		correctAnswer: 0,
		explanation:
			'Crear y desplegar frontend web y móvil integrando autenticación, APIs y hosting en un flujo guiado es el cometido de un servicio especializado de frontend. La herramienta de compilación no gestiona la autenticación ni el hosting, el rastreo solo diagnostica y el centro de contacto no publica aplicaciones. Si el objetivo fuera solo compilar el código, la herramienta sería otra distinta.',
		porQueOpcion: [
			'Correcta: un servicio de frontend web y móvil integra autenticación, APIs y hosting en un flujo guiado.',
			'Incorrecta: una herramienta de compilación genérica no gestiona la autenticación ni el hosting.',
			'Incorrecta: un servicio de rastreo solo diagnostica y no publica aplicaciones.',
			'Incorrecta: un centro de contacto atiende usuarios y no construye ni despliega el frontend.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html',
		],
	},
	{
		id: '3.8-q29',
		taskId: '3.8',
		objetivos: ['3.8#7'],
		tipo: 'tradeoff',
		question:
			'Un equipo debate entre operar su propia capa de mensajería para los dispositivos IoT o usar un servicio gestionado que registre cada dispositivo, autentique su conexión y enrute los mensajes. ¿Qué compromiso describe mejor esa decisión?',
		options: [
			'El servicio gestionado asume la identidad, la conexión segura y el enrutado, a cambio de depender de la nube; la capa propia da control pero exige operarla.',
			'Operar la propia capa evita cualquier dependencia de la nube y siempre resulta más barato a largo plazo, además de exigir menos esfuerzo de mantenimiento.',
			'El servicio gestionado obliga a desarrollar el bróker y la autenticación desde cero, aunque no aporta enrutado de mensajes ni identidad de dispositivo.',
			'Ninguna de las dos opciones permite conectar dispositivos: solo un centro de contacto puede recibir sus lecturas.',
		],
		correctAnswer: 0,
		explanation:
			'Un servicio gestionado de IoT asume el registro, la autenticación y el enrutado de los mensajes, lo que reduce el esfuerzo de operación a cambio de depender de la nube. Mantener la capa propia da más control pero exige operar el bróker y la seguridad. Si el objetivo fuera solo enrutar eventos entre aplicaciones, el servicio sería un bus de eventos y no la capa de IoT.',
		porQueOpcion: [
			'Correcta: el servicio gestionado asume la identidad, la conexión segura y el enrutado a cambio de depender de la nube, mientras la capa propia da control pero exige operarla.',
			'Incorrecta: operar la capa propia no evita la dependencia de la nube ni garantiza menor coste o esfuerzo.',
			'Incorrecta: el servicio gestionado no obliga a desarrollar el bróker ni la autenticación, que ya aporta.',
			'Incorrecta: ambas opciones permiten conectar dispositivos y no dependen de un centro de contacto.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html',
		],
	},
];
