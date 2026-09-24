import type { TarjetaClfC02 } from '@/data/clfC02/types';

export const tarjetasTask34: TarjetaClfC02[] = [
	{
		id: '3.4-t1',
		taskId: '3.4',
		objetivos: ['3.4#4'],
		tipo: 'diferencia',
		frente:
			'Un compañero dice que Amazon Aurora es NoSQL porque escala muy bien. ¿Qué le corriges?',
		reverso:
			'Amazon Aurora es una base **relacional** compatible con MySQL y PostgreSQL: se consulta con SQL y los datos viven en tablas. Su escalado y su almacenamiento distribuido no la convierten en NoSQL; para NoSQL está Amazon DynamoDB.',
	},
	{
		id: '3.4-t2',
		taskId: '3.4',
		objetivos: ['3.4#5'],
		tipo: 'servicio',
		frente: '¿Qué es Amazon DynamoDB y para qué tipo de acceso está pensado?',
		reverso:
			'Base **NoSQL** gestionada de clave-valor y documento, sin esquema fijo y con escalado horizontal. Está pensada para acceder al dato por clave con latencia de milisegundos y tráfico impredecible, sin administrar servidores.',
	},
	{
		id: '3.4-t3',
		taskId: '3.4',
		objetivos: ['3.4#5', '3.4#6'],
		tipo: 'diferencia',
		frente: '¿En qué se diferencia Amazon DynamoDB de Amazon ElastiCache?',
		reverso:
			'Amazon DynamoDB es una base **persistente** NoSQL y la fuente de verdad de esos datos; Amazon ElastiCache es un almacén **en memoria** que se usa como **caché** delante de otra base. DynamoDB guarda; ElastiCache acelera.',
	},
	{
		id: '3.4-t4',
		taskId: '3.4',
		objetivos: ['3.4#7', '3.4#2'],
		tipo: 'diferencia',
		frente: 'En una migración, ¿qué hace AWS DMS y qué hace AWS SCT?',
		reverso:
			'`AWS Database Migration Service (AWS DMS)` mueve y **replica los datos** entre origen y destino, con replicación continua para reducir el corte. `AWS Schema Conversion Tool (AWS SCT)` convierte el **esquema y el código** entre motores. Se combinan en las migraciones heterogéneas.',
	},
	{
		id: '3.4-t5',
		taskId: '3.4',
		objetivos: ['3.4#3'],
		tipo: 'tradeoff',
		frente:
			'¿Qué se gana y qué se pierde al alojar una base de datos en Amazon EC2 en lugar de usar un servicio gestionado?',
		reverso:
			'Se gana **control** total del motor, la versión y el sistema operativo. Se pierde la administración automática: el equipo asume parches, copias de seguridad, alta disponibilidad y escalado, con más esfuerzo operativo y riesgo.',
	},
];
