import type { ParConfusionAifC01 } from '@/data/aifC01/types';

export const paresTask23: ParConfusionAifC01[] = [
	{
		id: 'bedrock-vs-sagemaker-ai',
		etiqueta: 'Amazon Bedrock vs Amazon SageMaker AI',
		a: {
			titulo: 'Amazon Bedrock',
			resumen:
				'Acceso gestionado por API a modelos fundacionales de varios proveedores, sin aprovisionar infraestructura. Incluye capacidades integradas como Amazon Bedrock Knowledge Bases, Amazon Bedrock Guardrails y Amazon Bedrock Prompt Management.',
		},
		b: {
			titulo: 'Amazon SageMaker AI',
			resumen:
				'Plataforma para construir, entrenar, ajustar y desplegar modelos con control del ciclo de vida completo, de los datos de entrenamiento y del entorno de cómputo.',
		},
		diferenciaClave:
			'La diferencia no es el tipo de modelo, sino quién gestiona el ciclo de vida. En Bedrock el modelo es gestionado y se consume por API con capacidades integradas; en SageMaker AI el equipo controla entrenamiento, ajuste y despliegue.',
		cuandoA: [
			'Cuando quieres consumir modelos fundacionales por API y llegar rápido a producción.',
			'Cuando necesitas recuperación documental, filtrado de contenido o gestión de prompts con poca operación.',
			'Cuando la carga es variable y no quieres aprovisionar cómputo.',
		],
		cuandoB: [
			'Cuando necesitas ajustar o entrenar un modelo con tus propios datos y controlar el entorno.',
			'Cuando el despliegue exige configurar el endpoint, el escalado o el cómputo de inferencia.',
			'Cuando el equipo asume el ciclo de vida completo del modelo como parte del producto.',
		],
		escenarioA:
			'Un asistente debe responder sobre documentación interna en pocas semanas y sin especialistas en ML. Se consume un modelo fundacional en Amazon Bedrock y se conecta la documentación con Amazon Bedrock Knowledge Bases.',
		escenarioB:
			'Un equipo necesita ajustar un modelo con datos propios regulados y controlar el endpoint de inferencia y su escalado. Ese trabajo corresponde a Amazon SageMaker AI, no a un modelo gestionado por API.',
		preguntaIds: ['2.3-q3'],
		objetivos: ['2.3#1'],
	},
	{
		id: 'provisioned-throughput-vs-on-demand',
		etiqueta: 'Provisioned throughput vs on-demand',
		a: {
			titulo: 'Provisioned throughput',
			resumen:
				'Se reserva capacidad para atender una demanda predecible y sostenida. Ofrece un comportamiento más estable bajo volumen alto, a cambio de pagar por la capacidad comprometida aunque no se use al máximo.',
		},
		b: {
			titulo: 'On-demand',
			resumen:
				'Se paga por el consumo real, sin compromiso previo de capacidad. Es flexible para cargas variables o difíciles de prever, con menos garantía frente a picos de demanda.',
		},
		diferenciaClave:
			'Provisioned throughput cambia flexibilidad por previsibilidad: comprometes capacidad para sostener una carga estable. On-demand cambia previsibilidad por flexibilidad: pagas solo lo consumido y asumes la variación de capacidad y latencia en los picos.',
		cuandoA: [
			'Cuando el volumen es alto y constante y la latencia debe mantenerse estable.',
			'Cuando el trabajo es crítico y no se quiere depender de la capacidad disponible en cada momento.',
			'Cuando el uso sostenido justifica comprometer capacidad.',
		],
		cuandoB: [
			'Cuando el uso es irregular, esporádico o está en fase de prueba.',
			'Cuando se quiere evitar cualquier compromiso de gasto antes de conocer la demanda.',
			'Cuando la prioridad es la flexibilidad y no una garantía de rendimiento constante.',
		],
		escenarioA:
			'Una clasificación procesa el mismo volumen cada minuto durante toda la jornada y el equipo necesita un rendimiento estable. Provisioned throughput reserva la capacidad necesaria.',
		escenarioB:
			'Un asistente interno solo se usa en ciertos momentos del mes. On-demand factura el consumo real y evita pagar capacidad que estaría ociosa el resto del tiempo.',
		preguntaIds: ['2.3-q9'],
		objetivos: ['2.3#4'],
	},
];
