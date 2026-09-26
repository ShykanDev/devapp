import type { PreguntaProfesionalClfC02 } from '@/data/clfC02/profesional/types';

export const profesionalTask43: PreguntaProfesionalClfC02[] = [
	{
		id: 'prof-4.3-q1',
		taskId: '4.3',
		objetivos: ['4.3#2', '4.3#6', '4.3#7'],
		tipo: 'comparacion',
		question:
			'Una empresa compara planes de soporte para cargas de producción. ¿Qué afirmación distingue correctamente Basic, Developer, Business y Enterprise On-Ramp?',
		options: [
			'Basic es gratuito y sin casos técnicos; Developer añade correo laboral; Business añade 24/7 y comprobaciones completas; Enterprise On-Ramp añade guía proactiva y un grupo de TAM.',
			'Basic incluye atención 24/7; Developer ofrece un TAM designado; Business se limita a la documentación de AWS; Enterprise On-Ramp no incluye Trusted Advisor ni consultas de facturación.',
			'Los cuatro planes incluyen un TAM designado y tiempos de respuesta idénticos para cualquier severidad.',
			'Business es el plan gratuito; Developer es el más caro; Enterprise On-Ramp no admite consultas de facturación.',
		],
		correctAnswer: 0,
		explanation:
			'Los planes escalan en alcance y tiempos de respuesta: Basic sin casos técnicos, Developer con correo en horario laboral, Business con atención 24/7 y Trusted Advisor completo, y Enterprise On-Ramp con guía proactiva y acceso a un grupo de TAM. Si cambia el requisito y la carga es de desarrollo, bastaría con un plan de entrada.',
		porQueOpcion: [
			'Correcta: Basic no abre casos técnicos, Developer cubre correo en horario laboral, Business suma 24/7 y Trusted Advisor completo, y Enterprise On-Ramp agrega guía proactiva y grupo de TAM.',
			'Basic no da 24/7, Developer no incluye TAM designado, Business no se limita a documentación y Enterprise On-Ramp sí incluye Trusted Advisor.',
			'El TAM designado es propio de Enterprise Support y los tiempos de respuesta mejoran con el plan, no son idénticos.',
			'Basic, no Business, es el plan sin coste; Developer no es el más caro; Enterprise On-Ramp sí admite consultas de facturación.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/awssupport/latest/user/trusted-advisor.html',
		],
	},
	{
		id: 'prof-4.3-q2',
		taskId: '4.3',
		objetivos: ['4.3#1', '4.3#5'],
		tipo: 'multiConcepto',
		question:
			'Un ingeniero debe decidir dónde consultar una duda de comportamiento de un servicio y una buena práctica de arquitectura. ¿Qué recurso corresponde a cada necesidad?',
		options: [
			'La documentación oficial del servicio para el comportamiento exacto y los whitepapers para las buenas prácticas de arquitectura, ambos en los sitios oficiales de AWS.',
			'Un whitepaper para el comportamiento exacto y la documentación del servicio para las buenas prácticas de arquitectura, ambas fuentes intercambiadas entre sí en los sitios oficiales.',
			'Únicamente AWS re:Post para ambas, porque la comunidad responde a todo con la experiencia de otros clientes.',
			'AWS Marketplace para el comportamiento y el AWS Support Center para las buenas prácticas de arquitectura.',
		],
		correctAnswer: 0,
		explanation:
			'La documentación del servicio, publicada en los sitios oficiales de AWS, es la fuente autoritativa del comportamiento, los límites y los permisos. Los whitepapers y las guías de buenas prácticas también se publican en los sitios oficiales de AWS. Si cambia el requisito y se busca un patrón de migración, la respuesta correcta sería AWS Prescriptive Guidance.',
		porQueOpcion: [
			'Correcta: la documentación del servicio es la fuente autoritativa del comportamiento y los whitepapers recogen buenas prácticas de arquitectura publicadas por AWS.',
			'Invierte las fuentes: los whitepapers explican enfoques de arquitectura, no detalles exactos del servicio.',
			're:Post es una comunidad de preguntas y respuestas, no la fuente autoritativa de referencia.',
			'Marketplace es el catálogo de terceros y el Support Center gestiona casos, no publica buenas prácticas de arquitectura.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/marketplace/',
			'https://docs.aws.amazon.com/awssupport/latest/user/getting-started.html',
		],
	},
	{
		id: 'prof-4.3-q3',
		taskId: '4.3',
		objetivos: ['4.3#3', '4.3#10', '4.3#11'],
		tipo: 'servicio',
		question:
			'Una empresa evalúa sumarse al programa que agrupa a proveedores de software independientes y a integradores de sistemas. ¿Qué afirmación describe correctamente a sus integrantes y sus beneficios?',
		options: [
			'Reúne consulting partners o system integrators y technology partners o independent software vendors, y ofrece formación, certificación, eventos y descuentos por volumen.',
			'Solo admite independent software vendors y su único beneficio es el uso gratuito e ilimitado de los servicios de AWS en cualquier región del mundo, sin necesidad de pagar ningún plan de soporte.',
			'Está formado por los equipos internos de AWS y no admite organizaciones externas de ningún tipo.',
			'Agrupa únicamente a system integrators y elimina la necesidad de contratar un plan de soporte técnico.',
		],
		correctAnswer: 0,
		explanation:
			'El AWS Partner Network reúne consulting partners (system integrators) y technology partners (independent software vendors). Sus beneficios incluyen formación y certificación, acceso a eventos de partners y descuentos por volumen. Si cambia el objetivo y lo que se busca es comprar software de terceros, la respuesta correcta sería AWS Marketplace.',
		porQueOpcion: [
			'Correcta: el APN integra partners de consultoría y de tecnología, con formación, eventos y descuentos por volumen entre sus beneficios.',
			'El APN también incluye consulting partners y no regala uso de servicios de AWS.',
			'El APN es un programa para organizaciones externas, no para equipos internos de AWS.',
			'No se limita a system integrators ni sustituye la elección de un plan de soporte.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/marketplace/',
		],
	},
	{
		id: 'prof-4.3-q4',
		taskId: '4.3',
		objetivos: ['4.3#8', '4.3#9'],
		tipo: 'escenario',
		question:
			'Una cuenta recibe la noticia de que un servicio de AWS está degradado en su región y, a la vez, detecta que una instancia suya se usa para enviar spam. ¿Qué recurso atiende cada situación?',
		options: [
			'El AWS Health Dashboard informa del estado de los servicios y de los eventos que afectan a la cuenta, y el equipo de AWS Trust and Safety recibe la denuncia por uso abusivo de recursos.',
			'La herramienta de recomendaciones informa del estado de los servicios de AWS y el centro de soporte se encarga de gestionar la denuncia por uso abusivo de los recursos de la cuenta de forma oficial.',
			'El AWS Health Dashboard recibe la denuncia de abuso y AWS Trusted Advisor informa del estado de los servicios.',
			'AWS Marketplace informa del estado de los servicios y AWS Organizations gestiona la denuncia por abuso.',
		],
		correctAnswer: 0,
		explanation:
			'El AWS Health Dashboard ofrece una vista del estado de los servicios y de los eventos que afectan a los recursos de la cuenta, mientras que el equipo de AWS Trust and Safety es el canal para denunciar el uso abusivo de recursos de AWS. Si cambia el escenario y el problema fuera un incidente técnico propio, la respuesta correcta sería abrir un caso en el centro de soporte.',
		porQueOpcion: [
			'Correcta: el Health Dashboard muestra el estado de los servicios y los eventos que afectan a los recursos, y Trust and Safety canaliza las denuncias de abuso.',
			'Trusted Advisor recomienda sobre el entorno, incluida la optimización de costos, pero no publica el estado de los servicios, y el Support Center no gestiona denuncias de abuso.',
			'Invierte los roles: el Health Dashboard no recibe denuncias y Trusted Advisor no es el tablero de estado de servicios.',
			'Marketplace es el catálogo de terceros y Organizations administra cuentas; ninguno atiende estas dos situaciones.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/health/',
			'https://docs.aws.amazon.com/awssupport/latest/user/trusted-advisor.html',
			'https://docs.aws.amazon.com/marketplace/',
			'https://docs.aws.amazon.com/organizations/',
		],
	},
	{
		id: 'prof-4.3-q5',
		taskId: '4.3',
		objetivos: ['4.3#4', '4.3#12', '4.3#13'],
		tipo: 'multiConcepto',
		question:
			'¿Qué afirmación asigna correctamente el canal para abrir casos de soporte, el catálogo de software de terceros y las opciones de asistencia técnica de AWS?',
		options: [
			'El centro de soporte gestiona los casos; el catálogo de compra ofrece gestión de costos y gobernanza; y los servicios profesionales y los arquitectos brindan asistencia técnica.',
			'El centro de soporte vende software de terceros a los clientes; el catálogo de compra gestiona los casos técnicos de la cuenta; los servicios profesionales certifican a los partners de la red de AWS.',
			'AWS Marketplace gestiona los casos de soporte; el AWS Support Center ofrece asistencia de arquitectura; AWS Professional Services factura los servicios de terceros.',
			'Los tres son sinónimos: cualquiera de ellos abre casos, vende software y diseña arquitecturas para los clientes.',
		],
		correctAnswer: 0,
		explanation:
			'El AWS Support Center es el panel de gestión de casos y el punto de entrada a Trusted Advisor y al Health Dashboard; AWS Marketplace aporta gestión de costos con facturación consolidada, gobernanza y derechos de uso; y AWS Professional Services y los AWS solutions architects ofrecen asistencia técnica especializada. Si cambia el requisito y lo que se busca es certificación de partners, la respuesta correcta sería el AWS Partner Network.',
		porQueOpcion: [
			'Correcta: el Support Center centraliza los casos, Marketplace ofrece gestión de costos, gobernanza y derechos de uso, y Professional Services junto con los solutions architects aportan asistencia técnica.',
			'Invierte las funciones: el Support Center no vende software, Marketplace no gestiona casos y la certificación de partners corresponde al AWS Partner Network.',
			'Ninguna asignación es correcta: Marketplace no abre casos, el Support Center no diseña arquitecturas y Professional Services no factura software de terceros.',
			'Cumplen funciones distintas y no son intercambiables.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/marketplace/',
			'https://docs.aws.amazon.com/awssupport/latest/user/getting-started.html',
			'https://docs.aws.amazon.com/awssupport/latest/user/trusted-advisor.html',
			'https://docs.aws.amazon.com/health/',
		],
	},
];
