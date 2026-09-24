import type { TarjetaClfC02 } from '@/data/clfC02/types';

export const tarjetasTask12: TarjetaClfC02[] = [
	{
		id: '1.2-t1',
		taskId: '1.2',
		objetivos: ['1.2#1'],
		tipo: 'definicion',
		frente:
			'¿Qué es el AWS Well-Architected Framework y en qué se diferencia del AWS Well-Architected Tool?',
		reverso:
			'El Framework es la guía de diseño: buenas prácticas y preguntas organizadas por pilar para revisar una carga de trabajo. El Tool es el servicio que conduce esa revisión, recoge las respuestas y genera el plan de mejora. Guía frente al instrumento que la aplica.',
	},
	{
		id: '1.2-t2',
		taskId: '1.2',
		objetivos: ['1.2#2'],
		tipo: 'definicion',
		frente: 'Enumera los seis pilares del AWS Well-Architected Framework.',
		reverso:
			'Operational excellence, security, reliability, performance efficiency, cost optimization y sustainability. Cada pilar responde a una pregunta distinta de diseño y el buen diseño los equilibra en lugar de priorizar uno solo.',
	},
	{
		id: '1.2-t3',
		taskId: '1.2',
		objetivos: ['1.2#3'],
		tipo: 'diferencia',
		frente:
			'Un compañero dice: «la aplicación se vuelve lenta con muchos usuarios, es un problema de fiabilidad». ¿Qué corriges?',
		reverso:
			'La lentitud por falta de recursos o de escalado es performance efficiency. Reliability se ocupa de seguir funcionando ante fallos. El síntoma decide el pilar: velocidad apunta a rendimiento; tolerancia a fallos, a fiabilidad.',
	},
];
