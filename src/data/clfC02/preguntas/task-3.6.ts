import type { PreguntaClfC02 } from '@/data/clfC02/types';

export const preguntasTask36: PreguntaClfC02[] = [
	{
		id: '3.6-q1',
		taskId: '3.6',
		objetivos: ['3.6#1'],
		tipo: 'conocimiento',
		question:
			'¿Qué describe correctamente el modelo de almacenamiento de objetos frente al de bloque y al de archivos?',
		options: [
			'El de objetos expone un disco con sectores que el sistema operativo formatea.',
			'El de objetos guarda datos completos accesibles por API, con metadatos y sin edición parcial.',
			'El de archivos solo permite una instancia conectada a la vez.',
			'El de bloque está pensado para contenido estático servido directamente a internet.',
		],
		correctAnswer: 1,
		explanation:
			'El almacenamiento de objetos trata cada dato como una unidad completa con metadatos, accesible por API y sin edición por bloques. El modelo de bloque expone un volumen tipo disco para las instancias y el de archivos ofrece un sistema de archivos compartido por red.',
	},
	{
		id: '3.6-q2',
		taskId: '3.6',
		objetivos: ['3.6#2'],
		tipo: 'comparacion',
		question:
			'Un equipo debe elegir dónde guardar tres cosas: imágenes servidas por una API, el volumen de una base de datos y archivos compartidos entre varias instancias Linux. ¿Qué asignación es correcta?',
		options: [
			'Imágenes en bloque, base de datos en objetos y archivos compartidos en caché.',
			'Imágenes en objetos, base de datos en bloque y archivos compartidos en archivos.',
			'Todo en almacenamiento en bloque para simplificar la operación.',
			'Imágenes en archivos, base de datos en objetos y archivos compartidos en bloque.',
		],
		correctAnswer: 1,
		explanation:
			'Las imágenes servidas por API encajan en almacenamiento de objetos; el volumen de una base de datos es almacenamiento en bloque por su semántica de disco; y los archivos compartidos entre varias instancias Linux corresponden a un sistema de archivos de red.',
	},
	{
		id: '3.6-q3',
		taskId: '3.6',
		objetivos: ['3.6#2'],
		tipo: 'escenario',
		question:
			'Una empresa sube documentos que deben conservarse íntegros durante años y casi nunca se leen. Quiere el menor coste posible sin perderlos. ¿Qué enfoque es correcto?',
		options: [
			'Guardarlos como objetos y moverlos con una política de ciclo de vida a clases más frías.',
			'Guardarlos en el instance store de una instancia para abaratar.',
			'Montarlos como disco de instancia y hacer snapshots cada hora.',
			'Dejarlos en la clase de acceso más rápido para evitar recargos por recuperación.',
		],
		correctAnswer: 0,
		explanation:
			'El almacenamiento de objetos con una política de ciclo de vida es el patrón correcto: los documentos se conservan y se transicionan a clases más baratas cuando dejan de consultarse. El instance store es efímero y el bloque no es el modelo pensado para archivos completos servidos por API.',
	},
	{
		id: '3.6-q4',
		taskId: '3.6',
		objetivos: ['3.6#3'],
		tipo: 'comparacion',
		question: '¿Qué distingue a las clases de almacenamiento de Amazon S3 entre sí?',
		options: [
			'Solo cambian de nombre; el precio y el comportamiento son idénticos.',
			'Cambian el modelo de acceso y el coste: unas priorizan acceso inmediato y otras abaratan el almacenamiento a cambio de menor disponibilidad o de tiempo de recuperación.',
			'Cambian el motor de base de datos subyacente.',
			'Cambian el cifrado que se puede aplicar a los objetos.',
		],
		correctAnswer: 1,
		explanation:
			'Las clases de Amazon S3 intercambian coste por latencia, disponibilidad y tiempo de recuperación. Las de acceso inmediato sirven datos calientes y las de archivado abaratan el almacenamiento de datos fríos a cambio de una recuperación más lenta.',
	},
	{
		id: '3.6-q5',
		taskId: '3.6',
		objetivos: ['3.6#3'],
		tipo: 'escenario',
		question:
			'Una aplicación genera registros que se consultan a diario durante una semana y luego deben conservarse un año con acceso casi nulo. ¿Qué configuración es correcta?',
		options: [
			'Dejarlo todo en la clase de acceso frecuente y no definir reglas.',
			'Empezar en la clase de acceso frecuente, transicionar a una clase de acceso poco frecuente y archivar al final con una política de ciclo de vida.',
			'Empezar directamente en la clase de archivado profundo y consultar cada día desde ahí.',
			'Guardar los registros en un volumen de bloque y borrarlos a la semana.',
		],
		correctAnswer: 1,
		explanation:
			'La política de ciclo de vida va moviendo los objetos según envejecen: acceso frecuente mientras se consultan, acceso poco frecuente después y archivado cuando el acceso es casi nulo. Empezar en archivado encarecería las consultas diarias.',
	},
	{
		id: '3.6-q6',
		taskId: '3.6',
		objetivos: ['3.6#4'],
		tipo: 'comparacion',
		question: '¿Qué diferencia hay entre un volumen de Amazon EBS y el instance store de una instancia?',
		options: [
			'El instance store es persistente y Amazon EBS es efímero.',
			'Amazon EBS es almacenamiento en bloque persistente de red; el instance store es almacenamiento local efímero que se pierde al detener la instancia.',
			'Ambos son almacenamiento de objetos accesible por API.',
			'Ambos se comparten por red entre varias instancias como un sistema de archivos.',
		],
		correctAnswer: 1,
		explanation:
			'Amazon EBS es un volumen de bloque persistente asociado a la instancia, con snapshots y cifrado. El instance store es almacenamiento local del host, más rápido pero efímero: sus datos desaparecen al detener, mover o terminar la instancia.',
	},
	{
		id: '3.6-q7',
		taskId: '3.6',
		objetivos: ['3.6#4'],
		tipo: 'tradeoff',
		question:
			'Una instancia necesita la máxima velocidad para una caché temporal que se puede reconstruir, pero también un volumen para datos que deben sobrevivir. ¿Qué compromiso es correcto?',
		options: [
			'Usar solo instance store para ambos.',
			'Usar solo Amazon EBS para ambos.',
			'Usar instance store para la caché reconstruible y Amazon EBS para los datos persistentes.',
			'Guardar ambos datos en un bucket de objetos.',
		],
		correctAnswer: 2,
		explanation:
			'El tradeoff es rendimiento frente a persistencia: el instance store es la opción más rápida para datos temporales reconstruibles, mientras que Amazon EBS aporta persistencia, snapshots y cifrado para los datos que no se pueden perder.',
	},
	{
		id: '3.6-q8',
		taskId: '3.6',
		objetivos: ['3.6#5'],
		tipo: 'conocimiento',
		question:
			'Una empresa necesita un sistema de archivos compartido y elástico para aplicaciones Linux en varias instancias y, por separado, un sistema de archivos gestionado para Windows. ¿Qué servicios corresponden?',
		options: [
			'Amazon S3 para Linux y Amazon EBS para Windows.',
			'Amazon EFS para Linux y Amazon FSx para Windows.',
			'AWS Storage Gateway para ambos casos.',
			'Amazon EBS para ambos casos.',
		],
		correctAnswer: 1,
		explanation:
			'Amazon EFS es el sistema de archivos compartido y elástico para Linux, y Amazon FSx cubre sistemas de archivos gestionados para motores concretos, como Windows File Server.',
	},
	{
		id: '3.6-q9',
		taskId: '3.6',
		objetivos: ['3.6#5', '3.6#6'],
		tipo: 'comparacion',
		question: '¿Qué distingue a Amazon EFS y Amazon FSx de AWS Storage Gateway?',
		options: [
			'Los tres son servicios de almacenamiento de objetos.',
			'Amazon EFS y Amazon FSx son sistemas de archivos gestionados en AWS; AWS Storage Gateway es una puerta de enlace híbrida que da acceso con caché local a datos almacenados en AWS.',
			'AWS Storage Gateway es un sistema de archivos y Amazon EFS es una puerta de enlace.',
			'Solo se diferencian en la región donde se despliegan.',
		],
		correctAnswer: 1,
		explanation:
			'Amazon EFS y Amazon FSx alojan sistemas de archivos gestionados en AWS para consumirse desde las instancias. AWS Storage Gateway es la pieza híbrida: mantiene una caché local de los datos de acceso reciente y sirve el resto bajo demanda desde el almacenamiento en AWS.',
	},
	{
		id: '3.6-q10',
		taskId: '3.6',
		objetivos: ['3.6#6'],
		tipo: 'servicio',
		question: '¿Para qué sirve principalmente AWS Storage Gateway?',
		options: [
			'Para sustituir a Amazon S3 como almacenamiento de objetos.',
			'Para conectar el entorno local con el almacenamiento en AWS, manteniendo en caché local los datos de acceso reciente.',
			'Para ejecutar máquinas virtuales en el edge.',
			'Para copiar bases de datos entre regiones.',
		],
		correctAnswer: 1,
		explanation:
			'AWS Storage Gateway es la puerta de enlace híbrida que da a las aplicaciones locales acceso con caché a datos que residen en AWS. No sustituye a Amazon S3 ni ejecuta cómputo.',
	},
	{
		id: '3.6-q11',
		taskId: '3.6',
		objetivos: ['3.6#7'],
		tipo: 'casoDeUso',
		question:
			'Una empresa almacena en Amazon S3 millones de objetos cuya frecuencia de acceso baja con el tiempo. Quiere reducir costes de forma automática y sin intervención manual. ¿Qué debe usar?',
		options: [
			'Una política de ciclo de vida que transicione los objetos entre clases y los expire.',
			'Un volumen de Amazon EBS de mayor tamaño.',
			'Snapshots manuales cada semana.',
			'Un sistema de archivos Amazon FSx.',
		],
		correctAnswer: 0,
		explanation:
			'La política de ciclo de vida automatiza el movimiento de objetos entre clases de almacenamiento y su expiración, bajando el coste sin operación manual. Los snapshots y los sistemas de archivos no resuelven la optimización por antigüedad de objetos.',
	},
	{
		id: '3.6-q12',
		taskId: '3.6',
		objetivos: ['3.6#8'],
		tipo: 'conocimiento',
		question: '¿Qué aporta AWS Backup en una estrategia de protección de datos?',
		options: [
			'Mueve los objetos fríos a clases más baratas.',
			'Centraliza y automatiza las copias de seguridad de varios servicios con políticas y retención definidas.',
			'Sustituye a las políticas de ciclo de vida de Amazon S3.',
			'Reemplaza el cifrado de los volúmenes.',
		],
		correctAnswer: 1,
		explanation:
			'AWS Backup define, programa y supervisa copias de seguridad de varios servicios, como volúmenes de Amazon EBS y sistemas de archivos Amazon EFS y Amazon FSx, con políticas y retención. No sustituye al ciclo de vida ni al cifrado.',
	},
];
