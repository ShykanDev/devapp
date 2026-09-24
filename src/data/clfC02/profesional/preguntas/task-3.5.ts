import type { PreguntaProfesionalClfC02 } from '@/data/clfC02/profesional/types';

export const profesionalTask35: PreguntaProfesionalClfC02[] = [
	{
		id: 'prof-3.5-q1',
		taskId: '3.5',
		objetivos: ['3.5#1'],
		tipo: 'servicio',
		question: '¿Qué afirmación describe correctamente los servicios de red de AWS?',
		options: [
			'Amazon VPC aísla la red virtual, Amazon Route 53 resuelve nombres DNS y Amazon CloudFront entrega contenido desde edge locations.',
			'Amazon VPC es el servicio de DNS y Amazon Route 53 es una red virtual aislada.',
			'Amazon CloudFront es el cortafuegos de la VPC y Amazon VPC es una red de entrega de contenido.',
			'Todos los servicios de red de AWS requieren una conexión física dedicada.',
		],
		correctAnswer: 0,
		explanation:
			'Amazon VPC define la red virtual aislada donde viven los recursos, Amazon Route 53 ofrece DNS y enrutamiento de tráfico, y Amazon CloudFront entrega contenido desde edge locations. No requieren conexión física dedicada.',
		porQueOpcion: [
			'Correcta: asigna a cada servicio su función de red.',
			'Incorrecto: intercambia las funciones de Amazon VPC y Amazon Route 53.',
			'Incorrecto: Amazon CloudFront no es un cortafuegos y Amazon VPC no es una red de entrega de contenido.',
			'Incorrecto: la conexión dedicada es solo una opción de conectividad, no un requisito.',
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
			'Una única subred pública, porque cada VPC admite solo una subred.',
			'Un internet gateway dentro de cada instancia, sin necesidad de subredes.',
			'Una tabla de enrutamiento y un bucket de Amazon S3, sin subredes.',
		],
		correctAnswer: 0,
		explanation:
			'La VPC se divide en subredes; las públicas se asocian a un internet gateway para acceder a internet y las privadas quedan sin esa ruta directa. La tabla de enrutamiento dirige el tráfico, pero no sustituye a las subredes.',
		porQueOpcion: [
			'Correcta: describe los componentes que permiten separar cargas y dar salida a internet.',
			'Incorrecto: una VPC admite varias subredes en distintas Availability Zones.',
			'Incorrecto: el internet gateway es un componente de la VPC, no de la instancia.',
			'Incorrecto: Amazon S3 no es un componente de red de la VPC.',
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
			'El security group actúa a nivel de subred y la network ACL a nivel de instancia.',
			'Ambos son sin estado y solo filtran el tráfico saliente.',
			'La network ACL cifra el tráfico y el security group lo enruta.',
		],
		correctAnswer: 0,
		explanation:
			'El security group es un cortafuegos con estado que protege las instancias y admite reglas de entrada y salida. La network ACL es una capa sin estado a nivel de subred que filtra el tráfico que entra y sale de ella.',
		porQueOpcion: [
			'Correcta: distingue nivel de aplicación y tipo de filtrado.',
			'Incorrecto: invierte los niveles de actuación.',
			'Incorrecto: el security group es con estado; no son equivalentes.',
			'Incorrecto: ni cifran ni enrutan; solo filtran tráfico.',
		],
	},
	{
		id: 'prof-3.5-q4',
		taskId: '3.5',
		objetivos: ['3.5#4'],
		tipo: 'servicio',
		question: '¿Cuál es el propósito principal de Amazon Route 53?',
		options: [
			'Proporcionar resolución de nombres DNS y enrutamiento de tráfico hacia los recursos de AWS.',
			'Crear subredes y tablas de enrutamiento dentro de la VPC.',
			'Establecer una conexión física dedicada entre el centro de datos y AWS.',
			'Distribuir el tráfico entre instancias detrás de un balanceador.',
		],
		correctAnswer: 0,
		explanation:
			'Amazon Route 53 es el servicio de DNS gestionado y escalable de AWS: traduce nombres a direcciones y permite políticas de enrutamiento hacia distintos recursos. Las subredes son de la VPC y la conexión dedicada es AWS Direct Connect.',
		porQueOpcion: [
			'Correcta: su función es DNS y enrutamiento de tráfico.',
			'Incorrecto: las subredes y rutas se definen en la VPC.',
			'Incorrecto: la conexión dedicada corresponde a AWS Direct Connect.',
			'Incorrecto: el reparto entre instancias es tarea de un balanceador de carga.',
		],
	},
	{
		id: 'prof-3.5-q5',
		taskId: '3.5',
		objetivos: ['3.5#5'],
		tipo: 'comparacion',
		question:
			'Una empresa necesita conectar su centro de datos con AWS. ¿Qué distingue a AWS Site-to-Site VPN de AWS Direct Connect?',
		options: [
			'La VPN usa un túnel cifrado sobre internet y se aprovisiona rápido; AWS Direct Connect ofrece una conexión dedicada y privada con latencia más consistente.',
			'La VPN es una conexión física dedicada y AWS Direct Connect un túnel sobre internet.',
			'Ambas son equivalentes y solo cambian de nombre comercial.',
			'AWS Direct Connect solo conecta instancias dentro de una misma Availability Zone.',
		],
		correctAnswer: 0,
		explanation:
			'La VPN de sitio a sitio monta un túnel cifrado a través de internet, rápida de desplegar. AWS Direct Connect es un enlace privado y dedicado que evita internet público y ofrece un rendimiento y una latencia más predecibles.',
		porQueOpcion: [
			'Correcta: contrapone túnel sobre internet frente a enlace dedicado.',
			'Incorrecto: invierte las características de ambas opciones.',
			'Incorrecto: difieren en medio, coste y previsibilidad.',
			'Incorrecto: AWS Direct Connect conecta redes y ubicaciones, no se limita a una Availability Zone.',
		],
	},
];
