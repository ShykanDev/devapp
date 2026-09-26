import type { PreguntaClfC02 } from '@/data/clfC02/types';

export const preguntasTask11: PreguntaClfC02[] = [
	{
		id: '1.1-q1',
		taskId: '1.1',
		objetivos: ['1.1#1'],
		tipo: 'conocimiento',
		question: '¿Qué significa que la nube de AWS convierta gasto fijo en gasto variable?',
		options: [
			'Que la empresa compra la capacidad por adelantado y la amortiza durante varios años.',
			'Que la capacidad se dimensiona una vez para el pico y se mantiene después.',
			'Que el gasto sigue al consumo real y no exige inversión inicial en infraestructura.',
			'Que el precio unitario de cada servicio permanece constante aunque cambie el uso.',
		],
		correctAnswer: 2,
		explanation:
			'El gasto variable sigue al consumo: si el recurso no se usa, no se paga, y no hay inversión inicial en servidores. Las otras opciones describen justo el modelo contrario (capex), una capacidad fija dimensionada para el pico o un precio que no depende del uso. Si el requisito exigiera capacidad reservada y pagada por adelantado, el gasto volvería a comportarse en parte como fijo (Reserved Instances o Savings Plans).',
		porQueOpcion: [
			'Incorrecta: comprar capacidad por adelantado y amortizarla es el modelo de gasto fijo (capex) que la nube sustituye.',
			'Incorrecta: dimensionar una sola vez para el pico deja capacidad ociosa y mantiene el gasto acoplado a la inversión, no al consumo.',
			'Correcta: el gasto variable sigue al consumo real y evita la inversión inicial en infraestructura.',
			'Incorrecta: que el precio unitario sea constante no convierte el gasto en variable, que depende del uso y no de la tarifa.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/global-infrastructure.html',
		],
	},
	{
		id: '1.1-q2',
		taskId: '1.1',
		objetivos: ['1.1#1'],
		tipo: 'escenario',
		question:
			'Una empresa, aunque su presupuesto sea limitado, compra servidores cada tres años para cubrir su pico de tráfico y el resto del tiempo los mantiene infrautilizados. ¿Qué beneficio de la nube de AWS responde directamente a ese problema?',
		options: [
			'La posibilidad de fijar de antemano el precio de los servicios y evitar cualquier sorpresa en la factura mensual.',
			'El pago por uso con capacidad ajustada a la demanda, que evita la capacidad ociosa.',
			'La obligación de mantener el mismo número de servidores siempre encendidos.',
			'El traslado de todo el gasto a una única factura mensual consolidada.',
		],
		correctAnswer: 1,
		explanation:
			'La capacidad ociosa desaparece cuando se paga solo por lo consumido y la capacidad sigue a la demanda. Ese es el beneficio central de la propuesta de valor frente al modelo de compra para el pico. Si el requisito fuera solo fijar los precios de antemano, no se resolvería el problema de la capacidad infrautilizada que describe el escenario.',
		porQueOpcion: [
			'Incorrecta: fijar precios de antemano no elimina la capacidad ociosa, que es el problema del escenario.',
			'Correcta: el pago por uso ajusta la capacidad a la demanda y evita la capacidad ociosa del pico.',
			'Incorrecta: mantener siempre el mismo número de servidores encendidos reproduce el sobredimensionamiento que se quiere evitar.',
			'Incorrecta: consolidar la factura es una ventaja de gestión de costes, no una solución a la infrautilización.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/global-infrastructure.html',
		],
	},
	{
		id: '1.1-q3',
		taskId: '1.1',
		objetivos: ['1.1#2'],
		tipo: 'conocimiento',
		question:
			'¿Qué beneficios aporta la infraestructura global de AWS a la hora de lanzar una aplicación?',
		options: [
			'Que permite desplegar en minutos en la región adecuada y servir a usuarios de varios continentes.',
			'Que garantiza que la aplicación no sufre ninguna interrupción, en ninguna región, durante todo el año.',
			'Que distribuye automáticamente los datos entre todos los países donde hay usuarios registrados.',
			'Que abarata el coste porque los recursos se compran a escala mundial.',
		],
		correctAnswer: 0,
		explanation:
			'La infraestructura global aporta velocidad de despliegue (recursos en minutos) y alcance global (cobertura geográfica amplia). «No sufrir interrupciones» es alta disponibilidad, «distribuir datos por países» es una decisión de residencia y replicación que el cliente toma, y el descuento por escala es economía de la nube, no infraestructura global. Si el requisito fuera residencia de datos, la respuesta correcta pasaría a ser elegir y fijar la Región.',
		porQueOpcion: [
			'Correcta: la infraestructura global permite desplegar en minutos en la región adecuada y atender usuarios de varios continentes.',
			'Incorrecta: la ausencia total de interrupciones es alta disponibilidad, no un beneficio garantizado de la infraestructura global.',
			'Incorrecta: la distribución de datos entre países es una decisión de residencia y replicación del cliente, no algo automático.',
			'Incorrecta: el menor coste por escala es una economía de la nube, no un beneficio geográfico de la infraestructura global.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/global-infrastructure.html',
		],
	},
	{
		id: '1.1-q4',
		taskId: '1.1',
		objetivos: ['1.1#2'],
		tipo: 'servicio',
		question:
			'Un equipo quiere acercar las descargas de contenido a usuarios repartidos por el mundo. ¿Qué componente de la infraestructura global aprovecha?',
		options: [
			'Una Availability Zone aislada dentro de la Región donde corre la aplicación.',
			'Un volumen de almacenamiento replicado de forma automática entre varias Regiones cercanas.',
			'Un plan de compra con descuento por compromiso de uso.',
			'Una ubicación de borde (edge location) que entrega el contenido cerca del usuario.',
		],
		correctAnswer: 3,
		explanation:
			'Las ubicaciones de borde acercan la entrega de contenido al usuario y reducen la latencia. Una Availability Zone aísla fallos dentro de una Región, la replicación entre Regiones protege el dato y busca continuidad, y el descuento por compromiso afecta al precio, no a la cercanía. Si el requisito fuera aislar la carga frente al fallo de una zona, la respuesta sería desplegar en varias Availability Zones.',
		porQueOpcion: [
			'Incorrecta: una Availability Zone aísla fallos dentro de una Región, pero no acerca el contenido a usuarios repartidos por el mundo.',
			'Incorrecta: replicar un volumen entre Regiones protege el dato y busca continuidad, no la entrega cercana al usuario.',
			'Incorrecta: el descuento por compromiso de uso afecta al precio, no a la latencia de entrega.',
			'Correcta: la ubicación de borde entrega el contenido cerca del usuario y reduce la latencia.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/global-infrastructure.html',
		],
	},
	{
		id: '1.1-q5',
		taskId: '1.1',
		objetivos: ['1.1#3'],
		tipo: 'conocimiento',
		question: '¿Qué describe mejor la elasticidad en la nube de AWS?',
		options: [
			'Mantener el servicio operativo y sin interrupciones cuando falla por completo una zona.',
			'Ajustar la capacidad de forma automática a la demanda, creciendo y decreciendo.',
			'Crear recursos en varios continentes a la vez.',
			'Reducir la factura mediante descuentos por volumen contratado.',
		],
		correctAnswer: 1,
		explanation:
			'La elasticidad ajusta la capacidad al volumen de trabajo: se añaden recursos cuando sube la demanda y se retiran cuando baja. Mantener el servicio ante fallos es alta disponibilidad, no elasticidad. Si el requisito fuera resistir el fallo de una zona, la respuesta correcta sería la alta disponibilidad.',
		porQueOpcion: [
			'Incorrecta: seguir operando ante el fallo de una zona es alta disponibilidad, no elasticidad.',
			'Correcta: la elasticidad ajusta automáticamente la capacidad a la demanda, creciendo y decreciendo.',
			'Incorrecta: crear recursos en varios continentes es alcance global, no elasticidad.',
			'Incorrecta: los descuentos por volumen son coste y precio, no ajuste automático de capacidad.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/global-infrastructure.html',
		],
	},
	{
		id: '1.1-q6',
		taskId: '1.1',
		objetivos: ['1.1#3'],
		tipo: 'comparacion',
		question:
			'Un equipo debate tres ventajas de la nube. ¿Qué afirmación distingue correctamente alta disponibilidad, elasticidad y agilidad?',
		options: [
			'Las tres significan lo mismo: crecer en capacidad cuando hay más usuarios.',
			'La alta disponibilidad evita interrupciones ante fallos, la elasticidad ajusta la capacidad a la demanda y la agilidad acelera la creación y el cambio.',
			'La agilidad mide el tiempo de actividad y de funcionamiento; la elasticidad, el número de regiones desplegadas; y la alta disponibilidad, el precio por hora de los recursos.',
			'La elasticidad garantiza la continuidad; la alta disponibilidad reduce el tiempo de innovación.',
		],
		correctAnswer: 1,
		explanation:
			'Cada ventaja responde a un problema distinto: alta disponibilidad = seguir operando pese a fallos; elasticidad = capacidad según la demanda; agilidad = velocidad para crear, probar y cambiar. Si el escenario pidiera las tres por separado, igual que aquí, conviene definirlas sin mezclarlas.',
		porQueOpcion: [
			'Incorrecta: las tres ventajas responden a problemas distintos, no son sinónimos de crecer en capacidad.',
			'Correcta: distingue bien alta disponibilidad ante fallos, elasticidad según demanda y agilidad para crear y cambiar.',
			'Incorrecta: invierte las definiciones y atribuye a la elasticidad el número de regiones y a la alta disponibilidad el precio.',
			'Incorrecta: intercambia los papeles: la continuidad es alta disponibilidad y la velocidad de innovación es agilidad.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/global-infrastructure.html',
		],
	},
	{
		id: '1.1-q7',
		taskId: '1.1',
		objetivos: ['1.1#3'],
		tipo: 'escenario',
		question:
			'Una tienda en línea recibe un pico de tráfico durante una campaña y luego vuelve al nivel habitual, sin embargo la latencia se mantiene estable todo el año. ¿Qué ventaja de la nube responde mejor a esa situación?',
		options: [
			'La agilidad, porque permite rediseñar la aplicación durante la campaña y publicar mejoras en plena promoción.',
			'La elasticidad, porque la capacidad crece con la demanda y se reduce al bajar el tráfico.',
			'La alta disponibilidad, porque garantiza que la campaña no se interrumpa.',
			'Las economías de escala, porque reparten el coste entre todos los clientes.',
		],
		correctAnswer: 1,
		explanation:
			'Un pico temporal seguido de un valle es el caso típico de elasticidad: ajustar la capacidad al uso. La alta disponibilidad se ocupa de los fallos y la agilidad, de la velocidad de cambio. Si el requisito fuera evitar cortes durante la campaña, la respuesta sería la alta disponibilidad.',
		porQueOpcion: [
			'Incorrecta: la agilidad permite rediseñar y publicar cambios, no absorber por sí sola un pico temporal de tráfico.',
			'Correcta: la elasticidad crece con la demanda y se reduce al bajar el tráfico, encajando con el pico de la campaña.',
			'Incorrecta: la alta disponibilidad protege frente a fallos, no dimensiona la capacidad para un pico de demanda.',
			'Incorrecta: las economías de escala reducen el precio unitario, no ajustan la capacidad al pico temporal.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/global-infrastructure.html',
		],
	},
	{
		id: '1.1-q8',
		taskId: '1.1',
		objetivos: ['1.1#1'],
		tipo: 'casoDeUso',
		question:
			'¿Cuál de los siguientes escenarios ilustra mejor la propuesta de valor de la nube de AWS frente a un centro de datos propio?',
		options: [
			'Provisionar recursos en minutos, pagar por uso y ajustar la capacidad a la demanda.',
			'Comprar capacidad para el pico y mantenerla contratada aunque el proyecto se cancele.',
			'Construir un centro de datos en cada país donde haya clientes.',
			'Trasladar todo el gasto a una única factura mensual consolidada.',
		],
		correctAnswer: 0,
		explanation:
			'La propuesta de valor combina velocidad de aprovisionamiento, pago por uso y ajuste a la demanda. Comprar capacidad para el pico o construir centros de datos reproduce el modelo que la nube evita, y consolidar la factura es una ventaja de gestión de costes, no la propuesta de valor. Si el escenario pidiera demostrar solo la reducción de esfuerzo operativo, la respuesta seguiría siendo la nube, pero el foco sería la operación delegada y no la elasticidad.',
		porQueOpcion: [
			'Correcta: combina velocidad de aprovisionamiento, pago por uso y ajuste a la demanda, el núcleo de la propuesta de valor.',
			'Incorrecta: comprar capacidad para el pico y mantenerla reproduce el modelo on-premises que la nube evita.',
			'Incorrecta: construir centros de datos en cada país es justo la infraestructura propia que se quiere eliminar.',
			'Incorrecta: consolidar la factura es una ventaja de gestión de costes, no la propuesta de valor de la nube.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/global-infrastructure.html',
		],
	},
	{
		id: '1.1-q9',
		taskId: '1.1',
		objetivos: ['1.1#2'],
		tipo: 'escenario',
		question:
			'Un equipo necesita lanzar su producto en varios países en semanas, sin abrir infraestructura en cada uno. ¿Qué característica de la infraestructura global de AWS lo hace posible?',
		options: [
			'Que cada país exige un centro de datos propio.',
			'Que las regiones repartidas por el mundo permiten desplegar rápido y atender a usuarios lejanos.',
			'Que los datos solo pueden residir en un único país.',
			'Que la entrega de contenido depende sobre todo de la ubicación geográfica del equipo de desarrollo.',
		],
		correctAnswer: 1,
		explanation:
			'La cobertura de regiones en todo el mundo permite desplegar en poco tiempo y servir a usuarios de otros países sin construir infraestructura propia. Eso resume velocidad de despliegue y alcance global. Si el requisito fuera que los datos residan en un país concreto, la decisión se centraría en elegir la región adecuada para cumplir esa normativa.',
		porQueOpcion: [
			'Incorrecta: la nube evita precisamente tener que abrir un centro de datos propio en cada país.',
			'Correcta: las Regiones repartidas por el mundo permiten desplegar rápido y servir a usuarios lejanos sin infraestructura propia.',
			'Incorrecta: los datos pueden residir en la región que elija el cliente; no hay una restricción a un único país.',
			'Incorrecta: la ubicación del equipo de desarrollo no determina la entrega del contenido, que usan las ubicaciones de borde.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/global-infrastructure.html',
		],
	},
	{
		id: '1.1-q10',
		taskId: '1.1',
		objetivos: ['1.1#2'],
		tipo: 'comparacion',
		question:
			'Un equipo debe justificar dos beneficios distintos de la infraestructura global de AWS: uno relacionado con el tiempo de puesta en producción y otro con la cobertura geográfica. ¿Qué afirmación los distingue correctamente?',
		options: [
			'La velocidad de despliegue acorta el tiempo para poner recursos en producción y el alcance global permite servir a usuarios de varias geografías.',
			'La velocidad de despliegue mide cuántos países cubre la plataforma y el alcance global mide lo rápido que se aprovisiona cada recurso en la región elegida.',
			'Ambos describen la misma ventaja: repartir el tráfico entre varias Availability Zones para no depender de una sola zona.',
			'La velocidad de despliegue depende del modelo de pago por uso y el alcance global depende del cifrado de los datos en reposo.',
		],
		correctAnswer: 0,
		explanation:
			'La velocidad de despliegue y el alcance global son beneficios distintos de la misma infraestructura: el primero mide el tiempo de puesta en marcha y el segundo, la cobertura geográfica. Invertir las definiciones, reducir ambos a la redundancia entre zonas o atribuirlos al pago por uso y al cifrado son confusiones frecuentes. Si el requisito fuera únicamente cubrir varios continentes, la respuesta se centraría en el alcance global y no en la velocidad de aprovisionamiento.',
		porQueOpcion: [
			'Correcta: distingue la velocidad de puesta en producción del alcance geográfico, que son los dos beneficios pedidos.',
			'Incorrecta: invierte ambas definiciones: la velocidad no mide países ni el alcance global mide rapidez de aprovisionamiento.',
			'Incorrecta: repartir tráfico entre zonas es alta disponibilidad, no la suma de velocidad de despliegue y alcance global.',
			'Incorrecta: el pago por uso y el cifrado en reposo no definen ni la velocidad de despliegue ni la cobertura geográfica.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/global-infrastructure.html',
		],
	},
];
