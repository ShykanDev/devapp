import type { PreguntaProfesionalClfC02 } from '@/data/clfC02/profesional/types';

export const profesionalTask11: PreguntaProfesionalClfC02[] = [
	{
		id: 'prof-1.1-q1',
		taskId: '1.1',
		objetivos: ['1.1#1'],
		tipo: 'trampa',
		question:
			'¿Cuál describe mejor la propuesta de valor de AWS frente a operar un centro de datos propio?',
		options: [
			'AWS elimina la necesidad de aprovisionar capacidad por adelantado: el cliente paga por lo que consume y deja de asumir grandes inversiones iniciales.',
			'AWS traslada toda la inversión inicial al cliente y la reparte entre varios años, aunque a cambio reduce el precio por hora de los servidores reservados.',
			'AWS permite comprar capacidad reservada por adelantado, lo que convierte todo el gasto en fijo.',
			'AWS garantiza que la factura mensual siempre será inferior al coste del centro de datos propio.',
		],
		correctAnswer: 0,
		explanation:
			'La propuesta de valor de AWS sustituye la inversión de capital inicial y el sobredimensionamiento por un gasto operativo ligado al consumo real. No transfiere la inversión al cliente, no elimina el gasto variable y no promete una factura siempre menor. Si el escenario exigiera una tarifa más baja para uso estable, seguiría siendo válido reservar, pero la propuesta de valor central es el pago por uso.',
		porQueOpcion: [
			'Correcta: el pago por uso elimina el aprovisionamiento por adelantado y el gasto de capital inicial.',
			'Incorrecta: con AWS la inversión inicial desaparece, no se traslada al cliente; solo se paga el consumo.',
			'Incorrecta: la reserva es una opción de descuento que reduce el coste, pero no convierte todo el gasto en fijo.',
			'Incorrecta: AWS no garantiza una factura siempre menor; el ahorro depende del uso y del diseño.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/global-infrastructure.html',
		],
	},
	{
		id: 'prof-1.1-q2',
		taskId: '1.1',
		objetivos: ['1.1#2'],
		tipo: 'multiConcepto',
		question:
			'Un equipo quiere publicar la misma aplicación para usuarios de tres continentes en pocas semanas. ¿Qué beneficio de la infraestructura global de AWS lo hace posible?',
		options: [
			'El despliegue en varias regiones, que aporta alcance global con un tiempo de puesta en marcha bajo.',
			'La existencia de un único centro de datos global que atiende a todos los continentes.',
			'El uso de edge locations como sustituto de las regiones para alojar bases de datos y reducir la latencia.',
			'La replicación automática de datos personales entre países sin ninguna configuración.',
		],
		correctAnswer: 0,
		explanation:
			'La infraestructura global de AWS permite desplegar en regiones cercanas a cada audiencia en poco tiempo, combinando alcance global y velocidad de despliegue. No existe un centro de datos único, las edge locations no alojan bases de datos y la replicación entre países no es automática ni exenta de configuración. Si el requisito fuera únicamente la baja latencia de entrega, la respuesta se acercaría a las ubicaciones de borde.',
		porQueOpcion: [
			'Correcta: desplegar en varias regiones da alcance global con despliegue rápido.',
			'Incorrecta: AWS no opera un único centro de datos global; su infraestructura está distribuida en regiones.',
			'Incorrecta: las edge locations sirven contenido, no alojan bases de datos en lugar de las regiones.',
			'Incorrecta: la replicación entre países requiere configuración y decisiones de residencia de datos.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/global-infrastructure.html',
		],
	},
	{
		id: 'prof-1.1-q3',
		taskId: '1.1',
		objetivos: ['1.1#2'],
		tipo: 'comparacion',
		question:
			'Se discuten dos beneficios: (A) reducir el tiempo para poner recursos en producción y (B) atender a audiencias de varias geografías. ¿Cuál es la afirmación correcta?',
		options: [
			'Ambos son beneficios de la infraestructura global: velocidad de despliegue y alcance global.',
			'Solo A lo es: el alcance global depende del servicio de base de datos elegido, no de la infraestructura.',
			'Solo B lo es: la velocidad de despliegue procede del modelo de pago por uso, no de la infraestructura global.',
			'Ninguno lo es: ambos son consecuencia del cifrado de los datos en reposo.',
		],
		correctAnswer: 0,
		explanation:
			'La infraestructura global de AWS aporta tanto velocidad de despliegue como alcance global: desplegar en regiones cercanas al usuario es rápido y cubre varias geografías. Ninguno de estos beneficios depende del servicio de base de datos ni del cifrado. Si el requisito fuera solo acortar el tiempo de puesta en producción, seguiría siendo un beneficio de la infraestructura global, igual que el alcance geográfico.',
		porQueOpcion: [
			'Correcta: ambos son beneficios directos de la infraestructura global de AWS.',
			'Incorrecta: el alcance global es una propiedad de la infraestructura, no del motor de base de datos.',
			'Incorrecta: la velocidad de despliegue se apoya en la infraestructura global, no en el pago por uso.',
			'Incorrecta: el cifrado protege datos y no tiene relación con el alcance global o la velocidad de despliegue.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/global-infrastructure.html',
		],
	},
	{
		id: 'prof-1.1-q4',
		taskId: '1.1',
		objetivos: ['1.1#3'],
		tipo: 'comparacion',
		question: '¿Qué distingue la elasticidad de la agilidad en la propuesta de AWS?',
		options: [
			'La elasticidad ajusta la capacidad a la demanda; la agilidad es la rapidez para desarrollar, probar y lanzar recursos o aplicaciones.',
			'La elasticidad es seguir operando ante fallos; la agilidad es ajustar la capacidad a la demanda.',
			'La elasticidad es el ahorro por pagar solo lo que se consume; la agilidad es la redundancia repartida entre varias Availability Zones de la región.',
			'Ambos términos describen lo mismo: repartir el tráfico entre varias regiones.',
		],
		correctAnswer: 0,
		explanation:
			'La elasticidad es la capacidad de aprovisionar y liberar recursos según la demanda; la agilidad es la velocidad para innovar y poner recursos o aplicaciones en producción. Seguir operando ante fallos es alta disponibilidad, no elasticidad. Si el escenario pidiera resistir el fallo de una zona, la ventaja sería la alta disponibilidad.',
		porQueOpcion: [
			'Correcta: elasticidad ajusta capacidad; agilidad acelera el desarrollo y el despliegue.',
			'Incorrecta: describe alta disponibilidad y elasticidad, no la distinción entre elasticidad y agilidad.',
			'Incorrecta: mezcla pago por uso y alta disponibilidad, que no son esas dos ventajas.',
			'Incorrecta: elasticidad y agilidad son ventajas distintas, no la distribución entre regiones.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/global-infrastructure.html',
		],
	},
	{
		id: 'prof-1.1-q5',
		taskId: '1.1',
		objetivos: ['1.1#3'],
		tipo: 'escenario',
		question:
			'Una startup tiene picos de tráfico impredecibles y hoy dimensiona servidores para el peor caso. ¿Qué ventaja de AWS aprovecha si ajusta la capacidad automáticamente a la demanda?',
		options: [
			'La elasticidad, porque aprovisiona y libera recursos según la demanda en lugar de fijar la capacidad máxima.',
			'La alta disponibilidad, porque duplica los recursos en otra Availability Zone.',
			'Las economías de escala, porque AWS reparte el coste de sus centros de datos entre todos los clientes y baja el precio por hora.',
			'La agilidad, porque permite lanzar nuevas funcionalidades más rápido.',
		],
		correctAnswer: 0,
		explanation:
			'El ajuste automático de capacidad a la demanda es elasticidad. La alta disponibilidad evita interrupciones, las economías de escala explican el precio y la agilidad acelera el desarrollo, pero ninguna de ellas describe el ajuste dinámico de capacidad. Si el requisito fuera seguir operando ante un fallo, la respuesta sería la alta disponibilidad.',
		porQueOpcion: [
			'Correcta: ajustar la capacidad a la demanda es exactamente la elasticidad.',
			'Incorrecta: la alta disponibilidad trata de seguir operando ante fallos, no de ajustar capacidad.',
			'Incorrecta: las economías de escala explican el nivel de precios, no el ajuste automático de capacidad.',
			'Incorrecta: la agilidad se refiere a la velocidad de desarrollo y despliegue, no al dimensionamiento.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/global-infrastructure.html',
		],
	},
	{
		id: 'prof-1.1-q6',
		taskId: '1.1',
		objetivos: ['1.1#1'],
		tipo: 'escenario',
		question:
			'Una empresa compara comprar servidores propios con usar AWS. ¿Qué diferencia describe correctamente el cambio en el modelo de gasto?',
		options: [
			'Sustituye un gasto de capital inicial (capex) por un gasto operativo variable (opex) ligado al consumo.',
			'Sustituye un gasto operativo variable por un gasto de capital fijo, predecible y amortizado a varios años.',
			'Mantiene el gasto de capital, pero lo reparte entre varias cuentas de AWS.',
			'Convierte todo el gasto en un importe fijo mensual sin relación con el uso.',
		],
		correctAnswer: 0,
		explanation:
			'La propuesta de valor de AWS transforma las inversiones de capital en gasto operativo variable: se paga por lo que se consume. No mantiene el capex ni obliga a un importe fijo independiente del uso. Si el requisito fuera un gasto de capital fijo, estaría describiendo justo el modelo contrario al de la nube.',
		porQueOpcion: [
			'Correcta: el modelo de gasto pasa de capex a opex variable según consumo.',
			'Incorrecta: el movimiento es el contrario; se abandona el gasto de capital fijo.',
			'Incorrecta: el capex de los servidores propios desaparece, no se reparte entre cuentas.',
			'Incorrecta: el modelo de AWS es variable; no todo se vuelve un fijo mensual.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/global-infrastructure.html',
		],
	},
	{
		id: 'prof-1.1-q7',
		taskId: '1.1',
		objetivos: ['1.1#3'],
		tipo: 'multiConcepto',
		question:
			'Un sistema sufre cortes ante fallos y además se sobredimensiona pagando capacidad ociosa. ¿Qué conjunto de ventajas de AWS aborda ambos problemas a la vez?',
		options: [
			'Alta disponibilidad para operar ante fallos y elasticidad para ajustar la capacidad a la demanda.',
			'Agilidad para desplegar funciones nuevas y alcance global para usuarios lejanos.',
			'Economías de escala para bajar el precio y agilidad para reducir el tiempo de despliegue.',
			'Pago por uso para eliminar el gasto fijo y edge locations para reducir la latencia de los usuarios.',
		],
		correctAnswer: 0,
		explanation:
			'Los cortes ante fallos se resuelven con alta disponibilidad y el sobredimensionamiento con elasticidad. Las otras combinaciones citan ventajas reales de AWS, pero no atacan los dos problemas concretos del escenario. Si el requisito fuera solo reducir la factura, entrarían en juego el pago por uso y las economías de escala.',
		porQueOpcion: [
			'Correcta: alta disponibilidad cubre los fallos y elasticidad corrige el sobredimensionamiento.',
			'Incorrecta: agilidad y alcance global no evitan cortes ni eliminan la capacidad ociosa.',
			'Incorrecta: precio y velocidad de despliegue no son las ventajas que resuelven esos problemas.',
			'Incorrecta: el pago por uso y la latencia no abordan la tolerancia a fallos ni el ajuste de capacidad.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/global-infrastructure.html',
		],
	},
];
