import type { TarjetaAifC01 } from '@/data/aifC01/types';

export const tarjetasTask22: TarjetaAifC01[] = [
	{
		id: '2.2-t1',
		taskId: '2.2',
		objetivos: ['2.2#1'],
		tipo: 'definicion',
		frente:
			'Una empresa lanza un asistente que resume correos, redacta borradores y responde preguntas en varios idiomas sin reentrenar ni desplegar un modelo nuevo por tarea. ¿Qué ventaja de GenAI aprovecha?',
		reverso:
			'La adaptabilidad y la capacidad de generar contenido: el mismo modelo resuelve tareas distintas cambiando la instrucción, y añade la capacidad conversacional para interactuar en lenguaje natural.',
	},
	{
		id: '2.2-t2',
		taskId: '2.2',
		objetivos: ['2.2#2'],
		tipo: 'riesgo',
		frente:
			'Un asistente responde con una política de devoluciones que no existe en la documentación de la empresa, con tono seguro y muy detallado. ¿Qué limitación se ha materializado y cómo se mitiga?',
		reverso:
			'Una alucinación: contenido inventado con apariencia de certeza. Se mitiga con grounding en fuentes verificables, citas, validación de la salida y revisión humana en decisiones sensibles.',
	},
	{
		id: '2.2-t3',
		taskId: '2.2',
		objetivos: ['2.2#2'],
		tipo: 'diferencia',
		frente:
			'Dos errores en la misma salida: en uno el modelo cita una norma inexistente; en otro resume mal el importe de un documento real. ¿Cuál es la alucinación y cuál la inexactitud?',
		reverso:
			'La cita inexistente es una alucinación (contenido inventado); el importe equivocado es una inexactitud (dato real mal reproducido). Ambas exigen validación, pero la alucinación engaña porque suena convincente.',
	},
	{
		id: '2.2-t4',
		taskId: '2.2',
		objetivos: ['2.2#2'],
		tipo: 'tradeoff',
		frente:
			'Un equipo quiere un modelo muy grande porque acierta más, pero no puede explicar por qué el sistema deniega una solicitud a un cliente. ¿Qué tensión aparece?',
		reverso:
			'El intercambio entre rendimiento y explicabilidad: los modelos más capaces suelen ser menos interpretables. Si la decisión debe justificarse, hay que priorizar la trazabilidad y las fuentes, no solo la exactitud.',
	},
	{
		id: '2.2-t5',
		taskId: '2.2',
		objetivos: ['2.2#3'],
		tipo: 'tradeoff',
		frente:
			'El equipo elige un modelo mayor para mejorar la calidad, pero la latencia y el coste por token suben en un asistente interactivo. ¿Cómo se decide?',
		reverso:
			'Sopesando los requisitos del caso de uso: en una interfaz en vivo la latencia y el coste pueden pesar más que una mejora marginal de calidad; en un proceso por lotes, al contrario. Se elige por requisito, no por tamaño.',
	},
	{
		id: '2.2-t6',
		taskId: '2.2',
		objetivos: ['2.2#3'],
		tipo: 'servicio',
		frente:
			'Una empresa quiere comparar varios modelos fundacionales de distintos proveedores y cambiar entre ellos mediante una API, sin gestionar servidores. ¿Qué servicio de AWS usa?',
		reverso:
			'Amazon Bedrock: ofrece acceso a modelos fundacionales de varios proveedores mediante API. Así la selección por capacidades, coste y latencia se ajusta sin construir ni mantener infraestructura.',
	},
	{
		id: '2.2-t7',
		taskId: '2.2',
		objetivos: ['2.2#4'],
		tipo: 'metrica',
		frente:
			'La dirección pregunta si el asistente generativo aporta valor al negocio. ¿Qué métricas conviene presentar, más allá de la calidad técnica?',
		reverso:
			'ROI, eficiencia (tiempo o pasos ahorrados), tasa de conversión, ingresos medios por usuario y valor de vida del cliente. La calidad técnica se traduce a valor de negocio con estas métricas.',
	},
	{
		id: '2.2-t8',
		taskId: '2.2',
		objetivos: ['2.2#4'],
		tipo: 'metrica',
		frente:
			'El asistente responde con más exactitud, pero el coste por interacción sube. ¿Qué métricas permiten decidir si el cambio merece la pena?',
		reverso:
			'Las que cruzan el coste con el resultado: coste por interacción o por tarea completada frente a eficiencia, conversión o satisfacción. Una mejora de exactitud sin retorno medible no justifica el gasto.',
	},
];
