import type { ParConfusionAifC01 } from '@/data/aifC01/types';

export const paresTask31: ParConfusionAifC01[] = [
	{
		id: 'rag-vs-fine-tuning',
		etiqueta: 'RAG vs fine-tuning',
		a: {
			titulo: 'RAG (Retrieval Augmented Generation)',
			resumen:
				'Se recuperan fragmentos relevantes de una fuente externa y se añaden al prompt como contexto en el momento de la consulta. El modelo no cambia.',
		},
		b: {
			titulo: 'Fine-tuning',
			resumen:
				'Se reentrenan los pesos del modelo con datos etiquetados para que incorpore un comportamiento, un formato o un tono de forma estable.',
		},
		diferenciaClave:
			'RAG cambia la información que el modelo ve en cada llamada; el fine-tuning cambia el modelo. Por eso RAG es la vía para conocimiento que se actualiza y el fine-tuning para comportamiento que debe ser consistente.',
		cuandoA: [
			'Cuando las respuestas deben basarse en documentos propios y actualizados (normativa, catálogo, manuales).',
			'Cuando se necesita citar la fuente o respetar permisos sobre el contenido recuperado.',
			'Cuando el conocimiento cambia a menudo y reentrenar no es viable.',
		],
		cuandoB: [
			'Cuando el problema no es de conocimiento, sino de estilo, formato o criterio que el prompt no estabiliza.',
			'Cuando existen datos de calidad suficientes y un proceso para evaluar y versionar el modelo resultante.',
			'Cuando el coste del contexto adicional en cada consulta resulta más caro que servir un modelo ajustado.',
		],
		escenarioA:
			'Un asistente interno responde sobre manuales que se revisan cada semana. Se indexan los documentos y en cada consulta se recuperan los fragmentos pertinentes; al cambiar un manual, basta con reindexar.',
		escenarioB:
			'El mismo asistente debe redactar siempre con un formato corporativo muy concreto que el prompt no logra fijar. Se ajusta el modelo con ejemplos de la casa y el resultado se vuelve consistente.',
		preguntaIds: ['3.1-q6'],
		objetivos: ['3.1#3', '3.1#5'],
	},
	{
		id: 'vector-database-vs-knowledge-base',
		etiqueta: 'Base de datos vectorial vs base de conocimiento',
		a: {
			titulo: 'Base de datos vectorial',
			resumen:
				'Almacén especializado que guarda embeddings y los busca por similitud. Es una pieza de infraestructura: sin capa de indexación ni de orquestación no aporta respuestas por sí sola.',
		},
		b: {
			titulo: 'Amazon Bedrock Knowledge Bases',
			resumen:
				'Capacidad gestionada que conecta las fuentes de datos con un almacén vectorial, genera los embeddings, indexa el contenido y orquesta la recuperación que alimenta al modelo.',
		},
		diferenciaClave:
			'La base de datos vectorial es el lugar donde viven los vectores; la base de conocimiento es el flujo gestionado de indexar, buscar y entregar contexto. Puedes tener almacén vectorial sin base de conocimiento, pero la base de conocimiento necesita un almacén por debajo.',
		cuandoA: [
			'Cuando ya existe una plataforma de datos o búsqueda (OpenSearch Service, Aurora, Neptune, RDS for PostgreSQL) y se quiere integrar el almacén vectorial en ella.',
			'Cuando el equipo necesita controlar el esquema, los índices y el motor de búsqueda.',
		],
		cuandoB: [
			'Cuando se quiere reducir el trabajo de construir y mantener el pipeline de indexación y recuperación.',
			'Cuando el objetivo es conectar varias fuentes de datos y gestionar la sincronización de forma centralizada.',
		],
		escenarioA:
			'Una empresa de logística ya explota Amazon OpenSearch Service para búsquedas textuales y añade índices vectoriales para buscar por similitud sobre sus documentos operativos.',
		escenarioB:
			'Una aseguradora quiere que su asistente consulte pólizas y procedimientos sin mantener el pipeline de embeddings; usa una base de conocimiento para indexar las fuentes y recuperar el contexto.',
		preguntaIds: ['3.1-q9'],
		objetivos: ['3.1#3', '3.1#4'],
	},
];
