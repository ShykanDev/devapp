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
			'Amazon VPC es la red virtual aislada que se crea dentro de una región con un rango de direcciones propio. Route 53 es DNS, CloudFront entrega contenido y Direct Connect es un enlace dedicado, no una red virtual.',
	},
	{
		id: '3.5-q2',
		taskId: '3.5',
		objetivos: ['3.5#2'],
		tipo: 'conocimiento',
		question:
			'Dentro de una VPC, ¿qué se necesita para que una subred tenga salida y entrada hacia internet?',
		options: [
			'Un security group asociado a la subred.',
			'Un internet gateway asociado a la VPC y una route table que envíe el tráfico hacia él.',
			'Una comprobación de estado de Amazon Route 53.',
			'Un VPC endpoint hacia los servicios de AWS.',
		],
		correctAnswer: 1,
		explanation:
			'Una subred es pública cuando la VPC tiene un internet gateway y la route table de la subred dirige el tráfico hacia ese gateway. El security group controla permisos, no la salida a internet; el VPC endpoint sirve para acceso privado a servicios de AWS.',
	},
	{
		id: '3.5-q3',
		taskId: '3.5',
		objetivos: ['3.5#2'],
		tipo: 'escenario',
		question:
			'Una empresa diseña una VPC con dos capas: servidores web accesibles desde internet y una base de datos que solo debe recibir tráfico de esos servidores. ¿Qué diseño de subredes es correcto?',
		options: [
			'Colocar web y base de datos en la misma subred pública para simplificar.',
			'Poner los servidores web en una subred pública con internet gateway y la base de datos en una subred privada sin entrada desde internet.',
			'Poner la base de datos en una subred pública y los servidores web en una privada.',
			'Colocar todo en subredes privadas y añadir un internet gateway a cada subred.',
		],
		correctAnswer: 1,
		explanation:
			'La capa web necesita publicarse hacia internet, así que va en una subred pública con internet gateway. La base de datos debe quedar aislada de conexiones entrantes de internet, por lo que se ubica en una subred privada, con salida controlada si hace falta.',
	},
	{
		id: '3.5-q4',
		taskId: '3.5',
		objetivos: ['3.5#5'],
		tipo: 'comparacion',
		question:
			'Una empresa evalúa cómo conectar su centro de datos con AWS. ¿Qué afirmación distingue correctamente AWS VPN de AWS Direct Connect?',
		options: [
			'AWS Direct Connect cifra el tráfico sobre internet y AWS VPN usa un enlace dedicado.',
			'AWS VPN usa un túnel cifrado sobre internet y AWS Direct Connect es un enlace dedicado y privado que no atraviesa internet.',
			'Ambos son enlaces dedicados y solo se diferencian en el ancho de banda contratado.',
			'AWS VPN sirve solo para DNS y AWS Direct Connect solo para conectar VPC entre regiones.',
		],
		correctAnswer: 1,
		explanation:
			'AWS VPN establece un túnel cifrado a través de internet, rápido de desplegar pero con rendimiento variable. AWS Direct Connect es un enlace dedicado y privado que no pasa por internet, con ancho de banda y latencia más estables.',
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
			'AWS Direct Connect aporta un enlace dedicado y privado con ancho de banda y latencia estables, que es lo que exige la transferencia diaria. AWS VPN sobre internet sirve como respaldo y para tráfico puntual, sin la inversión de un segundo enlace dedicado.',
	},
	{
		id: '3.5-q6',
		taskId: '3.5',
		objetivos: ['3.5#5'],
		tipo: 'tradeoff',
		question:
			'Un equipo pequeño quiere conectar su oficina con AWS en pocos días y con presupuesto ajustado, y acepta que el rendimiento varíe algo. ¿Qué opción equilibra mejor rapidez, coste y los requisitos de red?',
		options: [
			'AWS Direct Connect, porque siempre es la opción de menor coste total.',
			'AWS VPN, porque se despliega rápido sobre internet y encaja con un presupuesto ajustado aceptando variaciones de rendimiento.',
			'AWS PrivateLink, porque publica la oficina como servicio privado en la VPC.',
			'Un VPC endpoint, porque sustituye por completo a la conexión con la oficina.',
		],
		correctAnswer: 1,
		explanation:
			'AWS VPN es la opción rápida y económica cuando se tolera cierta variabilidad, porque el túnel viaja cifrado por internet. Direct Connect ofrece más estabilidad pero exige contratación y más tiempo, y ni PrivateLink ni los VPC endpoints conectan una red externa con la VPC.',
	},
	{
		id: '3.5-q7',
		taskId: '3.5',
		objetivos: ['3.5#3'],
		tipo: 'comparacion',
		question:
			'¿Qué afirmación distingue correctamente un security group de un network ACL?',
		options: [
			'El security group es sin estado y se asocia a la subred; el network ACL es con estado y se asocia a la instancia.',
			'El security group es con estado, solo tiene reglas de permiso y se asocia a recursos; el network ACL es sin estado, admite permiso y denegación y se asocia a una subred.',
			'Los dos son equivalentes, solo cambia el nombre según el servicio que los use.',
			'El network ACL solo permite reglas de permiso, mientras que el security group permite permitir y denegar.',
		],
		correctAnswer: 1,
		explanation:
			'El security group es con estado, actúa sobre recursos y solo admite reglas de permiso. El network ACL es sin estado, actúa sobre subredes, se evalúa por número de regla y admite reglas tanto de permiso como de denegación.',
	},
	{
		id: '3.5-q8',
		taskId: '3.5',
		objetivos: ['3.5#3'],
		tipo: 'seguridad',
		question: '¿Para qué sirve Amazon Inspector?',
		options: [
			'Para filtrar el tráfico de entrada y salida a nivel de subred.',
			'Para evaluar de forma continua las instancias y detectar vulnerabilidades y exposiciones de red.',
			'Para registrar los cambios de configuración de la VPC.',
			'Para emitir certificados y gestionar el cifrado en tránsito.',
		],
		correctAnswer: 1,
		explanation:
			'Amazon Inspector es un servicio de evaluación continua que analiza las instancias para encontrar vulnerabilidades y exposiciones de red y reporta hallazgos. No filtra tráfico, no audita cambios de configuración ni gestiona certificados.',
	},
	{
		id: '3.5-q9',
		taskId: '3.5',
		objetivos: ['3.5#4'],
		tipo: 'conocimiento',
		question: '¿Cuál es el propósito principal de Amazon Route 53?',
		options: [
			'Alojar sitios web estáticos y entregar su contenido.',
			'Ofrecer resolución DNS y registrar nombres de dominio, dirigiendo el tráfico a los destinos adecuados.',
			'Crear redes virtuales aisladas dentro de una región.',
			'Establecer un enlace dedicado entre la red local y AWS.',
		],
		correctAnswer: 1,
		explanation:
			'Amazon Route 53 es el servicio de DNS administrado: registra dominios y resuelve nombres hacia direcciones IP o destinos de AWS. El alojamiento de contenido, las redes virtuales y los enlaces dedicados corresponden a otros servicios.',
	},
	{
		id: '3.5-q10',
		taskId: '3.5',
		objetivos: ['3.5#4'],
		tipo: 'casoDeUso',
		question:
			'Una empresa quiere que, si su servidor principal deja de responder, el dominio empiece a dirigir a los usuarios hacia un servidor secundario sin intervención manual. ¿Qué función de Amazon Route 53 lo permite?',
		options: [
			'El registro de dominios, porque asigna el nombre público.',
			'Las comprobaciones de estado con enrutamiento por failover.',
			'El enrutamiento por ponderación, porque reparte el tráfico siempre al primer destino.',
			'La resolución de nombres internos, porque solo funciona dentro de la VPC.',
		],
		correctAnswer: 1,
		explanation:
			'Las comprobaciones de estado de Amazon Route 53 detectan un destino no saludable y, con la política de failover, redirigen el tráfico al destino disponible de forma automática. El registro de dominios solo publica el nombre y la ponderación no resuelve por sí sola un fallo.',
	},
];
