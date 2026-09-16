import type { PreguntaAifC01 } from '@/data/aifC01/types';

export const preguntasTask34: PreguntaAifC01[] = [
	{
		id: '3.4-q1',
		taskId: '3.4',
		objetivos: ['3.4#1'],
		tipo: 'servicio',
		question:
			'Un equipo quiere comparar varios modelos de Amazon Bedrock con el mismo conjunto de preguntas propias y repetir la evaluación cada vez que cambia la configuración. ¿Qué característica de Amazon Bedrock Model Evaluation responde a esa necesidad?',
		options: [
			'Almacena las respuestas generadas para reutilizarlas como datos de entrenamiento.',
			'Permite ejecutar evaluaciones sobre conjuntos propios o integrados y comparar modelos y configuraciones con métricas consistentes.',
			'Traduce automáticamente las preguntas del conjunto de evaluación a otros idiomas.',
			'Sustituye la revisión humana y emite un certificado de calidad del modelo.',
		],
		correctAnswer: 1,
		explanation:
			'Amazon Bedrock Model Evaluation ejecuta la evaluación dentro del servicio con conjuntos propios o integrados y devuelve métricas comparables entre modelos y configuraciones. No entrena ni certifica el modelo, y no sustituye al criterio humano.',
	},
	{
		id: '3.4-q2',
		taskId: '3.4',
		objetivos: ['3.4#1'],
		tipo: 'conocimiento',
		question:
			'El equipo debe decidir cuál de dos modelos redacta mejor un correo de disculpa a un cliente. No existe una única respuesta correcta y el criterio es de tono y utilidad. ¿Qué enfoque de evaluación es el más adecuado?',
		options: [
			'Un conjunto de referencia (benchmark) con puntuación automática de n-gramas.',
			'La evaluación human-in-the-loop, con revisores que puntúan las respuestas.',
			'Medir la latencia media de inferencia de cada modelo.',
			'Contar los tokens de entrada que consume cada modelo.',
		],
		correctAnswer: 1,
		explanation:
			'Cuando el criterio es subjetivo y no hay una respuesta única, la evaluación human-in-the-loop es la referencia. Latencia y tokens miden coste o rendimiento, no la calidad del texto, y una métrica de n-gramas no captura tono ni utilidad.',
	},
	{
		id: '3.4-q3',
		taskId: '3.4',
		objetivos: ['3.4#2'],
		tipo: 'comparacion',
		question:
			'Un modelo de clasificación detecta correos fraudulentos. El equipo de fraude pide reducir los casos reales de fraude que pasan sin detectar, aunque aumenten las falsas alertas. ¿Qué métrica debe priorizarse?',
		options: [
			'Precision, porque mide cuántos de los correos marcados eran realmente fraude.',
			'Recall, porque mide cuántos de los fraudes reales se detectaron.',
			'Accuracy, porque resume todos los aciertos del modelo.',
			'BLEU, porque mide la similitud con una referencia.',
		],
		correctAnswer: 1,
		explanation:
			'Recall mide la cobertura sobre los casos que realmente eran positivos, que es lo que pide el equipo: no dejar pasar fraude. Precision mide el ruido de las alertas y accuracy puede ser alta aunque se escapen los casos minoritarios.',
	},
	{
		id: '3.4-q4',
		taskId: '3.4',
		objetivos: ['3.4#2'],
		tipo: 'comparacion',
		question:
			'Un modelo clasifica tickets y solo el 3 % pertenece a la categoría crítica. El modelo acierta el 95 % de las etiquetas, pero casi nunca detecta los tickets críticos. ¿Qué medida describe mejor el problema?',
		options: [
			'La accuracy es alta porque el conjunto está desbalanceado; el F1 de la clase crítica revela el mal desempeño.',
			'El F1 es alto porque el modelo acierta la mayoría de las etiquetas.',
			'La accuracy y el F1 miden lo mismo cuando hay desbalanceo.',
			'Ninguna métrica de clasificación sirve con clases desbalanceadas.',
		],
		correctAnswer: 0,
		explanation:
			'La accuracy cuenta por igual todos los aciertos, así que acertar la clase mayoritaria la mantiene alta aunque la clase crítica se ignore. El F1 se centra en el desempeño sobre la clase de interés y expone ese fallo.',
	},
	{
		id: '3.4-q5',
		taskId: '3.4',
		objetivos: ['3.4#2'],
		tipo: 'comparacion',
		question:
			'Un equipo traduce documentación técnica y quiere una métrica que premie la coincidencia de n-gramas con la traducción de referencia y penalice las salidas demasiado cortas. ¿Qué métrica se ajusta a ese objetivo?',
		options: [
			'ROUGE, porque mide el recuerdo de fragmentos de la referencia.',
			'BLEU, porque mide la precisión de n-gramas y aplica penalización por brevedad.',
			'BERTScore, porque compara embeddings en lugar de n-gramas.',
			'La tasa de finalización de tareas, porque mide el resultado de negocio.',
		],
		correctAnswer: 1,
		explanation:
			'BLEU se orienta a la precisión de n-gramas y penaliza las salidas demasiado cortas, por eso es habitual en traducción. ROUGE se orienta al recuerdo y se usa más en resumen; BERTScore mide significado y no aplica esa penalización.',
	},
	{
		id: '3.4-q6',
		taskId: '3.4',
		objetivos: ['3.4#2'],
		tipo: 'escenario',
		question:
			'El asistente de resúmenes obtiene una puntuación ROUGE alta, pero los revisores prefieren el resumen de otro modelo que usa sinónimos y reordena las ideas. ¿Qué explica mejor la discrepancia y qué harías?',
		options: [
			'ROUGE mide coincidencia de n-gramas con la referencia, así que una paráfrasis válida puede puntuar bajo; conviene complementar con BERTScore y revisión humana.',
			'ROUGE mide significado, así que la puntuación alta demuestra que el primer resumen es mejor.',
			'La discrepancia indica que el conjunto de referencia está mal etiquetado en su totalidad.',
			'Hay que reentrenar el modelo con los resúmenes de los revisores antes de volver a evaluar.',
		],
		correctAnswer: 0,
		explanation:
			'ROUGE premia la coincidencia literal de n-gramas o fragmentos, de modo que una paráfrasis correcta puede puntuar bajo. Complementar con BERTScore (similitud semántica) y con revisión humana alinea la medición con lo que los revisores valoran.',
	},
	{
		id: '3.4-q7',
		taskId: '3.4',
		objetivos: ['3.4#3'],
		tipo: 'conocimiento',
		question:
			'El modelo cumple todos los umbrales técnicos de calidad, pero los usuarios dejan de usar el asistente porque no les ahorra tiempo. ¿Qué dimensión falta por evaluar?',
		options: [
			'El número de parámetros del modelo.',
			'Si el modelo cumple los objetivos de negocio, como la productividad y la adopción real.',
			'El tamaño del conjunto de referencia utilizado.',
			'La temperatura configurada en la inferencia.',
		],
		correctAnswer: 1,
		explanation:
			'La calidad técnica no garantiza valor: hay que medir el cumplimiento del objetivo de negocio (productividad, adopción, satisfacción). Parámetros, tamaño del conjunto y temperatura son factores técnicos, no resultados para la organización.',
	},
	{
		id: '3.4-q8',
		taskId: '3.4',
		objetivos: ['3.4#3'],
		tipo: 'casoDeUso',
		question:
			'Un equipo quiere justificar la inversión en un asistente de atención al cliente. ¿Qué combinación demuestra mejor que el FM cumple un objetivo de negocio?',
		options: [
			'Una puntuación BLEU alta sobre un corpus de referencia genérico.',
			'Métricas alineadas al objetivo: tiempo medio de resolución, tickets cerrados sin escalado y satisfacción del usuario.',
			'El número de parámetros del modelo y su ventana de contexto.',
			'La cantidad de ejemplos usados en el prompt few-shot.',
		],
		correctAnswer: 1,
		explanation:
			'Para justificar la inversión hay que mostrar el efecto sobre el proceso: tiempo de resolución, resolución sin escalado y satisfacción. Las métricas de superficie y las características del modelo describen la técnica, no el valor aportado.',
	},
	{
		id: '3.4-q9',
		taskId: '3.4',
		objetivos: ['3.4#4'],
		tipo: 'conocimiento',
		question:
			'Una aplicación RAG responde mal aunque el modelo generativo es potente. ¿Qué conviene evaluar además de la respuesta final?',
		options: [
			'Solo la latencia de la llamada al modelo generativo.',
			'Cada componente por separado: la calidad de la recuperación, la relevancia de los fragmentos y el uso de la evidencia en la respuesta.',
			'Únicamente el número de tokens de salida de cada respuesta.',
			'La fecha de entrenamiento del modelo fundacional.',
		],
		correctAnswer: 1,
		explanation:
			'En una aplicación RAG el fallo puede estar en la recuperación, en la relevancia del contexto o en el grounding de la respuesta. Evaluar por capas localiza el componente que degrada el resultado, cosa que la respuesta final no revela.',
	},
	{
		id: '3.4-q10',
		taskId: '3.4',
		objetivos: ['3.4#4'],
		tipo: 'escenario',
		question:
			'Un agente debe consultar el estado de un pedido, llamar a una herramienta y enviar una respuesta. En producción falla en pasos intermedios aunque las respuestas finales parezcan correctas. ¿Qué enfoque de evaluación revela el problema?',
		options: [
			'Evaluar solo la respuesta final con un juez LLM.',
			'Evaluar el recorrido completo del agente: si elige la herramienta correcta, con qué argumentos y si completa la tarea.',
			'Medir la longitud media de las respuestas finales.',
			'Comparar la puntuación ROUGE contra un catálogo de respuestas esperadas.',
		],
		correctAnswer: 1,
		explanation:
			'En sistemas con agentes hay que evaluar el recorrido: elección de herramienta, argumentos y finalización de la tarea. Una respuesta final plausible puede ocultar pasos intermedios incorrectos, que solo se detectan evaluando el proceso.',
	},
	{
		id: '3.4-q11',
		taskId: '3.4',
		objetivos: ['3.4#5'],
		tipo: 'metrica',
		question:
			'Un equipo quiere medir si los usuarios realmente resuelven sus gestiones con un asistente y a qué coste. ¿Qué par de métricas de alineación de negocio es el más adecuado?',
		options: [
			'Perplejidad y número de parámetros del modelo.',
			'Tasa de finalización de tareas y coste por interacción.',
			'ROUGE y BLEU sobre el corpus de referencia.',
			'Accuracy y recall del clasificador interno del asistente.',
		],
		correctAnswer: 1,
		explanation:
			'La tasa de finalización de tareas responde a si el usuario consigue su objetivo y el coste por interacción responde a cuánto cuesta conseguirlo. Son métricas de alineación con el negocio; ROUGE, BLEU, accuracy y recall miden el modelo.',
	},
	{
		id: '3.4-q12',
		taskId: '3.4',
		objetivos: ['3.4#5'],
		tipo: 'tradeoff',
		question:
			'El equipo reduce el coste por interacción acortando el contexto y usando un modelo más pequeño. La tasa de finalización de tareas cae. ¿Qué describe mejor esta situación?',
		options: [
			'Una mejora clara de la alineación con el objetivo de negocio, porque baja el coste.',
			'Un intercambio entre métricas de alineación: el ahorro por interacción puede deteriorar la finalización de tareas y la satisfacción.',
			'Un caso de poisoning en la base de conocimiento.',
			'Una consecuencia directa de la falta de versionado del prompt.',
		],
		correctAnswer: 1,
		explanation:
			'Optimizar una sola métrica de alineación puede degradar las demás. Reducir el coste por interacción tiene valor solo si la finalización de tareas y la satisfacción se mantienen; si caen, el ahorro no compensa.',
	},
];
