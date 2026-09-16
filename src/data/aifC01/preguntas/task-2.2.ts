import type { PreguntaAifC01 } from '@/data/aifC01/types';

export const preguntasTask22: PreguntaAifC01[] = [
	{
		id: '2.2-q1',
		taskId: '2.2',
		objetivos: ['2.2#1'],
		tipo: 'conocimiento',
		question:
			'Una empresa quiere que el mismo asistente resuma documentos, redacte borradores y responda dudas de clientes en lenguaje natural, sin desarrollar un modelo por tarea. ¿Qué ventaja de GenAI describe mejor esta situación?',
		options: [
			'La determinación estricta de las respuestas ante entradas iguales.',
			'La adaptabilidad y la capacidad de generar contenido con un mismo modelo.',
			'La garantía de que cada dato incluido en la respuesta es exacto.',
			'La eliminación de la necesidad de revisión humana.',
		],
		correctAnswer: 1,
		explanation:
			'La adaptabilidad permite reutilizar un mismo modelo cambiando la instrucción, y la generación de contenido cubre resúmenes y borradores. GenAI no garantiza exactitud ni es determinista, y su salida conviene revisarla.',
	},
	{
		id: '2.2-q2',
		taskId: '2.2',
		objetivos: ['2.2#1'],
		tipo: 'casoDeUso',
		question:
			'Un equipo de soporte quiere un asistente que mantenga el hilo de una conversación, responda en lenguaje natural y derive a una persona cuando no tenga la respuesta. ¿Qué ventaja de GenAI resulta determinante en este caso?',
		options: [
			'La capacidad de almacenar datos estructurados en tablas.',
			'La capacidad conversacional en lenguaje natural y en varios turnos.',
			'El determinismo de las respuestas para auditoría.',
			'La sustitución completa del personal de soporte.',
		],
		correctAnswer: 1,
		explanation:
			'La capacidad conversacional es la ventaja que sostiene el diálogo en varios turnos. Almacenar datos estructurados o garantizar determinismo no son características de GenAI, y el asistente complementa al equipo en lugar de sustituirlo sin revisión.',
	},
	{
		id: '2.2-q3',
		taskId: '2.2',
		objetivos: ['2.2#2'],
		tipo: 'comparacion',
		question:
			'En una misma revisión, un modelo cita una cláusula que no existe en la política de la empresa y, en otro caso, copia mal el importe total de una factura real. ¿Cómo se clasifican estos dos errores?',
		options: [
			'Ambos son alucinaciones, porque el modelo se equivoca en los dos casos.',
			'El primero es una alucinación y el segundo una inexactitud sobre un dato real.',
			'El primero es una inexactitud y el segundo una alucinación.',
			'Ambos son problemas de latencia, no de calidad de la respuesta.',
		],
		correctAnswer: 1,
		explanation:
			'La alucinación es contenido inventado que no tiene fuente, como la cláusula inexistente. La inexactitud es un dato real reproducido de forma incorrecta, como el importe mal copiado. Distinguirlos orienta la mitigación.',
	},
	{
		id: '2.2-q4',
		taskId: '2.2',
		objetivos: ['2.2#2'],
		tipo: 'conocimiento',
		question:
			'La misma consulta, enviada dos veces al mismo modelo con los mismos parámetros, devuelve respuestas redactadas de forma distinta. ¿Qué característica del modelo explica este comportamiento?',
		options: [
			'La alucinación de contenido.',
			'La falta de interpretabilidad.',
			'La no determinación de la generación.',
			'La inexactitud de los datos de entrenamiento.',
		],
		correctAnswer: 2,
		explanation:
			'La no determinación significa que la misma entrada puede producir salidas distintas, lo que obliga a probar con varias ejecuciones. La alucinación y la inexactitud se refieren al contenido, no a la variación entre llamadas.',
	},
	{
		id: '2.2-q5',
		taskId: '2.2',
		objetivos: ['2.2#3'],
		tipo: 'comparacion',
		question:
			'Para un asistente en tiempo real, un equipo compara un modelo grande que responde mejor en casos complejos con uno pequeño que responde antes y cuesta menos por token. ¿Qué factores están en tensión en esta decisión?',
		options: [
			'La latencia y el coste frente a la calidad de la respuesta.',
			'El cumplimiento normativo frente a la modalidad del modelo.',
			'La complejidad del modelo frente al idioma de entrenamiento.',
			'La interpretabilidad frente al determinismo.',
		],
		correctAnswer: 0,
		explanation:
			'El dilema es el intercambio entre calidad, latencia y coste: el modelo mayor mejora las respuestas complejas a cambio de más tiempo y gasto. La elección depende del requisito dominante del caso de uso.',
	},
	{
		id: '2.2-q6',
		taskId: '2.2',
		objetivos: ['2.2#3'],
		tipo: 'servicio',
		question:
			'Una empresa necesita comparar y cambiar entre modelos fundacionales de distintos proveedores mediante una sola API, ajustando capacidades, coste y latencia sin gestionar servidores. ¿Qué servicio de AWS se ajusta mejor a este requisito?',
		options: ['Amazon Bedrock', 'Amazon Polly', 'Amazon Transcribe', 'Amazon Lex'],
		correctAnswer: 0,
		explanation:
			'Amazon Bedrock ofrece acceso a modelos fundacionales de varios proveedores mediante API, sin gestionar infraestructura. Polly, Transcribe y Lex son servicios de capacidad específica (voz, transcripción y bots conversacionales).',
	},
	{
		id: '2.2-q7',
		taskId: '2.2',
		objetivos: ['2.2#4'],
		tipo: 'metrica',
		question:
			'La dirección quiere comprobar si el asistente generativo justifica la inversión. ¿Qué métricas responden mejor a esa pregunta?',
		options: [
			'La temperatura configurada y el número de tokens de entrada.',
			'ROI, eficiencia, tasa de conversión, ingresos medios por usuario y valor de vida del cliente.',
			'La latencia media y el tamaño del modelo elegido.',
			'El número de llamadas a la API realizadas en el mes.',
		],
		correctAnswer: 1,
		explanation:
			'El valor de negocio se expresa con métricas como ROI, eficiencia, conversión, ingresos por usuario y valor de vida del cliente. La temperatura o el tamaño del modelo son parámetros técnicos que no responden por sí solos a la pregunta de inversión.',
	},
	{
		id: '2.2-q8',
		taskId: '2.2',
		objetivos: ['2.2#4'],
		tipo: 'tradeoff',
		question:
			'Un equipo mejora la exactitud del asistente usando un modelo mayor y más contexto por llamada, pero el coste por interacción sube. ¿Cómo debe interpretarse este resultado?',
		options: [
			'Toda mejora de exactitud justifica cualquier aumento de coste.',
			'Es un tradeoff entre calidad, coste y latencia que debe compararse con el valor de negocio medido.',
			'El coste por interacción no es una métrica relevante para GenAI.',
			'La exactitud es una métrica de negocio y no se relaciona con el coste.',
		],
		correctAnswer: 1,
		explanation:
			'Mejorar la exactitud suele implicar más tokens, más latencia o modelos mayores, y por tanto más coste. La decisión se toma cruzando esa mejora con el valor de negocio (ROI, eficiencia, conversión) y no por la exactitud aislada.',
	},
];
