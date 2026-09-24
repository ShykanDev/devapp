import type { ParConfusionClfC02 } from '@/data/clfC02/types';

export const paresTask11: ParConfusionClfC02[] = [
	{
		id: 'alta-disponibilidad-vs-elasticidad-vs-agilidad',
		etiqueta: 'Alta disponibilidad vs elasticidad y agilidad',
		a: {
			titulo: 'Alta disponibilidad',
			resumen:
				'Capacidad de seguir atendiendo el servicio aunque falle un componente. Se consigue con redundancia activa, por ejemplo repartiendo la carga entre varias Availability Zones.',
		},
		b: {
			titulo: 'Elasticidad y agilidad',
			resumen:
				'La elasticidad ajusta la capacidad de forma automática a la demanda; la agilidad es la velocidad para crear, probar y cambiar. Ninguna de las dos evita por sí sola una interrupción por fallo.',
		},
		diferenciaClave:
			'La alta disponibilidad responde a los fallos (seguir en marcha); la elasticidad responde a la demanda (más o menos capacidad); la agilidad responde al tiempo de cambio (innovar rápido).',
		cuandoA: [
			'Cuando el servicio no puede interrumpirse y necesitas tolerancia al fallo de una zona.',
			'Cuando cada componente debe tener réplica para no ser un punto único de fallo.',
		],
		cuandoB: [
			'Cuando la carga varía y quieres pagar solo por la capacidad que usas.',
			'Cuando necesitas probar ideas nuevas en poco tiempo sin comprar infraestructura.',
		],
		escenarioA:
			'Una aplicación crítica se despliega en dos Availability Zones con un balanceador que reparte el tráfico: si una zona falla, la otra sigue atendiendo.',
		escenarioB:
			'La misma aplicación añade recursos cuando sube el tráfico de la campaña y los retira al terminar, y el equipo publica una versión nueva en días porque no depende de comprar servidores.',
		preguntaIds: ['1.1-q6'],
		objetivos: ['1.1#3'],
	},
];
