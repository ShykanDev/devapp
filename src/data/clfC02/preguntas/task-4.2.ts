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
			'Únicamente abriendo un caso al soporte técnico de AWS, que es el canal para consultar facturas e historial de pagos.',
			'En el informe de costos y uso, que es el único lugar donde aparecen las facturas y el historial de pagos de la cuenta.',
			'En AWS Pricing Calculator, que guarda el historial de pagos y las facturas de cada mes para su consulta posterior.',
		],
		correctAnswer: 0,
		explanation:
			'La consola de facturación y gestión de costos centraliza facturas, historial de pagos, uso y herramientas de análisis. El soporte de AWS atiende dudas de facturación, pero no es el canal para consultarla; el informe de costos y uso detalla el uso, no sustituye a la consola; y AWS Pricing Calculator solo estima costos. Si cambia el requisito y lo que se busca es una aclaración de un cargo concreto, la respuesta correcta pasaría a ser el soporte de facturación.',
		porQueOpcion: [
			'Correcta: la consola de facturación y gestión de costos reúne facturas, historial de pagos, uso y herramientas de análisis.',
			'Incorrecta: el soporte atiende dudas de facturación, pero no es el canal para consultar facturas e historial de pagos.',
			'Incorrecta: el informe de costos y uso detalla el uso, pero no contiene las facturas ni sustituye a la consola.',
			'Incorrecta: AWS Pricing Calculator solo estima costos y no guarda el historial de pagos ni las facturas.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/Welcome.html',
		],
	},
	{
		id: '4.2-q2',
		taskId: '4.2',
		objetivos: ['4.2#2'],
		tipo: 'conocimiento',
		question: '¿Qué recurso conviene para estimar el costo mensual de una arquitectura antes de crearla?',
		options: [
			'AWS Cost Explorer, porque proyecta el gasto futuro de recursos que todavía no se han creado y compara alternativas de diseño.',
			'AWS Budgets, porque calcula el precio de cada servicio según el uso previsto y genera la estimación mensual de la arquitectura.',
			'AWS Pricing Calculator, porque modela la arquitectura y devuelve una estimación sin desplegar recursos.',
			'El informe de costos y uso, porque adelanta la factura del mes siguiente con el detalle de cada línea de uso previsto.',
		],
		correctAnswer: 2,
		explanation:
			'AWS Pricing Calculator es la herramienta de estimación previa: se modela la arquitectura y se obtiene un costo aproximado sin crear recursos. AWS Cost Explorer y el informe de costos y uso trabajan con gasto ya registrado, y AWS Budgets vigila umbrales, no calcula precios. Si cambia el requisito y lo que se necesita es analizar el gasto del mes pasado, la respuesta correcta sería AWS Cost Explorer.',
		porQueOpcion: [
			'Incorrecta: AWS Cost Explorer trabaja con gasto ya registrado y no modela recursos que todavía no existen.',
			'Incorrecta: AWS Budgets vigila umbrales de gasto, no calcula precios ni genera estimaciones de una arquitectura.',
			'Correcta: AWS Pricing Calculator modela la arquitectura y devuelve una estimación sin desplegar recursos.',
			'Incorrecta: el informe de costos y uso registra el uso real, no anticipa la factura de recursos que aún no existen.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-what-is.html',
			'https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/budgets-managing-costs.html',
		],
	},
	{
		id: '4.2-q3',
		taskId: '4.2',
		objetivos: ['4.2#3'],
		tipo: 'conocimiento',
		question: '¿Qué aporta agrupar muchas cuentas bajo una unidad de gobierno centralizada?',
		options: [
			'Administrar de forma centralizada varias cuentas y sus políticas como una sola unidad de gobierno con una factura conjunta.',
			'Sustituir la consola de facturación y eliminar la necesidad de etiquetas para atribuir el gasto entre equipos.',
			'Convertir todas las cuentas en una sola cuenta con los mismos recursos, límites y credenciales compartidas.',
			'Calcular automáticamente el precio de los servicios contratados y repartir la factura consolidada entre las cuentas miembro.',
		],
		correctAnswer: 0,
		explanation:
			'Agrupar cuentas bajo una administración central aporta gobierno común, políticas y facturación conjunta. No fusiona las cuentas ni elimina la necesidad de etiquetas para atribuir el gasto, y no calcula precios de servicio. Si cambia el requisito y solo se busca unir la factura de todas las cuentas, la capacidad relevante sería la facturación consolidada.',
		porQueOpcion: [
			'Correcta: agrupar cuentas bajo una administración central aporta gobierno común, políticas y facturación conjunta.',
			'Incorrecta: no sustituye a la consola de facturación ni elimina la necesidad de etiquetas para atribuir el gasto.',
			'Incorrecta: no fusiona las cuentas en una sola con recursos, límites y credenciales compartidas.',
			'Incorrecta: no calcula precios de servicio; esa función corresponde a la calculadora de precios.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/Welcome.html',
		],
	},
	{
		id: '4.2-q4',
		taskId: '4.2',
		objetivos: ['4.2#4'],
		tipo: 'conocimiento',
		question: '¿Qué es una etiqueta de asignación de costos?',
		options: [
			'Un límite de gasto que bloquea el uso de los recursos cuando se supera el importe mensual definido.',
			'Un par clave-valor que se aplica a los recursos para desglosar el gasto por criterios de negocio.',
			'Un descuento automático aplicado por AWS según el volumen de uso mensual de cada servicio contratado.',
			'Un informe detallado con cada línea de uso y su precio, que se entrega al final de cada mes.',
		],
		correctAnswer: 1,
		explanation:
			'Las etiquetas de asignación de costos son pares clave-valor, como equipo o proyecto, que permiten atribuir y agrupar el gasto. El límite con alerta es un presupuesto, el descuento por volumen es un efecto de la economía de escala y el detalle línea a línea es el informe de costos y uso. Si cambia la necesidad y lo que se pide es vigilar un umbral, la respuesta correcta sería un presupuesto.',
		porQueOpcion: [
			'Incorrecta: el límite de gasto que bloquea el uso describe un presupuesto, no una etiqueta.',
			'Correcta: la etiqueta de asignación de costos es un par clave-valor que se aplica a los recursos para desglosar el gasto por criterios de negocio.',
			'Incorrecta: el descuento por volumen es un efecto de la economía de escala, no una etiqueta.',
			'Incorrecta: un informe con cada línea de uso y su precio describe el informe de costos y uso.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/Welcome.html',
		],
	},
	{
		id: '4.2-q5',
		taskId: '4.2',
		objetivos: ['4.2#5'],
		tipo: 'comparacion',
		question:
			'¿Qué distingue a la herramienta que analiza el gasto ya registrado de la que estima el costo de una arquitectura futura?',
		options: [
			'La primera estima el costo de una arquitectura futura y la segunda analiza el gasto histórico junto con las tendencias del mes.',
			'AWS Cost Explorer analiza el costo y el uso ya registrados y AWS Pricing Calculator estima el costo de una arquitectura antes de desplegarla.',
			'Ambas analizan solo el gasto futuro y se diferencian en el formato de los informes y en la frecuencia de actualización.',
			'La primera define límites de gasto y envía alertas al superar el umbral, y la segunda analiza el uso pasado agrupado por servicio, cuenta o etiqueta.',
		],
		correctAnswer: 1,
		explanation:
			'AWS Cost Explorer trabaja con datos de costo y uso ya generados, agrupando y filtrando por servicio, cuenta o etiqueta. AWS Pricing Calculator modela una arquitectura hipotética y devuelve una estimación antes de crear recursos. Definir límites es la función de AWS Budgets. Si cambia el requisito y la estimación debe hacerse antes de desplegar, la respuesta correcta sería AWS Pricing Calculator.',
		porQueOpcion: [
			'Incorrecta: invierte las funciones, ya que la primera analiza el gasto registrado y la segunda estima el costo futuro.',
			'Correcta: AWS Cost Explorer analiza el costo y el uso ya registrados y AWS Pricing Calculator estima el costo antes de desplegar.',
			'Incorrecta: no ambas analizan gasto futuro; una trabaja con datos ya generados.',
			'Incorrecta: definir límites y enviar alertas corresponde a AWS Budgets, no al análisis del gasto registrado.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-what-is.html',
			'https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/budgets-managing-costs.html',
		],
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
			'AWS Pricing Calculator, porque avisa cuando la estimación mensual supera el límite que se haya fijado previamente.',
			'El informe de costos y uso, porque bloquea el gasto automáticamente al alcanzar el límite fijado para el entorno.',
			'AWS Organizations, porque suspende las cuentas miembro que se pasan del presupuesto y reparte la factura entre equipos.',
		],
		correctAnswer: 0,
		explanation:
			'AWS Budgets está pensado para vigilar umbrales: se define el presupuesto y se disparan alertas al acercarse o superar el límite. AWS Pricing Calculator solo estima, el informe de costos y uso solo registra el detalle y AWS Organizations administra cuentas, no presupuestos. Si cambia el requisito y lo que se necesita es entender qué servicio provocó el gasto, la respuesta correcta sería AWS Cost Explorer.',
		porQueOpcion: [
			'Correcta: AWS Budgets define el presupuesto y dispara alertas al acercarse o superar el umbral.',
			'Incorrecta: AWS Pricing Calculator solo estima y no emite avisos cuando se supera un límite.',
			'Incorrecta: el informe de costos y uso registra el detalle, pero no bloquea el gasto automáticamente.',
			'Incorrecta: AWS Organizations administra cuentas y no suspende por presupuesto ni reparte la factura.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/budgets-managing-costs.html',
			'https://docs.aws.amazon.com/organizations/',
			'https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-what-is.html',
		],
	},
	{
		id: '4.2-q7',
		taskId: '4.2',
		objetivos: ['4.2#5'],
		tipo: 'conocimiento',
		question: '¿Para qué sirve principalmente la herramienta de análisis del gasto ya registrado?',
		options: [
			'Para estimar el costo de recursos que todavía no se han creado y comparar alternativas de diseño.',
			'Para vigilar un límite de gasto y enviar alertas automáticas al acercarse o superar el umbral fijado antes.',
			'Para analizar el costo y el uso ya registrados, agrupando y filtrando por servicio, cuenta o etiqueta.',
			'Para administrar de forma centralizada varias cuentas y aplicar políticas de gobierno sobre ellas.',
		],
		correctAnswer: 2,
		explanation:
			'AWS Cost Explorer analiza el gasto existente y permite agrupar y filtrar por dimensiones como servicio, cuenta o etiqueta. Estimar es propio de AWS Pricing Calculator, vigilar límites de AWS Budgets y administrar cuentas de AWS Organizations. Si cambia el objetivo y lo que se pide es vigilar un límite con alertas, la respuesta correcta sería AWS Budgets.',
		porQueOpcion: [
			'Incorrecta: estimar recursos que todavía no se han creado corresponde a AWS Pricing Calculator.',
			'Incorrecta: vigilar un límite y enviar alertas es función de AWS Budgets.',
			'Correcta: el análisis del gasto registrado agrupa y filtra por servicio, cuenta o etiqueta.',
			'Incorrecta: administrar cuentas y aplicar políticas de gobierno corresponde a AWS Organizations.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/budgets-managing-costs.html',
			'https://docs.aws.amazon.com/organizations/',
			'https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-what-is.html',
		],
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
			'Debe usar AWS Cost Explorer, porque calcula el precio futuro de las instancias y compara configuraciones antes de crearlas.',
			'Debe usar AWS Budgets, porque compara el precio de dos configuraciones y genera una estimación mensual del gasto.',
			'Ninguna herramienta sirve: solo la factura final indica el costo real de una arquitectura y de sus tamaños de instancia.',
		],
		correctAnswer: 0,
		explanation:
			'AWS Pricing Calculator permite modelar la arquitectura, ajustar cantidades y obtener una estimación antes de crear recursos, justo lo necesario para comparar alternativas. AWS Cost Explorer y la factura reflejan gasto real, y AWS Budgets vigila umbrales. Si cambia el momento y la comparación se hace sobre facturas ya emitidas, la respuesta correcta sería AWS Cost Explorer.',
		porQueOpcion: [
			'Correcta: AWS Pricing Calculator modela la arquitectura y estima el costo sin desplegar recursos, lo que permite comparar alternativas.',
			'Incorrecta: AWS Cost Explorer refleja gasto real y no calcula el precio de recursos futuros.',
			'Incorrecta: AWS Budgets vigila umbrales, no compara precios de configuraciones.',
			'Incorrecta: la factura final muestra el costo real, pero no permite comparar alternativas antes de crear recursos.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-what-is.html',
			'https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/budgets-managing-costs.html',
		],
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
			'Facturar por separado es la única forma de saber cuánto gasta cada equipo, porque la factura consolidada oculta el detalle por filial.',
			'La facturación consolidada reparte los cargos entre equipos de forma automática y genera un informe por filial.',
			'AWS Pricing Calculator emite la factura única de la organización y divide el gasto por equipo según su consumo.',
		],
		correctAnswer: 0,
		explanation:
			'La facturación consolidada de AWS Organizations reúne el uso de todas las cuentas miembro en una sola factura; la atribución por equipo se logra etiquetando los recursos y analizando el gasto con esas etiquetas. Consolidar no reparte el costo automáticamente. Si cambia el requisito y se factura cada cuenta por separado, la atribución por equipo sería directa pero se perdería la factura única.',
		porQueOpcion: [
			'Correcta: la facturación consolidada emite una sola factura y las etiquetas de asignación de costos permiten atribuir el gasto por equipo.',
			'Incorrecta: la factura consolidada no oculta el detalle y facturar por separado no es la única vía para atribuir el gasto.',
			'Incorrecta: consolidar no reparte el costo entre equipos de forma automática.',
			'Incorrecta: AWS Pricing Calculator estima costos y no emite facturas ni divide el gasto por equipo.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/organizations/',
		],
	},
	{
		id: '4.2-q10',
		taskId: '4.2',
		objetivos: ['4.2#8'],
		tipo: 'conocimiento',
		question: '¿Cómo se relacionan las etiquetas de asignación de costos con el informe de costos y uso?',
		options: [
			'El informe crea las etiquetas automáticamente al final de cada mes a partir del nombre y el tipo de cada recurso.',
			'Las etiquetas activadas aparecen en cada línea de uso del informe, de modo que el gasto se puede cruzar con criterios de negocio.',
			'Las etiquetas sustituyen al informe cuando el número de recursos es pequeño y el análisis por cuenta es suficiente.',
			'El informe ignora por completo las etiquetas y solo agrupa por cuenta y por servicio, sin mostrar los valores definidos por el usuario.',
		],
		correctAnswer: 1,
		explanation:
			'El informe de costos y uso es el detalle más granular de facturación e incluye las etiquetas que se han activado como etiquetas de asignación de costos. Así cada línea de uso se puede atribuir a un equipo, proyecto o entorno. Las etiquetas no se generan solas al cerrar el mes. Si cambia el requisito y solo se necesita un resumen por servicio del mes en curso, la respuesta correcta sería AWS Cost Explorer.',
		porQueOpcion: [
			'Incorrecta: el informe no crea etiquetas; hay que definirlas y activarlas como etiquetas de asignación de costos.',
			'Correcta: las etiquetas activadas aparecen en cada línea de uso del informe y permiten cruzar el gasto con criterios de negocio.',
			'Incorrecta: las etiquetas no sustituyen al informe cuando el análisis por cuenta resulta suficiente.',
			'Incorrecta: el informe sí incluye las etiquetas activadas como etiquetas de asignación de costos en cada línea.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-what-is.html',
		],
	},
	{
		id: '4.2-q11',
		taskId: '4.2',
		objetivos: ['4.2#1'],
		tipo: 'escenario',
		question:
			'Ante una discrepancia en la factura, un equipo necesita revisar el detalle del uso del mes y entender de dónde viene un cargo antes de reclamar. ¿Qué recurso debe usar primero?',
		options: [
			'La consola de facturación y gestión de costos, que reúne facturas, uso y herramientas de análisis del gasto registrado.',
			'Un caso de soporte técnico de severidad crítica, porque solo el soporte puede desglosar el uso facturado de cada cuenta.',
			'La calculadora de precios, porque reproduce el coste mensual de la arquitectura desplegada y detalla los cargos reales de cada servicio.',
			'El informe de costos y uso, porque es el único recurso que explica el origen de un cargo antes de reclamarlo.',
		],
		correctAnswer: 0,
		explanation:
			'La consola de facturación y gestión de costos reúne las facturas, el uso y las herramientas de análisis para entender un cargo; el caso de soporte y la calculadora no sustituyen ese análisis. Si cambia el escenario y el equipo ya identificó el cargo pero necesita una aclaración formal, el recurso correcto pasaría a ser el soporte de facturación.',
		porQueOpcion: [
			'Correcta: la consola de facturación y gestión de costos reúne facturas, uso y análisis para entender un cargo.',
			'Incorrecta: un caso de soporte no es el primer recurso para desglosar el uso; aclara cargos, pero no sustituye el análisis.',
			'Incorrecta: la calculadora estima arquitecturas y no reproduce los cargos reales de recursos desplegados.',
			'Incorrecta: el informe detalla el uso, pero no es el único recurso ni el punto de entrada a las facturas.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/Welcome.html',
		],
	},
	{
		id: '4.2-q12',
		taskId: '4.2',
		objetivos: ['4.2#2'],
		tipo: 'casoDeUso',
		question:
			'Un equipo prepara la propuesta de un sistema que todavía no existe y necesita una cifra mensual para comparar dos diseños. ¿Qué recurso encaja mejor?',
		options: [
			'La calculadora de precios, porque modela la arquitectura y devuelve una estimación sin desplegar recursos.',
			'La herramienta de análisis del gasto registrado, porque proyecta el coste futuro del sistema a partir del uso actual.',
			'La herramienta de presupuestos, porque calcula el precio de cada servicio según el uso previsto del diseño.',
			'El informe de costos y uso, porque adelanta la factura del mes siguiente con el detalle de las líneas previstas.',
		],
		correctAnswer: 0,
		explanation:
			'La calculadora de precios modela el sistema propuesto y estima su coste mensual sin crear recursos, que es lo que permite comparar diseños. Las herramientas de análisis y de informes trabajan con gasto real, y la de presupuestos vigila umbrales. Si cambia el caso de uso y el sistema ya está desplegado, la comparación se haría con la herramienta de análisis del gasto registrado.',
		porQueOpcion: [
			'Correcta: la calculadora de precios modela la arquitectura y devuelve una estimación sin desplegar recursos.',
			'Incorrecta: el análisis del gasto registrado trabaja con datos reales y no proyecta un sistema que aún no existe.',
			'Incorrecta: la herramienta de presupuestos vigila umbrales, no calcula precios de servicios.',
			'Incorrecta: el informe de costos y uso registra el uso real ya generado, no anticipa la factura de un sistema no desplegado.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/Welcome.html',
		],
	},
	{
		id: '4.2-q13',
		taskId: '4.2',
		objetivos: ['4.2#3', '4.2#7'],
		tipo: 'comparacion',
		question: '¿Qué distingue a las cuentas independientes de una organización con facturación consolidada?',
		options: [
			'La organización administra las cuentas como una unidad y emite una sola factura; las cuentas independientes se facturan y gobiernan por separado.',
			'La organización fusiona los recursos de todas las cuentas en una sola y comparte credenciales, límites y políticas entre todas las cuentas miembro.',
			'Las cuentas independientes alcanzan antes los descuentos por volumen porque su uso se agrega y se factura conjuntamente.',
			'La facturación consolidada impide etiquetar recursos, por lo que no se puede atribuir el gasto a cada equipo o proyecto.',
		],
		correctAnswer: 0,
		explanation:
			'La organización centraliza el gobierno y la facturación en una sola unidad, mientras que las cuentas independientes se gestionan y facturan por separado. No fusiona recursos ni credenciales, y la facturación consolidada sí permite atribuir el gasto con etiquetas. Si cambia el diseño y se opta por cuentas independientes, se pierde la factura única pero se gana aislamiento entre equipos.',
		porQueOpcion: [
			'Correcta: la organización administra las cuentas como una unidad con una sola factura, mientras las independientes se facturan y gobiernan por separado.',
			'Incorrecta: la organización no fusiona recursos ni comparte credenciales, límites y políticas entre todas las cuentas miembro.',
			'Incorrecta: las cuentas independientes no agregan su uso, así que no alcanzan antes los descuentos por volumen.',
			'Incorrecta: la facturación consolidada sí permite etiquetar y atribuir el gasto a cada equipo o proyecto.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/Welcome.html',
		],
	},
	{
		id: '4.2-q14',
		taskId: '4.2',
		objetivos: ['4.2#3'],
		tipo: 'escenario',
		question:
			'Una empresa crece por adquisiciones y ya tiene doce cuentas con equipos distintos; aunque el sector al que se dedica no es relevante para la decisión, necesita un gobierno central, políticas comunes y una sola factura. ¿Qué debe hacer?',
		options: [
			'Agrupar las cuentas en una organización con administración central y facturación consolidada, aplicando etiquetas para atribuir el gasto.',
			'Mantener las doce cuentas independientes y unificar la factura manualmente con una hoja de cálculo que reparta el gasto por equipo y proyecto.',
			'Fusionar las doce cuentas en una sola cuenta con credenciales compartidas para todos los equipos de la empresa.',
			'Contratar un plan de soporte empresarial, porque es lo que permite agrupar cuentas y emitir una factura única.',
		],
		correctAnswer: 0,
		explanation:
			'Agrupar las cuentas en una organización resuelve el gobierno central y la factura consolidada, y las etiquetas atribuyen el gasto por equipo. No hace falta fusionar cuentas ni contratar un plan de soporte para lograrlo. Si cambia el requisito y solo se necesita unir la factura sin gobierno central, la facturación consolidada por sí sola bastaría.',
		porQueOpcion: [
			'Correcta: agrupar las cuentas en una organización da gobierno central, políticas comunes y facturación consolidada, con etiquetas para atribuir el gasto.',
			'Incorrecta: mantenerlas independientes y unificar la factura a mano no aporta gobierno central ni políticas comunes.',
			'Incorrecta: fusionar en una sola cuenta con credenciales compartidas elimina el aislamiento y no es el enfoque recomendado.',
			'Incorrecta: el plan de soporte no agrupa cuentas ni emite una factura única.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/Welcome.html',
		],
	},
	{
		id: '4.2-q15',
		taskId: '4.2',
		objetivos: ['4.2#4', '4.2#8'],
		tipo: 'comparacion',
		question: '¿Qué distingue a una etiqueta de asignación de costos del informe de costos y uso?',
		options: [
			'La etiqueta aporta el criterio de negocio con el que se atribuye el gasto; el informe aporta el detalle de cada línea de uso con esas etiquetas.',
			'La etiqueta es el detalle línea a línea de la factura y el informe es el par clave-valor que define el criterio de negocio y su valor concreto asociado.',
			'Ambos son informes de facturación: la etiqueta se entrega al final del mes y el informe se consulta en tiempo real.',
			'La etiqueta define límites de gasto y el informe envía alertas cuando el consumo supera el umbral configurado.',
		],
		correctAnswer: 0,
		explanation:
			'La etiqueta es el criterio (clave-valor) que se aplica a los recursos y se activa para asignación de costos; el informe es el detalle granular que incluye esas etiquetas en cada línea de uso. Ninguno fija límites ni sustituye al otro. Si cambia el requisito y solo se necesita el criterio sin el detalle, basta con definir y activar la etiqueta.',
		porQueOpcion: [
			'Correcta: la etiqueta aporta el criterio de negocio y el informe el detalle de cada línea de uso con esas etiquetas.',
			'Incorrecta: invierte los conceptos, ya que la etiqueta es el par clave-valor y el informe el detalle línea a línea.',
			'Incorrecta: no ambos son informes; la etiqueta es un criterio que se aplica a los recursos.',
			'Incorrecta: la etiqueta no define límites ni el informe envía alertas; eso corresponde a un presupuesto.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/Welcome.html',
		],
	},
	{
		id: '4.2-q16',
		taskId: '4.2',
		objetivos: ['4.2#4', '4.2#8'],
		tipo: 'escenario',
		question:
			'Una empresa quiere saber cuánto gasta cada equipo y cada proyecto con el detalle mensual por línea de uso; aunque el número de cuentas de la organización no afecta al análisis, ¿qué combinación lo permite?',
		options: [
			'Etiquetar los recursos con claves de negocio, activarlas como etiquetas de asignación de costos y analizar el detalle en el informe de costos y uso.',
			'Etiquetar los recursos y dejarlas sin activar como etiquetas de asignación de costos, porque el informe de costos y uso lee todas las etiquetas por defecto.',
			'Usar solo el nombre del recurso, porque el informe de costos y uso agrupa automáticamente por convención de nombres de recursos.',
			'Definir un presupuesto por equipo, porque la herramienta de presupuestos atribuye el gasto a cada proyecto y a cada línea de uso.',
		],
		correctAnswer: 0,
		explanation:
			'El criterio de negocio lo aportan las etiquetas, pero deben activarse para asignación de costos; el detalle línea a línea lo aporta el informe de costos y uso. Etiquetar sin activar no propaga la etiqueta a la facturación, y el presupuesto no atribuye el gasto por proyecto. Si cambia el escenario y solo se quiere vigilar un umbral de gasto, la respuesta correcta sería un presupuesto con alertas.',
		porQueOpcion: [
			'Correcta: etiquetar con claves de negocio, activarlas como asignación de costos y analizar el detalle en el informe permite atribuir el gasto por equipo y proyecto.',
			'Incorrecta: si no se activan, las etiquetas no se propagan a la facturación y el informe no las lee por defecto.',
			'Incorrecta: el informe no agrupa por convención de nombres; requiere etiquetas activadas.',
			'Incorrecta: el presupuesto vigila umbrales y no atribuye el gasto por proyecto ni por línea de uso.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/Welcome.html',
		],
	},
	{
		id: '4.2-q17',
		taskId: '4.2',
		objetivos: ['4.2#6'],
		tipo: 'escenario',
		question:
			'Un equipo quiere estimar el coste mensual de tres tamaños distintos de instancia antes de decidir cuál desplegar. ¿Qué recurso debe usar?',
		options: [
			'La calculadora de precios, porque modela cada configuración y devuelve una estimación sin desplegar recursos.',
			'La herramienta de análisis del gasto registrado, porque compara el precio de configuraciones que aún no existen.',
			'La herramienta de presupuestos, porque fija el precio de cada tamaño y envía alertas si la estimación sube.',
			'El informe de costos y uso, porque muestra el coste de cada tamaño en cuanto se crea la primera instancia.',
		],
		correctAnswer: 0,
		explanation:
			'La calculadora de precios permite modelar cada configuración antes de crearla y comparar sus estimaciones. La herramienta de análisis y el informe describen gasto ya generado, y la de presupuestos vigila umbrales. Si cambia el requisito y los tres tamaños ya están desplegados, la comparación se haría con la herramienta de análisis del gasto registrado.',
		porQueOpcion: [
			'Correcta: la calculadora de precios modela cada configuración y devuelve una estimación sin desplegar recursos.',
			'Incorrecta: el análisis del gasto registrado compara configuraciones ya existentes, no futuras.',
			'Incorrecta: la herramienta de presupuestos no fija precios de instancias; vigila umbrales de gasto.',
			'Incorrecta: el informe muestra el gasto real una vez generado y exige que el recurso exista, así que no estima antes de decidir.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/Welcome.html',
		],
	},
];
