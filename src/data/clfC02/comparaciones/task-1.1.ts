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
	{
		id: 'velocidad-despliegue-vs-alcance-global',
		etiqueta: 'Velocidad de despliegue vs alcance global',
		a: {
			titulo: 'Velocidad de despliegue',
			resumen:
				'La infraestructura global permite crear recursos en la región elegida en minutos, sin esperar a comprar ni montar hardware. Responde a cuánto tarda una idea en llegar a producción.',
		},
		b: {
			titulo: 'Alcance global',
			resumen:
				'La misma plataforma está disponible en muchas zonas geográficas, de modo que una aplicación puede atender a usuarios de varios continentes sin abrir centros de datos propios.',
		},
		diferenciaClave:
			'La velocidad de despliegue mide el tiempo de puesta en marcha; el alcance global mide la cobertura geográfica. Ambas nacen de la infraestructura global, pero responden a problemas distintos: el plazo y la audiencia.',
		cuandoA: [
			'Cuando el plazo es el requisito principal y hay que poner recursos en producción cuanto antes.',
			'Cuando el equipo necesita experimentar rápido sin comprar infraestructura propia.',
		],
		cuandoB: [
			'Cuando la audiencia está repartida por varios continentes y hay que servirla sin abrir centros de datos en cada país.',
			'Cuando conviene desplegar en la región cercana a cada grupo de usuarios.',
		],
		escenarioA:
			'Una startup debe publicar su aplicación en dos semanas: aprovisiona los recursos en minutos en lugar de esperar a comprar y montar servidores.',
		escenarioB:
			'La misma aplicación atiende después a clientes de tres continentes desplegando en varias regiones, sin construir infraestructura propia en cada país.',
		preguntaIds: ['1.1-q10'],
		objetivos: ['1.1#2'],
	},
];
