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
			'Únicamente mediante llamadas a la API desde el navegador; no existen otras vías.',
			'Mediante la consola de administración, la CLI, los SDK, la infraestructura como código y servicios gestionados de plataforma.',
			'Solo con procesos manuales, porque AWS no admite automatización.',
			'Únicamente a través de un proveedor externo que gestione la cuenta.',
		],
		correctAnswer: 1,
		explanation:
			'El aprovisionamiento y la operación admiten varios niveles: acceso manual por consola, acceso programático por CLI, SDK y API, infraestructura como código para procesos reproducibles y servicios gestionados de plataforma que aprovisionan por el usuario. AWS sí admite automatización.',
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
			'Solo la consola de administración, que es la vía oficial.',
			'Únicamente correo electrónico y llamadas telefónicas al soporte.',
			'Acceso físico a los centros de datos y uso de la consola.',
		],
		correctAnswer: 0,
		explanation:
			'Las formas de acceso son la consola de administración, la interfaz de línea de comandos, los SDK y la API. Sobre ellas se construye la infraestructura como código. No se accede a los servicios de AWS por correo, teléfono ni acceso físico a los centros de datos.',
	},
	{
		id: '3.1-q3',
		taskId: '3.1',
		objetivos: ['3.1#4'],
		tipo: 'comparacion',
		question:
			'Un equipo debe decidir cómo crear cientos de recursos idénticos que deben reproducirse igual en varios entornos. ¿Qué opción encaja mejor y por qué?',
		options: [
			'La consola de administración, porque es la forma más rápida de repetir cientos de recursos.',
			'La infraestructura como código, porque describe los recursos en archivos versionados y los reproduce de forma consistente.',
			'La interfaz de línea de comandos escrita a mano una vez, sin guardar los comandos.',
			'El soporte de AWS, que crea los recursos por el cliente.',
		],
		correctAnswer: 1,
		explanation:
			'La infraestructura como código es la opción para reproducir el mismo entorno de forma consistente y auditable: el estado deseado queda en archivos versionados. La consola es visual y puntual, y unos comandos sueltos de CLI sin guardar no dejan una definición reutilizable.',
	},
	{
		id: '3.1-q4',
		taskId: '3.1',
		objetivos: ['3.1#4'],
		tipo: 'escenario',
		question:
			'Una persona nueva en el equipo necesita explorar visualmente los servicios y crear un recurso puntual con rapidez, sin automatizar. ¿Qué método de acceso es el más adecuado?',
		options: [
			'La consola de administración, por su enfoque visual y guiado.',
			'La infraestructura como código, porque es obligatoria para cualquier recurso.',
			'La API directamente, escribiendo las peticiones firmadas a mano.',
			'Un script de CLI sin documentación.',
		],
		correctAnswer: 0,
		explanation:
			'La consola de administración es la vía visual y guiada, ideal para explorar y para tareas puntuales. La infraestructura como código no es obligatoria para cada recurso y no es el medio natural para explorar; escribir peticiones firmadas a mano a la API añade complejidad innecesaria.',
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
			'Los modelos de despliegue son cloud (todo en la nube), on-premises (todo en instalaciones propias) e híbrido (combinación de ambos). Regional y zonal describen alcance de infraestructura, y manual o automático describen el grado de automatización, no el modelo de despliegue.',
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
			'Híbrido significa usar dos proveedores de nube distintos a la vez.',
			'On-premises significa alojar los datos en la nube pública.',
			'Cloud significa tener los servidores en el edificio de la empresa.',
		],
		correctAnswer: 0,
		explanation:
			'Cloud ejecuta todo en la nube, on-premises todo en instalaciones propias e híbrido combina las dos anteriores. Usar varios proveedores de nube es multinube, no híbrido; y cloud no implica tener servidores en el propio edificio.',
	},
	{
		id: '3.1-q7',
		taskId: '3.1',
		objetivos: ['3.1#6'],
		tipo: 'escenario',
		question:
			'Una empresa del sector sanitario debe mantener ciertos datos en sus instalaciones por normativa, pero quiere usar servicios de nube para el análisis y el escalado. ¿Qué modelo de despliegue encaja?',
		options: [
			'On-premises puro, sin usar la nube.',
			'Híbrido, que combina las instalaciones propias con la nube de AWS.',
			'Solo nube pública, moviendo todos los datos.',
			'Solo edge locations, sin región.',
		],
		correctAnswer: 1,
		explanation:
			'Cuando una parte del entorno debe permanecer en las instalaciones y otra puede aprovechar la nube, el modelo es híbrido. On-premises puro renunciaría al análisis y al escalado en la nube; mover todos los datos incumpliría la normativa.',
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
			'La operación puntual siempre es más segura que el proceso repetible.',
			'El proceso repetible solo sirve para eliminar recursos.',
			'Ambos son iguales; solo cambia el nombre según quién los ejecute.',
		],
		correctAnswer: 0,
		explanation:
			'La operación puntual cubre una necesidad que no se repite; el proceso repetible se diseña para reejecutarse con el mismo resultado. Cuanta más frecuencia, más entornos y más necesidad de auditoría, más conviene el proceso repetible.',
	},
	{
		id: '3.1-q9',
		taskId: '3.1',
		objetivos: ['3.1#5'],
		tipo: 'escenario',
		question:
			'Un equipo crea cada semana un entorno de pruebas idéntico al de producción. ¿Qué enfoque reduce el trabajo manual y los errores?',
		options: [
			'Repetir el proceso manualmente cada semana en la consola.',
			'Definir el entorno como código y volver a desplegarlo con una definición versionada.',
			'Crear el entorno una vez y no volver a actualizarlo.',
			'Pedir a cada desarrollador que memorice los pasos.',
		],
		correctAnswer: 1,
		explanation:
			'Un proceso que se repite es candidato a automatizarse. Definir el entorno como código y desplegarlo con una definición versionada garantiza resultados idénticos, reduce errores humanos y deja trazabilidad. Repetir pasos a mano o memorizarlos mantiene el riesgo.',
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
			'AWS CLI permite ejecutar acciones de administración desde la terminal y encadenarlas en scripts, lo que encaja con el acceso programático por línea de comandos. CloudFront y Route 53 son servicios de red y entrega, y AWS Artifact ofrece informes de cumplimiento.',
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
			'Crear cada instancia de Amazon EC2 a mano en la consola.',
			'Montar un centro de datos propio.',
			'Usar únicamente AWS Artifact.',
		],
		correctAnswer: 0,
		explanation:
			'AWS Elastic Beanstalk aprovisiona y opera la infraestructura por el usuario a partir del código de la aplicación, lo que permite desplegar sin gestionar los servidores. Crear instancias a mano o montar un centro de datos propio implica gestionar infraestructura.',
	},
	{
		id: '3.1-q12',
		taskId: '3.1',
		objetivos: ['3.1#3'],
		tipo: 'tradeoff',
		question: '¿Qué trade-off describe mejor elegir on-premises frente a la nube de AWS?',
		options: [
			'On-premises da control total sobre la infraestructura, pero exige comprar capacidad por adelantado y mantenerla; la nube aporta elasticidad y pago por uso.',
			'On-premises es siempre más barato y más elástico que la nube.',
			'La nube elimina toda responsabilidad del cliente sobre la seguridad.',
			'On-premises no permite ejecutar bases de datos.',
		],
		correctAnswer: 0,
		explanation:
			'On-premises ofrece control total a cambio de inversión anticipada y mantenimiento; la nube aporta elasticidad y pago por uso. La nube no elimina la responsabilidad del cliente sobre la seguridad, y on-premises sí permite ejecutar bases de datos.',
	},
];
