import type { TarjetaClfC02 } from '@/data/clfC02/types';

export const tarjetasTask32: TarjetaClfC02[] = [
	{
		id: '3.2-t1',
		taskId: '3.2',
		objetivos: ['3.2#5'],
		tipo: 'diferencia',
		frente:
			'Un compañero dice: «vamos a desplegar la base de datos en la edge location para que esté más cerca». ¿Qué le corriges?',
		reverso:
			'Las edge locations no alojan bases de datos ni cómputo general: son puntos de presencia para entrega de contenido y DNS. La base de datos va en una región, repartida entre sus Availability Zones.',
	},
	{
		id: '3.2-t2',
		taskId: '3.2',
		objetivos: ['3.2#1', '3.2#5'],
		tipo: 'definicion',
		frente:
			'Ordena de mayor a menor alcance geográfico: Availability Zone, región, edge location.',
		reverso:
			'Región (área geográfica con varias AZ) → Availability Zone (centro de datos aislado dentro de la región) → edge location (punto de presencia cerca del usuario, fuera del eje región/AZ).',
	},
	{
		id: '3.2-t3',
		taskId: '3.2',
		objetivos: ['3.2#2', '3.2#6', '3.2#7'],
		tipo: 'definicion',
		frente:
			'¿Qué hace que desplegar en varias Availability Zones proporcione alta disponibilidad?',
		reverso:
			'Cada AZ tiene alimentación, refrigeración y red independientes y no comparten punto único de fallo. Con réplicas en varias AZ, el fallo de una no detiene el servicio; el balanceador reparte el tráfico entre las que siguen activas.',
	},
];
