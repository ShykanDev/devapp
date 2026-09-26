import type { ParConfusionClfC02 } from '@/data/clfC02/types';

export const paresTask22: ParConfusionClfC02[] = [
	{
		id: 'cloudwatch-vs-cloudtrail-vs-config',
		etiqueta: 'Amazon CloudWatch vs AWS CloudTrail vs AWS Config',
		a: {
			titulo: 'Amazon CloudWatch (monitoreo)',
			resumen:
				'Recoge métricas, logs y alarmas del funcionamiento del entorno y permite reaccionar cuando un umbral se cruza. Responde a la pregunta «¿cómo está funcionando?».',
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
	{
		id: 'artifact-vs-config-informes-vs-configuracion',
		etiqueta: 'Informes de cumplimiento de AWS vs evaluación de la configuración propia',
		a: {
			titulo: 'Informes de cumplimiento de AWS',
			resumen:
				'Centro de autoservicio donde el cliente descarga las certificaciones e informes de auditoría que AWS emite sobre sus propios servicios, junto con los acuerdos aplicables a cada sector.',
		},
		b: {
			titulo: 'Evaluación de la configuración propia',
			resumen:
				'Servicio que guarda el historial de configuración de los recursos del cliente y evalúa si cumplen las reglas definidas, mostrando el estado real de la cuenta.',
		},
		diferenciaClave:
			'Uno aporta la evidencia documental que emite AWS sobre sí mismo; el otro evalúa cómo está configurada la cuenta del cliente. Para una auditoría se necesitan ambos: la certificación de AWS no demuestra la configuración propia.',
		cuandoA: [
			'Cuando un auditor solicita informes, certificaciones o acuerdos aplicables a AWS.',
			'Cuando hay que demostrar que las obligaciones del proveedor están cubiertas por documentación oficial.',
		],
		cuandoB: [
			'Cuando hay que verificar si los recursos de la cuenta cumplen las reglas de configuración requeridas.',
			'Cuando se necesita el historial de cambios de configuración de un recurso concreto.',
		],
		escenarioA:
			'El área legal descarga los informes SOC e ISO y los acuerdos aplicables para entregarlos al auditor externo.',
		escenarioB:
			'El ingeniero revisa qué recursos se desviaron de la configuración permitida y en qué momento cambió su estado.',
		preguntaIds: ['2.2-q22'],
		objetivos: ['2.2#4'],
	},
	{
		id: 'inspector-vs-guardduty-vs-shield-deteccion',
		etiqueta: 'Detección de amenazas, evaluación de vulnerabilidades y mitigación de DDoS',
		a: {
			titulo: 'Detección y evaluación',
			resumen:
				'Amazon GuardDuty detecta actividad maliciosa a partir de señales del entorno y Amazon Inspector evalúa vulnerabilidades y exposición en las cargas de trabajo.',
		},
		b: {
			titulo: 'Mitigación de ataques de volumen',
			resumen:
				'AWS Shield absorbe y mitiga ataques de denegación de servicio distribuido (DDoS) que buscan saturar el servicio por volumen de tráfico.',
		},
		diferenciaClave:
			'GuardDuty e Inspector examinan y producen hallazgos sobre lo que ya ocurre o podría fallar; Shield actúa frente a un ataque en curso para preservar la disponibilidad. Detectar y mitigar son acciones complementarias, no sustitutas.',
		cuandoA: [
			'Cuando se quiere saber si hay comportamiento sospechoso o vulnerabilidades conocidas en las cargas de trabajo.',
			'Cuando el objetivo es generar hallazgos para priorizar la remediación.',
		],
		cuandoB: [
			'Cuando un ataque de volumen intenta dejar el servicio fuera de línea.',
			'Cuando se busca proteger la disponibilidad sin gestionar la mitigación manualmente.',
		],
		escenarioA:
			'La empresa recibe un aviso de tráfico hacia direcciones desconocidas y, en paralelo, revisa sus instancias para localizar vulnerabilidades conocidas.',
		escenarioB:
			'El mismo servicio sufre un pico masivo de tráfico dirigido a saturarlo y la mitigación del ataque la asume la protección gestionada frente a DDoS.',
		preguntaIds: ['2.2-q23'],
		objetivos: ['2.2#6'],
	},
	{
		id: 'cifrado-por-servicio-vs-por-cliente',
		etiqueta: 'Cifrado aplicado por el servicio frente a cifrado configurado por el cliente',
		a: {
			titulo: 'Cifrado gestionado por el servicio',
			resumen:
				'Algunos servicios aplican el cifrado en reposo de forma predeterminada y administran las claves, de modo que el cliente solo debe verificar que la opción esté activa.',
		},
		b: {
			titulo: 'Cifrado configurado por el cliente',
			resumen:
				'En otros servicios el cliente elige el método de cifrado, administra o selecciona las claves y decide qué datos se protegen, asumiendo esa configuración como parte de su responsabilidad.',
		},
		diferenciaClave:
			'Aunque el objetivo sea el mismo requisito de cifrado, el alcance y la gestión de claves cambian de un servicio a otro. Por eso hay que revisar cada servicio en lugar de dar por supuesto que el cifrado se aplica igual en todos.',
		cuandoA: [
			'Cuando el servicio ya cifra por defecto y solo hay que confirmar y documentar esa configuración.',
			'Cuando se prefiere delegar la gestión de claves en el servicio para simplificar la operación.',
		],
		cuandoB: [
			'Cuando el requisito exige control propio de las claves o elegir el método de cifrado.',
			'Cuando el servicio no aplica el cifrado por defecto y el cliente debe habilitarlo y configurarlo.',
		],
		escenarioA:
			'Un almacenamiento aplica el cifrado en reposo de forma predeterminada y la empresa solo verifica que esté activo en todos sus recursos.',
		escenarioB:
			'Otro servicio exige que el cliente seleccione el método y administre las claves, por lo que la empresa configura y documenta esa decisión para la auditoría.',
		preguntaIds: ['2.2-q24'],
		objetivos: ['2.2#9'],
	},
];
