import type { PreguntaProfesionalClfC02 } from '@/data/clfC02/profesional/types';

export const profesionalTask31: PreguntaProfesionalClfC02[] = [
	{
		id: 'prof-3.1-q1',
		taskId: '3.1',
		objetivos: ['3.1#1', '3.1#2'],
		tipo: 'multiConcepto',
		question:
			'Una empresa quiere decidir cómo su equipo aprovisionará los recursos y cómo accederá a los servicios de AWS. ¿Qué afirmación describe correctamente las opciones disponibles?',
		options: [
			'El acceso programático se limita a la consola web; las API y los SDKs solo sirven para consultar la facturación.',
			'La consola de AWS ofrece acceso visual e interactivo, la CLI y los SDKs aportan acceso programático, y AWS CloudFormation permite definir la infraestructura como código.',
			'La CLI es la única forma de acceso programático y los SDKs solo funcionan dentro de la consola.',
			'AWS CloudFormation es la consola gráfica que reemplaza a la CLI y a los SDKs.',
		],
		correctAnswer: 1,
		explanation:
			'La consola es la vía visual e interactiva; la CLI, las API y los SDKs proporcionan acceso programático para automatizar; AWS CloudFormation es infraestructura como código, no una consola. Aprovisionar y acceder son decisiones distintas pero complementarias.',
		porQueOpcion: [
			'Incorrecto: las API y los SDKs no se limitan a la facturación; son la vía programática para operar cualquier servicio.',
			'Correcta: resume las vías de acceso y sitúa a AWS CloudFormation como infraestructura como código.',
			'Incorrecto: la CLI no es la única vía programática; los SDKs funcionan sin la consola.',
			'Incorrecto: AWS CloudFormation es un servicio de infraestructura como código, no una consola gráfica.',
		],
	},
	{
		id: 'prof-3.1-q2',
		taskId: '3.1',
		objetivos: ['3.1#4'],
		tipo: 'comparacion',
		question:
			'Un equipo debe aprovisionar un entorno que se reproducirá de forma idéntica en varias cuentas y Regiones. ¿Qué opción entre consola, CLI/SDK e infraestructura como código es la adecuada?',
		options: [
			'La consola de AWS, porque es la única forma de crear recursos de manera repetible.',
			'La CLI, porque permite describir la infraestructura de forma declarativa y versionarla.',
			'La infraestructura como código, por ejemplo con AWS CloudFormation, porque describe el entorno en plantillas versionables y lo despliega de forma repetible.',
			'Cualquiera de las tres es equivalente; la elección no influye en la repetibilidad.',
		],
		correctAnswer: 2,
		explanation:
			'Cuando el entorno debe repetirse, la infraestructura como código es la opción correcta: la plantilla se versiona y se vuelve a desplegar con el mismo resultado. La consola y la CLI son vías válidas, pero no garantizan por sí solas un resultado idéntico y versionado.',
		porQueOpcion: [
			'Incorrecto: la consola es interactiva y propensa a diferencias entre ejecuciones, no la vía repetible.',
			'Incorrecto: la CLI puede automatizar, pero no es declarativa ni versiona el entorno por sí sola.',
			'Correcta: AWS CloudFormation describe la infraestructura como código reutilizable y versionable.',
			'Incorrecto: la elección sí afecta a la repetibilidad; la infraestructura como código es la que la garantiza.',
		],
	},
	{
		id: 'prof-3.1-q3',
		taskId: '3.1',
		objetivos: ['3.1#5'],
		tipo: 'escenario',
		question:
			'Una empresa quiere validar una idea creando un entorno de prueba una sola vez, sin intención de reutilizarlo. ¿Qué enfoque es más adecuado?',
		options: [
			'Definir una plantilla de infraestructura como código completa, aunque el entorno no se vaya a reutilizar.',
			'Crear el entorno de forma puntual desde la consola de AWS y reservar la automatización para procesos que se repetirán.',
			'Escribir un script con la CLI que se ejecute en todos los despliegues futuros.',
			'Montar un pipeline de integración y despliegue continuos para el entorno desechable.',
		],
		correctAnswer: 1,
		explanation:
			'La decisión depende de si la operación es única o repetible. Para una prueba desechable, una operación puntual desde la consola es proporcionada; invertir en automatización se justifica cuando el proceso se repetirá.',
		porQueOpcion: [
			'Incorrecto: crear infraestructura como código para un entorno que no se reutilizará añade esfuerzo sin retorno.',
			'Correcta: operación puntual para un uso único, reservando la automatización para lo repetible.',
			'Incorrecto: automatizar un proceso que no se repetirá no aporta valor y añade complejidad.',
			'Incorrecto: un pipeline es excesivo para un entorno desechable.',
		],
	},
	{
		id: 'prof-3.1-q4',
		taskId: '3.1',
		objetivos: ['3.1#3'],
		tipo: 'comparacion',
		question: '¿Qué distingue a los modelos de despliegue en la nube, híbrido y on-premises?',
		options: [
			'En la nube todo se ejecuta en AWS; el híbrido combina recursos locales con AWS; on-premises mantiene todo en las instalaciones del cliente.',
			'El híbrido consiste en usar servicios de AWS desde dos Regiones distintas.',
			'On-premises significa ejecutar recursos en AWS sin conexión a internet.',
			'Los tres modelos obligan a que los datos residan siempre en las instalaciones del cliente.',
		],
		correctAnswer: 0,
		explanation:
			'El modelo describe dónde vive la carga: íntegramente en AWS (nube), repartida entre el entorno local y AWS (híbrido) o solo en las instalaciones propias (on-premises). El número de Regiones y la conectividad no definen el modelo.',
		porQueOpcion: [
			'Correcta: define cada modelo por la ubicación de las cargas.',
			'Incorrecto: usar varias Regiones sigue siendo un despliegue en la nube, no híbrido.',
			'Incorrecto: on-premises es exactamente lo contrario, ejecutar en las instalaciones propias.',
			'Incorrecto: solo on-premises mantiene todo en las instalaciones; el híbrido y la nube no.',
		],
	},
	{
		id: 'prof-3.1-q5',
		taskId: '3.1',
		objetivos: ['3.1#6'],
		tipo: 'escenario',
		question:
			'Una empresa mantiene un sistema heredado en su centro de datos por requisitos regulatorios, pero quiere ejecutar el resto de cargas en AWS y conectarlas a su red local. ¿Qué modelo de despliegue describe esta situación?',
		options: [
			'Nube pura, porque parte de las cargas están en AWS.',
			'Híbrido, porque combina el entorno local con servicios de AWS conectados entre sí.',
			'On-premises, porque existe un centro de datos propio.',
			'Multi-Región, porque hay más de una ubicación implicada.',
		],
		correctAnswer: 1,
		explanation:
			'La convivencia de un sistema local con cargas en AWS conectadas a la red corporativa es la definición de despliegue híbrido. On-premises sería si todo siguiera local y nube pura si todo estuviera en AWS.',
		porQueOpcion: [
			'Incorrecto: la nube pura no conserva cargas en el centro de datos propio.',
			'Correcta: mezcla entorno local y AWS conectados, propio del modelo híbrido.',
			'Incorrecto: on-premises describe ejecutar todo en las instalaciones, no solo el sistema heredado.',
			'Incorrecto: multi-Región se refiere a varias Regiones de AWS, no a local más nube.',
		],
	},
];
