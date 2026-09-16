import type { TarjetaAifC01 } from '@/data/aifC01/types';

export const tarjetasTask31: TarjetaAifC01[] = [
	{
		id: '3.1-t1',
		taskId: '3.1',
		objetivos: ['3.1#1'],
		tipo: 'tradeoff',
		frente:
			'El equipo eligió el modelo con la mejor calidad de la comparativa y la factura sube porque cada petición envía un contexto enorme y el modelo es el más grande del catálogo. ¿Qué criterios de selección están en tensión?',
		reverso:
			'Calidad frente a coste y latencia, con la longitud de entrada como factor decisivo. Conviene revisar si un modelo menor, un contexto más corto o la prompt caching cumplen el requisito sin ese gasto.',
	},
	{
		id: '3.1-t2',
		taskId: '3.1',
		objetivos: ['3.1#1'],
		tipo: 'metrica',
		frente:
			'Un asistente debe responder en cinco idiomas, pero toda la evaluación del modelo se hizo con casos en inglés. ¿Qué criterio de selección se descuidó y qué consecuencia tiene?',
		reverso:
			'El criterio multilingüe. Un modelo fuerte en inglés puede degradarse en otros idiomas, así que hay que evaluar con casos reales en cada idioma antes de decidir y no extrapolar el resultado de una sola lengua.',
	},
	{
		id: '3.1-t3',
		taskId: '3.1',
		objetivos: ['3.1#2'],
		tipo: 'definicion',
		frente:
			'Se sube la temperatura al máximo «para dar más creatividad» y el asistente de soporte empieza a inventar procedimientos que no existen. ¿Qué efecto explica esto?',
		reverso:
			'La temperatura controla el muestreo: con valores altos aumenta la variedad y la imprevisibilidad. En tareas que exigen exactitud conviene una temperatura baja y acotar la longitud de salida.',
	},
	{
		id: '3.1-t4',
		taskId: '3.1',
		objetivos: ['3.1#3'],
		tipo: 'definicion',
		frente:
			'La documentación interna cambia cada semana y el equipo no quiere reentrenar el modelo para cada revisión. ¿Qué patrón permite responder con información vigente y con la fuente citada?',
		reverso:
			'RAG: se recuperan los fragmentos relevantes de una base de conocimiento y se añaden al prompt como contexto. El modelo no aprende; lo que se actualiza es la fuente indexada.',
	},
	{
		id: '3.1-t5',
		taskId: '3.1',
		objetivos: ['3.1#3'],
		tipo: 'tradeoff',
		frente:
			'Un RAG responde bien, pero es lento y caro porque recupera muchos fragmentos largos en cada consulta. ¿Qué está ocurriendo y cómo se ajusta?',
		reverso:
			'El contexto recuperado consume tokens de entrada en cada llamada. Ajustar el tamaño del troceado y el número de fragmentos recuperados es un intercambio entre calidad de la respuesta y coste con latencia.',
	},
	{
		id: '3.1-t6',
		taskId: '3.1',
		objetivos: ['3.1#4'],
		tipo: 'servicio',
		frente:
			'Necesitas almacenar embeddings para búsqueda semántica sobre un catálogo extenso y la empresa ya usa un motor de búsqueda gestionado. ¿Qué servicio encaja de forma natural?',
		reverso:
			'Amazon OpenSearch Service, que permite índices vectoriales y búsqueda por similitud. Otras opciones del alcance son Amazon Aurora, Amazon Neptune y Amazon RDS for PostgreSQL, según los datos y el equipo existentes.',
	},
	{
		id: '3.1-t7',
		taskId: '3.1',
		objetivos: ['3.1#4'],
		tipo: 'diferencia',
		frente:
			'Un compañero afirma que «la base de conocimiento y la base de datos vectorial son lo mismo». ¿Cómo lo corriges en una frase?',
		reverso:
			'La base de datos vectorial almacena y busca embeddings; la base de conocimiento es la capacidad gestionada que indexa las fuentes, genera los embeddings y orquesta la recuperación. Una puede existir sin la otra.',
	},
	{
		id: '3.1-t8',
		taskId: '3.1',
		objetivos: ['3.1#5'],
		tipo: 'tradeoff',
		frente:
			'El equipo quiere que el modelo interiorice el estilo de la casa, pero no tiene datos etiquetados ni presupuesto para reentrenar. ¿Qué opciones de personalización le quedan?',
		reverso:
			'El aprendizaje en contexto (instrucciones y ejemplos en el prompt) y RAG para el conocimiento actualizado. Ambas evitan tocar los pesos del modelo; el fine-tuning y la destilación exigen datos de calidad y un proceso de evaluación.',
	},
	{
		id: '3.1-t9',
		taskId: '3.1',
		objetivos: ['3.1#6'],
		tipo: 'servicio',
		frente:
			'Un asistente debe consultar varios sistemas internos, ejecutar acciones con herramientas y decidir el siguiente paso sin que una persona lo guíe paso a paso. ¿Qué arquitectura describe y con qué se construye en AWS?',
		reverso:
			'Un agente de IA: el modelo planifica, invoca herramientas y usa memoria para cumplir el objetivo. En AWS se apoya en Amazon Bedrock AgentCore y Strands Agents, con permisos mínimos, límites de actuación y trazabilidad.',
	},
];
