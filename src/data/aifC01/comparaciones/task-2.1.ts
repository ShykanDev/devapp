import type { ParConfusionAifC01 } from '@/data/aifC01/types';

export const paresTask21: ParConfusionAifC01[] = [
	{
		id: 'embeddings-vs-tokens',
		etiqueta: 'Embeddings vs tokens',
		a: {
			titulo: 'Token',
			resumen:
				'Unidad mínima de texto que el modelo procesa y que se factura. Puede ser una palabra, parte de una palabra o un signo, según el tokenizador.',
		},
		b: {
			titulo: 'Embedding',
			resumen:
				'Representación numérica (vector) del significado de un texto, que permite comparar y buscar por similitud semántica.',
		},
		diferenciaClave:
			'El token es la unidad de procesamiento y facturación; el embedding es una representación de significado. Los tokens no se comparan entre sí por parecido; los embeddings sí.',
		cuandoA: [
			'Cuando necesitas estimar o controlar el consumo y la longitud de entrada o salida.',
			'Cuando diseñas el chunking: cada fragmento se convierte en tokens al enviarse al modelo.',
		],
		cuandoB: [
			'Cuando quieres búsqueda semántica, agrupación o recomendación por parecido.',
			'Cuando construyes recuperación de información y necesitas un almacén vectorial para los fragmentos.',
		],
		escenarioA:
			'Un equipo no entiende por qué dos prompts de tamaño parecido cuestan distinto: el tokenizador produce distinto número de tokens y el precio depende de los tokens de entrada y de salida.',
		escenarioB:
			'El mismo equipo indexa sus manuales y busca «política de devoluciones»: el embedding recupera fragmentos que hablan de reembolsos aunque no usen esa palabra exacta.',
		preguntaIds: ['2.1-q2'],
		objetivos: ['2.1#1'],
	},
	{
		id: 'agent-vs-workflow',
		etiqueta: 'Agente de IA vs flujo de trabajo',
		a: {
			titulo: 'Agente de IA',
			resumen:
				'Usa un modelo fundacional para decidir en tiempo de ejecución qué paso sigue, invocando herramientas y consultando memoria según el resultado de cada acción.',
		},
		b: {
			titulo: 'Flujo de trabajo (workflow)',
			resumen:
				'Secuencia de pasos definida de antemano. El modelo puede intervenir dentro de un paso, pero no decide la ruta ni el orden.',
		},
		diferenciaClave:
			'La ruta: en un workflow el orden lo fija quien lo diseñó; en un agente la ruta se decide en ejecución con el modelo, el resultado de las herramientas y la memoria.',
		cuandoA: [
			'Cuando la tarea exige decidir sobre la marcha entre varios caminos posibles y usar datos de distintos sistemas.',
			'Cuando cada paso se puede registrar, limitar con permisos y comprobar antes de continuar.',
		],
		cuandoB: [
			'Cuando la secuencia de pasos es estable y conocida de antemano.',
			'Cuando se exige máxima previsibilidad, bajo coste y auditoría sencilla.',
			'Cuando un error de decisión tendría un impacto que no admite revisión dinámica.',
		],
		escenarioA:
			'Un asistente de soporte recibe una incidencia y decide por sí mismo si consultar el contrato, pedir más datos, emitir un abono o escalar a una persona, según lo que va encontrando.',
		escenarioB:
			'La validación de una factura sigue siempre el mismo recorrido: leer el PDF, comprobar el importe contra el pedido y, si coincide, registrarla; si no coincide, marcarla para revisión humana.',
		preguntaIds: ['2.1-q11'],
		objetivos: ['2.1#6'],
	},
	{
		id: 'mcp-vs-api',
		etiqueta: 'Model Context Protocol vs integración por API a medida',
		a: {
			titulo: 'Model Context Protocol (MCP)',
			resumen:
				'Protocolo que define cómo un agente descubre y usa herramientas, datos y prompts de sistemas externos de forma uniforme.',
		},
		b: {
			titulo: 'Integración por API a medida',
			resumen:
				'Cada sistema externo se conecta con su propio cliente y contrato: autenticación, formato y errores se resuelven una a una, dentro de la aplicación.',
		},
		diferenciaClave:
			'MCP estandariza la forma de exponer y consumir capacidades externas, de modo que el agente reutiliza el mismo mecanismo con distintos servidores; la integración a medida resuelve cada caso por separado. MCP no elimina la API ni los permisos: define cómo se presentan al agente.',
		cuandoA: [
			'Cuando varios agentes deben conectarse a herramientas y fuentes de datos distintas con un patrón común.',
			'Cuando quieres añadir o sustituir herramientas sin reescribir la lógica del agente.',
		],
		cuandoB: [
			'Cuando solo hay un sistema externo con un contrato simple y estable.',
			'Cuando necesitas un control muy fino de autenticación, formato o manejo de errores que el protocolo no cubre.',
		],
		escenarioA:
			'Un agente corporativo necesita consultar un CRM, una base de datos de pedidos y un buscador interno. Con MCP, cada sistema expone sus herramientas a través del protocolo y el agente las usa con el mismo mecanismo.',
		escenarioB:
			'Una aplicación de facturación integra un único proveedor de pagos con reglas de reintento y firma propias. Un cliente a medida para esa API concreta sigue siendo la opción más directa.',
		preguntaIds: ['2.1-q13'],
		objetivos: ['2.1#6'],
	},
];
