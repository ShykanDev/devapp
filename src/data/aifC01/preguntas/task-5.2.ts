import type { PreguntaAifC01 } from '@/data/aifC01/types';

export const preguntasTask52: PreguntaAifC01[] = [
	{
		id: '5.2-q1',
		taskId: '5.2',
		objetivos: ['5.2#1'],
		tipo: 'servicio',
		question:
			'Un equipo necesita comprobar de forma continua si la configuración de los recursos se aparta de una línea base y conservar el historial de cada cambio. ¿Qué servicio se ajusta a ese objetivo?',
		options: [
			'AWS CloudTrail, porque registra la actividad de la API.',
			'AWS Config, porque evalúa la configuración frente a reglas y guarda su historial.',
			'Amazon Inspector, porque analiza vulnerabilidades de las cargas de trabajo.',
			'AWS Artifact, porque descarga informes de cumplimiento.',
		],
		correctAnswer: 1,
		explanation:
			'AWS Config evalúa la configuración frente a reglas y mantiene el historial de cambios. AWS CloudTrail responde a quién hizo qué, Amazon Inspector analiza vulnerabilidades y AWS Artifact entrega informes de cumplimiento del proveedor.',
	},
	{
		id: '5.2-q2',
		taskId: '5.2',
		objetivos: ['5.2#1'],
		tipo: 'comparacion',
		question:
			'Un administrador eliminó por error una política de acceso y el equipo necesita determinar quién ejecutó esa operación y cuándo. ¿Qué servicio contiene esa evidencia?',
		options: [
			'Amazon CloudWatch, porque conserva las métricas de uso.',
			'AWS CloudTrail, porque registra la actividad de la API con su autor y su momento.',
			'AWS Trusted Advisor, porque recomienda buenas prácticas.',
			'Amazon Macie, porque clasifica datos sensibles.',
		],
		correctAnswer: 1,
		explanation:
			'AWS CloudTrail es la traza de auditoría: registra las llamadas a la API con la identidad y el momento. Amazon CloudWatch ofrece observabilidad operativa (métricas, logs y alarmas) y no responde por sí solo a quién realizó una acción sobre un recurso.',
	},
	{
		id: '5.2-q3',
		taskId: '5.2',
		objetivos: ['5.2#2'],
		tipo: 'comparacion',
		question:
			'Una normativa exige que los datos de los clientes se almacenen y procesen dentro del país y que se conserven siete años. El equipo quiere tratar ambos requisitos como uno solo. ¿Cómo se describen correctamente?',
		options: [
			'Los dos son requisitos de residencia de datos.',
			'Los dos son requisitos de retención de datos.',
			'La ubicación es un requisito de residencia y el plazo de siete años es un requisito de retención.',
			'La residencia define el cifrado y la retención define el control de acceso.',
		],
		correctAnswer: 2,
		explanation:
			'La residencia determina dónde se almacenan y se procesan los datos; la retención determina cuánto tiempo se conservan y cuándo se eliminan. Son controles independientes y cada uno exige su propia política y su propia evidencia.',
	},
	{
		id: '5.2-q4',
		taskId: '5.2',
		objetivos: ['5.2#2'],
		tipo: 'metrica',
		question:
			'El equipo quiere demostrar que los datos se eliminan conforme a la política de retención. ¿Qué evidencia describe mejor una métrica de cumplimiento del ciclo de vida?',
		options: [
			'El número de consultas por segundo que recibe el sistema.',
			'El porcentaje de objetos que expiran en la fecha definida y el registro de su eliminación.',
			'La latencia media de las respuestas del modelo.',
			'El número de usuarios activos en la plataforma.',
		],
		correctAnswer: 1,
		explanation:
			'Una métrica de gobernanza mide si la política se cumple: objetos eliminados en el plazo definido y evidencia del borrado. Consultas por segundo, latencia y usuarios activos miden la operación, no el ciclo de vida del dato.',
	},
	{
		id: '5.2-q5',
		taskId: '5.2',
		objetivos: ['5.2#3'],
		tipo: 'conocimiento',
		question:
			'¿Qué elemento convierte una política escrita en un protocolo de governance que se sigue en la práctica?',
		options: [
			'Publicar la política en la intranet y no volver a revisarla.',
			'Definir responsables, una cadencia de revisión y la evidencia que demuestra su cumplimiento.',
			'Delegar todas las decisiones en el equipo técnico sin documentarlas.',
			'Añadir más páginas de detalle a la política.',
		],
		correctAnswer: 1,
		explanation:
			'Un protocolo necesita dueños, cadencia de revisión, estrategias de revisión y evidencia trazable. Una política sin responsables ni revisión periódica es un documento, no un protocolo que se siga.',
	},
	{
		id: '5.2-q6',
		taskId: '5.2',
		objetivos: ['5.2#3'],
		tipo: 'escenario',
		question:
			'Un equipo quiere poner en producción un asistente generativo que tratará datos regulados, pero no sabe qué controles aplicar. ¿Qué marco de governance ayuda a determinar el alcance de seguridad del caso de uso?',
		options: [
			'La Generative AI Security Scoping Matrix, que clasifica el caso de uso en un alcance y deriva los controles esperados.',
			'Una plantilla de prompt con instrucciones de seguridad.',
			'El historial de tickets del equipo de soporte.',
			'Un análisis de sentimiento de las respuestas del modelo.',
		],
		correctAnswer: 0,
		explanation:
			'La Generative AI Security Scoping Matrix clasifica el caso de uso generativo en un alcance de seguridad y define los controles proporcionales a ese alcance. Una plantilla de prompt acota el comportamiento del modelo, pero no determina controles de governance.',
	},
	{
		id: '5.2-q7',
		taskId: '5.2',
		objetivos: ['5.2#3'],
		tipo: 'seguridad',
		question:
			'Antes de aprobar un caso de uso de IA generativa, el comité exige documentar qué hace el sistema, con qué datos se alimenta y cuáles son sus límites conocidos. ¿Qué práctica de governance describe este requisito?',
		options: [
			'Una estrategia de retención de datos.',
			'Un estándar de transparencia, apoyado por ejemplo en Amazon SageMaker Model Cards.',
			'Un análisis de vulnerabilidades con Amazon Inspector.',
			'Una política de residencia de datos.',
		],
		correctAnswer: 1,
		explanation:
			'Los estándares de transparencia documentan el propósito, los datos y los límites del sistema ante usuarios y auditores, y Amazon SageMaker Model Cards ofrece un formato estructurado para esa documentación. Retención, residencia y vulnerabilidades son controles distintos.',
	},
	{
		id: '5.2-q8',
		taskId: '5.2',
		objetivos: ['5.2#3'],
		tipo: 'tradeoff',
		question:
			'El equipo debate con qué frecuencia revisar las políticas de IA. ¿Qué afirmación describe mejor el intercambio entre cadencia y esfuerzo?',
		options: [
			'Revisar muy a menudo garantiza el cumplimiento y no tiene coste.',
			'Una cadencia más corta detecta antes los cambios de riesgo, a cambio de más trabajo de revisión y de evidencia, mientras que una cadencia larga ahorra esfuerzo pero puede dejar la política desactualizada.',
			'La cadencia de revisión no afecta al cumplimiento: solo importa el contenido de la política.',
			'Solo conviene revisar cuando ocurre un incidente grave.',
		],
		correctAnswer: 1,
		explanation:
			'La cadencia es un equilibrio: revisiones frecuentes reducen el tiempo de exposición a políticas obsoletas, pero consumen esfuerzo del equipo; revisiones espaciadas ahorran trabajo y aumentan el riesgo de desviación. La criticidad del caso de uso y el marco de governance orientan la decisión.',
	},
];
