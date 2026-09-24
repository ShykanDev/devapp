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
			'Amazon EventBridge, porque construye una máquina de estados con los pasos del flujo.',
			'AWS Step Functions, porque retiene los mensajes en una cola hasta que el consumidor los lee.',
		],
		correctAnswer: 1,
		explanation:
			'Amazon SNS implementa publicación/suscripción: un mensaje se difunde a muchos suscriptores, que es el patrón de alertas y notificaciones. La cola que retiene mensajes para un consumidor es Amazon SQS; Amazon EventBridge enruta eventos según reglas y AWS Step Functions orquesta pasos.',
	},
	{
		id: '3.8-q2',
		taskId: '3.8',
		objetivos: ['3.8#1', '3.8#8'],
		tipo: 'comparacion',
		question:
			'Un equipo debe elegir entre los servicios de integración de aplicaciones del alcance. ¿Qué afirmación describe correctamente cuándo usar cada uno?',
		options: [
			'Amazon SQS difunde alertas a muchos suscriptores, Amazon SNS retiene mensajes en cola y Amazon EventBridge ejecuta pasos secuenciales.',
			'Amazon SQS desacopla con una cola que el consumidor recoge, Amazon SNS difunde alertas y notificaciones a muchos suscriptores y Amazon EventBridge enruta eventos según reglas.',
			'Los tres servicios son equivalentes y solo cambia el nombre del producto.',
			'Amazon EventBridge es una cola de mensajes, Amazon SQS es un bus de eventos y Amazon SNS orquesta flujos de trabajo.',
		],
		correctAnswer: 1,
		explanation:
			'Amazon SQS es la cola que desacopla productor y consumidor, Amazon SNS es el modelo pub/sub para alertas y notificaciones, y Amazon EventBridge es el bus de eventos que enruta según reglas. Los tres resuelven entrega de información con patrones distintos.',
	},
	{
		id: '3.8-q3',
		taskId: '3.8',
		objetivos: ['3.8#8'],
		tipo: 'escenario',
		question:
			'Una empresa genera pedidos y necesita que un componente los procese a su propio ritmo, sin perder ninguno si el consumidor está ocupado. ¿Qué servicio es el más adecuado?',
		options: [
			'Amazon Simple Notification Service (Amazon SNS), para difundir el pedido a todos los suscriptores.',
			'Amazon Simple Queue Service (Amazon SQS), para encolar los pedidos y que el consumidor los procese cuando pueda.',
			'Amazon EventBridge, para dibujar el flujo como una máquina de estados.',
			'AWS Step Functions, para sustituir al consumidor del pedido.',
		],
		correctAnswer: 1,
		explanation:
			'Cuando el trabajo debe esperar y procesarse una sola vez sin pérdidas, el patrón es una cola: Amazon SQS. Amazon SNS difundiría el mensaje a varios suscriptores, Amazon EventBridge enruta eventos y AWS Step Functions orquesta pasos, no sustituye al consumidor.',
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
			'Amazon Simple Queue Service (Amazon SQS) para la alerta inmediata y Amazon Simple Notification Service (Amazon SNS) para el trabajo pendiente.',
			'Amazon EventBridge, que cubre ambas necesidades sin otros servicios.',
			'AWS Step Functions, que envía correo y SMS por sí mismo.',
		],
		correctAnswer: 0,
		explanation:
			'La alerta inmediata a muchos destinatarios es publicación/suscripción (Amazon SNS) y el trabajo que se procesa después encaja en una cola (Amazon SQS). Amazon EventBridge enruta eventos y AWS Step Functions orquesta pasos, pero ninguno sustituye a esa combinación.',
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
			'Amazon Connect es el centro de contacto omnicanal (voz y chat) y Amazon Simple Email Service (Amazon SES) es el servicio de correo electrónico a escala. Los demás pares cruzan categorías: SNS y SQS son integración de aplicaciones, y Amplify e IoT Core son frontend y IoT.',
	},
	{
		id: '3.8-q6',
		taskId: '3.8',
		objetivos: ['3.8#9'],
		tipo: 'escenario',
		question:
			'Una empresa quiere montar un centro de contacto omnicanal en la nube, con enrutamiento de llamadas y agentes que trabajan desde cualquier lugar, sin mantener infraestructura telefónica propia. ¿Qué servicio satisface la necesidad?',
		options: [
			'Amazon Simple Email Service (Amazon SES).',
			'Amazon Connect.',
			'Amazon Simple Notification Service (Amazon SNS).',
			'Amazon WorkSpaces.',
		],
		correctAnswer: 1,
		explanation:
			'Amazon Connect es el centro de contacto gestionado que enruta voz y chat a los agentes sin infraestructura telefónica propia. Amazon SES envía correo, Amazon SNS difunde notificaciones y Amazon WorkSpaces entrega escritorios virtuales.',
	},
	{
		id: '3.8-q7',
		taskId: '3.8',
		objetivos: ['3.8#3'],
		tipo: 'conocimiento',
		question:
			'¿Qué categoría de servicio representa AWS Support y qué plan incluye un Technical Account Manager (TAM)?',
		options: [
			'Es un servicio de integración de aplicaciones y el TAM viene en el plan Basic.',
			'Es un servicio de habilitación del cliente y el TAM lo incluye AWS Enterprise Support.',
			'Es un servicio de computación de usuario final y el TAM solo existe en AWS Developer Support.',
			'Es una herramienta de desarrollo que sustituye a AWS CodePipeline.',
		],
		correctAnswer: 1,
		explanation:
			'AWS Support pertenece a la categoría de habilitación del cliente. El Technical Account Manager (TAM) forma parte de AWS Enterprise Support, el nivel más alto; el plan Basic no incluye soporte técnico de producción ni TAM.',
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
			'Para cargas críticas con cobertura 24/7, respuesta rápida y un Technical Account Manager (TAM) el plan adecuado es AWS Enterprise Support. El plan Basic no cubre soporte de producción y AWS Developer Support no ofrece cobertura 24/7 ni TAM.',
	},
	{
		id: '3.8-q9',
		taskId: '3.8',
		objetivos: ['3.8#4'],
		tipo: 'conocimiento',
		question:
			'¿Qué herramienta de desarrollo compila y ejecuta pruebas para construir el artefacto de una aplicación, y cuál rastrea las solicitudes entre componentes para depurar?',
		options: [
			'AWS CodePipeline compila y AWS CodeBuild rastrea las solicitudes.',
			'AWS CodeBuild compila y ejecuta pruebas, y AWS X-Ray rastrea las solicitudes para depurar.',
			'AWS X-Ray compila y AWS CodePipeline rastrea las solicitudes.',
			'AWS Amplify compila y Amazon Connect rastrea las solicitudes.',
		],
		correctAnswer: 1,
		explanation:
			'AWS CodeBuild construye y prueba el código, y AWS X-Ray traza las solicitudes a través de los componentes para localizar errores y latencia. AWS CodePipeline coordina las etapas, no compila ni rastrea por sí mismo.',
	},
	{
		id: '3.8-q10',
		taskId: '3.8',
		objetivos: ['3.8#4', '3.8#11'],
		tipo: 'comparacion',
		question:
			'Un equipo distingue dos piezas de su canalización: una que compila y prueba el código y otra que coordina las etapas de principio a fin. ¿Qué afirmación es correcta?',
		options: [
			'AWS CodePipeline compila el código y AWS CodeBuild coordina las etapas.',
			'AWS CodeBuild compila y prueba el código, y AWS CodePipeline coordina las etapas de la canalización.',
			'Ambos servicios hacen lo mismo y se eligen por precio.',
			'AWS CodeBuild es un bus de eventos y AWS CodePipeline un servicio de correo.',
		],
		correctAnswer: 1,
		explanation:
			'AWS CodeBuild es la fase de construcción y pruebas; AWS CodePipeline modela y coordina la canalización completa. Son complementarios: uno ejecuta el trabajo, el otro define y dirige el flujo.',
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
			'El ciclo de integración y entrega continua se arma con AWS CodePipeline (coordinación), AWS CodeBuild (compilación y pruebas) y AWS X-Ray (diagnóstico en ejecución). Los demás servicios pertenecen a otras categorías y no cubren esas funciones.',
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
			'Amazon AppStream 2.0 publica aplicaciones concretas por streaming: la aplicación se ejecuta en AWS y el usuario solo recibe su salida. Amazon WorkSpaces entrega un escritorio virtual completo, Amazon Connect atiende llamadas y AWS Amplify despliega frontend web y móvil.',
	},
	{
		id: '3.8-q13',
		taskId: '3.8',
		objetivos: ['3.8#5', '3.8#12'],
		tipo: 'comparacion',
		question:
			'Un equipo compara las opciones de computación de usuario final. ¿Qué afirmación distingue Amazon AppStream 2.0 de Amazon WorkSpaces?',
		options: [
			'Amazon AppStream 2.0 entrega aplicaciones concretas por streaming y Amazon WorkSpaces entrega un escritorio virtual completo por usuario.',
			'Amazon WorkSpaces entrega aplicaciones por streaming y Amazon AppStream 2.0 entrega escritorios completos.',
			'Ambos entregan escritorios completos y solo cambian el sistema operativo.',
			'Amazon AppStream 2.0 es un servicio de correo y Amazon WorkSpaces un bus de eventos.',
		],
		correctAnswer: 0,
		explanation:
			'Amazon AppStream 2.0 presenta aplicaciones individuales por streaming, mientras que Amazon WorkSpaces ofrece un escritorio virtual completo y persistente por usuario. La elección depende de si hay que publicar una aplicación o un puesto de trabajo entero.',
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
			'Amazon WorkSpaces entrega un escritorio virtual completo y persistente por usuario, al que se accede desde distintos dispositivos. Amazon AppStream 2.0 solo publica aplicaciones y Amazon WorkSpaces Secure Browser ofrece un navegador aislado, no un escritorio con sistema operativo.',
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
			'AWS Amplify está orientado al frontend web y móvil: permite crear la interfaz, integrar capacidades como la autenticación y desplegar con hosting y entrega continua. AWS CodeBuild compila, AppStream 2.0 entrega aplicaciones y Amazon Connect atiende clientes.',
	},
	{
		id: '3.8-q16',
		taskId: '3.8',
		objetivos: ['3.8#13'],
		tipo: 'escenario',
		question:
			'Un equipo quiere publicar una aplicación móvil con backend y una web con inicio de sesión, y desplegarla sin montar toda la infraestructura a mano. ¿Qué servicio encaja mejor?',
		options: [
			'AWS IoT Core, porque conecta los móviles con la nube.',
			'AWS Amplify, porque integra frontend, autenticación y despliegue de aplicaciones web y móviles.',
			'Amazon WorkSpaces, porque publica escritorios.',
			'AWS X-Ray, porque construye el frontend.',
		],
		correctAnswer: 1,
		explanation:
			'AWS Amplify cubre la creación y el despliegue de frontend web y móvil, integrando autenticación, APIs y hosting. AWS IoT Core gestiona dispositivos, Amazon WorkSpaces entrega escritorios y AWS X-Ray depura solicitudes.',
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
			'AWS IoT Core registra y autentica los dispositivos, recibe sus mensajes y, mediante reglas, los enruta a otros servicios. Amazon Connect es un centro de contacto, Amazon EventBridge enruta eventos entre aplicaciones y AWS Amplify despliega frontend web y móvil.',
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
			'AWS IoT Core gestiona la identidad, la conexión segura y los mensajes de los dispositivos IoT, y los enruta a otros servicios con reglas. Amazon SQS desacopla aplicaciones con colas, Amazon WorkSpaces Secure Browser ofrece un navegador aislado y AWS X-Ray traza solicitudes.',
	},
];
