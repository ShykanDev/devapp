import type { PreguntaProfesionalClfC02 } from '@/data/clfC02/profesional/types';

export const profesionalTask34: PreguntaProfesionalClfC02[] = [
	{
		id: 'prof-3.4-q1',
		taskId: '3.4',
		objetivos: ['3.4#1'],
		tipo: 'multiConcepto',
		question:
			'Un equipo cree que todas las bases de datos gestionadas de AWS son relacionales y desconoce que existen varios modelos de datos. ¿Qué afirmación corrige ese error?',
		options: [
			'Amazon RDS y Amazon Aurora son relacionales, Amazon DynamoDB es NoSQL y Amazon ElastiCache es una base en memoria.',
			'Todas las bases de datos de AWS son relacionales y solo cambia el tamaño de la instancia contratada, sin otras categorías relevantes.',
			'Amazon DynamoDB es relacional y Amazon Aurora es NoSQL de clave-valor.',
			'Amazon ElastiCache es una base relacional persistente y Amazon RDS una caché en memoria.',
		],
		correctAnswer: 0,
		explanation:
			'AWS organiza sus bases por modelo de dato: relacionales gestionadas (Amazon RDS, Amazon Aurora), NoSQL (Amazon DynamoDB, Amazon DocumentDB, Amazon Neptune) y en memoria para caché (Amazon ElastiCache), además de almacenes analíticos como Amazon Redshift. Reducir todo a relacional o intercambiar los papeles de caché y base persistente es el error típico. Si cambia el requisito a un almacén analítico, la categoría sería un almacén columnar como Amazon Redshift.',
		porQueOpcion: [
			'Correcta: asigna cada servicio a su categoría.',
			'Incorrecto: AWS ofrece varios modelos, no solo relacional.',
			'Incorrecto: invierte las categorías de ambos servicios.',
			'Incorrecto: intercambia el papel de la caché y el de la base relacional.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/rds/',
			'https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html',
			'https://docs.aws.amazon.com/dynamodb/',
			'https://docs.aws.amazon.com/elasticache/',
			'https://docs.aws.amazon.com/documentdb/',
			'https://docs.aws.amazon.com/neptune/',
			'https://docs.aws.amazon.com/redshift/',
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
			'Usar Amazon RDS, que permite controlar el sistema operativo subyacente sin necesidad de administración por parte del equipo responsable.',
			'Usar Amazon DynamoDB, que da acceso al sistema operativo subyacente.',
			'Usar Amazon ElastiCache, que permite administrar el motor relacional.',
		],
		correctAnswer: 0,
		explanation:
			'El control del sistema operativo y del motor solo se obtiene alojando la base en Amazon EC2, pero entonces el equipo asume la operación que un servicio gestionado realiza por él: parches, copias, escalado y alta disponibilidad. Amazon RDS es gestionado y no da control del sistema operativo; DynamoDB no lo expone; y ElastiCache es una caché, no un motor administrable. Si el requisito cambiara a minimizar la administración, la respuesta sería un servicio gestionado.',
		porQueOpcion: [
			'Correcta: identifica la opción de control y su coste operativo.',
			'Incorrecto: Amazon RDS es gestionado y no da control del sistema operativo.',
			'Incorrecto: Amazon DynamoDB es NoSQL gestionado, sin sistema operativo visible.',
			'Incorrecto: Amazon ElastiCache es una caché en memoria, no un motor relacional administrable.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/ec2/',
			'https://docs.aws.amazon.com/rds/',
			'https://docs.aws.amazon.com/dynamodb/',
			'https://docs.aws.amazon.com/elasticache/',
		],
	},
	{
		id: 'prof-3.4-q3',
		taskId: '3.4',
		objetivos: ['3.4#4'],
		tipo: 'escenario',
		question:
			'Una empresa migra una aplicación con consultas SQL, transacciones y relaciones entre tablas, y quiere delegar en AWS la alta disponibilidad y las réplicas de lectura sin administrar el motor. Además, prevé necesitar compatibilidad con MySQL y con PostgreSQL. ¿Qué servicio encaja mejor?',
		options: [
			'Amazon Aurora, porque es un motor relacional gestionado y compatible con MySQL y PostgreSQL.',
			'Amazon DynamoDB, porque es una base NoSQL de clave-valor.',
			'Amazon ElastiCache, porque guarda los datos en memoria.',
			'Una base de datos autoinstalada y administrada por el equipo en Amazon EC2 para no depender de un servicio gestionado de AWS.',
		],
		correctAnswer: 0,
		explanation:
			'Amazon Aurora cubre el modelo relacional con compatibilidad MySQL y PostgreSQL, replicación integrada, réplicas de lectura y alta disponibilidad sin administrar el sistema operativo. Amazon DynamoDB no es relacional, Amazon ElastiCache no es una base persistente y autoinstalar en Amazon EC2 añade la administración que se quiere evitar. Si cambia el requisito a un motor relacional concreto no soportado por Aurora, la opción sería Amazon RDS.',
		porQueOpcion: [
			'Correcta: cubre compatibilidad relacional, alta disponibilidad y baja administración.',
			'Incorrecto: Amazon DynamoDB no usa el modelo relacional ni SQL tradicional.',
			'Incorrecto: Amazon ElastiCache es una caché, no la base transaccional principal.',
			'Incorrecto: autoinstalar en Amazon EC2 añade precisamente la administración que se quiere evitar.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html',
			'https://docs.aws.amazon.com/dynamodb/',
			'https://docs.aws.amazon.com/elasticache/',
			'https://docs.aws.amazon.com/ec2/',
			'https://docs.aws.amazon.com/rds/',
		],
	},
	{
		id: 'prof-3.4-q4',
		taskId: '3.4',
		objetivos: ['3.4#5'],
		tipo: 'comparacion',
		question:
			'Un equipo compara un motor relacional gestionado con una base NoSQL. ¿Qué afirmación los distingue correctamente?',
		options: [
			'Amazon RDS es relacional y se consulta con SQL; Amazon DynamoDB es NoSQL, sin esquema fijo y con escalado horizontal gestionado.',
			'Amazon RDS es una base NoSQL sin esquema fijo y Amazon DynamoDB es un motor relacional que se consulta con SQL y admite integridad referencial completa.',
			'Ambos son relacionales y solo se diferencian en la Región donde se despliegan.',
			'Amazon DynamoDB exige administrar el sistema operativo de las instancias.',
		],
		correctAnswer: 0,
		explanation:
			'Amazon RDS aloja motores relacionales con tablas, esquema y SQL. Amazon DynamoDB es NoSQL de clave-valor y documento, sin esquema fijo, totalmente gestionado y con escalado horizontal de latencia de milisegundos. Invertir los modelos o atribuir administración de instancias a DynamoDB contradice la definición de cada servicio. Si el requisito cambiara a acceso por clave con escala impredecible, la respuesta sería DynamoDB.',
		porQueOpcion: [
			'Correcta: contrapone el modelo relacional con el NoSQL gestionado.',
			'Incorrecto: invierte los modelos de ambos servicios.',
			'Incorrecto: la diferencia es el modelo de datos, no la Región.',
			'Incorrecto: Amazon DynamoDB no expone servidores ni sistema operativo que administrar.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/rds/',
			'https://docs.aws.amazon.com/dynamodb/',
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
			'Cuando se repiten las mismas lecturas, Amazon ElastiCache las sirve desde memoria y descarga a la base principal, reduciendo latencia y coste. Amazon DynamoDB no conserva el modelo relacional, AWS DMS migra datos y Amazon S3 no es una base de datos. Si el requisito cambiara a migrar la base a otro motor, la herramienta sería AWS DMS.',
		porQueOpcion: [
			'Correcta: la caché en memoria ataca directamente las lecturas repetidas.',
			'Incorrecto: Amazon DynamoDB cambia el modelo de datos y no conserva SQL.',
			'Incorrecto: AWS DMS migra datos entre orígenes y destinos, no acelera lecturas.',
			'Incorrecto: Amazon S3 es almacenamiento de objetos, no un motor de consultas relacional.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/elasticache/',
			'https://docs.aws.amazon.com/dynamodb/',
			'https://docs.aws.amazon.com/dms/',
			'https://docs.aws.amazon.com/s3/',
		],
	},
	{
		id: 'prof-3.4-q6',
		taskId: '3.4',
		objetivos: ['3.4#2', '3.4#7'],
		tipo: 'escenario',
		question:
			'Una empresa migra de un motor comercial a un motor relacional gestionado distinto. ¿Cómo se combinan la conversión de esquema y la réplica de datos?',
		options: [
			'AWS SCT convierte el esquema y el código al nuevo motor, y AWS DMS replica los datos hacia el destino.',
			'AWS DMS se encarga de convertir el esquema y el código al nuevo motor, mientras que AWS SCT mueve los datos hacia el destino.',
			'AWS SCT replica los datos y AWS DMS solo supervisa la migración.',
			'Ambas herramientas solo funcionan entre bases del mismo motor.',
		],
		correctAnswer: 0,
		explanation:
			'En una migración heterogénea primero se transforma el esquema y el código con AWS SCT y después se replica el dato con AWS DMS, que admite replicación continua para reducir el corte de servicio. Intercambiar las funciones o limitar las herramientas al mismo motor confunde sus cometidos. Si el escenario cambiara a una migración homogénea, la conversión de esquema dejaría de ser necesaria.',
		porQueOpcion: [
			'Correcta: reparte las tareas entre conversión de esquema y movimiento de datos.',
			'Incorrecto: invierte las funciones de ambas herramientas.',
			'Incorrecto: AWS SCT no replica datos y AWS DMS no se limita a supervisar.',
			'Incorrecto: AWS SCT se usa precisamente cuando el motor de destino es distinto.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/SchemaConversionTool/',
			'https://docs.aws.amazon.com/dms/',
		],
	},
];
