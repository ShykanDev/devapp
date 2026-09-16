import type { GrupoTematico } from '@/data/aifC01/types';

export const gruposTask31: GrupoTematico[] = [
	{
		id: '3.1-g1',
		titulo: 'Criterios de selección de un modelo fundacional',
		objetivos: ['3.1#1'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'Un **modelo fundacional (FM)** no se elige por ser «el más potente», sino por encajar con los requisitos reales de la aplicación. Los criterios de selección que el examen agrupa son:\n\n- **Coste**: lo que cuesta cada llamada según los tokens de entrada y de salida, multiplicado por el volumen previsto. El contexto que envías también se paga.\n- **Modalidad**: qué acepta y qué produce el modelo (texto, imagen, audio, vídeo). Si hay que leer facturas escaneadas, el modelo debe ser multimodal.\n- **Latencia**: el tiempo hasta la primera respuesta y el tiempo total. Una interfaz conversacional exige respuestas rápidas; un proceso por lotes tolera más espera.\n- **Multilingüe**: la calidad en los idiomas reales del negocio, no solo en inglés.\n- **Tamaño del modelo**: número de parámetros; los modelos mayores suelen rendir más, pero cuestan y tardan más.\n- **Complejidad del modelo**: arquitectura y naturaleza de la tarea; un modelo mayor no siempre resuelve mejor una tarea estrecha.\n- **Personalización**: si hace falta adaptar el comportamiento con fine-tuning o destilación, o basta con instrucciones y contexto.\n- **Longitud de entrada y salida**: cuánto contexto cabe en una llamada y cuánto texto debe generar; condiciona el troceado, la calidad y el coste.\n- **Prompt caching**: reutilizar la parte estable del prompt evita reprocesarla y abarata las llamadas repetitivas.\n\nElegir un modelo es ponderar estos criterios según el caso de uso: no existe un modelo óptimo universal.',
			},
			{
				tipo: 'comparacion',
				parId: 'rag-vs-fine-tuning',
			},
			{
				tipo: 'escenario',
				situacion:
					'Una aseguradora quiere un asistente que responda en español y portugués sobre pólizas vigentes, con respuestas rápidas y consultando documentación que cambia cada semana.',
				analisis:
					'Los criterios decisivos son **multilingüe** (calidad real en ambos idiomas), **latencia** (uso conversacional) y **personalización mediante contexto actualizado**, que evita reentrenar cada semana. El equipo compara varios modelos con sus propios casos, mide el tiempo de respuesta y el coste por llamada, y descarta el modelo más grande porque añade latencia sin mejorar las respuestas.',
				servicio: 'Amazon Bedrock',
			},
			{
				tipo: 'errorComun',
				error: 'Elegir el modelo más grande y potente por defecto, dando por hecho que dará la mejor respuesta en cualquier tarea.',
				correccion:
					'Parte de los requisitos (idioma, modalidad, latencia, longitud de entrada) y evalúa varios modelos con casos representativos. Un modelo más pequeño puede cumplir el objetivo con menos coste y latencia; el tamaño no garantiza mejor resultado en tu tarea.',
			},
			{
				tipo: 'clave',
				items: [
					'Coste, latencia y longitud de entrada crecen juntos: más contexto en cada llamada es más gasto y más espera.',
					'Modalidad y multilingüe son requisitos eliminatorios: si el modelo no los cubre, ningún ajuste posterior lo arregla.',
					'La prompt caching reduce el coste cuando la parte estable del prompt se repite en muchas llamadas.',
				],
			},
			{
				tipo: 'ejemplo',
				md: '```text\nRequisito -> criterio que decide la elección\n- Facturas escaneadas con texto   -> modalidad (multimodal)\n- Chat interno en tres idiomas    -> multilingüe\n- Conversación fluida             -> latencia\n- Manual extenso en cada consulta -> longitud de entrada y troceado\n- Presupuesto ajustado            -> coste por token y prompt caching\n```',
			},
		],
		preguntasGuia: [
			'¿Qué criterio se vuelve eliminatorio si la aplicación procesa imágenes?',
			'¿Por qué el modelo más grande no es automáticamente la mejor elección?',
			'¿Cuándo ayuda la prompt caching al coste de la aplicación?',
		],
	},
	{
		id: '3.1-g2',
		titulo: 'Parámetros de inferencia y forma de la respuesta',
		objetivos: ['3.1#2'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'Los **parámetros de inferencia** son los ajustes de la llamada que determinan cómo el modelo genera la respuesta. No cambian lo que el modelo sabe; cambian cómo lo expresa.\n\n- **Temperatura**: controla el muestreo. Cerca de cero la salida es más estable y repetible, adecuada para clasificar, extraer datos o responder con precisión. Alta aumenta la variedad y la creatividad, a costa de más riesgo de desviarse del tema o de inventar.\n- **Longitud de entrada**: cuánto texto recibe el modelo (instrucciones, ejemplos, contexto recuperado). Una entrada más larga aporta información, cuesta más tokens y puede diluir la instrucción si incluye relleno.\n- **Longitud de salida**: cuánto texto puede generar. Una salida muy corta puede truncar la respuesta; una muy larga aumenta el coste, la latencia y la probabilidad de relleno innecesario.\n\nEl efecto conjunto es un intercambio: precisión frente a variedad, y riqueza de contexto frente a coste y latencia.',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Temperatura baja en tareas con una respuesta correcta o un formato estricto: clasificar, extraer campos, resumir hechos.',
					'Temperatura más alta en tareas generativas donde la variedad es valiosa: borradores de campaña, alternativas de redacción.',
					'Acota la longitud de salida cuando el resultado se inserta en una interfaz o en un campo concreto.',
				],
				noUsar: [
					'No esperes que subir la temperatura incremente el conocimiento del modelo: solo cambia el muestreo.',
					'No aumentes la longitud de entrada con documentos enteros «por si acaso»: trocea y recupera solo lo relevante.',
				],
			},
			{
				tipo: 'ejemplo',
				md: '```text\nClasificar reclamaciones por tipo:\n- temperatura: baja (misma entrada, misma etiqueta)\n- longitud de salida: corta (una categoría y una razón breve)\n\nGenerar tres titulares para una campaña:\n- temperatura: alta (variedad entre opciones)\n- longitud de salida: media (tres líneas)\n```',
			},
		],
		preguntasGuia: [
			'¿Qué pasa con la repetibilidad de la respuesta si la temperatura es muy alta?',
			'¿Cómo afecta la longitud de entrada al coste de cada llamada?',
			'¿En qué tareas conviene una temperatura baja?',
		],
	},
	{
		id: '3.1-g3',
		titulo: 'RAG, bases de conocimiento y almacenes vectoriales',
		objetivos: ['3.1#3', '3.1#4'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'La **Retrieval Augmented Generation (RAG)** combina dos pasos: **recuperar** información relevante de una fuente y **generar** la respuesta con el modelo, usando lo recuperado como contexto. El procedimiento típico es: los documentos se dividen en fragmentos (**chunking**), cada fragmento se convierte en un **embedding** (una representación numérica, es decir, un vector) y se guarda en una **base de datos vectorial**. Ante una consulta, el sistema busca los vectores más similares y entrega esos fragmentos al modelo junto con la pregunta.\n\nEl valor de negocio es directo: las respuestas se apoyan en **documentos propios, actualizados y con permisos**, el modelo no necesita reentrenarse cuando cambia la información y se reduce la invención de datos. Por eso aparece en soporte al cliente, búsqueda interna, asistentes sobre normativa, manuales técnicos o catálogos de producto.\n\n**Amazon Bedrock Knowledge Bases** es la capacidad gestionada que conecta las fuentes de datos con un almacén vectorial y orquesta la recuperación, sin construir el pipeline a mano.\n\nPara **almacenar los embeddings** dentro de una base de datos vectorial, el alcance del examen incluye:\n\n- **Amazon OpenSearch Service** cuando ya se usa un motor de búsqueda gestionado.\n- **Amazon Aurora** y **Amazon RDS for PostgreSQL** cuando los datos y el motor relacional ya están en uso.\n- **Amazon Neptune** para grafos, útil si las relaciones entre entidades importan.\n\nLa elección del almacén es un criterio de diseño más: añade un servicio a la arquitectura y debe justificarse con el volumen, el tipo de búsqueda y las capacidades del equipo.',
			},
			{
				tipo: 'comparacion',
				parId: 'vector-database-vs-knowledge-base',
			},
			{
				tipo: 'escenario',
				situacion:
					'Un fabricante quiere un asistente interno que responda sobre manuales técnicos y políticas de calidad, respetando los permisos de cada departamento y sin reentrenar el modelo con cada revisión de los documentos.',
				analisis:
					'Es un caso de **RAG** sobre una **base de conocimiento** gestionada: se indexan los manuales, se generan embeddings y en cada consulta se recuperan los fragmentos pertinentes que el usuario autorizado puede ver. Cuando cambia un manual, basta con reindexar la fuente; el modelo no se toca. El almacén vectorial se elige entre los servicios ya presentes en la arquitectura.',
				servicio: 'Amazon Bedrock',
			},
			{
				tipo: 'errorComun',
				error: 'Creer que RAG reentrena el modelo con los documentos de la empresa y que por eso «aprende» de ellos.',
				correccion:
					'RAG no modifica los pesos del modelo: recupera fragmentos en el momento de la consulta y los añade al prompt como contexto. Si necesitas cambiar el comportamiento permanente del modelo, eso es personalización (fine-tuning), no RAG.',
			},
			{
				tipo: 'clave',
				items: [
					'RAG = recuperar fragmentos relevantes + generar con ellos como contexto; el modelo no cambia.',
					'Embedding = representación vectorial del significado; la base de datos vectorial la almacena y la busca por similitud.',
					'La base de conocimiento orquesta indexación y recuperación; la base de datos vectorial es el almacén.',
					'OpenSearch Service, Aurora, Neptune y RDS for PostgreSQL son opciones para guardar embeddings.',
				],
			},
			{
				tipo: 'servicio',
				nombre: 'Amazon OpenSearch Service',
			},
		],
		preguntasGuia: [
			'¿Por qué un asistente RAG no necesita reentrenarse cuando cambia la documentación?',
			'¿Qué diferencia hay entre una base de datos vectorial y una base de conocimiento?',
			'¿Qué servicio elegirías para búsqueda semántica si ya tienes un motor de búsqueda gestionado?',
		],
	},
	{
		id: '3.1-g4',
		titulo: 'Coste de personalizar un modelo fundacional',
		objetivos: ['3.1#5'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'Personalizar un FM significa alinear su comportamiento con un dominio o un estilo. Las opciones se ordenan de menor a mayor inversión de datos y cómputo:\n\n- **Aprendizaje en contexto (in-context learning)**: el modelo no cambia; se le dan instrucciones y ejemplos en el prompt. Coste de desarrollo bajo, mayor coste por llamada al alargar la entrada.\n- **RAG**: se añade conocimiento externo recuperado en cada consulta. No toca los pesos; exige indexar y mantener las fuentes.\n- **Fine-tuning**: se reentrenan los pesos con datos etiquetados de la organización. Mejora la adherencia a un estilo o formato, pero exige datos de calidad, tiempo y un modelo que hay que versionar y volver a entrenar cuando el comportamiento deba cambiar.\n- **Destilación**: un modelo mayor genera ejemplos con los que se entrena un modelo menor y más barato de servir. Requiere datos de entrenamiento y un proceso de evaluación.\n- **Pre-entrenamiento**: entrenar un modelo desde cero. Es la opción más costosa en datos, cómputo y tiempo, y solo se justifica en casos muy específicos.\n\nLa regla práctica es empezar por lo barato y reversible (contexto, RAG, prompt caching) y subir de nivel solo cuando la evaluación demuestre que no alcanza.',
			},
			{
				tipo: 'comparacion',
				parId: 'rag-vs-fine-tuning',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Empieza por instrucciones y RAG cuando el problema es falta de conocimiento actualizado.',
					'Pasa a fine-tuning cuando el problema es de consistencia: formato, tono o criterio que el prompt no logra estabilizar.',
					'Considera destilación cuando la calidad ya está validada con un modelo grande y el coste de servirlo es el cuello de botella.',
				],
				noUsar: [
					'No hagas fine-tuning para incorporar hechos que cambian: los datos mutan y habría que reentrenar; eso es trabajo de RAG.',
					'No plantees pre-entrenamiento si un modelo existente con contexto ya cumple el objetivo.',
				],
			},
			{
				tipo: 'ejemplo',
				md: '```text\nNecesidad -> enfoque razonable\n- Conocer la normativa vigente         -> RAG sobre base de conocimiento\n- Escribir siempre en el tono de marca -> fine-tuning\n- Reducir coste manteniendo calidad    -> destilación + evaluación\n- Prototipo rápido y reversible        -> contexto y prompt engineering\n```',
			},
		],
		preguntasGuia: [
			'¿Qué enfoque de personalización no modifica los pesos del modelo?',
			'¿Por qué el fine-tuning no es la vía adecuada para incorporar hechos que cambian a menudo?',
			'¿Qué enfoque entrena un modelo menor con ejemplos de uno mayor?',
		],
	},
	{
		id: '3.1-g5',
		titulo: 'Agentes de IA y sus aplicaciones de negocio',
		objetivos: ['3.1#6'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'Un **agente de IA** es un sistema que usa un modelo fundacional para **decidir y actuar**: interpreta un objetivo, planifica pasos, invoca **herramientas** o servicios (una API, una consulta a una base de datos, una acción en un sistema interno), conserva memoria de lo ocurrido y comprueba el resultado antes de continuar. La diferencia con un asistente conversacional es que el agente no solo responde: ejecuta un flujo de varios pasos y toma decisiones intermedias.\n\nAplicaciones de negocio típicas: resolver incidencias de soporte consultando varios sistemas, tramitar solicitudes con reglas y verificaciones, automatizar tareas de investigación y resumen, y coordinar procesos entre departamentos. El beneficio es la automatización de tareas que antes exigían encadenar pasos manuales.\n\nEl riesgo cambia de naturaleza: un agente puede equivocarse **ejecutando una acción**, no solo escribiendo un texto. Por eso se combinan permisos mínimos, límites claros de lo que puede hacer, registro de cada paso y supervisión humana en las decisiones sensibles.',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Cuando la tarea requiere varios pasos y decisiones intermedias con datos de distintos sistemas.',
					'Cuando hay herramientas bien definidas que el agente puede invocar con permisos acotados.',
					'Cuando cada acción se puede registrar y auditar para revisar el resultado.',
				],
				noUsar: [
					'Cuando una regla fija resuelve el caso: un agente añadiría coste, latencia e imprevisibilidad.',
					'Cuando la acción es irreversible o de alto impacto y no hay revisión humana.',
					'Cuando no existe forma de verificar si la acción se realizó correctamente.',
				],
			},
			{
				tipo: 'escenario',
				situacion:
					'Un banco quiere automatizar la tramitación de solicitudes de cambio de domicilio: el sistema debe leer la solicitud, comprobar la identidad, actualizar el registro y avisar al cliente, dejando traza de cada paso.',
				analisis:
					'Es un caso de **agente de IA**: el modelo decide el siguiente paso e invoca herramientas sobre los sistemas internos, con memoria del estado de la solicitud. En AWS la arquitectura se apoya en **Amazon Bedrock AgentCore** para el ciclo de vida del agente y en **Strands Agents** para construirlo, siempre con permisos mínimos y registro de cada acción; las decisiones sensibles quedan con revisión humana.',
				servicio: 'Amazon Bedrock AgentCore',
			},
			{
				tipo: 'ejemplo',
				md: '```text\nObjetivo: resolver una incidencia de facturación\n1. Consultar el contrato del cliente (herramienta: CRM)\n2. Verificar el cargo duplicado (herramienta: facturación)\n3. Decidir: emitir abono o escalar\n4. Registrar la acción y notificar al cliente\nSi falta información -> pedirla o escalar a una persona\n```',
			},
		],
		preguntasGuia: [
			'¿Qué distingue a un agente de IA de un asistente que solo genera texto?',
			'¿Por qué un agente necesita permisos mínimos y registro de acciones?',
			'¿Cuándo NO conviene usar un agente?',
		],
	},
];
