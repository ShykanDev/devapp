import type { PreguntaProfesionalClfC02 } from '@/data/clfC02/profesional/types';

export const profesionalTask23: PreguntaProfesionalClfC02[] = [
	{
		id: 'prof-2.3-q1',
		taskId: '2.3',
		objetivos: ['2.3#1'],
		tipo: 'trampa',
		question: '¿Qué controla AWS Identity and Access Management (IAM)?',
		options: [
			'Quién puede autenticarse y qué acciones puede realizar sobre qué recursos dentro de una cuenta.',
			'El cifrado en reposo de los volúmenes de almacenamiento.',
			'El enrutamiento del tráfico de red entre regiones de AWS.',
			'La facturación consolidada de varias cuentas de AWS.',
		],
		correctAnswer: 0,
		explanation:
			'IAM gobierna la autenticación y la autorización dentro de una cuenta mediante identidades (usuarios, grupos, roles) y políticas que indican qué acciones se permiten o deniegan sobre qué recursos. El cifrado, el enrutamiento y la facturación consolidada corresponden a otras capacidades.',
		porQueOpcion: [
			'Correcta: IAM define identidades y permisos sobre recursos de la cuenta.',
			'Incorrecta: el cifrado en reposo lo gestionan servicios como AWS KMS, no IAM.',
			'Incorrecta: el enrutamiento pertenece a la capa de red, no a IAM.',
			'Incorrecta: la facturación consolidada la ofrece AWS Organizations.',
		],
	},
	{
		id: 'prof-2.3-q2',
		taskId: '2.3',
		objetivos: ['2.3#2'],
		tipo: 'escenario',
		question:
			'Un equipo planea usar la cuenta raíz (root user) para las tareas diarias porque siempre tiene permisos. ¿Por qué es una mala práctica?',
		options: [
			'Porque el root user tiene acceso total y sus permisos no se pueden restringir con políticas de IAM, de modo que comprometerlo compromete toda la cuenta.',
			'Porque el root user no puede activar MFA ni cambiar el plan de soporte de la cuenta.',
			'Porque el root user no queda registrado en los eventos de AWS CloudTrail.',
			'Porque el root user solo puede iniciar sesión con claves de acceso, nunca con contraseña.',
		],
		correctAnswer: 0,
		explanation:
			'El root user conserva acceso completo y no admite restricciones mediante políticas de IAM, por lo que usarlo a diario amplía innecesariamente la superficie de riesgo. Su uso debe reservarse a las tareas que solo él puede realizar, con MFA activado.',
		porQueOpcion: [
			'Correcta: su acceso irrestricto es la razón de protegerlo y no usarlo a diario.',
			'Incorrecta: el root user sí puede activar MFA y cambiar el plan de soporte.',
			'Incorrecta: las acciones del root user sí se registran en AWS CloudTrail.',
			'Incorrecta: el root user inicia sesión con contraseña y puede requerir MFA.',
		],
	},
	{
		id: 'prof-2.3-q3',
		taskId: '2.3',
		objetivos: ['2.3#3'],
		tipo: 'escenario',
		question:
			'Un analista solo necesita leer informes de facturación durante un trimestre. ¿Qué asignación respeta el principio de menor privilegio?',
		options: [
			'Un permiso temporal limitado a leer los informes de facturación, retirado al final del trimestre.',
			'La política de administrador, porque evita tener que solicitar permisos adicionales.',
			'Un usuario de IAM con claves de acceso permanentes y todos los permisos de solo lectura de la cuenta.',
			'Las credenciales del root user compartidas con todo el equipo de finanzas.',
		],
		correctAnswer: 0,
		explanation:
			'El principio de menor privilegio concede únicamente las acciones necesarias, sobre los recursos necesarios y durante el tiempo necesario. La política de administrador, el acceso permanente a toda la cuenta y las credenciales del root user exceden con creces la necesidad.',
		porQueOpcion: [
			'Correcta: permiso mínimo, acotado y temporal.',
			'Incorrecta: administrador otorga mucho más de lo necesario.',
			'Incorrecta: el acceso permanente y amplio contradice el principio.',
			'Incorrecta: compartir el root user elimina cualquier control.',
		],
	},
	{
		id: 'prof-2.3-q4',
		taskId: '2.3',
		objetivos: ['2.3#4'],
		tipo: 'servicio',
		question:
			'Una empresa quiere que sus empleados accedan a varias cuentas de AWS con un único inicio de sesión corporativo y permisos asignados por grupo. ¿Qué servicio lo permite?',
		options: [
			'AWS IAM Identity Center.',
			'AWS Secrets Manager.',
			'AWS Certificate Manager (ACM).',
			'AWS Trusted Advisor.',
		],
		correctAnswer: 0,
		explanation:
			'AWS IAM Identity Center centraliza el inicio de sesión único, se integra con el directorio o proveedor de identidad corporativo y asigna permission sets por cuenta y por grupo. AWS Secrets Manager almacena secretos, AWS Certificate Manager (ACM) gestiona certificados y AWS Trusted Advisor revisa mejores prácticas.',
		porQueOpcion: [
			'Correcta: IAM Identity Center ofrece acceso federado y permisos por grupo y cuenta.',
			'Incorrecta: AWS Secrets Manager almacena y rota secretos, no federación de personal.',
			'Incorrecta: AWS Certificate Manager (ACM) aprovisiona certificados TLS.',
			'Incorrecta: AWS Trusted Advisor hace recomendaciones, no gestiona identidades.',
		],
	},
	{
		id: 'prof-2.3-q5',
		taskId: '2.3',
		objetivos: ['2.3#5'],
		tipo: 'comparacion',
		question:
			'El equipo debe decidir cómo manejar credenciales y secretos de una aplicación. ¿Qué afirmación es correcta?',
		options: [
			'Las claves de acceso de IAM son credenciales de larga duración y no deben incluirse en el código; los secretos deben almacenarse en AWS Secrets Manager, que admite cifrado y rotación.',
			'Las claves de acceso deben incluirse en el código fuente para que la aplicación las lea al arrancar.',
			'AWS Secrets Manager sustituye a las políticas de IAM y concede permisos por sí mismo.',
			'Las contraseñas deben guardarse en las etiquetas de los recursos para poder consultarlas fácilmente.',
		],
		correctAnswer: 0,
		explanation:
			'Las claves de acceso son credenciales programáticas de larga duración y su exposición en el código es un riesgo grave; los secretos se guardan en un almacén gestionado como AWS Secrets Manager, con cifrado, control de acceso y rotación. El almacén no otorga permisos por sí mismo.',
		porQueOpcion: [
			'Correcta: separa el riesgo de las claves permanentes del uso de un almacén gestionado.',
			'Incorrecta: incrustar claves en el código las expone a quien lea el repositorio.',
			'Incorrecta: los permisos los definen las políticas de IAM, no el almacén.',
			'Incorrecta: las etiquetas son metadatos visibles, no un lugar seguro para secretos.',
		],
	},
	{
		id: 'prof-2.3-q6',
		taskId: '2.3',
		objetivos: ['2.3#6'],
		tipo: 'escenario',
		question:
			'La empresa exige un segundo factor para las personas y llamadas entre cuentas sin claves permanentes. ¿Qué combinación cumple ambos requisitos?',
		options: [
			'MFA para las personas y roles de IAM entre cuentas (o IAM Identity Center) que entregan credenciales temporales.',
			'Contraseñas sin segundo factor y claves de acceso de larga duración compartidas entre las cuentas.',
			'Solo el root user con MFA para todas las operaciones de la organización.',
			'Cifrado en reposo para las cuentas y certificados TLS para las personas.',
		],
		correctAnswer: 0,
		explanation:
			'El MFA refuerza el inicio de sesión de las personas y los roles entre cuentas o IAM Identity Center entregan credenciales temporales a los servicios, sin claves permanentes. Concentrar todo en el root user o repartir claves de larga duración contradice el principio de menor privilegio.',
		porQueOpcion: [
			'Correcta: combina MFA para personas y credenciales temporales para servicios.',
			'Incorrecta: ninguna de las dos medidas cumple los requisitos planteados.',
			'Incorrecta: usar solo el root user multiplica el riesgo y no aporta credenciales temporales.',
			'Incorrecta: el cifrado y los certificados no autentican personas ni servicios.',
		],
	},
	{
		id: 'prof-2.3-q7',
		taskId: '2.3',
		objetivos: ['2.3#7'],
		tipo: 'comparacion',
		question: '¿Qué afirmación describe correctamente grupos, usuarios y políticas en IAM?',
		options: [
			'El usuario es una identidad individual, el grupo reúne usuarios para asignarles permisos en común y la política define qué acciones se permiten o deniegan.',
			'El grupo es una identidad que puede iniciar sesión y el usuario es solo una etiqueta de facturación.',
			'La política siempre concede todos los permisos y no admite denegaciones explícitas.',
			'Los usuarios de IAM heredan automáticamente todos los permisos del root user.',
		],
		correctAnswer: 0,
		explanation:
			'El usuario representa a una persona o aplicación, el grupo agrupa usuarios para asignarles permisos de forma común y las políticas documentan los permisos permitidos o denegados. Los grupos no inician sesión, las políticas admiten denegaciones y ningún usuario hereda los permisos del root user.',
		porQueOpcion: [
			'Correcta: define correctamente usuario, grupo y política.',
			'Incorrecta: el grupo no es una identidad con acceso propio ni el usuario es una etiqueta.',
			'Incorrecta: las políticas admiten permisos y denegaciones explícitas.',
			'Incorrecta: los permisos del root user no se heredan.',
		],
	},
	{
		id: 'prof-2.3-q8',
		taskId: '2.3',
		objetivos: ['2.3#8'],
		tipo: 'servicio',
		question: '¿Qué tarea requiere obligatoriamente el root user de la cuenta?',
		options: [
			'Cambiar el plan de soporte de la cuenta o cerrarla.',
			'Crear un usuario de IAM con permisos de administrador.',
			'Adjuntar una política administrada a un rol de IAM.',
			'Iniciar una instancia de Amazon EC2.',
		],
		correctAnswer: 0,
		explanation:
			'Tareas como cambiar el plan de soporte, cerrar la cuenta, modificar el correo o el nombre de la cuenta o restaurar los permisos de un administrador de IAM quedan reservadas al root user. Crear usuarios, adjuntar políticas e iniciar instancias son tareas delegables.',
		porQueOpcion: [
			'Correcta: cambiar el plan de soporte y cerrar la cuenta son tareas exclusivas del root user.',
			'Incorrecta: un administrador de IAM puede crear usuarios.',
			'Incorrecta: adjuntar políticas es una tarea delegable.',
			'Incorrecta: iniciar instancias lo permite una política de IAM adecuada.',
		],
	},
	{
		id: 'prof-2.3-q9',
		taskId: '2.3',
		objetivos: ['2.3#9'],
		tipo: 'escenario',
		question:
			'Un cliente quiere proteger su root user sin dejar de administrar la cuenta. ¿Qué conjunto de medidas es correcto?',
		options: [
			'Activar MFA en el root user, no crear claves de acceso para él y usar una identidad administrativa de IAM para el trabajo diario.',
			'Crear claves de acceso para el root user y usarlas en los scripts automatizados.',
			'Compartir la contraseña del root user con todo el equipo de operaciones.',
			'Desactivar AWS CloudTrail para que no quede registro de las acciones del root user.',
		],
		correctAnswer: 0,
		explanation:
			'Proteger el root user combina activar MFA, evitar claves de acceso de larga duración y reservarlo para las tareas que solo él puede hacer, realizando el trabajo diario con una identidad administrativa de IAM. Compartir credenciales o desactivar el registro aumenta el riesgo.',
		porQueOpcion: [
			'Correcta: reúne las medidas recomendadas para proteger el root user.',
			'Incorrecta: las claves de acceso del root user amplían el riesgo de exposición.',
			'Incorrecta: compartir la contraseña elimina la trazabilidad individual.',
			'Incorrecta: desactivar el registro dificulta la auditoría y la respuesta.',
		],
	},
	{
		id: 'prof-2.3-q10',
		taskId: '2.3',
		objetivos: ['2.3#10'],
		tipo: 'escenario',
		question:
			'Los empleados deben iniciar sesión en AWS con las credenciales de su proveedor de identidad corporativo, sin usuarios de IAM propios. ¿Qué tipo de gestión de identidades es?',
		options: [
			'Identidad federada con un proveedor de identidad externo y credenciales temporales.',
			'Autenticación local con una contraseña de IAM por empleado.',
			'Autenticación con la contraseña compartida del root user.',
			'Cifrado en reposo de los directorios de cada usuario.',
		],
		correctAnswer: 0,
		explanation:
			'La identidad federada delega la autenticación en un proveedor de identidad externo y emite credenciales temporales para el acceso, de modo que no se crean contraseñas de IAM por empleado. La autenticación local y el uso compartido del root user son alternativas peores en seguridad.',
		porQueOpcion: [
			'Correcta: describe la federación con un proveedor de identidad externo.',
			'Incorrecta: la autenticación local crea credenciales de IAM por persona, lo que se quiere evitar.',
			'Incorrecta: compartir el root user no es federación ni ofrece credenciales temporales.',
			'Incorrecta: el cifrado en reposo no tiene relación con la autenticación de personas.',
		],
	},
];
