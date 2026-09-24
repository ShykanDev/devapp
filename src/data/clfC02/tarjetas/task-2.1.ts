import type { TarjetaClfC02 } from '@/data/clfC02/types';

export const tarjetasTask21: TarjetaClfC02[] = [
	{
		id: '2.1-t1',
		taskId: '2.1',
		objetivos: ['2.1#1'],
		tipo: 'definicion',
		frente: '¿Qué reparte el AWS shared responsibility model y entre quiénes?',
		reverso:
			'Reparte la seguridad entre AWS y el cliente: AWS responde de la seguridad de la nube (la infraestructura) y el cliente de la seguridad en la nube (datos, identidades, aplicaciones y configuración).',
	},
	{
		id: '2.1-t2',
		taskId: '2.1',
		objetivos: ['2.1#2', '2.1#3'],
		tipo: 'diferencia',
		frente:
			'Un compañero dice: «hemos contratado Amazon EC2, así que AWS protegerá nuestros datos y el sistema operativo». ¿Qué le corriges?',
		reverso:
			'AWS protege la infraestructura física, el hardware, la red y la virtualización; el cliente protege el sistema operativo invitado, sus parches, los datos, las identidades y la configuración de cada instancia.',
	},
	{
		id: '2.1-t3',
		taskId: '2.1',
		objetivos: ['2.1#4'],
		tipo: 'definicion',
		frente: '¿De qué responde AWS en el modelo de responsabilidad compartida?',
		reverso:
			'De la seguridad de la nube: instalaciones físicas, hardware, red y la capa de virtualización que sostienen los servicios, además del software de los servicios gestionados.',
	},
	{
		id: '2.1-t4',
		taskId: '2.1',
		objetivos: ['2.1#5'],
		tipo: 'definicion',
		frente: 'Cita ejemplos de responsabilidades compartidas entre AWS y el cliente.',
		reverso:
			'Gestión de parches, gestión de la configuración y concienciación y formación en seguridad. Cada parte aplica su mitad: AWS sobre su infraestructura y el cliente sobre sus recursos y su personal.',
	},
	{
		id: '2.1-t5',
		taskId: '2.1',
		objetivos: ['2.1#6'],
		tipo: 'tradeoff',
		frente: '¿Cómo cambia la responsabilidad al pasar de Amazon EC2 a Amazon RDS o AWS Lambda?',
		reverso:
			'Cuanto más gestionado es el servicio, más asume AWS. En Amazon EC2 el cliente parchea el sistema operativo; en Amazon RDS AWS parchea el motor; en AWS Lambda AWS gestiona también el entorno de ejecución. El cliente conserva siempre los datos, las identidades y la configuración.',
	},
];
