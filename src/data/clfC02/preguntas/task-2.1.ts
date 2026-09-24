import type { PreguntaClfC02 } from '@/data/clfC02/types';

export const preguntasTask21: PreguntaClfC02[] = [
	{
		id: '2.1-q1',
		taskId: '2.1',
		objetivos: ['2.1#1'],
		tipo: 'conocimiento',
		question: '¿Qué describe el AWS shared responsibility model?',
		options: [
			'Que AWS se encarga de toda la seguridad y el cliente solo se limita a usar los servicios.',
			'Que la seguridad se reparte entre AWS, responsable de la seguridad de la nube, y el cliente, responsable de la seguridad en la nube.',
			'Que el cliente hereda la seguridad física de los centros de datos al contratar un servicio.',
			'Que la seguridad se delega por completo a productos de terceros del AWS Marketplace.',
		],
		correctAnswer: 1,
		explanation:
			'El modelo reparte la seguridad entre AWS y el cliente. AWS protege la infraestructura que sostiene los servicios (seguridad de la nube) y el cliente protege lo que configura dentro de ella (seguridad en la nube). No se delega por completo a ninguna de las dos partes.',
	},
	{
		id: '2.1-q2',
		taskId: '2.1',
		objetivos: ['2.1#2', '2.1#3'],
		tipo: 'comparacion',
		question: 'En el AWS shared responsibility model, ¿quién es responsable de qué?',
		options: [
			'AWS responde de los datos y las identidades, y el cliente responde del hardware.',
			'AWS responde de la infraestructura física y la virtualización, y el cliente responde de los datos, las identidades, las aplicaciones y la configuración.',
			'Ambos responden exactamente de lo mismo en todos los servicios.',
			'El cliente responde de la infraestructura global y AWS responde de las aplicaciones.',
		],
		correctAnswer: 1,
		explanation:
			'AWS es responsable de la seguridad de la nube: instalaciones, hardware, red y virtualización. El cliente es responsable de la seguridad en la nube: datos, identidades y accesos, aplicaciones y configuración de los recursos. El reparto cambia según el servicio, pero no son responsables de lo mismo.',
	},
	{
		id: '2.1-q3',
		taskId: '2.1',
		objetivos: ['2.1#3'],
		tipo: 'escenario',
		question:
			'Un equipo migra una aplicación de servidores propios a instancias de Amazon EC2. ¿Qué parte de la seguridad queda del lado del cliente en este modelo?',
		options: [
			'La seguridad física de los centros de datos y la red troncal.',
			'El sistema operativo invitado, sus parches, los datos y la configuración de las instancias.',
			'La capa de virtualización que separa unas instancias de otras.',
			'La refrigeración y la alimentación de los edificios.',
		],
		correctAnswer: 1,
		explanation:
			'AWS protege la infraestructura (centros de datos, hardware, red y virtualización). En Amazon EC2 el cliente responde del sistema operativo invitado, de sus parches, de las aplicaciones, de los datos y de la configuración de la instancia.',
	},
	{
		id: '2.1-q4',
		taskId: '2.1',
		objetivos: ['2.1#4'],
		tipo: 'conocimiento',
		question: '¿Cuál de estas es una responsabilidad que corresponde a AWS?',
		options: [
			'Cifrar los datos del cliente con sus propias claves.',
			'Definir qué usuarios pueden acceder a cada recurso.',
			'Proteger las instalaciones, el hardware y la red que ejecutan los servicios.',
			'Elegir la configuración de red de la nube virtual privada del cliente.',
		],
		correctAnswer: 2,
		explanation:
			'AWS responde de la seguridad de la infraestructura: instalaciones físicas, hardware, red y software de virtualización. Las claves, los permisos de acceso y la configuración del servicio son responsabilidad del cliente.',
	},
	{
		id: '2.1-q5',
		taskId: '2.1',
		objetivos: ['2.1#5', '2.1#6'],
		tipo: 'comparacion',
		question: '¿Qué distingue la seguridad de la nube de la seguridad en la nube?',
		options: [
			'La seguridad de la nube la asume AWS sobre su infraestructura; la seguridad en la nube la asume el cliente sobre lo que configura.',
			'La seguridad de la nube la asume el cliente y la seguridad en la nube la asume AWS.',
			'Ambas las asume AWS y el cliente solo elige el servicio que contrata.',
			'Ambas las asume el cliente porque los datos son suyos en cualquier caso.',
		],
		correctAnswer: 0,
		explanation:
			'La seguridad de la nube es la que AWS aplica a la infraestructura que sostiene los servicios. La seguridad en la nube es la que el cliente aplica a sus datos, identidades, aplicaciones y configuración. Además hay responsabilidades compartidas, como la gestión de parches y de la configuración.',
	},
	{
		id: '2.1-q6',
		taskId: '2.1',
		objetivos: ['2.1#6'],
		tipo: 'escenario',
		question:
			'Una empresa compara ejecutar su base de datos por su cuenta en instancias de Amazon EC2 o usar Amazon RDS. ¿Cómo cambia la responsabilidad al elegir Amazon RDS?',
		options: [
			'El cliente deja de ser responsable de sus datos y de quién accede a ellos.',
			'AWS asume la gestión del motor de base de datos, sus parches y las copias de seguridad de la plataforma, mientras el cliente sigue respondiendo de los datos y de los accesos.',
			'La responsabilidad no cambia: en ambos casos AWS gestiona el sistema operativo.',
			'AWS pasa a responder también de la configuración de la aplicación que usa la base de datos.',
		],
		correctAnswer: 1,
		explanation:
			'Al pasar a Amazon RDS, AWS asume más capas: el motor, sus parches y las copias de seguridad de la plataforma. El cliente conserva la responsabilidad sobre los datos, las identidades, los accesos y la configuración del servicio.',
	},
	{
		id: '2.1-q7',
		taskId: '2.1',
		objetivos: ['2.1#6'],
		tipo: 'tradeoff',
		question:
			'Al elegir entre un servicio más gestionado y uno menos gestionado, ¿qué trade-off describe mejor el modelo de responsabilidad compartida?',
		options: [
			'Cuanto menos gestionado es el servicio, más control tiene el cliente y más responsabilidad de operación asume.',
			'Cuanto más gestionado es el servicio, más responsabilidad operativa recae sobre el cliente.',
			'El nivel de gestión no influye: la responsabilidad del cliente es siempre idéntica.',
			'Elegir un servicio gestionado transfiere al cliente la seguridad física de la infraestructura.',
		],
		correctAnswer: 0,
		explanation:
			'El control y la responsabilidad van juntos: en un servicio menos gestionado el cliente controla más capas y, por tanto, opera más. En un servicio más gestionado AWS asume más operación, pero el cliente nunca pierde la responsabilidad sobre sus datos, identidades y configuración.',
	},
	{
		id: '2.1-q8',
		taskId: '2.1',
		objetivos: ['2.1#5'],
		tipo: 'conocimiento',
		question: '¿Cuál de las siguientes es una responsabilidad compartida entre AWS y el cliente?',
		options: [
			'La seguridad física de los centros de datos.',
			'La gestión de parches y la gestión de la configuración.',
			'La decisión de qué usuarios pueden acceder a los datos.',
			'La construcción y el mantenimiento de la red troncal.',
		],
		correctAnswer: 1,
		explanation:
			'La gestión de parches y la gestión de la configuración son responsabilidades compartidas: AWS las aplica sobre su infraestructura y el cliente sobre sus recursos. La seguridad física y la red troncal son de AWS; la decisión de quién accede a los datos es del cliente.',
	},
];
