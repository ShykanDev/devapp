import type { ParConfusionClfC02 } from '@/data/clfC02/types';

export const paresTask12: ParConfusionClfC02[] = [
	{
		id: 'well-architected-pillars',
		etiqueta: 'Pilares de operación y riesgo vs pilares de eficiencia y economía',
		a: {
			titulo: 'Pilares de operación y riesgo',
			resumen:
				'Operational excellence, security y reliability miran cómo se opera la carga, cómo se protege y cómo sobrevive a los fallos. Responden a las preguntas de proceso, protección y continuidad del servicio.',
		},
		b: {
			titulo: 'Pilares de eficiencia y economía',
			resumen:
				'Performance efficiency, cost optimization y sustainability miran cómo se usan los recursos, cuánto cuestan y qué consumo generan. Responden a las preguntas de adecuación, gasto y sostenibilidad.',
		},
		diferenciaClave:
			'Cada pilar responde a una pregunta distinta: los primeros protegen y mantienen el servicio en marcha; los segundos ajustan los recursos y el gasto. Un cambio técnico puede mejorar un grupo y empeorar el otro, y la revisión busca el equilibrio, no un pilar ganador.',
		cuandoA: [
			'Cuando el problema es un fallo, una interrupción, una brecha de seguridad o la falta de un proceso operativo.',
			'Cuando hay que decidir redundancia, controles de acceso, automatización de despliegues o respuesta a incidentes.',
		],
		cuandoB: [
			'Cuando el problema es lentitud, sobredimensionamiento, gasto innecesario o desperdicio de recursos.',
			'Cuando hay que elegir el tamaño y el tipo de recurso, el modelo de uso o cómo reducir el consumo de la carga.',
		],
		escenarioA:
			'Una plataforma sufre cortes cuando se cae una ubicación y, además, nadie tiene runbooks ni despliegues automatizados. El equipo ataca el problema con redundancia y recuperación (reliability) y con procedimientos y automatización (operational excellence).',
		escenarioB:
			'La misma plataforma responde lenta en horas punta y la factura creció por recursos ociosos. El equipo corrige eligiendo mejor el tipo y tamaño de recurso y escalando con la demanda (performance efficiency), reduciendo el gasto (cost optimization) y evitando desperdicio (sustainability).',
		preguntaIds: ['1.2-q3', '1.2-q6'],
		objetivos: ['1.2#2', '1.2#3'],
	},
];
