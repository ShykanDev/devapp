import type { ParConfusionClfC02 } from '@/data/clfC02/types';

export const paresTask22: ParConfusionClfC02[] = [
	{
		id: 'cloudwatch-vs-cloudtrail-vs-config',
		etiqueta: 'Amazon CloudWatch vs AWS CloudTrail vs AWS Config',
		a: {
			titulo: 'Amazon CloudWatch (monitoreo)',
			resumen:
				'Recoge métricas, logs y eventos del funcionamiento del entorno y permite crear alarmas cuando un umbral se cruza. Responde a la pregunta «¿cómo está funcionando?».',
		},
		b: {
			titulo: 'AWS CloudTrail y AWS Config (auditoría y estado de configuración)',
			resumen:
				'AWS CloudTrail registra las llamadas a la API: quién hizo qué, desde dónde y cuándo. AWS Config guarda el historial de configuración de los recursos y evalúa si cumplen las reglas definidas.',
		},
		diferenciaClave:
			'CloudWatch observa el rendimiento y la operación; CloudTrail audita la actividad de la API; Config vigila el estado de la configuración. Son tres preguntas distintas y complementarias: funcionamiento, autoría y cumplimiento de configuración.',
		cuandoA: [
			'Cuando necesitas métricas, logs y alarmas para operar y detectar degradaciones en tiempo real.',
			'Cuando quieres centralizar los logs de servicio y reaccionar ante umbrales.',
		],
		cuandoB: [
			'Cuando necesitas saber quién realizó una acción y cuándo, para una investigación o una auditoría de seguridad.',
			'Cuando debes demostrar el estado de configuración de los recursos y evaluarlo frente a reglas de cumplimiento.',
		],
		escenarioA:
			'Un equipo supervisa una aplicación con un panel de métricas y recibe una alarma cuando el uso de CPU supera el umbral definido, para actuar antes de que afecte a los usuarios.',
		escenarioB:
			'Tras un incidente, el equipo reconstruye la secuencia de acciones con el historial de actividad de la API y comprueba si la configuración del recurso se había desviado de la regla requerida.',
		preguntaIds: ['2.2-q13', '2.2-q14'],
		objetivos: ['2.2#3', '2.2#8'],
	},
	{
		id: 'cifrado-en-transito-vs-en-reposo',
		etiqueta: 'Cifrado en tránsito vs cifrado en reposo',
		a: {
			titulo: 'Cifrado en tránsito',
			resumen:
				'Protege el dato mientras viaja por la red, entre el cliente y el servicio o entre servicios. Se apoya en protocolos seguros en los endpoints y en las conexiones.',
		},
		b: {
			titulo: 'Cifrado en reposo',
			resumen:
				'Protege el dato almacenado en un volumen, un bucket o una base de datos. Se gestiona mediante claves, por ejemplo con AWS KMS.',
		},
		diferenciaClave:
			'El cifrado en tránsito cubre el recorrido del dato por la red; el cifrado en reposo cubre el dato almacenado. Son momentos distintos del ciclo de vida y se complementan: aplicar uno no protege el otro.',
		cuandoA: [
			'Cuando el dato sale de un sistema y viaja hacia otro, por ejemplo en una consulta o una transferencia.',
			'Cuando quieres evitar que el tráfico sea leído o alterado durante su recorrido.',
		],
		cuandoB: [
			'Cuando el dato permanece guardado y quieres protegerlo frente a accesos no autorizados al almacenamiento.',
			'Cuando un requisito de cumplimiento exige cifrado de los datos almacenados y control de las claves.',
		],
		escenarioA:
			'Una aplicación consulta una base de datos a través de una conexión segura, de modo que los datos no puedan leerse durante el trayecto por la red.',
		escenarioB:
			'Los mismos datos se guardan en un almacenamiento cifrado con claves gestionadas, de modo que no sean legibles aunque el soporte físico se exponga.',
		preguntaIds: ['2.2-q12'],
		objetivos: ['2.2#7'],
	},
];
