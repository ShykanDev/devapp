import type { PreguntaClfC02 } from '@/data/clfC02/types';

export const preguntasTask41: PreguntaClfC02[] = [
	{
		id: '4.1-q1',
		taskId: '4.1',
		objetivos: ['4.1#1'],
		tipo: 'conocimiento',
		question: '¿Qué describe correctamente a las On-Demand Instances?',
		options: [
			'Instancias con descuento de hasta el 90 % que pueden interrumpirse con dos minutos de aviso.',
			'Capacidad facturada por el uso, sin compromiso de plazo ni pago por adelantado, con el precio de referencia.',
			'Un compromiso de 1 o 3 años sobre una familia de instancias a cambio de un descuento.',
			'Un servidor físico completo reservado para una sola cuenta.',
		],
		correctAnswer: 1,
		explanation:
			'On-Demand factura por el tiempo de uso sin compromiso: es el precio de referencia. El descuento con interrupción describe Spot, el compromiso de 1 o 3 años describe Reserved Instances y el servidor físico completo describe Dedicated Hosts.',
	},
	{
		id: '4.1-q2',
		taskId: '4.1',
		objetivos: ['4.1#1', '4.1#3'],
		tipo: 'comparacion',
		question:
			'Un equipo compara compromisos para reducir la factura de cómputo. ¿Qué afirmación distingue correctamente AWS Savings Plans, Reserved Instances y Spot Instances?',
		options: [
			'Los tres exigen comprometerse durante tres años y ninguna puede interrumpirse.',
			'Savings Plans y Reserved Instances son compromisos de 1 o 3 años, mientras que Spot aprovecha capacidad sobrante y puede interrumpirse.',
			'Spot ofrece el descuento menor y Reserved Instances el mayor, sin ningún compromiso de plazo.',
			'Savings Plans solo cubre almacenamiento y Reserved Instances solo cubre bases de datos.',
		],
		correctAnswer: 1,
		explanation:
			'Savings Plans y Reserved Instances son compromisos de 1 o 3 años que dan descuento. Spot no exige compromiso de plazo: usa capacidad sobrante y puede reclamarse con dos minutos de aviso.',
	},
	{
		id: '4.1-q3',
		taskId: '4.1',
		objetivos: ['4.1#1', '4.1#3'],
		tipo: 'comparacion',
		question:
			'Una empresa quiere garantizar capacidad en una Availability Zone concreta y, en paralelo, valora el aislamiento físico. ¿Qué distingue a las On-Demand Instances de Dedicated Hosts, Dedicated Instances y Capacity Reservations?',
		options: [
			'On-Demand no tiene compromiso ni reserva capacidad; Dedicated Hosts e Instances dan aislamiento físico y Capacity Reservations garantiza capacidad en una AZ.',
			'Las cuatro opciones reservan hardware físico exclusivo para la cuenta.',
			'Capacity Reservations exige un compromiso de tres años y On-Demand requiere pago por adelantado.',
			'Solo Dedicated Instances permiten traer licencias propias.',
		],
		correctAnswer: 0,
		explanation:
			'On-Demand es pago por uso sin garantía de capacidad. Dedicated Hosts ofrecen control del servidor físico (útil para BYOL), Dedicated Instances ejecutan en hardware dedicado a un cliente y Capacity Reservations asegura capacidad en una Availability Zone concreta.',
	},
	{
		id: '4.1-q4',
		taskId: '4.1',
		objetivos: ['4.1#3'],
		tipo: 'escenario',
		question:
			'Un servicio web corre 24/7 con tráfico estable desde hace dos años, mientras que un proceso nocturno de conversión de vídeo puede reintentarse si se interrumpe. La empresa quiere minimizar el coste de ambas cargas. ¿Qué combinación es la más adecuada?',
		options: [
			'Spot Instances para el servicio web y On-Demand Instances para la conversión nocturna.',
			'On-Demand Instances para ambas cargas para no adquirir ningún compromiso.',
			'Un compromiso de 1 o 3 años (Reserved Instances o Savings Plans) para el servicio estable y Spot Instances para la conversión tolerante a interrupciones.',
			'Dedicated Hosts para el servicio web y Capacity Reservations para la conversión.',
		],
		correctAnswer: 2,
		explanation:
			'La carga estable y predecible se beneficia de un compromiso de 1 o 3 años, y la carga tolerante a interrupciones encaja con Spot por su mayor descuento. Spot no es apta para el servicio crítico y On-Demand desaprovecha el ahorro en el uso estable.',
	},
	{
		id: '4.1-q5',
		taskId: '4.1',
		objetivos: ['4.1#3'],
		tipo: 'tradeoff',
		question:
			'¿Qué trade-off describe mejor la elección entre un EC2 Instance Savings Plan y un enfoque On-Demand?',
		options: [
			'El Savings Plan renuncia a todo descuento a cambio de flexibilidad total.',
			'El Savings Plan da más descuento a cambio de comprometer un gasto por hora durante 1 o 3 años, mientras que On-Demand mantiene la flexibilidad sin compromiso.',
			'On-Demand siempre es más barato porque no tiene compromiso.',
			'Ambos tienen el mismo precio; solo cambia la forma de facturar.',
		],
		correctAnswer: 1,
		explanation:
			'El compromiso de gasto por hora de un Savings Plan reduce el precio a cambio de aceptar un plazo de 1 o 3 años; On-Demand conserva la flexibilidad y el precio de referencia. No hay descuento sin compromiso ni flexibilidad sin coste.',
	},
	{
		id: '4.1-q6',
		taskId: '4.1',
		objetivos: ['4.1#4'],
		tipo: 'conocimiento',
		question:
			'¿Qué flexibilidad ofrece una Reserved Instance regional de Linux/Unix con tenancy compartida?',
		options: [
			'Puede aplicarse a cualquier Availability Zone de la región y repartirse entre tamaños dentro de la misma familia.',
			'Solo cubre la Availability Zone exacta donde se compró y un tamaño concreto.',
			'Permite cambiar de familia de instancias aunque sea Standard.',
			'Se convierte automáticamente en Spot cuando no se usa.',
		],
		correctAnswer: 0,
		explanation:
			'Una RI regional aplica el descuento a cualquier Availability Zone de la región y, con la flexibilidad de tamaño, se reparte entre tamaños de la misma familia, región y sistema operativo Linux/Unix con tenancy compartida. Cambiar de familia exige una RI Convertible.',
	},
	{
		id: '4.1-q7',
		taskId: '4.1',
		objetivos: ['4.1#4'],
		tipo: 'escenario',
		question:
			'Un equipo compró Reserved Instances Standard de una familia concreta y ahora migrará parte de la carga a otra familia de instancias y a otro sistema operativo. Quiere seguir aprovechando el descuento. ¿Qué debería haber elegido?',
		options: [
			'Reserved Instances Standard, porque se pueden intercambiar cuando se quiera.',
			'Reserved Instances Convertible, que permiten intercambiar familia, sistema operativo, tenancy y modalidad de pago.',
			'Dedicated Instances, porque no tienen compromiso.',
			'Spot Instances, porque nunca se interrumpen.',
		],
		correctAnswer: 1,
		explanation:
			'Las RI Standard no se pueden modificar ni intercambiar; las Convertible sí permiten cambiar atributos como familia, sistema operativo o tenancy, a cambio de un descuento algo menor.',
	},
	{
		id: '4.1-q8',
		taskId: '4.1',
		objetivos: ['4.1#5'],
		tipo: 'conocimiento',
		question:
			'¿Cómo se comportan por defecto las Reserved Instances y los Savings Plans dentro de una organización en AWS Organizations?',
		options: [
			'Quedan encerrados en la cuenta que los compró y no benefician a ninguna otra cuenta.',
			'Se comparten entre las cuentas: primero cubren el uso de la cuenta compradora y el descuento sobrante se aplica a las demás.',
			'Se reparten a partes iguales entre todas las cuentas aunque no haya uso.',
			'Solo funcionan si todas las cuentas están en la misma Availability Zone.',
		],
		correctAnswer: 1,
		explanation:
			'Con la facturación consolidada, las RI y los Savings Plans se comparten por defecto entre las cuentas de la organización. Primero se aplican al uso de la cuenta que los compró y el beneficio restante reduce la factura de las demás. La cuenta de administración puede desactivar esa compartición.',
	},
	{
		id: '4.1-q9',
		taskId: '4.1',
		objetivos: ['4.1#5'],
		tipo: 'escenario',
		question:
			'En una organización con varias cuentas, la cuenta A compra Reserved Instances que no alcanza a usar, mientras que la cuenta B paga instancias a precio On-Demand. ¿Qué ocurre con el descuento no utilizado?',
		options: [
			'Se pierde y la cuenta A sigue pagando el compromiso sin beneficio para nadie.',
			'Solo puede usarlo la cuenta de administración, nunca una cuenta miembro.',
			'Al compartirse la reserva, el descuento sobrante de la cuenta A se aplica al uso de la cuenta B, salvo que la compartición esté desactivada.',
			'Las Reserved Instances se cancelan automáticamente y se reembolsan.',
		],
		correctAnswer: 2,
		explanation:
			'En AWS Organizations el beneficio de las RI y los Savings Plans se comparte por defecto entre cuentas. El descuento que la cuenta A no consume se aplica al uso de la cuenta B, reduciendo la factura conjunta, a menos que la cuenta de administración haya desactivado la compartición.',
	},
	{
		id: '4.1-q10',
		taskId: '4.1',
		objetivos: ['4.1#2'],
		tipo: 'conocimiento',
		question: '¿Qué describe correctamente las clases de almacenamiento de objetos y sus niveles?',
		options: [
			'Todas las clases tienen el mismo precio y solo cambian de nombre según la región.',
			'S3 Standard es para acceso frecuente; las clases de archivo son para retención prolongada con almacenamiento más barato y recuperación más lenta.',
			'S3 Intelligent-Tiering es la clase más barata y solo admite datos que nunca se leen.',
			'S3 One Zone-IA replica los datos en todas las Availability Zones de la región.',
		],
		correctAnswer: 1,
		explanation:
			'Las clases ordenan precio y latencia según el acceso: Standard para acceso frecuente, las clases de acceso poco frecuente con cargo por recuperación y las clases de archivo con almacenamiento muy barato y recuperación desde milisegundos hasta horas.',
	},
	{
		id: '4.1-q11',
		taskId: '4.1',
		objetivos: ['4.1#7'],
		tipo: 'escenario',
		question:
			'Una empresa conserva informes que debe mantener siete años, se consultan casi nunca y hoy están en S3 Standard. Quiere reducir el coste de almacenamiento sin perder los datos. ¿Qué debería hacer?',
		options: [
			'Comprimir los objetos y dejarlos en S3 Standard para siempre.',
			'Usar una política de ciclo de vida que mueva los objetos a una clase de archivo como S3 Glacier Deep Archive.',
			'Mover los objetos a Amazon EBS para pagar menos por almacenarlos.',
			'Comprar Reserved Instances para el bucket de S3.',
		],
		correctAnswer: 1,
		explanation:
			'Las políticas de ciclo de vida mueven objetos desde Standard hacia clases de archivo como S3 Glacier Deep Archive, con el almacenamiento más barato para datos de retención prolongada y acceso excepcional. EBS es almacenamiento de bloques, no una clase de objeto, y las RI no aplican a S3.',
	},
	{
		id: '4.1-q12',
		taskId: '4.1',
		objetivos: ['4.1#6'],
		tipo: 'conocimiento',
		question: '¿Qué regla general describe mejor los costes de transferencia de datos?',
		options: [
			'Toda la salida de datos hacia internet es gratuita y toda la entrada se factura.',
			'La entrada de datos desde internet suele ser gratuita; la salida a internet y el cruce entre Availability Zones o entre regiones se facturan por GB.',
			'Solo se factura el tráfico dentro de la misma Availability Zone.',
			'El tráfico entre regiones es siempre gratuito si se usa una dirección pública.',
		],
		correctAnswer: 1,
		explanation:
			'La transferencia entrante a AWS desde internet suele ser gratuita, mientras que la saliente y los cruces entre AZ o entre regiones se facturan por GB. El tráfico entre recursos de la misma AZ con direcciones privadas no genera ese cargo de cruce.',
	},
	{
		id: '4.1-q13',
		taskId: '4.1',
		objetivos: ['4.1#6'],
		tipo: 'escenario',
		question:
			'Dos instancias de la misma aplicación en Availability Zones distintas intercambian cada noche un gran volumen de datos. El equipo quiere reducir el coste de red. ¿Qué acción es más razonable?',
		options: [
			'Mover todo el tráfico a internet para que no se cobre el cruce entre AZ.',
			'Colocar en la misma Availability Zone los componentes que más se comunican o usar un endpoint privado, evaluando el efecto en la alta disponibilidad.',
			'Cambiar las instancias a Spot para evitar los costes de transferencia.',
			'Replicar los datos en todas las regiones para repartir el coste.',
		],
		correctAnswer: 1,
		explanation:
			'El tráfico entre Availability Zones se factura por GB en ambos sentidos. Agrupar en la misma AZ los componentes que más se comunican o usar un endpoint privado reduce ese cargo, aunque hay que valorar el efecto sobre la alta disponibilidad. El tipo de compra de la instancia no cambia el coste de transferencia.',
	},
	{
		id: '4.1-q14',
		taskId: '4.1',
		objetivos: ['4.1#7'],
		tipo: 'tradeoff',
		question:
			'¿Qué trade-off hay entre almacenar datos en S3 Standard y hacerlo en una clase de archivo como S3 Glacier Flexible Retrieval?',
		options: [
			'Standard siempre es más barato de almacenar, pero más lento de leer.',
			'La clase de archivo reduce el coste de almacenamiento a cambio de una recuperación más lenta y, según la clase, cargos por recuperación.',
			'La clase de archivo no tiene ningún coste de almacenamiento.',
			'Standard y la clase de archivo cuestan lo mismo; solo cambia la región.',
		],
		correctAnswer: 1,
		explanation:
			'Las clases de archivo abaratan el almacenamiento mensual a cambio de mayor latencia de recuperación y, en algunos casos, cargos por recuperación. Standard es más caro de almacenar pero ofrece acceso inmediato, así que la elección depende de la frecuencia de lectura.',
	},
];
