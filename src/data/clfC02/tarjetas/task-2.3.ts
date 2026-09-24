import type { TarjetaClfC02 } from '@/data/clfC02/types';

export const tarjetasTask23: TarjetaClfC02[] = [
	{
		id: '2.3-t1',
		taskId: '2.3',
		objetivos: ['2.3#1'],
		tipo: 'definicion',
		frente:
			'¿Qué controla AWS Identity and Access Management (IAM) y en qué se diferencian usuarios, grupos y roles?',
		reverso:
			'Controla quién puede hacer qué en una cuenta. El usuario es una identidad con credenciales propias; el grupo reúne usuarios para compartir permisos; el rol es una identidad que se asume temporalmente y no tiene credenciales permanentes. Las políticas definen las acciones permitidas.',
	},
	{
		id: '2.3-t2',
		taskId: '2.3',
		objetivos: ['2.3#3'],
		tipo: 'definicion',
		frente: '¿Qué exige el principio de menor privilegio?',
		reverso:
			'Conceder a cada identidad solo los permisos necesarios para su tarea y durante el tiempo imprescindible. Se implementa con políticas específicas, grupos con permisos mínimos, roles con credenciales temporales y una revisión periódica que retira los permisos sobrantes.',
	},
	{
		id: '2.3-t3',
		taskId: '2.3',
		objetivos: ['2.3#1', '2.3#7'],
		tipo: 'diferencia',
		frente:
			'Un equipo quiere dar acceso a una aplicación que se ejecuta en AWS. ¿Usuario de IAM o rol de IAM?',
		reverso:
			'Rol. Un rol entrega credenciales temporales y no tiene claves permanentes, por lo que es ideal para aplicaciones y accesos entre cuentas. Un usuario con claves de acceso de larga duración solo se justifica cuando no hay alternativa, y exige rotación y almacenamiento seguro.',
	},
	{
		id: '2.3-t4',
		taskId: '2.3',
		objetivos: ['2.3#5'],
		tipo: 'riesgo',
		frente:
			'¿Por qué es peligroso guardar una clave de acceso en el código fuente de una aplicación?',
		reverso:
			'La clave de acceso es una credencial de larga duración que concede permisos programáticos: si se filtra en un repositorio, cualquiera puede usar la cuenta. Debe almacenarse en AWS Secrets Manager o AWS Systems Manager y rotarse; el código no contiene secretos.',
	},
	{
		id: '2.3-t5',
		taskId: '2.3',
		objetivos: ['2.3#2', '2.3#9'],
		tipo: 'definicion',
		frente: '¿Qué medidas protegen la cuenta raíz (root user)?',
		reverso:
			'Activar MFA en el root user, no crear claves de acceso para él, no usarlo para tareas diarias (emplear una identidad administrativa de IAM o IAM Identity Center) y vigilar su actividad con AWS CloudTrail. Así el impacto de una credencial filtrada es mínimo.',
	},
	{
		id: '2.3-t6',
		taskId: '2.3',
		objetivos: ['2.3#4', '2.3#10'],
		tipo: 'servicio',
		frente:
			'¿Para qué sirve AWS IAM Identity Center frente a crear usuarios de IAM para cada persona?',
		reverso:
			'Centraliza el acceso de la plantilla con inicio de sesión único, conecta el directorio o proveedor de identidad corporativo y asigna permission sets por cuenta. Evita un usuario de IAM por persona y por cuenta y encaja con la autenticación federada.',
	},
];
