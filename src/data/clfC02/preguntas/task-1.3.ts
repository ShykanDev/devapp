import type { PreguntaClfC02 } from '@/data/clfC02/types';

export const preguntasTask13: PreguntaClfC02[] = [
	{
		id: '1.3-q1',
		taskId: '1.3',
		objetivos: ['1.3#1'],
		tipo: 'conocimiento',
		question: '¿Qué describe mejor una estrategia de adopción de la nube?',
		options: [
			'Contratar el mayor número posible de servicios de AWS en el menor tiempo, buscando la modernización total de la organización.',
			'Decidir cómo y en qué orden la organización lleva sus cargas a la nube, alineando el cambio con objetivos de negocio.',
			'Copiar los servidores actuales a AWS sin modificar procesos ni formación.',
			'Sustituir todo el personal de operaciones por servicios gestionados.',
		],
		correctAnswer: 1,
		explanation:
			'Una estrategia de adopción define el cómo y el orden (por ejemplo, por olas o con enfoque cloud-first) y conecta la migración con resultados de negocio. No consiste en contratar servicios ni en un simple traslado técnico. Si el requisito fuera solo mover servidores sin cambiar procesos, no habría estrategia de adopción sino un traslado técnico.',
		porQueOpcion: [
			'Incorrecta: contratar servicios sin plan no es una estrategia; la adopción exige orden y objetivos.',
			'Correcta: define cómo y en qué orden se llevan las cargas a la nube y alinea el cambio con objetivos de negocio.',
			'Incorrecta: copiar servidores sin cambiar procesos ni formación es un traslado técnico, no una estrategia de adopción.',
			'Incorrecta: sustituir personal por servicios gestionados no es el propósito de una estrategia de adopción.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html',
		],
	},
	{
		id: '1.3-q2',
		taskId: '1.3',
		objetivos: ['1.3#1'],
		tipo: 'escenario',
		question:
			'Pese a que la dirección fija un plazo urgente, una compañía tiene 200 aplicaciones con dependencias complejas y quiere migrar sin asumir un riesgo inasumible. ¿Qué estrategia de adopción es más adecuada?',
		options: [
			'Migrar las 200 aplicaciones en un solo fin de semana para acortar el proyecto.',
			'Agrupar las aplicaciones en olas según sus dependencias y migrarlas por fases.',
			'Empezar por la aplicación más crítica y compleja, sin inventario previo.',
			'Posponer la migración hasta que exista un único servicio que lo haga todo.',
		],
		correctAnswer: 1,
		explanation:
			'La adopción por olas reduce el riesgo: se agrupa por dependencias y se migra por tandas, aprendiendo en cada fase. Un corte único o empezar sin inventario aumentan el riesgo en lugar de controlarlo. Si el requisito fuera mínima interrupción con migración masiva, habría que combinar la adopción por olas con replicación continua.',
		porQueOpcion: [
			'Incorrecta: un corte único de 200 aplicaciones concentra el riesgo en lugar de controlarlo.',
			'Correcta: agrupar por dependencias y migrar por olas reduce el riesgo y permite aprender en cada fase.',
			'Incorrecta: empezar sin inventario por la aplicación más compleja añade riesgo en vez de mitigarlo.',
			'Incorrecta: posponer la migración indefinidamente no es una estrategia y ningún servicio único hace todo.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html',
		],
	},
	{
		id: '1.3-q3',
		taskId: '1.3',
		objetivos: ['1.3#2'],
		tipo: 'servicio',
		question:
			'Antes de migrar, un equipo necesita descubrir qué servidores tiene, qué dependencias existen y cómo se usan. ¿Qué recurso del viaje de migración cubre esa fase?',
		options: [
			'Migration Evaluator, porque estima el ahorro del caso de negocio.',
			'AWS Application Discovery Service, porque inventaría servidores, dependencias y uso.',
			'AWS Schema Conversion Tool (AWS SCT), porque convierte esquemas de bases de datos entre motores distintos.',
			'AWS Database Migration Service (AWS DMS), porque replica bases de datos.',
		],
		correctAnswer: 1,
		explanation:
			'La fase de evaluación necesita inventario y dependencias, que aporta AWS Application Discovery Service. Migration Evaluator estima el caso de negocio, mientras que AWS SCT y AWS DMS actúan más tarde sobre bases de datos. Si el requisito fuera estimar el ahorro del caso de negocio, la herramienta sería Migration Evaluator.',
		porQueOpcion: [
			'Incorrecta: Migration Evaluator estima el ahorro del caso de negocio, no descubre servidores ni dependencias.',
			'Correcta: AWS Application Discovery Service inventaría servidores, dependencias y patrones de uso en la fase de evaluación.',
			'Incorrecta: AWS SCT convierte esquemas entre motores, una tarea posterior sobre bases de datos.',
			'Incorrecta: AWS DMS replica bases de datos en la fase de ejecución, no descubre el entorno.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/application-discovery/',
			'https://docs.aws.amazon.com/SchemaConversionTool/',
			'https://docs.aws.amazon.com/dms/',
			'https://aws.amazon.com/migration-evaluator/',
		],
	},
	{
		id: '1.3-q4',
		taskId: '1.3',
		objetivos: ['1.3#2'],
		tipo: 'conocimiento',
		question: '¿Qué función cumple AWS Migration Hub dentro del viaje de migración?',
		options: [
			'Convertir automáticamente el esquema de una base de datos de un motor a otro distinto.',
			'Seguir el progreso de las migraciones en un solo lugar, entre herramientas y regiones.',
			'Sustituir la necesidad de evaluar el entorno on-premises.',
			'Ejecutar la aplicación en el edge para reducir la latencia.',
		],
		correctAnswer: 1,
		explanation:
			'AWS Migration Hub centraliza el seguimiento del estado de las migraciones. No convierte esquemas (eso corresponde a AWS SCT) ni sustituye la evaluación previa del entorno. Si el requisito fuera convertir el esquema entre motores, la herramienta sería AWS SCT.',
		porQueOpcion: [
			'Incorrecta: convertir esquemas es función de AWS Schema Conversion Tool (AWS SCT), no de Migration Hub.',
			'Correcta: AWS Migration Hub centraliza el seguimiento del estado de las migraciones entre herramientas y regiones.',
			'Incorrecta: Migration Hub no sustituye la evaluación previa del entorno on-premises.',
			'Incorrecta: ejecutar en el edge para reducir latencia es entrega de contenido, no seguimiento de migraciones.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/migrationhub/',
			'https://docs.aws.amazon.com/SchemaConversionTool/',
		],
	},
	{
		id: '1.3-q5',
		taskId: '1.3',
		objetivos: ['1.3#3'],
		tipo: 'comparacion',
		question:
			'Un comité quiere distinguir el AWS Cloud Adoption Framework (AWS CAF) del AWS Well-Architected Framework. ¿Qué afirmación es correcta?',
		options: [
			'El AWS CAF diseña la arquitectura técnica de cada carga y el AWS Well-Architected Framework organiza el cambio de las personas y de los procesos.',
			'El AWS CAF guía la adopción y el cambio organizativo; el AWS Well-Architected Framework guía el diseño técnico de las cargas de trabajo.',
			'Ambos son lo mismo y solo cambian de nombre según el público al que se dirigen.',
			'El AWS CAF se usa solo después de migrar y el AWS Well-Architected Framework solo antes de migrar.',
		],
		correctAnswer: 1,
		explanation:
			'El AWS CAF ordena la adopción con seis perspectivas (Business, People, Governance, Platform, Security y Operations). El AWS Well-Architected Framework evalúa y mejora el diseño técnico de las cargas mediante sus pilares. Si el requisito fuera revisar la arquitectura de una carga concreta, el marco sería el Well-Architected Framework.',
		porQueOpcion: [
			'Incorrecta: invierte los papeles: el CAF no diseña la arquitectura técnica de cada carga.',
			'Correcta: el AWS CAF guía la adopción y el cambio organizativo y el Well-Architected Framework el diseño técnico.',
			'Incorrecta: son marcos distintos con propósitos diferentes, no dos nombres para lo mismo.',
			'Incorrecta: ninguno se limita a antes o después de migrar; ambos acompañan distintas fases.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html',
		],
	},
	{
		id: '1.3-q6',
		taskId: '1.3',
		objetivos: ['1.3#3'],
		tipo: 'escenario',
		question:
			'Una empresa migra a AWS y su dirección pregunta qué beneficios de negocio debe esperar del AWS Cloud Adoption Framework (AWS CAF). ¿Qué respuesta es correcta?',
		options: [
			'Únicamente reducir el coste de la factura mensual de cómputo y de almacenamiento de la organización que migra a AWS.',
			'Elegir el tipo de instancia óptimo para cada aplicación.',
			'Reducir el riesgo empresarial, mejorar el desempeño ESG, aumentar los ingresos y mejorar la eficiencia operativa.',
			'Sustituir la necesidad de un plan de seguridad y cumplimiento.',
		],
		correctAnswer: 2,
		explanation:
			'Los beneficios que persigue el AWS CAF son de negocio: menor riesgo, mejor desempeño ambiental, social y de gobernanza (ESG), más ingresos y más eficiencia operativa. Elegir instancias o solo bajar la factura es una lectura técnica y parcial. Si el requisito fuera elegir el tipo de instancia, sería una decisión de diseño técnico y no un beneficio del AWS CAF.',
		porQueOpcion: [
			'Incorrecta: reducir la factura es un resultado parcial y técnico, no el conjunto de beneficios del AWS CAF.',
			'Incorrecta: elegir el tipo de instancia es una decisión de diseño técnico, no un beneficio de negocio del CAF.',
			'Correcta: el AWS CAF persigue menor riesgo empresarial, mejor desempeño ESG, más ingresos y eficiencia operativa.',
			'Incorrecta: el CAF no sustituye el plan de seguridad ni las obligaciones de cumplimiento.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html',
		],
	},
	{
		id: '1.3-q7',
		taskId: '1.3',
		objetivos: ['1.3#3'],
		tipo: 'conocimiento',
		question: '¿Cómo agrupa el AWS CAF sus componentes?',
		options: [
			'En regiones y zonas de disponibilidad.',
			'En seis perspectivas: Business, People, Governance, Platform, Security y Operations.',
			'En los seis pilares del AWS Well-Architected Framework, que guían el diseño técnico de la carga.',
			'En las «7 R» de migración.',
		],
		correctAnswer: 1,
		explanation:
			'El AWS CAF organiza sus componentes en seis perspectivas: tres de negocio (Business, People y Governance) y tres técnicas (Platform, Security y Operations). Los pilares pertenecen al AWS Well-Architected Framework y las «7 R» son estrategias de migración. Si el escenario pidiera clasificar hallazgos de diseño técnico, se usarían los pilares y no las perspectivas del CAF.',
		porQueOpcion: [
			'Incorrecta: regiones y zonas de disponibilidad son componentes de infraestructura, no la agrupación del CAF.',
			'Correcta: el AWS CAF organiza sus componentes en seis perspectivas de negocio y técnicas.',
			'Incorrecta: los seis pilares pertenecen al AWS Well-Architected Framework, no al CAF.',
			'Incorrecta: las «7 R» son estrategias de migración, no la agrupación de componentes del CAF.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html',
		],
	},
	{
		id: '1.3-q8',
		taskId: '1.3',
		objetivos: ['1.3#4'],
		tipo: 'comparacion',
		question:
			'Un equipo compara dos estrategias de migración para la misma aplicación. ¿Qué diferencia a rehost de replatform?',
		options: [
			'Rehost rediseña por completo la aplicación durante la migración y replatform la mueve sin ningún cambio en su arquitectura.',
			'Rehost mueve la aplicación tal cual a AWS y replatform la migra con ajustes para aprovechar servicios gestionados.',
			'Rehost solo aplica a bases de datos y replatform solo a servidores web.',
			'Rehost y replatform son sinónimos y solo cambia el proveedor de nube.',
		],
		correctAnswer: 1,
		explanation:
			'Rehost (*lift and shift*) traslada la aplicación sin cambios; replatform (*lift, tuck and reshape*) migra con modificaciones acotadas para usar servicios gestionados. El rediseño profundo corresponde a refactor. Si el requisito fuera rediseñar la aplicación por completo, la estrategia sería refactor.',
		porQueOpcion: [
			'Incorrecta: invierte los conceptos: el rediseño profundo corresponde a refactor, no a rehost.',
			'Correcta: rehost traslada la aplicación sin cambios y replatform la migra con ajustes para usar servicios gestionados.',
			'Incorrecta: ninguna de las dos se limita a bases de datos o a servidores web.',
			'Incorrecta: no son sinónimos: difieren en si se modifica o no la aplicación al migrar.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html',
		],
	},
	{
		id: '1.3-q9',
		taskId: '1.3',
		objetivos: ['1.3#4'],
		tipo: 'escenario',
		question:
			'Una empresa debe migrar una base de datos de gran tamaño con apenas unos minutos de parada permitidos. ¿Qué recurso y enfoque son más adecuados?',
		options: [
			'Exportar un volcado completo y cargarlo el día del corte, asumiendo varias horas de indisponibilidad para los usuarios.',
			'Usar AWS Database Migration Service (AWS DMS) con replicación continua y hacer el corte en una ventana breve.',
			'Usar AWS Application Migration Service para rehospedar la base de datos.',
			'Usar Migration Evaluator para replicar los datos en tiempo real.',
		],
		correctAnswer: 1,
		explanation:
			'La replicación continua con AWS DMS mantiene el destino sincronizado y permite un corte corto. Migration Evaluator estima el caso de negocio y AWS Application Migration Service rehospeda servidores, no replica bases de datos. Si el requisito permitiera una parada larga, bastaría con un volcado y una carga, sin replicación continua.',
		porQueOpcion: [
			'Incorrecta: un volcado y una carga completa asumen horas de parada, incompatibles con unos minutos permitidos.',
			'Correcta: AWS DMS con replicación continua mantiene el destino al día y permite un corte breve.',
			'Incorrecta: AWS Application Migration Service rehospeda servidores, no replica bases de datos con corte mínimo.',
			'Incorrecta: Migration Evaluator estima el caso de negocio y no replica datos en tiempo real.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/dms/',
			'https://docs.aws.amazon.com/mgn/',
			'https://aws.amazon.com/migration-evaluator/',
		],
	},
	{
		id: '1.3-q10',
		taskId: '1.3',
		objetivos: ['1.3#4'],
		tipo: 'conocimiento',
		question:
			'Una base de datos va a cambiar de motor al migrar a AWS y su esquema no es compatible. ¿Qué recurso aborda ese problema?',
		options: [
			'AWS Schema Conversion Tool (AWS SCT).',
			'AWS Application Discovery Service para inventariar el entorno local.',
			'AWS Migration Hub.',
			'Migration Evaluator.',
		],
		correctAnswer: 0,
		explanation:
			'AWS SCT convierte esquemas y código de bases de datos entre motores distintos. El descubrimiento, el seguimiento del progreso y la estimación del caso de negocio corresponden a otras herramientas. Si el requisito fuera replicar los datos y no convertir el esquema, la herramienta sería AWS DMS.',
		porQueOpcion: [
			'Correcta: AWS Schema Conversion Tool convierte esquemas y código entre motores distintos cuando no son compatibles.',
			'Incorrecta: Application Discovery Service inventaría el entorno local, pero no convierte esquemas.',
			'Incorrecta: Migration Hub solo hace seguimiento del progreso de las migraciones.',
			'Incorrecta: Migration Evaluator estima el caso de negocio y no convierte esquemas.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/SchemaConversionTool/',
			'https://docs.aws.amazon.com/application-discovery/',
			'https://docs.aws.amazon.com/migrationhub/',
			'https://docs.aws.amazon.com/dms/',
			'https://aws.amazon.com/migration-evaluator/',
		],
	},
	{
		id: '1.3-q11',
		taskId: '1.3',
		objetivos: ['1.3#2'],
		tipo: 'escenario',
		question:
			'Una empresa quiere construir el caso de negocio de su migración y, a la vez, inventariar los servidores locales y sus dependencias antes de planificar. ¿Qué dos recursos del viaje de migración cubren esas necesidades?',
		options: [
			'Migration Evaluator para el caso de negocio y AWS Application Discovery Service para el inventario y las dependencias.',
			'AWS Migration Hub para el caso de negocio y AWS Application Migration Service para el inventario y las dependencias.',
			'AWS Database Migration Service (AWS DMS) para el caso de negocio y Migration Evaluator para el inventario y las dependencias.',
			'AWS Schema Conversion Tool (AWS SCT) para el caso de negocio y AWS Migration Hub para el inventario y las dependencias.',
		],
		correctAnswer: 0,
		explanation:
			'Migration Evaluator estima el ahorro y construye el caso de negocio, mientras que AWS Application Discovery Service recopila el inventario de servidores, aplicaciones y dependencias. Migration Hub hace seguimiento del progreso, y AWS DMS, AWS SCT y AWS Application Migration Service actúan en fases de ejecución, no en la estimación ni el descubrimiento. Si el requisito fuera seguir el avance de varias migraciones a la vez, la respuesta sería AWS Migration Hub.',
		porQueOpcion: [
			'Correcta: Migration Evaluator construye el caso de negocio y Application Discovery Service recopila inventario y dependencias.',
			'Incorrecta: Migration Hub hace seguimiento y Application Migration Service rehospeda servidores; no cubren esas fases.',
			'Incorrecta: AWS DMS replica datos y Migration Evaluator estima el negocio, no inventaría dependencias.',
			'Incorrecta: AWS SCT convierte esquemas y Migration Hub sigue el progreso, no estima ni inventaría.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/application-discovery/',
			'https://docs.aws.amazon.com/migrationhub/',
			'https://docs.aws.amazon.com/mgn/',
			'https://docs.aws.amazon.com/dms/',
			'https://docs.aws.amazon.com/SchemaConversionTool/',
			'https://aws.amazon.com/migration-evaluator/',
		],
	},
];
