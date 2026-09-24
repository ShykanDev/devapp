import type { PreguntaProfesionalClfC02 } from '@/data/clfC02/profesional/types';

export const profesionalTask14: PreguntaProfesionalClfC02[] = [
	{
		id: 'prof-1.4-q1',
		taskId: '1.4',
		objetivos: ['1.4#1'],
		tipo: 'multiConcepto',
		question:
			'¿Qué abarca el análisis de economía de la nube al comparar AWS con un entorno local?',
		options: [
			'El modelo de gasto (fijo frente a variable), el coste total de propiedad y los factores que van más allá del precio unitario.',
			'Solo el precio por GB almacenado y el precio por hora de cómputo.',
			'Solo la factura mensual de los últimos tres meses en AWS.',
			'El número de empleados dedicados a operar los centros de datos propios.',
		],
		correctAnswer: 0,
		explanation:
			'La economía de la nube analiza el modelo de gasto, el coste total de propiedad y factores como la operación o la agilidad, no solo precios unitarios o la factura reciente. Las partidas de personal son un componente, no el análisis completo.',
		porQueOpcion: [
			'Correcta: cubre modelo de gasto, coste total de propiedad y factores adicionales.',
			'Incorrecta: el precio unitario es solo una parte, no todo el análisis económico.',
			'Incorrecta: la factura reciente por sí sola no explica la economía de la adopción.',
			'Incorrecta: el personal es una partida concreta, no el alcance del análisis económico.',
		],
	},
	{
		id: 'prof-1.4-q2',
		taskId: '1.4',
		objetivos: ['1.4#2'],
		tipo: 'comparacion',
		question: '¿Cuál es la razón principal por la que migrar a la nube puede reducir costes?',
		options: [
			'Se deja de invertir en centros de datos y servidores propios, pagando solo por el consumo.',
			'AWS regala los primeros meses de uso de todos sus servicios.',
			'Los precios de AWS son siempre inferiores a cualquier coste local.',
			'Se eliminan por completo los gastos operativos, que pasan a ser cero.',
		],
		correctAnswer: 0,
		explanation:
			'El ahorro proviene de evitar la inversión en infraestructura propia y de pagar según el consumo. No existe un periodo de regalo general, los precios no son siempre menores y los gastos operativos no desaparecen: se transforman.',
		porQueOpcion: [
			'Correcta: evita la inversión propia y alinea el gasto con el consumo.',
			'Incorrecta: AWS no regala de forma generalizada los servicios en sus primeros meses.',
			'Incorrecta: AWS no garantiza precios siempre inferiores a cualquier coste local.',
			'Incorrecta: los gastos operativos no se vuelven cero, cambian de naturaleza.',
		],
	},
	{
		id: 'prof-1.4-q3',
		taskId: '1.4',
		objetivos: ['1.4#3'],
		tipo: 'comparacion',
		question:
			'¿Qué describe correctamente la diferencia entre costes fijos y variables en la nube?',
		options: [
			'Los costes variables dependen del consumo y permiten pagar solo por lo usado; los fijos se mantienen con independencia del uso.',
			'En la nube todos los costes son fijos, porque los recursos se reservan por adelantado.',
			'En la nube todos los costes son variables, porque no existe ninguna opción de reserva.',
			'Los costes fijos dependen del tráfico y los variables del número de empleados.',
		],
		correctAnswer: 0,
		explanation:
			'Un coste variable crece o decrece con el consumo y un coste fijo no depende del uso. En AWS conviven ambos: el pago por uso es variable, mientras que opciones como los compromisos de reserva introducen un componente fijo.',
		porQueOpcion: [
			'Correcta: define correctamente coste variable por consumo y fijo por independencia del uso.',
			'Incorrecta: no todos los costes en la nube son fijos; el pago por uso es variable.',
			'Incorrecta: no todos los costes son variables; existen compromisos y cargos fijos.',
			'Incorrecta: invierte la relación entre tráfico, personal y tipo de coste.',
		],
	},
	{
		id: 'prof-1.4-q4',
		taskId: '1.4',
		objetivos: ['1.4#3'],
		tipo: 'escenario',
		question:
			'Una empresa con demanda muy variable quiere dejar de pagar por capacidad infrautilizada. ¿Qué característica del modelo de AWS responde mejor a esa necesidad?',
		options: [
			'El pago por uso, que convierte gran parte del gasto en variable y lo ajusta al consumo real.',
			'Los precios de AWS, que incluyen un descuento fijo por contratar un año de servicio.',
			'El soporte técnico, que asesora para reducir el gasto contratado.',
			'Las economías de escala, que garantizan un precio mínimo por hora.',
		],
		correctAnswer: 0,
		explanation:
			'El pago por uso convierte el gasto en variable y evita pagar capacidad infrautilizada, que es lo que busca una demanda variable. La reserva es útil para uso estable, el soporte no cambia el modelo de precios y las economías de escala no fijan precios mínimos.',
		porQueOpcion: [
			'Correcta: el pago por uso alinea el coste con el consumo y evita capacidad ociosa.',
			'Incorrecta: un compromiso anual reduce el precio para uso predecible, no para demanda variable.',
			'Incorrecta: el soporte no modifica el modelo de precios ni elimina la capacidad ociosa.',
			'Incorrecta: las economías de escala no garantizan precios mínimos por hora.',
		],
	},
	{
		id: 'prof-1.4-q5',
		taskId: '1.4',
		objetivos: ['1.4#4'],
		tipo: 'trampa',
		question:
			'Al comparar el coste de un entorno local con AWS, ¿qué partidas deben incluirse además del precio del hardware?',
		options: [
			'Energía, refrigeración, espacio físico, mantenimiento, personal y la renovación periódica del hardware.',
			'Solo la licencia del sistema operativo y el cableado de red.',
			'Solo el salario del equipo que administra los servidores.',
			'Únicamente la amortización del hardware en cinco años.',
		],
		correctAnswer: 0,
		explanation:
			'El coste de un entorno local incluye muchas partidas además del hardware: energía, refrigeración, espacio, mantenimiento, personal y renovación. Considerar solo una o dos de ellas infravalora el coste y sesga la comparación.',
		porQueOpcion: [
			'Correcta: recoge las partidas relevantes del coste local más allá del hardware.',
			'Incorrecta: licencias y cableado son solo una parte y omiten energía, espacio o personal.',
			'Incorrecta: el personal es una partida más, no el coste completo del entorno local.',
			'Incorrecta: la amortización del hardware no incluye operación ni instalaciones.',
		],
	},
	{
		id: 'prof-1.4-q6',
		taskId: '1.4',
		objetivos: ['1.4#5'],
		tipo: 'comparacion',
		question: '¿Qué diferencia hay entre el modelo BYOL y las licencias incluidas en AWS?',
		options: [
			'Con BYOL el cliente reutiliza sus licencias existentes en AWS; con las incluidas, el coste de la licencia forma parte del precio del servicio.',
			'Con BYOL AWS aporta la licencia y el cliente solo paga el cómputo.',
			'Ambos modelos obligan a comprar una licencia nueva por cada instancia.',
			'Las licencias incluidas permiten usar software propio sin coste adicional alguno.',
		],
		correctAnswer: 0,
		explanation:
			'BYOL permite llevar las licencias ya adquiridas al entorno de AWS, mientras que en las licencias incluidas el software viene con el servicio y su coste está en el precio. Ninguno obliga a comprar licencia nueva siempre ni regala el software propio.',
		porQueOpcion: [
			'Correcta: BYOL reutiliza licencias propias; las incluidas van dentro del precio del servicio.',
			'Incorrecta: en BYOL la licencia la aporta el cliente, no AWS.',
			'Incorrecta: BYOL precisamente evita comprar licencias nuevas.',
			'Incorrecta: las licencias incluidas se refieren al software del servicio, no a software propio.',
		],
	},
	{
		id: 'prof-1.4-q7',
		taskId: '1.4',
		objetivos: ['1.4#6'],
		tipo: 'escenario',
		question:
			'Un equipo detecta que sus instancias usan menos del 10 % de CPU de forma sostenida. ¿Qué acción corresponde a un buen rightsizing?',
		options: [
			'Reducir el tamaño o cambiar el tipo de instancia para ajustarla a la carga real observada.',
			'Añadir más instancias del mismo tamaño para repartir mejor la carga.',
			'Comprar instancias reservadas para fijar el coste actual.',
			'Activar el escalado automático sin revisar el tamaño elegido.',
		],
		correctAnswer: 0,
		explanation:
			'El rightsizing ajusta el tipo o tamaño de recurso a la carga real; con un uso sostenido del 10 % procede reducir la instancia. Añadir instancias o reservar fija el sobredimensionamiento, y el escalado automático no corrige un tamaño inadecuado por sí solo.',
		porQueOpcion: [
			'Correcta: reducir o cambiar el tipo ajusta el recurso a la carga observada.',
			'Incorrecta: añadir instancias aumenta el gasto sin corregir el sobredimensionamiento.',
			'Incorrecta: reservar consolida el coste de un recurso que está sobredimensionado.',
			'Incorrecta: el escalado automático no sustituye la revisión del tamaño correcto.',
		],
	},
	{
		id: 'prof-1.4-q8',
		taskId: '1.4',
		objetivos: ['1.4#7'],
		tipo: 'comparacion',
		question:
			'¿Qué beneficio directo aporta la automatización en la gestión de costes en AWS?',
		options: [
			'Reduce el trabajo manual, disminuye errores y permite aplicar de forma consistente acciones como apagar recursos fuera de horario.',
			'Elimina la factura de cómputo de las instancias automatizadas.',
			'Sustituye la necesidad de definir presupuestos y alertas.',
			'Convierte todos los costes variables en costes fijos.',
		],
		correctAnswer: 0,
		explanation:
			'La automatización reduce el esfuerzo manual y los errores, y permite aplicar de forma repetible medidas de ahorro, como detener recursos cuando no se usan. No elimina la factura, no reemplaza los presupuestos y alertas ni cambia la naturaleza de los costes.',
		porQueOpcion: [
			'Correcta: aporta consistencia, menos errores y acciones de ahorro repetibles.',
			'Incorrecta: la automatización no elimina el coste del cómputo que se sigue consumiendo.',
			'Incorrecta: los presupuestos y alertas siguen siendo necesarios para controlar el gasto.',
			'Incorrecta: no transforma los costes variables en fijos.',
		],
	},
	{
		id: 'prof-1.4-q9',
		taskId: '1.4',
		objetivos: ['1.4#8'],
		tipo: 'comparacion',
		question:
			'¿Por qué las economías de escala permiten a AWS ofrecer precios competitivos?',
		options: [
			'Porque al agregar la demanda de muchos clientes baja el coste unitario de la infraestructura y parte de ese ahorro se traslada al precio.',
			'Porque cada cliente paga una cuota fija que cubre el coste total de la infraestructura.',
			'Porque AWS compra hardware más caro para obtener mejor rendimiento.',
			'Porque los precios de AWS aumentan a medida que crece el volumen de uso del cliente.',
		],
		correctAnswer: 0,
		explanation:
			'Las economías de escala reducen el coste unitario al agregar la demanda de muchos clientes, y parte del ahorro se refleja en los precios. No se basa en cuotas fijas que cubran la infraestructura, ni en hardware más caro, ni en subir precios con el uso.',
		porQueOpcion: [
			'Correcta: la agregación de demanda baja el coste unitario y traslada ahorro al precio.',
			'Incorrecta: el modelo de AWS no es una cuota fija que cubra la infraestructura.',
			'Incorrecta: comprar hardware más caro no explica unas economías de escala.',
			'Incorrecta: los precios por unidad no aumentan con el volumen de uso del cliente.',
		],
	},
];
