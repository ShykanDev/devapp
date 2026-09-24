import type { ParConfusionClfC02 } from '@/data/clfC02/types';

export const paresTask32: ParConfusionClfC02[] = [
	{
		id: 'regiones-vs-az-vs-edge',
		etiqueta: 'Región y Availability Zone vs edge location',
		a: {
			titulo: 'Región y Availability Zones',
			resumen:
				'La región es el área geográfica donde se despliegan datos y cómputo; dentro de ella, cada Availability Zone es un centro de datos aislado con su propia energía y red. Es la capa de residencia, tolerancia a fallos y residencia de datos.',
		},
		b: {
			titulo: 'Edge locations',
			resumen:
				'Puntos de presencia cercanos al usuario final que usan los servicios de entrega de contenido y DNS para acercar la respuesta. No alojan los servicios generales ni el origen de los datos.',
		},
		diferenciaClave:
			'La región (con sus AZ) es donde viven la aplicación y los datos; el edge es donde se acerca la entrega al usuario. La región aporta disponibilidad y residencia; el edge aporta proximidad y menor latencia.',
		cuandoA: [
			'Cuando necesitas cumplir residencia de datos o elegir la ubicación del cómputo y la base de datos.',
			'Cuando buscas alta disponibilidad repartiendo réplicas entre varias Availability Zones de la región.',
		],
		cuandoB: [
			'Cuando el contenido estático o las respuestas DNS deben servirse con baja latencia a usuarios repartidos geográficamente.',
			'Cuando quieres descargar de tu origen el tráfico de entrega sin mover los datos de la región.',
		],
		escenarioA:
			'Una empresa fija `eu-west-1` como región para que los datos personales europeos no salgan de la UE y despliega su base de datos en dos Availability Zones para tolerar el fallo de una.',
		escenarioB:
			'La misma empresa publica imágenes y vídeos mediante una distribución de contenido que los sirve desde puntos de presencia cercanos a cada usuario, reduciendo el tiempo de descarga sin cambiar la región del dato.',
		preguntaIds: ['3.2-q2'],
		objetivos: ['3.2#1', '3.2#5'],
	},
];
