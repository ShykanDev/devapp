import type { PreguntaAifC01 } from '@/data/aifC01/types';

export const preguntasTask11: PreguntaAifC01[] = [
	{
		id: '1.1-q1',
		taskId: '1.1',
		objetivos: ['1.1#1'],
		tipo: 'conocimiento',
		question:
			'Un científico de datos explica que primero ajustará un procedimiento con datos históricos y después usará el artefacto resultante para puntuar clientes nuevos. ¿Cómo se llaman, respectivamente, esas dos fases?',
		options: [
			'Inferencia y entrenamiento.',
			'Entrenamiento e inferencia.',
			'Entrenamiento y evaluación.',
			'Ajuste de hiperparámetros y despliegue.',
		],
		correctAnswer: 1,
		explanation:
			'El entrenamiento ajusta el modelo con datos y produce el artefacto con los patrones aprendidos; la inferencia usa ese modelo ya entrenado para responder a entradas nuevas.',
	},
	{
		id: '1.1-q2',
		taskId: '1.1',
		objetivos: ['1.1#1'],
		tipo: 'servicio',
		question:
			'Una tienda quiere (a) detectar productos defectuosos en fotos y (b) clasificar comentarios de clientes por tema. ¿Qué par de servicios de AWS encaja mejor, respectivamente?',
		options: [
			'Amazon Comprehend para las fotos y Amazon Rekognition para los comentarios.',
			'Amazon Rekognition para las fotos y Amazon Comprehend para los comentarios.',
			'Amazon Polly para las fotos y Amazon Transcribe para los comentarios.',
			'Amazon Textract para las fotos y Amazon Translate para los comentarios.',
		],
		correctAnswer: 1,
		explanation:
			'Amazon Rekognition cubre computer vision (analizar imágenes) y Amazon Comprehend cubre NLP sobre texto (detectar temas y sentimiento). Polly y Transcribe trabajan con voz, Translate traduce y Textract extrae texto de documentos.',
	},
	{
		id: '1.1-q3',
		taskId: '1.1',
		objetivos: ['1.1#2'],
		tipo: 'comparacion',
		question:
			'Un sistema clasifica correos como spam y no genera ningún texto. Otro redacta respuestas nuevas a partir de una instrucción. ¿Qué afirmación describe mejor la relación entre ML y GenAI?',
		options: [
			'GenAI es un caso de uso de clasificación supervisada sin generación de contenido.',
			'GenAI es un subconjunto del deep learning orientado a generar contenido; clasificar spam puede ser ML sin ser GenAI.',
			'Todo modelo de ML es GenAI porque usa redes neuronales.',
			'ML y GenAI son sinónimos cuando el modelo es grande.',
		],
		correctAnswer: 1,
		explanation:
			'GenAI es la parte del deep learning que produce contenido nuevo, mientras que un clasificador de ML puede predecir una etiqueta sin generar nada. Por eso ML sin GenAI es perfectamente posible.',
	},
	{
		id: '1.1-q4',
		taskId: '1.1',
		objetivos: ['1.1#2'],
		tipo: 'conocimiento',
		question:
			'Un asistente responde preguntas de texto y otro sistema, además, consulta el inventario, aplica una política y crea un pedido. ¿Qué distingue al segundo sistema?',
		options: [
			'Usa un modelo más grande y por eso acierta más.',
			'Planifica varios pasos y usa herramientas externas para actuar, no solo para generar texto.',
			'Genera imágenes además de texto.',
			'No necesita inferencia porque consulta datos reales.',
		],
		correctAnswer: 1,
		explanation:
			'Agentic AI añade a la generación de contenido la planificación y el uso de herramientas para ejecutar acciones. El tamaño del modelo o la modalidad no definen por sí solos a un agente.',
	},
	{
		id: '1.1-q5',
		taskId: '1.1',
		objetivos: ['1.1#3'],
		tipo: 'comparacion',
		question:
			'Se debe procesar cada noche el texto de 40.000 documentos ya almacenados y nadie espera el resultado en el momento. ¿Qué tipo de inferencia encaja y por qué?',
		options: [
			'Real-time, porque siempre es el modo más eficiente.',
			'Batch, porque el trabajo se acumula y se procesa de forma programada sin requisito de inmediatez.',
			'Por refuerzo, porque el modelo mejora con cada documento.',
			'Supervisada, porque los documentos están etiquetados.',
		],
		correctAnswer: 1,
		explanation:
			'La inferencia por lotes agrupa entradas y las procesa de forma programada, priorizando rendimiento y coste. El tiempo real se reserva para cuando un usuario espera la respuesta.',
	},
	{
		id: '1.1-q6',
		taskId: '1.1',
		objetivos: ['1.1#3'],
		tipo: 'tradeoff',
		question:
			'El equipo debate entre inferencia en tiempo real y procesamiento por lotes para un informe interno que se consulta una vez al día. ¿Qué afirmación describe mejor el intercambio?',
		options: [
			'Tiempo real responde al instante, pero encarece y sobredimensiona el sistema si el informe solo se lee una vez al día; el lote gana cuando nadie espera.',
			'Batch siempre tiene menor latencia que tiempo real.',
			'Tiempo real no requiere gestionar capacidad y batch sí.',
			'La elección no afecta al coste, solo a la latencia.',
		],
		correctAnswer: 0,
		explanation:
			'El intercambio enfrenta latencia y coste: el modo interactivo mantiene capacidad disponible para responder ya, mientras el lote puede optimizar el uso de recursos porque no hay usuario esperando.',
	},
	{
		id: '1.1-q7',
		taskId: '1.1',
		objetivos: ['1.1#4'],
		tipo: 'conocimiento',
		question:
			'Un equipo dispone de 30.000 fotos de piezas ya clasificadas como correctas o defectuosas. ¿Qué tipo de datos son y qué aprendizaje habilitan?',
		options: [
			'No etiquetados; habilitan aprendizaje no supervisado.',
			'Estructurados; habilitan regresión.',
			'Etiquetados y no estructurados (imagen); habilitan aprendizaje supervisado.',
			'Series temporales; habilitan detección de anomalías.',
		],
		correctAnswer: 2,
		explanation:
			'Las imágenes no tienen esquema rígido, así que son datos no estructurados, y cada foto lleva su respuesta correcta, de modo que están etiquetadas y permiten aprendizaje supervisado.',
	},
	{
		id: '1.1-q8',
		taskId: '1.1',
		objetivos: ['1.1#4'],
		tipo: 'escenario',
		question:
			'Una empresa quiere extraer importes y fechas de facturas en PDF para cargarlos en una tabla de base de datos. ¿Qué descripción refleja mejor el trabajo?',
		options: [
			'Amazon Textract extrae texto y campos del documento; los valores se normalizan para obtener datos estructurados.',
			'Amazon Polly convierte los PDF en audio y de ahí se extraen las tablas.',
			'Amazon Rekognition lee el texto de los PDF y lo deja ya como datos estructurados.',
			'No hace falta preparación: los PDF ya son datos estructurados.',
		],
		correctAnswer: 0,
		explanation:
			'Amazon Textract está pensado para extraer texto y campos de documentos. El PDF es un dato no estructurado y hay que normalizarlo antes de cargarlo como tabla.',
	},
	{
		id: '1.1-q9',
		taskId: '1.1',
		objetivos: ['1.1#5'],
		tipo: 'comparacion',
		question:
			'Un minorista quiere segmentar clientes por comportamiento sin disponer de etiquetas. Otro equipo quiere predecir impago con un histórico ya marcado. ¿Qué aprendizaje corresponde a cada caso?',
		options: [
			'Supervisado para segmentar y no supervisado para predecir impago.',
			'No supervisado para segmentar y supervisado para predecir impago.',
			'Refuerzo en ambos casos porque hay recompensa.',
			'No supervisado en ambos porque no hay respuestas únicas.',
		],
		correctAnswer: 1,
		explanation:
			'Sin etiquetas solo se puede buscar estructura (no supervisado), mientras que un histórico marcado con el resultado permite aprender la etiqueta (supervisado).',
	},
	{
		id: '1.1-q10',
		taskId: '1.1',
		objetivos: ['1.1#5'],
		tipo: 'conocimiento',
		question:
			'Un sistema ajusta su estrategia de recomendación y recibe una señal numérica según las compras conseguidas. ¿Qué aprendizaje describe este enfoque?',
		options: [
			'Supervisado, porque existe una etiqueta correcta por cliente.',
			'No supervisado, porque no hay etiquetas.',
			'Por refuerzo, porque aprende de recompensas tras tomar decisiones.',
			'Transfer learning, porque reutiliza un modelo previo.',
		],
		correctAnswer: 2,
		explanation:
			'El aprendizaje por refuerzo ajusta una política a partir de recompensas y penalizaciones por las acciones tomadas, no de etiquetas correctas predefinidas.',
	},
];
