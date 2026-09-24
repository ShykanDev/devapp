import type { PreguntaClfC02 } from '@/data/clfC02/types';

export const preguntasTask34: PreguntaClfC02[] = [
	{
		id: '3.4-q1',
		taskId: '3.4',
		objetivos: ['3.4#1'],
		tipo: 'conocimiento',
		question:
			'¿Qué afirmación describe correctamente las categorías de servicios de base de datos de AWS?',
		options: [
			'Todas las bases de datos de AWS son relacionales; la única diferencia es el tamaño de la instancia.',
			'AWS ofrece bases relacionales (por ejemplo, Amazon RDS y Amazon Aurora), NoSQL (por ejemplo, Amazon DynamoDB) y en memoria (por ejemplo, Amazon ElastiCache).',
			'Las bases NoSQL solo existen fuera de AWS, por eso se alojan en Amazon EC2.',
			'La categoría de la base de datos depende del sistema operativo de la instancia.',
		],
		correctAnswer: 1,
		explanation:
			'AWS agrupa sus bases de datos por modelo de dato: relacionales gestionadas (Amazon RDS, Amazon Aurora), NoSQL (Amazon DynamoDB, Amazon DocumentDB, Amazon Neptune) y en memoria para caché (Amazon ElastiCache), además de almacenes analíticos como Amazon Redshift.',
	},
	{
		id: '3.4-q2',
		taskId: '3.4',
		objetivos: ['3.4#3'],
		tipo: 'escenario',
		question:
			'Un equipo quiere decidir entre instalar su propia base de datos en Amazon EC2 o usar un servicio gestionado. ¿Qué criterio refleja la decisión correcta?',
		options: [
			'Usar Amazon EC2 solo si se necesita menos control del sistema operativo.',
			'Elegir una base gestionada cuando se quiera delegar en AWS la administración de parches, copias de seguridad y alta disponibilidad; usar Amazon EC2 cuando se necesite control total del motor y del sistema operativo.',
			'Elegir Amazon EC2 siempre, porque es más barato que cualquier base gestionada.',
			'Elegir una base gestionada porque impide escalar y así se controla el coste.',
		],
		correctAnswer: 1,
		explanation:
			'La base gestionada quita del equipo la operación de la infraestructura (parches, copias, alta disponibilidad, escalado). Amazon EC2 tiene sentido cuando se necesita control del sistema operativo o del motor, asumiendo esa operación por cuenta propia.',
	},
	{
		id: '3.4-q3',
		taskId: '3.4',
		objetivos: ['3.4#3'],
		tipo: 'tradeoff',
		question:
			'¿Qué contrapartida implica alojar la base de datos en Amazon EC2 en lugar de usar una base gestionada de AWS?',
		options: [
			'Se gana control sobre el motor y el sistema operativo, pero el equipo asume parches, copias de seguridad, escalado y alta disponibilidad.',
			'Se gana administración automática de parches, pero se pierde el acceso al motor.',
			'No hay contrapartida: Amazon EC2 ofrece la misma automatización que una base gestionada.',
			'Se reduce el coste a cero porque Amazon EC2 no cobra por cómputo.',
		],
		correctAnswer: 0,
		explanation:
			'El control total es el beneficio de Amazon EC2 y su coste es operativo: el equipo pasa a ser responsable de la administración que en un servicio gestionado realiza AWS.',
	},
	{
		id: '3.4-q4',
		taskId: '3.4',
		objetivos: ['3.4#4'],
		tipo: 'conocimiento',
		question: '¿Cuál de estos servicios es una base de datos relacional gestionada de AWS?',
		options: [
			'Amazon DynamoDB, porque guarda tablas con clave-valor.',
			'Amazon ElastiCache, porque almacena datos en memoria.',
			'Amazon Aurora, porque es un motor relacional compatible con MySQL y PostgreSQL.',
			'Amazon Neptune, porque organiza los datos como un grafo.',
		],
		correctAnswer: 2,
		explanation:
			'Amazon Aurora es relacional: almacena los datos en tablas y se consulta con SQL. Amazon DynamoDB y Amazon Neptune son NoSQL, y Amazon ElastiCache es una capa en memoria usada como caché.',
	},
	{
		id: '3.4-q5',
		taskId: '3.4',
		objetivos: ['3.4#4', '3.4#5'],
		tipo: 'comparacion',
		question:
			'Un equipo debe elegir entre Amazon RDS, Amazon Aurora y Amazon DynamoDB. ¿Qué afirmación los distingue correctamente?',
		options: [
			'Amazon RDS y Amazon Aurora son relacionales; Amazon DynamoDB es NoSQL y no usa el modelo relacional con SQL.',
			'Amazon DynamoDB es relacional y Amazon RDS es NoSQL.',
			'Los tres son relacionales, solo cambia la región donde se despliegan.',
			'Amazon Aurora es NoSQL en memoria y Amazon DynamoDB es un motor relacional.',
		],
		correctAnswer: 0,
		explanation:
			'Amazon RDS y Amazon Aurora comparten el modelo relacional (tablas, esquema y SQL); Aurora es el motor de AWS compatible con MySQL y PostgreSQL. Amazon DynamoDB es NoSQL, de clave-valor y documento, sin esquema fijo.',
	},
	{
		id: '3.4-q6',
		taskId: '3.4',
		objetivos: ['3.4#4'],
		tipo: 'escenario',
		question:
			'Una aplicación transaccional necesita un motor relacional compatible con PostgreSQL, con réplicas de lectura, alta disponibilidad y menos administración. ¿Qué opción encaja mejor?',
		options: [
			'Amazon DynamoDB, porque es una base NoSQL clave-valor.',
			'Amazon Aurora, porque es un motor relacional gestionado y compatible con PostgreSQL.',
			'Amazon ElastiCache, porque guarda los datos en memoria.',
			'Alojar el motor en Amazon EC2 para no depender de un servicio gestionado.',
		],
		correctAnswer: 1,
		explanation:
			'Amazon Aurora ofrece el modelo relacional con compatibilidad PostgreSQL, replicación integrada y réplicas de lectura, sin administrar el sistema operativo. Amazon DynamoDB no es relacional y Amazon ElastiCache no es una base persistente.',
	},
	{
		id: '3.4-q7',
		taskId: '3.4',
		objetivos: ['3.4#5'],
		tipo: 'conocimiento',
		question: '¿Qué característica define a Amazon DynamoDB?',
		options: [
			'Es un motor relacional que exige un esquema fijo y admite SQL.',
			'Es una base NoSQL de clave-valor y documento, totalmente gestionada, que escala horizontalmente.',
			'Es un servicio de caché en memoria delante de una base relacional.',
			'Es un servicio que solo convierte esquemas entre motores distintos.',
		],
		correctAnswer: 1,
		explanation:
			'Amazon DynamoDB es una base NoSQL gestionada: guarda elementos identificados por clave, admite clave-valor y documento, y escala de forma horizontal con latencia de milisegundos sin administrar servidores. No se consulta con SQL tradicional.',
	},
	{
		id: '3.4-q8',
		taskId: '3.4',
		objetivos: ['3.4#5'],
		tipo: 'escenario',
		question:
			'Una aplicación con millones de usuarios necesita leer y escribir por clave con latencia de milisegundos y escala impredecible, sin administrar servidores. ¿Qué servicio encaja mejor?',
		options: [
			'Amazon RDS con una instancia muy grande.',
			'Amazon DynamoDB, por su modelo clave-valor y su escalado gestionado.',
			'Amazon ElastiCache, porque es una base de datos principal persistente.',
			'Una base alojada en Amazon EC2 para controlar el sistema operativo.',
		],
		correctAnswer: 1,
		explanation:
			'El patrón de acceso por clave con escala variable es exactamente el caso de uso de Amazon DynamoDB. Amazon ElastiCache es una caché, no una base persistente, y una base en Amazon EC2 añadiría la administración que se quiere evitar.',
	},
	{
		id: '3.4-q9',
		taskId: '3.4',
		objetivos: ['3.4#4', '3.4#5', '3.4#6'],
		tipo: 'comparacion',
		question:
			'¿Qué diferencia hay entre usar una base relacional o NoSQL y usar una base en memoria como Amazon ElastiCache?',
		options: [
			'Las bases relacionales y NoSQL guardan los datos de forma persistente; una base en memoria como Amazon ElastiCache se usa sobre todo como caché para acelerar lecturas.',
			'Amazon ElastiCache sustituye a la base de datos principal porque guarda todo en disco.',
			'Las bases NoSQL y en memoria son lo mismo, solo cambia el nombre comercial.',
			'Una base en memoria garantiza la persistencia a largo plazo mejor que una relacional.',
		],
		correctAnswer: 0,
		explanation:
			'El eje es persistencia frente a aceleración: relacional y NoSQL almacenan el dato de forma duradera (Amazon RDS, Amazon Aurora, Amazon DynamoDB), mientras que Amazon ElastiCache mantiene los datos en RAM como caché delante de otra base.',
	},
	{
		id: '3.4-q10',
		taskId: '3.4',
		objetivos: ['3.4#6'],
		tipo: 'conocimiento',
		question: '¿Para qué se usa principalmente Amazon ElastiCache?',
		options: [
			'Para migrar esquemas entre motores de base de datos.',
			'Para almacenar datos en memoria y acelerar el acceso, por ejemplo como caché.',
			'Para reemplazar a Amazon DynamoDB como base NoSQL de propósito general.',
			'Para ejecutar consultas analíticas sobre un almacén de datos.',
		],
		correctAnswer: 1,
		explanation:
			'Amazon ElastiCache es un almacén en memoria pensado para dar latencias muy bajas, normalmente como caché delante de una base relacional o NoSQL. No persiste los datos como base principal ni convierte esquemas.',
	},
	{
		id: '3.4-q11',
		taskId: '3.4',
		objetivos: ['3.4#6'],
		tipo: 'escenario',
		question:
			'Una aplicación lee con frecuencia los mismos datos de una base relacional y la latencia de esas lecturas es alta. ¿Qué solución reduce la carga sobre la base?',
		options: [
			'Añadir Amazon ElastiCache como capa de caché en memoria delante de la base relacional.',
			'Cambiar la base relacional por Amazon DynamoDB.',
			'Migrar la base de datos con AWS Schema Conversion Tool (AWS SCT).',
			'Alojar la base en Amazon EC2 con más almacenamiento.',
		],
		correctAnswer: 0,
		explanation:
			'Cuando las mismas lecturas se repiten, Amazon ElastiCache las sirve desde memoria y descarga a la base principal. Cambiar de modelo de datos o migrar no ataca el problema de latencia por lecturas repetidas.',
	},
	{
		id: '3.4-q12',
		taskId: '3.4',
		objetivos: ['3.4#7'],
		tipo: 'conocimiento',
		question: '¿Cuál es la diferencia entre AWS DMS y AWS SCT?',
		options: [
			'AWS DMS mueve los datos entre orígenes y destinos; AWS SCT convierte el esquema y el código de la base de datos entre motores distintos.',
			'AWS DMS convierte el esquema y AWS SCT mueve los datos.',
			'Ambos solo funcionan entre bases de datos del mismo motor.',
			'Ambos son servicios de copia de seguridad, no de migración.',
		],
		correctAnswer: 0,
		explanation:
			'AWS Database Migration Service (AWS DMS) replica y mueve los datos, con replicación continua para reducir el corte. AWS Schema Conversion Tool (AWS SCT) convierte el esquema y el código cuando el motor de destino es distinto del de origen.',
	},
	{
		id: '3.4-q13',
		taskId: '3.4',
		objetivos: ['3.4#2', '3.4#7'],
		tipo: 'comparacion',
		question: 'En una migración heterogénea, ¿cómo se combinan las herramientas de migración de AWS?',
		options: [
			'AWS Schema Conversion Tool (AWS SCT) convierte el esquema y el código, y AWS DMS replica los datos hacia la base de destino.',
			'AWS DMS convierte el esquema y deja los datos en el origen.',
			'Solo se necesita AWS Migration Hub para mover los datos.',
			'Basta con Amazon RDS para migrar sin herramientas adicionales.',
		],
		correctAnswer: 0,
		explanation:
			'En una migración heterogénea primero se convierte el esquema y el código con AWS SCT y después se replica el dato con AWS DMS. AWS Migration Hub sirve para seguir el progreso, no para mover los datos, y Amazon RDS no migra por sí solo.',
	},
	{
		id: '3.4-q14',
		taskId: '3.4',
		objetivos: ['3.4#2'],
		tipo: 'escenario',
		question:
			'Una empresa quiere migrar su base de datos local a AWS con el menor tiempo de inactividad posible y mantener el destino sincronizado mientras corta el servicio. ¿Qué servicio encaja mejor?',
		options: [
			'AWS Database Migration Service (AWS DMS), que replica los datos de forma continua hasta el corte.',
			'AWS Schema Conversion Tool (AWS SCT), que replica los datos en tiempo real.',
			'Amazon ElastiCache, que migra los datos a memoria.',
			'Amazon EC2, que migra la base automáticamente al lanzarse.',
		],
		correctAnswer: 0,
		explanation:
			'AWS DMS replica los datos de forma continua, de modo que el destino se mantiene al día y el corte de servicio se reduce al mínimo. AWS SCT convierte esquemas, no replica datos, y Amazon ElastiCache no migra bases de datos.',
	},
];
