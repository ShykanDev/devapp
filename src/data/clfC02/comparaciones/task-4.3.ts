import type { ParConfusionClfC02 } from '@/data/clfC02/types';

export const paresTask43: ParConfusionClfC02[] = [
	{
		id: 'planes-de-soporte-aws',
		etiqueta: 'Planes de soporte de entrada vs planes para producción',
		a: {
			titulo: 'Basic Support y AWS Developer Support',
			resumen:
				'Niveles de entrada. Basic viene incluido en toda cuenta y no abre casos técnicos; AWS Developer Support añade asistencia técnica por correo en horario laboral y un contacto designado. Están pensados para aprendizaje, desarrollo y pruebas.',
		},
		b: {
			titulo: 'AWS Business Support, AWS Enterprise On-Ramp Support y AWS Enterprise Support',
			resumen:
				'Niveles para producción. AWS Business Support da atención 24/7 por teléfono, chat y correo con todas las comprobaciones de AWS Trusted Advisor; AWS Enterprise On-Ramp Support añade guía proactiva y acceso a un grupo de TAM; AWS Enterprise Support ofrece TAM designado y los tiempos de respuesta más cortos.',
		},
		diferenciaClave:
			'La frontera está en si la carga es de producción y qué compromiso se necesita: los planes de entrada se limitan al horario laboral y a canales limitados, mientras que AWS Business Support y los niveles Enterprise ofrecen atención 24/7, comprobaciones completas y, en Enterprise, un TAM y guía proactiva.',
		cuandoA: [
			'Cuando el uso es de desarrollo o pruebas y basta con documentación, comunidad y asistencia técnica por correo en horario laboral.',
			'Cuando se quiere empezar sin coste adicional de soporte y solo se necesitan consultas de facturación y cuenta.',
		],
		cuandoB: [
			'Cuando hay cargas en producción que exigen atención 24/7, tiempos de respuesta comprometidos y comprobaciones completas de AWS Trusted Advisor.',
			'Cuando la organización necesita un TAM, revisión proactiva de la arquitectura y el menor tiempo de respuesta para sistemas críticos.',
		],
		escenarioA:
			'Un equipo de desarrollo abre un entorno de pruebas, resuelve dudas de configuración y no necesita atención fuera del horario laboral: le basta con Basic Support o con AWS Developer Support.',
		escenarioB:
			'Una empresa opera una plataforma de ventas 24/7 y quiere abrir casos por teléfono a cualquier hora con respuesta en menos de una hora: contrata AWS Business Support, y si además necesita un TAM designado, AWS Enterprise Support.',
		preguntaIds: ['4.3-q4'],
		objetivos: ['4.3#2', '4.3#7'],
	},
	{
		id: 'documentacion-oficial-vs-comunidad-y-guias',
		etiqueta: 'Documentación oficial frente a comunidad y guías de implementación',
		a: {
			titulo: 'Documentación del servicio',
			resumen:
				'Referencia autoritativa de cada servicio: describe la API, los límites, los parámetros y los permisos. Es el punto de consulta para confirmar el comportamiento exacto antes de implementar.',
		},
		b: {
			titulo: 'Guías de implementación y comunidad',
			resumen:
				'Las guías de implementación y AWS Prescriptive Guidance aportan estrategias y patrones; el centro de conocimiento resuelve dudas puntuales y la comunidad comparte experiencia. Ayudan a decidir y a desbloquear, pero no son la fuente autoritativa del comportamiento exacto.',
		},
		diferenciaClave:
			'La documentación fija el comportamiento exacto de forma autoritativa; las guías y la comunidad ayudan a aplicar y a resolver dudas, pero deben contrastarse con la documentación vigente. La elección depende de si la pregunta es «cómo funciona exactamente» o «cómo lo hago».',
		cuandoA: [
			'Cuando necesitas confirmar el comportamiento exacto, los límites o los permisos de un servicio.',
			'Cuando una decisión técnica exige la referencia oficial y vigente del servicio.',
		],
		cuandoB: [
			'Cuando buscas un patrón de migración o una estrategia de implementación recomendada.',
			'Cuando tienes una duda puntual y quieres pasos de solución o la experiencia de otros clientes.',
		],
		escenarioA:
			'Un ingeniero confirma en la documentación oficial los límites y permisos exactos de una acción antes de implementarla.',
		escenarioB:
			'El mismo equipo consulta una guía de implementación para el patrón de migración y la comunidad para una duda puntual de configuración.',
		preguntaIds: ['4.3-q15'],
		objetivos: ['4.3#1', '4.3#5', '4.3#6'],
	},
	{
		id: 'trusted-advisor-vs-health-dashboard-y-api',
		etiqueta: 'Trusted Advisor frente al AWS Health Dashboard y la AWS Health API',
		a: {
			titulo: 'AWS Trusted Advisor',
			resumen:
				'Revisa la configuración del entorno y emite recomendaciones en cinco categorías: optimización de costos, seguridad, tolerancia a fallos, rendimiento y cuotas de servicio. Solo recomienda: el cliente decide y aplica los cambios.',
		},
		b: {
			titulo: 'AWS Health Dashboard y AWS Health API',
			resumen:
				'El Health Dashboard da una vista personalizada del estado de los servicios de AWS y de los eventos que afectan a los recursos de la cuenta. La Health API expone esa información para automatizar alertas y flujos de trabajo.',
		},
		diferenciaClave:
			'Trusted Advisor recomienda sobre la configuración y las buenas prácticas; el Health Dashboard y la Health API informan de los eventos de AWS que afectan a la cuenta. Ninguno aplica cambios por sí solo.',
		cuandoA: [
			'Cuando buscas recomendaciones concretas para optimizar costos, seguridad o tolerancia a fallos.',
			'Cuando quieres una revisión periódica del entorno con acciones sugeridas.',
		],
		cuandoB: [
			'Cuando necesitas saber si un servicio de AWS está degradado y cómo afecta a tus recursos.',
			'Cuando quieres consumir por programación la información de salud y automatizar la reacción.',
		],
		escenarioA:
			'Un equipo de finanzas recibe de Trusted Advisor recomendaciones para detectar instancias infrautilizadas y reducir el gasto sin rehacer la arquitectura.',
		escenarioB:
			'El mismo equipo consulta el Health Dashboard para ver los eventos que afectan a su región y automatiza alertas con la Health API.',
		preguntaIds: ['4.3-q16'],
		objetivos: ['4.3#8'],
	},
	{
		id: 'partners-y-marketplace-vs-canales-de-soporte',
		etiqueta: 'Programa de partners y catálogo frente a canales de soporte y denuncia',
		a: {
			titulo: 'AWS Partner Network y AWS Marketplace',
			resumen:
				'El AWS Partner Network agrupa a consulting partners (system integrators) y technology partners (independent software vendors), con beneficios como formación, eventos y descuentos por volumen. AWS Marketplace es el catálogo donde se descubren y compran esas soluciones, con facturación consolidada, gobernanza y derechos de uso.',
		},
		b: {
			titulo: 'AWS Support Center y Trust and Safety',
			resumen:
				'El AWS Support Center es el canal para crear y gestionar los casos de soporte de la cuenta, y el equipo de AWS Trust and Safety recibe las denuncias de uso abusivo de recursos, como spam, phishing o contenido ilícito.',
		},
		diferenciaClave:
			'El programa de partners y su catálogo cubren la parte comercial y de implementación; el centro de soporte atiende incidentes de la cuenta y el equipo de confianza gestiona denuncias de abuso. Son canales distintos y no intercambiables.',
		cuandoA: [
			'Cuando necesitas experiencia externa para migrar u operar, o comprar software de un fabricante con facturación consolidada.',
			'Cuando quieres conocer los programas, la formación y los descuentos disponibles para partners.',
		],
		cuandoB: [
			'Cuando necesitas que AWS investigue un incidente sobre un recurso de tu cuenta.',
			'Cuando quieres denunciar el uso abusivo de recursos de AWS.',
		],
		escenarioA:
			'Una empresa contrata a un system integrator para migrar su sistema heredado y compra un software de seguridad a un ISV a través del catálogo, con el pago unificado.',
		escenarioB:
			'La misma empresa abre un caso para investigar una caída y comunica al equipo de confianza que una de sus instancias envía correo no deseado.',
		preguntaIds: ['4.3-q17'],
		objetivos: ['4.3#3', '4.3#9', '4.3#10', '4.3#11', '4.3#12'],
	},
];
