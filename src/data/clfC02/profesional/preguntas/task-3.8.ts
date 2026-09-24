import type { PreguntaProfesionalClfC02 } from '@/data/clfC02/profesional/types';

export const profesionalTask38: PreguntaProfesionalClfC02[] = [
	{
		id: 'prof-3.8-q1',
		taskId: '3.8',
		objetivos: ['3.8#1', '3.8#8'],
		tipo: 'comparacion',
		question:
			'Un equipo necesita desacoplar un productor y un consumidor de mensajes y, además, enviar alertas a muchos suscriptores a la vez. ¿Qué servicios corresponden?',
		options: [
			'Amazon SQS para la cola que desacopla productor y consumidor, y Amazon SNS para publicar y notificar a muchos suscriptores.',
			'Amazon SNS para desacoplar mediante una cola y Amazon SQS para notificar a los suscriptores.',
			'Amazon EventBridge para desacoplar con colas y Amazon SNS para consultar bases de datos.',
			'Amazon SQS para publicar y Amazon EventBridge para encolar los mensajes.',
		],
		correctAnswer: 0,
		explanation:
			'Amazon SQS es una cola que desacopla productor y consumidor reteniendo los mensajes, mientras que Amazon SNS es pub/sub y difunde una notificación a muchos suscriptores. Amazon EventBridge encamina eventos entre servicios sin esa función de cola.',
		porQueOpcion: [
			'Correcta: diferencia el desacople por cola de la difusión a suscriptores.',
			'Incorrecto: intercambia las funciones de ambos servicios.',
			'Incorrecto: Amazon EventBridge enruta eventos y Amazon SNS no consulta bases de datos.',
			'Incorrecto: Amazon SQS no publica a suscriptores y Amazon EventBridge no es una cola para consumidores.',
		],
	},
	{
		id: 'prof-3.8-q2',
		taskId: '3.8',
		objetivos: ['3.8#2', '3.8#9'],
		tipo: 'escenario',
		question:
			'Una empresa quiere atender llamadas de clientes con un centro de contacto virtual y, además, enviar correos transaccionales. ¿Qué servicios encajan mejor?',
		options: [
			'Amazon Connect para el centro de contacto y Amazon Simple Email Service (Amazon SES) para el envío de correo.',
			'Amazon Simple Email Service (Amazon SES) para el centro de contacto y Amazon Connect para el correo transaccional.',
			'Amazon SQS para el centro de contacto y Amazon SNS para el correo transaccional.',
			'AWS Support para el centro de contacto y AWS IoT Core para el correo.',
		],
		correctAnswer: 0,
		explanation:
			'Amazon Connect ofrece un centro de contacto en la nube para voz y chat, y Amazon Simple Email Service (Amazon SES) es el servicio de envío de correo. Amazon SQS y Amazon SNS son de integración de aplicaciones, no de atención al cliente.',
		porQueOpcion: [
			'Correcta: asigna cada necesidad de negocio al servicio adecuado.',
			'Incorrecto: intercambia las funciones de Amazon Connect y Amazon SES.',
			'Incorrecto: los servicios de mensajería no atienden llamadas ni envían correo.',
			'Incorrecto: AWS Support presta asistencia técnica y AWS IoT Core gestiona dispositivos.',
		],
	},
	{
		id: 'prof-3.8-q3',
		taskId: '3.8',
		objetivos: ['3.8#3', '3.8#10'],
		tipo: 'servicio',
		question:
			'Una empresa necesita asistencia técnica con tiempos de respuesta acordados y acceso a un Technical Account Manager. ¿Qué opción encaja mejor?',
		options: [
			'Un plan de AWS Support, como AWS Enterprise Support, que ofrece un Technical Account Manager y tiempos de respuesta definidos.',
			'AWS Marketplace, que incluye un Technical Account Manager en todas las compras.',
			'AWS Trusted Advisor, que asigna un Technical Account Manager por cuenta.',
			'AWS Identity and Access Management (IAM), que presta soporte técnico con niveles de servicio.',
		],
		correctAnswer: 0,
		explanation:
			'Los planes de AWS Support escalan el nivel de asistencia; AWS Enterprise Support incluye un Technical Account Manager y tiempos de respuesta acordados. AWS Marketplace es un catálogo de software y AWS Trusted Advisor y AWS IAM no prestan soporte técnico.',
		porQueOpcion: [
			'Correcta: identifica el plan de soporte con Technical Account Manager y tiempos acordados.',
			'Incorrecto: AWS Marketplace comercializa software, no presta soporte con Technical Account Manager.',
			'Incorrecto: AWS Trusted Advisor hace recomendaciones, no asigna un Technical Account Manager.',
			'Incorrecto: AWS IAM gestiona identidades y permisos, no es un canal de soporte.',
		],
	},
	{
		id: 'prof-3.8-q4',
		taskId: '3.8',
		objetivos: ['3.8#4', '3.8#11'],
		tipo: 'comparacion',
		question:
			'Un equipo quiere automatizar la compilación, el despliegue y el rastreo de errores de su aplicación. ¿Qué servicios corresponden?',
		options: [
			'AWS CodeBuild para compilar y ejecutar pruebas, AWS CodePipeline para orquestar el despliegue y AWS X-Ray para rastrear peticiones y diagnosticar errores.',
			'AWS X-Ray para compilar, AWS CodeBuild para desplegar y AWS CodePipeline para el rastreo.',
			'AWS CodePipeline para compilar y AWS X-Ray para desplegar.',
			'Los tres servicios hacen lo mismo y solo cambia el lenguaje de programación.',
		],
		correctAnswer: 0,
		explanation:
			'En las herramientas de desarrollo de AWS, AWS CodeBuild compila y ejecuta pruebas, AWS CodePipeline modela y orquesta las fases de despliegue y AWS X-Ray traza las peticiones para localizar cuellos de botella y errores.',
		porQueOpcion: [
			'Correcta: asigna compilación, orquestación y rastreo a cada servicio.',
			'Incorrecto: intercambia las funciones de los tres servicios.',
			'Incorrecto: AWS CodePipeline no compila y AWS X-Ray no despliega.',
			'Incorrecto: cada servicio cubre una etapa distinta del ciclo de desarrollo.',
		],
	},
	{
		id: 'prof-3.8-q5',
		taskId: '3.8',
		objetivos: ['3.8#5', '3.8#6', '3.8#7', '3.8#12', '3.8#13', '3.8#14'],
		tipo: 'multiConcepto',
		question:
			'Una empresa necesita presentar aplicaciones en los equipos de sus empleados, crear una aplicación móvil y conectar dispositivos de campo a la nube. ¿Qué combinación de servicios es correcta?',
		options: [
			'Amazon WorkSpaces para escritorios virtuales, AWS Amplify para la aplicación móvil y AWS IoT Core para gestionar los dispositivos.',
			'Amazon AppStream 2.0 para gestionar los dispositivos, AWS IoT Core para la aplicación móvil y AWS Amplify para los escritorios.',
			'AWS Amplify para los escritorios, Amazon WorkSpaces para los dispositivos y Amazon AppStream 2.0 para la aplicación móvil.',
			'AWS IoT Core para los escritorios, Amazon AppStream 2.0 para la aplicación móvil y Amazon WorkSpaces para los dispositivos.',
		],
		correctAnswer: 0,
		explanation:
			'Amazon WorkSpaces ofrece escritorios virtuales para los usuarios finales, AWS Amplify es el servicio para crear y desplegar aplicaciones web y móviles, y AWS IoT Core conecta y gestiona dispositivos IoT.',
		porQueOpcion: [
			'Correcta: asigna escritorio virtual, desarrollo móvil y gestión de IoT a cada servicio.',
			'Incorrecto: intercambia las funciones de los tres servicios.',
			'Incorrecto: AWS Amplify no ofrece escritorios ni Amazon WorkSpaces gestiona dispositivos.',
			'Incorrecto: AWS IoT Core no presenta escritorios y Amazon AppStream 2.0 no es la vía de aplicación móvil.',
		],
	},
];
