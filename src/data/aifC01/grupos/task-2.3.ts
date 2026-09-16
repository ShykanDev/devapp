import type { GrupoTematico } from '@/data/aifC01/types';

export const gruposTask23: GrupoTematico[] = [
	{
		id: '2.3-g1',
		titulo: 'Servicios de AWS para desarrollar aplicaciones de GenAI',
		objetivos: ['2.3#1'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'Construir una aplicación de IA generativa en AWS combina tres capas: los **modelos fundacionales**, la **plataforma** que los ejecuta o los entrena y los **agentes** que orquestan tareas. Cada servicio de la task cubre una parte distinta:\n\n- **Amazon Bedrock**: acceso gestionado por API a modelos fundacionales de varios proveedores, sin aprovisionar infraestructura. Alrededor del modelo añade capacidades integradas como **Amazon Bedrock Knowledge Bases** para recuperación, **Amazon Bedrock Guardrails** para filtrado y políticas de contenido y **Amazon Bedrock Prompt Management** para gestionar prompts.\n- **Amazon SageMaker AI**: plataforma para construir, entrenar, ajustar y desplegar modelos con control del ciclo de vida completo y del entorno de cómputo.\n- **Amazon SageMaker JumpStart**: catálogo de modelos preentrenados y soluciones listas para desplegar, útil para partir de un modelo conocido sin construir el pipeline de entrenamiento.\n- **Amazon Bedrock AgentCore**: capacidades para construir y operar agentes a escala, con **Amazon Bedrock AgentCore Runtime** para ejecutarlos y **Amazon Bedrock AgentCore Identity** para gestionar su identidad y sus permisos.\n- **Strands Agents**: SDK para definir agentes en código, con sus herramientas, su memoria y su flujo de razonamiento.\n- **Kiro**: entorno de desarrollo agentic que asiste en especificar y construir software.\n- **Amazon Quick**: analítica empresarial asistida por IA generativa para explorar datos y generar narrativas.\n\nLa pregunta práctica no es «qué servicio es mejor», sino **quién gestiona el modelo**. Bedrock encaja cuando quieres consumir modelos por API y aprovechar las capacidades integradas de recuperación y seguridad. SageMaker AI encaja cuando necesitas control sobre los datos de entrenamiento, los hiperparámetros y el endpoint. JumpStart acorta el camino entre elegir un modelo conocido y tenerlo sirviendo. AgentCore y Strands Agents entran cuando la aplicación deja de ser una llamada al modelo y pasa a ser un agente con herramientas, memoria y permisos propios.',
			},
			{
				tipo: 'comparacion',
				parId: 'bedrock-vs-sagemaker-ai',
			},
			{
				tipo: 'escenario',
				situacion:
					'Una empresa quiere lanzar en pocas semanas un asistente que responda sobre su documentación interna y no dispone de especialistas en ML ni quiere gestionar servidores. Los documentos ya están en Amazon S3.',
				analisis:
					'El camino más corto es consumir un modelo fundacional en **Amazon Bedrock** y conectar la documentación con **Amazon Bedrock Knowledge Bases**; **Amazon Bedrock Guardrails** acota contenido y temas no deseados y el acceso a los documentos se controla con **AWS Identity and Access Management (IAM)**. Entrenar un modelo propio con **Amazon SageMaker AI** daría más control, pero añade tiempo, datos etiquetados y coste que este caso no exige. Si después el asistente debe ejecutar acciones con herramientas, la evolución natural es un agente con **Amazon Bedrock AgentCore** o **Strands Agents**.',
				servicio: 'Amazon Bedrock',
			},
			{
				tipo: 'errorComun',
				error: 'Elegir Amazon SageMaker AI para cualquier proyecto de IA generativa porque «ofrece más control», incluso cuando el caso solo necesita consumir un modelo por API.',
				correccion:
					'Elige el servicio según quién gestiona el modelo y su ciclo de vida. Consumir un modelo fundacional con recuperación documental es trabajo de Amazon Bedrock; entrenar, ajustar o desplegar un modelo propio con control del entorno es trabajo de Amazon SageMaker AI. Más control también significa más responsabilidad operativa.',
			},
			{
				tipo: 'clave',
				items: [
					'Amazon Bedrock = modelos fundacionales por API con capacidades integradas; Amazon SageMaker AI = plataforma para entrenar, ajustar y desplegar modelos propios.',
					'Amazon SageMaker JumpStart acorta el despliegue con modelos preentrenados; Amazon Bedrock AgentCore y Strands Agents cubren la capa de agentes.',
					'Amazon Quick y Kiro aplican IA generativa a analítica empresarial y a desarrollo de software, no a servir modelos.',
					'La decisión se guía por quién gestiona el modelo, no por cuál servicio es «más potente».',
				],
			},
			{
				tipo: 'servicio',
				nombre: 'Amazon Bedrock',
			},
		],
		preguntasGuia: [
			'¿Qué servicio permite consumir modelos fundacionales por API sin gestionar infraestructura?',
			'¿Cuándo conviene Amazon SageMaker AI en lugar de Amazon Bedrock?',
			'¿Qué aportan Amazon Bedrock AgentCore y Strands Agents frente a una simple llamada al modelo?',
		],
	},
	{
		id: '2.3-g2',
		titulo: 'Ventajas de usar servicios de GenAI de AWS',
		objetivos: ['2.3#2'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'Las ventajas de usar servicios de IA generativa de AWS se explican por lo que la organización deja de construir:\n\n- **Accesibilidad**: los modelos se consumen por API, así que un equipo de aplicación puede integrarlos sin ser especialista en aprendizaje automático.\n- **Menor barrera de entrada**: no hay que comprar aceleradores ni montar clústeres; el modelo ya está entrenado y disponible.\n- **Eficiencia**: la plataforma gestiona el escalado, la disponibilidad y el mantenimiento, y se paga por uso en lugar de mantener capacidad ociosa.\n- **Rentabilidad**: el gasto se alinea con la demanda real y evita inversión inicial en infraestructura.\n- **Velocidad al mercado**: las capacidades integradas —recuperación, guardrails y evaluación— acortan el tiempo entre la idea y una aplicación en producción.\n- **Alineación con los objetivos de negocio**: los servicios se integran con los datos y los controles que la empresa ya usa en AWS, de modo que la aplicación generativa no queda aislada de la gobernanza existente.\n\nLa ventaja no es solo técnica: reduce el trabajo indiferenciado y deja al equipo centrado en el problema de negocio.',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Cuando el equipo conoce el dominio del negocio pero no tiene especialistas en ML.',
					'Cuando se necesita validar valor rápido antes de invertir en modelos propios.',
					'Cuando la carga es variable y no se quiere pagar capacidad fija.',
				],
				noUsar: [
					'No esperes que el servicio resuelva la calidad de los datos: una base documental desordenada produce respuestas pobres.',
					'No confundas menor barrera de entrada con ausencia de diseño: la integración, la evaluación y el control de acceso siguen siendo responsabilidad del equipo.',
				],
			},
			{
				tipo: 'ejemplo',
				md: '```text\nObjetivo: resumir incidencias de soporte y clasificarlas.\nCamino gestionado: llamar a Amazon Bedrock con pocos ejemplos en el prompt.\nResultado: funcionalidad en producción sin entrenar ni desplegar un modelo propio.\nResponsabilidad del equipo: definir el criterio, evaluar la calidad y controlar el acceso.\n```',
			},
			{
				tipo: 'servicio',
				nombre: 'Amazon Bedrock',
			},
		],
		preguntasGuia: [
			'¿Por qué un equipo sin especialistas en ML puede construir con servicios gestionados de GenAI?',
			'¿Qué significa «velocidad al mercado» en este contexto?',
			'¿Qué responsabilidades NO desaparecen al usar servicios gestionados?',
		],
	},
	{
		id: '2.3-g3',
		titulo: 'Beneficios de la infraestructura de AWS para GenAI',
		objetivos: ['2.3#3'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'Los beneficios de la infraestructura de AWS para aplicaciones de IA generativa se agrupan en cuatro frentes:\n\n- **Seguridad**: el acceso a los modelos y a los datos se controla con **AWS Identity and Access Management (IAM)**, el cifrado se gestiona con **AWS Key Management Service (AWS KMS)** y el tráfico puede mantenerse privado con **AWS PrivateLink** y **Amazon VPC**. **Amazon Macie** ayuda a descubrir datos sensibles en el almacenamiento.\n- **Cumplimiento**: **AWS Artifact** entrega informes y acuerdos de conformidad, **AWS Config** registra la configuración de los recursos y **AWS CloudTrail** deja la traza de auditoría de las llamadas.\n- **Responsabilidad**: el modelo de responsabilidad compartida reparte obligaciones entre AWS y el cliente, y las capacidades de filtrado y política permiten aplicar las reglas de contenido que la organización decide.\n- **Seguridad de las salidas (safety)**: **Amazon Bedrock Guardrails** filtra contenido y temas no permitidos, y la evaluación de modelos permite comprobar el comportamiento antes de publicar.\n\nEstos controles no son un añadido posterior: forman parte del diseño del sistema, igual que en cualquier otra carga de trabajo en AWS.',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Cuando la aplicación trata datos personales o regulados y necesitas cifrado, trazas y control de acceso explícitos.',
					'Cuando la auditoría exige demostrar quién invocó qué modelo y con qué permisos.',
					'Cuando necesitas limitar los temas y el contenido que el modelo puede producir.',
				],
				noUsar: [
					'No delegues toda la seguridad en el servicio: la clasificación de datos, la gestión de permisos y la revisión de resultados siguen siendo del cliente.',
					'No definas controles sin dueño: una política que nadie revisa no reduce el riesgo.',
				],
			},
			{
				tipo: 'ejemplo',
				md: '```text\nCaso: asistente interno sobre datos de clientes.\nCifrado de datos y volúmenes: AWS Key Management Service (AWS KMS).\nAcceso al modelo por endpoint privado: AWS PrivateLink sobre Amazon VPC.\nAuditoría de llamadas: AWS CloudTrail.\nFiltrado de salidas y temas: Amazon Bedrock Guardrails.\nInformes de conformidad para auditoría: AWS Artifact.\n```',
			},
			{
				tipo: 'servicio',
				nombre: 'AWS Artifact',
			},
		],
		preguntasGuia: [
			'¿Qué servicio de AWS entrega informes de conformidad para una auditoría?',
			'¿Cómo se cifra y se controla el acceso a los modelos y a los datos en AWS?',
			'¿Qué papel juega el modelo de responsabilidad compartida en una aplicación de GenAI?',
		],
	},
	{
		id: '2.3-g4',
		titulo: 'Tradeoffs de coste de los servicios de GenAI de AWS',
		objetivos: ['2.3#4'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'El coste de una aplicación de IA generativa no depende solo del precio del modelo; depende del intercambio entre **rendimiento, disponibilidad y gasto**:\n\n- **Precio por tokens**: el coste crece con los tokens de entrada y de salida. Prompts largos y respuestas extensas encarecen cada llamada y suelen añadir latencia.\n- **On-demand**: se paga por el consumo real, sin compromiso previo. Cómodo para cargas variables o poco predecibles, con menor garantía frente a picos de demanda.\n- **Provisioned throughput**: se reserva capacidad para una carga predecible. Da un comportamiento más estable bajo volumen sostenido, a cambio de pagar por capacidad aunque no se use al máximo.\n- **Respuesta y rendimiento**: acortar la salida o elegir un modelo más pequeño mejora la latencia y baja el coste, pero puede degradar la calidad.\n- **Disponibilidad, redundancia y cobertura regional**: desplegar en varias zonas o regiones mejora la continuidad y la cercanía al usuario, y a la vez multiplica la superficie a operar y el gasto.\n- **Modelos personalizados**: ajustar o entrenar un modelo mejora el encaje en el dominio, pero añade coste de preparación de datos, de entrenamiento y de mantenimiento de la versión.\n\nCada decisión de coste es, en realidad, una decisión sobre qué garantía se necesita.',
			},
			{
				tipo: 'comparacion',
				parId: 'provisioned-throughput-vs-on-demand',
			},
			{
				tipo: 'ejemplo',
				md: '```text\nEscenario A: asistente interno usado de forma irregular.\n-> On-demand: se paga solo lo consumido.\nEscenario B: clasificación que procesa el mismo volumen cada minuto durante todo el día.\n-> Provisioned throughput: capacidad estable para una demanda predecible.\nEn ambos casos: acortar el prompt y limitar la salida reduce tokens y latencia.\n```',
			},
			{
				tipo: 'clave',
				items: [
					'Precio por tokens: la longitud del prompt y de la respuesta es una decisión de coste.',
					'On-demand = pago por uso; provisioned throughput = capacidad reservada para demanda predecible.',
					'Más disponibilidad, redundancia y cobertura regional implican más gasto y más operación.',
					'Un modelo personalizado mejora el encaje a cambio de coste de datos, entrenamiento y mantenimiento.',
				],
			},
		],
		preguntasGuia: [
			'¿Qué diferencia hay entre on-demand y provisioned throughput como modelo de coste?',
			'¿Cómo afecta la longitud de la respuesta al coste y a la latencia?',
			'¿Qué tradeoff introduce desplegar en más regiones o personalizar un modelo?',
		],
	},
];
