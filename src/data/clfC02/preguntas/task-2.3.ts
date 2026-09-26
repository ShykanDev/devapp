import type { PreguntaClfC02 } from '@/data/clfC02/types';

export const preguntasTask23: PreguntaClfC02[] = [
	{
		id: '2.3-q1',
		taskId: '2.3',
		objetivos: ['2.3#1'],
		tipo: 'conocimiento',
		question: '¿Qué controla el servicio de gestión de identidades y accesos dentro de una cuenta?',
		options: [
			'El cifrado en reposo de los datos que guardan los servicios y los volúmenes de almacenamiento de la cuenta.',
			'Quién puede hacer qué en una cuenta, mediante identidades y políticas de permisos.',
			'El reparto del tráfico entre varias Regiones de AWS.',
			'El reparto de costes entre las cuentas de una organización.',
		],
		correctAnswer: 1,
		explanation:
			'El servicio de identidades y accesos gobierna la autenticación y la autorización dentro de una cuenta: define identidades (usuarios, grupos, roles) y políticas que indican qué acciones se permiten o deniegan sobre qué recursos. El cifrado corresponde a otro servicio, el reparto de tráfico a la capa de red y el reparto de costes a la facturación consolidada. Si cambia el escenario a empleados con directorio corporativo, entraría un centro de identidad centralizado.',
		porQueOpcion: [
			'Incorrecta: el cifrado en reposo corresponde a los servicios de cifrado, no a la gestión de identidades.',
			'Correcta: el servicio de identidades y accesos define identidades y políticas sobre quién puede hacer qué.',
			'Incorrecta: el reparto de tráfico entre regiones pertenece a la capa de red.',
			'Incorrecta: el reparto de costes entre cuentas corresponde a la facturación consolidada.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html',
		],
	},
	{
		id: '2.3-q2',
		taskId: '2.3',
		objetivos: ['2.3#1'],
		tipo: 'comparacion',
		question:
			'Un equipo necesita que una aplicación que corre en AWS acceda a un bucket sin guardar credenciales permanentes. ¿Qué diferencia entre usuario de IAM y rol de IAM justifica la elección?',
		options: [
			'El usuario de IAM nunca tiene credenciales propias ni contraseña; el rol de IAM siempre tiene una clave de acceso permanente para las llamadas programáticas a la API y para todos los servicios de la cuenta.',
			'El rol de IAM no tiene credenciales permanentes: se asume y entrega credenciales temporales, mientras que el usuario de IAM puede tener claves de acceso de larga duración.',
			'Ambos son idénticos y solo cambian de nombre según la consola que se use para crearlos y administrarlos, o la región donde se despliegan.',
			'El usuario de IAM solo sirve para acceder a la consola y el rol de IAM solo para consultar la facturación consolidada.',
		],
		correctAnswer: 1,
		explanation:
			'Un rol se asume y proporciona credenciales temporales, por lo que no requiere almacenar claves de larga duración; es la opción adecuada para aplicaciones y accesos entre cuentas. Un usuario de IAM puede tener claves de acceso permanentes y solo se justifica cuando no hay alternativa. Si cambia el escenario a una persona sin directorio federado, un usuario con MFA y permisos mínimos sería aceptable.',
		porQueOpcion: [
			'Incorrecta: el usuario de IAM sí puede tener credenciales y el rol no usa claves permanentes.',
			'Correcta: el rol entrega credenciales temporales al asumirse y el usuario puede tener claves de larga duración.',
			'Incorrecta: no son idénticos; el rol evita credenciales permanentes.',
			'Incorrecta: el rol sirve para aplicaciones y accesos, no solo para consultar facturación.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html',
		],
	},
	{
		id: '2.3-q3',
		taskId: '2.3',
		objetivos: ['2.3#1', '2.3#7'],
		tipo: 'escenario',
		question:
			'Una empresa contrata a diez analistas para un proyecto de tres meses y el presupuesto no admite licencias adicionales de administración. No importa el proveedor de identidad que usen: deben consultar paneles y leer datos, sin capacidad de modificar recursos. ¿Qué enfoque respeta mejor el principio de menor privilegio?',
		options: [
			'Adjuntar la política de administrador a cada analista para evitar bloqueos durante el proyecto de tres meses.',
			'Crear un grupo con una política que permita solo leer paneles y datos, y añadir al grupo a los analistas durante el proyecto.',
			'Compartir la contraseña del root user entre los diez analistas para que puedan consultar los paneles y los datos.',
			'Crear una clave de acceso por analista con permisos de administrador y rotarla cada seis meses durante el proyecto y sin límite temporal dentro de la organización.',
		],
		correctAnswer: 1,
		explanation:
			'Agrupar identidades y adjuntar al grupo una política con el permiso mínimo evita repetir permisos y reduce el riesgo. La política de administrador y el uso de credenciales del root user contradicen el principio de menor privilegio. Si cambia el requisito a permitir un reinicio puntual, se añadiría esa acción concreta y se retiraría al terminar.',
		porQueOpcion: [
			'Incorrecta: la política de administrador concede permisos muy superiores a los necesarios.',
			'Correcta: agrupar identidades con una política de solo lectura aplica el menor privilegio y simplifica la administración.',
			'Incorrecta: compartir credenciales del root user elimina la trazabilidad y contradice el menor privilegio.',
			'Incorrecta: los permisos de administrador y las claves de larga duración exceden la necesidad.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html',
		],
	},
	{
		id: '2.3-q4',
		taskId: '2.3',
		objetivos: ['2.3#7'],
		tipo: 'conocimiento',
		question: '¿Qué son las managed policies en AWS Identity and Access Management (IAM)?',
		options: [
			'Políticas que solo puede usar el root user de la cuenta y que no se pueden adjuntar a ningún otro tipo de identidad.',
			'Políticas administradas por AWS o creadas por el cliente para reutilizarlas y adjuntarlas a varias identidades.',
			'Políticas que se guardan dentro de una única identidad y no se pueden reutilizar en otras identidades de la cuenta.',
			'Reglas de red que filtran el tráfico de entrada y de salida hacia las instancias y los servicios de la cuenta.',
		],
		correctAnswer: 1,
		explanation:
			'Las managed policies son documentos de permisos reutilizables que AWS administra o que crea el cliente, y pueden adjuntarse a varias identidades. Las políticas que viven dentro de una sola identidad son inline policies; las reglas de red pertenecen a la capa de red, no a IAM. Si cambia el requisito a una política exclusiva de una identidad, la respuesta sería una política inline.',
		porQueOpcion: [
			'Incorrecta: las managed policies no son exclusivas del root user ni se limitan a una identidad.',
			'Correcta: son políticas reutilizables administradas por AWS o por el cliente que se adjuntan a varias identidades.',
			'Incorrecta: las políticas que viven dentro de una identidad son inline policies.',
			'Incorrecta: las reglas de red no son managed policies.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/iam/',
		],
	},
	{
		id: '2.3-q5',
		taskId: '2.3',
		objetivos: ['2.3#3'],
		tipo: 'escenario',
		question:
			'Un desarrollador necesita reiniciar instancias solo durante los despliegues, pero su política actual le permite borrar cualquier recurso de la cuenta. ¿Qué cambio aplica el principio de menor privilegio?',
		options: [
			'Mantener el permiso amplio porque acelera los despliegues y evita solicitar aprobaciones en cada release del proyecto.',
			'Sustituir el permiso amplio por uno que solo permita reiniciar y consultar las instancias del proyecto, y retirarlo al terminar.',
			'Añadir MFA al desarrollador y conservar todos los permisos actuales, porque el segundo factor compensa el exceso de permisos aunque no reduzca ninguna acción concreta.',
			'Convertir al desarrollador en root user para que todas sus acciones queden auditadas y se reduzca el riesgo de la cuenta.',
		],
		correctAnswer: 1,
		explanation:
			'El principio de menor privilegio concede únicamente las acciones necesarias, sobre los recursos necesarios y durante el tiempo necesario. Añadir MFA mejora la autenticación, pero no reduce los permisos; usar el root user los amplía al máximo. Si cambia el requisito a un permiso permanente de solo lectura, seguiría siendo excesivo frente a la necesidad temporal.',
		porQueOpcion: [
			'Incorrecta: conservar el permiso amplio excede la necesidad y rompe el menor privilegio.',
			'Correcta: limitar el permiso a las acciones necesarias, sobre los recursos del proyecto y durante el tiempo necesario.',
			'Incorrecta: el MFA mejora la autenticación, pero no reduce los permisos excesivos.',
			'Incorrecta: el root user amplía los permisos al máximo y agrava el riesgo.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html',
		],
	},
	{
		id: '2.3-q6',
		taskId: '2.3',
		objetivos: ['2.3#3'],
		tipo: 'tradeoff',
		question:
			'El equipo de operaciones pide permisos de administrador «para no perder tiempo pidiendo aprobaciones». ¿Cómo se equilibra la agilidad con el principio de menor privilegio?',
		options: [
			'Conceder administrador permanente a todo el equipo para maximizar la velocidad y evitar cuellos de botella en las aprobaciones.',
			'Conceder acceso elevado temporal, ligado a una tarea y con aprobación y registro, en lugar de permisos permanentes.',
			'Eliminar todos los permisos del equipo y pedir al root user que ejecute personalmente cada tarea de operación.',
			'Repartir la contraseña del root user entre los operadores para que ninguno dependa de solicitar permisos.',
		],
		correctAnswer: 1,
		explanation:
			'El acceso elevado temporal y justificado mantiene la agilidad sin dejar permisos permanentes de administrador. El registro y la aprobación conservan la trazabilidad; repartir credenciales del root user elimina cualquier control. Si el requisito pidiera revisión periódica, se auditarían los permisos concedidos y se retirarían los sobrantes.',
		porQueOpcion: [
			'Incorrecta: el administrador permanente anula el principio de menor privilegio.',
			'Correcta: el acceso elevado temporal, aprobado y registrado equilibra agilidad y control.',
			'Incorrecta: eliminar todos los permisos y depender del root user hace inviable la operación.',
			'Incorrecta: repartir las credenciales del root user elimina cualquier control y trazabilidad.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html',
		],
	},
	{
		id: '2.3-q7',
		taskId: '2.3',
		objetivos: ['2.3#2'],
		tipo: 'conocimiento',
		question: '¿Por qué es importante proteger la cuenta raíz (root user) de una cuenta de AWS?',
		options: [
			'Porque es la única identidad que puede crear y administrar las políticas de IAM y adjuntarlas a usuarios, grupos y roles de la cuenta.',
			'Porque tiene acceso completo a todos los recursos y servicios de la cuenta y no se le pueden denegar permisos con políticas de IAM.',
			'Porque es la única identidad que puede iniciar sesión en la consola de AWS y usar los servicios de la cuenta.',
			'Porque solo ella puede crear usuarios de IAM, grupos y roles, además de adjuntar políticas a esas identidades.',
		],
		correctAnswer: 1,
		explanation:
			'El root user tiene acceso total y sus permisos no se pueden restringir con políticas de IAM, por lo que comprometerlo compromete la cuenta entera. Los usuarios administradores de IAM también pueden gestionar políticas y usuarios, así que la singularidad del root user es su acceso irrestricto. Si cambia el escenario a una tarea concreta, la respuesta sería una tarea reservada al root user.',
		porQueOpcion: [
			'Incorrecta: los usuarios administradores de IAM también pueden gestionar políticas.',
			'Correcta: el root user tiene acceso completo y no admite restricciones con políticas de IAM.',
			'Incorrecta: cualquier identidad con permiso puede iniciar sesión en la consola.',
			'Incorrecta: crear usuarios, grupos y roles es delegable a administradores de IAM.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html',
		],
	},
	{
		id: '2.3-q8',
		taskId: '2.3',
		objetivos: ['2.3#8'],
		tipo: 'conocimiento',
		question: '¿Qué tarea solo puede realizar el root user de la cuenta?',
		options: [
			'Crear un usuario de IAM con permisos de administrador para el equipo de la cuenta.',
			'Cambiar el plan de soporte de la cuenta y cerrar la cuenta de AWS.',
			'Iniciar una instancia de cómputo en una región concreta.',
			'Adjuntar una política administrada a un rol de IAM.',
		],
		correctAnswer: 1,
		explanation:
			'Tareas como cambiar el plan de soporte, cerrar la cuenta, cambiar el correo o el nombre de la cuenta o restaurar los permisos de un administrador de IAM quedan reservadas al root user. Crear usuarios, adjuntar políticas e iniciar instancias son tareas delegables. Si cambia la tarea a restaurar los permisos de un administrador de IAM, también quedaría reservada al root user.',
		porQueOpcion: [
			'Incorrecta: crear usuarios de IAM es una tarea delegable.',
			'Correcta: cambiar el plan de soporte y cerrar la cuenta están reservados al root user.',
			'Incorrecta: iniciar una instancia de cómputo es delegable con los permisos adecuados.',
			'Incorrecta: adjuntar una política administrada es una tarea delegable.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html',
		],
	},
	{
		id: '2.3-q9',
		taskId: '2.3',
		objetivos: ['2.3#9'],
		tipo: 'seguridad',
		question: '¿Qué conjunto de medidas protege mejor la cuenta raíz (root user)?',
		options: [
			'Crear claves de acceso para el root user y usarlas en los scripts de automatización de la cuenta.',
			'Activar MFA en el root user, no crear claves de acceso para él y usar una identidad administrativa distinta para el trabajo diario.',
			'Compartir la contraseña del root user con todo el equipo de operaciones para repartir la carga de administración y evitar bloqueos.',
			'Desactivar el registro de actividad para que no se filtren datos del root user ni de las operaciones de la cuenta.',
		],
		correctAnswer: 1,
		explanation:
			'Proteger el root user combina activar MFA, evitar claves de acceso de larga duración y reservarlo para las tareas que solo él puede hacer; el trabajo diario se realiza con una identidad administrativa. Compartir credenciales o desactivar el registro aumenta el riesgo. Si se necesitara administrar la cuenta sin usar el root user, se crearía esa identidad administrativa con permisos mínimos.',
		porQueOpcion: [
			'Incorrecta: crear claves de acceso para el root user amplía el riesgo en lugar de protegerlo.',
			'Correcta: activar MFA, evitar claves de acceso y usar una identidad administrativa aparte protege el root user.',
			'Incorrecta: compartir la contraseña del root user elimina la trazabilidad y multiplica el riesgo.',
			'Incorrecta: desactivar el registro oculta la actividad y dificulta la investigación.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html',
		],
	},
	{
		id: '2.3-q10',
		taskId: '2.3',
		objetivos: ['2.3#5', '2.3#6'],
		tipo: 'comparacion',
		question:
			'Un equipo confunde una clave de acceso con un segundo factor de autenticación. ¿Qué distingue correctamente a cada uno?',
		options: [
			'La clave de acceso es un segundo factor que se pide al iniciar sesión y el MFA es una credencial de larga duración para las llamadas a la API.',
			'La clave de acceso es una credencial programática de larga duración; el MFA es un factor adicional que se exige durante el inicio de sesión.',
			'Ambos son sinónimos y solo cambian de nombre según el servicio de AWS que los use para autenticar a las identidades.',
			'El MFA sustituye a la contraseña de la persona y la clave de acceso sustituye al rol que asume una aplicación.',
		],
		correctAnswer: 1,
		explanation:
			'La clave de acceso es un par de credenciales permanente para llamadas programáticas; el MFA añade un factor extra en la autenticación y no sustituye a la contraseña ni a las políticas. Son mecanismos distintos: uno autentica programas y el otro refuerza el inicio de sesión. Si cambia el escenario a una aplicación que llama a la API, la respuesta sería la clave de acceso o un rol.',
		porQueOpcion: [
			'Incorrecta: invierte los conceptos, pues el MFA es el segundo factor y la clave una credencial programática.',
			'Correcta: la clave de acceso es una credencial de larga duración para la API y el MFA un factor extra de inicio de sesión.',
			'Incorrecta: son mecanismos distintos, no sinónimos.',
			'Incorrecta: el MFA no sustituye a la contraseña ni la clave de acceso a un rol.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html',
		],
	},
	{
		id: '2.3-q11',
		taskId: '2.3',
		objetivos: ['2.3#5'],
		tipo: 'conocimiento',
		question:
			'¿Dónde conviene almacenar los secretos de una aplicación en lugar de dejarlos en el código o en archivos de configuración?',
		options: [
			'En una política de IAM con permisos de administrador y con una condición que restrinja el acceso al recurso.',
			'En un almacén de secretos gestionado, como AWS Secrets Manager o AWS Systems Manager.',
			'En el user data de una instancia tal como está, para que la aplicación lo lea al arrancar sin configuración adicional.',
			'En el nombre del recurso, para que sea fácil de leer y de localizar por cualquier identidad de la cuenta.',
		],
		correctAnswer: 1,
		explanation:
			'Los secretos deben vivir en un almacén gestionado que permita cifrado, control de acceso y rotación, como AWS Secrets Manager o AWS Systems Manager. Dejarlos en el código, en archivos o en texto plano los expone a cualquiera que lea el repositorio o el recurso. Si cambia el requisito a rotación automática, el almacén gestionado sigue siendo la respuesta.',
		porQueOpcion: [
			'Incorrecta: una política de IAM no es un almacén de secretos.',
			'Correcta: un almacén gestionado permite cifrado, control de acceso y rotación de los secretos.',
			'Incorrecta: el user data queda visible y no es un almacén seguro de secretos.',
			'Incorrecta: el nombre del recurso es legible y no protege el secreto.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/secretsmanager/',
			'https://docs.aws.amazon.com/systems-manager/',
		],
	},
	{
		id: '2.3-q12',
		taskId: '2.3',
		objetivos: ['2.3#6'],
		tipo: 'escenario',
		question:
			'Una empresa quiere que su personal acceda desde el móvil con un segundo factor y que los servicios entre cuentas se llamen sin claves permanentes. ¿Qué combinación de métodos de autenticación cumple ambos objetivos?',
		options: [
			'Contraseñas únicas por persona sin segundo factor y claves de acceso compartidas entre las cuentas de la organización.',
			'MFA para las personas e IAM Identity Center o roles entre cuentas que entregan credenciales temporales para los servicios.',
			'Solo el root user para todas las operaciones, con MFA activado y sus claves de acceso guardadas en un almacén de secretos.',
			'Un usuario de IAM con clave de acceso de larga duración por cada cuenta y servicio, repartido entre las aplicaciones.',
		],
		correctAnswer: 1,
		explanation:
			'MFA refuerza el inicio de sesión de las personas y los roles entre cuentas o IAM Identity Center entregan credenciales temporales a los servicios, sin claves permanentes. Concentrar todo en el root user o repartir claves de acceso de larga duración contradice el principio de menor privilegio. Si cambia el requisito a autenticación de clientes finales, la respuesta sería Amazon Cognito.',
		porQueOpcion: [
			'Incorrecta: las claves compartidas y la falta de segundo factor no cumplen los objetivos.',
			'Correcta: el MFA refuerza el acceso humano y la federación o los roles entregan credenciales temporales a los servicios.',
			'Incorrecta: concentrar todo en el root user no es seguro ni sostenible.',
			'Incorrecta: repartir claves de larga duración contradice el menor privilegio.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/cognito/',
			'https://docs.aws.amazon.com/singlesignon/',
		],
	},
	{
		id: '2.3-q13',
		taskId: '2.3',
		objetivos: ['2.3#4'],
		tipo: 'conocimiento',
		question:
			'¿Qué aporta el servicio de acceso federado centralizado de AWS frente a crear un usuario de IAM por persona y por cuenta?',
		options: [
			'Sustituye por completo a las políticas de IAM, de modo que ya no hace falta definir permisos por recurso en la cuenta.',
			'Centraliza el acceso de la plantilla con inicio de sesión único y permission sets asignados por grupo y por cuenta.',
			'Solo sirve para gestionar la facturación de varias cuentas y consolidar los costes de la organización en una única factura.',
			'Elimina la necesidad de usar MFA en las cuentas y sustituye a los roles de IAM que asumen las aplicaciones.',
		],
		correctAnswer: 1,
		explanation:
			'IAM Identity Center centraliza la autenticación de la plantilla, se integra con el directorio o proveedor de identidad corporativo y asigna permission sets por cuenta, evitando crear un usuario por persona y por cuenta. No sustituye a las políticas ni exime de usar MFA. Si cambia el escenario a clientes finales de una aplicación, la respuesta sería Amazon Cognito.',
		porQueOpcion: [
			'Incorrecta: el acceso federado no sustituye la definición de permisos por recurso.',
			'Correcta: IAM Identity Center centraliza el acceso con inicio de sesión único y permission sets por grupo y cuenta.',
			'Incorrecta: la facturación consolidada corresponde a AWS Organizations, no al acceso federado.',
			'Incorrecta: no elimina el MFA ni sustituye a los roles que asumen las aplicaciones.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/organizations/',
			'https://docs.aws.amazon.com/cognito/',
			'https://docs.aws.amazon.com/singlesignon/',
		],
	},
	{
		id: '2.3-q14',
		taskId: '2.3',
		objetivos: ['2.3#10'],
		tipo: 'escenario',
		question:
			'Una compañía quiere que sus empleados inicien sesión en AWS con las credenciales de su proveedor de identidad corporativo, sin contraseñas propias de IAM. ¿Qué tipo de gestión de identidades describe esta situación?',
		options: [
			'Autenticación local con un usuario de IAM por empleado, con contraseña propia, MFA obligatorio y claves de acceso de larga duración.',
			'Identidad federada: la autenticación se delega en un proveedor de identidad externo y se reciben credenciales temporales.',
			'Autenticación con la contraseña del root user compartida entre los empleados que necesitan administrar la cuenta.',
			'Cifrado en reposo de los datos de los empleados, que sustituye a la autenticación y protege sus credenciales.',
		],
		correctAnswer: 1,
		explanation:
			'La identidad federada confía en un proveedor de identidad externo para autenticar a las personas y emite credenciales temporales para el acceso, de modo que no se crean contraseñas de IAM por empleado. Compartir el root user o crear un usuario local por persona son alternativas peores en seguridad y administración. Si cambia el escenario a autenticación de clientes finales, la respuesta sería un servicio de identidades para aplicaciones.',
		porQueOpcion: [
			'Incorrecta: crear un usuario de IAM por empleado no es federación y mantiene contraseñas locales.',
			'Correcta: la identidad federada delega la autenticación en el proveedor corporativo y entrega credenciales temporales.',
			'Incorrecta: compartir el root user no es federación y agrava el riesgo.',
			'Incorrecta: el cifrado protege datos, pero no autentica identidades.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html',
		],
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
			'AWS Resource Access Manager (AWS RAM).',
		],
		correctAnswer: 1,
		explanation:
			'AWS IAM Identity Center conecta el directorio o proveedor de identidad corporativo, aplica inicio de sesión único y asigna permission sets por cuenta a grupos de personas. Secrets Manager almacena secretos y AWS RAM comparte recursos entre cuentas; ninguno gestiona la federación de la plantilla. Si cambia el requisito a almacenar secretos de aplicación, la respuesta sería AWS Secrets Manager.',
		porQueOpcion: [
			'Incorrecta: IAM sin integración no conecta el directorio corporativo.',
			'Correcta: IAM Identity Center conecta el directorio y asigna permission sets por cuenta a los empleados.',
			'Incorrecta: Secrets Manager almacena secretos, no gestiona federación.',
			'Incorrecta: AWS RAM comparte recursos entre cuentas, pero no conecta directorios ni gestiona identidades.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/singlesignon/',
			'https://docs.aws.amazon.com/secretsmanager/',
			'https://docs.aws.amazon.com/ram/latest/userguide/what-is.html',
			'https://docs.aws.amazon.com/iam/',
		],
	},
	{
		id: '2.3-q16',
		taskId: '2.3',
		objetivos: ['2.3#2'],
		tipo: 'escenario',
		question:
			'Una auditoría exige que el root user de la cuenta deje de usarse en el día a día. ¿Qué explicación justifica mejor esta medida?',
		options: [
			'Porque el root user tiene acceso total y no admite restricciones por políticas, así que comprometerlo compromete toda la cuenta.',
			'Porque el root user no puede activar MFA ni modificar el plan de soporte contratado para la cuenta.',
			'Porque las acciones del root user no quedan registradas en el historial de actividad de la cuenta.',
			'Porque el root user solo puede iniciar sesión con claves de acceso y nunca con la contraseña de la cuenta ni con un segundo factor de autenticación.',
		],
		correctAnswer: 0,
		explanation:
			'El root user conserva acceso completo y no admite restricciones mediante políticas de IAM, por lo que usarlo a diario amplía la superficie de riesgo. Sí puede activar MFA, cambiar el plan de soporte y sus acciones quedan registradas. Si cambia el escenario a las tareas permitidas, seguiría reservado para cambiar el plan de soporte o cerrar la cuenta.',
		porQueOpcion: [
			'Correcta: el root user tiene acceso total sin restricciones por políticas, por lo que usarlo a diario amplía el riesgo.',
			'Incorrecta: el root user sí puede activar MFA y cambiar el plan de soporte.',
			'Incorrecta: las acciones del root user sí quedan registradas en el historial.',
			'Incorrecta: el root user puede iniciar sesión con contraseña y MFA, no solo con claves.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html',
		],
	},
	{
		id: '2.3-q17',
		taskId: '2.3',
		objetivos: ['2.3#4'],
		tipo: 'escenario',
		question:
			'Una empresa con muchas cuentas quiere que su plantilla acceda con un único inicio de sesión corporativo y permisos por grupo. ¿Qué enfoque responde mejor a esa necesidad?',
		options: [
			'Crear un usuario de IAM por persona y por cuenta, y adjuntar las mismas políticas a cada uno manualmente en todas las cuentas y con las mismas credenciales duraderas.',
			'Conectar el directorio corporativo a un servicio de acceso centralizado que asigna permission sets por cuenta y por grupo.',
			'Compartir una única clave de acceso entre los empleados y rotarla cada vez que alguien deja la compañía.',
			'Usar el root user de cada cuenta para dar de alta a los empleados y retirarles el acceso al terminar.',
		],
		correctAnswer: 1,
		explanation:
			'Un servicio de acceso centralizado se integra con el directorio corporativo, aplica inicio de sesión único y asigna permission sets por cuenta y grupo, evitando usuarios de IAM por persona y por cuenta. Repartir claves o usar el root user multiplica el riesgo. Si cambia el requisito a autenticar clientes finales, la respuesta sería un servicio de identidades para aplicaciones.',
		porQueOpcion: [
			'Incorrecta: crear usuarios de IAM por persona y por cuenta multiplica la administración y el riesgo.',
			'Correcta: un acceso centralizado conectado al directorio asigna permission sets por cuenta y grupo.',
			'Incorrecta: compartir una clave impide la trazabilidad individual.',
			'Incorrecta: usar el root user de cada cuenta no es un enfoque seguro ni delegable.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html',
		],
	},
	{
		id: '2.3-q18',
		taskId: '2.3',
		objetivos: ['2.3#5'],
		tipo: 'escenario',
		question:
			'Una aplicación necesita una contraseña de base de datos y no debe contenerla en el código ni en archivos de configuración. ¿Dónde debe guardarla y por qué?',
		options: [
			'En un almacén de secretos gestionado que permite cifrado, control de acceso y rotación de la credencial.',
			'En una política de IAM con permisos de administrador, porque así solo la lee quien administra la cuenta.',
			'En el user data de la instancia, porque se ejecuta al arrancar y la aplicación siempre la encuentra.',
			'En una etiqueta del recurso, porque es un metadato legible por cualquiera que consulte la consola.',
		],
		correctAnswer: 0,
		explanation:
			'Los secretos se guardan en un almacén gestionado con cifrado, permisos mínimos y rotación; el código solo referencia el secreto. Las políticas de IAM, el user data y las etiquetas no son almacenes seguros de credenciales. Si cambia el requisito a reforzar el acceso humano, la respuesta sería una contraseña robusta más MFA.',
		porQueOpcion: [
			'Correcta: el secreto debe guardarse en un almacén gestionado que cifre, controle el acceso y permita rotarlo.',
			'Incorrecta: una política de IAM define permisos, no almacena credenciales.',
			'Incorrecta: el user data es legible y no protege la contraseña.',
			'Incorrecta: una etiqueta es metadato visible, no un almacén de secretos.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html',
		],
	},
	{
		id: '2.3-q19',
		taskId: '2.3',
		objetivos: ['2.3#8'],
		tipo: 'escenario',
		question:
			'Una empresa descubre que necesita modificar el correo de contacto de su cuenta y que su equipo de IAM no puede hacerlo. ¿Qué implica esta situación?',
		options: [
			'Que esa tarea queda reservada al root user, igual que cambiar el plan de soporte o cerrar la cuenta.',
			'Que la cuenta está bloqueada y debe crearse una nueva con un correo de contacto distinto.',
			'Que cualquier usuario con la política de administrador de IAM puede hacerlo sin restricción siempre que tenga esa política adjunta.',
			'Que la tarea requiere abrir una incidencia de soporte y esperar la intervención de AWS.',
		],
		correctAnswer: 0,
		explanation:
			'Cambiar el correo o el nombre de la cuenta, cambiar el plan de soporte y cerrar la cuenta son tareas reservadas al root user, que no se delegan con políticas de IAM. No implican crear otra cuenta ni dependen de un administrador de IAM. Si cambia la tarea a restaurar los permisos de un administrador, seguiría siendo del root user.',
		porQueOpcion: [
			'Correcta: cambiar el correo de contacto es una tarea reservada al root user.',
			'Incorrecta: la cuenta no está bloqueada; la tarea simplemente no es delegable.',
			'Incorrecta: un administrador de IAM no puede realizar las tareas reservadas al root user.',
			'Incorrecta: la tarea se hace desde el root user sin necesidad de una incidencia.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html',
		],
	},
	{
		id: '2.3-q20',
		taskId: '2.3',
		objetivos: ['2.3#9'],
		tipo: 'escenario',
		question:
			'Un equipo quiere administrar la cuenta sin usar el root user y pide un conjunto de medidas concretas. ¿Cuál es la recomendación correcta?',
		options: [
			'Activar MFA en el root user, no crearle claves de acceso y usar una identidad administrativa aparte para el trabajo diario.',
			'Crear claves de acceso para el root user y guardarlas en un almacén de secretos para automatizar las tareas y usarlas en los scripts de automatización de la organización.',
			'Compartir la contraseña del root user entre los administradores y exigir MFA en cada inicio de sesión.',
			'Convertir a un usuario de IAM en copia del root user y usar sus credenciales con permisos completos.',
		],
		correctAnswer: 0,
		explanation:
			'La protección del root user combina MFA, ausencia de claves de acceso y una identidad administrativa separada para el día a día. Compartir su contraseña o crearle claves amplía el riesgo, y ningún usuario de IAM replica su acceso irrestricto. Si cambia el requisito a reducir el número de identidades, se agruparían por función con permisos mínimos.',
		porQueOpcion: [
			'Correcta: proteger el root user combina MFA, ausencia de claves de acceso y una identidad administrativa separada.',
			'Incorrecta: crear claves para el root user amplía el riesgo.',
			'Incorrecta: compartir la contraseña del root user elimina el control individual.',
			'Incorrecta: ningún usuario de IAM replica el acceso irrestricto del root user.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html',
		],
	},
	{
		id: '2.3-q21',
		taskId: '2.3',
		objetivos: ['2.3#4', '2.3#10'],
		tipo: 'comparacion',
		question:
			'¿Qué distingue el acceso federado con un centro de identidad centralizado de crear usuarios de IAM por persona y por cuenta?',
		options: [
			'El acceso centralizado valida en un proveedor de identidad externo y entrega credenciales temporales; los usuarios locales tienen credenciales duraderas.',
			'El acceso centralizado crea un usuario permanente en cada cuenta de la organización; los usuarios locales se validan contra un directorio externo sin necesidad de asignar permisos por cuenta.',
			'Ambos enfoques son idénticos en administración y seguridad, y solo cambian por el número de cuentas de la organización.',
			'El acceso centralizado elimina la necesidad de permisos, porque la autenticación ya la resuelve el proveedor externo.',
		],
		correctAnswer: 0,
		explanation:
			'La federación delega la autenticación en un proveedor de identidad externo y emite credenciales temporales para cada cuenta, mientras que los usuarios locales guardan credenciales duraderas que hay que administrar. La federación no elimina la necesidad de definir permisos. Si cambia el escenario a autenticación de clientes finales, la respuesta sería un servicio de identidades para aplicaciones.',
		porQueOpcion: [
			'Correcta: la federación valida en un proveedor externo y entrega credenciales temporales, frente a las duraderas de los usuarios locales.',
			'Incorrecta: invierte los enfoques, pues el centralizado no crea usuarios permanentes por cuenta.',
			'Incorrecta: ambos enfoques difieren en administración y seguridad, no solo en el número de cuentas.',
			'Incorrecta: la federación no elimina la necesidad de definir permisos.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html',
		],
	},
	{
		id: '2.3-q22',
		taskId: '2.3',
		objetivos: ['2.3#2', '2.3#3', '2.3#8', '2.3#9'],
		tipo: 'comparacion',
		question:
			'Una empresa quiere hacer el trabajo diario de administración con una identidad de IAM y dejar la cuenta raíz solo para lo imprescindible. ¿Qué diferencia entre ambas identidades sostiene esa decisión?',
		options: [
			'La cuenta raíz conserva un acceso completo que no se limita con políticas, mientras que la identidad administrativa aplica el menor privilegio y solo asume tareas delegables.',
			'La cuenta raíz puede restringirse con políticas como cualquier identidad, mientras que la identidad administrativa nunca puede delegar sus permisos ni asumir tareas cotidianas dentro de la organización.',
			'La única diferencia es el formato de las credenciales: la cuenta raíz usa contraseña y la identidad administrativa usa siempre claves de acceso de larga duración.',
			'La identidad administrativa hereda el acceso total de la cuenta raíz y por eso conviene usarla en el día a día sin MFA ni permisos concretos.',
		],
		correctAnswer: 0,
		explanation:
			'La cuenta raíz tiene acceso total que no se puede denegar con políticas de IAM y queda reservada a tareas que solo ella puede realizar, como cambiar el plan de soporte o cerrar la cuenta; por eso se protege con MFA, sin claves de acceso y sin uso diario. La identidad administrativa de IAM se rige por el principio de menor privilegio y ejecuta el trabajo cotidiano con permisos acotados. Si cambia el escenario a una tarea reservada a la cuenta raíz, la identidad administrativa no podría asumirla aunque tuviera la política de administrador.',
		porQueOpcion: [
			'Correcta: el root user no se limita con políticas y la identidad administrativa aplica el menor privilegio.',
			'Incorrecta: el root user no puede restringirse con políticas y la identidad administrativa sí asume tareas cotidianas.',
			'Incorrecta: la diferencia no es el formato de credenciales, sino el alcance de los permisos.',
			'Incorrecta: la identidad administrativa no hereda el acceso total y debe usar MFA y permisos acotados.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html',
		],
	},
	{
		id: '2.3-q23',
		taskId: '2.3',
		objetivos: ['2.3#7'],
		tipo: 'comparacion',
		question:
			'Un equipo quiere reutilizar el mismo conjunto de permisos en varios grupos y usuarios y actualizarlo una sola vez. ¿Qué diferencia entre una managed policy y una política inline sostiene esa decisión?',
		options: [
			'Una managed policy es reutilizable y se adjunta a varias identidades, mientras que una política inline queda ligada a una sola identidad y no se comparte.',
			'Una política inline se administra de forma central y se adjunta a muchas identidades, mientras que una managed policy solo existe dentro de la identidad que la crea y no se puede reutilizar.',
			'Solo se diferencian por quién las redacta: las managed policies siempre las escribe el cliente y las políticas inline siempre las administra AWS.',
			'La managed policy concede permisos permanentes de administrador y la política inline solo puede denegar acciones sobre un recurso concreto.',
		],
		correctAnswer: 0,
		explanation:
			'Las managed policies son documentos de permisos reutilizables, administrados por AWS o creados por el cliente, que se adjuntan a varias identidades y se actualizan en un solo lugar. Las políticas inline viven dentro de una única identidad, no se reutilizan y quedan para permisos muy concretos de esa identidad. Si cambia el requisito a un permiso exclusivo que no deba compartirse, encajaría una política inline.',
		porQueOpcion: [
			'Correcta: la managed policy es reutilizable y la inline queda ligada a una sola identidad.',
			'Incorrecta: invierte la definición, porque la inline es la que no se reutiliza.',
			'Incorrecta: no se diferencian solo por quién las redacta; AWS y el cliente pueden crear managed policies.',
			'Incorrecta: ninguna de las dos se define por conceder administrador o solo denegar.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html',
		],
	},
];
