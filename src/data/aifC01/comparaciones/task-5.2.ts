import type { ParConfusionAifC01 } from '@/data/aifC01/types';

export const paresTask52: ParConfusionAifC01[] = [
	{
		id: 'cloudtrail-vs-cloudwatch',
		etiqueta: 'AWS CloudTrail vs Amazon CloudWatch',
		a: {
			titulo: 'AWS CloudTrail',
			resumen:
				'Registra la actividad de la API: quién realizó qué operación sobre qué recurso y cuándo. Es la traza de auditoría y de cumplimiento.',
		},
		b: {
			titulo: 'Amazon CloudWatch',
			resumen:
				'Recoge métricas, logs y alarmas para vigilar el estado y el rendimiento de las aplicaciones en tiempo real. Es observabilidad operativa.',
		},
		diferenciaClave:
			'AWS CloudTrail responde «quién hizo qué acción sobre un recurso»; Amazon CloudWatch responde «cómo se está comportando el sistema». La auditoría busca acciones; la observabilidad busca salud y rendimiento.',
		cuandoA: [
			'Cuando necesitas reconstruir quién modificó o eliminó un recurso y cuándo.',
			'Para aportar evidencia de auditoría y responder a requisitos de cumplimiento.',
			'Al investigar cambios de permisos o de configuración.',
		],
		cuandoB: [
			'Cuando quieres vigilar latencia, errores, uso y salud de las aplicaciones.',
			'Para disparar alarmas y construir paneles de operación en tiempo real.',
			'Al depurar un comportamiento intermitente del sistema.',
		],
		escenarioA:
			'Una política de retención desaparece y el equipo debe saber quién la eliminó. La respuesta está en la traza de auditoría de AWS CloudTrail.',
		escenarioB:
			'El asistente empieza a responder con más latencia de la habitual y el equipo necesita una alarma por umbral. Esa vigilancia vive en Amazon CloudWatch.',
		preguntaIds: ['5.2-q2'],
		objetivos: ['5.2#1'],
	},
	{
		id: 'residency-vs-retention',
		etiqueta: 'Residencia vs retención de datos',
		a: {
			titulo: 'Residencia',
			resumen:
				'Determina en qué ubicación geográfica se almacenan y se procesan los datos y qué transferencias entre ubicaciones se permiten.',
		},
		b: {
			titulo: 'Retención',
			resumen:
				'Determina cuánto tiempo se conservan los datos y con qué método verificable se eliminan al finalizar el plazo.',
		},
		diferenciaClave:
			'Residencia = dónde está el dato; retención = cuánto tiempo se queda. Cumplir una no cumple la otra: un dato puede estar en el país correcto y conservarse más tiempo del permitido, o eliminarse puntualmente tras haberse procesado fuera.',
		cuandoA: [
			'Cuando la regulación limita dónde pueden almacenarse o procesarse los datos.',
			'Al diseñar arquitecturas con transferencia de datos entre regiones.',
			'Al clasificar datos personales o sujetos a normativa sectorial.',
		],
		cuandoB: [
			'Cuando la normativa fija plazos de conservación u obliga a eliminar datos.',
			'Para automatizar el archivado y la expiración dentro del ciclo de vida.',
			'Cuando hay que demostrar el borrado con evidencia ante un auditor.',
		],
		escenarioA:
			'Un banco debe garantizar que los datos de sus clientes no salen del país. Es un requisito de residencia.',
		escenarioB:
			'Una aseguradora debe conservar expedientes siete años y eliminarlos después de forma demostrable. Es un requisito de retención.',
		preguntaIds: ['5.2-q3'],
		objetivos: ['5.2#2'],
	},
];
