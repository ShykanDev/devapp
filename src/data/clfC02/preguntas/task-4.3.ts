import type { PreguntaClfC02 } from '@/data/clfC02/types';

export const preguntasTask43: PreguntaClfC02[] = [
	{
		id: '4.3-q1',
		taskId: '4.3',
		objetivos: ['4.3#1'],
		tipo: 'conocimiento',
		question:
			'¿Cuál es el recurso oficial de AWS para confirmar el comportamiento exacto de un servicio, sus límites y sus permisos?',
		options: [
			'Un blog de anuncios de AWS.',
			'La documentación del servicio publicada en los sitios oficiales de AWS.',
			'Un hilo de AWS re:Post sin respuesta verificada.',
			'Un whitepaper de arquitectura sin fecha de revisión.',
		],
		correctAnswer: 1,
		explanation:
			'La documentación del servicio es la fuente autoritativa para el comportamiento exacto, los límites y los permisos. Los whitepapers explican decisiones de arquitectura y buenas prácticas, y AWS re:Post es una comunidad de preguntas y respuestas.',
	},
	{
		id: '4.3-q2',
		taskId: '4.3',
		objetivos: ['4.3#5'],
		tipo: 'conocimiento',
		question: '¿Dónde publica AWS los whitepapers y las guías de buenas prácticas?',
		options: [
			'Únicamente en el AWS Support Center.',
			'En los sitios oficiales de AWS, dentro de su sección de whitepapers y guías.',
			'Solo en la documentación de la API de cada servicio.',
			'Exclusivamente en AWS Marketplace.',
		],
		correctAnswer: 1,
		explanation:
			'Los whitepapers y las guías se publican en los sitios oficiales de AWS. El AWS Support Center gestiona casos de soporte, la documentación de la API describe interfaces y AWS Marketplace es un catálogo de software de terceros.',
	},
	{
		id: '4.3-q3',
		taskId: '4.3',
		objetivos: ['4.3#6'],
		tipo: 'conocimiento',
		question:
			'Un ingeniero busca patrones de migración y estrategias de implementación publicadas por AWS. ¿Qué recurso corresponde?',
		options: [
			'AWS Prescriptive Guidance.',
			'AWS Marketplace.',
			'AWS Trusted Advisor.',
			'El AWS Support Center.',
		],
		correctAnswer: 0,
		explanation:
			'AWS Prescriptive Guidance reúne estrategias, patrones y guías de implementación. AWS Marketplace es un catálogo de terceros, AWS Trusted Advisor recomienda sobre el entorno y el AWS Support Center gestiona casos de soporte.',
	},
	{
		id: '4.3-q4',
		taskId: '4.3',
		objetivos: ['4.3#2', '4.3#7'],
		tipo: 'comparacion',
		question:
			'¿Qué diferencia clave separa los planes de soporte de entrada de los planes orientados a producción?',
		options: [
			'Los planes de entrada cuestan más que los de producción.',
			'Los planes de entrada se limitan a documentación, comunidad y, como máximo, asistencia por correo en horario laboral; los de producción añaden atención 24/7, comprobaciones completas de AWS Trusted Advisor y, en los niveles Enterprise, un TAM.',
			'Los planes de producción no incluyen acceso a AWS Trusted Advisor.',
			'Solo los planes de entrada permiten abrir consultas de facturación.',
		],
		correctAnswer: 1,
		explanation:
			'La frontera está en las cargas de producción: los planes de entrada (Basic y AWS Developer Support) se apoyan en documentación, comunidad y correo en horario laboral, mientras que AWS Business Support y los niveles Enterprise añaden atención 24/7, comprobaciones completas y, en Enterprise, TAM y guía proactiva.',
	},
	{
		id: '4.3-q5',
		taskId: '4.3',
		objetivos: ['4.3#7'],
		tipo: 'escenario',
		question:
			'Una empresa con una aplicación crítica necesita atención telefónica 24/7, respuesta en menos de una hora ante una caída de producción y todas las comprobaciones de AWS Trusted Advisor, sin exigir un TAM asignado. ¿Qué plan se ajusta mejor?',
		options: [
			'Basic Support.',
			'AWS Developer Support.',
			'AWS Business Support.',
			'AWS Enterprise Support.',
		],
		correctAnswer: 2,
		explanation:
			'AWS Business Support ofrece atención 24/7 por teléfono, chat y correo, tiempos de respuesta cortos y todas las comprobaciones de AWS Trusted Advisor. Basic no incluye casos técnicos, Developer se limita a correo en horario laboral y Enterprise añade un TAM designado, que aquí no se exige.',
	},
	{
		id: '4.3-q6',
		taskId: '4.3',
		objetivos: ['4.3#7'],
		tipo: 'tradeoff',
		question:
			'Una startup con uso moderado quiere guía proactiva y acceso a un grupo de Technical Account Managers, pero no necesita un TAM designado ni los compromisos más estrictos. ¿Qué opción equilibra mejor lo que pide y lo que no necesita?',
		options: [
			'AWS Enterprise On-Ramp Support.',
			'AWS Enterprise Support.',
			'Basic Support.',
			'AWS Developer Support.',
		],
		correctAnswer: 0,
		explanation:
			'AWS Enterprise On-Ramp Support ofrece guía proactiva y acceso a un grupo de TAM para cargas moderadas, sin el TAM designado ni los tiempos de respuesta más estrictos de AWS Enterprise Support. Basic no abre casos técnicos y Developer no aporta guía proactiva.',
	},
	{
		id: '4.3-q7',
		taskId: '4.3',
		objetivos: ['4.3#4'],
		tipo: 'conocimiento',
		question: '¿Para qué sirve el AWS Support Center?',
		options: [
			'Para diseñar arquitecturas de referencia de AWS.',
			'Para crear, seguir y gestionar los casos de soporte de la cuenta y acceder a AWS Trusted Advisor y al AWS Health Dashboard.',
			'Para comprar software de terceros.',
			'Para denunciar el abuso de recursos de AWS.',
		],
		correctAnswer: 1,
		explanation:
			'El AWS Support Center es el panel de gestión de casos y el punto de entrada a AWS Trusted Advisor y al AWS Health Dashboard. El diseño de arquitecturas corresponde a los AWS solutions architects, la compra de software a AWS Marketplace y las denuncias de abuso al equipo de AWS Trust and Safety.',
	},
	{
		id: '4.3-q8',
		taskId: '4.3',
		objetivos: ['4.3#13'],
		tipo: 'servicio',
		question:
			'Una empresa necesita acompañamiento experto para un proyecto de migración y para rediseñar su arquitectura. ¿Qué opción de asistencia técnica de AWS es la más adecuada?',
		options: [
			'Abrir una consulta de facturación en el AWS Support Center.',
			'AWS Professional Services y los AWS solutions architects.',
			'Denunciar el caso al equipo de AWS Trust and Safety.',
			'Publicar la duda en AWS re:Post y esperar respuesta.',
		],
		correctAnswer: 1,
		explanation:
			'AWS Professional Services y los AWS solutions architects acompañan proyectos de migración y diseño de arquitectura. Una consulta de facturación no cubre un proyecto, AWS re:Post no garantiza seguimiento y AWS Trust and Safety se ocupa de denuncias de abuso.',
	},
	{
		id: '4.3-q9',
		taskId: '4.3',
		objetivos: ['4.3#8'],
		tipo: 'servicio',
		question:
			'Un equipo quiere revisar su cuenta en busca de recursos infrautilizados y oportunidades de ahorro. ¿Qué recurso de AWS ofrece recomendaciones de optimización de costos?',
		options: [
			'AWS Trusted Advisor.',
			'AWS Marketplace.',
			'El AWS Support Center.',
			'La AWS Health API.',
		],
		correctAnswer: 0,
		explanation:
			'AWS Trusted Advisor analiza el entorno y recomienda en cinco categorías, entre ellas la optimización de costos. AWS Marketplace es el catálogo de terceros, el AWS Support Center gestiona casos y la AWS Health API da acceso a información de salud de los servicios.',
	},
	{
		id: '4.3-q10',
		taskId: '4.3',
		objetivos: ['4.3#8'],
		tipo: 'conocimiento',
		question: '¿Qué aporta el AWS Health Dashboard a un cliente de AWS?',
		options: [
			'Recomendaciones de ahorro sobre recursos infrautilizados.',
			'Una vista personalizada del estado de los servicios de AWS y de los eventos que afectan a sus recursos.',
			'La compra de software de terceros con facturación consolidada.',
			'La formación y certificación de partners.',
		],
		correctAnswer: 1,
		explanation:
			'El AWS Health Dashboard muestra el estado de los servicios de AWS y los eventos que afectan a los recursos de la cuenta. Las recomendaciones de ahorro son de AWS Trusted Advisor, la compra de software corresponde a AWS Marketplace y la formación de partners al AWS Partner Network.',
	},
	{
		id: '4.3-q11',
		taskId: '4.3',
		objetivos: ['4.3#9'],
		tipo: 'conocimiento',
		question: '¿Cuál es la función del equipo de AWS Trust and Safety?',
		options: [
			'Atender consultas técnicas 24/7 de los planes de soporte.',
			'Gestionar los casos de facturación de la cuenta.',
			'Recibir denuncias sobre el uso abusivo de recursos de AWS, como spam o phishing.',
			'Certificar a los partners de AWS.',
		],
		correctAnswer: 2,
		explanation:
			'AWS Trust and Safety es el canal para denunciar el uso abusivo de recursos de AWS. La atención técnica depende del plan de soporte, la facturación se gestiona en el AWS Support Center y la certificación de partners pertenece al AWS Partner Network.',
	},
	{
		id: '4.3-q12',
		taskId: '4.3',
		objetivos: ['4.3#3', '4.3#10'],
		tipo: 'conocimiento',
		question: '¿Qué tipos de organización forman parte del AWS Partner Network?',
		options: [
			'Consulting partners o system integrators y technology partners o independent software vendors.',
			'Únicamente los clientes con plan AWS Enterprise Support.',
			'Solo los fabricantes de hardware que operan centros de datos de AWS.',
			'Exclusivamente los equipos internos de AWS.',
		],
		correctAnswer: 0,
		explanation:
			'El AWS Partner Network reúne consulting partners (system integrators) y technology partners (independent software vendors). No es un programa limitado a un plan de soporte ni a fabricantes de hardware, ni lo forman equipos internos de AWS.',
	},
	{
		id: '4.3-q13',
		taskId: '4.3',
		objetivos: ['4.3#11'],
		tipo: 'conocimiento',
		question: '¿Cuál de los siguientes es un beneficio de participar en el AWS Partner Network?',
		options: [
			'Formación y certificación de partners, acceso a eventos de partners y descuentos por volumen.',
			'Asistencia telefónica 24/7 incluida en toda cuenta.',
			'Uso gratuito e ilimitado de todos los servicios de AWS.',
			'Exención del modelo de responsabilidad compartida.',
		],
		correctAnswer: 0,
		explanation:
			'Los beneficios de ser partner incluyen formación y certificación, eventos de partners y descuentos por volumen. La asistencia 24/7 depende del plan de soporte contratado, ningún programa regala uso ilimitado y el modelo de responsabilidad compartida no se exime.',
	},
	{
		id: '4.3-q14',
		taskId: '4.3',
		objetivos: ['4.3#12'],
		tipo: 'conocimiento',
		question: '¿Qué capacidades clave ofrece AWS Marketplace a los clientes?',
		options: [
			'Solo anuncios de nuevos servicios de AWS.',
			'Gestión de costos con facturación consolidada, además de gobernanza y derechos de uso sobre las soluciones adquiridas.',
			'Únicamente formación y certificación de partners.',
			'La supervisión del estado de los servicios de AWS.',
		],
		correctAnswer: 1,
		explanation:
			'AWS Marketplace facilita la gestión de costos al consolidar la facturación y ofrece gobernanza y derechos de uso para controlar qué soluciones se adquieren y quién las despliega. La formación de partners es del AWS Partner Network y el estado de los servicios corresponde al AWS Health Dashboard.',
	},
];
