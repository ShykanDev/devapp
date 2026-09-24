import type { PreguntaProfesionalClfC02 } from '@/data/clfC02/profesional/types';

export const profesionalTask41: PreguntaProfesionalClfC02[] = [
	{
		id: 'prof-4.1-q1',
		taskId: '4.1',
		objetivos: ['4.1#1'],
		tipo: 'comparacion',
		question:
			'Un equipo repasa las opciones de compra de cómputo antes de comprometer gasto. ¿Qué afirmación asigna correctamente cada opción a su característica?',
		options: [
			'On-Demand se paga por uso sin compromiso; Spot aprovecha capacidad sobrante y puede interrumpirse; Dedicated Hosts reservan un servidor físico para la cuenta.',
			'On-Demand exige un compromiso de 1 o 3 años; Spot reserva un servidor físico; Dedicated Hosts aprovechan capacidad sobrante.',
			'Reserved Instances se pagan solo por uso; Spot garantiza capacidad en una Availability Zone; On-Demand reserva hardware físico.',
			'Savings Plans y Capacity Reservations son idénticos: ambos reservan hardware físico durante tres años.',
		],
		correctAnswer: 0,
		explanation:
			'On-Demand factura por uso sin compromiso; Spot usa capacidad sobrante y puede interrumpirse; Reserved Instances y Savings Plans son compromisos de 1 o 3 años; Dedicated Hosts dan un servidor físico completo y Capacity Reservations solo garantiza capacidad en una Availability Zone.',
		porQueOpcion: [
			'Correcta: On-Demand no tiene compromiso, Spot usa capacidad sobrante y puede interrumpirse, y Dedicated Hosts dan un servidor físico dedicado a la cuenta.',
			'Invierte los conceptos: On-Demand no exige compromiso, Spot no reserva hardware físico y Dedicated Hosts no usan capacidad sobrante.',
			'Mezcla las opciones: Reserved Instances sí son un compromiso, garantizar capacidad en una AZ es Capacity Reservations y On-Demand no reserva hardware.',
			'Confunde opciones distintas: los Savings Plans son compromisos de gasto, no reservas de hardware, y Capacity Reservations asegura capacidad, no hardware dedicado.',
		],
	},
	{
		id: 'prof-4.1-q2',
		taskId: '4.1',
		objetivos: ['4.1#3'],
		tipo: 'escenario',
		question:
			'Dos cargas conviven en una cuenta: un servicio de larga duración con uso muy estable y un procesamiento de imágenes que puede reanudarse si se interrumpe. ¿Qué combinación de compra reduce mejor el coste sin arriesgar el servicio?',
		options: [
			'Spot Instances para el servicio estable y Reserved Instances para el procesamiento por lotes.',
			'Reserved Instances o Savings Plans para el servicio estable y Spot Instances para el procesamiento por lotes.',
			'Capacity Reservations para el servicio estable y On-Demand Instances para el procesamiento por lotes.',
			'Dedicated Hosts para ambas cargas, para aislar el hardware.',
		],
		correctAnswer: 1,
		explanation:
			'La carga estable y predecible se beneficia de un compromiso de 1 o 3 años, mientras que la carga tolerante a interrupciones obtiene el mayor descuento con Spot. Capacity Reservations garantiza capacidad sin rebaja por uso y Dedicated Hosts se reservan para requisitos de aislamiento o licencias.',
		porQueOpcion: [
			'Invierte el criterio: Spot puede interrumpirse y no es apta para el servicio estable, y las RI desaprovechan el mayor descuento en la carga interrumpible.',
			'Correcta: el uso estable encaja con un compromiso de 1 o 3 años y la carga tolerante a interrupciones con Spot.',
			'Capacity Reservations solo asegura capacidad en una AZ y no reduce el precio por uso; On-Demand desaprovecha el ahorro en el lote interrumpible.',
			'Dedicated Hosts son la opción más cara y solo se justifican por aislamiento o licencias, no por coste.',
		],
	},
	{
		id: 'prof-4.1-q3',
		taskId: '4.1',
		objetivos: ['4.1#2', '4.1#7'],
		tipo: 'multiConcepto',
		question:
			'Un equipo debe elegir la clase de S3 y justificar su coste ante finanzas. ¿Qué afirmación describe correctamente la relación entre clase y precio?',
		options: [
			'S3 Standard cuesta más por GB que S3 Glacier Deep Archive, pero ofrece acceso inmediato; las clases de archivo abaratan el almacenamiento a cambio de una recuperación más lenta.',
			'S3 Standard es la clase más barata porque está pensada para acceso frecuente.',
			'S3 One Zone-IA replica en tres Availability Zones y por eso cuesta más que S3 Standard.',
			'Todas las clases de S3 tienen el mismo precio por GB y solo cambian el nombre comercial y la región.',
		],
		correctAnswer: 0,
		explanation:
			'Las clases de S3 ordenan precio y latencia según el acceso: Standard cuesta más por GB pero da acceso inmediato, las clases de acceso poco frecuente reducen el precio y las de archivo lo minimizan a cambio de recuperación lenta y, según la clase, cargos por recuperación.',
		porQueOpcion: [
			'Correcta: el precio por GB baja al alejarse del acceso frecuente y las clases de archivo compensan su bajo almacenamiento con mayor latencia y cargos por recuperación.',
			'Al contrario: Standard es la clase de acceso frecuente y suele ser la más cara por GB, no la más barata.',
			'One Zone-IA almacena en una sola Availability Zone, por eso es más barata que Standard, no más cara.',
			'El precio cambia con la clase y el nivel: cada clase tiene su propia tarifa de almacenamiento y recuperación.',
		],
	},
	{
		id: 'prof-4.1-q4',
		taskId: '4.1',
		objetivos: ['4.1#4'],
		tipo: 'trampa',
		question:
			'Un arquitecto afirma que comprar Reserved Instances Standard le permitirá cambiar de familia de instancias, de sistema operativo y de tenancy cuando quiera. ¿Qué hay de cierto?',
		options: [
			'Es cierto: las RI Standard se pueden intercambiar libremente entre familias y sistemas operativos.',
			'Es incorrecto: las RI Standard no se pueden modificar; para cambiar familia, sistema operativo o tenancy hay que usar RI Convertible.',
			'Es cierto solo si la RI es regional: la flexibilidad regional incluye cambiar de familia.',
			'Es incorrecto: ninguna RI permite cambiar atributos, solo los Savings Plans lo hacen.',
		],
		correctAnswer: 1,
		explanation:
			'Las RI Standard no se pueden modificar ni intercambiar. Las RI Convertible permiten cambiar familia, sistema operativo, tenancy y modalidad de pago a cambio de un descuento ligeramente menor. La flexibilidad de las RI regionales solo reparte el uso entre tamaños de la misma familia.',
		porQueOpcion: [
			'Falso: las RI Standard no admiten intercambios de familia ni de sistema operativo.',
			'Correcta: la RI Convertible es la que permite cambiar familia, sistema operativo, tenancy y modalidad de pago, con un descuento algo menor.',
			'La flexibilidad regional reparte el descuento entre tamaños de la misma familia y región, pero no permite cambiar de familia.',
			'Las RI Convertible sí permiten modificar atributos; los Savings Plans ofrecen otra forma de compromiso, no la única vía de cambio.',
		],
	},
	{
		id: 'prof-4.1-q5',
		taskId: '4.1',
		objetivos: ['4.1#5'],
		tipo: 'escenario',
		question:
			'Una organización tiene tres cuentas. La cuenta de producción compra Savings Plans que consume casi por completo, mientras la cuenta de desarrollo paga todo a precio On-Demand. Finanzas quiere saber cómo se aplica el beneficio y si se puede controlar. ¿Qué es correcto?',
		options: [
			'El beneficio queda encerrado en la cuenta compradora; no hay forma de compartirlo.',
			'El beneficio se comparte por defecto entre las cuentas: primero cubre el uso de la compradora y el sobrante reduce la factura de las demás; la cuenta de administración puede desactivar esa compartición.',
			'El beneficio solo puede compartirse si todas las cuentas usan la misma familia de instancias.',
			'Compartir RI y Savings Plans obliga a mover los recursos de desarrollo a la cuenta de producción.',
		],
		correctAnswer: 1,
		explanation:
			'Con la facturación consolidada, las RI y los Savings Plans se comparten por defecto entre las cuentas de la organización: cubren primero el uso de la cuenta compradora y el descuento sobrante beneficia a las demás. La cuenta de administración puede desactivar la compartición.',
		porQueOpcion: [
			'Falso: en AWS Organizations el beneficio se comparte por defecto con las cuentas miembro.',
			'Correcta: la compartición por defecto aplica el descuento sobrante a las demás cuentas y la cuenta de administración puede desactivarla.',
			'No exige la misma familia: el beneficio compartido se aplica al uso elegible de las otras cuentas.',
			'No hace falta mover recursos: el descuento se reparte a nivel de facturación, no de ubicación de recursos.',
		],
	},
	{
		id: 'prof-4.1-q6',
		taskId: '4.1',
		objetivos: ['4.1#6'],
		tipo: 'tradeoff',
		question:
			'Un equipo diseña una arquitectura distribuida y quiere anticipar el coste de red. ¿Qué trade-off describe correctamente los cargos de transferencia de datos?',
		options: [
			'La entrada desde internet se factura y la salida es gratuita, así que conviene servir todo el tráfico desde AWS.',
			'La entrada desde internet suele ser gratuita, pero la salida a internet y el tráfico entre Availability Zones o regiones se factura por GB; reducir el tráfico entre AZ baja el coste a cambio de menos aislamiento.',
			'Todo el tráfico interno es gratuito y solo se factura el que cruza internet, sin importar las AZ ni las regiones.',
			'El tráfico entre regiones es gratuito si ambos recursos tienen dirección IP pública.',
		],
		correctAnswer: 1,
		explanation:
			'La transferencia entrante desde internet suele ser gratuita; la saliente y el cruce entre Availability Zones o regiones se facturan por GB. Agrupar en una misma AZ el tráfico más intenso reduce el coste, pero disminuye el aislamiento y la alta disponibilidad.',
		porQueOpcion: [
			'Invierte la regla: la salida a internet es la que se factura, no la entrada.',
			'Correcta: la entrada es gratis, la salida y los cruces entre AZ o regiones se cobran por GB, y concentrar el tráfico en una AZ abarata la red reduciendo la tolerancia a fallos.',
			'No todo el tráfico interno es gratuito: el cruce entre Availability Zones y entre regiones genera cargos.',
			'Las direcciones públicas no evitan el cargo por cruce entre regiones.',
		],
	},
];
