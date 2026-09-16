import type { GrupoTematico } from '@/data/aifC01/types';

export const gruposTask11: GrupoTematico[] = [
	{
		id: '1.1-g1',
		titulo: 'Términos base de AI y ML',
		objetivos: ['1.1#1'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'La **inteligencia artificial (AI)** es el campo que construye sistemas capaces de hacer tareas que asociamos con la inteligencia humana: percibir, entender lenguaje, decidir o generar contenido. Dentro de ella, el **machine learning (ML)** es el enfoque que aprende patrones a partir de datos en lugar de seguir reglas programadas.\n\nConviene fijar el vocabulario que el examen mezcla:\n\n- **Algoritmo**: el procedimiento de aprendizaje o de decisión (por ejemplo, un árbol de decisión o una red neuronal).\n- **Modelo**: el artefacto entrenado que ya contiene los patrones aprendidos y que se usa para responder.\n- **Red neuronal**: modelo formado por capas de unidades conectadas que ajustan pesos.\n- **Deep learning**: ML con redes neuronales profundas (muchas capas), eficaz en imágenes, audio y texto.\n- **Computer vision**: obtener información de imágenes y vídeo.\n- **NLP**: procesar lenguaje natural, escrito o hablado.\n- **Entrenamiento (training)**: ajustar el modelo con datos.\n- **Inferencia (inferencing)**: usar el modelo entrenado para obtener una respuesta.\n- **Fit**: qué tan bien se ajusta el modelo a los datos (sobreajuste y subajuste).\n- **Bias y fairness**: sesgo sistemático en los datos o en los resultados, y equidad del resultado entre grupos.\n- **LLM**: modelo de lenguaje de gran tamaño entrenado sobre texto masivo.\n- **GenAI**: AI que genera contenido nuevo (texto, imagen, audio, código).\n- **Agentic AI**: sistemas que planifican, usan herramientas y actúan en varios pasos.',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Usa **computer vision** cuando la entrada es una imagen o un vídeo y la salida es una etiqueta, una detección o un texto.',
					'Usa **NLP** cuando el dato es lenguaje (correos, contratos, transcripciones) y necesitas clasificar, extraer o resumir.',
					'Usa **deep learning** cuando hay muchos datos y patrones complejos; con pocos datos, un modelo más simple suele ajustarse mejor.',
				],
				noUsar: [
					'No llames modelo al algoritmo: el algoritmo es el procedimiento y el modelo es el artefacto entrenado.',
					'No uses «entrenamiento» para describir el uso diario: la operación normal de un modelo desplegado es inferencia.',
				],
			},
			{
				tipo: 'errorComun',
				error: 'Decir que «el modelo aprende» cada vez que un usuario le hace una pregunta en producción.',
				correccion:
					'El aprendizaje ocurre en el entrenamiento. En producción solo hay inferencia: el modelo aplica lo ya aprendido y no cambia sus pesos.',
			},
			{
				tipo: 'ejemplo',
				md: '```text\nAlgoritmo: red neuronal convolucional\nEntrenamiento: 20.000 fotos etiquetadas de defectos de fabricación\nModelo: pesos ajustados tras el entrenamiento\nInferencia: una cámara nueva se clasifica como "defecto" o "correcta"\n\nServicios típicos: Amazon Rekognition (imagen), Amazon Comprehend y Amazon Translate (texto), Amazon Transcribe y Amazon Polly (voz).\n```',
			},
		],
		preguntasGuia: [
			'¿Qué distingue un algoritmo de un modelo entrenado?',
			'¿En qué fase cambian los pesos del modelo y en cuál solo se aplican?',
			'¿Qué tipo de dato y de tarea resuelven computer vision y NLP?',
		],
	},
	{
		id: '1.1-g2',
		titulo: 'Cómo se relacionan AI, ML, GenAI, deep learning y agentic AI',
		objetivos: ['1.1#2'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'Estos términos no son sinónimos, sino capas de un mismo conjunto:\n\n- **AI** es el paraguas más amplio: cualquier técnica que imite capacidades humanas, aprenda o no.\n- **ML** es un subconjunto de AI: el sistema aprende patrones a partir de datos.\n- **Deep learning** es un subconjunto de ML: usa redes neuronales profundas.\n- **GenAI** es la parte del deep learning orientada a generar contenido nuevo; se apoya en **LLM** y en modelos multimodales.\n- **Agentic AI** añade a GenAI la capacidad de planificar, invocar herramientas y ejecutar varios pasos hasta un objetivo.\n\nLa relación práctica es de contención y de propósito: lo generativo es deep learning, el deep learning es ML y el ML es AI, pero no al contrario. Un sistema de reglas fijas es AI sin ser ML; un clasificador de imágenes es ML sin ser generativo; un chatbot de texto es GenAI sin ser agente; un agente es GenAI con planificación y herramientas. En AWS, un modelo fundacional se consume desde **Amazon Bedrock** y un agente se construye con **Amazon Bedrock AgentCore** o **Strands Agents**.',
			},
			{
				tipo: 'comparacion',
				parId: 'ai-vs-ml-vs-genai',
			},
			{
				tipo: 'ejemplo',
				md: '```text\nObjetivo: "decidir si un correo es spam"\nReglas fijas -> AI sin ML\nClasificador entrenado con correos etiquetados -> ML sin GenAI\n\nObjetivo: "redactar la respuesta al cliente"\nModelo fundacional que genera texto -> GenAI\nAgente que además consulta el pedido y aplica una política -> Agentic AI\n```',
			},
			{
				tipo: 'clave',
				items: [
					'Contención: GenAI ⊂ deep learning ⊂ ML ⊂ AI.',
					'GenAI genera contenido; agentic AI además planifica y actúa con herramientas.',
					'Un modelo grande no convierte una clasificación en GenAI: lo que define GenAI es generar contenido nuevo.',
				],
			},
		],
		preguntasGuia: [
			'¿Por qué un sistema de reglas puede ser AI sin ser ML?',
			'¿Qué añade un agente a un modelo generativo?',
			'¿Todo modelo de deep learning es GenAI?',
		],
	},
	{
		id: '1.1-g3',
		titulo: 'Tipos de inferencia: batch, real-time, asynchronous y serverless',
		objetivos: ['1.1#3'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'La **inferencia** es el uso del modelo ya entrenado. Se clasifica según cómo llega la petición y cuándo se espera la respuesta:\n\n- **Batch (por lotes)**: se acumulan muchas entradas y se procesan juntas, normalmente de forma programada. Prima el rendimiento y el coste, no la inmediatez.\n- **Real-time (en tiempo real)**: cada petición se responde de inmediato con baja latencia. Es el modo de un chat o de una API interactiva.\n- **Asynchronous (asíncrona)**: se envía la petición, se recibe un identificador y el resultado se consulta después; útil cuando el trabajo tarda o el cliente no puede quedarse bloqueado esperando.\n- **Serverless**: no se gestiona infraestructura; el servicio escala por petición o por evento. Es una forma de despliegue que puede servir tanto a cargas interactivas como a lotes.\n\nLa elección combina latencia esperada, volumen y tolerancia a esperar. Un proceso nocturno de facturación no necesita tiempo real; una búsqueda de producto sí.',
			},
			{
				tipo: 'comparacion',
				parId: 'batch-vs-real-time-inference',
			},
			{
				tipo: 'ejemplo',
				md: '```text\nBatch: cada noche se resume el texto de 50.000 documentos almacenados en Amazon S3\nReal-time: un asistente responde preguntas de un cliente en segundos\nAsíncrona: se solicita la transcripción de un vídeo largo y se recoge el resultado más tarde\nServerless: una función se ejecuta al llegar un archivo nuevo y llama al modelo\n```',
			},
			{
				tipo: 'errorComun',
				error: 'Elegir tiempo real «porque es más moderno» para cargas masivas que nadie está esperando.',
				correccion:
					'El modo debe seguir al requisito: si el resultado se consume más tarde, el procesamiento por lotes suele ser más económico y estable.',
			},
		],
		preguntasGuia: [
			'¿Qué requisito decide entre lote y tiempo real?',
			'¿Cuándo conviene una inferencia asíncrona?',
			'¿Serverless es un tipo de inferencia o una forma de desplegarla?',
		],
	},
	{
		id: '1.1-g4',
		titulo: 'Tipos de datos en modelos de AI',
		objetivos: ['1.1#4'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'El tipo de dato determina la técnica, el almacenamiento y la preparación necesaria:\n\n- **Etiquetados**: cada ejemplo lleva la respuesta correcta (un correo marcado como spam). Habilitan el aprendizaje supervisado.\n- **No etiquetados**: solo la entrada, sin respuesta. Sirven para descubrir estructura, como agrupar clientes de comportamiento similar.\n- **Tabular**: filas y columnas con campos definidos; el formato natural de las bases de datos y de la analítica.\n- **Series temporales**: mediciones ordenadas en el tiempo, donde importan la tendencia y la estacionalidad.\n- **Imagen**: píxeles y estructura espacial; la entrada típica de computer vision.\n- **Texto**: lenguaje natural, de longitud variable y con gramática y contexto.\n- **Estructurado**: encaja en un esquema fijo (tabla o JSON con campos conocidos).\n- **No estructurado**: no tiene esquema rígido (imágenes, audio, PDF, correos).\n\nLa calidad manda: datos mal etiquetados o no representativos producen un modelo sesgado por mucho algoritmo que se use.',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Usa datos **etiquetados** cuando necesitas predecir una categoría o un valor concreto.',
					'Usa datos **no etiquetados** cuando quieres descubrir grupos o anomalías sin respuesta previa.',
					'Usa **series temporales** cuando el orden cronológico forma parte del problema, como la demanda diaria.',
				],
				noUsar: [
					'No apliques modelos tabulares clásicos a texto o imagen sin extraer antes una representación adecuada.',
					'No asumas que más datos no estructurados compensan etiquetas inexactas.',
				],
			},
			{
				tipo: 'errorComun',
				error: 'Confundir «no estructurado» con «inservible» y descartar imágenes o PDF como si no aportaran nada.',
				correccion:
					'Son la entrada principal de muchos casos de uso; lo que falta es preparación: extraer el texto con Amazon Textract o normalizar la imagen antes de usarla.',
			},
			{
				tipo: 'ejemplo',
				md: '```text\nTabular etiquetado: historial de clientes con columna "impago sí/no"\nSerie temporal: consumo eléctrico por hora de un edificio\nImagen no etiquetada: catálogo de fotos sin categoría para agrupar estilos\nTexto no estructurado: comentarios de clientes; Amazon Comprehend extrae el sentimiento\n```',
			},
		],
		preguntasGuia: [
			'¿Qué diferencia hay entre dato etiquetado y no etiquetado?',
			'¿Cuándo una serie temporal exige un tratamiento distinto al de una tabla?',
			'¿Qué preparación necesita un PDF antes de usarse en un modelo?',
		],
	},
	{
		id: '1.1-g5',
		titulo: 'Formas de aprendizaje: supervisado, no supervisado y por refuerzo',
		objetivos: ['1.1#5'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'El aprendizaje describe cómo el modelo obtiene su criterio a partir de los datos:\n\n- **Supervisado**: se entrena con ejemplos etiquetados. Sirve para clasificar (spam o no) y para regresión (precio esperado). Aprende de respuestas conocidas.\n- **No supervisado**: se entrena sin etiquetas y el modelo busca estructura: agrupamientos, relaciones ocultas o puntos anómalos.\n- **Por refuerzo (reinforcement)**: un agente actúa, recibe recompensas o penalizaciones y ajusta su política para maximizar la recompensa acumulada. Se usa en control, robótica y juegos.\n\nLa frontera es sencilla: hay respuesta correcta (supervisado), no hay respuesta pero sí patrones (no supervisado), o la señal es una recompensa por acciones (refuerzo). En la práctica se combinan: un sistema puede agrupar clientes sin etiquetas y después entrenar un clasificador supervisado con los grupos resultantes.',
			},
			{
				tipo: 'comparacion',
				parId: 'supervised-vs-unsupervised',
			},
			{
				tipo: 'ejemplo',
				md: '```text\nSupervisado: predecir si una transacción es fraudulenta, con casos históricos ya marcados\nNo supervisado: agrupar transacciones parecidas para descubrir patrones no etiquetados\nPor refuerzo: un agente ajusta la estrategia de recomendación según la recompensa obtenida\n```',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Supervisado cuando existe histórico etiquetado y una respuesta correcta bien definida.',
					'No supervisado cuando se explora un conjunto nuevo sin etiquetas y se buscan segmentos o anomalías.',
					'Refuerzo cuando hay decisiones secuenciales y una señal de recompensa medible.',
				],
				noUsar: [
					'No uses no supervisado para predecir una etiqueta concreta: no la aprende.',
					'No uses supervisado con etiquetas escasas o poco fiables sin un plan de curación previo.',
				],
			},
		],
		preguntasGuia: [
			'¿Qué tipo de aprendizaje usas si no tienes etiquetas pero quieres descubrir grupos?',
			'¿De qué señal aprende un sistema de aprendizaje por refuerzo?',
			'¿Por qué el aprendizaje supervisado depende de la calidad del etiquetado?',
		],
	},
];
