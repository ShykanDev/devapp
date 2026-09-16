import type { PreguntaAifC01 } from '@/data/aifC01/types';

export const preguntasTask12: PreguntaAifC01[] = [
	{
		id: '1.2-q1',
		taskId: '1.2',
		objetivos: ['1.2#1'],
		tipo: 'conocimiento',
		question:
			'Una empresa recibe miles de solicitudes al día y su equipo humano no da abasto. El sistema propone una prioridad para cada solicitud y una persona analista decide qué hacer. ¿Qué patrón de valor aporta aquí la IA/ML?',
		options: [
			'Automatización completa, porque el modelo toma la decisión final.',
			'Asistir la decisión humana, porque la persona conserva la decisión y el modelo aporta una recomendación.',
			'Reducción del coste de infraestructura, porque hay menos servidores.',
			'Sustitución de las reglas de negocio por datos históricos.',
		],
		correctAnswer: 1,
		explanation:
			'El modelo ordena y recomienda, pero la decisión sigue en manos de la persona: eso es asistir la decisión humana. Automatizar implicaría que el sistema resolviera el caso de principio a fin sin intervención.',
	},
	{
		id: '1.2-q2',
		taskId: '1.2',
		objetivos: ['1.2#1'],
		tipo: 'casoDeUso',
		question:
			'Un equipo debe justificar ante la dirección la inversión en un sistema de IA/ML. ¿Qué es imprescindible definir primero para valorar si la IA realmente aporta valor?',
		options: [
			'El tipo de modelo fundacional que se usará.',
			'El objetivo de negocio y el criterio de éxito medible del sistema.',
			'El número de capas de la red neuronal.',
			'La región de AWS donde se desplegará.',
		],
		correctAnswer: 1,
		explanation:
			'Sin objetivo de negocio ni criterio de éxito no se puede demostrar el valor ni comparar alternativas. Las decisiones técnicas de modelo, arquitectura o región se toman después y están subordinadas a ese criterio.',
	},
	{
		id: '1.2-q3',
		taskId: '1.2',
		objetivos: ['1.2#2'],
		tipo: 'conocimiento',
		question:
			'Una asesoría necesita calcular el importe exacto de cada liquidación trimestral con validez legal. ¿Por qué una solución de IA/ML no es apropiada como mecanismo de decisión?',
		options: [
			'Porque los modelos no pueden procesar datos tabulares.',
			'Porque el caso exige un valor exacto y determinista, no una predicción con margen de error.',
			'Porque el volumen de liquidaciones es demasiado alto.',
			'Porque las reglas de negocio no se pueden expresar en código.',
		],
		correctAnswer: 1,
		explanation:
			'Cuando el requisito es un resultado específico y auditable, la herramienta adecuada es una regla determinista. La IA/ML devuelve predicciones con incertidumbre, útil cuando el negocio puede asumir ese margen.',
	},
	{
		id: '1.2-q4',
		taskId: '1.2',
		objetivos: ['1.2#2'],
		tipo: 'escenario',
		question:
			'Una empresa estudia predecir la rotación de empleados. Los datos existirían, pero el coste de etiquetado, integración y mantenimiento del modelo supera el ahorro esperado. ¿Qué decisión es coherente?',
		options: [
			'Construir el modelo igualmente, porque la IA siempre mejora los procesos.',
			'Descartar la solución de IA/ML porque el análisis de coste-beneficio no la respalda.',
			'Comprar más capacidad de cómputo para obtener predicciones mejores.',
			'Usar un modelo fundacional multimodal sin evaluar costes.',
		],
		correctAnswer: 1,
		explanation:
			'El análisis de coste-beneficio es uno de los criterios explícitos del objective para determinar que una solución de IA/ML no es apropiada. Si el coste total supera el beneficio, la decisión correcta es no construirla.',
	},
	{
		id: '1.2-q5',
		taskId: '1.2',
		objetivos: ['1.2#3'],
		tipo: 'comparacion',
		question:
			'Un equipo de logística quiere estimar cuántos días tardará cada envío según la distancia y la ruta, y dispone de envíos históricos con los días que realmente tardaron. ¿Qué técnica corresponde a este caso?',
		options: [
			'Clustering, porque agrupa envíos parecidos sin usar etiquetas.',
			'Regresión, porque la salida es un valor numérico continuo aprendido de ejemplos etiquetados.',
			'Clasificación, porque asigna el envío a una categoría conocida.',
			'Generación de texto, porque describe la ruta en lenguaje natural.',
		],
		correctAnswer: 1,
		explanation:
			'Predecir un número de días es una salida numérica continua, propia de la regresión, y el histórico de días reales actúa como etiqueta. La clasificación devolvería una categoría y el clustering no usaría etiquetas.',
	},
	{
		id: '1.2-q6',
		taskId: '1.2',
		objetivos: ['1.2#3'],
		tipo: 'conocimiento',
		question:
			'Un banco quiere descubrir grupos de clientes con comportamientos de consumo parecidos, sin categorías definidas de antemano y sin etiquetas asignadas. ¿Qué técnica es la más adecuada?',
		options: [
			'Regresión, porque estima un valor numérico por cliente.',
			'Clasificación supervisada, porque aprende de ejemplos etiquetados.',
			'Clustering, porque agrupa casos por similitud sin etiquetas previas.',
			'Ajuste de un modelo de lenguaje con el histórico de compras.',
		],
		correctAnswer: 2,
		explanation:
			'El clustering es aprendizaje no supervisado: no necesita etiquetas y descubre agrupaciones por similitud. La regresión y la clasificación son supervisadas y exigen ejemplos etiquetados que aquí no existen.',
	},
	{
		id: '1.2-q7',
		taskId: '1.2',
		objetivos: ['1.2#4'],
		tipo: 'casoDeUso',
		question:
			'Una planta de fabricación quiere detectar piezas defectuosas a partir de fotografías tomadas en la línea de producción. ¿Qué aplicación de IA describe este caso?',
		options: [
			'Procesamiento de lenguaje natural (NLP).',
			'Computer vision, porque analiza imágenes para detectar objetos o anomalías.',
			'Reconocimiento de voz (speech recognition).',
			'Forecasting sobre series temporales.',
		],
		correctAnswer: 1,
		explanation:
			'El dato de entrada es una imagen y la tarea es detectar defectos: es un caso de computer vision. NLP trabaja con texto, el reconocimiento de voz con audio y el forecasting con series temporales.',
	},
	{
		id: '1.2-q8',
		taskId: '1.2',
		objetivos: ['1.2#4'],
		tipo: 'escenario',
		question:
			'Un equipo de soporte quiere que un asistente consulte la documentación interna vigente y responda preguntas de los técnicos, y además que ejecute pasos de un flujo con herramientas. ¿Qué aplicaciones de IA combina este caso?',
		options: [
			'Una base de conocimiento que recupera documentos y un agente que planifica y usa herramientas.',
			'Un sistema de recomendación de productos y un motor de reglas.',
			'Detección de fraude y transcripción de llamadas.',
			'Computer vision y análisis de sentimiento.',
		],
		correctAnswer: 0,
		explanation:
			'Responder sobre documentación propia corresponde a una base de conocimiento con recuperación de información, y ejecutar pasos con herramientas es propio de un agente. Las demás opciones describen aplicaciones sobre datos o tareas distintas.',
	},
	{
		id: '1.2-q9',
		taskId: '1.2',
		objetivos: ['1.2#5'],
		tipo: 'servicio',
		question:
			'Una empresa ya dispone de las transcripciones de sus entrevistas y necesita identificar los temas tratados y el sentimiento de cada una, sin entrenar un modelo propio. ¿Qué servicio gestionado de AWS se ajusta mejor?',
		options: [
			'Amazon Polly, porque convierte texto en voz.',
			'Amazon Translate, porque traduce entre idiomas.',
			'Amazon Comprehend, porque extrae entidades, temas y sentimiento del texto.',
			'Amazon Lex, porque construye un bot conversacional.',
		],
		correctAnswer: 2,
		explanation:
			'Amazon Comprehend analiza texto para obtener entidades, temas y sentimiento sin entrenar un modelo propio. Amazon Polly hace lo contrario (texto a voz), Amazon Translate cambia de idioma y Amazon Lex construye interfaces conversacionales.',
	},
	{
		id: '1.2-q10',
		taskId: '1.2',
		objetivos: ['1.2#5'],
		tipo: 'conocimiento',
		question:
			'¿Qué describe correctamente la propuesta de los servicios gestionados de IA/ML de AWS?',
		options: [
			'El cliente debe entrenar y operar todos los modelos desde cero en su propia cuenta.',
			'AWS opera la infraestructura y ofrece capacidades ya entrenadas por API, mientras el cliente integra y gobierna su uso.',
			'Los servicios gestionados eliminan la necesidad de controlar el acceso a los datos.',
			'Solo funcionan con modelos fundacionales y nunca con tareas de clasificación.',
		],
		correctAnswer: 1,
		explanation:
			'El valor del servicio gestionado es que AWS mantiene la infraestructura y el modelo, y el cliente se concentra en integrar la capacidad y en gobernar los datos y el acceso. La responsabilidad del uso y del contenido no desaparece.',
	},
	{
		id: '1.2-q11',
		taskId: '1.2',
		objetivos: ['1.2#6'],
		tipo: 'comparacion',
		question:
			'Un organismo público debe clasificar expedientes y justificar cada decisión ante un auditor mostrando las variables utilizadas. El equipo debate entre un modelo fundacional generativo y un modelo tradicional de clasificación. ¿Qué opción responde mejor al requisito?',
		options: [
			'El modelo fundacional, porque generaliza mejor a cualquier tarea.',
			'El modelo tradicional con variables documentadas, porque la explicabilidad y la trazabilidad son requisitos del caso.',
			'El modelo fundacional, porque no necesita datos etiquetados.',
			'Cualquiera de los dos, porque la explicabilidad es equivalente en ambos.',
		],
		correctAnswer: 1,
		explanation:
			'Cuando la explicabilidad y la trazabilidad son requisitos regulatorios, un modelo tradicional con variables documentadas encaja mejor. Un modelo fundacional puede aportar flexibilidad, pero su explicabilidad intrínseca es menor.',
	},
	{
		id: '1.2-q12',
		taskId: '1.2',
		objetivos: ['1.2#6'],
		tipo: 'tradeoff',
		question:
			'El equipo compara un modelo fundacional y un modelo tradicional para una tarea acotada de predicción con datos etiquetados disponibles. ¿Qué afirmación describe mejor el intercambio entre ambos?',
		options: [
			'El modelo fundacional siempre es más barato y más fácil de explicar.',
			'El modelo tradicional aporta explicabilidad y coste de inferencia predecible en una tarea acotada; el modelo fundacional aporta flexibilidad para tareas variadas a cambio de menor explicabilidad intrínseca y mayor variabilidad.',
			'El modelo tradicional no requiere datos etiquetados, mientras que el fundacional sí.',
			'El modelo fundacional solo puede ejecutarse en el entorno del cliente.',
		],
		correctAnswer: 1,
		explanation:
			'La decisión es un intercambio: el modelo tradicional ofrece control, explicabilidad y coste predecible en un problema concreto, mientras el FM generaliza a tareas no previstas con menos explicabilidad intrínseca y más variabilidad en la salida.',
	},
];
