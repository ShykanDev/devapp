import type { PreguntaProfesionalClfC02 } from '@/data/clfC02/profesional/types';

export const profesionalTask34: PreguntaProfesionalClfC02[] = [
	{
		id: 'prof-3.4-q1',
		taskId: '3.4',
		objetivos: ['3.4#1'],
		tipo: 'multiConcepto',
		question: '¿Qué afirmación describe correctamente las categorías de bases de datos de AWS?',
		options: [
			'Amazon RDS y Amazon Aurora son relacionales, Amazon DynamoDB es NoSQL y Amazon ElastiCache es una base en memoria.',
			'Todas las bases de datos de AWS son relacionales; solo cambia el tamaño de la instancia.',
			'Amazon DynamoDB es relacional y Amazon Aurora es NoSQL de clave-valor.',
			'Amazon ElastiCache es una base relacional persistente y Amazon RDS una caché en memoria.',
		],
		correctAnswer: 0,
		explanation:
			'AWS organiza sus bases por modelo de dato: relacionales gestionadas (Amazon RDS, Amazon Aurora), NoSQL (Amazon DynamoDB, Amazon DocumentDB, Amazon Neptune) y en memoria para caché (Amazon ElastiCache), además de almacenes analíticos como Amazon Redshift.',
		porQueOpcion: [
			'Correcta: asigna cada servicio a su categoría.',
			'Incorrecto: AWS ofrece varios modelos, no solo relacional.',
			'Incorrecto: invierte las categorías de ambos servicios.',
			'Incorrecto: intercambia el papel de la caché y el de la base relacional.',
		],
	},
	{
		id: 'prof-3.4-q2',
		taskId: '3.4',
		objetivos: ['3.4#3'],
		tipo: 'tradeoff',
		question:
			'Una empresa necesita controlar el sistema operativo y los parámetros del motor de base de datos, aunque asuma su operación. ¿Qué opción encaja y con qué contrapartida?',
		options: [
			'Alojar la base en Amazon EC2, ganando control total a cambio de administrar parches, copias de seguridad y alta disponibilidad.',
			'Usar Amazon RDS, que permite controlar el sistema operativo sin administración.',
			'Usar Amazon DynamoDB, que da acceso al sistema operativo subyacente.',
			'Usar Amazon ElastiCache, que permite administrar el motor relacional.',
		],
		correctAnswer: 0,
		explanation:
			'El control del sistema operativo y del motor solo se obtiene alojando la base en Amazon EC2, pero entonces el equipo asume la operación que un servicio gestionado realiza por él: parches, copias, escalado y alta disponibilidad.',
		porQueOpcion: [
			'Correcta: identifica la opción de control y su coste operativo.',
			'Incorrecto: Amazon RDS es gestionado y no da control del sistema operativo.',
			'Incorrecto: Amazon DynamoDB es NoSQL gestionado, sin sistema operativo visible.',
			'Incorrecto: Amazon ElastiCache es una caché en memoria, no un motor relacional administrable.',
		],
	},
	{
		id: 'prof-3.4-q3',
		taskId: '3.4',
		objetivos: ['3.4#4'],
		tipo: 'escenario',
		question:
			'Una aplicación transaccional necesita un motor relacional compatible con MySQL, con alta disponibilidad y réplicas de lectura, y el mínimo de administración. ¿Qué servicio encaja mejor?',
		options: [
			'Amazon Aurora, porque es un motor relacional gestionado y compatible con MySQL y PostgreSQL.',
			'Amazon DynamoDB, porque es una base NoSQL de clave-valor.',
			'Amazon ElastiCache, porque guarda los datos en memoria.',
			'Una base autoinstalada en Amazon EC2 para evitar dependencias gestionadas.',
		],
		correctAnswer: 0,
		explanation:
			'Amazon Aurora cubre el modelo relacional con compatibilidad MySQL y PostgreSQL, replicación integrada, réplicas de lectura y alta disponibilidad sin administrar el sistema operativo. Amazon DynamoDB no es relacional y Amazon ElastiCache no es una base persistente.',
		porQueOpcion: [
			'Correcta: cubre compatibilidad relacional, alta disponibilidad y baja administración.',
			'Incorrecto: Amazon DynamoDB no usa el modelo relacional ni SQL tradicional.',
			'Incorrecto: Amazon ElastiCache es una caché, no la base transaccional principal.',
			'Incorrecto: autoinstalar en Amazon EC2 añade precisamente la administración que se quiere evitar.',
		],
	},
	{
		id: 'prof-3.4-q4',
		taskId: '3.4',
		objetivos: ['3.4#5'],
		tipo: 'comparacion',
		question: 'Un equipo compara Amazon RDS con Amazon DynamoDB. ¿Qué afirmación los distingue correctamente?',
		options: [
			'Amazon RDS es relacional y se consulta con SQL; Amazon DynamoDB es NoSQL, sin esquema fijo y con escalado horizontal gestionado.',
			'Amazon RDS es NoSQL y Amazon DynamoDB es relacional con SQL.',
			'Ambos son relacionales y solo se diferencian en la Región donde se despliegan.',
			'Amazon DynamoDB exige administrar el sistema operativo de las instancias.',
		],
		correctAnswer: 0,
		explanation:
			'Amazon RDS aloja motores relacionales con tablas, esquema y SQL. Amazon DynamoDB es NoSQL de clave-valor y documento, sin esquema fijo, totalmente gestionado y con escalado horizontal de latencia de milisegundos.',
		porQueOpcion: [
			'Correcta: contrapone el modelo relacional con el NoSQL gestionado.',
			'Incorrecto: invierte los modelos de ambos servicios.',
			'Incorrecto: la diferencia es el modelo de datos, no la Región.',
			'Incorrecto: Amazon DynamoDB no expone servidores ni sistema operativo que administrar.',
		],
	},
	{
		id: 'prof-3.4-q5',
		taskId: '3.4',
		objetivos: ['3.4#6'],
		tipo: 'servicio',
		question:
			'Una aplicación repite las mismas consultas a una base relacional y necesita latencias muy bajas en esas lecturas. ¿Qué servicio añadirías y por qué?',
		options: [
			'Amazon ElastiCache, porque almacena en memoria los datos más consultados como caché.',
			'Amazon DynamoDB, porque sustituye a la base relacional manteniendo SQL.',
			'AWS Database Migration Service (AWS DMS), porque replica los datos en memoria automáticamente.',
			'Amazon S3, porque sirve las consultas con latencia de milisegundos.',
		],
		correctAnswer: 0,
		explanation:
			'Cuando se repiten las mismas lecturas, Amazon ElastiCache las sirve desde memoria y descarga a la base principal, reduciendo latencia y coste. Amazon DynamoDB no conserva el modelo relacional, AWS DMS migra datos y Amazon S3 no es una base de datos.',
		porQueOpcion: [
			'Correcta: la caché en memoria ataca directamente las lecturas repetidas.',
			'Incorrecto: Amazon DynamoDB cambia el modelo de datos y no conserva SQL.',
			'Incorrecto: AWS DMS migra datos entre orígenes y destinos, no acelera lecturas.',
			'Incorrecto: Amazon S3 es almacenamiento de objetos, no un motor de consultas relacional.',
		],
	},
	{
		id: 'prof-3.4-q6',
		taskId: '3.4',
		objetivos: ['3.4#2', '3.4#7'],
		tipo: 'escenario',
		question:
			'Una empresa migra de un motor comercial a Amazon Aurora. ¿Cómo se combinan AWS Schema Conversion Tool (AWS SCT) y AWS Database Migration Service (AWS DMS)?',
		options: [
			'AWS SCT convierte el esquema y el código al nuevo motor, y AWS DMS replica los datos hacia el destino.',
			'AWS DMS convierte el esquema y AWS SCT mueve los datos.',
			'AWS SCT replica los datos y AWS DMS solo supervisa la migración.',
			'Ambas herramientas solo funcionan entre bases del mismo motor.',
		],
		correctAnswer: 0,
		explanation:
			'En una migración heterogénea primero se transforma el esquema y el código con AWS SCT y después se replica el dato con AWS DMS, que admite replicación continua para reducir el corte de servicio.',
		porQueOpcion: [
			'Correcta: reparte las tareas entre conversión de esquema y movimiento de datos.',
			'Incorrecto: invierte las funciones de ambas herramientas.',
			'Incorrecto: AWS SCT no replica datos y AWS DMS no se limita a supervisar.',
			'Incorrecto: AWS SCT se usa precisamente cuando el motor de destino es distinto.',
		],
	},
];
