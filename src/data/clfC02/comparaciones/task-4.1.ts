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
];
