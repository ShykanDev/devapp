import type { GrupoTematico } from '@/data/clfC02/types';

export const gruposTask41: GrupoTematico[] = [
	{
		id: '4.1-g1',
		titulo: 'Opciones de compra de cómputo y cuándo usarlas',
		objetivos: ['4.1#1', '4.1#3'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'Comprar capacidad de cómputo en la nube no es una sola decisión: es elegir el modelo de pago que encaje con la previsibilidad y la criticidad de la carga. Las opciones principales son:\n\n- **On-Demand Instances**: se paga por el tiempo de uso, sin compromiso ni pago por adelantado. Máxima flexibilidad y precio de lista.\n- **Reserved Instances (RI)**: compromiso de 1 o 3 años sobre atributos de instancia y una región o Availability Zone; a cambio, un descuento de hasta aproximadamente el 72 %. Las **Standard** dan el descuento máximo y no admiten cambios; las **Convertible** permiten intercambiar atributos con un descuento algo menor.\n- **Spot Instances**: capacidad sobrante ofrecida con descuentos de hasta el 90 %, pero interrumpible con dos minutos de aviso. Para cargas tolerantes a fallos.\n- **AWS Savings Plans**: compromiso de un gasto por hora durante 1 o 3 años. Los **Compute Savings Plans** cubren Amazon EC2, AWS Fargate y AWS Lambda en cualquier familia, sistema operativo y región; los **EC2 Instance Savings Plans** se limitan a una familia en una región y dan más descuento.\n- **Dedicated Hosts**: un servidor físico completo reservado para la cuenta, con visibilidad y control de sockets y núcleos, útil para licencias propias (BYOL).\n- **Dedicated Instances**: instancias que corren en hardware dedicado a un único cliente, sin control sobre la ubicación física del host ni facturación por host.\n- **Capacity Reservations**: reservan capacidad en una Availability Zone concreta sin compromiso de plazo; se paga la tarifa On-Demand por la capacidad reservada, se use o no.\n\nLa idea de fondo es intercambiar flexibilidad por descuento: cuanto más te comprometes o más aceptas interrupciones, menos pagas.',
			},
			{
				tipo: 'comparacion',
				parId: 'savings-plans-vs-ri-vs-spot',
			},
			{
				tipo: 'comparacion',
				parId: 'on-demand-vs-dedicated-vs-capacity',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Usa On-Demand Instances para cargas nuevas, imprevisibles, de corta duración o en desarrollo y pruebas.',
					'Usa Reserved Instances o Savings Plans para cargas estables que correrán de forma continua durante uno o más años.',
					'Usa Spot Instances para procesamiento por lotes, renderizado o tareas stateless que toleran una interrupción con aviso.',
					'Usa Dedicated Hosts cuando necesites control del host físico o traer tus propias licencias, y Capacity Reservations cuando debas garantizar capacidad en una Availability Zone concreta.',
				],
				noUsar: [
					'No compres compromisos de 1 o 3 años para cargas que puedes apagar o que aún no conoces: acabarías pagando por capacidad que no usas.',
					'No ejecutes bases de datos transaccionales críticas en Spot Instances: la interrupción con dos minutos de aviso puede cortar el servicio.',
				],
			},
			{
				tipo: 'escenario',
				situacion:
					'Una empresa tiene dos cargas: un servicio web con tráfico estable que corre 24/7 desde hace dos años, y un proceso nocturno de conversión de vídeo que puede reintentarse sin problema si se interrumpe. Quiere reducir la factura sin cambiar la arquitectura.',
				analisis:
					'Para el servicio estable, un compromiso de 1 o 3 años (Reserved Instances o Savings Plans) recorta el precio de forma significativa porque el uso es predecible. Para el proceso nocturno, las Spot Instances aprovechan capacidad sobrante con el mayor descuento y su tolerancia a interrupciones encaja con el reintento.',
				servicio: 'Amazon EC2',
			},
			{
				tipo: 'errorComun',
				error: 'Creer que el compromiso es siempre la opción más barata y contratar Reserved Instances o Savings Plans para cargas esporádicas o que se van a apagar.',
				correccion:
					'El compromiso solo ahorra si el uso se mantiene. En cargas intermitentes o desconocidas, las On-Demand Instances se ajustan mejor al consumo real y evitan pagar por capacidad comprometida sin usar.',
			},
			{
				tipo: 'clave',
				items: [
					'On-Demand = pago por uso, sin compromiso; es el precio de referencia.',
					'Reserved Instances y Savings Plans = compromiso de 1 o 3 años a cambio de descuento.',
					'Spot = mayor descuento, pero la instancia puede interrumpirse.',
					'Dedicated Hosts, Dedicated Instances y Capacity Reservations resuelven aislamiento físico o garantía de capacidad.',
				],
			},
		],
		preguntasGuia: [
			'¿Qué diferencia hay entre reservar descuento y reservar capacidad?',
			'¿Cuándo conviene un compromiso de 1 o 3 años y cuándo no?',
			'¿Qué cargas toleran Spot Instances y cuáles no?',
		],
	},
	{
		id: '4.1-g2',
		titulo: 'Flexibilidad de las Reserved Instances y su comportamiento en AWS Organizations',
		objetivos: ['4.1#4', '4.1#5'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'Una Reserved Instance (RI) no es rígida: su flexibilidad depende del tipo y del alcance.\n\n- **Alcance regional**: una RI regional aplica el descuento a cualquier Availability Zone de la región y no reserva capacidad física.\n- **Alcance zonal**: una RI zonal reserva capacidad en una Availability Zone concreta y su descuento solo aplica allí.\n- **Flexibilidad de tamaño**: dentro de la misma familia, región y sistema operativo Linux/Unix con tenancy compartida, una RI se normaliza y se reparte entre tamaños. Una RI de `m5.large` puede cubrir parte del uso de dos `m5.large` o de un `m5.xlarge`, según el factor de normalización.\n- **Standard frente a Convertible**: las Standard no se modifican ni se intercambian, pero dan el descuento máximo; las Convertible permiten cambiar familia, sistema operativo, tenancy o modalidad de pago por otra Convertible de valor igual o mayor, con un descuento algo menor.\n\nEn **AWS Organizations** el comportamiento es colectivo. La facturación consolidada agrupa a todas las cuentas y, por defecto, las RI y los Savings Plans comprados en cualquier cuenta se **comparten** con las demás: primero cubren el uso de la cuenta que los compró y el descuento sobrante se aplica al resto. La cuenta de administración puede desactivar esa compartición, cuenta por cuenta, en las preferencias de facturación.',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Elige RI regionales cuando quieras que el descuento siga a las instancias, sea cual sea la Availability Zone donde se lancen.',
					'Elige RI Convertible si prevés cambiar de familia, sistema operativo o tenancy dentro del plazo del compromiso.',
					'Deja activada la compartición de RI y Savings Plans en AWS Organizations para que el descuento no usado en una cuenta reduzca la factura de las demás.',
				],
				noUsar: [
					'No esperes que una RI Standard cambie de familia ni de sistema operativo: para eso están las Convertible.',
					'No cuentes con la flexibilidad de tamaño en sistemas operativos distintos de Linux/Unix ni con tenancy dedicada.',
				],
			},
			{
				tipo: 'ejemplo',
				md: '```text\nRI regional de m5.large (Linux/Unix, tenancy compartida)\n  -> cubre m5.large en cualquier Availability Zone de la región\n  -> su tamaño normalizado se reparte: una m5.large cubre la mitad (0,5)\n     de un m5.xlarge, por lo que harían falta dos para cubrirlo entero\n  -> una RI zonal solo cubre la AZ donde se compró\n\nOrganizations con uso compartido\n  cuenta A compra RI -> cubre primero su uso\n  sobra descuento     -> se aplica al uso de la cuenta B\n```',
			},
			{
				tipo: 'errorComun',
				error: 'Comprar RI Standard esperando poder cambiar de familia o de sistema operativo, o asumir que el descuento queda encerrado en la cuenta que lo compró.',
				correccion:
					'Las Standard no se modifican: si necesitas cambiar atributos, la opción es Convertible. Y en AWS Organizations el beneficio se comparte por defecto entre las cuentas, salvo que se desactive esa preferencia.',
			},
		],
		preguntasGuia: [
			'¿Qué puede cambiar una RI Convertible que una Standard no permite?',
			'¿Cómo se reparte el descuento de una RI entre las cuentas de una organización?',
			'¿En qué se diferencian una RI regional y una zonal?',
		],
	},
	{
		id: '4.1-g3',
		titulo: 'Almacenamiento, niveles y costes de transferencia de datos',
		objetivos: ['4.1#2', '4.1#6', '4.1#7'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'Elegir almacenamiento es elegir el nivel de acceso y su coste. En **Amazon S3** las clases ordenan el precio según la frecuencia de acceso y la velocidad de recuperación:\n\n- **S3 Standard**: acceso frecuente, latencia de milisegundos, almacenamiento más caro.\n- **S3 Intelligent-Tiering**: mueve automáticamente los objetos entre niveles según su patrón de acceso.\n- **S3 Standard-IA** y **S3 One Zone-IA**: acceso poco frecuente con almacenamiento más barato, pero con cargo por recuperación; One Zone-IA guarda en una sola Availability Zone.\n- **Amazon S3 Glacier Instant Retrieval**, **Glacier Flexible Retrieval** y **Glacier Deep Archive**: archivo a largo plazo con almacenamiento muy barato y recuperación desde milisegundos hasta horas.\n\nEn **Amazon EBS** se paga por la capacidad aprovisionada mientras el volumen existe, aunque no esté conectado; en **Amazon EFS** se paga por datos almacenados. Las políticas de ciclo de vida mueven objetos entre clases para no pagar precio de acceso frecuente por datos que casi no se leen.',
			},
			{
				tipo: 'concepto',
				md: 'Los costes de transferencia de datos siguen una regla general: entrar es barato, salir cuesta y cruzar fronteras también.\n\n- **Transferencia entrante (incoming)**: mover datos desde internet hacia AWS suele ser gratuita.\n- **Transferencia saliente (outgoing)**: sacar datos hacia internet se factura por GB, con tramos decrecientes.\n- **Entre Availability Zones de la misma región**: el tráfico que cruza de una AZ a otra se cobra por GB en los dos extremos.\n- **Entre regiones**: mover datos de una región a otra también se factura por GB.\n- **Dentro de la misma AZ**: el tráfico entre recursos de la misma AZ con direcciones privadas no genera ese cargo de cruce.\n\nPor eso el diseño importa: colocar en la misma AZ los componentes que más se comunican, o usar un endpoint privado, reduce la factura de red.',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Usa S3 Standard para datos de acceso frecuente y S3 Intelligent-Tiering cuando el patrón de acceso es desconocido o cambiante.',
					'Usa las clases de archivo para datos que deben conservarse mucho tiempo y casi nunca se leen.',
					'Configura políticas de ciclo de vida para que los objetos bajen de nivel de forma automática.',
					'Diseña para que el tráfico entre componentes cercanos no cruce Availability Zones ni regiones si no aporta valor.',
				],
				noUsar: [
					'No dejes en Standard datos que no se leen desde hace meses: pagarías de más por almacenamiento.',
					'No asumas que todo el tráfico de red es gratis: la salida a internet y el cruce de AZ o de región se facturan.',
				],
			},
			{
				tipo: 'escenario',
				situacion:
					'Una empresa conserva registros de auditoría que debe mantener siete años, se consultan solo ante una inspección y hoy están en S3 Standard. Además, dos instancias de la misma aplicación en Availability Zones distintas se envían grandes volúmenes de datos cada noche.',
				analisis:
					'Los registros a largo plazo encajan en una clase de archivo como S3 Glacier Deep Archive, alcanzada con una política de ciclo de vida desde Standard. El tráfico nocturno entre AZ se reduce colocando en la misma Availability Zone los componentes que más colaboran o usando un endpoint, porque el cruce de AZ se cobra por GB en ambos sentidos.',
				servicio: 'Amazon S3',
			},
			{
				tipo: 'errorComun',
				error: 'Pensar que toda la transferencia de datos saliente es gratuita o que los datos guardados en S3 dejan de costar cuando nadie los lee.',
				correccion:
					'La transferencia entrante a AWS suele ser gratuita, pero la saliente a internet y los cruces entre AZ o entre regiones se facturan por GB. Y en S3 se paga por GB almacenado al mes mientras el objeto exista, se lea o no.',
			},
		],
		preguntasGuia: [
			'¿Cómo se ordena el precio entre las clases de almacenamiento de objetos?',
			'¿Qué transferencias de datos se facturan y cuáles no?',
			'¿Cómo ayuda una política de ciclo de vida a reducir la factura?',
		],
	},
];
