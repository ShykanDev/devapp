import type { PreguntaClfC02 } from '@/data/clfC02/types';

export const preguntasTask37: PreguntaClfC02[] = [
	{
		id: '3.7-q1',
		taskId: '3.7',
		objetivos: ['3.7#1'],
		tipo: 'conocimiento',
		question:
			'¿Cuál de los siguientes servicios de AWS está diseñado específicamente para añadir inteligencia artificial a una aplicación que analiza imágenes?',
		options: [
			'Amazon CloudWatch',
			'Amazon Rekognition',
			'AWS CloudTrail',
			'Amazon S3',
		],
		correctAnswer: 1,
		explanation:
			'Amazon Rekognition es un servicio de IA ya entrenado que analiza imágenes y vídeos. Amazon CloudWatch y AWS CloudTrail son servicios de gestión y gobernanza, y Amazon S3 es almacenamiento de objetos.',
	},
	{
		id: '3.7-q2',
		taskId: '3.7',
		objetivos: ['3.7#3'],
		tipo: 'comparacion',
		question:
			'Un equipo quiere generar subtítulos a partir de grabaciones de audio y, en otro caso, convertir un texto en una locución de voz. ¿Qué servicio corresponde a cada tarea?',
		options: [
			'Amazon Polly convierte el audio en texto y Amazon Transcribe convierte el texto en voz.',
			'Amazon Comprehend convierte el audio en texto y Amazon Lex convierte el texto en voz.',
			'Amazon Transcribe convierte el audio en texto y Amazon Polly convierte el texto en voz.',
			'Ambos casos se resuelven con Amazon Translate.',
		],
		correctAnswer: 2,
		explanation:
			'Amazon Transcribe convierte voz en texto (speech-to-text) y Amazon Polly convierte texto en voz (text-to-speech). Comprehend analiza texto existente, Lex construye asistentes conversacionales y Translate traduce idiomas.',
	},
	{
		id: '3.7-q3',
		taskId: '3.7',
		objetivos: ['3.7#3'],
		tipo: 'comparacion',
		question:
			'Una empresa recibe documentos escaneados y, además, correos en texto plano. Necesita extraer los campos de los documentos y detectar el sentimiento de los correos. ¿Qué servicios corresponden a cada tarea?',
		options: [
			'Amazon Comprehend para extraer los datos de los documentos y Amazon Textract para el sentimiento.',
			'Amazon Transcribe para los documentos y Amazon Polly para los correos.',
			'Amazon Textract para extraer datos de los documentos y Amazon Comprehend para analizar el sentimiento de los correos.',
			'Amazon Lex para ambos casos.',
		],
		correctAnswer: 2,
		explanation:
			'Amazon Textract extrae texto, formularios y tablas de documentos escaneados o imágenes, mientras que Amazon Comprehend interpreta lenguaje natural sobre texto ya digital, como el sentimiento. Transcribe y Polly trabajan con voz, y Lex crea asistentes conversacionales.',
	},
	{
		id: '3.7-q4',
		taskId: '3.7',
		objetivos: ['3.7#3'],
		tipo: 'comparacion',
		question:
			'Un equipo necesita un modelo propio entrenado con sus datos históricos. ¿Qué opción describe correctamente la diferencia entre Amazon SageMaker AI y los servicios de IA ya entrenados?',
		options: [
			'Amazon SageMaker AI ofrece APIs listas para tareas concretas y los servicios de IA ya entrenados permiten entrenar modelos propios.',
			'Amazon SageMaker AI permite construir, entrenar y desplegar modelos propios; los servicios de IA ya entrenados resuelven una tarea concreta sin entrenar un modelo.',
			'Ambos son equivalentes: Amazon SageMaker AI es solo el nombre nuevo de los servicios de IA ya entrenados.',
			'Amazon SageMaker AI solo sirve para almacenar datos y los servicios de IA ya entrenados para consultarlos.',
		],
		correctAnswer: 1,
		explanation:
			'Amazon SageMaker AI es la plataforma para construir el ciclo completo de un modelo propio: preparar datos, entrenar, ajustar y desplegar. Los servicios de IA ya entrenados exponen una tarea resuelta como API y no requieren entrenamiento.',
	},
	{
		id: '3.7-q5',
		taskId: '3.7',
		objetivos: ['3.7#3'],
		tipo: 'escenario',
		question:
			'Un banco quiere un asistente virtual que entienda preguntas en lenguaje natural y responda conversando con el cliente. ¿Qué servicio se ajusta mejor?',
		options: [
			'Amazon Polly',
			'Amazon Textract',
			'Amazon Translate',
			'Amazon Lex',
		],
		correctAnswer: 3,
		explanation:
			'Amazon Lex es el servicio de IA ya entrenado para construir asistentes conversacionales: comprende el lenguaje natural del usuario y gestiona el diálogo. Polly solo convierte texto en voz, Textract extrae texto de documentos y Translate traduce idiomas.',
	},
	{
		id: '3.7-q6',
		taskId: '3.7',
		objetivos: ['3.7#3'],
		tipo: 'servicio',
		question: '¿Qué tarea resuelve Amazon Rekognition?',
		options: [
			'Convertir texto en voz.',
			'Analizar imágenes y vídeos, por ejemplo para detectar objetos, caras o contenido inapropiado.',
			'Traducir texto entre idiomas.',
			'Transcribir llamadas a texto.',
		],
		correctAnswer: 1,
		explanation:
			'Amazon Rekognition analiza imágenes y vídeos para detectar objetos, caras, texto o contenido inapropiado. Convertir texto en voz es Amazon Polly, traducir es Amazon Translate y transcribir voz es Amazon Transcribe.',
	},
	{
		id: '3.7-q7',
		taskId: '3.7',
		objetivos: ['3.7#3'],
		tipo: 'tradeoff',
		question:
			'Tu equipo duda entre usar un servicio de IA ya entrenado o construir un modelo propio con Amazon SageMaker AI. ¿Qué criterio es correcto?',
		options: [
			'Si la tarea es estándar (por ejemplo, transcribir audio o analizar sentimiento) conviene un servicio ya entrenado; si necesitas un modelo propio con tus datos y control del entrenamiento, Amazon SageMaker AI.',
			'Siempre hay que usar Amazon SageMaker AI, aunque exista un servicio ya entrenado para esa tarea.',
			'Los servicios ya entrenados permiten entrenar desde cero con datos propios.',
			'Amazon SageMaker AI solo se usa cuando no hay ningún dato disponible.',
		],
		correctAnswer: 0,
		explanation:
			'El criterio equilibra esfuerzo y necesidad: para una tarea estándar, el servicio ya entrenado evita entrenar y mantener un modelo; para un modelo propio con datos específicos y control del entrenamiento, se usa Amazon SageMaker AI.',
	},
	{
		id: '3.7-q8',
		taskId: '3.7',
		objetivos: ['3.7#4'],
		tipo: 'comparacion',
		question:
			'Un equipo tiene datos históricos en Amazon S3 que quiere consultar con SQL y, en paralelo, recibe un flujo continuo de eventos que debe procesar en tiempo real. ¿Qué servicios corresponden?',
		options: [
			'Amazon Kinesis para consultar los datos históricos y Amazon Athena para el flujo en tiempo real.',
			'Amazon Athena para consultar con SQL los datos en Amazon S3 y Amazon Kinesis para ingerir y procesar el flujo en tiempo real.',
			'AWS Glue para consultar los datos históricos y Amazon Quick Sight para el flujo en tiempo real.',
			'Amazon Redshift para ingerir el flujo y AWS Glue para consultar los datos.',
		],
		correctAnswer: 1,
		explanation:
			'Amazon Athena consulta con SQL datos ya almacenados, por ejemplo en Amazon S3, sin administrar servidores; Amazon Kinesis ingiere y procesa datos en streaming en tiempo real. Glue prepara y cataloga, Quick Sight visualiza y Redshift es un almacén analítico.',
	},
	{
		id: '3.7-q9',
		taskId: '3.7',
		objetivos: ['3.7#4'],
		tipo: 'escenario',
		question:
			'Una empresa necesita preparar y transformar datos de varias fuentes antes de analizarlos, y llevar un catálogo central de esos datos. ¿Qué servicio de analítica encaja mejor?',
		options: [
			'Amazon Polly, que transforma los datos en audio.',
			'Amazon Lex, que prepara los datos conversacionales.',
			'AWS Artifact, que audita los datos.',
			'AWS Glue, que cataloga los datos y ejecuta trabajos de extracción, transformación y carga (ETL).',
		],
		correctAnswer: 3,
		explanation:
			'AWS Glue descubre y cataloga los datos y ejecuta trabajos ETL para dejarlos listos antes del análisis. Polly y Lex son servicios de IA, y AWS Artifact es un portal de documentación de cumplimiento.',
	},
	{
		id: '3.7-q10',
		taskId: '3.7',
		objetivos: ['3.7#4'],
		tipo: 'servicio',
		question:
			'Un analista de negocio quiere crear paneles interactivos con gráficos a partir de datos ya preparados, sin programar. ¿Qué servicio es el adecuado?',
		options: [
			'Amazon Transcribe',
			'AWS CloudTrail',
			'Amazon Quick Sight',
			'Amazon Aurora',
		],
		correctAnswer: 2,
		explanation:
			'Amazon Quick Sight es el servicio de inteligencia de negocio para crear paneles y visualizaciones sin programar. Transcribe es voz a texto, CloudTrail registra actividad de la cuenta y Aurora es una base de datos relacional.',
	},
	{
		id: '3.7-q11',
		taskId: '3.7',
		objetivos: ['3.7#2'],
		tipo: 'conocimiento',
		question: '¿Cuál de estos servicios pertenece a la categoría de analítica de AWS?',
		options: [
			'Amazon Lex',
			'Amazon Polly',
			'AWS Shield',
			'Amazon OpenSearch Service',
		],
		correctAnswer: 3,
		explanation:
			'Amazon OpenSearch Service es un servicio de analítica para buscar y explorar registros y texto. Amazon Lex y Amazon Polly son servicios de IA, y AWS Shield es un servicio de seguridad.',
	},
	{
		id: '3.7-q12',
		taskId: '3.7',
		objetivos: ['3.7#2'],
		tipo: 'escenario',
		question:
			'Una empresa acumula terabytes de registros de aplicaciones y necesita buscar y analizar patrones en ellos casi en tiempo real, además de construir visualizaciones para el negocio. ¿Qué combinación de servicios de analítica es la más adecuada?',
		options: [
			'Amazon Textract para los registros y Amazon Polly para las visualizaciones.',
			'Amazon OpenSearch Service para buscar y analizar los registros y Amazon Quick Sight para las visualizaciones.',
			'Amazon Lex para los registros y Amazon Translate para las visualizaciones.',
			'Amazon WorkSpaces para los registros y Amazon AppStream 2.0 para las visualizaciones.',
		],
		correctAnswer: 1,
		explanation:
			'Amazon OpenSearch Service está pensado para buscar y analizar registros y texto, y Amazon Quick Sight aporta los paneles y visualizaciones. Las demás opciones mezclan servicios de IA o de escritorio remoto que no cubren esas tareas.',
	},
];
