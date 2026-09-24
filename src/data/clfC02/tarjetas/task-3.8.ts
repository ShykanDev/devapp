import type { TarjetaClfC02 } from '@/data/clfC02/types';

export const tarjetasTask38: TarjetaClfC02[] = [
	{
		id: '3.8-t1',
		taskId: '3.8',
		objetivos: ['3.8#1'],
		tipo: 'definicion',
		frente:
			'¿Qué patrón de integración representa cada servicio: Amazon Simple Queue Service (Amazon SQS), Amazon Simple Notification Service (Amazon SNS) y Amazon EventBridge?',
		reverso:
			'Amazon SQS es una cola (el consumidor retira el mensaje, desacopla y acumula trabajo); Amazon SNS es publicación/suscripción (difunde a muchos suscriptores, para alertas y notificaciones); Amazon EventBridge es un bus de eventos (reacciona y enruta según reglas).',
	},
	{
		id: '3.8-t2',
		taskId: '3.8',
		objetivos: ['3.8#8'],
		tipo: 'tradeoff',
		frente:
			'Debes entregar un mensaje a un único consumidor que lo procesará después, avisar de inmediato a muchos suscriptores y reaccionar a eventos de otros servicios. ¿Qué servicios eliges?',
		reverso:
			'Para el trabajo encolado, Amazon Simple Queue Service (Amazon SQS); para la alerta inmediata a varios destinatarios, Amazon Simple Notification Service (Amazon SNS); para reaccionar y enrutar eventos según reglas, Amazon EventBridge. La clave es cola frente a pub/sub frente a bus de eventos.',
	},
	{
		id: '3.8-t3',
		taskId: '3.8',
		objetivos: ['3.8#2'],
		tipo: 'servicio',
		frente: '¿Qué aplicación de negocio cubre la voz y el chat, y cuál el correo electrónico a escala?',
		reverso:
			'Amazon Connect es el centro de contacto omnicanal (llamadas y chat) y Amazon Simple Email Service (Amazon SES) es el servicio de correo electrónico a escala. Se eligen por canal: voz/chat frente a correo.',
	},
	{
		id: '3.8-t4',
		taskId: '3.8',
		objetivos: ['3.8#3', '3.8#10'],
		tipo: 'servicio',
		frente:
			'¿Qué plan de AWS Support conviene a una carga crítica que exige cobertura 24/7 y un Technical Account Manager (TAM)?',
		reverso:
			'AWS Enterprise Support: incluye cobertura para cargas críticas, tiempos de respuesta mínimos y Technical Account Manager (TAM). El plan Basic no tiene soporte de producción, y AWS Business Support cubre producción 24/7 sin TAM.',
	},
	{
		id: '3.8-t5',
		taskId: '3.8',
		objetivos: ['3.8#4', '3.8#11'],
		tipo: 'definicion',
		frente:
			'¿Qué hace cada herramienta de desarrollo: AWS CodeBuild, AWS CodePipeline y AWS X-Ray?',
		reverso:
			'AWS CodeBuild compila, ejecuta pruebas y produce el artefacto; AWS CodePipeline coordina las etapas de la canalización de principio a fin; AWS X-Ray rastrea solicitudes para depurar errores y latencia.',
	},
	{
		id: '3.8-t6',
		taskId: '3.8',
		objetivos: ['3.8#5', '3.8#12'],
		tipo: 'diferencia',
		frente:
			'¿Qué diferencia hay entre Amazon AppStream 2.0, Amazon WorkSpaces y Amazon WorkSpaces Secure Browser?',
		reverso:
			'Amazon AppStream 2.0 publica aplicaciones concretas por streaming; Amazon WorkSpaces entrega un escritorio virtual completo y persistente por usuario; Amazon WorkSpaces Secure Browser ofrece un navegador aislado para acceso web seguro. En los tres, el cómputo corre en AWS.',
	},
	{
		id: '3.8-t7',
		taskId: '3.8',
		objetivos: ['3.8#6', '3.8#13'],
		tipo: 'servicio',
		frente:
			'¿Con qué servicio se crean y despliegan aplicaciones web y móviles integrando autenticación, APIs y hosting?',
		reverso:
			'AWS Amplify: ofrece un flujo guiado para construir el frontend, conectar capacidades y desplegar la aplicación web o móvil, apoyándose por debajo en servicios como Amazon Cognito, Amazon API Gateway, Amazon S3 y Amazon CloudFront.',
	},
	{
		id: '3.8-t8',
		taskId: '3.8',
		objetivos: ['3.8#7', '3.8#14'],
		tipo: 'servicio',
		frente: '¿Qué servicio conecta, autentica y administra dispositivos IoT y recibe sus datos?',
		reverso:
			'AWS IoT Core: registra la identidad de cada dispositivo, autentica su conexión, recibe los mensajes publicados (por ejemplo, con MQTT) y los enruta a otros servicios con reglas, como AWS Lambda o Amazon S3.',
	},
];
