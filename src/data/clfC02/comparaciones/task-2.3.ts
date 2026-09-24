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
];
