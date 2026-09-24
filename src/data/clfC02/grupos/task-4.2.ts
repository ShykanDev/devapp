import type { GrupoTematico } from '@/data/clfC02/types';

export const gruposTask42: GrupoTematico[] = [
	{
		id: '4.2-g1',
		titulo: 'Información de facturación y precios de los servicios de AWS',
		objetivos: ['4.2#1', '4.2#2'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'La facturación en AWS se apoya en una consola de facturación y gestión de costos donde se consultan las facturas, el uso por servicio y los informes de costos. Desde esa consola se accede a la información de facturación y a las herramientas de análisis, y las dudas sobre cargos se resuelven con el soporte de AWS, que ofrece ayuda específica de facturación.\n\nPara el **soporte de facturación** existen varias vías:\n\n- **Consola de facturación y gestión de costos**: facturas, historial de pagos y desglose de uso por cuenta.\n- **AWS Support**: canal para abrir casos de facturación y revisar explicaciones de cargos.\n- **AWS Knowledge Center** y **AWS Support Center**: artículos y casos donde consultar dudas de facturación.\n\nLa **información de precios** es pública y se publica servicio a servicio: cada página de precios detalla las dimensiones que se cobran (cómputo por hora, almacenamiento por GB, transferencia de datos) y los modelos de compra disponibles. Para estimar el costo antes de crear recursos se usa **AWS Pricing Calculator**, que permite modelar una arquitectura, ajustar cantidades y obtener una estimación sin desplegar nada.',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Consulta la consola de facturación cuando necesites entender de dónde viene un cargo o revisar facturas y pagos.',
					'Usa AWS Pricing Calculator antes de desplegar para estimar el costo mensual de una arquitectura propuesta.',
					'Revisa la página de precios del servicio concreto para entender qué dimensiones generan el cobro.',
				],
				noUsar: [
					'No uses una estimación como si fuera la factura final: los precios pueden cambiar y el uso real manda.',
					'No abras un caso de soporte por cada duda de precios: la información pública de precios resuelve la mayoría de consultas.',
				],
			},
			{
				tipo: 'ejemplo',
				md: '```text\nPregunta -> recurso\n- ¿Por qué subió la factura este mes?      -> Consola de facturación y gestión de costos\n- ¿Cuánto costará la arquitectura nueva?    -> AWS Pricing Calculator\n- ¿Cómo se cobra este servicio?             -> Página de precios del servicio\n- ¿Duda sobre un cargo concreto?            -> AWS Support\n```',
			},
			{
				tipo: 'errorComun',
				error: 'Creer que el precio de un servicio es único y fijo, o que estimar con AWS Pricing Calculator equivale a la factura real.',
				correccion:
					'El precio depende de la región, de las dimensiones consumidas y del modelo de compra. AWS Pricing Calculator produce una estimación orientativa; la factura refleja el uso real y puede variar por descuentos o por cambios de precio.',
			},
			{
				tipo: 'clave',
				items: [
					'La consola de facturación y gestión de costos reúne facturas, pagos, uso y análisis.',
					'El soporte de facturación se atiende por AWS Support.',
					'La información de precios es pública y se detalla por servicio.',
					'AWS Pricing Calculator estima el costo antes de crear recursos.',
				],
			},
		],
		preguntasGuia: [
			'¿Dónde se consultan las facturas y el historial de pagos?',
			'¿Qué recurso se usa para estimar el costo antes de desplegar?',
			'¿Qué diferencia hay entre una estimación de precios y la factura real?',
		],
	},
	{
		id: '4.2-g2',
		titulo: 'AWS Organizations, facturación consolidada y reparto de costos',
		objetivos: ['4.2#3', '4.2#7'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'AWS Organizations permite administrar de forma centralizada varias cuentas de AWS como una sola unidad de gobierno. La cuenta de gestión crea la organización e incorpora a las demás cuentas como miembros; a partir de ahí se aplican políticas, se comparten recursos y se factura de forma conjunta.\n\nLa **facturación consolidada** reúne el uso de todas las cuentas miembro en una única factura pagada por la cuenta de gestión. Consolidar no es solo comodidad administrativa: el uso agregado puede alcanzar antes los descuentos por volumen y una sola factura simplifica el seguimiento.\n\nEl **reparto de costos** es el problema complementario: cuando las cuentas pertenecen a equipos, proyectos o entornos distintos, hay que atribuir cada cargo a su responsable. La organización aporta la estructura de cuentas como primer nivel de separación, y las etiquetas de asignación de costos completan la atribución dentro de cada cuenta.',
			},
			{
				tipo: 'escenario',
				situacion:
					'Una empresa tiene ocho equipos, cada uno con su propia cuenta de AWS, y quiere una sola factura, control centralizado y capacidad de saber cuánto gasta cada equipo.',
				analisis:
					'La organización resuelve la administración y la facturación: la cuenta de gestión recibe la factura consolidada y aplica gobierno sobre las cuentas miembro. La atribución por equipo se logra etiquetando los recursos y analizando los informes, no solo por tener cuentas separadas.',
				servicio: 'AWS Organizations',
			},
			{
				tipo: 'errorComun',
				error: 'Pensar que la facturación consolidada reparte automáticamente el costo entre los equipos o que mezcla los recursos de todas las cuentas.',
				correccion:
					'Consolidar agrupa el uso y los cargos en una factura, pero no atribuye el gasto por sí sola ni fusiona los recursos: cada cuenta conserva los suyos y sus propios límites. El reparto requiere etiquetas de asignación de costos e informes.',
			},
			{
				tipo: 'clave',
				items: [
					'AWS Organizations administra varias cuentas como una unidad.',
					'La facturación consolidada produce una sola factura para todas las cuentas miembro.',
					'Consolidar puede mejorar los descuentos por volumen, pero no asigna el gasto automáticamente.',
					'La atribución por equipo o proyecto requiere etiquetas de asignación de costos.',
				],
			},
		],
		preguntasGuia: [
			'¿Qué permite hacer AWS Organizations con varias cuentas?',
			'¿Qué es la facturación consolidada y qué no hace?',
			'¿Cómo se atribuye el gasto a cada equipo dentro de una organización?',
		],
	},
	{
		id: '4.2-g3',
		titulo: 'Etiquetas de asignación de costos e informes de facturación',
		objetivos: ['4.2#4', '4.2#8'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'Las **etiquetas de asignación de costos** son pares clave-valor que se aplican a los recursos y que permiten desglosar la factura por criterios de negocio: centro de costo, equipo, proyecto, entorno o aplicación. Sin etiquetas, el análisis de costos queda limitado a la cuenta y al servicio.\n\nHay dos tipos según su origen:\n\n- **Etiquetas generadas automáticamente**: las crea la plataforma para cada recurso, por ejemplo un identificador de recurso o el servicio que lo creó.\n- **Etiquetas definidas por el usuario**: las crean y asignan las personas, con las claves y los valores que el negocio necesite.\n\nEl **informe de costos y uso** (AWS Cost and Usage Report) es el informe más detallado de facturación: incluye cada línea de uso con sus etiquetas activadas, de modo que se puede cruzar el gasto con los criterios de negocio. La relación es directa: las etiquetas aportan el criterio y el informe aporta el detalle. Para que una etiqueta aparezca en el informe hay que **activarla** como etiqueta de asignación de costos.',
			},
			{
				tipo: 'ejemplo',
				md: '```text\nSin etiquetas:\n  factura -> por cuenta y por servicio\n\nCon etiquetas de asignación de costos activadas:\n  factura -> por equipo, proyecto y entorno\n\nEn el informe de costos y uso:\n  cada línea de uso -> incluye los valores de las etiquetas activadas\n```',
			},
			{
				tipo: 'errorComun',
				error: 'Creer que basta con etiquetar los recursos: si la etiqueta no se activa como etiqueta de asignación de costos, no aparece en los informes de facturación.',
				correccion:
					'Primero se aplican las etiquetas a los recursos y después se activan como etiquetas de asignación de costos. Solo entonces se pueden usar para filtrar y agrupar en los informes; las etiquetas no activadas no se propagan a los datos de facturación.',
			},
			{
				tipo: 'clave',
				items: [
					'Etiquetas de asignación de costos = pares clave-valor para desglosar el gasto por criterio de negocio.',
					'Tipos según su origen: generadas automáticamente y definidas por el usuario.',
					'Hay que activarlas como etiquetas de asignación de costos para que aparezcan en la facturación.',
					'El informe de costos y uso es el detalle que incluye cada línea de uso con sus etiquetas.',
				],
			},
		],
		preguntasGuia: [
			'¿Qué son las etiquetas de asignación de costos?',
			'¿Qué tipos de etiquetas existen según su origen?',
			'¿Cómo llegan las etiquetas al informe de costos y uso?',
		],
	},
	{
		id: '4.2-g4',
		titulo: 'AWS Budgets, AWS Cost Explorer y AWS Pricing Calculator',
		objetivos: ['4.2#5', '4.2#6'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'AWS ofrece herramientas distintas para momentos distintos del ciclo de costos:\n\n- **AWS Pricing Calculator**: estima antes de desplegar. Modela una arquitectura, se ajustan cantidades y se obtiene una estimación del costo mensual sin crear recursos. Responde a «¿cuánto costará?».\n- **AWS Cost Explorer**: analiza el gasto ya realizado. Muestra el costo y el uso históricos, permite agrupar y filtrar por servicio, cuenta o etiqueta y explorar tendencias. Responde a «¿en qué se está gastando?».\n- **AWS Budgets**: vigila contra un umbral. Se define un presupuesto y se configuran alertas cuando el gasto real o previsto se acerca o supera el límite. Responde a «¿me estoy pasando?».\n\nLos tres no compiten: se complementan. Se estima con AWS Pricing Calculator, se analiza lo gastado con AWS Cost Explorer y se vigila el límite con AWS Budgets. Confundirlos lleva a usar una estimación como si fuera un análisis histórico o a esperar que una alerta de presupuesto explique el detalle del gasto.',
			},
			{
				tipo: 'comparacion',
				parId: 'budgets-vs-cost-explorer-vs-pricing-calculator',
			},
			{
				tipo: 'escenario',
				situacion:
					'Una empresa fijó un límite mensual de gasto para su entorno de pruebas. El equipo quiere recibir un aviso antes de superarlo y, cuando ocurra, entender qué servicio lo provocó.',
				analisis:
					'La vigilancia del umbral corresponde a AWS Budgets: se define el presupuesto y una alerta que se dispara al acercarse o superar el límite. El análisis posterior del gasto por servicio corresponde a AWS Cost Explorer, que desglosa el uso ya realizado.',
				servicio: 'AWS Budgets',
			},
			{
				tipo: 'errorComun',
				error: 'Usar AWS Cost Explorer como si fuera una calculadora de precios para estimar una arquitectura que todavía no existe.',
				correccion:
					'AWS Cost Explorer analiza el costo y el uso ya registrados; no proyecta arquitecturas futuras. Para estimar antes de desplegar se usa AWS Pricing Calculator. La estimación previa y el análisis histórico son funciones distintas.',
			},
			{
				tipo: 'clave',
				items: [
					'AWS Pricing Calculator estima el costo futuro; AWS Cost Explorer analiza el gasto pasado.',
					'AWS Budgets define un límite y dispara alertas cuando el gasto se acerca o supera el umbral.',
					'Los tres se complementan: estimar, analizar y vigilar.',
					'Ninguna alerta de presupuesto sustituye al análisis detallado del gasto.',
				],
			},
		],
		preguntasGuia: [
			'¿Qué herramienta se usa antes de desplegar y cuál después?',
			'¿En qué se diferencian AWS Budgets y AWS Cost Explorer?',
			'¿Qué papel cumple AWS Pricing Calculator en una propuesta de arquitectura?',
		],
	},
];
