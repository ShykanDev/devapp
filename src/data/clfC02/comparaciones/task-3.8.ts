import type { ParConfusionClfC02 } from '@/data/clfC02/types';

export const paresTask38: ParConfusionClfC02[] = [
	{
		id: 'sns-vs-sqs-vs-eventbridge',
		etiqueta: 'Colas, notificaciones y eventos: Amazon SQS, Amazon SNS y Amazon EventBridge',
		a: {
			titulo: 'Entrega de mensajes: Amazon Simple Queue Service (Amazon SQS) y Amazon Simple Notification Service (Amazon SNS)',
			resumen:
				'Amazon SQS es una cola: el productor deposita el mensaje y un consumidor lo retira para procesarlo, lo que desacopla ambos lados y permite acumular trabajo y reintentar. Amazon SNS es publicación/suscripción: el mismo mensaje se difunde a muchos suscriptores al instante, el patrón de alertas y notificaciones.',
		},
		b: {
			titulo: 'Enrutado de eventos: Amazon EventBridge',
			resumen:
				'Bus de eventos que reacciona a eventos del sistema o de las aplicaciones y los enruta a destinos según reglas. El emisor no necesita conocer al receptor y se pueden filtrar y transformar los eventos antes de entregarlos.',
		},
		diferenciaClave:
			'Amazon SQS entrega trabajo a un consumidor mediante una cola; Amazon SNS difunde alertas y notificaciones a muchos suscriptores a la vez; Amazon EventBridge reacciona a eventos y los enruta según reglas. Cola, pub/sub y bus de eventos resuelven necesidades distintas.',
		cuandoA: [
			'Usa Amazon SQS para desacoplar componentes y encolar trabajo que se procesará a su ritmo, sin perder mensajes.',
			'Usa Amazon SNS para enviar alertas y notificaciones inmediatas a varios destinatarios a la vez.',
		],
		cuandoB: [
			'Usa Amazon EventBridge cuando debas reaccionar a eventos de servicios o aplicaciones y enrutarlos según reglas.',
			'Usa Amazon EventBridge cuando el emisor no deba conocer al receptor y necesites filtrar eventos por su contenido.',
		],
		escenarioA:
			'Una tienda publica cada cambio de pedido en un topic de Amazon SNS para avisar por correo y SMS a varios suscriptores y, a la vez, deja el análisis pesado en una cola de Amazon SQS que el analizador consume cuando puede.',
		escenarioB:
			'La misma tienda define reglas en Amazon EventBridge para que un pedido cancelado dispare automáticamente la devolución del stock y la notificación al equipo de logística, sin que el sistema de pedidos conozca a esos receptores.',
		preguntaIds: ['3.8-q2'],
		objetivos: ['3.8#1', '3.8#8'],
	},
	{
		id: 'appstream-vs-workspaces',
		etiqueta: 'Amazon AppStream 2.0 frente a Amazon WorkSpaces',
		a: {
			titulo: 'Amazon AppStream 2.0',
			resumen:
				'Entrega aplicaciones concretas por streaming. La aplicación se ejecuta en AWS y el usuario la usa desde su navegador o cliente sin instalarla ni recibir el sistema operativo del servidor.',
		},
		b: {
			titulo: 'Amazon WorkSpaces',
			resumen:
				'Entrega un escritorio virtual completo y persistente por usuario, con su sistema operativo y sus aplicaciones, accesible desde distintos dispositivos. Amazon WorkSpaces Secure Browser es la variante de navegador aislado.',
		},
		diferenciaClave:
			'Amazon AppStream 2.0 publica una aplicación individual; Amazon WorkSpaces publica un puesto de trabajo completo. Se elige según lo que deba presentarse en el equipo del usuario final: una app suelta o un escritorio entero.',
		cuandoA: [
			'Usa Amazon AppStream 2.0 cuando unos pocos usuarios necesiten una aplicación concreta sin instalarla en sus equipos.',
			'Usa Amazon AppStream 2.0 para dar acceso temporal a software especializado a contratistas con equipos modestos.',
		],
		cuandoB: [
			'Usa Amazon WorkSpaces cuando cada usuario necesite un escritorio corporativo completo y persistente.',
			'Usa Amazon WorkSpaces para reemplazar puestos de trabajo tradicionales manteniendo el sistema operativo y las aplicaciones de cada persona.',
		],
		escenarioA:
			'Una agencia publica su programa de diseño por Amazon AppStream 2.0 para que colaboradores externos lo usen desde un navegador, sin instalarlo en sus ordenadores personales.',
		escenarioB:
			'Un banco entrega a cada empleado un escritorio virtual de Amazon WorkSpaces al que accede desde cualquier dispositivo corporativo o personal, conservando su configuración entre sesiones.',
		preguntaIds: ['3.8-q13'],
		objetivos: ['3.8#5', '3.8#12'],
	},
	{
		id: 'codebuild-vs-codepipeline',
		etiqueta: 'AWS CodeBuild frente a AWS CodePipeline',
		a: {
			titulo: 'AWS CodeBuild',
			resumen:
				'Servicio de compilación. Ejecuta el build y las pruebas, y produce el artefacto desplegable, sin administrar servidores de compilación. Es una etapa que hace el trabajo.',
		},
		b: {
			titulo: 'AWS CodePipeline',
			resumen:
				'Servicio de orquestación de la canalización. Modela y coordina las etapas de extremo a extremo —origen, compilación, pruebas y despliegue— y decide el orden del flujo.',
		},
		diferenciaClave:
			'AWS CodeBuild construye y prueba; AWS CodePipeline coordina las etapas y el orden de la canalización. Uno ejecuta la construcción y el otro dirige el proceso completo.',
		cuandoA: [
			'Usa AWS CodeBuild cuando necesites compilar código y ejecutar pruebas para generar un artefacto.',
			'Usa AWS CodeBuild para construir y probar de forma gestionada, sin servidores de compilación propios.',
		],
		cuandoB: [
			'Usa AWS CodePipeline cuando necesites automatizar la entrega completa desde el repositorio hasta el despliegue.',
			'Usa AWS CodePipeline para coordinar varias etapas y herramientas dentro de un mismo flujo, incluyendo la compilación con AWS CodeBuild.',
		],
		escenarioA:
			'Cada vez que un desarrollador sube código, una etapa de AWS CodeBuild compila el proyecto y ejecuta las pruebas unitarias, y deja el artefacto listo para desplegar.',
		escenarioB:
			'La canalización de AWS CodePipeline toma el código del repositorio, invoca a AWS CodeBuild, ejecuta las pruebas de integración y despliega en producción, deteniéndose si una etapa falla.',
		preguntaIds: ['3.8-q10'],
		objetivos: ['3.8#4', '3.8#11'],
	},
	{
		id: 'connect-vs-ses',
		etiqueta: 'Amazon Connect vs Amazon Simple Email Service (Amazon SES)',
		a: {
			titulo: 'Amazon Connect',
			resumen:
				'Centro de contacto omnicanal en la nube: enruta llamadas, chat y tareas a los agentes, incorpora IVR, grabación y analíticas y se paga por uso sin mantener centralitas propias. Es el canal de voz y chat.',
		},
		b: {
			titulo: 'Amazon Simple Email Service (Amazon SES)',
			resumen:
				'Servicio de envío y recepción de correo electrónico a escala, pensado para correo transaccional y de marketing con alta entregabilidad, sin administrar servidores de correo. Es el canal de email.',
		},
		diferenciaClave:
			'Amazon Connect atiende a los clientes por voz y chat con agentes y enrutamiento; Amazon SES envía y recibe correo electrónico a escala. La elección se hace por el canal que hay que cubrir.',
		cuandoA: [
			'Cuando necesitas atención al cliente con enrutamiento de llamadas, IVR y agentes distribuidos.',
			'Cuando quieres atender voz y chat sin infraestructura telefónica propia.',
		],
		cuandoB: [
			'Cuando una aplicación debe enviar correos transaccionales o de marketing de forma masiva y fiable.',
			'Cuando buscas alta entregabilidad y reputación gestionada sin operar servidores de correo.',
		],
		escenarioA:
			'Una empresa monta un centro de contacto con IVR y agentes que trabajan desde casa para atender las llamadas y el chat de sus clientes.',
		escenarioB:
			'La misma empresa envía a sus clientes los recibos y las confirmaciones de compra por correo electrónico de forma masiva.',
		preguntaIds: ['3.8-q19'],
		objetivos: ['3.8#2', '3.8#9'],
	},
	{
		id: 'soporte-empresarial-vs-planes-menores',
		etiqueta: 'AWS Enterprise Support vs planes de soporte menores',
		a: {
			titulo: 'AWS Enterprise Support',
			resumen:
				'Nivel más alto de asistencia: cobertura para cargas críticas, tiempos de respuesta mínimos, Technical Account Manager (TAM) designado y revisión proactiva de la arquitectura.',
		},
		b: {
			titulo: 'AWS Business Support y AWS Developer Support',
			resumen:
				'AWS Business Support cubre producción 24/7 con AWS Trusted Advisor completo pero sin TAM; AWS Developer Support se orienta a desarrollo y pruebas con soporte por correo en horario laboral. El plan Basic no incluye soporte técnico de producción.',
		},
		diferenciaClave:
			'La cobertura, los tiempos de respuesta y el Technical Account Manager distinguen los planes. Enterprise atiende cargas críticas con TAM; Business cubre producción sin TAM y Developer se limita a desarrollo y pruebas.',
		cuandoA: [
			'Cuando ejecutas cargas críticas que no pueden interrumpirse y necesitas el menor tiempo de respuesta y un interlocutor dedicado.',
			'Cuando quieres revisión proactiva de la arquitectura y un Technical Account Manager que conozca tu entorno.',
		],
		cuandoB: [
			'Cuando tienes producción que requiere cobertura 24/7 pero no un Technical Account Manager.',
			'Cuando solo necesitas soporte para desarrollo y pruebas en horario laboral.',
		],
		escenarioA:
			'Una plataforma de ventas con tráfico continuo contrata AWS Enterprise Support y trabaja con un Technical Account Manager en la revisión de su arquitectura.',
		escenarioB:
			'Una startup en fase de desarrollo usa AWS Developer Support para resolver dudas por correo mientras prepara su primer producto.',
		preguntaIds: ['3.8-q20'],
		objetivos: ['3.8#3', '3.8#10'],
	},
	{
		id: 'amplify-vs-codepipeline',
		etiqueta: 'AWS Amplify vs AWS CodePipeline',
		a: {
			titulo: 'AWS Amplify',
			resumen:
				'Frontend web y móvil: permite crear la interfaz, integrar capacidades como autenticación o APIs y publicar la aplicación con hosting y entrega continua en un flujo guiado.',
		},
		b: {
			titulo: 'AWS CodePipeline',
			resumen:
				'Orquestación genérica de canalizaciones: modela y coordina las etapas de origen, compilación, pruebas y despliegue de cualquier aplicación, encadenando las herramientas implicadas.',
		},
		diferenciaClave:
			'AWS Amplify está especializado en crear y desplegar frontend web y móvil con capacidades integradas; AWS CodePipeline coordina las etapas de una canalización de entrega de propósito general. Una publicación de frontend no es lo mismo que una orquestación de CI/CD.',
		cuandoA: [
			'Cuando quieres lanzar una aplicación web o móvil con autenticación, APIs y hosting sin cablear cada servicio por separado.',
			'Cuando el equipo se centra en el frontend y busca un flujo guiado de despliegue.',
		],
		cuandoB: [
			'Cuando necesitas automatizar la entrega completa desde el repositorio hasta el despliegue.',
			'Cuando hay que coordinar varias etapas y herramientas dentro de un mismo flujo de CI/CD.',
		],
		escenarioA:
			'Una startup publica su aplicación móvil con registro de usuarios y su web de marketing desde el repositorio, con la autenticación y el hosting ya integrados.',
		escenarioB:
			'Un equipo encadena origen, compilación, pruebas y despliegue en una canalización que se detiene si una etapa falla.',
		preguntaIds: ['3.8-q21'],
		objetivos: ['3.8#6', '3.8#13'],
	},
	{
		id: 'iot-core-vs-sqs',
		etiqueta: 'AWS IoT Core vs Amazon Simple Queue Service (Amazon SQS)',
		a: {
			titulo: 'AWS IoT Core',
			resumen:
				'Servicio gestionado que conecta dispositivos IoT con la nube: registra la identidad de cada dispositivo, autentica su conexión, recibe sus mensajes por protocolos ligeros y los enruta a otros servicios con reglas.',
		},
		b: {
			titulo: 'Amazon Simple Queue Service (Amazon SQS)',
			resumen:
				'Cola de mensajes para aplicaciones: el productor deposita el mensaje y un consumidor lo retira para procesarlo, desacoplando ambos lados y permitiendo acumular trabajo y reintentar.',
		},
		diferenciaClave:
			'AWS IoT Core gestiona la identidad, la conexión y los mensajes de una flota de dispositivos; Amazon SQS desacopla el procesamiento de mensajes entre componentes de aplicación. Una cola no administra dispositivos.',
		cuandoA: [
			'Cuando tienes que registrar, autenticar y administrar miles de dispositivos IoT y recibir sus lecturas.',
			'Cuando las lecturas de los dispositivos deben enrutarse a otros servicios mediante reglas.',
		],
		cuandoB: [
			'Cuando quieres desacoplar productor y consumidor y acumular trabajo para procesarlo a su ritmo.',
			'Cuando necesitas reintentar el procesamiento sin perder mensajes.',
		],
		escenarioA:
			'Una fábrica registra cada sensor, autentica su conexión segura y recibe sus lecturas para enrutarlas a un proceso de análisis.',
		escenarioB:
			'El proceso de análisis recibe las lecturas en una cola y las consume a su propio ritmo, sin bloquear a los dispositivos.',
		preguntaIds: ['3.8-q22'],
		objetivos: ['3.8#7', '3.8#14'],
	},
];
