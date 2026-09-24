import type { TarjetaClfC02 } from '@/data/clfC02/types';

export const tarjetasTask31: TarjetaClfC02[] = [
	{
		id: '3.1-t1',
		taskId: '3.1',
		objetivos: ['3.1#2', '3.1#4'],
		tipo: 'diferencia',
		frente:
			'Un compañero dice: «automatizar es meter los comandos de la CLI en un script; eso ya es infraestructura como código». ¿Qué matiz le falta?',
		reverso:
			'Un script de CLI ejecuta acciones concretas en un orden dado, pero no describe necesariamente el estado deseado del entorno. La infraestructura como código describe ese estado en archivos versionados y lo reproduce de forma repetible; la CLI puede formar parte del despliegue, pero no es lo mismo que IaC.',
	},
	{
		id: '3.1-t2',
		taskId: '3.1',
		objetivos: ['3.1#1', '3.1#5'],
		tipo: 'definicion',
		frente: '¿Aprovisionar y operar son lo mismo?',
		reverso:
			'No. Aprovisionar es crear y configurar recursos (red, cómputo, almacenamiento, permisos). Operar es mantenerlos, ajustarlos y responder a los cambios. Ambas cosas se pueden hacer a mano o de forma automatizada y repetible.',
	},
	{
		id: '3.1-t3',
		taskId: '3.1',
		objetivos: ['3.1#3', '3.1#6'],
		tipo: 'diferencia',
		frente: 'Explica en una frase cloud, híbrido y on-premises.',
		reverso:
			'Cloud: todo se ejecuta en la nube de AWS. On-premises: todo se ejecuta en instalaciones propias. Híbrido: parte en instalaciones propias y parte en la nube de AWS, normalmente por normativa, latencia o inversión existente.',
	},
	{
		id: '3.1-t4',
		taskId: '3.1',
		objetivos: ['3.1#2'],
		tipo: 'definicion',
		frente: 'Nombra las formas de acceder a los servicios de AWS.',
		reverso:
			'Consola de administración (visual), interfaz de línea de comandos, SDK, API e infraestructura como código. La consola es puntual; las demás son programáticas y permiten automatizar.',
	},
];
