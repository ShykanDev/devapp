import type { PreguntaClfC02 } from '@/data/clfC02/types';

export const preguntasTask31: PreguntaClfC02[] = [
	{
		id: '3.1-q1',
		taskId: '3.1',
		objetivos: ['3.1#1'],
		tipo: 'conocimiento',
		question:
			'¿Cuál de las siguientes opciones describe formas válidas de aprovisionar y operar recursos en la nube de AWS?',
		options: [
			'Únicamente mediante llamadas a la API desde el navegador, porque AWS no ofrece ninguna otra vía para crear y operar recursos.',
			'Mediante consola, CLI, SDK, infraestructura como código y servicios gestionados de plataforma.',
			'Solo con procesos manuales asistidos por el soporte de AWS, porque la plataforma no admite automatización de ningún tipo.',
			'Únicamente a través de un proveedor externo que gestione la cuenta y cree los recursos en nombre del cliente.',
		],
		correctAnswer: 1,
		explanation:
			'El aprovisionamiento y la operación admiten varios niveles: acceso manual por consola, acceso programático por CLI, SDK y API, infraestructura como código para procesos reproducibles y servicios gestionados que aprovisionan por el usuario. Las opciones que reducen todo a la API, a procesos manuales o a un proveedor externo niegan vías que existen de verdad, y AWS sí admite automatización. Si el requisito fuera reproducir entornos idénticos de forma auditable, la vía principal sería la infraestructura como código; si cambiara a una exploración puntual, bastaría la consola.',
		porQueOpcion: [
			'Incorrecta: reducir el aprovisionamiento a la API desde el navegador niega la consola, la CLI, los SDK y la infraestructura como código.',
			'Correcta: consola, CLI, SDK, infraestructura como código y servicios gestionados son las vías válidas para aprovisionar y operar recursos.',
			'Incorrecta: AWS sí admite automatización, por lo que no depende solo de procesos manuales asistidos por soporte.',
			'Incorrecta: el cliente puede operar sus propios recursos, así que no necesita delegar toda la cuenta en un proveedor externo.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/introduction-devops-aws/infrastructure-as-code.html',
		],
	},
	{
		id: '3.1-q2',
		taskId: '3.1',
		objetivos: ['3.1#2'],
		tipo: 'conocimiento',
		question:
			'Un equipo necesita elegir cómo interactuará con los servicios de AWS. ¿Qué conjunto reúne formas de acceso válidas?',
		options: [
			'La consola de administración, la interfaz de línea de comandos, los SDK y la API.',
			'Solo la consola de administración, porque es la única vía oficial y el resto de interfaces no existen para el cliente.',
			'Únicamente el correo electrónico y el teléfono al soporte técnico, además del acceso físico a los centros de datos.',
			'Las herramientas de terceros y el correo electrónico son las únicas formas admitidas de interactuar con la plataforma.',
		],
		correctAnswer: 0,
		explanation:
			'Las formas de acceso son la consola de administración, la interfaz de línea de comandos, los SDK y la API, y sobre ellas se construye la infraestructura como código. La consola no es la única vía, y no se accede a los servicios por correo, teléfono ni acceso físico a los centros de datos. Si el requisito cambiara a dejar una definición versionada y repetible del entorno, la respuesta apuntaría a la infraestructura como código.',
		porQueOpcion: [
			'Correcta: consola de administración, CLI, SDK y API son las formas de acceso válidas a los servicios de AWS.',
			'Incorrecta: la consola no es la única vía oficial, ya que la CLI, los SDK y la API también existen para el cliente.',
			'Incorrecta: no se accede a los servicios por correo, teléfono ni físicamente a los centros de datos.',
			'Incorrecta: las herramientas de terceros y el correo electrónico no son formas admitidas de interactuar con la plataforma.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/introduction-devops-aws/infrastructure-as-code.html',
		],
	},
	{
		id: '3.1-q3',
		taskId: '3.1',
		objetivos: ['3.1#4'],
		tipo: 'comparacion',
		question:
			'Un equipo debe decidir cómo crear cientos de recursos idénticos que deben reproducirse igual en varios entornos. ¿Qué opción encaja mejor y por qué?',
		options: [
			'La consola de administración, porque es la forma más rápida de repetir cientos de recursos idénticos y deja una plantilla versionada reutilizable.',
			'La infraestructura como código, porque describe los recursos en archivos versionados y los reproduce de forma consistente.',
			'La interfaz de línea de comandos escrita a mano una vez, sin guardar los comandos, porque repetir los pasos a mano garantiza el mismo resultado.',
			'El soporte técnico de AWS, que crea los recursos por el cliente y mantiene una definición del entorno lista para auditorías.',
		],
		correctAnswer: 1,
		explanation:
			'La infraestructura como código es la opción para reproducir el mismo entorno de forma consistente y auditable: el estado deseado queda en archivos versionados. La consola es visual y puntual, y no deja plantilla; unos comandos sueltos de CLI sin guardar no son una definición reutilizable; y el soporte no crea el entorno por el cliente. Si cambiara el requisito a un ajuste puntual sin reproducibilidad, la consola o la CLI serían suficientes.',
		porQueOpcion: [
			'Incorrecta: la consola es visual y puntual y no deja una plantilla versionada reutilizable.',
			'Correcta: la infraestructura como código describe los recursos en archivos versionados y los reproduce de forma consistente.',
			'Incorrecta: unos comandos de CLI sin guardar no son una definición reutilizable ni garantizan el mismo resultado.',
			'Incorrecta: el soporte técnico no crea el entorno por el cliente ni mantiene una definición lista para auditorías.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/introduction-devops-aws/infrastructure-as-code.html',
		],
	},
	{
		id: '3.1-q4',
		taskId: '3.1',
		objetivos: ['3.1#4'],
		tipo: 'escenario',
		question:
			'Una persona nueva en el equipo necesita explorar visualmente los servicios y crear un recurso puntual con rapidez, sin automatizar y con un plazo muy ajustado. Aunque la organización planea automatizar entornos más adelante, esta tarea es única. ¿Qué método de acceso es el más adecuado?',
		options: [
			'La consola de administración, por su enfoque visual y guiado.',
			'La infraestructura como código, porque es obligatoria para cualquier recurso.',
			'La API directamente, escribiendo las peticiones firmadas a mano.',
			'Un script de CLI sin documentación.',
		],
		correctAnswer: 0,
		explanation:
			'La consola de administración es la vía visual y guiada, ideal para explorar y para tareas puntuales. La infraestructura como código no es obligatoria para cada recurso y no es el medio natural para explorar; escribir peticiones firmadas a mano a la API añade complejidad innecesaria, y un script sin documentación no deja una definición reutilizable. Si el escenario cambiara a reproducir el mismo entorno cada semana, la respuesta sería la infraestructura como código.',
		porQueOpcion: [
			'Correcta: la consola de administración es visual y guiada, ideal para explorar y para tareas puntuales.',
			'Incorrecta: la infraestructura como código no es obligatoria para cada recurso y no es el medio natural para explorar.',
			'Incorrecta: escribir peticiones firmadas a mano a la API añade complejidad innecesaria para una tarea puntual.',
			'Incorrecta: un script sin documentación no deja una definición reutilizable ni es adecuado para explorar.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/introduction-devops-aws/infrastructure-as-code.html',
		],
	},
	{
		id: '3.1-q5',
		taskId: '3.1',
		objetivos: ['3.1#3'],
		tipo: 'conocimiento',
		question: '¿Cuáles son los tipos de modelos de despliegue en la nube?',
		options: [
			'Nube, híbrido y on-premises.',
			'Público, privado y gratuito.',
			'Regional, zonal y local.',
			'Manual, automático y semiautomático.',
		],
		correctAnswer: 0,
		explanation:
			'Los modelos de despliegue son cloud (todo en la nube), on-premises (todo en instalaciones propias) e híbrido (combinación de ambos). Público y privado describen el tipo de nube, no el modelo de despliegue; regional y zonal describen alcance de infraestructura; y manual o automático describen el grado de automatización. Si el requisito fuera combinar instalaciones propias con la nube, la respuesta sería el modelo híbrido.',
		porQueOpcion: [
			'Correcta: nube, híbrido y on-premises son los modelos de despliegue en la nube.',
			'Incorrecta: público y privado describen el tipo de nube, no el modelo de despliegue.',
			'Incorrecta: regional y zonal describen el alcance de la infraestructura, no el modelo de despliegue.',
			'Incorrecta: manual y automático describen el grado de automatización, no el modelo de despliegue.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/introduction-devops-aws/infrastructure-as-code.html',
		],
	},
	{
		id: '3.1-q6',
		taskId: '3.1',
		objetivos: ['3.1#6'],
		tipo: 'conocimiento',
		question:
			'Una organización quiere identificar qué modelo de despliegue describe cada situación. ¿Qué afirmación es correcta?',
		options: [
			'Cloud: todo el entorno se ejecuta en la nube; on-premises: todo se ejecuta en instalaciones propias; híbrido: combina ambos.',
			'Híbrido significa usar a la vez dos proveedores de nube distintos y repartir entre ellos la misma carga, sin conexión con instalaciones propias.',
			'On-premises significa alojar los datos en la nube pública y mantener solo el acceso desde el edificio de la empresa.',
			'Cloud significa tener los servidores en el edificio de la empresa y contratar la refrigeración como servicio externo.',
		],
		correctAnswer: 0,
		explanation:
			'Cloud ejecuta todo en la nube, on-premises todo en instalaciones propias e híbrido combina las dos anteriores. Usar varios proveedores de nube es multinube, no híbrido, y cloud no implica tener servidores propios. Si el requisito fuera mantener datos en las instalaciones y usar la nube para el análisis, la opción sería híbrido.',
		porQueOpcion: [
			'Correcta: cloud ejecuta todo en la nube, on-premises todo en instalaciones propias e híbrido combina ambos.',
			'Incorrecta: usar dos proveedores de nube es multinube, no híbrido, y no describe la combinación con instalaciones propias.',
			'Incorrecta: on-premises ejecuta en instalaciones propias, no aloja los datos en la nube pública.',
			'Incorrecta: cloud ejecuta en la nube, no en el edificio de la empresa con refrigeración externa.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/introduction-devops-aws/infrastructure-as-code.html',
		],
	},
	{
		id: '3.1-q7',
		taskId: '3.1',
		objetivos: ['3.1#6'],
		tipo: 'escenario',
		question:
			'Una empresa del sector sanitario debe mantener ciertos datos en sus instalaciones por normativa, pero quiere usar servicios de nube para el análisis y el escalado. ¿Qué modelo de despliegue encaja?',
		options: [
			'On-premises puro, manteniendo todo en el centro de datos propio y renunciando a la nube para el análisis y el escalado.',
			'Híbrido, que combina las instalaciones propias con la nube de AWS.',
			'Solo nube pública, trasladando también los datos que la normativa obliga a retener en las instalaciones.',
			'Solo ubicaciones de borde, sin usar ninguna región, para acercar el contenido al usuario.',
		],
		correctAnswer: 1,
		explanation:
			'Cuando una parte del entorno debe permanecer en las instalaciones y otra puede aprovechar la nube, el modelo es híbrido. On-premises puro renuncia al análisis y al escalado, mover todos los datos incumpliría la normativa y las ubicaciones de borde no sustituyen a la región. Si el requisito fuera cumplir la normativa sin usar la nube en absoluto, el modelo sería on-premises.',
		porQueOpcion: [
			'Incorrecta: on-premises puro renuncia a la nube para el análisis y el escalado que la empresa necesita.',
			'Correcta: el modelo híbrido combina las instalaciones propias que exige la normativa con la nube de AWS.',
			'Incorrecta: mover a la nube pública los datos que la normativa obliga a retener en las instalaciones la incumpliría.',
			'Incorrecta: las ubicaciones de borde no sustituyen a la región ni resuelven la retención normativa de los datos.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/introduction-devops-aws/infrastructure-as-code.html',
		],
	},
	{
		id: '3.1-q8',
		taskId: '3.1',
		objetivos: ['3.1#5'],
		tipo: 'comparacion',
		question:
			'Un equipo debe decidir entre una operación puntual y un proceso repetible. ¿Qué criterio los distingue?',
		options: [
			'La operación puntual se ejecuta una sola vez; el proceso repetible se define una vez y se vuelve a ejecutar de forma consistente.',
			'La operación puntual es siempre más segura y auditable que el proceso repetible, porque una persona revisa cada paso de la ejecución.',
			'El proceso repetible solo sirve para eliminar recursos ociosos, mientras que la operación puntual es la única vía para crear entornos nuevos.',
			'Ambos enfoques son iguales y solo cambia el nombre según quién los ejecute, sin que la frecuencia de uso altere la decisión.',
		],
		correctAnswer: 0,
		explanation:
			'La operación puntual cubre una necesidad que no se repite; el proceso repetible se diseña para reejecutarse con el mismo resultado. La operación puntual no es más segura por sí sola, el proceso repetible no se limita a eliminar recursos y ambos no son equivalentes. Si cambiara el requisito a una tarea que se repite cada semana en varios entornos, la respuesta sería el proceso repetible.',
		porQueOpcion: [
			'Correcta: la operación puntual se ejecuta una sola vez y el proceso repetible se define para reejecutarse de forma consistente.',
			'Incorrecta: la operación puntual no es más segura ni auditable por el simple hecho de revisarla una persona.',
			'Incorrecta: el proceso repetible sirve para crear entornos, no solo para eliminar recursos ociosos.',
			'Incorrecta: ambos enfoques no son equivalentes, ya que difieren en frecuencia y reproducibilidad.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/introduction-devops-aws/infrastructure-as-code.html',
		],
	},
	{
		id: '3.1-q9',
		taskId: '3.1',
		objetivos: ['3.1#5'],
		tipo: 'escenario',
		question:
			'Un equipo crea cada semana un entorno de pruebas idéntico al de producción. ¿Qué enfoque reduce el trabajo manual y los errores?',
		options: [
			'Repetir el proceso manualmente cada semana en la consola, confiando en la memoria del equipo para no olvidar pasos.',
			'Definir el entorno como código y volver a desplegarlo con una definición versionada.',
			'Crear el entorno una vez y no volver a actualizarlo, aunque cambien el código ni la configuración de la aplicación.',
			'Pedir a cada desarrollador que memorice los pasos y los replique a mano cada vez que necesite un entorno nuevo.',
		],
		correctAnswer: 1,
		explanation:
			'Un proceso que se repite es candidato a automatizarse: definir el entorno como código y desplegarlo con una definición versionada garantiza resultados idénticos y deja trazabilidad. Repetir pasos a mano, congelar el entorno o memorizar pasos mantiene el error humano. Si el requisito cambiara a una única prueba desechable sin reutilización, bastaría una operación puntual en la consola.',
		porQueOpcion: [
			'Incorrecta: repetir pasos a mano confiando en la memoria del equipo mantiene el error humano.',
			'Correcta: definir el entorno como código y desplegarlo con una definición versionada garantiza resultados idénticos.',
			'Incorrecta: congelar el entorno sin actualizarlo desincroniza las pruebas de producción.',
			'Incorrecta: memorizar y replicar los pasos a mano no reduce el trabajo manual ni los errores.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/introduction-devops-aws/infrastructure-as-code.html',
		],
	},
	{
		id: '3.1-q10',
		taskId: '3.1',
		objetivos: ['3.1#2'],
		tipo: 'servicio',
		question:
			'Una arquitecta quiere ejecutar tareas de administración mediante comandos desde su terminal y automatizarlas en scripts. ¿Qué herramienta de AWS usaría?',
		options: ['AWS CLI', 'Amazon CloudFront', 'Amazon Route 53', 'AWS Artifact'],
		correctAnswer: 0,
		explanation:
			'AWS CLI permite ejecutar acciones de administración desde la terminal y encadenarlas en scripts, lo que encaja con el acceso programático por línea de comandos. CloudFront y Route 53 son servicios de red y entrega, y AWS Artifact ofrece informes de cumplimiento; ninguno ejecuta comandos de administración. Si el requisito fuera reproducir entornos completos de forma versionada en lugar de ejecutar comandos sueltos, la herramienta sería la infraestructura como código.',
		porQueOpcion: [
			'Correcta: AWS CLI permite ejecutar acciones de administración desde la terminal y encadenarlas en scripts.',
			'Incorrecta: Amazon CloudFront es un servicio de entrega de contenido y no ejecuta comandos de administración.',
			'Incorrecta: Amazon Route 53 es un servicio de DNS y no sirve para ejecutar tareas de administración desde la terminal.',
			'Incorrecta: AWS Artifact entrega informes de cumplimiento y no ejecuta comandos de administración.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/cli/',
			'https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html',
			'https://docs.aws.amazon.com/artifact/',
			'https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html',
		],
	},
	{
		id: '3.1-q11',
		taskId: '3.1',
		objetivos: ['3.1#1'],
		tipo: 'casoDeUso',
		question:
			'Un equipo quiere desplegar una aplicación web sin gestionar los servidores ni la infraestructura subyacente, subiendo solo el código. ¿Qué opción encaja mejor?',
		options: [
			'AWS Elastic Beanstalk, que aprovisiona y opera los recursos por el usuario.',
			'Crear cada instancia de Amazon EC2 a mano en la consola, aplicando parches y escalando el equipo de forma manual.',
			'Montar un centro de datos propio con servidores físicos para no depender de proveedores externos de nube.',
			'Usar únicamente AWS Artifact para desplegar el código y delegar en AWS la operación de los servidores.',
		],
		correctAnswer: 0,
		explanation:
			'AWS Elastic Beanstalk aprovisiona y opera la infraestructura por el usuario a partir del código de la aplicación, lo que permite desplegar sin gestionar los servidores. Crear instancias a mano, montar un centro de datos propio o usar un servicio de informes de cumplimiento implican gestionar infraestructura o no despliegan código. Si el escenario pidiera control total del sistema operativo, la respuesta cambiaría a instancias de Amazon EC2 administradas por el equipo.',
		porQueOpcion: [
			'Correcta: AWS Elastic Beanstalk aprovisiona y opera la infraestructura a partir del código, sin gestionar servidores.',
			'Incorrecta: crear instancias EC2 a mano implica gestionar la infraestructura que se quiere evitar.',
			'Incorrecta: montar un centro de datos propio no despliega el código sin gestionar servidores.',
			'Incorrecta: AWS Artifact ofrece informes de cumplimiento y no despliega código ni opera servidores.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/Welcome.html',
			'https://docs.aws.amazon.com/ec2/',
			'https://docs.aws.amazon.com/artifact/',
		],
	},
	{
		id: '3.1-q12',
		taskId: '3.1',
		objetivos: ['3.1#3'],
		tipo: 'tradeoff',
		question: '¿Qué trade-off describe mejor elegir on-premises frente a la nube de AWS?',
		options: [
			'On-premises da control total sobre la infraestructura, pero exige comprar capacidad por adelantado y mantenerla; la nube aporta elasticidad y pago por uso.',
			'On-premises es siempre más barato y más elástico que la nube, porque no paga licencias y añade capacidad automáticamente en los picos de demanda.',
			'La nube elimina toda responsabilidad del cliente sobre la seguridad de los datos, que pasa a ser gestionada íntegramente por el proveedor sin tareas del cliente.',
			'On-premises no permite ejecutar bases de datos ni aplicaciones web, ya que solo admite sistemas operativos heredados y sin soporte.',
		],
		correctAnswer: 0,
		explanation:
			'On-premises ofrece control total a cambio de inversión anticipada y mantenimiento; la nube aporta elasticidad y pago por uso. On-premises no es más elástico ni automáticamente más barato, la nube no elimina la responsabilidad del cliente sobre la seguridad y sí permite ejecutar bases de datos. Si el requisito fuera crecer y decrecer con la demanda pagando solo por el uso, la respuesta sería la nube.',
		porQueOpcion: [
			'Correcta: on-premises da control total pero exige inversión anticipada y mantenimiento, mientras la nube aporta elasticidad y pago por uso.',
			'Incorrecta: on-premises no es más elástico, ya que no añade capacidad automáticamente en los picos de demanda.',
			'Incorrecta: en la nube el cliente conserva responsabilidades de seguridad sobre sus datos.',
			'Incorrecta: on-premises sí permite ejecutar bases de datos y aplicaciones web modernas.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/introduction-devops-aws/infrastructure-as-code.html',
		],
	},
	{
		id: '3.1-q13',
		taskId: '3.1',
		objetivos: ['3.1#2'],
		tipo: 'escenario',
		question:
			'Un equipo debe decidir cómo interactuará con los servicios según la tarea. ¿Qué opción describe mejor el uso adecuado de cada forma de acceso?',
		options: [
			'La consola para explorar y hacer tareas puntuales; la CLI y los SDK para automatizar desde scripts y aplicaciones; la IaC para reproducir entornos versionados.',
			'La consola de administración para absolutamente todo, porque es la única vía oficial; la CLI y los SDK solo sirven para consultar la factura y no pueden crear recursos.',
			'La CLI para todo, ya que no admite scripts; los SDK solo funcionan dentro de la consola y la IaC no permite versionar la definición del entorno.',
			'La IaC para cualquier ajuste puntual, la consola para reproducir entornos enteros y los SDK para operar únicamente desde el navegador.',
		],
		correctAnswer: 0,
		explanation:
			'Cada vía encaja en un momento: la consola es visual y puntual, la CLI y los SDK automatizan desde scripts y aplicaciones, y la infraestructura como código reproduce entornos versionados. Reducir todo a la consola o a la CLI niega vías reales, y la IaC no es el medio natural para ajustes puntuales. Si cambiara el requisito a una exploración rápida sin automatización, la consola sería la opción adecuada.',
		porQueOpcion: [
			'Correcta: la consola sirve para explorar, la CLI y los SDK para automatizar y la IaC para reproducir entornos versionados.',
			'Incorrecta: la CLI y los SDK también crean recursos, no solo consultan la factura, y la consola no es la única vía.',
			'Incorrecta: la CLI sí admite scripts, los SDK no funcionan solo dentro de la consola y la IaC sí versiona la definición.',
			'Incorrecta: la IaC no es para ajustes puntuales, la consola no reproduce entornos enteros y los SDK no operan desde el navegador.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/introduction-devops-aws/infrastructure-as-code.html',
		],
	},
	{
		id: '3.1-q14',
		taskId: '3.1',
		objetivos: ['3.1#3', '3.1#6'],
		tipo: 'comparacion',
		question:
			'Una empresa debate dónde ejecutar cada carga. ¿Qué afirmación distingue correctamente los modelos de despliegue nube, híbrido y on-premises?',
		options: [
			'La nube ejecuta todo el entorno en instalaciones propias; el híbrido solo en proveedores externos; y on-premises combina ambos mundos indistintamente.',
			'La nube ejecuta todo en la nube; el híbrido combina instalaciones propias con la nube; on-premises mantiene todo en instalaciones propias.',
			'La nube y on-premises son sinónimos, y el híbrido se define por usar dos proveedores de nube a la vez.',
			'El híbrido describe el uso de varias regiones, on-premises el uso de varias zonas y la nube un único centro de datos.',
		],
		correctAnswer: 1,
		explanation:
			'La nube ejecuta todo en la nube, on-premises todo en instalaciones propias y el híbrido combina ambos. Confundir híbrido con multinube o con varias regiones es el error típico. Si el requisito fuera mantener datos en las instalaciones y usar la nube para el análisis, la respuesta sería el modelo híbrido.',
		porQueOpcion: [
			'Incorrecta: invierte los modelos, ya que la nube no ejecuta en instalaciones propias ni on-premises combina ambos mundos.',
			'Correcta: la nube ejecuta todo en la nube, el híbrido combina instalaciones propias con la nube y on-premises mantiene todo en instalaciones propias.',
			'Incorrecta: nube y on-premises no son sinónimos, y el híbrido no se define por usar dos proveedores de nube a la vez.',
			'Incorrecta: el híbrido no describe el uso de varias regiones ni on-premises el de varias zonas.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/whitepapers/latest/introduction-devops-aws/infrastructure-as-code.html',
		],
	},
];
