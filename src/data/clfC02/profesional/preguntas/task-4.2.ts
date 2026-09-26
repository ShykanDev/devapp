import type { PreguntaProfesionalClfC02 } from '@/data/clfC02/profesional/types';

export const profesionalTask42: PreguntaProfesionalClfC02[] = [
	{
		id: 'prof-4.2-q1',
		taskId: '4.2',
		objetivos: ['4.2#1'],
		tipo: 'trampa',
		question:
			'Ante una discrepancia en una factura, un equipo discute por dónde consultar el detalle y a quién pedir aclaraciones. ¿Qué afirmación es correcta?',
		options: [
			'El detalle se consulta en AWS Cost Explorer y la aclaración se pide en el AWS Support Center o al soporte de facturación según el plan.',
			'El detalle se consulta en AWS Pricing Calculator y la aclaración se pide en AWS Marketplace, el catálogo oficial de software de terceros de AWS.',
			'El detalle se consulta en AWS Budgets y la aclaración se pide al equipo de AWS Trust and Safety, que revisa cargos.',
			'El detalle solo se obtiene abriendo un caso técnico de severidad crítica y la aclaración la da AWS Organizations.',
		],
		correctAnswer: 0,
		explanation:
			'La información de facturación se consulta en la consola de facturación y gestión de costos, con AWS Cost Explorer para desglosar el gasto, y las dudas se plantean a través del AWS Support Center o del soporte de facturación incluido en el plan. Si cambia el escenario y la duda es sobre el coste de una arquitectura futura, el recurso correcto sería AWS Pricing Calculator.',
		porQueOpcion: [
			'Correcta: Cost Explorer detalla el gasto ya registrado y las consultas de facturación se atienden a través del AWS Support Center según el plan contratado.',
			'Pricing Calculator estima costes futuros, no facturas, y Marketplace es el catálogo de software de terceros.',
			'Budgets vigila umbrales, no desglosa facturas, y Trust and Safety atiende denuncias de abuso, no facturación.',
			'No hace falta un caso técnico crítico ni interviene AWS Organizations en la aclaración de una factura.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-what-is.html',
			'https://docs.aws.amazon.com/marketplace/',
			'https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/budgets-managing-costs.html',
			'https://docs.aws.amazon.com/organizations/',
			'https://docs.aws.amazon.com/awssupport/latest/user/getting-started.html',
		],
	},
	{
		id: 'prof-4.2-q2',
		taskId: '4.2',
		objetivos: ['4.2#3', '4.2#7'],
		tipo: 'escenario',
		question:
			'Un grupo empresarial quiere unificar la factura de seis cuentas, aplicar políticas de gobierno desde un punto central y conservar la atribución de gasto por filial, aunque el tamaño de cada filial no afecta al diseño. ¿Qué combinación cumple los tres requisitos?',
		options: [
			'AWS Organizations para agrupar las cuentas y la facturación consolidada para una sola factura, con etiquetas de asignación de costos para atribuir el gasto por filial.',
			'Seis cuentas independientes y una hoja de cálculo manual, porque la facturación consolidada impide atribuir el gasto por filial dentro de la organización aunque se activen etiquetas.',
			'AWS Organizations basta por sí solo: reparte automáticamente el gasto entre filiales sin necesidad de etiquetas ni de informes.',
			'AWS Budgets consolida las cuentas y emite una factura única por organización, repartiendo el gasto entre las filiales.',
		],
		correctAnswer: 0,
		explanation:
			'AWS Organizations administra centralizadamente las cuentas y su facturación consolidada reúne el uso en una sola factura. La atribución por filial se consigue etiquetando los recursos y analizando el gasto con esas etiquetas o con el informe de costos y uso. Si cambia el requisito y no se necesita gobierno central, las cuentas independientes con etiquetas también permitirían atribuir el gasto.',
		porQueOpcion: [
			'Correcta: Organizations centraliza el gobierno y la facturación consolidada produce una sola factura, mientras las etiquetas permiten atribuir el gasto a cada filial.',
			'La facturación consolidada no impide la atribución: el gasto se desglosa con etiquetas y con el informe de costos y uso.',
			'Organizations no reparte el gasto por filial de forma automática; para atribuirlo hay que etiquetar y analizar.',
			'AWS Budgets vigila umbrales de gasto; no agrupa cuentas ni emite la factura de la organización.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/organizations/',
			'https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/budgets-managing-costs.html',
		],
	},
	{
		id: 'prof-4.2-q3',
		taskId: '4.2',
		objetivos: ['4.2#4', '4.2#5'],
		tipo: 'comparacion',
		question:
			'¿Qué afirmación distingue correctamente el papel de las etiquetas de asignación de costos, la herramienta que vigila umbrales y la que analiza el gasto registrado?',
		options: [
			'Las etiquetas definen límites de gasto y alertas; la herramienta que vigila umbrales agrupa el gasto por etiqueta; la que analiza el gasto emite las alertas de presupuesto.',
			'Las etiquetas son pares clave-valor para atribuir el gasto; AWS Budgets vigila umbrales y alerta; AWS Cost Explorer analiza y agrupa el gasto ya registrado.',
			'Las tres sirven para lo mismo y se elige una según el tamaño de la cuenta o el número de servicios contratados.',
			'AWS Cost Explorer crea las etiquetas automáticamente y AWS Budgets estima el coste futuro de la arquitectura.',
		],
		correctAnswer: 1,
		explanation:
			'Las etiquetas de asignación de costos son pares clave-valor que permiten atribuir el gasto; AWS Budgets define presupuestos, vigila umbrales y envía alertas; AWS Cost Explorer analiza y agrupa el costo y el uso ya registrados. Si cambia el requisito y lo que se necesita es estimar una arquitectura futura, la respuesta correcta sería AWS Pricing Calculator.',
		porQueOpcion: [
			'Invierte las funciones: las etiquetas no fijan límites, Budgets no agrupa por etiqueta como función principal y Cost Explorer no emite alertas de umbral.',
			'Correcta: etiquetas para atribuir, Budgets para vigilar umbrales con alertas y Cost Explorer para analizar el gasto registrado.',
			'Cumplen funciones distintas y suelen usarse juntas, no como alternativas excluyentes.',
			'Cost Explorer no crea etiquetas y la estimación previa corresponde a AWS Pricing Calculator, no a Budgets.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/budgets-managing-costs.html',
			'https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-what-is.html',
		],
	},
	{
		id: 'prof-4.2-q4',
		taskId: '4.2',
		objetivos: ['4.2#2', '4.2#6'],
		tipo: 'multiConcepto',
		question:
			'Un equipo prepara el presupuesto de un sistema nuevo que aún no existe y necesita precios de referencia de los servicios de AWS. ¿Qué recursos debe usar y con qué límite?',
		options: [
			'La herramienta de análisis para los precios futuros y la de presupuestos para el detalle del catálogo, ya que ambas proyectan tarifas por servicio y por región de AWS.',
			'AWS Pricing Calculator para modelar la arquitectura y estimar el coste, y las páginas de precios de los servicios de AWS para los valores vigentes por región.',
			'El informe de costos y uso como catálogo de precios y AWS Trusted Advisor como estimador de la arquitectura propuesta.',
			'AWS Marketplace como tarifa oficial y AWS Organizations como calculadora de precios del sistema nuevo.',
		],
		correctAnswer: 1,
		explanation:
			'AWS Pricing Calculator estima el costo de una arquitectura antes de crearla, y las páginas de precios de los servicios de AWS publican las tarifas vigentes por región. Las herramientas de costos históricos no sirven para prever precios. Si cambia el requisito y el sistema ya está en producción, el análisis se haría con AWS Cost Explorer sobre el gasto registrado.',
		porQueOpcion: [
			'Cost Explorer refleja gasto ya incurrido, no precios futuros, y Budgets vigila umbrales, no publica tarifas.',
			'Correcta: Pricing Calculator modela la arquitectura sin desplegarla y las páginas de precios publican las tarifas oficiales por servicio y región.',
			'El informe de costos y uso registra el gasto real, no es un catálogo de precios, y Trusted Advisor recomienda, no estima.',
			'Marketplace lista software de terceros y Organizations administra cuentas; ninguno es una calculadora de precios.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/awssupport/latest/user/trusted-advisor.html',
			'https://docs.aws.amazon.com/marketplace/',
			'https://docs.aws.amazon.com/organizations/',
			'https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-what-is.html',
			'https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/budgets-managing-costs.html',
		],
	},
	{
		id: 'prof-4.2-q5',
		taskId: '4.2',
		objetivos: ['4.2#8'],
		tipo: 'servicio',
		question:
			'El equipo de finanzas quiere cruzar cada línea de uso con el proyecto al que pertenece. ¿Qué relación entre etiquetas y el informe de costos y uso es correcta?',
		options: [
			'Las etiquetas activadas como etiquetas de asignación de costos aparecen en cada línea del informe de costos y uso, permitiendo atribuir el gasto por proyecto.',
			'El informe de costos y uso ignora por completo las etiquetas y solo muestra la cuenta y el servicio, sin ningún desglose por proyecto ni por entorno ni por centro de costo.',
			'El informe genera las etiquetas por sí mismo a partir del nombre de los recursos y del proyecto al que pertenecen dentro de la cuenta.',
			'Las etiquetas aparecen en el informe solo si el recurso está en la cuenta de administración de la organización, no en las cuentas miembro.',
		],
		correctAnswer: 0,
		explanation:
			'El informe de costos y uso es el detalle más granular de la facturación. Las etiquetas activadas como etiquetas de asignación de costos se incluyen en cada línea de uso, lo que permite atribuir el gasto por proyecto, equipo o entorno. Si cambia el requisito y solo se necesita un resumen por servicio, bastaría con AWS Cost Explorer en lugar del informe detallado.',
		porQueOpcion: [
			'Correcta: al activar una etiqueta para asignación de costos, el informe de costos y uso la incluye en cada línea de uso.',
			'Falso: el informe es el detalle más granular e incluye las etiquetas activadas para asignación de costos.',
			'Las etiquetas no se crean solas: deben definirse en los recursos y activarse para asignación de costos.',
			'La etiqueta aparece en el informe siempre que esté activada, sin depender de la cuenta que la posea.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-what-is.html',
		],
	},
];
