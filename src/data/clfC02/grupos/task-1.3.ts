import type { GrupoTematico } from '@/data/clfC02/types';

export const gruposTask13: GrupoTematico[] = [
	{
		id: '1.3-g1',
		titulo: 'Estrategias de adopción de la nube y beneficios de migrar',
		objetivos: ['1.3#1'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'Las **estrategias de adopción** describen cómo y en qué orden una organización lleva sus cargas a AWS. Antes de mover nada conviene responder al **por qué**: los beneficios que se buscan al migrar son reducir costes de infraestructura, ganar **agilidad** para desplegar más rápido, obtener **elasticidad** para escalar según la demanda, mejorar la **resiliencia** y ampliar el **alcance global** sin abrir centros de datos propios.\n\nLa adopción no es solo un traslado técnico: es un cambio organizativo. Las estrategias habituales combinan varios ingredientes:\n\n- **Adopción escalonada por olas**: agrupar aplicaciones por dependencias y migrarlas en tandas, empezando por las más sencillas.\n- **Enfoque cloud-first**: toda carga nueva se plantea primero en la nube y solo se excluye con una justificación clara.\n- **Centro de excelencia**: equipo que define estándares, guardarraíles y buenas prácticas para el resto de la organización.\n- **Motivaciones alineadas con el negocio**: cada migración se justifica por un resultado (coste, velocidad, cumplimiento, experiencia del cliente) y no por la tecnología en sí.',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Usa adopción por olas cuando tengas muchas aplicaciones y dependencias: reduce el riesgo al migrar por grupos manejables.',
					'Impulsa cloud-first para que los equipos no repliquen por inercia el modelo anterior.',
					'Crea un centro de excelencia cuando varias áreas deban compartir estándares, seguridad y control de costes.',
					'Alinea cada ola con un resultado de negocio medible antes de empezar.',
				],
				noUsar: [
					'No migres todo a la vez buscando rapidez: multiplica el riesgo y dificulta revertir.',
					'No plantees la adopción solo como un proyecto de infraestructura: sin cambio en procesos y personas, los beneficios no llegan.',
				],
			},
			{
				tipo: 'errorComun',
				error: 'Creer que migrar se reduce a copiar servidores a AWS y que, por tanto, los beneficios aparecen solos.',
				correccion:
					'La migración es un proceso de adopción: exige priorizar cargas, rediseñar procesos y preparar a las personas. Sin ese cambio organizativo, mover servidores no produce agilidad ni ahorro sostenido.',
			},
			{
				tipo: 'clave',
				items: [
					'La adopción empieza por el por qué de negocio, no por el servicio técnico.',
					'Los beneficios típicos son coste, agilidad, elasticidad, resiliencia y alcance global.',
					'La adopción por olas y el enfoque cloud-first reducen el riesgo de un cambio completo de golpe.',
					'Un centro de excelencia difunde estándares y buenas prácticas en toda la organización.',
				],
			},
		],
		preguntasGuia: [
			'¿Qué beneficios de negocio justifican migrar a la nube?',
			'¿Por qué la adopción por olas reduce el riesgo frente a una migración completa de golpe?',
			'¿Qué papel tiene un centro de excelencia en la estrategia de adopción?',
		],
	},
	{
		id: '1.3-g2',
		titulo: 'Recursos del viaje de migración y estrategias de migración',
		objetivos: ['1.3#2', '1.3#4'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'Migrar una cartera de aplicaciones es un **viaje** por fases: evaluar, planificar, mover y optimizar. AWS ofrece recursos para cada fase:\n\n- **Migration Evaluator**: construye el caso de negocio y estima el ahorro frente al entorno actual.\n- **AWS Application Discovery Service**: descubre servidores, dependencias y uso real de la infraestructura on-premises.\n- **AWS Migration Hub**: punto único para seguir el progreso de las migraciones entre herramientas y regiones.\n- **AWS Application Migration Service**: replica servidores completos (rehost) con la mínima interrupción.\n- **AWS Database Migration Service (AWS DMS)**: migra bases de datos, incluidas las replicaciones continuas.\n- **AWS Schema Conversion Tool (AWS SCT)**: convierte esquemas y código de bases de datos entre motores distintos.\n- **AWS Prescriptive Guidance**: guías y patrones probados para planificar y ejecutar la migración.\n\nSobre esas herramientas se elige la **estrategia de migración** aplicación a aplicación, conocida como las «7 R»:\n\n- **Retire**: apagar lo que ya no aporta.\n- **Retain**: dejar temporalmente lo que aún no conviene mover.\n- **Rehost** (*lift and shift*): mover tal cual.\n- **Relocate**: trasladar plataformas completas sin cambios.\n- **Replatform** (*lift, tuck and reshape*): migrar con ajustes para usar servicios gestionados.\n- **Repurchase** (*drop and shop*): sustituir por una solución SaaS.\n- **Refactor / re-architect**: rediseñar aprovechando la nube.\n\nLa **replicación de bases de datos** es un ejemplo concreto: se copia el dato de forma continua desde el origen hasta AWS y se corta el tráfico en una ventana breve.',
			},
			{
				tipo: 'comparacion',
				parId: 'rehost-vs-replataforma',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Usa rehost para cumplir plazos y salir rápido del centro de datos cuando la aplicación no se va a tocar.',
					'Usa replatform cuando quieras aprovechar servicios gestionados con un cambio acotado y riesgo controlado.',
					'Usa replicación de bases de datos cuando no puedas permitirte una parada larga durante el corte.',
				],
				noUsar: [
					'No rehostees una aplicación que piensas apagar en pocos meses: solo trasladas deuda técnica.',
					'No reserves el refactor completo para toda la cartera: el rediseño profundo se justifica donde aporta ventaja competitiva.',
				],
			},
			{
				tipo: 'errorComun',
				error: 'Elegir una sola estrategia de migración para toda la cartera de aplicaciones.',
				correccion:
					'La estrategia se decide aplicación a aplicación: unas se retiran, otras se rehospedan y solo unas pocas se rediseñan. Forzar una sola «R» a todo el inventario encarece o retrasa el viaje.',
			},
			{
				tipo: 'clave',
				items: [
					'Evalúa con Migration Evaluator y AWS Application Discovery Service; planifica con AWS Prescriptive Guidance.',
					'Sigue el progreso con AWS Migration Hub; ejecuta con AWS Application Migration Service y AWS Database Migration Service (AWS DMS).',
					'Elige la estrategia por aplicación: rehost, replatform, refactor, repurchase, relocate, retain o retire.',
					'La replicación continua de bases de datos reduce la ventana de corte.',
				],
			},
		],
		preguntasGuia: [
			'¿Qué recurso del viaje de migración sirve para evaluar, cuál para planificar y cuál para seguir el progreso?',
			'¿Qué diferencia hay entre rehost, replatform y refactor?',
			'¿Cómo ayuda la replicación de bases de datos a reducir la parada durante una migración?',
		],
	},
	{
		id: '1.3-g3',
		titulo: 'Componentes del AWS Cloud Adoption Framework (AWS CAF)',
		objetivos: ['1.3#3'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'El **AWS Cloud Adoption Framework (AWS CAF)** es el marco de AWS para ordenar la adopción de la nube en toda la organización. No diseña la arquitectura técnica de una aplicación: organiza el cambio en **perspectivas** y **capacidades** para que negocio y tecnología avancen juntos.\n\nEl AWS CAF agrupa sus componentes en seis perspectivas, tres de negocio y tres técnicas:\n\n- **Business**: asegura que la nube genera valor de negocio.\n- **People**: prepara a las personas y los procesos de cambio (cultura, formación, organización).\n- **Governance**: alinea la inversión con la estrategia y gestiona riesgos y cumplimiento.\n- **Platform**: construye la plataforma y la arquitectura de la solución.\n- **Security**: protege datos, sistemas y activos.\n- **Operations**: opera y monitoriza los servicios en la nube.\n\nLos **beneficios** que persigue el AWS CAF son de negocio: reducir el riesgo empresarial, mejorar el desempeño ambiental, social y de gobernanza (ESG), aumentar los ingresos y mejorar la eficiencia operativa. Por eso se mide en resultados de negocio, no solo en artefactos técnicos.',
			},
			{
				tipo: 'comparacion',
				parId: 'caf-vs-well-architected',
			},
			{
				tipo: 'escenario',
				situacion:
					'Una empresa quiere migrar a AWS, pero cada área va por su cuenta: finanzas no ve el retorno, recursos humanos no está preparado para el cambio y el equipo de plataforma improvisa la arquitectura. El comité pide un plan que ordene la adopción y demuestre valor de negocio.',
				analisis:
					'El **AWS Cloud Adoption Framework (AWS CAF)** encaja porque cubre las seis perspectivas: Business y Governance para justificar la inversión y gestionar el riesgo, People para el cambio cultural y la formación, y Platform, Security y Operations para la parte técnica. El AWS CAF aporta el mapa organizativo; el diseño técnico detallado de cada carga llega después con el AWS Well-Architected Framework.',
			},
			{
				tipo: 'errorComun',
				error: 'Confundir el AWS CAF con un marco de diseño técnico y usarlo para decidir tipos de instancias o clases de almacenamiento.',
				correccion:
					'El AWS CAF guía el cambio organizativo y de negocio: personas, gobernanza, plataforma, seguridad y operaciones. El diseño técnico de las cargas corresponde al AWS Well-Architected Framework.',
			},
			{
				tipo: 'clave',
				items: [
					'El AWS CAF ordena la adopción con seis perspectivas: Business, People, Governance, Platform, Security y Operations.',
					'Business, People y Governance miran al negocio; Platform, Security y Operations, a lo técnico.',
					'Los beneficios se miden en resultados: menos riesgo, mejor desempeño ESG, más ingresos y más eficiencia operativa.',
					'El AWS CAF no es el AWS Well-Architected Framework: adopción organizativa frente a diseño técnico de las cargas.',
				],
			},
		],
		preguntasGuia: [
			'¿En qué perspectivas organiza el AWS CAF sus componentes?',
			'¿Qué beneficios de negocio persigue el AWS CAF?',
			'¿En qué se diferencia el AWS CAF del AWS Well-Architected Framework?',
		],
	},
];
