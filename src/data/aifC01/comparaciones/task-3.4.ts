import type { ParConfusionAifC01 } from '@/data/aifC01/types';

export const paresTask34: ParConfusionAifC01[] = [
	{
		id: 'precision-vs-recall',
		etiqueta: 'Precision vs recall',
		a: {
			titulo: 'Precision',
			resumen:
				'De las instancias que el modelo marcó como positivas, cuántas lo eran realmente. Mide el ruido de las alertas: una precision alta significa pocos falsos positivos.',
		},
		b: {
			titulo: 'Recall',
			resumen:
				'De las instancias que realmente eran positivas, cuántas detectó el modelo. Mide la cobertura: un recall alto significa pocos casos reales sin detectar.',
		},
		diferenciaClave:
			'Precision se calcula sobre lo predicho como positivo; recall, sobre lo que era positivo en realidad. Cuando dejar pasar un caso es grave (fraude, seguridad), prima el recall; cuando una falsa alarma tiene un coste alto, prima la precision.',
		cuandoA: [
			'Cuando cada alerta falsa tiene un coste alto (revisión manual, fricción con el usuario).',
			'Cuando el volumen de positivos previstos debe permanecer controlado.',
			'Cuando quieres medir la fiabilidad de las alertas que ya emite el modelo.',
		],
		cuandoB: [
			'Cuando dejar pasar un caso real es más grave que una falsa alarma (fraude, seguridad, salud).',
			'Cuando el conjunto tiene muchos negativos y la clase positiva es la que importa.',
			'Cuando necesitas medir la cobertura del modelo sobre los casos reales.',
		],
		escenarioA:
			'Un sistema marca cláusulas de riesgo en contratos. El equipo jurídico no puede revisar cientos de falsos avisos al día, así que prioriza que las alertas emitidas sean fiables.',
		escenarioB:
			'Un sistema de detección de fraude prioriza no dejar pasar ninguna operación fraudulenta, aunque aumenten las alertas que un analista deberá descartar después.',
		preguntaIds: ['3.4-q3'],
		objetivos: ['3.4#2'],
	},
	{
		id: 'accuracy-vs-f1-score',
		etiqueta: 'Accuracy vs F1 score',
		a: {
			titulo: 'Accuracy',
			resumen:
				'Proporción de predicciones correctas sobre el total. Es intuitiva, pero puede ser engañosa cuando las clases están desbalanceadas: acertar siempre la clase mayoritaria da una accuracy alta.',
		},
		b: {
			titulo: 'F1 score',
			resumen:
				'Media armónica de precision y recall. Resume el equilibrio entre no equivocarse al marcar (precision) y no dejar casos sin detectar (recall), y penaliza que una de las dos sea baja.',
		},
		diferenciaClave:
			'La accuracy cuenta todos los aciertos por igual; el F1 se centra en el desempeño sobre la clase positiva y exige equilibrio entre precision y recall. Con clases desbalanceadas, la accuracy puede ser alta mientras el F1 de la clase minoritaria es muy bajo.',
		cuandoA: [
			'Cuando las clases están razonablemente balanceadas y todos los errores tienen un coste similar.',
			'Para una lectura rápida del desempeño global del modelo.',
		],
		cuandoB: [
			'Cuando la clase de interés es minoritaria (fraude, fallo, incidente crítico).',
			'Cuando hay que equilibrar falsos positivos y falsos negativos en un único número.',
			'Cuando una accuracy alta oculta un mal desempeño sobre la clase que importa.',
		],
		escenarioA:
			'Un clasificador separa imágenes de producto en dos categorías de tamaño parecido y el equipo quiere una primera señal de su desempeño general.',
		escenarioB:
			'Solo el 3 % de los tickets son críticos. El modelo acierta el 95 % de las etiquetas, pero casi no detecta los críticos: la accuracy es alta y el F1 de esa clase revela el problema.',
		preguntaIds: ['3.4-q4'],
		objetivos: ['3.4#2'],
	},
	{
		id: 'rouge-vs-bleu',
		etiqueta: 'ROUGE vs BLEU',
		a: {
			titulo: 'ROUGE',
			resumen:
				'Familia de métricas orientada al recuerdo: mide cuántos n-gramas o fragmentos de la referencia aparecen en la salida. Se usa sobre todo en resumen, donde importa no omitir contenido.',
		},
		b: {
			titulo: 'BLEU',
			resumen:
				'Métrica orientada a la precisión de n-gramas: mide cuántos n-gramas de la salida aparecen en la referencia y aplica una penalización por respuestas demasiado cortas. Es habitual en traducción automática.',
		},
		diferenciaClave:
			'ROUGE pregunta cuánto de la referencia está en la salida; BLEU pregunta cuánto de la salida está en la referencia. Ambas comparan superficie (n-gramas), no significado, y ninguna sustituye a la revisión humana.',
		cuandoA: [
			'Resúmenes y tareas donde omitir información es el error principal.',
			'Cuando existe una referencia escrita y quieres medir la cobertura del contenido.',
			'Para comparar variantes de un mismo sistema con el mismo conjunto de referencia.',
		],
		cuandoB: [
			'Traducción automática, donde importa la fidelidad de la formulación.',
			'Cuando quieres penalizar salidas incompletas o demasiado cortas.',
			'Para comparar configuraciones sobre el mismo corpus de referencia.',
		],
		escenarioA:
			'Un equipo resume informes financieros de 20 páginas en cinco puntos. El riesgo es dejar fuera una cifra clave, así que prioriza no omitir contenido presente en la referencia.',
		escenarioB:
			'Un equipo traduce manuales técnicos y detecta que algunas traducciones son correctas pero demasiado escuetas. BLEU, con su penalización por brevedad, refleja mejor ese problema.',
		preguntaIds: ['3.4-q5'],
		objetivos: ['3.4#2'],
	},
];
