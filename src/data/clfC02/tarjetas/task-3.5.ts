import type { TarjetaClfC02 } from '@/data/clfC02/types';

export const tarjetasTask35: TarjetaClfC02[] = [
	{
		id: '3.5-t1',
		taskId: '3.5',
		objetivos: ['3.5#5'],
		tipo: 'diferencia',
		frente:
			'Un compañero dice: «con AWS VPN tenemos un enlace privado que no pasa por internet». ¿Qué le corriges?',
		reverso:
			'AWS VPN levanta un túnel cifrado que sí viaja por internet; lo que no atraviesa internet es AWS Direct Connect, que es un enlace dedicado y privado. La VPN es más rápida de desplegar y la conexión dedicada aporta un rendimiento más estable.',
	},
	{
		id: '3.5-t2',
		taskId: '3.5',
		objetivos: ['3.5#3'],
		tipo: 'definicion',
		frente: '¿En qué se diferencian un security group y un network ACL?',
		reverso:
			'El security group es con estado, se asocia a recursos y solo admite reglas de permiso. El network ACL es sin estado, se asocia a una subred y admite reglas de permiso y de denegación, evaluadas por orden.',
	},
	{
		id: '3.5-t3',
		taskId: '3.5',
		objetivos: ['3.5#2'],
		tipo: 'definicion',
		frente: '¿Qué hace que una subred sea pública dentro de una VPC?',
		reverso:
			'Que la VPC tenga un internet gateway asociado y que la route table de la subred envíe el tráfico hacia ese gateway. Una subred sin esa ruta queda privada, aunque su rango de direcciones sea válido.',
	},
	{
		id: '3.5-t4',
		taskId: '3.5',
		objetivos: ['3.5#4'],
		tipo: 'servicio',
		frente: '¿Cuál es el propósito de Amazon Route 53?',
		reverso:
			'Es el servicio de DNS administrado: registra dominios, resuelve nombres hacia direcciones o destinos de AWS y aplica políticas de enrutamiento y comprobaciones de estado. No aloja contenido ni reparte conexiones como un balanceador de carga.',
	},
];
