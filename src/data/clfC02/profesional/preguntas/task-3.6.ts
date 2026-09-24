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
			'El de objetos guarda datos completos accesibles por API con metadatos; el de bloque expone volúmenes tipo disco y el de archivos ofrece un sistema de archivos compartido por red.',
			'El de objetos expone un disco formateable y el de bloque se accede solo por API.',
			'El de archivos admite una sola instancia conectada y el de bloque se comparte por red.',
			'Los tres modelos son equivalentes y solo cambia el servicio que los ofrece.',
		],
		correctAnswer: 0,
		explanation:
			'Cada modelo resuelve un caso distinto: objetos para datos completos con metadatos y acceso por API (Amazon S3), bloque para volúmenes tipo disco de las instancias (Amazon EBS) y archivos para sistemas de archivos compartidos por red (Amazon EFS).',
		porQueOpcion: [
			'Correcta: asigna a cada modelo su semántica de acceso.',
			'Incorrecto: el disco formateable es almacenamiento en bloque, no de objetos.',
			'Incorrecto: el sistema de archivos compartido es el de archivos, no el de bloque.',
			'Incorrecto: difieren en cómo se accede y para qué se usan.',
		],
	},
	{
		id: 'prof-3.6-q2',
		taskId: '3.6',
		objetivos: ['3.6#3'],
		tipo: 'escenario',
		question:
			'Una empresa guarda informes que se consultan a diario durante un mes y después casi nunca. Quiere minimizar el coste sin perder acceso. ¿Qué configuración de clases de Amazon S3 es correcta?',
		options: [
			'Empezar en una clase de acceso frecuente y transicionar a clases más frías con una política de ciclo de vida.',
			'Empezar directamente en una clase de archivado profundo y consultarlos a diario desde ahí.',
			'Dejar todo en la clase de acceso frecuente y no definir reglas.',
			'Usar el instance store de una instancia, que es la opción más barata para objetos.',
		],
		correctAnswer: 0,
		explanation:
			'Las clases de Amazon S3 intercambian coste por latencia y disponibilidad. Para un patrón de acceso que envejece, se empieza en acceso frecuente y se transiciona a clases más frías mediante una política de ciclo de vida, evitando los recargos y latencias del archivado durante el mes de uso intensivo.',
		porQueOpcion: [
			'Correcta: ajusta la clase al patrón de acceso con transiciones automáticas.',
			'Incorrecto: el archivado encarece y ralentiza las consultas diarias.',
			'Incorrecto: no optimizar deja el coste alto sin aprovechar clases más baratas.',
			'Incorrecto: el instance store es efímero y no almacena objetos.',
		],
	},
	{
		id: 'prof-3.6-q3',
		taskId: '3.6',
		objetivos: ['3.6#4'],
		tipo: 'comparacion',
		question: '¿Qué distingue a Amazon EBS del instance store de una instancia?',
		options: [
			'Amazon EBS es un volumen de bloque persistente de red; el instance store es almacenamiento local efímero que se pierde al detener la instancia.',
			'El instance store es persistente y Amazon EBS es efímero.',
			'Ambos son almacenamiento de objetos accesible por API.',
			'Amazon EBS se comparte como sistema de archivos entre varias instancias.',
		],
		correctAnswer: 0,
		explanation:
			'Amazon EBS ofrece volúmenes de bloque persistentes, con snapshots y cifrado, asociados a la instancia. El instance store es almacenamiento local del host, más rápido pero efímero: sus datos se pierden al detener, mover o terminar la instancia.',
		porQueOpcion: [
			'Correcta: contrapone persistencia en red frente a almacenamiento local efímero.',
			'Incorrecto: invierte las características de ambos.',
			'Incorrecto: ambos son almacenamiento en bloque, no de objetos.',
			'Incorrecto: el volumen de bloque se asocia a la instancia, no se comparte como sistema de archivos.',
		],
	},
	{
		id: 'prof-3.6-q4',
		taskId: '3.6',
		objetivos: ['3.6#5'],
		tipo: 'servicio',
		question:
			'Una empresa necesita un sistema de archivos compartido y elástico para instancias Linux y, por otro lado, un sistema de archivos gestionado para Windows. ¿Qué servicios corresponden?',
		options: [
			'Amazon EFS para Linux y Amazon FSx para Windows.',
			'Amazon S3 para Linux y Amazon EBS para Windows.',
			'Amazon EBS para ambos casos.',
			'AWS Storage Gateway para ambos casos.',
		],
		correctAnswer: 0,
		explanation:
			'Amazon EFS es el sistema de archivos compartido y elástico para Linux, y Amazon FSx cubre sistemas de archivos gestionados para motores concretos, como Windows File Server. Amazon EBS es almacenamiento en bloque de una sola instancia.',
		porQueOpcion: [
			'Correcta: asigna cada sistema de archivos a su caso.',
			'Incorrecto: Amazon S3 es de objetos y Amazon EBS es de bloque para una instancia.',
			'Incorrecto: Amazon EBS es bloque, no un sistema de archivos compartido.',
			'Incorrecto: AWS Storage Gateway es la puerta de enlace híbrida, no el sistema de archivos gestionado.',
		],
	},
	{
		id: 'prof-3.6-q5',
		taskId: '3.6',
		objetivos: ['3.6#6'],
		tipo: 'servicio',
		question: '¿Para qué sirve principalmente AWS Storage Gateway?',
		options: [
			'Para conectar el entorno local con el almacenamiento en AWS, manteniendo en caché local los datos de acceso reciente.',
			'Para sustituir a Amazon S3 como almacenamiento de objetos.',
			'Para ejecutar máquinas virtuales en las edge locations.',
			'Para copiar bases de datos entre Regiones.',
		],
		correctAnswer: 0,
		explanation:
			'AWS Storage Gateway es la puerta de enlace híbrida que da a las aplicaciones locales acceso con caché a los datos almacenados en AWS, reduciendo la latencia de los datos calientes mientras el resto se sirve desde la nube.',
		porQueOpcion: [
			'Correcta: describe el acceso híbrido con caché local.',
			'Incorrecto: no sustituye a Amazon S3, lo complementa desde el entorno local.',
			'Incorrecto: no ejecuta cómputo; es una puerta de enlace de almacenamiento.',
			'Incorrecto: la copia entre Regiones es función de otros servicios, no de la puerta de enlace.',
		],
	},
	{
		id: 'prof-3.6-q6',
		taskId: '3.6',
		objetivos: ['3.6#7', '3.6#8'],
		tipo: 'comparacion',
		question: '¿Qué distingue una política de ciclo de vida de Amazon S3 de AWS Backup?',
		options: [
			'La política de ciclo de vida transiciona y expira objetos según su antigüedad; AWS Backup centraliza y programa copias de seguridad de varios servicios con retención.',
			'AWS Backup transiciona los objetos entre clases y la política de ciclo de vida crea copias de seguridad.',
			'Ambas solo se aplican a volúmenes de Amazon EBS.',
			'Son lo mismo: las dos mueven datos a clases más baratas.',
		],
		correctAnswer: 0,
		explanation:
			'La política de ciclo de vida gobierna la vida del objeto en Amazon S3, moviéndolo entre clases y expirándolo. AWS Backup define, programa y supervisa copias de seguridad de servicios como Amazon EBS, Amazon EFS y Amazon FSx, con políticas y retención.',
		porQueOpcion: [
			'Correcta: separa optimización por antigüedad de protección con copias.',
			'Incorrecto: intercambia las funciones de ambas.',
			'Incorrecto: la política de ciclo de vida es de Amazon S3, no de Amazon EBS.',
			'Incorrecto: tienen propósitos distintos, una optimiza coste y la otra protege datos.',
		],
	},
];
