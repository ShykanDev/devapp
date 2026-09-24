import type { PreguntaClfC02 } from '@/data/clfC02/types';

export const preguntasTask11: PreguntaClfC02[] = [
	{
		id: '1.1-q1',
		taskId: '1.1',
		objetivos: ['1.1#1'],
		tipo: 'conocimiento',
		question: '¿Qué significa que la nube de AWS convierta gasto fijo en gasto variable?',
		options: [
			'Que se compra hardware por adelantado y se amortiza en varios años.',
			'Que se paga solo por los recursos que se consumen, sin inversión inicial en infraestructura.',
			'Que el precio de los servicios permanece fijo independientemente del uso.',
			'Que los costes se reparten entre todas las cuentas de una organización.',
		],
		correctAnswer: 1,
		explanation:
			'El modelo de pago por uso elimina la inversión inicial en servidores: el coste sigue al consumo real. Eso es convertir gasto fijo en gasto variable, una de las bases de la propuesta de valor de la nube.',
	},
	{
		id: '1.1-q2',
		taskId: '1.1',
		objetivos: ['1.1#1'],
		tipo: 'escenario',
		question:
			'Una empresa compra servidores cada tres años para cubrir su pico de tráfico y el resto del tiempo los mantiene infrautilizados. ¿Qué beneficio de la nube de AWS responde directamente a ese problema?',
		options: [
			'La posibilidad de fijar el precio de los servicios de antemano.',
			'El pago por uso con capacidad ajustada a la demanda, que evita la capacidad ociosa.',
			'La obligación de mantener el mismo número de servidores siempre encendidos.',
			'El traslado de todo el gasto a una única factura mensual.',
		],
		correctAnswer: 1,
		explanation:
			'La capacidad ociosa desaparece cuando se paga solo por lo consumido y la capacidad sigue a la demanda. Ese es el beneficio central de la propuesta de valor frente al modelo de compra para el pico.',
	},
	{
		id: '1.1-q3',
		taskId: '1.1',
		objetivos: ['1.1#2'],
		tipo: 'conocimiento',
		question:
			'¿Qué beneficios aporta la infraestructura global de AWS a la hora de lanzar una aplicación?',
		options: [
			'Obliga a desplegar primero en el país del proveedor y luego migrar.',
			'Permite desplegar en minutos en la región adecuada y servir a usuarios de varios continentes.',
			'Elimina la necesidad de elegir una ubicación para los datos.',
			'Solo beneficia a las empresas que ya tienen centros de datos propios.',
		],
		correctAnswer: 1,
		explanation:
			'La infraestructura global combina velocidad de despliegue (recursos en minutos) y alcance global (cobertura geográfica amplia). No elimina la decisión de ubicación ni requiere infraestructura propia.',
	},
	{
		id: '1.1-q4',
		taskId: '1.1',
		objetivos: ['1.1#2'],
		tipo: 'servicio',
		question:
			'Un equipo quiere acercar las descargas de contenido a usuarios repartidos por el mundo. ¿Qué componente de la infraestructura global aprovecha?',
		options: [
			'Una copia de seguridad almacenada en la misma zona de disponibilidad.',
			'Las edge locations, que acercan la entrega al usuario y reducen la latencia.',
			'El cifrado en reposo de los datos almacenados.',
			'La conversión del gasto fijo en gasto variable.',
		],
		correctAnswer: 1,
		explanation:
			'Las edge locations son puntos de presencia cercanos al usuario que aceleran la entrega de contenido. Es el beneficio de alcance global aplicado a la latencia.',
	},
	{
		id: '1.1-q5',
		taskId: '1.1',
		objetivos: ['1.1#3'],
		tipo: 'conocimiento',
		question: '¿Qué describe mejor la elasticidad en la nube de AWS?',
		options: [
			'Mantener el servicio operativo cuando falla una zona.',
			'Ajustar la capacidad de forma automática a la demanda, creciendo y decreciendo.',
			'Crear recursos en varios continentes a la vez.',
			'Reducir la factura mediante descuentos por volumen.',
		],
		correctAnswer: 1,
		explanation:
			'La elasticidad ajusta la capacidad al volumen de trabajo: se añaden recursos cuando sube la demanda y se retiran cuando baja. Mantener el servicio ante fallos es alta disponibilidad, no elasticidad.',
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
			'La agilidad mide el tiempo de actividad; la elasticidad, el número de regiones; la alta disponibilidad, el precio.',
			'La elasticidad garantiza la continuidad; la alta disponibilidad reduce el tiempo de innovación.',
		],
		correctAnswer: 1,
		explanation:
			'Cada ventaja responde a un problema distinto: alta disponibilidad = seguir operando pese a fallos; elasticidad = capacidad según la demanda; agilidad = velocidad para crear, probar y cambiar.',
	},
	{
		id: '1.1-q7',
		taskId: '1.1',
		objetivos: ['1.1#3'],
		tipo: 'escenario',
		question:
			'Una tienda en línea recibe un pico de tráfico durante una campaña y luego vuelve al nivel habitual. ¿Qué ventaja de la nube responde mejor a esa situación?',
		options: [
			'La agilidad, porque permite cambiar el diseño de la aplicación durante la campaña.',
			'La elasticidad, porque la capacidad crece con la demanda y se reduce al bajar el tráfico.',
			'La alta disponibilidad, porque garantiza que la campaña no se interrumpa.',
			'Las economías de escala, porque reparten el coste entre todos los clientes.',
		],
		correctAnswer: 1,
		explanation:
			'Un pico temporal seguido de un valle es el caso típico de elasticidad: ajustar la capacidad al uso. La alta disponibilidad se ocupa de los fallos y la agilidad, de la velocidad de cambio.',
	},
	{
		id: '1.1-q8',
		taskId: '1.1',
		objetivos: ['1.1#1'],
		tipo: 'casoDeUso',
		question:
			'¿Cuál de los siguientes escenarios ilustra mejor la propuesta de valor de la nube de AWS frente a un centro de datos propio?',
		options: [
			'Comprar servidores para tres años y mantenerlos aunque el proyecto se cancele.',
			'Provisionar recursos en minutos, pagar por uso y ajustar la capacidad según la demanda.',
			'Construir un centro de datos en cada país donde haya clientes.',
			'Contratar personal para el mantenimiento físico de los servidores.',
		],
		correctAnswer: 1,
		explanation:
			'La propuesta de valor combina velocidad, pago por uso y ajuste a la demanda. Comprar hardware o construir centros de datos propios es justo el modelo que la nube evita.',
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
			'Que la entrega de contenido depende de la ubicación del equipo de desarrollo.',
		],
		correctAnswer: 1,
		explanation:
			'La cobertura de regiones en todo el mundo permite desplegar en poco tiempo y servir a usuarios de otros países sin construir infraestructura propia. Eso resume velocidad de despliegue y alcance global.',
	},
];
