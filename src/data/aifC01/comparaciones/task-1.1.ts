import type { ParConfusionAifC01 } from '@/data/aifC01/types';

export const paresTask11: ParConfusionAifC01[] = [
	{
		id: 'ai-vs-ml-vs-genai',
		etiqueta: 'AI y ML vs GenAI',
		a: {
			titulo: 'AI y ML',
			resumen:
				'La AI es el campo completo; el ML es la parte que aprende patrones a partir de datos en lugar de seguir reglas programadas. Un sistema de reglas fijas puede ser AI sin ser ML.',
		},
		b: {
			titulo: 'GenAI (y agentic AI)',
			resumen:
				'Es la parte del deep learning orientada a generar contenido nuevo (texto, imagen, audio, código) con modelos fundacionales. La agentic AI añade planificación y uso de herramientas.',
		},
		diferenciaClave:
			'La AI y el ML cubren predecir y decidir, incluso sin generar nada; GenAI se define por producir contenido nuevo. Un clasificador es ML sin ser GenAI, y un agente es GenAI más acción.',
		cuandoA: [
			'Clasificar, puntuar o predecir una etiqueta o un valor a partir de datos.',
			'Descubrir estructura o anomalías sin generar contenido.',
			'Cuando el requisito es una decisión verificable y no un texto nuevo.',
		],
		cuandoB: [
			'Cuando el entregable es contenido nuevo: resúmenes, respuestas, imágenes o código.',
			'Cuando la tarea combina generación con varios pasos y herramientas externas.',
			'Cuando un asistente debe conversar y adaptarse al contexto.',
		],
		escenarioA:
			'Un banco entrena un clasificador que marca transacciones sospechosas. Es ML: aprende de ejemplos etiquetados y devuelve una categoría, no un texto.',
		escenarioB:
			'El mismo banco añade un asistente que redacta el informe de la alerta y un agente que consulta el histórico y abre el caso. Eso ya es GenAI y, con herramientas, agentic AI.',
		preguntaIds: ['1.1-q3'],
		objetivos: ['1.1#2'],
	},
	{
		id: 'batch-vs-real-time-inference',
		etiqueta: 'Inferencia batch vs real-time',
		a: {
			titulo: 'Batch (por lotes)',
			resumen:
				'Se acumulan muchas entradas y se procesan juntas, normalmente de forma programada. Optimiza rendimiento y coste porque no hay nadie esperando el resultado.',
		},
		b: {
			titulo: 'Real-time (en tiempo real)',
			resumen:
				'Cada petición se responde de inmediato con baja latencia, manteniendo capacidad disponible. Es el modo de un chat, una búsqueda o una API interactiva.',
		},
		diferenciaClave:
			'La decisión no es técnica sino de requisito: si un usuario espera la respuesta, real-time; si el resultado se consume después, batch. Latencia frente a eficiencia de recursos.',
		cuandoA: [
			'Procesos programados: informes nocturnos, reetiquetado masivo, análisis de un archivo histórico.',
			'Cuando el volumen es alto y la tolerancia a esperar también.',
			'Cuando se prioriza el coste por elemento procesado.',
		],
		cuandoB: [
			'Interacciones con personas: chat, búsqueda, recomendación en pantalla.',
			'Cuando la espera rompe la experiencia o el proceso de negocio.',
			'Cuando el número de peticiones concurrentes está acotado y es medible.',
		],
		escenarioA:
			'Un archivo nocturno resume el texto de 50.000 documentos almacenados y publica un informe por la mañana. Batch encaja y aprovecha mejor los recursos.',
		escenarioB:
			'Un asistente de soporte debe responder en segundos mientras el cliente espera. Solo el modo en tiempo real cumple el requisito de latencia.',
		preguntaIds: ['1.1-q5'],
		objetivos: ['1.1#3'],
	},
	{
		id: 'supervised-vs-unsupervised',
		etiqueta: 'Aprendizaje supervisado vs no supervisado',
		a: {
			titulo: 'Supervisado',
			resumen:
				'Se entrena con ejemplos que ya llevan la respuesta correcta. Aprende a predecir esa etiqueta (clasificación) o un valor numérico (regresión).',
		},
		b: {
			titulo: 'No supervisado',
			resumen:
				'Se entrena sin etiquetas. El modelo busca estructura por su cuenta: agrupamientos, relaciones ocultas o puntos anómalos.',
		},
		diferenciaClave:
			'La pregunta decisiva es si existe una respuesta correcta conocida por ejemplo. Con etiqueta, supervisado; sin etiqueta y buscando estructura, no supervisado.',
		cuandoA: [
			'Hay histórico etiquetado y una salida correcta bien definida.',
			'Se quiere clasificar (spam o no) o estimar un valor (precio, demanda).',
			'Es posible medir el acierto contra la etiqueta real.',
		],
		cuandoB: [
			'No hay etiquetas y se quiere explorar o segmentar el conjunto.',
			'Se buscan patrones o anomalías sin respuesta previa.',
			'El etiquetado sería caro o tardío y se usa para preparar una fase supervisada posterior.',
		],
		escenarioA:
			'Un equipo predice impago con un histórico donde cada cliente ya está marcado como pagador o moroso. El resultado se comprueba contra esa etiqueta.',
		escenarioB:
			'El mismo equipo recibe un listado nuevo de clientes sin marcar y quiere segmentarlos por comportamiento antes de decidir qué etiquetar. Sin etiquetas solo puede agrupar por similitud, no predecir una categoría correcta.',
		preguntaIds: ['1.1-q9'],
		objetivos: ['1.1#5'],
	},
];
