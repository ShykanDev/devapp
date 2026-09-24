import type { PreguntaClfC02 } from '@/data/clfC02/types';

export const preguntasTask13: PreguntaClfC02[] = [
	{
		id: '1.3-q1',
		taskId: '1.3',
		objetivos: ['1.3#1'],
		tipo: 'conocimiento',
		question: '¿Qué describe mejor una estrategia de adopción de la nube?',
		options: [
			'Contratar el mayor número posible de servicios de AWS en el menor tiempo.',
			'Decidir cómo y en qué orden la organización lleva sus cargas a la nube, alineando el cambio con objetivos de negocio.',
			'Copiar los servidores actuales a AWS sin modificar procesos ni formación.',
			'Sustituir todo el personal de operaciones por servicios gestionados.',
		],
		correctAnswer: 1,
		explanation:
			'Una estrategia de adopción define el cómo y el orden (por ejemplo, por olas o con enfoque cloud-first) y conecta la migración con resultados de negocio. No consiste en contratar servicios ni en un simple traslado técnico.',
	},
	{
		id: '1.3-q2',
		taskId: '1.3',
		objetivos: ['1.3#1'],
		tipo: 'escenario',
		question:
			'Una compañía tiene 200 aplicaciones con dependencias complejas y quiere migrar sin asumir un riesgo inasumible. ¿Qué estrategia de adopción es más adecuada?',
		options: [
			'Migrar las 200 aplicaciones en un solo fin de semana para acortar el proyecto.',
			'Agrupar las aplicaciones en olas según sus dependencias y migrarlas por fases.',
			'Empezar por la aplicación más crítica y compleja, sin inventario previo.',
			'Posponer la migración hasta que exista un único servicio que lo haga todo.',
		],
		correctAnswer: 1,
		explanation:
			'La adopción por olas reduce el riesgo: se agrupa por dependencias y se migra por tandas, aprendiendo en cada fase. Un corte único o empezar sin inventario aumentan el riesgo en lugar de controlarlo.',
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
			'AWS Schema Conversion Tool (AWS SCT), porque convierte esquemas de bases de datos.',
			'AWS Database Migration Service (AWS DMS), porque replica bases de datos.',
		],
		correctAnswer: 1,
		explanation:
			'La fase de evaluación necesita inventario y dependencias, que aporta AWS Application Discovery Service. Migration Evaluator estima el caso de negocio, mientras que AWS SCT y AWS DMS actúan más tarde sobre bases de datos.',
	},
	{
		id: '1.3-q4',
		taskId: '1.3',
		objetivos: ['1.3#2'],
		tipo: 'conocimiento',
		question: '¿Qué función cumple AWS Migration Hub dentro del viaje de migración?',
		options: [
			'Convertir el esquema de una base de datos de un motor a otro.',
			'Seguir el progreso de las migraciones en un solo lugar, entre herramientas y regiones.',
			'Sustituir la necesidad de evaluar el entorno on-premises.',
			'Ejecutar la aplicación en el edge para reducir la latencia.',
		],
		correctAnswer: 1,
		explanation:
			'AWS Migration Hub centraliza el seguimiento del estado de las migraciones. No convierte esquemas (eso corresponde a AWS SCT) ni sustituye la evaluación previa del entorno.',
	},
	{
		id: '1.3-q5',
		taskId: '1.3',
		objetivos: ['1.3#3'],
		tipo: 'comparacion',
		question:
			'Un comité quiere distinguir el AWS Cloud Adoption Framework (AWS CAF) del AWS Well-Architected Framework. ¿Qué afirmación es correcta?',
		options: [
			'El AWS CAF diseña la arquitectura técnica de cada carga y el AWS Well-Architected Framework organiza el cambio de las personas.',
			'El AWS CAF guía la adopción y el cambio organizativo; el AWS Well-Architected Framework guía el diseño técnico de las cargas de trabajo.',
			'Ambos son lo mismo y solo cambian de nombre según el público al que se dirigen.',
			'El AWS CAF se usa solo después de migrar y el AWS Well-Architected Framework solo antes de migrar.',
		],
		correctAnswer: 1,
		explanation:
			'El AWS CAF ordena la adopción con seis perspectivas (Business, People, Governance, Platform, Security y Operations). El AWS Well-Architected Framework evalúa y mejora el diseño técnico de las cargas mediante sus pilares.',
	},
	{
		id: '1.3-q6',
		taskId: '1.3',
		objetivos: ['1.3#3'],
		tipo: 'escenario',
		question:
			'Una empresa migra a AWS y su dirección pregunta qué beneficios de negocio debe esperar del AWS Cloud Adoption Framework (AWS CAF). ¿Qué respuesta es correcta?',
		options: [
			'Únicamente reducir el coste de la factura mensual de cómputo.',
			'Elegir el tipo de instancia óptimo para cada aplicación.',
			'Reducir el riesgo empresarial, mejorar el desempeño ESG, aumentar los ingresos y mejorar la eficiencia operativa.',
			'Sustituir la necesidad de un plan de seguridad y cumplimiento.',
		],
		correctAnswer: 2,
		explanation:
			'Los beneficios que persigue el AWS CAF son de negocio: menor riesgo, mejor desempeño ambiental, social y de gobernanza (ESG), más ingresos y más eficiencia operativa. Elegir instancias o solo bajar la factura es una lectura técnica y parcial.',
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
			'En los seis pilares del AWS Well-Architected Framework.',
			'En las «7 R» de migración.',
		],
		correctAnswer: 1,
		explanation:
			'El AWS CAF organiza sus componentes en seis perspectivas: tres de negocio (Business, People y Governance) y tres técnicas (Platform, Security y Operations). Los pilares pertenecen al AWS Well-Architected Framework y las «7 R» son estrategias de migración.',
	},
	{
		id: '1.3-q8',
		taskId: '1.3',
		objetivos: ['1.3#4'],
		tipo: 'comparacion',
		question:
			'Un equipo compara dos estrategias de migración para la misma aplicación. ¿Qué diferencia a rehost de replatform?',
		options: [
			'Rehost rediseña por completo la aplicación y replatform la mueve sin cambios.',
			'Rehost mueve la aplicación tal cual a AWS y replatform la migra con ajustes para aprovechar servicios gestionados.',
			'Rehost solo aplica a bases de datos y replatform solo a servidores web.',
			'Rehost y replatform son sinónimos y solo cambia el proveedor de nube.',
		],
		correctAnswer: 1,
		explanation:
			'Rehost (*lift and shift*) traslada la aplicación sin cambios; replatform (*lift, tuck and reshape*) migra con modificaciones acotadas para usar servicios gestionados. El rediseño profundo corresponde a refactor.',
	},
	{
		id: '1.3-q9',
		taskId: '1.3',
		objetivos: ['1.3#4'],
		tipo: 'escenario',
		question:
			'Una empresa debe migrar una base de datos de gran tamaño con apenas unos minutos de parada permitidos. ¿Qué recurso y enfoque son más adecuados?',
		options: [
			'Exportar un volcado y cargarlo el día del corte, asumiendo horas de indisponibilidad.',
			'Usar AWS Database Migration Service (AWS DMS) con replicación continua y hacer el corte en una ventana breve.',
			'Usar AWS Application Migration Service para rehospedar la base de datos.',
			'Usar Migration Evaluator para replicar los datos en tiempo real.',
		],
		correctAnswer: 1,
		explanation:
			'La replicación continua con AWS DMS mantiene el destino sincronizado y permite un corte corto. Migration Evaluator estima el caso de negocio y AWS Application Migration Service rehospeda servidores, no replica bases de datos.',
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
			'AWS Application Discovery Service.',
			'AWS Migration Hub.',
			'Migration Evaluator.',
		],
		correctAnswer: 0,
		explanation:
			'AWS SCT convierte esquemas y código de bases de datos entre motores distintos. El descubrimiento, el seguimiento del progreso y la estimación del caso de negocio corresponden a otras herramientas.',
	},
];
