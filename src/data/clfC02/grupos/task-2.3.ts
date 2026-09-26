import type { GrupoTematico } from '@/data/clfC02/types';

export const gruposTask23: GrupoTematico[] = [
	{
		id: '2.3-g1',
		titulo: 'IAM: identidades, políticas y acceso programático',
		objetivos: ['2.3#1', '2.3#7'],
		bloques: [
			{
				tipo: 'concepto',
				md: '**AWS Identity and Access Management (IAM)** es el servicio que controla **quién** puede hacer **qué** dentro de una cuenta de AWS. Se organiza en dos piezas complementarias:\n\n- **Identidades**: el **usuario** (persona o aplicación con credenciales propias), el **grupo** (conjunto de usuarios que comparten los mismos permisos) y el **rol** (identidad que se asume temporalmente y que no tiene credenciales permanentes).\n- **Políticas**: documentos que conceden o deniegan acciones sobre recursos. Las **managed policies** las administra AWS o las crea el cliente para reutilizarlas en varias identidades; las **custom policies** las escribe el cliente a medida; las **inline policies** quedan pegadas a una única identidad y no se reutilizan.\n\nLa **autenticación** comprueba quién es la identidad y la **autorización** decide qué puede hacer. El diseño recomendado agrupa identidades por función, adjunta al grupo una política con el permiso mínimo y recurre a roles con credenciales temporales cuando el acceso lo asume una aplicación o un servicio.',
			},
			{
				tipo: 'comparacion',
				parId: 'iam-user-vs-iam-role',
			},
			{
				tipo: 'comparacion',
				parId: 'managed-policy-vs-inline-policy',
			},
			{
				tipo: 'escenario',
				situacion:
					'Una empresa incorpora a veinte personas al equipo de soporte durante un proyecto de tres meses. Necesitan consultar paneles y reiniciar instancias, pero el equipo de seguridad no quiere repartir credenciales permanentes ni conceder permisos de administrador.',
				analisis:
					'El patrón correcto es crear un **grupo** con una política de permisos mínimos (consultar paneles y reiniciar, nada más) y añadir temporalmente a quienes lo necesiten. Para accesos desde aplicaciones o entre cuentas se usa un **rol**, que entrega credenciales temporales. Así se aplica el **principio de menor privilegio** sin credenciales de larga duración que haya que revocar después.',
				servicio: 'AWS Identity and Access Management (IAM)',
			},
			{
				tipo: 'errorComun',
				error: 'Crear un usuario de IAM para cada integración y adjuntarle la política de administrador «para que funcione a la primera».',
				correccion:
					'Las integraciones deben usar roles con permisos mínimos y credenciales temporales, no usuarios con permisos amplios y claves de acceso permanentes. El permiso de administrador solo se concede si es estrictamente imprescindible y de forma temporal.',
			},
			{
				tipo: 'clave',
				items: [
					'IAM autentica identidades y autoriza acciones mediante políticas.',
					'Usuario = credenciales propias; grupo = permisos compartidos; rol = credenciales temporales sin secretos permanentes.',
					'Managed policies se reutilizan; custom policies se escriben a medida; inline policies viven en una sola identidad.',
					'Agrupar identidades y adjuntar el permiso mínimo evita repetir permisos y reduce el riesgo.',
				],
			},
		],
		preguntasGuia: [
			'¿Qué diferencia hay entre un usuario, un grupo y un rol de IAM?',
			'¿Cuándo conviene una managed policy y cuándo una custom policy?',
			'¿Cómo se aplica el principio de menor privilegio al crear identidades?',
		],
	},
	{
		id: '2.3-g2',
		titulo: 'Protección del root user y principio de menor privilegio',
		objetivos: ['2.3#2', '2.3#3', '2.3#8', '2.3#9'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'La cuenta de AWS nace con una identidad especial, el **root user**, creada con el correo y la contraseña de la cuenta. Ese usuario tiene **acceso completo** a todos los recursos y servicios y sus permisos no se pueden limitar con políticas de IAM (solo las políticas de control de servicios de AWS Organizations pueden restringir sus acciones), de modo que comprometerlo compromete la cuenta entera. Por eso se protege con MFA, no se le crean claves de acceso y no se usa para el trabajo diario.\n\nEl **principio de menor privilegio** consiste en conceder a cada identidad solo los permisos que necesita, sobre los recursos que necesita y durante el tiempo necesario. Se aplica con políticas específicas, grupos con permisos mínimos, roles con credenciales temporales y una revisión periódica que retira los permisos sobrantes. Un permiso de administrador permanente «por comodidad» es la negación del principio.',
			},
			{
				tipo: 'comparacion',
				parId: 'root-user-vs-identidad-administrativa-iam',
			},
			{
				tipo: 'escenario',
				situacion:
					'Una auditoría detecta que el equipo usa el root user para crear recursos todos los días y que tiene una clave de acceso guardada en un archivo compartido. El equipo de seguridad debe corregir la situación sin bloquear la operación.',
				analisis:
					'Primero se activa **MFA** en el root user y se eliminan sus claves de acceso; después se crea una identidad administrativa de IAM (o se usa **AWS IAM Identity Center**) para el trabajo diario, con permisos mínimos y MFA. El root user queda reservado para las tareas que solo él puede realizar y su actividad se vigila con el registro de auditoría.',
				servicio: 'AWS Identity and Access Management (IAM)',
			},
			{
				tipo: 'errorComun',
				error: 'Usar el root user para las tareas diarias o crearle claves de acceso para automatizaciones, porque «es más rápido».',
				correccion:
					'El root user no se usa en el día a día: se protege con MFA, se le retiran las claves de acceso y las tareas cotidianas se hacen con una identidad administrativa de IAM o con IAM Identity Center. Debe quedar reservado para lo que solo él puede hacer.',
			},
			{
				tipo: 'clave',
				items: [
					'El root user tiene acceso total y no se le pueden denegar permisos con políticas de IAM (solo las SCP de AWS Organizations pueden restringirlo).',
					'Protección del root user: MFA activado, sin claves de acceso y sin uso diario.',
					'Solo el root user puede, por ejemplo, cambiar el plan de soporte o cerrar la cuenta.',
					'Menor privilegio = permisos mínimos, sobre recursos concretos y durante el tiempo necesario.',
				],
			},
		],
		preguntasGuia: [
			'¿Por qué el root user no se puede limitar con políticas de IAM?',
			'¿Qué tareas quedan reservadas al root user?',
			'¿Qué medidas concretas protegen la cuenta raíz?',
			'¿Cómo se aplica el principio de menor privilegio en la práctica?',
		],
	},
	{
		id: '2.3-g3',
		titulo: 'Claves de acceso, contraseñas y almacenamiento de credenciales',
		objetivos: ['2.3#5', '2.3#6'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'Las **claves de acceso** (access keys) son credenciales de larga duración para llamadas programáticas: un **access key ID** y un **secret access key**. No sirven para iniciar sesión en la consola y, si se filtran, cualquiera puede actuar con los permisos de su propietario; por eso no se escriben en el código ni en archivos de texto, se rotan y se guardan en un almacén gestionado como **AWS Secrets Manager** o el **Parameter Store de AWS Systems Manager**.\n\nLas **password policies** definen los requisitos de las contraseñas de las personas (longitud mínima, mayúsculas, números, símbolos, caducidad y reutilización). El **MFA** añade un factor adicional al inicio de sesión y protege aunque la contraseña se filtre. La clave de acceso y el MFA no compiten: uno autentica programas, el otro refuerza el acceso humano.',
			},
			{
				tipo: 'comparacion',
				parId: 'claves-de-acceso-vs-mfa',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Usa un almacén de secretos gestionado para las claves y contraseñas de las aplicaciones, en lugar de dejarlas en el código o en archivos de configuración.',
					'Exige una password policy estricta y MFA a las personas, sobre todo a las identidades administrativas y al root user.',
					'Rota las claves de acceso periódicamente y retíralas cuando ya no sean necesarias.',
				],
				noUsar: [
					'No incrustes claves de acceso en repositorios, imágenes o el user data de una instancia.',
					'No repartas una misma credencial entre varias personas ni sustituyas el MFA por una contraseña más larga.',
				],
			},
			{
				tipo: 'errorComun',
				error: 'Guardar la clave de acceso en el código fuente o en un archivo dentro del repositorio y considerarlo aceptable porque el repositorio es privado.',
				correccion:
					'Los secretos no viven en el código. Se guardan en AWS Secrets Manager o en el Parameter Store de AWS Systems Manager, se accede a ellos mediante permisos mínimos y se rotan; el código solo contiene una referencia al secreto, nunca el valor.',
			},
		],
		preguntasGuia: [
			'¿En qué se diferencia una clave de acceso de un factor MFA?',
			'¿Dónde deben guardarse los secretos de una aplicación?',
			'¿Qué controla una password policy?',
		],
	},
	{
		id: '2.3-g4',
		titulo: 'IAM Identity Center y gestión de identidades federadas',
		objetivos: ['2.3#4', '2.3#10'],
		bloques: [
			{
				tipo: 'concepto',
				md: '**AWS IAM Identity Center** centraliza el acceso de la plantilla a varias cuentas de AWS. Conecta el directorio corporativo o un proveedor de identidad externo, aplica **inicio de sesión único** y asigna **permission sets** a grupos de personas por cada cuenta, en lugar de crear un usuario de IAM por persona y por cuenta.\n\nLa **identidad federada** delega la autenticación en un proveedor de identidad externo: la persona se valida en su directorio corporativo y recibe **credenciales temporales** para la cuenta que le corresponde. Es la forma habitual de gestionar el personal y se apoya en estándares como SAML 2.0 u OIDC. Para las aplicaciones dirigidas a clientes existe **Amazon Cognito**, que gestiona el registro, el inicio de sesión y la federación con identidades sociales.',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Usa IAM Identity Center cuando muchas personas necesiten acceder a varias cuentas de AWS con su identidad corporativa y permisos por función.',
					'Elige la identidad federada cuando ya exista un directorio o proveedor de identidad que deba seguir siendo la fuente autorizada.',
					'Emplea Amazon Cognito cuando la autenticación corresponda a los clientes finales de una aplicación.',
				],
				noUsar: [
					'No crees un usuario de IAM por persona y por cuenta cuando existe un directorio corporativo que puede federarse.',
					'No uses identidades federadas para dar permisos permanentes: la federación entrega credenciales temporales ligadas a la sesión.',
				],
			},
			{
				tipo: 'ejemplo',
				md: '```text\nEscenario                            -> mecanismo\n- Plantilla con directorio corporativo -> identidad federada + IAM Identity Center\n- Muchas cuentas, permisos por rol     -> permission sets asignados a grupos\n- Aplicación que consume AWS           -> rol de IAM con credenciales temporales\n- Clientes finales de una app           -> Amazon Cognito\n```',
			},
			{
				tipo: 'escenario',
				situacion:
					'Una empresa tiene a sus empleados en un proveedor de identidad corporativo y quiere que accedan a varias cuentas de AWS sin crear un usuario de IAM por persona y por cuenta, además de retirar el acceso de inmediato cuando alguien deja la compañía.',
				analisis:
					'Con **AWS IAM Identity Center** se conecta el directorio una sola vez, se agrupan las personas y se asignan **permission sets** por cuenta. La autenticación es **federada**: el usuario se valida en el proveedor de identidad y recibe credenciales temporales para las cuentas que le corresponden. Al desactivar la cuenta en el directorio, el acceso desaparece sin borrar usuarios uno a uno.',
				servicio: 'AWS IAM Identity Center',
			},
		],
		preguntasGuia: [
			'¿Qué resuelve AWS IAM Identity Center frente a crear usuarios de IAM?',
			'¿Qué significa que la identidad sea federada?',
			'¿Cuándo se usa Amazon Cognito en lugar de IAM Identity Center?',
		],
	},
];
