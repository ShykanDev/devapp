import type { PreguntaClfC02 } from '@/data/clfC02/types';

export const preguntasTask14: PreguntaClfC02[] = [
	{
		id: '1.4-q1',
		taskId: '1.4',
		objetivos: ['1.4#1'],
		tipo: 'conocimiento',
		question: '¿Qué abarca la economía de la nube como concepto?',
		options: [
			'Únicamente el precio por hora de las instancias de cómputo y el precio por GB almacenado y descargado en la nube.',
			'El cambio en la estructura de costes al pasar de inversión fija on-premises a gasto variable ligado al consumo.',
			'La cantidad de servicios que ofrece un proveedor de nube.',
			'El número de regiones disponibles para desplegar una aplicación.',
		],
		correctAnswer: 1,
		explanation:
			'La economía de la nube estudia cómo cambia la estructura de costes: se sustituye buena parte del capex por opex ligado al uso, se elimina la capacidad ociosa y se aprovechan las economías de escala del proveedor. Si el requisito fuera solo conocer una tarifa, sería un análisis de precios y no de economía de la nube.',
		porQueOpcion: [
			'Incorrecta: una tarifa concreta es un análisis de precios, no la economía de la nube como concepto.',
			'Correcta: describe el paso de inversión fija on-premises a gasto variable ligado al consumo, núcleo de la economía de la nube.',
			'Incorrecta: la cantidad de servicios ofrecidos no define cómo cambia la estructura de costes.',
			'Incorrecta: el número de regiones es alcance geográfico, no economía de la nube.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/how-aws-pricing-works/welcome.html',
		],
	},
	{
		id: '1.4-q2',
		taskId: '1.4',
		objetivos: ['1.4#3'],
		tipo: 'comparacion',
		question:
			'En términos de economía de la nube, ¿qué distingue un coste fijo de un coste variable?',
		options: [
			'El fijo depende del consumo real de cada recurso y el variable se paga una sola vez por adelantado al proveedor.',
			'El fijo se paga por adelantado y no cambia con el uso; el variable se factura según el consumo real.',
			'El fijo solo existe en la nube y el variable solo on-premises.',
			'Ambos se pagan por hora y solo cambian de nombre según el proveedor.',
		],
		correctAnswer: 1,
		explanation:
			'El coste fijo (capex) se decide antes de conocer la demanda y se paga aunque el recurso no se use; el variable (opex) sigue al consumo. On-premises concentra costes fijos e indirectos, mientras la nube convierte buena parte de ese gasto en variable. Si el escenario pidiera distinguir los costes indirectos del centro de datos, seguiría siendo una comparación entre fijo y variable.',
		porQueOpcion: [
			'Incorrecta: invierte los conceptos: el fijo no depende del consumo ni el variable se paga por adelantado.',
			'Correcta: el coste fijo se paga por adelantado y no varía con el uso; el variable se factura según el consumo real.',
			'Incorrecta: el coste fijo domina on-premises y el variable es característico de la nube, no al contrario.',
			'Incorrecta: no son el mismo coste con distinto nombre: difieren en si dependen o no del consumo.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/how-aws-pricing-works/welcome.html',
		],
	},
	{
		id: '1.4-q3',
		taskId: '1.4',
		objetivos: ['1.4#4'],
		tipo: 'escenario',
		question:
			'Una empresa compara su centro de datos propio con mover la carga a la nube. ¿Qué costes debe incluir al calcular el coste del entorno on-premises?',
		options: [
			'Solo el precio de compra de los servidores.',
			'El hardware, la energía, la refrigeración, el espacio, el personal de mantenimiento y la capacidad ociosa.',
			'Únicamente las licencias de software y la conexión de red, porque el resto de costes son propios de la nube.',
			'Solo la conexión a internet, ya que el resto lo cubre el proveedor.',
		],
		correctAnswer: 1,
		explanation:
			'El coste on-premises es mayor que el precio del hardware: suma energía, refrigeración, espacio físico, personal, seguridad y la capacidad comprada para el pico que queda sin usar. Ignorar esos costes indirectos lleva a conclusiones erróneas sobre el ahorro de migrar. Si el requisito fuera comparar solo el precio del hardware, se infravaloraría el coste total del entorno propio.',
		porQueOpcion: [
			'Incorrecta: quedarse en el precio de compra omite energía, refrigeración, personal y capacidad ociosa.',
			'Correcta: el coste on-premises incluye hardware, energía, refrigeración, espacio, personal y la capacidad ociosa del pico.',
			'Incorrecta: licencias y red son solo parte del gasto; el centro de datos asume muchos más costes.',
			'Incorrecta: la conexión a internet es una partida mínima y el proveedor no cubre los costes del entorno propio.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/how-aws-pricing-works/welcome.html',
		],
	},
	{
		id: '1.4-q4',
		taskId: '1.4',
		objetivos: ['1.4#2'],
		tipo: 'conocimiento',
		question:
			'¿Cuál es una razón por la que migrar a la nube puede reducir el coste total frente a operar un centro de datos propio?',
		options: [
			'Porque en la nube desaparecen por completo todos los costes variables de la infraestructura y del personal interno.',
			'Porque se evita comprar capacidad para el pico y se dejan de asumir costes indirectos de la sala y el hardware.',
			'Porque las licencias de software dejan de ser necesarias.',
			'Porque la nube garantiza el precio más bajo para cualquier carga sin analizar el uso.',
		],
		correctAnswer: 1,
		explanation:
			'La migración reduce capex, elimina la capacidad ociosa y descarga costes indirectos como energía, refrigeración, espacio y mantenimiento. No elimina los costes variables ni las licencias, y el ahorro depende de ajustar el consumo. Si el requisito fuera no pagar nunca por capacidad ociosa, la clave seguiría siendo el ajuste de capacidad y el pago por uso.',
		porQueOpcion: [
			'Incorrecta: la nube introduce costes variables de consumo; no los elimina ni suprime todo el personal interno.',
			'Correcta: evitar capacidad para el pico y los costes indirectos de sala y hardware reduce el coste total.',
			'Incorrecta: las licencias de software siguen siendo necesarias y su coste no desaparece solo por migrar.',
			'Incorrecta: el ahorro depende de ajustar el uso; la nube no garantiza el precio más bajo sin analizarlo.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/how-aws-pricing-works/welcome.html',
		],
	},
	{
		id: '1.4-q5',
		taskId: '1.4',
		objetivos: ['1.4#8'],
		tipo: 'conocimiento',
		question: '¿Qué significa que la nube se beneficie de economías de escala?',
		options: [
			'Que cada cliente debe comprar por su cuenta el mismo volumen de hardware que los demás clientes para poder obtener descuentos por volumen.',
			'Que el proveedor opera a gran volumen y reparte ese coste de compra y operación entre muchos clientes, logrando un precio unitario menor.',
			'Que el precio de los servicios sube a medida que crece el uso.',
			'Que solo las empresas grandes, con mucho volumen propio, pueden acceder a los servicios de nube.',
		],
		correctAnswer: 1,
		explanation:
			'Las economías de escala surgen porque el proveedor compra y opera a un volumen muy superior al de cualquier cliente y reparte ese coste agregado. El resultado es una tarifa por unidad más baja que la que alcanzaría un centro de datos pequeño. Si el requisito fuera entender por qué el precio unitario baja, la clave son las economías de escala del proveedor.',
		porQueOpcion: [
			'Incorrecta: el cliente no compra hardware ni lo hace por su cuenta; esa es la premisa del modelo que la nube evita.',
			'Correcta: el proveedor compra y opera a gran volumen y reparte ese coste entre muchos clientes, bajando el precio unitario.',
			'Incorrecta: las economías de escala tienden a reducir el coste unitario, no a subirlo con el uso.',
			'Incorrecta: las economías de escala del proveedor benefician también a clientes pequeños.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/how-aws-pricing-works/welcome.html',
		],
	},
	{
		id: '1.4-q6',
		taskId: '1.4',
		objetivos: ['1.4#6'],
		tipo: 'escenario',
		question:
			'Un equipo observa que sus servidores usan menos del 10 % de CPU durante casi todo el mes, aunque la factura mensual sigue siendo la misma. ¿Qué medida de rightsizing es adecuada?',
		options: [
			'Aumentar el tamaño de las instancias para mejorar el rendimiento aunque el uso siga siendo bajo.',
			'Reducir el tamaño de los recursos para ajustarlos a la carga real y seguir midiendo el uso.',
			'Comprar más servidores para repartir la carga.',
			'Ignorar la métrica, porque el uso bajo no tiene impacto en el coste.',
		],
		correctAnswer: 1,
		explanation:
			'El uso muy por debajo de la capacidad indica recursos sobredimensionados: el right-sizing consiste en reducirlos a un tamaño acorde con la carga real y revisar periódicamente las métricas. Un recurso infrautilizado se paga completo aunque se aproveche una fracción. Si el escenario fuera un uso alto y sostenido, reducir el tamaño sería contraproducente.',
		porQueOpcion: [
			'Incorrecta: aumentar el tamaño de recursos ya infrautilizados agrava el sobredimensionamiento.',
			'Correcta: con uso muy por debajo de la capacidad, el right-sizing reduce el tamaño a la carga real y sigue midiendo.',
			'Incorrecta: añadir más servidores multiplica la capacidad ociosa en lugar de ajustarla.',
			'Incorrecta: el uso bajo tiene impacto directo en el coste, porque un recurso infrautilizado se paga completo.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/how-aws-pricing-works/welcome.html',
		],
	},
	{
		id: '1.4-q7',
		taskId: '1.4',
		objetivos: ['1.4#7'],
		tipo: 'conocimiento',
		question: '¿Cómo contribuye la automatización a reducir costes en la nube?',
		options: [
			'Elimina por completo la necesidad de medir el consumo y el gasto de todos los recursos desplegados en la cuenta.',
			'Reduce trabajo manual repetitivo y evita que recursos como los entornos de prueba queden encendidos por olvido.',
			'Sustituye las licencias de software por licencias incluidas.',
			'Garantiza que la factura no cambie de un mes a otro.',
		],
		correctAnswer: 1,
		explanation:
			'Automatizar el encendido y apagado, el escalado y los cambios reproducibles quita trabajo manual y evita pagar recursos ociosos que nadie apagó. La automatización no sustituye la medición del consumo ni fija la factura. Si el requisito fuera evitar olvidos de apagado, la automatización es la medida directa.',
		porQueOpcion: [
			'Incorrecta: la automatización no elimina la necesidad de medir el consumo; apoya su control.',
			'Correcta: reduce trabajo manual repetitivo y evita que recursos como los entornos de prueba queden encendidos por olvido.',
			'Incorrecta: la automatización no sustituye licencias ni convierte las propias en incluidas.',
			'Incorrecta: la factura sigue dependiendo del consumo; la automatización no la fija.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/how-aws-pricing-works/welcome.html',
		],
	},
	{
		id: '1.4-q8',
		taskId: '1.4',
		objetivos: ['1.4#5'],
		tipo: 'tradeoff',
		question:
			'Una empresa ya posee licencias de software y evalúa cómo usarlas en la nube. ¿Qué compara correctamente BYOL con las licencias incluidas?',
		options: [
			'BYOL obliga a pagar de nuevo la licencia al proveedor, mientras que la licencia incluida reutiliza la que la empresa ya tenía comprada y amortizada antes de migrar.',
			'BYOL reutiliza las licencias propias y se paga solo la infraestructura; la licencia incluida lleva su coste dentro del precio del servicio y simplifica la gestión.',
			'Las dos opciones son idénticas en coste total y en esfuerzo de gestión para la organización.',
			'Las licencias incluidas siempre salen más baratas que BYOL.',
		],
		correctAnswer: 1,
		explanation:
			'BYOL (Bring Your Own License) aprovecha licencias ya adquiridas y factura solo la infraestructura, a cambio de gestionar el cumplimiento y los términos. La licencia incluida evita esa gestión porque su coste va dentro del servicio, lo que puede ser más caro si ya se tenían licencias propias. Ninguna es siempre más barata. Si el requisito fuera simplificar la gestión sin licencias propias, encajarían las licencias incluidas.',
		porQueOpcion: [
			'Incorrecta: invierte los modelos: BYOL reutiliza las licencias propias y la incluida las aporta el proveedor.',
			'Correcta: BYOL aprovecha licencias ya adquiridas pagando solo la infraestructura, e incluida integra el coste en el servicio.',
			'Incorrecta: no son idénticas: difieren en coste total y en el esfuerzo de gestión del cumplimiento.',
			'Incorrecta: ninguna es siempre más barata; si ya se tienen licencias propias, BYOL puede salir mejor.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/how-aws-pricing-works/welcome.html',
		],
	},
	{
		id: '1.4-q9',
		taskId: '1.4',
		objetivos: ['1.4#2'],
		tipo: 'escenario',
		question:
			'Una empresa decide migrar a la nube y espera un ahorro automático. Tras el primer mes la factura es similar a la anterior. ¿Qué explica mejor la situación?',
		options: [
			'La nube nunca reduce los costes frente a un centro de datos propio, ni siquiera ajustando bien el dimensionado de los recursos.',
			'El ahorro no es automático: hace falta ajustar tamaños, apagar lo que no se usa y elegir modelos de precio acordes al consumo.',
			'El proveedor aplica un recargo fijo durante el primer año.',
			'El coste variable siempre supera al coste fijo.',
		],
		correctAnswer: 1,
		explanation:
			'Migrar traslada la estructura de costes, pero el ahorro depende de prácticas como right-sizing, apagado de recursos ociosos, automatización y elección del modelo de precio. Sin ese trabajo, la factura puede parecerse a la del centro de datos anterior. Si el escenario fuera un uso estable y predecible, un compromiso de reserva ayudaría, pero no sustituye el ajuste del consumo.',
		porQueOpcion: [
			'Incorrecta: la nube sí puede reducir costes cuando se ajusta el dimensionado y el consumo.',
			'Correcta: el ahorro exige right-sizing, apagar recursos ociosos y elegir modelos de precio acordes al consumo.',
			'Incorrecta: no existe un recargo fijo de primer año; la factura similar se debe a la falta de optimización.',
			'Incorrecta: no hay una regla de que el variable supere siempre al fijo; depende del uso y del dimensionado.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/how-aws-pricing-works/welcome.html',
		],
	},
	{
		id: '1.4-q10',
		taskId: '1.4',
		objetivos: ['1.4#1'],
		tipo: 'escenario',
		question:
			'Una dirección pide comparar el modelo económico de su centro de datos con el de AWS antes de decidir. ¿Qué análisis responde mejor a esa petición?',
		options: [
			'Comparar el modelo de gasto (fijo frente a variable), el coste total de propiedad y otros factores relevantes.',
			'Comparar solo la tarifa por hora de cómputo y el precio por GB de almacenamiento que cada proveedor publica en su lista de precios.',
			'Comparar el número de servidores disponibles en cada entorno y su antigüedad media.',
			'Comparar la factura del último mes de AWS con el presupuesto anual aprobado.',
		],
		correctAnswer: 0,
		explanation:
			'La economía de la nube analiza la estructura de costes completa: qué parte del gasto es fija, qué parte variable y cómo cambia el coste total de propiedad, además de factores cualitativos como la operación o la agilidad. Quedarse en la tarifa unitaria, en el inventario de servidores o en una factura aislada omite partidas y conduce a decisiones sesgadas. Si el requisito fuera solo estimar el precio mensual de una configuración concreta, la herramienta sería una calculadora de precios.',
		porQueOpcion: [
			'Correcta: analiza el modelo de gasto fijo frente a variable, el coste total de propiedad y factores cualitativos.',
			'Incorrecta: comparar solo tarifas unitarias omite el TCO y las partidas indirectas de cada modelo.',
			'Incorrecta: el inventario de servidores no refleja la estructura de costes ni el coste total de propiedad.',
			'Incorrecta: una factura aislada no representa el modelo económico completo de cada entorno.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/how-aws-pricing-works/welcome.html',
		],
	},
	{
		id: '1.4-q11',
		taskId: '1.4',
		objetivos: ['1.4#3'],
		tipo: 'escenario',
		question:
			'Una empresa calcula cuánto le cuesta cada hora de cómputo en su centro de datos y descubre que su proveedor de nube se la cobra solo cuando la usa. ¿Qué diferencia del modelo de costes ilustra la situación?',
		options: [
			'Que en la nube el gasto se vuelve variable y sigue al consumo, mientras que en on-premises domina el coste fijo.',
			'Que en la nube todos los costes son fijos porque los recursos se contratan por adelantado mediante compromisos anuales.',
			'Que en on-premises el coste es variable porque depende del número de empleados.',
			'Que ambos modelos facturan igual y solo cambia la moneda de pago.',
		],
		correctAnswer: 0,
		explanation:
			'El pago por horas consumidas convierte el gasto en variable: si no se usa el recurso, no se factura. En un centro de datos propio, en cambio, el hardware y las instalaciones se pagan con independencia del uso, por lo que dominan los costes fijos. Decir que todo es fijo o que ambos modelos facturan igual invierte la distinción. Si el requisito fuera pagar menos por un uso estable y predecible, seguiría siendo válido un compromiso de reserva, pero el modelo base continúa siendo variable.',
		porQueOpcion: [
			'Correcta: el pago por uso convierte el gasto en variable, mientras que on-premises dominan los costes fijos.',
			'Incorrecta: los compromisos de reserva son opcionales y no convierten en fijos todos los costes de la nube.',
			'Incorrecta: el coste on-premises no es variable por el número de empleados; dominan los costes fijos.',
			'Incorrecta: los modelos no facturan igual: uno sigue el consumo y el otro se paga con independencia del uso.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/how-aws-pricing-works/welcome.html',
		],
	},
	{
		id: '1.4-q12',
		taskId: '1.4',
		objetivos: ['1.4#4'],
		tipo: 'conocimiento',
		question: '¿Qué caracteriza a los costes de un entorno on-premises frente a la nube?',
		options: [
			'Concentran inversión fija e indirectos como energía, refrigeración, espacio y personal, que se pagan aunque la capacidad quede ociosa.',
			'Dependen del consumo horario de cada máquina y desaparecen por completo cuando no hay usuarios conectados a la aplicación ni tráfico en la red.',
			'Se limitan al precio de compra del hardware y no incluyen instalaciones ni mantenimiento.',
			'Se facturan por GB transferido y por número de peticiones atendidas.',
		],
		correctAnswer: 0,
		explanation:
			'El entorno propio acumula costes fijos e indirectos —hardware, energía, refrigeración, espacio y personal— que existen aunque no haya carga, además de la capacidad comprada para el pico. La facturación por consumo horario o por peticiones es propia de la nube, y reducir el coste al precio del hardware ignora la mayor parte del gasto. Si el escenario pidiera estimar el coste total de propiedad, habría que sumar también el mantenimiento y la renovación periódica.',
		porQueOpcion: [
			'Correcta: el entorno propio acumula inversión fija e indirectos que se pagan aunque la capacidad quede ociosa.',
			'Incorrecta: la facturación por consumo horario es propia de la nube, no de un centro de datos propio.',
			'Incorrecta: reducir el coste al precio del hardware ignora instalaciones, energía y mantenimiento.',
			'Incorrecta: facturar por GB o por peticiones describe modelos de nube, no los costes on-premises.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/how-aws-pricing-works/welcome.html',
		],
	},
	{
		id: '1.4-q13',
		taskId: '1.4',
		objetivos: ['1.4#7'],
		tipo: 'escenario',
		question:
			'Un equipo apaga a mano los entornos de desarrollo cada noche, pero a veces olvida hacerlo el fin de semana y esos recursos siguen facturando. ¿Qué medida aprovecha mejor los beneficios de la automatización?',
		options: [
			'Programar el apagado y encendido automático de esos entornos según un horario, sin depender de que alguien lo recuerde.',
			'Contratar más personal de guardia para revisar cada noche que todos los entornos de desarrollo quedan apagados y liberados.',
			'Migrar los entornos a un tipo de instancia más pequeño y mantenerlos encendidos todo el tiempo.',
			'Reservar capacidad por un año para bajar la tarifa de esos entornos de desarrollo.',
		],
		correctAnswer: 0,
		explanation:
			'La automatización aplica la misma acción de forma repetible y elimina el error humano: programar el apagado evita que los recursos queden encendidos por olvido, que es la causa del gasto. Añadir personal o reservar capacidad no ataca el problema y pueden consolidar el gasto. Si el requisito fuera reducir el tamaño de los recursos porque están sobredimensionados, la medida sería el right-sizing y no la programación horaria.',
		porQueOpcion: [
			'Correcta: programar el apagado y encendido elimina el error humano y evita que los entornos sigan facturando por olvido.',
			'Incorrecta: añadir personal de guardia mantiene el trabajo manual y el riesgo de olvido que causa el gasto.',
			'Incorrecta: reducir el tamaño y dejarlos encendidos no evita el gasto de las horas en que no se usan.',
			'Incorrecta: reservar capacidad abarata la tarifa, pero consolida el gasto en lugar de eliminarlo.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/how-aws-pricing-works/welcome.html',
		],
	},
	{
		id: '1.4-q14',
		taskId: '1.4',
		objetivos: ['1.4#8'],
		tipo: 'escenario',
		question:
			'Una empresa pequeña no alcanza el volumen necesario para negociar precios bajos de hardware y aun así accede a tarifas por unidad mejores que las que lograría por su cuenta. ¿Qué explica esa situación?',
		options: [
			'Las economías de escala: el proveedor compra y opera a gran volumen y traslada parte de ese menor coste unitario al cliente.',
			'Un descuento personal que AWS concede a cada cliente nuevo durante el primer año de uso.',
			'Que la empresa compra su propio hardware y lo amortiza en la nube sin coste añadido.',
			'Que los precios de AWS suben con el volumen de uso para financiar así su infraestructura global repartida por todo el mundo.',
		],
		correctAnswer: 0,
		explanation:
			'Las economías de escala existen porque el proveedor agrega la demanda de millones de clientes y reduce su coste unitario; parte de ese ahorro se refleja en el precio que paga cada cliente, incluso uno pequeño. No hay un descuento personal por ser nuevo ni la empresa compra hardware propio, y los precios por unidad no suben con el volumen. Si el requisito fuera comparar el gasto propio con el del proveedor, habría que añadir los costes indirectos del centro de datos.',
		porQueOpcion: [
			'Correcta: el proveedor agrega la demanda de millones de clientes, reduce su coste unitario y traslada parte del ahorro.',
			'Incorrecta: no existe un descuento personal de bienvenida; el menor precio viene de la escala del proveedor.',
			'Incorrecta: la empresa no compra ni amortiza hardware propio: eso anularía la ventaja de escala.',
			'Incorrecta: los precios por unidad no suben con el volumen; el modelo reparte el menor coste agregado.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/how-aws-pricing-works/welcome.html',
		],
	},
	{
		id: '1.4-q15',
		taskId: '1.4',
		objetivos: ['1.4#5'],
		tipo: 'comparacion',
		question: 'En la estrategia de licencias, ¿qué distingue el modelo BYOL de las licencias incluidas?',
		options: [
			'Con BYOL la organización reutiliza las licencias que ya posee y paga aparte la infraestructura; con las incluidas, el coste de la licencia va dentro del precio del servicio.',
			'Con BYOL la licencia la aporta el proveedor y con las incluidas la aporta el cliente desde su inventario.',
			'Ambos modelos exigen comprar una licencia nueva por cada instancia que se levante.',
			'Las licencias incluidas permiten usar el software propio de la organización en la nube sin pagar nada adicional por la licencia ni por el servicio contratado de forma mensual.',
		],
		correctAnswer: 0,
		explanation:
			'BYOL (Bring Your Own License) aprovecha licencias ya adquiridas y factura solo la infraestructura, a cambio de gestionar su cumplimiento y sus términos; en las licencias incluidas el software viene con el servicio y su coste está dentro del precio. Invertir quién aporta la licencia o afirmar que siempre hay que comprar una nueva describe mal ambos modelos. Si el requisito fuera evitar toda gestión de licencias, encajarían las incluidas aunque salgan más caras para quien ya tenía licencias propias.',
		porQueOpcion: [
			'Correcta: BYOL reutiliza las licencias propias pagando aparte la infraestructura y las incluidas llevan su coste dentro del servicio.',
			'Incorrecta: invierte quién aporta la licencia: en BYOL la aporta el cliente y en las incluidas el proveedor.',
			'Incorrecta: ninguno obliga a comprar una licencia nueva por instancia; eso describe mal ambos modelos.',
			'Incorrecta: las incluidas no permiten usar software propio gratis; su coste está dentro del precio del servicio.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/how-aws-pricing-works/welcome.html',
		],
	},
	{
		id: '1.4-q16',
		taskId: '1.4',
		objetivos: ['1.4#6'],
		tipo: 'comparacion',
		question:
			'Un equipo compara dos formas de encarar el tamaño de sus recursos. ¿Qué distingue el right-sizing de mantener una capacidad fija?',
		options: [
			'El right-sizing ajusta de forma continua el tamaño a la carga real medida; la capacidad fija se dimensiona de antemano y se paga aunque quede ociosa.',
			'El right-sizing compra la capacidad máxima para el pico y la capacidad fija la reduce cuando baja el uso.',
			'El right-sizing solo reduce el número de instancias y la capacidad fija solo cambia el tipo de instancia.',
			'Ambos buscan exactamente lo mismo: contratar toda la capacidad por adelantado para fijar así el coste mensual de la infraestructura contratada durante todo el año.',
		],
		correctAnswer: 0,
		explanation:
			'El right-sizing usa métricas de uso para subir o bajar el tamaño de los recursos de forma continua y pagar solo por lo necesario; la capacidad fija se decide antes de conocer la demanda y se paga incluso infrautilizada. Invertir los papeles o reducir el right-sizing a un único ajuste de número de instancias lo simplifica en exceso. Si el requisito fuera responder a picos temporales sin sobredimensionar, la combinación adecuada sería right-sizing con elasticidad.',
		porQueOpcion: [
			'Correcta: el right-sizing ajusta el tamaño a la carga medida de forma continua y la capacidad fija se decide antes y se paga ociosa.',
			'Incorrecta: invierte los papeles: comprar la capacidad máxima es el enfoque de capacidad fija, no del right-sizing.',
			'Incorrecta: el right-sizing no se limita al número de instancias ni la capacidad fija solo al tipo.',
			'Incorrecta: el right-sizing busca pagar solo por lo necesario, no contratar toda la capacidad por adelantado.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/how-aws-pricing-works/welcome.html',
		],
	},
	{
		id: '1.4-q17',
		taskId: '1.4',
		objetivos: ['1.4#7'],
		tipo: 'comparacion',
		question: '¿Qué distingue gestionar los recursos con automatización frente a hacerlo de forma manual?',
		options: [
			'La automatización aplica acciones repetibles sin intervención y sin olvidos; la gestión manual depende de que alguien ejecute cada tarea a tiempo.',
			'La automatización elimina por completo el coste de los recursos que gestiona, mientras que la manual lo mantiene.',
			'La gestión manual es más barata porque evita el coste de las herramientas de automatización.',
			'Ambas opciones son equivalentes en coste total y solo cambia quién las ejecuta dentro del equipo de operaciones de la plataforma y de sus servicios asociados.',
		],
		correctAnswer: 0,
		explanation:
			'La automatización reduce trabajo manual y errores, y garantiza que acciones como apagar recursos fuera de horario se cumplan de forma consistente; la gestión manual queda a merced de que alguien recuerde cada tarea. La automatización no elimina el coste de los recursos ni es más caro gestionarlos a mano de forma sistemática. Si el requisito fuera corregir recursos sobredimensionados, la automatización ayudaría, pero la medida principal sería el right-sizing.',
		porQueOpcion: [
			'Correcta: la automatización aplica acciones repetibles sin intervención ni olvidos, mientras la gestión manual depende de que alguien ejecute a tiempo.',
			'Incorrecta: la automatización no elimina el coste de los recursos que gestiona; solo asegura que se apliquen las acciones.',
			'Incorrecta: la gestión manual no es más barata: sumada al error humano y al trabajo repetitivo suele costar más.',
			'Incorrecta: no son equivalentes; la automatización aporta consistencia y reduce errores frente a la ejecución manual.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/how-aws-pricing-works/welcome.html',
		],
	},
];
