import type { ParConfusionClfC02 } from '@/data/clfC02/types';

export const paresTask37: ParConfusionClfC02[] = [
	{
		id: 'transcribe-vs-polly',
		etiqueta: 'Amazon Transcribe y Amazon Polly: las dos direcciones entre voz y texto',
		a: {
			titulo: 'Amazon Transcribe',
			resumen:
				'Convierte audio en texto (speech-to-text). Se usa para transcribir llamadas o reuniones y para generar subtítulos a partir de una grabación.',
		},
		b: {
			titulo: 'Amazon Polly',
			resumen:
				'Convierte texto en voz (text-to-speech). Se usa para generar locuciones y audio a partir de un texto escrito.',
		},
		diferenciaClave:
			'La dirección del dato es opuesta: Amazon Transcribe recibe audio y devuelve texto; Amazon Polly recibe texto y devuelve audio.',
		cuandoA: [
			'Cuando tienes grabaciones o audio en directo y necesitas el texto para buscar, subtitular o analizar.',
			'Cuando quieres convertir conversaciones en texto para su revisión posterior.',
		],
		cuandoB: [
			'Cuando tienes un texto y necesitas una locución hablada para un producto o una atención automatizada.',
			'Cuando quieres generar audio accesible a partir de contenido escrito.',
		],
		escenarioA:
			'Un contact center quiere transcribir automáticamente sus llamadas grabadas para poder buscarlas y analizarlas después.',
		escenarioB:
			'Una aplicación quiere leer en voz alta las noticias del día al usuario a partir del texto publicado.',
		preguntaIds: ['3.7-q2'],
		objetivos: ['3.7#3'],
	},
	{
		id: 'comprehend-vs-textract',
		etiqueta: 'Amazon Comprehend y Amazon Textract: analizar texto frente a extraerlo de documentos',
		a: {
			titulo: 'Amazon Comprehend',
			resumen:
				'Analiza lenguaje natural sobre texto ya digital: detecta sentimiento, entidades, temas e idioma.',
		},
		b: {
			titulo: 'Amazon Textract',
			resumen:
				'Extrae texto, formularios y tablas de documentos escaneados o imágenes, más allá de un reconocimiento óptico de caracteres básico.',
		},
		diferenciaClave:
			'Amazon Comprehend interpreta texto que ya tienes; Amazon Textract obtiene el texto que está atrapado en una imagen o un documento escaneado.',
		cuandoA: [
			'Cuando ya tienes texto digital y quieres entender su contenido, su tono o sus entidades.',
			'Cuando necesitas clasificar o enrutar comentarios y correos según lo que expresan.',
		],
		cuandoB: [
			'Cuando los documentos llegan escaneados o como imágenes y necesitas sus datos en formato utilizable.',
			'Cuando quieres extraer campos de formularios y tablas de forma automática.',
		],
		escenarioA:
			'Una empresa analiza los comentarios de sus clientes en texto para detectar si la opinión es positiva o negativa.',
		escenarioB:
			'Un departamento digitaliza facturas en papel y necesita extraer automáticamente el número y el importe de cada una.',
		preguntaIds: ['3.7-q3'],
		objetivos: ['3.7#3'],
	},
	{
		id: 'sagemaker-vs-servicios-ia',
		etiqueta: 'Amazon SageMaker AI y los servicios de IA ya entrenados',
		a: {
			titulo: 'Amazon SageMaker AI',
			resumen:
				'Plataforma gestionada para el ciclo completo del aprendizaje automático: preparar datos, entrenar, ajustar y desplegar modelos propios.',
		},
		b: {
			titulo: 'Servicios de IA ya entrenados',
			resumen:
				'APIs que resuelven una tarea concreta sin entrenar un modelo: Amazon Rekognition, Amazon Comprehend, Amazon Textract, Amazon Transcribe, Amazon Polly, Amazon Translate y Amazon Lex.',
		},
		diferenciaClave:
			'Con Amazon SageMaker AI construyes el modelo con tus datos; con los servicios de IA ya entrenados consumes una tarea resuelta por API.',
		cuandoA: [
			'Cuando el problema es específico del negocio y necesitas un modelo propio entrenado con tus datos.',
			'Cuando quieres controlar el entrenamiento, la evaluación y el despliegue del modelo.',
		],
		cuandoB: [
			'Cuando la tarea es estándar (imágenes, texto, voz, traducción o conversación) y no quieres gestionar entrenamiento.',
			'Cuando necesitas un resultado rápido sin equipo de ciencia de datos.',
		],
		escenarioA:
			'Un equipo de datos entrena un modelo para predecir la rotación de clientes con los datos históricos de la empresa.',
		escenarioB:
			'Una aplicación agrega un buscador por palabras clave en imágenes etiquetando automáticamente su contenido sin entrenar nada.',
		preguntaIds: ['3.7-q4'],
		objetivos: ['3.7#3'],
	},
	{
		id: 'athena-vs-glue-vs-kinesis',
		etiqueta: 'Amazon Athena y AWS Glue frente a Amazon Kinesis',
		a: {
			titulo: 'Amazon Athena y AWS Glue',
			resumen:
				'Amazon Athena consulta con SQL datos ya almacenados, por ejemplo en Amazon S3, sin administrar servidores. AWS Glue cataloga los datos y ejecuta trabajos de extracción, transformación y carga (ETL) para prepararlos.',
		},
		b: {
			titulo: 'Amazon Kinesis',
			resumen:
				'Ingiere y procesa datos en streaming, es decir, datos que llegan de forma continua y deben analizarse casi en tiempo real.',
		},
		diferenciaClave:
			'Amazon Athena y AWS Glue trabajan sobre datos ya almacenados (consultar y preparar); Amazon Kinesis trabaja sobre datos en movimiento (ingerir y procesar en tiempo real).',
		cuandoA: [
			'Cuando quieres consultar con SQL un histórico que ya está en Amazon S3 sin montar infraestructura.',
			'Cuando necesitas transformar y catalogar datos antes de analizarlos.',
		],
		cuandoB: [
			'Cuando los datos llegan de forma continua y necesitas procesarlos con baja latencia, como telemetría o eventos.',
			'Cuando quieres calcular métricas sobre un flujo en lugar de sobre un histórico.',
		],
		escenarioA:
			'Una empresa analiza su histórico de ventas guardado en Amazon S3 con consultas SQL puntuales y prepara los datos con trabajos ETL.',
		escenarioB:
			'Una plataforma recibe miles de eventos por segundo y necesita calcular métricas en tiempo real sobre ese flujo continuo.',
		preguntaIds: ['3.7-q8'],
		objetivos: ['3.7#4'],
	},
];
