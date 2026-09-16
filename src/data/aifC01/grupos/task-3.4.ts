import type { GrupoTematico } from '@/data/aifC01/types';

export const gruposTask34: GrupoTematico[] = [
	{
		id: '3.4-g1',
		titulo: 'Enfoques para evaluar el desempeño de un FM',
		objetivos: ['3.4#1'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'Evaluar el desempeño de un modelo fundacional (FM) responde a una pregunta concreta: ¿sirve este modelo para esta tarea y para este negocio? No existe una medida única, y el examen agrupa los enfoques en tres familias complementarias:\n\n- **Evaluación con humanos en el bucle (human-in-the-loop)**: personas revisan y puntúan respuestas reales. Es la referencia cuando el criterio es subjetivo (tono, utilidad, seguridad) o cuando no existe una única respuesta correcta.\n- **Conjuntos de referencia (benchmark datasets)**: pruebas estandarizadas y reproducibles que permiten comparar modelos con las mismas preguntas y la misma métrica. Son objetivos y baratos de repetir, pero pueden no representar el caso de uso propio.\n- **Evaluación gestionada (Amazon Bedrock Model Evaluation)**: ejecuta la evaluación dentro del servicio, con conjuntos propios o integrados, y devuelve métricas comparables entre modelos y configuraciones.\n\nLa práctica recomendada es combinar capas: métricas automáticas para descartar candidatos, revisión humana para el criterio y métricas de negocio en producción.',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Usa **benchmark datasets** para comparar modelos candidatos con el mismo conjunto y descartar los que no alcanzan el umbral.',
					'Usa **human-in-the-loop** cuando la calidad depende del criterio (utilidad, tono, seguridad) o cuando el coste de un error es alto.',
					'Usa **Amazon Bedrock Model Evaluation** cuando quieras repetir la misma evaluación sobre varios modelos y configuraciones sin montar infraestructura.',
				],
				noUsar: [
					'No uses una única métrica automática como veredicto final: mide lo que el conjunto de prueba permite medir, no todo lo que importa.',
					'No evalúes solo con datos internos del propio equipo: un conjunto sesgado produce una confianza falsa.',
				],
			},
			{
				tipo: 'ejemplo',
				md: '```text\n1) Benchmark: el mismo conjunto de 200 preguntas para los tres modelos candidatos.\n2) Amazon Bedrock Model Evaluation: repetir la evaluación al cambiar el modelo o los parámetros.\n3) Human-in-the-loop: revisar una muestra y puntuar utilidad y tono.\n4) Decisión: elegir el modelo que cumple el umbral con el menor coste por interacción.\n```',
			},
			{
				tipo: 'clave',
				items: [
					'Human-in-the-loop evalúa criterio; los benchmarks comparan de forma reproducible; la evaluación gestionada automatiza la comparación.',
					'Los enfoques se combinan: ninguno cubre por sí solo calidad técnica y valor de negocio.',
					'Define el conjunto, la métrica y el umbral antes de empezar a medir.',
				],
			},
		],
		preguntasGuia: [
			'¿Qué enfoque de evaluación usarías cuando no existe una única respuesta correcta?',
			'¿Por qué un benchmark reproducible puede no representar tu caso de uso?',
			'¿Qué aporta Amazon Bedrock Model Evaluation frente a evaluar a mano cada modelo?',
		],
	},
	{
		id: '3.4-g2',
		titulo: 'Métricas para evaluar el desempeño de un FM',
		objetivos: ['3.4#2'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'Las métricas traducen «calidad» a un número comparable. Se eligen según el tipo de tarea:\n\n- **Métricas de clasificación** (precision, recall, F1, accuracy): se usan cuando el modelo etiqueta o clasifica. **Precision** mide cuántos de los positivos predichos son correctos; **recall**, cuántos de los positivos reales se detectaron; **F1** combina ambas en una media armónica; **accuracy** es la proporción de aciertos sobre el total.\n- **Métricas de similitud de texto** (ROUGE, BLEU, BERTScore): comparan la salida generada con una referencia. **ROUGE** se centra en el recuerdo de n-gramas o fragmentos (resúmenes); **BLEU** en la precisión de n-gramas y penaliza respuestas demasiado cortas (traducción); **BERTScore** compara significado mediante embeddings, no solo coincidencia literal.\n- **Evaluación con otro modelo (LLM-as-a-judge)**: un modelo puntúa las respuestas según una rúbrica. Escala bien y captura criterios abiertos, pero hereda los sesgos del juez y exige calibrar la rúbrica.\n\nNinguna métrica es universal: ROUGE y BLEU premian la coincidencia de superficie y castigan paráfrasis válidas; BERTScore y el jurado con LLM capturan significado, a cambio de menos transparencia y más coste.',
			},
			{
				tipo: 'comparacion',
				parId: 'precision-vs-recall',
			},
			{
				tipo: 'comparacion',
				parId: 'accuracy-vs-f1-score',
			},
			{
				tipo: 'comparacion',
				parId: 'rouge-vs-bleu',
			},
			{
				tipo: 'escenario',
				situacion:
					'Un equipo construye un asistente de resúmenes. Con ROUGE obtiene una puntuación alta, pero los revisores humanos señalan que el resumen más útil fue el que usó sinónimos y reordenó las ideas.',
				analisis:
					'ROUGE premia la coincidencia de n-gramas con la referencia, así que una paráfrasis correcta puede puntuar bajo. Conviene complementar con **BERTScore**, que compara significado mediante embeddings, y con revisión **human-in-the-loop** sobre una muestra.',
				servicio: 'Amazon Bedrock',
			},
			{
				tipo: 'errorComun',
				error: 'Elegir una sola métrica y tratar su valor como la calidad real del modelo (por ejemplo, decidir entre dos asistentes conversacionales con BLEU).',
				correccion:
					'Alinea la métrica con la tarea: similitud de n-gramas para traducción o resumen con referencia, similitud semántica y revisión humana para criterios abiertos. Declara siempre el conjunto de evaluación y el umbral antes de comparar.',
			},
			{
				tipo: 'clave',
				items: [
					'ROUGE = recuerdo de n-gramas o fragmentos; BLEU = precisión de n-gramas con penalización por brevedad; BERTScore = similitud semántica con embeddings.',
					'Precision = aciertos entre lo predicho como positivo; recall = aciertos entre lo que era positivo; F1 = equilibrio entre ambas.',
					'La accuracy puede engañar con clases desbalanceadas; el F1 de la clase minoritaria revela el problema.',
					'LLM-as-a-judge aporta criterio abierto a escala, pero no es infalible ni sustituye la revisión humana en decisiones críticas.',
				],
			},
		],
		preguntasGuia: [
			'¿Qué métrica prioriza quien no puede dejar pasar casos reales sin detectar?',
			'¿Por qué una accuracy alta puede ocultar un mal modelo?',
			'¿Qué diferencia hay entre medir coincidencia de n-gramas y medir significado?',
		],
	},
	{
		id: '3.4-g3',
		titulo: 'Cumplimiento de objetivos de negocio',
		objetivos: ['3.4#3'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'Un FM puede obtener buenas métricas técnicas y, aun así, no aportar valor. Evaluar si **cumple los objetivos de negocio** exige medir el efecto sobre las personas y los procesos:\n\n- **Productividad**: tiempo ahorrado por tarea, volumen de trabajo resuelto o reducción del esfuerzo manual. Se compara con la línea base previa al asistente.\n- **Participación del usuario (user engagement)**: adopción, uso recurrente y confianza en las respuestas. Un asistente que se abandona tras la primera semana no cumple su objetivo.\n- **Task engineering**: rediseñar la tarea y el flujo alrededor del modelo —qué decide la persona, qué decide la IA y en qué punto se revisa—. Si la tarea está mal delimitada, ninguna métrica de modelo la salvará.\n\nLa comparación honesta es contra la forma anterior de trabajar, no contra la perfección: se define un valor de referencia antes de desplegar y se mide el mismo indicador después.',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Cuando la decisión de continuar, ajustar o retirar el asistente depende del valor que aporta, no solo de su calidad técnica.',
					'Cuando varias áreas usan el asistente y quieres comparar el efecto entre equipos y tareas.',
					'Define la línea base antes de desplegar: sin valor de referencia no hay mejora demostrable.',
				],
				noUsar: [
					'No uses métricas de negocio para diagnosticar un fallo técnico concreto: para eso están las métricas del modelo y la evaluación por componentes.',
					'No resumas el valor de negocio en una única puntuación: productividad, adopción y diseño de la tarea miden cosas distintas.',
				],
			},
			{
				tipo: 'ejemplo',
				md: '```text\nObjetivo: reducir el tiempo de resolución de incidencias.\nLínea base: 14 minutos por incidencia (mes anterior).\nProductividad: tiempo medio tras el despliegue.\nEngagement: porcentaje de agentes que usan el asistente cada semana.\nTask engineering: el agente revisa y aprueba; el asistente redacta el borrador.\n```',
			},
			{
				tipo: 'clave',
				items: [
					'Productividad, engagement y diseño de la tarea son dimensiones distintas del mismo objetivo de negocio.',
					'Se compara contra una línea base definida antes de desplegar.',
					'Un buen resultado técnico no implica adopción ni valor para la organización.',
				],
			},
		],
		preguntasGuia: [
			'¿Qué mide la productividad de un asistente y contra qué se compara?',
			'¿Por qué la adopción forma parte de la evaluación del modelo?',
			'¿Qué significa rediseñar la tarea (task engineering) alrededor del modelo?',
		],
	},
	{
		id: '3.4-g4',
		titulo: 'Evaluación de aplicaciones construidas con FM',
		objetivos: ['3.4#4'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'Evaluar una **aplicación construida con FM** no es evaluar solo el modelo. En un sistema con recuperación (RAG), agentes o flujos de trabajo, la calidad emerge de varios componentes y un error puede nacer en cualquiera de ellos:\n\n- **RAG**: se evalúa la recuperación (¿se encontraron los fragmentos correctos?) y la generación con contexto (¿la respuesta se apoya en la evidencia recuperada y no en conocimiento inventado?). Una respuesta fluida pero no fundamentada es un fallo de grounding.\n- **Agentes**: se evalúa el recorrido completo —elección de herramientas, argumentos, número de pasos y si la tarea termina bien—. Una respuesta final plausible puede esconder pasos intermedios incorrectos.\n- **Flujos de trabajo (workflows)**: se evalúa cada etapa y el conjunto, con casos de prueba que recorran el flujo de extremo a extremo.\n\nLa regla práctica es evaluar por capas: componente, resultado final y efecto en el usuario.',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Cuando el sistema combina varios componentes y necesitas saber cuál degrada el resultado.',
					'Cuando quieres detectar respuestas no fundamentadas en sistemas con recuperación.',
					'Cuando un agente falla de forma intermitente y la respuesta final no lo refleja.',
				],
				noUsar: [
					'No evalúes solo la salida final si el sistema tiene varios pasos: enmascara el origen del fallo.',
					'No uses un único conjunto de preguntas para todas las capas: cada componente necesita sus propios casos.',
				],
			},
			{
				tipo: 'ejemplo',
				md: '```text\nCapa 1 - Recuperación: ¿el fragmento correcto está entre los recuperados?\nCapa 2 - Grounding: ¿la respuesta respeta el contexto recuperado?\nCapa 3 - Agente: ¿eligió bien la herramienta y completó la tarea?\nCapa 4 - Usuario: ¿la respuesta resolvió la necesidad sin escalado?\n```',
			},
			{
				tipo: 'clave',
				items: [
					'La calidad del sistema no es solo la calidad del modelo.',
					'RAG se evalúa por recuperación y grounding; los agentes, por recorrido y uso de herramientas.',
					'Evaluar por capas permite localizar el componente que falla.',
				],
			},
		],
		preguntasGuia: [
			'¿Por qué evaluar solo la respuesta final oculta fallos en una aplicación RAG?',
			'¿Qué pasos del recorrido de un agente conviene medir?',
			'¿Qué significa evaluar por capas un flujo de trabajo?',
		],
	},
	{
		id: '3.4-g5',
		titulo: 'Métricas de alineación con el objetivo de negocio',
		objetivos: ['3.4#5'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'Las **métricas de alineación con el objetivo de negocio** conectan el desempeño del sistema con el resultado que la organización busca. Las tres más habituales son:\n\n- **Tasa de finalización de tareas (task completion rate)**: porcentaje de usuarios que logran su objetivo sin abandonar ni escalar a una persona.\n- **Satisfacción del usuario (user satisfaction)**: valoración del resultado, medida con encuestas, puntuaciones o reutilización del asistente.\n- **Coste por interacción (cost per interaction)**: coste de atender una interacción, incluido el consumo de tokens y la infraestructura. El precio por tokens es un componente, no el resultado.\n\nEstas métricas se leen juntas: bajar el coste por interacción recortando contexto puede reducir la finalización de tareas. Un indicador aislado se puede optimizar a costa de los demás.',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Cuando necesitas decidir entre configuraciones que rinden parecido en calidad técnica.',
					'Cuando presentas el resultado del sistema a responsables de negocio, no solo a ingeniería.',
					'Cuando vigilas que una optimización de coste no degrade la experiencia.',
				],
				noUsar: [
					'No las uses para diagnosticar por qué una respuesta concreta es incorrecta: son indicadores agregados.',
					'No las midas una sola vez: la adopción y la satisfacción evolucionan con el uso.',
				],
			},
			{
				tipo: 'ejemplo',
				md: '```text\nTasa de finalización de tareas: 78 % de gestiones cerradas sin escalado.\nSatisfacción del usuario: 4,3 de 5 en la encuesta posterior.\nCoste por interacción: coste total de inferencia dividido entre interacciones atendidas.\nLectura conjunta: si el coste baja y la finalización también, no hay mejora.\n```',
			},
			{
				tipo: 'clave',
				items: [
					'Task completion rate = ¿lo consigue?; user satisfaction = ¿le sirve?; cost per interaction = ¿a qué coste?',
					'El precio por tokens es solo un componente del coste, no la medida del valor.',
					'Las métricas de alineación se interpretan en conjunto y contra una línea base.',
				],
			},
		],
		preguntasGuia: [
			'¿Qué mide la tasa de finalización de tareas?',
			'¿Por qué el coste por interacción no equivale al precio por tokens?',
			'¿Qué riesgo hay en optimizar una sola métrica de alineación?',
		],
	},
];
