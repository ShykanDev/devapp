import type { PreguntaAifC01 } from '@/data/aifC01/types';

export const preguntasTask21: PreguntaAifC01[] = [
	{
		id: '2.1-q1',
		taskId: '2.1',
		objetivos: ['2.1#1'],
		tipo: 'conocimiento',
		question:
			'Un equipo va a indexar un manual de 300 páginas para que un asistente recupere fragmentos relevantes. Antes de generar los embeddings, divide el documento en fragmentos con solapamiento. ¿Qué concepto describe ese paso?',
		options: [
			'Tokenización del documento completo en un único vector.',
			'Chunking, es decir, la división del documento en fragmentos manejables.',
			'Difusión, porque el documento se reconstruye por pasos.',
			'Fine-tuning, porque el modelo aprende el contenido del manual.',
		],
		correctAnswer: 1,
		explanation:
			'El chunking divide documentos largos en fragmentos que después se convierten en embeddings y se indexan. Un chunk demasiado grande diluye la búsqueda; uno demasiado pequeño pierde el contexto necesario para responder.',
	},
	{
		id: '2.1-q2',
		taskId: '2.1',
		objetivos: ['2.1#1'],
		tipo: 'comparacion',
		question:
			'Un desarrollador afirma que un token y un embedding son lo mismo porque ambos representan texto. ¿Cuál es la diferencia correcta entre ellos?',
		options: [
			'El token es una unidad de texto que el modelo procesa y se factura; el embedding es un vector numérico que representa su significado y permite buscar por similitud.',
			'El embedding es la unidad de facturación y el token es la representación vectorial del significado.',
			'Ambos son vectores del mismo tamaño; solo cambia el nombre según el proveedor.',
			'El token solo existe en modelos multimodales y el embedding solo en modelos de texto.',
		],
		correctAnswer: 0,
		explanation:
			'El token es la unidad de procesamiento y de precio; el embedding es la representación vectorial que permite comparar significados. Un texto se divide en tokens al enviarse al modelo, pero se convierte en embeddings para la búsqueda semántica.',
	},
	{
		id: '2.1-q3',
		taskId: '2.1',
		objetivos: ['2.1#2'],
		tipo: 'conocimiento',
		question:
			'Una empresa recibe miles de llamadas de soporte al día y quiere que los supervisores revisen solo lo importante. ¿Qué caso de uso de GenAI encaja de forma más directa?',
		options: [
			'Cálculo determinista del importe de la nómina de cada empleado.',
			'Resumen automático de las transcripciones para condensar cada llamada en pocos puntos.',
			'Clasificación de imágenes de producto por categoría con un modelo de difusión.',
			'Auditoría contable con reglas fijas y sin intervención de lenguaje natural.',
		],
		correctAnswer: 1,
		explanation:
			'El resumen (summarization) es un caso de uso central de GenAI: transforma contenido largo en una versión breve sin exigir un resultado exacto. Los cálculos deterministas y las reglas fijas no son tareas generativas.',
	},
	{
		id: '2.1-q4',
		taskId: '2.1',
		objetivos: ['2.1#2'],
		tipo: 'casoDeUso',
		question:
			'Un equipo de desarrollo quiere reducir el tiempo dedicado a escribir pruebas unitarias y documentación a partir del código existente. ¿Qué caso de uso de GenAI describe la situación?',
		options: [
			'Generación de código y documentación técnica a partir de una base de código.',
			'Detección de fraude en transacciones con modelos de regresión.',
			'Segmentación de clientes por comportamiento de compra.',
			'Recomendación de productos por historial de navegación.',
		],
		correctAnswer: 0,
		explanation:
			'La generación de código cubre escribir, completar, explicar y documentar código. La detección de fraude, la segmentación y la recomendación son otros casos de uso y suelen apoyarse en modelos o servicios distintos.',
	},
	{
		id: '2.1-q5',
		taskId: '2.1',
		objetivos: ['2.1#3'],
		tipo: 'conocimiento',
		question:
			'¿Cuál de estas secuencias refleja mejor las etapas del ciclo de vida de un modelo fundacional?',
		options: [
			'Despliegue, selección de datos, pre-entrenamiento, evaluación, selección del modelo, retroalimentación.',
			'Selección de datos, selección del modelo, pre-entrenamiento, fine-tuning, evaluación, despliegue y retroalimentación.',
			'Fine-tuning, despliegue, selección de datos, retroalimentación, pre-entrenamiento, evaluación.',
			'Evaluación, despliegue, pre-entrenamiento, selección de datos, retroalimentación, fine-tuning.',
		],
		correctAnswer: 1,
		explanation:
			'El ciclo parte de los datos, continúa con la elección del modelo, el pre-entrenamiento y el ajuste, se valida en la evaluación, se publica en el despliegue y se cierra con la retroalimentación del uso real.',
	},
	{
		id: '2.1-q6',
		taskId: '2.1',
		objetivos: ['2.1#3'],
		tipo: 'escenario',
		question:
			'Un modelo fundacional ya está en producción y fue evaluado antes de desplegarse. Tres meses después, los usuarios reportan que las respuestas ignoran cambios recientes del catálogo de productos. ¿Qué etapa del ciclo de vida conviene reforzar?',
		options: [
			'El pre-entrenamiento del modelo desde cero.',
			'La retroalimentación y la re-evaluación para actualizar datos y contexto con el uso real.',
			'La selección del modelo, porque el modelo elegido es inadecuado.',
			'El despliegue, porque la publicación no se completó correctamente.',
		],
		correctAnswer: 1,
		explanation:
			'La retroalimentación cierra el ciclo: el uso real revela que la información ha cambiado y obliga a revisar los datos y el contexto y a volver a evaluar. El comportamiento no se corrige repitiendo el pre-entrenamiento ni cambiando de modelo sin evidencia.',
	},
	{
		id: '2.1-q7',
		taskId: '2.1',
		objetivos: ['2.1#4'],
		tipo: 'conocimiento',
		question:
			'En el modelo de precios por tokens de los servicios de GenAI gestionados, ¿qué dos componentes de una llamada de inferencia determinan el consumo?',
		options: [
			'El número de parámetros del modelo y el tamaño del archivo del modelo.',
			'Los tokens de entrada que se envían y los tokens de salida que el modelo genera.',
			'El número de usuarios activos y el tiempo de sesión.',
			'El espacio de almacenamiento del índice vectorial y el número de documentos.',
		],
		correctAnswer: 1,
		explanation:
			'La facturación se basa en los tokens de entrada (instrucción, ejemplos, contexto, historial) y en los tokens de salida generados. Ambos crecen con el uso y afectan también a la latencia.',
	},
	{
		id: '2.1-q8',
		taskId: '2.1',
		objetivos: ['2.1#4'],
		tipo: 'tradeoff',
		question:
			'Un equipo debate cómo mejorar un asistente. Una opción es añadir más ejemplos y contexto a cada llamada; la otra es mantener un prompt mínimo. ¿Qué afirmación describe mejor el intercambio?',
		options: [
			'Más tokens de entrada aportan más contexto al modelo, pero elevan el coste por llamada y la latencia; la longitud de salida también se factura.',
			'Añadir contexto reduce siempre el coste, porque el modelo necesita menos pasos para responder.',
			'El coste depende solo del número de llamadas, así que el tamaño del prompt es irrelevante.',
			'Reducir el prompt no tiene ningún efecto sobre la calidad de la respuesta.',
		],
		correctAnswer: 0,
		explanation:
			'Existe un intercambio entre contexto, coste y latencia: más tokens de entrada mejoran la información disponible pero se pagan y aumentan el tiempo de respuesta. El coste no depende solo del número de llamadas y recortar el prompt sí puede afectar a la calidad.',
	},
	{
		id: '2.1-q9',
		taskId: '2.1',
		objetivos: ['2.1#5'],
		tipo: 'conocimiento',
		question:
			'¿Qué describe mejor la ingeniería de contexto en una aplicación basada en modelos fundacionales?',
		options: [
			'Entrenar el modelo con los datos internos de la organización.',
			'Decidir qué información entra en la ventana de contexto, en qué orden, con qué tamaño y con qué prioridad, más allá de redactar la instrucción.',
			'Comprimir el modelo para que quepa en menos memoria.',
			'Cifrar el contexto para que no sea visible para el modelo.',
		],
		correctAnswer: 1,
		explanation:
			'La ingeniería de contexto gestiona el conjunto de la información que recibe el modelo en cada llamada: instrucciones, fragmentos recuperados, resultados de herramientas y memoria. No entrena ni comprime el modelo y no sustituye a los controles de seguridad.',
	},
	{
		id: '2.1-q10',
		taskId: '2.1',
		objetivos: ['2.1#5'],
		tipo: 'servicio',
		question:
			'Una empresa quiere que su asistente responda con documentación interna actualizada y respetando los permisos de cada departamento, sin reentrenar el modelo cada vez. ¿Qué capacidad gestionada encaja mejor con el diseño del contexto?',
		options: [
			'Amazon Bedrock Guardrails, para filtrar el contenido generado.',
			'Amazon Bedrock Knowledge Bases, para indexar las fuentes y recuperar los fragmentos pertinentes en cada consulta.',
			'Amazon SageMaker JumpStart, para desplegar un modelo preentrenado.',
			'AWS Glue DataBrew, para limpiar y normalizar los datos.',
		],
		correctAnswer: 1,
		explanation:
			'Knowledge Bases conecta las fuentes de datos con la recuperación de fragmentos y los entrega como contexto en la llamada, de modo que la información se actualiza sin reentrenar. Guardrails filtra contenido, JumpStart sirve modelos y DataBrew prepara datos, pero ninguno aporta el contexto documental en tiempo de consulta.',
	},
	{
		id: '2.1-q11',
		taskId: '2.1',
		objetivos: ['2.1#6'],
		tipo: 'comparacion',
		question:
			'Un equipo construye un sistema de resolución de incidencias que debe decidir en cada caso si consulta el contrato, pide más datos, emite un abono o escala a una persona, según lo que va descubriendo. ¿Qué enfoque describe este diseño?',
		options: [
			'Un flujo de trabajo predefinido, porque los pasos están escritos en el diseño.',
			'Un agente de IA, porque la ruta se decide en ejecución con herramientas y memoria según el resultado de cada acción.',
			'Un modelo de difusión, porque genera varias alternativas por pasos.',
			'Un proceso de pre-entrenamiento, porque el sistema aprende de cada incidencia.',
		],
		correctAnswer: 1,
		explanation:
			'La ruta no está fijada de antemano: el sistema decide qué paso sigue en función de lo que encuentra, invocando herramientas y manteniendo memoria. Eso es un agente; un flujo de trabajo ejecutaría una secuencia predefinida.',
	},
	{
		id: '2.1-q12',
		taskId: '2.1',
		objetivos: ['2.1#6'],
		tipo: 'escenario',
		question:
			'Un banco despliega un sistema multi-agente con un coordinador que reparte tareas entre agentes de fraude, facturación y comunicación. En las pruebas, dos agentes se reenvían la misma tarea en bucle y repiten acciones. ¿Qué aspecto del diseño conviene revisar primero?',
		options: [
			'El pre-entrenamiento del modelo, porque los agentes no conocen el dominio.',
			'La temperatura de inferencia, porque un valor bajo provoca bucles.',
			'Los patrones de comunicación y la orquestación: criterios de parada, límite de iteraciones y responsabilidad de cada agente.',
			'El cifrado de la memoria, porque los agentes no comparten estado.',
		],
		correctAnswer: 2,
		explanation:
			'Los bucles y las acciones duplicadas son un problema de orquestación y de comunicación entre agentes: falta un criterio de parada, un límite de iteraciones o una responsabilidad única por tarea. La temperatura y el pre-entrenamiento no explican ese comportamiento.',
	},
	{
		id: '2.1-q13',
		taskId: '2.1',
		objetivos: ['2.1#6'],
		tipo: 'comparacion',
		question:
			'Un agente debe conectarse a un CRM, a una base de datos de pedidos y a un buscador interno. El equipo quiere añadir nuevas herramientas en el futuro sin reescribir la lógica del agente. ¿Qué aporta el uso de MCP frente a integrar cada sistema con una API a medida?',
		options: [
			'Un mecanismo estandarizado para que el agente descubra y use herramientas y datos externos de forma uniforme, reduciendo integraciones específicas.',
			'Elimina la necesidad de autenticar y autorizar el acceso a los sistemas externos.',
			'Sustituye a las APIs de los sistemas, que dejan de ser necesarias.',
			'Garantiza que el agente nunca ejecute una acción incorrecta.',
		],
		correctAnswer: 0,
		explanation:
			'MCP define cómo se exponen y consumen capacidades externas, de modo que el agente reutiliza el mismo patrón con distintos servidores. No elimina las APIs ni los permisos, y no sustituye los controles que evitan acciones incorrectas.',
	},
	{
		id: '2.1-q14',
		taskId: '2.1',
		objetivos: ['2.1#1'],
		tipo: 'conocimiento',
		question:
			'Un modelo recibe una fotografía junto con un texto y devuelve una descripción combinada. Otro modelo parte de una instrucción de texto y genera una imagen nueva a partir de ruido. ¿Qué conceptos describen respectivamente a ambos modelos?',
		options: [
			'El primero es un modelo de difusión y el segundo un modelo multimodal.',
			'Ambos son modelos multimodales, porque los dos procesan imágenes.',
			'El primero es un modelo multimodal y el segundo un modelo de difusión.',
			'El primero es un transformer de solo texto y el segundo un embedding.',
		],
		correctAnswer: 2,
		explanation:
			'Un modelo multimodal procesa y combina más de una modalidad, como imagen y texto. Un modelo de difusión genera contenido nuevo, por ejemplo imágenes, partiendo de ruido guiado por la instrucción, y puede ser a su vez multimodal.',
	},
	{
		id: '2.1-q15',
		taskId: '2.1',
		objetivos: ['2.1#2'],
		tipo: 'casoDeUso',
		question:
			'Una empresa de comercio electrónico quiere traducir automáticamente las fichas de producto a diez idiomas y, además, devolver resultados de búsqueda acordes con la intención de cada consulta. ¿Qué casos de uso de GenAI cubren estas dos necesidades?',
		options: [
			'Traducción automática y búsqueda semántica.',
			'Detección de fraude y segmentación de clientes.',
			'Resumen de documentos y generación de código.',
			'Clasificación de imágenes y auditoría contable.',
		],
		correctAnswer: 0,
		explanation:
			'La traducción y la búsqueda son casos de uso reconocidos de GenAI: la primera convierte contenido entre idiomas y la segunda interpreta la intención de la consulta. La detección de fraude o la auditoría contable se apoyan en enfoques distintos.',
	},
	{
		id: '2.1-q16',
		taskId: '2.1',
		objetivos: ['2.1#3'],
		tipo: 'escenario',
		question:
			'Un equipo recibe un modelo fundacional, lo ajusta con datos propios y lo publica de inmediato para cumplir una fecha. Semanas después no puede demostrar si las respuestas mejoraron ni compararlas con la versión anterior. ¿Qué etapa del ciclo de vida omitió y conviene formalizar?',
		options: [
			'La selección de datos, porque no había datos disponibles.',
			'El pre-entrenamiento, porque el modelo base no estaba entrenado.',
			'La retroalimentación de los usuarios finales.',
			'La evaluación, que compara el modelo ajustado con una línea base antes de desplegarlo.',
		],
		correctAnswer: 3,
		explanation:
			'La evaluación es la etapa que mide si el ajuste mejora el resultado frente a una línea base y permite decidir con evidencia si se publica. Sin ella, el despliegue se hace a ciegas y no se puede atribuir ninguna mejora.',
	},
	{
		id: '2.1-q17',
		taskId: '2.1',
		objetivos: ['2.1#4'],
		tipo: 'tradeoff',
		question:
			'Un equipo limita los tokens de salida para reducir coste y latencia, pero las respuestas empiezan a cortarse antes de resolver el caso y obligan a repetir la petición. ¿Cómo se describe el intercambio?',
		options: [
			'El límite de tokens de salida no influye ni en el coste ni en la latencia.',
			'Menos tokens de salida abaratan y aceleran la respuesta, pero pueden truncar el contenido y forzar llamadas adicionales que encarecen el total.',
			'Ampliar el límite de salida reduce siempre el coste total.',
			'La truncación se corrige aumentando únicamente los tokens de entrada.',
		],
		correctAnswer: 1,
		explanation:
			'Como la salida se factura por tokens, acortarla reduce el coste y suele mejorar la latencia, pero un límite demasiado bajo trunca la respuesta y provoca reintentos que elevan el gasto final. El ajuste debe medirse con la tarea completa.',
	},
	{
		id: '2.1-q18',
		taskId: '2.1',
		objetivos: ['2.1#5'],
		tipo: 'escenario',
		question:
			'Un asistente recibe en cada consulta veinte fragmentos recuperados, la ventana de contexto se llena y las respuestas citan información poco relevante mientras se ignoran las instrucciones. ¿Qué práctica de ingeniería de contexto conviene aplicar primero?',
		options: [
			'Aumentar la temperatura para que el modelo elija mejor entre los fragmentos.',
			'Reentrenar el modelo con todos los documentos de la empresa.',
			'Priorizar y recortar los fragmentos según su relevancia, dejando los más pertinentes en primer lugar y por delante del material secundario.',
			'Eliminar las instrucciones del sistema para liberar espacio en la ventana.',
		],
		correctAnswer: 2,
		explanation:
			'La ingeniería de contexto decide qué entra, en qué orden y con qué prioridad. Seleccionar y ordenar los fragmentos relevantes evita diluir la instrucción y mejora la respuesta sin reentrenar el modelo ni tocar la temperatura.',
	},
	{
		id: '2.1-q19',
		taskId: '2.1',
		objetivos: ['2.1#6'],
		tipo: 'tradeoff',
		question:
			'Un equipo debate entre un único agente con muchas herramientas o varios agentes especializados coordinados por un orquestador. ¿Qué intercambio describe mejor la decisión?',
		options: [
			'Varios agentes especializados simplifican siempre el sistema y reducen la latencia total.',
			'Un único agente no puede invocar herramientas externas ni mantener memoria.',
			'La memoria compartida solo existe en los sistemas multi-agente y no aporta nada al agente único.',
			'Un agente único reduce la coordinación y el coste inicial, pero concentra responsabilidades; varios agentes separan dominios y afrontan mejor tareas complejas, a cambio de más latencia y de orquestación y memoria compartida.',
		],
		correctAnswer: 3,
		explanation:
			'Repartir el trabajo entre agentes especializados mejora la modularidad y el reparto de responsabilidades, pero añade coordinación, latencia y necesidad de gestionar memoria y comunicación. Un solo agente es más simple, aunque acumula todas las capacidades y puede volverse menos fiable en tareas complejas.',
	},
];
