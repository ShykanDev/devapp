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
			'Todas las bases de datos de AWS son relacionales, se consultan con SQL y la única diferencia apreciable es el tamaño de la instancia contratada y la región donde se despliegan los recursos.',
			'AWS ofrece bases relacionales (por ejemplo, Amazon RDS y Amazon Aurora), NoSQL (por ejemplo, Amazon DynamoDB) y en memoria (por ejemplo, Amazon ElastiCache).',
			'Las bases NoSQL solo existen fuera de AWS, por eso se alojan en Amazon EC2 y no tienen servicio gestionado.',
			'La categoría de la base de datos depende del sistema operativo de la instancia donde se ejecuta el motor.',
		],
		correctAnswer: 1,
		explanation:
			'AWS agrupa sus bases de datos por modelo de dato: relacionales gestionadas (Amazon RDS, Amazon Aurora), NoSQL (Amazon DynamoDB, Amazon DocumentDB, Amazon Neptune) y en memoria para caché (Amazon ElastiCache), además de almacenes analíticos como Amazon Redshift. No todas son relacionales y la categoría no depende del sistema operativo. Si el requisito cambiara a acceso por clave con escala impredecible, la categoría adecuada sería NoSQL.',
		porQueOpcion: [
			'Incorrecta: no todas las bases de AWS son relacionales ni la categoría depende del tamaño de la instancia.',
			'Correcta: AWS ofrece bases relacionales (Amazon RDS y Amazon Aurora), NoSQL (Amazon DynamoDB) y en memoria (Amazon ElastiCache).',
			'Incorrecta: las bases NoSQL sí tienen servicio gestionado en AWS, como Amazon DynamoDB.',
			'Incorrecta: la categoría depende del modelo de dato, no del sistema operativo de la instancia.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/rds/',
			'https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html',
			'https://docs.aws.amazon.com/dynamodb/',
			'https://docs.aws.amazon.com/elasticache/',
			'https://docs.aws.amazon.com/ec2/',
			'https://docs.aws.amazon.com/documentdb/',
			'https://docs.aws.amazon.com/neptune/',
			'https://docs.aws.amazon.com/redshift/',
		],
	},
	{
		id: '3.4-q2',
		taskId: '3.4',
		objetivos: ['3.4#3'],
		tipo: 'escenario',
		question:
			'Un equipo quiere decidir entre instalar su propia base de datos en Amazon EC2 o usar un servicio gestionado. ¿Qué criterio refleja la decisión correcta?',
		options: [
			'Usar Amazon EC2 solo cuando se necesite menos control del sistema operativo y menos administración de la habitual, ya que la instancia aplica parches y copias automáticamente sin intervención del equipo.',
			'Elegir una base gestionada para delegar en AWS parches, copias de seguridad y alta disponibilidad; usar Amazon EC2 cuando se necesite control total del motor y del sistema operativo.',
			'Elegir Amazon EC2 siempre, porque resulta más barato que cualquier base gestionada cuando se suman todos los costes de operación.',
			'Elegir una base gestionada porque impide escalar y así se controla el coste, aunque no permita copias de seguridad.',
		],
		correctAnswer: 1,
		explanation:
			'La base gestionada quita del equipo la operación de la infraestructura (parches, copias, alta disponibilidad, escalado). Amazon EC2 tiene sentido cuando se necesita control del sistema operativo o del motor, asumiendo esa operación por cuenta propia; no aplica parches automáticos ni es siempre más barato. Si el requisito fuera un motor no soportado por el servicio gestionado, la respuesta sería Amazon EC2.',
		porQueOpcion: [
			'Incorrecta: una instancia de Amazon EC2 no aplica parches ni copias automáticamente, y a mayor control corresponde más administración.',
			'Correcta: la base gestionada delega parches, copias y alta disponibilidad, y Amazon EC2 se usa cuando se necesita control total del motor.',
			'Incorrecta: Amazon EC2 no es siempre más barato al sumar los costes de operación que asume el equipo.',
			'Incorrecta: una base gestionada sí permite escalar y hacer copias de seguridad; impedirlos no es su propósito.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/ec2/',
		],
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
			'Se gana administración automática de parches y copias, pero se pierde el acceso al motor y a toda su configuración avanzada de parámetros.',
			'No hay contrapartida: Amazon EC2 ofrece la misma automatización de parches y copias que una base gestionada.',
			'Se reduce el coste a cero porque Amazon EC2 no cobra por cómputo ni por almacenamiento.',
		],
		correctAnswer: 0,
		explanation:
			'El control total es el beneficio de Amazon EC2 y su coste es operativo: el equipo pasa a ser responsable de la administración que en un servicio gestionado realiza AWS. Alojar en Amazon EC2 no aporta administración automática, no elimina el coste y no es una base gestionada. Si el requisito fuera minimizar la administración, la respuesta sería una base gestionada.',
		porQueOpcion: [
			'Correcta: en Amazon EC2 se gana control del motor y del sistema operativo, pero el equipo asume parches, copias, escalado y alta disponibilidad.',
			'Incorrecta: invierte la contrapartida, ya que Amazon EC2 no aporta administración automática y no se pierde acceso al motor.',
			'Incorrecta: Amazon EC2 no ofrece la misma automatización de parches y copias que una base gestionada, por eso hay contrapartida.',
			'Incorrecta: Amazon EC2 sí cobra por cómputo y almacenamiento, por lo que no reduce el coste a cero.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/ec2/',
		],
	},
	{
		id: '3.4-q4',
		taskId: '3.4',
		objetivos: ['3.4#4'],
		tipo: 'conocimiento',
		question:
			'Una empresa necesita una base de datos gestionada compatible con MySQL y PostgreSQL, con alta disponibilidad y sin administrar el motor. ¿Qué servicio encaja mejor?',
		options: [
			'Amazon DynamoDB, porque guarda documentos con clave-valor y escala horizontalmente.',
			'Amazon ElastiCache, porque mantiene los datos en memoria para lecturas rápidas.',
			'Amazon Aurora, porque es un motor relacional gestionado compatible con MySQL y PostgreSQL.',
			'Amazon Neptune, porque organiza los datos como un grafo de relaciones.',
		],
		correctAnswer: 2,
		explanation:
			'Amazon Aurora es un motor relacional gestionado y compatible con MySQL y PostgreSQL, que es lo que pide el requisito. DynamoDB y Neptune son NoSQL (clave-valor/documento y grafo) y ElastiCache es una caché en memoria. Si el requisito pidiera latencia de un dígito de milisegundos a escala masiva y no relaciones, la respuesta sería DynamoDB.',
		porQueOpcion: [
			'Incorrecta: Amazon DynamoDB es NoSQL clave-valor y no es compatible con MySQL ni PostgreSQL.',
			'Incorrecta: Amazon ElastiCache es una caché en memoria, no una base relacional compatible con MySQL y PostgreSQL.',
			'Correcta: Amazon Aurora es un motor relacional gestionado y compatible con MySQL y PostgreSQL.',
			'Incorrecta: Amazon Neptune es una base de grafos y no es compatible con MySQL ni PostgreSQL.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/dynamodb/',
			'https://docs.aws.amazon.com/elasticache/',
			'https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html',
			'https://docs.aws.amazon.com/neptune/',
		],
	},
	{
		id: '3.4-q5',
		taskId: '3.4',
		objetivos: ['3.4#4', '3.4#5'],
		tipo: 'comparacion',
		question:
			'Un equipo debe elegir entre dos motores relacionales gestionados y una base NoSQL. ¿Qué afirmación los distingue correctamente?',
		options: [
			'Amazon RDS y Amazon Aurora son relacionales; Amazon DynamoDB es NoSQL y no usa el modelo relacional con SQL.',
			'Amazon DynamoDB es un motor relacional y Amazon RDS es NoSQL, por lo que los modelos de datos de ambos servicios están intercambiados.',
			'Los tres son relacionales y solo cambia la región donde se despliegan, sin diferencias de modelo de datos.',
			'Amazon Aurora es NoSQL en memoria y Amazon DynamoDB es un motor relacional con consultas SQL.',
		],
		correctAnswer: 0,
		explanation:
			'Amazon RDS y Amazon Aurora comparten el modelo relacional (tablas, esquema y SQL); Aurora es el motor de AWS compatible con MySQL y PostgreSQL. Amazon DynamoDB es NoSQL, de clave-valor y documento, sin esquema fijo. Invertir los modelos o inventar una Aurora en memoria describe servicios que no corresponden. Si el requisito cambiara a acceso por clave con escala impredecible, la respuesta sería DynamoDB.',
		porQueOpcion: [
			'Correcta: Amazon RDS y Amazon Aurora son relacionales, mientras que Amazon DynamoDB es NoSQL y no usa el modelo relacional con SQL.',
			'Incorrecta: Amazon DynamoDB no es relacional ni Amazon RDS es NoSQL; los modelos están invertidos.',
			'Incorrecta: los tres no son relacionales; Amazon DynamoDB es NoSQL y difiere en el modelo de datos.',
			'Incorrecta: Amazon Aurora no es NoSQL en memoria ni Amazon DynamoDB es un motor relacional con consultas SQL.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/rds/',
			'https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html',
			'https://docs.aws.amazon.com/dynamodb/',
		],
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
			'Amazon Aurora ofrece el modelo relacional con compatibilidad PostgreSQL, replicación integrada y réplicas de lectura, sin administrar el sistema operativo. Amazon DynamoDB no es relacional, Amazon ElastiCache no es una base persistente y alojar en Amazon EC2 añade la administración que se quiere evitar. Si el requisito cambiara a un motor concreto no soportado por Aurora, la opción sería Amazon RDS.',
		porQueOpcion: [
			'Incorrecta: Amazon DynamoDB es NoSQL clave-valor y no ofrece el modelo relacional compatible con PostgreSQL.',
			'Correcta: Amazon Aurora es un motor relacional gestionado y compatible con PostgreSQL, con réplicas de lectura y alta disponibilidad.',
			'Incorrecta: Amazon ElastiCache guarda datos en memoria y no es una base relacional con réplicas de lectura.',
			'Incorrecta: alojar el motor en Amazon EC2 añade la administración que se quiere evitar.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/dynamodb/',
			'https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html',
			'https://docs.aws.amazon.com/elasticache/',
			'https://docs.aws.amazon.com/ec2/',
			'https://docs.aws.amazon.com/rds/',
		],
	},
	{
		id: '3.4-q7',
		taskId: '3.4',
		objetivos: ['3.4#5'],
		tipo: 'conocimiento',
		question:
			'¿Qué característica define a una base NoSQL de clave-valor y documento totalmente gestionada?',
		options: [
			'Es un motor relacional que exige un esquema fijo, admite SQL y garantiza integridad referencial.',
			'Es una base NoSQL de clave-valor y documento, totalmente gestionada, que escala horizontalmente.',
			'Es un servicio de caché en memoria que se coloca delante de una base relacional para acelerar lecturas.',
			'Es un servicio que solo convierte esquemas y código entre motores de base de datos distintos.',
		],
		correctAnswer: 1,
		explanation:
			'Amazon DynamoDB es una base NoSQL gestionada: guarda elementos identificados por clave, admite clave-valor y documento, y escala de forma horizontal con latencia de milisegundos sin administrar servidores. No se consulta con SQL tradicional, no es una caché y no convierte esquemas. Si el requisito fuera una caché en memoria delante de otra base, la respuesta sería Amazon ElastiCache.',
		porQueOpcion: [
			'Incorrecta: un motor relacional con esquema fijo y SQL no es una base NoSQL de clave-valor y documento.',
			'Correcta: Amazon DynamoDB es una base NoSQL de clave-valor y documento, totalmente gestionada, que escala horizontalmente.',
			'Incorrecta: una caché en memoria delante de una base relacional no es una base NoSQL de clave-valor y documento.',
			'Incorrecta: convertir esquemas entre motores es tarea de AWS SCT, no una base NoSQL.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/dynamodb/',
			'https://docs.aws.amazon.com/SchemaConversionTool/',
			'https://docs.aws.amazon.com/elasticache/',
		],
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
			'El patrón de acceso por clave con escala variable es exactamente el caso de uso de Amazon DynamoDB. Amazon ElastiCache es una caché, no una base persistente; una base en Amazon EC2 añadiría la administración que se quiere evitar; y una instancia RDS grande no cambia el modelo relacional. Si el requisito cambiara a consultas relacionales con integridad referencial, la respuesta sería Amazon RDS o Amazon Aurora.',
		porQueOpcion: [
			'Incorrecta: una instancia RDS muy grande mantiene el modelo relacional y no ofrece el acceso por clave con escala impredecible.',
			'Correcta: Amazon DynamoDB encaja con el acceso por clave, la latencia de milisegundos y el escalado gestionado.',
			'Incorrecta: Amazon ElastiCache es una caché, no una base de datos principal persistente.',
			'Incorrecta: una base alojada en Amazon EC2 añade la administración de servidores que se quiere evitar.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/rds/',
			'https://docs.aws.amazon.com/dynamodb/',
			'https://docs.aws.amazon.com/elasticache/',
			'https://docs.aws.amazon.com/ec2/',
			'https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html',
		],
	},
	{
		id: '3.4-q9',
		taskId: '3.4',
		objetivos: ['3.4#4', '3.4#5', '3.4#6'],
		tipo: 'comparacion',
		question:
			'¿Qué diferencia hay entre usar una base relacional o NoSQL y usar una base en memoria como caché?',
		options: [
			'Las bases relacionales y NoSQL guardan los datos de forma persistente; una base en memoria como Amazon ElastiCache se usa sobre todo como caché para acelerar lecturas.',
			'Amazon ElastiCache sustituye por completo a la base de datos principal porque guarda todos los datos en disco de forma duradera y persistente, sin necesitar ninguna base detrás.',
			'Las bases NoSQL y en memoria son lo mismo y solo cambia el nombre comercial del servicio contratado.',
			'Una base en memoria garantiza la persistencia a largo plazo mejor que una base relacional o NoSQL.',
		],
		correctAnswer: 0,
		explanation:
			'El eje es persistencia frente a aceleración: relacional y NoSQL almacenan el dato de forma duradera (Amazon RDS, Amazon Aurora, Amazon DynamoDB), mientras que Amazon ElastiCache mantiene los datos en RAM como caché delante de otra base. Tratar la caché como base principal o como NoSQL niega su papel. Si el requisito fuera guardar el dato crítico, la respuesta sería una base persistente, no la caché.',
		porQueOpcion: [
			'Correcta: relacional y NoSQL guardan el dato de forma persistente, mientras Amazon ElastiCache se usa sobre todo como caché para acelerar lecturas.',
			'Incorrecta: Amazon ElastiCache no sustituye a la base principal porque es una caché en memoria, no un almacén duradero en disco.',
			'Incorrecta: NoSQL y en memoria no son lo mismo; la caché cumple un papel de aceleración distinto.',
			'Incorrecta: una base en memoria no garantiza mejor la persistencia a largo plazo que una relacional o NoSQL.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/elasticache/',
			'https://docs.aws.amazon.com/rds/',
			'https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html',
			'https://docs.aws.amazon.com/dynamodb/',
			'https://docs.aws.amazon.com/ram/latest/userguide/what-is.html',
		],
	},
	{
		id: '3.4-q10',
		taskId: '3.4',
		objetivos: ['3.4#6'],
		tipo: 'conocimiento',
		question: '¿Para qué se usa principalmente una base de datos en memoria como caché?',
		options: [
			'Para migrar esquemas entre motores de base de datos.',
			'Para almacenar datos en memoria y acelerar el acceso, por ejemplo como caché.',
			'Para reemplazar a Amazon DynamoDB como base NoSQL de propósito general y persistente para todos los datos de la aplicación.',
			'Para ejecutar consultas analíticas sobre un almacén de datos.',
		],
		correctAnswer: 1,
		explanation:
			'Amazon ElastiCache es un almacén en memoria pensado para dar latencias muy bajas, normalmente como caché delante de una base relacional o NoSQL. No persiste los datos como base principal, no convierte esquemas y no sustituye a un almacén analítico. Si el requisito fuera conversión de esquema entre motores, la respuesta sería AWS Schema Conversion Tool (AWS SCT).',
		porQueOpcion: [
			'Incorrecta: migrar esquemas entre motores es tarea de AWS SCT, no de una base en memoria.',
			'Correcta: una base en memoria almacena datos en RAM para acelerar el acceso, por ejemplo como caché.',
			'Incorrecta: Amazon ElastiCache no reemplaza a Amazon DynamoDB como base NoSQL persistente de propósito general.',
			'Incorrecta: ejecutar consultas analíticas sobre un almacén de datos corresponde a Amazon Redshift.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/dynamodb/',
			'https://docs.aws.amazon.com/SchemaConversionTool/',
			'https://docs.aws.amazon.com/elasticache/',
			'https://docs.aws.amazon.com/redshift/',
			'https://docs.aws.amazon.com/ram/latest/userguide/what-is.html',
		],
	},
	{
		id: '3.4-q11',
		taskId: '3.4',
		objetivos: ['3.4#6'],
		tipo: 'escenario',
		question:
			'Una aplicación lee con frecuencia los mismos datos de una base relacional y la latencia de esas lecturas es alta. Aunque el equipo valora migrar de motor para reducir coste, no es relevante para este problema: el cuello de botella está en las lecturas repetidas. ¿Qué solución reduce la carga sobre la base?',
		options: [
			'Añadir Amazon ElastiCache como capa de caché en memoria delante de la base relacional.',
			'Cambiar la base relacional por Amazon DynamoDB y migrar todo el esquema manteniendo el modelo relacional y las consultas SQL.',
			'Migrar la base de datos con AWS Schema Conversion Tool (AWS SCT).',
			'Alojar la base en Amazon EC2 con más almacenamiento.',
		],
		correctAnswer: 0,
		explanation:
			'Cuando las mismas lecturas se repiten, Amazon ElastiCache las sirve desde memoria y descarga a la base principal. Cambiar de modelo de datos, convertir el esquema o añadir almacenamiento no ataca el problema de latencia por lecturas repetidas. Si el requisito cambiara a latencia predecible con acceso por clave a gran escala, la opción sería Amazon DynamoDB.',
		porQueOpcion: [
			'Correcta: añadir Amazon ElastiCache como caché en memoria delante de la base relacional sirve las lecturas repetidas desde memoria.',
			'Incorrecta: cambiar a Amazon DynamoDB no mantiene el modelo relacional ni las consultas SQL y no ataca la latencia.',
			'Incorrecta: AWS Schema Conversion Tool (AWS SCT) convierte esquemas, no reduce la carga de lecturas repetidas.',
			'Incorrecta: alojar la base en Amazon EC2 con más almacenamiento no ataca la latencia por lecturas repetidas.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/elasticache/',
			'https://docs.aws.amazon.com/dynamodb/',
			'https://docs.aws.amazon.com/SchemaConversionTool/',
			'https://docs.aws.amazon.com/ec2/',
		],
	},
	{
		id: '3.4-q12',
		taskId: '3.4',
		objetivos: ['3.4#7'],
		tipo: 'conocimiento',
		question:
			'¿Cuál es la diferencia entre una herramienta de migración de datos y una de conversión de esquema?',
		options: [
			'AWS DMS mueve los datos entre orígenes y destinos; AWS SCT convierte el esquema y el código de la base de datos entre motores distintos.',
			'AWS DMS convierte el esquema y el código de la base de datos entre motores distintos, mientras que AWS SCT se encarga de mover los datos hacia el destino final.',
			'Ambos solo funcionan entre bases de datos del mismo motor y no admiten escenarios heterogéneos.',
			'Ambos son servicios de copia de seguridad y no tienen relación con la migración de bases de datos.',
		],
		correctAnswer: 0,
		explanation:
			'AWS Database Migration Service (AWS DMS) replica y mueve los datos, con replicación continua para reducir el corte. AWS Schema Conversion Tool (AWS SCT) convierte el esquema y el código cuando el motor de destino es distinto del de origen. Intercambiar las funciones o negar el escenario heterogéneo confunde ambas herramientas. Si cambiara el requisito a una migración homogénea con el mismo motor, AWS SCT dejaría de ser imprescindible.',
		porQueOpcion: [
			'Correcta: AWS DMS mueve los datos entre orígenes y destinos y AWS SCT convierte el esquema y el código entre motores distintos.',
			'Incorrecta: invierte las funciones, ya que AWS DMS mueve los datos y AWS SCT convierte el esquema.',
			'Incorrecta: ambas herramientas admiten escenarios heterogéneos entre motores distintos.',
			'Incorrecta: AWS DMS y AWS SCT son herramientas de migración, no servicios de copia de seguridad.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/dms/',
			'https://docs.aws.amazon.com/SchemaConversionTool/',
		],
	},
	{
		id: '3.4-q13',
		taskId: '3.4',
		objetivos: ['3.4#2', '3.4#7'],
		tipo: 'comparacion',
		question: 'En una migración heterogénea, ¿cómo se combinan las herramientas de migración de AWS?',
		options: [
			'AWS Schema Conversion Tool (AWS SCT) convierte el esquema y el código, y AWS DMS replica los datos hacia la base de destino.',
			'AWS DMS convierte el esquema y deja los datos en el origen sin moverlos, mientras que AWS SCT se limita a supervisar el progreso.',
			'Solo se necesita AWS Migration Hub para mover los datos y no hace falta ninguna herramienta de conversión.',
			'Basta con Amazon RDS para migrar sin herramientas adicionales, ya que el servicio importa cualquier esquema.',
		],
		correctAnswer: 0,
		explanation:
			'En una migración heterogénea primero se convierte el esquema y el código con AWS SCT y después se replica el dato con AWS DMS. AWS Migration Hub sirve para seguir el progreso, no para mover los datos, y Amazon RDS no migra por sí solo ni importa cualquier esquema. Si el requisito cambiara a una migración homogénea, bastaría con AWS DMS para mover los datos.',
		porQueOpcion: [
			'Correcta: en una migración heterogénea AWS SCT convierte el esquema y el código y AWS DMS replica los datos hacia la base de destino.',
			'Incorrecta: AWS DMS no convierte el esquema ni deja los datos en el origen; AWS SCT no se limita a supervisar el progreso.',
			'Incorrecta: AWS Migration Hub solo sigue el progreso y no sustituye a la herramienta de conversión.',
			'Incorrecta: Amazon RDS no migra por sí solo ni importa cualquier esquema sin herramientas adicionales.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/SchemaConversionTool/',
			'https://docs.aws.amazon.com/dms/',
			'https://docs.aws.amazon.com/migrationhub/',
			'https://docs.aws.amazon.com/rds/',
		],
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
			'AWS DMS replica los datos de forma continua, de modo que el destino se mantiene al día y el corte de servicio se reduce al mínimo. AWS SCT convierte esquemas, no replica datos; Amazon ElastiCache no migra bases de datos; y Amazon EC2 no migra nada por sí solo. Si el requisito cambiara a convertir el esquema entre motores distintos, la herramienta sería AWS SCT.',
		porQueOpcion: [
			'Correcta: AWS DMS replica los datos de forma continua hasta el corte, minimizando el tiempo de inactividad.',
			'Incorrecta: AWS SCT convierte esquemas y no replica datos en tiempo real.',
			'Incorrecta: Amazon ElastiCache no migra bases de datos.',
			'Incorrecta: Amazon EC2 no migra la base por el hecho de lanzarse.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/dms/',
			'https://docs.aws.amazon.com/SchemaConversionTool/',
			'https://docs.aws.amazon.com/elasticache/',
			'https://docs.aws.amazon.com/ec2/',
		],
	},
	{
		id: '3.4-q15',
		taskId: '3.4',
		objetivos: ['3.4#1'],
		tipo: 'escenario',
		question:
			'Una empresa revisa su cartera de aplicaciones: un sistema de facturación con relaciones y SQL, una app de sesiones con acceso por clave y un panel que repite lecturas. ¿Qué combinación de bases encaja mejor?',
		options: [
			'Relacional gestionada para la facturación, NoSQL de clave-valor para las sesiones y una caché en memoria para las lecturas repetidas.',
			'NoSQL clave-valor para la facturación, una caché en memoria para las sesiones y un almacén analítico para las lecturas repetidas del panel de datos.',
			'Un único motor relacional para las tres cargas, ajustando solo el tamaño de la instancia según la demanda.',
			'Solo cachés en memoria para las tres cargas, porque ofrecen la menor latencia posible en todos los casos.',
		],
		correctAnswer: 0,
		explanation:
			'Cada carga encaja con una categoría: facturación transaccional en una base relacional gestionada, sesiones con acceso por clave en una base NoSQL y lecturas repetidas en una caché en memoria. Forzar un único modelo o usar solo cachés desaprovecha las ventajas de cada categoría. Si el requisito cambiara a análisis de grandes volúmenes, la categoría adecuada sería un almacén de datos columnar.',
		porQueOpcion: [
			'Correcta: relacional para la facturación, NoSQL clave-valor para las sesiones y caché en memoria para las lecturas repetidas.',
			'Incorrecta: no asigna a cada carga su categoría, ya que la facturación es relacional y las sesiones encajan en NoSQL.',
			'Incorrecta: forzar un único motor relacional desaprovecha las ventajas de NoSQL y de la caché.',
			'Incorrecta: usar solo cachés en memoria no ofrece persistencia para la facturación ni para las sesiones.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/rds/',
		],
	},
	{
		id: '3.4-q16',
		taskId: '3.4',
		objetivos: ['3.4#7'],
		tipo: 'escenario',
		question:
			'Una empresa migra su base de datos Oracle local a un motor relacional gestionado distinto y necesita minimizar el tiempo de inactividad sin reescribir el esquema a mano. Aunque el equipo es reducido y opera con un plazo ajustado, la migración debe superar una auditoría de cumplimiento. ¿Cómo aborda la migración?',
		options: [
			'Convertir el esquema y el código con una herramienta de conversión y replicar los datos de forma continua con una herramienta de migración hasta el corte.',
			'Copiar los archivos de datos directamente a la instancia de destino, ajustar el esquema a mano después del corte y validar la aplicación en producción durante la ventana de mantenimiento.',
			'Exportar los datos a un almacén analítico y consultarlos desde la aplicación en lugar de migrarlos al nuevo motor.',
			'Confiar en que el nuevo motor lea el esquema del origen sin conversión y sin réplica previa de los datos.',
		],
		correctAnswer: 0,
		explanation:
			'Es una migración heterogénea: primero se convierte el esquema y el código con AWS SCT y después se replica el dato con AWS DMS de forma continua hasta el corte, reduciendo la inactividad. Copiar archivos y reescribir el esquema a mano no ataca la incompatibilidad y alarga el corte, y el destino no interpreta el esquema de otro motor sin conversión. Si el requisito cambiara a una migración homogénea, la conversión de esquema dejaría de ser necesaria.',
		porQueOpcion: [
			'Correcta: convierte el esquema con AWS SCT y replica los datos de forma continua con AWS DMS hasta el corte.',
			'Incorrecta: copiar archivos y reescribir el esquema a mano no resuelve la incompatibilidad y alarga el corte.',
			'Incorrecta: exportar a un almacén analítico no migra la base al nuevo motor relacional.',
			'Incorrecta: el nuevo motor no interpreta el esquema de otro motor sin conversión ni réplica previa.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/SchemaConversionTool/',
			'https://docs.aws.amazon.com/dms/',
		],
	},
	{
		id: '3.4-q17',
		taskId: '3.4',
		objetivos: ['3.4#3'],
		tipo: 'comparacion',
		question:
			'Una empresa valora ejecutar su propia base de datos sobre instancias que administra frente a contratar una base gestionada por AWS. ¿Qué distingue la responsabilidad operativa de cada opción?',
		options: [
			'La base gestionada delega en AWS parches, copias y alta disponibilidad, mientras que la base autogestionada traslada al equipo toda la operación del motor.',
			'La base autogestionada delega en AWS los parches, las copias y la alta disponibilidad, mientras que la base gestionada obliga al equipo a mantener el sistema operativo y el motor sin ninguna automatización.',
			'No hay diferencia en la operación: las dos alternativas aplican las mismas automatizaciones de parches, copias y alta disponibilidad sin intervención del equipo.',
			'La base autogestionada siempre cuesta menos porque la instancia no cobra por cómputo ni por almacenamiento durante su ciclo de vida.',
		],
		correctAnswer: 0,
		explanation:
			'En la base gestionada, AWS administra la infraestructura del motor (parches, copias de seguridad, alta disponibilidad y parte del escalado) y el equipo se concentra en el esquema, los datos y las consultas. En la base autogestionada sobre instancias, el control total del motor y del sistema operativo viene acompañado de toda esa operación a cargo del equipo. Si cambia el requisito a una versión o configuración no soportada por el servicio gestionado, la opción sería la base autogestionada.',
		porQueOpcion: [
			'Correcta: la base gestionada delega en AWS parches, copias y alta disponibilidad, y la autogestionada traslada toda la operación al equipo.',
			'Incorrecta: invierte la responsabilidad, ya que la autogestionada no delega en AWS y la gestionada sí automatiza.',
			'Incorrecta: las dos alternativas no aplican las mismas automatizaciones; difieren en quién opera el motor.',
			'Incorrecta: la base autogestionada no cuesta menos por no cobrar cómputo ni almacenamiento, que sí se facturan.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/rds/',
		],
	},
];
