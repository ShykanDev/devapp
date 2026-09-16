import type { TarjetaAifC01 } from '@/data/aifC01/types';

export const tarjetasTask34: TarjetaAifC01[] = [
	{
		id: '3.4-t1',
		taskId: '3.4',
		objetivos: ['3.4#1'],
		tipo: 'definicion',
		frente:
			'Antes de publicar un asistente, el equipo reúne a tres revisores para que puntúen una muestra de respuestas reales con una rúbrica de utilidad y tono. ¿Qué enfoque de evaluación aplican y por qué?',
		reverso:
			'Human-in-the-loop: personas evalúan el resultado. Es la referencia cuando el criterio es subjetivo o el coste de un error es alto, y complementa a las métricas automáticas y a los conjuntos de referencia.',
	},
	{
		id: '3.4-t2',
		taskId: '3.4',
		objetivos: ['3.4#1'],
		tipo: 'servicio',
		frente:
			'Necesitas comparar varios modelos de Amazon Bedrock con tu propio conjunto de preguntas y repetir la evaluación al cambiar la configuración, sin montar infraestructura. ¿Qué capacidad usas?',
		reverso:
			'Amazon Bedrock Model Evaluation: ejecuta la evaluación dentro del servicio con conjuntos propios o integrados y devuelve métricas comparables entre modelos y configuraciones.',
	},
	{
		id: '3.4-t3',
		taskId: '3.4',
		objetivos: ['3.4#2'],
		tipo: 'metrica',
		frente:
			'Evalúas resúmenes contra una referencia y observas que un resumen reescrito con sinónimos puntúa bajo. ¿Qué mide ROUGE y por qué ocurre?',
		reverso:
			'ROUGE mide el recuerdo de n-gramas o fragmentos coincidentes con la referencia. Premia la coincidencia literal, así que una paráfrasis válida puede puntuar bajo; BERTScore o la revisión humana corrigen esa ceguera.',
	},
	{
		id: '3.4-t4',
		taskId: '3.4',
		objetivos: ['3.4#2'],
		tipo: 'metrica',
		frente:
			'Para traducción eliges BLEU y para resumen eliges ROUGE. ¿Qué mide cada una y en qué se diferencian?',
		reverso:
			'BLEU mide la precisión de n-gramas y penaliza las salidas demasiado cortas; ROUGE mide el recuerdo de fragmentos de la referencia. Ninguna de las dos captura el significado: eso lo aporta BERTScore, que compara embeddings.',
	},
	{
		id: '3.4-t5',
		taskId: '3.4',
		objetivos: ['3.4#2'],
		tipo: 'metrica',
		frente:
			'Dos respuestas dicen lo mismo con palabras muy distintas y las métricas de n-gramas las suspenden. ¿Qué métrica usarías para capturar el significado?',
		reverso:
			'BERTScore: compara la salida y la referencia mediante embeddings y mide similitud semántica en lugar de coincidencia literal de palabras.',
	},
	{
		id: '3.4-t6',
		taskId: '3.4',
		objetivos: ['3.4#2'],
		tipo: 'metrica',
		frente:
			'Quieres evaluar respuestas abiertas a escala con una rúbrica detallada, sin revisar cada caso a mano. ¿Qué técnica usas y qué precaución tomas?',
		reverso:
			'LLM-as-a-judge: un modelo puntúa según la rúbrica. Escala bien, pero hereda los sesgos del juez, así que hay que calibrar la rúbrica contra una muestra revisada por personas.',
	},
	{
		id: '3.4-t7',
		taskId: '3.4',
		objetivos: ['3.4#3'],
		tipo: 'metrica',
		frente:
			'El modelo supera todos los umbrales técnicos, pero el negocio no percibe mejora. ¿Qué dimensión se pasó por alto?',
		reverso:
			'La alineación con el objetivo de negocio: productividad real, tiempo ahorrado, adopción y satisfacción. Una buena métrica técnica no demuestra por sí sola el valor para la organización.',
	},
	{
		id: '3.4-t8',
		taskId: '3.4',
		objetivos: ['3.4#4'],
		tipo: 'definicion',
		frente:
			'Una aplicación RAG con un buen modelo generativo responde mal. ¿Dónde buscarías el problema y cómo lo evaluarías?',
		reverso:
			'Se evalúa por componentes, no solo por la salida final: calidad de la recuperación, relevancia de los fragmentos recuperados, grounding respecto al contexto y utilidad de la respuesta.',
	},
	{
		id: '3.4-t9',
		taskId: '3.4',
		objetivos: ['3.4#5'],
		tipo: 'metrica',
		frente:
			'El equipo discute si el asistente «funciona». ¿Con qué dos métricas de alineación de negocio zanjas la discusión?',
		reverso:
			'Con la tasa de finalización de tareas (¿el usuario termina lo que venía a hacer sin escalar?) y el coste por interacción (¿a qué coste se consigue?). Ambas conectan el desempeño del sistema con el resultado del negocio.',
	},
];
