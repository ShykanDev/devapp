import type { TarjetaClfC02 } from '@/data/clfC02/types';

export const tarjetasTask11: TarjetaClfC02[] = [
	{
		id: '1.1-t1',
		taskId: '1.1',
		objetivos: ['1.1#1'],
		tipo: 'definicion',
		frente: '¿En qué consiste la propuesta de valor de la nube de AWS?',
		reverso:
			'En cambiar el modelo de coste y de operación: pago por uso sin inversión inicial, capacidad ajustada a la demanda, economías de escala, velocidad y agilidad, alcance global y servicios gestionados que reducen la carga operativa.',
	},
	{
		id: '1.1-t2',
		taskId: '1.1',
		objetivos: ['1.1#2'],
		tipo: 'definicion',
		frente: '¿Qué dos beneficios aporta disponer de una infraestructura global de AWS?',
		reverso:
			'Velocidad de despliegue (crear recursos en minutos en cualquier región, sin comprar hardware) y alcance global (servir a usuarios de todo el mundo desde la plataforma común de AWS).',
	},
	{
		id: '1.1-t3',
		taskId: '1.1',
		objetivos: ['1.1#3'],
		tipo: 'diferencia',
		frente:
			'Un compañero dice: «con el ajuste automático de capacidad ya tenemos alta disponibilidad». ¿Qué le corriges?',
		reverso:
			'La elasticidad ajusta la capacidad a la demanda; no protege frente a fallos. La alta disponibilidad exige redundancia, por ejemplo desplegar en varias Availability Zones, de modo que el servicio siga operativo cuando falle un componente.',
	},
];
