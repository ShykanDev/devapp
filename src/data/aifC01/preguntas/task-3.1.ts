import type { PreguntaAifC01 } from '@/data/aifC01/types';

export const preguntasTask31: PreguntaAifC01[] = [
	{
		id: '3.1-q1',
		taskId: '3.1',
		objetivos: ['3.1#1'],
		tipo: 'conocimiento',
		question:
			'Una empresa necesita un modelo fundacional que reciba a la vez el texto de una reclamación y la fotografía del producto dañado. ¿Qué criterio de selección determina directamente este requisito?',
		options: [
			'La longitud máxima de salida del modelo.',
			'La modalidad, porque el modelo debe aceptar y procesar más de un tipo de contenido.',
			'El coste por token de entrada.',
			'La capacidad de prompt caching.',
		],
		correctAnswer: 1,
		explanation:
			'La modalidad define qué tipos de contenido acepta y produce el modelo (texto, imagen, audio, vídeo). El coste, la longitud de salida y la caché de prompt son criterios de eficiencia, pero no habilitan por sí solos el caso de uso multimodal.',
	},
	{
		id: '3.1-q2',
		taskId: '3.1',
		objetivos: ['3.1#1'],
		tipo: 'escenario',
		question:
			'Un asistente debe responder en español y portugués sobre documentación que cambia cada semana. El equipo solo ha probado modelos en inglés y ha elegido el modelo más grande del catálogo sin medir el tiempo de respuesta. ¿Qué dos criterios de selección está tratando mal?',
		options: [
			'Coste y prompt caching, porque no midió el gasto por llamada.',
			'Multilingüe y latencia, porque no validó los idiomas reales del negocio ni el tiempo de respuesta del modelo elegido.',
			'Tamaño y complejidad, porque nunca debe usarse un modelo grande.',
			'Longitud de salida y modalidad, porque el asistente solo devuelve texto.',
		],
		correctAnswer: 1,
		explanation:
			'El criterio multilingüe exige evaluar con casos en los idiomas reales, y la latencia importa en una interfaz conversacional. Un modelo grande puede ser válido, pero debe justificarse con pruebas y mediciones, no por defecto.',
	},
	{
		id: '3.1-q3',
		taskId: '3.1',
		objetivos: ['3.1#1'],
		tipo: 'tradeoff',
		question:
			'Un equipo compara dos modelos para un chat interno: el primero da respuestas algo mejores, pero es más grande y tarda más; el segundo responde antes con calidad suficiente y el presupuesto es ajustado. ¿Qué intercambio de criterios de selección describe la situación?',
		options: [
			'Calidad marginal frente a latencia y coste, donde el modelo mayor añade tiempo y gasto que el caso de uso no necesita.',
			'Modalidad frente a multilingüe, porque los modelos no comparten idiomas.',
			'Prompt caching frente a longitud de salida, porque ambos reducen el gasto.',
			'Complejidad frente a personalización, porque el modelo menor no puede personalizarse.',
		],
		correctAnswer: 0,
		explanation:
			'Elegir un modelo es ponderar calidad, latencia y coste según el caso de uso. Si la calidad extra no aporta valor medible, el modelo mayor solo añade tiempo de respuesta y gasto por token.',
	},
	{
		id: '3.1-q4',
		taskId: '3.1',
		objetivos: ['3.1#2'],
		tipo: 'conocimiento',
		question:
			'¿Qué efecto tiene reducir la temperatura de la inferencia en un modelo fundacional?',
		options: [
			'Aumenta la variedad de las respuestas generadas.',
			'Reduce la variedad y hace la salida más estable y repetible ante la misma entrada.',
			'Incrementa la longitud máxima de salida permitida.',
			'Añade conocimiento factual nuevo al modelo.',
		],
		correctAnswer: 1,
		explanation:
			'La temperatura controla el muestreo: con valores bajos la distribución es más estrecha y la salida más determinista. No cambia el conocimiento del modelo ni sus límites de tokens.',
	},
	{
		id: '3.1-q5',
		taskId: '3.1',
		objetivos: ['3.1#2'],
		tipo: 'casoDeUso',
		question:
			'Un sistema extrae el importe de facturas y debe devolver siempre el mismo valor para el mismo documento, pero el equipo configuró una temperatura alta y obtiene cifras distintas entre ejecuciones. ¿Qué ajuste ataca la causa del problema?',
		options: [
			'Aumentar la longitud de salida para dar más espacio al modelo.',
			'Reducir la temperatura para que el muestreo sea más estable.',
			'Aumentar la longitud de entrada añadiendo más ejemplos.',
			'Activar prompt caching para reutilizar el prompt.',
		],
		correctAnswer: 1,
		explanation:
			'La variabilidad entre ejecuciones con la misma entrada proviene del muestreo. Bajar la temperatura mejora la repetibilidad; las opciones sobre longitud y caché afectan a coste y contexto, no a la causa.',
	},
	{
		id: '3.1-q6',
		taskId: '3.1',
		objetivos: ['3.1#3', '3.1#5'],
		tipo: 'comparacion',
		question:
			'Una empresa quiere que su asistente responda con datos del catálogo, que cambia a diario, y además que redacte siempre con el tono de marca, que es estable. ¿Qué combinación de enfoques de personalización es la más adecuada?',
		options: [
			'Fine-tuning para el catálogo cambiante y RAG para el tono de marca.',
			'RAG para el catálogo actualizado y fine-tuning (o ejemplos en el prompt) para el tono estable.',
			'Pre-entrenamiento para ambos requisitos.',
			'Aumentar la temperatura para cubrir tanto los datos como el estilo.',
		],
		correctAnswer: 1,
		explanation:
			'RAG aporta conocimiento actualizado sin reentrenar, ideal para un catálogo que cambia; el tono es un comportamiento estable y consistente, donde encaja el fine-tuning o los ejemplos en el prompt. El pre-entrenamiento es desproporcionado y la temperatura no cambia el conocimiento ni el estilo de forma fiable.',
	},
	{
		id: '3.1-q7',
		taskId: '3.1',
		objetivos: ['3.1#3'],
		tipo: 'escenario',
		question:
			'Un bufete quiere un asistente que responda sobre su normativa interna y su jurisprudencia propia, que cite los documentos utilizados y que incorpore documentos nuevos sin reentrenar el modelo. ¿Qué arquitectura cumple estos requisitos?',
		options: [
			'RAG con una base de conocimiento que indexe los documentos y recupere los fragmentos más similares en cada consulta.',
			'Fine-tuning del modelo cada vez que se añade un documento nuevo.',
			'Subir la temperatura para que el modelo busque en su conocimiento interno.',
			'Pre-entrenar un modelo desde cero con la normativa del bufete.',
		],
		correctAnswer: 0,
		explanation:
			'RAG recupera fragmentos de las fuentes indexadas y los usa como contexto, de modo que las respuestas citan documentos y se actualizan al reindexar, sin reentrenar. El fine-tuning no es adecuado para conocimiento que cambia y el pre-entrenamiento sería desproporcionado.',
	},
	{
		id: '3.1-q8',
		taskId: '3.1',
		objetivos: ['3.1#3'],
		tipo: 'conocimiento',
		question: '¿Qué describe mejor el patrón Retrieval Augmented Generation (RAG)?',
		options: [
			'Reentrenar el modelo con los documentos internos para que los incorpore a sus pesos.',
			'Recuperar fragmentos relevantes de una fuente y añadirlos como contexto para que el modelo genere la respuesta.',
			'Comprimir el modelo para reducir su latencia de despliegue.',
			'Ajustar la temperatura para disminuir las invenciones del modelo.',
		],
		correctAnswer: 1,
		explanation:
			'RAG separa recuperación y generación: primero busca el contenido relevante (normalmente por similitud entre embeddings) y después el modelo responde usando ese contenido como contexto. No modifica los pesos del modelo.',
	},
	{
		id: '3.1-q9',
		taskId: '3.1',
		objetivos: ['3.1#3', '3.1#4'],
		tipo: 'comparacion',
		question:
			'Un equipo debe explicar la diferencia entre una base de datos vectorial y Amazon Bedrock Knowledge Bases al documentar su arquitectura de RAG. ¿Cuál es la afirmación correcta?',
		options: [
			'La base de datos vectorial genera las respuestas y la base de conocimiento solo guarda los documentos originales.',
			'La base de datos vectorial almacena y busca embeddings por similitud; la base de conocimiento es la capacidad gestionada que indexa las fuentes y orquesta la recuperación.',
			'Son sinónimos: la base de conocimiento es el nombre comercial de la base de datos vectorial en AWS.',
			'La base de conocimiento sustituye al modelo fundacional dentro del flujo de generación.',
		],
		correctAnswer: 1,
		explanation:
			'La base de datos vectorial es el almacén que guarda y consulta embeddings; la base de conocimiento es la capacidad gestionada que conecta fuentes, genera los embeddings y coordina la recuperación que alimenta al modelo.',
	},
	{
		id: '3.1-q10',
		taskId: '3.1',
		objetivos: ['3.1#4'],
		tipo: 'servicio',
		question:
			'Una empresa ya utiliza un motor de búsqueda gestionado y quiere añadir búsqueda semántica sobre embeddings para alimentar su aplicación de RAG. ¿Qué servicio de AWS encaja de forma más natural como almacén vectorial?',
		options: [
			'Amazon OpenSearch Service.',
			'Amazon S3 Glacier.',
			'AWS Budgets.',
			'Amazon CloudFront.',
		],
		correctAnswer: 0,
		explanation:
			'Amazon OpenSearch Service permite índices vectoriales y búsqueda por similitud. Otras opciones del alcance para almacenar embeddings son Amazon Aurora, Amazon Neptune y Amazon RDS for PostgreSQL, según la arquitectura existente.',
	},
	{
		id: '3.1-q11',
		taskId: '3.1',
		objetivos: ['3.1#4'],
		tipo: 'escenario',
		question:
			'Un equipo guarda embeddings sobre datos de clientes en Aurora porque ya usa un motor relacional, pero otro equipo necesita explotar las relaciones entre entidades para su caso de uso de RAG. ¿Qué servicio del alcance del examen encaja mejor con ese requisito de grafo?',
		options: [
			'Amazon Neptune, porque es un servicio de base de datos de grafos que permite almacenar y consultar representaciones vectoriales.',
			'Amazon S3, porque almacena objetos de cualquier tipo.',
			'Amazon ElastiCache, porque acelera cualquier consulta.',
			'Amazon Redshift, porque está optimizado para analítica.',
		],
		correctAnswer: 0,
		explanation:
			'Amazon Neptune es la opción de base de datos de grafos dentro de los servicios citados para almacenar embeddings, útil cuando las relaciones entre entidades son parte del caso de uso. Aurora, RDS for PostgreSQL y OpenSearch Service cubren otros perfiles.',
	},
	{
		id: '3.1-q12',
		taskId: '3.1',
		objetivos: ['3.1#5'],
		tipo: 'tradeoff',
		question:
			'El equipo debate entre resolver una necesidad de personalización con RAG o con fine-tuning. ¿Qué afirmación describe mejor el intercambio de costes?',
		options: [
			'RAG no requiere entrenamiento pero añade tokens de contexto en cada consulta y exige mantener las fuentes; el fine-tuning evita ese contexto adicional, pero requiere datos de calidad y cómputo de entrenamiento.',
			'Ambos enfoques tienen el mismo coste y el mismo esfuerzo de preparación de datos.',
			'El fine-tuning siempre es más barato porque no envía contexto en cada llamada.',
			'RAG modifica los pesos del modelo, por lo que no añade coste de inferencia.',
		],
		correctAnswer: 0,
		explanation:
			'RAG traslada el coste a la inferencia (más tokens de entrada) y al mantenimiento del índice; el fine-tuning traslada la inversión al entrenamiento y a la preparación de datos. Ninguno es gratis ni universalmente más barato.',
	},
	{
		id: '3.1-q13',
		taskId: '3.1',
		objetivos: ['3.1#5'],
		tipo: 'conocimiento',
		question:
			'¿Qué enfoque de personalización entrena un modelo menor y más barato de servir usando ejemplos generados por un modelo mayor?',
		options: [
			'El pre-entrenamiento desde cero.',
			'La destilación de modelos.',
			'El aprendizaje en contexto.',
			'La prompt caching.',
		],
		correctAnswer: 1,
		explanation:
			'La destilación transfiere el comportamiento de un modelo mayor a uno menor: el grande produce ejemplos y el pequeño se entrena con ellos, reduciendo el coste de servir las respuestas. El aprendizaje en contexto no entrena y el pre-entrenamiento es la opción más costosa.',
	},
	{
		id: '3.1-q14',
		taskId: '3.1',
		objetivos: ['3.1#6'],
		tipo: 'casoDeUso',
		question:
			'Una empresa quiere que su asistente decida qué sistema consultar, ejecute varias acciones en herramientas internas y compruebe el resultado antes de cerrar una incidencia. ¿Qué describe mejor esta solución?',
		options: [
			'Un agente de IA que planifica pasos, invoca herramientas y usa memoria para completar el objetivo.',
			'Un modelo de embeddings que representa documentos.',
			'Un prompt few-shot sin acceso a herramientas.',
			'Un proceso de destilación de modelos.',
		],
		correctAnswer: 0,
		explanation:
			'Un agente de IA usa el modelo para decidir y actuar: planifica, llama a herramientas, mantiene el estado del proceso y verifica resultados. Un prompt few-shot sin herramientas solo genera texto y no ejecuta acciones.',
	},
	{
		id: '3.1-q15',
		taskId: '3.1',
		objetivos: ['3.1#6'],
		tipo: 'escenario',
		question:
			'Un banco quiere que un agente apruebe automáticamente solicitudes de crédito actuando sobre sus sistemas internos. ¿Qué consideración de diseño es la más importante antes de permitir que el agente ejecute acciones?',
		options: [
			'Subir la temperatura para que el agente explore más alternativas de decisión.',
			'Definir permisos mínimos, límites de actuación, registro de cada paso y revisión humana en las decisiones sensibles.',
			'Aumentar la longitud de salida del modelo para que explique cada decisión.',
			'Evitar el uso de herramientas y dejar que el agente responda solo con texto.',
		],
		correctAnswer: 1,
		explanation:
			'Cuando un agente actúa sobre sistemas reales, el riesgo no es solo textual: una acción errónea es irreversible. El control se diseña con permisos mínimos, límites explícitos, trazabilidad de cada paso y supervisión humana en las decisiones críticas.',
	},
];
