import type { ParConfusionAifC01 } from '@/data/aifC01/types';

export const paresTask33: ParConfusionAifC01[] = [
	{
		id: 'pre-training-vs-fine-tuning',
		etiqueta: 'Pre-training vs fine-tuning',
		a: {
			titulo: 'Pre-training (y continuous pre-training)',
			resumen:
				'Entrenamiento inicial o continuado con grandes volúmenes de datos sin etiquetar. Construye y actualiza el conocimiento de base del modelo; es la etapa más costosa y la menos dirigida a una tarea concreta.',
		},
		b: {
			titulo: 'Fine-tuning',
			resumen:
				'Ajuste del modelo ya preentrenado con un conjunto más pequeño y específico, normalmente etiquetado, para fijar comportamiento, formato, tono o criterio de un dominio.',
		},
		diferenciaClave:
			'El pre-training aporta conocimiento general con datos sin etiquetar; el fine-tuning adapta el comportamiento con ejemplos dirigidos. Solo el pre-training (también su versión continua) incorpora documentación masiva y sin etiquetar; el fine-tuning no actualiza hechos por sí mismo.',
		cuandoA: [
			'Cuando falta capacidad general o el modelo debe aprender un idioma, un dominio o una jerga a partir de documentación sin etiquetar.',
			'Cuando el volumen de datos disponible es muy grande y no hay etiquetas fiables.',
			'Cuando el conocimiento del dominio cambia y hay documentación nueva y abundante que el modelo debe incorporar.',
		],
		cuandoB: [
			'Cuando el conocimiento general ya basta y lo que falta es seguir instrucciones, respetar un formato o adoptar un tono.',
			'Cuando existen ejemplos etiquetados y representativos del criterio que se quiere enseñar.',
			'Cuando necesitas que la respuesta sea consistente con un estilo o una taxonomía propia.',
		],
		escenarioA:
			'Un grupo editorial quiere que el modelo maneje la terminología de un sector muy técnico y dispone de décadas de documentación sin etiquetar. La ruta natural es el pre-training continuo sobre ese corpus, no un ajuste con pares de instrucción y respuesta que aún no existen.',
		escenarioB:
			'Una aseguradora tiene el conocimiento general cubierto y necesita informes con su estructura y sus términos, y ya cuenta con miles de informes aprobados. El fine-tuning supervisado con esos ejemplos es la vía proporcionada; repetir el pre-training desde cero sería desproporcionado.',
		preguntaIds: ['3.3-q3'],
		objetivos: ['3.3#1', '3.3#2'],
	},
	{
		id: 'training-vs-inference',
		etiqueta: 'Entrenamiento vs inferencia',
		a: {
			titulo: 'Entrenamiento',
			resumen:
				'Proceso previo que modifica los pesos del modelo (pre-training, fine-tuning, continuous pre-training, destilación). Es un gasto puntual y planificado, con datos y evaluación propios.',
		},
		b: {
			titulo: 'Inferencia',
			resumen:
				'Uso del modelo ya entrenado para responder peticiones. No cambia los pesos; su coste es recurrente y crece con los tokens de entrada y de salida.',
		},
		diferenciaClave:
			'El entrenamiento cambia el modelo y ocurre antes de usarlo; la inferencia solo aplica lo aprendido y se repite en cada petición. Confundir ambos lleva a proponer un ajuste cuando el problema real es de contexto, coste o latencia en el uso.',
		cuandoA: [
			'Cuando el modelo carece de comportamiento, formato o conocimiento de dominio que no se puede aportar desde el prompt.',
			'Cuando existe un conjunto de datos propio con el que medir una mejora y asumir el coste puntual del proceso.',
		],
		cuandoB: [
			'Cuando el modelo ya tiene la capacidad necesaria y solo hay que aportar el contexto o los datos vigentes de cada caso.',
			'Cuando el problema es de coste por token, latencia o rendimiento sostenido del servicio.',
		],
		escenarioA:
			'Un equipo observa que el asistente ignora sistemáticamente su política de formato y decide ajustar el modelo con ejemplos que muestran la estructura esperada. Es una decisión de entrenamiento: los pesos cambian y el efecto persiste entre llamadas.',
		escenarioB:
			'El mismo equipo detecta que las respuestas tardan y que el gasto crece por prompts demasiado largos. Es un problema de inferencia: se resuelve acortando el contexto, cacheando lo estable o destilando a un modelo menor, sin tocar el criterio de negocio.',
		preguntaIds: ['3.3-q2'],
		objetivos: ['3.3#1'],
	},
];
