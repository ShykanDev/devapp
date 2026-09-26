import type { PreguntaClfC02 } from '@/data/clfC02/types';

export const preguntasTask43: PreguntaClfC02[] = [
	{
		id: '4.3-q1',
		taskId: '4.3',
		objetivos: ['4.3#1'],
		tipo: 'conocimiento',
		question:
			'Un ingeniero necesita el detalle autoritativo de una acción de la API: su comportamiento exacto, sus límites y sus permisos. ¿Qué recurso debe consultar?',
		options: [
			'La sección de anuncios y novedades del blog de AWS.',
			'La documentación del servicio publicada en los sitios oficiales de AWS.',
			'Un hilo de la comunidad de AWS re:Post, aunque no esté verificado por AWS.',
			'Un whitepaper de arquitectura publicado hace años.',
		],
		correctAnswer: 1,
		explanation:
			'La documentación del servicio es la fuente autoritativa para el comportamiento exacto, los límites y los permisos. El blog describe novedades, re:Post es una comunidad de preguntas y respuestas y los whitepapers explican decisiones de arquitectura y buenas prácticas. Si cambia el requisito y lo que se busca es un patrón de implementación, la respuesta correcta sería AWS Prescriptive Guidance.',
		porQueOpcion: [
			'Incorrecta: el blog describe anuncios y novedades, no el detalle autoritativo de una acción de la API.',
			'Correcta: la documentación del servicio es la fuente autoritativa del comportamiento exacto, los límites y los permisos.',
			'Incorrecta: re:Post es una comunidad de preguntas y respuestas y sus hilos no están verificados por AWS.',
			'Incorrecta: un whitepaper antiguo explica arquitectura y buenas prácticas, no el comportamiento exacto de una acción.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/awssupport/latest/user/aws-support-plans.html',
		],
	},
	{
		id: '4.3-q2',
		taskId: '4.3',
		objetivos: ['4.3#5'],
		tipo: 'conocimiento',
		question: '¿Dónde publica AWS los whitepapers y las guías de buenas prácticas?',
		options: [
			'Únicamente en el AWS Support Center, que publica whitepapers junto con los casos de soporte.',
			'En los sitios oficiales de AWS, dentro de su sección de whitepapers y guías.',
			'Solo en la documentación de la API de cada servicio y sus guías.',
			'Exclusivamente en AWS Marketplace, donde los partners publican whitepapers.',
		],
		correctAnswer: 1,
		explanation:
			'Los whitepapers y las guías se publican en los sitios oficiales de AWS. El AWS Support Center gestiona casos de soporte, la documentación de la API describe interfaces y AWS Marketplace es un catálogo de software de terceros. Si cambia el recurso buscado y lo que se necesita es experiencia de la comunidad, la respuesta correcta sería AWS re:Post.',
		porQueOpcion: [
			'Incorrecta: el AWS Support Center gestiona casos de soporte y no publica whitepapers.',
			'Correcta: los whitepapers y las guías se publican en los sitios oficiales de AWS, en su sección correspondiente.',
			'Incorrecta: la documentación de la API describe interfaces, no es el repositorio de whitepapers y guías.',
			'Incorrecta: AWS Marketplace es un catálogo de software de terceros, no la fuente de whitepapers de AWS.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/marketplace/',
			'https://docs.aws.amazon.com/awssupport/latest/user/getting-started.html',
		],
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
			'AWS Marketplace, catálogo de terceros.',
			'AWS Trusted Advisor, que recomienda parámetros.',
			'AWS Knowledge Center, que responde dudas puntuales.',
		],
		correctAnswer: 0,
		explanation:
			'AWS Prescriptive Guidance reúne estrategias, patrones y guías de implementación. AWS Marketplace es un catálogo de terceros, Trusted Advisor recomienda sobre el entorno propio y Knowledge Center resuelve dudas puntuales. Si cambiara el requisito y se pidiera descargar un informe de cumplimiento, la respuesta correcta sería AWS Artifact.',
		porQueOpcion: [
			'Correcta: AWS Prescriptive Guidance reúne estrategias, patrones de migración y guías de implementación.',
			'Incorrecta: AWS Marketplace es un catálogo de software de terceros, no una guía de migración.',
			'Incorrecta: Trusted Advisor recomienda sobre la configuración del entorno propio, no publica patrones de migración.',
			'Incorrecta: Knowledge Center resuelve dudas puntuales y no reúne patrones de implementación.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/marketplace/',
			'https://docs.aws.amazon.com/awssupport/latest/user/trusted-advisor.html',
			'https://docs.aws.amazon.com/artifact/',
		],
	},
	{
		id: '4.3-q4',
		taskId: '4.3',
		objetivos: ['4.3#2', '4.3#7'],
		tipo: 'comparacion',
		question:
			'¿Qué diferencia clave separa los planes de soporte de entrada de los planes orientados a producción?',
		options: [
			'Los planes de entrada cuestan más que los de producción porque incluyen menos canales de atención.',
			'Los planes de entrada se limitan a documentación, comunidad y correo en horario laboral; los de producción añaden atención 24/7, comprobaciones completas y, en Enterprise, un TAM.',
			'Los planes de producción no incluyen acceso a las comprobaciones de AWS Trusted Advisor, no ofrecen atención fuera del horario laboral ni cuentan con un Technical Account Manager en ningún nivel.',
			'Solo los planes de entrada permiten abrir consultas de facturación y revisar el uso de la cuenta.',
		],
		correctAnswer: 1,
		explanation:
			'La frontera está en las cargas de producción: los planes de entrada (Basic y AWS Developer Support) se apoyan en documentación, comunidad y correo en horario laboral, mientras que AWS Business Support y los niveles Enterprise añaden atención 24/7, comprobaciones completas y, en Enterprise, TAM y guía proactiva. Si cambia el escenario y la carga es solo de desarrollo, bastaría con un plan de entrada.',
		porQueOpcion: [
			'Incorrecta: los planes de entrada cuestan menos, no más, y ofrecen menos canales de atención.',
			'Correcta: los de entrada se limitan a documentación, comunidad y correo en horario laboral, y los de producción añaden 24/7, comprobaciones completas y TAM en Enterprise.',
			'Incorrecta: los planes de producción sí incluyen las comprobaciones completas y atención fuera del horario, y Enterprise aporta un TAM.',
			'Incorrecta: también los planes de pago permiten abrir consultas y revisar el uso, no solo los de entrada.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/awssupport/latest/user/trusted-advisor.html',
		],
	},
	{
		id: '4.3-q5',
		taskId: '4.3',
		objetivos: ['4.3#7'],
		tipo: 'escenario',
		question:
			'Una empresa con una aplicación crítica necesita atención telefónica 24/7, respuesta en menos de una hora ante una caída de producción y todas las comprobaciones de buenas prácticas de la cuenta, sin exigir un TAM asignado. ¿Qué plan se ajusta mejor?',
		options: ['Basic Support.', 'AWS Developer Support.', 'AWS Business Support.', 'AWS Enterprise Support.'],
		correctAnswer: 2,
		explanation:
			'AWS Business Support ofrece atención 24/7 por teléfono, chat y correo, tiempos de respuesta cortos y todas las comprobaciones de AWS Trusted Advisor. Basic no incluye casos técnicos, Developer se limita a correo en horario laboral y Enterprise añade un TAM designado, que aquí no se exige. Si cambia el requisito y se exige un TAM designado, la respuesta correcta pasaría a AWS Enterprise Support.',
		porQueOpcion: [
			'Incorrecta: Basic no incluye casos técnicos ni ofrece atención 24/7.',
			'Incorrecta: Developer se limita al correo en horario laboral y no cubre una producción crítica.',
			'Correcta: Business Support ofrece atención 24/7 por teléfono, chat y correo, tiempos cortos y todas las comprobaciones de Trusted Advisor sin exigir TAM.',
			'Incorrecta: Enterprise cubre el requisito pero añade un TAM designado que aquí no se exige.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/awssupport/latest/user/trusted-advisor.html',
		],
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
			'AWS Enterprise Support, con el TAM designado.',
			'Basic Support, incluido en toda cuenta.',
			'AWS Developer Support, para desarrollo y pruebas.',
		],
		correctAnswer: 0,
		explanation:
			'AWS Enterprise On-Ramp Support ofrece guía proactiva y acceso a un grupo de TAM para cargas moderadas, sin el TAM designado ni los tiempos de respuesta más estrictos de AWS Enterprise Support. Basic no abre casos técnicos y Developer no aporta guía proactiva. Si cambia el requisito y se exige un TAM designado, la respuesta correcta sería AWS Enterprise Support.',
		porQueOpcion: [
			'Correcta: Enterprise On-Ramp ofrece guía proactiva y acceso a un grupo de TAM sin el TAM designado ni los compromisos más estrictos.',
			'Incorrecta: Enterprise Support incluye un TAM designado y compromisos más estrictos que aquí no se necesitan.',
			'Incorrecta: Basic no abre casos técnicos ni aporta guía proactiva.',
			'Incorrecta: Developer Support no incluye guía proactiva ni acceso a un grupo de TAM.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/awssupport/latest/user/aws-support-plans.html',
		],
	},
	{
		id: '4.3-q7',
		taskId: '4.3',
		objetivos: ['4.3#4'],
		tipo: 'conocimiento',
		question: '¿Para qué sirve el AWS Support Center?',
		options: [
			'Para diseñar arquitecturas de referencia y publicar whitepapers oficiales de AWS.',
			'Para crear, seguir y gestionar los casos de soporte de la cuenta y acceder a AWS Trusted Advisor y al AWS Health Dashboard.',
			'Para comprar software de terceros con facturación consolidada en la factura de AWS.',
			'Para denunciar el abuso de recursos de AWS, como spam o phishing, ante el equipo de AWS Trust and Safety de forma confidencial.',
		],
		correctAnswer: 1,
		explanation:
			'El AWS Support Center es el panel de gestión de casos y el punto de entrada a AWS Trusted Advisor y al AWS Health Dashboard. El diseño de arquitecturas corresponde a los AWS solutions architects, la compra de software a AWS Marketplace y las denuncias de abuso al equipo de AWS Trust and Safety. Si cambia el requisito y el reto es un proyecto de migración, la respuesta correcta serían los AWS Professional Services.',
		porQueOpcion: [
			'Incorrecta: diseñar arquitecturas de referencia corresponde a los AWS solutions architects, no al Support Center.',
			'Correcta: el AWS Support Center gestiona los casos de soporte y da acceso a Trusted Advisor y al Health Dashboard.',
			'Incorrecta: comprar software de terceros corresponde a AWS Marketplace.',
			'Incorrecta: las denuncias de abuso se dirigen al equipo de AWS Trust and Safety.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/awssupport/latest/user/trusted-advisor.html',
			'https://docs.aws.amazon.com/health/',
			'https://docs.aws.amazon.com/marketplace/',
			'https://docs.aws.amazon.com/awssupport/latest/user/getting-started.html',
		],
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
			'AWS Professional Services y los AWS solutions architects acompañan proyectos de migración y diseño de arquitectura. Una consulta de facturación no cubre un proyecto, AWS re:Post no garantiza seguimiento y AWS Trust and Safety se ocupa de denuncias de abuso. Si cambia el requisito y se trata de un incidente puntual de la cuenta, la respuesta correcta sería abrir un caso en el AWS Support Center.',
		porQueOpcion: [
			'Incorrecta: una consulta de facturación no cubre un proyecto de migración ni el rediseño de arquitectura.',
			'Correcta: AWS Professional Services y los AWS solutions architects acompañan proyectos de migración y diseño de arquitectura.',
			'Incorrecta: AWS Trust and Safety atiende denuncias de abuso, no proyectos de migración.',
			'Incorrecta: AWS re:Post no garantiza el seguimiento experto que requiere el proyecto.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/awssupport/latest/user/getting-started.html',
		],
	},
	{
		id: '4.3-q9',
		taskId: '4.3',
		objetivos: ['4.3#8'],
		tipo: 'servicio',
		question:
			'Un equipo quiere una revisión periódica de su cuenta con recomendaciones sobre costos, seguridad, tolerancia a fallos y límites de servicio, sin que ninguna herramienta aplique cambios por sí sola. ¿Qué recurso de AWS encaja?',
		options: [
			'AWS Trusted Advisor, que inspecciona la cuenta y recomienda por categorías.',
			'El AWS Health Dashboard, que muestra el estado de los servicios de AWS.',
			'AWS Cost Explorer, que analiza el gasto ya realizado por servicio y etiqueta.',
			'AWS Config, que evalúa la configuración de los recursos frente a reglas definidas.',
		],
		correctAnswer: 0,
		explanation:
			'AWS Trusted Advisor es el que entrega recomendaciones en varias categorías (coste, seguridad, tolerancia a fallos, límites y rendimiento) sin aplicar cambios. El Health Dashboard informa del estado y los eventos, Cost Explorer analiza el gasto y Config evalúa configuración frente a reglas. Si cambia el requisito y se pidiera consultar eventos de salud de forma programática, la respuesta correcta sería la AWS Health API.',
		porQueOpcion: [
			'Correcta: AWS Trusted Advisor inspecciona la cuenta y recomienda por categorías —coste, seguridad, tolerancia a fallos y límites— sin aplicar cambios.',
			'Incorrecta: el AWS Health Dashboard informa del estado y los eventos, no hace revisiones de buenas prácticas.',
			'Incorrecta: AWS Cost Explorer analiza el gasto y no revisa seguridad, tolerancia a fallos ni límites.',
			'Incorrecta: AWS Config evalúa la configuración frente a reglas, no entrega las recomendaciones por categorías descritas.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/awssupport/latest/user/trusted-advisor.html',
			'https://docs.aws.amazon.com/health/',
			'https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-what-is.html',
			'https://docs.aws.amazon.com/config/',
		],
	},
	{
		id: '4.3-q10',
		taskId: '4.3',
		objetivos: ['4.3#8'],
		tipo: 'conocimiento',
		question:
			'¿Qué aporta a un cliente la vista personalizada del estado de los servicios y de los eventos que afectan a sus recursos?',
		options: [
			'Recomendaciones de ahorro sobre recursos infrautilizados y comprobaciones de buenas prácticas de configuración.',
			'Una vista personalizada del estado de los servicios de AWS y de los eventos que afectan a sus recursos.',
			'La compra de software de terceros con facturación consolidada en la factura mensual de AWS.',
			'La formación y certificación de partners y el acceso a eventos exclusivos del programa.',
		],
		correctAnswer: 1,
		explanation:
			'El AWS Health Dashboard muestra el estado de los servicios de AWS y los eventos que afectan a los recursos de la cuenta. Las recomendaciones de ahorro son de AWS Trusted Advisor, la compra de software corresponde a AWS Marketplace y la formación de partners al AWS Partner Network. Si cambia el requisito y se necesita automatizar esa información de salud, la respuesta correcta sería la AWS Health API.',
		porQueOpcion: [
			'Incorrecta: las recomendaciones de ahorro y las comprobaciones de buenas prácticas corresponden a AWS Trusted Advisor.',
			'Correcta: el AWS Health Dashboard ofrece la vista personalizada del estado de los servicios de AWS y de los eventos que afectan a los recursos.',
			'Incorrecta: la compra de software de terceros corresponde a AWS Marketplace.',
			'Incorrecta: la formación y certificación de partners pertenecen al AWS Partner Network.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/awssupport/latest/user/trusted-advisor.html',
			'https://docs.aws.amazon.com/health/',
			'https://docs.aws.amazon.com/marketplace/',
		],
	},
	{
		id: '4.3-q11',
		taskId: '4.3',
		objetivos: ['4.3#9'],
		tipo: 'conocimiento',
		question: '¿Cuál es la función del equipo de AWS Trust and Safety?',
		options: [
			'Atender consultas técnicas 24/7 según el plan de soporte contratado por la organización.',
			'Gestionar los casos de facturación de la cuenta y emitir las facturas mensuales del cliente.',
			'Recibir denuncias sobre el uso abusivo de recursos de AWS, como spam o phishing.',
			'Certificar a los partners de AWS y gestionar los descuentos por volumen del programa.',
		],
		correctAnswer: 2,
		explanation:
			'AWS Trust and Safety es el canal para denunciar el uso abusivo de recursos de AWS. La atención técnica depende del plan de soporte, la facturación se gestiona en el AWS Support Center y la certificación de partners pertenece al AWS Partner Network. Si cambia el escenario y el problema es un incidente técnico de la cuenta, la respuesta correcta sería abrir un caso en el AWS Support Center.',
		porQueOpcion: [
			'Incorrecta: la atención técnica 24/7 depende del plan de soporte, no del equipo de Trust and Safety.',
			'Incorrecta: la facturación se gestiona en el AWS Support Center, no en Trust and Safety.',
			'Correcta: AWS Trust and Safety recibe denuncias sobre el uso abusivo de recursos de AWS, como spam o phishing.',
			'Incorrecta: la certificación de partners y los descuentos por volumen corresponden al AWS Partner Network.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/awssupport/latest/user/getting-started.html',
		],
	},
	{
		id: '4.3-q12',
		taskId: '4.3',
		objetivos: ['4.3#3', '4.3#10'],
		tipo: 'conocimiento',
		question:
			'¿Qué tipos de organización forman parte del programa que agrupa a proveedores de software independientes y a integradores de sistemas?',
		options: [
			'Consulting partners o system integrators y technology partners o independent software vendors.',
			'Únicamente los clientes que tienen contratado un plan de soporte empresarial de AWS.',
			'Solo los fabricantes de hardware que operan centros de datos de AWS y que venden equipos a los clientes.',
			'Exclusivamente los equipos internos de AWS que atienden a los clientes de la nube.',
		],
		correctAnswer: 0,
		explanation:
			'El AWS Partner Network reúne consulting partners (system integrators) y technology partners (independent software vendors). No es un programa limitado a un plan de soporte ni a fabricantes de hardware, ni lo forman equipos internos de AWS. Si cambia el requisito y lo que se busca es un catálogo para comprar software de terceros, la respuesta correcta sería AWS Marketplace.',
		porQueOpcion: [
			'Correcta: el AWS Partner Network reúne consulting partners (system integrators) y technology partners (independent software vendors).',
			'Incorrecta: no se limita a los clientes con un plan de soporte empresarial contratado.',
			'Incorrecta: no lo forman fabricantes de hardware que operan centros de datos de AWS.',
			'Incorrecta: no lo integran equipos internos de AWS que atienden a los clientes de la nube.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/marketplace/',
		],
	},
	{
		id: '4.3-q13',
		taskId: '4.3',
		objetivos: ['4.3#11'],
		tipo: 'conocimiento',
		question: '¿Cuál de los siguientes es un beneficio de participar en el AWS Partner Network?',
		options: [
			'Formación y certificación de partners, acceso a eventos de partners y descuentos por volumen.',
			'Asistencia telefónica 24/7 incluida en toda cuenta de AWS, sin coste de soporte adicional ni plan contratado.',
			'Uso gratuito e ilimitado de todos los servicios de AWS durante el primer año del programa.',
			'Exención del modelo de responsabilidad compartida entre el cliente y AWS para los recursos.',
		],
		correctAnswer: 0,
		explanation:
			'Los beneficios de ser partner incluyen formación y certificación, eventos de partners y descuentos por volumen. La asistencia 24/7 depende del plan de soporte contratado, ningún programa regala uso ilimitado y el modelo de responsabilidad compartida no se exime. Si cambia el objetivo y lo que se busca es comprar software de terceros, el recurso correcto sería AWS Marketplace.',
		porQueOpcion: [
			'Correcta: ser partner aporta formación y certificación, acceso a eventos de partners y descuentos por volumen.',
			'Incorrecta: la asistencia 24/7 depende del plan de soporte contratado y no está incluida en toda cuenta.',
			'Incorrecta: ningún programa regala uso ilimitado de todos los servicios durante el primer año.',
			'Incorrecta: el modelo de responsabilidad compartida no se exime por participar en el programa de partners.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/marketplace/',
		],
	},
	{
		id: '4.3-q14',
		taskId: '4.3',
		objetivos: ['4.3#12'],
		tipo: 'conocimiento',
		question: '¿Qué capacidades clave ofrece a los clientes el catálogo de software de terceros?',
		options: [
			'Gestión de costos con facturación consolidada, gobernanza y derechos de uso de las soluciones adquiridas.',
			'Recomendaciones automáticas de optimización sobre el entorno de la cuenta de AWS del cliente.',
			'El estado en tiempo real de los servicios de AWS en cada Región y los eventos que afectan a los recursos del cliente.',
			'La formación y certificación oficiales de los partners de AWS y su acceso a eventos exclusivos.',
		],
		correctAnswer: 0,
		explanation:
			'AWS Marketplace consolida la facturación de las soluciones de terceros y aporta gobernanza y derechos de uso para controlar qué se adquiere y quién lo despliega. Las recomendaciones son de Trusted Advisor, el estado de servicios es del Health Dashboard y la formación de partners pertenece al AWS Partner Network. Si cambia el requisito y lo que se necesita es atención técnica, la respuesta correcta sería el AWS Support Center.',
		porQueOpcion: [
			'Correcta: AWS Marketplace ofrece gestión de costos con facturación consolidada, gobernanza y derechos de uso de las soluciones.',
			'Incorrecta: las recomendaciones automáticas de optimización corresponden a AWS Trusted Advisor.',
			'Incorrecta: el estado en tiempo real de los servicios de AWS corresponde al AWS Health Dashboard.',
			'Incorrecta: la formación y certificación de partners pertenecen al AWS Partner Network.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/marketplace/',
			'https://docs.aws.amazon.com/awssupport/latest/user/trusted-advisor.html',
			'https://docs.aws.amazon.com/health/',
			'https://docs.aws.amazon.com/awssupport/latest/user/getting-started.html',
		],
	},
	{
		id: '4.3-q15',
		taskId: '4.3',
		objetivos: ['4.3#6'],
		tipo: 'comparacion',
		question:
			'Un ingeniero distingue entre la fuente autoritativa del comportamiento de un servicio, las guías de implementación y la comunidad. ¿Qué afirmación es correcta?',
		options: [
			'La documentación del servicio es la fuente autoritativa de su comportamiento; las guías de implementación y la comunidad ayudan a resolver dudas y patrones, pero no la sustituyen.',
			'La comunidad de preguntas y respuestas es la fuente autoritativa del comportamiento exacto de un servicio, por encima de la documentación oficial, porque recoge la experiencia real de otros clientes.',
			'Un whitepaper publicado hace años es la referencia más actual del comportamiento exacto de una acción de la API del servicio.',
			'Las guías de implementación y la documentación del servicio son lo mismo y se publican siempre en el mismo apartado oficial.',
		],
		correctAnswer: 0,
		explanation:
			'La documentación del servicio fija el comportamiento exacto; las guías de implementación aportan patrones y la comunidad comparte experiencia, pero ninguna sustituye a la documentación. Si cambia el requisito y lo que se necesita es un patrón de migración, la respuesta correcta sería AWS Prescriptive Guidance.',
		porQueOpcion: [
			'Correcta: la documentación es la fuente autoritativa del comportamiento, y las guías y la comunidad ayudan pero no la sustituyen.',
			'Incorrecta: la comunidad no es la fuente autoritativa por encima de la documentación oficial.',
			'Incorrecta: un whitepaper antiguo puede quedar desactualizado y no rige el comportamiento exacto de la API.',
			'Incorrecta: las guías de implementación y la documentación son recursos distintos, aunque puedan publicarse en sitios oficiales.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/awssupport/latest/user/aws-support-plans.html',
		],
	},
	{
		id: '4.3-q16',
		taskId: '4.3',
		objetivos: ['4.3#8'],
		tipo: 'comparacion',
		question:
			'¿Qué distingue a la herramienta que recomienda sobre la configuración de la cuenta del tablero que informa del estado de los servicios y de la API de salud?',
		options: [
			'La herramienta de recomendaciones evalúa la configuración frente a buenas prácticas; el tablero informa de los eventos que afectan a la cuenta y la API permite automatizar esa información.',
			'El tablero recomienda sobre la configuración; la herramienta de recomendaciones informa del estado de los servicios; y la API de salud bloquea los cambios no permitidos en la cuenta ni en sus recursos.',
			'Los tres hacen lo mismo: recomiendan configuraciones, informan del estado y automatizan alertas sin diferencias entre ellos.',
			'La API de salud es la única que recomienda sobre costos; el tablero y la herramienta solo muestran métricas del cliente.',
		],
		correctAnswer: 0,
		explanation:
			'La herramienta de recomendaciones (Trusted Advisor) revisa la configuración frente a buenas prácticas; el tablero de estado informa de los eventos que afectan a la cuenta y la API de salud expone esa información para automatizarla. Ninguna aplica cambios por sí sola. Si cambia el requisito y se busca solo el estado de los servicios, la respuesta correcta sería el tablero de estado.',
		porQueOpcion: [
			'Correcta: la herramienta de recomendaciones evalúa la configuración frente a buenas prácticas, el tablero informa de los eventos y la API permite automatizar esa información.',
			'Incorrecta: invierte las funciones y atribuye a la API de salud un bloqueo de cambios que no realiza.',
			'Incorrecta: los tres recursos cumplen funciones distintas y no son equivalentes.',
			'Incorrecta: la API de salud difunde el estado y los eventos, no recomienda sobre costos.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/awssupport/latest/user/trusted-advisor.html',
		],
	},
	{
		id: '4.3-q17',
		taskId: '4.3',
		objetivos: ['4.3#3', '4.3#10', '4.3#12'],
		tipo: 'comparacion',
		question:
			'¿Qué distingue al programa de partners y a su catálogo de compra de los canales de soporte y de denuncia de abuso?',
		options: [
			'El programa de partners reúne a consultoras y fabricantes de software; su catálogo permite comprar sus soluciones; el soporte gestiona casos y el equipo de confianza recibe denuncias de abuso.',
			'El catálogo de partners gestiona los casos de soporte, el programa de partners recibe las denuncias de abuso y el soporte certifica a las consultoras de la red de partners en la práctica de AWS.',
			'Los tres canales son equivalentes: cualquiera de ellos compra software, abre casos técnicos y atiende denuncias de uso abusivo.',
			'El equipo de confianza certifica a los partners, el catálogo emite las facturas y el soporte vende software de terceros a los clientes.',
		],
		correctAnswer: 0,
		explanation:
			'El programa de partners agrupa a las consultoras y a los fabricantes de software, y su catálogo es donde se compran esas soluciones con facturación consolidada; el soporte gestiona casos y el equipo de confianza recibe denuncias de abuso. Si cambia el requisito y lo que se necesita es solo comprar software, la respuesta correcta sería el catálogo de compra.',
		porQueOpcion: [
			'Correcta: el programa reúne consultoras y fabricantes, su catálogo permite comprar soluciones, el soporte gestiona casos y Trust and Safety recibe denuncias de abuso.',
			'Incorrecta: mezcla los papeles, ya que el catálogo no gestiona casos ni el soporte certifica a las consultoras.',
			'Incorrecta: los tres canales no son equivalentes; cada uno cumple una función distinta.',
			'Incorrecta: atribuye al equipo de confianza certificar partners y al catálogo emitir facturas, lo que es falso.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/awssupport/latest/user/aws-support-plans.html',
		],
	},
	{
		id: '4.3-q18',
		taskId: '4.3',
		objetivos: ['4.3#1', '4.3#6'],
		tipo: 'escenario',
		question:
			'Un ingeniero necesita confirmar el comportamiento exacto de una función y, por separado, buscar un patrón de implementación recomendado. ¿Qué recurso corresponde a cada necesidad?',
		options: [
			'La documentación del servicio para el comportamiento exacto y una guía de implementación para el patrón recomendado, ambas en sitios oficiales.',
			'La comunidad de preguntas y respuestas para ambas necesidades, porque recoge respuestas de otros clientes ya verificadas por los equipos de AWS.',
			'El catálogo de software de terceros para el comportamiento y el centro de conocimiento para el patrón de implementación.',
			'Un caso de soporte de facturación para el comportamiento y un blog de anuncios para el patrón de implementación.',
		],
		correctAnswer: 0,
		explanation:
			'La documentación es la fuente autoritativa del comportamiento exacto y las guías de implementación aportan los patrones recomendados. La comunidad ayuda, pero no es la fuente autoritativa ni sustituye a la documentación. Si cambia el escenario y el patrón buscado es de migración, la respuesta correcta seguiría siendo una guía oficial como AWS Prescriptive Guidance.',
		porQueOpcion: [
			'Correcta: la documentación da el comportamiento exacto y una guía de implementación el patrón recomendado, ambas en sitios oficiales.',
			'Incorrecta: la comunidad no es la fuente autoritativa ni sus respuestas están verificadas por los equipos de AWS.',
			'Incorrecta: el catálogo de terceros no describe el comportamiento del servicio ni el centro de conocimiento publica patrones.',
			'Incorrecta: un caso de facturación no confirma comportamiento técnico ni un blog de anuncios aporta patrones de implementación.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/awssupport/latest/user/aws-support-plans.html',
		],
	},
	{
		id: '4.3-q19',
		taskId: '4.3',
		objetivos: ['4.3#2'],
		tipo: 'escenario',
		question:
			'Una empresa con cargas en producción necesita atención telefónica a cualquier hora y tiempos de respuesta comprometidos, pero no requiere un TAM designado. ¿Qué plan se ajusta mejor?',
		options: [
			'El plan de entrada incluido en toda cuenta, que no abre casos técnicos ni ofrece atención fuera del horario.',
			'El plan de producción con atención 24/7 por teléfono, chat y correo y comprobaciones completas de Trusted Advisor.',
			'El plan de desarrollo, que ofrece asistencia por correo en horario laboral y un contacto designado para el equipo.',
			'El plan empresarial con TAM designado, revisión proactiva y el menor tiempo de respuesta del catálogo.',
		],
		correctAnswer: 1,
		explanation:
			'El plan de producción con atención 24/7 y comprobaciones completas encaja con cargas críticas sin exigir un TAM designado. El plan de entrada no abre casos técnicos, el de desarrollo se limita al horario laboral y el empresarial añade un TAM que aquí no se requiere. Si cambia el requisito y se exige un TAM designado, la respuesta correcta pasaría al plan empresarial.',
		porQueOpcion: [
			'Incorrecta: el plan de entrada no abre casos técnicos ni cubre atención fuera del horario.',
			'Correcta: el plan de producción ofrece atención 24/7 por teléfono, chat y correo y comprobaciones completas sin exigir un TAM designado.',
			'Incorrecta: el plan de desarrollo se limita al correo en horario laboral y no cubre producción.',
			'Incorrecta: el plan empresarial cumple pero añade un TAM designado que no se requiere.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/awssupport/latest/user/trusted-advisor.html',
		],
	},
	{
		id: '4.3-q20',
		taskId: '4.3',
		objetivos: ['4.3#3', '4.3#10', '4.3#12'],
		tipo: 'escenario',
		question:
			'Una empresa quiere migrar un sistema heredado con ayuda externa y, además, comprar software de seguridad de un fabricante, unificando el pago. ¿Qué opciones encajan?',
		options: [
			'Una consultora del programa de partners para la migración y el catálogo de compra para el software, con facturación consolidada.',
			'Un caso de soporte técnico para la migración y el centro de conocimiento para comprar el software de seguridad.',
			'El equipo de denuncia de abuso para la migración y una guía de implementación para adquirir el software.',
			'El plan de soporte empresarial para la migración y el programa de formación y certificación de partners para comprar el software.',
		],
		correctAnswer: 0,
		explanation:
			'La migración con ayuda externa encaja con una consultora del programa de partners, y el software de un fabricante se compra en el catálogo con facturación consolidada. Un caso de soporte no migra sistemas ni el centro de conocimiento vende software. Si cambia el requisito y el proyecto es interno sin compra de software, bastaría con el acompañamiento de un partner de consultoría.',
		porQueOpcion: [
			'Correcta: una consultora del programa de partners cubre la migración y el catálogo de compra el software, con facturación consolidada.',
			'Incorrecta: un caso de soporte no migra sistemas ni el centro de conocimiento vende software.',
			'Incorrecta: el equipo de denuncia de abuso no migra sistemas ni una guía permite adquirir software.',
			'Incorrecta: el plan de soporte no ejecuta la migración ni el programa de formación vende software.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/awssupport/latest/user/aws-support-plans.html',
		],
	},
	{
		id: '4.3-q21',
		taskId: '4.3',
		objetivos: ['4.3#4', '4.3#13'],
		tipo: 'escenario',
		question:
			'Una empresa necesita que AWS investigue un incidente de un recurso en producción y, por separado, acompañamiento experto para rediseñar su arquitectura. ¿Qué debe usar en cada caso?',
		options: [
			'Abrir un caso en el centro de soporte para el incidente y recurrir a servicios profesionales o arquitectos de soluciones para el rediseño.',
			'Publicar la duda en la comunidad de preguntas y respuestas para ambas necesidades, porque otros clientes y expertos responden con su experiencia real en la nube.',
			'Abrir un caso de facturación en el centro de soporte para el incidente y usar el catálogo de compra para el rediseño de la arquitectura.',
			'Denunciar el incidente al equipo de confianza y seguridad y usar el programa de formación de partners para el rediseño de la arquitectura.',
		],
		correctAnswer: 0,
		explanation:
			'El incidente se gestiona como un caso en el centro de soporte, y el rediseño de arquitectura como un proyecto con servicios profesionales o arquitectos de soluciones. La comunidad no garantiza que AWS actúe sobre la cuenta. Si cambia el caso y solo se necesita una consulta de facturación, bastaría con un caso de ese tipo en el centro de soporte.',
		porQueOpcion: [
			'Correcta: el incidente se abre como caso en el centro de soporte y el rediseño se apoya en servicios profesionales o arquitectos de soluciones.',
			'Incorrecta: la comunidad no garantiza que AWS actúe sobre la cuenta ni sustituye el proyecto de rediseño.',
			'Incorrecta: un caso de facturación no investiga un incidente técnico ni el catálogo diseña arquitecturas.',
			'Incorrecta: Trust and Safety recibe denuncias de abuso y el programa de formación no rediseña arquitecturas.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/awssupport/latest/user/aws-support-plans.html',
		],
	},
	{
		id: '4.3-q22',
		taskId: '4.3',
		objetivos: ['4.3#8'],
		tipo: 'tradeoff',
		question:
			'Un equipo busca recomendaciones concretas para reducir el gasto y, a la vez, quiere enterarse de los eventos que afectan a sus recursos. ¿Qué trade-off de uso describe mejor cada herramienta?',
		options: [
			'La herramienta de recomendaciones analiza la configuración y propone mejoras de costos; el tablero de estado informa de eventos, pero ninguna aplica cambios por sí sola.',
			'La herramienta de recomendaciones informa del estado de los servicios de AWS y el tablero propone mejoras de costos y aplica los cambios de forma automática en la cuenta.',
			'Ambas herramientas aplican cambios automáticamente en la cuenta, pero solo si se contrata el plan de soporte empresarial.',
			'El tablero recomienda sobre costos y la herramienta de recomendaciones solo muestra métricas en tiempo real del cliente.',
		],
		correctAnswer: 0,
		explanation:
			'La herramienta de recomendaciones (Trusted Advisor) propone mejoras, incluidas las de costos, y el tablero de estado informa de los eventos que afectan a la cuenta; ninguna aplica cambios por sí sola. Si cambia el requisito y se necesita automatizar la reacción a los eventos, la respuesta correcta sería consumir la API de salud.',
		porQueOpcion: [
			'Correcta: Trusted Advisor propone mejoras de costos y el tablero informa de eventos, sin que ninguna aplique cambios por sí sola.',
			'Incorrecta: intercambia las funciones y atribuye al tablero aplicar cambios automáticos que no realiza.',
			'Incorrecta: ninguna de las dos aplica cambios automáticamente, con plan empresarial o sin él.',
			'Incorrecta: el tablero informa del estado y no recomienda sobre costos.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/awssupport/latest/user/trusted-advisor.html',
		],
	},
	{
		id: '4.3-q23',
		taskId: '4.3',
		objetivos: ['4.3#9'],
		tipo: 'escenario',
		question:
			'Una empresa detecta que una de sus instancias se está usando para enviar correo no deseado. ¿A qué canal debe dirigirse?',
		options: [
			'Al centro de soporte, para abrir un caso técnico de severidad crítica sobre el recurso afectado y su configuración de red.',
			'Al equipo de confianza y seguridad, que recibe las denuncias de uso abusivo de recursos, como spam o phishing.',
			'Al catálogo de compra, para reportar al fabricante del software que originó el envío de correo no deseado.',
			'Al programa de partners, para que la consultora revise la configuración de la instancia comprometida.',
		],
		correctAnswer: 1,
		explanation:
			'Las denuncias por uso abusivo de recursos, como el envío de spam, se dirigen al equipo de confianza y seguridad. El centro de soporte atiende incidentes técnicos de la cuenta, no denuncias de abuso. Si cambia el escenario y lo que se necesita es investigar una caída de la instancia, la respuesta correcta sería abrir un caso en el centro de soporte.',
		porQueOpcion: [
			'Incorrecta: el centro de soporte atiende incidentes técnicos de la cuenta, no denuncias de uso abusivo.',
			'Correcta: el equipo de confianza y seguridad recibe las denuncias de uso abusivo de recursos, como spam o phishing.',
			'Incorrecta: el catálogo de compra no atiende denuncias sobre el uso indebido de recursos.',
			'Incorrecta: el programa de partners no gestiona denuncias de abuso.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/awssupport/latest/user/aws-support-plans.html',
		],
	},
	{
		id: '4.3-q24',
		taskId: '4.3',
		objetivos: ['4.3#11'],
		tipo: 'casoDeUso',
		question:
			'Una empresa de software se incorpora al programa de partners y quiere capacitar a su equipo y obtener ventajas comerciales. ¿Qué beneficios recibe por ser partner?',
		options: [
			'Formación y certificación, acceso a eventos y descuentos por volumen en los programas que los ofrecen.',
			'Atención telefónica 24/7 incluida en la cuenta del partner, con independencia del plan de soporte que tenga contratado.',
			'Uso gratuito e ilimitado de los servicios de la nube y exención del modelo de responsabilidad compartida.',
			'La gestión automática de las denuncias de abuso y la revisión proactiva de la arquitectura del cliente.',
		],
		correctAnswer: 0,
		explanation:
			'El programa de partners ofrece formación y certificación, eventos y descuentos por volumen. La atención 24/7 depende del plan de soporte, ningún programa regala uso ilimitado y las denuncias de abuso las gestiona el equipo de confianza. Si cambia el caso de uso y lo que se busca es vender en la nube, el catálogo de compra es el canal comercial.',
		porQueOpcion: [
			'Correcta: ser partner aporta formación y certificación, acceso a eventos y descuentos por volumen.',
			'Incorrecta: la atención 24/7 no está incluida por ser partner; depende del plan de soporte contratado.',
			'Incorrecta: ningún programa concede uso ilimitado ni exime del modelo de responsabilidad compartida.',
			'Incorrecta: las denuncias de abuso las gestiona el equipo de confianza y la revisión proactiva no es un beneficio de este programa.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/awssupport/latest/user/aws-support-plans.html',
		],
	},
	{
		id: '4.3-q25',
		taskId: '4.3',
		objetivos: ['4.3#5'],
		tipo: 'casoDeUso',
		question:
			'Un equipo quiere documentar las buenas prácticas de su arquitectura y compartir una guía con la organización. ¿Dónde encuentra los whitepapers y las guías oficiales de AWS?',
		options: [
			'En los sitios oficiales de AWS, en la sección de whitepapers y guías de buenas prácticas.',
			'En el centro de soporte, dentro del historial de casos técnicos ya cerrados de la propia cuenta.',
			'En el catálogo de compra de software de terceros, en la ficha de cada producto publicado.',
			'En el tablero de estado de los servicios, junto a los eventos que afectan a la cuenta del cliente.',
		],
		correctAnswer: 0,
		explanation:
			'Los whitepapers y las guías de buenas prácticas se publican en los sitios oficiales de AWS. El centro de soporte gestiona casos, el catálogo vende software de terceros y el tablero informa del estado de los servicios. Si cambia el caso de uso y lo que se necesita es una estrategia de migración, la respuesta correcta sería AWS Prescriptive Guidance.',
		porQueOpcion: [
			'Correcta: los whitepapers y las guías oficiales están en los sitios oficiales de AWS, en su sección de buenas prácticas.',
			'Incorrecta: el centro de soporte gestiona casos y no publica whitepapers ni guías oficiales.',
			'Incorrecta: el catálogo vende software de terceros y no aloja las guías oficiales de AWS.',
			'Incorrecta: el tablero de estado informa de eventos y no contiene whitepapers ni guías.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/awssupport/latest/user/aws-support-plans.html',
		],
	},
];
