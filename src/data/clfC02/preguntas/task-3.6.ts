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
			'El de objetos expone un disco con sectores que el sistema operativo formatea y monta como volumen.',
			'El de objetos guarda datos completos accesibles por API, con metadatos y sin edición parcial.',
			'El de archivos solo permite una instancia conectada a la vez y no se comparte por red.',
			'El de bloque está pensado para contenido estático servido directamente a internet por API.',
		],
		correctAnswer: 1,
		explanation:
			'El almacenamiento de objetos trata cada dato como una unidad completa con metadatos, accesible por API y sin edición por bloques. El modelo de bloque expone un volumen tipo disco para las instancias y el de archivos ofrece un sistema de archivos compartido por red. Si el requisito fuera un disco persistente para una instancia, el modelo correcto sería el de bloque.',
		porQueOpcion: [
			'Incorrecta: describir un disco con sectores que se formatea y monta corresponde al almacenamiento en bloque, no al de objetos.',
			'Correcta: el almacenamiento de objetos guarda cada dato completo accesible por API, con metadatos y sin edición parcial.',
			'Incorrecta: el almacenamiento de archivos se comparte por red entre varias instancias, no se limita a una.',
			'Incorrecta: el almacenamiento en bloque expone un volumen tipo disco, no sirve contenido estático por API.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/s3/',
		],
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
			'Las imágenes servidas por API encajan en almacenamiento de objetos; el volumen de una base de datos es almacenamiento en bloque por su semántica de disco; y los archivos compartidos entre varias instancias Linux corresponden a un sistema de archivos de red. Si el requisito fuera solo servir contenido estático por API, bastaría con el almacenamiento de objetos.',
		porQueOpcion: [
			'Incorrecta: asigna cada dato al modelo equivocado, las imágenes no van en bloque ni la base de datos en objetos.',
			'Correcta: las imágenes servidas por API van en objetos, el volumen de la base de datos en bloque y los archivos compartidos en archivos.',
			'Incorrecta: el bloque no es adecuado para imágenes servidas por API ni para archivos compartidos entre instancias.',
			'Incorrecta: las imágenes no van en archivos ni la base de datos en objetos.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/s3/',
		],
	},
	{
		id: '3.6-q3',
		taskId: '3.6',
		objetivos: ['3.6#2'],
		tipo: 'escenario',
		question:
			'Una empresa sube documentos que deben conservarse íntegros durante años y casi nunca se leen. Quiere el menor coste posible sin perderlos, aunque cambie de herramientas de edición cada temporada. ¿Qué enfoque es correcto?',
		options: [
			'Guardarlos como objetos y moverlos con una política de ciclo de vida a clases más frías.',
			'Guardarlos en el instance store local de una instancia para abaratar el almacenamiento.',
			'Montarlos como disco de instancia y programar snapshots automáticos cada hora.',
			'Dejarlos en la clase de acceso más rápido para evitar recargos por recuperación.',
		],
		correctAnswer: 0,
		explanation:
			'El almacenamiento de objetos con una política de ciclo de vida es el patrón correcto: los documentos se conservan y se transicionan a clases más baratas cuando dejan de consultarse. El instance store es efímero y el bloque no es el modelo pensado para archivos completos servidos por API. Si el escenario pidiera edición parcial por bloques, el modelo de objetos dejaría de ser adecuado.',
		porQueOpcion: [
			'Correcta: guardarlos como objetos y moverlos con una política de ciclo de vida a clases más frías reduce el coste sin perderlos.',
			'Incorrecta: el instance store es efímero y se pierde al detener la instancia, por lo que no garantiza la conservación.',
			'Incorrecta: el instance store es efímero y los snapshots no sustituyen una conservación a largo plazo de bajo coste.',
			'Incorrecta: la clase de acceso más rápido es la más cara y no conviene para datos que casi no se leen.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/s3/',
		],
	},
	{
		id: '3.6-q4',
		taskId: '3.6',
		objetivos: ['3.6#3'],
		tipo: 'comparacion',
		question: '¿Qué distingue a las clases de almacenamiento de objetos entre sí?',
		options: [
			'Solo cambian de nombre comercial; el precio por gigabyte almacenado y el comportamiento de acceso son idénticos en todas las clases que ofrece el servicio, por lo que la elección no afecta al coste.',
			'Cambian el modelo de acceso y el coste: unas priorizan acceso inmediato y otras abaratan el almacenamiento a cambio de menor disponibilidad o de tiempo de recuperación.',
			'Cambian el motor de base de datos subyacente y el lenguaje de consultas que admiten, pero no el coste ni la latencia de recuperación.',
			'Cambian el cifrado que se puede aplicar a los objetos y el tamaño máximo permitido por archivo, y no el tiempo de recuperación.',
		],
		correctAnswer: 1,
		explanation:
			'Las clases de Amazon S3 intercambian coste por latencia, disponibilidad y tiempo de recuperación. Las de acceso inmediato sirven datos calientes y las de archivado abaratan el almacenamiento de datos fríos a cambio de una recuperación más lenta. Si el escenario tuviera un patrón de acceso desconocido, una clase que mueva los objetos automáticamente sería la opción más segura.',
		porQueOpcion: [
			'Incorrecta: las clases difieren en precio por gigabyte y en comportamiento de acceso, no solo en el nombre.',
			'Correcta: las clases cambian el modelo de acceso y el coste, unas priorizan acceso inmediato y otras abaratan a cambio de menor disponibilidad o mayor tiempo de recuperación.',
			'Incorrecta: las clases no cambian el motor de base de datos ni el lenguaje de consultas que admiten.',
			'Incorrecta: el tamaño máximo por objeto no define las clases y el tiempo de recuperación sí varía entre ellas.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/s3/',
		],
	},
	{
		id: '3.6-q5',
		taskId: '3.6',
		objetivos: ['3.6#3'],
		tipo: 'escenario',
		question:
			'Una aplicación genera registros que se consultan a diario durante una semana y luego deben conservarse un año con acceso casi nulo. No importa el formato de los ficheros y la factura mensual de almacenamiento debe mantenerse baja. ¿Qué configuración es correcta?',
		options: [
			'Dejarlo todo en la clase de acceso frecuente durante el año y no definir ninguna regla de ciclo de vida.',
			'Empezar en la clase de acceso frecuente, transicionar a una clase de acceso poco frecuente y archivar al final con una política de ciclo de vida.',
			'Empezar directamente en la clase Amazon S3 Glacier Deep Archive y consultar cada día desde esa misma clase de recuperación lenta.',
			'Guardar los registros en un volumen de bloque de una instancia y borrarlos a la semana para ahorrar espacio.',
		],
		correctAnswer: 1,
		explanation:
			'La política de ciclo de vida va moviendo los objetos según envejecen: acceso frecuente mientras se consultan, acceso poco frecuente después y archivado cuando el acceso es casi nulo. Empezar en archivado encarecería las consultas diarias. Si el escenario pidiera acceso diario durante todo el año, no convendría ninguna clase de archivado.',
		porQueOpcion: [
			'Incorrecta: dejarlo todo en acceso frecuente durante el año y sin ciclo de vida desaprovecha el ahorro para el acceso casi nulo.',
			'Correcta: empezar en acceso frecuente, transicionar a una clase de acceso poco frecuente y archivar al final con una política de ciclo de vida ajusta el coste a cada fase.',
			'Incorrecta: empezar en Amazon S3 Glacier Deep Archive encarece las consultas de recuperación lenta y no conviene para un acceso diario durante la primera semana.',
			'Incorrecta: un volumen de bloque no es el modelo adecuado y borrar a la semana no conserva el año requerido.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/amazonglacier/latest/dev/introduction.html',
		],
	},
	{
		id: '3.6-q6',
		taskId: '3.6',
		objetivos: ['3.6#4'],
		tipo: 'comparacion',
		question:
			'¿Qué diferencia hay entre un volumen de bloque persistente de red y el almacenamiento local efímero del host de una instancia?',
		options: [
			'El almacenamiento local del host es persistente y se conserva al detener la instancia, y el volumen de red es efímero y se pierde al reiniciar.',
			'Amazon EBS es almacenamiento en bloque persistente de red; el instance store es almacenamiento local efímero que se pierde al detener la instancia.',
			'Ambos son almacenamiento de objetos accesible por API y se facturan por operaciones de lectura y escritura.',
			'Ambos se comparten por red entre varias instancias a la vez como un sistema de archivos compartido.',
		],
		correctAnswer: 1,
		explanation:
			'Amazon EBS es un volumen de bloque persistente asociado a la instancia, con snapshots y cifrado. El instance store es almacenamiento local del host, más rápido pero efímero: sus datos desaparecen al detener, mover o terminar la instancia. Si el objetivo fuera la máxima velocidad para datos reconstruibles, la opción local sería la adecuada.',
		porQueOpcion: [
			'Incorrecta: invierte las propiedades, el instance store es efímero y el volumen de red persiste.',
			'Correcta: Amazon EBS es almacenamiento en bloque persistente de red y el instance store es almacenamiento local efímero que se pierde al detener la instancia.',
			'Incorrecta: ninguno es almacenamiento de objetos ni se factura por operaciones de API.',
			'Incorrecta: EBS se asocia a una instancia y el instance store es local, no un sistema de archivos compartido.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/ebs/',
		],
	},
	{
		id: '3.6-q7',
		taskId: '3.6',
		objetivos: ['3.6#4'],
		tipo: 'tradeoff',
		question:
			'Una instancia necesita la máxima velocidad para una caché temporal que se puede reconstruir, pero también un volumen para datos que deben sobrevivir. ¿Qué compromiso es correcto?',
		options: [
			'Usar solo el almacenamiento local efímero para ambos, tanto la caché temporal como los datos que deben sobrevivir a la instancia.',
			'Usar solo Amazon EBS para ambos, tanto para la caché de máxima velocidad como para los datos persistentes.',
			'Usar instance store para la caché reconstruible y Amazon EBS para los datos persistentes.',
			'Guardar ambos datos en un bucket de objetos y montarlo como disco en la instancia.',
		],
		correctAnswer: 2,
		explanation:
			'El tradeoff es rendimiento frente a persistencia: el instance store es la opción más rápida para datos temporales reconstruibles, mientras que Amazon EBS aporta persistencia, snapshots y cifrado para los datos que no se pueden perder. Si el requisito fuera únicamente persistencia y no velocidad, bastaría con Amazon EBS para ambos.',
		porQueOpcion: [
			'Incorrecta: el instance store es efímero y no sirve para datos que deben sobrevivir a la instancia.',
			'Incorrecta: EBS no ofrece la máxima velocidad del almacenamiento local para la caché reconstruible.',
			'Correcta: usar instance store para la caché reconstruible y Amazon EBS para los datos persistentes equilibra velocidad y persistencia.',
			'Incorrecta: un bucket de objetos no se monta como disco con la semántica de bloque requerida.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/ebs/',
		],
	},
	{
		id: '3.6-q8',
		taskId: '3.6',
		objetivos: ['3.6#5'],
		tipo: 'conocimiento',
		question:
			'Una empresa necesita un sistema de archivos compartido y elástico para aplicaciones Linux en varias instancias y, por separado, un sistema de archivos gestionado para Windows. ¿Qué servicios corresponden?',
		options: [
			'Amazon S3 para Linux y Amazon EBS para las instancias con Windows.',
			'Amazon EFS para Linux y Amazon FSx para Windows.',
			'AWS Storage Gateway para ambos casos.',
			'Amazon EBS para ambos casos.',
		],
		correctAnswer: 1,
		explanation:
			'Amazon EFS es el sistema de archivos compartido y elástico para Linux, y Amazon FSx cubre sistemas de archivos gestionados para motores concretos, como Windows File Server. Si el requisito fuera solo un disco para una única instancia, bastaría con un volumen de bloque.',
		porQueOpcion: [
			'Incorrecta: Amazon S3 es de objetos y Amazon EBS de bloque; ninguno es el sistema de archivos para esos casos.',
			'Correcta: Amazon EFS es el sistema de archivos compartido y elástico para Linux y Amazon FSx cubre sistemas gestionados como Windows File Server.',
			'Incorrecta: AWS Storage Gateway es la pieza híbrida, no el sistema de archivos gestionado para cada caso.',
			'Incorrecta: Amazon EBS es un volumen de bloque para una instancia, no un sistema de archivos compartido.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/s3/',
			'https://docs.aws.amazon.com/ebs/',
			'https://docs.aws.amazon.com/efs/',
			'https://docs.aws.amazon.com/fsx/',
			'https://docs.aws.amazon.com/storagegateway/',
		],
	},
	{
		id: '3.6-q9',
		taskId: '3.6',
		objetivos: ['3.6#5', '3.6#6'],
		tipo: 'comparacion',
		question:
			'¿Qué distingue a los sistemas de archivos gestionados en la nube de una puerta de enlace híbrida con caché?',
		options: [
			'Los tres son servicios de almacenamiento de objetos y se facturan por gigabyte almacenado y por operaciones de API, sin ofrecer sistemas de archivos compartidos ni caché local para el entorno local de la empresa.',
			'Amazon EFS y Amazon FSx son sistemas de archivos gestionados en AWS; AWS Storage Gateway es una puerta de enlace híbrida que da acceso con caché local a datos almacenados en AWS.',
			'AWS Storage Gateway es un sistema de archivos gestionado y Amazon EFS es la puerta de enlace híbrida con caché local.',
			'Solo se diferencian en la región donde se despliegan, en el cifrado que aplican a los datos en reposo y en el tamaño máximo de archivo permitido por cada servicio.',
		],
		correctAnswer: 1,
		explanation:
			'Amazon EFS y Amazon FSx alojan sistemas de archivos gestionados en AWS para consumirse desde las instancias. AWS Storage Gateway es la pieza híbrida: mantiene una caché local de los datos de acceso reciente y sirve el resto bajo demanda desde el almacenamiento en AWS. Si el escenario tuviera las aplicaciones ya en AWS y solo necesitara archivos compartidos, la puerta de enlace no sería necesaria.',
		porQueOpcion: [
			'Incorrecta: EFS, FSx y Storage Gateway no son servicios de objetos ni se facturan por gigabyte y operaciones de API.',
			'Correcta: Amazon EFS y Amazon FSx son sistemas de archivos gestionados en AWS y AWS Storage Gateway es la puerta de enlace híbrida que da acceso con caché local.',
			'Incorrecta: intercambia los papeles, Storage Gateway no es el sistema de archivos gestionado ni EFS la puerta de enlace.',
			'Incorrecta: no se diferencian solo por región, cifrado o tamaño de archivo, sino por su naturaleza gestionada o híbrida.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/efs/',
			'https://docs.aws.amazon.com/fsx/',
			'https://docs.aws.amazon.com/storagegateway/',
		],
	},
	{
		id: '3.6-q10',
		taskId: '3.6',
		objetivos: ['3.6#6'],
		tipo: 'escenario',
		question:
			'Una empresa quiere mantener sus aplicaciones en la oficina, que deben seguir leyendo archivos con baja latencia, mientras el dato real se conserva en AWS. No quiere reescribir las aplicaciones ni mover todo el almacenamiento de golpe. ¿Qué servicio encaja mejor?',
		options: [
			'AWS Storage Gateway, que expone una puerta de enlace con caché local y guarda el dato en AWS.',
			'Amazon S3, para que las aplicaciones locales accedan directamente a los objetos por API sin puerta de enlace.',
			'Amazon EFS, para montar el mismo sistema de archivos en las máquinas locales.',
			'AWS Backup, para copiar los archivos locales a la nube cada noche.',
		],
		correctAnswer: 0,
		explanation:
			'Storage Gateway es la pieza híbrida: da acceso local con caché a datos que residen en AWS, sin reescribir las aplicaciones. Amazon S3 exigiría cambiar el acceso a la API, Amazon EFS está pensado para instancias en AWS (no para montar en la oficina) y AWS Backup solo copia, no sirve lecturas locales. Si el escenario pidiera acceso desde instancias ya desplegadas en AWS, la respuesta sería Amazon EFS.',
		porQueOpcion: [
			'Correcta: AWS Storage Gateway expone una puerta de enlace con caché local y conserva el dato en AWS sin reescribir las aplicaciones.',
			'Incorrecta: Amazon S3 exigiría cambiar el acceso de las aplicaciones locales a la API.',
			'Incorrecta: Amazon EFS está pensado para instancias en AWS, no para montarlo en las máquinas de la oficina.',
			'Incorrecta: AWS Backup solo copia, no sirve lecturas locales con baja latencia.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/storagegateway/',
			'https://docs.aws.amazon.com/s3/',
			'https://docs.aws.amazon.com/efs/',
			'https://docs.aws.amazon.com/aws-backup/',
		],
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
			'Un volumen de Amazon EBS de mayor tamaño para guardar los objetos y moverlos manualmente entre clases.',
			'Snapshots manuales cada semana de los volúmenes donde residen los objetos almacenados.',
			'Un sistema de archivos Amazon FSx compartido que reorganice los objetos por antigüedad.',
		],
		correctAnswer: 0,
		explanation:
			'La política de ciclo de vida automatiza el movimiento de objetos entre clases de almacenamiento y su expiración, bajando el coste sin operación manual. Los snapshots y los sistemas de archivos no resuelven la optimización por antigüedad de objetos. Si el requisito fuera conservar copias recuperables del dato, haría falta un mecanismo de copia de seguridad y no solo una transición de clase.',
		porQueOpcion: [
			'Correcta: una política de ciclo de vida transiciona los objetos entre clases y los expira de forma automática, bajando el coste sin operación manual.',
			'Incorrecta: un volumen de Amazon EBS no almacena los objetos de S3 ni automatiza las transiciones entre clases.',
			'Incorrecta: los snapshots de volúmenes no aplican a los objetos de S3 ni optimizan por antigüedad.',
			'Incorrecta: un sistema de archivos Amazon FSx no reorganiza los objetos de S3 por antigüedad.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/s3/',
			'https://docs.aws.amazon.com/ebs/',
			'https://docs.aws.amazon.com/fsx/',
		],
	},
	{
		id: '3.6-q12',
		taskId: '3.6',
		objetivos: ['3.6#8'],
		tipo: 'conocimiento',
		question:
			'¿Qué aporta un servicio centralizado de copias de seguridad en una estrategia de protección de datos?',
		options: [
			'Mueve automáticamente los objetos fríos a clases de almacenamiento más baratas según su antigüedad y su patrón de acceso.',
			'Centraliza y automatiza las copias de seguridad de varios servicios con políticas y retención definidas.',
			'Sustituye a las políticas de ciclo de vida y mueve los objetos a clases de archivado profundo.',
			'Reemplaza el cifrado de los volúmenes por un cifrado gestionado propio del servicio de copias.',
		],
		correctAnswer: 1,
		explanation:
			'AWS Backup define, programa y supervisa copias de seguridad de varios servicios, como volúmenes de Amazon EBS y sistemas de archivos Amazon EFS y Amazon FSx, con políticas y retención. No sustituye al ciclo de vida ni al cifrado. Si el objetivo fuera abaratar el dato frío y no protegerlo, la herramienta adecuada sería la política de ciclo de vida.',
		porQueOpcion: [
			'Incorrecta: mover objetos fríos a clases más baratas según su antigüedad es la política de ciclo de vida, no una copia de seguridad.',
			'Correcta: un servicio centralizado de copias define, programa y supervisa copias de varios servicios con políticas y retención.',
			'Incorrecta: el servicio de copias no sustituye a las políticas de ciclo de vida ni mueve objetos a archivado profundo.',
			'Incorrecta: el servicio de copias no reemplaza el cifrado de los volúmenes por uno propio.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/aws-backup/',
			'https://docs.aws.amazon.com/ebs/',
			'https://docs.aws.amazon.com/efs/',
			'https://docs.aws.amazon.com/fsx/',
		],
	},
	{
		id: '3.6-q13',
		taskId: '3.6',
		objetivos: ['3.6#7', '3.6#8'],
		tipo: 'comparacion',
		question:
			'Un equipo compara dos mecanismos sobre el mismo dato almacenado en la nube: uno que mueve o elimina los objetos según su antigüedad y otro que crea copias recuperables con retención. ¿Qué afirmación los distingue correctamente?',
		options: [
			'La política de ciclo de vida optimiza el coste moviendo o expirando objetos; las copias de seguridad crean versiones recuperables con retención.',
			'Las copias de seguridad son las que mueven los objetos entre clases de almacenamiento y la política de ciclo de vida crea las copias recuperables.',
			'Ambos mecanismos son lo mismo: mover un objeto a una clase fría ya equivale a tener una copia de seguridad.',
			'La política de ciclo de vida solo se aplica a volúmenes de bloque y las copias solo a sistemas de archivos.',
		],
		correctAnswer: 0,
		explanation:
			'El ciclo de vida optimiza el coste del dato activo moviéndolo entre clases o expirándolo, mientras que la copia de seguridad protege contra pérdida o corrupción con una retención definida. Mover un objeto a una clase fría no crea una copia independiente. Si el escenario exigiera recuperarse de un borrado accidental, el mecanismo imprescindible sería la copia de seguridad.',
		porQueOpcion: [
			'Correcta: la política de ciclo de vida optimiza el coste moviendo o expirando objetos, mientras que las copias de seguridad crean versiones recuperables con retención.',
			'Incorrecta: intercambia los mecanismos, las copias de seguridad no mueven objetos entre clases de almacenamiento.',
			'Incorrecta: mover un objeto a una clase fría no crea una copia de seguridad independiente.',
			'Incorrecta: el ciclo de vida se aplica a objetos y las copias a varios servicios, no se reparten como se indica.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/s3/',
		],
	},
	{
		id: '3.6-q14',
		taskId: '3.6',
		objetivos: ['3.6#1'],
		tipo: 'casoDeUso',
		question:
			'Una empresa necesita almacenar millones de archivos de imágenes y documentos, servirlos por API y conservar versiones anteriores de cada uno, sin dimensionar servidores ni discos. ¿Qué modelo de almacenamiento encaja mejor?',
		options: [
			'Almacenamiento de objetos, que guarda cada dato completo con metadatos, lo expone por API y admite versionado.',
			'Almacenamiento en bloque, que expone un disco que el sistema operativo formatea y monta en una instancia.',
			'Almacenamiento en archivos, que comparte una jerarquía de rutas por red entre varias instancias.',
			'Almacenamiento local efímero del host, que ofrece la máxima velocidad pero pierde los datos al detener la instancia y no admite versionado.',
		],
		correctAnswer: 0,
		explanation:
			'Los datos completos con metadatos, servidos por API, con versionado y sin límite práctico de escala son el caso típico del almacenamiento de objetos. El bloque y el archivo no exponen los datos como objetos y el almacenamiento local es efímero. Si el requisito cambiara a montar un disco con sistema de archivos en una instancia, habría que usar almacenamiento en bloque.',
		porQueOpcion: [
			'Correcta: el almacenamiento de objetos guarda cada dato completo con metadatos, lo expone por API y admite versionado sin dimensionar servidores.',
			'Incorrecta: el almacenamiento en bloque expone un disco que se monta en una instancia y no se sirve por API.',
			'Incorrecta: el almacenamiento en archivos comparte una jerarquía de rutas por red y no es el modelo de objetos por API.',
			'Incorrecta: el almacenamiento local efímero pierde los datos al detener la instancia y no admite versionado.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/s3/',
		],
	},
	{
		id: '3.6-q15',
		taskId: '3.6',
		objetivos: ['3.6#5'],
		tipo: 'escenario',
		question:
			'Un clúster de varias instancias Linux necesita compartir el mismo conjunto de archivos, que crecerá y se reducirá según la carga, sin administrar un servidor de archivos propio. ¿Qué servicio encaja mejor?',
		options: [
			'Un sistema de archivos de red elástico y gestionado para Linux, montado en todas las instancias a la vez.',
			'Un volumen de bloque individual asociado a una sola instancia del clúster y no compartido por red.',
			'Un contenedor de objetos con acceso por API desde cada instancia y sin jerarquía de archivos.',
			'El almacenamiento local efímero del host de cada instancia, reconstruible tras cada reinicio y sin compartirse entre las instancias del clúster.',
		],
		correctAnswer: 0,
		explanation:
			'Un sistema de archivos compartido por red, gestionado y elástico es lo que permite a varias instancias Linux acceder al mismo conjunto de archivos con crecimiento automático. El bloque se asocia a una instancia, el objeto no ofrece jerarquía de archivos y el almacenamiento local es efímero. Si el escenario exigiera un motor de archivos concreto como Windows File Server, cambiaría el servicio elegido.',
		porQueOpcion: [
			'Correcta: un sistema de archivos de red elástico y gestionado para Linux permite compartir el mismo conjunto de archivos entre todas las instancias.',
			'Incorrecta: un volumen de bloque se asocia a una sola instancia del clúster y no se comparte por red.',
			'Incorrecta: un contenedor de objetos no ofrece jerarquía de archivos para montarlo en el clúster.',
			'Incorrecta: el almacenamiento local es efímero y no se comparte entre las instancias del clúster.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/s3/',
		],
	},
	{
		id: '3.6-q16',
		taskId: '3.6',
		objetivos: ['3.6#8'],
		tipo: 'casoDeUso',
		question:
			'Una empresa necesita proteger volúmenes de bloque y sistemas de archivos frente a borrados accidentales, con copias programadas y una retención definida por cumplimiento en varios servicios. ¿Qué debe usar?',
		options: [
			'Un servicio centralizado de copias de seguridad con planes, retención y almacén de respaldo.',
			'Una política de ciclo de vida que mueva los datos a clases de almacenamiento más frías.',
			'Snapshots manuales creados por cada equipo, sin una política de retención común ni supervisión centralizada.',
			'El versionado de los objetos como única medida de protección frente a borrados y corrupción.',
		],
		correctAnswer: 0,
		explanation:
			'La protección frente a borrados y corrupción con retención y cumplimiento sobre varios servicios encaja con un servicio centralizado de copias de seguridad, que define planes y supervisa el almacén de respaldo. Una política de ciclo de vida solo abarata el dato frío y los snapshots manuales no aportan retención común. Si el objetivo fuera únicamente ahorrar coste en datos fríos, bastaría con la política de ciclo de vida.',
		porQueOpcion: [
			'Correcta: un servicio centralizado de copias con planes, retención y almacén de respaldo protege varios servicios frente a borrados accidentales.',
			'Incorrecta: una política de ciclo de vida solo abarata el dato frío y no crea copias recuperables con retención.',
			'Incorrecta: los snapshots manuales sin retención común ni supervisión no cumplen el requisito de cumplimiento.',
			'Incorrecta: el versionado de objetos no cubre volúmenes de bloque ni sistemas de archivos.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/s3/',
		],
	},
];
