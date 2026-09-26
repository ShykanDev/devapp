import type { PreguntaClfC02 } from '@/data/clfC02/types';

export const preguntasTask24: PreguntaClfC02[] = [
	{
		id: '2.4-q1',
		taskId: '2.4',
		objetivos: ['2.4#1'],
		tipo: 'conocimiento',
		question: '¿Qué describe mejor las capacidades de seguridad que AWS ofrece a sus clientes?',
		options: [
			'Un único producto de seguridad que cubre a la vez la identidad, la red, los datos y el cumplimiento en todas las cuentas de la organización.',
			'Un conjunto de capacidades complementarias repartidas en dominios como identidad y acceso, detección, protección de datos y cumplimiento.',
			'Un servicio que solo cifra los datos en reposo y delega al cliente el resto de las capacidades, como la detección de amenazas.',
			'Un requisito contractual que obliga al cliente a usar hardware propio y a operarlo en sus propias instalaciones fuera de la nube.',
		],
		correctAnswer: 1,
		explanation:
			'AWS ofrece capacidades complementarias (identidad y acceso, protección, detección, protección de datos, visibilidad y cumplimiento). Ninguna cubre todo por sí sola: el cliente las combina dentro del modelo de responsabilidad compartida. Si el requisito pidiera un dominio concreto, la respuesta señalaría la capacidad asociada a ese riesgo.',
		porQueOpcion: [
			'Incorrecta: ninguna capacidad única cubre identidad, red, datos y cumplimiento a la vez.',
			'Correcta: AWS ofrece capacidades complementarias repartidas en dominios según el riesgo.',
			'Incorrecta: AWS no se limita al cifrado ni delega por completo la detección al cliente.',
			'Incorrecta: la nube no exige hardware propio ni operar fuera de AWS.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/aws-risk-and-compliance/shared-responsibility-model.html',
		],
	},
	{
		id: '2.4-q2',
		taskId: '2.4',
		objetivos: ['2.4#2'],
		tipo: 'conocimiento',
		question:
			'Un equipo necesita las certificaciones y los informes de cumplimiento vigentes que AWS emite para sus servicios. ¿Dónde los obtiene?',
		options: [
			'En el portal de auto-servicio de informes de cumplimiento y acuerdos de AWS.',
			'En el servicio de comprobaciones y recomendaciones de mejores prácticas de la cuenta.',
			'En el servicio que agrega y prioriza los hallazgos de seguridad de la organización.',
			'En el servicio que detecta de forma continua actividad maliciosa en la cuenta.',
		],
		correctAnswer: 0,
		explanation:
			'Los informes de cumplimiento y acuerdos de AWS se descargan del portal de auto-servicio de AWS (AWS Artifact). Los servicios de recomendaciones, de hallazgos agregados y de detección informan sobre el estado del entorno, pero no son la evidencia documental de cumplimiento. Si cambia la necesidad a documentación de seguridad puntual, la respuesta sería el centro de conocimiento de AWS.',
		porQueOpcion: [
			'Correcta: los informes y acuerdos se obtienen del portal de auto-servicio de AWS (AWS Artifact).',
			'Incorrecta: el servicio de comprobaciones y recomendaciones no emite la evidencia documental de cumplimiento.',
			'Incorrecta: la agregación de hallazgos informa del estado del entorno, no de las certificaciones.',
			'Incorrecta: el servicio de detección de amenazas no publica informes de cumplimiento.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/artifact/',
		],
	},
	{
		id: '2.4-q3',
		taskId: '2.4',
		objetivos: ['2.4#3'],
		tipo: 'comparacion',
		question:
			'Un sitio web recibe dos ataques al mismo tiempo: peticiones con carga maliciosa dirigidas a los formularios y un volumen masivo de tráfico que intenta saturar el servicio. ¿Qué servicio mitiga cada ataque?',
		options: [
			'Amazon GuardDuty detiene la carga maliciosa de los formularios y AWS WAF absorbe el volumen del ataque de saturación de la aplicación.',
			'AWS WAF inspecciona y bloquea las peticiones maliciosas, y AWS Shield protege frente al ataque de denegación de servicio distribuido.',
			'AWS Shield inspecciona el contenido de cada petición y AWS Firewall Manager absorbe el volumen del ataque de saturación sobre el sitio web.',
			'AWS Security Hub bloquea ambos ataques a la vez y Amazon Inspector informa de las vulnerabilidades detectadas en los formularios.',
		],
		correctAnswer: 1,
		explanation:
			'AWS WAF filtra el contenido de las peticiones HTTP(S) y bloquea patrones maliciosos; AWS Shield protege frente a ataques DDoS que buscan agotar el servicio por volumen. Son capas distintas que se combinan. Si cambia el ataque a una inyección de código, la respuesta seguiría siendo AWS WAF.',
		porQueOpcion: [
			'Incorrecta: GuardDuty detecta amenazas y no filtra el contenido de las peticiones.',
			'Correcta: AWS WAF filtra las peticiones maliciosas y AWS Shield mitiga el ataque de volumen.',
			'Incorrecta: Shield mitiga DDoS, pero no inspecciona el contenido de cada petición.',
			'Incorrecta: Security Hub agrega hallazgos e Inspector evalúa vulnerabilidades; ninguno bloquea los ataques.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/guardduty/',
			'https://docs.aws.amazon.com/waf/',
			'https://docs.aws.amazon.com/shield/',
			'https://docs.aws.amazon.com/firewall-manager/',
			'https://docs.aws.amazon.com/securityhub/',
			'https://docs.aws.amazon.com/inspector/',
		],
	},
	{
		id: '2.4-q4',
		taskId: '2.4',
		objetivos: ['2.4#3'],
		tipo: 'comparacion',
		question:
			'Un equipo quiere saber si hay comportamiento sospechoso, si sus instancias tienen vulnerabilidades conocidas y qué hallazgos de seguridad existen en la cuenta. ¿Qué servicio corresponde a cada necesidad?',
		options: [
			'Amazon Inspector detecta amenazas, Amazon GuardDuty evalúa vulnerabilidades y AWS Security Hub agrega los hallazgos de toda la organización.',
			'Amazon GuardDuty detecta amenazas, Amazon Inspector evalúa vulnerabilidades y AWS Security Hub agrega y prioriza los hallazgos.',
			'AWS Security Hub detecta amenazas, Amazon GuardDuty evalúa vulnerabilidades y Amazon Inspector agrega los hallazgos.',
			'Los tres servicios son intercambiables: cualquiera de ellos hace las tres funciones.',
		],
		correctAnswer: 1,
		explanation:
			'Amazon GuardDuty detecta actividad sospechosa a partir de señales del entorno; Amazon Inspector evalúa vulnerabilidades y exposición de las cargas de trabajo; AWS Security Hub agrega y prioriza los hallazgos de seguridad en una vista única. Si cambia la necesidad a la mitigación de un ataque de volumen, la respuesta sería AWS Shield.',
		porQueOpcion: [
			'Incorrecta: intercambia los roles de Inspector y GuardDuty.',
			'Correcta: GuardDuty detecta amenazas, Inspector evalúa vulnerabilidades y Security Hub agrega y prioriza los hallazgos.',
			'Incorrecta: cruza por completo las funciones de los tres servicios.',
			'Incorrecta: los tres servicios tienen funciones distintas y no son intercambiables.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/inspector/',
			'https://docs.aws.amazon.com/guardduty/',
			'https://docs.aws.amazon.com/securityhub/',
			'https://docs.aws.amazon.com/shield/',
		],
	},
	{
		id: '2.4-q5',
		taskId: '2.4',
		objetivos: ['2.4#3'],
		tipo: 'escenario',
		question:
			'Una empresa ejecuta cargas de trabajo en varias cuentas y quiere aplicar las mismas reglas de protección de aplicaciones web de forma centralizada, sin configurar cada cuenta por separado. ¿Qué servicio responde mejor a esa necesidad?',
		options: [
			'AWS WAF, porque crea y distribuye las reglas de forma automática en cada cuenta de la organización sin configuración central.',
			'AWS Shield, porque distribuye y aplica la política de reglas de protección entre todas las cuentas de la organización.',
			'AWS Firewall Manager, porque administra centralmente las políticas de protección en varias cuentas de una organización.',
			'Amazon GuardDuty, porque aplica las reglas del firewall web a todas las cuentas de la organización.',
		],
		correctAnswer: 2,
		explanation:
			'AWS Firewall Manager centraliza la administración de políticas y reglas de protección (por ejemplo, de AWS WAF y AWS Shield) en varias cuentas de una organización. WAF define reglas en una cuenta; GuardDuty detecta amenazas, no administra reglas. Si cambia el requisito a filtrar el contenido de las peticiones, la respuesta sería AWS WAF.',
		porQueOpcion: [
			'Incorrecta: AWS WAF define reglas en una cuenta y no las distribuye solo entre varias.',
			'Incorrecta: AWS Shield mitiga DDoS, pero no distribuye políticas de reglas entre cuentas.',
			'Correcta: AWS Firewall Manager administra centralmente las políticas de protección en varias cuentas.',
			'Incorrecta: GuardDuty detecta amenazas y no aplica reglas de firewall web.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/waf/',
			'https://docs.aws.amazon.com/shield/',
			'https://docs.aws.amazon.com/firewall-manager/',
			'https://docs.aws.amazon.com/guardduty/',
		],
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
			'Amazon Inspector evalúa vulnerabilidades y exposición de cargas de trabajo; Shield mitiga ataques DDoS, Firewall Manager centraliza políticas y Trusted Advisor entrega comprobaciones y recomendaciones generales. Si cambia el requisito a detectar actividad maliciosa en la cuenta, la respuesta sería Amazon GuardDuty.',
		porQueOpcion: [
			'Incorrecta: AWS Shield mitiga ataques DDoS, no evalúa vulnerabilidades.',
			'Correcta: Amazon Inspector evalúa vulnerabilidades y exposición de instancias y contenedores.',
			'Incorrecta: Trusted Advisor entrega recomendaciones generales, no un análisis de vulnerabilidades.',
			'Incorrecta: Firewall Manager centraliza políticas de protección, no evalúa vulnerabilidades.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/shield/',
			'https://docs.aws.amazon.com/inspector/',
			'https://docs.aws.amazon.com/guardduty/',
			'https://docs.aws.amazon.com/awssupport/latest/user/trusted-advisor.html',
			'https://docs.aws.amazon.com/firewall-manager/',
		],
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
			'AWS Security Center, que es un catálogo de productos de terceros publicados por proveedores independientes.',
		],
		correctAnswer: 0,
		explanation:
			'AWS Marketplace es el catálogo donde proveedores independientes publican productos y servicios, incluidos productos de seguridad de terceros. AWS Artifact publica informes de cumplimiento y Trusted Advisor entrega recomendaciones; ninguno es un catálogo de software de terceros. Si cambia el requisito a descargar informes de cumplimiento, la respuesta sería AWS Artifact.',
		porQueOpcion: [
			'Correcta: AWS Marketplace ofrece productos de terceros, incluidos los de seguridad.',
			'Incorrecta: AWS Artifact publica informes de cumplimiento, no es un catálogo de software.',
			'Incorrecta: Trusted Advisor entrega recomendaciones y no vende licencias.',
			'Incorrecta: AWS Security Center es un recurso informativo, no un catálogo de terceros.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/marketplace/',
			'https://docs.aws.amazon.com/artifact/',
			'https://docs.aws.amazon.com/awssupport/latest/user/trusted-advisor.html',
		],
	},
	{
		id: '2.4-q8',
		taskId: '2.4',
		objetivos: ['2.4#4'],
		tipo: 'escenario',
		question:
			'Una startup quiere cumplir un requisito de seguridad sectorial y decide comprar un producto especializado de un fabricante que ya ofrece su solución en AWS, en lugar de construirlo internamente. ¿Qué afirmación describe mejor esta decisión?',
		options: [
			'Es inválida: en AWS solo se puede usar software desarrollado y soportado directamente por AWS en todos los servicios.',
			'Es posible: AWS Marketplace ofrece productos de seguridad de terceros que se adquieren como suscripciones.',
			'Solo es posible con el plan AWS Enterprise Support contratado y con la aprobación del equipo de cuentas de AWS.',
			'Requiere migrar primero todas las cuentas a una sola región y unificar la facturación con AWS Organizations.',
		],
		correctAnswer: 1,
		explanation:
			'AWS Marketplace permite adquirir y desplegar productos de terceros, incluidos productos de seguridad, sin desarrollarlos internamente. No exige un plan de soporte concreto ni limita el uso al software de AWS. Si cambia el objetivo a revisar la propia configuración, la respuesta sería un servicio de recomendaciones de la cuenta.',
		porQueOpcion: [
			'Incorrecta: en AWS sí se puede usar software de terceros, no solo el de AWS.',
			'Correcta: AWS Marketplace permite adquirir productos de seguridad de terceros como suscripciones.',
			'Incorrecta: no se exige un plan de soporte concreto ni una aprobación especial.',
			'Incorrecta: comprar en el Marketplace no obliga a migrar de región ni a unificar la facturación.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/marketplace/',
			'https://docs.aws.amazon.com/organizations/',
		],
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
			'AWS Security Blog publica artículos y novedades de seguridad, y AWS Security Center reúne la información de seguridad de AWS. Las demás opciones son servicios de protección, detección o recomendaciones, no fuentes de documentación. Si cambia la necesidad a resolver una duda puntual, la respuesta sería el centro de conocimiento de AWS.',
		porQueOpcion: [
			'Correcta: el blog de seguridad publica novedades y el Security Center reúne información oficial de seguridad.',
			'Incorrecta: Shield y WAF son servicios de protección, no fuentes de información.',
			'Incorrecta: GuardDuty e Inspector son servicios de detección y evaluación, no documentación.',
			'Incorrecta: Firewall Manager y Trusted Advisor son servicios operativos, no fuentes de consulta.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/shield/',
			'https://docs.aws.amazon.com/waf/',
			'https://docs.aws.amazon.com/guardduty/',
			'https://docs.aws.amazon.com/inspector/',
			'https://docs.aws.amazon.com/firewall-manager/',
			'https://docs.aws.amazon.com/awssupport/latest/user/trusted-advisor.html',
		],
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
			'AWS Artifact, que contiene informes de auditoría del entorno del cliente y explicaciones detalladas de cada configuración de la consola.',
			'Amazon GuardDuty, que explica cada configuración de la consola.',
			'AWS Shield, que documenta las opciones de la cuenta.',
		],
		correctAnswer: 0,
		explanation:
			'AWS Knowledge Center ofrece respuestas breves y prácticas a preguntas frecuentes. AWS Artifact entrega informes de cumplimiento; GuardDuty y Shield son servicios operativos, no fuentes de ayuda puntual. Si cambia la necesidad a entender una novedad, la respuesta sería el blog de seguridad de AWS.',
		porQueOpcion: [
			'Correcta: AWS Knowledge Center reúne respuestas breves y prácticas a dudas frecuentes.',
			'Incorrecta: AWS Artifact contiene informes de cumplimiento, no explicaciones de configuración.',
			'Incorrecta: GuardDuty es un servicio de detección, no una fuente de ayuda.',
			'Incorrecta: Shield es un servicio de protección y no documenta las opciones de la cuenta.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/artifact/',
			'https://docs.aws.amazon.com/guardduty/',
			'https://docs.aws.amazon.com/shield/',
		],
	},
	{
		id: '2.4-q11',
		taskId: '2.4',
		objetivos: ['2.4#6'],
		tipo: 'conocimiento',
		question: '¿Qué hace por un cliente el servicio de revisión proactiva que señala mejores prácticas?',
		options: [
			'Corrige automáticamente las configuraciones inseguras de la cuenta y aplica por sí mismo las mejores prácticas que detecta en el entorno.',
			'Revisa el entorno y entrega comprobaciones y recomendaciones en categorías como seguridad, rendimiento y optimización de costes.',
			'Emite los informes de cumplimiento que exige un auditor y los acuerdos aplicables a la organización.',
			'Sustituye al firewall de aplicaciones web en la protección de las aplicaciones y del tráfico entrante.',
		],
		correctAnswer: 1,
		explanation:
			'AWS Trusted Advisor inspecciona el entorno y entrega comprobaciones y recomendaciones. No aplica cambios por el cliente, no emite informes de cumplimiento y no sustituye a los servicios de protección. Si cambia el requisito a mostrar una vista única de hallazgos, la respuesta sería un servicio de agregación de hallazgos.',
		porQueOpcion: [
			'Incorrecta: Trusted Advisor no aplica cambios por el cliente, solo recomienda.',
			'Correcta: Trusted Advisor revisa el entorno y entrega comprobaciones en categorías como seguridad, rendimiento y coste.',
			'Incorrecta: los informes de cumplimiento los publica AWS Artifact, no Trusted Advisor.',
			'Incorrecta: Trusted Advisor no sustituye a AWS WAF ni protege el tráfico.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/artifact/',
			'https://docs.aws.amazon.com/waf/',
			'https://docs.aws.amazon.com/awssupport/latest/user/trusted-advisor.html',
		],
	},
	{
		id: '2.4-q12',
		taskId: '2.4',
		objetivos: ['2.4#3'],
		tipo: 'tradeoff',
		question:
			'Un equipo debe elegir cómo cubrir la detección de amenazas frente a la evaluación de vulnerabilidades. Sin embargo, aunque ambos problemas son relevantes, solo hay presupuesto para contratar un servicio este trimestre. ¿Qué criterio de decisión es correcto?',
		options: [
			'Elegir Amazon GuardDuty si la prioridad es detectar comportamiento sospechoso; elegir Amazon Inspector si la prioridad es encontrar vulnerabilidades.',
			'Elegir Amazon GuardDuty si la prioridad es encontrar vulnerabilidades; elegir Amazon Inspector si la prioridad es detectar amenazas sobre la actividad.',
			'Elegir AWS Security Hub si la prioridad es proteger frente a ataques de volumen; elegir AWS Shield si la prioridad es agregar los hallazgos de seguridad.',
			'Los tres servicios son equivalentes y la elección no cambia el resultado, porque todos detectan amenazas y evalúan vulnerabilidades.',
		],
		correctAnswer: 0,
		explanation:
			'Amazon GuardDuty se orienta a la detección de amenazas sobre la actividad del entorno; Amazon Inspector, a la evaluación de vulnerabilidades y exposición de las cargas. Son necesidades distintas, por eso el criterio depende de la prioridad. Si cambia la prioridad a mitigar un ataque de volumen, la respuesta sería AWS Shield.',
		porQueOpcion: [
			'Correcta: GuardDuty se orienta a detectar amenazas y Inspector a evaluar vulnerabilidades.',
			'Incorrecta: invierte la prioridad, porque GuardDuty no busca vulnerabilidades.',
			'Incorrecta: Security Hub agrega hallazgos y Shield mitiga ataques de volumen, no al contrario.',
			'Incorrecta: los servicios no son equivalentes y la elección cambia el resultado.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/guardduty/',
			'https://docs.aws.amazon.com/inspector/',
			'https://docs.aws.amazon.com/securityhub/',
			'https://docs.aws.amazon.com/shield/',
		],
	},
	{
		id: '2.4-q13',
		taskId: '2.4',
		objetivos: ['2.4#1'],
		tipo: 'escenario',
		question:
			'Una empresa pregunta qué capacidades de seguridad necesita cubrir además del cifrado. ¿Qué respuesta describe mejor el enfoque de AWS?',
		options: [
			'Combinar capacidades complementarias de identidad, protección, detección, visibilidad y cumplimiento según el riesgo a reducir.',
			'Contratar un único servicio de seguridad que cubra a la vez todos los dominios y no requiera configuración adicional en la cuenta.',
			'Delegar todas las capacidades en AWS, que las habilita por defecto en cada cuenta y las opera en nombre del cliente.',
			'Limitarse al cifrado en reposo y en tránsito, porque el resto de capacidades las aporta la infraestructura de AWS.',
		],
		correctAnswer: 0,
		explanation:
			'Las capacidades de seguridad de AWS se reparten en dominios complementarios y se eligen según el riesgo que se quiera reducir. Ningún servicio único cubre todos los dominios ni AWS opera la configuración del cliente. Si el requisito priorizara la identidad, la respuesta sería la capacidad de identidad y acceso.',
		porQueOpcion: [
			'Correcta: las capacidades se reparten en dominios complementarios y se eligen según el riesgo.',
			'Incorrecta: ningún servicio único cubre todos los dominios de seguridad.',
			'Incorrecta: AWS no habilita todas las capacidades ni opera la configuración del cliente.',
			'Incorrecta: limitarse al cifrado deja sin cubrir identidad, detección y cumplimiento.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/aws-risk-and-compliance/shared-responsibility-model.html',
		],
	},
	{
		id: '2.4-q14',
		taskId: '2.4',
		objetivos: ['2.4#2'],
		tipo: 'escenario',
		question:
			'Un equipo necesita localizar información oficial de seguridad para resolver una incidencia concreta y, por separado, entender una novedad de seguridad publicada por AWS. ¿Qué recursos encajan?',
		options: [
			'Las respuestas breves del centro de conocimiento para la incidencia y el blog de seguridad para la novedad.',
			'Los informes de cumplimiento para ambos casos, porque recogen toda la información de seguridad de AWS.',
			'El panel de revisión de mejores prácticas para la incidencia y los foros de terceros para la novedad.',
			'La consola del servicio de detección de amenazas para la incidencia y sus propios boletines para la novedad.',
		],
		correctAnswer: 0,
		explanation:
			'El centro de conocimiento de AWS resuelve dudas puntuales y el blog de seguridad publica artículos y novedades. Los informes de cumplimiento no explican incidencias concretas y los foros de terceros no son la fuente oficial. Si cambia la necesidad a evidencia de cumplimiento, la respuesta sería el portal de informes de AWS.',
		porQueOpcion: [
			'Correcta: el centro de conocimiento resuelve la incidencia y el blog de seguridad explica la novedad.',
			'Incorrecta: los informes de cumplimiento no explican incidencias ni novedades técnicas.',
			'Incorrecta: los foros de terceros no son la fuente oficial y el panel no resuelve la incidencia.',
			'Incorrecta: la consola de detección y sus boletines no son el recurso de consulta adecuado.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/aws-risk-and-compliance/shared-responsibility-model.html',
		],
	},
	{
		id: '2.4-q15',
		taskId: '2.4',
		objetivos: ['2.4#6'],
		tipo: 'escenario',
		question:
			'Un ingeniero no entiende por qué una comprobación de seguridad de la consola no aplica a su caso y quiere entender el criterio de la recomendación. ¿Qué debería hacer?',
		options: [
			'Consultar la explicación de la comprobación en el servicio de revisión proactiva, que señala el motivo y la mejor práctica.',
			'Desactivar la comprobación para que no vuelva a aparecer en el informe de recomendaciones de la cuenta.',
			'Abrir el servicio de detección de amenazas y esperar a que genere un hallazgo sobre la configuración revisada en el panel de la cuenta.',
			'Descargar los informes de cumplimiento y buscar la comprobación entre sus acuerdos aplicables al sector.',
		],
		correctAnswer: 0,
		explanation:
			'AWS Trusted Advisor explica cada comprobación y la mejor práctica asociada, además de por qué puede no aplicar a un caso concreto. Desactivarla oculta el aviso; los servicios de detección y los informes de cumplimiento no explican esa recomendación. Si cambia la necesidad a centralizar hallazgos, la respuesta sería un servicio de agregación.',
		porQueOpcion: [
			'Correcta: Trusted Advisor explica la comprobación, el motivo y la mejor práctica aplicable.',
			'Incorrecta: desactivar la comprobación oculta el aviso en lugar de explicarlo.',
			'Incorrecta: el servicio de detección no explica el criterio de una recomendación.',
			'Incorrecta: los informes de cumplimiento no contienen la explicación de esa comprobación.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/awssupport/latest/user/trusted-advisor.html',
		],
	},
	{
		id: '2.4-q16',
		taskId: '2.4',
		objetivos: ['2.4#6'],
		tipo: 'comparacion',
		question: '¿Qué distingue la revisión proactiva de la cuenta de la centralización de hallazgos de seguridad?',
		options: [
			'La revisión proactiva analiza la configuración propia y recomienda mejoras; la centralización reúne y prioriza hallazgos de varios servicios y cuentas.',
			'La revisión proactiva reúne los hallazgos de otros servicios de seguridad; la centralización analiza la configuración y recomienda mejoras en la cuenta.',
			'Ambos servicios son equivalentes y solo cambian de nombre según el plan de soporte que tenga contratado el cliente.',
			'Ambos servicios corrigen de forma automática los problemas que detectan y no requieren intervención del cliente.',
		],
		correctAnswer: 0,
		explanation:
			'La revisión proactiva (AWS Trusted Advisor) analiza la configuración de la cuenta y propone mejoras, mientras que la centralización (AWS Security Hub) agrega y prioriza hallazgos de varios servicios. Son funciones distintas y complementarias. Si cambia el requisito a evaluar vulnerabilidades, la respuesta sería Amazon Inspector.',
		porQueOpcion: [
			'Correcta: la revisión proactiva analiza la configuración y la centralización agrupa hallazgos.',
			'Incorrecta: invierte las funciones, pues la revisión proactiva no reúne hallazgos de otros servicios.',
			'Incorrecta: son servicios distintos y no dependen solo del plan de soporte.',
			'Incorrecta: ninguno corrige los problemas de forma automática.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/awssupport/latest/user/trusted-advisor.html',
			'https://docs.aws.amazon.com/securityhub/',
			'https://docs.aws.amazon.com/inspector/',
		],
	},
	{
		id: '2.4-q17',
		taskId: '2.4',
		objetivos: ['2.4#4'],
		tipo: 'comparacion',
		question:
			'Una empresa necesita una herramienta de seguridad especializada para cumplir un requisito sectorial y duda entre adquirir un producto de un proveedor externo ofrecido en el catálogo de AWS o cubrir la necesidad con un servicio de seguridad nativo de AWS. ¿Qué caracteriza a cada opción?',
		options: [
			'El catálogo de terceros solo publica productos gratuitos y sin soporte, mientras que el servicio nativo obliga a la empresa a desarrollar, operar y mantener la herramienta con su propio equipo en todas las regiones.',
			'El catálogo ofrece productos de proveedores externos como suscripciones integradas; el servicio nativo lo opera y soporta AWS dentro de su alcance.',
			'Ambas opciones son equivalentes: cualquier producto externo del catálogo pasa a convertirse en un servicio nativo operado directamente por AWS en la cuenta del cliente.',
			'El servicio nativo solo está disponible si se contrata el plan de soporte empresarial, y el catálogo de terceros exige migrar todas las cuentas a una sola región antes de comprar.',
		],
		correctAnswer: 1,
		explanation:
			'En el catálogo de terceros el cliente adquiere la solución de un proveedor externo por suscripción y la integra en su entorno, y ese proveedor responde de su producto; en el servicio nativo es AWS quien opera y soporta la capacidad dentro de su alcance. El primer distractor falla porque el catálogo no se limita a productos gratuitos ni obliga a desarrollar la herramienta. El tercero falla porque un producto de terceros no se convierte en un servicio de AWS. El cuarto falla porque el servicio nativo no depende del plan de soporte empresarial ni el catálogo obliga a migrar de región. Si cambia el requisito a descargar informes de cumplimiento, la respuesta sería AWS Artifact.',
		porQueOpcion: [
			'Incorrecta: el catálogo no se limita a productos gratuitos ni el servicio nativo obliga a desarrollar la herramienta.',
			'Correcta: el catálogo integra productos de terceros por suscripción y el servicio nativo lo opera y soporta AWS.',
			'Incorrecta: un producto de terceros no se convierte en un servicio nativo de AWS.',
			'Incorrecta: el servicio nativo no depende del plan de soporte ni el catálogo obliga a migrar de región.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/artifact/',
		],
	},
];
