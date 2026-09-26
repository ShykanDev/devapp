import type { PreguntaClfC02 } from '@/data/clfC02/types';

/**
 * Banco de formato de respuesta múltiple (formato oficial: 5 opciones, 2
 * correctas, etiqueta `(Elige DOS)` en el enunciado). Los enunciados no nombran
 * servicios para no filtrar la respuesta; los distractores sí pueden citarlos.
 */
export const preguntasMultipleClfC02: PreguntaClfC02[] = [
	{
		id: '1.1-m1',
		taskId: '1.1',
		objetivos: ['1.1#2'],
		tipo: 'casoDeUso',
		formato: 'multiple',
		question:
			'Una empresa quiere servir a clientes de tres continentes con baja latencia y tolerancia a la caída de una zona. ¿Qué dos características del alcance global de la nube lo permiten? (Elige DOS)',
		options: [
			'Desplegar la aplicación en varias Regiones y usar servicios de borde cercanos al usuario.',
			'Comprar servidores físicos en cada país y administrarlos desde una sola oficina central.',
			'Reducir el número de zonas de disponibilidad para concentrar el tráfico en un único punto.',
			'Distribuir los recursos en varias zonas de disponibilidad de la Región para tolerar la caída de una de ellas.',
			'Trasladar todos los datos a una ubicación física temporal mientras se decide la arquitectura definitiva del proyecto internacional.',
		],
		correctAnswer: 0,
		correctAnswers: [0, 3],
		explanation:
			'El alcance global combina Regiones para resiliencia y ubicaciones de borde para latencia. Si cambia el requisito a soberanía de datos, la elección de Región pasa a depender de cumplimiento.',
		porQueOpcion: [
			'Correcta: varias Regiones más servicios de borde son el patrón del alcance global.',
			'Incorrecta: adquirir y administrar hardware propio elimina la elasticidad de la nube.',
			'Incorrecta: reducir zonas de disponibilidad aumenta el riesgo de caída, no la tolerancia.',
			'Correcta: distribuir en varias zonas de disponibilidad tolera la caída de una de ellas.',
			'Incorrecta: trasladar datos temporalmente no aporta baja latencia ni resiliencia.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/global-infrastructure.html',
		],
	},
	{
		id: '1.4-m1',
		taskId: '1.4',
		objetivos: ['1.4#2'],
		tipo: 'conocimiento',
		formato: 'multiple',
		question:
			'¿Qué dos cambios en el modelo de gasto explican el ahorro económico al migrar a la nube? (Elige DOS)',
		options: [
			'Se sustituye una gran inversión inicial por un pago por uso.',
			'Se paga siempre la misma capacidad aunque no se utilice.',
			'Se trasladan los costes fijos a costes variables y se evita sobredimensionar.',
			'Se elimina la necesidad de medir y optimizar el consumo porque el precio ya es fijo.',
			'Se duplica la capacidad reservada para anticipar el crecimiento de los próximos años.',
		],
		correctAnswer: 0,
		correctAnswers: [0, 2],
		explanation:
			'El ahorro viene de convertir gasto de capital en gasto operativo y de ajustar la capacidad a la demanda. Si cambia el requisito a previsibilidad, entran los descuentos por compromiso.',
		porQueOpcion: [
			'Correcta: pasar de inversión inicial a pago por uso es el núcleo de la economía de la nube.',
			'Incorrecta: pagar por capacidad no utilizada es el modelo tradicional, no el ahorro de la nube.',
			'Correcta: convertir costes fijos en variables y evitar sobredimensionar reduce el gasto.',
			'Incorrecta: medir y optimizar sigue siendo necesario para controlar el gasto.',
			'Incorrecta: duplicar capacidad reservada aumenta el coste, no lo reduce.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/how-aws-pricing-works/welcome.html',
		],
	},
	{
		id: '2.1-m1',
		taskId: '2.1',
		objetivos: ['2.1#1'],
		tipo: 'conocimiento',
		formato: 'multiple',
		question:
			'Bajo el modelo de responsabilidad compartida, ¿qué dos elementos son responsabilidad del cliente? (Elige DOS)',
		options: [
			'La clasificación de los datos y la gestión de las identidades y los permisos.',
			'La seguridad física de los centros de datos y de la infraestructura subyacente.',
			'La aplicación de parches al sistema operativo invitado de sus instancias.',
			'El mantenimiento del hipervisor y de la red troncal que conecta las zonas de disponibilidad.',
			'La sustitución del hardware averiado en las instalaciones donde se aloja el servicio.',
		],
		correctAnswer: 0,
		correctAnswers: [0, 2],
		explanation:
			'AWS protege la infraestructura física; el cliente protege datos, accesos y el sistema invitado. Si cambia el servicio a uno totalmente gestionado, la frontera se desplaza hacia AWS.',
		porQueOpcion: [
			'Correcta: datos, identidades y permisos siempre corresponden al cliente.',
			'Incorrecta: la seguridad física de las instalaciones es responsabilidad de AWS.',
			'Correcta: el sistema operativo invitado y sus parches son del cliente.',
			'Incorrecta: el hipervisor y la red troncal los administra AWS.',
			'Incorrecta: el hardware lo mantiene AWS, no el cliente.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/aws-risk-and-compliance/shared-responsibility-model.html',
		],
	},
	{
		id: '2.2-m1',
		taskId: '2.2',
		objetivos: ['2.2#1'],
		tipo: 'seguridad',
		formato: 'multiple',
		question:
			'¿Qué dos medidas refuerzan de forma directa el control de acceso a una cuenta? (Elige DOS)',
		options: [
			'Exigir un segundo factor además de la contraseña para iniciar sesión.',
			'Conceder permisos de administrador a todas las identidades para evitar bloqueos.',
			'Aplicar el principio de menor privilegio con políticas específicas por función.',
			'Compartir una única credencial entre el equipo para simplificar la administración.',
			'Desactivar el registro de auditoría para reducir el ruido de eventos.',
		],
		correctAnswer: 0,
		correctAnswers: [0, 2],
		explanation:
			'La autenticación multifactor y el menor privilegio controlan quién entra y qué puede hacer. Si cambia el contexto a clientes finales de una app, entra la federación de identidades.',
		porQueOpcion: [
			'Correcta: el segundo factor protege el inicio de sesión aunque se filtre la contraseña.',
			'Incorrecta: el permiso de administrador generalizado aumenta el riesgo.',
			'Correcta: el menor privilegio limita el alcance de cada identidad.',
			'Incorrecta: compartir credenciales elimina la trazabilidad individual.',
			'Incorrecta: desactivar la auditoría oculta actividad y dificulta la investigación.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html',
		],
	},
	{
		id: '3.1-m1',
		taskId: '3.1',
		objetivos: ['3.1#2'],
		tipo: 'conocimiento',
		formato: 'multiple',
		question:
			'¿Qué dos formas de aprovisionar recursos son repetibles y se pueden versionar? (Elige DOS)',
		options: [
			'Definir la infraestructura como código en plantillas revisables.',
			'Crear cada recurso a mano desde la consola siguiendo una lista en papel.',
			'Automatizar la creación mediante la interfaz de programación o la línea de comandos.',
			'Pedir los recursos por correo al equipo de operaciones para que los cree cuando pueda.',
			'Reutilizar una instantánea de una cuenta ajena sin registrar los pasos realizados.',
		],
		correctAnswer: 0,
		correctAnswers: [0, 2],
		explanation:
			'La infraestructura como código y la automatización por API o CLI son repetibles y auditables. Si cambia el requisito a una prueba puntual, la consola puede ser aceptable.',
		porQueOpcion: [
			'Correcta: las plantillas versionadas permiten repetir el despliegue.',
			'Incorrecta: crear a mano desde la consola no es repetible ni versionable.',
			'Correcta: la API o la CLI automatizan y registran la creación de recursos.',
			'Incorrecta: el correo manual no es reproducible ni auditable.',
			'Incorrecta: reutilizar recursos ajenos sin registro no es una práctica repetible.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html',
			'https://docs.aws.amazon.com/whitepapers/latest/introduction-devops-aws/infrastructure-as-code.html',
		],
	},
	{
		id: '3.3-m1',
		taskId: '3.3',
		objetivos: ['3.3#5'],
		tipo: 'escenario',
		formato: 'multiple',
		question:
			'Una tienda en línea recibe picos de tráfico por campañas y quiere ajustar la capacidad sola. ¿Qué dos beneficios aporta el escalado automático? (Elige DOS)',
		options: [
			'Ajusta el número de recursos a la demanda real de cada momento.',
			'Mantiene siempre el máximo de capacidad para que nunca falte, durante todo el año y sin límite.',
			'Reduce el coste en los periodos de baja actividad al retirar recursos sobrantes.',
			'Elimina la necesidad de supervisar el rendimiento porque la capacidad ya es automática.',
			'Garantiza que la aplicación nunca tenga errores de código bajo carga elevada.',
		],
		correctAnswer: 0,
		correctAnswers: [0, 2],
		explanation:
			'El escalado sigue la demanda y retira capacidad cuando no hace falta, mejorando coste y elasticidad. Si cambia el requisito a cargas impredecibles, el escalado reactivo encaja mejor.',
		porQueOpcion: [
			'Correcta: ajusta la capacidad a la demanda observada.',
			'Incorrecta: sobredimensionar de forma permanente desaprovecha recursos y encarece.',
			'Correcta: retirar recursos sobrantes reduce el coste en valles de actividad.',
			'Incorrecta: sigue siendo necesario supervisar el rendimiento y los umbrales.',
			'Incorrecta: el escalado no corrige errores del código de la aplicación.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html',
			'https://docs.aws.amazon.com/ec2/',
		],
	},
	{
		id: '3.5-m1',
		taskId: '3.5',
		objetivos: ['3.5#3'],
		tipo: 'conocimiento',
		formato: 'multiple',
		question:
			'¿Qué dos controles permiten aislar y filtrar el tráfico dentro de una red virtual? (Elige DOS)',
		options: [
			'Grupos de seguridad que actúan como cortafuegos a nivel de recurso.',
			'Listas de control de acceso de red que filtran por subred.',
			'Un servicio de correo empresarial para notificar incidencias de red.',
			'Un panel de facturación que muestra el coste del tráfico por servicio.',
			'Un certificado de cifrado que sustituye a las reglas de red.',
		],
		correctAnswer: 0,
		correctAnswers: [0, 2],
		explanation:
			'Los grupos de seguridad filtran por recurso y las listas de control por subred, y son complementarios. Si cambia el requisito a inspección centralizada, entra un cortafuegos gestionado.',
		porQueOpcion: [
			'Correcta: los grupos de seguridad filtran el tráfico permitido por recurso.',
			'Incorrecta: el correo no interviene en el filtrado de tráfico.',
			'Correcta: las listas de control filtran a nivel de subred, sin estado.',
			'Incorrecta: el panel de costes informa, no filtra tráfico.',
			'Incorrecta: el cifrado protege datos; no reemplaza las reglas de red.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html',
		],
	},
	{
		id: '3.6-m1',
		taskId: '3.6',
		objetivos: ['3.6#1'],
		tipo: 'conocimiento',
		formato: 'multiple',
		question:
			'¿Qué dos afirmaciones describen correctamente el almacenamiento de objetos? (Elige DOS)',
		options: [
			'Se accede a los datos como objetos completos mediante una interfaz de servicio.',
			'Se monta como un disco de bloques adjunto a una sola instancia.',
			'Es adecuado para contenido estático y datos que se comparten por internet.',
			'Requiere formatear el volumen con un sistema de archivos antes de usarlo.',
			'Solo puede usarse desde dentro de una única zona de disponibilidad.',
		],
		correctAnswer: 0,
		correctAnswers: [0, 2],
		explanation:
			'El almacenamiento de objetos se accede por API y sirve contenido compartido. Si cambia el requisito a un disco de arranque, la respuesta pasa al almacenamiento de bloques.',
		porQueOpcion: [
			'Correcta: los objetos se leen y escriben completos mediante API o HTTP.',
			'Incorrecta: montar un disco de bloques corresponde a otro modelo de almacenamiento.',
			'Correcta: es el modelo habitual para contenido estático y distribución web.',
			'Incorrecta: formatear volúmenes es propio del almacenamiento de bloques.',
			'Incorrecta: el almacenamiento de objetos se replica y es accesible más allá de una zona.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html',
			'https://docs.aws.amazon.com/s3/',
		],
	},
	{
		id: '4.1-m1',
		taskId: '4.1',
		objetivos: ['4.1#1'],
		tipo: 'tradeoff',
		formato: 'multiple',
		question:
			'¿Qué dos opciones reducen el coste de cómputo a cambio de un compromiso de uso? (Elige DOS)',
		options: [
			'Reservar capacidad por un periodo a cambio de un descuento.',
			'Pagar la tarifa por demanda sin ningún compromiso de tiempo.',
			'Adoptar un plan de ahorro con un compromiso de gasto por hora.',
			'Elegir la instancia más grande disponible para aprovechar su precio unitario.',
			'Aumentar el tráfico saliente para repartir mejor el coste fijo.',
		],
		correctAnswer: 0,
		correctAnswers: [0, 2],
		explanation:
			'La reserva y los planes de ahorro cambian compromiso por descuento. Si cambia el requisito a flexibilidad total, el pago por demanda vuelve a ser la opción.',
		porQueOpcion: [
			'Correcta: reservar capacidad a plazo aplica descuento sobre el precio por demanda.',
			'Incorrecta: el pago por demanda no exige compromiso y por eso no descuenta.',
			'Correcta: los planes de ahorro comprometen gasto por hora y reducen el precio.',
			'Incorrecta: una instancia mayor no implica descuento por compromiso.',
			'Incorrecta: generar más tráfico saliente aumenta el coste, no lo reduce.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/how-aws-pricing-works/welcome.html',
		],
	},
	{
		id: '4.2-m1',
		taskId: '4.2',
		objetivos: ['4.2#5'],
		tipo: 'metrica',
		formato: 'multiple',
		question:
			'¿Qué dos herramientas permiten revisar el gasto histórico y avisar antes de superar un umbral? (Elige DOS)',
		options: [
			'Un panel que visualiza el coste por servicio y periodo.',
			'Un sistema de gestión de identidades que concede permisos a los usuarios.',
			'Una alerta configurable que avisa al acercarse a un límite de gasto.',
			'Un registro de auditoría que detalla quién modificó una política.',
			'Un servicio de nombres de dominio para publicar la web de la empresa.',
		],
		correctAnswer: 0,
		correctAnswers: [0, 2],
		explanation:
			'La exploración de costes analiza el gasto y las alertas presupuestarias avisan de umbrales. Si cambia el requisito a estimar antes de desplegar, entra una calculadora de precios.',
		porQueOpcion: [
			'Correcta: el explorador de costes permite ver y desglosar el gasto.',
			'Incorrecta: la gestión de identidades no analiza ni avisa del gasto.',
			'Correcta: los presupuestos con alertas avisan al acercarse a un umbral.',
			'Incorrecta: el registro de auditoría traza cambios, no costes.',
			'Incorrecta: el servicio de nombres no tiene relación con el gasto.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/Welcome.html',
		],
	},
];
