import type { GrupoTematico } from '@/data/clfC02/types';

export const gruposTask14: GrupoTematico[] = [
	{
		id: '1.4-g1',
		titulo: 'Coste fijo frente a coste variable y costes del entorno on-premises',
		objetivos: ['1.4#1', '1.4#3', '1.4#4'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'La **economía de la nube** describe cómo cambia la estructura de costes al pasar de un centro de datos propio a la nube. El eje de esa estructura es la distinción entre **coste fijo** y **coste variable**.\n\n- **Coste fijo (capex)**: inversión que se paga por adelantado y no depende del uso — servidores comprados, almacenamiento, licencias perpetuas, obra y equipamiento de la sala. Existe aunque no haya ni un solo cliente.\n- **Coste variable (opex)**: se factura según el consumo real — horas de cómputo, GB almacenados, transferencia de datos. Si el recurso no se usa, no se paga.\n\nEn **on-premises** dominan los costes fijos y los costes indirectos: hardware, energía, refrigeración, espacio físico, personal de mantenimiento, seguridad física y el **coste de la capacidad ociosa**, es decir, comprar para el pico de tráfico y desperdiciar esa capacidad el resto del tiempo. En la nube buena parte de ese gasto se convierte en variable y se alinea con la demanda, lo que reduce el riesgo financiero de acertar con la previsión.',
			},
			{
				tipo: 'comparacion',
				parId: 'costes-fijos-vs-variables',
			},
			{
				tipo: 'escenario',
				situacion:
					'Un equipo quiere dimensionar su infraestructura para el pico de Black Friday comprando servidores de más, de forma que el resto del año quede capacidad sin usar.',
				analisis:
					'Comprar para el pico convierte el sobredimensionamiento en un **coste fijo hundido**: se paga también los meses de baja demanda. En la nube el gasto se alinea con el consumo real y el aprovisionamiento se ajusta con elasticidad, de modo que el pico no obliga a mantener recursos ociosos el resto del año. Cuando la carga es estable sí conviene un compromiso (Reserved Instances o Savings Plans) para bajar la tarifa, pero el dimensionado sigue basándose en la necesidad real y no en comprar capacidad física para el peor día.',
				servicio: 'AWS Auto Scaling',
			},
			{
				tipo: 'errorComun',
				error: 'Creer que pasar a la nube siempre sale más barato por sí solo, sin comparar el coste total de cada opción.',
				correccion:
					'La nube no garantiza ahorro automático: hay que comparar el coste total, eliminar la capacidad ociosa, apagar lo que no se usa y elegir el modelo de precio adecuado. El ahorro nace de la elasticidad y del pago por uso, no del proveedor por sí mismo.',
			},
			{
				tipo: 'clave',
				items: [
					'Coste fijo = capex: se paga por adelantado y no depende del uso (hardware, licencias perpetuas, obra).',
					'Coste variable = opex: se factura según el consumo real (cómputo, almacenamiento, transferencia).',
					'On-premises concentra costes fijos e indirectos: energía, refrigeración, espacio, personal y capacidad ociosa.',
					'La nube convierte buena parte del coste fijo en variable y reduce el riesgo de sobredimensionar.',
				],
			},
		],
		preguntasGuia: [
			'¿Qué diferencia hay entre un coste fijo y un coste variable en un centro de datos propio?',
			'¿Por qué el sobredimensionamiento on-premises se paga aunque no se use?',
			'¿De qué depende que migrar a la nube suponga un ahorro real?',
		],
	},
	{
		id: '1.4-g2',
		titulo: 'Ahorro al migrar a la nube y economías de escala',
		objetivos: ['1.4#2', '1.4#8'],
		bloques: [
			{
				tipo: 'concepto',
				md: '**Migrar a la nube** reduce costes por varias vías a la vez:\n\n- Se deja de invertir en **capex** y se pasa a **opex** ligado al consumo.\n- Se **elimina la capacidad ociosa**: no hay que comprar para el pico anual.\n- Se dejan de pagar los costes indirectos del centro de datos (energía, refrigeración, espacio, mantenimiento).\n- Se reduce el trabajo de operar y actualizar hardware, que pasa a ser responsabilidad del proveedor.\n\nLas **economías de escala** son el motor de fondo: un proveedor de nube compra y opera a un volumen enorme y reparte ese coste entre millones de clientes. El **precio por unidad baja** a medida que crece la escala, y esa tarifa reducida se traslada al cliente sin que este tenga que alcanzar ese volumen por su cuenta. El ahorro no es solo «pagar por uso»: es pagar una **tarifa más baja** de la que lograría un centro de datos pequeño.',
			},
			{
				tipo: 'ejemplo',
				md: '```text\nEstructura de coste al migrar\n\nOn-premises              Nube\ncapex alto               opex por consumo\ncapacidad para el pico   capacidad elastica\ncoste fijo alto          coste variable\n+ energia y espacio      tarifa de escala\n+ personal de sala       sin sala que mantener\n```',
			},
			{
				tipo: 'errorComun',
				error: 'Creer que migrar a la nube abarata la factura de forma automática por el simple hecho de usar AWS.',
				correccion:
					'El ahorro depende de ajustar el tamaño de los recursos, apagar lo que no se usa, aprovechar las economías de escala del proveedor y elegir el modelo de precio adecuado. Sin ese trabajo, la factura puede parecerse a la del centro de datos anterior.',
			},
			{
				tipo: 'clave',
				items: [
					'Ahorro al migrar: menos capex, sin capacidad ociosa, menos costes indirectos y menos operación.',
					'Economías de escala: el proveedor compra y opera a gran volumen y traslada un precio unitario menor.',
					'El ahorro no es automático: depende de apagar recursos, ajustar tamaños y elegir el modelo de precio.',
					'A mayor volumen agregado del proveedor, menor coste por unidad para cada cliente.',
				],
			},
		],
		preguntasGuia: [
			'¿Por qué migrar a la nube puede reducir el coste total frente a un centro de datos propio?',
			'¿Qué significa que existan economías de escala en la nube?',
			'¿El ahorro al migrar es automático?',
		],
	},
	{
		id: '1.4-g3',
		titulo: 'Rightsizing, beneficios de la automatización y estrategias de licencias',
		objetivos: ['1.4#5', '1.4#6', '1.4#7'],
		bloques: [
			{
				tipo: 'concepto',
				md: '**Rightsizing** es ajustar el tamaño de los recursos a la carga real. Un recurso sobredimensionado se paga entero aunque se aproveche una fracción; uno infradimensionado degrada el servicio. El right-sizing se apoya en métricas de uso para subir o bajar capacidad de forma continua.\n\nLa **automatización** reduce coste de dos maneras: quita trabajo manual repetitivo y evita que la infraestructura se quede encendida por olvido. Apagar entornos fuera de horario, escalar según la demanda y aplicar cambios de forma reproducible son ejemplos típicos.\n\nLas **estrategias de licencias** afectan directamente a la factura:\n\n- **BYOL (Bring Your Own License)**: la empresa reutiliza licencias que ya posee y paga solo la infraestructura. Aprovecha la inversión previa, pero exige gestionar el cumplimiento y los términos de cada licencia.\n- **Licencias incluidas**: el coste de la licencia va dentro del precio del servicio, sin aportar nada. Simplifica la gestión, pero puede salir más caro si ya se tenían licencias propias.',
			},
			{
				tipo: 'servicio',
				nombre: 'AWS License Manager',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Aplica right-sizing cuando las métricas muestran recursos muy por debajo o por encima de su capacidad.',
					'Automatiza el apagado y el escalado para que la capacidad siga a la demanda sin intervención manual.',
					'Elige BYOL si ya tienes licencias en propiedad y puedes cumplir sus condiciones; elige licencias incluidas si prefieres simplicidad.',
				],
				noUsar: [
					'No dejes servidores encendidos «por si acaso»: el coste de lo infrautilizado se acumula igual.',
					'No apliques BYOL sin revisar la compatibilidad y los términos de la licencia, ni asumas que siempre es más barato.',
				],
			},
			{
				tipo: 'ejemplo',
				md: '```text\nSituacion                 Decision\n- Uso de CPU al 8%         reducir tamano (right-sizing)\n- Entornos de prueba       apagado automatico fuera de horario\n- Ya tengo licencias       evaluar BYOL\n- No quiero gestionar      licencias incluidas\n```',
			},
			{
				tipo: 'errorComun',
				error: 'Creer que right-sizing es reducir tamaño una sola vez, o que BYOL siempre ahorra.',
				correccion:
					'Rightsizing es un ajuste continuo guiado por métricas, no una acción puntual. Y BYOL solo ahorra si las licencias propias son válidas en el entorno elegido y su gestión no cuesta más que la licencia incluida.',
			},
		],
		preguntasGuia: [
			'¿Qué es rightsizing y qué señales indican que hace falta?',
			'¿Cómo reduce costes la automatización?',
			'¿Cuándo conviene BYOL y cuándo una licencia incluida?',
		],
	},
];
