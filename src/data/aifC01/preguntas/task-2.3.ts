import type { PreguntaAifC01 } from '@/data/aifC01/types';

export const preguntasTask23: PreguntaAifC01[] = [
	{
		id: '2.3-q1',
		taskId: '2.3',
		objetivos: ['2.3#1'],
		tipo: 'conocimiento',
		question:
			'Un equipo quiere añadir generación de texto a su aplicación y no dispone de especialistas en aprendizaje automático ni quiere aprovisionar servidores. ¿Qué servicio de AWS permite consumir modelos fundacionales mediante API con capacidades integradas de recuperación y filtrado?',
		options: [
			'Amazon Bedrock.',
			'Amazon SageMaker AI.',
			'Amazon EC2.',
			'Amazon Redshift.',
		],
		correctAnswer: 0,
		explanation:
			'Amazon Bedrock ofrece acceso gestionado por API a modelos fundacionales e integra capacidades como Amazon Bedrock Knowledge Bases y Amazon Bedrock Guardrails. Amazon SageMaker AI se orienta a construir, entrenar y desplegar modelos propios.',
	},
	{
		id: '2.3-q2',
		taskId: '2.3',
		objetivos: ['2.3#1'],
		tipo: 'escenario',
		question:
			'Una empresa debe publicar en pocas semanas un asistente que responda con su documentación interna almacenada en Amazon S3, sin entrenar un modelo propio ni gestionar servidores. ¿Qué enfoque encaja mejor?',
		options: [
			'Entrenar un modelo desde cero en Amazon SageMaker AI con los documentos internos.',
			'Consumir un modelo fundacional en Amazon Bedrock y conectar la documentación mediante Amazon Bedrock Knowledge Bases.',
			'Desplegar el modelo en instancias de Amazon EC2 y gestionar el escalado de forma manual.',
			'Usar Amazon SageMaker JumpStart para reentrenar el modelo con cada documento nuevo.',
		],
		correctAnswer: 1,
		explanation:
			'La recuperación documental sobre un modelo gestionado evita entrenamiento y operación: Amazon Bedrock sirve el modelo y Amazon Bedrock Knowledge Bases conecta la documentación. Entrenar desde cero añade tiempo y datos etiquetados que el caso no requiere.',
	},
	{
		id: '2.3-q3',
		taskId: '2.3',
		objetivos: ['2.3#1'],
		tipo: 'comparacion',
		question:
			'Un equipo necesita ajustar un modelo con sus propios datos y controlar el entorno de entrenamiento y el endpoint de inferencia. Otro equipo solo quiere consumir un modelo por API y usar recuperación documental. ¿Qué afirmación describe mejor la elección entre Amazon Bedrock y Amazon SageMaker AI?',
		options: [
			'Amazon Bedrock sirve modelos gestionados por API; Amazon SageMaker AI permite construir, entrenar, ajustar y desplegar modelos con control del ciclo de vida.',
			'Amazon Bedrock entrena modelos propios y Amazon SageMaker AI solo ofrece modelos de terceros por API.',
			'Ambos servicios son intercambiables porque los dos exponen exactamente los mismos modelos fundacionales.',
			'Amazon SageMaker AI solo sirve para analítica de datos y Amazon Bedrock solo para agentes.',
		],
		correctAnswer: 0,
		explanation:
			'La diferencia clave es quién gestiona el modelo: Bedrock ofrece modelos fundacionales gestionados por API con capacidades integradas; SageMaker AI da control sobre entrenamiento, ajuste y despliegue. No son intercambiables cuando se necesita control del ciclo de vida.',
	},
	{
		id: '2.3-q4',
		taskId: '2.3',
		objetivos: ['2.3#2'],
		tipo: 'conocimiento',
		question:
			'¿Cuál de las siguientes es una ventaja característica de construir aplicaciones de IA generativa con servicios gestionados de AWS?',
		options: [
			'Elimina la necesidad de evaluar la calidad de las respuestas.',
			'Reduce la barrera de entrada porque el equipo no necesita entrenar ni operar el modelo fundacional.',
			'Garantiza que los datos de la empresa estén siempre bien organizados.',
			'Sustituye el control de acceso por las políticas del propio modelo.',
		],
		correctAnswer: 1,
		explanation:
			'Los servicios gestionados evitan entrenar y operar el modelo, lo que baja la barrera de entrada y acelera la entrega. No eliminan la evaluación, la calidad de los datos ni la gestión de permisos, que siguen siendo responsabilidad del equipo.',
	},
	{
		id: '2.3-q5',
		taskId: '2.3',
		objetivos: ['2.3#2'],
		tipo: 'casoDeUso',
		question:
			'Una startup quiere validar en semanas una funcionalidad de resumen de correos y no quiere invertir en infraestructura de cómputo especializado. ¿Qué ventaja de los servicios de IA generativa de AWS está aprovechando principalmente?',
		options: [
			'La velocidad al mercado y la eficiencia de un modelo gestionado que se paga por uso.',
			'La redundancia multirregión obligatoria de todos los servicios gestionados.',
			'La posibilidad de evitar cualquier revisión de seguridad.',
			'La garantía de que el modelo no cometerá errores en los resúmenes.',
		],
		correctAnswer: 0,
		explanation:
			'Al no aprovisionar infraestructura y pagar por consumo, el equipo acorta el tiempo hasta producción y evita inversión inicial. Los servicios gestionados no eximen de revisar la seguridad ni eliminan los errores del modelo.',
	},
	{
		id: '2.3-q6',
		taskId: '2.3',
		objetivos: ['2.3#3'],
		tipo: 'seguridad',
		question:
			'Una empresa debe cifrar con claves propias los datos que alimentan su aplicación de IA generativa y controlar quién puede invocar el modelo. ¿Qué combinación de servicios de AWS responde a esos dos requisitos?',
		options: [
			'AWS Key Management Service (AWS KMS) para el cifrado y AWS Identity and Access Management (IAM) para los permisos.',
			'Amazon CloudFront para el cifrado y Amazon S3 Glacier para los permisos.',
			'AWS Artifact para el cifrado y Amazon Inspector para los permisos.',
			'Amazon Macie para el cifrado y AWS Trusted Advisor para los permisos.',
		],
		correctAnswer: 0,
		explanation:
			'AWS KMS gestiona el cifrado con claves controladas por el cliente y AWS IAM define quién puede invocar el modelo y acceder a los datos. El resto de opciones no cumplen esas funciones.',
	},
	{
		id: '2.3-q7',
		taskId: '2.3',
		objetivos: ['2.3#3'],
		tipo: 'servicio',
		question:
			'El equipo de auditoría solicita los informes de conformidad de AWS y los acuerdos de seguridad vigentes para el proyecto de IA generativa. ¿Qué servicio entrega esa documentación?',
		options: [
			'AWS Artifact.',
			'Amazon Macie.',
			'AWS Config.',
			'Amazon CloudWatch.',
		],
		correctAnswer: 0,
		explanation:
			'AWS Artifact proporciona acceso a informes de conformidad y acuerdos de AWS. AWS Config registra la configuración de los recursos y Amazon Macie descubre datos sensibles; ninguno sustituye la documentación de cumplimiento.',
	},
	{
		id: '2.3-q8',
		taskId: '2.3',
		objetivos: ['2.3#4'],
		tipo: 'tradeoff',
		question:
			'Un equipo observa que las respuestas de su asistente son cada vez más largas y que el coste y la latencia por llamada suben. ¿Qué intercambio describe mejor la situación?',
		options: [
			'Más tokens de salida aportan más detalle, pero aumentan el coste y el tiempo de respuesta.',
			'Más tokens de salida siempre reducen el coste porque el modelo termina antes.',
			'La longitud de la respuesta no influye en el coste cuando se usa un modelo gestionado.',
			'Reducir la longitud de la respuesta elimina por sí sola los errores del modelo.',
		],
		correctAnswer: 0,
		explanation:
			'Con precio por tokens, una salida más extensa se traduce en más consumo y habitualmente en más latencia. Acortar la respuesta abarata y acelera, pero no garantiza por sí sola la ausencia de errores.',
	},
	{
		id: '2.3-q9',
		taskId: '2.3',
		objetivos: ['2.3#4'],
		tipo: 'comparacion',
		question:
			'Una aplicación de clasificación procesa un volumen alto y constante durante toda la jornada, mientras que un asistente interno se usa de forma irregular. ¿Qué afirmación describe mejor la elección entre provisioned throughput y on-demand?',
		options: [
			'Provisioned throughput reserva capacidad para una demanda predecible y estable; on-demand paga por consumo y encaja mejor con un uso irregular.',
			'On-demand reserva capacidad fija y provisioned throughput se paga solo por lo consumido.',
			'Ambos modelos de consumo son idénticos y la elección depende solo del proveedor del modelo.',
			'Provisioned throughput elimina el coste por tokens en cualquier escenario.',
		],
		correctAnswer: 0,
		explanation:
			'Provisioned throughput se orienta a cargas sostenidas y predecibles con capacidad reservada; on-demand factura el consumo real y se adapta a demanda variable. La elección es un intercambio entre compromiso de capacidad y flexibilidad.',
	},
];
