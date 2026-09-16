import type { GrupoTematico } from '@/data/aifC01/types';

export const gruposTask21: GrupoTematico[] = [
	{
		id: '2.1-g1',
		titulo: 'Tokens, chunking, embeddings y vectores',
		objetivos: ['2.1#1'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'Los modelos generativos no procesan palabras completas: procesan **tokens**, las unidades mínimas de texto que resultan de dividir la entrada con un tokenizador. Un token puede ser una palabra, parte de una palabra o un signo, así que dos textos con el mismo número de caracteres pueden producir distinto número de tokens.\n\nAlrededor del token aparecen los demás conceptos básicos:\n\n- **Chunking**: dividir documentos largos en fragmentos (chunks) para indexarlos y recuperarlos después. Un chunk demasiado grande diluye la búsqueda; uno demasiado pequeño pierde el contexto de la frase.\n- **Embedding**: representación numérica del significado de un fragmento o de una consulta. Textos con significado parecido producen embeddings parecidos.\n- **Vector**: la lista de números que forma ese embedding. La base de datos vectorial los almacena y los busca por similitud.\n\nEl token es la unidad que el modelo procesa y que se factura; el embedding y el vector son la representación con la que se busca por **significado**, no por coincidencia exacta de palabras.',
			},
			{
				tipo: 'comparacion',
				parId: 'embeddings-vs-tokens',
			},
			{
				tipo: 'ejemplo',
				md: '```text\nDocumento: "Política de devoluciones" (12 páginas)\n1. Chunking: 30 fragmentos con solapamiento\n2. Embedding: cada fragmento -> vector de cientos de dimensiones\n3. Consulta: "¿puedo devolver un artículo abierto?" -> embedding de la pregunta\n4. Búsqueda: se comparan vectores y se recuperan los fragmentos más similares\n5. Generación: el modelo responde usando esos fragmentos como contexto\n\nToken: unidad que se procesa y se factura.\nEmbedding: vector que permite buscar por significado.\n```',
			},
		],
		preguntasGuia: [
			'¿Qué es un token y por qué dos textos de tamaño parecido pueden consumir distinto?',
			'¿Para qué sirve el chunking antes de generar embeddings?',
			'¿Qué diferencia hay entre el token y el vector que representa su significado?',
		],
	},
	{
		id: '2.1-g2',
		titulo: 'Modelos transformer, fundacionales, multimodales y de difusión',
		objetivos: ['2.1#1'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'Un **modelo fundacional (FM)** es un modelo grande entrenado sobre datos muy amplios que sirve de base para muchas tareas y puede adaptarse con instrucciones o con un ajuste posterior. La mayoría de los **LLM** actuales se apoyan en la arquitectura **transformer**, cuyo mecanismo de atención relaciona cualquier parte del texto con cualquier otra, lo que permite manejar contextos largos y capturar dependencias lejanas.\n\nSobre esa base se distinguen varias familias:\n\n- **Texto (LLM)**: generan, resumen, traducen, clasifican o escriben código.\n- **Multimodales**: aceptan o producen más de una modalidad (texto, imagen, audio, vídeo). Un modelo multimodal puede describir una imagen o responder preguntas sobre ella.\n- **Difusión (diffusion models)**: generan imágenes, vídeo o audio partiendo de ruido y refinándolo por pasos hasta el resultado. No es la misma técnica que un LLM de texto.\n\nEl FM es el punto de partida; el prompt engineering, el contexto recuperado o el fine-tuning determinan el comportamiento final de la aplicación.',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Elige un modelo **multimodal** cuando la entrada real incluye imágenes, capturas o documentos escaneados.',
					'Elige un modelo de **difusión** cuando el resultado debe ser imagen, vídeo o audio generado.',
					'Elige un **LLM de texto** cuando la tarea es resumir, traducir, clasificar o generar texto y código.',
				],
				noUsar: [
					'No uses un LLM de texto para generar imágenes ni un modelo de difusión para clasificar correos.',
					'No asumas que un FM conoce los datos privados de la empresa: eso se aporta con contexto o con ajuste.',
					'No esperes que cambiar el modelo resuelva un problema de instrucciones o de datos mal preparados.',
				],
			},
			{
				tipo: 'ejemplo',
				md: '```text\nEntrada / resultado -> familia de modelo\n- Preguntas sobre una factura escaneada -> multimodal (imagen + texto)\n- Ilustración para un catálogo          -> difusión\n- Resumen de una reunión                -> LLM de texto\n- Locución a partir de un guion         -> audio generativo\n- Clasificación de incidencias          -> LLM de texto con pocos ejemplos\n```',
			},
		],
		preguntasGuia: [
			'¿Qué característica de la arquitectura transformer permite manejar contextos largos?',
			'¿Qué diferencia a un modelo de difusión de un LLM de texto?',
			'¿Cuándo necesitas un modelo multimodal en lugar de uno de solo texto?',
		],
	},
	{
		id: '2.1-g3',
		titulo: 'Casos de uso de los modelos generativos',
		objetivos: ['2.1#2'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'GenAI aporta valor cuando la tarea consiste en **producir o transformar contenido**, no en calcular un resultado exacto a partir de reglas. Los casos de uso que el examen agrupa:\n\n- **Generación de imagen, vídeo y audio**: creación de material visual, locuciones, música o vídeo a partir de una descripción.\n- **Resumen (summarization)**: condensar reuniones, correos, informes o transcripciones largas.\n- **Asistentes de IA**: interfaces conversacionales que responden, guían y resuelven tareas.\n- **Traducción**: adaptar contenido entre idiomas conservando el sentido.\n- **Generación de código**: escribir, completar, explicar o documentar código.\n- **Agentes de atención al cliente**: atender consultas y resolver incidencias con acceso a sistemas.\n- **Búsqueda**: encontrar respuestas en grandes colecciones de documentos por significado.\n- **Motores de recomendación**: sugerir productos, contenidos o siguientes acciones.\n\nLa elección del caso de uso determina la arquitectura: resumir o traducir exige texto; generar imagen o vídeo exige un modelo multimodal o de difusión; recomendar exige datos de comportamiento y, a menudo, un modelo especializado.',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Cuando el resultado admite variaciones razonables y una persona puede revisarlo antes de usarlo.',
					'Cuando hay volumen de contenido y generar cuesta menos que producirlo a mano.',
					'Cuando existe un modelo o servicio gestionado que cubre la modalidad necesaria.',
				],
				noUsar: [
					'Cuando se exige un resultado exacto y determinista, como una liquidación de impuestos o una nómina.',
					'Cuando revisar cada salida cuesta más que generarla.',
					'Cuando la tarea es una regla fija: un sistema tradicional es más barato y predecible.',
				],
			},
			{
				tipo: 'ejemplo',
				md: '```text\nNecesidad -> caso de uso y servicio afín\n- Resumir llamadas de soporte       -> summarization (Amazon Bedrock)\n- Locuciones para un curso          -> audio generativo (Amazon Polly)\n- Traducir fichas de producto       -> traducción (Amazon Translate)\n- Sugerir productos por historial   -> recomendación (Amazon Personalize)\n- Asistente conversacional de voz   -> asistentes y voz (Amazon Lex)\n- Escribir pruebas unitarias        -> generación de código (Kiro)\n```',
			},
		],
		preguntasGuia: [
			'¿Qué caso de uso de GenAI reduce el tiempo de lectura de transcripciones largas?',
			'¿Qué caso de uso requiere datos de comportamiento del cliente?',
			'¿Cuándo un sistema tradicional es mejor opción que GenAI?',
		],
	},
	{
		id: '2.1-g4',
		titulo: 'El ciclo de vida de un modelo fundacional',
		objetivos: ['2.1#3'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'El **ciclo de vida de un modelo fundacional (FM lifecycle)** describe cómo se pasa de una necesidad de negocio a un modelo en producción que sigue mejorando. Las etapas que el examen agrupa:\n\n- **Selección de datos (data selection)**: qué datos se usan y con qué calidad, licencia y permisos.\n- **Selección del modelo (model selection)**: qué FM encaja en modalidad, coste, latencia y capacidades; puede ser un modelo existente o uno entrenado a medida.\n- **Pre-entrenamiento (pre-training)**: aprendizaje general sobre grandes volúmenes de datos; se hace una vez y es costoso.\n- **Fine-tuning**: ajuste con datos propios para mejorar formato, tono o dominio.\n- **Evaluación (evaluation)**: medir si el modelo cumple el objetivo con datos de prueba y métricas.\n- **Despliegue (deployment)**: publicar el modelo para inferencia, con control de acceso y monitorización.\n- **Retroalimentación (feedback)**: recoger resultados y quejas del uso real para volver a iterar sobre datos, ajuste o evaluación.\n\nEl ciclo no es una línea recta: la mayor parte del trabajo real ocurre en las etapas de datos, evaluación y retroalimentación.',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Selecciona y depura los datos antes de elegir el modelo: su calidad y representatividad condicionan el resultado.',
					'Evalúa con casos representativos del negocio antes de desplegar y vuelve a evaluar tras cada cambio.',
					'Cierra el ciclo con retroalimentación: el uso real revela casos que las pruebas no cubrieron.',
				],
				noUsar: [
					'No empieces por el pre-entrenamiento: rara vez es la etapa que necesita un problema de negocio concreto.',
					'No despliegues sin conjunto de evaluación: sin criterio previo no puedes afirmar que el modelo mejora.',
					'No trates la evaluación como un paso único: el comportamiento cambia cuando cambian los datos o el prompt.',
				],
			},
			{
				tipo: 'ejemplo',
				md: '```text\nCaso: clasificador de reclamaciones de un seguro\n1. Data selection: histórico de reclamaciones etiquetado y depurado\n2. Model selection: modelo de texto ya disponible en Amazon Bedrock\n3. Pre-training: no aplica (se parte de un modelo fundacional existente)\n4. Fine-tuning: opcional si el formato interno no se estabiliza con ejemplos\n5. Evaluation: precisión por categoría con casos reservados\n6. Deployment: endpoint con permisos mínimos y registro de llamadas\n7. Feedback: revisión humana de casos dudosos para la siguiente iteración\n```',
			},
		],
		preguntasGuia: [
			'¿En qué orden se suceden las etapas del ciclo de vida de un FM?',
			'¿Qué etapa devuelve al sistema las lecciones del uso real?',
			'¿Por qué el pre-entrenamiento no es el punto de partida habitual de un caso de negocio?',
		],
	},
	{
		id: '2.1-g5',
		titulo: 'Precio por tokens y su efecto en coste y rendimiento',
		objetivos: ['2.1#4'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'En los servicios de GenAI gestionados, la inferencia se factura por **tokens**, no por petición ni por palabra. Lo que determina el coste de una llamada es:\n\n- **Tokens de entrada**: todo lo que se envía al modelo (instrucción, ejemplos, contexto recuperado, historial de conversación). Crece con cada elemento que añades al prompt.\n- **Tokens de salida**: lo que el modelo genera. Es la parte que implica cómputo paso a paso, así que su tratamiento en el precio es distinto.\n\nDe ahí se derivan dos consecuencias prácticas:\n\n- **Coste**: el gasto escala con el volumen de llamadas y con la longitud media de entrada y de salida. Un asistente que arrastra el historial completo paga cada vez más por la misma pregunta.\n- **Rendimiento**: más tokens de entrada implican más trabajo antes de la primera respuesta, es decir, más latencia; una salida muy larga también tarda más en completarse.\n\nLa **prompt caching** reduce el coste de la parte estable del prompt que se repite en muchas llamadas, y acotar la longitud de salida evita pagar relleno. El precio concreto depende del modelo y de la región, así que la comparación se hace midiendo el consumo real del caso de uso.',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Acota la longitud de salida cuando la respuesta se inserta en un campo o en una interfaz concreta.',
					'Reutiliza la parte estable del prompt con prompt caching si muchas llamadas comparten instrucciones y ejemplos.',
					'Mide el consumo real por caso de uso para decidir el tamaño del contexto y del modelo.',
				],
				noUsar: [
					'No envíes documentos completos e historial ilimitado «por si acaso»: cada token de entrada se paga y añade latencia.',
					'No elijas el modelo por su precio por token aislado: uno barato que exige varias llamadas o más contexto puede salir más caro.',
					'No compares el coste de dos modelos sin medir la longitud de entrada y salida que cada uno necesita.',
				],
			},
			{
				tipo: 'ejemplo',
				md: '```text\nAsistente de soporte, una llamada:\nEntrada: instrucciones + 6 fragmentos recuperados + historial de 10 turnos\nSalida: respuesta de 3 frases\n\nEfecto de dos ajustes:\n- Recortar el historial      -> menos tokens de entrada, menos coste y menos latencia\n- Pedir una salida más larga -> más tokens de salida, más coste y más espera\n```',
			},
		],
		preguntasGuia: [
			'¿Qué dos componentes de una llamada de inferencia se facturan por tokens?',
			'¿Cómo afecta el tamaño del contexto al coste y a la latencia?',
			'¿Qué efecto tiene la prompt caching cuando la parte estable del prompt se repite?',
		],
	},
	{
		id: '2.1-g6',
		titulo: 'Ingeniería de contexto en aplicaciones con FMs',
		objetivos: ['2.1#5'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'La **ingeniería de contexto (context engineering)** es el diseño deliberado de todo lo que ocupa la ventana de contexto del modelo en cada llamada: instrucciones, ejemplos, fragmentos recuperados, resultados de herramientas, memoria de la conversación y el mensaje del usuario.\n\nEl prompt engineering se centra en cómo redactar la instrucción; la ingeniería de contexto añade qué más entra, en qué orden, con qué tamaño y con qué prioridad. En aplicaciones reales sobre un modelo fundacional, la calidad depende menos de una frase brillante que de entregar la información correcta en el momento correcto y de no entregar la equivocada.\n\nLos elementos que se gestionan son:\n\n- **Selección**: qué fragmentos y qué recuerdos son relevantes para esta consulta.\n- **Orden y estructura**: qué va primero, qué se marca como dato y qué como instrucción.\n- **Presupuesto**: cuánto espacio ocupa cada elemento cuando la ventana es limitada.\n- **Actualización**: qué memoria se conserva entre turnos y qué se descarta.\n\nUn contexto mal curado contiene información contradictoria o irrelevante, y el modelo puede ignorar la instrucción para responder con el material sobrante.',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Cuando la aplicación combina instrucciones, documentos recuperados, resultados de herramientas y memoria.',
					'Cuando el contexto crece hasta acercarse al límite de la ventana y hay que priorizar.',
					'Cuando varias fuentes pueden contradecirse y necesitas definir cuál prevalece.',
				],
				noUsar: [
					'No sustituye a la evaluación: un contexto bien ordenado no arregla un modelo inadecuado para la tarea.',
					'No es un sustituto de los controles de seguridad: aunque separes datos de instrucciones, el filtrado y la validación siguen siendo necesarios.',
					'No sirve para compensar datos de mala calidad: ordenarlos mejor no los vuelve correctos.',
				],
			},
			{
				tipo: 'ejemplo',
				md: '```text\nOrden recomendado en una llamada:\n1. Instrucción y formato de salida (parte estable, al principio)\n2. Contexto recuperado, marcado como datos no confiables\n3. Resultado de herramientas\n4. Memoria de la conversación (recortada)\n5. Pregunta del usuario\n\nSi el presupuesto de contexto se agota, se recorta desde el final de la memoria,\nnunca la instrucción ni el formato de salida.\n```',
			},
		],
		preguntasGuia: [
			'¿Qué añade la ingeniería de contexto al prompt engineering?',
			'¿Por qué conviene marcar el contexto recuperado como datos y no como instrucciones?',
			'¿Qué se recorta primero cuando la ventana de contexto se queda corta?',
		],
	},
	{
		id: '2.1-g7',
		titulo: 'Conceptos fundacionales de la IA agéntica',
		objetivos: ['2.1#6'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'Un **agente de IA** es un sistema que usa un modelo fundacional para decidir y actuar: interpreta un objetivo, planifica pasos, invoca **herramientas**, consulta **memoria** y comprueba resultados antes de continuar. Sobre esa base, los conceptos fundacionales de la IA agéntica son:\n\n- **Uso de herramientas (tool usage)**: el agente llama a APIs, bases de datos o servicios internos con permisos acotados.\n- **Gestión de memoria (memory management)**: qué recuerda el agente entre pasos (memoria de trabajo), entre sesiones (memoria a largo plazo) y quién puede verla.\n- **Orquestación de flujos (workflow orchestration)**: el orden, las condiciones de parada y los reintentos de los pasos.\n- **Patrones multi-agente**: varios agentes especializados coordinan trabajo complejo. Los patrones habituales son supervisor o jerárquico (un coordinador reparte tareas), entre iguales (los agentes se pasan trabajo) y por etapas (cada agente añade una parte del resultado).\n- **Patrones de comunicación**: cómo se intercambian información los agentes (mensajes directos, colas, estado compartido) y cómo se evitan bucles y trabajo duplicado.\n- **MCP (Model Context Protocol)**: protocolo que estandariza cómo un agente descubre y usa herramientas y fuentes de datos externas.\n\nEl valor está en automatizar tareas de varios pasos; el riesgo es que el agente **ejecute** una acción equivocada, no solo que escriba un texto incorrecto.',
			},
			{
				tipo: 'comparacion',
				parId: 'agent-vs-workflow',
			},
			{
				tipo: 'comparacion',
				parId: 'mcp-vs-api',
			},
			{
				tipo: 'escenario',
				situacion:
					'Un banco quiere automatizar la tramitación de reclamaciones de tarjeta: leer la reclamación, comprobar la operación en el sistema de pagos, decidir si procede abono o investigación, notificar al cliente y dejar traza de cada paso. El trabajo se reparte entre un agente coordinador y agentes especializados en fraude, facturación y comunicación.',
				analisis:
					'Es un caso de **sistema multi-agente**: cada agente expone herramientas acotadas, comparte un estado común y se comunica mediante mensajes con criterios de parada. En AWS el ciclo de vida del agente se apoya en **Amazon Bedrock AgentCore**, que aporta ejecución aislada por sesión y gestión de identidad, y la conexión con sistemas externos se estandariza con herramientas compatibles con **MCP**. Los permisos mínimos, la memoria aislada por cliente y el registro de cada acción son requisitos de diseño, no extras.',
				servicio: 'Amazon Bedrock AgentCore',
			},
			{
				tipo: 'errorComun',
				error: 'Confundir un agente con un flujo de trabajo y llamar «agente» a cualquier encadenado fijo de llamadas al modelo.',
				correccion:
					'El flujo de trabajo ejecuta pasos predefinidos; el agente decide qué paso sigue según el resultado, con herramientas y memoria. Si la secuencia nunca cambia, un workflow es más barato, predecible y fácil de auditar; el agente solo se justifica cuando hay decisión dinámica.',
			},
			{
				tipo: 'clave',
				items: [
					'Agente = decide y actúa con herramientas y memoria; workflow = secuencia predefinida.',
					'MCP estandariza el acceso a herramientas y datos externos; no sustituye a las APIs ni a los permisos.',
					'En multi-agente, la orquestación, la memoria y los criterios de parada son decisiones de diseño.',
					'Toda acción del agente exige permisos mínimos, aislamiento por sesión y trazabilidad.',
				],
			},
			{
				tipo: 'servicio',
				nombre: 'Amazon Bedrock AgentCore',
			},
		],
		preguntasGuia: [
			'¿Qué distingue a un agente de un flujo de trabajo predefinido?',
			'¿Qué aporta MCP en la conexión del agente con sistemas externos?',
			'¿Por qué la memoria del agente debe aislarse por usuario o sesión?',
			'¿Qué patrón multi-agente reparte tareas desde un coordinador?',
		],
	},
];
