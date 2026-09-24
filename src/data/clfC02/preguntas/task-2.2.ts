import type { PreguntaClfC02 } from '@/data/clfC02/types';

export const preguntasTask22: PreguntaClfC02[] = [
	{
		id: '2.2-q1',
		taskId: '2.2',
		objetivos: ['2.2#1'],
		tipo: 'conocimiento',
		question: '¿Qué describen los conceptos de compliance y governance en AWS?',
		options: [
			'Compliance es cumplir las normas y leyes aplicables; governance son las reglas y controles internos que sostienen ese cumplimiento.',
			'Compliance es el cifrado de los datos; governance es el modelo de responsabilidad compartida.',
			'Compliance es la región donde se alojan los datos; governance es la Availability Zone elegida.',
			'Ambos conceptos son sinónimos de la facturación mensual de la cuenta.',
		],
		correctAnswer: 0,
		explanation:
			'Compliance es cumplir las normas, leyes y estándares aplicables; governance es el conjunto de reglas, controles y procesos internos con los que la organización demuestra y mantiene ese cumplimiento a lo largo del tiempo.',
	},
	{
		id: '2.2-q2',
		taskId: '2.2',
		objetivos: ['2.2#1'],
		tipo: 'conocimiento',
		question:
			'Una empresa debe demostrar ante un auditor que sus controles de seguridad se aplican de forma constante. ¿Qué concepto describe ese conjunto de reglas y controles internos?',
		options: [
			'El cifrado en tránsito.',
			'La gobernanza (governance).',
			'El escalado automático.',
			'La latencia de red.',
		],
		correctAnswer: 1,
		explanation:
			'La gobernanza agrupa las reglas, controles y procesos internos que la organización aplica de manera constante para demostrar cumplimiento. El cifrado, el escalado y la latencia son capacidades o métricas concretas, no el marco de control.',
	},
	{
		id: '2.2-q3',
		taskId: '2.2',
		objetivos: ['2.2#2'],
		tipo: 'conocimiento',
		question: '¿Cuál es el principal beneficio de seguridad del cifrado de datos?',
		options: [
			'Aumenta la capacidad de cómputo disponible.',
			'Reduce la latencia de acceso a los datos.',
			'Hace que los datos sean ilegibles sin la clave, aunque un atacante consiga copiarlos.',
			'Elimina la necesidad de copias de seguridad y de control de acceso.',
		],
		correctAnswer: 2,
		explanation:
			'El cifrado protege la confidencialidad: sin la clave, el dato no es legible aunque se copie o se filtre. No aumenta el cómputo, no reduce latencia y no reemplaza al control de acceso ni a las copias de seguridad.',
	},
	{
		id: '2.2-q4',
		taskId: '2.2',
		objetivos: ['2.2#3'],
		tipo: 'escenario',
		question:
			'Un equipo necesita averiguar qué identidad eliminó un recurso y cuándo ocurrió. ¿Dónde está registrada esa actividad y cómo debe buscarla?',
		options: [
			'En las métricas de rendimiento del servicio de monitoreo.',
			'En el historial de llamadas a la API registrado por AWS CloudTrail, entregable a un bucket de Amazon S3 y consultable por identidad y fecha.',
			'En las reglas de configuración de los recursos cifrados.',
			'En los informes de cumplimiento publicados en AWS Artifact.',
		],
		correctAnswer: 1,
		explanation:
			'AWS CloudTrail registra las llamadas a la API con la identidad, el origen y la marca temporal de cada acción; sus eventos se pueden entregar a Amazon S3 y consultar por identidad y fecha. Las métricas no identifican autores y los informes de AWS Artifact son documentación de cumplimiento.',
	},
	{
		id: '2.2-q5',
		taskId: '2.2',
		objetivos: ['2.2#3'],
		tipo: 'conocimiento',
		question: '¿Dónde se capturan y localizan habitualmente los logs asociados a la seguridad?',
		options: [
			'Solo en la factura de la cuenta.',
			'En los paneles de precios y en el catálogo de servicios.',
			'En CloudWatch Logs para los logs operativos, en el historial de actividad de AWS CloudTrail para las llamadas a la API y en AWS Config para los cambios de configuración.',
			'Únicamente en los informes de cumplimiento emitidos por terceros.',
		],
		correctAnswer: 2,
		explanation:
			'Los logs se reparten según su origen: logs operativos en CloudWatch Logs, actividad de la API en AWS CloudTrail y cambios de configuración en AWS Config. Centralizarlos en Amazon S3 facilita la retención y las consultas.',
	},
	{
		id: '2.2-q6',
		taskId: '2.2',
		objetivos: ['2.2#4'],
		tipo: 'conocimiento',
		question: '¿Qué es AWS Artifact?',
		options: [
			'Un servicio de cifrado de discos.',
			'Un centro de recursos de autoservicio donde el cliente descarga informes de cumplimiento de AWS y acuerdos aplicables a su sector.',
			'Un servicio de monitoreo que crea alarmas sobre métricas.',
			'Una herramienta para estimar el coste mensual de una arquitectura.',
		],
		correctAnswer: 1,
		explanation:
			'AWS Artifact es el punto de autoservicio para obtener informes de auditoría y certificaciones de AWS y los acuerdos aplicables. No cifra datos, no monitorea métricas y no estima costes.',
	},
	{
		id: '2.2-q7',
		taskId: '2.2',
		objetivos: ['2.2#4'],
		tipo: 'servicio',
		question:
			'Un cliente debe entregar a su auditor los informes SOC e ISO de AWS y firmar un acuerdo comercial aplicable. ¿Qué servicio le permite obtenerlos sin abrir una incidencia de soporte?',
		options: ['AWS Artifact.', 'AWS CloudTrail.', 'Amazon GuardDuty.', 'AWS Config.'],
		correctAnswer: 0,
		explanation:
			'AWS Artifact es el centro de autoservicio de informes de cumplimiento y acuerdos de AWS. CloudTrail audita la actividad, GuardDuty detecta amenazas y Config registra la configuración; ninguno publica los informes de cumplimiento.',
	},
	{
		id: '2.2-q8',
		taskId: '2.2',
		objetivos: ['2.2#5'],
		tipo: 'escenario',
		question:
			'Una empresa de salud quiere operar en varios países y debe cumplir con normativas sanitarias locales y con requisitos de residencia de datos. ¿Qué afirmación es correcta?',
		options: [
			'Los requisitos de cumplimiento son idénticos en todas las geografías e industrias, por lo que basta una configuración única.',
			'El cumplimiento depende de la geografía y del sector: hay que revisar los informes y las condiciones aplicables antes de elegir región y servicios.',
			'El cumplimiento solo depende del cifrado en reposo, no de la ubicación de los datos.',
			'La responsabilidad del cumplimiento recae únicamente en AWS.',
		],
		correctAnswer: 1,
		explanation:
			'Las leyes de cada país o región y las normas de cada industria imponen obligaciones distintas, incluida la residencia de datos. El cliente debe revisar la documentación aplicable y diseñar en consecuencia; AWS aporta la evidencia y la seguridad de la infraestructura.',
	},
	{
		id: '2.2-q9',
		taskId: '2.2',
		objetivos: ['2.2#5'],
		tipo: 'conocimiento',
		question: '¿Por qué los requisitos de cumplimiento varían entre organizaciones?',
		options: [
			'Porque dependen de las leyes de cada país o región y de las normas de cada industria, además de los servicios y configuraciones que se utilicen.',
			'Porque AWS cambia las leyes de cada país.',
			'Porque el cifrado solo existe en algunas industrias.',
			'Porque solo las grandes empresas tienen obligaciones legales.',
		],
		correctAnswer: 0,
		explanation:
			'Las obligaciones nacen de la legislación de cada geografía y de la normativa de cada sector, y se concretan según los servicios y la configuración usados. Organizaciones de distintos países o industrias, por tanto, afrontan requisitos distintos.',
	},
	{
		id: '2.2-q10',
		taskId: '2.2',
		objetivos: ['2.2#6'],
		tipo: 'conocimiento',
		question:
			'Relaciona cada servicio de seguridad con su función principal. ¿Cuál asociación es correcta?',
		options: [
			'Amazon Inspector evalúa vulnerabilidades; Amazon GuardDuty detecta actividad maliciosa; AWS Security Hub centraliza hallazgos; AWS Shield protege frente a ataques de denegación de servicio distribuido (DDoS).',
			'Amazon Inspector protege frente a ataques de denegación de servicio distribuido y AWS Shield evalúa vulnerabilidades.',
			'Amazon GuardDuty cifra los datos y AWS Security Hub gestiona las claves.',
			'AWS Shield centraliza los hallazgos y Amazon Inspector detecta amenazas en la red.',
		],
		correctAnswer: 0,
		explanation:
			'Inspector busca vulnerabilidades en las cargas de trabajo, GuardDuty detecta actividad maliciosa, Security Hub centraliza y normaliza hallazgos y Shield mitiga ataques de denegación de servicio distribuido (DDoS). Las demás opciones intercambian las funciones.',
	},
	{
		id: '2.2-q11',
		taskId: '2.2',
		objetivos: ['2.2#6'],
		tipo: 'escenario',
		question:
			'Una aplicación recibe un volumen anómalo de tráfico que intenta dejarla fuera de servicio y, además, el equipo quiere detectar comportamiento sospechoso en la cuenta. ¿Qué combinación encaja mejor?',
		options: [
			'AWS Shield para mitigar el ataque de denegación de servicio distribuido (DDoS) y Amazon GuardDuty para detectar actividad maliciosa.',
			'AWS Config para mitigar el ataque y AWS CloudTrail para detectar el tráfico.',
			'Amazon CloudWatch para cifrar los datos y AWS Artifact para mitigar el ataque.',
			'AWS KMS para bloquear el tráfico y Amazon S3 para detectar la amenaza.',
		],
		correctAnswer: 0,
		explanation:
			'AWS Shield está diseñado para mitigar ataques de denegación de servicio distribuido (DDoS) y Amazon GuardDuty para detectar actividad maliciosa. Config y CloudTrail registran, CloudWatch monitorea y AWS KMS gestiona claves; ninguno mitiga tráfico malicioso.',
	},
	{
		id: '2.2-q12',
		taskId: '2.2',
		objetivos: ['2.2#7'],
		tipo: 'comparacion',
		question:
			'Un equipo debe explicar la diferencia entre cifrado en tránsito y cifrado en reposo. ¿Cuál afirmación es correcta?',
		options: [
			'El cifrado en tránsito protege los datos mientras se almacenan y el cifrado en reposo mientras viajan por la red.',
			'El cifrado en tránsito protege los datos mientras viajan por la red; el cifrado en reposo protege los datos almacenados, por ejemplo en un volumen o en un bucket.',
			'Ambos protegen exactamente el mismo momento del ciclo de vida del dato, por lo que solo hace falta aplicar uno.',
			'El cifrado en reposo se aplica únicamente al tráfico entre regiones.',
		],
		correctAnswer: 1,
		explanation:
			'El cifrado en tránsito protege el dato durante el recorrido por la red; el cifrado en reposo lo protege cuando está almacenado. Cubren momentos distintos y se complementan.',
	},
	{
		id: '2.2-q13',
		taskId: '2.2',
		objetivos: ['2.2#8'],
		tipo: 'comparacion',
		question:
			'Un equipo confunde monitoreo y auditoría. ¿Qué afirmación distingue correctamente Amazon CloudWatch de AWS CloudTrail?',
		options: [
			'CloudWatch registra las llamadas a la API y CloudTrail recoge métricas de rendimiento.',
			'CloudWatch recoge métricas, logs y alarmas sobre el funcionamiento del entorno; CloudTrail registra las llamadas a la API para saber quién hizo qué y cuándo.',
			'Ambos servicios solo sirven para calcular el coste mensual.',
			'CloudTrail sustituye a CloudWatch y hace innecesario el monitoreo.',
		],
		correctAnswer: 1,
		explanation:
			'Amazon CloudWatch aporta la visión operativa (métricas, logs y alarmas); AWS CloudTrail aporta la auditoría de actividad (llamadas a la API con autor y momento). Son funciones complementarias, no sustitutas.',
	},
	{
		id: '2.2-q14',
		taskId: '2.2',
		objetivos: ['2.2#8'],
		tipo: 'comparacion',
		question: '¿Qué diferencia hay entre AWS CloudTrail y AWS Config para la gobernanza?',
		options: [
			'CloudTrail guarda el historial de configuración de los recursos y AWS Config registra las llamadas a la API.',
			'CloudTrail registra la actividad de la API (quién hizo qué); AWS Config guarda el historial de configuración de los recursos y evalúa si cumplen las reglas.',
			'Los dos servicios son lo mismo y solo cambian de nombre.',
			'Ninguno de los dos guarda registros; solo generan alarmas.',
		],
		correctAnswer: 1,
		explanation:
			'AWS CloudTrail responde a «quién hizo qué y cuándo» con el registro de llamadas a la API; AWS Config responde a «en qué estado está la configuración y cumple las reglas» con su historial de configuración y evaluación. Ambos complementan la gobernanza.',
	},
	{
		id: '2.2-q15',
		taskId: '2.2',
		objetivos: ['2.2#8'],
		tipo: 'tradeoff',
		question:
			'La organización necesita monitoreo operativo, auditoría de seguridad y evaluación de cumplimiento de configuración, pero no puede abordar las tres cosas a la vez. ¿Qué razonamiento es correcto?',
		options: [
			'Basta con activar el monitoreo: si las métricas son correctas, la auditoría y el cumplimiento quedan cubiertos.',
			'Son tres necesidades distintas y complementarias: monitoreo con Amazon CloudWatch, auditoría con AWS CloudTrail y evaluación de configuración con AWS Config. Se pueden priorizar, pero una no cubre a las otras.',
			'La auditoría se puede sustituir por el monitoreo porque ambos generan logs.',
			'El cumplimiento de configuración se demuestra solo con cifrado en reposo.',
		],
		correctAnswer: 1,
		explanation:
			'Las tres necesidades son distintas: CloudWatch observa el funcionamiento, CloudTrail audita la actividad y Config evalúa la configuración. Priorizar su implantación es válido, pero ninguna cubre el propósito de las otras.',
	},
	{
		id: '2.2-q16',
		taskId: '2.2',
		objetivos: ['2.2#9'],
		tipo: 'conocimiento',
		question: '¿Por qué los requisitos de cumplimiento varían entre los distintos servicios de AWS?',
		options: [
			'Porque cada servicio tiene su propio alcance dentro del modelo de responsabilidad compartida, sus controles disponibles y sus informes, de modo que un requisito puede cumplirse de forma distinta según el servicio.',
			'Porque solo algunos servicios están sujetos a leyes.',
			'Porque el cifrado solo está disponible en un servicio concreto.',
			'Porque los informes de cumplimiento cambian según la hora del día.',
		],
		correctAnswer: 0,
		explanation:
			'Cada servicio define qué gestiona AWS y qué le corresponde al cliente, y ofrece distintos controles e informes. Por eso un mismo requisito se implementa o se evidencia de manera diferente según el servicio.',
	},
	{
		id: '2.2-q17',
		taskId: '2.2',
		objetivos: ['2.2#9'],
		tipo: 'escenario',
		question:
			'Una empresa debe cumplir un requisito de cifrado en reposo para sus datos. ¿Qué debe tener en cuenta al elegir entre varios servicios de AWS?',
		options: [
			'Que todos los servicios ofrecen exactamente las mismas opciones de cifrado y los mismos informes.',
			'Que las opciones de cifrado y las responsabilidades del cliente varían según el servicio, por lo que hay que revisar cómo cada servicio implementa el cifrado y qué controles delega en el cliente.',
			'Que el cifrado en reposo solo depende de la región elegida.',
			'Que el cumplimiento se garantiza activando el monitoreo.',
		],
		correctAnswer: 1,
		explanation:
			'Cada servicio implementa el cifrado con sus propias opciones y reparte las responsabilidades de forma distinta. Antes de dar por cumplido el requisito hay que revisar la configuración concreta del servicio y qué parte gestiona el cliente.',
	},
];
