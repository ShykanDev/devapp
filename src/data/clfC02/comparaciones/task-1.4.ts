import type { ParConfusionClfC02 } from '@/data/clfC02/types';

export const paresTask14: ParConfusionClfC02[] = [
	{
		id: 'costes-fijos-vs-variables',
		etiqueta: 'Coste fijo on-premises vs coste variable en la nube',
		a: {
			titulo: 'Costes fijos (on-premises)',
			resumen:
				'Inversión que se paga por adelantado y no cambia con el uso: servidores, almacenamiento, licencias perpetuas, obra y equipamiento del centro de datos. Se incurre en ella aunque la capacidad quede ociosa e incluye costes indirectos como energía, refrigeración, espacio y personal de mantenimiento.',
		},
		b: {
			titulo: 'Costes variables (nube)',
			resumen:
				'Gasto que sigue al consumo real: horas de cómputo, GB almacenados o transferencia de datos. Si el recurso no se usa, no se factura, y la capacidad se ajusta con elasticidad en lugar de comprarse para el pico.',
		},
		diferenciaClave:
			'El coste fijo se decide antes de conocer la demanda y se paga aunque no se use; el coste variable se decide según la demanda y desaparece cuando el consumo baja. On-premises concentra fijos e indirectos; la nube convierte buena parte de ese gasto en variable.',
		cuandoA: [
			'Cuando se compra hardware para el pico de tráfico previsto, con capacidad que quedará ociosa el resto del tiempo.',
			'Cuando hay que asumir energía, refrigeración, espacio y personal aunque la demanda sea baja.',
		],
		cuandoB: [
			'Cuando la demanda es variable o difícil de predecir y conviene pagar solo lo consumido.',
			'Cuando se quiere evitar la inversión inicial y trasladar el gasto a medida que crece el uso.',
		],
		escenarioA:
			'Una empresa compra servidores sobredimensionados para el pico anual y los mantiene encendidos todo el año: paga por adelantado una capacidad que solo usa unas semanas.',
		escenarioB:
			'La misma carga se ejecuta en la nube con capacidad elástica: en el pico escala y el resto del tiempo reduce recursos, de modo que la factura sigue al consumo.',
		preguntaIds: ['1.4-q2'],
		objetivos: ['1.4#3', '1.4#4'],
	},
];
