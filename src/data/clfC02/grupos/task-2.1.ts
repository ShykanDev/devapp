import type { GrupoTematico } from '@/data/clfC02/types';

export const gruposTask21: GrupoTematico[] = [
	{
		id: '2.1-g1',
		titulo: 'El AWS shared responsibility model y sus dos caras',
		objetivos: ['2.1#1', '2.1#2', '2.1#3', '2.1#4'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'El **AWS shared responsibility model** reparte la seguridad entre dos actores: AWS y el cliente. No se trata de quién hace «más», sino de **quién controla qué**.\n\n- **AWS: seguridad de la nube**. Protege la infraestructura que sostiene todos los servicios: instalaciones físicas, hardware, red y la capa de virtualización. Es seguridad física y de plataforma, controlada por AWS y no delegable al cliente.\n- **Cliente: seguridad en la nube**. Protege lo que pone dentro: los datos, las identidades y los accesos, las aplicaciones y la configuración de los recursos que contrata.\n\nEl límite no es fijo: depende del servicio. Cuanto más gestionado es el servicio, más arriba queda la línea y más responsabilidad operativa asume AWS. Por eso se habla de una **responsabilidad compartida** y no de una división rígida.',
			},
			{
				tipo: 'comparacion',
				parId: 'responsabilidad-compartida-cliente-vs-aws',
			},
			{
				tipo: 'escenario',
				situacion:
					'Una empresa ejecuta sus servidores en instancias de Amazon EC2 y descubre que hay actualizaciones de seguridad pendientes del sistema operativo invitado. El equipo pregunta quién debe aplicarlas.',
				analisis:
					'AWS asegura la infraestructura que aloja la instancia —centro de datos, hosts, red y capa de virtualización—, pero el sistema operativo invitado, las aplicaciones y la configuración de la instancia corresponden al cliente. Aplicar esos parches es responsabilidad del cliente.',
				servicio: 'Amazon EC2',
			},
			{
				tipo: 'errorComun',
				error: 'Creer que, al contratar un servicio de AWS, AWS se encarga de absolutamente todo, incluida la seguridad de los datos y la configuración de los recursos.',
				correccion:
					'AWS responde de la infraestructura subyacente; el cliente responde de lo que configura en la nube: datos, identidades, aplicaciones y ajustes del servicio. La seguridad es una responsabilidad compartida y ninguna de las dos partes cubre la mitad de la otra.',
			},
			{
				tipo: 'clave',
				items: [
					'AWS = seguridad de la nube: instalaciones, hardware, red y virtualización.',
					'Cliente = seguridad en la nube: datos, identidades, aplicaciones y configuración.',
					'El modelo reparte responsabilidades, no las elimina: ambas partes actúan a la vez.',
					'El reparto cambia según el servicio contratado y su nivel de gestión.',
				],
			},
		],
		preguntasGuia: [
			'¿Qué dos grandes mitades reparte el AWS shared responsibility model?',
			'¿De qué responde AWS y de qué responde el cliente?',
			'¿Por qué se dice que la responsabilidad es compartida y no dividida?',
		],
	},
	{
		id: '2.1-g2',
		titulo: 'Seguridad de la nube y seguridad en la nube',
		objetivos: ['2.1#5', '2.1#6'],
		bloques: [
			{
				tipo: 'concepto',
				md: '«Seguridad **de** la nube» y «seguridad **en** la nube» son las dos mitades del modelo:\n\n- **Seguridad de la nube**: la asume AWS. Cubre la protección de la infraestructura que ejecuta los servicios: instalaciones, cómputo, almacenamiento, red y el software que lo gestiona.\n- **Seguridad en la nube**: la asume el cliente y depende de lo que configura. Incluye los datos, las identidades y permisos, las aplicaciones y los ajustes de red y cifrado del servicio.\n\nExisten además **responsabilidades compartidas**, que ambos atienden desde su lado: por ejemplo, la gestión de parches, la gestión de la configuración y la concienciación y formación. AWS parchea su infraestructura y el cliente parchea lo suyo; sin las dos partes, el resultado no es seguro.',
			},
			{
				tipo: 'comparacion',
				parId: 'seguridad-de-la-nube-vs-seguridad-en-la-nube',
			},
			{
				tipo: 'escenario',
				situacion:
					'Una empresa aloja su base de datos en Amazon RDS y cree que, por ser un servicio gestionado, ya no tiene ninguna responsabilidad de seguridad.',
				analisis:
					'AWS gestiona el motor de base de datos, sus parches y las copias de seguridad de la plataforma, pero el cliente sigue siendo responsable de los datos que guarda, de quién puede acceder a ellos y de cómo configura el servicio. La responsabilidad se desplaza, no desaparece.',
				servicio: 'Amazon RDS',
			},
			{
				tipo: 'errorComun',
				error: 'Pensar que la seguridad en la nube es responsabilidad exclusiva de AWS porque los servicios son gestionados.',
				correccion:
					'El cliente responde de la seguridad de lo que controla dentro de la nube: datos, identidades, permisos y configuración. Un servicio gestionado mueve la frontera, pero el cliente conserva su parte.',
			},
		],
		preguntasGuia: [
			'¿Qué diferencia hay entre seguridad de la nube y seguridad en la nube?',
			'¿Qué responsabilidades comparten AWS y el cliente?',
			'¿Qué parte sigue siendo del cliente en un servicio gestionado?',
		],
	},
	{
		id: '2.1-g3',
		titulo: 'Cómo se desplaza la responsabilidad según el servicio',
		objetivos: ['2.1#6'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'La frontera entre ambas responsabilidades **se desplaza según el servicio**. Tres casos ilustran el examen:\n\n- **Infraestructura como servicio**, por ejemplo Amazon EC2: AWS gestiona la infraestructura; el cliente gestiona el sistema operativo, los parches y todo lo que instala.\n- **Plataforma gestionada**, por ejemplo Amazon RDS: AWS gestiona además el motor de base de datos, sus parches y las copias de seguridad de la plataforma; el cliente cuida los datos y los accesos.\n- **Serverless**, por ejemplo AWS Lambda: AWS gestiona el entorno de ejecución y el escalado; el cliente aporta el código, sus permisos y sus datos.\n\nCuanto más gestionado es el servicio, más responsabilidad operativa asume AWS y menos el cliente, pero el cliente **nunca** deja de ser responsable de sus datos, de sus identidades y de su configuración.',
			},
			{
				tipo: 'comparacion',
				parId: 'seguridad-de-la-nube-vs-seguridad-en-la-nube',
			},
			{
				tipo: 'escenario',
				situacion:
					'Un equipo pasa una función de cómputo a AWS Lambda y pregunta si sigue teniendo que aplicar parches al sistema operativo que ejecuta su código.',
				analisis:
					'No: en AWS Lambda AWS gestiona el sistema operativo y el entorno de ejecución. El cliente mantiene la responsabilidad sobre el código de la función, los permisos que concede y los datos a los que accede.',
				servicio: 'AWS Lambda',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Usa un servicio más gestionado cuando quieras que AWS asuma más capas de operación, como parches o escalado.',
					'Usa un servicio menos gestionado cuando necesites controlar el sistema operativo o el entorno de ejecución.',
					'Comprueba en cada servicio dónde queda la frontera antes de decidir, porque el reparto no es el mismo para todos.',
				],
				noUsar: [
					'No asumas que elegir un servicio gestionado te libera de proteger datos, accesos y configuración.',
					'No trates la responsabilidad como una decisión de todo o nada: se desplaza capa a capa según el servicio.',
				],
			},
			{
				tipo: 'errorComun',
				error: 'Suponer que la responsabilidad del cliente desaparece por completo al usar un servicio totalmente gestionado.',
				correccion:
					'El reparto se desplaza, no se elimina: en un servicio gestionado AWS asume más capas de operación, pero el cliente sigue respondiendo de sus datos, del acceso a esos datos y de la configuración del servicio.',
			},
		],
		preguntasGuia: [
			'¿Cómo cambia la responsabilidad entre Amazon EC2, Amazon RDS y AWS Lambda?',
			'¿Qué asume AWS en un servicio serverless y qué conserva el cliente?',
			'¿Por qué el cliente nunca deja de responder de sus datos?',
		],
	},
];
