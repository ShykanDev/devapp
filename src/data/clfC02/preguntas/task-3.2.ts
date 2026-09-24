import type { PreguntaClfC02 } from '@/data/clfC02/types';

export const preguntasTask32: PreguntaClfC02[] = [
	{
		id: '3.2-q1',
		taskId: '3.2',
		objetivos: ['3.2#1'],
		tipo: 'conocimiento',
		question:
			'¿Qué describe correctamente la relación entre una región de AWS y sus Availability Zones?',
		options: [
			'Cada Availability Zone contiene varias regiones independientes.',
			'Una región es un área geográfica que agrupa varias Availability Zones aisladas entre sí.',
			'Una Availability Zone es un punto de presencia para entrega de contenido, no un centro de datos.',
			'Las Availability Zones de una región comparten alimentación y red, por lo que fallan a la vez.',
		],
		correctAnswer: 1,
		explanation:
			'Una región es un área geográfica compuesta por varias Availability Zones aisladas, cada una con su propia alimentación, refrigeración y red. Las AZ no comparten punto único de fallo; los puntos de presencia son las edge locations.',
	},
	{
		id: '3.2-q2',
		taskId: '3.2',
		objetivos: ['3.2#5'],
		tipo: 'comparacion',
		question:
			'Un equipo discute dónde alojar cada pieza de su arquitectura. ¿Qué afirmación distingue correctamente región, Availability Zone y edge location?',
		options: [
			'La región es el punto de presencia más cercano al usuario y la edge location agrupa centros de datos.',
			'La Availability Zone es el área geográfica y la región es el centro de datos aislado que la compone.',
			'La región es el área geográfica, la Availability Zone es un centro de datos aislado dentro de ella y la edge location es un punto de presencia para entrega de contenido.',
			'Los tres términos son equivalentes y solo cambian de nombre según el servicio que se use.',
		],
		correctAnswer: 2,
		explanation:
			'La jerarquía es: región (área geográfica) → Availability Zones (centros de datos aislados dentro de la región) → edge locations (puntos de presencia fuera de ese eje, para entrega de contenido y DNS).',
	},
	{
		id: '3.2-q3',
		taskId: '3.2',
		objetivos: ['3.2#5'],
		tipo: 'escenario',
		question:
			'Una empresa debe explicar por qué despliega su base de datos en una región concreta y sirve las imágenes desde muchos países. ¿Qué combinación describe mejor el uso de cada capa?',
		options: [
			'Los datos y el cómputo viven en una región y sus Availability Zones; la entrega global se apoya en edge locations.',
			'Los datos viven en una edge location y el contenido se distribuye desde la región.',
			'La base de datos se replica en todas las edge locations y el cómputo queda en una sola Availability Zone.',
			'Las edge locations sustituyen a la región cuando el tráfico es global.',
		],
		correctAnswer: 0,
		explanation:
			'La región (con sus AZ) aloja datos y cómputo; las edge locations acercan la entrega de contenido al usuario. Las edge locations no alojan bases de datos ni sustituyen a la región.',
	},
	{
		id: '3.2-q4',
		taskId: '3.2',
		objetivos: ['3.2#2'],
		tipo: 'conocimiento',
		question: '¿Qué significa que un sistema tenga alta disponibilidad?',
		options: [
			'Que guarda copias de seguridad diarias de sus datos.',
			'Que puede seguir atendiendo el servicio aunque falle un componente, gracias a la redundancia.',
			'Que responde a los usuarios desde el punto de presencia más cercano.',
			'Que reparte los costes entre varias cuentas de AWS.',
		],
		correctAnswer: 1,
		explanation:
			'Alta disponibilidad es seguir operando pese al fallo de un componente. Se consigue con redundancia activa, por ejemplo desplegando en varias Availability Zones; las copias de seguridad protegen los datos, no mantienen el servicio en marcha.',
	},
	{
		id: '3.2-q5',
		taskId: '3.2',
		objetivos: ['3.2#6'],
		tipo: 'escenario',
		question:
			'Una aplicación crítica se ejecuta en una sola Availability Zone y el equipo afirma que tiene alta disponibilidad porque hace snapshots cada hora. ¿Cuál es el problema y la solución correcta?',
		options: [
			'No hay problema: los snapshots garantizan la disponibilidad.',
			'El problema es la falta de redundancia entre AZ; hay que desplegar réplicas en varias Availability Zones.',
			'El problema es que falta una edge location; hay que añadir una distribución de contenido.',
			'El problema es que sobra una AZ; hay que consolidar todo en una sola.',
		],
		correctAnswer: 1,
		explanation:
			'Los snapshots permiten recuperar datos, pero no evitan una interrupción si cae la AZ. La alta disponibilidad exige redundancia activa en más de una Availability Zone.',
	},
	{
		id: '3.2-q6',
		taskId: '3.2',
		objetivos: ['3.2#7'],
		tipo: 'conocimiento',
		question:
			'¿Por qué el aislamiento entre Availability Zones ayuda a evitar un punto único de fallo?',
		options: [
			'Porque todas las AZ comparten la misma red y el mismo sistema eléctrico.',
			'Porque cada AZ tiene infraestructura independiente, de modo que el fallo de una no provoca el de las demás.',
			'Porque las AZ se comunican a través de internet público.',
			'Porque una AZ solo existe mientras hay tráfico en ella.',
		],
		correctAnswer: 1,
		explanation:
			'Cada Availability Zone tiene alimentación, refrigeración y red propias. Ese aislamiento evita que un fallo físico o de infraestructura se propague a las otras AZ de la región.',
	},
	{
		id: '3.2-q7',
		taskId: '3.2',
		objetivos: ['3.2#3'],
		tipo: 'conocimiento',
		question: '¿Para qué sirve principalmente el uso de varias regiones?',
		options: [
			'Para tener más Availability Zones dentro de un mismo centro de datos.',
			'Para añadir distancia geográfica: recuperación ante desastres, continuidad, latencia y residencia de datos.',
			'Para eliminar la necesidad de copias de seguridad.',
			'Para reducir automáticamente la factura al repartir el tráfico.',
		],
		correctAnswer: 1,
		explanation:
			'Varias regiones aportan separación geográfica real: DR, continuidad de negocio, menor latencia para usuarios lejanos y cumplimiento de residencia de datos. No sustituyen a las copias de seguridad ni reducen costes por sí solas.',
	},
	{
		id: '3.2-q8',
		taskId: '3.2',
		objetivos: ['3.2#4'],
		tipo: 'servicio',
		question:
			'Una web con usuarios repartidos por varios continentes descarga imágenes estáticas con lentitud. ¿Qué beneficio aporta servir el contenido desde edge locations?',
		options: [
			'Elimina la necesidad de una región de AWS.',
			'Acerca el contenido al usuario y reduce la latencia de descarga.',
			'Convierte las imágenes en datos cifrados en reposo.',
			'Aumenta la capacidad de cómputo de la base de datos.',
		],
		correctAnswer: 1,
		explanation:
			'Las edge locations acercan el contenido al usuario final, reduciendo la latencia de entrega. No sustituyen a la región (donde vive el origen de los datos) ni cambian el cifrado o el cómputo.',
	},
	{
		id: '3.2-q9',
		taskId: '3.2',
		objetivos: ['3.2#8'],
		tipo: 'escenario',
		question:
			'Una empresa con clientes solo en Chile necesita que sus datos personales no salgan del país y, además, quiere poder recuperarse si su región principal sufre un incidente grave. ¿Qué decisión de diseño es correcta?',
		options: [
			'Usar únicamente edge locations, porque están repartidas por todo el mundo.',
			'Elegir una región en Chile para los datos y otra región distinta con replicación para la recuperación ante desastres.',
			'Concentrar todo en una sola Availability Zone para simplificar.',
			'Confiar en los snapshots guardados en la misma región y no replicar.',
		],
		correctAnswer: 1,
		explanation:
			'La residencia de datos exige fijar la región en el país (o en el marco legal aplicable) y la continuidad exige una estrategia de recuperación independiente, típicamente una réplica en otra región. Una sola AZ o snapshots en la misma región no cubren una pérdida regional.',
	},
];
