import type { PreguntaClfC02 } from '@/data/clfC02/types';

export const preguntasTask14: PreguntaClfC02[] = [
	{
		id: '1.4-q1',
		taskId: '1.4',
		objetivos: ['1.4#1'],
		tipo: 'conocimiento',
		question: '¿Qué abarca la economía de la nube como concepto?',
		options: [
			'Únicamente el precio por hora de las instancias de cómputo.',
			'El cambio en la estructura de costes al pasar de inversión fija on-premises a gasto variable ligado al consumo.',
			'La cantidad de servicios que ofrece un proveedor de nube.',
			'El número de regiones disponibles para desplegar una aplicación.',
		],
		correctAnswer: 1,
		explanation:
			'La economía de la nube estudia cómo cambia la estructura de costes: se sustituye buena parte del capex por opex ligado al uso, se elimina la capacidad ociosa y se aprovechan las economías de escala del proveedor.',
	},
	{
		id: '1.4-q2',
		taskId: '1.4',
		objetivos: ['1.4#3'],
		tipo: 'comparacion',
		question:
			'En términos de economía de la nube, ¿qué distingue un coste fijo de un coste variable?',
		options: [
			'El fijo depende del consumo y el variable se paga una sola vez.',
			'El fijo se paga por adelantado y no cambia con el uso; el variable se factura según el consumo real.',
			'El fijo solo existe en la nube y el variable solo on-premises.',
			'Ambos se pagan por hora y solo cambian de nombre según el proveedor.',
		],
		correctAnswer: 1,
		explanation:
			'El coste fijo (capex) se decide antes de conocer la demanda y se paga aunque el recurso no se use; el variable (opex) sigue al consumo. On-premises concentra costes fijos e indirectos, mientras la nube convierte buena parte de ese gasto en variable.',
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
			'Únicamente las licencias de software, porque el resto son costes de la nube.',
			'Solo la conexión a internet, ya que el resto lo cubre el proveedor.',
		],
		correctAnswer: 1,
		explanation:
			'El coste on-premises es mayor que el precio del hardware: suma energía, refrigeración, espacio físico, personal, seguridad y la capacidad comprada para el pico que queda sin usar. Ignorar esos costes indirectos lleva a conclusiones erróneas sobre el ahorro de migrar.',
	},
	{
		id: '1.4-q4',
		taskId: '1.4',
		objetivos: ['1.4#2'],
		tipo: 'conocimiento',
		question:
			'¿Cuál es una razón por la que migrar a la nube puede reducir el coste total frente a operar un centro de datos propio?',
		options: [
			'Porque en la nube desaparecen todos los costes variables.',
			'Porque se evita comprar capacidad para el pico y se dejan de asumir costes indirectos de la sala y el hardware.',
			'Porque las licencias de software dejan de ser necesarias.',
			'Porque la nube garantiza el precio más bajo para cualquier carga sin analizar el uso.',
		],
		correctAnswer: 1,
		explanation:
			'La migración reduce capex, elimina la capacidad ociosa y descarga costes indirectos como energía, refrigeración, espacio y mantenimiento. No elimina los costes variables ni las licencias, y el ahorro depende de ajustar el consumo.',
	},
	{
		id: '1.4-q5',
		taskId: '1.4',
		objetivos: ['1.4#8'],
		tipo: 'conocimiento',
		question: '¿Qué significa que la nube se beneficie de economías de escala?',
		options: [
			'Que cada cliente debe comprar el mismo volumen de hardware para obtener descuentos.',
			'Que el proveedor opera a gran volumen y reparte ese coste de compra y operación entre muchos clientes, logrando un precio unitario menor.',
			'Que el precio de los servicios sube a medida que crece el uso.',
			'Que solo las empresas grandes pueden acceder a los servicios de nube.',
		],
		correctAnswer: 1,
		explanation:
			'Las economías de escala surgen porque el proveedor compra y opera a un volumen muy superior al de cualquier cliente y reparte ese coste agregado. El resultado es una tarifa por unidad más baja que la que alcanzaría un centro de datos pequeño.',
	},
	{
		id: '1.4-q6',
		taskId: '1.4',
		objetivos: ['1.4#6'],
		tipo: 'escenario',
		question:
			'Un equipo observa que sus servidores usan menos del 10 % de CPU durante casi todo el mes. ¿Qué medida de rightsizing es adecuada?',
		options: [
			'Aumentar el tamaño de las instancias para mejorar el rendimiento.',
			'Reducir el tamaño de los recursos para ajustarlos a la carga real y seguir midiendo el uso.',
			'Comprar más servidores para repartir la carga.',
			'Ignorar la métrica, porque el uso bajo no tiene impacto en el coste.',
		],
		correctAnswer: 1,
		explanation:
			'El uso muy por debajo de la capacidad indica recursos sobredimensionados: el right-sizing consiste en reducirlos a un tamaño acorde con la carga real y revisar periódicamente las métricas. Un recurso infrautilizado se paga completo aunque se aproveche una fracción.',
	},
	{
		id: '1.4-q7',
		taskId: '1.4',
		objetivos: ['1.4#7'],
		tipo: 'conocimiento',
		question: '¿Cómo contribuye la automatización a reducir costes en la nube?',
		options: [
			'Elimina la necesidad de medir el consumo de los recursos.',
			'Reduce trabajo manual repetitivo y evita que recursos como los entornos de prueba queden encendidos por olvido.',
			'Sustituye las licencias de software por licencias incluidas.',
			'Garantiza que la factura no cambie de un mes a otro.',
		],
		correctAnswer: 1,
		explanation:
			'Automatizar el encendido y apagado, el escalado y los cambios reproducibles quita trabajo manual y evita pagar recursos ociosos que nadie apagó. La automatización no sustituye la medición del consumo ni fija la factura.',
	},
	{
		id: '1.4-q8',
		taskId: '1.4',
		objetivos: ['1.4#5'],
		tipo: 'tradeoff',
		question:
			'Una empresa ya posee licencias de software y evalúa cómo usarlas en la nube. ¿Qué compara correctamente BYOL con las licencias incluidas?',
		options: [
			'BYOL obliga a pagar la licencia otra vez, mientras que la licencia incluida reutiliza la que ya se tiene.',
			'BYOL reutiliza las licencias propias y se paga solo la infraestructura; la licencia incluida lleva su coste dentro del precio del servicio y simplifica la gestión.',
			'Las dos opciones son idénticas en coste y en gestión.',
			'Las licencias incluidas siempre salen más baratas que BYOL.',
		],
		correctAnswer: 1,
		explanation:
			'BYOL (Bring Your Own License) aprovecha licencias ya adquiridas y factura solo la infraestructura, a cambio de gestionar el cumplimiento y los términos. La licencia incluida evita esa gestión porque su coste va dentro del servicio, lo que puede ser más caro si ya se tenían licencias propias. Ninguna es siempre más barata.',
	},
	{
		id: '1.4-q9',
		taskId: '1.4',
		objetivos: ['1.4#2'],
		tipo: 'escenario',
		question:
			'Una empresa decide migrar a la nube y espera un ahorro automático. Tras el primer mes la factura es similar a la anterior. ¿Qué explica mejor la situación?',
		options: [
			'La nube nunca reduce costes frente a on-premises.',
			'El ahorro no es automático: hace falta ajustar tamaños, apagar lo que no se usa y elegir modelos de precio acordes al consumo.',
			'El proveedor aplica un recargo fijo durante el primer año.',
			'El coste variable siempre supera al coste fijo.',
		],
		correctAnswer: 1,
		explanation:
			'Migrar traslada la estructura de costes, pero el ahorro depende de prácticas como right-sizing, apagado de recursos ociosos, automatización y elección del modelo de precio. Sin ese trabajo, la factura puede parecerse a la del centro de datos anterior.',
	},
];
