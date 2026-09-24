import type { PreguntaClfC02 } from '@/data/clfC02/types';

export const preguntasTask24: PreguntaClfC02[] = [
	{
		id: '2.4-q1',
		taskId: '2.4',
		objetivos: ['2.4#1'],
		tipo: 'conocimiento',
		question: '¿Qué describe mejor las capacidades de seguridad que AWS ofrece a sus clientes?',
		options: [
			'Un único producto de seguridad que cubre identidad, red, datos y cumplimiento a la vez.',
			'Un conjunto de capacidades complementarias repartidas en dominios como identidad y acceso, detección, protección de datos y cumplimiento.',
			'Un servicio que solo cifra los datos en reposo y delega el resto al cliente.',
			'Un requisito contractual que obliga al cliente a usar hardware propio.',
		],
		correctAnswer: 1,
		explanation:
			'AWS ofrece capacidades complementarias (identidad y acceso, protección, detección, protección de datos, visibilidad y cumplimiento). Ninguna cubre todo por sí sola: el cliente las combina dentro del modelo de responsabilidad compartida.',
	},
	{
		id: '2.4-q2',
		taskId: '2.4',
		objetivos: ['2.4#2'],
		tipo: 'conocimiento',
		question:
			'Un equipo necesita las certificaciones y los informes de cumplimiento vigentes que AWS emite para sus servicios. ¿Dónde los obtiene?',
		options: [
			'En AWS Artifact, el portal de auto-servicio de informes de cumplimiento y acuerdos de AWS.',
			'En AWS Trusted Advisor, dentro de sus comprobaciones de seguridad.',
			'En AWS Security Hub, entre sus hallazgos agregados.',
			'En Amazon GuardDuty, a partir de sus detecciones de amenazas.',
		],
		correctAnswer: 0,
		explanation:
			'AWS Artifact es el recurso de auto-servicio donde se descargan informes de cumplimiento y acuerdos de AWS. Trusted Advisor, Security Hub y GuardDuty informan sobre el estado de seguridad del entorno, pero no son la evidencia documental de cumplimiento.',
	},
	{
		id: '2.4-q3',
		taskId: '2.4',
		objetivos: ['2.4#3'],
		tipo: 'comparacion',
		question:
			'Un sitio web recibe dos ataques al mismo tiempo: peticiones con carga maliciosa dirigidas a los formularios y un volumen masivo de tráfico que intenta saturar el servicio. ¿Qué servicio mitiga cada ataque?',
		options: [
			'Amazon GuardDuty detiene la carga maliciosa y AWS WAF absorbe el volumen del ataque.',
			'AWS WAF inspecciona y bloquea las peticiones maliciosas, y AWS Shield protege frente al ataque de denegación de servicio distribuido.',
			'AWS Shield inspecciona las peticiones y AWS Firewall Manager absorbe el volumen del ataque.',
			'AWS Security Hub bloquea ambos ataques y Amazon Inspector informa de las vulnerabilidades.',
		],
		correctAnswer: 1,
		explanation:
			'AWS WAF filtra el contenido de las peticiones HTTP(S) y bloquea patrones maliciosos; AWS Shield protege frente a ataques DDoS que buscan agotar el servicio por volumen. Son capas distintas que se combinan.',
	},
	{
		id: '2.4-q4',
		taskId: '2.4',
		objetivos: ['2.4#3'],
		tipo: 'comparacion',
		question:
			'Un equipo quiere saber si hay comportamiento sospechoso, si sus instancias tienen vulnerabilidades conocidas y qué hallazgos de seguridad existen en la cuenta. ¿Qué servicio corresponde a cada necesidad?',
		options: [
			'Amazon Inspector detecta amenazas, Amazon GuardDuty evalúa vulnerabilidades y AWS Security Hub agrega los hallazgos.',
			'Amazon GuardDuty detecta amenazas, Amazon Inspector evalúa vulnerabilidades y AWS Security Hub agrega y prioriza los hallazgos.',
			'AWS Security Hub detecta amenazas, Amazon GuardDuty evalúa vulnerabilidades y Amazon Inspector agrega los hallazgos.',
			'Los tres servicios son intercambiables: cualquiera de ellos hace las tres funciones.',
		],
		correctAnswer: 1,
		explanation:
			'Amazon GuardDuty detecta actividad sospechosa a partir de señales del entorno; Amazon Inspector evalúa vulnerabilidades y exposición de las cargas de trabajo; AWS Security Hub agrega y prioriza los hallazgos de seguridad en una vista única.',
	},
	{
		id: '2.4-q5',
		taskId: '2.4',
		objetivos: ['2.4#3'],
		tipo: 'escenario',
		question:
			'Una empresa ejecuta cargas de trabajo en varias cuentas y quiere aplicar las mismas reglas de protección de aplicaciones web de forma centralizada, sin configurar cada cuenta por separado. ¿Qué servicio responde mejor a esa necesidad?',
		options: [
			'AWS WAF, porque crea las reglas automáticamente en cada cuenta.',
			'AWS Shield, porque distribuye la política de reglas entre las cuentas.',
			'AWS Firewall Manager, porque administra centralmente las políticas de protección en varias cuentas de una organización.',
			'Amazon GuardDuty, porque aplica las reglas de firewall a las cuentas de la organización.',
		],
		correctAnswer: 2,
		explanation:
			'AWS Firewall Manager centraliza la administración de políticas y reglas de protección (por ejemplo, de AWS WAF y AWS Shield) en varias cuentas de una organización. WAF define reglas en una cuenta; GuardDuty detecta amenazas, no administra reglas.',
	},
	{
		id: '2.4-q6',
		taskId: '2.4',
		objetivos: ['2.4#3'],
		tipo: 'servicio',
		question:
			'Una empresa requiere evaluar de forma continua si sus instancias y contenedores tienen vulnerabilidades conocidas o configuraciones que los exponen. ¿Qué servicio de AWS está diseñado para ello?',
		options: ['AWS Shield', 'Amazon Inspector', 'AWS Trusted Advisor', 'AWS Firewall Manager'],
		correctAnswer: 1,
		explanation:
			'Amazon Inspector evalúa vulnerabilidades y exposición de cargas de trabajo; Shield mitiga ataques DDoS, Firewall Manager centraliza políticas y Trusted Advisor entrega comprobaciones y recomendaciones generales.',
	},
	{
		id: '2.4-q7',
		taskId: '2.4',
		objetivos: ['2.4#4'],
		tipo: 'conocimiento',
		question:
			'Una empresa necesita una herramienta de seguridad muy específica que no quiere desarrollar y prefiere adquirirla ya integrada con AWS. ¿Qué recurso de AWS le permite encontrarla?',
		options: [
			'AWS Marketplace, que ofrece productos de terceros, incluidos productos de seguridad.',
			'AWS Artifact, que publica informes de cumplimiento.',
			'AWS Trusted Advisor, que vende licencias de software.',
			'AWS Security Center, que es un catálogo de productos de terceros.',
		],
		correctAnswer: 0,
		explanation:
			'AWS Marketplace es el catálogo donde proveedores independientes publican productos y servicios, incluidos productos de seguridad de terceros. AWS Artifact publica informes de cumplimiento y Trusted Advisor entrega recomendaciones; ninguno es un catálogo de software de terceros.',
	},
	{
		id: '2.4-q8',
		taskId: '2.4',
		objetivos: ['2.4#4'],
		tipo: 'escenario',
		question:
			'Una startup quiere cumplir un requisito de seguridad sectorial y decide comprar un producto especializado de un fabricante que ya ofrece su solución en AWS, en lugar de construirlo internamente. ¿Qué afirmación describe mejor esta decisión?',
		options: [
			'Es inválida: en AWS solo se puede usar software desarrollado por AWS.',
			'Es posible: AWS Marketplace ofrece productos de seguridad de terceros que se adquieren como suscripciones.',
			'Solo es posible con el plan AWS Enterprise Support contratado.',
			'Requiere migrar primero todas las cuentas a una sola región.',
		],
		correctAnswer: 1,
		explanation:
			'AWS Marketplace permite adquirir y desplegar productos de terceros, incluidos productos de seguridad, sin desarrollarlos internamente. No exige un plan de soporte concreto ni limita el uso al software de AWS.',
	},
	{
		id: '2.4-q9',
		taskId: '2.4',
		objetivos: ['2.4#5'],
		tipo: 'conocimiento',
		question:
			'Un arquitecto necesita información oficial y actualizada sobre prácticas y novedades de seguridad de AWS. ¿Cuál es un recurso adecuado?',
		options: [
			'AWS Security Blog y AWS Security Center.',
			'AWS Shield y AWS WAF.',
			'Amazon GuardDuty y Amazon Inspector.',
			'AWS Firewall Manager y AWS Trusted Advisor.',
		],
		correctAnswer: 0,
		explanation:
			'AWS Security Blog publica artículos y novedades de seguridad, y AWS Security Center reúne la información de seguridad de AWS. Las demás opciones son servicios de protección, detección o recomendaciones, no fuentes de documentación.',
	},
	{
		id: '2.4-q10',
		taskId: '2.4',
		objetivos: ['2.4#5'],
		tipo: 'escenario',
		question:
			'Tras activar una opción en la consola, un ingeniero no entiende por qué una recomendación concreta no aplica a su caso y busca una explicación breve y práctica. ¿Qué recurso encaja mejor?',
		options: [
			'AWS Knowledge Center, que reúne respuestas breves a dudas frecuentes y de solución de problemas.',
			'AWS Artifact, que contiene informes de auditoría del entorno del cliente.',
			'Amazon GuardDuty, que explica cada configuración de la consola.',
			'AWS Shield, que documenta las opciones de la cuenta.',
		],
		correctAnswer: 0,
		explanation:
			'AWS Knowledge Center ofrece respuestas breves y prácticas a preguntas frecuentes. AWS Artifact entrega informes de cumplimiento; GuardDuty y Shield son servicios operativos, no fuentes de ayuda puntual.',
	},
	{
		id: '2.4-q11',
		taskId: '2.4',
		objetivos: ['2.4#6'],
		tipo: 'conocimiento',
		question: '¿Qué hace AWS Trusted Advisor por un cliente?',
		options: [
			'Corrige automáticamente las configuraciones inseguras de la cuenta.',
			'Revisa el entorno y entrega comprobaciones y recomendaciones en categorías como seguridad, rendimiento y optimización de costes.',
			'Emite los informes de cumplimiento que exige un auditor.',
			'Sustituye a AWS WAF en la protección de aplicaciones web.',
		],
		correctAnswer: 1,
		explanation:
			'AWS Trusted Advisor inspecciona el entorno y entrega comprobaciones y recomendaciones. No aplica cambios por el cliente, no emite informes de cumplimiento (eso es AWS Artifact) y no sustituye a los servicios de protección como AWS WAF.',
	},
	{
		id: '2.4-q12',
		taskId: '2.4',
		objetivos: ['2.4#3'],
		tipo: 'tradeoff',
		question:
			'Un equipo debe elegir cómo cubrir la detección de amenazas frente a la evaluación de vulnerabilidades, con presupuesto para contratar un solo servicio este trimestre. ¿Qué criterio de decisión es correcto?',
		options: [
			'Elegir Amazon GuardDuty si la prioridad es detectar comportamiento sospechoso sobre la actividad; elegir Amazon Inspector si la prioridad es encontrar vulnerabilidades en las cargas de trabajo.',
			'Elegir Amazon GuardDuty si la prioridad es encontrar vulnerabilidades; elegir Amazon Inspector si la prioridad es detectar amenazas.',
			'Elegir AWS Security Hub si la prioridad es proteger frente a ataques de volumen; elegir AWS Shield si la prioridad es agregar hallazgos.',
			'Los tres servicios son equivalentes y la elección no cambia el resultado.',
		],
		correctAnswer: 0,
		explanation:
			'Amazon GuardDuty se orienta a la detección de amenazas sobre la actividad del entorno; Amazon Inspector, a la evaluación de vulnerabilidades y exposición de las cargas. Son necesidades distintas, por eso el criterio depende de la prioridad.',
	},
];
