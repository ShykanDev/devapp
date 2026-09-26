import type { PreguntaClfC02 } from '@/data/clfC02/types';

export const preguntasTask32: PreguntaClfC02[] = [
	{
		id: '3.2-q1',
		taskId: '3.2',
		objetivos: ['3.2#1'],
		tipo: 'conocimiento',
		question:
			'¿Qué describe correctamente la relación entre una región de AWS y sus Availability Zones?',
		options: [
			'Cada Availability Zone contiene varias regiones independientes.',
			'Una región es un área geográfica que agrupa varias Availability Zones aisladas entre sí.',
			'Una Availability Zone es un punto de presencia para entrega de contenido, no un centro de datos.',
			'Las Availability Zones de una región comparten alimentación y red, por lo que fallan a la vez.',
		],
		correctAnswer: 1,
		explanation:
			'Una región es un área geográfica compuesta por varias Availability Zones aisladas, cada una con su propia alimentación, refrigeración y red. Las AZ no comparten punto único de fallo y los puntos de presencia son las edge locations, no al revés. Si el requisito fuera describir dónde se acerca el contenido al usuario, la respuesta apuntaría a las edge locations.',
		porQueOpcion: [
			'Incorrecta: una Availability Zone no contiene varias regiones, sino que forma parte aislada de una región.',
			'Correcta: una región es un área geográfica que agrupa varias Availability Zones aisladas entre sí.',
			'Incorrecta: la Availability Zone es un centro de datos aislado, no un punto de presencia para entrega de contenido.',
			'Incorrecta: cada Availability Zone tiene alimentación y red propias, por lo que no fallan a la vez.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/global-infrastructure.html',
		],
	},
	{
		id: '3.2-q2',
		taskId: '3.2',
		objetivos: ['3.2#5'],
		tipo: 'comparacion',
		question:
			'Un equipo discute dónde alojar cada pieza de su arquitectura. ¿Qué afirmación distingue correctamente región, Availability Zone y edge location?',
		options: [
			'La región es el punto de presencia más cercano al usuario final y la edge location es la que agrupa los centros de datos aislados de esa área.',
			'La Availability Zone es el área geográfica de mayor alcance y la región es cada uno de los centros de datos aislados, con su propia energía, refrigeración y red, que la componen.',
			'La región es el área geográfica, la Availability Zone es un centro de datos aislado dentro de ella y la edge location es un punto de presencia para entrega de contenido.',
			'Los tres términos son equivalentes y solo cambian de nombre según el servicio que se use.',
		],
		correctAnswer: 2,
		explanation:
			'La jerarquía es: región (área geográfica) → Availability Zones (centros de datos aislados dentro de la región) → edge locations (puntos de presencia fuera de ese eje, para entrega de contenido y DNS). Invertir la jerarquía o tratarlos como sinónimos es el error típico. Si el requisito fuera alojar la base de datos de forma tolerante a fallos, la capa relevante serían las Availability Zones de la región.',
		porQueOpcion: [
			'Incorrecta: la edge location es el punto de presencia cercano al usuario, no la región, y la Availability Zone es el centro de datos aislado.',
			'Incorrecta: invierte la jerarquía, ya que la región es el área geográfica y la Availability Zone el centro de datos aislado que la compone.',
			'Correcta: la región es el área geográfica, la Availability Zone un centro de datos aislado dentro de ella y la edge location un punto de presencia.',
			'Incorrecta: los tres términos no son equivalentes, ya que describen capas distintas de la infraestructura global.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/global-infrastructure.html',
		],
	},
	{
		id: '3.2-q3',
		taskId: '3.2',
		objetivos: ['3.2#5'],
		tipo: 'escenario',
		question:
			'Una empresa debe explicar por qué despliega su base de datos en una región concreta y sirve las imágenes desde muchos países. ¿Qué combinación describe mejor el uso de cada capa?',
		options: [
			'Los datos y el cómputo viven en una región y sus Availability Zones; la entrega global se apoya en edge locations.',
			'Los datos viven en una edge location y el contenido se distribuye desde la región hacia todos los usuarios globales.',
			'La base de datos se replica en todas las edge locations y el cómputo queda en una sola Availability Zone de la región.',
			'Las edge locations sustituyen a la región cuando el tráfico es global y eliminan la necesidad de fijar una ubicación.',
		],
		correctAnswer: 0,
		explanation:
			'La región (con sus AZ) aloja datos y cómputo; las edge locations acercan la entrega de contenido al usuario. Las edge locations no alojan bases de datos ni sustituyen a la región, y la base de datos no se replica en cada punto de presencia. Si el escenario pidiera reducir la latencia de descarga sin mover el dato, bastaría apoyarse en el edge.',
		porQueOpcion: [
			'Correcta: los datos y el cómputo viven en la región y sus Availability Zones, y las edge locations acercan la entrega global.',
			'Incorrecta: los datos no viven en una edge location y el contenido se distribuye desde el edge, no desde la región.',
			'Incorrecta: las edge locations no alojan la base de datos y el cómputo no queda en una sola Availability Zone.',
			'Incorrecta: las edge locations no sustituyen a la región ni eliminan la necesidad de fijar una ubicación.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/global-infrastructure.html',
		],
	},
	{
		id: '3.2-q4',
		taskId: '3.2',
		objetivos: ['3.2#2'],
		tipo: 'conocimiento',
		question: '¿Qué significa que un sistema tenga alta disponibilidad?',
		options: [
			'Que guarda copias de seguridad diarias de sus datos y las conserva en varias regiones del mundo.',
			'Que puede seguir atendiendo el servicio aunque falle un componente, gracias a la redundancia.',
			'Que responde a los usuarios desde el punto de presencia más cercano, reduciendo la latencia de cada petición.',
			'Que reparte los costes entre varias cuentas de AWS mediante una única factura consolidada.',
		],
		correctAnswer: 1,
		explanation:
			'Alta disponibilidad es seguir operando pese al fallo de un componente. Se consigue con redundancia activa, por ejemplo desplegando en varias Availability Zones; las copias de seguridad protegen los datos, no mantienen el servicio en marcha, y la cercanía del edge reduce latencia pero no cubre un fallo. Si el requisito fuera recuperar datos tras una pérdida, la respuesta sería la copia de seguridad.',
		porQueOpcion: [
			'Incorrecta: las copias de seguridad protegen los datos, pero no mantienen el servicio en marcha ante un fallo.',
			'Correcta: la alta disponibilidad es seguir atendiendo el servicio pese al fallo de un componente gracias a la redundancia.',
			'Incorrecta: responder desde el punto de presencia más cercano reduce latencia, pero no cubre el fallo de un componente.',
			'Incorrecta: repartir costes entre cuentas describe la facturación consolidada, no la alta disponibilidad.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/global-infrastructure.html',
		],
	},
	{
		id: '3.2-q5',
		taskId: '3.2',
		objetivos: ['3.2#6'],
		tipo: 'escenario',
		question:
			'Una aplicación crítica se ejecuta en una sola Availability Zone y el equipo afirma que tiene alta disponibilidad porque hace snapshots cada hora. Aunque el presupuesto es limitado y se busca reducir la factura mensual, el servicio debe seguir operando ante la caída de una zona. ¿Cuál es el problema y la solución correcta?',
		options: [
			'No hay problema: los snapshots horarios garantizan la disponibilidad del servicio aunque la Availability Zone falle por completo.',
			'El problema es la falta de redundancia entre Availability Zones; hay que desplegar réplicas en varias zonas.',
			'El problema es que falta una edge location; hay que añadir una distribución de contenido para acelerar la entrega.',
			'El problema es que sobra una Availability Zone; hay que consolidar todo en una sola para simplificar la operación.',
		],
		correctAnswer: 1,
		explanation:
			'Los snapshots permiten recuperar datos, pero no evitan una interrupción si cae la AZ. La alta disponibilidad exige redundancia activa en más de una Availability Zone, no una edge location ni consolidar la carga. Si el escenario pidiera solo proteger los datos ante un borrado accidental, los snapshots serían suficientes.',
		porQueOpcion: [
			'Incorrecta: los snapshots horarios no garantizan la disponibilidad si falla por completo la Availability Zone.',
			'Correcta: el problema es la falta de redundancia y la solución es desplegar réplicas en varias Availability Zones.',
			'Incorrecta: añadir una edge location acelera la entrega, pero no evita la interrupción por el fallo de la AZ.',
			'Incorrecta: consolidar todo en una sola Availability Zone agrava el punto único de fallo en lugar de resolverlo.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/global-infrastructure.html',
		],
	},
	{
		id: '3.2-q6',
		taskId: '3.2',
		objetivos: ['3.2#7'],
		tipo: 'conocimiento',
		question:
			'¿Por qué el aislamiento entre Availability Zones ayuda a evitar un punto único de fallo?',
		options: [
			'Porque todas las Availability Zones comparten la misma red, la misma refrigeración y el mismo sistema eléctrico dentro de la región.',
			'Porque cada AZ tiene infraestructura independiente, de modo que el fallo de una no provoca el de las demás.',
			'Porque las AZ se comunican a través de internet público y eso reparte la carga entre todas ellas.',
			'Porque una AZ solo existe mientras hay tráfico en ella y se retira automáticamente cuando deja de usarse.',
		],
		correctAnswer: 1,
		explanation:
			'Cada Availability Zone tiene alimentación, refrigeración y red propias. Ese aislamiento evita que un fallo físico o de infraestructura se propague a las otras AZ de la región. Compartir esas dependencias sería precisamente el punto único de fallo, y las AZ no nacen ni se retiran según el tráfico. Si el requisito fuera lograr alta disponibilidad, la respuesta sería repartir réplicas entre varias Availability Zones.',
		porQueOpcion: [
			'Incorrecta: compartir red, refrigeración y sistema eléctrico sería precisamente el punto único de fallo.',
			'Correcta: cada Availability Zone tiene infraestructura independiente, de modo que el fallo de una no provoca el de las demás.',
			'Incorrecta: las Availability Zones no se comunican por internet público para repartir la carga, y eso no explica su aislamiento.',
			'Incorrecta: las Availability Zones existen de forma permanente y no se retiran cuando dejan de usarse.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/global-infrastructure.html',
		],
	},
	{
		id: '3.2-q7',
		taskId: '3.2',
		objetivos: ['3.2#3'],
		tipo: 'conocimiento',
		question: '¿Para qué sirve principalmente el uso de varias regiones?',
		options: [
			'Para tener más Availability Zones dentro de un mismo centro de datos y reducir así la latencia interna.',
			'Para añadir distancia geográfica: recuperación ante desastres, continuidad, latencia y residencia de datos.',
			'Para eliminar por completo la necesidad de copias de seguridad y de planes de recuperación ante desastres.',
			'Para reducir automáticamente la factura al repartir el tráfico entre regiones más baratas sin ningún coste extra.',
		],
		correctAnswer: 1,
		explanation:
			'Varias regiones aportan separación geográfica real: DR, continuidad de negocio, menor latencia para usuarios lejanos y cumplimiento de residencia de datos. No sustituyen a las copias de seguridad, no reducen costes por sí solas y no añaden AZ dentro de un mismo centro de datos. Si el requisito fuera cumplir la residencia de datos, la decisión sería fijar la región adecuada.',
		porQueOpcion: [
			'Incorrecta: varias regiones no añaden Availability Zones dentro de un mismo centro de datos ni reducen la latencia interna.',
			'Correcta: varias regiones añaden distancia geográfica para recuperación ante desastres, continuidad, latencia y residencia de datos.',
			'Incorrecta: la separación geográfica no elimina la necesidad de copias de seguridad ni de planes de recuperación.',
			'Incorrecta: repartir tráfico entre regiones no reduce la factura automáticamente y añade costes de transferencia.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/global-infrastructure.html',
		],
	},
	{
		id: '3.2-q8',
		taskId: '3.2',
		objetivos: ['3.2#4'],
		tipo: 'servicio',
		question:
			'Una web con usuarios repartidos por varios continentes descarga imágenes estáticas con lentitud. ¿Qué beneficio aporta servir el contenido desde edge locations?',
		options: [
			'Elimina la necesidad de una región de AWS y traslada todos los datos de origen a la ubicación de borde.',
			'Acerca el contenido al usuario y reduce la latencia de descarga.',
			'Convierte las imágenes en datos cifrados en reposo dentro de la región donde reside el origen.',
			'Aumenta la capacidad de cómputo de la base de datos al distribuir las peticiones entre ubicaciones.',
		],
		correctAnswer: 1,
		explanation:
			'Las edge locations acercan el contenido al usuario final, reduciendo la latencia de entrega. No sustituyen a la región, donde vive el origen de los datos, ni cambian el cifrado o el cómputo. Si el requisito fuera acercar los datos maestros en lugar del contenido estático, la respuesta cambiaría a elegir una región más cercana al usuario.',
		porQueOpcion: [
			'Incorrecta: las edge locations no eliminan la región ni trasladan los datos de origen a la ubicación de borde.',
			'Correcta: servir el contenido desde el edge acerca el contenido al usuario y reduce la latencia de descarga.',
			'Incorrecta: el edge no convierte las imágenes en datos cifrados en reposo ni cambia la ubicación del origen.',
			'Incorrecta: las edge locations no aumentan la capacidad de cómputo de la base de datos.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/global-infrastructure.html',
		],
	},
	{
		id: '3.2-q9',
		taskId: '3.2',
		objetivos: ['3.2#8'],
		tipo: 'escenario',
		question:
			'Una empresa con clientes solo en Chile necesita que sus datos personales no salgan del país y, además, quiere poder recuperarse si su región principal sufre un incidente grave. ¿Qué decisión de diseño es correcta?',
		options: [
			'Usar únicamente edge locations, porque están repartidas por todo el mundo y guardan los datos personales cerca del usuario.',
			'Elegir una región en Chile para los datos y otra región distinta con replicación para la recuperación ante desastres.',
			'Concentrar todo en una sola Availability Zone para simplificar la operación y cumplir la residencia de datos.',
			'Confiar en los snapshots guardados en la misma región y no replicar, porque el país ya cumple la normativa.',
		],
		correctAnswer: 1,
		explanation:
			'La residencia de datos exige fijar la región en el país (o en el marco legal aplicable) y la continuidad exige una estrategia de recuperación independiente, típicamente una réplica en otra región. Una sola AZ o snapshots en la misma región no cubren una pérdida regional, y las edge locations no almacenan los datos maestros. Si el requisito fuera solo latencia para usuarios lejanos, bastaría el uso del edge sin cambiar la región del dato.',
		porQueOpcion: [
			'Incorrecta: las edge locations no guardan los datos maestros ni cumplen por sí solas la residencia de datos.',
			'Correcta: se fija una región en Chile para los datos y otra distinta con replicación para la recuperación ante desastres.',
			'Incorrecta: una sola Availability Zone simplifica la operación, pero no cubre la pérdida regional y concentra el riesgo.',
			'Incorrecta: los snapshots en la misma región no protegen ante la pérdida completa de esa región.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/global-infrastructure.html',
		],
	},
	{
		id: '3.2-q10',
		taskId: '3.2',
		objetivos: ['3.2#1'],
		tipo: 'escenario',
		question:
			'Un equipo debe decidir dónde colocar cada componente de su arquitectura global. ¿Qué opción describe mejor el papel de cada capa de la infraestructura?',
		options: [
			'La región aloja los datos y el cómputo, sus Availability Zones dan tolerancia a fallos y las edge locations acercan la entrega al usuario.',
			'La edge location aloja la base de datos, la región reparte el contenido estático y las Availability Zones almacenan los datos maestros de toda la arquitectura.',
			'Las Availability Zones son puntos de presencia internacionales y las edge locations son los centros de datos aislados de cada región.',
			'Las tres capas son equivalentes y solo cambian de nombre según el servicio de entrega que se configure en cada momento.',
		],
		correctAnswer: 0,
		explanation:
			'La región y sus Availability Zones alojan los datos y el cómputo, con tolerancia a fallos entre zonas, y las edge locations acercan la entrega de contenido al usuario. Intercambiar los papeles del edge y de la región invierte la jerarquía real. Si el escenario pidiera solo acelerar la descarga de contenido estático, la pieza protagonista serían las edge locations.',
		porQueOpcion: [
			'Correcta: la región aloja datos y cómputo, sus Availability Zones dan tolerancia a fallos y las edge locations acercan la entrega al usuario.',
			'Incorrecta: la edge location no aloja la base de datos ni las Availability Zones almacenan los datos maestros de la arquitectura.',
			'Incorrecta: las Availability Zones no son puntos de presencia internacionales ni las edge locations los centros de datos de cada región.',
			'Incorrecta: las tres capas no son equivalentes, ya que cumplen papeles distintos en la infraestructura global.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/global-infrastructure.html',
		],
	},
	{
		id: '3.2-q11',
		taskId: '3.2',
		objetivos: ['3.2#2'],
		tipo: 'escenario',
		question:
			'Una plataforma debe seguir operando aunque se pierda por completo el centro de datos donde corre. ¿Qué decisión de diseño cumple el objetivo?',
		options: [
			'Añadir copias de seguridad automáticas cada hora y planificar una recuperación rápida desde esas copias guardadas fuera de la zona.',
			'Desplegar la carga en varias Availability Zones de la región y distribuir el tráfico entre ellas.',
			'Concentrar todos los recursos en una única Availability Zone para simplificar la administración de la plataforma.',
			'Servir el contenido desde edge locations cercanas a los usuarios para mejorar la latencia de entrega.',
		],
		correctAnswer: 1,
		explanation:
			'La alta disponibilidad se logra con redundancia activa: réplicas en varias Availability Zones con infraestructura independiente y tráfico repartido entre ellas. Las copias de seguridad permiten recuperar datos, pero no evitan la interrupción; concentrar todo en una AZ y usar el edge no cubren el fallo del centro de datos. Si el requisito fuera recuperar datos tras una pérdida, la respuesta sería la copia de seguridad.',
		porQueOpcion: [
			'Incorrecta: las copias de seguridad permiten recuperar datos, pero no evitan la interrupción al perderse el centro de datos.',
			'Correcta: desplegar en varias Availability Zones y distribuir el tráfico mantiene la operación aunque se pierda un centro de datos.',
			'Incorrecta: concentrar todo en una sola Availability Zone crea un punto único de fallo que tumba la plataforma.',
			'Incorrecta: servir desde edge locations mejora la latencia, pero no cubre la caída del centro de datos.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/global-infrastructure.html',
		],
	},
	{
		id: '3.2-q12',
		taskId: '3.2',
		objetivos: ['3.2#3'],
		tipo: 'casoDeUso',
		question:
			'Una empresa quiere abrir mercado en otro continente y ofrecer baja latencia a esos usuarios, manteniendo el control del dato. ¿Qué uso de la infraestructura global responde mejor?',
		options: [
			'Desplegar una segunda copia de la carga en una región del nuevo continente, cerca de los usuarios.',
			'Añadir más Availability Zones dentro de la región actual, aunque estén muy lejos de los nuevos usuarios, para atenderlos con menor latencia.',
			'Servir todo desde la región original con una distribución de contenido delante del origen.',
			'Duplicar todos los recursos en cada una de las edge locations disponibles del planeta.',
		],
		correctAnswer: 0,
		explanation:
			'Para atender a usuarios de otro continente con baja latencia y control del dato, se despliega una copia en una región cercana a esos usuarios. Añadir AZ en la región actual no acorta la distancia, el edge acelera contenido pero no sustituye al cómputo regional y duplicar en cada punto de presencia no es viable. Si el requisito fuera solo entregar imágenes estáticas más rápido, bastaría el edge.',
		porQueOpcion: [
			'Correcta: desplegar una copia de la carga en una región del nuevo continente ofrece baja latencia cerca de los usuarios.',
			'Incorrecta: añadir Availability Zones en la región actual no acorta la distancia a los nuevos usuarios.',
			'Incorrecta: servir todo desde la región original mantiene la latencia alta para el nuevo continente.',
			'Incorrecta: duplicar todos los recursos en cada edge location no es viable ni necesario.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/global-infrastructure.html',
		],
	},
	{
		id: '3.2-q13',
		taskId: '3.2',
		objetivos: ['3.2#4'],
		tipo: 'escenario',
		question:
			'Un sitio de noticias con audiencia en tres continentes quiere acelerar la carga de sus portadas sin mover los datos de origen. ¿Qué uso de la infraestructura global encaja mejor?',
		options: [
			'Replicar la base de datos en tres regiones y servir cada portada desde la base más cercana al lector de cada continente.',
			'Entregar el contenido desde ubicaciones de borde cercanas al usuario, manteniendo el origen en su región.',
			'Mover todos los datos de origen a una edge location para reducir la distancia hasta el lector.',
			'Aumentar el tamaño de las instancias de origen para responder más rápido a los tres continentes.',
		],
		correctAnswer: 1,
		explanation:
			'Las ubicaciones de borde acercan la entrega del contenido al usuario y reducen la latencia sin mover el origen, que sigue en su región. Las edge locations no alojan la base de datos maestra, y ampliar las instancias de origen no acorta la distancia al lector. Si el requisito fuera que los datos de origen también vivieran cerca de cada audiencia, la decisión pasaría por varias regiones.',
		porQueOpcion: [
			'Incorrecta: replicar la base de datos no es necesario si solo se quiere acelerar la carga de portadas sin mover el origen.',
			'Correcta: entregar desde ubicaciones de borde cercanas reduce la latencia manteniendo el origen en su región.',
			'Incorrecta: los datos de origen no se mueven a una edge location, que no está pensada para alojarlos.',
			'Incorrecta: ampliar las instancias de origen no acorta la distancia hasta el lector de cada continente.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/global-infrastructure.html',
		],
	},
	{
		id: '3.2-q14',
		taskId: '3.2',
		objetivos: ['3.2#6'],
		tipo: 'conocimiento',
		question:
			'¿Cuál es la forma correcta de conseguir que una aplicación resista el fallo de un centro de datos?',
		options: [
			'Desplegar réplicas de la aplicación en varias Availability Zones de la misma región y distribuir el tráfico entre ellas.',
			'Contratar instancias más grandes en una sola Availability Zone y confiar en su mayor capacidad de reserva ante cualquier incidencia.',
			'Programar copias de seguridad más frecuentes para recuperar el servicio lo antes posible tras el fallo.',
			'Usar varias edge locations para que el contenido siga disponible aunque caiga el centro de datos.',
		],
		correctAnswer: 0,
		explanation:
			'Repartir réplicas entre Availability Zones aisladas y distribuir el tráfico es lo que permite seguir operando si cae un centro de datos. Una sola AZ, aunque tenga instancias mayores, sigue siendo un punto único de fallo; las copias de seguridad recuperan datos y el edge sirve contenido, pero ninguno mantiene la aplicación en marcha. Si el escenario exigiera sobrevivir a la caída de una región completa, la respuesta pasaría a ser varias regiones.',
		porQueOpcion: [
			'Correcta: replicar la aplicación en varias Availability Zones y distribuir el tráfico permite resistir el fallo de un centro de datos.',
			'Incorrecta: una sola Availability Zone con instancias mayores sigue siendo un punto único de fallo.',
			'Incorrecta: programar más copias de seguridad recupera datos, pero no mantiene el servicio en marcha.',
			'Incorrecta: las edge locations sirven contenido y no evitan que caiga la aplicación con el centro de datos.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/global-infrastructure.html',
		],
	},
	{
		id: '3.2-q15',
		taskId: '3.2',
		objetivos: ['3.2#7'],
		tipo: 'escenario',
		question:
			'Un proveedor debe responder a un auditor: «¿por qué una caída física en un centro de datos no tumba todo el servicio?». ¿Qué argumento es correcto?',
		options: [
			'Porque cada Availability Zone tiene alimentación, refrigeración y red independientes, así que el fallo no se propaga a las demás.',
			'Porque todas las Availability Zones comparten el mismo sistema eléctrico y reparten la carga entre sus servidores para amortiguar el fallo.',
			'Porque el proveedor de nube reubica de forma automática los recursos de la zona caída a otra zona sana.',
			'Porque las Availability Zones se comunican por internet público y redirigen el tráfico sin intervención del cliente.',
		],
		correctAnswer: 0,
		explanation:
			'El aislamiento físico de cada Availability Zone —alimentación, refrigeración y red propias— es lo que impide que un fallo localizado se propague. Compartir esas dependencias sería el punto único de fallo, y la conmutación entre zonas es responsabilidad del diseño del cliente, no una reubicación automática. Si el requisito fuera una conmutación automática entre zonas, habría que diseñarla en el cliente, porque AWS no reubica recursos por sí solo.',
		porQueOpcion: [
			'Correcta: cada Availability Zone tiene alimentación, refrigeración y red independientes, así que el fallo no se propaga a las demás.',
			'Incorrecta: compartir el mismo sistema eléctrico sería el punto único de fallo que se quiere evitar.',
			'Incorrecta: AWS no reubica automáticamente los recursos; la conmutación entre zonas la diseña el cliente.',
			'Incorrecta: las Availability Zones no se comunican por internet público y la redirección del tráfico no es automática.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/global-infrastructure.html',
		],
	},
	{
		id: '3.2-q16',
		taskId: '3.2',
		objetivos: ['3.2#8'],
		tipo: 'tradeoff',
		question:
			'¿Qué trade-off implica replicar una aplicación en varias regiones para lograr continuidad de negocio?',
		options: [
			'Se gana independencia frente al fallo de una región completa, pero aumentan la complejidad operativa y los costes de replicación y transferencia.',
			'Se gana simplicidad operativa, porque las regiones comparten la misma red, los mismos datos y las mismas Availability Zones sin replicación ni coste de transferencia alguno.',
			'No hay contrapartida: replicar en varias regiones siempre reduce la factura al repartir el tráfico.',
			'Se pierde la posibilidad de usar varias Availability Zones dentro de cada región replicada.',
		],
		correctAnswer: 0,
		explanation:
			'Replicar en varias regiones aporta continuidad frente al fallo regional, pero añade complejidad operativa y costes de replicación y transferencia de datos. Las regiones no comparten red ni datos, replicar no reduce la factura por sí solo y cada región conserva sus propias Availability Zones. Si el requisito fuera solo resistir el fallo de un centro de datos, bastaría con varias Availability Zones y no haría falta replicar entre regiones.',
		porQueOpcion: [
			'Correcta: replicar entre regiones gana independencia frente al fallo regional a cambio de más complejidad operativa y costes.',
			'Incorrecta: las regiones no comparten red, datos ni Availability Zones, y la replicación añade coste de transferencia.',
			'Incorrecta: replicar en varias regiones no reduce la factura por sí solo; añade costes.',
			'Incorrecta: cada región conserva sus propias Availability Zones, por lo que no se pierde la posibilidad de usarlas.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/global-infrastructure.html',
		],
	},
];
