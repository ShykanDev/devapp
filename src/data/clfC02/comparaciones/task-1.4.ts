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
		objetivos: ['1.4#1', '1.4#3', '1.4#4'],
	},
	{
		id: 'byol-vs-licencias-incluidas',
		etiqueta: 'BYOL vs licencias incluidas',
		a: {
			titulo: 'BYOL (Bring Your Own License)',
			resumen:
				'La organización reutiliza las licencias de software que ya posee y paga aparte solo la infraestructura. Aprovecha la inversión previa, pero exige gestionar el cumplimiento y los términos de cada licencia.',
		},
		b: {
			titulo: 'Licencias incluidas',
			resumen:
				'El software viene con el servicio y su coste forma parte del precio. Simplifica la gestión, pero puede salir más caro si la organización ya tenía licencias propias en propiedad.',
		},
		diferenciaClave:
			'BYOL parte de licencias ya adquiridas y factura solo la infraestructura; las incluidas evitan esa gestión porque el coste va dentro del servicio. Ninguna es siempre más barata: depende de qué licencias se tengan y de lo que cueste gestionarlas.',
		cuandoA: [
			'Cuando la organización ya posee licencias válidas para el entorno elegido y puede cumplir sus términos.',
			'Cuando interesa aprovechar una inversión previa en software en lugar de pagar la licencia otra vez.',
		],
		cuandoB: [
			'Cuando se prefiere no gestionar licencias y se acepta que su coste vaya dentro del precio del servicio.',
			'Cuando no se dispone de licencias propias reutilizables para ese software.',
		],
		escenarioA:
			'Una empresa que renovó licencias de base de datos hace un año las lleva a la nube y paga solo la infraestructura donde las ejecuta.',
		escenarioB:
			'Otra empresa sin licencias propias contrata el servicio con la licencia incorporada y evita comprar y gestionar licencias por separado.',
		preguntaIds: ['1.4-q15'],
		objetivos: ['1.4#5'],
	},
	{
		id: 'rightsizing-vs-capacidad-fija',
		etiqueta: 'Right-sizing vs capacidad fija',
		a: {
			titulo: 'Right-sizing',
			resumen:
				'Ajustar de forma continua el tamaño o el tipo de recurso a la carga real medida. Sube o baja la capacidad según las métricas y evita pagar por lo que no se aprovecha.',
		},
		b: {
			titulo: 'Capacidad fija',
			resumen:
				'Dimensionar los recursos de antemano y mantenerlos. Se paga la capacidad completa aunque quede ociosa, y no se corrige hasta que alguien revisa el dimensionado.',
		},
		diferenciaClave:
			'El right-sizing usa métricas de uso para ajustar el tamaño de forma continua; la capacidad fija se decide antes de conocer la demanda y se paga tal cual. Un recurso sobredimensionado y fijo acumula coste aunque no aporte rendimiento.',
		cuandoA: [
			'Cuando las métricas muestran recursos muy por debajo o por encima de su capacidad.',
			'Cuando la carga cambia y conviene revisar el tamaño de forma periódica.',
		],
		cuandoB: [
			'Cuando la capacidad se decide antes de conocer la demanda y no se revisa el dimensionado.',
			'Cuando se mantiene el tamaño por inercia aunque el uso real sea muy inferior.',
		],
		escenarioA:
			'Un equipo observa que sus servidores usan menos del 10 % de CPU y reduce el tamaño de los recursos, revisando las métricas cada mes.',
		escenarioB:
			'El mismo equipo compró instancias grandes para el pico y las mantiene todo el año, pagando capacidad que solo necesita unas semanas.',
		preguntaIds: ['1.4-q16'],
		objetivos: ['1.4#6'],
	},
	{
		id: 'automatizacion-vs-operacion-manual',
		etiqueta: 'Automatización vs operación manual',
		a: {
			titulo: 'Automatización',
			resumen:
				'Aplicar acciones de forma repetible sin intervención: apagar recursos fuera de horario, escalar según la demanda o aplicar cambios reproducibles. Reduce el trabajo manual y los olvidos.',
		},
		b: {
			titulo: 'Operación manual',
			resumen:
				'Ejecutar cada tarea a mano cuando alguien lo recuerda. Depende de la disponibilidad y la atención de la persona, por lo que es propensa a olvidos y a resultados inconsistentes.',
		},
		diferenciaClave:
			'La automatización garantiza que la acción se cumpla siempre igual; la operación manual depende de que alguien la ejecute a tiempo. Un recurso encendido por olvido es el coste típico de la gestión manual.',
		cuandoA: [
			'Cuando hay tareas repetitivas de ahorro, como apagar entornos fuera de horario o escalar con la demanda.',
			'Cuando el resultado debe ser consistente y no depender de la memoria de una persona.',
		],
		cuandoB: [
			'Cuando se hacen tareas puntuales donde no compensa automatizar, como un ajuste único.',
			'Cuando el proceso aún no está definido y no se puede ejecutar de forma repetible.',
		],
		escenarioA:
			'Un equipo programa el apagado y encendido de los entornos de desarrollo según un horario y deja de pagar recursos ociosos por las noches.',
		escenarioB:
			'Otro equipo apaga los entornos a mano y algunos fines de semana olvida hacerlo, de modo que esos recursos siguen facturando.',
		preguntaIds: ['1.4-q17'],
		objetivos: ['1.4#7'],
	},
];
