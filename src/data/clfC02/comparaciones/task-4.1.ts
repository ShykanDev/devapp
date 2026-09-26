import type { ParConfusionClfC02 } from '@/data/clfC02/types';

export const paresTask41: ParConfusionClfC02[] = [
	{
		id: 'savings-plans-vs-ri-vs-spot',
		etiqueta: 'Savings Plans y Reserved Instances frente a Spot Instances',
		a: {
			titulo: 'AWS Savings Plans y Reserved Instances',
			resumen:
				'Ambos son compromisos de 1 o 3 años que intercambian flexibilidad por descuento. Las Reserved Instances se anclan a atributos de instancia, con Standard (sin cambios) y Convertible (con intercambio) como variantes. Los Savings Plans comprometen un gasto por hora, y los Compute Savings Plans cubren Amazon EC2, AWS Fargate y AWS Lambda en cualquier familia, sistema operativo y región.',
		},
		b: {
			titulo: 'Spot Instances',
			resumen:
				'No hay compromiso de plazo: se usan instancias de capacidad sobrante con el mayor descuento, pero pueden reclamarse con dos minutos de aviso. Solo encajan en cargas tolerantes a interrupciones.',
		},
		diferenciaClave:
			'Savings Plans y Reserved Instances compran previsibilidad con un compromiso de plazo; Spot compra precio a cambio de tolerar la interrupción. El riesgo que asumes es distinto: compromiso de gasto frente a pérdida de la instancia.',
		cuandoA: [
			'Cuando la carga es estable y se mantiene durante uno o más años y quieres reducir la factura sin asumir interrupciones.',
			'Cuando necesitas cubrir cómputo de varios servicios con un solo compromiso de gasto y buscas flexibilidad de familia y región.',
		],
		cuandoB: [
			'Cuando el trabajo tolera la interrupción y puede reintentarse, como procesamiento por lotes, renderizado o tareas stateless.',
			'Cuando quieres el mayor descuento posible sobre capacidad sobrante y el momento exacto de ejecución es flexible.',
		],
		escenarioA:
			'Una plataforma con uso estable contrata un Compute Savings Plan de un año que cubre sus instancias, sus tareas de contenedores administrados y sus funciones serverless, reduciendo la factura sin riesgo de interrupción.',
		escenarioB:
			'Un estudio de animación lanza renderizados nocturnos en Spot Instances; si la capacidad se reclama, el trabajo se reintenta en la siguiente franja sin afectar al servicio.',
		preguntaIds: ['4.1-q2'],
		objetivos: ['4.1#1', '4.1#3'],
	},
	{
		id: 'on-demand-vs-dedicated-vs-capacity',
		etiqueta:
			'On-Demand Instances frente a Dedicated Hosts, Dedicated Instances y Capacity Reservations',
		a: {
			titulo: 'On-Demand Instances',
			resumen:
				'Capacidad facturada por uso, sin compromiso y sin reserva. Da la máxima flexibilidad y el precio de referencia, pero no garantiza que la capacidad esté disponible ni ofrece aislamiento físico.',
		},
		b: {
			titulo: 'Dedicated Hosts, Dedicated Instances y Capacity Reservations',
			resumen:
				'Opciones para requisitos concretos. Dedicated Hosts entregan un servidor físico completo con control de sockets y núcleos (BYOL); Dedicated Instances corren en hardware dedicado a un único cliente; Capacity Reservations aseguran capacidad en una Availability Zone concreta sin compromiso de plazo.',
		},
		diferenciaClave:
			'On-Demand resuelve el pago por uso; Dedicated Hosts e Instances resuelven aislamiento físico y licencias, y Capacity Reservations resuelve la garantía de capacidad en una AZ concreta. Se pueden combinar: una Capacity Reservation conserva la capacidad y un Savings Plan o una RI aplica el descuento sobre ella.',
		cuandoA: [
			'Cuando la carga es imprevisible o de corta duración y no necesitas garantizar capacidad ni aislamiento físico.',
			'Cuando quieres evitar cualquier compromiso de plazo o pago por adelantado.',
		],
		cuandoB: [
			'Cuando necesitas traer tus propias licencias o cumplir requisitos de aislamiento físico en hardware dedicado.',
			'Cuando debes garantizar que habrá capacidad en una Availability Zone concreta para un lanzamiento o un pico planificado.',
		],
		escenarioA:
			'Un equipo de desarrollo levanta y destruye entornos de prueba varias veces al día y paga solo por las horas en que las instancias están encendidas.',
		escenarioB:
			'Una empresa con licencias de software basadas en sockets usa Dedicated Hosts para cumplir el contrato y reserva capacidad en una Availability Zone concreta para el lanzamiento de un producto.',
		preguntaIds: ['4.1-q3'],
		objetivos: ['4.1#1', '4.1#3'],
	},
	{
		id: 'clases-de-objetos-vs-bloques-y-archivos',
		etiqueta: 'Clases de almacenamiento de objetos frente a bloques y archivos',
		a: {
			titulo: 'Clases y niveles del almacenamiento de objetos',
			resumen:
				'Dentro del almacenamiento de objetos, las clases ordenan el precio por frecuencia de acceso y latencia de recuperación: la clase de acceso frecuente es la más cara por GB, las de acceso poco frecuente abaratan el almacenamiento con cargo por recuperación y las de archivo lo minimizan con recuperación lenta.',
		},
		b: {
			titulo: 'Almacenamiento de bloques y de archivos',
			resumen:
				'No son niveles de un mismo servicio. El almacenamiento de bloques se paga por capacidad aprovisionada aunque no se monte, y el de archivos compartidos se paga por datos almacenados. Cada tipo atiende un acceso distinto: volumen de una instancia frente a sistema de archivos compartido.',
		},
		diferenciaClave:
			'Las clases de objetos son niveles de precio dentro de un mismo servicio de objetos; los bloques y los archivos son otros tipos de almacenamiento con su propio modelo de cobro. No se eligen como niveles entre sí, sino por la forma de acceso que necesita la carga.',
		cuandoA: [
			'Cuando el dato se accede como objeto y quieres ajustar el precio según la frecuencia de lectura.',
			'Cuando necesitas retención prolongada de objetos con una política de ciclo de vida que baje de nivel de forma automática.',
		],
		cuandoB: [
			'Cuando una instancia necesita un volumen de bloques o cuando varios recursos deben compartir un sistema de archivos.',
			'Cuando el acceso no es por objeto sino por lectura y escritura a nivel de bloque o por montaje de un sistema de archivos.',
		],
		escenarioA:
			'Una empresa conserva documentos que casi no se leen y los mueve con una política de ciclo de vida desde la clase de acceso frecuente a una clase de archivo, reduciendo el precio por GB almacenado.',
		escenarioB:
			'Un servidor de base de datos monta un volumen de bloques para sus datos y un clúster de análisis comparte un sistema de archivos para sus nodos de proceso.',
		preguntaIds: ['4.1-q15'],
		objetivos: ['4.1#2', '4.1#7'],
	},
	{
		id: 'comparticion-de-descuento-activada-vs-desactivada',
		etiqueta: 'Descuento por compromiso compartido por defecto frente a compartición desactivada',
		a: {
			titulo: 'Compartición activada (por defecto)',
			resumen:
				'En una organización, las RI y los Savings Plans se comparten por defecto: primero cubren el uso de la cuenta que los compró y el descuento sobrante se aplica al uso elegible de las demás cuentas, reduciendo la factura consolidada.',
		},
		b: {
			titulo: 'Compartición desactivada',
			resumen:
				'La cuenta de administración puede desactivar la compartición, cuenta por cuenta, en las preferencias de facturación. A partir de ahí, el descuento queda limitado a la cuenta que lo compró y el sobrante no beneficia a las demás.',
		},
		diferenciaClave:
			'No es una diferencia de producto sino de preferencia de la organización: activada, el descuento se reparte entre cuentas; desactivada, se retiene en la cuenta compradora. El comportamiento por defecto es la compartición.',
		cuandoA: [
			'Cuando varias cuentas comparten una organización y quieres que el descuento no usado en una reduzca la factura de las demás.',
			'Cuando buscas maximizar el aprovechamiento del compromiso sobre el uso agregado.',
		],
		cuandoB: [
			'Cuando necesitas que cada cuenta cargue su propio consumo sin que el descuento de otra la beneficie.',
			'Cuando las cuentas se facturan a unidades distintas y quieres el descuento encerrado en la cuenta compradora.',
		],
		escenarioA:
			'La cuenta de producción de un grupo compra un compromiso de cómputo que no consume entero; el descuento sobrante baja la factura de la cuenta de desarrollo, que pagaba todo a precio de referencia.',
		escenarioB:
			'Una empresa desactiva la compartición porque cada filial tiene presupuesto propio y quiere que el descuento solo reduzca el gasto de la cuenta que lo contrató.',
		preguntaIds: ['4.1-q16'],
		objetivos: ['4.1#5'],
	},
	{
		id: 'transferencia-entrante-vs-saliente-y-cruce',
		etiqueta: 'Transferencia entrante frente a saliente y cruce entre Availability Zones o regiones',
		a: {
			titulo: 'Transferencia entrante (incoming)',
			resumen:
				'La entrada de datos desde internet hacia AWS suele ser gratuita. Recibir datos en la nube no genera un cargo por GB de los que sí aparecen al sacarlos o al cruzar fronteras internas.',
		},
		b: {
			titulo: 'Transferencia saliente y cruce entre AZ o regiones',
			resumen:
				'Sacar datos hacia internet se factura por GB con tramos decrecientes, y el tráfico que cruza entre Availability Zones o entre regiones también se cobra por GB en los extremos. El tráfico dentro de la misma AZ con direcciones privadas no genera ese cargo.',
		},
		diferenciaClave:
			'Entrar a AWS suele ser gratis; salir y cruzar entre zonas o regiones se paga. Por eso el diseño de red importa: concentrar el tráfico intenso en la misma AZ o usar un endpoint privado reduce la factura sin eliminar la transferencia.',
		cuandoA: [
			'Cuando ingieres datos hacia AWS de forma masiva y quieres saber que esa dirección no genera cargo de transferencia.',
			'Cuando planificas la carga inicial de datos y el coste relevante es el almacenamiento, no la entrada.',
		],
		cuandoB: [
			'Cuando sirves contenido o resultados hacia internet y necesitas presupuestar la salida por GB.',
			'Cuando el tráfico interno cruza Availability Zones o regiones y quieres evaluar si conviene reagruparlo en una sola zona.',
		],
		escenarioA:
			'Una empresa sube cada noche millones de registros desde su centro de datos hacia AWS y comprueba que esa entrada no genera un cargo por GB de transferencia.',
		escenarioB:
			'Dos componentes en Availability Zones distintas intercambian grandes volúmenes de datos y el equipo compara el coste de cruce con el de concentrarlos en una misma zona.',
		preguntaIds: ['4.1-q17'],
		objetivos: ['4.1#6'],
	},
];
