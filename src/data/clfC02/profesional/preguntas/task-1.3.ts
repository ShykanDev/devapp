import type { PreguntaProfesionalClfC02 } from '@/data/clfC02/profesional/types';

export const profesionalTask13: PreguntaProfesionalClfC02[] = [
	{
		id: 'prof-1.3-q1',
		taskId: '1.3',
		objetivos: ['1.3#1'],
		tipo: 'comparacion',
		question:
			'Una empresa traslada sus servidores tal cual a Amazon EC2 para salir del centro de datos cuanto antes y planea modernizar más tarde. ¿Qué estrategia de adopción aplica?',
		options: [
			'Rehost (lift and shift).',
			'Refactor (re-architect).',
			'Repurchase (drop and shop).',
			'Retire.',
		],
		correctAnswer: 0,
		explanation:
			'Rehost consiste en mover las cargas tal cual a la nube con cambios mínimos, que es lo descrito. Refactor implica rediseñar, repurchase sustituir por otro producto y retire apagar y eliminar lo que ya no se necesita.',
		porQueOpcion: [
			'Correcta: mover los servidores sin cambios es rehost.',
			'Incorrecta: refactor implica rediseñar y modernizar ahora, no después.',
			'Incorrecta: repurchase es cambiar de producto, no trasladar los mismos servidores.',
			'Incorrecta: retire supone apagar y eliminar la carga, no migrarla.',
		],
	},
	{
		id: 'prof-1.3-q2',
		taskId: '1.3',
		objetivos: ['1.3#1'],
		tipo: 'escenario',
		question:
			'Una empresa mueve su base de datos de un servidor propio a Amazon RDS con cambios mínimos en la aplicación. ¿Qué estrategia describe mejor esta decisión?',
		options: [
			'Replatform (lift, tinker and shift), porque adopta un servicio gestionado con cambios mínimos.',
			'Rehost, porque mantiene la base de datos exactamente igual.',
			'Refactor, porque rediseña la arquitectura de la aplicación.',
			'Repurchase, porque cambia a un producto completamente distinto.',
		],
		correctAnswer: 0,
		explanation:
			'Pasar a un servicio gestionado como Amazon RDS con ajustes mínimos es replatform. No es rehost puro porque cambia la forma de operar la base de datos, ni refactor porque no se rediseña la aplicación, ni repurchase porque no se adopta otro producto.',
		porQueOpcion: [
			'Correcta: adoptar un servicio gestionado con cambios mínimos es replatform.',
			'Incorrecta: rehost mantendría la base de datos en su forma original, sin servicio gestionado.',
			'Incorrecta: refactor exige rediseñar la aplicación, no solo cambiar el alojamiento.',
			'Incorrecta: repurchase implicaría sustituir el software por otro producto distinto.',
		],
	},
	{
		id: 'prof-1.3-q3',
		taskId: '1.3',
		objetivos: ['1.3#2'],
		tipo: 'servicio',
		question:
			'Antes de migrar, una empresa necesita inventariar los servidores y aplicaciones locales y sus dependencias. ¿Qué recurso apoya esa fase?',
		options: [
			'AWS Application Discovery Service.',
			'AWS Application Migration Service.',
			'AWS Database Migration Service (AWS DMS).',
			'AWS Schema Conversion Tool (AWS SCT).',
		],
		correctAnswer: 0,
		explanation:
			'AWS Application Discovery Service recopila el inventario de servidores y aplicaciones locales y sus dependencias, dato clave para planificar la migración. Los demás servicios ejecutan la migración o convierten esquemas, no descubren el entorno.',
		porQueOpcion: [
			'Correcta: descubre e inventaría servidores, aplicaciones y dependencias.',
			'Incorrecta: Application Migration Service ejecuta la migración de servidores, no el inventario.',
			'Incorrecta: AWS DMS replica datos entre bases de datos, no inventaría servidores.',
			'Incorrecta: AWS SCT convierte esquemas de bases de datos, no descubre el entorno local.',
		],
	},
	{
		id: 'prof-1.3-q4',
		taskId: '1.3',
		objetivos: ['1.3#2'],
		tipo: 'comparacion',
		question: '¿Qué distingue a AWS Migration Hub de AWS Application Migration Service?',
		options: [
			'AWS Migration Hub centraliza el seguimiento de las migraciones; AWS Application Migration Service ejecuta la migración de servidores a AWS.',
			'AWS Migration Hub ejecuta la migración de bases de datos; AWS Application Migration Service solo la planifica.',
			'Ambos son herramientas de conversión de esquemas de bases de datos.',
			'AWS Migration Hub descubre dependencias y AWS Application Migration Service las documenta.',
		],
		correctAnswer: 0,
		explanation:
			'AWS Migration Hub ofrece una vista central del progreso de las migraciones, mientras que AWS Application Migration Service realiza la migración de servidores. No son herramientas de conversión de esquemas ni de descubrimiento.',
		porQueOpcion: [
			'Correcta: Migration Hub hace seguimiento y Application Migration Service migra servidores.',
			'Incorrecta: Migration Hub no migra bases de datos; sirve para el seguimiento.',
			'Incorrecta: la conversión de esquemas corresponde a AWS SCT, no a estos servicios.',
			'Incorrecta: el descubrimiento corresponde a AWS Application Discovery Service.',
		],
	},
	{
		id: 'prof-1.3-q5',
		taskId: '1.3',
		objetivos: ['1.3#3'],
		tipo: 'trampa',
		question: '¿Qué es el AWS Cloud Adoption Framework (AWS CAF)?',
		options: [
			'Un marco de orientación que organiza la adopción de la nube en perspectivas y capacidades para alinear negocio y tecnología.',
			'Un servicio que migra automáticamente las bases de datos a AWS.',
			'Una calculadora que estima el coste de la migración de un centro de datos.',
			'Un contrato de soporte que AWS exige para adoptar la nube.',
		],
		correctAnswer: 0,
		explanation:
			'El AWS CAF es un marco de orientación que estructura la adopción de la nube en perspectivas y capacidades, alineando las áreas de negocio y tecnología. No migra datos, no calcula costes y no es un contrato de soporte.',
		porQueOpcion: [
			'Correcta: el CAF organiza la adopción en perspectivas y capacidades.',
			'Incorrecta: la migración de bases de datos es tarea de AWS DMS.',
			'Incorrecta: la estimación de costes corresponde a Migration Evaluator, no al CAF.',
			'Incorrecta: el CAF es una guía, no un contrato de soporte obligatorio.',
		],
	},
	{
		id: 'prof-1.3-q6',
		taskId: '1.3',
		objetivos: ['1.3#3'],
		tipo: 'comparacion',
		question:
			'El AWS CAF organiza la adopción en perspectivas como negocio, personas, gobernanza, plataforma, seguridad y operaciones. ¿Qué son entonces reducir el riesgo empresarial o mejorar la eficiencia operativa?',
		options: [
			'Resultados esperados que la adopción de la nube busca según el CAF, no perspectivas ni servicios.',
			'Perspectivas adicionales que se suman a las seis anteriores.',
			'Servicios de AWS que se activan al completar la adopción.',
			'Pilares del AWS Well-Architected Framework.',
		],
		correctAnswer: 0,
		explanation:
			'Reducir el riesgo empresarial o mejorar la eficiencia operativa son resultados de negocio que la adopción persigue según el CAF. No son perspectivas del marco, ni servicios de AWS, ni pilares del Well-Architected Framework.',
		porQueOpcion: [
			'Correcta: son resultados de negocio esperados de la adopción.',
			'Incorrecta: no son perspectivas; las perspectivas son negocio, personas, gobernanza, plataforma, seguridad y operaciones.',
			'Incorrecta: no son servicios que se activen al terminar la adopción.',
			'Incorrecta: los pilares del Well-Architected Framework son otros (fiabilidad, seguridad, etc.).',
		],
	},
	{
		id: 'prof-1.3-q7',
		taskId: '1.3',
		objetivos: ['1.3#4'],
		tipo: 'servicio',
		question:
			'Una empresa debe migrar una base de datos de Oracle a Amazon Aurora y el esquema necesita conversión. ¿Qué combinación de herramientas es correcta?',
		options: [
			'AWS Schema Conversion Tool (AWS SCT) para convertir el esquema y AWS Database Migration Service (AWS DMS) para replicar los datos.',
			'AWS Database Migration Service (AWS DMS) para convertir el esquema y AWS Schema Conversion Tool (AWS SCT) para replicar los datos.',
			'AWS Application Migration Service para convertir el esquema y replicar los datos.',
			'AWS Migration Hub para convertir el esquema y Migration Evaluator para replicar los datos.',
		],
		correctAnswer: 0,
		explanation:
			'AWS SCT convierte el esquema y el código de base de datos entre motores, y AWS DMS replica los datos con cambios mínimos de disponibilidad. Invertir sus funciones o usar herramientas de migración de servidores y planificación no resuelve la conversión.',
		porQueOpcion: [
			'Correcta: AWS SCT convierte el esquema y AWS DMS replica los datos.',
			'Incorrecta: invierte los papeles de AWS DMS y AWS SCT.',
			'Incorrecta: AWS Application Migration Service migra servidores, no convierte esquemas de bases de datos.',
			'Incorrecta: Migration Hub hace seguimiento y Migration Evaluator calcula costes; ninguno convierte esquemas.',
		],
	},
	{
		id: 'prof-1.3-q8',
		taskId: '1.3',
		objetivos: ['1.3#4'],
		tipo: 'escenario',
		question:
			'Una aplicación no puede migrarse todavía por requisitos de cumplimiento, aunque el resto del entorno sí se migra. ¿Qué estrategia corresponde a dejarla temporalmente en local?',
		options: [
			'Retain, manteniéndola en el entorno actual mientras el resto migra.',
			'Retire, porque se apaga y se elimina del inventario.',
			'Rehost, porque se traslada tal cual a AWS.',
			'Repurchase, porque se sustituye por otro producto.',
		],
		correctAnswer: 0,
		explanation:
			'Retain es la estrategia de mantener una carga en su entorno actual, al menos temporalmente, cuando no conviene o no se puede migrar. Retire la eliminaría, rehost la movería a AWS y repurchase la cambiaría por otro producto.',
		porQueOpcion: [
			'Correcta: retain mantiene la carga en local mientras el resto migra.',
			'Incorrecta: retire implica apagarla y eliminarla, no conservarla.',
			'Incorrecta: rehost la migraría a AWS, que es justo lo que no se puede aún.',
			'Incorrecta: repurchase la sustituiría por otro producto, no la dejaría en local.',
		],
	},
];
