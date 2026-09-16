import type { GrupoTematico } from '@/data/aifC01/types';

export const gruposTask52: GrupoTematico[] = [
	{
		id: '5.2-g1',
		titulo: 'Servicios para cumplimiento y auditoría',
		objetivos: ['5.2#1'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'El cumplimiento normativo se apoya en servicios que responden a preguntas distintas:\n\n- **AWS CloudTrail**: ¿quién hizo qué? Registra la actividad de la API y constituye la traza de auditoría.\n- **AWS Config**: ¿cómo está configurado un recurso y cómo ha cambiado? Evalúa la configuración frente a reglas y guarda el historial.\n- **Amazon Inspector**: ¿tiene vulnerabilidades mi carga de trabajo? Realiza análisis continuo de vulnerabilidades.\n- **AWS Artifact**: ¿qué evidencia de cumplimiento puedo entregar? Da acceso a informes y acuerdos del proveedor.\n- **AWS Trusted Advisor**: ¿qué debería mejorar? Aporta recomendaciones de buenas prácticas.\n\n**Amazon Macie** complementa esta capa al descubrir y clasificar datos sensibles almacenados en **Amazon S3**, información que alimenta las estrategias de gobernanza del dato. Cada servicio responde a una pregunta de gobierno diferente: auditoría, configuración, vulnerabilidades, evidencia y recomendación. Ninguno sustituye a los demás.',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Necesitas reconstruir quién invocó una API y cuándo: **AWS CloudTrail**.',
					'Quieres detectar desviaciones de configuración respecto a una línea base: **AWS Config**.',
					'Debes entregar a un auditor los informes de cumplimiento del proveedor: **AWS Artifact**.',
					'Buscas vulnerabilidades abiertas en cargas de trabajo: **Amazon Inspector**.',
				],
				noUsar: [
					'No uses **AWS CloudTrail** para vigilar el rendimiento en tiempo real: eso es observabilidad, no auditoría.',
					'No trates **AWS Trusted Advisor** como un control automático: sus recomendaciones se revisan y se deciden.',
				],
			},
			{
				tipo: 'servicio',
				nombre: 'AWS Config',
			},
			{
				tipo: 'ejemplo',
				md: 'Ante una auditoría, el equipo prepara cuatro evidencias distintas:\n\n1. La traza de **AWS CloudTrail** con las llamadas a la API del periodo.\n2. El historial de **AWS Config** con las desviaciones de configuración y su corrección.\n3. El informe de vulnerabilidades abiertas de **Amazon Inspector** y su plan de remediación.\n4. Los informes de cumplimiento descargados desde **AWS Artifact**.\n\nCada evidencia responde a una pregunta diferente del auditor; presentar solo una deja el resto sin cubrir.',
			},
		],
		preguntasGuia: [
			'¿Qué servicio deja la traza de quién modificó o eliminó un recurso y cuándo?',
			'¿Dónde buscarías el historial de configuración de un recurso frente a una regla?',
			'¿Con qué servicio obtendrías los informes de cumplimiento del proveedor?',
		],
	},
	{
		id: '5.2-g2',
		titulo: 'Gobernanza del dato: ciclo de vida, residencia y retención',
		objetivos: ['5.2#2', '5.2#3'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'La gobernanza del dato ordena el ciclo de vida completo: **creación**, **uso y compartición**, **almacenamiento**, **archivado** y **eliminación**. Sobre ese ciclo se apoyan varios controles que suelen confundirse entre sí:\n\n- **Logging**: registrar accesos y operaciones para poder reconstruir qué ocurrió con cada dato.\n- **Monitoring**: vigilar el estado del dato y de los sistemas que lo tratan mediante métricas, alarmas y paneles.\n- **Observation**: interpretar esa vigilancia para detectar patrones anómalos, no solo umbrales puntuales.\n- **Residencia**: fijar en qué ubicación geográfica se almacena y se procesa el dato y qué transferencias se permiten.\n- **Retención**: definir cuánto tiempo se conserva y con qué método verificable se elimina al final del plazo.\n\nLas políticas de ciclo de vida de **Amazon S3** automatizan la transición a clases de archivo como **Amazon S3 Glacier** y la expiración programada, y servicios como **Amazon Macie** aportan el inventario de datos sensibles que hace posible clasificar y gobernar. La gobernanza no es solo una configuración técnica: exige dueños del dato, clasificación, controles de acceso y evidencia de que la política se cumple. La estrategia también define quién puede acceder al dato, con qué finalidad y cómo se responde ante una solicitud de acceso o de supresión.',
			},
			{
				tipo: 'comparacion',
				parId: 'residency-vs-retention',
			},
			{
				tipo: 'escenario',
				situacion:
					'Una normativa exige que los datos de clientes se almacenen y procesen dentro de un país concreto y que se conserven siete años antes de eliminarlos. El equipo confunde ambos requisitos y borra datos a los 90 días «por privacidad». El resultado es que incumple los dos a la vez: conserva de menos y no puede demostrar dónde se procesó el dato.',
				analisis:
					'Son dos controles independientes: la **residencia** fija la ubicación y la **retención** fija el plazo. Se combinan políticas de ciclo de vida en **Amazon S3** —clase de archivo y expiración a los siete años— con controles que impiden el procesamiento fuera de la ubicación permitida.',
				servicio: 'Amazon S3 Glacier',
			},
			{
				tipo: 'errorComun',
				error: 'Creer que residencia y retención son lo mismo: cumplir el plazo de conservación no garantiza que el dato esté en la ubicación exigida, ni al contrario.',
				correccion:
					'Trata cada requisito por separado y documéntalos: ubicación de almacenamiento y procesamiento por un lado, plazo y método de eliminación verificable por el otro.',
			},
			{
				tipo: 'clave',
				items: [
					'Ciclo de vida: creación, uso, almacenamiento, archivado y eliminación.',
					'Residencia = dónde está el dato; retención = cuánto tiempo se queda.',
					'Sin logging ni monitoring no hay evidencia de que la política se cumpla.',
				],
			},
			{
				tipo: 'ejemplo',
				md: '```text\nPolítica de ciclo de vida (ejemplo):\n- Días 0-90: clase estándar, acceso frecuente.\n- Día 91: transición a Amazon S3 Glacier.\n- Día 2555 (7 años): expiración y eliminación.\n- Registro de cada transición y borrado para la auditoría.\n```',
			},
		],
		preguntasGuia: [
			'¿Qué diferencia hay entre decidir dónde vive un dato y decidir cuánto tiempo se conserva?',
			'¿Qué etapa del ciclo de vida conviene automatizar para que la retención sea verificable?',
			'¿Con qué evidencia demuestras que una política de gobernanza se cumple de verdad?',
		],
	},
	{
		id: '5.2-g3',
		titulo: 'Procesos para seguir los protocolos de governance',
		objetivos: ['5.2#3'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'Seguir un protocolo de governance es un proceso, no un documento. El proceso se compone de:\n\n- **Políticas**: qué se permite, qué se prohíbe y quién responde por cada control.\n- **Cadencia de revisión**: cada cuánto se revisan la política y los casos de uso en producción.\n- **Estrategias de revisión**: revisión por muestreo, revisión automatizada con reglas y revisión por comité de riesgo, combinadas según la criticidad.\n- **Marcos de governance**: estructuras como la **Generative AI Security Scoping Matrix**, que clasifica un caso de uso generativo en un alcance de seguridad y deriva los controles esperados.\n- **Estándares de transparencia**: documentar qué hace el sistema, con qué datos se alimenta y cuáles son sus límites; **Amazon SageMaker Model Cards** es un formato útil para ello.\n- **Formación del equipo**: ninguna política se sostiene si quien la ejecuta no la entiende.\n\nEl proceso se cierra con evidencia: registros de revisión, decisiones y responsables trazables.',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Antes de aprobar un caso de uso generativo: clasifícalo con la **Generative AI Security Scoping Matrix** y deriva los controles.',
					'Cuando cambian el riesgo, el modelo o la regulación: adelanta la cadencia de revisión.',
					'Al incorporar personal nuevo: incluye la formación en la política como requisito de acceso.',
				],
				noUsar: [
					'No conviertas el marco en un trámite anual: sin revisión real no hay governance.',
					'No uses la formación como sustituto de los controles técnicos ni de la evidencia.',
				],
			},
			{
				tipo: 'servicio',
				nombre: 'Amazon Bedrock',
			},
			{
				tipo: 'ejemplo',
				md: '```text\nProtocolo de revisión trimestral:\n1. Inventario de casos de uso generativos en producción.\n2. Clasificación del alcance de seguridad de cada uno.\n3. Revisión por muestreo de respuestas y de logs.\n4. Actualización de la política y de la formación si cambian los controles.\n5. Registro de la decisión y del responsable.\n```',
			},
		],
		preguntasGuia: [
			'¿Qué convierte una política escrita en un protocolo que el equipo sigue de verdad?',
			'¿Por qué conviene clasificar el alcance de seguridad de un caso de uso generativo antes de aprobarlo?',
			'¿Qué formato deja constancia transparente de los límites de un sistema generativo?',
		],
	},
	{
		id: '5.2-g4',
		titulo: 'Auditoría de la API frente a observabilidad operativa',
		objetivos: ['5.2#1'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'Auditoría y observabilidad se confunden porque ambas producen registros, pero responden a preguntas distintas.\n\n- **AWS CloudTrail** registra la actividad de la API: quién, qué, cuándo y desde dónde se realizó una operación. Es la evidencia de auditoría y de cumplimiento.\n- **Amazon CloudWatch** recoge métricas, logs y alarmas para vigilar el rendimiento y el estado de las aplicaciones en tiempo real. Es observabilidad operativa.\n\nUn sistema puede estar perfectamente observable —latencia baja y sin errores— y aun así el equipo no saber quién eliminó una política de retención, porque esa respuesta vive en la traza de auditoría. El **AWS shared responsibility model** reparte qué controles asume el cliente, y los controles de cumplimiento se apoyan en la traza, no en las métricas.',
			},
			{
				tipo: 'comparacion',
				parId: 'cloudtrail-vs-cloudwatch',
			},
			{
				tipo: 'errorComun',
				error: 'Buscar en las métricas de **Amazon CloudWatch** quién modificó un permiso y concluir que «no queda registro», cuando el evento sí está en la actividad de la API.',
				correccion:
					'Reserva la observabilidad para el comportamiento del sistema y la traza de auditoría para las acciones sobre los recursos.',
			},
			{
				tipo: 'ejemplo',
				md: 'Un incidente obliga a responder a dos preguntas: «¿por qué el servicio tardaba el doble ayer?» y «¿quién cambió el permiso que lo desencadenó?». La primera se responde con métricas y alarmas de **Amazon CloudWatch**; la segunda, con la traza de **AWS CloudTrail**.',
			},
		],
		preguntasGuia: [
			'¿Qué servicio responde a «quién eliminó esta política» y cuál a «cómo va el sistema ahora»?',
			'¿Por qué un panel de métricas en verde no demuestra cumplimiento normativo?',
			'¿Qué pregunta de gobierno responde cada tipo de registro?',
		],
	},
];
