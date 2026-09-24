import type { TarjetaClfC02 } from '@/data/clfC02/types';

export const tarjetasTask22: TarjetaClfC02[] = [
	{
		id: '2.2-t1',
		taskId: '2.2',
		objetivos: ['2.2#8'],
		tipo: 'diferencia',
		frente:
			'Pregunta rápida: ¿Amazon CloudWatch, AWS CloudTrail o AWS Config para saber quién eliminó un recurso?',
		reverso:
			'AWS CloudTrail: registra las llamadas a la API y responde quién hizo qué y cuándo. Amazon CloudWatch: métricas, logs y alarmas del funcionamiento. AWS Config: historial de configuración de los recursos y evaluación frente a reglas.',
	},
	{
		id: '2.2-t2',
		taskId: '2.2',
		objetivos: ['2.2#3', '2.2#8'],
		tipo: 'definicion',
		frente: '¿Dónde se capturan y localizan los logs asociados a la seguridad?',
		reverso:
			'Los logs operativos en CloudWatch Logs; la actividad de la API en AWS CloudTrail (entregable a Amazon S3); los cambios de configuración en AWS Config. Centralizarlos en Amazon S3 facilita la retención y las auditorías.',
	},
	{
		id: '2.2-t3',
		taskId: '2.2',
		objetivos: ['2.2#7'],
		tipo: 'definicion',
		frente: 'Cifrado en tránsito y cifrado en reposo: ¿qué protege cada uno?',
		reverso:
			'El cifrado en tránsito protege el dato mientras viaja por la red entre el cliente y el servicio. El cifrado en reposo protege el dato almacenado, por ejemplo en un volumen o en un bucket. Se complementan y cubren riesgos distintos.',
	},
	{
		id: '2.2-t4',
		taskId: '2.2',
		objetivos: ['2.2#4', '2.2#5'],
		tipo: 'definicion',
		frente: '¿Dónde se encuentra la información de cumplimiento de AWS?',
		reverso:
			'AWS Artifact es el centro de autoservicio donde se descargan informes de auditoría y certificaciones de AWS (por ejemplo, SOC e ISO) y los acuerdos aplicables. Los requisitos varían por geografía e industria, así que hay que revisar la documentación correspondiente al caso concreto.',
	},
	{
		id: '2.2-t5',
		taskId: '2.2',
		objetivos: ['2.2#6'],
		tipo: 'servicio',
		frente:
			'Asocia cada servicio con lo que protege: Amazon Inspector, Amazon GuardDuty, AWS Security Hub y AWS Shield.',
		reverso:
			'Amazon Inspector evalúa vulnerabilidades; Amazon GuardDuty detecta actividad maliciosa; AWS Security Hub centraliza hallazgos; AWS Shield mitiga ataques de denegación de servicio distribuido (DDoS). Se complementan entre sí.',
	},
	{
		id: '2.2-t6',
		taskId: '2.2',
		objetivos: ['2.2#1'],
		tipo: 'definicion',
		frente: 'Compliance y governance: ¿en qué se diferencian?',
		reverso:
			'Compliance es cumplir las normas, leyes y estándares aplicables. Governance es el conjunto de reglas, controles y procesos internos con los que la organización demuestra y mantiene ese cumplimiento en el tiempo.',
	},
];
