import type { GrupoTematico } from '@/data/clfC02/types';

export const gruposTask37: GrupoTematico[] = [
	{
		id: '3.7-g1',
		titulo: 'Servicios de IA/ML y la tarea que resuelve cada uno',
		objetivos: ['3.7#1', '3.7#3'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'Los servicios de **IA/ML gestionados** de AWS se dividen en dos familias según lo que esperas de ellos:\n\n- **Servicios de IA ya entrenados**: exponen una tarea concreta como API. No entrenas nada; envías datos y recibes el resultado. Por ejemplo, análisis de imágenes y vídeo con **Amazon Rekognition**, análisis de lenguaje natural con **Amazon Comprehend**, extracción de texto de documentos con **Amazon Textract**, voz a texto con **Amazon Transcribe**, texto a voz con **Amazon Polly**, traducción con **Amazon Translate** y asistentes conversacionales con **Amazon Lex**.\n- **Plataforma para construir**: **Amazon SageMaker AI** permite preparar datos, entrenar, ajustar y desplegar modelos propios.\n\nLa pregunta clave no es «qué servicio es más potente», sino **qué tarea resuelve**: si existe un servicio ya entrenado para tu caso, suele ser la vía más rápida; si necesitas un modelo propio, la plataforma de aprendizaje automático.\n\nLa analítica responde a otra pregunta distinta: no interpreta lenguaje ni imágenes, sino que **mueve, transforma y consulta datos** para obtener información de negocio.',
			},
			{
				tipo: 'comparacion',
				parId: 'transcribe-vs-polly',
			},
			{
				tipo: 'comparacion',
				parId: 'comprehend-vs-textract',
			},
			{
				tipo: 'escenario',
				situacion:
					'Un banco quiere un asistente virtual que entienda preguntas escritas en lenguaje natural y responda conversando con el cliente dentro de su aplicación.',
				analisis:
					'La tarea es comprender el lenguaje del usuario y mantener un diálogo con intención definida. Eso es exactamente lo que resuelve **Amazon Lex**, un servicio de IA ya entrenado para asistentes conversacionales; no requiere entrenar un modelo propio.',
				servicio: 'Amazon Lex',
			},
			{
				tipo: 'errorComun',
				error: 'Confundir la dirección de los servicios de voz y texto, o creer que **Amazon SageMaker AI** es un servicio ya entrenado que responde a una tarea concreta.',
				correccion:
					'Cada servicio ya entrenado resuelve una tarea concreta: **Amazon Transcribe** convierte voz en texto y **Amazon Polly** texto en voz; **Amazon Comprehend** interpreta texto y **Amazon Textract** lo extrae de documentos. **Amazon SageMaker AI** es la plataforma para construir modelos propios, no una tarea resuelta.',
			},
			{
				tipo: 'clave',
				items: [
					'Servicios ya entrenados: tarea resuelta por API, sin entrenar (imágenes, texto, voz, traducción, conversación).',
					'Plataforma para construir: **Amazon SageMaker AI** cubre preparar datos, entrenar, ajustar y desplegar.',
					'**Amazon Transcribe** = voz a texto; **Amazon Polly** = texto a voz; son direcciones opuestas.',
					'**Amazon Comprehend** analiza texto existente; **Amazon Textract** extrae texto de documentos escaneados.',
					'La elección se hace por tarea, no por popularidad del servicio.',
				],
			},
		],
		preguntasGuia: [
			'¿Qué dos familias de servicios de IA/ML ofrece AWS y en qué se diferencian?',
			'¿Qué servicio de IA ya entrenado usarías para analizar imágenes, para analizar texto y para convertir voz en texto?',
			'¿Cómo decides entre un servicio de IA ya entrenado y Amazon SageMaker AI?',
		],
	},
	{
		id: '3.7-g2',
		titulo: 'Amazon SageMaker AI frente a los servicios de IA ya entrenados',
		objetivos: ['3.7#3', '3.7#1'],
		bloques: [
			{
				tipo: 'concepto',
				md: '**Amazon SageMaker AI** es la plataforma gestionada para el ciclo de vida del aprendizaje automático: preparar y etiquetar datos, elegir algoritmos, entrenar, ajustar hiperparámetros, evaluar y desplegar el modelo para inferencia. Tú aportas los datos y el problema; AWS gestiona la infraestructura de cómputo y el entorno.\n\nLos **servicios de IA ya entrenados**, en cambio, ya vienen resueltos para una tarea concreta. Si tu necesidad es transcribir audio, analizar sentimiento o detectar objetos en una imagen, no tiene sentido entrenar un modelo desde cero: se usa la API del servicio correspondiente.\n\nLa decisión práctica es: **tarea estándar y sin datos propios → servicio ya entrenado; modelo propio, datos propios y control del entrenamiento → Amazon SageMaker AI**.',
			},
			{
				tipo: 'comparacion',
				parId: 'sagemaker-vs-servicios-ia',
			},
			{
				tipo: 'escenario',
				situacion:
					'Un equipo de datos quiere predecir la rotación de clientes con un modelo entrenado a partir de los datos históricos de la empresa, que son confidenciales y muy específicos del negocio.',
				analisis:
					'No existe un servicio ya entrenado que resuelva esa predicción concreta con esos datos: hace falta construir, entrenar y desplegar un modelo propio. Ese ciclo completo es lo que cubre **Amazon SageMaker AI**.',
				servicio: 'Amazon SageMaker AI',
			},
			{
				tipo: 'errorComun',
				error: 'Creer que **Amazon SageMaker AI** es un servicio de IA ya entrenado que responde a una tarea concreta, o pensar que hay que entrenar un modelo propio aunque exista un servicio ya entrenado para esa tarea.',
				correccion:
					'**Amazon SageMaker AI** es la plataforma para construir y desplegar modelos propios. Si la tarea es estándar (imágenes, voz, texto, traducción), el servicio de IA ya entrenado es la opción directa y de menor esfuerzo.',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Usa un servicio de IA ya entrenado cuando la tarea sea estándar y no quieras gestionar entrenamiento ni datos de entrenamiento.',
					'Usa **Amazon SageMaker AI** cuando necesites un modelo propio, con tus datos, tu algoritmo y control del entrenamiento y del despliegue.',
				],
				noUsar: [
					'No entrenes un modelo propio para una tarea que ya resuelve un servicio gestionado: añade coste, tiempo y mantenimiento.',
					'No uses **Amazon SageMaker AI** como sustituto de la analítica: para consultar y transformar datos están los servicios de analítica.',
				],
			},
		],
		preguntasGuia: [
			'¿Qué cubre Amazon SageMaker AI dentro del ciclo de vida del aprendizaje automático?',
			'¿Cuándo un servicio de IA ya entrenado es mejor opción que entrenar un modelo propio?',
			'¿Qué coste y esfuerzo añades si entrenas un modelo para una tarea que ya tiene servicio gestionado?',
		],
	},
	{
		id: '3.7-g3',
		titulo: 'Analítica de datos: ingerir, preparar y consultar',
		objetivos: ['3.7#2', '3.7#4'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'La analítica de datos en AWS cubre tres momentos distintos, y confundirlos es el error más habitual:\n\n- **Ingesta de flujos**: **Amazon Kinesis** recibe y procesa datos que llegan de forma continua (eventos, telemetría, clics).\n- **Preparación y catálogo**: **AWS Glue** descubre y cataloga los datos y ejecuta trabajos de extracción, transformación y carga (ETL).\n- **Consulta y visualización**: **Amazon Athena** consulta con SQL datos que ya están en **Amazon S3**, sin aprovisionar servidores, y **Amazon Quick Sight** construye paneles y visualizaciones.\n\nUn servicio no sustituye al otro: **Amazon Kinesis** mueve el dato en movimiento, **AWS Glue** lo prepara y organiza, **Amazon Athena** lo consulta y **Amazon Quick Sight** lo presenta. Para volúmenes analíticos grandes y consultas repetidas también existen **Amazon Redshift**, **Amazon EMR** y **Amazon OpenSearch Service**, cada uno con su nicho.',
			},
			{
				tipo: 'comparacion',
				parId: 'athena-vs-glue-vs-kinesis',
			},
			{
				tipo: 'escenario',
				situacion:
					'Una empresa guarda año tras año archivos de registro y de ventas en **Amazon S3**. Quiere hacer preguntas puntuales con SQL sobre ese histórico sin montar ni administrar ningún servidor de base de datos.',
				analisis:
					'**Amazon Athena** consulta directamente los datos que ya están en **Amazon S3** con SQL y sin infraestructura que administrar, por lo que encaja con consultas exploratorias sobre el histórico almacenado.',
				servicio: 'Amazon Athena',
			},
			{
				tipo: 'errorComun',
				error: 'Pensar que **Amazon Kinesis** consulta el histórico almacenado o que **AWS Glue** es un motor de consultas SQL, y usar el servicio equivocado para el momento del dato.',
				correccion:
					'Ordena por momento del dato: **Amazon Kinesis** para el dato en movimiento, **AWS Glue** para preparar y catalogar y **Amazon Athena** para consultar con SQL lo que ya está almacenado. Cada uno resuelve una fase distinta.',
			},
			{
				tipo: 'clave',
				items: [
					'**Amazon Kinesis** = dato en streaming, en tiempo real.',
					'**AWS Glue** = catálogo y trabajos ETL para dejar los datos listos.',
					'**Amazon Athena** = consultas SQL sobre datos ya almacenados, sin servidores.',
					'**Amazon Quick Sight** = visualización y paneles de negocio.',
					'Pregúntate siempre en qué momento está el dato antes de elegir el servicio.',
				],
			},
		],
		preguntasGuia: [
			'¿Qué servicio de analítica usarías para un flujo continuo de eventos y cuál para consultar un histórico con SQL?',
			'¿Qué papel cumple AWS Glue entre el dato almacenado y el análisis?',
			'¿Por qué Amazon Athena no necesita que administres servidores?',
		],
	},
	{
		id: '3.7-g4',
		titulo: 'Almacén, buscador y visualización en analítica',
		objetivos: ['3.7#2'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'Cuando los datos ya están preparados, AWS ofrece servicios de analítica especializados según el tipo de pregunta:\n\n- **Amazon Redshift**: almacén de datos (data warehouse) para consultas analíticas complejas y agregadas sobre grandes volúmenes.\n- **Amazon OpenSearch Service**: motor de búsqueda y análisis de registros y texto, útil para explorar y encontrar patrones en logs.\n- **Amazon EMR**: procesamiento de grandes volúmenes de datos con frameworks distribuidos para transformaciones pesadas.\n- **Amazon Quick Sight**: servicio de inteligencia de negocio para crear paneles y visualizaciones a partir de datos ya preparados, sin programar.\n\nTodos parten de datos que ya existen; la diferencia está en si necesitas un almacén para consultas analíticas, un buscador sobre registros, capacidad de procesamiento masivo o una capa de visualización para el negocio.',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Usa **Amazon Redshift** para un almacén analítico con consultas complejas y repetidas sobre datos estructurados.',
					'Usa **Amazon OpenSearch Service** para buscar y explorar registros y texto, y **Amazon Quick Sight** para paneles de negocio.',
					'Usa **Amazon EMR** cuando necesites procesar grandes volúmenes con cómputo distribuido.',
				],
				noUsar: [
					'No uses un almacén analítico para ingerir un flujo en tiempo real: para eso está el procesamiento de streaming.',
					'No uses una capa de visualización como sustituto del almacenamiento o la preparación de datos.',
				],
			},
			{
				tipo: 'ejemplo',
				md: '```text\nPregunta de negocio -> servicio de analítica\n- Consultas analíticas complejas y repetidas -> Amazon Redshift\n- Buscar patrones en registros y logs     -> Amazon OpenSearch Service\n- Procesamiento masivo distribuido        -> Amazon EMR\n- Panel con gráficos para el negocio      -> Amazon Quick Sight\n```',
			},
		],
		preguntasGuia: [
			'¿Qué diferencia hay entre un almacén analítico y una capa de visualización?',
			'¿Para qué tipo de datos conviene Amazon OpenSearch Service?',
			'¿Cuándo tiene sentido Amazon EMR?',
		],
	},
];
