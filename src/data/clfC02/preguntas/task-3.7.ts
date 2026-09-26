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
			'Amazon Simple Storage Service (Amazon S3)',
		],
		correctAnswer: 1,
		explanation:
			'Amazon Rekognition es un servicio de IA ya entrenado que analiza imágenes y vídeos. Amazon CloudWatch y AWS CloudTrail son servicios de gestión y gobernanza, y Amazon S3 es almacenamiento de objetos. Si el requisito fuera entrenar un modelo propio con datos específicos, el servicio sería la plataforma de aprendizaje automático.',
		porQueOpcion: [
			'Incorrecta: Amazon CloudWatch es un servicio de gestión y supervisión, no analiza imágenes con IA.',
			'Correcta: Amazon Rekognition es un servicio de IA ya entrenado que analiza imágenes y vídeos.',
			'Incorrecta: AWS CloudTrail registra la actividad de la cuenta, no analiza imágenes.',
			'Incorrecta: Amazon S3 es almacenamiento de objetos, no un servicio de análisis de imágenes.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/s3/',
			'https://docs.aws.amazon.com/cloudwatch/',
			'https://docs.aws.amazon.com/rekognition/',
			'https://docs.aws.amazon.com/cloudtrail/',
		],
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
			'Amazon Transcribe convierte voz en texto (speech-to-text) y Amazon Polly convierte texto en voz (text-to-speech). Comprehend analiza texto existente, Lex construye asistentes conversacionales y Translate traduce idiomas. Si cambia la dirección de la conversión —de texto a voz—, el servicio sería Amazon Polly.',
		porQueOpcion: [
			'Incorrecta: invierte los servicios, Polly sintetiza voz y Transcribe convierte audio en texto.',
			'Incorrecta: Comprehend analiza texto existente y Lex construye asistentes; ninguno convierte audio ni genera voz.',
			'Correcta: Amazon Transcribe convierte el audio en texto y Amazon Polly convierte el texto en voz.',
			'Incorrecta: Amazon Translate traduce idiomas y no realiza conversión de voz.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/polly/',
			'https://docs.aws.amazon.com/transcribe/',
			'https://docs.aws.amazon.com/comprehend/',
			'https://docs.aws.amazon.com/lex/',
			'https://docs.aws.amazon.com/translate/',
		],
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
			'Amazon Textract extrae texto, formularios y tablas de documentos escaneados o imágenes, mientras que Amazon Comprehend interpreta lenguaje natural sobre texto ya digital, como el sentimiento. Transcribe y Polly trabajan con voz, y Lex crea asistentes conversacionales. Si el escenario pidiera extraer campos de formularios escaneados, el servicio sería Amazon Textract.',
		porQueOpcion: [
			'Incorrecta: intercambia las tareas, Comprehend no extrae campos de documentos ni Textract analiza sentimiento.',
			'Incorrecta: Transcribe y Polly trabajan con voz, no con documentos ni sentimiento.',
			'Correcta: Amazon Textract extrae datos de los documentos y Amazon Comprehend analiza el sentimiento de los correos.',
			'Incorrecta: Amazon Lex construye asistentes conversacionales y no resuelve ninguna de las dos tareas.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/comprehend/',
			'https://docs.aws.amazon.com/textract/',
			'https://docs.aws.amazon.com/transcribe/',
			'https://docs.aws.amazon.com/polly/',
			'https://docs.aws.amazon.com/lex/',
		],
	},
	{
		id: '3.7-q4',
		taskId: '3.7',
		objetivos: ['3.7#3'],
		tipo: 'comparacion',
		question:
			'Un equipo necesita un modelo propio entrenado con sus datos históricos. ¿Qué opción describe correctamente la diferencia entre una plataforma para construir modelos y los servicios de IA ya entrenados?',
		options: [
			'Amazon SageMaker AI ofrece APIs listas para tareas concretas de imagen y voz, y los servicios de IA ya entrenados son los que permiten entrenar modelos propios.',
			'Amazon SageMaker AI permite construir, entrenar y desplegar modelos propios; los servicios de IA ya entrenados resuelven una tarea concreta sin entrenar un modelo.',
			'Ambos son equivalentes: Amazon SageMaker AI es solo el nombre comercial nuevo de los servicios de IA ya entrenados que existen desde siempre.',
			'Amazon SageMaker AI solo sirve para almacenar y consultar datos, y los servicios de IA ya entrenados para generar las APIs de inferencia.',
		],
		correctAnswer: 1,
		explanation:
			'Amazon SageMaker AI es la plataforma para construir el ciclo completo de un modelo propio: preparar datos, entrenar, ajustar y desplegar. Los servicios de IA ya entrenados exponen una tarea resuelta como API y no requieren entrenamiento. Si el objetivo fuera una tarea estándar, bastaría con un servicio de IA ya entrenado.',
		porQueOpcion: [
			'Incorrecta: intercambia los conceptos, SageMaker es la plataforma y los servicios ya entrenados resuelven tareas concretas.',
			'Correcta: Amazon SageMaker AI construye, entrena y despliega modelos propios, y los servicios de IA ya entrenados resuelven una tarea concreta sin entrenar.',
			'Incorrecta: no son equivalentes, SageMaker AI es una plataforma de modelos propios distinta de los servicios ya entrenados.',
			'Incorrecta: SageMaker AI no es solo almacenar datos y los servicios ya entrenados no generan las APIs de inferencia.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/sagemaker/',
		],
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
			'Amazon Lex es el servicio de IA ya entrenado para construir asistentes conversacionales: comprende el lenguaje natural del usuario y gestiona el diálogo. Polly solo convierte texto en voz, Textract extrae texto de documentos y Translate traduce idiomas. Si el objetivo fuera generar voz a partir de texto, el servicio sería Amazon Polly.',
		porQueOpcion: [
			'Incorrecta: Amazon Polly solo convierte texto en voz y no mantiene una conversación.',
			'Incorrecta: Amazon Textract extrae texto de documentos y no construye asistentes conversacionales.',
			'Incorrecta: Amazon Translate traduce idiomas y no gestiona el diálogo con el cliente.',
			'Correcta: Amazon Lex construye asistentes conversacionales que comprenden el lenguaje natural y gestionan el diálogo.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/polly/',
			'https://docs.aws.amazon.com/textract/',
			'https://docs.aws.amazon.com/translate/',
			'https://docs.aws.amazon.com/lex/',
		],
	},
	{
		id: '3.7-q6',
		taskId: '3.7',
		objetivos: ['3.7#3'],
		tipo: 'servicio',
		question:
			'¿Qué tarea resuelve un servicio de IA ya entrenado que trabaja con imágenes y vídeo?',
		options: [
			'Convertir texto escrito en voz sintetizada para generar locuciones y audio.',
			'Analizar imágenes y vídeos, por ejemplo para detectar objetos, caras o contenido inapropiado.',
			'Traducir texto entre idiomas manteniendo el significado y el tono del original.',
			'Transcribir llamadas y reuniones de voz a texto para su revisión posterior.',
		],
		correctAnswer: 1,
		explanation:
			'Amazon Rekognition analiza imágenes y vídeos para detectar objetos, caras, texto o contenido inapropiado. Convertir texto en voz es Amazon Polly, traducir es Amazon Translate y transcribir voz es Amazon Transcribe. Si el escenario pidiera transcribir audio, el servicio sería Amazon Transcribe.',
		porQueOpcion: [
			'Incorrecta: convertir texto en voz sintetizada es Amazon Polly, no la tarea de análisis de imágenes.',
			'Correcta: analizar imágenes y vídeos, por ejemplo para detectar objetos, caras o contenido inapropiado, es la tarea de Amazon Rekognition.',
			'Incorrecta: traducir texto entre idiomas es Amazon Translate.',
			'Incorrecta: transcribir voz a texto es Amazon Transcribe.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/polly/',
			'https://docs.aws.amazon.com/rekognition/',
			'https://docs.aws.amazon.com/translate/',
			'https://docs.aws.amazon.com/transcribe/',
		],
	},
	{
		id: '3.7-q7',
		taskId: '3.7',
		objetivos: ['3.7#3'],
		tipo: 'tradeoff',
		question:
			'Tu equipo duda entre usar un servicio de IA ya entrenado o construir un modelo propio con una plataforma de aprendizaje automático. ¿Qué criterio es correcto?',
		options: [
			'Si la tarea es estándar conviene un servicio ya entrenado; si necesitas un modelo propio con tus datos y control del entrenamiento, la plataforma de aprendizaje automático.',
			'Siempre hay que entrenar un modelo propio desde cero, aunque exista un servicio ya entrenado que resuelva exactamente esa misma tarea estándar, sin necesidad de datos etiquetados propios ni de controlar el algoritmo.',
			'Los servicios ya entrenados permiten entrenar desde cero con datos propios, ajustar hiperparámetros, evaluar el modelo y desplegarlo, además de controlar el algoritmo empleado.',
			'La plataforma de aprendizaje automático solo se usa cuando no hay ningún dato disponible para el problema planteado y se busca un resultado inmediato sin equipo de ciencia de datos.',
		],
		correctAnswer: 0,
		explanation:
			'El criterio equilibra esfuerzo y necesidad: para una tarea estándar, el servicio ya entrenado evita entrenar y mantener un modelo; para un modelo propio con datos específicos y control del entrenamiento, se usa una plataforma de aprendizaje automático. Si el objetivo fuera una tarea estándar sin datos propios, bastaría con un servicio ya entrenado.',
		porQueOpcion: [
			'Correcta: un servicio ya entrenado conviene para tareas estándar y la plataforma de aprendizaje automático para un modelo propio con control del entrenamiento.',
			'Incorrecta: no siempre hay que entrenar desde cero si existe un servicio ya entrenado que resuelve esa tarea estándar.',
			'Incorrecta: los servicios ya entrenados no permiten entrenar desde cero ni controlar el algoritmo.',
			'Incorrecta: la plataforma de aprendizaje automático se usa para modelos propios con datos, no solo cuando faltan por completo.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/s3/',
		],
	},
	{
		id: '3.7-q8',
		taskId: '3.7',
		objetivos: ['3.7#4'],
		tipo: 'comparacion',
		question:
			'Un equipo tiene datos históricos almacenados en la nube que quiere consultar con SQL y, en paralelo, recibe un flujo continuo de eventos que debe procesar en tiempo real. ¿Qué servicios corresponden?',
		options: [
			'Amazon Kinesis para consultar con SQL los datos históricos almacenados y Amazon Athena para el flujo de eventos en tiempo real.',
			'Amazon Athena para consultar con SQL los datos en Amazon S3 y Amazon Kinesis para ingerir y procesar el flujo en tiempo real.',
			'AWS Glue para consultar con SQL los datos históricos y Amazon Quick Sight para ingerir y procesar el flujo en tiempo real.',
			'Amazon Redshift para ingerir el flujo continuo en tiempo real y AWS Glue para consultar los datos almacenados.',
		],
		correctAnswer: 1,
		explanation:
			'Amazon Athena consulta con SQL datos ya almacenados, por ejemplo en Amazon S3, sin administrar servidores; Amazon Kinesis ingiere y procesa datos en streaming en tiempo real. Glue prepara y cataloga, Quick Sight visualiza y Redshift es un almacén analítico. Si el requisito fuera solo consultar el histórico con SQL, bastaría con Amazon Athena.',
		porQueOpcion: [
			'Incorrecta: intercambia los servicios, Kinesis procesa streaming y Athena consulta datos almacenados.',
			'Correcta: Amazon Athena consulta con SQL los datos en Amazon S3 y Amazon Kinesis ingiere y procesa el flujo en tiempo real.',
			'Incorrecta: Glue prepara y cataloga datos y Quick Sight visualiza; ninguno consulta SQL ni procesa streaming.',
			'Incorrecta: Redshift es un almacén analítico y Glue prepara datos, no cubren esas tareas como se indica.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/kinesis/',
			'https://docs.aws.amazon.com/athena/',
			'https://docs.aws.amazon.com/s3/',
			'https://docs.aws.amazon.com/glue/',
			'https://docs.aws.amazon.com/quicksight/',
			'https://docs.aws.amazon.com/redshift/',
		],
	},
	{
		id: '3.7-q9',
		taskId: '3.7',
		objetivos: ['3.7#4'],
		tipo: 'escenario',
		question:
			'Una empresa necesita preparar y transformar datos de varias fuentes antes de analizarlos, y llevar un catálogo central de esos datos. ¿Qué servicio de analítica encaja mejor?',
		options: [
			'Amazon Polly, que transforma los datos en audio para escucharlos y catalogarlos después.',
			'Amazon Lex, que prepara los datos conversacionales y construye el catálogo central de datos de la empresa.',
			'AWS Artifact, que audita los datos y genera los informes de cumplimiento del catálogo.',
			'AWS Glue, que cataloga los datos y ejecuta trabajos de extracción, transformación y carga (ETL).',
		],
		correctAnswer: 3,
		explanation:
			'AWS Glue descubre y cataloga los datos y ejecuta trabajos ETL para dejarlos listos antes del análisis. Polly y Lex son servicios de IA, y AWS Artifact es un portal de documentación de cumplimiento. Si el requisito fuera procesar un flujo en tiempo real, el servicio sería Amazon Kinesis.',
		porQueOpcion: [
			'Incorrecta: Amazon Polly convierte texto en voz y no prepara ni cataloga datos.',
			'Incorrecta: Amazon Lex construye asistentes conversacionales y no ejecuta ETL ni catálogo.',
			'Incorrecta: AWS Artifact es un portal de documentación de cumplimiento y no procesa datos.',
			'Correcta: AWS Glue cataloga los datos y ejecuta trabajos de extracción, transformación y carga (ETL) para dejarlos listos antes del análisis.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/polly/',
			'https://docs.aws.amazon.com/lex/',
			'https://docs.aws.amazon.com/artifact/',
			'https://docs.aws.amazon.com/glue/',
			'https://docs.aws.amazon.com/kinesis/',
		],
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
			'AWS CloudTrail (registro de actividad de la cuenta)',
			'Amazon Quick Sight',
			'Amazon Aurora',
		],
		correctAnswer: 2,
		explanation:
			'Amazon Quick Sight es el servicio de inteligencia de negocio para crear paneles y visualizaciones sin programar. Transcribe es voz a texto, CloudTrail registra actividad de la cuenta y Aurora es una base de datos relacional. Si el objetivo fuera procesar datos en streaming, el servicio sería Amazon Kinesis.',
		porQueOpcion: [
			'Incorrecta: Amazon Transcribe convierte voz en texto y no crea paneles.',
			'Incorrecta: AWS CloudTrail registra la actividad de la cuenta y no visualiza datos.',
			'Correcta: Amazon Quick Sight es el servicio de inteligencia de negocio para crear paneles y visualizaciones sin programar.',
			'Incorrecta: Amazon Aurora es una base de datos relacional y no una herramienta de paneles.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/transcribe/',
			'https://docs.aws.amazon.com/cloudtrail/',
			'https://docs.aws.amazon.com/quicksight/',
			'https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html',
			'https://docs.aws.amazon.com/kinesis/',
		],
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
			'AWS Shield Advanced (protección DDoS)',
			'Amazon OpenSearch Service',
		],
		correctAnswer: 3,
		explanation:
			'Amazon OpenSearch Service es un servicio de analítica para buscar y explorar registros y texto. Amazon Lex y Amazon Polly son servicios de IA, y AWS Shield es un servicio de seguridad. Si el requisito fuera analizar imágenes, el servicio pertenecería a la categoría de IA/ML.',
		porQueOpcion: [
			'Incorrecta: Amazon Lex es un servicio de IA/ML, no de analítica.',
			'Incorrecta: Amazon Polly es un servicio de IA/ML, no de analítica.',
			'Incorrecta: AWS Shield Advanced pertenece a la categoría de seguridad.',
			'Correcta: Amazon OpenSearch Service es un servicio de analítica para buscar y explorar registros y texto.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/lex/',
			'https://docs.aws.amazon.com/polly/',
			'https://docs.aws.amazon.com/opensearch-service/',
			'https://docs.aws.amazon.com/shield/',
		],
	},
	{
		id: '3.7-q12',
		taskId: '3.7',
		objetivos: ['3.7#2'],
		tipo: 'escenario',
		question:
			'Una empresa acumula terabytes de registros de aplicaciones y necesita buscar y analizar patrones en ellos casi en tiempo real, además de construir visualizaciones para el negocio. Aunque muchos campos de esos registros no se consultan nunca, el equipo es reducido y la latencia de búsqueda importa. ¿Qué combinación de servicios de analítica es la más adecuada?',
		options: [
			'Amazon Textract para los registros y Amazon Polly para las visualizaciones.',
			'Amazon OpenSearch Service para buscar y analizar los registros y Amazon Quick Sight para las visualizaciones.',
			'Amazon Lex para los registros y Amazon Translate para las visualizaciones.',
			'Amazon WorkSpaces para los registros y Amazon AppStream 2.0 para las visualizaciones.',
		],
		correctAnswer: 1,
		explanation:
			'Amazon OpenSearch Service está pensado para buscar y analizar registros y texto, y Amazon Quick Sight aporta los paneles y visualizaciones. Las demás opciones mezclan servicios de IA o de escritorio remoto que no cubren esas tareas. Si el escenario pidiera ingerir eventos en tiempo real, el servicio sería Amazon Kinesis.',
		porQueOpcion: [
			'Incorrecta: Textract extrae texto de documentos y Polly genera voz; no analizan registros ni crean paneles.',
			'Correcta: Amazon OpenSearch Service busca y analiza los registros y Amazon Quick Sight construye las visualizaciones.',
			'Incorrecta: Lex y Translate son servicios de IA y no cubren registros ni paneles.',
			'Incorrecta: WorkSpaces y AppStream 2.0 entregan escritorios y aplicaciones, no analizan registros.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/textract/',
			'https://docs.aws.amazon.com/polly/',
			'https://docs.aws.amazon.com/opensearch-service/',
			'https://docs.aws.amazon.com/quicksight/',
			'https://docs.aws.amazon.com/lex/',
			'https://docs.aws.amazon.com/translate/',
			'https://docs.aws.amazon.com/workspaces/',
			'https://docs.aws.amazon.com/kinesis/',
			'https://docs.aws.amazon.com/appstream2/',
		],
	},
	{
		id: '3.7-q13',
		taskId: '3.7',
		objetivos: ['3.7#1'],
		tipo: 'casoDeUso',
		question:
			'Una aerolínea quiere clasificar automáticamente por sentimiento los comentarios de sus clientes en redes sociales, sin entrenar ningún modelo. ¿Qué tipo de servicio y tarea encaja mejor?',
		options: [
			'Un servicio de IA ya entrenado de análisis de lenguaje natural, que clasifica el sentimiento del texto.',
			'Una plataforma para entrenar un modelo propio de clasificación con datos etiquetados por el equipo.',
			'Un servicio de almacenamiento de objetos que indexe los comentarios y los sirva por API.',
			'Un servicio de analítica que ejecute consultas SQL sobre los comentarios almacenados.',
		],
		correctAnswer: 0,
		explanation:
			'Clasificar sentimiento es una tarea estándar de lenguaje natural que ya resuelve un servicio de IA entrenado, sin necesidad de datos etiquetados ni de entrenamiento. La plataforma de modelos propios se reserva para problemas específicos, y el almacenamiento o la analítica no interpretan el texto. Si el escenario pidiera un modelo propio con datos históricos de la aerolínea, la respuesta sería la plataforma de aprendizaje automático.',
		porQueOpcion: [
			'Correcta: clasificar el sentimiento es una tarea estándar de lenguaje natural que resuelve un servicio de IA ya entrenado sin entrenar ningún modelo.',
			'Incorrecta: una plataforma de modelos propios exige datos etiquetados y entrenamiento, que el escenario descarta.',
			'Incorrecta: el almacenamiento de objetos no interpreta ni clasifica el texto.',
			'Incorrecta: las consultas SQL sobre los comentarios almacenados no detectan sentimiento.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/s3/',
		],
	},
];
