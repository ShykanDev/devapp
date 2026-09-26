import type { PreguntaClfC02 } from '@/data/clfC02/types';

export const preguntasTask21: PreguntaClfC02[] = [
	{
		id: '2.1-q1',
		taskId: '2.1',
		objetivos: ['2.1#1'],
		tipo: 'conocimiento',
		question: '¿Qué describe el AWS shared responsibility model?',
		options: [
			'Que AWS se encarga de absolutamente toda la seguridad de la cuenta y el cliente solo se limita a usar los servicios que contrata, sin responsabilidad alguna sobre sus datos.',
			'Que la seguridad se reparte entre AWS, responsable de la seguridad de la nube, y el cliente, responsable de la seguridad en la nube.',
			'Que el cliente hereda la seguridad física de los centros de datos y de la red troncal al contratar cualquier servicio de AWS.',
			'Que la seguridad se delega por completo a productos de terceros que se adquieren en AWS Marketplace para cada servicio.',
		],
		correctAnswer: 1,
		explanation:
			'El modelo reparte la seguridad entre AWS y el cliente. AWS protege la infraestructura que sostiene los servicios (seguridad de la nube) y el cliente protege lo que configura dentro de ella (seguridad en la nube). No se delega por completo a ninguna de las dos partes. Si el requisito pidiera distinguir qué protege cada parte, la respuesta separaría la infraestructura de AWS de los datos y la configuración del cliente.',
		porQueOpcion: [
			'Incorrecta: el cliente sí conserva responsabilidad sobre sus datos, identidades y configuración.',
			'Correcta: el modelo reparte la seguridad de la nube, de AWS, y la seguridad en la nube, del cliente.',
			'Incorrecta: la seguridad física y la red troncal son de AWS y no se heredan en todos los servicios.',
			'Incorrecta: el modelo no delega la seguridad en productos de terceros del Marketplace.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/marketplace/',
		],
	},
	{
		id: '2.1-q2',
		taskId: '2.1',
		objetivos: ['2.1#2', '2.1#3'],
		tipo: 'comparacion',
		question: 'En el AWS shared responsibility model, ¿quién es responsable de qué?',
		options: [
			'AWS responde de los datos y las identidades del cliente, y el cliente responde del hardware, la red y los centros de datos.',
			'AWS responde de la infraestructura física y la virtualización, y el cliente responde de los datos, las identidades, las aplicaciones y la configuración.',
			'Ambos responden exactamente de lo mismo en todos los servicios, sin que la frontera se desplace al cambiar de servicio ni al elegir uno más o menos gestionado.',
			'El cliente responde de la infraestructura global de AWS y AWS responde de las aplicaciones y los datos que el cliente despliega.',
		],
		correctAnswer: 1,
		explanation:
			'AWS es responsable de la seguridad de la nube: instalaciones, hardware, red y virtualización. El cliente es responsable de la seguridad en la nube: datos, identidades y accesos, aplicaciones y configuración de los recursos. El reparto cambia según el servicio, pero no son responsables de lo mismo. Si el escenario pidiera saber de qué responde AWS, la respuesta se centraría en la infraestructura y la virtualización.',
		porQueOpcion: [
			'Incorrecta: invierte los papeles, pues los datos e identidades son del cliente y el hardware de AWS.',
			'Correcta: AWS cubre la infraestructura física y la virtualización, y el cliente los datos, identidades, aplicaciones y configuración.',
			'Incorrecta: la frontera sí se desplaza según el servicio y no responden de lo mismo.',
			'Incorrecta: invierte los papeles, porque la infraestructura global es de AWS y las aplicaciones y datos del cliente.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/aws-risk-and-compliance/shared-responsibility-model.html',
		],
	},
	{
		id: '2.1-q3',
		taskId: '2.1',
		objetivos: ['2.1#3'],
		tipo: 'escenario',
		question:
			'Aunque el coste mensual de la migración preocupa a la dirección, un equipo migra una aplicación de servidores propios a instancias de Amazon EC2. ¿Qué parte de la seguridad queda del lado del cliente en este modelo?',
		options: [
			'La seguridad física de los centros de datos, el hardware y la red troncal que sostiene el servicio.',
			'El sistema operativo invitado, sus parches, los datos y la configuración de las instancias.',
			'La capa de virtualización que separa unas instancias de otras dentro del mismo servidor físico.',
			'La refrigeración, la alimentación eléctrica y la vigilancia de los edificios donde se alojan los servidores.',
		],
		correctAnswer: 1,
		explanation:
			'AWS protege la infraestructura (centros de datos, hardware, red y virtualización). En Amazon EC2 el cliente responde del sistema operativo invitado, de sus parches, de las aplicaciones, de los datos y de la configuración de la instancia. Si el requisito cambiara a un servicio totalmente gestionado, esa misma capa de parcheo pasaría a AWS.',
		porQueOpcion: [
			'Incorrecta: la seguridad física, el hardware y la red troncal son responsabilidad de AWS.',
			'Correcta: en Amazon EC2 el cliente responde del sistema operativo invitado, sus parches, los datos y la configuración.',
			'Incorrecta: la capa de virtualización que separa las instancias la gestiona AWS.',
			'Incorrecta: la refrigeración, la alimentación y la vigilancia de los edificios corresponden a AWS.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/ec2/',
		],
	},
	{
		id: '2.1-q4',
		taskId: '2.1',
		objetivos: ['2.1#4'],
		tipo: 'conocimiento',
		question: '¿Cuál de estas es una responsabilidad que corresponde a AWS?',
		options: [
			'Cifrar los datos del cliente con las claves que este crea y administra dentro de sus propios servicios.',
			'Definir qué usuarios y aplicaciones pueden acceder a cada recurso y con qué nivel de permisos.',
			'Proteger las instalaciones, el hardware, la red y la capa de virtualización que ejecutan los servicios.',
			'Elegir la configuración de red, las subredes y las reglas de acceso de la nube virtual privada del cliente.',
		],
		correctAnswer: 2,
		explanation:
			'AWS responde de la seguridad de la infraestructura: instalaciones físicas, hardware, red y software de virtualización. Las claves, los permisos de acceso y la configuración del servicio son responsabilidad del cliente. Si el objetivo pidiera enumerar responsabilidades del cliente, aparecerían los datos, las identidades y la configuración.',
		porQueOpcion: [
			'Incorrecta: cifrar los datos con claves propias es una decisión del cliente.',
			'Incorrecta: definir qué usuarios acceden a cada recurso corresponde al cliente.',
			'Correcta: AWS protege las instalaciones, el hardware, la red y la capa de virtualización.',
			'Incorrecta: elegir la configuración de red, las subredes y las reglas de acceso es del cliente.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/aws-risk-and-compliance/shared-responsibility-model.html',
		],
	},
	{
		id: '2.1-q5',
		taskId: '2.1',
		objetivos: ['2.1#5', '2.1#6'],
		tipo: 'comparacion',
		question: '¿Qué distingue la seguridad de la nube de la seguridad en la nube?',
		options: [
			'La seguridad de la nube la asume AWS sobre su infraestructura; la seguridad en la nube la asume el cliente sobre lo que configura.',
			'La seguridad de la nube la asume el cliente sobre sus datos y la seguridad en la nube la asume AWS sobre su infraestructura.',
			'Ambas las asume AWS y el cliente solo elige el servicio que contrata y paga la factura mensual, sin responsabilidad alguna sobre su configuración.',
			'Ambas las asume el cliente porque los datos son suyos en cualquier caso, con independencia del servicio que use.',
		],
		correctAnswer: 0,
		explanation:
			'La seguridad de la nube es la que AWS aplica a la infraestructura que sostiene los servicios. La seguridad en la nube es la que el cliente aplica a sus datos, identidades, aplicaciones y configuración. Además hay responsabilidades compartidas, como la gestión de parches y de la configuración. Si el escenario pidiera un control compartido, la respuesta apuntaría a la gestión de parches y de la configuración.',
		porQueOpcion: [
			'Correcta: la seguridad de la nube la asume AWS sobre su infraestructura y la seguridad en la nube el cliente.',
			'Incorrecta: invierte los términos, porque la seguridad de la nube es de AWS y la seguridad en la nube del cliente.',
			'Incorrecta: el cliente no queda exento, pues conserva la seguridad en la nube sobre lo que configura.',
			'Incorrecta: los datos son del cliente, pero la seguridad de la nube la aplica AWS sobre su infraestructura.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/aws-risk-and-compliance/shared-responsibility-model.html',
		],
	},
	{
		id: '2.1-q6',
		taskId: '2.1',
		objetivos: ['2.1#6'],
		tipo: 'escenario',
		question:
			'Una empresa compara ejecutar su base de datos por su cuenta en servidores autogestionados o usar un servicio de base de datos gestionado. ¿Cómo cambia la responsabilidad al elegir el servicio gestionado?',
		options: [
			'El cliente deja de ser responsable de sus datos y de decidir quién puede acceder a la base de datos.',
			'AWS asume el motor de base de datos, sus parches y las copias de la plataforma; el cliente conserva los datos y los accesos.',
			'La responsabilidad no cambia: en los dos casos el proveedor gestiona el sistema operativo sobre el que corre la base de datos y sus parches.',
			'AWS pasa a responder también de la configuración de la aplicación que consulta la base de datos y de sus credenciales de acceso.',
		],
		correctAnswer: 1,
		explanation:
			'Al pasar a un servicio de base de datos gestionado, AWS asume más capas: el motor, sus parches y las copias de seguridad de la plataforma. El cliente conserva la responsabilidad sobre los datos, las identidades, los accesos y la configuración del servicio. Si cambia el tipo de servicio a uno sin servidor, AWS absorbe todavía más operación, pero el cliente nunca pierde sus datos.',
		porQueOpcion: [
			'Incorrecta: el cliente nunca pierde la responsabilidad sobre sus datos ni sobre quién accede a ellos.',
			'Correcta: AWS asume el motor, sus parches y las copias, y el cliente conserva los datos y los accesos.',
			'Incorrecta: la responsabilidad sí cambia, porque en el servicio gestionado AWS absorbe más capas.',
			'Incorrecta: la configuración de la aplicación y sus credenciales siguen siendo del cliente.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/aws-risk-and-compliance/shared-responsibility-model.html',
		],
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
			'El nivel de gestión no influye: la responsabilidad del cliente es siempre idéntica en cualquier servicio y en cualquier región.',
			'Elegir un servicio gestionado transfiere al cliente la seguridad física de la infraestructura.',
		],
		correctAnswer: 0,
		explanation:
			'El control y la responsabilidad van juntos: en un servicio menos gestionado el cliente controla más capas y, por tanto, opera más. En un servicio más gestionado AWS asume más operación, pero el cliente nunca pierde la responsabilidad sobre sus datos, identidades y configuración. Si el requisito priorizara reducir la carga operativa, encajaría un servicio más gestionado.',
		porQueOpcion: [
			'Correcta: a menor gestión, más control y más responsabilidad operativa del cliente.',
			'Incorrecta: es al contrario, un servicio más gestionado traslada menos operación al cliente.',
			'Incorrecta: el nivel de gestión sí desplaza la frontera de responsabilidad.',
			'Incorrecta: la seguridad física siempre es de AWS y no se transfiere al cliente.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/aws-risk-and-compliance/shared-responsibility-model.html',
		],
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
			'La gestión de parches y la gestión de la configuración son responsabilidades compartidas: AWS las aplica sobre su infraestructura y el cliente sobre sus recursos. La seguridad física y la red troncal son de AWS; la decisión de quién accede a los datos es del cliente. Si el escenario preguntara por una responsabilidad exclusiva de AWS, la respuesta sería la seguridad física o la red troncal.',
		porQueOpcion: [
			'Incorrecta: la seguridad física de los centros de datos es exclusiva de AWS.',
			'Correcta: la gestión de parches y de la configuración se reparte, cada parte sobre su ámbito.',
			'Incorrecta: decidir qué usuarios acceden a los datos es responsabilidad del cliente.',
			'Incorrecta: la construcción y el mantenimiento de la red troncal son de AWS.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/aws-risk-and-compliance/shared-responsibility-model.html',
		],
	},
	{
		id: '2.1-q9',
		taskId: '2.1',
		objetivos: ['2.1#1'],
		tipo: 'escenario',
		question:
			'Un equipo directivo compara abrir un centro de datos propio con usar la nube. ¿Qué argumento de la propuesta de valor de AWS explica mejor el ahorro de tiempo y la capacidad de crecer sin inversión inicial?',
		options: [
			'Que AWS transfiere al cliente la propiedad del hardware que usa, de modo que deja de pagar por él a partir del segundo año y sin pagar por la capacidad ociosa.',
			'Que el cliente cambia gasto fijo en infraestructura por pago por uso y accede a capacidad elástica en minutos, sin aprovisionar de antemano.',
			'Que el cliente mantiene la misma inversión inicial, pero reparte los costes entre más servicios y más regiones de AWS.',
			'Que el hardware se contrata a plazos fijos de varios años, lo que reduce el precio unitario frente a la compra directa.',
		],
		correctAnswer: 1,
		explanation:
			'La propuesta de valor de la nube sustituye la inversión inicial en infraestructura por un pago variable según el uso y permite disponer de capacidad en minutos. Ninguna otra opción elimina el gasto fijo: transferir la propiedad, repartir costes o contratar a plazos siguen generando compromisos. Si el escenario pidiera alta disponibilidad, el argumento se centraría en desplegar en varias zonas y no en el modelo de pago.',
		porQueOpcion: [
			'Incorrecta: AWS no transfiere la propiedad del hardware ni elimina el gasto fijo.',
			'Correcta: la nube sustituye el gasto fijo por pago por uso y ofrece capacidad elástica en minutos.',
			'Incorrecta: mantener la inversión inicial y repartir costes no elimina el gasto fijo.',
			'Incorrecta: contratar hardware a plazos fijos sigue generando un compromiso de capital.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/aws-risk-and-compliance/shared-responsibility-model.html',
		],
	},
	{
		id: '2.1-q10',
		taskId: '2.1',
		objetivos: ['2.1#2'],
		tipo: 'escenario',
		question:
			'Un equipo nuevo en AWS pregunta qué dos grandes componentes conviene tener presentes al repartir la seguridad. ¿Qué respuesta describe mejor esos dos componentes?',
		options: [
			'El plano de control y el plano de datos, que AWS gestiona siempre de la misma forma en todos los servicios.',
			'La seguridad de la nube, que asume AWS sobre su infraestructura, y la seguridad en la nube, que asume el cliente sobre lo que configura.',
			'La seguridad física y la seguridad lógica, que son responsabilidad exclusiva de AWS en cualquier servicio que se contrate, sin que eso dependa del servicio elegido.',
			'El cifrado en tránsito y el cifrado en reposo, que el cliente aplica de forma idéntica en todos los servicios.',
		],
		correctAnswer: 1,
		explanation:
			'Los dos componentes del modelo son la seguridad de la nube, responsabilidad de AWS, y la seguridad en la nube, responsabilidad del cliente. Los planos, las capas físicas y lógicas o los tipos de cifrado son conceptos técnicos que se reparten dentro de esos dos componentes, no los componentes en sí. Si el objetivo pidiera enumerar lo que aporta AWS, entrarían la infraestructura y los servicios gestionados.',
		porQueOpcion: [
			'Incorrecta: los planos de control y datos no son los dos componentes del modelo de seguridad.',
			'Correcta: los dos componentes son la seguridad de la nube, de AWS, y la seguridad en la nube, del cliente.',
			'Incorrecta: la seguridad física y lógica no son esos componentes y no todas son exclusivas de AWS.',
			'Incorrecta: el cifrado es un control concreto, no un componente del modelo de responsabilidad.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/aws-risk-and-compliance/shared-responsibility-model.html',
		],
	},
	{
		id: '2.1-q11',
		taskId: '2.1',
		objetivos: ['2.1#4'],
		tipo: 'escenario',
		question:
			'Durante una revisión, el equipo debe enumerar qué protege AWS y qué no. ¿Cuál de estas afirmaciones describe correctamente una responsabilidad de AWS?',
		options: [
			'Cifrar los datos del cliente con las claves que este crea, administra y rota dentro de sus propios servicios y de sus recursos.',
			'Definir qué usuarios de la organización pueden acceder a cada recurso y con qué nivel de permisos.',
			'Mantener la seguridad física de los centros de datos, el hardware, la red troncal y la capa de virtualización.',
			'Configurar los grupos de seguridad, las subredes y las tablas de rutas de la red virtual del cliente.',
		],
		correctAnswer: 2,
		explanation:
			'La seguridad de la nube, que asume AWS, cubre instalaciones físicas, hardware, red y capa de virtualización. El cifrado con claves propias, la definición de permisos y la configuración de red son decisiones del cliente. Si el requisito pidiera una responsabilidad del cliente, la respuesta señalaría los datos, las identidades o la configuración.',
		porQueOpcion: [
			'Incorrecta: crear y rotar las claves de cifrado es responsabilidad del cliente.',
			'Incorrecta: definir qué usuarios acceden a cada recurso corresponde al cliente.',
			'Correcta: mantener la seguridad física, el hardware, la red troncal y la virtualización es de AWS.',
			'Incorrecta: configurar grupos de seguridad, subredes y rutas es responsabilidad del cliente.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/aws-risk-and-compliance/shared-responsibility-model.html',
		],
	},
	{
		id: '2.1-q12',
		taskId: '2.1',
		objetivos: ['2.1#5'],
		tipo: 'escenario',
		question:
			'En una auditoría, el equipo debe identificar un control que ambas partes atienden desde su lado. ¿Cuál de los siguientes es un ejemplo de responsabilidad compartida?',
		options: [
			'La seguridad física de los centros de datos, que AWS y el cliente protegen de forma conjunta en cada servicio contratado.',
			'La gestión de parches y de la configuración: cada parte cubre su mitad, AWS la infraestructura y el cliente sus recursos.',
			'La construcción y el mantenimiento de la red troncal que interconecta las regiones de AWS y sus centros de datos.',
			'La decisión de qué usuarios pueden acceder a los datos y con qué nivel de permisos en cada cuenta de la organización.',
		],
		correctAnswer: 1,
		explanation:
			'Los controles compartidos implican que cada parte aplica su mitad: AWS parchea y configura su infraestructura y el cliente sus recursos. La seguridad física y la red troncal son exclusivas de AWS, y la decisión de quién accede a los datos es del cliente. Si el escenario se centrara en la seguridad física, dejaría de ser compartida y pasaría a ser responsabilidad de AWS.',
		porQueOpcion: [
			'Incorrecta: la seguridad física de los centros de datos no es compartida, es de AWS.',
			'Correcta: la gestión de parches y de la configuración es un control compartido entre AWS y el cliente.',
			'Incorrecta: la red troncal es infraestructura exclusiva de AWS.',
			'Incorrecta: decidir quién accede a los datos es responsabilidad exclusiva del cliente.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/aws-risk-and-compliance/shared-responsibility-model.html',
		],
	},
];
