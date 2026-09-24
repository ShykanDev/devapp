import type { TarjetaClfC02 } from '@/data/clfC02/types';

export const tarjetasTask41: TarjetaClfC02[] = [
	{
		id: '4.1-t1',
		taskId: '4.1',
		objetivos: ['4.1#3'],
		tipo: 'tradeoff',
		frente:
			'Un arquitecto duda entre Spot Instances y un compromiso de 1 o 3 años para un servicio crítico que no admite interrupciones. ¿Qué le recomiendas?',
		reverso:
			'Si el servicio no tolera interrupciones, descarta Spot y evalúa Reserved Instances o AWS Savings Plans para el uso estable. Spot solo encaja en cargas tolerantes a fallos, como lotes o tareas stateless.',
	},
	{
		id: '4.1-t2',
		taskId: '4.1',
		objetivos: ['4.1#4'],
		tipo: 'diferencia',
		frente: '¿Qué diferencia hay entre una Reserved Instance Standard y una Convertible?',
		reverso:
			'Standard da el descuento máximo y no puede modificarse ni intercambiarse; Convertible permite cambiar familia, sistema operativo, tenancy o modalidad de pago por otra Convertible de valor igual o mayor, con un descuento algo menor.',
	},
	{
		id: '4.1-t3',
		taskId: '4.1',
		objetivos: ['4.1#5'],
		tipo: 'definicion',
		frente: '¿Qué pasa con las Reserved Instances no usadas en una organización con varias cuentas?',
		reverso:
			'Con la facturación consolidada se comparten por defecto: primero cubren el uso de la cuenta compradora y el descuento sobrante se aplica a las demás cuentas. La cuenta de administración puede desactivar esa compartición.',
	},
	{
		id: '4.1-t4',
		taskId: '4.1',
		objetivos: ['4.1#1'],
		tipo: 'servicio',
		frente:
			'Dedicated Hosts, Dedicated Instances y Capacity Reservations: ¿qué problema resuelve cada opción?',
		reverso:
			'Dedicated Hosts dan un servidor físico completo con control de sockets y núcleos (útil para BYOL). Dedicated Instances corren en hardware dedicado a un único cliente sin control del host. Capacity Reservations garantizan capacidad en una Availability Zone concreta sin compromiso de plazo, pagando la tarifa On-Demand se use o no.',
	},
	{
		id: '4.1-t5',
		taskId: '4.1',
		objetivos: ['4.1#2', '4.1#7'],
		tipo: 'definicion',
		frente:
			'¿Cómo se ordena el precio de almacenamiento entre S3 Standard, las clases de acceso poco frecuente y las clases de archivo?',
		reverso:
			'Es más caro en las clases de acceso frecuente (Standard) y más barato en las de archivo, pero las clases de bajo coste añaden latencia de recuperación y, según la clase, cargos por recuperación. Las políticas de ciclo de vida hacen el traslado automático.',
	},
	{
		id: '4.1-t6',
		taskId: '4.1',
		objetivos: ['4.1#6'],
		tipo: 'definicion',
		frente: '¿Qué transferencia de datos se factura y cuál suele ser gratuita?',
		reverso:
			'La entrada de datos desde internet a AWS suele ser gratuita; la salida a internet y el cruce entre Availability Zones o entre regiones se facturan por GB. El tráfico dentro de la misma AZ con direcciones privadas no genera ese cargo de cruce.',
	},
];
