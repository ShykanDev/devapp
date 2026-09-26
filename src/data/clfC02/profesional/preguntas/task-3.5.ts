import type { PreguntaProfesionalClfC02 } from '@/data/clfC02/profesional/types';

export const profesionalTask35: PreguntaProfesionalClfC02[] = [
	{
		id: 'prof-3.5-q1',
		taskId: '3.5',
		objetivos: ['3.5#1'],
		tipo: 'servicio',
		question:
			'Una empresa quiere aislar sus recursos en una red virtual propia, publicar un dominio que resuelva a esos recursos y entregar contenido estático con baja latencia a usuarios de todo el mundo. ¿Qué combinación de servicios cubre esas tres necesidades?',
		options: [
			'Amazon VPC aísla la red virtual, Amazon Route 53 resuelve nombres DNS y Amazon CloudFront entrega contenido desde edge locations.',
			'Amazon VPC es el servicio de DNS y Amazon Route 53 es una red virtual aislada, ambos con cobertura global desde las ubicaciones de borde de AWS en todo el mundo.',
			'Amazon CloudFront es el cortafuegos de la VPC y Amazon VPC es una red de entrega de contenido desde el borde.',
			'Todos los servicios de red de AWS exigen una conexión física dedicada contratada con un proveedor externo.',
		],
		correctAnswer: 0,
		explanation:
			'Amazon VPC define la red virtual aislada donde viven los recursos, Amazon Route 53 ofrece DNS y enrutamiento de tráfico, y Amazon CloudFront entrega contenido desde edge locations. No requieren conexión física dedicada. Si cambia el foco hacia enlazar instalaciones propias con la VPC, entrarían en juego la conexión dedicada y la VPN.',
		porQueOpcion: [
			'Correcta: asigna a cada servicio su función de red.',
			'Incorrecto: intercambia las funciones de Amazon VPC y Amazon Route 53.',
			'Incorrecto: Amazon CloudFront no es un cortafuegos y Amazon VPC no es una red de entrega de contenido.',
			'Incorrecto: la conexión dedicada es solo una opción de conectividad, no un requisito.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html',
			'https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html',
			'https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html',
		],
	},
	{
		id: 'prof-3.5-q2',
		taskId: '3.5',
		objetivos: ['3.5#2'],
		tipo: 'escenario',
		question:
			'Un equipo diseña su red en AWS y necesita separar las cargas públicas de las privadas y dar salida a internet a las públicas. ¿Qué componentes de la VPC debe usar?',
		options: [
			'Subredes públicas y privadas, con un internet gateway conectado a la VPC para la salida a internet de las públicas.',
			'Una única subred pública, porque cada VPC admite solo una subred y no se pueden separar las cargas.',
			'Un internet gateway dentro de cada instancia, sin necesidad de definir subredes ni tablas de enrutamiento.',
			'Una tabla de enrutamiento y un bucket de Amazon S3, sin subredes, para separar las cargas públicas y privadas.',
		],
		correctAnswer: 0,
		explanation:
			'La VPC se divide en subredes; las públicas se asocian a un internet gateway para acceder a internet y las privadas quedan sin esa ruta directa. La tabla de enrutamiento dirige el tráfico, pero no sustituye a las subredes. Si el requisito fuera dar salida a una subred privada, se añadiría un NAT gateway en lugar de un internet gateway.',
		porQueOpcion: [
			'Correcta: describe los componentes que permiten separar cargas y dar salida a internet.',
			'Incorrecto: una VPC admite varias subredes en distintas Availability Zones.',
			'Incorrecto: el internet gateway es un componente de la VPC, no de la instancia.',
			'Incorrecto: Amazon S3 no es un componente de red de la VPC.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/s3/',
		],
	},
	{
		id: 'prof-3.5-q3',
		taskId: '3.5',
		objetivos: ['3.5#3'],
		tipo: 'comparacion',
		question: '¿Qué diferencia hay entre un security group y una network ACL en una VPC?',
		options: [
			'El security group actúa a nivel de instancia y es con estado; la network ACL actúa a nivel de subred y es sin estado.',
			'El security group actúa a nivel de subred y la network ACL a nivel de instancia, ambos con estado.',
			'Ambos son sin estado y solo filtran el tráfico saliente, sin reglas de entrada.',
			'La network ACL cifra el tráfico de la subred y el security group lo enruta hacia la instancia.',
		],
		correctAnswer: 0,
		explanation:
			'El security group es un cortafuegos con estado que protege las instancias y admite reglas de entrada y salida. La network ACL es una capa sin estado a nivel de subred que filtra el tráfico que entra y sale de ella. Si el objetivo fuera aplicar reglas de denegación a toda la subred, el control sería la network ACL.',
		porQueOpcion: [
			'Correcta: distingue nivel de aplicación y tipo de filtrado.',
			'Incorrecto: invierte los niveles de actuación.',
			'Incorrecto: el security group es con estado; no son equivalentes.',
			'Incorrecto: ni cifran ni enrutan; solo filtran tráfico.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html',
		],
	},
	{
		id: 'prof-3.5-q4',
		taskId: '3.5',
		objetivos: ['3.5#4'],
		tipo: 'servicio',
		question: '¿Cuál es el propósito principal del servicio de DNS gestionado de AWS?',
		options: [
			'Proporcionar resolución de nombres DNS y enrutamiento de tráfico hacia los recursos de AWS.',
			'Crear subredes y tablas de enrutamiento dentro de la VPC y aislar las cargas.',
			'Establecer una conexión física dedicada entre el centro de datos y AWS sin internet.',
			'Distribuir el tráfico entre instancias detrás de un balanceador de carga.',
		],
		correctAnswer: 0,
		explanation:
			'Amazon Route 53 es el servicio de DNS gestionado y escalable de AWS: traduce nombres a direcciones y permite políticas de enrutamiento hacia distintos recursos. Las subredes son de la VPC y la conexión dedicada es AWS Direct Connect. Si se pidiera cachear y entregar contenido, el servicio sería la red de entrega de contenido y no el DNS.',
		porQueOpcion: [
			'Correcta: su función es DNS y enrutamiento de tráfico.',
			'Incorrecto: las subredes y rutas se definen en la VPC.',
			'Incorrecto: la conexión dedicada corresponde a AWS Direct Connect.',
			'Incorrecto: el reparto entre instancias es tarea de un balanceador de carga.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/directconnect/latest/UserGuide/Welcome.html',
			'https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html',
		],
	},
	{
		id: 'prof-3.5-q5',
		taskId: '3.5',
		objetivos: ['3.5#5'],
		tipo: 'comparacion',
		question:
			'Una empresa necesita conectar su centro de datos con AWS y compara una VPN de sitio a sitio con una conexión dedicada. ¿Qué distingue a ambas opciones?',
		options: [
			'La VPN usa un túnel cifrado sobre internet y se aprovisiona rápido; AWS Direct Connect ofrece una conexión dedicada y privada con latencia más consistente.',
			'La VPN es una conexión física dedicada y privada, mientras que AWS Direct Connect es un túnel sobre internet con ancho de banda variable.',
			'Ambas opciones son equivalentes y solo cambian de nombre comercial; la elección depende únicamente del precio y no de la latencia.',
			'AWS Direct Connect solo conecta instancias dentro de una misma Availability Zone y no sale de la región.',
		],
		correctAnswer: 0,
		explanation:
			'La VPN de sitio a sitio monta un túnel cifrado a través de internet, rápida de desplegar. AWS Direct Connect es un enlace privado y dedicado que evita internet público y ofrece un rendimiento y una latencia más predecibles. Si el requisito fuera desplegar la conexión en pocos días, bastaría con la VPN sobre internet.',
		porQueOpcion: [
			'Correcta: contrapone túnel sobre internet frente a enlace dedicado.',
			'Incorrecto: invierte las características de ambas opciones.',
			'Incorrecto: difieren en medio, coste y previsibilidad.',
			'Incorrecto: AWS Direct Connect conecta redes y ubicaciones, no se limita a una Availability Zone.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/directconnect/latest/UserGuide/Welcome.html',
		],
	},
];
