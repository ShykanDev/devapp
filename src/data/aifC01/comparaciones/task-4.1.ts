import type { ParConfusionAifC01 } from '@/data/aifC01/types';

export const paresTask41: ParConfusionAifC01[] = [
	{
		id: 'bias-vs-variance',
		etiqueta: 'Sesgo vs varianza',
		a: {
			titulo: 'Sesgo (bias)',
			resumen:
				'Error por un modelo demasiado simple o por supuestos que no capturan la relación real: falla tanto en entrenamiento como en datos nuevos.',
		},
		b: {
			titulo: 'Varianza',
			resumen:
				'Error por un modelo demasiado sensible a las particularidades del entrenamiento: acierta en el histórico y falla al generalizar.',
		},
		diferenciaClave:
			'El sesgo describe un modelo que no aprende la señal; la varianza, uno que aprende también el ruido. Reducir uno suele aumentar el otro: es el compromiso sesgo-varianza.',
		cuandoA: [
			'Relación simple con pocos datos o variables poco informativas.',
			'El error es alto y parecido en entrenamiento y en validación.',
		],
		cuandoB: [
			'Modelo muy flexible o muchas variables respecto al número de casos.',
			'El error es bajo en entrenamiento y alto en validación.',
		],
		escenarioA:
			'Un modelo lineal intenta predecir el riesgo de impago y falla por igual en entrenamiento y en producción: no captura las interacciones relevantes. Es sesgo alto.',
		escenarioB:
			'Un árbol muy profundo memoriza el histórico y se equivoca con clientes nuevos. Es varianza alta.',
		preguntaIds: ['4.1-q12'],
		objetivos: ['4.1#6'],
	},
	{
		id: 'overfitting-vs-underfitting',
		etiqueta: 'Overfitting vs underfitting',
		a: {
			titulo: 'Underfitting',
			resumen:
				'El modelo no captura la relación real: el error es alto tanto en entrenamiento como en validación.',
		},
		b: {
			titulo: 'Overfitting',
			resumen:
				'El modelo memoriza el entrenamiento, incluido su ruido: el error es bajo en entrenamiento y alto en validación.',
		},
		diferenciaClave:
			'El underfitting no aprende ni la señal; el overfitting aprende de más. Se distinguen comparando el error de entrenamiento con el de validación, no el uno con el otro.',
		cuandoA: [
			'Modelo demasiado simple para el problema.',
			'Pocas variables relevantes o regularización excesiva.',
		],
		cuandoB: [
			'Modelo muy complejo con un dataset pequeño.',
			'Demasiadas variables respecto al número de casos.',
		],
		escenarioA:
			'Un modelo con una sola variable intenta predecir la demanda y se equivoca en todos los periodos, también durante el entrenamiento.',
		escenarioB:
			'Un modelo con cientos de variables acierta el histórico casi al 100 % y falla con los datos del mes siguiente.',
		preguntaIds: ['4.1-q13'],
		objetivos: ['4.1#6'],
	},
];
