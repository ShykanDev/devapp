import type { TarjetaAifC01 } from '@/data/aifC01/types';

export const tarjetasTask12: TarjetaAifC01[] = [
	{
		id: '1.2-t1',
		taskId: '1.2',
		objetivos: ['1.2#1'],
		tipo: 'definicion',
		frente:
			'Un modelo propone la prioridad de cada incidencia y una persona decide qué hacer con ella. ¿Qué patrón de valor de la IA/ML ilustra el caso y por qué no es automatización?',
		reverso:
			'Es asistir la decisión humana: el modelo recomienda y la persona conserva la decisión final. Automatizar exigiría que el sistema resolviera el caso de principio a fin sin intervención.',
	},
	{
		id: '1.2-t2',
		taskId: '1.2',
		objetivos: ['1.2#2'],
		tipo: 'tradeoff',
		frente:
			'Hay datos disponibles y la predicción sería posible, pero el coste de etiquetado, integración y mantenimiento supera el ahorro esperado. ¿Qué criterio decide y qué se concluye?',
		reverso:
			'El análisis de coste-beneficio: que un problema sea resoluble no significa que la solución esté justificada. Si el coste total supera el beneficio, la conclusión es no usar IA/ML.',
	},
	{
		id: '1.2-t3',
		taskId: '1.2',
		objetivos: ['1.2#3'],
		tipo: 'diferencia',
		frente:
			'Un caso pide «cuánto tardará» y otro pide «es fraude o no». Ambos tienen datos históricos etiquetados. ¿Qué técnica corresponde a cada uno?',
		reverso:
			'«Cuánto tardará» es regresión, porque la salida es un número continuo. «Es fraude o no» es clasificación, porque la salida es una etiqueta de un conjunto conocido. Ambas son supervisadas.',
	},
	{
		id: '1.2-t4',
		taskId: '1.2',
		objetivos: ['1.2#3'],
		tipo: 'definicion',
		frente:
			'El negocio quiere segmentar clientes con comportamientos parecidos pero no tiene categorías previas ni etiquetas asignadas. ¿Qué técnica aplica y qué la hace distinta?',
		reverso:
			'Clustering: aprendizaje no supervisado que agrupa casos por similitud sin etiquetas. No existe una «respuesta correcta» que aprender, porque las categorías se descubren a partir de los datos.',
	},
	{
		id: '1.2-t5',
		taskId: '1.2',
		objetivos: ['1.2#4'],
		tipo: 'diferencia',
		frente:
			'Un caso analiza fotografías de daños y otro extrae la cobertura de un formulario en texto libre. ¿Son la misma aplicación de IA?',
		reverso:
			'No. Las imágenes corresponden a computer vision y el texto libre a NLP. El tipo de dato de entrada determina la aplicación, aunque ambos alimenten el mismo proceso de negocio.',
	},
	{
		id: '1.2-t6',
		taskId: '1.2',
		objetivos: ['1.2#5'],
		tipo: 'servicio',
		frente:
			'Necesitas extraer entidades, temas y sentimiento de un conjunto de reseñas de clientes sin entrenar un modelo propio. ¿Qué servicio gestionado de AWS usas y cómo se distingue de los demás?',
		reverso:
			'Amazon Comprehend, que analiza texto. Amazon Polly convierte texto en voz, Amazon Translate cambia de idioma y Amazon Lex construye interfaces conversacionales.',
	},
	{
		id: '1.2-t7',
		taskId: '1.2',
		objetivos: ['1.2#6'],
		tipo: 'diferencia',
		frente:
			'Un caso exige justificar la decisión ante un auditor con las variables utilizadas; otro pide resumir normativa extensa y responder preguntas. ¿Qué enfoque conviene a cada uno?',
		reverso:
			'La decisión explicable encaja con un modelo tradicional de variables documentadas; el trabajo con lenguaje natural y tareas variadas encaja con un modelo fundacional. La arquitectura puede combinar ambos.',
	},
	{
		id: '1.2-t8',
		taskId: '1.2',
		objetivos: ['1.2#6'],
		tipo: 'riesgo',
		frente:
			'Un equipo elige un modelo fundacional para una decisión regulada y descubre que no puede justificar con precisión por qué el modelo produjo cada resultado. ¿Qué requisito se ha descuidado?',
		reverso:
			'La explicabilidad y la trazabilidad del modelo. Cuando el caso exige justificar decisiones, hay que evaluar este requisito antes de elegir el enfoque, no después de desplegarlo.',
	},
];
