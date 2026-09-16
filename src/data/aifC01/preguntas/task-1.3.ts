import type { PreguntaAifC01 } from '@/data/aifC01/types';

export const preguntasTask13: PreguntaAifC01[] = [
	{
		id: '1.3-q1',
		taskId: '1.3',
		objetivos: ['1.3#1'],
		tipo: 'conocimiento',
		question:
			'En un pipeline de AI/ML, ¿cuál de los siguientes elementos es un componente y no una etapa del flujo?',
		options: [
			'La fase de preparación de datos.',
			'El artefacto del modelo desplegado en un endpoint.',
			'La etapa de evaluación del modelo.',
			'La fase de monitoreo en producción.',
		],
		correctAnswer: 1,
		explanation:
			'Un componente es una pieza concreta que ejecuta o soporta una etapa: el artefacto del modelo, el endpoint, un dataset o un script de transformación. La preparación, la evaluación y el monitoreo son etapas del pipeline.',
	},
	{
		id: '1.3-q2',
		taskId: '1.3',
		objetivos: ['1.3#1'],
		tipo: 'escenario',
		question:
			'Un equipo afirma que su pipeline termina cuando el modelo queda desplegado y que ya no requiere más trabajo. ¿Qué parte del pipeline está ignorando?',
		options: [
			'La ingesta de datos desde los sistemas de origen.',
			'El entrenamiento del modelo con los datos históricos.',
			'El monitoreo y la retroalimentación que cierran el ciclo hacia el reentrenamiento.',
			'La evaluación previa al despliegue.',
		],
		correctAnswer: 2,
		explanation:
			'El monitoreo cierra el ciclo: mide el comportamiento en producción y devuelve señal a la preparación de datos y al reentrenamiento. Un pipeline tratado como lineal se degrada sin que nadie lo detecte.',
	},
	{
		id: '1.3-q3',
		taskId: '1.3',
		objetivos: ['1.3#2'],
		tipo: 'conocimiento',
		question:
			'Una empresa necesita ejecutar un modelo fundacional en su propia infraestructura y poder auditar sus pesos. ¿Qué fuente de modelos describe mejor esta situación?',
		options: [
			'Un modelo preentrenado de código abierto.',
			'Un modelo propietario consumido mediante API gestionada.',
			'Un modelo entrenado por el proveedor del servicio en la nube.',
			'Una función sin servidor que invoca un modelo remoto.',
		],
		correctAnswer: 0,
		explanation:
			'Los modelos preentrenados de código abierto publican sus pesos: se pueden ejecutar en infraestructura propia y auditar. Un modelo propietario por API gestionada no expone los pesos ni permite elegir el entorno de ejecución.',
	},
	{
		id: '1.3-q4',
		taskId: '1.3',
		objetivos: ['1.3#2'],
		tipo: 'casoDeUso',
		question:
			'Ningún modelo disponible en el mercado captura bien el vocabulario de un dominio muy especializado y la organización dispone de un volumen amplio de datos etiquetados y experiencia interna. ¿Qué enfoque corresponde?',
		options: [
			'Usar un modelo propietario por API gestionada sin cambios.',
			'Entrenar un modelo propio (custom) desde cero.',
			'Reducir el prompt a una instrucción más corta.',
			'Desplegar el modelo en un endpoint autoalojado sin modificarlo.',
		],
		correctAnswer: 1,
		explanation:
			'El entrenamiento de un modelo propio (custom) parte de cero con los datos de la organización: es la opción de máximo control y suele justificarse cuando el dominio es muy específico y existen datos y experiencia suficientes.',
	},
	{
		id: '1.3-q5',
		taskId: '1.3',
		objetivos: ['1.3#3'],
		tipo: 'comparacion',
		question:
			'Un equipo quiere publicar un asistente en pocas semanas, no desea operar infraestructura y acepta depender del proveedor del modelo. ¿Qué método de uso en producción corresponde?',
		options: [
			'Una API autoalojada en contenedores propios.',
			'Un endpoint propio sobre la infraestructura de la organización.',
			'Una API gestionada, donde el proveedor aloja el modelo y expone el endpoint.',
			'Un modelo entrenado desde cero y ejecutado en servidores locales.',
		],
		correctAnswer: 2,
		explanation:
			'La API gestionada traslada al proveedor el escalado, el parcheo y la disponibilidad del modelo. El autoalojado da más control, pero exige operar, escalar y asegurar la infraestructura.',
	},
	{
		id: '1.3-q6',
		taskId: '1.3',
		objetivos: ['1.3#3'],
		tipo: 'tradeoff',
		question:
			'¿Qué afirmación describe mejor el intercambio entre usar una API gestionada y una API autoalojada para servir un modelo?',
		options: [
			'La gestionada delega la operación y el escalado pero reduce el control del entorno; la autoalojada da control de red, versión y rendimiento a cambio de operar y asegurar el sistema.',
			'La gestionada siempre ofrece mejor calidad de respuesta que la autoalojada.',
			'La autoalojada elimina la necesidad de evaluar el modelo antes de desplegarlo.',
			'La gestionada impide cumplir requisitos de residencia del dato en cualquier circunstancia.',
		],
		correctAnswer: 0,
		explanation:
			'El intercambio real es control frente a esfuerzo operativo. La calidad depende del modelo y de la evaluación, y la residencia del dato puede resolverse con controles en ambos casos o exigir el autoalojamiento, según el requisito.',
	},
	{
		id: '1.3-q7',
		taskId: '1.3',
		objetivos: ['1.3#4'],
		tipo: 'servicio',
		question:
			'Un equipo quiere entrenar sus propios modelos con datos tabulares, comparar varios algoritmos y desplegar el mejor en un endpoint gestionado. ¿Qué servicio de AWS es el más adecuado?',
		options: [
			'Amazon Quick',
			'Amazon SageMaker AI',
			'Kiro',
			'Amazon CloudWatch',
		],
		correctAnswer: 1,
		explanation:
			'Amazon SageMaker AI cubre experimentación, entrenamiento y despliegue de modelos propios en una misma plataforma. Amazon Quick es analítica de negocio, Kiro es desarrollo asistido y Amazon CloudWatch es observabilidad.',
	},
	{
		id: '1.3-q8',
		taskId: '1.3',
		objetivos: ['1.3#4'],
		tipo: 'conocimiento',
		question:
			'¿Qué servicio de AWS se asocia de forma más directa con el consumo de modelos fundacionales a través de una API gestionada?',
		options: [
			'Amazon Bedrock',
			'AWS Glue',
			'Amazon Quick',
			'Amazon CloudFront',
		],
		correctAnswer: 0,
		explanation:
			'Amazon Bedrock ofrece acceso a modelos fundacionales mediante API gestionada. AWS Glue se orienta a la preparación e integración de datos, Amazon Quick a la analítica y Amazon CloudFront a la distribución de contenido.',
	},
	{
		id: '1.3-q9',
		taskId: '1.3',
		objetivos: ['1.3#5'],
		tipo: 'conocimiento',
		question:
			'¿Qué concepto de MLOps describe los atajos acumulados, como scripts sin versionar o evaluación informal, que encarecen cada cambio futuro?',
		options: [
			'La escalabilidad del sistema.',
			'La experimentación controlada.',
			'La deuda técnica.',
			'La production readiness.',
		],
		correctAnswer: 2,
		explanation:
			'La deuda técnica son los atajos acumulados que aumentan el coste de cada cambio. La escalabilidad, la experimentación y la production readiness son conceptos distintos del mismo conjunto de prácticas.',
	},
	{
		id: '1.3-q10',
		taskId: '1.3',
		objetivos: ['1.3#5'],
		tipo: 'tradeoff',
		question:
			'Un equipo quiere automatizar el reentrenamiento del modelo con una frecuencia fija. ¿Qué consideración de MLOps describe mejor el intercambio?',
		options: [
			'Automatizar siempre reduce el riesgo, porque el modelo se actualiza sin intervención humana.',
			'Reentrenar aporta frescura, pero exige datos versionados, evaluación reproducible y un criterio de deriva; sin esa base, la automatización propaga errores.',
			'El reentrenamiento elimina la necesidad de monitorear el modelo en producción.',
			'Una frecuencia fija garantiza que la calidad nunca se degrada.',
		],
		correctAnswer: 1,
		explanation:
			'La automatización multiplica lo que ya existe: con procesos reproducibles y monitoreo mejora la frescura; sin ellos, propaga errores más rápido. El reentrenamiento debe dispararse con señal, no solo por calendario.',
	},
	{
		id: '1.3-q11',
		taskId: '1.3',
		objetivos: ['1.3#6'],
		tipo: 'comparacion',
		question:
			'Un modelo mejora su F1 score, pero el coste por usuario supera el beneficio que genera. ¿Qué familia de métricas falta por evaluar para decidir si el modelo continúa en producción?',
		options: [
			'Las métricas de rendimiento del modelo, porque el F1 no es suficiente.',
			'Las métricas de negocio, como el coste por usuario y el retorno de la inversión.',
			'Las métricas de infraestructura, como el uso de CPU del endpoint.',
			'Las métricas de latencia de red entre servicios.',
		],
		correctAnswer: 1,
		explanation:
			'Las métricas de modelo describen la calidad de la predicción; las de negocio, si el modelo aporta valor. El caso describe exactamente un desajuste entre ambas, que se resuelve evaluando coste por usuario y ROI.',
	},
	{
		id: '1.3-q12',
		taskId: '1.3',
		objetivos: ['1.3#6'],
		tipo: 'metrica',
		question:
			'¿Qué métrica de rendimiento de un modelo combina precision y recall en un único valor?',
		options: [
			'Accuracy',
			'F1 score',
			'Coste por usuario',
			'Retorno de la inversión (ROI)',
		],
		correctAnswer: 1,
		explanation:
			'El F1 score es la media armónica de precision y recall, útil cuando conviene equilibrar ambas. Accuracy mide aciertos globales, y el coste por usuario y el ROI son métricas de negocio.',
	},
];
