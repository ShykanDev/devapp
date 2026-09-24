import type { ParConfusionClfC02 } from '@/data/clfC02/types';

export const paresTask34: ParConfusionClfC02[] = [
	{
		id: 'rds-vs-aurora-vs-dynamodb',
		etiqueta: 'Bases relacionales gestionadas vs Amazon DynamoDB',
		a: {
			titulo: 'Amazon RDS y Amazon Aurora (relacional)',
			resumen:
				'Amazon RDS ejecuta motores relacionales conocidos (MySQL, PostgreSQL, MariaDB, Oracle, SQL Server) de forma gestionada, y Amazon Aurora es el motor relacional de AWS compatible con MySQL y PostgreSQL, con almacenamiento distribuido y réplicas de lectura. Ambos se consultan con SQL y guardan los datos en tablas con esquema fijo.',
		},
		b: {
			titulo: 'Amazon DynamoDB (NoSQL)',
			resumen:
				'Base NoSQL gestionada de clave-valor y documento, sin esquema fijo y con escalado horizontal. No usa SQL tradicional; se accede por clave y ofrece latencia de milisegundos.',
		},
		diferenciaClave:
			'La elección es de **modelo de dato**, no de tamaño: si hay relaciones y SQL, Amazon RDS o Amazon Aurora; si el acceso es por clave con escala impredecible, Amazon DynamoDB. Aurora y RDS comparten el modelo relacional y se diferencian sobre todo por rendimiento y compatibilidad de motor.',
		cuandoA: [
			'Cuando el dato es transaccional, tiene relaciones claras y necesitas consultas SQL con integridad referencial.',
			'Cuando quieres motores conocidos (Amazon RDS) o un motor relacional de alto rendimiento compatible con MySQL o PostgreSQL (Amazon Aurora).',
		],
		cuandoB: [
			'Cuando el acceso es por clave, el volumen crece de forma impredecible y no quieres administrar servidores.',
			'Cuando un esquema fijo y las transacciones relacionales no son requisitos del caso de uso.',
		],
		escenarioA:
			'Un sistema de facturación con clientes, facturas y líneas necesita transacciones y consultas relacionales; se apoya en Amazon Aurora para tener réplicas de lectura y alta disponibilidad sin administrar el motor.',
		escenarioB:
			'Una aplicación de sesiones y perfiles con millones de usuarios lee y escribe por clave con tráfico variable; usa Amazon DynamoDB para escalar sin administrar servidores.',
		preguntaIds: ['3.4-q5'],
		objetivos: ['3.4#4', '3.4#5'],
	},
	{
		id: 'relacional-vs-nosql-vs-memoria',
		etiqueta: 'Persistencia relacional y NoSQL vs base en memoria',
		a: {
			titulo: 'Relacional y NoSQL (persistencia)',
			resumen:
				'Amazon RDS y Amazon Aurora (relacionales) y Amazon DynamoDB (NoSQL) son la **fuente de verdad**: los datos persisten en disco y sobreviven a reinicios. Cambian el modelo y la forma de consultar, no su papel de almacenamiento duradero.',
		},
		b: {
			titulo: 'En memoria (Amazon ElastiCache)',
			resumen:
				'Amazon ElastiCache mantiene los datos en RAM para dar latencias muy bajas y se usa como **caché** delante de una base persistente. Acelera lecturas repetidas; no es el lugar donde debe vivir el dato crítico.',
		},
		diferenciaClave:
			'El eje no es relacional frente a NoSQL, sino **persistencia frente a aceleración**: relacional y NoSQL guardan el dato de forma duradera; la base en memoria lo mantiene temporalmente para responder más rápido.',
		cuandoA: [
			'Cuando necesitas que los datos sobrevivan a reinicios y sean la fuente de verdad de la aplicación.',
			'Cuando el modelo del dato exige relaciones y SQL o, por el contrario, acceso por clave con escala horizontal.',
		],
		cuandoB: [
			'Cuando las mismas lecturas se repiten y la latencia de la base es el cuello de botella.',
			'Cuando quieres descargar de trabajo a la base principal sin cambiar el modelo de datos.',
		],
		escenarioA:
			'Una tienda en línea guarda pedidos en Amazon Aurora y su catálogo de productos en Amazon DynamoDB; ambos datos deben persistir aunque el servicio se reinicie.',
		escenarioB:
			'La misma tienda coloca Amazon ElastiCache delante de las consultas más repetidas del catálogo para reducir la latencia y la carga sobre la base principal.',
		preguntaIds: ['3.4-q9'],
		objetivos: ['3.4#4', '3.4#5', '3.4#6'],
	},
	{
		id: 'dms-vs-sct',
		etiqueta: 'AWS DMS vs AWS SCT',
		a: {
			titulo: 'AWS Database Migration Service (AWS DMS)',
			resumen:
				'Mueve y **replica los datos** entre un origen y un destino, con soporte de motores distintos y replicación continua. Reduce el tiempo de inactividad porque el destino se mantiene sincronizado hasta el corte.',
		},
		b: {
			titulo: 'AWS Schema Conversion Tool (AWS SCT)',
			resumen:
				'Convierte el **esquema y el código** de la base de datos (tablas, procedimientos, vistas) de un motor a otro. Es la pieza que resuelve la incompatibilidad en las migraciones heterogéneas.',
		},
		diferenciaClave:
			'Uno mueve **datos** y el otro convierte **estructura y código**. La forma de recordarlo: AWS SCT trabaja con el esquema y AWS DMS con la réplica de los datos.',
		cuandoA: [
			'Cuando necesitas copiar o replicar los datos hacia el destino con el mínimo tiempo de inactividad.',
			'Cuando el origen y el destino son motores distintos y quieres una sincronización continua durante la migración.',
		],
		cuandoB: [
			'Cuando el motor de destino no es compatible con el de origen y hay que convertir esquema, procedimientos y vistas.',
			'Cuando preparas una migración heterogénea antes de empezar a mover los datos.',
		],
		escenarioA:
			'Una empresa sincroniza de forma continua su base local con el destino en AWS mientras la aplicación sigue operativa, y hace el corte cuando la réplica está al día.',
		escenarioB:
			'Antes de mover nada, el equipo convierte las tablas y los procedimientos almacenados de Oracle al dialecto de PostgreSQL para que la aplicación funcione en el destino.',
		preguntaIds: ['3.4-q13'],
		objetivos: ['3.4#2', '3.4#7'],
	},
];
