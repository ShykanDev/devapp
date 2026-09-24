import type { GrupoTematico } from '@/data/clfC02/types';

export const gruposTask38: GrupoTematico[] = [
	{
		id: '3.8-g1',
		titulo: 'Integración de aplicaciones: eventos, notificaciones y colas',
		objetivos: ['3.8#1', '3.8#8'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'La **integración de aplicaciones** conecta componentes sin acoplarlos entre sí. En el alcance del examen hay tres servicios que resuelven la entrega de información:\n\n- **Amazon Simple Queue Service (Amazon SQS)**: cola de mensajes. Un productor deposita el mensaje y un consumidor lo recoge para procesarlo; desacopla ambos lados y permite acumular trabajo y reintentar sin perder nada.\n- **Amazon Simple Notification Service (Amazon SNS)**: publicación/suscripción (pub/sub). Un mismo mensaje se difunde a muchos suscriptores a la vez (correo, SMS, endpoints HTTP); es la vía natural para alertas y notificaciones.\n- **Amazon EventBridge**: bus de eventos que reacciona a eventos del sistema o de las aplicaciones y los enruta a destinos según reglas, sin que el emisor conozca al receptor.\n\nA estos se suma **AWS Step Functions**, que orquesta varios pasos como una máquina de estados cuando el flujo tiene lógica y secuencia propia.',
			},
			{
				tipo: 'comparacion',
				parId: 'sns-vs-sqs-vs-eventbridge',
			},
			{
				tipo: 'escenario',
				situacion:
					'Una tienda en línea debe avisar de inmediato a cada cliente por correo y por SMS cuando su pedido cambia de estado, y a la vez entregar cada cambio a un sistema de análisis que lo procesa a su propio ritmo.',
				analisis:
					'Las **alertas** al cliente exigen un patrón de publicación/suscripción: el mismo evento debe llegar a varios suscriptores al instante, y eso lo resuelve un topic de **Amazon SNS**. El sistema de análisis, en cambio, no debe bloquear el flujo de la tienda, así que el trabajo se deposita en una cola de **Amazon SQS** que el analizador consume cuando puede. Un topic puede publicar en una cola, de modo que ambas piezas encajan sin acoplar la tienda con sus consumidores.',
				servicio: 'Amazon Simple Notification Service (Amazon SNS)',
			},
			{
				tipo: 'errorComun',
				error: 'Usar Amazon Simple Queue Service (Amazon SQS) para lanzar una alerta inmediata a muchos destinatarios o emplear Amazon Simple Notification Service (Amazon SNS) para retener trabajo pendiente que otro sistema procesará después.',
				correccion:
					'Las alertas y notificaciones inmediatas a varios suscriptores son pub/sub y las cubre Amazon SNS; el trabajo que debe esperar y procesarse una sola vez es una cola y lo cubre Amazon SQS. Cuando la decisión depende de reaccionar a eventos y enrutarlos según reglas, el servicio es Amazon EventBridge.',
			},
			{
				tipo: 'clave',
				items: [
					'Amazon SQS = cola: desacopla productor y consumidor, acumula trabajo y permite reintentar.',
					'Amazon SNS = publicación/suscripción: difunde alertas y notificaciones a muchos suscriptores.',
					'Amazon EventBridge = bus de eventos: reacciona y enruta eventos a destinos según reglas.',
					'AWS Step Functions = orquestación de pasos cuando el flujo tiene lógica y secuencia.',
				],
			},
		],
		preguntasGuia: [
			'¿Cuándo conviene una cola y cuándo un modelo de publicación/suscripción?',
			'¿Qué diferencia hay entre enrutar eventos y difundir un mensaje?',
			'¿Qué servicio orquesta varios pasos de un flujo de trabajo?',
		],
	},
	{
		id: '3.8-g2',
		titulo: 'Aplicaciones de negocio: centro de contacto y correo electrónico',
		objetivos: ['3.8#2', '3.8#9'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'Las **aplicaciones de negocio** cubren funciones de negocio listas para usar, sin construir la infraestructura por tu cuenta:\n\n- **Amazon Connect**: centro de contacto omnicanal en la nube. Enruta llamadas, chat y tareas a los agentes, incorpora IVR, grabación y analíticas, y se paga por uso sin mantener centralitas propias.\n- **Amazon Simple Email Service (Amazon SES)**: servicio de envío y recepción de correo electrónico a escala. Está pensado para correo transaccional y de marketing con alta entregabilidad, sin administrar servidores de correo.\n\nLa clave para elegir es el canal: **voz y chat** apuntan a Amazon Connect; **correo electrónico**, a Amazon SES.',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Usa **Amazon Connect** cuando necesites atención al cliente con enrutamiento de llamadas, IVR y agentes que trabajan desde cualquier lugar.',
					'Usa **Amazon Simple Email Service (Amazon SES)** cuando una aplicación deba enviar correos transaccionales o de marketing de forma masiva y fiable.',
					'Combina ambos canales si la atención al cliente requiere voz, chat y correo en una misma experiencia.',
				],
				noUsar: [
					'No uses Amazon SES para gestionar llamadas telefónicas ni Amazon Connect para enviar correo masivo.',
					'No montes servidores de correo propios para envíos transaccionales: Amazon SES ya gestiona entregabilidad y reputación.',
				],
			},
			{
				tipo: 'escenario',
				situacion:
					'Una empresa quiere atender a sus clientes por teléfono y chat desde varios países, con enrutamiento inteligente a los agentes, sin comprar ni mantener infraestructura telefónica.',
				analisis:
					'La necesidad es un centro de contacto omnicanal gestionado: enrutamiento de voz y chat, IVR y agentes distribuidos. Eso es exactamente **Amazon Connect**, que se aprovisiona en minutos y escala según la demanda. El correo no entra en este escenario; si además se quisieran enviar notificaciones por email, correspondería a Amazon SES.',
				servicio: 'Amazon Connect',
			},
			{
				tipo: 'errorComun',
				error: 'Creer que Amazon Simple Email Service (Amazon SES) gestiona llamadas telefónicas o que Amazon Connect sirve para enviar correo transaccional masivo.',
				correccion:
					'Cada servicio cubre un canal distinto: Amazon Connect es el centro de contacto para voz y chat, y Amazon Simple Email Service (Amazon SES) es el servicio de correo electrónico a escala. Elegir por el canal esperado evita confusiones.',
			},
		],
		preguntasGuia: [
			'¿Qué servicio atiende llamadas y chat, y cuál envía correo a escala?',
			'¿Cómo se elige entre Amazon Connect y Amazon Simple Email Service (Amazon SES)?',
			'¿Qué canal cubre cada aplicación de negocio del alcance?',
		],
	},
	{
		id: '3.8-g3',
		titulo: 'Habilitación del cliente: planes de AWS Support',
		objetivos: ['3.8#3', '3.8#10'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'La **habilitación del cliente** agrupa los recursos de asistencia que AWS ofrece al cliente. **AWS Support** se contrata en varios planes con distinto nivel de respuesta:\n\n- **Basic**: incluido en toda cuenta; acceso a documentación, AWS re:Post y AWS Health Dashboard, pero sin soporte técnico de producción.\n- **AWS Developer Support**: soporte técnico por correo en horario laboral, orientado a desarrollo y pruebas.\n- **AWS Business Support**: soporte 24/7, AWS Trusted Advisor completo y tiempos de respuesta rápidos para producción.\n- **AWS Enterprise On-Ramp Support** y **AWS Enterprise Support**: niveles para cargas críticas; Enterprise añade un Technical Account Manager (TAM) y el menor tiempo de respuesta.\n\nEl **AWS Support Center** concentra la gestión de casos y **AWS Trusted Advisor** revisa buenas prácticas del entorno.',
			},
			{
				tipo: 'escenario',
				situacion:
					'Una empresa ejecuta una plataforma de ventas con tráfico continuo y necesita soporte 24/7, tiempos de respuesta rápidos y un interlocutor técnico dedicado que conozca su arquitectura.',
				analisis:
					'El soporte básico no cubre producción y el plan de desarrollo no ofrece cobertura 24/7. Lo que se pide —cobertura continua, respuesta rápida y un Technical Account Manager (TAM)— corresponde a **AWS Enterprise Support**, el nivel más alto de asistencia. Elegir un plan inferior dejaría sin cubrir la criticidad de la carga.',
				servicio: 'AWS Support',
			},
			{
				tipo: 'errorComun',
				error: 'Suponer que el plan Basic incluye soporte técnico de producción o contratar AWS Enterprise Support para un prototipo sin cargas críticas.',
				correccion:
					'El plan Basic no incluye soporte técnico de producción. El nivel se elige según la criticidad: AWS Developer Support para desarrollo y pruebas, AWS Business Support para producción con cobertura 24/7 y AWS Enterprise Support para cargas críticas que exigen el menor tiempo de respuesta y un Technical Account Manager (TAM).',
			},
			{
				tipo: 'clave',
				items: [
					'Basic = incluido, sin soporte técnico de producción.',
					'AWS Developer Support = correo en horario laboral, para desarrollo y pruebas.',
					'AWS Business Support = 24/7 y AWS Trusted Advisor completo para producción.',
					'AWS Enterprise Support = cargas críticas, menor tiempo de respuesta y Technical Account Manager (TAM).',
					'AWS Trusted Advisor y AWS Health Dashboard complementan la asistencia sin sustituir al plan.',
				],
			},
		],
		preguntasGuia: [
			'¿Qué incluye el plan Basic y qué añade un plan de pago?',
			'¿Qué plan elegir para una carga crítica con cobertura 24/7?',
			'¿Qué papel cumplen AWS Trusted Advisor y AWS Support Center?',
		],
	},
	{
		id: '3.8-g4',
		titulo: 'Herramientas de desarrollo: compilar, desplegar y depurar',
		objetivos: ['3.8#4', '3.8#11'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'Las **herramientas de desarrollo** cubren el ciclo de vida de una aplicación:\n\n- **AWS CodeBuild**: compila el código, ejecuta pruebas y genera el artefacto, sin administrar servidores de compilación.\n- **AWS CodePipeline**: modela y coordina la canalización de extremo a extremo; encadena origen, compilación, pruebas y despliegue según las etapas definidas.\n- **AWS X-Ray**: rastrea las solicitudes a través de los componentes de la aplicación para localizar errores y cuellos de botella.\n- **AWS CLI**: permite operar los servicios de forma programática desde la línea de comandos.\n\nRegla práctica: **AWS CodeBuild** hace el trabajo de construir, **AWS CodePipeline** dirige el flujo y **AWS X-Ray** ayuda a **depurar** cuando algo falla en ejecución.',
			},
			{
				tipo: 'comparacion',
				parId: 'codebuild-vs-codepipeline',
			},
			{
				tipo: 'escenario',
				situacion:
					'Un equipo quiere que cada cambio en el repositorio compile, pase pruebas y llegue a producción sin pasos manuales, y poder ver en qué etapa falla la entrega.',
					analisis:
					'La coordinación de todas las etapas de principio a fin corresponde a **AWS CodePipeline**, que encadena origen, compilación, pruebas y despliegue. Dentro de esa canalización, la etapa de compilar y probar la ejecuta AWS CodeBuild. Para diagnosticar el comportamiento en ejecución de la aplicación desplegada se usa AWS X-Ray.',
				servicio: 'AWS CodePipeline',
			},
			{
				tipo: 'errorComun',
				error: 'Pedirle a AWS CodeBuild que coordine todas las etapas de despliegue o esperar que AWS CodePipeline compile el código por sí mismo.',
				correccion:
					'AWS CodeBuild construye y prueba; AWS CodePipeline orquesta las etapas y decide el orden del flujo. Son piezas complementarias de la misma canalización, no sustitutos entre sí.',
			},
			{
				tipo: 'clave',
				items: [
					'AWS CodeBuild = compila, ejecuta pruebas y produce el artefacto.',
					'AWS CodePipeline = coordina las etapas de la canalización de principio a fin.',
					'AWS X-Ray = traza solicitudes para depurar errores y latencia.',
					'AWS CLI = acceso programático desde la línea de comandos.',
				],
			},
		],
		preguntasGuia: [
			'¿Qué servicio compila y cuál coordina la canalización?',
			'¿Con qué herramienta se depuran errores en ejecución?',
			'¿Qué piezas forman un flujo de integración y entrega continua?',
		],
	},
	{
		id: '3.8-g5',
		titulo: 'Computación de usuario final: aplicaciones y escritorios en la nube',
		objetivos: ['3.8#5', '3.8#12'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'La **computación de usuario final** entrega puestos de trabajo desde la nube, de modo que la carga se ejecuta en AWS y el usuario solo recibe la salida en su dispositivo:\n\n- **Amazon AppStream 2.0**: entrega **aplicaciones** concretas por streaming. La aplicación corre en AWS y el usuario la ve y la usa en su navegador o cliente, sin instalarla.\n- **Amazon WorkSpaces**: entrega un **escritorio virtual completo y persistente** por usuario, con su sistema operativo y sus aplicaciones, accesible desde distintos dispositivos.\n- **Amazon WorkSpaces Secure Browser**: ofrece un **navegador aislado** para acceder de forma segura a sitios internos sin exponer la red del usuario.\n\nLa distinción habitual es aplicación suelta frente a escritorio completo: AppStream 2.0 publica una aplicación, WorkSpaces publica el escritorio entero.',
			},
			{
				tipo: 'comparacion',
				parId: 'appstream-vs-workspaces',
			},
			{
				tipo: 'escenario',
				situacion:
					'Una empresa quiere dar acceso a un programa de diseño pesado a contratistas que usan equipos modestos, sin instalarlo en esos equipos ni enviarles licencias locales.',
					analisis:
					'Lo que se necesita es publicar **una sola aplicación** por streaming: el programa se ejecuta en AWS y el contratista solo recibe su salida en el dispositivo. El servicio indicado es **Amazon AppStream 2.0**. Si además cada persona necesitara un escritorio corporativo completo, la opción sería Amazon WorkSpaces.',
				servicio: 'Amazon AppStream 2.0',
			},
			{
				tipo: 'errorComun',
				error: 'Confundir Amazon AppStream 2.0 con Amazon WorkSpaces y creer que Amazon WorkSpaces Secure Browser entrega un escritorio completo con sistema operativo.',
				correccion:
					'Amazon AppStream 2.0 publica aplicaciones individuales por streaming; Amazon WorkSpaces entrega un escritorio virtual completo y persistente por usuario; Amazon WorkSpaces Secure Browser solo proporciona un navegador aislado. Se elige según lo que haya que presentar en el equipo del usuario final.',
			},
			{
				tipo: 'clave',
				items: [
					'Amazon AppStream 2.0 = aplicaciones por streaming, sin instalación local.',
					'Amazon WorkSpaces = escritorio virtual completo y persistente por usuario.',
					'Amazon WorkSpaces Secure Browser = navegador aislado para acceso web seguro.',
					'El cómputo se ejecuta en AWS y el usuario final solo recibe la salida.',
				],
			},
		],
		preguntasGuia: [
			'¿Qué servicio publica una aplicación y cuál publica un escritorio completo?',
			'¿Para qué sirve Amazon WorkSpaces Secure Browser?',
			'¿Dónde se ejecuta el cómputo en la computación de usuario final?',
		],
	},
	{
		id: '3.8-g6',
		titulo: 'Frontend web y móvil con AWS Amplify',
		objetivos: ['3.8#6', '3.8#13'],
		bloques: [
			{
				tipo: 'concepto',
				md: '**AWS Amplify** agrupa el frontend web y móvil en un mismo flujo: proporciona herramientas y bibliotecas para crear la interfaz, añadir capacidades como autenticación o APIs y publicar la aplicación con hosting y entrega continua.\n\nSu valor es reducir el trabajo de integrar el frontend con el backend: en lugar de montar y cablear cada servicio por separado, Amplify ofrece una experiencia guiada para construir, conectar y desplegar aplicaciones web y móviles, apoyándose por debajo en servicios como Amazon Cognito (autenticación), Amazon API Gateway (APIs), Amazon S3 (contenido estático) y Amazon CloudFront (entrega).',
			},
			{
				tipo: 'escenario',
				situacion:
					'Una startup quiere lanzar una aplicación móvil con registro de usuarios y una web de marketing, y desplegar ambas desde el repositorio sin configurar manualmente autenticación, hosting y entrega.',
				analisis:
					'El objetivo es **crear y desplegar frontend web y móvil** con las capacidades habituales ya integradas. **AWS Amplify** cubre ese ciclo: conecta la autenticación, expone la API y publica el frontend con hosting y entrega continua, apoyándose por debajo en Amazon Cognito, Amazon API Gateway, Amazon S3 y Amazon CloudFront. No es una herramienta de compilación de propósito general ni un centro de contacto.',
				servicio: 'AWS Amplify',
			},
			{
				tipo: 'errorComun',
				error: 'Encargar a AWS Amplify la depuración de microservicios o creer que sustituye a AWS CodePipeline como orquestador genérico de cualquier aplicación.',
				correccion:
					'AWS Amplify está orientado al frontend web y móvil: crear la interfaz, integrar capacidades y desplegarla. La depuración de solicitudes distribuidas es AWS X-Ray y la orquestación genérica de canalizaciones, AWS CodePipeline.',
			},
			{
				tipo: 'clave',
				items: [
					'AWS Amplify = creación y despliegue de frontend web y móvil.',
					'Integra autenticación, APIs y hosting en un flujo guiado.',
					'Se apoya en Amazon Cognito, Amazon API Gateway, Amazon S3 y Amazon CloudFront.',
					'No es una herramienta de compilación genérica ni un servicio de integración de aplicaciones.',
				],
			},
		],
		preguntasGuia: [
			'¿Qué problema resuelve AWS Amplify en el frontend?',
			'¿Qué servicios usa por debajo para autenticación y entrega?',
			'¿En qué se diferencia de una canalización genérica de despliegue?',
		],
	},
	{
		id: '3.8-g7',
		titulo: 'IoT gestionado con AWS IoT Core',
		objetivos: ['3.8#7', '3.8#14'],
		bloques: [
			{
				tipo: 'concepto',
				md: '**AWS IoT Core** es el servicio gestionado que conecta dispositivos IoT con la nube. Registra los dispositivos, autentica su conexión y recibe los mensajes que publican mediante protocolos ligeros como MQTT.\n\nCon las reglas de AWS IoT Core los mensajes de los dispositivos se enrutan hacia otros servicios, por ejemplo AWS Lambda para procesarlos o Amazon S3 para almacenarlos. Así, la flota de dispositivos queda administrada de forma centralizada —identidad, comunicación segura y enrutado— sin operar un bróker propio.',
			},
			{
				tipo: 'escenario',
				situacion:
					'Una fábrica despliega miles de sensores que deben registrarse de forma individual, comunicarse de forma segura con la nube y publicar sus lecturas para que un proceso automático las analice.',
				analisis:
					'El reto es **gestionar dispositivos IoT**: identidad por dispositivo, conexión segura y recepción de lecturas. **AWS IoT Core** registra y autentica cada sensor, recibe sus mensajes y, mediante reglas, los enruta a AWS Lambda o Amazon S3 según el caso. No es un servicio de colas para trabajo de aplicaciones ni un centro de contacto.',
				servicio: 'AWS IoT Core',
			},
			{
				tipo: 'errorComun',
				error: 'Elegir Amazon Simple Queue Service (Amazon SQS) o Amazon Connect para conectar y administrar dispositivos IoT, o intentar operar un bróker MQTT propio en su lugar.',
				correccion:
					'La conexión, autenticación y administración de dispositivos IoT las cubre AWS IoT Core. Amazon SQS desacopla aplicaciones con colas y Amazon Connect atiende llamadas y chat; ninguno gestiona una flota de dispositivos.',
			},
			{
				tipo: 'clave',
				items: [
					'AWS IoT Core = conexión y administración de dispositivos IoT.',
					'Registra la identidad de cada dispositivo y autentica su conexión.',
					'Recibe mensajes por protocolos ligeros, como MQTT.',
					'Enruta los mensajes a otros servicios con reglas, por ejemplo a AWS Lambda o Amazon S3.',
				],
			},
		],
		preguntasGuia: [
			'¿Qué servicio conecta y administra dispositivos IoT en AWS?',
			'¿Cómo llegan las lecturas de los dispositivos al resto de la arquitectura?',
			'¿Por qué no basta con una cola para gestionar dispositivos?',
		],
	},
];
