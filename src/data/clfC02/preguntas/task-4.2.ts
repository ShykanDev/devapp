import type { PreguntaClfC02 } from '@/data/clfC02/types';

export const preguntasTask42: PreguntaClfC02[] = [
	{
		id: '4.2-q1',
		taskId: '4.2',
		objetivos: ['4.2#1'],
		tipo: 'conocimiento',
		question: '¿Dónde se consulta la información de facturación y las facturas de una cuenta de AWS?',
		options: [
			'En la consola de facturación y gestión de costos, desde la que se accede a facturas, uso y herramientas de análisis.',
			'Únicamente abriendo un caso al soporte técnico de AWS.',
			'En el informe de costos y uso, que es el único lugar donde aparecen las facturas.',
			'En AWS Pricing Calculator, que guarda el historial de pagos.',
		],
		correctAnswer: 0,
		explanation:
			'La consola de facturación y gestión de costos centraliza facturas, historial de pagos, uso y herramientas de análisis. El soporte de AWS atiende dudas de facturación, pero no es el canal para consultarla; AWS Pricing Calculator solo estima costos.',
	},
	{
		id: '4.2-q2',
		taskId: '4.2',
		objetivos: ['4.2#2'],
		tipo: 'conocimiento',
		question: '¿Qué recurso conviene para estimar el costo mensual de una arquitectura antes de crearla?',
		options: [
			'AWS Cost Explorer, porque proyecta el gasto futuro de recursos todavía no creados.',
			'AWS Budgets, porque calcula el precio de cada servicio según su uso previsto.',
			'AWS Pricing Calculator, porque modela la arquitectura y devuelve una estimación sin desplegar recursos.',
			'El informe de costos y uso, porque adelanta la factura del mes siguiente.',
		],
		correctAnswer: 2,
		explanation:
			'AWS Pricing Calculator es la herramienta de estimación previa: se modela la arquitectura y se obtiene un costo aproximado sin crear recursos. AWS Cost Explorer y el informe de costos y uso trabajan con gasto ya registrado, y AWS Budgets vigila umbrales, no calcula precios.',
	},
	{
		id: '4.2-q3',
		taskId: '4.2',
		objetivos: ['4.2#3'],
		tipo: 'conocimiento',
		question: '¿Qué aporta AWS Organizations en una empresa con muchas cuentas de AWS?',
		options: [
			'Administrar de forma centralizada varias cuentas como una sola unidad de gobierno.',
			'Sustituir la consola de facturación y eliminar la necesidad de etiquetas.',
			'Convertir todas las cuentas en una sola cuenta con los mismos recursos.',
			'Calcular automáticamente el precio de los servicios contratados.',
		],
		correctAnswer: 0,
		explanation:
			'AWS Organizations agrupa cuentas bajo una administración central: políticas, gobierno y facturación conjunta. No fusiona las cuentas ni elimina la necesidad de etiquetas y análisis para atribuir el gasto, y no calcula precios.',
	},
	{
		id: '4.2-q4',
		taskId: '4.2',
		objetivos: ['4.2#4'],
		tipo: 'conocimiento',
		question: '¿Qué es una etiqueta de asignación de costos?',
		options: [
			'Un límite de gasto que bloquea el uso cuando se supera.',
			'Un par clave-valor que se aplica a los recursos para desglosar el gasto por criterios de negocio.',
			'Un descuento automático aplicado por AWS según el volumen de uso.',
			'Un informe detallado con cada línea de uso y su precio.',
		],
		correctAnswer: 1,
		explanation:
			'Las etiquetas de asignación de costos son pares clave-valor, como equipo o proyecto, que permiten atribuir y agrupar el gasto. El límite con alerta es un presupuesto y el detalle línea a línea es el informe de costos y uso.',
	},
	{
		id: '4.2-q5',
		taskId: '4.2',
		objetivos: ['4.2#5'],
		tipo: 'comparacion',
		question: '¿Qué distingue a AWS Cost Explorer de AWS Pricing Calculator?',
		options: [
			'AWS Cost Explorer estima el costo de una arquitectura futura y AWS Pricing Calculator analiza el gasto histórico.',
			'AWS Cost Explorer analiza el costo y el uso ya registrados y AWS Pricing Calculator estima el costo de una arquitectura antes de desplegarla.',
			'Ambos analizan solo el gasto futuro y se diferencian en el formato de los informes.',
			'AWS Cost Explorer define límites de gasto y AWS Pricing Calculator analiza el uso pasado.',
		],
		correctAnswer: 1,
		explanation:
			'AWS Cost Explorer trabaja con datos de costo y uso ya generados, agrupando y filtrando por servicio, cuenta o etiqueta. AWS Pricing Calculator modela una arquitectura hipotética y devuelve una estimación antes de crear recursos. Definir límites es la función de AWS Budgets.',
	},
	{
		id: '4.2-q6',
		taskId: '4.2',
		objetivos: ['4.2#5'],
		tipo: 'escenario',
		question:
			'El responsable de un entorno de pruebas fijó un límite mensual y quiere recibir un aviso antes de superarlo. ¿Qué debe usar?',
		options: [
			'AWS Budgets, porque permite definir el presupuesto y configurar alertas cuando el gasto se acerca o supera el umbral.',
			'AWS Pricing Calculator, porque avisa cuando la estimación supera el límite.',
			'El informe de costos y uso, porque bloquea el gasto al alcanzar el límite.',
			'AWS Organizations, porque suspende las cuentas que se pasan del presupuesto.',
		],
		correctAnswer: 0,
		explanation:
			'AWS Budgets está pensado para vigilar umbrales: se define el presupuesto y se disparan alertas al acercarse o superar el límite. AWS Pricing Calculator solo estima, el informe de costos y uso solo registra el detalle y AWS Organizations administra cuentas, no presupuestos.',
	},
	{
		id: '4.2-q7',
		taskId: '4.2',
		objetivos: ['4.2#5'],
		tipo: 'conocimiento',
		question: '¿Para qué sirve principalmente AWS Cost Explorer?',
		options: [
			'Para estimar el costo de recursos que todavía no se han creado.',
			'Para vigilar un límite de gasto y enviar alertas al superarlo.',
			'Para analizar el costo y el uso ya registrados, agrupando y filtrando por servicio, cuenta o etiqueta.',
			'Para administrar de forma centralizada varias cuentas de AWS.',
		],
		correctAnswer: 2,
		explanation:
			'AWS Cost Explorer analiza el gasto existente y permite agrupar y filtrar por dimensiones como servicio, cuenta o etiqueta. Estimar es propio de AWS Pricing Calculator, vigilar límites de AWS Budgets y administrar cuentas de AWS Organizations.',
	},
	{
		id: '4.2-q8',
		taskId: '4.2',
		objetivos: ['4.2#6'],
		tipo: 'comparacion',
		question:
			'Antes de crear una aplicación, un equipo necesita comparar el costo mensual de dos tamaños de instancia. ¿Qué afirmación sobre las herramientas es correcta?',
		options: [
			'Debe usar AWS Pricing Calculator, que modela la arquitectura y estima el costo sin desplegar recursos.',
			'Debe usar AWS Cost Explorer, porque calcula el precio futuro de las instancias.',
			'Debe usar AWS Budgets, porque compara el precio de dos configuraciones.',
			'Ninguna herramienta sirve: solo la factura final indica el costo de una arquitectura.',
		],
		correctAnswer: 0,
		explanation:
			'AWS Pricing Calculator permite modelar la arquitectura, ajustar cantidades y obtener una estimación antes de crear recursos, justo lo necesario para comparar alternativas. AWS Cost Explorer y la factura reflejan gasto real, y AWS Budgets vigila umbrales.',
	},
	{
		id: '4.2-q9',
		taskId: '4.2',
		objetivos: ['4.2#7'],
		tipo: 'escenario',
		question:
			'Una empresa tiene cuatro cuentas en la misma organización y quiere una sola factura, además de saber cuánto gasta cada equipo. ¿Qué combinación resuelve ambos objetivos?',
		options: [
			'La facturación consolidada produce una sola factura y las etiquetas de asignación de costos permiten atribuir el gasto por equipo.',
			'Facturar por separado es la única forma de saber cuánto gasta cada equipo.',
			'La facturación consolidada reparte los cargos entre equipos de forma automática.',
			'AWS Pricing Calculator emite la factura única y divide el gasto por equipo.',
		],
		correctAnswer: 0,
		explanation:
			'La facturación consolidada de AWS Organizations reúne el uso de todas las cuentas miembro en una sola factura; la atribución por equipo se logra etiquetando los recursos y analizando el gasto con esas etiquetas. Consolidar no reparte el costo automáticamente.',
	},
	{
		id: '4.2-q10',
		taskId: '4.2',
		objetivos: ['4.2#8'],
		tipo: 'conocimiento',
		question: '¿Cómo se relacionan las etiquetas de asignación de costos con el informe de costos y uso?',
		options: [
			'El informe crea las etiquetas automáticamente al final de cada mes.',
			'Las etiquetas activadas aparecen en cada línea de uso del informe, de modo que el gasto se puede cruzar con criterios de negocio.',
			'Las etiquetas sustituyen al informe cuando el número de recursos es pequeño.',
			'El informe ignora las etiquetas y solo agrupa por cuenta y por servicio.',
		],
		correctAnswer: 1,
		explanation:
			'El informe de costos y uso es el detalle más granular de facturación e incluye las etiquetas que se han activado como etiquetas de asignación de costos. Así cada línea de uso se puede atribuir a un equipo, proyecto o entorno. Las etiquetas no se generan solas al cerrar el mes.',
	},
];
