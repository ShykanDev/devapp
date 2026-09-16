import type { ParConfusionAifC01 } from '@/data/aifC01/types';

export const paresTask42: ParConfusionAifC01[] = [
	{
		id: 'transparency-vs-performance',
		etiqueta: 'Transparencia vs rendimiento',
		a: {
			titulo: 'Transparencia y explicabilidad',
			resumen:
				'El modelo permite inspeccionar cómo decide o justificar su decisión de forma comprensible para las personas. Suele asociarse a modelos simples e interpretables.',
		},
		b: {
			titulo: 'Rendimiento',
			resumen:
				'El modelo prioriza la precisión o la calidad del resultado, aunque su funcionamiento interno no sea inspeccionable ni justificable caso por caso.',
		},
		diferenciaClave:
			'La transparencia prioriza poder justificar la decisión; el rendimiento prioriza la precisión o la capacidad del modelo. No son opuestos absolutos ni uno es mejor en abstracto: se compensan y la elección depende del riesgo del caso.',
		cuandoA: [
			'Decisiones de alto impacto que deben justificarse ante la persona afectada o un auditor.',
			'Cuando existe obligación regulatoria de explicar la decisión.',
			'Cuando el equipo puede aceptar algo menos de precisión a cambio de trazabilidad.',
		],
		cuandoB: [
			'Tareas exploratorias o de bajo riesgo donde importa sobre todo la calidad del resultado.',
			'Cuando se dispone de controles compensatorios: documentación, evaluación y revisión humana.',
			'Cuando la interpretabilidad intrínseca limitaría demasiado la capacidad del modelo.',
		],
		escenarioA:
			'Una entidad financiera debe explicar a cada solicitante por qué se denegó su crédito y elige un modelo interpretable aunque sea algo menos preciso.',
		escenarioB:
			'Un equipo genera borradores de contenido y prioriza la calidad del texto: usa un modelo mayor y más potente, y documenta sus límites con una ficha y evaluaciones.',
		preguntaIds: ['4.2-q5'],
		objetivos: ['4.2#3'],
	},
];
