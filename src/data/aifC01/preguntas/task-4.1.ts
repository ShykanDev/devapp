import type { PreguntaAifC01 } from '@/data/aifC01/types';

export const preguntasTask41: PreguntaAifC01[] = [
	{
		id: '4.1-q1',
		taskId: '4.1',
		objetivos: ['4.1#1'],
		tipo: 'conocimiento',
		question:
			'Un clasificador tiene una exactitud global del 94 %, pero su tasa de error es tres veces mayor en un subgrupo poco representado. ¿Qué característica de la IA responsable está en riesgo de forma más directa?',
		options: [
			'La robustez frente a entradas adversarias.',
			'La equidad (fairness), porque el resultado trata de forma desigual a grupos comparables.',
			'La sostenibilidad del entrenamiento.',
			'La latencia de la inferencia.',
		],
		correctAnswer: 1,
		explanation:
			'La equidad exige un trato comparable entre grupos comparables; una brecha de error entre subgrupos es su síntoma típico. La robustez se refiere a entradas adversas y la sostenibilidad al consumo, no al reparto del error.',
	},
	{
		id: '4.1-q2',
		taskId: '4.1',
		objetivos: ['4.1#1'],
		tipo: 'escenario',
		question:
			'Un asistente de RR. HH. descarta candidaturas y el equipo detecta que penaliza a quienes hablan con un acento concreto al transcribir la entrevista. ¿Qué características de la IA responsable fallan a la vez?',
		options: [
			'Solo robustez: el modelo no tolera ruido acústico.',
			'Equidad e inclusividad: el sistema rinde peor con un grupo y con una forma de hablar.',
			'Veracidad: la transcripción inventa palabras.',
			'Seguridad: el sistema no falla de forma controlada.',
		],
		correctAnswer: 1,
		explanation:
			'El sesgo contra un grupo y la falta de cobertura de distintas formas de hablar apuntan a equidad e inclusividad. La robustez sería el problema si fallara ante ruido sin un patrón de grupo, y la veracidad se refiere a afirmar hechos falsos.',
	},
	{
		id: '4.1-q3',
		taskId: '4.1',
		objetivos: ['4.1#1'],
		tipo: 'seguridad',
		question:
			'Un equipo comprueba si su asistente mantiene un comportamiento aceptable cuando recibe entradas manipuladas para provocar daño. ¿Qué características de la IA responsable está evaluando?',
		options: [
			'Robustez y seguridad ante entradas adversarias.',
			'Inclusividad del conjunto de datos.',
			'Sostenibilidad del modelo desplegado.',
			'Coste por token de la inferencia.',
		],
		correctAnswer: 0,
		explanation:
			'La robustez mide la resistencia a entradas adversas y la seguridad, la ausencia de daño con un fallo controlado. Inclusividad, sostenibilidad y coste son dimensiones distintas.',
	},
	{
		id: '4.1-q4',
		taskId: '4.1',
		objetivos: ['4.1#2'],
		tipo: 'servicio',
		question:
			'¿Qué capacidad permite definir políticas que filtren contenido dañino y bloqueen temas prohibidos en las respuestas de un modelo fundacional?',
		options: [
			'Amazon Bedrock Guardrails.',
			'AWS CloudTrail.',
			'Amazon Textract.',
			'AWS Budgets.',
		],
		correctAnswer: 0,
		explanation:
			'Amazon Bedrock Guardrails aplica políticas de contenido y de tema sobre la entrada y la salida del modelo. Los otros servicios cubren auditoría, extracción de texto y control de coste, no el filtrado de respuestas.',
	},
	{
		id: '4.1-q5',
		taskId: '4.1',
		objetivos: ['4.1#2'],
		tipo: 'casoDeUso',
		question:
			'Una empresa quiere decidir qué temas debe rechazar su asistente y qué datos no deben aparecer en la respuesta, sin reentrenar el modelo. ¿Qué enfoque describe mejor la situación?',
		options: [
			'Definir guardrails con políticas de contenido y de tema en Amazon Bedrock.',
			'Aumentar el número de ejemplos few-shot del prompt.',
			'Reentrenar el modelo con los documentos internos.',
			'Subir la temperatura para diversificar las respuestas.',
		],
		correctAnswer: 0,
		explanation:
			'Los guardrails declaran de forma externa qué se bloquea y qué se filtra, sin tocar el entrenamiento. Los ejemplos few-shot fijan formato o criterio, y la temperatura no controla temas ni datos sensibles.',
	},
	{
		id: '4.1-q6',
		taskId: '4.1',
		objetivos: ['4.1#3'],
		tipo: 'tradeoff',
		question:
			'Un equipo debate entre usar el modelo más grande disponible para un clasificador interno o uno más pequeño que ya supera el umbral de calidad. ¿Qué afirmación recoge mejor el tradeoff responsable?',
		options: [
			'El modelo grande siempre es más responsable porque acierta más.',
			'El modelo pequeño reduce coste y consumo energético; se justifica si mantiene la calidad medida por subgrupo.',
			'El modelo pequeño es mejor porque consume menos, sin importar la calidad.',
			'La elección del modelo no influye en la sostenibilidad del sistema.',
		],
		correctAnswer: 1,
		explanation:
			'La selección responsable busca el modelo más pequeño que cumpla el criterio de calidad, con menor coste y huella. Ni el tamaño garantiza responsabilidad ni el ahorro justifica renunciar a la calidad medida.',
	},
	{
		id: '4.1-q7',
		taskId: '4.1',
		objetivos: ['4.1#3'],
		tipo: 'conocimiento',
		question:
			'¿Qué práctica es responsable al seleccionar y operar un modelo de IA generativa?',
		options: [
			'Registrar el uso previsto y las limitaciones del modelo con Amazon SageMaker Model Cards.',
			'Elegir siempre el modelo con más parámetros.',
			'Evitar medir el consumo para no limitar la innovación.',
			'Entrenar desde cero aunque exista un modelo fundacional que cumpla el criterio.',
		],
		correctAnswer: 0,
		explanation:
			'Documentar uso previsto y limitaciones hace explícito para qué sirve el modelo y dónde no debería usarse. Priorizar tamaño, ignorar el consumo o reentrenar sin necesidad aumenta coste y riesgo sin mejora garantizada.',
	},
	{
		id: '4.1-q8',
		taskId: '4.1',
		objetivos: ['4.1#4'],
		tipo: 'conocimiento',
		question:
			'¿Cuál de estos es un riesgo legal específico de trabajar con IA generativa?',
		options: [
			'Reclamos por infracción de propiedad intelectual si la salida reproduce material protegido.',
			'Que el modelo tarde más de lo previsto en responder.',
			'Que el servicio no permita cambiar de región.',
			'Que el prompt consuma demasiados tokens.',
		],
		correctAnswer: 0,
		explanation:
			'La infracción de propiedad intelectual es un riesgo legal propio de la IA generativa, junto con las salidas sesgadas, la pérdida de confianza, el riesgo para el usuario final y las alucinaciones. Latencia, región y tokens son cuestiones operativas.',
	},
	{
		id: '4.1-q9',
		taskId: '4.1',
		objetivos: ['4.1#4'],
		tipo: 'casoDeUso',
		question:
			'Un asistente financiero responde con una cifra inventada y el cliente actúa sobre ella. ¿Qué riesgo se ha materializado y qué medida lo reduce?',
		options: [
			'Una alucinación; se reduce con grounding en fuentes verificables y validación de la salida.',
			'Un problema de latencia; se reduce añadiendo más réplicas.',
			'Una infracción de marca; se reduce cambiando el nombre del asistente.',
			'Un sesgo del dataset; se reduce balanceando las clases.',
		],
		correctAnswer: 0,
		explanation:
			'Afirmar como cierto un dato que no está respaldado es una alucinación, y su mitigación pasa por anclar la respuesta a fuentes verificables y validar la salida. Los otros riesgos no explican un dato inventado con apariencia de certeza.',
	},
	{
		id: '4.1-q10',
		taskId: '4.1',
		objetivos: ['4.1#5'],
		tipo: 'conocimiento',
		question:
			'Un equipo audita el conjunto de datos antes de entrenar y descubre que un subgrupo apenas aparece. ¿Qué característica del dataset está en riesgo?',
		options: [
			'La curaduría de las fuentes.',
			'La inclusividad y la representación equilibrada de los subgrupos.',
			'La vigencia temporal de los datos.',
			'El formato de almacenamiento de los ficheros.',
		],
		correctAnswer: 1,
		explanation:
			'Una presencia mínima de un subgrupo incumple inclusividad y balance, y deja al modelo sin ejemplos suficientes para ese grupo. Curaduría, vigencia y formato son dimensiones distintas de la calidad del dataset.',
	},
	{
		id: '4.1-q11',
		taskId: '4.1',
		objetivos: ['4.1#5'],
		tipo: 'metrica',
		question:
			'¿Qué medida describe mejor la calidad de un dataset para entrenar un modelo responsable?',
		options: [
			'El tamaño total en gigabytes.',
			'La proporción de casos por subgrupo frente a su presencia real en la población atendida.',
			'El número de columnas del fichero.',
			'La velocidad de carga del dataset.',
		],
		correctAnswer: 1,
		explanation:
			'El balance relevante es la representación de cada subgrupo respecto a su presencia real; el volumen bruto no corrige la falta de representación. Columnas y velocidad son detalles técnicos, no medidas de equidad.',
	},
	{
		id: '4.1-q12',
		taskId: '4.1',
		objetivos: ['4.1#6'],
		tipo: 'comparacion',
		question:
			'Un modelo acierta poco tanto en entrenamiento como en datos nuevos: no captura la relación real entre las variables. ¿Qué componente del error describe y en qué dirección se corrige?',
		options: [
			'Varianza alta; la corrección es reducir la complejidad del modelo.',
			'Sesgo alto (underfitting); la corrección es más capacidad o mejores variables.',
			'Overfitting; la corrección es recortar el conjunto de validación.',
			'Ruido irreducible; no hay corrección posible.',
		],
		correctAnswer: 1,
		explanation:
			'Un error alto y parecido en entrenamiento y validación indica sesgo alto por un modelo demasiado simple. La varianza alta se reconoce por una brecha grande entre entrenamiento y validación.',
	},
	{
		id: '4.1-q13',
		taskId: '4.1',
		objetivos: ['4.1#6'],
		tipo: 'comparacion',
		question:
			'Un modelo obtiene un error casi nulo en el histórico de entrenamiento y un error elevado en el conjunto de validación. ¿Qué problema tiene?',
		options: [
			'Underfitting, porque no aprendió la señal.',
			'Overfitting, porque memorizó particularidades del entrenamiento y no generaliza.',
			'Sesgo alto por un modelo demasiado simple.',
			'Un error de formato en la salida.',
		],
		correctAnswer: 1,
		explanation:
			'La brecha entre un error de entrenamiento casi nulo y uno de validación elevado es la firma del overfitting: varianza alta que aprende también el ruido. El underfitting mostraría error alto en ambos conjuntos.',
	},
	{
		id: '4.1-q14',
		taskId: '4.1',
		objetivos: ['4.1#6'],
		tipo: 'escenario',
		question:
			'Un modelo de scoring funciona bien en el promedio, pero falla con más frecuencia en un grupo demográfico poco representado del histórico. ¿Qué lectura es correcta?',
		options: [
			'El modelo es equitativo porque la métrica global es buena.',
			'Hay un efecto desigual por subgrupo que el promedio oculta; conviene desagregar métricas y revisar la representación de los datos.',
			'El problema es de latencia, no de calidad.',
			'Basta con subir la temperatura de generación.',
		],
		correctAnswer: 1,
		explanation:
			'Una brecha de error concentrada en un subgrupo poco representado señala un efecto desigual que el agregado esconde. La respuesta es medir por subgrupo y corregir la representación, no ajustar parámetros de generación.',
	},
	{
		id: '4.1-q15',
		taskId: '4.1',
		objetivos: ['4.1#7'],
		tipo: 'metrica',
		question:
			'¿Qué práctica permite detectar un sesgo que la métrica global no muestra?',
		options: [
			'Analizar las métricas desagregadas por subgrupo (subgroup analysis) junto con auditorías humanas.',
			'Aumentar la longitud del prompt.',
			'Elegir un modelo con más parámetros.',
			'Reducir el tamaño del conjunto de validación.',
		],
		correctAnswer: 0,
		explanation:
			'La subgroup analysis separa las métricas por grupo y la auditoría humana confirma el hallazgo con juicio sobre casos reales. Prompt, tamaño del modelo y validación no revelan por sí solos el reparto del error.',
	},
	{
		id: '4.1-q16',
		taskId: '4.1',
		objetivos: ['4.1#7'],
		tipo: 'casoDeUso',
		question:
			'El equipo quiere comprobar si las etiquetas de su conjunto de evaluación son correctas y coherentes antes de confiar en las métricas. ¿Qué práctica aborda esto?',
		options: [
			'El análisis de la calidad de las etiquetas (label quality).',
			'La ampliación del prompt con más ejemplos.',
			'El ajuste de la temperatura de muestreo.',
			'La reducción del número de clases del problema.',
		],
		correctAnswer: 0,
		explanation:
			'Revisar la calidad de las etiquetas verifica que la referencia con la que se compara el modelo sea correcta; si no lo es, la métrica mide el error de las etiquetas. Los otros cambios no auditan la etiqueta.',
	},
];
