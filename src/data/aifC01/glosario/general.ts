import type { TerminoAifC01 } from '@/data/aifC01/types';

export const glosarioGeneralAifC01: TerminoAifC01[] = [
	{
		id: 'prompt',
		termino: 'Prompt',
		definicion:
			'Entrada completa que recibe un modelo fundacional antes de generar: instrucciones, contexto, datos y restricciones.',
		dominios: ['dominio-3'],
		relacionados: ['prompt-engineering', 'instruccion', 'contexto'],
	},
	{
		id: 'prompt-engineering',
		termino: 'Prompt engineering',
		definicion:
			'Disciplina de diseñar, probar y mantener prompts para obtener respuestas útiles y consistentes de un modelo fundacional.',
		dominios: ['dominio-3'],
		relacionados: ['prompt', 'experimentacion', 'plantilla-de-prompt'],
	},
	{
		id: 'contexto',
		termino: 'Contexto',
		definicion:
			'Información de apoyo que se aporta al modelo porque no puede conocerla por sí sola, como políticas internas o fragmentos recuperados.',
		dominios: ['dominio-3'],
		relacionados: ['prompt', 'grounding'],
	},
	{
		id: 'instruccion',
		termino: 'Instrucción',
		definicion:
			'Parte del prompt que describe la tarea que debe realizar el modelo y el criterio con el que se juzgará el resultado.',
		dominios: ['dominio-3'],
		relacionados: ['prompt', 'prompt-negativo', 'especificidad'],
	},
	{
		id: 'prompt-negativo',
		termino: 'Prompt negativo',
		definicion:
			'Indicación explícita de lo que el modelo no debe hacer ni incluir: formato, tono, temas o datos sensibles.',
		dominios: ['dominio-3'],
		relacionados: ['instruccion', 'guardrail'],
	},
	{
		id: 'zero-shot',
		termino: 'Zero-shot',
		definicion:
			'Técnica en la que se pide la tarea sin proporcionar ningún ejemplo resuelto en el prompt.',
		dominios: ['dominio-3'],
		relacionados: ['few-shot', 'single-shot'],
	},
	{
		id: 'single-shot',
		termino: 'Single-shot',
		definicion:
			'Técnica que incluye un único ejemplo resuelto para fijar el formato y el criterio esperado.',
		dominios: ['dominio-3'],
		relacionados: ['few-shot', 'zero-shot'],
	},
	{
		id: 'few-shot',
		termino: 'Few-shot',
		definicion:
			'Técnica que incluye varios ejemplos resueltos dentro del prompt para enseñar el criterio sin reentrenar el modelo.',
		dominios: ['dominio-3'],
		relacionados: ['zero-shot', 'single-shot', 'plantilla-de-prompt'],
	},
	{
		id: 'chain-of-thought',
		termino: 'Chain-of-thought',
		definicion:
			'Técnica que pide al modelo mostrar los pasos intermedios de su razonamiento antes de dar la respuesta final.',
		dominios: ['dominio-3'],
		relacionados: ['zero-shot', 'especificidad'],
	},
	{
		id: 'plantilla-de-prompt',
		termino: 'Plantilla de prompt',
		definicion:
			'Texto de prompt con partes fijas y variables que se reutiliza en varias llamadas o aplicaciones.',
		dominios: ['dominio-3'],
		relacionados: ['prompt-management', 'version-de-prompt', 'few-shot'],
	},
	{
		id: 'prompt-management',
		termino: 'Prompt Management',
		definicion:
			'Capacidad de Amazon Bedrock para almacenar prompts fuera del código de la aplicación y explotarlos por versión o alias.',
		dominios: ['dominio-3'],
		relacionados: ['version-de-prompt', 'alias-de-prompt', 'amazon-bedrock'],
	},
	{
		id: 'version-de-prompt',
		termino: 'Versión de prompt',
		definicion:
			'Instantánea inmutable de un prompt gestionado que permite saber qué texto produjo cada respuesta.',
		dominios: ['dominio-3'],
		relacionados: ['alias-de-prompt', 'prompt-management'],
	},
	{
		id: 'alias-de-prompt',
		termino: 'Alias de prompt',
		definicion:
			'Puntero con nombre que las aplicaciones consumen y que se puede reasignar a otra versión del prompt sin desplegar.',
		dominios: ['dominio-3'],
		relacionados: ['version-de-prompt', 'prompt-management'],
	},
	{
		id: 'guardrail',
		termino: 'Guardrail',
		definicion:
			'Control que acota el comportamiento del modelo y filtra entradas o salidas según políticas definidas.',
		dominios: ['dominio-3'],
		relacionados: ['prompt-negativo', 'salida-verificable'],
	},
	{
		id: 'prompt-injection',
		termino: 'Prompt injection',
		definicion:
			'Inserción de instrucciones maliciosas en el contenido que procesa el modelo, con el objetivo de alterar su comportamiento.',
		dominios: ['dominio-3'],
		relacionados: ['hijacking', 'poisoning', 'jailbreaking'],
	},
	{
		id: 'hijacking',
		termino: 'Hijacking (secuestro)',
		definicion:
			'Consecuencia de una inyección exitosa: el modelo abandona la tarea original y sigue las instrucciones del atacante.',
		dominios: ['dominio-3'],
		relacionados: ['prompt-injection', 'poisoning'],
	},
	{
		id: 'poisoning',
		termino: 'Poisoning (envenenamiento)',
		definicion:
			'Manipulación del contenido del que se alimenta el modelo —datos de entrenamiento o fuentes de conocimiento— para sesgar sus respuestas.',
		dominios: ['dominio-3'],
		relacionados: ['prompt-injection', 'exposure'],
	},
	{
		id: 'exposure',
		termino: 'Exposure (exposición)',
		definicion:
			'Filtración de información sensible incluida en el prompt, como instrucciones internas, credenciales o datos personales.',
		dominios: ['dominio-3'],
		relacionados: ['poisoning', 'guardrail'],
	},
	{
		id: 'jailbreaking',
		termino: 'Jailbreaking',
		definicion:
			'Intento deliberado del usuario de eludir las reglas de seguridad del modelo para obtener contenido restringido.',
		dominios: ['dominio-3'],
		relacionados: ['prompt-injection', 'guardrail'],
	},
	{
		id: 'especificidad',
		termino: 'Especificidad',
		definicion:
			'Cualidad de un prompt que declara con precisión la tarea, el público y el criterio de éxito, sin ambigüedad.',
		dominios: ['dominio-3'],
		relacionados: ['concision', 'instruccion'],
	},
	{
		id: 'concision',
		termino: 'Concisión',
		definicion:
			'Cualidad de un prompt que elimina la información redundante para no diluir la instrucción ni encarecer la inferencia.',
		dominios: ['dominio-3'],
		relacionados: ['especificidad', 'experimentacion'],
	},
	{
		id: 'experimentacion',
		termino: 'Experimentación',
		definicion:
			'Práctica de cambiar una variable del prompt por iteración y comparar resultados sobre un conjunto de casos de prueba.',
		dominios: ['dominio-3'],
		relacionados: ['prompt-engineering', 'salida-verificable'],
	},
	{
		id: 'salida-verificable',
		termino: 'Salida verificable',
		definicion:
			'Respuesta con formato comprobable (por ejemplo, campos fijos) que la aplicación puede validar antes de usarla.',
		dominios: ['dominio-3'],
		relacionados: ['guardrail', 'experimentacion'],
	},
	{
		id: 'amazon-bedrock',
		termino: 'Amazon Bedrock',
		definicion:
			'Servicio gestionado de AWS para acceder a modelos fundacionales y construir aplicaciones de IA generativa.',
		dominios: ['dominio-3'],
		relacionados: ['prompt-management', 'guardrail'],
	},
	{
		id: 'grounding',
		termino: 'Grounding',
		definicion:
			'Anclaje de las respuestas del modelo a fuentes de información verificables, en lugar de depender solo del conocimiento aprendido.',
		dominios: ['dominio-3'],
		relacionados: ['contexto'],
	},
	{
		id: 'inteligencia-artificial',
		termino: 'Inteligencia artificial (IA)',
		definicion:
			'Campo que agrupa los sistemas capaces de realizar tareas asociadas a la inteligencia humana, como percibir, decidir o generar contenido.',
		dominios: ['dominio-1'],
		relacionados: ['machine-learning', 'ia-generativa', 'modelo-fundacional'],
	},
	{
		id: 'machine-learning',
		termino: 'Machine learning (ML)',
		definicion:
			'Subcampo de la IA en el que un sistema aprende patrones a partir de datos en lugar de seguir reglas programadas de forma explícita.',
		dominios: ['dominio-1'],
		relacionados: ['inteligencia-artificial', 'entrenamiento', 'inferencia'],
	},
	{
		id: 'ia-generativa',
		termino: 'IA generativa (GenAI)',
		definicion:
			'Rama del ML que produce contenido nuevo —texto, imagen, audio o código— a partir de un modelo entrenado con grandes volúmenes de datos.',
		dominios: ['dominio-1'],
		relacionados: ['inteligencia-artificial', 'modelo-fundacional', 'llm'],
	},
	{
		id: 'modelo-fundacional',
		termino: 'Modelo fundacional (FM)',
		definicion:
			'Modelo de gran tamaño entrenado con datos amplios y diversos que se adapta a muchas tareas con ajuste o prompting, sin reentrenarse desde cero.',
		dominios: ['dominio-1'],
		relacionados: ['llm', 'ia-generativa', 'entrenamiento'],
	},
	{
		id: 'entrenamiento',
		termino: 'Entrenamiento',
		definicion:
			'Proceso en el que el modelo ajusta sus parámetros a partir de datos para aprender el comportamiento que se espera de él.',
		dominios: ['dominio-1', 'dominio-3'],
		relacionados: ['inferencia', 'fine-tuning', 'modelo-fundacional'],
	},
	{
		id: 'inferencia',
		termino: 'Inferencia',
		definicion:
			'Uso de un modelo ya entrenado para obtener una predicción o una respuesta; es la fase que consume cómputo en producción.',
		dominios: ['dominio-1'],
		relacionados: ['entrenamiento', 'precio-por-tokens', 'metricas-de-modelo'],
	},
	{
		id: 'metricas-de-modelo',
		termino: 'Métricas de modelo',
		definicion:
			'Medidas cuantitativas del desempeño del modelo (accuracy, precision, recall, F1) que permiten comparar versiones y detectar regresiones.',
		dominios: ['dominio-1', 'dominio-3'],
		relacionados: ['inferencia', 'modelo-fundacional'],
	},
	{
		id: 'llm',
		termino: 'LLM (large language model)',
		definicion:
			'Modelo fundacional de lenguaje con miles de millones de parámetros que genera texto a partir de una secuencia de entrada.',
		dominios: ['dominio-1', 'dominio-2'],
		relacionados: ['modelo-fundacional', 'ia-generativa', 'token'],
	},
	{
		id: 'token',
		termino: 'Token',
		definicion:
			'Unidad mínima en la que el modelo fragmenta el texto; la facturación y los límites de contexto se expresan en tokens.',
		dominios: ['dominio-2'],
		relacionados: ['precio-por-tokens', 'embeddings', 'llm'],
	},
	{
		id: 'embeddings',
		termino: 'Embeddings',
		definicion:
			'Representaciones vectoriales de texto, imágenes u otros datos que sitúan cerca lo semánticamente parecido.',
		dominios: ['dominio-2', 'dominio-3'],
		relacionados: ['token', 'base-de-datos-vectorial', 'rag'],
	},
	{
		id: 'precio-por-tokens',
		termino: 'Precio por tokens',
		definicion:
			'Modelo de coste en el que se paga por el volumen de tokens de entrada y de salida procesados en cada llamada al modelo.',
		dominios: ['dominio-2'],
		relacionados: ['token', 'inferencia'],
	},
	{
		id: 'agente-ia',
		termino: 'Agente de IA',
		definicion:
			'Sistema que, además de generar texto, planifica y ejecuta acciones con herramientas externas para cumplir un objetivo.',
		dominios: ['dominio-2'],
		relacionados: ['mcp', 'modelo-fundacional'],
	},
	{
		id: 'mcp',
		termino: 'Model Context Protocol (MCP)',
		definicion:
			'Protocolo abierto que estandariza cómo un agente se conecta a herramientas y fuentes de datos externas.',
		dominios: ['dominio-2'],
		relacionados: ['agente-ia', 'modelo-fundacional'],
	},
	{
		id: 'alucinacion',
		termino: 'Alucinación',
		definicion:
			'Respuesta plausible pero incorrecta o inventada que el modelo presenta con seguridad y sin base en una fuente.',
		dominios: ['dominio-2', 'dominio-5'],
		relacionados: ['grounding', 'veracidad', 'rag'],
	},
	{
		id: 'rag',
		termino: 'RAG (Retrieval Augmented Generation)',
		definicion:
			'Técnica que recupera fragmentos relevantes de una fuente de conocimiento y los añade al contexto para fundamentar la respuesta.',
		dominios: ['dominio-3'],
		relacionados: ['grounding', 'base-de-conocimiento', 'embeddings'],
	},
	{
		id: 'base-de-conocimiento',
		termino: 'Base de conocimiento',
		definicion:
			'Colección indexada de documentos que un sistema de IA generativa consulta para responder con información propia y actualizada.',
		dominios: ['dominio-3'],
		relacionados: ['rag', 'base-de-datos-vectorial', 'embeddings'],
	},
	{
		id: 'base-de-datos-vectorial',
		termino: 'Base de datos vectorial',
		definicion:
			'Almacén optimizado para guardar embeddings y recuperar por similitud los vectores más cercanos a una consulta.',
		dominios: ['dominio-3'],
		relacionados: ['embeddings', 'base-de-conocimiento'],
	},
	{
		id: 'fine-tuning',
		termino: 'Fine-tuning',
		definicion:
			'Ajuste de un modelo ya entrenado con datos propios y etiquetados para especializarlo en una tarea o dominio.',
		dominios: ['dominio-3'],
		relacionados: ['preentrenamiento', 'rag', 'entrenamiento'],
	},
	{
		id: 'preentrenamiento',
		termino: 'Pre-entrenamiento',
		definicion:
			'Fase inicial en la que un modelo aprende representaciones generales del lenguaje a partir de grandes corpus sin etiquetar.',
		dominios: ['dominio-3'],
		relacionados: ['fine-tuning', 'entrenamiento'],
	},
	{
		id: 'ia-responsable',
		termino: 'IA responsable',
		definicion:
			'Conjunto de principios —fairness, robustez, seguridad, inclusividad y veracidad— que guían el diseño y el uso de sistemas de IA.',
		dominios: ['dominio-4'],
		relacionados: ['sesgo', 'fairness', 'veracidad', 'transparencia'],
	},
	{
		id: 'sesgo',
		termino: 'Sesgo (bias)',
		definicion:
			'Desviación sistemática de los resultados del modelo que perjudica a determinados grupos o refleja prejuicios de los datos.',
		dominios: ['dominio-4'],
		relacionados: ['fairness', 'varianza', 'ia-responsable'],
	},
	{
		id: 'fairness',
		termino: 'Fairness',
		definicion:
			'Cualidad de un sistema que trata a los distintos grupos de forma equitativa y sin ventajas ni perjuicios indebidos.',
		dominios: ['dominio-4'],
		relacionados: ['sesgo', 'veracidad', 'ia-responsable'],
	},
	{
		id: 'varianza',
		termino: 'Varianza (variance)',
		definicion:
			'Sensibilidad del modelo a las particularidades de los datos de entrenamiento; una varianza alta produce sobreajuste.',
		dominios: ['dominio-4'],
		relacionados: ['sesgo', 'sobreajuste', 'subajuste'],
	},
	{
		id: 'sobreajuste',
		termino: 'Sobreajuste (overfitting)',
		definicion:
			'El modelo memoriza el conjunto de entrenamiento y pierde capacidad de generalizar ante datos nuevos.',
		dominios: ['dominio-4'],
		relacionados: ['subajuste', 'varianza'],
	},
	{
		id: 'subajuste',
		termino: 'Subajuste (underfitting)',
		definicion:
			'El modelo es demasiado simple para capturar el patrón de los datos, por lo que falla tanto en entrenamiento como en producción.',
		dominios: ['dominio-4'],
		relacionados: ['sobreajuste', 'varianza'],
	},
	{
		id: 'transparencia',
		termino: 'Transparencia',
		definicion:
			'Grado en que se conocen y se documentan los datos, el diseño y las limitaciones de un modelo.',
		dominios: ['dominio-4'],
		relacionados: ['explicabilidad', 'model-card'],
	},
	{
		id: 'explicabilidad',
		termino: 'Explicabilidad',
		definicion:
			'Capacidad de justificar de forma comprensible por qué el modelo produjo una decisión concreta.',
		dominios: ['dominio-4'],
		relacionados: ['transparencia', 'model-card'],
	},
	{
		id: 'model-card',
		termino: 'Model card',
		definicion:
			'Documento estandarizado que describe el uso previsto, los datos, las métricas y las limitaciones de un modelo.',
		dominios: ['dominio-4', 'dominio-5'],
		relacionados: ['transparencia', 'explicabilidad'],
	},
	{
		id: 'veracidad',
		termino: 'Veracidad',
		definicion:
			'Cualidad de una respuesta que se corresponde con hechos o fuentes comprobables y no con invenciones del modelo.',
		dominios: ['dominio-4', 'dominio-5'],
		relacionados: ['alucinacion', 'grounding', 'ia-responsable'],
	},
	{
		id: 'gobernanza',
		termino: 'Gobernanza de IA',
		definicion:
			'Marco de políticas, roles y revisiones que dirige cómo se construyen, despliegan y supervisan los sistemas de IA.',
		dominios: ['dominio-5'],
		relacionados: ['cumplimiento', 'auditoria', 'ia-responsable'],
	},
	{
		id: 'cumplimiento',
		termino: 'Cumplimiento (compliance)',
		definicion:
			'Adecuación del sistema y de sus procesos a las normas, contratos y requisitos regulatorios aplicables.',
		dominios: ['dominio-5'],
		relacionados: ['gobernanza', 'auditoria'],
	},
	{
		id: 'auditoria',
		termino: 'Auditoría',
		definicion:
			'Revisión sistemática y trazable de las operaciones y decisiones del sistema para verificar que cumplen las políticas.',
		dominios: ['dominio-5'],
		relacionados: ['registro-de-actividad', 'gobernanza'],
	},
	{
		id: 'registro-de-actividad',
		termino: 'Registro de actividad (logging)',
		definicion:
			'Historial de eventos y llamadas que permite reconstruir quién hizo qué y cuándo sobre un sistema o recurso.',
		dominios: ['dominio-5'],
		relacionados: ['auditoria', 'residencia-de-datos'],
	},
	{
		id: 'residencia-de-datos',
		termino: 'Residencia de datos',
		definicion:
			'Requisito de que los datos se almacenen y procesen en una región geográfica o jurisdicción determinada.',
		dominios: ['dominio-5'],
		relacionados: ['retencion-de-datos', 'gobernanza'],
	},
	{
		id: 'retencion-de-datos',
		termino: 'Retención de datos',
		definicion:
			'Plazo durante el cual se conserva la información antes de archivarla o eliminarla según la política vigente.',
		dominios: ['dominio-5'],
		relacionados: ['residencia-de-datos', 'registro-de-actividad'],
	},
	{
		id: 'cifrado',
		termino: 'Cifrado (encryption)',
		definicion:
			'Protección de los datos transformándolos para que solo puedan leerse con la clave autorizada, en reposo o en tránsito.',
		dominios: ['dominio-5'],
		relacionados: ['gobernanza', 'registro-de-actividad'],
	},
];
