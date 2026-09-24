import type { ParConfusionClfC02 } from '@/data/clfC02/types';

export const paresTask21: ParConfusionClfC02[] = [
	{
		id: 'responsabilidad-compartida-cliente-vs-aws',
		etiqueta: 'Cliente frente a AWS en el modelo de responsabilidad compartida',
		a: {
			titulo: 'Cliente: seguridad en la nube',
			resumen:
				'Responsabilidad del cliente sobre lo que pone y configura dentro de la nube: datos, identidades y permisos, aplicaciones, sistema operativo invitado y ajustes de red y cifrado de los recursos que contrata.',
		},
		b: {
			titulo: 'AWS: seguridad de la nube',
			resumen:
				'Responsabilidad de AWS sobre la infraestructura que ejecuta los servicios: instalaciones físicas, hardware, red, capa de virtualización y el software del propio servicio gestionado.',
		},
		diferenciaClave:
			'El cliente responde de lo que configura en la nube; AWS responde de la infraestructura que hace posible la nube. La frontera se mueve según el servicio contratado, pero ninguna de las dos partes cubre la mitad de la otra.',
		cuandoA: [
			'Cuando hay que asegurar los datos, gestionar identidades y permisos o configurar correctamente el servicio.',
			'Cuando se parchea el sistema operativo invitado, se mantiene la aplicación o se define el cifrado de los recursos.',
		],
		cuandoB: [
			'Cuando se trata de la seguridad física de los centros de datos, el hardware, la red troncal o la capa de virtualización.',
			'Cuando hay que mantener el software de un servicio gestionado, como el motor de base de datos o el entorno de ejecución serverless.',
		],
		escenarioA:
			'Un equipo define políticas de acceso, cifra sus datos y aplica parches al sistema operativo invitado de sus instancias, porque esas capas están bajo su control.',
		escenarioB:
			'AWS mantiene las instalaciones, el hardware, la red y la capa de virtualización que alojan las instancias, algo que el cliente no puede controlar ni delegar.',
		preguntaIds: ['2.1-q2'],
		objetivos: ['2.1#2', '2.1#3', '2.1#4'],
	},
	{
		id: 'seguridad-de-la-nube-vs-seguridad-en-la-nube',
		etiqueta: 'Seguridad de la nube frente a seguridad en la nube',
		a: {
			titulo: 'Seguridad de la nube',
			resumen:
				'La que asume AWS: proteger la infraestructura global —instalaciones, cómputo, almacenamiento y red— y el software que ejecuta los servicios.',
		},
		b: {
			titulo: 'Seguridad en la nube',
			resumen:
				'La que asume el cliente: proteger sus datos, gestionar identidades y accesos, asegurar sus aplicaciones y configurar correctamente el servicio que usa.',
		},
		diferenciaClave:
			'«De la nube» es la parte que AWS controla y no se puede delegar; «en la nube» es la parte que depende de las decisiones del cliente. Entre ambas quedan responsabilidades compartidas, como la gestión de parches y de la configuración.',
		cuandoA: [
			'Cuando se evalúa la seguridad física, la resistencia de la red o las capacidades de un servicio gestionado que AWS opera.',
			'Cuando hay que explicar por qué ciertos controles no dependen de la configuración del cliente.',
		],
		cuandoB: [
			'Cuando el resultado de seguridad depende de cómo el cliente protege datos, permisos, aplicaciones y ajustes del servicio.',
			'Cuando se usa un servicio gestionado y hay que saber qué sigue siendo responsabilidad propia.',
		],
		escenarioA:
			'AWS protege los centros de datos y la red troncal, y mantiene el motor de base de datos de Amazon RDS con sus parches y copias de seguridad de plataforma.',
		escenarioB:
			'El cliente que usa Amazon RDS define quién accede a la base de datos, clasifica y protege los datos y elige la configuración de red y cifrado a su cargo.',
		preguntaIds: ['2.1-q5'],
		objetivos: ['2.1#5', '2.1#6'],
	},
];
