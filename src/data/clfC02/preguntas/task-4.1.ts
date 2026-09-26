import type { PreguntaClfC02 } from '@/data/clfC02/types';

export const preguntasTask41: PreguntaClfC02[] = [
	{
		id: '4.1-q1',
		taskId: '4.1',
		objetivos: ['4.1#1'],
		tipo: 'conocimiento',
		question: '¿Qué describe correctamente a las On-Demand Instances?',
		options: [
			'Capacidad sobrante con descuento de hasta el 90 %, interrumpible con dos minutos de aviso para cargas tolerantes a fallos.',
			'Capacidad facturada por el uso, sin compromiso de plazo ni pago por adelantado, con el precio de referencia.',
			'Un compromiso de 1 o 3 años sobre una familia de instancias en una región, a cambio de un descuento de hasta el 72 %.',
			'Un servidor físico completo reservado para una sola cuenta, con visibilidad y control de sockets y núcleos.',
		],
		correctAnswer: 1,
		explanation:
			'On-Demand factura por el tiempo de uso sin compromiso: es el precio de referencia. El descuento con interrupción describe Spot, el compromiso de 1 o 3 años describe Reserved Instances y el servidor físico completo describe Dedicated Hosts. Si cambia el requisito y el uso pasa a ser estable durante años, la respuesta correcta dejaría de ser On-Demand y sería un compromiso de 1 o 3 años.',
		porQueOpcion: [
			'Incorrecta: la capacidad sobrante interrumpible con dos minutos de aviso describe Spot Instances, no On-Demand.',
			'Correcta: On-Demand factura por uso sin compromiso de plazo ni pago por adelantado y es el precio de referencia.',
			'Incorrecta: el compromiso de 1 o 3 años sobre una familia de instancias describe Reserved Instances o Savings Plans.',
			'Incorrecta: el servidor físico completo reservado a una cuenta con control de sockets describe Dedicated Hosts.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/how-aws-pricing-works/welcome.html',
		],
	},
	{
		id: '4.1-q2',
		taskId: '4.1',
		objetivos: ['4.1#1', '4.1#3'],
		tipo: 'comparacion',
		question:
			'Un equipo compara formas de bajar la factura de cómputo. ¿Qué afirmación distingue correctamente los planes de gasto por hora, las reservas de instancias y la capacidad sobrante interrumpible?',
		options: [
			'Los tres exigen comprometerse durante tres años, y ninguna de las tres opciones puede reclamarse ni interrumpirse en ningún caso.',
			'Savings Plans y Reserved Instances son compromisos de 1 o 3 años, mientras que Spot aprovecha capacidad sobrante y puede interrumpirse.',
			'La capacidad sobrante ofrece el descuento menor y las reservas el mayor, y ninguna de las tres opciones exige comprometerse por un plazo.',
			'Los planes de gasto por hora solo cubren almacenamiento y las reservas solo bases de datos administradas, no el cómputo de instancias.',
		],
		correctAnswer: 1,
		explanation:
			'Savings Plans y Reserved Instances son compromisos de 1 o 3 años que dan descuento. Spot no exige compromiso de plazo: usa capacidad sobrante y puede reclamarse con dos minutos de aviso. Si cambia el requisito y la carga debe ser interrumpible para pagar menos, la respuesta pasaría a ser Spot.',
		porQueOpcion: [
			'Incorrecta: solo Savings Plans y Reserved Instances exigen compromiso, y Spot sí puede reclamarse o interrumpirse.',
			'Correcta: Savings Plans y Reserved Instances son compromisos de 1 o 3 años, mientras que Spot usa capacidad sobrante interrumpible.',
			'Incorrecta: Spot ofrece el mayor descuento y tanto las reservas como los planes sí exigen un plazo de compromiso.',
			'Incorrecta: los planes de gasto por hora y las reservas cubren el cómputo de instancias, no solo almacenamiento o bases de datos.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/how-aws-pricing-works/welcome.html',
		],
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
			'Las cuatro opciones reservan hardware físico exclusivo para la cuenta, garantizan capacidad en una Availability Zone y eliminan cualquier compromiso de plazo.',
			'Capacity Reservations exige un compromiso de tres años y On-Demand requiere el pago por adelantado de toda la capacidad contratada.',
			'Solo Dedicated Instances permiten traer licencias propias, mientras que Dedicated Hosts no ofrecen ningún control del hardware físico.',
		],
		correctAnswer: 0,
		explanation:
			'On-Demand es pago por uso sin garantía de capacidad. Dedicated Hosts ofrecen control del servidor físico (útil para BYOL), Dedicated Instances ejecutan en hardware dedicado a un cliente y Capacity Reservations asegura capacidad en una Availability Zone concreta. Si cambiara el requisito y solo se pidiera el descuento sin garantizar capacidad, la respuesta correcta sería un compromiso de 1 o 3 años.',
		porQueOpcion: [
			'Correcta: On-Demand no reserva capacidad, Dedicated Hosts e Instances dan aislamiento físico y Capacity Reservations garantiza capacidad en una AZ.',
			'Incorrecta: On-Demand no reserva hardware exclusivo ni garantiza capacidad, así que no se puede generalizar a las cuatro.',
			'Incorrecta: Capacity Reservations no exige tres años y On-Demand no obliga al pago por adelantado de la capacidad.',
			'Incorrecta: Dedicated Hosts permiten BYOL y sí ofrecen control del hardware físico; la afirmación los invierte.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/how-aws-pricing-works/welcome.html',
		],
	},
	{
		id: '4.1-q4',
		taskId: '4.1',
		objetivos: ['4.1#3'],
		tipo: 'escenario',
		question:
			'Un servicio web corre 24/7 con tráfico estable desde hace dos años, mientras que un proceso nocturno de conversión de vídeo puede reintentarse si se interrumpe. La empresa quiere minimizar el coste de ambas cargas. ¿Qué combinación es la más adecuada?',
		options: [
			'Spot Instances para el servicio web y On-Demand Instances para la conversión nocturna, sin asumir ningún tipo de compromiso de plazo.',
			'On-Demand Instances para ambas cargas para no adquirir ningún compromiso, manteniendo la máxima flexibilidad de cambio aunque se pague el precio de referencia.',
			'Un compromiso de 1 o 3 años (Reserved Instances o Savings Plans) para el servicio estable y Spot Instances para la conversión tolerante a interrupciones.',
			'Dedicated Hosts para el servicio web y Capacity Reservations para la conversión, buscando el mayor aislamiento físico del hardware.',
		],
		correctAnswer: 2,
		explanation:
			'La carga estable y predecible se beneficia de un compromiso de 1 o 3 años, y la carga tolerante a interrupciones encaja con Spot por su mayor descuento. Spot no es apta para el servicio crítico y On-Demand desaprovecha el ahorro en el uso estable. Si el escenario cambiara y la conversión no pudiera reanudarse, habría que descartar Spot.',
		porQueOpcion: [
			'Incorrecta: Spot no es apta para el servicio web crítico y la conversión tolerante pagaría de más con On-Demand.',
			'Incorrecta: On-Demand en ambas cargas paga el precio de referencia y desaprovecha el ahorro del compromiso y de Spot.',
			'Correcta: el compromiso de 1 o 3 años abarata la carga estable y Spot abarata la conversión tolerante a interrupciones.',
			'Incorrecta: Dedicated Hosts y Capacity Reservations buscan aislamiento y garantía de capacidad, no minimizar el coste.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/how-aws-pricing-works/welcome.html',
		],
	},
	{
		id: '4.1-q5',
		taskId: '4.1',
		objetivos: ['4.1#3'],
		tipo: 'tradeoff',
		question:
			'¿Qué trade-off describe mejor la elección entre un EC2 Instance Savings Plan y un enfoque On-Demand?',
		options: [
			'El Savings Plan renuncia a todo descuento a cambio de flexibilidad total y de no asumir ningún plazo de compromiso.',
			'El Savings Plan da más descuento a cambio de comprometer un gasto por hora durante 1 o 3 años, mientras que On-Demand mantiene la flexibilidad sin compromiso.',
			'On-Demand siempre resulta más barato porque no tiene compromiso, su precio no depende del uso continuo ni exige reservar capacidad por adelantado para la carga.',
			'Ambos tienen exactamente el mismo precio por hora, y lo único que cambia es la forma de facturar y el momento en que se realiza el pago.',
		],
		correctAnswer: 1,
		explanation:
			'El compromiso de gasto por hora de un Savings Plan reduce el precio a cambio de aceptar un plazo de 1 o 3 años; On-Demand conserva la flexibilidad y el precio de referencia. No hay descuento sin compromiso ni flexibilidad sin coste. Si cambia el requisito y la carga puede apagarse pronto, el compromiso deja de compensar frente a On-Demand.',
		porQueOpcion: [
			'Incorrecta: el Savings Plan sí ofrece descuento, precisamente a cambio de asumir el plazo de compromiso.',
			'Correcta: el Savings Plan cambia descuento por un compromiso de gasto por hora de 1 o 3 años, mientras On-Demand mantiene la flexibilidad.',
			'Incorrecta: On-Demand no siempre es más barato, ya que para uso continuo el precio de referencia suele ser mayor que el comprometido.',
			'Incorrecta: el Savings Plan tiene un precio efectivo menor y no comparte la misma tarifa por hora que On-Demand.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/ec2/',
		],
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
			'Solo cubre la Availability Zone exacta donde se compró y un tamaño concreto, sin repartirse entre otros tamaños de la familia.',
			'Permite cambiar de familia de instancias aunque sea Standard, siempre que el sistema operativo sea Linux/Unix con tenancy compartida.',
			'Se convierte automáticamente en capacidad Spot cuando no se usa durante varios días seguidos dentro de la misma región.',
		],
		correctAnswer: 0,
		explanation:
			'Una RI regional aplica el descuento a cualquier Availability Zone de la región y, con la flexibilidad de tamaño, se reparte entre tamaños de la misma familia, región y sistema operativo Linux/Unix con tenancy compartida. Cambiar de familia exige una RI Convertible. Si se necesitara cambiar de familia o de sistema operativo, la respuesta correcta sería la RI Convertible.',
		porQueOpcion: [
			'Correcta: una RI regional se aplica a cualquier AZ de la región y, con flexibilidad de tamaño, se reparte entre tamaños de la misma familia.',
			'Incorrecta: eso describe una RI zonal, que queda atada a la AZ y al tamaño concretos de la compra.',
			'Incorrecta: cambiar de familia exige una RI Convertible, no una Standard, aunque el sistema operativo sea Linux/Unix.',
			'Incorrecta: una Reserved Instance no se transforma en capacidad Spot; son mecanismos de compra independientes.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/how-aws-pricing-works/welcome.html',
		],
	},
	{
		id: '4.1-q7',
		taskId: '4.1',
		objetivos: ['4.1#4'],
		tipo: 'escenario',
		question:
			'Un equipo compró Reserved Instances Standard de una familia concreta y ahora migrará parte de la carga a otra familia de instancias y a otro sistema operativo. Quiere seguir aprovechando el descuento. ¿Qué debería haber elegido?',
		options: [
			'Reserved Instances Standard, porque se pueden intercambiar libremente entre familias cuando el equipo lo necesite.',
			'Reserved Instances Convertible, que permiten intercambiar familia, sistema operativo, tenancy y modalidad de pago.',
			'Dedicated Instances, porque se ejecutan en hardware dedicado sin compromiso de plazo ni pago por adelantado.',
			'Spot Instances, porque aprovechan capacidad sobrante y nunca se interrumpen si el uso se mantiene estable.',
		],
		correctAnswer: 1,
		explanation:
			'Las RI Standard no se pueden modificar ni intercambiar; las Convertible sí permiten cambiar atributos como familia, sistema operativo o tenancy, a cambio de un descuento algo menor. Si el escenario no exigiera cambiar de familia, una RI Standard seguiría dando el mayor descuento.',
		porQueOpcion: [
			'Incorrecta: las RI Standard no se intercambian entre familias, así que no resuelven la migración planteada.',
			'Correcta: las RI Convertible permiten intercambiar familia, sistema operativo, tenancy y modalidad de pago.',
			'Incorrecta: Dedicated Instances aportan aislamiento físico, no un descuento por compromiso intercambiable entre familias.',
			'Incorrecta: Spot usa capacidad sobrante y puede interrumpirse, y no ofrece el compromiso de descuento que se busca.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/how-aws-pricing-works/welcome.html',
		],
	},
	{
		id: '4.1-q8',
		taskId: '4.1',
		objetivos: ['4.1#5'],
		tipo: 'conocimiento',
		question:
			'¿Cómo se comportan por defecto los descuentos por compromiso de cómputo dentro de una organización con facturación consolidada?',
		options: [
			'Quedan encerrados en la cuenta que los compró y no benefician al uso de ninguna otra cuenta miembro, ni siquiera con facturación consolidada.',
			'Se comparten entre las cuentas: primero cubren el uso de la cuenta compradora y el descuento sobrante se aplica a las demás.',
			'Se reparten a partes iguales entre todas las cuentas aunque no exista uso elegible en algunas de ellas durante el mes.',
			'Solo funcionan si todas las cuentas de la organización se encuentran en la misma Availability Zone de una misma región.',
		],
		correctAnswer: 1,
		explanation:
			'Con la facturación consolidada, las RI y los Savings Plans se comparten por defecto entre las cuentas de la organización. Primero se aplican al uso de la cuenta que los compró y el beneficio restante reduce la factura de las demás. La cuenta de administración puede desactivar esa compartición. Si cambia la preferencia y se desactiva la compartición, el beneficio quedaría en la cuenta compradora.',
		porQueOpcion: [
			'Incorrecta: con facturación consolidada el descuento no queda encerrado en la cuenta compradora por defecto.',
			'Correcta: por defecto las RI y Savings Plans se comparten, cubriendo primero la cuenta compradora y luego a las demás.',
			'Incorrecta: el reparto no es a partes iguales, sino que depende del uso elegible de cada cuenta del mes.',
			'Incorrecta: la compartición no depende de compartir Availability Zone ni de estar en una misma región.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/how-aws-pricing-works/welcome.html',
		],
	},
	{
		id: '4.1-q9',
		taskId: '4.1',
		objetivos: ['4.1#5'],
		tipo: 'escenario',
		question:
			'En una organización con varias cuentas, la cuenta A compra Reserved Instances que no alcanza a usar, mientras que la cuenta B paga instancias a precio On-Demand. ¿Qué ocurre con el descuento no utilizado?',
		options: [
			'Se pierde y la cuenta A sigue pagando el compromiso sin beneficio para nadie, ni para la propia cuenta A ni para la cuenta B.',
			'Solo puede usarlo la cuenta de administración de la organización, nunca una cuenta miembro como la cuenta B, salvo que se activen etiquetas.',
			'Al compartirse la reserva, el descuento sobrante de la cuenta A se aplica al uso de la cuenta B, salvo que la compartición esté desactivada.',
			'Las Reserved Instances se cancelan automáticamente y se reembolsan a la cuenta A al detectar que están infrautilizadas.',
		],
		correctAnswer: 2,
		explanation:
			'En AWS Organizations el beneficio de las RI y los Savings Plans se comparte por defecto entre cuentas. El descuento que la cuenta A no consume se aplica al uso de la cuenta B, reduciendo la factura conjunta, a menos que la cuenta de administración haya desactivado la compartición. Si cambia el escenario y se desactiva la compartición, el descuento sobrante no llegaría a la cuenta B.',
		porQueOpcion: [
			'Incorrecta: el descuento sobrante no se pierde mientras la compartición de la organización esté activada.',
			'Incorrecta: cualquier cuenta miembro puede beneficiarse del descuento compartido, no solo la cuenta de administración.',
			'Correcta: al compartirse la reserva, el descuento sobrante de la cuenta A se aplica al uso de la cuenta B salvo que la compartición esté desactivada.',
			'Incorrecta: las RI no se cancelan ni se reembolsan automáticamente por quedar infrautilizadas.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/organizations/',
		],
	},
	{
		id: '4.1-q10',
		taskId: '4.1',
		objetivos: ['4.1#2'],
		tipo: 'conocimiento',
		question: '¿Qué describe correctamente las clases de almacenamiento de objetos y sus niveles?',
		options: [
			'Todas las clases tienen el mismo precio por GB y solo cambian de nombre comercial según la región donde se almacenen los datos.',
			'S3 Standard es para acceso frecuente; las clases de archivo son para retención prolongada con almacenamiento más barato y recuperación más lenta.',
			'S3 Intelligent-Tiering es la clase más barata de todas y solo admite datos que nunca se leen ni se recuperan, y no aplica ningún cargo por recuperación ni por gestión.',
			'S3 One Zone-IA replica los datos en todas las Availability Zones de la región y por eso cuesta más que S3 Standard.',
		],
		correctAnswer: 1,
		explanation:
			'Las clases ordenan precio y latencia según el acceso: Standard para acceso frecuente, las clases de acceso poco frecuente con cargo por recuperación y las clases de archivo con almacenamiento muy barato y recuperación desde milisegundos hasta horas. Si cambia el patrón de acceso y los datos dejan de leerse, una política de ciclo de vida los mueve a una clase de archivo.',
		porQueOpcion: [
			'Incorrecta: las clases no comparten el mismo precio por GB; difieren en costo y latencia según la frecuencia de acceso.',
			'Correcta: S3 Standard es para acceso frecuente y las clases de archivo abaratan el almacenamiento a cambio de una recuperación más lenta.',
			'Incorrecta: S3 Intelligent-Tiering no es la clase más barata y mueve automáticamente los datos entre niveles de acceso.',
			'Incorrecta: S3 One Zone-IA almacena en una sola Availability Zone y por eso cuesta menos que S3 Standard.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/s3/',
		],
	},
	{
		id: '4.1-q11',
		taskId: '4.1',
		objetivos: ['4.1#7'],
		tipo: 'escenario',
		question:
			'Una empresa conserva informes que debe mantener siete años, se consultan casi nunca y hoy están en S3 Standard. Quiere reducir el coste de almacenamiento sin perder los datos. ¿Qué debería hacer?',
		options: [
			'Comprimir los objetos y dejarlos en S3 Standard para siempre, porque la compresión reduce el precio por GB almacenado.',
			'Usar una política de ciclo de vida que mueva los objetos a una clase de archivo como S3 Glacier Deep Archive.',
			'Mover los objetos a Amazon EBS para pagar menos por almacenarlos, ya que el almacenamiento de bloques es más barato que el de objetos.',
			'Comprar Reserved Instances para el bucket de S3 y reducir así el coste mensual de almacenamiento de los informes archivados.',
		],
		correctAnswer: 1,
		explanation:
			'Las políticas de ciclo de vida mueven objetos desde Standard hacia clases de archivo como S3 Glacier Deep Archive, con el almacenamiento más barato para datos de retención prolongada y acceso excepcional. EBS es almacenamiento de bloques, no una clase de objeto, y las RI no aplican a almacenamiento de objetos. Si cambiara el requisito y los informes se leyeran a diario, la clase adecuada sería una de acceso frecuente.',
		porQueOpcion: [
			'Incorrecta: comprimir no cambia la clase ni el alto precio por GB de S3 Standard para datos que casi no se leen.',
			'Correcta: una política de ciclo de vida mueve los informes a una clase de archivo como S3 Glacier Deep Archive y reduce el coste.',
			'Incorrecta: EBS es almacenamiento de bloques, no una clase de objetos, y no abarata la retención de informes frente a las clases de archivo.',
			'Incorrecta: las Reserved Instances no aplican al almacenamiento de objetos de S3.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/ebs/',
			'https://docs.aws.amazon.com/s3/',
			'https://docs.aws.amazon.com/amazonglacier/latest/dev/introduction.html',
		],
	},
	{
		id: '4.1-q12',
		taskId: '4.1',
		objetivos: ['4.1#6'],
		tipo: 'conocimiento',
		question: '¿Qué regla general describe mejor los costes de transferencia de datos?',
		options: [
			'Toda la salida de datos hacia internet es gratuita y toda la entrada desde internet se factura por GB en tramos decrecientes.',
			'La entrada de datos desde internet suele ser gratuita; la salida a internet y el cruce entre Availability Zones o entre regiones se facturan por GB.',
			'Solo se factura el tráfico dentro de la misma Availability Zone, mientras que el resto del tráfico interno de la región es gratuito.',
			'El tráfico entre regiones es siempre gratuito si los recursos usan direcciones públicas, y solo se factura el cruce entre Availability Zones de la misma región.',
		],
		correctAnswer: 1,
		explanation:
			'La transferencia entrante a AWS desde internet suele ser gratuita, mientras que la saliente y los cruces entre AZ o entre regiones se facturan por GB. El tráfico entre recursos de la misma AZ con direcciones privadas no genera ese cargo de cruce. Si cambia la dirección del tráfico y se diseña para no cruzar AZ ni salir a internet, el coste de red baja.',
		porQueOpcion: [
			'Incorrecta: invierte la regla, ya que la salida a internet se factura y la entrada desde internet suele ser gratuita.',
			'Correcta: la entrada desde internet suele ser gratuita, mientras que la salida y el cruce entre AZ o regiones se facturan por GB.',
			'Incorrecta: el tráfico dentro de la misma AZ con direcciones privadas no se factura, justo lo contrario de lo afirmado.',
			'Incorrecta: el tráfico entre regiones no es gratuito por usar direcciones públicas.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/how-aws-pricing-works/welcome.html',
		],
	},
	{
		id: '4.1-q13',
		taskId: '4.1',
		objetivos: ['4.1#6'],
		tipo: 'escenario',
		question:
			'Dos instancias de la misma aplicación en Availability Zones distintas intercambian cada noche un gran volumen de datos. El equipo quiere reducir el coste de red, aunque el sistema operativo de las instancias no afecta a ese gasto. ¿Qué acción es más razonable?',
		options: [
			'Mover todo el tráfico a internet para que no se cobre el cruce entre Availability Zones ni el de salida hacia internet.',
			'Colocar en la misma Availability Zone los componentes que más se comunican o usar un endpoint privado, evaluando el efecto en la alta disponibilidad.',
			'Cambiar las instancias a Spot para evitar los costes de transferencia, porque la capacidad sobrante no genera cargos de red.',
			'Replicar los datos en todas las regiones posibles para repartir el coste de red entre más ubicaciones y reducir así el importe total que se paga cada mes.',
		],
		correctAnswer: 1,
		explanation:
			'El tráfico entre Availability Zones se factura por GB en ambos sentidos. Agrupar en la misma AZ los componentes que más se comunican o usar un endpoint privado reduce ese cargo, aunque hay que valorar el efecto sobre la alta disponibilidad. El tipo de compra de la instancia no cambia el coste de transferencia. Si cambia el requisito y prima la tolerancia a fallos sobre el coste de red, conviene mantener las cargas en AZ separadas.',
		porQueOpcion: [
			'Incorrecta: mover el tráfico a internet añade cargos de salida en lugar de evitar el cruce entre AZ.',
			'Correcta: agrupar en la misma AZ los componentes que más se comunican o usar un endpoint privado reduce el cruce facturado.',
			'Incorrecta: el tipo de compra de la instancia no elimina los cargos de transferencia de datos.',
			'Incorrecta: replicar en más regiones multiplica los cruces y el coste de red en lugar de reducirlo.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/how-aws-pricing-works/welcome.html',
		],
	},
	{
		id: '4.1-q14',
		taskId: '4.1',
		objetivos: ['4.1#7'],
		tipo: 'tradeoff',
		question:
			'Un equipo quiere reducir el coste mensual de almacenamiento y duda entre guardar datos en S3 Standard o en una clase de archivo como S3 Glacier Flexible Retrieval; aunque la región elegida no es relevante para la decisión, ¿qué trade-off describe mejor la elección entre ambas?',
		options: [
			'Standard siempre es más barato de almacenar, pero más lento de leer, y no aplica ningún cargo por recuperación de datos.',
			'La clase de archivo reduce el coste de almacenamiento a cambio de una recuperación más lenta y, según la clase, cargos por recuperación.',
			'La clase de archivo no tiene ningún coste de almacenamiento, solo cargos por recuperación cuando se solicitan los objetos guardados.',
			'Standard y la clase de archivo cuestan exactamente lo mismo por GB almacenado; lo único que cambia es la región donde se guardan y la latencia de acceso.',
		],
		correctAnswer: 1,
		explanation:
			'Las clases de archivo abaratan el almacenamiento mensual a cambio de mayor latencia de recuperación y, en algunos casos, cargos por recuperación. Standard es más caro de almacenar pero ofrece acceso inmediato, así que la elección depende de la frecuencia de lectura. Si cambia el requisito y los datos pasan a leerse con frecuencia, la clase adecuada vuelve a ser Standard.',
		porQueOpcion: [
			'Incorrecta: Standard es más caro de almacenar y más rápido de leer, no más barato ni más lento.',
			'Correcta: la clase de archivo reduce el almacenamiento a cambio de una recuperación más lenta y, según la clase, cargos por recuperación.',
			'Incorrecta: las clases de archivo sí cobran almacenamiento mensual; no son gratuitas.',
			'Incorrecta: Standard y la clase de archivo no cuestan lo mismo por GB ni solo difieren por región y latencia.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/s3/',
			'https://docs.aws.amazon.com/amazonglacier/latest/dev/introduction.html',
		],
	},
	{
		id: '4.1-q15',
		taskId: '4.1',
		objetivos: ['4.1#2', '4.1#7'],
		tipo: 'comparacion',
		question:
			'Una empresa elige dónde guardar datos y compara las clases por frecuencia de acceso con otros tipos de almacenamiento. ¿Qué afirmación es correcta?',
		options: [
			'Las clases de objetos ordenan el precio por frecuencia de acceso; el almacenamiento de bloques se paga por capacidad aprovisionada y el de archivos, por datos almacenados compartidos.',
			'Las clases de objetos y los tipos de almacenamiento de bloques y de archivos son todos niveles de precio del mismo servicio, por lo que comparten la misma tarifa por GB y el mismo modelo de acceso.',
			'El almacenamiento de bloques y el de archivos ofrecen las mismas clases de archivo que el de objetos, con idéntico precio por GB y la misma latencia.',
			'El almacenamiento de archivos siempre cuesta más que cualquier clase de archivo de objetos porque replica los datos en todas las regiones de AWS.',
		],
		correctAnswer: 0,
		explanation:
			'Las clases de objetos ordenan el precio por frecuencia de acceso y latencia; el almacenamiento de bloques se paga por capacidad aprovisionada, se use o no, y el de archivos por datos almacenados. Si cambia el requisito y el dato debe montarse como sistema de archivos compartido, la respuesta correcta deja de ser una clase de objetos.',
		porQueOpcion: [
			'Correcta: las clases de objetos ordenan el precio por acceso, el bloque se paga por capacidad aprovisionada y el archivo por datos almacenados.',
			'Incorrecta: no son niveles del mismo servicio ni comparten tarifa por GB ni modelo de acceso.',
			'Incorrecta: el bloque y el archivo no ofrecen las mismas clases de archivo ni idéntico precio o latencia que el objeto.',
			'Incorrecta: el almacenamiento de archivos no replica en todas las regiones ni siempre cuesta más que cualquier clase de archivo de objetos.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/how-aws-pricing-works/welcome.html',
		],
	},
	{
		id: '4.1-q16',
		taskId: '4.1',
		objetivos: ['4.1#5'],
		tipo: 'comparacion',
		question:
			'Dentro de una organización con varias cuentas, ¿qué distingue el comportamiento por defecto del descuento por compromiso de cómputo del comportamiento cuando se desactiva su compartición?',
		options: [
			'Por defecto el descuento se comparte entre todas las cuentas y el sobrante reduce la factura de las demás; si se desactiva, queda limitado a la cuenta compradora.',
			'Por defecto el descuento queda limitado a la cuenta compradora y, al desactivar la compartición, se reparte a partes iguales entre el resto de las cuentas de la organización.',
			'La compartición por defecto solo aplica a las cuentas que usan la misma familia de instancias y la misma región de AWS que la cuenta compradora.',
			'Desactivar la compartición obliga a mover los recursos de las demás cuentas a la cuenta compradora para que el descuento siga aplicándose.',
		],
		correctAnswer: 0,
		explanation:
			'El comportamiento por defecto en una organización es compartir el descuento: cubre primero el uso de la cuenta compradora y el sobrante beneficia a las demás. La cuenta de administración puede desactivar esa compartición, y entonces el beneficio queda en la cuenta compradora. Si cambia la preferencia y se desactiva la compartición, el efecto es justo ese.',
		porQueOpcion: [
			'Correcta: por defecto el descuento se comparte y el sobrante beneficia a las demás cuentas; al desactivarlo queda limitado a la compradora.',
			'Incorrecta: invierte los dos comportamientos, ya que el defecto es compartir y no limitar a la cuenta compradora.',
			'Incorrecta: la compartición no se restringe a la misma familia de instancias ni a la misma región de la cuenta compradora.',
			'Incorrecta: desactivar la compartición no obliga a mover recursos; solo limita el beneficio a la cuenta compradora.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/how-aws-pricing-works/welcome.html',
		],
	},
	{
		id: '4.1-q17',
		taskId: '4.1',
		objetivos: ['4.1#6'],
		tipo: 'comparacion',
		question:
			'¿Qué distingue a la transferencia de datos entrante de la saliente y de la que cruza entre Availability Zones o regiones en la factura?',
		options: [
			'La transferencia entrante desde internet suele ser gratuita, mientras que la saliente hacia internet y el cruce entre Availability Zones o regiones se facturan por GB.',
			'La transferencia entrante hacia AWS se factura por GB y la saliente hacia internet es gratuita, por lo que conviene servir todo el tráfico desde AWS.',
			'Todo el tráfico interno entre recursos de AWS es gratuito, con independencia de que cruce Availability Zones o regiones distintas dentro de la cuenta.',
			'La transferencia entre regiones es gratuita cuando ambos recursos tienen dirección IP pública y solo se cobra el tráfico dentro de la misma Availability Zone de origen.',
		],
		correctAnswer: 0,
		explanation:
			'La entrada de datos a AWS desde internet suele ser gratuita; la salida y el cruce entre AZ o entre regiones se facturan por GB en los extremos que correspondan. Si cambia el diseño y el tráfico interno se concentra en una sola AZ con direcciones privadas, ese cargo de cruce desaparece.',
		porQueOpcion: [
			'Correcta: la entrada desde internet suele ser gratuita y se facturan la salida a internet y el cruce entre AZ o regiones.',
			'Incorrecta: es al revés, la entrada hacia AWS suele ser gratuita y la salida se factura por GB.',
			'Incorrecta: el tráfico interno no es gratuito cuando cruza Availability Zones o regiones distintas.',
			'Incorrecta: la dirección pública no hace gratuito el tráfico entre regiones.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/how-aws-pricing-works/welcome.html',
		],
	},
	{
		id: '4.1-q18',
		taskId: '4.1',
		objetivos: ['4.1#1'],
		tipo: 'casoDeUso',
		question:
			'Un equipo debe elegir cómo pagar el cómputo de un proyecto nuevo con uso imprevisible durante los primeros meses. ¿Qué opción encaja mejor con ese momento del proyecto?',
		options: [
			'On-Demand Instances, porque se paga por uso sin compromiso y se ajusta a un patrón de consumo todavía incierto.',
			'Reserved Instances de tres años, porque maximizan el descuento aunque el uso del proyecto todavía no sea predecible ni estable.',
			'Dedicated Hosts, porque reservan un servidor físico completo y son la opción más económica mientras no se conoce la demanda.',
			'Capacity Reservations, porque garantizan capacidad en una Availability Zone sin pago por adelantado ni coste por capacidad ociosa.',
		],
		correctAnswer: 0,
		explanation:
			'Con uso imprevisible, On-Demand evita comprometer gasto por capacidad que quizá no se consuma y es el precio de referencia. Un compromiso de 1 o 3 años, los Dedicated Hosts y las Capacity Reservations cobran o comprometen capacidad con independencia del uso. Si cambia el requisito y el consumo se vuelve estable y predecible, la respuesta correcta pasaría a un compromiso de 1 o 3 años.',
		porQueOpcion: [
			'Correcta: On-Demand se paga por uso sin compromiso y se ajusta a un patrón de consumo todavía incierto.',
			'Incorrecta: un compromiso de tres años no conviene con uso imprevisible y puede pagarse capacidad que no se consuma.',
			'Incorrecta: los Dedicated Hosts reservan hardware físico completo y son caros, no la opción más económica con demanda desconocida.',
			'Incorrecta: las Capacity Reservations no eliminan el coste por la capacidad ociosa que no se usa.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/how-aws-pricing-works/welcome.html',
		],
	},
	{
		id: '4.1-q19',
		taskId: '4.1',
		objetivos: ['4.1#2'],
		tipo: 'escenario',
		question:
			'Un equipo debe guardar durante años expedientes de consulta muy esporádica y, a la vez, datos de la aplicación que se leen a diario. ¿Qué combinación de clases de almacenamiento de objetos resulta más adecuada?',
		options: [
			'Guardar todo en la clase de archivo más barata, incluidos los datos de acceso diario, para reducir al mínimo el coste de almacenamiento mensual.',
			'Datos de acceso diario en una clase de acceso frecuente y expedientes de consulta esporádica en una clase de archivo alcanzada con una política de ciclo de vida.',
			'Guardar todo en la clase de acceso frecuente, sin políticas de ciclo de vida, porque es la única clase que permite retener datos durante varios años sin perder el acceso inmediato.',
			'Mover los datos de acceso diario a una clase de archivo y los expedientes a almacenamiento de bloques para abaratar la retención prolongada.',
		],
		correctAnswer: 1,
		explanation:
			'Cada patrón de acceso tiene su clase: acceso frecuente para lo que se lee a diario y una clase de archivo, alcanzada con una política de ciclo de vida, para lo que casi no se consulta. Poner todo en archivo encarece las lecturas diarias y no usar ciclo de vida deja en Standard datos que deberían archivar. Si cambia el patrón de acceso, la política de ciclo de vida reajusta la clase automáticamente.',
		porQueOpcion: [
			'Incorrecta: poner los datos de acceso diario en una clase de archivo encarece las lecturas frecuentes.',
			'Correcta: la clase de acceso frecuente sirve lo diario y una clase de archivo con ciclo de vida cubre los expedientes esporádicos.',
			'Incorrecta: dejar todo en acceso frecuente sin ciclo de vida paga de más por los datos que casi no se consultan.',
			'Incorrecta: mover lo diario a archivo y los expedientes a almacenamiento de bloques confunde tipos y empeora el acceso y el coste.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/how-aws-pricing-works/welcome.html',
		],
	},
];
