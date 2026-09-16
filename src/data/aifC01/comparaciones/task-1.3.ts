import type { ParConfusionAifC01 } from '@/data/aifC01/types';

export const paresTask13: ParConfusionAifC01[] = [
	{
		id: 'managed-api-vs-self-hosted',
		etiqueta: 'API gestionada vs API autoalojada',
		a: {
			titulo: 'API gestionada',
			resumen:
				'El proveedor aloja el modelo y expone un endpoint. El equipo consume la inferencia sin operar la infraestructura ni acceder a los pesos.',
		},
		b: {
			titulo: 'API autoalojada',
			resumen:
				'El equipo despliega los pesos en su propia infraestructura, por ejemplo en contenedores o en endpoints propios, y controla red, versión y rendimiento.',
		},
		diferenciaClave:
			'La gestionada delega operación, escalado y disponibilidad en el proveedor; la autoalojada traslada ese trabajo al equipo a cambio de control del entorno. La diferencia no es la calidad del modelo, sino quién opera el servicio.',
		cuandoA: [
			'Cuando se busca llegar rápido a producción y no hay equipo para operar infraestructura.',
			'Cuando el escalado y el parcheo se prefieren delegar en el proveedor.',
			'Para validar el valor de negocio antes de invertir en plataforma propia.',
		],
		cuandoB: [
			'Cuando existe un requisito de control de red, residencia del dato o versión exacta del modelo.',
			'Cuando se necesita ajustar el rendimiento de forma fina o usar pesos auditables.',
			'Cuando ya existe capacidad operativa para escalar, asegurar y monitorizar el endpoint.',
		],
		escenarioA:
			'Un equipo publica un asistente en pocas semanas con Amazon Bedrock: no administra servidores y se concentra en la aplicación y en evaluar las respuestas.',
		escenarioB:
			'Una organización con requisitos estrictos de red y versión del modelo despliega los pesos en un endpoint propio de Amazon SageMaker AI y asume su operación y su monitoreo.',
		preguntaIds: ['1.3-q5'],
		objetivos: ['1.3#3'],
	},
	{
		id: 'model-metrics-vs-business-metrics',
		etiqueta: 'Métricas de modelo vs métricas de negocio',
		a: {
			titulo: 'Métricas de modelo',
			resumen:
				'Miden la calidad de la predicción: accuracy, precision, recall y F1 score, entre otras. Se calculan sobre un conjunto de evaluación y sirven para comparar variantes y umbrales.',
		},
		b: {
			titulo: 'Métricas de negocio',
			resumen:
				'Miden el valor que el modelo aporta a la organización: coste por usuario, coste de desarrollo, retroalimentación del cliente y retorno de la inversión (ROI).',
		},
		diferenciaClave:
			'Las de modelo responden «¿predice bien?»; las de negocio responden «¿aporta valor?». Un modelo puede mejorar la métrica técnica y seguir sin justificar su coste, por lo que ambas se evalúan juntas.',
		cuandoA: [
			'Para comparar dos versiones del modelo o elegir un umbral de decisión.',
			'Para diagnosticar errores por clase o por tipo de dato.',
			'Antes de exponer el modelo a tráfico real.',
		],
		cuandoB: [
			'Para decidir si el modelo continúa en producción.',
			'Para justificar la inversión en desarrollo y operación.',
			'Para valorar el impacto percibido por los usuarios y clientes.',
		],
		escenarioA:
			'Dos variantes del mismo clasificador se comparan por F1 sobre el conjunto de evaluación; gana la que mejor equilibra precision y recall.',
		escenarioB:
			'La variante ganadora se pone en producción, pero el coste por usuario y el coste de desarrollo superan el beneficio esperado: la decisión se revisa con métricas de negocio.',
		preguntaIds: ['1.3-q11'],
		objetivos: ['1.3#6'],
	},
];
