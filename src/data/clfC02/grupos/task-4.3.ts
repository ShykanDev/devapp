import type { GrupoTematico } from '@/data/clfC02/types';

export const gruposTask43: GrupoTematico[] = [
	{
		id: '4.3-g1',
		titulo: 'Recursos y documentación en los sitios oficiales de AWS',
		objetivos: ['4.3#1', '4.3#5', '4.3#6'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'Los **sitios oficiales de AWS** son la fuente autoritativa para aprender y verificar información técnica. Cada recurso cubre una necesidad distinta:\n\n- **Documentación de AWS**: referencia de cada servicio con su API, sus límites y sus permisos; es el punto de consulta para confirmar el comportamiento exacto.\n- **Whitepapers**: documentos de arquitectura, seguridad y economía que explican el «por qué» de un diseño y recogen buenas prácticas.\n- **Blogs de AWS**: anuncios, novedades y casos prácticos publicados por los equipos de AWS.\n- **AWS Knowledge Center**: respuestas breves a preguntas frecuentes y pasos de solución de problemas.\n- **AWS Prescriptive Guidance**: estrategias, patrones y guías de implementación para migrar, modernizar y operar.\n- **AWS re:Post**: comunidad de preguntas y respuestas donde participan expertos de AWS y otros clientes.\n\nLa regla práctica es elegir el recurso según la pregunta: comportamiento exacto → documentación; decisión de arquitectura → whitepaper o AWS Prescriptive Guidance; problema concreto → AWS Knowledge Center o AWS re:Post.',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Usa la documentación del servicio cuando necesites confirmar límites, parámetros o permisos exactos antes de implementar.',
					'Usa un whitepaper o AWS Prescriptive Guidance cuando tengas que decidir una arquitectura, una estrategia de migración o un patrón de operación.',
					'Usa AWS Knowledge Center o AWS re:Post cuando tengas un problema concreto y busques pasos de solución o experiencias de otros usuarios.',
				],
				noUsar: [
					'No bases una decisión técnica en fuentes no oficiales sin contrastarla con documentación vigente del servicio.',
					'No uses AWS re:Post como sustituto de un caso de soporte cuando necesitas que AWS actúe sobre tu cuenta.',
				],
			},
			{
				tipo: 'errorComun',
				error: 'Confundir AWS re:Post, que es una comunidad de preguntas y respuestas, con el AWS Support Center, que es el canal formal para abrir y gestionar casos de soporte.',
				correccion:
					'AWS re:Post sirve para consultar y compartir conocimiento con la comunidad; el AWS Support Center se usa cuando se necesita asistencia de AWS sobre la cuenta, con seguimiento y tiempos de respuesta comprometidos según el plan de soporte.',
			},
			{
				tipo: 'ejemplo',
				md: '```text\nPregunta -> recurso oficial recomendado\nComportamiento exacto de una API        -> documentación de AWS\nDecisión de arquitectura o migración    -> whitepaper / AWS Prescriptive Guidance\nDuda frecuente con pasos de solución    -> AWS Knowledge Center\nExperiencia de otros clientes           -> AWS re:Post\nIncidente sobre mi cuenta               -> AWS Support Center (caso de soporte)\n```',
			},
		],
		preguntasGuia: [
			'¿Qué recurso oficial conviene para verificar el comportamiento exacto de un servicio?',
			'¿En qué se diferencian un whitepaper y la documentación de referencia?',
			'¿Cuándo conviene usar AWS re:Post y cuándo abrir un caso en el AWS Support Center?',
		],
	},
	{
		id: '4.3-g2',
		titulo: 'Planes de soporte de AWS y opciones para clientes',
		objetivos: ['4.3#2', '4.3#7'],
		bloques: [
			{
				tipo: 'concepto',
				md: '**AWS Support** ofrece varios planes que se escalonan según la asistencia que necesita el cliente:\n\n- **Basic Support**: incluido sin coste en toda cuenta. Da acceso a documentación, whitepapers, AWS re:Post, el AWS Health Dashboard y las comprobaciones básicas de AWS Trusted Advisor. No incluye casos técnicos: solo permite consultas de facturación y cuenta.\n- **AWS Developer Support**: asistencia técnica por correo en horario laboral, con un contacto designado y tiempos de respuesta de negocio; pensado para desarrollo y pruebas.\n- **AWS Business Support**: asistencia 24/7 por teléfono, chat y correo, todas las comprobaciones de AWS Trusted Advisor y tiempos de respuesta más cortos; adecuado para producción.\n- **AWS Enterprise On-Ramp Support**: para cargas moderadas que necesitan guía proactiva, con acceso a un grupo de Technical Account Managers (TAM).\n- **AWS Enterprise Support**: el nivel más completo, con TAM designado, revisión proactiva de la arquitectura y el menor tiempo de respuesta para sistemas críticos.\n\nMás allá de los planes, el cliente dispone de asistencia técnica con **AWS Professional Services** y los **AWS solutions architects** para proyectos de diseño e implementación.',
			},
			{
				tipo: 'comparacion',
				parId: 'planes-de-soporte-aws',
			},
			{
				tipo: 'escenario',
				situacion:
					'Una empresa ejecuta una plataforma de ventas que debe estar disponible 24/7. Necesita abrir casos por teléfono a cualquier hora, una respuesta en menos de una hora ante una caída de producción y revisar su arquitectura para optimizar costos.',
				analisis:
					'La carga es de producción y exige canales 24/7, tiempos de respuesta cortos y comprobaciones completas de AWS Trusted Advisor: encaja con **AWS Business Support**. AWS Developer Support se limita al horario laboral y a un contacto, y AWS Enterprise Support está pensado para organizaciones que además requieren un TAM designado y compromisos más estrictos.',
				servicio: 'AWS Support',
			},
			{
				tipo: 'errorComun',
				error: 'Creer que Basic Support incluye casos técnicos o que AWS Developer Support ofrece atención telefónica 24/7.',
				correccion:
					'Basic Support solo cubre facturación y cuenta, sin casos técnicos. La atención 24/7 por teléfono empieza en AWS Business Support; AWS Developer Support se apoya en correo y horario laboral.',
			},
			{
				tipo: 'clave',
				items: [
					'Basic Support: incluido, sin casos técnicos; cubre facturación, cuenta y comunidad.',
					'AWS Developer Support: correo en horario laboral, pensado para desarrollo y pruebas.',
					'AWS Business Support: 24/7 por teléfono, chat y correo, con todas las comprobaciones de AWS Trusted Advisor.',
					'AWS Enterprise On-Ramp Support: guía proactiva y acceso a un grupo de TAM para cargas moderadas.',
					'AWS Enterprise Support: TAM designado y los tiempos de respuesta más cortos.',
				],
			},
		],
		preguntasGuia: [
			'¿Qué incluye Basic Support y qué no incluye?',
			'¿Qué diferencia hay entre AWS Business Support y AWS Enterprise Support?',
			'¿Cuándo es suficiente AWS Developer Support?',
		],
	},
	{
		id: '4.3-g3',
		titulo: 'El AWS Support Center y la asistencia técnica',
		objetivos: ['4.3#4', '4.3#13'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'El **AWS Support Center** es el panel donde se crean, se consultan y se gestionan los casos de soporte de la cuenta. Desde él se elige la severidad del caso, se sigue su estado y se ve el historial; también sirve como punto de entrada a AWS Trusted Advisor y al AWS Health Dashboard.\n\nLa asistencia técnica de AWS va más allá de los casos:\n\n- **AWS Support plans**: definen canales, tiempos de respuesta y alcance del soporte continuo.\n- **AWS Professional Services**: equipo de consultoría que acompaña proyectos concretos, como migraciones o modernizaciones.\n- **AWS solutions architects**: especialistas que ayudan a diseñar arquitecturas bien construidas y a elegir servicios.\n- **AWS Knowledge Center** y **AWS re:Post**: recursos de autoservicio para resolver dudas sin abrir un caso.',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Abre un caso en el AWS Support Center cuando necesites que AWS investigue o actúe sobre un recurso de tu cuenta.',
					'Acude a AWS Professional Services o a los AWS solutions architects cuando el reto sea un proyecto de diseño, migración o modernización, no un incidente puntual.',
					'Resuelve dudas generales con el AWS Knowledge Center o AWS re:Post antes de abrir un caso.',
				],
				noUsar: [
					'No uses el AWS Support Center para pedir consultoría estratégica: para eso están AWS Professional Services y los AWS solutions architects.',
					'No esperes que AWS Professional Services sustituya al soporte continuo de un plan de soporte.',
				],
			},
			{
				tipo: 'errorComun',
				error: 'Intentar resolver un incidente que requiere intervención de AWS solo con publicaciones en AWS re:Post, sin abrir un caso en el AWS Support Center.',
				correccion:
					'AWS re:Post es autoservicio comunitario y no garantiza seguimiento ni tiempos de respuesta. Cuando el problema afecta a la cuenta o a un recurso en producción, hay que abrir un caso en el AWS Support Center conforme al plan contratado.',
			},
			{
				tipo: 'ejemplo',
				md: '```text\nNecesidad -> punto de entrada\nGestionar un incidente de mi cuenta   -> AWS Support Center\nConsulta rápida de autoservicio      -> AWS Knowledge Center / AWS re:Post\nProyecto de migración con AWS        -> AWS Professional Services\nDiseñar una arquitectura nueva       -> AWS solutions architects\n```',
			},
		],
		preguntasGuia: [
			'¿Para qué sirve el AWS Support Center y qué se gestiona desde él?',
			'¿Cuándo conviene recurrir a AWS Professional Services en lugar de abrir un caso?',
			'¿Qué aportan los AWS solutions architects a un cliente?',
		],
	},
	{
		id: '4.3-g4',
		titulo: 'Trusted Advisor, AWS Health Dashboard y AWS Health API',
		objetivos: ['4.3#8'],
		bloques: [
			{
				tipo: 'concepto',
				md: '**AWS Trusted Advisor** es una herramienta que inspecciona el entorno y compara la configuración con las buenas prácticas de AWS. Emite recomendaciones en cinco categorías: **optimización de costos**, seguridad, tolerancia a fallos, rendimiento y cuotas de servicio. Es la referencia para detectar recursos infrautilizados o gastos innecesarios.\n\nEl **AWS Health Dashboard** ofrece una vista personalizada del estado de los servicios de AWS y de los eventos que afectan a los recursos concretos de la cuenta, no solo el estado global.\n\nLa **AWS Health API** permite acceder por programación a esa información de salud para automatizar alertas y flujos de trabajo.\n\nLos tres recursos comparten el mismo objetivo: dar visibilidad para operar y optimizar entornos. Las comprobaciones básicas de AWS Trusted Advisor están en todos los planes; las completas requieren un plan de soporte de negocio o superior, y la AWS Health API también exige ese nivel.',
			},
			{
				tipo: 'escenario',
				situacion:
					'Un equipo de finanzas observa que la factura mensual creció sin un aumento claro de tráfico. El equipo técnico revisa la cuenta y busca recomendaciones concretas para reducir el gasto sin rehacer la arquitectura.',
				analisis:
					'AWS Trusted Advisor es el recurso adecuado: entre sus comprobaciones de optimización de costos señala instancias infrautilizadas, recursos sin usar y direcciones IP elásticas ociosas. La AWS Health API complementa la operación al permitir automatizar el seguimiento de eventos, pero no genera recomendaciones de ahorro.',
				servicio: 'AWS Trusted Advisor',
			},
			{
				tipo: 'errorComun',
				error: 'Esperar que AWS Trusted Advisor aplique cambios automáticamente o que el AWS Health Dashboard sustituya a la monitorización de los recursos.',
				correccion:
					'AWS Trusted Advisor solo recomienda; los cambios los decide y los ejecuta el cliente. El AWS Health Dashboard informa de eventos de los servicios de AWS que afectan a la cuenta, mientras que las métricas y alarmas de los recursos se gestionan con las herramientas de monitorización correspondientes.',
			},
			{
				tipo: 'clave',
				items: [
					'AWS Trusted Advisor recomienda en cinco categorías, incluida la optimización de costos.',
					'Las comprobaciones completas de AWS Trusted Advisor dependen del plan de soporte.',
					'El AWS Health Dashboard muestra los eventos de AWS que afectan a tus recursos.',
					'La AWS Health API expone esa información de salud para automatizarla.',
				],
			},
		],
		preguntasGuia: [
			'¿En qué categorías emite recomendaciones AWS Trusted Advisor?',
			'¿Qué diferencia hay entre el estado global de AWS y el AWS Health Dashboard?',
			'¿Para qué sirve la AWS Health API?',
		],
	},
	{
		id: '4.3-g5',
		titulo: 'Partners de AWS, AWS Marketplace y AWS Trust and Safety',
		objetivos: ['4.3#3', '4.3#9', '4.3#10', '4.3#11', '4.3#12'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'El **AWS Partner Network (APN)** agrupa a las organizaciones que ayudan a los clientes a adoptar AWS:\n\n- **Consulting partners** o **system integrators**: consultoras e integradores que diseñan, migran y operan soluciones para los clientes.\n- **Technology partners** o **independent software vendors (ISV)**: empresas que construyen productos de software y los ofrecen a través de AWS.\n\nSer partner aporta beneficios como formación y certificación de partners, acceso a eventos de partners y descuentos por volumen en los programas que los ofrecen.\n\n**AWS Marketplace** es el catálogo digital donde los clientes descubren, compran y despliegan software, datos y servicios de terceros. Sus servicios clave incluyen la **gestión de costos**, con facturación consolidada en la factura de AWS, y la **gobernanza y los derechos de uso**, que controlan qué soluciones se adquieren y quién puede desplegarlas.\n\nPor último, el equipo de **AWS Trust and Safety** es el canal para denunciar el uso abusivo de recursos de AWS, por ejemplo spam, phishing o contenido ilícito.',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Acude a un consulting partner o system integrator cuando necesites experiencia externa para migrar u operar una carga en AWS.',
					'Busca un independent software vendor o su producto en AWS Marketplace cuando quieras adquirir software de terceros con facturación consolidada.',
					'Consulta el AWS Partner Network cuando quieras conocer programas, formación y descuentos para partners.',
				],
				noUsar: [
					'No uses el AWS Partner Network para comprar software: el catálogo de compra es AWS Marketplace.',
					'No uses el equipo de AWS Trust and Safety para incidencias técnicas de tus recursos; ese canal es para denunciar abuso.',
				],
			},
			{
				tipo: 'escenario',
				situacion:
					'Una empresa quiere migrar un sistema heredado y no tiene personal con experiencia en AWS. Además, prefiere comprar el software de seguridad de un proveedor externo y unificar el pago en la factura de AWS.',
				analisis:
					'El proyecto de migración encaja con un consulting partner o system integrator del AWS Partner Network, que aporta experiencia y metodología. El software de seguridad se adquiere a un independent software vendor a través de AWS Marketplace, donde la facturación se consolida y se aplican controles de gobernanza y derechos de uso.',
				servicio: 'AWS Marketplace',
			},
			{
				tipo: 'errorComun',
				error: 'Confundir el AWS Partner Network con AWS Marketplace y creer que AWS Trust and Safety ofrece soporte técnico.',
				correccion:
					'El AWS Partner Network es el programa de partners, con consultoras e ISV; AWS Marketplace es el catálogo digital donde se compran sus soluciones. AWS Trust and Safety gestiona denuncias de abuso de recursos de AWS, no incidencias técnicas de la cuenta.',
			},
			{
				tipo: 'clave',
				items: [
					'AWS Partner Network: consulting partners (system integrators) y technology partners (ISV).',
					'Beneficios de ser partner: formación y certificación, eventos y descuentos por volumen.',
					'AWS Marketplace clave: gestión de costos y gobernanza con derechos de uso.',
					'AWS Trust and Safety: denunciar el abuso de recursos de AWS.',
				],
			},
		],
		preguntasGuia: [
			'¿Qué tipos de partner participan en el AWS Partner Network?',
			'¿Qué diferencia hay entre un system integrator y un independent software vendor?',
			'¿Qué servicios clave ofrece AWS Marketplace?',
		],
	},
];
