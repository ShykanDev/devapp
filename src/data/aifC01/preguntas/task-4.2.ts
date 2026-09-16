import type { PreguntaAifC01 } from '@/data/aifC01/types';

export const preguntasTask42: PreguntaAifC01[] = [
	{
		id: '4.2-q1',
		taskId: '4.2',
		objetivos: ['4.2#1'],
		tipo: 'conocimiento',
		question:
			'Un modelo ofrece gran precisión, pero el equipo no puede indicar por qué tomó una decisión concreta. ¿Cómo se describe esa situación?',
		options: [
			'El modelo es transparente pero no explicable, porque su código está publicado.',
			'El modelo no es transparente ni explicable: no permite inspeccionar ni justificar sus decisiones.',
			'El modelo es explicable porque sus resultados son precisos.',
			'El modelo es transparente porque documenta sus datos de entrenamiento en una ficha.',
		],
		correctAnswer: 1,
		explanation:
			'Un modelo de caja negra no permite inspeccionar su funcionamiento ni justificar sus decisiones. La precisión es un eje distinto de la transparencia y de la explicabilidad.',
	},
	{
		id: '4.2-q2',
		taskId: '4.2',
		objetivos: ['4.2#1'],
		tipo: 'casoDeUso',
		question:
			'Una entidad financiera debe poder justificar ante cada solicitante por qué se denegó un crédito. ¿Qué requisito describe mejor lo que necesita del modelo?',
		options: [
			'Un modelo con la mayor precisión posible, sin importar cómo decide.',
			'Un modelo explicable, cuyas decisiones puedan justificarse de forma comprensible para la persona afectada.',
			'Un modelo entrenado con datos abiertos y licencia permisiva.',
			'Un modelo que oculte sus variables para proteger la propiedad intelectual.',
		],
		correctAnswer: 1,
		explanation:
			'En decisiones de alto impacto la exigencia central es poder justificarlas ante la persona afectada: eso es explicabilidad. La precisión importa, pero no sustituye la capacidad de justificar la decisión.',
	},
	{
		id: '4.2-q3',
		taskId: '4.2',
		objetivos: ['4.2#2'],
		tipo: 'servicio',
		question:
			'Un equipo debe dejar constancia del uso previsto, los datos de entrenamiento, las métricas y las limitaciones conocidas de un modelo antes de aprobarlo. ¿Qué capacidad cubre esa documentación?',
		options: [
			'Amazon SageMaker Model Cards.',
			'Amazon CloudWatch.',
			'Amazon Macie.',
			'AWS Artifact.',
		],
		correctAnswer: 0,
		explanation:
			'Amazon SageMaker Model Cards permite documentar uso previsto, datos, métricas y limitaciones junto al modelo. Los otros servicios cubren monitorización, clasificación de datos y acceso a artefactos de cumplimiento, no la ficha del modelo.',
	},
	{
		id: '4.2-q4',
		taskId: '4.2',
		objetivos: ['4.2#2'],
		tipo: 'conocimiento',
		question:
			'El equipo quiere comparar dos modelos candidatos con los mismos criterios, incluyendo revisión humana antes de elegir. ¿Qué enfoque aporta esa evidencia?',
		options: [
			'Amazon Bedrock Model Evaluations, que ejecuta evaluaciones automáticas y con revisión humana.',
			'Amazon Bedrock Guardrails, que filtra contenido no deseado.',
			'AWS Identity and Access Management (IAM), que controla el acceso.',
			'Amazon OpenSearch Service, que indexa documentos.',
		],
		correctAnswer: 0,
		explanation:
			'Amazon Bedrock Model Evaluations aporta evidencia comparativa del comportamiento de los modelos con criterios definidos, incluyendo evaluaciones con revisión humana. Guardrails, IAM y OpenSearch resuelven otros problemas.',
	},
	{
		id: '4.2-q5',
		taskId: '4.2',
		objetivos: ['4.2#3'],
		tipo: 'comparacion',
		question:
			'El equipo debe elegir entre un modelo sencillo y fácil de explicar y un modelo profundo más preciso. ¿Qué describe mejor el intercambio entre transparencia y rendimiento?',
		options: [
			'El modelo simple suele ser más fácil de explicar y algo menos preciso; el profundo gana precisión y pierde trazabilidad, por lo que conviene añadir controles compensatorios.',
			'El modelo más preciso siempre es también el más explicable.',
			'La transparencia total no tiene ningún coste de seguridad ni de propiedad intelectual.',
			'La explicabilidad elimina la necesidad de evaluar el modelo.',
		],
		correctAnswer: 0,
		explanation:
			'Interpretabilidad y rendimiento se compensan: los modelos simples suelen ser más explicables y algo menos precisos, mientras los profundos ganan precisión y pierden trazabilidad. La mitigación es documentar, evaluar y mantener revisión humana.',
	},
	{
		id: '4.2-q6',
		taskId: '4.2',
		objetivos: ['4.2#3'],
		tipo: 'tradeoff',
		question:
			'Una empresa decide publicar los pesos y los datos de entrenamiento de su modelo para maximizar la transparencia. ¿Qué riesgo debe sopesar en ese intercambio?',
		options: [
			'Que la apertura exponga propiedad intelectual y facilite usos o ataques no previstos, por lo que conviene valorarla junto a controles compensatorios.',
			'Que el modelo pierda la capacidad de generar texto.',
			'Que la evaluación del modelo deje de ser necesaria.',
			'Que la precisión del modelo aumente inevitablemente.',
		],
		correctAnswer: 0,
		explanation:
			'La transparencia total tiene costes: expone propiedad intelectual y puede habilitar usos no previstos o ataques de evasión. Por eso se sopesa con controles compensatorios en lugar de aplicarse de forma absoluta.',
	},
	{
		id: '4.2-q7',
		taskId: '4.2',
		objetivos: ['4.2#4'],
		tipo: 'casoDeUso',
		question:
			'Una entidad usa IA para priorizar solicitudes y quiere que las personas puedan corregir errores y aportar contexto. ¿Qué principio de diseño centrado en el humano aplica?',
		options: [
			'Publicar el código fuente del modelo.',
			'Ofrecer mecanismos de retroalimentación y explicar la decisión en el lenguaje del usuario.',
			'Ocultar que se usó IA para no influir en el usuario.',
			'Mostrar al usuario los pesos y los gradientes del modelo.',
		],
		correctAnswer: 1,
		explanation:
			'Los mecanismos de retroalimentación y la transparencia de la decisión permiten al usuario corregir, aportar contexto e impugnar. Publicar el código o los pesos no ayuda a la persona a entender su caso.',
	},
	{
		id: '4.2-q8',
		taskId: '4.2',
		objetivos: ['4.2#4'],
		tipo: 'metrica',
		question: '¿Cuál es la mejor señal de que una explicación de IA está bien diseñada?',
		options: [
			'Que incluya todos los detalles técnicos del modelo.',
			'Que la persona pueda entenderla y tomar una decisión informada con ella.',
			'Que sea larga y use terminología estadística.',
			'Que se genere automáticamente sin intervención humana.',
		],
		correctAnswer: 1,
		explanation:
			'La explicabilidad se juzga por su efecto en la persona: si puede entender la decisión y actuar en consecuencia. El detalle técnico o la longitud no garantizan comprensión ni confianza calibrada.',
	},
];
