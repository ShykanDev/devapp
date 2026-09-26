import type { GrupoTematico } from '@/data/clfC02/types';

export const gruposTask36: GrupoTematico[] = [
	{
		id: '3.6-g1',
		titulo: 'Almacenamiento de objetos y clases de Amazon S3',
		objetivos: ['3.6#1', '3.6#2', '3.6#3'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'El almacenamiento en AWS se reparte en tres modelos según cómo se accede al dato:\n\n- **Almacenamiento de objetos**: los datos se guardan como objetos con metadatos y una clave, dentro de un contenedor plano sin jerarquía real. Se accede por API HTTP y escala prácticamente sin límite. El servicio de referencia es **Amazon S3**.\n- **Almacenamiento en bloque**: volúmenes que se comportan como un disco, con sistema de archivos que gestiona el sistema operativo. Lo usan las instancias; ejemplos **Amazon EBS** e instance store.\n- **Almacenamiento de archivos**: sistemas de archivos compartidos por red, con rutas y permisos POSIX. Ejemplos **Amazon EFS** y **Amazon FSx**.\n\nEl objeto es la unidad completa: se lee y se escribe entero, no por bloques, y por eso resulta inmutable. Esa inmutabilidad habilita el versionado, las clases de almacenamiento y las políticas de ciclo de vida. El uso típico del almacenamiento de objetos es contenido estático, copias de seguridad, data lakes y cualquier dato que se consulte como un todo.',
			},
			{
				tipo: 'comparacion',
				parId: 's3-storage-classes',
			},
			{
				tipo: 'escenario',
				situacion:
					'Una plataforma guarda fotos y vídeos que los usuarios consultan durante los primeros días y, después de un año, casi nadie vuelve a abrir. El equipo quiere reducir el coste sin perder los archivos.',
				analisis:
					'El patrón encaja con almacenamiento de objetos: se guardan los archivos como objetos y se aplica una política de ciclo de vida que mueve los objetos fríos a clases más baratas y los archiva después. No hay que reescribir la aplicación: solo cambia la clase del objeto.',
				servicio: 'Amazon S3',
			},
			{
				tipo: 'errorComun',
				error: 'Creer que el almacenamiento de objetos sirve para montar el disco de una instancia o que se puede modificar un byte de un objeto sin reemplazarlo.',
				correccion:
					'Los objetos se leen y escriben completos, no por bloques. Para un disco de instancia o un sistema de archivos compartido se usan servicios de bloque o de archivos; el almacenamiento de objetos está pensado para datos completos sujetos a API y ciclo de vida.',
			},
			{
				tipo: 'clave',
				items: [
					'Objetos: datos completos con metadatos, acceso por API y escala prácticamente ilimitada.',
					'Bloque: volúmenes tipo disco para una instancia (Amazon EBS, instance store).',
					'Archivos: sistema de archivos compartido por red (Amazon EFS, Amazon FSx).',
					'Las clases de Amazon S3 intercambian coste por latencia y disponibilidad de acceso.',
				],
			},
		],
		preguntasGuia: [
			'¿Qué modelo de almacenamiento usarías para contenido estático servido por API?',
			'¿En qué se diferencian las clases de almacenamiento de Amazon S3 entre sí?',
			'¿Por qué un objeto no se puede editar parcialmente?',
		],
	},
	{
		id: '3.6-g2',
		titulo: 'Almacenamiento en bloque: Amazon EBS e instance store',
		objetivos: ['3.6#4'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'El almacenamiento en bloque ofrece volúmenes que el sistema operativo ve como un disco. En **Amazon EC2** conviven dos opciones:\n\n- **Amazon EBS**: volúmenes de red asociados a una instancia. Son persistentes, admiten snapshots, cifrado y cambios de tamaño o de tipo sin recrear la instancia. La vida del volumen es independiente de la instancia.\n- **instance store**: almacenamiento físico local del host donde corre la instancia. Aporta la latencia más baja y el mayor rendimiento, pero es efímero: si la instancia se detiene, se reinicia en otro host o se termina, los datos se pierden.\n\nLa decisión habitual: los datos que deben sobrevivir a la instancia van a **Amazon EBS**; las cachés temporales, los archivos de intercambio o los datos replicados que se pueden reconstruir aprovechan instance store. Un volumen de bloque, además, no se comparte entre muchas instancias a la vez como un sistema de archivos.',
			},
			{
				tipo: 'comparacion',
				parId: 's3-vs-ebs-vs-efs',
			},
			{
				tipo: 'escenario',
				situacion:
					'Una base de datos que corre en una instancia necesita que su volumen de datos sobreviva a un reinicio, se pueda ampliar más adelante y admita snapshots para restaurar.',
				analisis:
					'Es un caso claro de almacenamiento en bloque persistente: se asocia un volumen de **Amazon EBS** a la instancia, se cifra y se programan snapshots. El instance store no serviría porque sus datos se pierden al detener la instancia y no admite snapshots.',
				servicio: 'Amazon Elastic Block Store (Amazon EBS)',
			},
			{
				tipo: 'errorComun',
				error: 'Elegir instance store para datos permanentes por su mayor rendimiento y descubrir que se pierden al detener o mover la instancia.',
				correccion:
					'El instance store es efímero y no se puede desasociar ni trasladar. Para datos que deben persistir se usa **Amazon EBS**; el instance store se reserva para datos temporales que se pueden reconstruir.',
			},
			{
				tipo: 'clave',
				items: [
					'Amazon EBS: bloque persistente de red, con snapshots y cifrado.',
					'instance store: bloque local efímero, atado al host de la instancia.',
					'El instance store es más rápido pero se pierde al detener la instancia.',
					'Para persistencia y copias recuperables, la respuesta es Amazon EBS.',
				],
			},
		],
		preguntasGuia: [
			'¿Qué diferencia hay entre Amazon EBS y el instance store?',
			'¿Cuándo conviene un volumen efímero aunque se pierda el dato?',
			'¿Por qué Amazon EBS sobrevive al ciclo de vida de la instancia?',
		],
	},
	{
		id: '3.6-g3',
		titulo: 'Servicios de archivos y sistemas de archivos en caché',
		objetivos: ['3.6#5', '3.6#6'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'Los servicios de archivos ofrecen un sistema de archivos compartido al que varias instancias acceden a la vez mediante NFS o SMB:\n\n- **Amazon EFS**: sistema de archivos elástico, gestionado y compartido para Linux. Crece y se encoge automáticamente, atiende a muchas instancias concurrentes y admite clases de almacenamiento para abaratar los archivos fríos.\n- **Amazon FSx**: familia de sistemas de archivos gestionados para cargas que necesitan motores concretos, como Windows File Server u otros motores específicos.\n\nEl almacenamiento en caché aparece cuando parte del dato sigue en las instalaciones. **AWS Storage Gateway** expone una puerta de enlace híbrida que da acceso local con caché a datos que realmente viven en AWS: los archivos de acceso reciente se quedan en la caché local y el resto se sirve bajo demanda desde el almacenamiento en la nube. No es un sistema de archivos compartido en AWS, sino un puente con caché entre el entorno local y la nube; según el caso ofrece modos de archivos, de volúmenes y de cintas.',
			},
			{
				tipo: 'comparacion',
				parId: 'efs-vs-fsx-vs-storage-gateway',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Usa Amazon EFS cuando varias instancias Linux necesiten compartir archivos con crecimiento automático.',
					'Usa Amazon FSx cuando la carga exija un motor concreto, como Windows File Server o Lustre.',
					'Usa AWS Storage Gateway cuando las aplicaciones locales deban seguir leyendo archivos con baja latencia mientras el dato se guarda en AWS.',
				],
				noUsar: [
					'No uses un sistema de archivos compartido como sustituto de un volumen de bloque para el disco de arranque de una instancia.',
					'No montes el mismo sistema de archivos en hosts que necesitan semánticas incompatibles, como Linux y Windows sobre Amazon EFS.',
				],
			},
			{
				tipo: 'ejemplo',
				md: '```text\nNecesidad -> servicio\n- Archivos compartidos entre muchas instancias Linux -> Amazon EFS\n- Sistema de archivos gestionado para Windows           -> Amazon FSx\n- Archivos locales con el dato en AWS (caché)          -> AWS Storage Gateway\n- Disco persistente de una sola instancia              -> Amazon EBS\n```',
			},
		],
		preguntasGuia: [
			'¿Cuándo elegirías Amazon EFS frente a Amazon FSx?',
			'¿Para qué sirve AWS Storage Gateway y qué papel juega la caché local?',
			'¿Por qué un sistema de archivos compartido no sustituye a un volumen de bloque?',
		],
	},
	{
		id: '3.6-g4',
		titulo: 'Ciclo de vida del dato y AWS Backup',
		objetivos: ['3.6#7', '3.6#8'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'Dos capacidades gestionan el ciclo de vida del dato almacenado:\n\n- **Políticas de ciclo de vida**: reglas que mueven o eliminan objetos automáticamente según su antigüedad. En **Amazon S3** permiten transicionar objetos entre clases de almacenamiento y expirarlos cuando ya no se necesitan, sin intervención manual.\n- **AWS Backup**: servicio centralizado que define, programa y supervisa copias de seguridad de varios servicios, como volúmenes de **Amazon EBS** o sistemas de archivos **Amazon EFS** y **Amazon FSx**, con políticas, retención y almacén de respaldo.\n\nLa diferencia conceptual es clara: la política de ciclo de vida optimiza el coste del dato activo moviéndolo entre clases o borrándolo cuando deja de aportar; **AWS Backup** protege contra pérdida o corrupción creando copias recuperables con una retención definida. Una no sustituye a la otra.',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Usa lifecycle policies cuando el patrón de acceso de los objetos cambie con el tiempo y quieras abaratar el almacenamiento de forma automática.',
					'Usa AWS Backup cuando necesites copias recuperables con retención y cumplimiento sobre varios servicios a la vez.',
					'Combínalas: la política de ciclo de vida abarata el dato frío y AWS Backup asegura que exista una copia restaurable.',
				],
				noUsar: [
					'No confundas una transición de clase con una copia de seguridad: el objeto sigue siendo el mismo, solo cambia de clase.',
					'No uses solo políticas de ciclo de vida para cumplir una retención de copias de seguridad.',
				],
			},
			{
				tipo: 'errorComun',
				error: 'Pensar que mover objetos a una clase de archivado con una política de ciclo de vida equivale a tener una copia de seguridad.',
				correccion:
					'La transición de clase no crea una copia independiente: es el mismo objeto en otra clase. Para recuperarte de un borrado accidental o de una corrupción necesitas **AWS Backup** u otra copia con retención.',
			},
			{
				tipo: 'ejemplo',
				md: '```text\nObjetivo -> herramienta\n- Abaratar objetos que envejecen       -> política de ciclo de vida (Amazon S3)\n- Conservar el dato pero más barato     -> transición de clase\n- Recuperar datos tras un borrado       -> AWS Backup\n- Retención y cumplimiento multi-servicio -> AWS Backup\n```',
			},
		],
		preguntasGuia: [
			'¿Qué problema resuelve una política de ciclo de vida y qué no resuelve?',
			'¿En qué se diferencia el ciclo de vida de AWS Backup?',
			'¿Por qué una transición de clase no equivale a una copia de seguridad?',
		],
	},
];
