import type { GrupoTematico } from '@/data/aifC01/types';

export const gruposTask13: GrupoTematico[] = [
	{
		id: '1.3-g1',
		titulo: 'Pipeline de AI/ML: etapas y componentes',
		objetivos: ['1.3#1'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'Un **pipeline de AI/ML** es la secuencia de etapas que transforma datos en predicciones útiles, más los componentes que hacen posible cada etapa. Conviene separar dos ideas que el examen mezcla a propósito:\n\n- **Etapa**: una fase del flujo (ingesta, preparación de datos, entrenamiento o ajuste, evaluación, despliegue, inferencia, monitoreo).\n- **Componente**: una pieza concreta que ejecuta o soporta una etapa (un dataset, un script de transformación, un artefacto de modelo, un endpoint, la capa de aplicación que consume la predicción).\n\nEtapas y componentes no son intercambiables: la misma etapa puede resolverse con componentes distintos y un mismo componente puede participar en varias etapas. Además, los pipelines rara vez son lineales: el **monitoreo** cierra el ciclo y devuelve señal a la preparación de datos y al reentrenamiento.',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Distingue **etapa** de **componente** cuando el enunciado pregunte en qué parte del ciclo ocurre algo.',
					'Despliega la inferencia como componente independiente para poder escalarla sin reentrenar.',
					'Trata los datos como componente con contrato propio: calidad, propietario y esquema.',
				],
				noUsar: [
					'No reduzcas el pipeline al entrenamiento: la preparación de datos y el monitoreo concentran buena parte del trabajo y del riesgo.',
					'No asumas un flujo estrictamente lineal: la señal de producción vuelve a etapas anteriores.',
				],
			},
			{
				tipo: 'ejemplo',
				md: '```text\nEtapas:      ingesta -> preparacion -> entrenamiento/ajuste -> evaluacion -> despliegue -> inferencia -> monitoreo\nComponentes: fuentes de datos | transformaciones | artefacto del modelo | endpoint | aplicacion consumidora\nCiclo:       el monitoreo devuelve senal a preparacion y reentrenamiento\n```',
			},
			{
				tipo: 'clave',
				items: [
					'Etapa = fase del flujo; componente = pieza que la ejecuta o la soporta.',
					'El modelo desplegado, los datos y la aplicación consumidora son componentes distintos dentro de un mismo sistema.',
					'El monitoreo cierra el ciclo: la producción es una fuente de datos más.',
				],
			},
		],
		preguntasGuia: [
			'¿Qué distingue una etapa de un componente dentro del pipeline?',
			'¿Qué componente falta si un equipo considera que el trabajo termina al desplegar el modelo?',
			'¿Por qué el monitoreo se considera parte del ciclo y no el final del proyecto?',
		],
	},
	{
		id: '1.3-g2',
		titulo: 'Fuentes de modelos fundacionales',
		objetivos: ['1.3#2'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'Los **modelos fundacionales (FM)** no se obtienen de una única forma. Antes de construir conviene saber de dónde puede venir el modelo:\n\n- **Preentrenado de código abierto**: pesos publicados por una comunidad o laboratorio. Se ejecutan donde el equipo decida y permiten auditar y controlar el entorno, a cambio de asumir su operación.\n- **Preentrenado propietario**: se consume a través del proveedor, normalmente con una **API gestionada**, sin acceso a los pesos.\n- **Entrenamiento de un modelo propio (custom)**: se entrena desde cero con datos de la organización. Máximo control, mayor coste y necesidad de volumen y experiencia.\n- **Adaptación de un preentrenado**: ajuste fino o preentrenamiento continuo sobre un modelo existente, un punto intermedio muy habitual.\n\nElegir la fuente es una decisión de **control, coste y tiempo**: entrenar desde cero rara vez es el primer paso razonable.',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Usa un preentrenado de **código abierto** cuando necesites control del entorno, portabilidad o auditoría de los pesos.',
					'Usa **entrenamiento custom** cuando ningún modelo disponible capture un dominio muy específico y existan datos suficientes.',
					'Usa la **adaptación** de un preentrenado cuando quieras especializar sin partir de cero.',
				],
				noUsar: [
					'No entrenes desde cero una tarea que un preentrenado o una adaptación ya resuelven.',
					'No elijas código abierto solo por ahorrar en licencias: el coste real incluye operación, evaluación y mantenimiento.',
				],
			},
			{
				tipo: 'ejemplo',
				md: '```text\nNecesidad: clasificar documentos internos\nA) preentrenado de codigo abierto + ajuste fino -> control y coste de operacion propio\nB) FM propietario por API gestionada    -> sin operar infraestructura\nC) entrenamiento custom desde cero      -> solo si el dominio y los datos lo justifican\n```',
			},
		],
		preguntasGuia: [
			'¿Qué fuente de modelos permite auditar los pesos y ejecutarlos en infraestructura propia?',
			'¿Cuándo se justifica entrenar un modelo propio desde cero?',
			'¿Qué diferencia hay entre adaptar un preentrenado y entrenar uno nuevo?',
		],
	},
	{
		id: '1.3-g3',
		titulo: 'Usar un modelo en producción: API gestionada o autoalojada',
		objetivos: ['1.3#3'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'Un modelo solo aporta valor cuando está **en producción** y alguien lo consume. Hay dos grandes métodos:\n\n- **Servicio de API gestionada**: el proveedor aloja el modelo y expone un endpoint. El equipo se centra en la aplicación; el escalado, el parcheo y la disponibilidad recaen en el proveedor. Se gana velocidad a cambio de menos control y de dependencia del servicio.\n- **API autoalojada**: el equipo despliega los pesos en su propia infraestructura, por ejemplo en contenedores sobre Amazon ECS o Amazon EKS, o en endpoints de Amazon SageMaker AI. Da control de red, versión exacta del modelo y ajuste de rendimiento, a cambio de operar, escalar y asegurar el sistema.\n\nNo es una decisión para siempre: se puede empezar con el método gestionado y migrar cuando aparezca una restricción real, como residencia del dato, latencia o coste a gran escala.',
			},
			{
				tipo: 'comparacion',
				parId: 'managed-api-vs-self-hosted',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Elige **API gestionada** para llegar rápido a producción y evitar operar infraestructura.',
					'Elige **autoalojado** cuando necesites control de red, una versión exacta del modelo o ajuste fino del rendimiento.',
					'Documenta desde el inicio el criterio de salida o migración entre ambos métodos.',
				],
				noUsar: [
					'No autoalojes solo por «tener control» si el equipo no puede operar ni monitorizar el endpoint.',
					'No asumas que la API gestionada elimina la evaluación: la calidad de las respuestas sigue siendo responsabilidad del equipo.',
				],
			},
			{
				tipo: 'ejemplo',
				md: '```text\nGestionado:  aplicacion -> endpoint de Amazon Bedrock -> respuesta\nAutoalojado: aplicacion -> endpoint propio en Amazon SageMaker AI -> contenedor -> pesos del modelo\nDecision:    rapidez y menor operacion  vs  control y ajuste\n```',
			},
		],
		preguntasGuia: [
			'¿Qué gana y qué cede un equipo que usa una API gestionada?',
			'¿Qué restricciones suelen justificar pasar a una API autoalojada?',
			'¿Quién es responsable del escalado en cada método?',
		],
	},
	{
		id: '1.3-g4',
		titulo: 'Servicios de AWS por etapa del pipeline',
		objetivos: ['1.3#4'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'Cada etapa del pipeline tiene servicios de AWS que encajan mejor que otros. El examen pide **identificar** el servicio por la etapa, no memorizar arquitecturas completas:\n\n- **Datos**: almacenar, catalogar y preparar con Amazon S3, AWS Glue, AWS Glue DataBrew y AWS Lake Formation.\n- **Experimentar y entrenar**: Amazon SageMaker AI para construir, entrenar y desplegar modelos propios; Amazon SageMaker JumpStart para partir de modelos y soluciones listas.\n- **Modelos fundacionales**: Amazon Bedrock para consumir FMs, Amazon Nova como familia de modelos y Amazon Bedrock AgentCore para agentes.\n- **Desarrollo asistido**: Kiro para construir software con apoyo de IA.\n- **Analítica de negocio**: Amazon Quick para consultar y visualizar datos.\n- **Operación**: Amazon CloudWatch para métricas y registros, y AWS CloudTrail para auditoría.\n\nLa clave es asociar **etapa → servicio** y no suponer que un solo servicio cubre todo el ciclo de vida.',
			},
			{
				tipo: 'servicio',
				nombre: 'Amazon SageMaker AI',
			},
			{
				tipo: 'escenario',
				situacion:
					'Un equipo quiere entrenar con sus datos tabulares, comparar varios algoritmos y desplegar el mejor modelo en un endpoint gestionado.',
				analisis:
					'Amazon SageMaker AI cubre experimentación, entrenamiento y despliegue en una misma plataforma, con registro de los artefactos generados. Si el punto de partida fuese un modelo ya existente, Amazon SageMaker JumpStart reduciría el trabajo inicial.',
				servicio: 'Amazon SageMaker AI',
			},
			{
				tipo: 'ejemplo',
				md: '```text\nPreparar datos      -> AWS Glue DataBrew\nEntrenar y desplegar -> Amazon SageMaker AI\nConsumir un FM       -> Amazon Bedrock\nConsultar negocio    -> Amazon Quick\nObservar y auditar   -> Amazon CloudWatch / AWS CloudTrail\n```',
			},
		],
		preguntasGuia: [
			'¿Qué servicio usarías para entrenar y desplegar un modelo propio?',
			'¿Qué servicio se asocia al consumo de modelos fundacionales por API gestionada?',
			'¿Con qué servicio consultarías y visualizarías los datos de negocio?',
		],
	},
	{
		id: '1.3-g5',
		titulo: 'MLOps: operar el ML como software',
		objetivos: ['1.3#5'],
		bloques: [
			{
				tipo: 'concepto',
				md: '**MLOps** aplica prácticas de ingeniería de software al ciclo de vida del ML para que los resultados sean repetibles y operables. Los conceptos que agrupa el examen son:\n\n- **Experimentación**: probar hipótesis y registrar qué configuración produjo cada resultado.\n- **Procesos repetibles**: el mismo código y los mismos datos producen el mismo artefacto, sin pasos manuales ocultos.\n- **Sistemas escalables**: atender más tráfico o reentrenar con más frecuencia sin rediseñar.\n- **Deuda técnica**: atajos acumulados (scripts sin versionar, datos sin documentar, evaluación informal) que encarecen cada cambio.\n- **Production readiness**: el modelo está listo cuando es observable, evaluable y reversible, no solo cuando «funciona».\n- **Monitoreo y reentrenamiento**: detectar deriva y volver a entrenar cuando la realidad cambia.\n\nUn modelo en producción es un artefacto vivo: sin observabilidad, la degradación llega antes que la alerta.',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Versiona datos, código y artefactos para poder reproducir cualquier resultado.',
					'Define el monitoreo y el criterio de reentrenamiento antes de desplegar.',
					'Automatiza la evaluación para que cada cambio se compare contra una línea base.',
				],
				noUsar: [
					'No dejes la evaluación en hojas de cálculo manuales: es deuda técnica silenciosa.',
					'No reentrenes por rutina sin señal de deriva: cada reentrenamiento debe justificarse con datos.',
				],
			},
			{
				tipo: 'errorComun',
				error: 'Creer que MLOps empieza en el despliegue y que antes solo hay «ciencia de datos».',
				correccion:
					'La reproducibilidad empieza en los datos: versionado, transformaciones declarativas y evaluación registrada. Sin esa base, el despliegue hereda deuda y el monitoreo no puede comparar nada.',
			},
			{
				tipo: 'ejemplo',
				md: '```text\nExperimento registrado -> codigo + datos + parametros + metrica\nPipeline reproducible    -> mismo commit y mismos datos = mismo artefacto\nOperacion               -> monitoreo detecta deriva -> reentrenamiento planificado\n```',
			},
		],
		preguntasGuia: [
			'¿Qué es deuda técnica en un sistema de ML y cómo se acumula?',
			'¿Qué significa que un modelo alcanza la production readiness?',
			'¿Qué debe existir antes de automatizar el reentrenamiento?',
		],
	},
	{
		id: '1.3-g6',
		titulo: 'Métricas de modelo y métricas de negocio',
		objetivos: ['1.3#6'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'Evaluar un modelo exige dos familias de métricas que responden a preguntas distintas:\n\n- **Métricas de rendimiento del modelo**: describen qué tan bien predice. **Accuracy** es la proporción de aciertos; **precision** mide cuánto de lo marcado como positivo era correcto; **recall** mide cuánto del positivo real se capturó; **F1** combina precision y recall en un único valor.\n- **Métricas de negocio**: describen si el modelo aporta valor. Coste por usuario, coste de desarrollo, retroalimentación del cliente y retorno de la inversión (ROI).\n\nUn modelo puede mejorar su métrica técnica y empeorar el negocio: si el coste por inferencia o el coste de desarrollo supera el beneficio, una accuracy alta no salva el proyecto. Por eso se evalúan juntas y el umbral técnico se elige en función del objetivo de negocio.',
			},
			{
				tipo: 'comparacion',
				parId: 'model-metrics-vs-business-metrics',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Usa **métricas de modelo** para comparar variantes y ajustar umbrales de decisión.',
					'Usa **métricas de negocio** para decidir si el modelo sigue en producción.',
					'Elige el umbral técnico a partir del coste real de cada tipo de error.',
				],
				noUsar: [
					'No elijas un modelo solo por su accuracy sin mirar el coste y el impacto real.',
					'No juzgues el valor del modelo con una sola métrica de negocio: el ROI necesita contexto de costes y uso.',
				],
			},
			{
				tipo: 'ejemplo',
				md: '```text\nMetrica de modelo:   F1 sobre el conjunto de evaluacion\nMetrica de negocio:  coste por usuario y retorno de la inversion\nDecision de umbral:  el error mas caro define que metrica priorizar\n```',
			},
		],
		preguntasGuia: [
			'¿Qué mide precision y qué mide recall?',
			'¿Por qué una mejora de accuracy puede no mejorar el negocio?',
			'¿Qué métricas de negocio usarías para justificar mantener un modelo en producción?',
		],
	},
];
