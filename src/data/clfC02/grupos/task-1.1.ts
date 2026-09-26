import type { GrupoTematico } from '@/data/clfC02/types';

export const gruposTask11: GrupoTematico[] = [
	{
		id: '1.1-g1',
		titulo: 'Propuesta de valor de la nube de AWS',
		objetivos: ['1.1#1'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'La **propuesta de valor** de la nube de AWS consiste en cambiar la forma de adquirir y operar la tecnología:\n\n- **Pago por uso**: se paga solo por lo que se consume, sin comprar hardware por adelantado.\n- **Eliminación de capacidad ociosa**: la capacidad se ajusta a la demanda en lugar de dimensionarse para el pico.\n- **Economías de escala**: al agregar el consumo de millones de clientes, AWS puede ofrecer precios más bajos.\n- **Velocidad y agilidad**: los recursos se aprovisionan en minutos y se experimenta sin grandes inversiones.\n- **Alcance global**: se despliega en regiones de todo el mundo sin construir centros de datos propios.\n- **Seguridad y fiabilidad**: infraestructura y servicios gestionados que asumen parte de la carga operativa.\n\nEn conjunto, la propuesta de valor es **convertir el gasto fijo en gasto variable** y ganar velocidad: se pasa de comprar y mantener servidores a consumir servicios cuando se necesitan.',
			},
			{
				tipo: 'ejemplo',
				md: '```text\nModelo tradicional:\n  comprar servidores para el pico -> capacidad ociosa el resto del año\n\nModelo AWS Cloud:\n  aprovisionar lo necesario -> crecer y decrecer según la demanda\n  pagar por uso -> el coste sigue al consumo real\n```',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Usa la nube de AWS cuando necesites convertir inversión fija en coste variable y escalar sin comprar hardware.',
					'Apóyate en servicios gestionados cuando quieras reducir la carga operativa y centrarte en el producto.',
				],
				noUsar: [
					'No justifiques la nube solo por precio: la propuesta de valor también incluye velocidad, alcance global y elasticidad.',
					'No asumas que toda carga de trabajo encaja igual: cada una necesita evaluar su modelo de coste y de operación.',
				],
			},
			{
				tipo: 'errorComun',
				error: 'Creer que la propuesta de valor de la nube es únicamente ahorrar dinero en la factura.',
				correccion:
					'El ahorro es un efecto del pago por uso y de las economías de escala, pero la propuesta de valor incluye también agilidad, alcance global y capacidad de innovar más rápido. La nube cambia el modelo de coste y de operación, no solo el precio.',
			},
		],
		preguntasGuia: [
			'¿Qué significa convertir gasto fijo en gasto variable?',
			'¿Por qué el pago por uso y las economías de escala reducen el coste?',
			'¿Qué beneficios además del precio forman parte de la propuesta de valor?',
		],
	},
	{
		id: '1.1-g2',
		titulo: 'Infraestructura global: velocidad de despliegue y alcance global',
		objetivos: ['1.1#2'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'La **infraestructura global** de AWS está formada por regiones, Availability Zones y edge locations repartidas por el mundo. De ella salen dos beneficios centrales:\n\n- **Velocidad de despliegue**: en minutos se crean recursos en cualquier región, sin esperar a comprar y montar centros de datos. Eso acorta el tiempo entre la idea y la producción.\n- **Alcance global**: el mismo servicio está disponible en muchas zonas geográficas, de modo que una aplicación puede servir a usuarios de otros continentes sin abrir infraestructura propia.\n\nLa infraestructura global actúa como plataforma común: se elige la región cercana a los usuarios para reducir la latencia y se distribuye el contenido con las edge locations para acercar la entrega. Todo ello sin gestionar el cableado ni los edificios.',
			},
			{
				tipo: 'comparacion',
				parId: 'velocidad-despliegue-vs-alcance-global',
			},
			{
				tipo: 'escenario',
				situacion:
					'Una startup debe publicar su aplicación en un plazo de dos semanas para clientes de varios países. No tiene presupuesto para montar infraestructura fuera de su país y necesita que las descargas sean rápidas desde cualquier continente.',
				analisis:
					'La infraestructura global permite desplegar en minutos en la región adecuada y distribuir el contenido estático con **edge locations**, de modo que la entrega se acerca al usuario sin abrir centros de datos propios. La velocidad de despliegue atiende el plazo y el alcance global atiende a la audiencia internacional.',
				servicio: 'Amazon CloudFront',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Usa la infraestructura global cuando el plazo de puesta en producción sea corto: los recursos están disponibles en minutos.',
					'Apóyate en las ubicaciones de borde cuando el contenido deba entregarse con baja latencia a usuarios de varios continentes.',
				],
				noUsar: [
					'No confundas el alcance global con replicar todos los datos en cada región: la residencia y la replicación son decisiones de diseño aparte.',
					'No esperes que la infraestructura global garantice por sí sola la continuidad: para tolerar fallos hay que diseñar la redundancia.',
				],
			},
			{
				tipo: 'clave',
				items: [
					'Velocidad de despliegue: recursos disponibles en minutos, en cualquier región, sin comprar hardware.',
					'Alcance global: la misma plataforma sirve a usuarios de todo el mundo.',
					'La infraestructura global reduce la distancia entre la aplicación y el usuario.',
					'No hace falta construir ni mantener centros de datos propios para operar a escala mundial.',
				],
			},
		],
		preguntasGuia: [
			'¿Qué ventaja aporta desplegar en minutos en lugar de comprar hardware?',
			'¿Cómo ayuda la infraestructura global a llegar a usuarios de otros continentes?',
			'¿Por qué el alcance global es un beneficio y no solo una cuestión de tamaño?',
		],
	},
	{
		id: '1.1-g3',
		titulo: 'Alta disponibilidad, elasticidad y agilidad',
		objetivos: ['1.1#3'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'Tres ventajas se confunden con facilidad y conviene separarlas:\n\n- **Alta disponibilidad**: seguir atendiendo el servicio aunque falle un componente, repartiendo la carga entre varios recursos (por ejemplo, varias Availability Zones).\n- **Elasticidad**: ajustar la capacidad de forma automática a la demanda; se crece cuando hace falta y se reduce cuando baja, sin intervención manual.\n- **Agilidad**: capacidad de crear, cambiar y experimentar rápido. Al no depender de compras de hardware, un equipo puede probar una idea y descartarla en poco tiempo.\n\nLas tres son ventajas distintas: la alta disponibilidad protege frente a fallos, la elasticidad adapta la capacidad al uso y la agilidad acelera el ritmo de innovación. En la práctica se refuerzan entre sí.',
			},
			{
				tipo: 'comparacion',
				parId: 'alta-disponibilidad-vs-elasticidad-vs-agilidad',
			},
			{
				tipo: 'ejemplo',
				md: '```text\nAlta disponibilidad: cae una zona -> el servicio sigue respondiendo\nElasticidad: sube la demanda -> se añaden recursos; baja -> se retiran\nAgilidad: nueva idea -> se prueba en días, sin comprar servidores\n```',
			},
			{
				tipo: 'errorComun',
				error: 'Usar elasticidad y alta disponibilidad como sinónimos.',
				correccion:
					'La elasticidad ajusta la capacidad al volumen de trabajo; la alta disponibilidad mantiene el servicio operativo ante fallos. Un sistema puede escalar bien y aun así caerse cuando falla una zona si no tiene redundancia.',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Usa redundancia en varias zonas cuando el servicio no puede interrumpirse: eso es alta disponibilidad.',
					'Deja que la capacidad siga la demanda con ajuste automático cuando el tráfico es variable: eso es elasticidad.',
					'Reserva entornos de prueba de bajo coste para probar rápido: eso es agilidad.',
				],
				noUsar: [
					'No confíes solo en la elasticidad para cubrir fallos: escalar no sustituye a la redundancia.',
					'No dimensiones para el pico permanente si la demanda es estacional: es más caro que ajustar la capacidad.',
				],
			},
		],
		preguntasGuia: [
			'¿Qué diferencia hay entre alta disponibilidad y elasticidad?',
			'¿Cómo se relaciona la agilidad con la velocidad de experimentación?',
			'¿Puede un sistema ser elástico y no tener alta disponibilidad?',
		],
	},
];
