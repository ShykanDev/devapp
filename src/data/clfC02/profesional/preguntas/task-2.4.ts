import type { PreguntaProfesionalClfC02 } from '@/data/clfC02/profesional/types';

export const profesionalTask24: PreguntaProfesionalClfC02[] = [
	{
		id: 'prof-2.4-q1',
		taskId: '2.4',
		objetivos: ['2.4#1'],
		tipo: 'trampa',
		question: '¿Cuál de las siguientes describe correctamente las capacidades de seguridad que ofrece AWS?',
		options: [
			'AWS ofrece servicios de seguridad gestionados, como filtrado web, mitigación de DDoS, detección de amenazas y centralización de hallazgos, que el cliente habilita y configura.',
			'AWS configura automáticamente toda la seguridad del cliente, sin que este deba habilitar, ajustar ni revisar ningún servicio de seguridad en su cuenta.',
			'AWS solo protege la infraestructura física de sus centros de datos y no ofrece servicios de seguridad gestionados para las capas superiores del cliente ni para sus aplicaciones.',
			'Los servicios de seguridad gestionados de AWS solo están disponibles para las cuentas con un plan de soporte empresarial contratado.',
		],
		correctAnswer: 0,
		explanation:
			'AWS proporciona un catálogo de servicios de seguridad gestionados (protección perimetral, detección de amenazas, gestión de claves y centralización de hallazgos) que el cliente habilita y configura. AWS no asume la configuración del cliente ni limita estos servicios a un plan de soporte concreto. Si cambia el requisito a un dominio concreto, la respuesta señalaría el servicio de ese dominio.',
		porQueOpcion: [
			'Correcta: enumera capacidades reales que el cliente configura.',
			'Incorrecta: el cliente conserva la responsabilidad de habilitar y configurar.',
			'Incorrecta: AWS sí ofrece servicios de seguridad gestionados además de proteger la infraestructura.',
			'Incorrecta: los servicios de seguridad están disponibles con independencia del plan de soporte.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/aws-risk-and-compliance/shared-responsibility-model.html',
		],
	},
	{
		id: 'prof-2.4-q2',
		taskId: '2.4',
		objetivos: ['2.4#1'],
		tipo: 'multiConcepto',
		question: 'Un equipo revisa las capacidades de seguridad de AWS. ¿Qué afirmación es correcta?',
		options: [
			'AWS ofrece capacidades para detectar amenazas, proteger el perímetro, gestionar claves y centralizar hallazgos, y el cliente las habilita y configura.',
			'AWS ofrece un único servicio de seguridad gestionado que cubre por sí solo todas las necesidades de protección de la cuenta y de sus recursos.',
			'Las capacidades de seguridad de AWS se limitan al cifrado en reposo y no cubren la detección de amenazas ni la protección del perímetro de red.',
			'El cliente debe construir por su cuenta todas las capacidades de seguridad, porque AWS no ofrece ninguna lista para usar ni servicio gestionado en su catálogo.',
		],
		correctAnswer: 0,
		explanation:
			'Las capacidades de seguridad de AWS cubren varios frentes complementarios: detección de amenazas, protección perimetral, gestión de claves y centralización de hallazgos, entre otros. No se reducen a un solo servicio ni obligan al cliente a construirlo todo. Si cambia el escenario a un riesgo concreto, la respuesta señalaría la capacidad que lo cubre.',
		porQueOpcion: [
			'Correcta: reconoce el conjunto de capacidades y el papel del cliente.',
			'Incorrecta: no existe un servicio único que cubra todas las necesidades.',
			'Incorrecta: el cifrado en reposo es solo una de las capacidades.',
			'Incorrecta: AWS sí ofrece servicios de seguridad listos para usar.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/aws-risk-and-compliance/shared-responsibility-model.html',
		],
	},
	{
		id: 'prof-2.4-q3',
		taskId: '2.4',
		objetivos: ['2.4#2'],
		tipo: 'servicio',
		question: 'Un equipo busca documentación y avisos oficiales de seguridad de AWS. ¿Dónde puede encontrarlos?',
		options: [
			'En el AWS Knowledge Center, el AWS Security Center y el AWS Security Blog.',
			'En AWS Trusted Advisor, que además publica los avisos de seguridad y las guías oficiales de AWS.',
			'En AWS Artifact, que aloja los boletines de seguridad de AWS.',
			'En Amazon GuardDuty, que envía por correo los avisos de seguridad.',
		],
		correctAnswer: 0,
		explanation:
			'La documentación y los avisos oficiales de seguridad se publican en el AWS Knowledge Center, el AWS Security Center y el AWS Security Blog. AWS Trusted Advisor recomienda mejores prácticas, AWS Artifact aloja informes de cumplimiento y Amazon GuardDuty detecta amenazas. Si cambia la necesidad a evidencia de cumplimiento, la respuesta sería AWS Artifact.',
		porQueOpcion: [
			'Correcta: identifica los recursos oficiales de información de seguridad.',
			'Incorrecta: AWS Trusted Advisor no publica los avisos de seguridad.',
			'Incorrecta: AWS Artifact contiene informes de cumplimiento, no boletines de seguridad.',
			'Incorrecta: Amazon GuardDuty detecta amenazas, no distribuye avisos editoriales.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/awssupport/latest/user/trusted-advisor.html',
			'https://docs.aws.amazon.com/artifact/',
			'https://docs.aws.amazon.com/guardduty/',
		],
	},
	{
		id: 'prof-2.4-q4',
		taskId: '2.4',
		objetivos: ['2.4#3'],
		tipo: 'escenario',
		question:
			'Una empresa con muchas cuentas quiere bloquear ataques web como la inyección SQL y el cross-site scripting, y desplegar las mismas reglas de forma centralizada. ¿Qué combinación es correcta?',
		options: [
			'AWS WAF para filtrar el tráfico web y AWS Firewall Manager para aplicar las reglas en varias cuentas.',
			'AWS Shield para filtrar la inyección SQL y AWS WAF para centralizar las reglas.',
			'Amazon GuardDuty para bloquear la inyección SQL y AWS Security Hub para aplicar las reglas en todas las cuentas de la organización.',
			'AWS Shield para definir las reglas web y AWS Config para centralizarlas.',
		],
		correctAnswer: 0,
		explanation:
			'AWS WAF inspecciona y filtra el tráfico web para bloquear patrones como la inyección SQL y el cross-site scripting, y AWS Firewall Manager despliega esas reglas de forma centralizada en varias cuentas. Shield, GuardDuty, Security Hub y Config cumplen otras funciones. Si cambia el ataque a uno de volumen, la respuesta sería AWS Shield.',
		porQueOpcion: [
			'Correcta: asigna el filtrado web a AWS WAF y la aplicación centralizada a AWS Firewall Manager.',
			'Incorrecta: AWS Shield mitiga DDoS y AWS WAF no centraliza reglas por sí solo.',
			'Incorrecta: GuardDuty detecta amenazas y Security Hub centraliza hallazgos, no reglas web.',
			'Incorrecta: AWS Shield no define reglas de inspección de tráfico web.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/waf/',
			'https://docs.aws.amazon.com/firewall-manager/',
			'https://docs.aws.amazon.com/shield/',
			'https://docs.aws.amazon.com/guardduty/',
			'https://docs.aws.amazon.com/securityhub/',
			'https://docs.aws.amazon.com/config/',
		],
	},
	{
		id: 'prof-2.4-q5',
		taskId: '2.4',
		objetivos: ['2.4#3'],
		tipo: 'comparacion',
		question:
			'¿Qué diferencia hay entre el servicio que mitiga ataques de volumen, el que filtra tráfico web y el que despliega reglas en varias cuentas?',
		options: [
			'AWS Shield mitiga ataques de denegación de servicio distribuido (DDoS), AWS WAF filtra tráfico web malicioso y AWS Firewall Manager despliega reglas de forma centralizada en varias cuentas.',
			'AWS WAF mitiga los ataques de denegación de servicio distribuido, AWS Shield filtra el tráfico web malicioso y AWS Firewall Manager centraliza las claves de cifrado de toda la organización.',
			'AWS Firewall Manager mitiga los ataques de volumen, AWS Shield despliega reglas en varias cuentas y AWS WAF centraliza los hallazgos de seguridad.',
			'Los tres servicios son equivalentes y solo cambian de nombre según la región de AWS en la que se despliegan.',
		],
		correctAnswer: 0,
		explanation:
			'AWS Shield absorbe y mitiga ataques de denegación de servicio distribuido (DDoS), AWS WAF filtra el tráfico web malicioso y AWS Firewall Manager administra reglas de forma centralizada en organizaciones con varias cuentas. Son servicios complementarios, no equivalentes. Si cambia la necesidad a centralizar hallazgos, la respuesta sería AWS Security Hub.',
		porQueOpcion: [
			'Correcta: distingue correctamente la función de cada servicio.',
			'Incorrecta: intercambia las funciones de WAF y Shield y añade claves al Firewall Manager.',
			'Incorrecta: reordena las funciones de los tres servicios.',
			'Incorrecta: no son equivalentes ni dependen de la región elegida.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/shield/',
			'https://docs.aws.amazon.com/waf/',
			'https://docs.aws.amazon.com/firewall-manager/',
			'https://docs.aws.amazon.com/securityhub/',
		],
	},
	{
		id: 'prof-2.4-q6',
		taskId: '2.4',
		objetivos: ['2.4#4'],
		tipo: 'servicio',
		question:
			'Una empresa quiere adquirir una solución de seguridad de un proveedor externo con la facturación integrada en su cuenta de AWS. ¿Qué opción es la adecuada?',
		options: ['AWS Marketplace.', 'AWS Artifact.', 'AWS Config.', 'Amazon Detective.'],
		correctAnswer: 0,
		explanation:
			'AWS Marketplace es el catálogo donde se adquieren productos de software, incluidas soluciones de seguridad de terceros, con facturación integrada en la cuenta de AWS. AWS Artifact publica informes de cumplimiento, AWS Config evalúa la configuración y Amazon Detective investiga hallazgos. Si cambia la necesidad a informes de cumplimiento, la respuesta sería AWS Artifact.',
		porQueOpcion: [
			'Correcta: AWS Marketplace es el punto de compra de software de terceros con facturación integrada.',
			'Incorrecta: AWS Artifact entrega informes de cumplimiento de AWS.',
			'Incorrecta: AWS Config registra y evalúa configuración, no vende software.',
			'Incorrecta: Amazon Detective analiza e investiga hallazgos de seguridad.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/marketplace/',
			'https://docs.aws.amazon.com/artifact/',
			'https://docs.aws.amazon.com/config/',
			'https://docs.aws.amazon.com/detective/',
		],
	},
	{
		id: 'prof-2.4-q7',
		taskId: '2.4',
		objetivos: ['2.4#5'],
		tipo: 'servicio',
		question:
			'Un equipo necesita guías y avisos de seguridad publicados por AWS para resolver una incidencia. ¿Qué recurso es el adecuado?',
		options: [
			'El AWS Security Center, junto con el AWS Security Blog y el AWS Knowledge Center.',
			'El panel de AWS Trusted Advisor, que aloja los avisos de seguridad oficiales y las guías de cumplimiento.',
			'La consola de Amazon GuardDuty, que publica las guías de seguridad de AWS.',
			'Los informes de AWS Artifact, que contienen los boletines de seguridad.',
		],
		correctAnswer: 0,
		explanation:
			'El AWS Security Center, el AWS Security Blog y el AWS Knowledge Center reúnen guías, avisos y buenas prácticas de seguridad de AWS. AWS Trusted Advisor emite recomendaciones sobre la cuenta, Amazon GuardDuty detecta amenazas y AWS Artifact publica informes de cumplimiento. Si cambia la necesidad a evidencia de cumplimiento, la respuesta sería AWS Artifact.',
		porQueOpcion: [
			'Correcta: agrupa los recursos donde AWS publica su información de seguridad.',
			'Incorrecta: AWS Trusted Advisor no aloja los avisos oficiales de seguridad.',
			'Incorrecta: Amazon GuardDuty no publica guías editoriales.',
			'Incorrecta: AWS Artifact contiene informes de cumplimiento, no boletines de seguridad.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/awssupport/latest/user/trusted-advisor.html',
			'https://docs.aws.amazon.com/guardduty/',
			'https://docs.aws.amazon.com/artifact/',
		],
	},
	{
		id: 'prof-2.4-q8',
		taskId: '2.4',
		objetivos: ['2.4#6'],
		tipo: 'servicio',
		question:
			'¿Qué servicio revisa de forma proactiva la cuenta y señala problemas y mejores prácticas, incluida la de seguridad?',
		options: ['AWS Trusted Advisor.', 'AWS Shield.', 'Amazon Macie.', 'AWS Certificate Manager (ACM).'],
		correctAnswer: 0,
		explanation:
			'AWS Trusted Advisor ejecuta comprobaciones proactivas y recomienda mejores prácticas en seguridad, costos, rendimiento, tolerancia a fallos y límites de servicio. AWS Shield mitiga DDoS, Amazon Macie descubre datos sensibles y AWS Certificate Manager (ACM) gestiona certificados. Si cambia el requisito a centralizar hallazgos, la respuesta sería AWS Security Hub.',
		porQueOpcion: [
			'Correcta: AWS Trusted Advisor realiza las comprobaciones proactivas de mejores prácticas.',
			'Incorrecta: AWS Shield mitiga ataques de denegación de servicio distribuido.',
			'Incorrecta: Amazon Macie descubre y clasifica datos sensibles.',
			'Incorrecta: AWS Certificate Manager (ACM) aprovisiona certificados TLS.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/awssupport/latest/user/trusted-advisor.html',
			'https://docs.aws.amazon.com/shield/',
			'https://docs.aws.amazon.com/macie/',
			'https://docs.aws.amazon.com/acm/',
			'https://docs.aws.amazon.com/securityhub/',
		],
	},
	{
		id: 'prof-2.4-q9',
		taskId: '2.4',
		objetivos: ['2.4#6'],
		tipo: 'escenario',
		question:
			'Un equipo quiere una revisión proactiva que detecte configuraciones de seguridad deficientes y, a la vez, centralizar los hallazgos de seguridad de toda la organización. ¿Qué razonamiento es correcto?',
		options: [
			'AWS Trusted Advisor realiza comprobaciones proactivas de mejores prácticas y AWS Security Hub centraliza los hallazgos; ninguno sustituye al otro.',
			'Amazon GuardDuty revisa la configuración de la cuenta y AWS Trusted Advisor detecta las amenazas de la red en todas las cuentas de la organización.',
			'AWS Trusted Advisor y AWS Security Hub son el mismo servicio con distinto nombre y cumplen exactamente la misma función.',
			'Basta con AWS Artifact, porque sus informes enumeran los problemas de configuración de la cuenta y proponen mejoras.',
		],
		correctAnswer: 0,
		explanation:
			'AWS Trusted Advisor revisa la cuenta y señala desviaciones de las mejores prácticas, mientras que AWS Security Hub agrega y normaliza hallazgos de seguridad de varios servicios y cuentas. Son funciones distintas y complementarias. Si cambia el requisito a evaluar vulnerabilidades, la respuesta sería Amazon Inspector.',
		porQueOpcion: [
			'Correcta: separa la revisión proactiva de la centralización de hallazgos.',
			'Incorrecta: GuardDuty detecta amenazas, no revisa configuración, y Trusted Advisor no detecta tráfico malicioso.',
			'Incorrecta: son servicios diferentes con propósitos distintos.',
			'Incorrecta: AWS Artifact publica informes de cumplimiento, no revisa la configuración.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/awssupport/latest/user/trusted-advisor.html',
			'https://docs.aws.amazon.com/securityhub/',
			'https://docs.aws.amazon.com/guardduty/',
			'https://docs.aws.amazon.com/artifact/',
			'https://docs.aws.amazon.com/inspector/',
		],
	},
];
