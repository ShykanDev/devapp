import type { TarjetaClfC02 } from '@/data/clfC02/types';

export const tarjetasTask36: TarjetaClfC02[] = [
	{
		id: '3.6-t1',
		taskId: '3.6',
		objetivos: ['3.6#1', '3.6#2'],
		tipo: 'definicion',
		frente: '¿Qué es el almacenamiento de objetos y qué usos tiene?',
		reverso:
			'Guarda cada dato como un objeto completo con metadatos y una clave, dentro de un contenedor plano, y se accede por API. Encaja en contenido estático, copias de seguridad, data lakes y cualquier dato que se lea y escriba como un todo, no por bloques.',
	},
	{
		id: '3.6-t2',
		taskId: '3.6',
		objetivos: ['3.6#3'],
		tipo: 'diferencia',
		frente:
			'Un compañero quiere consultar cada día objetos guardados en la clase de archivado profundo. ¿Qué le explicas?',
		reverso:
			'Las clases de archivado abaratan el almacenamiento a cambio de una recuperación lenta y con coste por acceso. Para consultas diarias conviene una clase de acceso inmediato, y una política de ciclo de vida para transicionar a clases frías solo cuando el objeto deja de consultarse.',
	},
	{
		id: '3.6-t3',
		taskId: '3.6',
		objetivos: ['3.6#4'],
		tipo: 'diferencia',
		frente: '¿Cuándo usarías Amazon EBS y cuándo el instance store?',
		reverso:
			'Amazon EBS es un volumen de bloque persistente de red, con snapshots, cifrado y cambio de tamaño, ideal para datos que deben sobrevivir a la instancia. El instance store es local y efímero: se reserva para cachés o datos reconstruibles que priorizan el máximo rendimiento.',
	},
	{
		id: '3.6-t4',
		taskId: '3.6',
		objetivos: ['3.6#5', '3.6#6'],
		tipo: 'diferencia',
		frente:
			'¿Cómo diferencias Amazon EFS y Amazon FSx de AWS Storage Gateway?',
		reverso:
			'Amazon EFS (elástico, para Linux) y Amazon FSx (motores concretos, como Windows File Server o Lustre) son sistemas de archivos gestionados en AWS. AWS Storage Gateway es la puerta de enlace híbrida que sirve con caché local datos que viven en AWS.',
	},
	{
		id: '3.6-t5',
		taskId: '3.6',
		objetivos: ['3.6#7', '3.6#8'],
		tipo: 'tradeoff',
		frente:
			'¿En qué se diferencian una política de ciclo de vida y AWS Backup?',
		reverso:
			'La política de ciclo de vida optimiza el coste del dato vivo moviéndolo entre clases de almacenamiento o expirándolo. AWS Backup crea copias recuperables con retención definida sobre varios servicios. Abaratar el dato no es lo mismo que protegerlo: una transición de clase no es una copia de seguridad.',
	},
	{
		id: '3.6-t6',
		taskId: '3.6',
		objetivos: ['3.6#1'],
		tipo: 'definicion',
		frente: '¿Qué distingue el almacenamiento de objetos, el de bloque y el de archivos?',
		reverso:
			'Objetos: datos completos con metadatos por API. Bloque: volúmenes tipo disco para una instancia. Archivos: sistema de archivos compartido por red entre varias instancias. Los tres modelos resuelven necesidades distintas y no son intercambiables.',
	},
];
