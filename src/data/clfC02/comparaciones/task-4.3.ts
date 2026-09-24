import type { ParConfusionClfC02 } from '@/data/clfC02/types';

export const paresTask43: ParConfusionClfC02[] = [
	{
		id: 'planes-de-soporte-aws',
		etiqueta: 'Planes de soporte de entrada vs planes para producción',
		a: {
			titulo: 'Basic Support y AWS Developer Support',
			resumen:
				'Niveles de entrada. Basic viene incluido en toda cuenta y no abre casos técnicos; AWS Developer Support añade asistencia técnica por correo en horario laboral y un contacto designado. Están pensados para aprendizaje, desarrollo y pruebas.',
		},
		b: {
			titulo: 'AWS Business Support, AWS Enterprise On-Ramp Support y AWS Enterprise Support',
			resumen:
				'Niveles para producción. AWS Business Support da atención 24/7 por teléfono, chat y correo con todas las comprobaciones de AWS Trusted Advisor; AWS Enterprise On-Ramp Support añade guía proactiva y acceso a un grupo de TAM; AWS Enterprise Support ofrece TAM designado y los tiempos de respuesta más cortos.',
		},
		diferenciaClave:
			'La frontera está en si la carga es de producción y qué compromiso se necesita: los planes de entrada se limitan al horario laboral y a canales limitados, mientras que AWS Business Support y los niveles Enterprise ofrecen atención 24/7, comprobaciones completas y, en Enterprise, un TAM y guía proactiva.',
		cuandoA: [
			'Cuando el uso es de desarrollo o pruebas y basta con documentación, comunidad y asistencia técnica por correo en horario laboral.',
			'Cuando se quiere empezar sin coste adicional de soporte y solo se necesitan consultas de facturación y cuenta.',
		],
		cuandoB: [
			'Cuando hay cargas en producción que exigen atención 24/7, tiempos de respuesta comprometidos y comprobaciones completas de AWS Trusted Advisor.',
			'Cuando la organización necesita un TAM, revisión proactiva de la arquitectura y el menor tiempo de respuesta para sistemas críticos.',
		],
		escenarioA:
			'Un equipo de desarrollo abre un entorno de pruebas, resuelve dudas de configuración y no necesita atención fuera del horario laboral: le basta con Basic Support o con AWS Developer Support.',
		escenarioB:
			'Una empresa opera una plataforma de ventas 24/7 y quiere abrir casos por teléfono a cualquier hora con respuesta en menos de una hora: contrata AWS Business Support, y si además necesita un TAM designado, AWS Enterprise Support.',
		preguntaIds: ['4.3-q4'],
		objetivos: ['4.3#2', '4.3#7'],
	},
];
