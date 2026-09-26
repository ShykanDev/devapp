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
	{
		id: 'organizacion-centralizada-vs-cuentas-independientes',
		etiqueta: 'Organización con administración central frente a cuentas independientes',
		a: {
			titulo: 'Cuentas agrupadas en una organización',
			resumen:
				'Las cuentas miembro se administran como una sola unidad de gobierno: la cuenta de gestión aplica políticas, incorpora cuentas y recibe la factura consolidada con el uso agregado de todas ellas.',
		},
		b: {
			titulo: 'Cuentas independientes',
			resumen:
				'Cada cuenta se gobierna y se factura por separado. Gana aislamiento entre equipos o negocios, pero se pierde la factura única y la posibilidad de alcanzar antes los descuentos por volumen con el uso agregado.',
		},
		diferenciaClave:
			'Agrupar cuentas centraliza el gobierno y consolida la factura; mantenerlas independientes conserva la separación total de gestión y pago. En ambos casos la atribución del gasto por equipo o proyecto se logra con etiquetas, no con la mera separación de cuentas.',
		cuandoA: [
			'Cuando necesitas gobierno central, políticas comunes y una sola factura para todas las cuentas.',
			'Cuando el uso agregado de varias cuentas conviene para alcanzar antes los descuentos por volumen.',
		],
		cuandoB: [
			'Cuando cada equipo o negocio debe gobernar y pagar sus cuentas de forma totalmente independiente.',
			'Cuando el aislamiento entre unidades pesa más que el beneficio de una factura consolidada.',
		],
		escenarioA:
			'Un grupo con varias filiales agrupa sus cuentas, aplica políticas desde un punto central y recibe una sola factura, atribuyendo el gasto por filial con etiquetas.',
		escenarioB:
			'Dos empresas del mismo grupo mantienen cuentas separadas por requisitos regulatorios y cada una se factura y se gobierna sin compartir administración.',
		preguntaIds: ['4.2-q13'],
		objetivos: ['4.2#3', '4.2#7'],
	},
	{
		id: 'etiquetas-de-asignacion-vs-informe-de-costos-y-uso',
		etiqueta: 'Etiquetas de asignación de costos frente al informe de costos y uso',
		a: {
			titulo: 'Etiquetas de asignación de costos',
			resumen:
				'Pares clave-valor que se aplican a los recursos y que hay que activar para asignación de costos. Aportan el criterio de negocio, como equipo, proyecto o entorno, con el que se puede agrupar y filtrar el gasto.',
		},
		b: {
			titulo: 'Informe de costos y uso',
			resumen:
				'Es el informe más detallado de facturación: incluye cada línea de uso con las etiquetas que se hayan activado. Aporta el detalle granular sobre el que se cruza el gasto con los criterios de negocio.',
		},
		diferenciaClave:
			'La etiqueta es el criterio y el informe es el detalle. La etiqueta debe activarse para aparecer en la facturación; el informe recoge esa etiqueta en cada línea de uso. Ninguno de los dos fija límites ni sustituye al otro.',
		cuandoA: [
			'Cuando necesitas definir el criterio de negocio con el que atribuirás el gasto antes de analizarlo.',
			'Cuando quieres agrupar o filtrar el gasto por equipo, proyecto o entorno en las herramientas de costos.',
		],
		cuandoB: [
			'Cuando necesitas el detalle línea a línea de la facturación con las etiquetas ya activadas.',
			'Cuando vas a cruzar el uso de cada recurso con el proyecto o el centro de costo al que pertenece.',
		],
		escenarioA:
			'Una empresa define las claves equipo y proyecto, las aplica a sus recursos y las activa como etiquetas de asignación de costos para poder agrupar el gasto.',
		escenarioB:
			'El equipo de finanzas descarga el informe de costos y uso y encuentra en cada línea el valor de las etiquetas activadas, atribuyendo el gasto por proyecto.',
		preguntaIds: ['4.2-q15'],
		objetivos: ['4.2#4', '4.2#8'],
	},
];
