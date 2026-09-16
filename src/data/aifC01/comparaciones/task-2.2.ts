import type { ParConfusionAifC01 } from '@/data/aifC01/types';

export const paresTask22: ParConfusionAifC01[] = [
	{
		id: 'hallucination-vs-inaccuracy',
		etiqueta: 'Alucinación vs inexactitud',
		a: {
			titulo: 'Alucinación',
			resumen:
				'El modelo genera contenido inventado —hechos, citas, referencias o capacidades— y lo presenta con seguridad y fluidez.',
		},
		b: {
			titulo: 'Inexactitud',
			resumen:
				'El modelo reproduce mal un dato que sí existe (una cifra, una fecha, una etiqueta) o incumple el formato solicitado.',
		},
		diferenciaClave:
			'La alucinación es contenido sin base real; la inexactitud es contenido con base real pero equivocado en el dato o el formato. Ambas necesitan validación, pero la alucinación engaña más porque suena convincente.',
		cuandoA: [
			'Al pedir hechos, referencias, normativa o capacidades de un servicio sin contexto verificado.',
			'En asistentes sin recuperación de fuentes: conviene citar, contrastar y validar la salida.',
		],
		cuandoB: [
			'Al extraer o resumir datos reales: el error está en el valor, no en la invención.',
			'Cuando la salida debe respetar un formato o una taxonomía concreta.',
		],
		escenarioA:
			'Un asistente cita una cláusula que no aparece en la política de la empresa. Es una alucinación: el contenido no tiene fuente.',
		escenarioB:
			'El asistente resume una factura real pero intercambia el importe total con el subtotal. Es una inexactitud sobre un dato que existe.',
		preguntaIds: ['2.2-q3'],
		objetivos: ['2.2#2'],
	},
	{
		id: 'latency-vs-cost',
		etiqueta: 'Latencia vs coste',
		a: {
			titulo: 'Latencia',
			resumen:
				'Tiempo que transcurre entre la petición y la respuesta; depende del tamaño del modelo, de los tokens de entrada y salida y de la infraestructura.',
		},
		b: {
			titulo: 'Coste',
			resumen:
				'Gasto asociado a la inferencia, habitualmente por tokens procesados y por las opciones de capacidad o de modelo elegidas.',
		},
		diferenciaClave:
			'La latencia mide la rapidez que percibe el usuario; el coste mide el gasto por uso. Optimizar uno suele repercutir en el otro: respuestas más rápidas o más capaces pueden costar más.',
		cuandoA: [
			'Aplicaciones interactivas donde la espera afecta a la experiencia (asistentes en vivo, atención al cliente).',
			'Cuando el usuario está esperando la respuesta en pantalla y el tiempo de respuesta es parte del requisito.',
		],
		cuandoB: [
			'Procesos por lotes de gran volumen donde el gasto total pesa más que el tiempo de respuesta.',
			'Cuando el rendimiento agregado y el gasto por token dominan sobre la latencia individual.',
		],
		escenarioA:
			'Un asistente de atención en vivo debe responder en pocos segundos: la latencia guía la elección del modelo.',
		escenarioB:
			'Un proceso nocturno resume miles de documentos: el coste por token y el rendimiento agregado pesan más que la latencia de cada llamada.',
		preguntaIds: ['2.2-q5'],
		objetivos: ['2.2#3'],
	},
];
