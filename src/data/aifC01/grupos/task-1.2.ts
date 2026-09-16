import type { GrupoTematico } from '@/data/aifC01/types';

export const gruposTask12: GrupoTematico[] = [
	{
		id: '1.2-g1',
		titulo: 'Dónde aporta valor una solución de IA/ML',
		objetivos: ['1.2#1'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'La IA/ML aporta valor cuando el problema implica **volumen**, **variabilidad** o **predicción** que las reglas fijas no cubren bien. El examen agrupa ese valor en tres patrones:\n\n- **Asistir la decisión humana**: el modelo propone una recomendación, una prioridad o un borrador, y una persona conserva la decisión final.\n- **Escalabilidad de la solución**: el mismo criterio atiende muchos más casos que un equipo humano, sin reescribir reglas para cada uno.\n- **Automatización**: la tarea es repetitiva y su resultado es verificable, de modo que el sistema puede ejecutarla de principio a fin.\n\nAntes de elegir un servicio conviene formular el objetivo de negocio y el criterio de éxito; sin ellos no se puede saber si la IA aporta valor o solo añade complejidad.',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Cuando el criterio no se puede expresar como reglas fijas (lenguaje natural, imágenes, señales).',
					'Cuando el volumen de casos hace inviable la revisión manual y el coste de un error es tolerable.',
					'Cuando la respuesta ayuda a una persona a decidir más rápido, aunque no decida sola.',
				],
				noUsar: [
					'No la apliques si unas reglas deterministas resuelven el caso con precisión total y menor coste.',
					'No la apliques cuando no existe forma de medir si la salida es correcta.',
				],
			},
			{
				tipo: 'ejemplo',
				md: '```text\nCaso: priorizar tickets de soporte.\nAsistir la decisión humana -> el modelo ordena por urgencia y el agente decide.\nEscalabilidad -> el mismo criterio atiende miles de tickets al día.\nAutomatización -> los tickets de reinicio de contraseña se resuelven sin intervención.\n```',
			},
			{
				tipo: 'clave',
				items: [
					'Los tres patrones de valor son asistir la decisión, escalar la solución y automatizar.',
					'Automatizar exige que el resultado sea verificable; asistir la decisión tolera más incertidumbre.',
					'Sin un criterio de éxito medible, el valor de la IA es una suposición.',
				],
			},
		],
		preguntasGuia: [
			'¿En qué se diferencia asistir una decisión de automatizarla por completo?',
			'¿Qué gana una organización cuando el mismo modelo atiende muchos más casos?',
			'¿Por qué hay que definir el criterio de éxito antes de elegir el servicio?',
		],
	},
	{
		id: '1.2-g2',
		titulo: 'Cuándo NO es apropiada una solución de IA/ML',
		objetivos: ['1.2#2'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'La pregunta correcta no es «¿puede la IA resolver esto?» sino «¿es la opción de menor coste y menor riesgo para este problema?». Una solución de IA/ML no es apropiada cuando:\n\n- **El resultado debe ser exacto y determinista**: cálculos contables, totales de factura o validaciones normativas exigen un valor específico, no una predicción.\n- **El análisis de coste-beneficio no sale a cuenta**: el coste de datos, etiquetado, integración y mantenimiento supera el beneficio esperado.\n- **No hay datos representativos** del problema ni forma de medir el error.\n- **Una regla simple ya resuelve el caso** con precisión total y coste mínimo.\n\nReconocer este límite es parte del objective: una solución basada en reglas deterministas o una decisión humana puede ser la respuesta correcta del examen aunque el problema «suene» a inteligencia artificial.',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Usa reglas deterministas cuando el problema exige un valor exacto y auditable, no una estimación.',
					'Descarta el modelo cuando el coste total de la solución supera el beneficio esperado.',
					'Descarta el modelo cuando no hay datos suficientes ni una métrica para comprobar el resultado.',
				],
				noUsar: [
					'No descartes la IA/ML solo porque el caso sea crítico: a veces asiste la decisión sin decidir.',
					'No confundas «no apropiado hoy» con «imposible»: el análisis cambia si aparecen datos o presupuesto.',
				],
			},
			{
				tipo: 'errorComun',
				error: 'Asumir que todo problema de negocio se resuelve mejor con un modelo, aunque el caso pida un valor exacto.',
				correccion:
					'Empieza por el requisito: si la salida debe ser un número exacto, una regla determinista o una decisión cien por cien predecible, la IA/ML no es la herramienta adecuada.',
			},
			{
				tipo: 'ejemplo',
				md: '```text\nRequisito: calcular el impuesto de cada línea de factura con exactitud legal.\nAlternativa considerada: modelo de predicción.\nDecisión: regla determinista; el resultado debe ser exacto y verificable.\n\nRequisito: estimar qué clientes reducirán su consumo.\nDecisión: IA/ML; el resultado es una predicción con incertidumbre que el negocio puede asumir.\n```',
			},
		],
		preguntasGuia: [
			'¿Qué tipo de requisito descarta de entrada una solución de IA/ML?',
			'¿Qué costes hay que sumar antes de decidir que el modelo compensa?',
			'¿Por qué un caso crítico no siempre implica que la IA/ML sea inapropiada?',
		],
	},
	{
		id: '1.2-g3',
		titulo: 'Elegir la técnica: regresión, clasificación y clustering',
		objetivos: ['1.2#3'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'La técnica se elige por la **forma de la pregunta**, no por el sector ni por la tecnología:\n\n- **Regresión**: predice un valor numérico continuo (demanda, precio, tiempo de espera).\n- **Clasificación**: asigna una etiqueta de un conjunto conocido (fraude / no fraude, categoría de incidencia, sí / no).\n- **Clustering**: agrupa casos parecidos sin etiquetas previas; descubre segmentos que nadie definió de antemano.\n\nRegresión y clasificación son aprendizaje **supervisado**: necesitan ejemplos etiquetados, porque la respuesta correcta ya está en los datos históricos. El clustering es **no supervisado**: no hay etiqueta correcta que aprender y la agrupación se descubre por similitud entre los casos.\n\nConfundir la forma de la salida es el error más habitual al elegir técnica: si pides un número y obtienes una categoría, o al contrario, el problema no es del modelo sino de haber planteado mal la pregunta.',
			},
			{
				tipo: 'comparacion',
				parId: 'regression-vs-classification',
			},
			{
				tipo: 'clave',
				items: [
					'Regresión = número continuo; clasificación = etiqueta conocida; clustering = grupos sin etiqueta.',
					'El aprendizaje supervisado exige etiquetas; el no supervisado las descubre.',
					'La técnica depende de la forma de la salida esperada, no de la industria donde se aplique.',
				],
			},
			{
				tipo: 'errorComun',
				error: 'Usar un modelo de regresión para decidir entre categorías o etiquetar casos sin un conjunto de etiquetas conocido.',
				correccion:
					'Pregunta primero qué produce la salida: un número continuo (regresión), una etiqueta de un catálogo (clasificación) o un grupo descubierto sin etiquetas (clustering).',
			},
			{
				tipo: 'ejemplo',
				md: '```text\n¿Cuánto venderemos en marzo? -> regresión (valor numérico).\n¿Es fraudulenta esta transacción? -> clasificación (dos etiquetas).\n¿Qué grupos de clientes se comportan parecido? -> clustering (sin etiquetas).\n```',
			},
		],
		preguntasGuia: [
			'¿Qué distingue una predicción numérica de una etiqueta de categoría?',
			'¿Cuándo conviene una técnica no supervisada como el clustering?',
			'¿Qué tipo de datos de entrada exige cada técnica?',
		],
	},
	{
		id: '1.2-g4',
		titulo: 'Aplicaciones de la IA en el mundo real',
		objetivos: ['1.2#4'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'Las aplicaciones reales se describen por su **tipo de dato** y su **tarea**:\n\n- **Computer vision**: analizar imágenes o vídeo (detección de objetos, moderación de contenido, inspección de calidad).\n- **NLP**: comprender y generar texto (sentimiento, extracción de entidades, resumen).\n- **Speech recognition**: convertir voz en texto (subtítulos, transcripción de llamadas).\n- **Sistemas de recomendación**: ordenar productos o contenidos según el comportamiento previo.\n- **Detección de fraude**: localizar patrones anómalos en transacciones.\n- **Forecasting**: predecir series temporales para planificar inventario o capacidad.\n- **Bases de conocimiento**: responder preguntas a partir de documentación propia.\n- **Agentic AI**: agentes que planifican y usan herramientas para completar un flujo.\n\nReconocer el patrón ayuda a elegir la capacidad correcta en lugar de intentar resolver todo con un modelo generativo.',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Cuando el dato es texto, imagen, audio o una serie temporal: cada formato define una aplicación distinta.',
					'Cuando la organización ya tiene ejemplos del resultado esperado (transacciones revisadas, tickets resueltos).',
					'Cuando se busca aumentar la productividad con un asistente sobre documentación propia.',
				],
				noUsar: [
					'No elijas el patrón por moda: una tarea de clasificación no mejora por ser generativa.',
					'No abordes una base de conocimiento sin revisar la calidad y el gobierno de las fuentes.',
				],
			},
			{
				tipo: 'escenario',
				situacion:
					'Una aseguradora recibe llamadas, fotografías de daños y formularios en texto libre. Quiere acelerar la tramitación sin eliminar la revisión humana.',
				analisis:
					'Cada formato corresponde a una capacidad distinta: transcripción para las llamadas, computer vision para las fotografías y NLP para extraer campos de los formularios. El conocimiento disperso en las pólizas se puede consultar como base de conocimiento.',
				servicio: 'Amazon Transcribe',
			},
			{
				tipo: 'ejemplo',
				md: '```text\nImagen -> computer vision: detectar el daño y su gravedad.\nAudio de llamada -> speech: transcripción y resumen.\nTexto libre -> NLP: extraer cobertura y fechas.\nHistórico de compras -> recomendación: sugerir productos afines.\n```',
			},
		],
		preguntasGuia: [
			'¿Qué aplicación de IA analiza imágenes y cuál trabaja con texto?',
			'¿Cómo se reconoce un caso de base de conocimiento frente a uno de recomendación?',
			'¿Qué aporta un agente respecto a un asistente que solo responde?',
		],
	},
	{
		id: '1.2-g5',
		titulo: 'Servicios gestionados de IA/ML en AWS',
		objetivos: ['1.2#5'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'AWS ofrece capacidades de IA/ML ya entrenadas y expuestas como API, de modo que el equipo no entrena ni opera la infraestructura del modelo:\n\n- **Amazon SageMaker AI**: plataforma para construir, entrenar y desplegar modelos propios.\n- **Amazon Transcribe**: convierte audio en texto.\n- **Amazon Translate**: traduce texto entre idiomas.\n- **Amazon Comprehend**: extrae entidades, temas y sentimiento de un texto.\n- **Amazon Lex**: construye interfaces conversacionales de voz y texto.\n- **Amazon Polly**: convierte texto en voz.\n\nSon servicios **gestionados**: AWS se ocupa de la infraestructura y del modelo base, y el equipo se concentra en integrar la capacidad en su aplicación. Para una tarea estándar, partir de un servicio preentrenado suele ser más rápido y barato que entrenar un modelo propio.',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Cuando la tarea es estándar (transcribir, traducir, obtener el sentimiento) y no requiere un modelo propio.',
					'Cuando se quiere llegar a producción sin gestionar infraestructura de entrenamiento.',
					'Cuando se necesita una capacidad por API dentro de una aplicación existente.',
				],
				noUsar: [
					'No uses un servicio preentrenado cuando la decisión exige un modelo propio con controles muy específicos.',
					'No asumas que «gestionado» elimina el gobierno de datos: el acceso y el contenido siguen siendo responsabilidad del cliente.',
				],
			},
			{
				tipo: 'servicio',
				nombre: 'Amazon Comprehend',
			},
			{
				tipo: 'ejemplo',
				md: '```text\nEntrada: reseñas de clientes en varios idiomas.\nAmazon Translate -> texto en el idioma de trabajo.\nAmazon Comprehend -> sentimiento y entidades por reseña.\nAmazon Polly -> locución del resumen para el informe semanal.\n```',
			},
		],
		preguntasGuia: [
			'¿Qué servicio convierte voz en texto y cuál hace lo contrario?',
			'¿Qué diferencia hay entre Amazon SageMaker AI y un servicio preentrenado como Amazon Comprehend?',
			'¿Qué sigue siendo responsabilidad del cliente al usar un servicio gestionado?',
		],
	},
	{
		id: '1.2-g6',
		titulo: 'Modelos tradicionales frente a modelos fundacionales',
		objetivos: ['1.2#6'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'La elección entre un **modelo tradicional de ML** y un **modelo fundacional (FM)** no se decide por potencia, sino por los requisitos del caso:\n\n- **Requisitos regulatorios**: algunos entornos exigen saber con precisión qué datos entrenaron el modelo y cómo se versiona.\n- **Explicabilidad**: si la decisión debe justificarse ante un auditor o un cliente, un modelo tradicional con variables conocidas suele ser más fácil de explicar.\n- **Restricciones operativas**: latencia, coste por inferencia, disponibilidad regional y necesidad de ejecutar en el propio entorno.\n\nUn FM aporta flexibilidad y generaliza a tareas no previstas; un modelo tradicional aporta precisión, control y coste predecible en un problema acotado. Los requisitos del caso, y no la novedad tecnológica, deciden.',
			},
			{
				tipo: 'comparacion',
				parId: 'traditional-ml-vs-foundation-models',
			},
			{
				tipo: 'escenario',
				situacion:
					'Un banco debe aprobar o denegar solicitudes de crédito y justificar cada decisión ante el regulador. El equipo propone usar un modelo fundacional generativo para decidir.',
				analisis:
					'La redacción de la justificación puede apoyarse en un FM, pero la **decisión** exige explicabilidad y trazabilidad: un modelo tradicional con variables documentadas y métricas conocidas encaja mejor con el requisito regulatorio. La arquitectura puede combinar ambos.',
				servicio: 'Amazon SageMaker AI',
			},
			{
				tipo: 'ejemplo',
				md: '```text\nCaso A: predecir la demanda semanal -> modelo tradicional de regresión sobre datos históricos.\nCaso B: resumir y responder preguntas sobre normativa extensa -> modelo fundacional.\nCriterio: explicabilidad y regulación -> modelo tradicional; generalidad y lenguaje natural -> FM.\n```',
			},
		],
		preguntasGuia: [
			'¿Qué requisito inclina la balanza hacia un modelo tradicional?',
			'¿Qué gana un caso de uso cuando se elige un modelo fundacional?',
			'¿Pueden convivir ambos enfoques en la misma solución?',
		],
	},
];
