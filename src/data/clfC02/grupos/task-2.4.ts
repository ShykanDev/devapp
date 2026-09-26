import type { GrupoTematico } from '@/data/clfC02/types';

export const gruposTask24: GrupoTematico[] = [
	{
		id: '2.4-g1',
		titulo: 'Capacidades de seguridad que ofrece AWS',
		objetivos: ['2.4#1'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'AWS no entrega una sola herramienta de seguridad, sino un conjunto de **capacidades** repartidas por dominios, apoyadas en el **modelo de responsabilidad compartida**: AWS protege la infraestructura que sostiene los servicios y el cliente protege lo que configura encima.\n\n- **Identidad y acceso**: controlan quién puede hacer qué (por ejemplo, AWS Identity and Access Management (IAM) y AWS IAM Identity Center).\n- **Protección de la red y de las aplicaciones**: filtran tráfico y detienen ataques (por ejemplo, AWS WAF, AWS Shield y AWS Firewall Manager).\n- **Detección**: vigilan la actividad y buscan amenazas o vulnerabilidades (por ejemplo, Amazon GuardDuty, Amazon Inspector y AWS Security Hub).\n- **Protección de datos**: cifrado y gestión de secretos (por ejemplo, AWS Key Management Service (AWS KMS) y AWS Secrets Manager).\n- **Visibilidad y auditoría**: registran y consultan la actividad (por ejemplo, AWS CloudTrail, Amazon CloudWatch y AWS Config).\n- **Cumplimiento**: evidencias y documentación regulatoria (por ejemplo, AWS Artifact).\n\nLa idea de examen es que estas capacidades son **complementarias**: ninguna cubre todo, y se combinan según lo que se quiera proteger o detectar.',
			},
			{
				tipo: 'ejemplo',
				md: '```text\nNecesidad                           -> capacidad de AWS\nQuién entra y qué puede hacer        -> identidad y acceso\nFiltrar peticiones web maliciosas    -> protección de aplicaciones\nDetectar comportamiento sospechoso   -> detección\nCifrar datos y guardar secretos       -> protección de datos\nSaber quién hizo qué y cuándo         -> visibilidad y auditoría\nDemostrar cumplimiento normativo      -> cumplimiento\n```',
			},
			{
				tipo: 'clave',
				items: [
					'Las capacidades de seguridad de AWS se agrupan en identidad y acceso, protección, detección, protección de datos, visibilidad y cumplimiento.',
					'Ninguna capacidad cubre todo por sí sola: se combinan según el riesgo que se quiera reducir.',
					'AWS protege la infraestructura; el cliente configura y usa estas capacidades sobre su parte del modelo de responsabilidad compartida.',
				],
			},
			{
				tipo: 'errorComun',
				error: 'Creer que AWS ofrece un único servicio de seguridad que cubre a la vez identidad, red, datos y cumplimiento, y que basta con activarlo.',
				correccion:
					'Las capacidades de seguridad de AWS son complementarias y se reparten por dominios: identidad y acceso, protección, detección, protección de datos, visibilidad y cumplimiento. Ninguna cubre todo por sí sola y el cliente las habilita y configura según el riesgo que quiera reducir.',
			},
		],
		preguntasGuia: [
			'¿En qué dominios se agrupan las capacidades de seguridad de AWS?',
			'¿Qué capacidad usarías para saber quién accedió a un recurso y cuándo?',
			'¿Por qué ninguna capacidad de seguridad cubre por sí sola todas las necesidades?',
		],
	},
	{
		id: '2.4-g2',
		titulo: 'Servicios de seguridad: WAF, Shield, Firewall Manager, GuardDuty, Inspector y Security Hub',
		objetivos: ['2.4#3'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'AWS ofrece varios servicios de seguridad que se confunden con facilidad porque sus nombres se parecen, aunque cada uno mira algo distinto:\n\n- **AWS WAF**: firewall de aplicaciones web. Inspecciona las peticiones HTTP(S) y bloquea patrones maliciosos con reglas, por ejemplo inyección SQL o cross-site scripting.\n- **AWS Shield**: protección gestionada frente a ataques de denegación de servicio distribuido (DDoS), que buscan tumbar el servicio por volumen de tráfico.\n- **AWS Firewall Manager**: administración central de reglas y políticas de protección en varias cuentas de una organización.\n- **Amazon GuardDuty**: detección de amenazas. Analiza señales del entorno (flujos de red, DNS y eventos de auditoría) y avisa de actividad sospechosa.\n- **Amazon Inspector**: evaluación de vulnerabilidades y exposición de las cargas de trabajo; busca fallos conocidos y configuraciones inseguras.\n- **AWS Security Hub**: agrega y prioriza los hallazgos de otros servicios de seguridad en una vista única.\n- **Amazon Macie**: descubre y clasifica datos sensibles, por ejemplo en Amazon S3.\n- **Amazon Detective**: investiga la causa de un hallazgo analizando relaciones entre recursos y actividad.\n\nLa forma de no confundirlos es preguntar **qué protege cada uno**: WAF protege aplicaciones web, Shield absorbe ataques de volumen, Firewall Manager centraliza reglas, GuardDuty detecta amenazas, Inspector encuentra vulnerabilidades y Security Hub reúne los hallazgos.',
			},
			{
				tipo: 'comparacion',
				parId: 'waf-vs-shield',
			},
			{
				tipo: 'comparacion',
				parId: 'guardduty-vs-inspector-vs-security-hub',
			},
			{
				tipo: 'escenario',
				situacion:
					'Una empresa publica un portal web con formularios y observa intentos de inyección de código en las peticiones, además de un pico de tráfico anómalo destinado a saturar el sitio. El equipo quiere filtrar el contenido malicioso de cada petición sin reescribir la aplicación.',
				analisis:
					'El filtrado de peticiones HTTP(S) maliciosas corresponde a **AWS WAF**, que se asocia a la distribución o al balanceador y bloquea las peticiones que coinciden con reglas. La absorción del tráfico de saturación corresponde a **AWS Shield**. Son capas distintas: WAF inspecciona el contenido de la petición; Shield protege frente al volumen del ataque.',
				servicio: 'AWS WAF',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Usa AWS WAF cuando el requisito sea inspeccionar y bloquear el contenido de peticiones HTTP(S), no el volumen de tráfico.',
					'Usa AWS Shield cuando el requisito sea mitigar un ataque de denegación de servicio distribuido que busca saturar el servicio.',
					'Usa Amazon Inspector cuando el requisito sea conocer vulnerabilidades y exposición de las cargas de trabajo.',
					'Usa Amazon GuardDuty cuando el requisito sea detectar actividad maliciosa o sospechosa en la cuenta.',
					'Usa AWS Security Hub cuando el requisito sea reunir y priorizar hallazgos de varias fuentes en un solo lugar.',
					'Usa Amazon Macie para descubrir datos sensibles y Amazon Detective para investigar la causa de un hallazgo.',
				],
				noUsar: [
					'No elijas Amazon GuardDuty para saber si una instancia tiene software desactualizado: eso es Inspector.',
					'No elijas Amazon Inspector ni AWS Security Hub para absorber un ataque de volumen: eso es Shield.',
					'No elijas AWS WAF para bloquear tráfico de red no HTTP (por ejemplo otro puerto): WAF trabaja sobre peticiones web.',
					'No elijas AWS Firewall Manager como protección por sí sola: centraliza políticas, no sustituye al servicio que las aplica.',
					'No elijas Amazon Macie para detectar amenazas activas ni Amazon Detective para configurar reglas: cada uno responde a una pregunta distinta.',
				],
			},
			{
				tipo: 'errorComun',
				error: 'Creer que Amazon GuardDuty, Amazon Inspector y AWS Security Hub son la misma clase de herramienta y que cualquiera de ellos basta para cubrir todas las necesidades de seguridad.',
				correccion:
					'Cubren etapas distintas: GuardDuty detecta amenazas sobre la actividad, Inspector evalúa vulnerabilidades y exposición, y Security Hub agrega y prioriza hallazgos. Se usan juntos, no como sustitutos.',
			},
			{
				tipo: 'clave',
				items: [
					'AWS WAF filtra peticiones HTTP(S) por su contenido; AWS Shield mitiga ataques DDoS por su volumen.',
					'AWS Firewall Manager administra reglas y políticas de protección en varias cuentas de una organización.',
					'Amazon GuardDuty detecta amenazas; Amazon Inspector evalúa vulnerabilidades; AWS Security Hub agrega y prioriza hallazgos.',
					'Amazon Macie clasifica datos sensibles y Amazon Detective investiga la causa de un hallazgo.',
				],
			},
		],
		preguntasGuia: [
			'¿Qué protege cada uno de los servicios de seguridad WAF, Shield, Firewall Manager, GuardDuty, Inspector y Security Hub?',
			'¿Qué diferencia hay entre detener un ataque de volumen y filtrar el contenido de una petición?',
			'¿En qué se parecen GuardDuty, Inspector y Security Hub y en qué se diferencian?',
		],
	},
	{
		id: '2.4-g3',
		titulo: 'Documentación y recursos de seguridad de AWS',
		objetivos: ['2.4#2', '2.4#5'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'Cuando se necesita información oficial de seguridad, AWS publica varios recursos con propósitos distintos:\n\n- **AWS Security Center**: punto de entrada que reúne información de seguridad, cumplimiento y protección de AWS.\n- **AWS Security Blog**: artículos y anuncios sobre prácticas, servicios y novedades de seguridad.\n- **AWS Knowledge Center**: respuestas breves y prácticas a preguntas frecuentes y problemas concretos.\n- **AWS Artifact**: portal de auto-servicio donde se descargan informes de cumplimiento y acuerdos de AWS.\n- **Documentación técnica**: referencia de cada servicio y guías de prácticas recomendadas.\n- **Comunidad**: foros oficiales donde otros clientes y especialistas responden dudas.\n\nLa elección depende de la pregunta: para una duda puntual de configuración, respuestas y foros; para entender una novedad, el blog; para evidencia de cumplimiento, los informes; para el detalle formal de una API, la documentación del servicio.',
			},
			{
				tipo: 'escenario',
				situacion:
					'Un auditor externo pide a una empresa las certificaciones y los informes de cumplimiento vigentes de AWS para su revisión anual, y por separado un ingeniero necesita entender por qué una comprobación de seguridad de la consola no aplica a su caso.',
				analisis:
					'La evidencia formal de cumplimiento se descarga desde **AWS Artifact**, el portal de auto-servicio de informes y acuerdos. La duda puntual de configuración se resuelve con respuestas breves y comunidad, típicamente en **AWS Knowledge Center** y en los foros; para entender una novedad o el criterio general se consulta **AWS Security Blog** y **AWS Security Center**.',
			},
			{
				tipo: 'errorComun',
				error: 'Buscar información de seguridad en blogs y foros de terceros antes que en los recursos oficiales, o confundir el material de respuestas puntuales de AWS Knowledge Center con los informes de cumplimiento de AWS Artifact.',
				correccion:
					'Empieza por los recursos oficiales: AWS Security Center y la documentación del servicio para información general, AWS Knowledge Center para dudas puntuales, AWS Security Blog para novedades y AWS Artifact para informes de cumplimiento.',
			},
			{
				tipo: 'clave',
				items: [
					'AWS Security Center reúne la información de seguridad y cumplimiento de AWS.',
					'AWS Security Blog publica artículos y novedades; AWS Knowledge Center responde dudas puntuales.',
					'AWS Artifact entrega informes de cumplimiento y acuerdos, que son la evidencia documental.',
				],
			},
		],
		preguntasGuia: [
			'¿Qué recurso de AWS usarías para descargar un informe de cumplimiento?',
			'¿En qué se diferencian AWS Security Blog, AWS Knowledge Center y AWS Artifact?',
			'¿Por qué conviene consultar primero los recursos oficiales de seguridad?',
		],
	},
	{
		id: '2.4-g4',
		titulo: 'Detección de problemas y productos de seguridad de terceros',
		objetivos: ['2.4#4', '2.4#6'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'Existen dos vías complementarias para mejorar la postura de seguridad sin construir todo desde cero:\n\n- **AWS Trusted Advisor**: revisa el entorno y entrega comprobaciones y recomendaciones en categorías como seguridad, rendimiento, tolerancia a fallos, optimización de costes y cuotas de servicio. Sus comprobaciones de seguridad señalan configuraciones de riesgo, por ejemplo accesos demasiado abiertos.\n- **AWS Marketplace**: catálogo donde proveedores independientes publican productos y servicios, incluidos **productos de seguridad de terceros**. Permite suscribirse a software de firewall, antivirus, gestión de vulnerabilidades o SIEM sin desarrollarlo a medida.\n\nLa diferencia práctica: Trusted Advisor mira la configuración de tu propia cuenta y recomienda mejoras; AWS Marketplace amplía tus opciones con software de otros fabricantes que se integra con AWS.',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Usa AWS Trusted Advisor para una revisión automatizada del entorno y para localizar configuraciones de seguridad de riesgo antes de una auditoría.',
					'Usa AWS Marketplace cuando necesites una capacidad de seguridad muy concreta que prefieras adquirir a un proveedor independiente en lugar de construirla.',
					'Ten en cuenta el nivel de AWS Support contratado: algunas comprobaciones y funcionalidades se comportan distinto según el plan.',
				],
				noUsar: [
					'No esperes que AWS Trusted Advisor corrija los hallazgos por ti: señala y recomienda, la corrección la aplica el cliente.',
					'No asumas que todo producto de AWS Marketplace lo opera AWS: son productos de terceros con su propio proveedor.',
				],
			},
			{
				tipo: 'errorComun',
				error: 'Pensar que AWS Marketplace es una tienda gestionada por AWS donde todo producto lo soporta AWS, o que AWS Trusted Advisor ejecuta las correcciones por el cliente.',
				correccion:
					'AWS Marketplace es un catálogo de productos de terceros (proveedores independientes) que el cliente suscribe y opera; AWS Trusted Advisor solo entrega comprobaciones y recomendaciones, y la corrección corre por cuenta del cliente.',
			},
			{
				tipo: 'clave',
				items: [
					'AWS Trusted Advisor entrega comprobaciones y recomendaciones, no correcciones automáticas.',
					'Las comprobaciones de Trusted Advisor cubren seguridad, rendimiento, tolerancia a fallos, optimización de costes y cuotas de servicio.',
					'AWS Marketplace ofrece productos de seguridad de terceros que se adquieren como suscripciones.',
				],
			},
		],
		preguntasGuia: [
			'¿Qué tipo de comprobaciones ofrece AWS Trusted Advisor y quién aplica la corrección?',
			'¿Dónde se adquieren productos de seguridad de terceros y quién los soporta?',
			'¿Qué diferencia hay entre revisar tu propia configuración y ampliar tus opciones con software de terceros?',
		],
	},
];
