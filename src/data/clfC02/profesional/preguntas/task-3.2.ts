import type { PreguntaProfesionalClfC02 } from '@/data/clfC02/profesional/types';

export const profesionalTask32: PreguntaProfesionalClfC02[] = [
	{
		id: 'prof-3.2-q1',
		taskId: '3.2',
		objetivos: ['3.2#1', '3.2#5'],
		tipo: 'comparacion',
		question:
			'¿Cuál de estas afirmaciones describe correctamente la relación entre Región, Availability Zone y edge location?',
		options: [
			'Una Región agrupa varias Availability Zones aisladas entre sí, y las edge locations son puntos de presencia fuera de ese eje para entregar contenido cerca del usuario.',
			'Una Availability Zone contiene varias Regiones, y las edge locations son las zonas de disponibilidad de menor latencia.',
			'Las edge locations y las Availability Zones son lo mismo, solo que las primeras están en otra Región.',
			'Una Región es un único centro de datos y las Availability Zones son sus copias de seguridad.',
		],
		correctAnswer: 0,
		explanation:
			'La jerarquía es Región (área geográfica) con varias Availability Zones (centros de datos aislados con alimentación y red propias), y las edge locations son puntos de presencia separados de ese eje, usados para entregar contenido y resolver DNS cerca del usuario.',
		porQueOpcion: [
			'Correcta: refleja la jerarquía Región, Availability Zone y punto de presencia.',
			'Incorrecto: invierte la relación; la Availability Zone está dentro de la Región, no al contrario.',
			'Incorrecto: son infraestructuras distintas con propósitos distintos, no un cambio de nombre.',
			'Incorrecto: una Región agrupa varias Availability Zones, y ninguna es copia de seguridad de otra.',
		],
	},
	{
		id: 'prof-3.2-q2',
		taskId: '3.2',
		objetivos: ['3.2#2', '3.2#6'],
		tipo: 'escenario',
		question:
			'Una aplicación crítica debe seguir atendiendo el servicio aunque falle por completo un centro de datos. ¿Qué diseño cumple el objetivo?',
		options: [
			'Ejecutar todas las instancias en una sola Availability Zone y hacer snapshots cada hora.',
			'Distribuir las instancias en varias Availability Zones de la misma Región detrás de un balanceador.',
			'Ejecutar una única instancia de mayor tamaño en una sola Availability Zone.',
			'Guardar copias de los datos en una edge location cercana.',
		],
		correctAnswer: 1,
		explanation:
			'La alta disponibilidad se consigue con redundancia activa: réplicas en varias Availability Zones, cada una con infraestructura independiente, y un balanceador que reparte el tráfico. Una sola Availability Zone, aunque tenga snapshots o más capacidad, sigue siendo un punto único de fallo.',
		porQueOpcion: [
			'Incorrecto: los snapshots permiten recuperar datos, pero no evitan la interrupción al caer la Availability Zone.',
			'Correcta: reparte la carga entre Availability Zones aisladas frente al fallo de un centro de datos.',
			'Incorrecto: una instancia más grande en una sola Availability Zone no elimina el punto único de fallo.',
			'Incorrecto: las edge locations sirven contenido, no alojan la aplicación ni cubren el fallo de la Availability Zone.',
		],
	},
	{
		id: 'prof-3.2-q3',
		taskId: '3.2',
		objetivos: ['3.2#7'],
		tipo: 'trampa',
		question:
			'¿Por qué se afirma que las Availability Zones de una Región no comparten un punto único de fallo?',
		options: [
			'Porque cada Availability Zone tiene su propia alimentación, refrigeración y red, de modo que un fallo físico de una no afecta a las demás.',
			'Porque todas las Availability Zones dependen del mismo centro de datos para reducir la latencia.',
			'Porque las Availability Zones solo existen en Regiones con más de una cuenta de AWS.',
			'Porque AWS reubica automáticamente los recursos de la Availability Zone que falla hacia otra.',
		],
		correctAnswer: 0,
		explanation:
			'El aislamiento físico es lo que evita el punto único de fallo: cada Availability Zone dispone de alimentación, refrigeración y red independientes, por lo que un fallo localizado no se propaga. AWS no reubica recursos automáticamente entre Availability Zones.',
		porQueOpcion: [
			'Correcta: el aislamiento de infraestructura es la razón de que no compartan punto único de fallo.',
			'Incorrecto: compartir centro de datos sería justamente el punto único de fallo que se evita.',
			'Incorrecto: el número de cuentas no tiene relación con la existencia de las Availability Zones.',
			'Incorrecto: la conmutación entre Availability Zones es responsabilidad del diseño del cliente, no una reubicación automática de AWS.',
		],
	},
	{
		id: 'prof-3.2-q4',
		taskId: '3.2',
		objetivos: ['3.2#3', '3.2#8'],
		tipo: 'escenario',
		question:
			'Una empresa debe cumplir la residencia de datos en el país de sus clientes y, a la vez, disponer de recuperación ante el fallo de una Región completa. ¿Qué decisión de diseño es correcta?',
		options: [
			'Elegir una Región en el país para los datos y otra Región distinta con replicación para la recuperación ante desastres.',
			'Usar solo edge locations, porque replican los datos por todo el mundo.',
			'Concentrar todo en una única Availability Zone para simplificar el cumplimiento.',
			'Guardar los snapshots en la misma Región y no replicar a otra.',
		],
		correctAnswer: 0,
		explanation:
			'La residencia de datos exige fijar la Región en el país o marco legal aplicable, y la continuidad frente al fallo regional exige replicar a otra Región. Las edge locations no replican datos maestros y una sola Availability Zone o los snapshots locales no cubren la pérdida de una Región.',
		porQueOpcion: [
			'Correcta: cubre residencia y recuperación regional con dos decisiones complementarias.',
			'Incorrecto: las edge locations no alojan ni replican los datos maestros.',
			'Incorrecto: una sola Availability Zone no cubre la pérdida de una Región completa.',
			'Incorrecto: los snapshots en la misma Región se pierden si cae la Región.',
		],
	},
	{
		id: 'prof-3.2-q5',
		taskId: '3.2',
		objetivos: ['3.2#4'],
		tipo: 'servicio',
		question:
			'Una aplicación sirve vídeos a usuarios de varios continentes y las descargas son lentas. ¿Qué aporta servir el contenido desde edge locations?',
		options: [
			'Acercan el contenido al usuario y reducen la latencia de entrega.',
			'Sustituyen a la Región de origen para almacenar los datos maestros.',
			'Aumentan la capacidad de cómputo de la base de datos en la Región.',
			'Eliminan la necesidad de usar Amazon CloudFront.',
		],
		correctAnswer: 0,
		explanation:
			'Las edge locations acercan el contenido al usuario final y reducen la latencia de entrega; de hecho, Amazon CloudFront se apoya en ellas. No alojan los datos maestros ni sustituyen a la Región, y no cambian la capacidad de cómputo.',
		porQueOpcion: [
			'Correcta: el beneficio del edge es la proximidad al usuario y la menor latencia.',
			'Incorrecto: el origen y los datos maestros siguen en la Región.',
			'Incorrecto: el edge sirve contenido, no amplía el cómputo de la base de datos.',
			'Incorrecto: Amazon CloudFront usa las edge locations, no las elimina.',
		],
	},
	{
		id: 'prof-3.2-q6',
		taskId: '3.2',
		objetivos: ['3.2#3'],
		tipo: 'tradeoff',
		question:
			'¿Qué contrapartida implica extender una arquitectura a varias Regiones en lugar de mantenerla en una sola?',
		options: [
			'Se gana separación geográfica para recuperación y latencia, pero aumentan la complejidad operativa y los costes de réplica y transferencia.',
			'Se gana simplicidad operativa, porque las Regiones comparten la misma red y los mismos datos.',
			'No hay contrapartida: usar varias Regiones siempre reduce la factura.',
			'Se pierde la posibilidad de usar varias Availability Zones dentro de cada Región.',
		],
		correctAnswer: 0,
		explanation:
			'El uso de varias Regiones aporta recuperación ante desastres, continuidad, menor latencia y cumplimiento de residencia, pero añade complejidad de operación y costes de replicación y transferencia de datos entre Regiones.',
		porQueOpcion: [
			'Correcta: resume el beneficio y su coste real.',
			'Incorrecto: las Regiones no comparten red ni datos; replicarlos es precisamente el coste.',
			'Incorrecto: la replicación y la transferencia entre Regiones tienen coste.',
			'Incorrecto: cada Región conserva sus propias Availability Zones.',
		],
	},
];
