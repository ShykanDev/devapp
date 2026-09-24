import type { PreguntaProfesionalClfC02 } from '@/data/clfC02/profesional/types';

export const profesionalTask37: PreguntaProfesionalClfC02[] = [
	{
		id: 'prof-3.7-q1',
		taskId: '3.7',
		objetivos: ['3.7#1'],
		tipo: 'servicio',
		question: '¿Qué afirmación describe correctamente la familia de servicios de IA/ML de AWS?',
		options: [
			'Amazon SageMaker AI sirve para crear y entrenar modelos, Amazon Lex para asistentes conversacionales y Amazon Rekognition para analizar imágenes y vídeo.',
			'Amazon SageMaker AI es un servicio de analítica de datos y Amazon Lex un almacén de datos.',
			'Todos los servicios de IA/ML de AWS realizan la misma tarea y solo cambia el precio.',
			'Amazon Rekognition analiza audio y Amazon Polly analiza imágenes.',
		],
		correctAnswer: 0,
		explanation:
			'Cada servicio de IA/ML resuelve una tarea concreta: Amazon SageMaker AI para construir y entrenar modelos, Amazon Lex para interfaces conversacionales, Amazon Rekognition para imagen y vídeo, Amazon Polly para texto a voz y Amazon Transcribe para voz a texto.',
		porQueOpcion: [
			'Correcta: asigna a cada servicio la tarea que resuelve.',
			'Incorrecto: confunde servicios de aprendizaje automático con analítica y almacenamiento de datos.',
			'Incorrecto: cada servicio cubre una tarea distinta.',
			'Incorrecto: Amazon Rekognition trabaja con imagen y vídeo y Amazon Polly convierte texto en voz.',
		],
	},
	{
		id: 'prof-3.7-q2',
		taskId: '3.7',
		objetivos: ['3.7#3'],
		tipo: 'comparacion',
		question:
			'Un equipo necesita convertir llamadas de voz en texto y, después, traducirlas a otro idioma. ¿Qué servicios debe usar?',
		options: [
			'Amazon Transcribe para la voz a texto y Amazon Translate para la traducción.',
			'Amazon Polly para la voz a texto y Amazon Transcribe para la traducción.',
			'Amazon Comprehend para la voz a texto y Amazon Polly para la traducción.',
			'Amazon Textract para la voz a texto y Amazon Rekognition para la traducción.',
		],
		correctAnswer: 0,
		explanation:
			'Amazon Transcribe convierte audio en texto y Amazon Translate traduce texto entre idiomas. Amazon Polly hace lo contrario de Amazon Transcribe (texto a voz), y Amazon Comprehend, Amazon Textract y Amazon Rekognition no realizan esas tareas.',
		porQueOpcion: [
			'Correcta: encadena transcripción y traducción con los servicios adecuados.',
			'Incorrecto: Amazon Polly genera voz a partir de texto, no transcribe.',
			'Incorrecto: Amazon Comprehend analiza texto y Amazon Polly genera voz.',
			'Incorrecto: Amazon Textract extrae texto de documentos y Amazon Rekognition analiza imágenes.',
		],
	},
	{
		id: 'prof-3.7-q3',
		taskId: '3.7',
		objetivos: ['3.7#3'],
		tipo: 'escenario',
		question:
			'Una empresa quiere un asistente conversacional que atienda consultas por chat y, por separado, entrenar un modelo propio con sus datos. ¿Qué servicios corresponden?',
		options: [
			'Amazon Lex para el asistente conversacional y Amazon SageMaker AI para entrenar el modelo.',
			'Amazon SageMaker AI para el asistente conversacional y Amazon Lex para entrenar el modelo.',
			'Amazon Polly para el asistente de chat y Amazon Rekognition para el modelo.',
			'AWS Glue para el asistente y Amazon Athena para el modelo.',
		],
		correctAnswer: 0,
		explanation:
			'Amazon Lex construye interfaces conversacionales con voz y texto, y Amazon SageMaker AI es la plataforma para crear, entrenar y desplegar modelos propios. Los demás servicios cumplen tareas distintas.',
		porQueOpcion: [
			'Correcta: asigna conversación y entrenamiento a los servicios correctos.',
			'Incorrecto: intercambia las funciones de ambos servicios.',
			'Incorrecto: Amazon Polly genera voz y Amazon Rekognition analiza imágenes.',
			'Incorrecto: AWS Glue y Amazon Athena son servicios de analítica de datos.',
		],
	},
	{
		id: 'prof-3.7-q4',
		taskId: '3.7',
		objetivos: ['3.7#4'],
		tipo: 'comparacion',
		question:
			'¿Qué distingue a Amazon Athena, AWS Glue y Amazon Kinesis en un flujo de analítica de datos?',
		options: [
			'Amazon Athena consulta datos en Amazon S3 con SQL, AWS Glue cataloga y prepara los datos para ETL y Amazon Kinesis ingiere datos en streaming en tiempo real.',
			'Amazon Athena ingiere datos en streaming y Amazon Kinesis los consulta con SQL.',
			'AWS Glue consulta con SQL y Amazon Athena cataloga los datos.',
			'Los tres son servicios de aprendizaje automático entrenados con imágenes.',
		],
		correctAnswer: 0,
		explanation:
			'En la analítica de AWS, Amazon Athena permite consultar con SQL directamente sobre Amazon S3, AWS Glue actúa como catálogo y motor de ETL, y Amazon Kinesis captura y procesa datos en streaming en tiempo real.',
		porQueOpcion: [
			'Correcta: asigna consulta, preparación e ingesta en streaming a cada servicio.',
			'Incorrecto: invierte consulta y streaming.',
			'Incorrecto: invierte catálogo y consulta.',
			'Incorrecto: ninguno es un servicio de análisis de imágenes.',
		],
	},
	{
		id: 'prof-3.7-q5',
		taskId: '3.7',
		objetivos: ['3.7#2', '3.7#4'],
		tipo: 'servicio',
		question:
			'Un gerente quiere paneles y visualizaciones interactivas construidos sobre datos almacenados en AWS. ¿Qué servicio encaja mejor?',
		options: [
			'Amazon Quick Sight, porque crea paneles y visualizaciones a partir de los datos.',
			'AWS Glue, porque es el servicio de visualización de AWS.',
			'Amazon Kinesis, porque genera paneles interactivos de streaming.',
			'Amazon SageMaker AI, porque está diseñado para crear paneles.',
		],
		correctAnswer: 0,
		explanation:
			'Amazon Quick Sight es el servicio de inteligencia de negocio que crea paneles y visualizaciones sobre los datos. AWS Glue prepara y cataloga datos, Amazon Kinesis procesa streaming y Amazon SageMaker AI entrena modelos.',
		porQueOpcion: [
			'Correcta: asigna la visualización al servicio de inteligencia de negocio.',
			'Incorrecto: AWS Glue es un catálogo y motor de ETL, no de visualización.',
			'Incorrecto: Amazon Kinesis procesa datos en streaming, no crea paneles.',
			'Incorrecto: Amazon SageMaker AI sirve para entrenar y desplegar modelos.',
		],
	},
];
