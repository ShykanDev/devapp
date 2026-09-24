import type { ParConfusionClfC02 } from '@/data/clfC02/types';

export const paresTask42: ParConfusionClfC02[] = [
	{
		id: 'budgets-vs-cost-explorer-vs-pricing-calculator',
		etiqueta: 'AWS Budgets y AWS Cost Explorer vs AWS Pricing Calculator',
		a: {
			titulo: 'AWS Budgets y AWS Cost Explorer',
			resumen:
				'Herramientas que trabajan sobre el gasto ya comprometido: AWS Cost Explorer analiza el costo y el uso registrados agrupando y filtrando por servicio, cuenta o etiqueta, y AWS Budgets define un límite y alerta cuando el gasto real o previsto se acerca o supera el umbral.',
		},
		b: {
			titulo: 'AWS Pricing Calculator',
			resumen:
				'Calculadora de estimación previa al despliegue: permite modelar una arquitectura, ajustar cantidades y obtener un costo mensual estimado sin crear recursos.',
		},
		diferenciaClave:
			'AWS Cost Explorer y AWS Budgets trabajan sobre datos de gasto reales ya generados (analizar y vigilar); AWS Pricing Calculator trabaja sobre una arquitectura hipotética antes de que exista gasto (estimar).',
		cuandoA: [
			'Cuando quieras entender el gasto histórico o del mes en curso y desglosarlo por servicio, cuenta o etiqueta.',
			'Cuando necesites definir un límite y recibir alertas al acercarse o superar el presupuesto.',
		],
		cuandoB: [
			'Cuando quieras estimar el costo mensual de una arquitectura antes de crearla.',
			'Cuando compares alternativas de diseño o tamaños para decidir con una cifra aproximada.',
		],
		escenarioA:
			'El equipo de finanzas revisa con AWS Cost Explorer el gasto del mes por servicio y define en AWS Budgets una alerta para avisar si el entorno de pruebas supera su límite.',
		escenarioB:
			'Antes de solicitar presupuesto, el arquitecto modela la nueva aplicación en AWS Pricing Calculator y obtiene una estimación mensual para comparar dos opciones de tamaño.',
		preguntaIds: ['4.2-q5', '4.2-q8'],
		objetivos: ['4.2#5', '4.2#6'],
	},
];
