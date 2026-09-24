import type { GrupoTematico } from '@/data/clfC02/types';

export const gruposTask22: GrupoTematico[] = [
	{
		id: '2.2-g1',
		titulo: 'Seguridad en la nube, cifrado y protección de datos',
		objetivos: ['2.2#1', '2.2#2', '2.2#7'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'La **seguridad en la nube** abarca mucho más que evitar intrusiones: incluye **cifrado**, **control de acceso**, **visibilidad** y **cumplimiento**. Bajo el modelo de responsabilidad compartida, AWS protege la infraestructura y el cliente protege sus datos, sus identidades y la configuración de sus recursos.\n\nConviene separar dos conceptos que suelen confundirse:\n\n- **Compliance (cumplimiento)**: cumplir las normas, leyes y estándares que aplican a la organización, por ejemplo la protección de datos personales o la normativa de un sector concreto.\n- **Governance (gobernanza)**: las reglas, controles y procesos internos con los que la organización demuestra y sostiene ese cumplimiento en el tiempo.\n\nEl **cifrado** es el beneficio de seguridad más citado porque reduce el impacto de una exposición: aunque un dato se copie o se filtre, sin la clave no es legible. Se aplica en dos momentos que hay que distinguir: **en tránsito** (mientras viaja por la red) y **en reposo** (cuando está almacenado). Ninguno sustituye al control de acceso ni a las copias de seguridad: se complementan.',
			},
			{
				tipo: 'comparacion',
				parId: 'cifrado-en-transito-vs-en-reposo',
			},
			{
				tipo: 'ejemplo',
				md: '```text\nCifrado en reposo:\n  el dato guardado no es legible sin la clave\n  se gestiona con claves, por ejemplo con AWS KMS\n\nCifrado en tránsito:\n  el dato viaja protegido entre el cliente y el servicio\n  se apoya en TLS/HTTPS en los endpoints\n\nAmbos se complementan:\n  no basta con cifrar solo uno de los dos momentos\n```',
			},
			{
				tipo: 'errorComun',
				error: 'Creer que basta con cifrar los datos en reposo porque el tráfico interno «ya está dentro» de la infraestructura.',
				correccion:
					'El cifrado en reposo y el cifrado en tránsito cubren riesgos distintos y no se sustituyen. Los datos también viajan entre servicios, entre cuentas y hacia el usuario; ese recorrido necesita cifrado en tránsito además del cifrado en reposo.',
			},
			{
				tipo: 'clave',
				items: [
					'Compliance = cumplir normas y leyes aplicables; governance = reglas y controles internos que lo sostienen.',
					'El cifrado reduce el impacto de una exposición: sin la clave, el dato es ilegible.',
					'Cifrado en tránsito protege el dato mientras viaja; cifrado en reposo lo protege mientras está almacenado.',
					'El cifrado es un beneficio de la nube, pero no reemplaza al control de acceso ni a las copias de seguridad.',
				],
			},
		],
		preguntasGuia: [
			'¿En qué se diferencian compliance y governance?',
			'¿Por qué el cifrado se considera un beneficio de seguridad clave?',
			'¿Qué protege el cifrado en tránsito y qué protege el cifrado en reposo?',
		],
	},
	{
		id: '2.2-g2',
		titulo: 'Monitoreo, auditoría y cumplimiento de configuración',
		objetivos: ['2.2#3', '2.2#8'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'La gobernanza en la nube responde a tres preguntas distintas, y cada una tiene su herramienta:\n\n- **¿Cómo está funcionando el entorno?** → **monitoreo**. **Amazon CloudWatch** recoge métricas, logs y eventos, y permite crear alarmas cuando se cruza un umbral.\n- **¿Quién hizo qué y cuándo?** → **auditoría**. **AWS CloudTrail** registra las llamadas a la API realizadas en la cuenta: la identidad, el origen y el momento de cada acción.\n- **¿En qué estado está la configuración y cumple las reglas?** → **cumplimiento de configuración**. **AWS Config** guarda el historial de configuración de los recursos y evalúa si cumplen las reglas definidas.\n\nLos **logs de seguridad** se capturan y localizan en varios sitios: los logs operativos van a **CloudWatch Logs**, la actividad de la API queda en **AWS CloudTrail** (cuyos eventos se pueden entregar a un bucket de **Amazon S3**) y los cambios de configuración en **AWS Config**. Conocer dónde vive cada registro es imprescindible para investigar un incidente o preparar una auditoría.',
			},
			{
				tipo: 'comparacion',
				parId: 'cloudwatch-vs-cloudtrail-vs-config',
			},
			{
				tipo: 'escenario',
				situacion:
					'Un auditor pregunta qué identidad eliminó un recurso, cuándo ocurrió y si la configuración del recurso se había desviado antes de lo permitido.',
				analisis:
					'**AWS CloudTrail** aporta el historial de llamadas a la API con la identidad y la marca temporal; **AWS Config** aporta el historial de configuración del recurso y el resultado de las reglas; **Amazon CloudWatch** suma métricas y logs de operación para ver qué estaba pasando en ese momento. Los tres registros se consultan juntos en una investigación.',
				servicio: 'AWS CloudTrail',
			},
			{
				tipo: 'ejemplo',
				md: '```text\nNecesidad -> servicio\n- ¿Quién cambió este recurso?       -> AWS CloudTrail\n- ¿Está configurado como exige la norma? -> AWS Config\n- ¿Cómo responde el sistema y cuándo alerta? -> Amazon CloudWatch\n\nLos registros se centralizan para retención y consulta:\n  eventos de AWS CloudTrail y logs en Amazon S3 o CloudWatch Logs\n```',
			},
			{
				tipo: 'errorComun',
				error: 'Usar Amazon CloudWatch como si fuera un registro de auditoría y creer que sus métricas demuestran quién hizo un cambio.',
				correccion:
					'CloudWatch describe el funcionamiento del sistema; la autoría de las acciones la registra AWS CloudTrail y el estado de la configuración lo registra AWS Config. Para una auditoría se necesitan los registros de actividad y de configuración, no solo las métricas.',
			},
			{
				tipo: 'clave',
				items: [
					'Amazon CloudWatch = monitoreo con métricas, logs y alarmas del funcionamiento.',
					'AWS CloudTrail = auditoría; registra las llamadas a la API y responde quién hizo qué y cuándo.',
					'AWS Config = historial de configuración de los recursos y evaluación frente a reglas.',
					'Los logs de seguridad se buscan en CloudWatch Logs, en el historial de AWS CloudTrail y en AWS Config, según el tipo de registro.',
				],
			},
		],
		preguntasGuia: [
			'¿Qué pregunta responde cada uno: CloudWatch, CloudTrail y Config?',
			'¿Dónde se capturan y localizan los logs asociados a la seguridad?',
			'¿Por qué las métricas de monitoreo no sustituyen a un registro de auditoría?',
		],
	},
	{
		id: '2.2-g3',
		titulo: 'Información de cumplimiento y variación por geografía e industria',
		objetivos: ['2.2#4', '2.2#5'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'La información de cumplimiento de AWS se consulta sin abrir incidencias de soporte: **AWS Artifact** es un centro de autoservicio donde el cliente descarga los informes de auditoría y certificaciones de AWS (por ejemplo, informes SOC e ISO) y los acuerdos y condiciones aplicables.\n\nEl cumplimiento **no es el mismo para todos**: depende de dos ejes.\n\n- **Geografía**: las leyes de cada país o región imponen obligaciones distintas, como la residencia de los datos personales.\n- **Industria**: sectores como salud, finanzas o comercio electrónico tienen normas propias (por ejemplo, normativa sanitaria o estándares de pago).\n\nCuando cambia el requisito, cambia la configuración: hay que elegir la región adecuada, los servicios y controles que lo soportan y los informes que lo evidencian. La responsabilidad de cumplir con la normativa propia del cliente es del cliente; AWS facilita la evidencia y la seguridad de la infraestructura.',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Usa AWS Artifact cuando un auditor o un área legal pida informes de cumplimiento, certificaciones o acuerdos de AWS.',
					'Revisa los requisitos de la geografía y de la industria antes de elegir la región y los servicios de un sistema.',
					'Conserva la evidencia de cumplimiento junto con la configuración aplicada para poder demostrarla en auditorías.',
				],
				noUsar: [
					'No asumas que un informe de AWS cubre los controles del cliente: la evidencia de AWS no demuestra la configuración de tu cuenta.',
					'No apliques la misma configuración en todas las geografías sin revisar las obligaciones locales y sectoriales.',
				],
			},
			{
				tipo: 'errorComun',
				error: 'Pensar que los requisitos de cumplimiento son iguales en todos los países y sectores, o que AWS es responsable de cumplirlos por el cliente.',
				correccion:
					'Cada geografía y cada industria imponen obligaciones distintas, y el cliente conserva la responsabilidad de su propio cumplimiento. AWS proporciona la evidencia y la seguridad de la infraestructura mediante recursos como AWS Artifact.',
			},
			{
				tipo: 'clave',
				items: [
					'AWS Artifact = centro de recursos para descargar informes de cumplimiento y acuerdos de AWS.',
					'Los requisitos de cumplimiento varían por geografía (leyes locales) y por industria (normas del sector).',
					'El cliente cumple su propia normativa; AWS aporta evidencia e infraestructura.',
					'Antes de diseñar, revisa qué región, servicios y controles exige el requisito aplicable.',
				],
			},
		],
		preguntasGuia: [
			'¿Dónde se encuentra la información de cumplimiento de AWS y qué se puede descargar?',
			'¿Qué dos ejes hacen variar los requisitos de cumplimiento?',
			'¿Quién es responsable de cumplir la normativa propia del cliente?',
		],
	},
	{
		id: '2.2-g4',
		titulo: 'Servicios de detección y protección gestionada',
		objetivos: ['2.2#6', '2.2#9'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'Un cliente asegura sus recursos combinando servicios gestionados de detección y protección, cada uno con un foco distinto:\n\n- **Amazon Inspector**: detecta vulnerabilidades y exposición en las cargas de trabajo.\n- **Amazon GuardDuty**: detecta actividad maliciosa y comportamiento anómalo a partir de registros y señales de la cuenta.\n- **AWS Security Hub**: centraliza y normaliza los hallazgos de seguridad para verlos en un solo lugar.\n- **AWS Shield**: protege frente a ataques de denegación de servicio distribuido (DDoS).\n- **AWS WAF**: filtra el tráfico web malintencionado que llega a una aplicación.\n- **Amazon Macie**: descubre y clasifica datos sensibles almacenados.\n- **Amazon Detective**: ayuda a investigar la causa de un hallazgo.\n- **AWS Firewall Manager**: aplica políticas de protección de forma centralizada.\n\nLos **requisitos de cumplimiento varían según el servicio**: cada servicio tiene su propio alcance dentro del modelo de responsabilidad compartida, sus controles disponibles y sus informes. Un requisito de cifrado, por ejemplo, se cumple de forma distinta según cómo cada servicio gestione las claves y qué delegue en el cliente.',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Usa Amazon GuardDuty para detectar amenazas y AWS Shield para mitigar ataques de denegación de servicio distribuido (DDoS).',
					'Usa Amazon Inspector para vulnerabilidades, AWS Security Hub para centralizar hallazgos y Amazon Macie para datos sensibles.',
					'Comprueba, servicio a servicio, cómo se implementa el control exigido y qué parte queda del lado del cliente.',
				],
				noUsar: [
					'No esperes que un solo servicio de seguridad cubra detección, mitigación, inventario y cumplimiento a la vez: se complementan.',
					'No asumas que un requisito se cumple igual en todos los servicios: revisa el alcance y los controles de cada uno.',
				],
			},
			{
				tipo: 'escenario',
				situacion:
					'Una empresa recibe un pico de tráfico que intenta dejar su web fuera de servicio y, a la vez, quiere detectar de forma automática comportamiento sospechoso en su cuenta.',
				analisis:
					'**AWS Shield** mitiga el ataque de denegación de servicio distribuido (DDoS) sobre la aplicación, y **Amazon GuardDuty** analiza señales y registros para detectar actividad maliciosa. Son focos distintos y complementarios dentro del mismo modelo de responsabilidad compartida.',
				servicio: 'Amazon GuardDuty',
			},
			{
				tipo: 'errorComun',
				error: 'Suponer que un servicio de seguridad de AWS cubre todas las capas y que su activación exime al cliente de configurar sus propios controles.',
				correccion:
					'Cada servicio cubre un foco concreto (vulnerabilidades, amenazas, DDoS, tráfico web) y su cobertura depende de que el cliente lo configure y lo aplique a sus recursos. La seguridad del cliente sigue siendo responsabilidad del cliente.',
			},
			{
				tipo: 'clave',
				items: [
					'Amazon Inspector = vulnerabilidades; Amazon GuardDuty = actividad maliciosa; AWS Security Hub = hallazgos centralizados; AWS Shield = ataques de denegación de servicio distribuido (DDoS).',
					'AWS WAF filtra tráfico web, Amazon Macie descubre datos sensibles y Amazon Detective investiga hallazgos.',
					'Los requisitos de cumplimiento cambian según el servicio: distinto alcance, distintos controles y distintos informes.',
					'Los servicios de seguridad se complementan; ninguno cubre todo el modelo de responsabilidad compartida por sí solo.',
				],
			},
		],
		preguntasGuia: [
			'¿Qué protege cada uno: Amazon Inspector, Amazon GuardDuty, AWS Security Hub y AWS Shield?',
			'¿Por qué los requisitos de cumplimiento varían entre servicios de AWS?',
			'¿Qué parte del modelo de responsabilidad compartida sigue cubriendo el cliente?',
		],
	},
];
