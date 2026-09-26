import type { PreguntaClfC02 } from '@/data/clfC02/types';

export const preguntasTask35: PreguntaClfC02[] = [
	{
		id: '3.5-q1',
		taskId: '3.5',
		objetivos: ['3.5#1'],
		tipo: 'conocimiento',
		question:
			'¿Qué servicio de AWS permite crear una red virtual aislada con el rango de direcciones IP que tú defines?',
		options: [
			'Amazon Route 53',
			'Amazon VPC',
			'Amazon CloudFront',
			'AWS Direct Connect',
		],
		correctAnswer: 1,
		explanation:
			'Amazon VPC es la red virtual aislada que se crea dentro de una región con un rango de direcciones propio. Route 53 es DNS, CloudFront entrega contenido y Direct Connect es un enlace dedicado, no una red virtual. Si el requisito fuera conectar la red local con AWS en lugar de crear una red propia, el servicio sería AWS Direct Connect.',
		porQueOpcion: [
			'Incorrecta: Route 53 es el servicio de DNS y no crea una red virtual aislada.',
			'Correcta: Amazon VPC crea la red virtual aislada dentro de una región con el rango de direcciones IP que tú defines.',
			'Incorrecta: CloudFront es una red de entrega de contenido que cachea y sirve contenido, no crea redes.',
			'Incorrecta: Direct Connect es un enlace dedicado que conecta la red local con AWS, no una red virtual propia.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html',
			'https://docs.aws.amazon.com/directconnect/latest/UserGuide/Welcome.html',
			'https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html',
			'https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html',
		],
	},
	{
		id: '3.5-q2',
		taskId: '3.5',
		objetivos: ['3.5#2'],
		tipo: 'conocimiento',
		question:
			'Dentro de una VPC, ¿qué se necesita para que una subred tenga salida y entrada hacia internet?',
		options: [
			'Un security group asociado a la subred con reglas de permiso de entrada y de salida.',
			'Un internet gateway asociado a la VPC y una route table que envíe el tráfico hacia él.',
			'Una comprobación de estado de Amazon Route 53 que desvía el tráfico a otro destino.',
			'Un VPC endpoint que da acceso privado a los servicios de AWS sin salir a internet público.',
		],
		correctAnswer: 1,
		explanation:
			'Una subred es pública cuando la VPC tiene un internet gateway y la route table de la subred dirige el tráfico hacia ese gateway. El security group controla permisos, no la salida a internet; el VPC endpoint sirve para acceso privado a servicios de AWS. Si el requisito fuera dar salida a internet a una subred privada, bastaría con un NAT gateway en lugar del internet gateway.',
		porQueOpcion: [
			'Incorrecta: el security group controla permisos de tráfico, pero no proporciona la salida ni la entrada a internet.',
			'Correcta: con un internet gateway asociado a la VPC y una route table que envía el tráfico hacia él, la subred se vuelve pública.',
			'Incorrecta: una comprobación de estado de Route 53 desvía tráfico entre destinos, no da conectividad a internet.',
			'Incorrecta: un VPC endpoint da acceso privado a los servicios de AWS sin salir a internet, no salida a internet público.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html',
		],
	},
	{
		id: '3.5-q3',
		taskId: '3.5',
		objetivos: ['3.5#2'],
		tipo: 'escenario',
		question:
			'Una empresa diseña una VPC con dos capas: servidores web accesibles desde internet y una base de datos que solo debe recibir tráfico de esos servidores. ¿Qué diseño de subredes es correcto?',
		options: [
			'Colocar los servidores web y la base de datos en la misma subred pública para simplificar la ruta.',
			'Poner los servidores web en una subred pública con internet gateway y la base de datos en una subred privada sin entrada desde internet.',
			'Poner la base de datos en una subred pública con internet gateway y los servidores web aislados en una subred privada.',
			'Colocar todo en subredes privadas y asociar un internet gateway y una ruta por defecto a cada subred.',
		],
		correctAnswer: 1,
		explanation:
			'La capa web necesita publicarse hacia internet, así que va en una subred pública con internet gateway. La base de datos debe quedar aislada de conexiones entrantes de internet, por lo que se ubica en una subred privada, con salida controlada si hace falta. Si el escenario pidiera que la base de datos recibiera conexiones desde internet, el diseño correcto cambiaría.',
		porQueOpcion: [
			'Incorrecta: dejar la base de datos en una subred pública la expone a conexiones entrantes desde internet.',
			'Correcta: la capa web va en una subred pública con internet gateway y la base de datos se aísla en una subred privada sin entrada desde internet.',
			'Incorrecta: invierte el diseño, expone la base de datos y deja la capa web inaccesible desde internet.',
			'Incorrecta: una subred con ruta por defecto al internet gateway deja de ser privada y no publica la capa web según el requisito.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html',
		],
	},
	{
		id: '3.5-q4',
		taskId: '3.5',
		objetivos: ['3.5#5'],
		tipo: 'comparacion',
		question:
			'Una empresa evalúa cómo conectar su centro de datos con AWS y compara dos alternativas: una que viaja cifrada por internet y otra que usa un enlace privado y dedicado. ¿Qué afirmación distingue correctamente ambas opciones?',
		options: [
			'AWS Direct Connect cifra el tráfico sobre internet público y AWS VPN contrata un enlace dedicado por un proveedor.',
			'AWS VPN usa un túnel cifrado sobre internet y AWS Direct Connect es un enlace dedicado y privado que no atraviesa internet.',
			'Ambos son enlaces dedicados y privados que no atraviesan internet; solo cambia el ancho de banda contratado.',
			'AWS VPN sirve únicamente para resolver nombres DNS y AWS Direct Connect solo conecta VPC dentro de una misma región.',
		],
		correctAnswer: 1,
		explanation:
			'AWS VPN establece un túnel cifrado a través de internet, rápido de desplegar pero con rendimiento variable. AWS Direct Connect es un enlace dedicado y privado que no pasa por internet, con ancho de banda y latencia más estables. Si cambia el requisito hacia el menor coste y la rapidez de despliegue, la opción adecuada pasaría a ser la VPN.',
		porQueOpcion: [
			'Incorrecta: intercambia las definiciones, Direct Connect no viaja por internet y la VPN no contrata un enlace dedicado.',
			'Correcta: AWS VPN establece un túnel cifrado sobre internet y AWS Direct Connect es un enlace dedicado y privado que no atraviesa internet.',
			'Incorrecta: solo Direct Connect es un enlace dedicado y privado; la VPN sí atraviesa internet.',
			'Incorrecta: la VPN no resuelve nombres DNS ni Direct Connect se limita a conectar VPC de una misma región.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/directconnect/latest/UserGuide/Welcome.html',
			'https://docs.aws.amazon.com/vpn/',
		],
	},
	{
		id: '3.5-q5',
		taskId: '3.5',
		objetivos: ['3.5#5'],
		tipo: 'escenario',
		question:
			'Una empresa transfiere cada noche grandes volúmenes de datos entre su centro de datos y AWS y exige ancho de banda estable y latencia predecible, con un enlace de respaldo. ¿Qué combinación es la más adecuada?',
		options: [
			'Usar solo AWS VPN para el tráfico principal y añadir Amazon CloudFront como respaldo.',
			'Contratar AWS Direct Connect como enlace principal y usar AWS VPN como respaldo.',
			'Usar un VPC endpoint como enlace principal y prescindir de conexión dedicada.',
			'Confiar únicamente en internet público y un security group para garantizar el ancho de banda.',
		],
		correctAnswer: 1,
		explanation:
			'AWS Direct Connect aporta un enlace dedicado y privado con ancho de banda y latencia estables, que es lo que exige la transferencia diaria. AWS VPN sobre internet sirve como respaldo y para tráfico puntual, sin la inversión de un segundo enlace dedicado. Si se pidiera el menor coste posible y no una latencia predecible, bastaría con el túnel cifrado sobre internet.',
		porQueOpcion: [
			'Incorrecta: la VPN no ofrece la latencia predecible exigida y CloudFront no es un enlace de respaldo.',
			'Correcta: Direct Connect aporta ancho de banda estable como enlace principal y la VPN sirve de respaldo sobre internet.',
			'Incorrecta: un VPC endpoint da acceso privado a servicios de AWS y no conecta el centro de datos con la VPC.',
			'Incorrecta: internet público no garantiza ancho de banda y el security group no mejora la conectividad.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/vpn/',
			'https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html',
			'https://docs.aws.amazon.com/directconnect/latest/UserGuide/Welcome.html',
		],
	},
	{
		id: '3.5-q6',
		taskId: '3.5',
		objetivos: ['3.5#5'],
		tipo: 'tradeoff',
		question:
			'Un equipo pequeño quiere conectar su oficina con AWS en pocos días y con presupuesto ajustado, y acepta que el rendimiento varíe algo. ¿Qué opción equilibra mejor rapidez, coste y los requisitos de red?',
		options: [
			'AWS Direct Connect, porque es la opción de menor coste inicial, se aprovisiona en pocos días y no exige contratos ni proveedor.',
			'AWS VPN, porque se despliega rápido sobre internet y encaja con un presupuesto ajustado aceptando variaciones de rendimiento.',
			'AWS PrivateLink, porque publica la red de la oficina como servicio privado dentro de la VPC y evita internet.',
			'Un VPC endpoint, porque sustituye por completo a la conexión de red con la oficina y no cobra por tráfico.',
		],
		correctAnswer: 1,
		explanation:
			'AWS VPN es la opción rápida y económica cuando se tolera cierta variabilidad, porque el túnel viaja cifrado por internet. Direct Connect ofrece más estabilidad pero exige contratación y más tiempo, y ni PrivateLink ni los VPC endpoints conectan una red externa con la VPC. Si el escenario exigiera ancho de banda estable para producción, la respuesta cambiaría a una conexión dedicada.',
		porQueOpcion: [
			'Incorrecta: Direct Connect no es la opción de menor coste inicial y exige contratación con proveedor y más tiempo.',
			'Correcta: AWS VPN se despliega rápido sobre internet y encaja con un presupuesto ajustado que acepta rendimiento variable.',
			'Incorrecta: PrivateLink publica servicios dentro de la VPC y no conecta la red de la oficina.',
			'Incorrecta: un VPC endpoint no sustituye la conexión de red con la oficina ni es un enlace de red.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/directconnect/latest/UserGuide/Welcome.html',
			'https://docs.aws.amazon.com/vpn/',
			'https://docs.aws.amazon.com/vpc/latest/privatelink/what-is-privatelink.html',
		],
	},
	{
		id: '3.5-q7',
		taskId: '3.5',
		objetivos: ['3.5#3'],
		tipo: 'comparacion',
		question:
			'¿Qué afirmación distingue correctamente un security group de un network ACL?',
		options: [
			'El security group es sin estado y se asocia a la subred, mientras que el network ACL es con estado, se asocia a la instancia y solo admite reglas de permiso.',
			'El security group es con estado y solo admite reglas de permiso sobre recursos; el network ACL es sin estado, actúa sobre la subred y admite permiso y denegación.',
			'Los dos son equivalentes y solo cambia el nombre según el servicio que los use: ambos filtran por subred, son con estado y no admiten reglas de denegación.',
			'El network ACL solo permite reglas de permiso y se evalúa por número de regla, mientras que el security group permite permitir y denegar y es sin estado.',
		],
		correctAnswer: 1,
		explanation:
			'El security group es con estado, actúa sobre recursos y solo admite reglas de permiso. El network ACL es sin estado, actúa sobre subredes, se evalúa por número de regla y admite reglas tanto de permiso como de denegación. Si el objetivo fuera filtrar a nivel de subred con reglas de denegación explícitas, el control adecuado sería el network ACL.',
		porQueOpcion: [
			'Incorrecta: invierte las propiedades, el security group es con estado y actúa sobre recursos, no sin estado sobre la subred.',
			'Correcta: el security group es con estado y solo admite reglas de permiso, y el network ACL es sin estado, actúa sobre la subred y admite permiso y denegación.',
			'Incorrecta: no son equivalentes y el network ACL sí admite reglas de denegación.',
			'Incorrecta: la descripción está invertida, el network ACL admite denegación y el security group es con estado.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html',
		],
	},
	{
		id: '3.5-q8',
		taskId: '3.5',
		objetivos: ['3.5#3'],
		tipo: 'seguridad',
		question:
			'Un equipo quiere detectar de forma continua vulnerabilidades y exposiciones de red en sus instancias. ¿Qué servicio cubre esa necesidad?',
		options: [
			'Para filtrar el tráfico de entrada y salida a nivel de subred mediante reglas evaluadas por orden.',
			'Para evaluar de forma continua las instancias y detectar vulnerabilidades y exposiciones de red.',
			'Para registrar y auditar los cambios de configuración de la VPC y de los recursos de la cuenta.',
			'Para emitir certificados TLS y gestionar el cifrado del tráfico en tránsito hacia los servicios.',
		],
		correctAnswer: 1,
		explanation:
			'Amazon Inspector es un servicio de evaluación continua que analiza las instancias para encontrar vulnerabilidades y exposiciones de red y reporta hallazgos. No filtra tráfico, no audita cambios de configuración ni gestiona certificados. Si el requisito fuera mitigar ataques de denegación de servicio en la red, el servicio sería otro distinto y no la evaluación de vulnerabilidades.',
		porQueOpcion: [
			'Incorrecta: filtrar el tráfico por reglas evaluadas por orden corresponde a un network ACL, no a la evaluación de vulnerabilidades.',
			'Correcta: evaluar de forma continua las instancias y detectar vulnerabilidades y exposiciones de red es la función de Amazon Inspector.',
			'Incorrecta: registrar y auditar cambios de configuración corresponde a AWS CloudTrail, no a la detección de vulnerabilidades.',
			'Incorrecta: emitir certificados TLS y gestionar el cifrado corresponde a AWS Certificate Manager, no a la evaluación de vulnerabilidades.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/inspector/',
			'https://docs.aws.amazon.com/cloudtrail/',
			'https://docs.aws.amazon.com/acm/',
		],
	},
	{
		id: '3.5-q9',
		taskId: '3.5',
		objetivos: ['3.5#4'],
		tipo: 'conocimiento',
		question:
			'Un equipo necesita publicar un dominio y dirigir el tráfico hacia distintos destinos según políticas. ¿Cuál es el propósito principal del servicio de DNS gestionado?',
		options: [
			'Alojar sitios web estáticos y entregar su contenido cacheado desde ubicaciones cercanas al usuario.',
			'Ofrecer resolución DNS y registrar nombres de dominio, dirigiendo el tráfico a los destinos adecuados.',
			'Crear redes virtuales aisladas dentro de una región con el rango de direcciones que tú defines.',
			'Establecer un enlace dedicado y privado entre la red local y AWS sin atravesar internet.',
		],
		correctAnswer: 1,
		explanation:
			'Amazon Route 53 es el servicio de DNS administrado: registra dominios y resuelve nombres hacia direcciones IP o destinos de AWS. El alojamiento de contenido, las redes virtuales y los enlaces dedicados corresponden a otros servicios. Si el requisito fuera entregar el contenido cacheado cerca del usuario, el servicio sería la red de entrega de contenido y no el DNS.',
		porQueOpcion: [
			'Incorrecta: alojar sitios estáticos y entregar contenido cacheado es la red de entrega de contenido, no el DNS.',
			'Correcta: el DNS gestionado resuelve nombres y registra dominios, dirigiendo el tráfico a los destinos adecuados.',
			'Incorrecta: crear redes virtuales aisladas dentro de una región corresponde a Amazon VPC, no al DNS.',
			'Incorrecta: establecer un enlace dedicado y privado con la red local corresponde a AWS Direct Connect, no al DNS.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html',
			'https://docs.aws.amazon.com/directconnect/latest/UserGuide/Welcome.html',
			'https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html',
		],
	},
	{
		id: '3.5-q10',
		taskId: '3.5',
		objetivos: ['3.5#4'],
		tipo: 'casoDeUso',
		question:
			'Una empresa quiere que, si su servidor principal deja de responder, el dominio empiece a dirigir a los usuarios hacia un servidor secundario sin intervención manual. ¿Qué función del DNS gestionado lo permite?',
		options: [
			'El registro de dominios, porque asigna el nombre público.',
			'Las comprobaciones de estado con enrutamiento por failover.',
			'El enrutamiento por ponderación, porque reparte el tráfico siempre al primer destino.',
			'La resolución de nombres internos, porque solo funciona dentro de la VPC.',
		],
		correctAnswer: 1,
		explanation:
			'Las comprobaciones de estado de Amazon Route 53 detectan un destino no saludable y, con la política de failover, redirigen el tráfico al destino disponible de forma automática. El registro de dominios solo publica el nombre y la ponderación no resuelve por sí sola un fallo. Si el objetivo fuera repartir el tráfico por proporciones entre varios destinos, se usaría enrutamiento por ponderación.',
		porQueOpcion: [
			'Incorrecta: registrar el dominio solo publica el nombre y no redirige el tráfico ante un fallo.',
			'Correcta: las comprobaciones de estado con enrutamiento por failover redirigen el tráfico al destino disponible de forma automática.',
			'Incorrecta: el enrutamiento por ponderación reparte el tráfico por proporciones y no resuelve por sí solo un fallo.',
			'Incorrecta: la resolución de nombres internos solo funciona dentro de la VPC y no hace failover público.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html',
		],
	},
	{
		id: '3.5-q11',
		taskId: '3.5',
		objetivos: ['3.5#1'],
		tipo: 'escenario',
		question:
			'Una empresa publica una aplicación web y necesita dos cosas de su capa de red: entregar imágenes y vídeos estáticos con baja latencia a usuarios de varios continentes y resolver el nombre de dominio hacia el destino activo. ¿Qué combinación de servicios cubre esos requisitos?',
		options: [
			'Amazon CloudFront para la entrega de contenido en el borde y Amazon Route 53 para la resolución DNS.',
			'Amazon VPC para la entrega de contenido y AWS Direct Connect para la resolución de nombres.',
			'AWS Global Accelerator para resolver los nombres y AWS VPN para entregar el contenido.',
			'AWS Transit Gateway para la entrega y AWS PrivateLink para la resolución de nombres.',
		],
		correctAnswer: 0,
		explanation:
			'La entrega de contenido cercana al usuario corresponde a la red de entrega de contenido y la traducción de nombres al servicio de DNS. Las demás opciones cruzan funciones: la red virtual aísla recursos, la conexión dedicada y la VPN enlazan redes, y el concentrador y el acceso privado interconectan redes o servicios. Si el requisito fuera aislar la aplicación en una red propia con subredes, la respuesta sería la red virtual.',
		porQueOpcion: [
			'Correcta: Amazon CloudFront entrega las imágenes y vídeos estáticos en el borde y Amazon Route 53 resuelve el nombre hacia el destino activo.',
			'Incorrecta: Amazon VPC no entrega contenido y AWS Direct Connect no resuelve nombres de dominio.',
			'Incorrecta: AWS Global Accelerator no resuelve nombres y AWS VPN no entrega contenido.',
			'Incorrecta: AWS Transit Gateway interconecta redes y AWS PrivateLink publica servicios; ninguno entrega contenido ni resuelve DNS.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html',
			'https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html',
			'https://docs.aws.amazon.com/directconnect/latest/UserGuide/Welcome.html',
			'https://docs.aws.amazon.com/global-accelerator/latest/dg/what-is-global-accelerator.html',
			'https://docs.aws.amazon.com/vpn/',
			'https://docs.aws.amazon.com/vpc/latest/tgw/what-is-transit-gateway.html',
			'https://docs.aws.amazon.com/vpc/latest/privatelink/what-is-privatelink.html',
			'https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html',
		],
	},
	{
		id: '3.5-q12',
		taskId: '3.5',
		objetivos: ['3.5#4'],
		tipo: 'comparacion',
		question:
			'Un equipo compara dos piezas de su arquitectura de red: una traduce nombres de dominio a direcciones y otra cachea contenido en ubicaciones cercanas al usuario para reducir la latencia. ¿Qué afirmación distingue correctamente ambas funciones?',
		options: [
			'El DNS resuelve nombres y dirige el tráfico; la red de entrega de contenido cachea y sirve el contenido desde ubicaciones cercanas.',
			'El DNS almacena y sirve el contenido estático a los usuarios; la red de entrega de contenido resuelve los nombres de dominio y aplica políticas de latencia.',
			'Ambas piezas son equivalentes y solo se diferencian en el precio de las consultas DNS.',
			'El DNS reparte las conexiones entre instancias y la red de entrega de contenido emite los certificados.',
		],
		correctAnswer: 0,
		explanation:
			'La traducción de nombres y el direccionamiento del tráfico corresponden al servicio de DNS, mientras que cachear y servir el contenido desde ubicaciones de borde corresponde a la red de entrega de contenido. Las opciones que intercambian esas funciones o las igualan son incorrectas. Si el escenario pidiera además desviar el tráfico a un destino secundario cuando el principal falla, seguiría siendo el DNS con comprobaciones de estado y failover.',
		porQueOpcion: [
			'Correcta: el DNS resuelve nombres y dirige el tráfico, y la red de entrega de contenido cachea y sirve el contenido desde ubicaciones cercanas.',
			'Incorrecta: intercambia las funciones, el DNS no sirve contenido ni la red de entrega resuelve nombres de dominio.',
			'Incorrecta: no son equivalentes, cumplen funciones distintas en la arquitectura.',
			'Incorrecta: el DNS no reparte conexiones entre instancias ni la red de entrega emite certificados.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html',
		],
	},
	{
		id: '3.5-q13',
		taskId: '3.5',
		objetivos: ['3.5#3'],
		tipo: 'escenario',
		question:
			'Un equipo necesita bloquear una subred completa ante un rango de direcciones malicioso y, además, permitir solo un puerto concreto hacia una instancia. ¿Qué combinación de controles debe aplicar?',
		options: [
			'Un network ACL en la subred con una regla de denegación y un security group en la instancia que permita solo el puerto necesario.',
			'Un security group en la subred que deniegue el rango y otro security group en la instancia con todas las reglas abiertas y sin admisión de reglas de denegación.',
			'Un network ACL con reglas solo de permiso y sin evaluación por número de regla sobre la subred.',
			'Un grupo de seguridad que cifre el tráfico y audite los cambios de configuración de la subred.',
		],
		correctAnswer: 0,
		explanation:
			'La denegación de un rango a nivel de subred exige un network ACL, que admite reglas de permiso y denegación, mientras que el control del puerto concreto sobre la instancia lo aporta el security group. Los security groups no admiten reglas de denegación ni se asocian a la subred. Si el objetivo fuera únicamente limitar el tráfico de entrada a la instancia, bastaría con el security group correspondiente.',
		porQueOpcion: [
			'Correcta: el network ACL deniega el rango a nivel de subred y el security group limita la instancia al puerto necesario.',
			'Incorrecta: los security groups se asocian a recursos, no a subredes, y no admiten reglas de denegación.',
			'Incorrecta: un network ACL solo con reglas de permiso no puede denegar el rango malicioso.',
			'Incorrecta: un security group no cifra el tráfico ni audita los cambios de configuración de la subred.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html',
		],
	},
];
