import type { PreguntaProfesionalClfC02 } from '@/data/clfC02/profesional/types';

export const profesionalTask21: PreguntaProfesionalClfC02[] = [
	{
		id: 'prof-2.1-q1',
		taskId: '2.1',
		objetivos: ['2.1#1'],
		tipo: 'trampa',
		question: '¿Qué establece el modelo de responsabilidad compartida de AWS?',
		options: [
			'AWS es responsable de la seguridad de la nube y el cliente de la seguridad en la nube.',
			'AWS y el cliente comparten al 50 % cada control de seguridad, sin distinguir capas.',
			'El cliente es responsable de la seguridad de la nube y AWS de la seguridad en la nube.',
			'AWS asume toda la seguridad y el cliente solo responde de la facturación.',
		],
		correctAnswer: 0,
		explanation:
			'El modelo separa la seguridad de la nube (infraestructura, hardware, red y servicios gestionados que opera AWS) de la seguridad en la nube (datos, identidades, configuración y código del cliente). No es un reparto al 50 % ni una inversión de roles.',
		porQueOpcion: [
			'Correcta: distingue la seguridad de la nube (AWS) de la seguridad en la nube (cliente).',
			'Incorrecta: no existe un reparto fijo al 50 %; cada capa tiene su responsable según el servicio.',
			'Incorrecta: invierte los roles del modelo.',
			'Incorrecta: el cliente conserva responsabilidades de seguridad, no solo de facturación.',
		],
	},
	{
		id: 'prof-2.1-q2',
		taskId: '2.1',
		objetivos: ['2.1#2'],
		tipo: 'comparacion',
		question: '¿Cuáles son los dos componentes que describe el modelo de responsabilidad compartida?',
		options: [
			'La seguridad de la nube, a cargo de AWS, y la seguridad en la nube, a cargo del cliente.',
			'El plano de control y el plano de datos, ambos gestionados siempre por AWS.',
			'La seguridad física y la seguridad lógica, ambas responsabilidad del cliente.',
			'El cifrado en tránsito y el cifrado en reposo, ambos gestionados siempre por AWS.',
		],
		correctAnswer: 0,
		explanation:
			'El modelo se articula en dos componentes: la seguridad de la nube (la infraestructura física y los servicios que AWS opera) y la seguridad en la nube (lo que el cliente despliega, configura y protege). Los planos, el cifrado y las capas de seguridad son conceptos técnicos que se reparten dentro de esos dos componentes.',
		porQueOpcion: [
			'Correcta: identifica los dos componentes oficiales del modelo.',
			'Incorrecta: el plano de datos no siempre lo gestiona AWS; depende del servicio.',
			'Incorrecta: la seguridad física de los centros de datos es responsabilidad de AWS.',
			'Incorrecta: el cliente decide y configura el cifrado según el servicio que use.',
		],
	},
	{
		id: 'prof-2.1-q3',
		taskId: '2.1',
		objetivos: ['2.1#3'],
		tipo: 'escenario',
		question:
			'Un equipo revisa sus obligaciones con AWS. ¿Cuál de las siguientes es responsabilidad del cliente?',
		options: [
			'Gestionar y parchear el sistema operativo invitado de sus instancias de Amazon EC2 y administrar sus identidades y permisos.',
			'Mantener la seguridad física de los centros de datos que alojan esas instancias.',
			'Operar el hipervisor y la capa de virtualización de los servidores de AWS.',
			'Proteger la red global que interconecta las regiones y las Availability Zones.',
		],
		correctAnswer: 0,
		explanation:
			'El cliente responde de lo que despliega en la nube: el sistema operativo invitado, las aplicaciones, los datos, las identidades y las configuraciones. La seguridad física, el hipervisor y la red global pertenecen a la seguridad de la nube y son responsabilidad de AWS.',
		porQueOpcion: [
			'Correcta: el parcheo del sistema operativo invitado y la gestión de accesos son del cliente.',
			'Incorrecta: la seguridad física de los centros de datos es responsabilidad de AWS.',
			'Incorrecta: el hipervisor y la virtualización los opera AWS.',
			'Incorrecta: la red global forma parte de la seguridad de la nube, a cargo de AWS.',
		],
	},
	{
		id: 'prof-2.1-q4',
		taskId: '2.1',
		objetivos: ['2.1#3'],
		tipo: 'trampa',
		question:
			'Un cliente afirma que, como AWS gestiona la infraestructura, también parchea el sistema operativo invitado de sus instancias de Amazon EC2. ¿Es correcto?',
		options: [
			'No: el cliente es responsable de gestionar y parchear el sistema operativo invitado, además de sus aplicaciones y datos.',
			'Sí: AWS parchea todo el software, incluido el sistema operativo invitado, en cualquier servicio.',
			'Sí: el parcheo del sistema operativo invitado es siempre una responsabilidad compartida al 50 %.',
			'No: el cliente solo responde de la facturación y el parcheo siempre corresponde a AWS.',
		],
		correctAnswer: 0,
		explanation:
			'En servicios de infraestructura como Amazon EC2, el cliente controla el sistema operativo invitado, por lo que le corresponde su parcheo junto con aplicaciones, datos y accesos. AWS solo gestiona la capa de virtualización y la infraestructura física.',
		porQueOpcion: [
			'Correcta: el sistema operativo invitado y las aplicaciones son del cliente.',
			'Incorrecta: AWS no parchea el sistema operativo invitado en instancias autogestionadas.',
			'Incorrecta: no hay reparto al 50 %; el sistema operativo invitado es íntegramente del cliente.',
			'Incorrecta: el cliente tiene responsabilidades técnicas, no solo de facturación.',
		],
	},
	{
		id: 'prof-2.1-q5',
		taskId: '2.1',
		objetivos: ['2.1#4'],
		tipo: 'trampa',
		question: '¿Cuál de las siguientes es una responsabilidad exclusiva de AWS?',
		options: [
			'Operar la infraestructura global, incluidos los centros de datos, el hardware y la red.',
			'Configurar las políticas de AWS Identity and Access Management (IAM) de la cuenta.',
			'Cifrar los datos del cliente antes de cargarlos en los servicios de AWS.',
			'Gestionar las credenciales de los usuarios de las aplicaciones del cliente.',
		],
		correctAnswer: 0,
		explanation:
			'AWS es responsable de la seguridad de la nube: instalaciones, hardware, red y la capa de virtualización. Las políticas de IAM, el cifrado de los datos y las credenciales de los usuarios son decisiones y configuraciones del cliente.',
		porQueOpcion: [
			'Correcta: la infraestructura global pertenece a la seguridad de la nube, a cargo de AWS.',
			'Incorrecta: las políticas de IAM las define el cliente.',
			'Incorrecta: el cliente decide qué datos cifrar y cómo.',
			'Incorrecta: las credenciales de los usuarios finales las gestiona el cliente.',
		],
	},
	{
		id: 'prof-2.1-q6',
		taskId: '2.1',
		objetivos: ['2.1#5'],
		tipo: 'comparacion',
		question: '¿Qué control es un ejemplo de responsabilidad compartida entre AWS y el cliente?',
		options: [
			'La gestión de parches: AWS parchea la infraestructura que opera y el cliente parchea lo que ejecuta sobre ella.',
			'La seguridad física de los centros de datos, que ambos protegen de forma conjunta.',
			'El cifrado en reposo de los buckets de Amazon S3, que AWS activa siempre por el cliente.',
			'Las credenciales del root user, que AWS administra en nombre del cliente.',
		],
		correctAnswer: 0,
		explanation:
			'La gestión de parches es el ejemplo clásico de control compartido: AWS parchea la infraestructura subyacente y el cliente parchea el sistema operativo invitado y las aplicaciones. La seguridad física y las credenciales del root user no se comparten en ese sentido.',
		porQueOpcion: [
			'Correcta: el parcheo se reparte entre la capa de AWS y la del cliente.',
			'Incorrecta: la seguridad física de los centros de datos es exclusiva de AWS.',
			'Incorrecta: el cliente es responsable de decidir y verificar el cifrado de sus datos.',
			'Incorrecta: el root user y sus credenciales son responsabilidad exclusiva del cliente.',
		],
	},
	{
		id: 'prof-2.1-q7',
		taskId: '2.1',
		objetivos: ['2.1#5'],
		tipo: 'tradeoff',
		question:
			'La gestión de parches y la gestión de la configuración son responsabilidades compartidas. ¿Qué implica esto en la práctica?',
		options: [
			'AWS parchea y configura la infraestructura que opera, y el cliente debe parchear y configurar sus propias capas; ninguno cubre la parte del otro.',
			'El cliente debe parchearlo todo, porque AWS no aplica ningún parche a la infraestructura.',
			'AWS parchea todo, incluidos los sistemas operativos invitados y las aplicaciones del cliente.',
			'La responsabilidad compartida solo se aplica a los servicios sin servidor, nunca a los basados en servidores.',
		],
		correctAnswer: 0,
		explanation:
			'Que un control sea compartido no significa que se ejecute una sola vez: AWS mantiene su capa y el cliente la suya. Si cualquiera deja su parte sin cubrir, el control queda incompleto.',
		porQueOpcion: [
			'Correcta: cada parte parchea y configura su capa, sin solaparse.',
			'Incorrecta: AWS sí parchea la infraestructura que opera.',
			'Incorrecta: AWS no parchea el sistema operativo invitado ni las aplicaciones del cliente.',
			'Incorrecta: los controles compartidos aplican a servicios gestionados y autogestionados por igual.',
		],
	},
	{
		id: 'prof-2.1-q8',
		taskId: '2.1',
		objetivos: ['2.1#6'],
		tipo: 'comparacion',
		question:
			'¿Cómo cambia el reparto de responsabilidades entre Amazon EC2, Amazon RDS y AWS Lambda?',
		options: [
			'Cuanto más gestionado es el servicio, más asume AWS: en Amazon EC2 el cliente parchea el sistema operativo; en Amazon RDS AWS lo hace y el cliente gestiona datos y accesos; en AWS Lambda AWS administra la plataforma.',
			'En los tres servicios el cliente debe parchear el sistema operativo invitado.',
			'Cuanto más gestionado es el servicio, más responsabilidad técnica asume el cliente.',
			'AWS Lambda traslada al cliente la gestión del sistema operativo invitado de las funciones.',
		],
		correctAnswer: 0,
		explanation:
			'El alcance de la responsabilidad del cliente se reduce a medida que el servicio es más gestionado: de la instancia completa en Amazon EC2 al código y la configuración en AWS Lambda. En Amazon RDS AWS opera la base de datos y el sistema operativo subyacente.',
		porQueOpcion: [
			'Correcta: describe el desplazamiento de responsabilidad según el nivel de gestión.',
			'Incorrecta: en Amazon RDS y AWS Lambda AWS gestiona el sistema operativo subyacente.',
			'Incorrecta: la responsabilidad del cliente disminuye con servicios más gestionados.',
			'Incorrecta: en AWS Lambda AWS administra la plataforma y el cliente aporta solo el código y su configuración.',
		],
	},
	{
		id: 'prof-2.1-q9',
		taskId: '2.1',
		objetivos: ['2.1#6'],
		tipo: 'escenario',
		question:
			'Una empresa migra de instancias de Amazon EC2 autogestionadas a AWS Lambda. ¿Cómo cambia su responsabilidad?',
		options: [
			'Disminuye: AWS pasa a gestionar el sistema operativo y la plataforma, mientras el cliente sigue siendo responsable del código, la configuración y el acceso.',
			'Desaparece por completo, porque en un servicio sin servidor AWS asume todas las responsabilidades.',
			'Aumenta, porque el cliente debe parchear el sistema operativo en el que se ejecutan las funciones.',
			'No cambia, porque el modelo de responsabilidad compartida es idéntico en todos los servicios.',
		],
		correctAnswer: 0,
		explanation:
			'Al adoptar un servicio gestionado como AWS Lambda, AWS absorbe la operación de la plataforma y del sistema operativo, y el cliente concentra su responsabilidad en el código, la configuración y el control de acceso. La responsabilidad nunca desaparece del todo.',
		porQueOpcion: [
			'Correcta: el cliente delega la plataforma pero conserva código, configuración y accesos.',
			'Incorrecta: el cliente mantiene responsabilidades sobre su código y su configuración.',
			'Incorrecta: en AWS Lambda el cliente no accede ni parchea el sistema operativo.',
			'Incorrecta: la responsabilidad cambia según el servicio empleado.',
		],
	},
];
