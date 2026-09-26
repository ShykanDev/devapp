import type { PreguntaProfesionalClfC02 } from '@/data/clfC02/profesional/types';

export const profesionalTask36: PreguntaProfesionalClfC02[] = [
	{
		id: 'prof-3.6-q1',
		taskId: '3.6',
		objetivos: ['3.6#1', '3.6#2'],
		tipo: 'comparacion',
		question:
			'¿Qué afirmación distingue correctamente el almacenamiento de objetos del de bloque y del de archivos?',
		options: [
			'El de objetos guarda datos completos con metadatos y acceso por API; el de bloque expone volúmenes tipo disco y el de archivos comparte un sistema de archivos por red.',
			'El de objetos expone un disco formateable y el de bloque se accede solo por API, mientras que el de archivos es siempre local.',
			'El de archivos admite una sola instancia conectada a la vez y el de bloque se comparte por red entre muchas instancias, sin distinción de semántica ni de rendimiento.',
			'Los tres modelos son equivalentes, se acceden igual por API y solo cambia el nombre del servicio que los ofrece en cada una de las regiones.',
		],
		correctAnswer: 0,
		explanation:
			'Cada modelo resuelve un caso distinto: objetos para datos completos con metadatos y acceso por API (Amazon S3), bloque para volúmenes tipo disco de las instancias (Amazon EBS) y archivos para sistemas de archivos compartidos por red (Amazon EFS). Si el requisito fuera montar un disco con sistema de archivos, el modelo adecuado sería el de bloque.',
		porQueOpcion: [
			'Correcta: asigna a cada modelo su semántica de acceso.',
			'Incorrecto: el disco formateable es almacenamiento en bloque, no de objetos.',
			'Incorrecto: el sistema de archivos compartido es el de archivos, no el de bloque.',
			'Incorrecto: difieren en cómo se accede y para qué se usan.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/s3/',
			'https://docs.aws.amazon.com/ebs/',
			'https://docs.aws.amazon.com/efs/',
		],
	},
	{
		id: 'prof-3.6-q2',
		taskId: '3.6',
		objetivos: ['3.6#3'],
		tipo: 'escenario',
		question:
			'Una empresa guarda informes que se consultan a diario durante un mes y después casi nunca. Quiere minimizar el coste sin perder acceso. ¿Qué configuración de clases de almacenamiento es correcta?',
		options: [
			'Empezar en una clase de acceso frecuente y transicionar a clases más frías con una política de ciclo de vida.',
			'Empezar directamente en una clase de archivado profundo y consultarlos a diario desde ahí.',
			'Dejar todo en la clase de acceso frecuente durante el mes y no definir ninguna regla de transición.',
			'Usar el almacenamiento local de una instancia, que es la opción más barata para guardar objetos.',
		],
		correctAnswer: 0,
		explanation:
			'Las clases de Amazon S3 intercambian coste por latencia y disponibilidad. Para un patrón de acceso que envejece, se empieza en acceso frecuente y se transiciona a clases más frías mediante una política de ciclo de vida, evitando los recargos y latencias del archivado durante el mes de uso intensivo. Si el escenario tuviera un patrón de acceso desconocido desde el principio, convendría una clase que mueva los objetos automáticamente según su uso.',
		porQueOpcion: [
			'Correcta: ajusta la clase al patrón de acceso con transiciones automáticas.',
			'Incorrecto: el archivado encarece y ralentiza las consultas diarias.',
			'Incorrecto: no optimizar deja el coste alto sin aprovechar clases más baratas.',
			'Incorrecto: el almacenamiento local de una instancia es efímero y no almacena objetos.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/s3/',
		],
	},
	{
		id: 'prof-3.6-q3',
		taskId: '3.6',
		objetivos: ['3.6#4'],
		tipo: 'comparacion',
		question:
			'Un equipo detiene una instancia cuyos datos deben conservarse y, además, usa almacenamiento local del host como caché reconstruible. ¿Qué diferencia entre ambos tipos de almacenamiento justifica esas decisiones?',
		options: [
			'Amazon EBS es un volumen de bloque persistente de red; el instance store es almacenamiento local efímero que se pierde al detener la instancia.',
			'El instance store es persistente y conserva los datos al detener la instancia, mientras que Amazon EBS es efímero y se pierde al reiniciar o mover la instancia.',
			'Ambos son almacenamiento de objetos accesible por API y se facturan por operaciones de lectura y escritura.',
			'Amazon EBS se comparte como sistema de archivos por red entre varias instancias a la vez.',
		],
		correctAnswer: 0,
		explanation:
			'Amazon EBS ofrece volúmenes de bloque persistentes, con snapshots y cifrado, asociados a la instancia. El instance store es almacenamiento local del host, más rápido pero efímero: sus datos se pierden al detener, mover o terminar la instancia. Si cambia el objetivo a la máxima velocidad para una caché reconstruible, el almacenamiento local sería la opción adecuada.',
		porQueOpcion: [
			'Correcta: contrapone persistencia en red frente a almacenamiento local efímero.',
			'Incorrecto: invierte las características de ambos.',
			'Incorrecto: ambos son almacenamiento en bloque, no de objetos.',
			'Incorrecto: el volumen de bloque se asocia a la instancia, no se comparte como sistema de archivos.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/ebs/',
		],
	},
	{
		id: 'prof-3.6-q4',
		taskId: '3.6',
		objetivos: ['3.6#5'],
		tipo: 'servicio',
		question:
			'Un clúster de instancias Linux necesita compartir archivos que crecen y decrecen, y una granja de servidores Windows requiere un recurso compartido compatible con SMB. El equipo no quiere administrar servidores de archivos. ¿Qué servicios encajan?',
		options: [
			'Amazon EFS para Linux y Amazon FSx para Windows.',
			'Amazon S3 para las instancias Linux y Amazon EBS para las instancias con Windows.',
			'Amazon EBS para ambos casos.',
			'AWS Storage Gateway para ambos casos.',
		],
		correctAnswer: 0,
		explanation:
			'Amazon EFS es el sistema de archivos compartido y elástico para Linux, y Amazon FSx cubre sistemas de archivos gestionados para motores concretos, como Windows File Server. Amazon EBS es almacenamiento en bloque de una sola instancia. Si cambia el requisito a un disco persistente para una única instancia, la respuesta sería Amazon EBS.',
		porQueOpcion: [
			'Correcta: asigna cada sistema de archivos a su caso.',
			'Incorrecto: Amazon S3 es de objetos y Amazon EBS es de bloque para una instancia.',
			'Incorrecto: Amazon EBS es bloque, no un sistema de archivos compartido.',
			'Incorrecto: AWS Storage Gateway es la puerta de enlace híbrida, no el sistema de archivos gestionado.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/efs/',
			'https://docs.aws.amazon.com/fsx/',
			'https://docs.aws.amazon.com/s3/',
			'https://docs.aws.amazon.com/ebs/',
			'https://docs.aws.amazon.com/storagegateway/',
		],
	},
	{
		id: 'prof-3.6-q5',
		taskId: '3.6',
		objetivos: ['3.6#6'],
		tipo: 'servicio',
		question: '¿Para qué sirve principalmente una puerta de enlace de almacenamiento híbrida?',
		options: [
			'Para conectar el entorno local con el almacenamiento en AWS, manteniendo en caché local los datos de acceso reciente.',
			'Para sustituir al almacenamiento de objetos y guardar los archivos directamente en el entorno local.',
			'Para ejecutar máquinas virtuales en las ubicaciones de borde y servirlas a los usuarios.',
			'Para copiar bases de datos entre regiones y sincronizarlas de forma continua.',
		],
		correctAnswer: 0,
		explanation:
			'AWS Storage Gateway es la puerta de enlace híbrida que da a las aplicaciones locales acceso con caché a los datos almacenados en AWS, reduciendo la latencia de los datos calientes mientras el resto se sirve desde la nube. Si el escenario tuviera las aplicaciones ya en AWS y solo necesitara archivos compartidos, la puerta de enlace no haría falta.',
		porQueOpcion: [
			'Correcta: describe el acceso híbrido con caché local.',
			'Incorrecto: no sustituye al almacenamiento de objetos, lo complementa desde el entorno local.',
			'Incorrecto: no ejecuta cómputo; es una puerta de enlace de almacenamiento.',
			'Incorrecto: la copia entre regiones es función de otros servicios, no de la puerta de enlace.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/storagegateway/',
		],
	},
	{
		id: 'prof-3.6-q6',
		taskId: '3.6',
		objetivos: ['3.6#7', '3.6#8'],
		tipo: 'comparacion',
		question:
			'¿Qué distingue a una política de ciclo de vida de un servicio centralizado de copias de seguridad?',
		options: [
			'La política de ciclo de vida transiciona y expira objetos según su antigüedad; las copias de seguridad centralizan y programan respaldos de varios servicios con retención.',
			'Las copias de seguridad son las que transicionan los objetos entre clases de almacenamiento y la política de ciclo de vida es la que crea las copias recuperables.',
			'Ambas solo se aplican a volúmenes de bloque y no cubren objetos ni sistemas de archivos.',
			'Son lo mismo: las dos mueven datos a clases más baratas y crean copias recuperables a la vez.',
		],
		correctAnswer: 0,
		explanation:
			'La política de ciclo de vida gobierna la vida del objeto en Amazon S3, moviéndolo entre clases y expirándolo. AWS Backup define, programa y supervisa copias de seguridad de servicios como Amazon EBS, Amazon EFS y Amazon FSx, con políticas y retención. Si el objetivo fuera solo abaratar el dato frío, bastaría con la política de ciclo de vida.',
		porQueOpcion: [
			'Correcta: separa optimización por antigüedad de protección con copias.',
			'Incorrecto: intercambia las funciones de ambas.',
			'Incorrecto: la política de ciclo de vida es de objetos, no solo de volúmenes de bloque.',
			'Incorrecto: tienen propósitos distintos, una optimiza coste y la otra protege datos.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/s3/',
			'https://docs.aws.amazon.com/aws-backup/',
			'https://docs.aws.amazon.com/ebs/',
			'https://docs.aws.amazon.com/efs/',
			'https://docs.aws.amazon.com/fsx/',
		],
	},
];
