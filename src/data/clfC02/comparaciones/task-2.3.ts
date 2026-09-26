import type { ParConfusionClfC02 } from '@/data/clfC02/types';

export const paresTask23: ParConfusionClfC02[] = [
	{
		id: 'iam-user-vs-iam-role',
		etiqueta: 'Usuario de IAM vs rol de IAM',
		a: {
			titulo: 'Usuario de IAM',
			resumen:
				'Identidad con credenciales propias y duraderas. Puede tener contraseña para la consola y claves de acceso para llamadas programáticas. Representa a una persona o a una aplicación concreta y sus permisos provienen de las políticas adjuntas o de los grupos a los que pertenece.',
		},
		b: {
			titulo: 'Rol de IAM',
			resumen:
				'Identidad sin credenciales permanentes que se asume temporalmente. La asumen personas, aplicaciones o servicios y entrega credenciales temporales con los permisos indicados. Se usa para delegar acceso entre cuentas y para dar permisos a cargas de trabajo.',
		},
		diferenciaClave:
			'El usuario tiene credenciales de larga duración que hay que proteger y rotar; el rol se asume y entrega credenciales temporales, por lo que no guarda secretos permanentes. Para aplicaciones y accesos entre cuentas, el rol es la opción recomendada.',
		cuandoA: [
			'Cuando una persona necesita credenciales propias y no existe un proveedor de identidad federado que pueda usarse.',
			'Cuando se requiere acceso programático de larga duración y no es viable asumir un rol, aceptando rotación y almacenamiento seguro de las claves.',
		],
		cuandoB: [
			'Cuando una aplicación o un servicio de AWS necesita permisos sin guardar claves de acceso permanentes.',
			'Cuando se delega acceso entre cuentas de AWS o se entregan permisos temporales a personas o cargas de trabajo.',
		],
		escenarioA:
			'Una persona necesita acceso a la consola y no existe un proveedor de identidad federado; se le crea un usuario de IAM con contraseña, MFA obligatorio y permisos mínimos a través de un grupo.',
		escenarioB:
			'Una aplicación que corre en AWS debe leer un bucket; se le asigna un rol, de modo que obtiene credenciales temporales sin guardar claves de acceso permanentes.',
		preguntaIds: ['2.3-q2'],
		objetivos: ['2.3#1'],
	},
	{
		id: 'claves-de-acceso-vs-mfa',
		etiqueta: 'Claves de acceso vs autenticación multifactor (MFA)',
		a: {
			titulo: 'Claves de acceso',
			resumen:
				'Par de credenciales (access key ID y secret access key) asociado a un usuario de IAM para llamadas programáticas. Es de larga duración, no se usa para iniciar sesión en la consola y exige almacenamiento seguro y rotación.',
		},
		b: {
			titulo: 'Autenticación multifactor (MFA)',
			resumen:
				'Factor adicional que se exige al iniciar sesión, además de la contraseña. Puede apoyarse en una aplicación de códigos, un dispositivo de hardware o una llave de seguridad, y protege incluso si la contraseña se filtra.',
		},
		diferenciaClave:
			'Las claves de acceso autentican programas y son un secreto permanente que hay que custodiar; el MFA refuerza la autenticación humana con un factor extra. No son alternativas entre sí: una aplicación usa claves o roles, mientras que una persona inicia sesión con contraseña más MFA.',
		cuandoA: [
			'Cuando una herramienta o un script fuera de la consola necesita llamar a la API de AWS y no puede asumir un rol.',
			'Cuando se requiere acceso programático y las claves se guardan en un almacén de secretos con rotación periódica.',
		],
		cuandoB: [
			'Cuando se protege el inicio de sesión de personas, en especial del root user y de las identidades administrativas.',
			'Cuando se quiere que una contraseña filtrada no baste por sí sola para entrar en la cuenta.',
		],
		escenarioA:
			'Un script de inventario se ejecuta fuera de AWS y se autentica con una clave de acceso guardada en AWS Secrets Manager y rotada periódicamente.',
		escenarioB:
			'Una administradora inicia sesión en la consola con su contraseña y un código temporal de su aplicación de autenticación, de modo que un robo de contraseña no le da acceso.',
		preguntaIds: ['2.3-q10'],
		objetivos: ['2.3#5', '2.3#6'],
	},
	{
		id: 'iam-identity-center-vs-usuario-iam',
		etiqueta: 'Acceso federado centralizado vs usuario de IAM por persona y por cuenta',
		a: {
			titulo: 'Acceso federado centralizado',
			resumen:
				'Conecta el directorio o proveedor de identidad corporativo y entrega inicio de sesión único y permission sets por cuenta y por grupo. La persona se valida fuera de AWS y recibe credenciales temporales.',
		},
		b: {
			titulo: 'Usuario de IAM por persona y por cuenta',
			resumen:
				'Crea una identidad local en cada cuenta, con contraseña y, si se necesita, claves de acceso de larga duración. Hay que administrar y rotar esas credenciales cuenta por cuenta.',
		},
		diferenciaClave:
			'La federación delega la autenticación en un proveedor externo y emite credenciales temporales; el usuario local guarda credenciales duraderas dentro de cada cuenta. La federación reduce la administración y el riesgo, pero no elimina la necesidad de definir permisos.',
		cuandoA: [
			'Cuando la plantilla ya está en un directorio corporativo y necesita acceder a varias cuentas con permisos por función.',
			'Cuando se quiere retirar el acceso de inmediato al desactivar la persona en el directorio de origen.',
		],
		cuandoB: [
			'Cuando no existe un proveedor de identidad federado y una persona necesita credenciales propias en una cuenta concreta.',
			'Cuando se requiere una identidad local concreta y se acepta administrar su contraseña, MFA y rotación de claves.',
		],
		escenarioA:
			'La empresa conecta su directorio corporativo, agrupa a la plantilla y asigna permission sets por cuenta; al desactivar a una persona en el directorio, pierde el acceso sin borrar usuarios uno a uno.',
		escenarioB:
			'Una persona sin directorio federado recibe un usuario de IAM con contraseña, MFA y permisos mínimos a través de un grupo de su cuenta.',
		preguntaIds: ['2.3-q21'],
		objetivos: ['2.3#4', '2.3#10'],
	},
	{
		id: 'root-user-vs-identidad-administrativa-iam',
		etiqueta: 'Root user vs identidad administrativa de IAM',
		a: {
			titulo: 'Root user (cuenta raíz)',
			resumen:
				'Identidad que crea la cuenta con el correo y la contraseña de registro. Tiene acceso completo a todos los recursos y servicios, sus permisos no se limitan con políticas de IAM y concentra tareas que no se delegan, como cambiar el plan de soporte o cerrar la cuenta.',
		},
		b: {
			titulo: 'Identidad administrativa de IAM',
			resumen:
				'Usuario o rol con permisos elevados concedidos mediante políticas, creado para el trabajo diario. No hereda el acceso irrestricto de la cuenta raíz, se rige por el principio de menor privilegio y puede reforzarse con MFA y credenciales temporales.',
		},
		diferenciaClave:
			'La cuenta raíz no admite restricciones por políticas y queda reservada a las tareas que solo ella puede realizar; la identidad administrativa de IAM recibe permisos acotados y asume el trabajo cotidiano. Proteger la raíz con MFA y sin claves de acceso es lo que permite delegar la operación en una identidad administrativa.',
		cuandoA: [
			'Cuando hay que cambiar el plan de soporte, cerrar la cuenta, cambiar el correo de contacto o restaurar los permisos de un administrador de IAM.',
			'Cuando una tarea exige actuar como propietario de la cuenta y no existe una alternativa delegable.',
		],
		cuandoB: [
			'Cuando el equipo necesita administrar recursos a diario aplicando el principio de menor privilegio.',
			'Cuando se quiere operar la cuenta sin exponer las credenciales de la cuenta raíz.',
		],
		escenarioA:
			'El equipo de seguridad modifica el plan de soporte contratado: como es una tarea reservada, la ejecuta la cuenta raíz con MFA activado y sin claves de acceso.',
		escenarioB:
			'El trabajo diario de crear recursos y revisar políticas lo realiza un usuario administrativo de IAM con MFA y permisos mínimos, mientras la cuenta raíz permanece sin uso.',
		preguntaIds: ['2.3-q22'],
		objetivos: ['2.3#2', '2.3#3', '2.3#8', '2.3#9'],
	},
	{
		id: 'managed-policy-vs-inline-policy',
		etiqueta: 'Managed policy vs política inline',
		a: {
			titulo: 'Managed policy',
			resumen:
				'Documento de permisos independiente y reutilizable que AWS administra o que crea el cliente. Se adjunta a varias identidades, se actualiza en un solo lugar y permite mantener el permiso mínimo de forma consistente.',
		},
		b: {
			titulo: 'Política inline',
			resumen:
				'Política incrustada en una única identidad que no se puede reutilizar ni adjuntar a otra. Se usa para permisos muy concretos de esa identidad, a costa de duplicar cambios si se necesita el mismo permiso en más sitios.',
		},
		diferenciaClave:
			'La managed policy vive fuera de las identidades y se comparte entre ellas; la inline vive dentro de una sola identidad. Para definir grupos, usuarios y permisos conforme al mínimo privilegio conviene reutilizar managed policies y reservar la inline para excepciones.',
		cuandoA: [
			'Cuando el mismo conjunto de permisos debe aplicarse a varios usuarios, grupos o roles.',
			'Cuando se quiere cambiar el permiso en un único punto y que todas las identidades lo hereden.',
		],
		cuandoB: [
			'Cuando un permiso muy concreto no debe compartirse ni reutilizarse en otra identidad.',
			'Cuando se necesita un ajuste puntual que no tiene sentido mantener a escala de toda la organización.',
		],
		escenarioA:
			'Una empresa crea una managed policy de solo lectura de paneles y la adjunta al grupo de analistas; al añadir una vista nueva, actualiza la política una vez y todo el grupo la hereda.',
		escenarioB:
			'Un script concreto recibe una política inline con permiso exclusivo para una acción puntual sobre un recurso, sin reutilizarla en ninguna otra identidad.',
		preguntaIds: ['2.3-q23'],
		objetivos: ['2.3#7'],
	},
];
