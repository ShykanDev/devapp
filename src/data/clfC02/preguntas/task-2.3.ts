import type { PreguntaClfC02 } from '@/data/clfC02/types';

export const preguntasTask23: PreguntaClfC02[] = [
	{
		id: '2.3-q1',
		taskId: '2.3',
		objetivos: ['2.3#1'],
		tipo: 'conocimiento',
		question: '¿Qué controla AWS Identity and Access Management (IAM)?',
		options: [
			'El cifrado en reposo de los datos almacenados en los servicios de AWS.',
			'Quién puede hacer qué en una cuenta de AWS, mediante identidades y políticas de permisos.',
			'El enrutamiento del tráfico entre regiones de AWS.',
			'La facturación consolidada de varias cuentas de AWS.',
		],
		correctAnswer: 1,
		explanation:
			'IAM gobierna la autenticación y la autorización dentro de una cuenta: define identidades (usuarios, grupos, roles) y políticas que indican qué acciones se permiten o deniegan sobre qué recursos. El cifrado, el enrutamiento y la facturación corresponden a otras capacidades.',
	},
	{
		id: '2.3-q2',
		taskId: '2.3',
		objetivos: ['2.3#1'],
		tipo: 'comparacion',
		question:
			'Un equipo necesita que una aplicación que corre en AWS acceda a un bucket sin guardar credenciales permanentes. ¿Qué diferencia entre usuario de IAM y rol de IAM justifica la elección?',
		options: [
			'El usuario de IAM nunca tiene credenciales; el rol de IAM siempre tiene una clave de acceso permanente.',
			'El rol de IAM no tiene credenciales permanentes: se asume y entrega credenciales temporales, mientras que el usuario de IAM puede tener claves de acceso de larga duración.',
			'Ambos son idénticos y solo cambian de nombre según la consola que se use.',
			'El usuario de IAM solo sirve para acceder a la consola y el rol de IAM solo para facturación.',
		],
		correctAnswer: 1,
		explanation:
			'Un rol se asume y proporciona credenciales temporales, por lo que no requiere almacenar claves de larga duración; es la opción adecuada para aplicaciones y accesos entre cuentas. Un usuario de IAM puede tener claves de acceso permanentes y solo se justifica cuando no hay alternativa.',
	},
	{
		id: '2.3-q3',
		taskId: '2.3',
		objetivos: ['2.3#1', '2.3#7'],
		tipo: 'escenario',
		question:
			'Una empresa contrata a diez analistas para un proyecto de tres meses. Deben consultar paneles y leer datos, sin capacidad de modificar recursos. ¿Qué enfoque respeta mejor el principio de menor privilegio?',
		options: [
			'Adjuntar la política de administrador a cada analista para evitar bloqueos.',
			'Crear un grupo con una política que permita solo leer paneles y datos, y añadir al grupo a los analistas durante el proyecto.',
			'Compartir la contraseña del root user entre los analistas.',
			'Crear una clave de acceso por analista con permisos de administrador y rotarla cada seis meses.',
		],
		correctAnswer: 1,
		explanation:
			'Agrupar identidades y adjuntar al grupo una política con el permiso mínimo evita repetir permisos y reduce el riesgo. La política de administrador y el uso de credenciales del root user contradicen el principio de menor privilegio.',
	},
	{
		id: '2.3-q4',
		taskId: '2.3',
		objetivos: ['2.3#7'],
		tipo: 'conocimiento',
		question: '¿Qué son las managed policies en AWS Identity and Access Management (IAM)?',
		options: [
			'Políticas que solo puede usar el root user de la cuenta.',
			'Políticas administradas por AWS o creadas por el cliente para reutilizarlas y adjuntarlas a varias identidades.',
			'Políticas que se guardan dentro de una única identidad y no se pueden reutilizar.',
			'Reglas de red que filtran el tráfico hacia una instancia.',
		],
		correctAnswer: 1,
		explanation:
			'Las managed policies son documentos de permisos reutilizables que AWS administra o que crea el cliente, y pueden adjuntarse a varias identidades. Las políticas que viven dentro de una sola identidad son inline policies; las reglas de red pertenecen a la capa de red, no a IAM.',
	},
	{
		id: '2.3-q5',
		taskId: '2.3',
		objetivos: ['2.3#3'],
		tipo: 'escenario',
		question:
			'Un desarrollador necesita reiniciar instancias solo durante los despliegues, pero su política actual le permite borrar cualquier recurso de la cuenta. ¿Qué cambio aplica el principio de menor privilegio?',
		options: [
			'Mantener el permiso amplio porque acelera los despliegues.',
			'Sustituir el permiso amplio por uno que solo permita reiniciar y consultar las instancias del proyecto, y retirarlo al terminar.',
			'Añadir MFA y conservar todos los permisos actuales.',
			'Convertir al desarrollador en root user para auditar sus acciones.',
		],
		correctAnswer: 1,
		explanation:
			'El principio de menor privilegio concede únicamente las acciones necesarias, sobre los recursos necesarios y durante el tiempo necesario. Añadir MFA mejora la autenticación, pero no reduce los permisos; usar el root user los amplía al máximo.',
	},
	{
		id: '2.3-q6',
		taskId: '2.3',
		objetivos: ['2.3#3'],
		tipo: 'tradeoff',
		question:
			'El equipo de operaciones pide permisos de administrador «para no perder tiempo pidiendo aprobaciones». ¿Cómo se equilibra la agilidad con el principio de menor privilegio?',
		options: [
			'Conceder administrador permanente a todo el equipo para maximizar la velocidad.',
			'Conceder acceso elevado temporal, ligado a una tarea y con aprobación y registro, en lugar de permisos permanentes.',
			'Eliminar todos los permisos y pedir al root user que ejecute las tareas.',
			'Repartir la contraseña del root user entre los operadores.',
		],
		correctAnswer: 1,
		explanation:
			'El acceso elevado temporal y justificado mantiene la agilidad sin dejar permisos permanentes de administrador. El registro y la aprobación conservan la trazabilidad; repartir credenciales del root user elimina cualquier control.',
	},
	{
		id: '2.3-q7',
		taskId: '2.3',
		objetivos: ['2.3#2'],
		tipo: 'conocimiento',
		question: '¿Por qué es importante proteger la cuenta raíz (root user) de una cuenta de AWS?',
		options: [
			'Porque es la única identidad que puede crear políticas de IAM.',
			'Porque tiene acceso completo a todos los recursos y servicios de la cuenta y no se le pueden denegar permisos con políticas de IAM.',
			'Porque es la única identidad que puede usar la consola de AWS.',
			'Porque solo ella puede crear usuarios de IAM.',
		],
		correctAnswer: 1,
		explanation:
			'El root user tiene acceso total y sus permisos no se pueden restringir con políticas de IAM, por lo que comprometerlo compromete la cuenta entera. Los usuarios administradores de IAM también pueden gestionar políticas y usuarios, así que la singularidad del root user es su acceso irrestricto.',
	},
	{
		id: '2.3-q8',
		taskId: '2.3',
		objetivos: ['2.3#8'],
		tipo: 'conocimiento',
		question: '¿Qué tarea solo puede realizar el root user de la cuenta?',
		options: [
			'Crear un usuario de IAM con permisos de administrador.',
			'Cambiar el plan de soporte de la cuenta y cerrar la cuenta de AWS.',
			'Iniciar una instancia de cómputo.',
			'Adjuntar una política a un rol de IAM.',
		],
		correctAnswer: 1,
		explanation:
			'Tareas como cambiar el plan de soporte, cerrar la cuenta, cambiar el correo o el nombre de la cuenta o restaurar los permisos de un administrador de IAM quedan reservadas al root user. Crear usuarios, adjuntar políticas e iniciar instancias son tareas delegables.',
	},
	{
		id: '2.3-q9',
		taskId: '2.3',
		objetivos: ['2.3#9'],
		tipo: 'seguridad',
		question: '¿Qué conjunto de medidas protege mejor la cuenta raíz (root user)?',
		options: [
			'Crear claves de acceso para el root user y usarlas en los scripts de automatización.',
			'Activar MFA en el root user, no crear claves de acceso para él y usar una identidad administrativa distinta para el trabajo diario.',
			'Compartir la contraseña del root user con todo el equipo de operaciones.',
			'Desactivar el registro de actividad para que no se filtren datos del root user.',
		],
		correctAnswer: 1,
		explanation:
			'Proteger el root user combina activar MFA, evitar claves de acceso de larga duración y reservarlo para las tareas que solo él puede hacer; el trabajo diario se realiza con una identidad administrativa de IAM. Compartir credenciales o desactivar el registro aumenta el riesgo.',
	},
	{
		id: '2.3-q10',
		taskId: '2.3',
		objetivos: ['2.3#5', '2.3#6'],
		tipo: 'comparacion',
		question:
			'Un equipo confunde una clave de acceso con un segundo factor de autenticación. ¿Qué distingue correctamente a cada uno?',
		options: [
			'La clave de acceso es un segundo factor y el MFA es una credencial de larga duración.',
			'La clave de acceso es una credencial programática de larga duración; el MFA es un factor adicional que se exige durante el inicio de sesión.',
			'Ambos son sinónimos y solo cambian de nombre según el servicio.',
			'El MFA sustituye a la contraseña y la clave de acceso sustituye al rol.',
		],
		correctAnswer: 1,
		explanation:
			'La clave de acceso (access key) es un par de credenciales permanente para llamadas programáticas; el MFA añade un factor extra en la autenticación y no sustituye a la contraseña ni a las políticas. Son mecanismos distintos: uno autentica programas y el otro refuerza el inicio de sesión.',
	},
	{
		id: '2.3-q11',
		taskId: '2.3',
		objetivos: ['2.3#5'],
		tipo: 'conocimiento',
		question:
			'¿Dónde conviene almacenar los secretos de una aplicación en lugar de dejarlos en el código o en archivos de configuración?',
		options: [
			'En una política de IAM con permisos de administrador.',
			'En un almacén de secretos gestionado, como AWS Secrets Manager o AWS Systems Manager.',
			'En el user data de una instancia tal como está.',
			'En el nombre del recurso, para que sea fácil de leer.',
		],
		correctAnswer: 1,
		explanation:
			'Los secretos deben vivir en un almacén gestionado que permita cifrado, control de acceso y rotación, como AWS Secrets Manager o AWS Systems Manager. Dejarlos en el código, en archivos o en texto plano los expone a cualquiera que lea el repositorio o el recurso.',
	},
	{
		id: '2.3-q12',
		taskId: '2.3',
		objetivos: ['2.3#6'],
		tipo: 'escenario',
		question:
			'Una empresa quiere que su personal acceda desde el móvil con un segundo factor y que los servicios entre cuentas se llamen sin claves permanentes. ¿Qué combinación de métodos de autenticación cumple ambos objetivos?',
		options: [
			'Contraseñas únicas por persona sin segundo factor y claves de acceso compartidas.',
			'MFA para las personas e IAM Identity Center o roles entre cuentas que entregan credenciales temporales para los servicios.',
			'Solo el root user para todo, con MFA activado.',
			'Un usuario de IAM con clave de acceso de larga duración por cada cuenta y servicio.',
		],
		correctAnswer: 1,
		explanation:
			'MFA refuerza el inicio de sesión de las personas y los roles entre cuentas o IAM Identity Center entregan credenciales temporales a los servicios, sin claves permanentes. Concentrar todo en el root user o repartir claves de acceso de larga duración contradice el principio de menor privilegio.',
	},
	{
		id: '2.3-q13',
		taskId: '2.3',
		objetivos: ['2.3#4'],
		tipo: 'conocimiento',
		question: '¿Qué aporta AWS IAM Identity Center frente a un usuario de IAM por persona y por cuenta?',
		options: [
			'Sustituye por completo a las políticas de IAM.',
			'Centraliza el acceso de la plantilla con inicio de sesión único y permission sets asignados por grupo y por cuenta.',
			'Solo sirve para gestionar la facturación de varias cuentas.',
			'Elimina la necesidad de usar MFA.',
		],
		correctAnswer: 1,
		explanation:
			'IAM Identity Center centraliza la autenticación de la plantilla, se integra con el directorio o proveedor de identidad corporativo y asigna permission sets por cuenta, evitando crear un usuario de IAM por persona y por cuenta. No sustituye a las políticas ni exime de usar MFA.',
	},
	{
		id: '2.3-q14',
		taskId: '2.3',
		objetivos: ['2.3#10'],
		tipo: 'escenario',
		question:
			'Una compañía quiere que sus empleados inicien sesión en AWS con las credenciales de su proveedor de identidad corporativo, sin contraseñas propias de IAM. ¿Qué tipo de gestión de identidades describe esta situación?',
		options: [
			'Autenticación local con un usuario de IAM por empleado.',
			'Identidad federada: la autenticación se delega en un proveedor de identidad externo y se reciben credenciales temporales.',
			'Autenticación con la contraseña del root user compartida.',
			'Cifrado en reposo de los datos de los empleados.',
		],
		correctAnswer: 1,
		explanation:
			'La identidad federada confía en un proveedor de identidad externo para autenticar a las personas y emite credenciales temporales para el acceso, de modo que no se crean contraseñas de IAM por empleado. Compartir el root user o crear un usuario local por persona son alternativas peores en seguridad y administración.',
	},
	{
		id: '2.3-q15',
		taskId: '2.3',
		objetivos: ['2.3#4', '2.3#10'],
		tipo: 'servicio',
		question:
			'¿Qué servicio se usa para conectar el directorio corporativo y asignar permisos por cuenta a los empleados con autenticación federada?',
		options: [
			'AWS Identity and Access Management (IAM) sin integración externa.',
			'AWS IAM Identity Center.',
			'AWS Secrets Manager.',
			'AWS CloudTrail.',
		],
		correctAnswer: 1,
		explanation:
			'AWS IAM Identity Center conecta el directorio o proveedor de identidad corporativo, aplica inicio de sesión único y asigna permission sets por cuenta a grupos de personas. Secrets Manager almacena secretos y CloudTrail registra actividad; ninguno gestiona la federación de la plantilla.',
	},
];
