import type { ParConfusionClfC02 } from '@/data/clfC02/types';

export const paresTask36: ParConfusionClfC02[] = [
	{
		id: 's3-vs-ebs-vs-efs',
		etiqueta: 'Almacenamiento de objetos, de bloque y de archivos',
		a: {
			titulo: 'Almacenamiento de objetos (Amazon S3)',
			resumen:
				'Guarda cada dato como un objeto completo con metadatos y una clave, dentro de un contenedor plano, accesible por API y prácticamente sin límite de escala. Es la opción para contenido estático, copias y datos que se leen como un todo.',
		},
		b: {
			titulo: 'Bloque y archivos (Amazon EBS, instance store, Amazon EFS y Amazon FSx)',
			resumen:
				'El bloque entrega volúmenes tipo disco a las instancias, persistentes con Amazon EBS o locales y efímeros con instance store. Los archivos ofrecen un sistema de archivos compartido por red: Amazon EFS para Linux y Amazon FSx para motores concretos.',
		},
		diferenciaClave:
			'El objeto se accede por API y no se edita parcialmente; el bloque es un disco que gestiona el sistema operativo de una instancia; el archivo es una jerarquía de rutas compartida por varias instancias. La elección depende de si el consumidor es una aplicación por API, una instancia con disco o varios hosts con sistema de archivos.',
		cuandoA: [
			'Cuando sirves contenido estático, guardas copias o alimentas un data lake accedido por API.',
			'Cuando quieres escalado prácticamente ilimitado, versionado y clases de almacenamiento con ciclo de vida.',
		],
		cuandoB: [
			'Cuando una instancia necesita un disco persistente (Amazon EBS) o el máximo rendimiento local efímero (instance store).',
			'Cuando varias instancias deben compartir la misma jerarquía de archivos por red (Amazon EFS o Amazon FSx).',
		],
		escenarioA:
			'Una aplicación web sube imágenes de producto a un bucket y las sirve a los usuarios por API. Cada imagen se reemplaza entera cuando cambia y una política de ciclo de vida la mueve a una clase fría con el tiempo.',
		escenarioB:
			'El equipo de la base de datos asocia un volumen de Amazon EBS a su instancia para los datos persistentes y monta un sistema de archivos Amazon EFS compartido para los ficheros que procesan varios servidores Linux.',
		preguntaIds: ['3.6-q2', '3.6-q6'],
		objetivos: ['3.6#1', '3.6#2', '3.6#4'],
	},
	{
		id: 's3-storage-classes',
		etiqueta: 'Clases de almacenamiento de Amazon S3',
		a: {
			titulo: 'Clases de acceso inmediato (S3 Standard, Intelligent-Tiering)',
			resumen:
				'Priorizan la disponibilidad y la latencia baja: el objeto se lee al instante. S3 Standard guarda datos calientes y de acceso impredecible; Intelligent-Tiering mueve automáticamente los objetos entre niveles de acceso según su uso. Tienen el coste de almacenamiento más alto.',
		},
		b: {
			titulo: 'Clases de acceso poco frecuente y de archivado (Standard-IA, One Zone-IA, familia S3 Glacier)',
			resumen:
				'Abaratan el almacenamiento a cambio de menor disponibilidad o de un tiempo de recuperación mayor, y algunas cobran por acceso. Standard-IA y One Zone-IA sirven datos fríos de acceso poco frecuente —One Zone-IA en una sola Availability Zone, con menor durabilidad— y la familia Glacier (Instant Retrieval, Flexible Retrieval y Deep Archive) cubre el archivado con recuperaciones de segundos a horas.',
		},
		diferenciaClave:
			'Todas las clases guardan el mismo objeto; lo que cambia es el equilibrio entre coste de almacenamiento, latencia de acceso, disponibilidad, durabilidad y tiempo de recuperación. Las de acceso inmediato sirven datos vivos; las de acceso poco frecuente y archivado sirven datos que se consultan de forma excepcional, y Deep Archive es la de recuperación más lenta y menor coste.',
		cuandoA: [
			'Cuando los objetos se consultan con frecuencia o el patrón de acceso es desconocido y no puedes asumir latencia.',
			'Cuando necesitas respuesta inmediata para servir contenido a los usuarios.',
		],
		cuandoB: [
			'Cuando los objetos llevan tiempo sin consultarse y solo se necesitan para retención o cumplimiento.',
			'Cuando el ahorro de almacenamiento compensa una recuperación más lenta y con coste por acceso.',
		],
		escenarioA:
			'Un portal sirve las portadas y los documentos más vistos del día desde una clase de acceso inmediato, porque cada visita debe responder sin demora.',
		escenarioB:
			'Los registros y facturas de más de un año se conservan en una clase de archivado; solo se recuperan ante una auditoría y una política de ciclo de vida se encarga de moverlos.',
		preguntaIds: ['3.6-q4'],
		objetivos: ['3.6#2', '3.6#3'],
	},
	{
		id: 'efs-vs-fsx-vs-storage-gateway',
		etiqueta: 'Sistemas de archivos gestionados frente a caché híbrida',
		a: {
			titulo: 'Sistemas de archivos gestionados (Amazon EFS y Amazon FSx)',
			resumen:
				'Alojan el sistema de archivos en AWS y lo comparten por red entre instancias. Amazon EFS es elástico y para Linux; Amazon FSx cubre motores concretos, como Windows File Server o Lustre.',
		},
		b: {
			titulo: 'Puerta de enlace con caché (AWS Storage Gateway)',
			resumen:
				'Puente híbrido entre el entorno local y AWS. Mantiene en caché local los archivos de acceso reciente y sirve el resto bajo demanda desde el almacenamiento en la nube, para que las aplicaciones locales sigan trabajando con baja latencia.',
		},
		diferenciaClave:
			'Amazon EFS y Amazon FSx son el destino del dato en AWS; AWS Storage Gateway es el intermediario que acerca ese dato a un entorno local mediante caché. El primero resuelve compartir archivos en la nube; el segundo, dar acceso local al dato que vive en la nube.',
		cuandoA: [
			'Cuando las cargas corren en AWS y varias instancias deben compartir archivos con crecimiento automático o un motor específico.',
			'Cuando quieres un sistema de archivos gestionado y elástico sin administrar servidores de archivos.',
		],
		cuandoB: [
			'Cuando las aplicaciones siguen en las instalaciones pero el dato debe residir en AWS.',
			'Cuando necesitas baja latencia local para los archivos en uso sin replicar todo el conjunto de datos.',
		],
		escenarioA:
			'Un clúster de instancias Linux monta un sistema de archivos Amazon EFS compartido y crece automáticamente; otra carga con Windows usa Amazon FSx para su sistema de archivos gestionado.',
		escenarioB:
			'Una oficina conserva su servidor de archivos local, pero los datos se respaldan en AWS a través de una puerta de enlace que mantiene en caché los documentos que se abren a diario.',
		preguntaIds: ['3.6-q9'],
		objetivos: ['3.6#5', '3.6#6'],
	},
	{
		id: 'lifecycle-vs-aws-backup',
		etiqueta: 'Políticas de ciclo de vida vs AWS Backup',
		a: {
			titulo: 'Políticas de ciclo de vida',
			resumen:
				'Reglas que mueven o eliminan objetos automáticamente según su antigüedad. En Amazon S3 transicionan el objeto entre clases de almacenamiento y lo expiran cuando deja de aportar. Optimizan el coste del dato vivo.',
		},
		b: {
			titulo: 'AWS Backup',
			resumen:
				'Servicio centralizado que define, programa y supervisa copias de seguridad de varios servicios, como volúmenes de Amazon EBS o sistemas de archivos Amazon EFS y Amazon FSx, con políticas y retención. Protege contra pérdida o corrupción.',
		},
		diferenciaClave:
			'La política de ciclo de vida abarata el dato moviéndolo entre clases o expirándolo; AWS Backup crea copias recuperables con una retención definida. Una transición de clase no es una copia de seguridad y AWS Backup no sustituye a la gestión del ciclo de vida.',
		cuandoA: [
			'Cuando el patrón de acceso de los objetos cambia con el tiempo y quieres abaratar el almacenamiento de forma automática.',
			'Cuando necesitas expirar datos que ya no aportan valor sin operación manual.',
		],
		cuandoB: [
			'Cuando necesitas recuperarte de un borrado accidental o de una corrupción con copias y retención.',
			'Cuando debes cumplir una retención de copias de seguridad sobre varios servicios a la vez.',
		],
		escenarioA:
			'Una plataforma mueve las fotos antiguas a una clase más fría y las expira al año con una regla automática, sin copias adicionales.',
		escenarioB:
			'La misma plataforma crea copias semanales de sus volúmenes y sistemas de archivos, con una retención de un año por cumplimiento y un almacén de respaldo centralizado.',
		preguntaIds: ['3.6-q13'],
		objetivos: ['3.6#7', '3.6#8'],
	},
];
