import type { ParConfusionAifC01 } from '@/data/aifC01/types';

export const paresTask12: ParConfusionAifC01[] = [
	{
		id: 'regression-vs-classification',
		etiqueta: 'Regresión vs clasificación',
		a: {
			titulo: 'Regresión',
			resumen:
				'Predice un valor numérico continuo a partir de los datos de entrada: cuánto, cuántos o cuánto tiempo. Se aprende de ejemplos con un número como respuesta esperada.',
		},
		b: {
			titulo: 'Clasificación',
			resumen:
				'Asigna cada caso a una etiqueta de un conjunto conocido y finito: fraude o no fraude, categoría de incidencia, sí o no. Se aprende de ejemplos ya etiquetados.',
		},
		diferenciaClave:
			'Ambas son aprendizaje supervisado y necesitan ejemplos etiquetados. La diferencia está en la salida: la regresión devuelve un número y se evalúa por la magnitud del error; la clasificación devuelve una etiqueta y se evalúa por aciertos y errores por clase.',
		cuandoA: [
			'Cuando la pregunta es «cuánto»: demanda, precio, tiempo de espera, consumo.',
			'Cuando la variable objetivo es numérica y continua.',
			'Cuando interesa la magnitud del error y no solo acertar una categoría.',
		],
		cuandoB: [
			'Cuando la pregunta es «¿a qué categoría pertenece?» y el catálogo de etiquetas ya existe.',
			'Cuando el coste de un falso positivo y de un falso negativo es distinto y hay que tratarlos por separado.',
			'Cuando la salida se consume como una decisión discreta (aprobar o denegar, priorizar o descartar).',
		],
		escenarioA:
			'Un equipo de logística estima cuántos días tardará cada envío usando el histórico de días reales. La salida es un número continuo: regresión.',
		escenarioB:
			'El mismo equipo decide si un envío debe pasar por inspección aduanera. La salida es una etiqueta binaria aprendida de casos pasados: clasificación.',
		preguntaIds: ['1.2-q5'],
		objetivos: ['1.2#3'],
	},
	{
		id: 'traditional-ml-vs-foundation-models',
		etiqueta: 'Modelo tradicional vs modelo fundacional',
		a: {
			titulo: 'Modelo tradicional de ML',
			resumen:
				'Modelo entrenado para una tarea acotada con datos y variables conocidos. Privilegia la explicabilidad, el control y un coste de inferencia predecible.',
		},
		b: {
			titulo: 'Modelo fundacional (FM)',
			resumen:
				'Modelo preentrenado con grandes volúmenes de datos y adaptable a muchas tareas mediante prompt, recuperación de contexto o ajuste, incluidas tareas no previstas.',
		},
		diferenciaClave:
			'El modelo tradicional se entrena para una pregunta concreta y permite explicar qué variables pesan en la decisión; el FM generaliza a tareas variadas y trabaja con lenguaje natural, a cambio de menor explicabilidad intrínseca y mayor variabilidad en la salida.',
		cuandoA: [
			'Cuando existen requisitos regulatorios o de auditoría sobre cómo se decide.',
			'Cuando la explicabilidad y la trazabilidad de las variables son imprescindibles.',
			'Cuando hay restricciones operativas estrictas de latencia, coste por inferencia o ejecución en el propio entorno.',
		],
		cuandoB: [
			'Cuando la tarea implica lenguaje natural, contenido generativo o varias modalidades.',
			'Cuando se necesita flexibilidad ante tareas que cambian o no estaban previstas.',
			'Cuando se quiere prototipar rápido sin reunir un conjunto etiquetado para cada nueva tarea.',
		],
		escenarioA:
			'Un banco debe justificar cada decisión de crédito ante el regulador y mostrar las variables utilizadas. Un modelo tradicional con variables documentadas responde mejor al requisito.',
		escenarioB:
			'El mismo banco quiere un asistente que resuma normativa extensa y responda preguntas de los analistas. Un modelo fundacional es el enfoque adecuado para el lenguaje natural.',
		preguntaIds: ['1.2-q11'],
		objetivos: ['1.2#6'],
	},
];
