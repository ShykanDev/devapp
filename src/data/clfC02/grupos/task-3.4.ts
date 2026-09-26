import type { GrupoTematico } from '@/data/clfC02/types';

export const gruposTask34: GrupoTematico[] = [
	{
		id: '3.4-g1',
		titulo: 'Panorama de los servicios de base de datos de AWS',
		objetivos: ['3.4#1', '3.4#3'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'Las bases de datos en AWS se eligen por **cómo modelan el dato** y por **quién las administra**:\n\n- **Relacionales**: organizan los datos en tablas con esquema fijo y se consultan con SQL. Aquí están las gestionadas `Amazon RDS` (MySQL, PostgreSQL, MariaDB, Oracle, SQL Server) y `Amazon Aurora`, compatible con MySQL y PostgreSQL y pensada para alto rendimiento.\n- **NoSQL**: no exigen esquema relacional y escalan horizontalmente. `Amazon DynamoDB` es clave-valor y documento; `Amazon DocumentDB` es documental; `Amazon Neptune` es de grafos.\n- **En memoria**: mantienen los datos en RAM para dar latencias muy bajas. `Amazon ElastiCache` es la opción típica como caché delante de otra base.\n- **Analíticas**: `Amazon Redshift` es un almacén de datos columnar orientado a consultas analíticas sobre grandes volúmenes.\n\nEl segundo eje es **quién administra**: una base gestionada deja en manos de AWS parches, copias de seguridad, alta disponibilidad y escalado; una base **alojada en `Amazon EC2`** corre en una instancia que el equipo debe mantener. AWS no obliga a elegir un único motor: lo normal es combinar una base transaccional con una caché en memoria.',
			},
			{
				tipo: 'comparacion',
				parId: 'base-gestionada-vs-base-en-ec2',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Usa una base gestionada de AWS cuando quieras delegar parches, copias de seguridad, alta disponibilidad y escalado, y centrar el equipo en la aplicación.',
					'Usa una base alojada en `Amazon EC2` cuando necesites un motor o una versión no soportada por el servicio gestionado, control del sistema operativo o requisitos muy concretos de configuración.',
					'Combina una base transaccional con una caché en memoria cuando las lecturas repetidas dominen la latencia.',
				],
				noUsar: [
					'No elijas `Amazon EC2` solo porque «parece más barato»: sumas el coste de administrar parches, copias de seguridad y alta disponibilidad por tu cuenta.',
					'No uses una base gestionada si tu requisito principal es controlar el sistema operativo y el motor hasta el último detalle.',
					'No uses una caché en memoria como base principal de datos persistentes.',
				],
			},
			{
				tipo: 'ejemplo',
				md: '```text\nNecesidad -> categoría\n- Transacciones con SQL y relaciones      -> relacional (Amazon RDS, Amazon Aurora)\n- Clave-valor con escala masiva            -> NoSQL (Amazon DynamoDB)\n- Lecturas repetidas que deben ir en RAM   -> en memoria (Amazon ElastiCache)\n- Análisis de grandes volúmenes            -> almacén columnar (Amazon Redshift)\n- Motor o versión que AWS no gestiona      -> base en Amazon EC2\n```',
			},
			{
				tipo: 'errorComun',
				error: 'Creer que «gestionado» significa que AWS también administra los datos y las consultas, o que una base en `Amazon EC2` es siempre la opción más barata.',
				correccion:
					'El servicio gestionado administra la **infraestructura** de la base (parches, copias, alta disponibilidad, escalado), no el modelo de datos ni las consultas, que siguen siendo responsabilidad del cliente. Y una base en `Amazon EC2` traslada al equipo toda la operación, lo que suele encarecerla en tiempo y en riesgo, no solo en factura.',
			},
		],
		preguntasGuia: [
			'¿Qué categorías de base de datos ofrece AWS y qué ejemplo hay de cada una?',
			'¿Qué administra AWS en una base gestionada y qué queda en manos del cliente?',
			'¿Cuándo tiene sentido alojar la base en Amazon EC2 en lugar de usar un servicio gestionado?',
		],
	},
	{
		id: '3.4-g2',
		titulo: 'Bases de datos relacionales: Amazon RDS y Amazon Aurora',
		objetivos: ['3.4#3', '3.4#4'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'El modelo **relacional** guarda los datos en tablas con filas y columnas, con un esquema definido y consultas SQL. Las dos opciones gestionadas del alcance son:\n\n- **`Amazon RDS`**: servicio gestionado que ejecuta motores conocidos (MySQL, PostgreSQL, MariaDB, Oracle y SQL Server) sin que el equipo administre el sistema operativo. Cubre copias de seguridad automáticas, parches y réplicas de lectura.\n- **`Amazon Aurora`**: motor relacional gestionado por AWS, compatible con MySQL y PostgreSQL, con almacenamiento distribuido y replicación integrada. Está pensado para cargas exigentes que necesitan más rendimiento y disponibilidad que una instancia estándar, y sigue siendo relacional: se consulta con SQL.\n\nElegir relacional no es solo una cuestión de motor: si los datos tienen relaciones claras (pedidos y clientes, cuentas y movimientos) y las consultas son transaccionales, el modelo relacional encaja. La alternativa gestionada frente a una base en `Amazon EC2` es la misma decisión del grupo anterior: AWS administra la infraestructura y el equipo se queda con el esquema, los índices y las consultas.',
			},
			{
				tipo: 'comparacion',
				parId: 'rds-vs-aurora-vs-dynamodb',
			},
			{
				tipo: 'escenario',
				situacion:
					'Una plataforma de ventas necesita un motor relacional compatible con PostgreSQL, con lecturas intensivas y alta disponibilidad entre varias Availability Zones, y el equipo quiere administrar lo mínimo posible.',
				analisis:
					'`Amazon Aurora` aporta el modelo relacional con compatibilidad PostgreSQL, almacenamiento replicado y réplicas de lectura, sin que el equipo gestione el sistema operativo ni la conmutación. Si el requisito fuera un motor concreto no soportado por Aurora, la alternativa sería `Amazon RDS`.',
				servicio: 'Amazon Aurora',
			},
			{
				tipo: 'errorComun',
				error: 'Confundir `Amazon Aurora` con una base NoSQL por su escalado, o suponer que `Amazon RDS` obliga a administrar el sistema operativo.',
				correccion:
					'`Amazon Aurora` es **relacional** y se consulta con SQL; su escalado no la convierte en NoSQL. Y `Amazon RDS` es gestionado: AWS se encarga del sistema operativo y de las tareas de mantenimiento del motor.',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Usa `Amazon RDS` cuando necesites un motor relacional conocido y no quieras administrar la instancia.',
					'Usa `Amazon Aurora` cuando el rendimiento, la disponibilidad y las réplicas de lectura sean exigentes y el motor compatible (MySQL o PostgreSQL) sea suficiente.',
				],
				noUsar: [
					'No uses una base relacional si el dato es clave-valor con acceso por clave y escala impredecible: ahí encaja mejor una base NoSQL.',
					'No elijas `Amazon Aurora` solo por marketing: si un motor concreto no compatible es un requisito, `Amazon RDS` es la vía.',
				],
			},
		],
		preguntasGuia: [
			'¿Qué diferencia hay entre Amazon RDS y Amazon Aurora dentro del modelo relacional?',
			'¿Qué tareas de administración asume AWS en una base relacional gestionada?',
			'¿Cuándo conviene una base relacional y cuándo no?',
		],
	},
	{
		id: '3.4-g3',
		titulo: 'Bases de datos NoSQL y en memoria: Amazon DynamoDB y Amazon ElastiCache',
		objetivos: ['3.4#5', '3.4#6'],
		bloques: [
			{
				tipo: 'concepto',
				md: '**`Amazon DynamoDB`** es la base **NoSQL** gestionada de referencia: almacena elementos identificados por una clave, admite un modelo clave-valor y documento, y escala de forma horizontal con latencia de milisegundos sin que el equipo administre servidores. No se consulta con SQL tradicional y no exige un esquema fijo.\n\n**`Amazon ElastiCache`** es un almacén **en memoria**: mantiene los datos en RAM para responder en microsegundos y se usa sobre todo como **caché** delante de una base relacional o NoSQL, descargando lecturas repetidas. No es una base persistente de propósito general: si la caché se apaga, los datos volátiles se pierden.\n\nLa diferencia se ve en el rol: DynamoDB es la **fuente de verdad** para datos NoSQL, mientras que ElastiCache **acelera** el acceso a datos que viven en otra base. También hay bases NoSQL especializadas en el alcance: `Amazon DocumentDB` para documentos compatibles con MongoDB y `Amazon Neptune` para grafos.',
			},
			{
				tipo: 'comparacion',
				parId: 'relacional-vs-nosql-vs-memoria',
			},
			{
				tipo: 'escenario',
				situacion:
					'Una aplicación móvil con millones de usuarios guarda sesiones y perfiles por clave, con tráfico muy variable, y no puede dedicar un equipo a administrar servidores de base de datos.',
				analisis:
					'`Amazon DynamoDB` ofrece el modelo clave-valor con escalado gestionado y latencia de milisegundos, justo lo que pide el patrón de acceso por clave. Una base relacional añadiría administración de esquema e instancias que aquí no aportan valor.',
				servicio: 'Amazon DynamoDB',
			},
			{
				tipo: 'errorComun',
				error: 'Usar `Amazon ElastiCache` como base de datos principal persistente, o creer que `Amazon DynamoDB` es una base relacional porque acepta tablas.',
				correccion:
					'`Amazon ElastiCache` es una capa en memoria pensada para caché; los datos críticos deben persistir en una base como `Amazon RDS`, `Amazon Aurora` o `Amazon DynamoDB`. Y `Amazon DynamoDB` es NoSQL: su unidad es el elemento con clave, no la fila de una tabla relacional con esquema fijo.',
			},
			{
				tipo: 'clave',
				items: [
					'DynamoDB = NoSQL clave-valor y documento, gestionado, escala horizontal.',
					'ElastiCache = en memoria, se usa como caché delante de otra base.',
					'DocumentDB = documental (MongoDB); Neptune = grafos.',
					'La caché acelera; no sustituye al almacenamiento persistente.',
				],
			},
		],
		preguntasGuia: [
			'¿Qué tipo de base de datos es Amazon DynamoDB y cómo se consulta?',
			'¿Para qué sirve Amazon ElastiCache y por qué no es una base persistente?',
			'¿Cuándo conviene una base NoSQL frente a una relacional?',
		],
	},
	{
		id: '3.4-g4',
		titulo: 'Migración de bases de datos: AWS DMS y AWS SCT',
		objetivos: ['3.4#2', '3.4#7'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'Migrar una base de datos a AWS puede ser **homogénea** (mismo motor, por ejemplo de MySQL local a MySQL gestionado) o **heterogénea** (motor distinto, por ejemplo de Oracle a PostgreSQL). Para cubrirlo, AWS ofrece dos herramientas complementarias:\n\n- **`AWS Database Migration Service (AWS DMS)`**: mueve y **replica los datos** entre un origen y un destino, incluso con motores distintos, y permite **replicación continua** para reducir el tiempo de inactividad durante el corte.\n- **`AWS Schema Conversion Tool (AWS SCT)`**: convierte el **esquema y el código** (procedimientos, vistas) de un motor a otro, paso imprescindible en las migraciones heterogéneas.\n\nEl patrón habitual combina ambos: primero se convierte el esquema con `AWS SCT` y después se replican los datos con `AWS DMS`. `AWS Migration Hub` sirve para seguir el progreso de la migración desde un único lugar, y `AWS Application Migration Service` cubre la migración de servidores completos, no solo de la base de datos.',
			},
			{
				tipo: 'comparacion',
				parId: 'dms-vs-sct',
			},
			{
				tipo: 'escenario',
				situacion:
					'Una empresa quiere mover su base de datos Oracle local a `Amazon Aurora` PostgreSQL con el mínimo tiempo de inactividad y sin reescribir el esquema a mano.',
				analisis:
					'Es una migración heterogénea: `AWS Schema Conversion Tool (AWS SCT)` convierte el esquema y el código incompatible, y `AWS Database Migration Service (AWS DMS)` replica los datos de forma continua hasta que se hace el corte final. Así la aplicación sigue operando contra el origen mientras se sincroniza el destino.',
				servicio: 'AWS Database Migration Service (AWS DMS)',
			},
			{
				tipo: 'errorComun',
				error: 'Pensar que `AWS DMS` convierte el esquema por sí solo, o que `AWS SCT` mueve los datos.',
				correccion:
					'Son herramientas complementarias: `AWS DMS` mueve y replica datos; `AWS SCT` convierte el esquema y el código entre motores. En una migración heterogénea se usan las dos, primero la conversión y después la réplica.',
			},
			{
				tipo: 'ejemplo',
				md: '```text\nMigración homogénea (MySQL -> MySQL gestionado):\n  AWS DMS mueve los datos, el esquema encaja sin cambios\n\nMigración heterogénea (Oracle -> PostgreSQL en Amazon Aurora):\n  AWS SCT convierte esquema y código\n  AWS DMS replica los datos hasta el corte\n```',
			},
		],
		preguntasGuia: [
			'¿En qué se diferencian una migración homogénea y una heterogénea?',
			'¿Qué hace AWS DMS y qué hace AWS SCT?',
			'¿Cómo se reduce el tiempo de inactividad al migrar una base de datos?',
		],
	},
];
