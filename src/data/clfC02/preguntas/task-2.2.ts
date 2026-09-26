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
			'Compliance es el cifrado de los datos en reposo; governance es el modelo de responsabilidad compartida entre AWS y el cliente en todas las cuentas.',
			'Compliance es la región donde se alojan los datos; governance es la Availability Zone que se elige para cada recurso.',
			'Ambos conceptos son sinónimos de la facturación mensual y del reparto de costes entre las cuentas de la organización.',
		],
		correctAnswer: 0,
		explanation:
			'Compliance es cumplir las normas, leyes y estándares aplicables; governance es el conjunto de reglas, controles y procesos internos con los que la organización demuestra y mantiene ese cumplimiento a lo largo del tiempo. El cifrado es un control concreto, no el concepto global. Si el escenario pidiera el marco interno, la respuesta sería governance.',
		porQueOpcion: [
			'Correcta: compliance es cumplir las normas y governance son las reglas y controles internos que lo sostienen.',
			'Incorrecta: el cifrado es un control concreto y el modelo de responsabilidad no define governance.',
			'Incorrecta: la región y la zona de disponibilidad son ubicaciones, no estos conceptos.',
			'Incorrecta: la facturación y el reparto de costes no tienen relación con compliance y governance.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html',
		],
	},
	{
		id: '2.2-q2',
		taskId: '2.2',
		objetivos: ['2.2#1'],
		tipo: 'conocimiento',
		question:
			'Una empresa debe demostrar ante un auditor que sus controles de seguridad se aplican de forma constante. ¿Qué concepto describe ese conjunto de reglas y controles internos?',
		options: [
			'El cifrado en tránsito de los datos.',
			'La gobernanza (governance).',
			'El escalado automático de la capacidad.',
			'La latencia de red entre regiones.',
		],
		correctAnswer: 1,
		explanation:
			'La gobernanza agrupa las reglas, controles y procesos internos que la organización aplica de manera constante para demostrar cumplimiento. El cifrado, el escalado y la latencia son capacidades o métricas concretas, no el marco de control. Si el requisito aludiera a una obligación externa y no al marco interno, la respuesta sería compliance.',
		porQueOpcion: [
			'Incorrecta: el cifrado en tránsito es un control técnico concreto, no el marco de reglas internas.',
			'Correcta: la gobernanza es el conjunto de reglas y controles internos que se aplican de forma constante.',
			'Incorrecta: el escalado automático es una capacidad de capacidad, no un marco de control.',
			'Incorrecta: la latencia entre regiones es una métrica de red, no gobernanza.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html',
		],
	},
	{
		id: '2.2-q3',
		taskId: '2.2',
		objetivos: ['2.2#2'],
		tipo: 'conocimiento',
		question: '¿Cuál es el principal beneficio de seguridad del cifrado de datos?',
		options: [
			'Aumenta la capacidad de cómputo disponible y el rendimiento de los servicios que tratan los datos en la cuenta.',
			'Reduce la latencia de acceso a los datos almacenados y al tráfico en tránsito entre regiones.',
			'Hace que los datos sean ilegibles sin la clave, aunque un atacante consiga copiarlos.',
			'Elimina la necesidad de copias de seguridad y de control de acceso.',
		],
		correctAnswer: 2,
		explanation:
			'El cifrado protege la confidencialidad: sin la clave, el dato no es legible aunque se copie o se filtre. No aumenta el cómputo, no reduce latencia y no reemplaza al control de acceso ni a las copias de seguridad. Si cambia el objetivo a la disponibilidad de los datos, la respuesta se centraría en copias y redundancia.',
		porQueOpcion: [
			'Incorrecta: el cifrado no aumenta la capacidad de cómputo ni el rendimiento.',
			'Incorrecta: el cifrado no reduce la latencia de acceso ni del tráfico.',
			'Correcta: el cifrado protege la confidencialidad y hace el dato ilegible sin la clave.',
			'Incorrecta: el cifrado complementa, pero no sustituye las copias de seguridad ni el control de acceso.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html',
		],
	},
	{
		id: '2.2-q4',
		taskId: '2.2',
		objetivos: ['2.2#3'],
		tipo: 'escenario',
		question:
			'Un equipo reducido necesita averiguar qué identidad eliminó un recurso y cuándo ocurrió. Aunque todavía no cuenta con un proceso de auditoría formal, debe localizar esa actividad. ¿Dónde está registrada y cómo debe buscarla?',
		options: [
			'En las métricas de rendimiento y las alarmas del servicio de monitoreo, que identifican al autor de cada cambio realizado y el momento exacto en que se realizó cada cambio.',
			'En el historial de llamadas a la API registrado por AWS CloudTrail, entregable a un bucket de Amazon S3 y consultable por identidad y fecha.',
			'En las reglas de configuración de los recursos cifrados, que guardan la identidad de quien eliminó cada recurso.',
			'En los informes de cumplimiento publicados y en los acuerdos disponibles para descargar desde el portal de auditoría.',
		],
		correctAnswer: 1,
		explanation:
			'AWS CloudTrail registra las llamadas a la API con la identidad, el origen y la marca temporal de cada acción; sus eventos se pueden entregar a Amazon S3 y consultar por identidad y fecha. Las métricas no identifican autores y los informes de cumplimiento no registran actividad. Si el requisito pidiera el estado de la configuración, la respuesta sería AWS Config.',
		porQueOpcion: [
			'Incorrecta: las métricas y alarmas muestran rendimiento, no la identidad que hizo cada cambio.',
			'Correcta: CloudTrail registra las llamadas a la API y permite consultarlas por identidad y fecha.',
			'Incorrecta: las reglas de configuración no guardan la identidad que eliminó un recurso.',
			'Incorrecta: los informes de cumplimiento no registran la actividad de la cuenta.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/cloudtrail/',
			'https://docs.aws.amazon.com/s3/',
			'https://docs.aws.amazon.com/config/',
		],
	},
	{
		id: '2.2-q5',
		taskId: '2.2',
		objetivos: ['2.2#3'],
		tipo: 'conocimiento',
		question: '¿Dónde se capturan y localizan habitualmente los logs asociados a la seguridad?',
		options: [
			'Únicamente en la factura mensual de la cuenta, que detalla el consumo de cada servicio y su coste por región, sin incluir registros de actividad.',
			'En los paneles de precios, en el catálogo de servicios y en las hojas de cálculo de estimación de costes, que no contienen registros.',
			'En CloudWatch Logs para los logs operativos, en el historial de actividad de AWS CloudTrail para las llamadas a la API y en AWS Config para los cambios de configuración.',
			'Únicamente en los informes de cumplimiento emitidos por auditores externos y publicados en el portal de cumplimiento, que no recogen la actividad técnica ni los cambios de configuración.',
		],
		correctAnswer: 2,
		explanation:
			'Los logs se reparten según su origen: logs operativos en CloudWatch Logs, actividad de la API en AWS CloudTrail y cambios de configuración en AWS Config. Centralizarlos en Amazon S3 facilita la retención y las consultas. Si cambia el tipo de registro a la actividad de la API, la respuesta apuntaría al historial de AWS CloudTrail.',
		porQueOpcion: [
			'Incorrecta: la factura detalla consumo y coste, no registros de actividad.',
			'Incorrecta: los paneles de precios y el catálogo no contienen logs.',
			'Correcta: los logs se reparten entre CloudWatch Logs, CloudTrail y AWS Config según su origen.',
			'Incorrecta: los informes de auditores externos no recogen la actividad técnica ni los cambios.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/cloudtrail/',
			'https://docs.aws.amazon.com/config/',
			'https://docs.aws.amazon.com/s3/',
			'https://docs.aws.amazon.com/cloudwatch/',
		],
	},
	{
		id: '2.2-q6',
		taskId: '2.2',
		objetivos: ['2.2#4'],
		tipo: 'conocimiento',
		question:
			'Un cliente necesita las certificaciones y los informes de cumplimiento de AWS para una auditoría. ¿Qué servicio de AWS los ofrece en autoservicio?',
		options: [
			'Un centro de autoservicio con informes de cumplimiento de AWS y acuerdos aplicables.',
			'Un servicio que cifra en reposo los volúmenes y las bases de datos con claves propias del cliente.',
			'Una consola que reúne métricas, logs y alarmas del rendimiento de los recursos de la cuenta.',
			'Una herramienta que estima el coste mensual de una arquitectura antes de desplegarla.',
		],
		correctAnswer: 0,
		explanation:
			'AWS Artifact es el punto de autoservicio para obtener informes de auditoría, certificaciones de AWS y los acuerdos aplicables a cada sector. No cifra datos, no reúne métricas y no estima costes. Si el requisito fuera demostrar el estado de configuración de los propios recursos, la respuesta sería AWS Config.',
		porQueOpcion: [
			'Correcta: AWS Artifact es el centro de autoservicio de informes de cumplimiento y acuerdos.',
			'Incorrecta: el servicio que cifra volúmenes y bases de datos no entrega certificaciones.',
			'Incorrecta: la consola de métricas, logs y alarmas es monitoreo, no informes de cumplimiento.',
			'Incorrecta: la herramienta de estimación de costes no ofrece informes de auditoría.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/artifact/',
			'https://docs.aws.amazon.com/config/',
		],
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
			'AWS Artifact es el centro de autoservicio de informes de cumplimiento y acuerdos de AWS. CloudTrail audita la actividad, GuardDuty detecta amenazas y Config registra la configuración; ninguno publica los informes de cumplimiento. Si el requisito fuera demostrar el estado de configuración de los propios recursos, la respuesta sería AWS Config.',
		porQueOpcion: [
			'Correcta: AWS Artifact entrega los informes SOC e ISO y los acuerdos sin abrir incidencia.',
			'Incorrecta: CloudTrail registra la actividad de la API, no publica informes de cumplimiento.',
			'Incorrecta: GuardDuty detecta amenazas, no entrega informes de auditoría.',
			'Incorrecta: AWS Config evalúa la configuración, no publica certificaciones ni acuerdos.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/artifact/',
			'https://docs.aws.amazon.com/cloudtrail/',
			'https://docs.aws.amazon.com/guardduty/',
			'https://docs.aws.amazon.com/config/',
		],
	},
	{
		id: '2.2-q8',
		taskId: '2.2',
		objetivos: ['2.2#5'],
		tipo: 'escenario',
		question:
			'Una empresa de salud quiere operar en varios países y debe cumplir con normativas sanitarias locales y con requisitos de residencia de datos. ¿Qué afirmación es correcta?',
		options: [
			'Los requisitos de cumplimiento son idénticos en todas las geografías e industrias, por lo que basta una única configuración global sin revisar las leyes locales ni las normas de cada sector.',
			'El cumplimiento depende de la geografía y del sector: hay que revisar los informes y las condiciones aplicables antes de elegir región y servicios.',
			'El cumplimiento solo depende del cifrado en reposo y no de la ubicación geográfica donde se almacenan los datos personales.',
			'La responsabilidad del cumplimiento recae únicamente sobre AWS y el cliente no debe revisar normativa sectorial alguna.',
		],
		correctAnswer: 1,
		explanation:
			'Las leyes de cada país o región y las normas de cada industria imponen obligaciones distintas, incluida la residencia de datos. El cliente debe revisar la documentación aplicable y diseñar en consecuencia. Si cambia la industria del caso, los requisitos aplicables también cambiarían aunque la región fuera la misma.',
		porQueOpcion: [
			'Incorrecta: los requisitos varían por país e industria y exigen revisar la normativa aplicable.',
			'Correcta: el cumplimiento depende de la geografía y del sector, por lo que hay que revisar región y servicios.',
			'Incorrecta: la residencia y las leyes locales importan, no solo el cifrado en reposo.',
			'Incorrecta: el cumplimiento es compartido y el cliente debe revisar la normativa sectorial.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html',
		],
	},
	{
		id: '2.2-q9',
		taskId: '2.2',
		objetivos: ['2.2#5'],
		tipo: 'conocimiento',
		question: '¿Por qué los requisitos de cumplimiento varían entre organizaciones?',
		options: [
			'Porque dependen de las leyes de cada país o región y de las normas de cada industria, además de los servicios y configuraciones que se utilicen.',
			'Porque AWS cambia las leyes de cada país y publica la normativa aplicable a cada industria en su catálogo de servicios y en los informes de cumplimiento.',
			'Porque el cifrado solo existe en algunas industrias y en algunos servicios, según la región en la que se contratan.',
			'Porque solo las grandes empresas tienen obligaciones legales, mientras que las pequeñas quedan exentas de cumplirlas.',
		],
		correctAnswer: 0,
		explanation:
			'Las obligaciones nacen de la legislación de cada geografía y de la normativa de cada sector, y se concretan según los servicios y la configuración usados. Organizaciones de distintos países o industrias, por tanto, afrontan requisitos distintos. Si se pidiera el lugar donde consultar esa información, la respuesta sería el recurso de autoservicio de informes de AWS.',
		porQueOpcion: [
			'Correcta: las obligaciones nacen de la legislación de cada geografía y de la normativa de cada sector.',
			'Incorrecta: AWS no cambia las leyes; cada país y sector fijan sus requisitos.',
			'Incorrecta: el cifrado está disponible en todas las industrias y no determina por sí solo el cumplimiento.',
			'Incorrecta: las obligaciones legales alcanzan a empresas de cualquier tamaño.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html',
		],
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
			'Amazon Inspector protege frente a ataques de denegación de servicio distribuido y AWS Shield evalúa las vulnerabilidades de las cargas de trabajo, mientras que Security Hub y GuardDuty gestionan las claves de cifrado.',
			'Amazon GuardDuty cifra los datos en reposo, AWS Security Hub gestiona las claves de cifrado, Inspector centraliza los hallazgos y Shield evalúa la configuración de la red.',
			'AWS Shield centraliza los hallazgos de seguridad, Amazon Inspector detecta las amenazas de la red y Amazon GuardDuty evalúa las vulnerabilidades de las instancias.',
		],
		correctAnswer: 0,
		explanation:
			'Inspector busca vulnerabilidades en las cargas de trabajo, GuardDuty detecta actividad maliciosa, Security Hub centraliza y normaliza hallazgos y Shield mitiga ataques de denegación de servicio distribuido (DDoS). Las demás opciones intercambian las funciones. Si el requisito fuera descubrir datos sensibles, la respuesta sería Amazon Macie.',
		porQueOpcion: [
			'Correcta: Inspector evalúa vulnerabilidades, GuardDuty detecta amenazas, Security Hub centraliza hallazgos y Shield mitiga DDoS.',
			'Incorrecta: intercambia las funciones de Inspector y Shield y atribuye la gestión de claves a servicios que no la hacen.',
			'Incorrecta: ningún servicio de esa asociación cifra datos ni gestiona claves de esa forma.',
			'Incorrecta: cruza por completo las funciones de Shield, Inspector y GuardDuty.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/inspector/',
			'https://docs.aws.amazon.com/guardduty/',
			'https://docs.aws.amazon.com/securityhub/',
			'https://docs.aws.amazon.com/shield/',
			'https://docs.aws.amazon.com/macie/',
		],
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
			'AWS Config para mitigar el ataque de denegación de servicio y AWS CloudTrail para detectar el tráfico anómalo que llega a la cuenta.',
			'Amazon CloudWatch para cifrar los datos en tránsito y AWS Artifact para mitigar el ataque de volumen sobre la aplicación web.',
			'AWS KMS para bloquear el tráfico malicioso y Amazon S3 para detectar la amenaza y almacenar los registros de la investigación.',
		],
		correctAnswer: 0,
		explanation:
			'AWS Shield está diseñado para mitigar ataques de denegación de servicio distribuido (DDoS) y Amazon GuardDuty para detectar actividad maliciosa. Config y CloudTrail registran, CloudWatch monitorea y AWS KMS gestiona claves; ninguno mitiga tráfico malicioso. Si el requisito fuera evaluar vulnerabilidades, la respuesta sería Amazon Inspector.',
		porQueOpcion: [
			'Correcta: Shield mitiga el ataque DDoS y GuardDuty detecta la actividad maliciosa.',
			'Incorrecta: Config y CloudTrail registran, pero no mitigan tráfico ni detectan anomalías de volumen.',
			'Incorrecta: CloudWatch no cifra datos y AWS Artifact no mitiga ataques.',
			'Incorrecta: KMS gestiona claves y Amazon S3 almacena, no bloquea ni detecta amenazas.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/shield/',
			'https://docs.aws.amazon.com/guardduty/',
			'https://docs.aws.amazon.com/config/',
			'https://docs.aws.amazon.com/cloudtrail/',
			'https://docs.aws.amazon.com/cloudwatch/',
			'https://docs.aws.amazon.com/artifact/',
			'https://docs.aws.amazon.com/kms/',
			'https://docs.aws.amazon.com/s3/',
			'https://docs.aws.amazon.com/inspector/',
		],
	},
	{
		id: '2.2-q12',
		taskId: '2.2',
		objetivos: ['2.2#7'],
		tipo: 'comparacion',
		question:
			'Un equipo debe explicar la diferencia entre cifrado en tránsito y cifrado en reposo. ¿Cuál afirmación es correcta?',
		options: [
			'El cifrado en tránsito protege los datos mientras se almacenan en un volumen y el cifrado en reposo los protege mientras viajan por la red entre servicios o entre distintos componentes de la arquitectura.',
			'El cifrado en tránsito protege los datos mientras viajan por la red; el cifrado en reposo protege los datos almacenados, por ejemplo en un volumen o en un bucket.',
			'Ambos protegen exactamente el mismo momento del ciclo de vida del dato, por lo que solo hace falta aplicar uno de los dos en cada servicio.',
			'El cifrado en reposo se aplica únicamente al tráfico que viaja entre regiones y el cifrado en tránsito a los datos guardados en un bucket.',
		],
		correctAnswer: 1,
		explanation:
			'El cifrado en tránsito protege el dato durante el recorrido por la red; el cifrado en reposo lo protege cuando está almacenado. Cubren momentos distintos y se complementan. Si cambia el momento del dato a cuando está guardado, la respuesta se referiría al cifrado en reposo.',
		porQueOpcion: [
			'Incorrecta: invierte los conceptos, pues el cifrado en tránsito protege el dato en la red.',
			'Correcta: el cifrado en tránsito protege los datos mientras viajan y el en reposo los datos almacenados.',
			'Incorrecta: cubren momentos distintos del ciclo de vida y se complementan.',
			'Incorrecta: confunde ambos conceptos al asociar el reposo al tráfico entre regiones.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html',
		],
	},
	{
		id: '2.2-q13',
		taskId: '2.2',
		objetivos: ['2.2#8'],
		tipo: 'comparacion',
		question:
			'Un equipo confunde monitoreo y auditoría. ¿Qué afirmación distingue correctamente el monitoreo del funcionamiento de la auditoría de la actividad?',
		options: [
			'El servicio de monitoreo registra las llamadas a la API y el de auditoría recoge métricas de rendimiento, alarmas y logs operativos de todos los recursos de la cuenta.',
			'El monitoreo recoge métricas, logs y alarmas sobre el funcionamiento del entorno; la auditoría registra las llamadas a la API para saber quién hizo qué y cuándo.',
			'Ambos servicios solo sirven para calcular el coste mensual de la cuenta y repartir los gastos entre los equipos de la organización.',
			'El servicio de auditoría sustituye al de monitoreo y hace innecesario observar el rendimiento y las alarmas de los recursos, además de revisar su configuración.',
		],
		correctAnswer: 1,
		explanation:
			'El monitoreo aporta la visión operativa (métricas, logs y alarmas); la auditoría aporta la actividad de la API con autor y momento. Son funciones complementarias, no sustitutas. Si el requisito pidiera evaluar el estado de la configuración, la respuesta sería un tercer servicio, no el de monitoreo.',
		porQueOpcion: [
			'Incorrecta: invierte las funciones, porque el monitoreo aporta métricas y alarmas, no el registro de la API.',
			'Correcta: el monitoreo observa el funcionamiento y la auditoría registra quién hizo qué y cuándo.',
			'Incorrecta: ninguno de los dos se dedica a calcular o repartir costes.',
			'Incorrecta: las funciones son complementarias y la auditoría no sustituye al monitoreo.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html',
		],
	},
	{
		id: '2.2-q14',
		taskId: '2.2',
		objetivos: ['2.2#8'],
		tipo: 'comparacion',
		question:
			'¿Qué diferencia hay entre el servicio que audita la actividad y el que vigila el estado de la configuración para la gobernanza?',
		options: [
			'El servicio de auditoría guarda el historial de configuración de los recursos y el de configuración registra las llamadas a la API realizadas en la cuenta y el momento exacto de cada operación.',
			'El servicio de auditoría registra la actividad de la API (quién hizo qué); el de configuración guarda el historial de los recursos y evalúa si cumplen las reglas.',
			'Los dos servicios son exactamente lo mismo y solo cambian de nombre según la consola o la región desde la que se consulten.',
			'Ninguno de los dos guarda registros de actividad ni de configuración; solo generan alarmas cuando se supera un umbral definido.',
		],
		correctAnswer: 1,
		explanation:
			'El servicio de auditoría responde a «quién hizo qué y cuándo» con el registro de llamadas a la API; el de configuración responde a «en qué estado está la configuración y cumple las reglas» con su historial y evaluación. Ambos complementan la gobernanza. Si cambia la pregunta a «cómo está funcionando el sistema», la respuesta sería el servicio de monitoreo.',
		porQueOpcion: [
			'Incorrecta: invierte los roles, ya que el historial de configuración pertenece al servicio de configuración.',
			'Correcta: la auditoría registra la actividad de la API y la configuración guarda el historial y evalúa reglas.',
			'Incorrecta: son servicios distintos con propósitos distintos, no un simple cambio de nombre.',
			'Incorrecta: ambos guardan registros; no se limitan a generar alarmas por umbral.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html',
		],
	},
	{
		id: '2.2-q15',
		taskId: '2.2',
		objetivos: ['2.2#8'],
		tipo: 'tradeoff',
		question:
			'La organización necesita monitoreo operativo, auditoría de seguridad y evaluación de cumplimiento de configuración, pero no puede abordar las tres cosas a la vez. ¿Qué razonamiento es correcto?',
		options: [
			'Basta con activar el monitoreo de rendimiento: si las métricas y las alarmas son correctas, la auditoría de actividad y el cumplimiento de configuración quedan cubiertos automáticamente, sin necesidad de otros registros.',
			'Son tres necesidades distintas y complementarias: monitoreo con Amazon CloudWatch, auditoría con AWS CloudTrail y evaluación de configuración con AWS Config. Se pueden priorizar, pero una no cubre a las otras.',
			'La auditoría de seguridad se puede sustituir por el monitoreo operativo porque ambos generan registros, métricas y alarmas sobre el comportamiento de los recursos de la cuenta, sin necesidad de un historial aparte.',
			'El cumplimiento de configuración se demuestra solo con el cifrado en reposo de los datos y no requiere revisar el estado ni las reglas de configuración de los recursos de la cuenta.',
		],
		correctAnswer: 1,
		explanation:
			'Las tres necesidades son distintas: el monitoreo observa el funcionamiento, la auditoría registra la actividad y la evaluación de configuración comprueba el estado frente a reglas. Priorizar su implantación es válido, pero ninguna cubre el propósito de las otras. Si cambia la prioridad a la autoría de los cambios, la auditoría pasa a ser la primera necesidad.',
		porQueOpcion: [
			'Incorrecta: el monitoreo no cubre la auditoría de actividad ni la evaluación de configuración.',
			'Correcta: son tres necesidades complementarias que se atienden con CloudWatch, CloudTrail y AWS Config.',
			'Incorrecta: la auditoría responde a quién hizo qué, algo que el monitoreo no registra.',
			'Incorrecta: el cifrado en reposo no demuestra por sí solo el cumplimiento de configuración.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/cloudwatch/',
			'https://docs.aws.amazon.com/cloudtrail/',
			'https://docs.aws.amazon.com/config/',
		],
	},
	{
		id: '2.2-q16',
		taskId: '2.2',
		objetivos: ['2.2#9'],
		tipo: 'conocimiento',
		question: '¿Por qué los requisitos de cumplimiento varían entre los distintos servicios de AWS?',
		options: [
			'Porque cada servicio tiene su propio alcance en el modelo de responsabilidad compartida, con controles e informes distintos.',
			'Porque solo algunos servicios están sujetos a leyes y normas, mientras que la mayoría queda exenta de cualquier requisito de cumplimiento en todas las regiones.',
			'Porque el cifrado solo está disponible en un servicio concreto y los demás no permiten proteger los datos en reposo ni en tránsito.',
			'Porque los informes de cumplimiento cambian según la hora del día y la carga de trabajo que soporta cada servicio en cada región.',
		],
		correctAnswer: 0,
		explanation:
			'Cada servicio define qué gestiona AWS y qué le corresponde al cliente, y ofrece distintos controles e informes. Por eso un mismo requisito se implementa o se evidencia de manera diferente según el servicio. Si cambia el servicio elegido, la forma de cumplir el requisito también cambia.',
		porQueOpcion: [
			'Correcta: cada servicio reparte el modelo de responsabilidad de forma distinta y ofrece controles e informes propios.',
			'Incorrecta: todos los servicios están sujetos a las leyes y normas aplicables a la organización.',
			'Incorrecta: el cifrado está disponible en muchos servicios, no en uno solo.',
			'Incorrecta: los informes de cumplimiento no cambian con la hora ni con la carga de trabajo.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html',
		],
	},
	{
		id: '2.2-q17',
		taskId: '2.2',
		objetivos: ['2.2#9'],
		tipo: 'escenario',
		question:
			'Una empresa debe cumplir un requisito de cifrado en reposo para sus datos. ¿Qué debe tener en cuenta al elegir entre varios servicios de AWS?',
		options: [
			'Que todos los servicios ofrecen exactamente las mismas opciones de cifrado, los mismos controles y los mismos informes de cumplimiento.',
			'Que las opciones de cifrado y las responsabilidades del cliente varían según el servicio, así que hay que revisar cómo lo implementa cada uno.',
			'Que el cifrado en reposo solo depende de la región elegida y no de la configuración ni de las opciones que ofrece cada servicio contratado ni de los controles que delega en el cliente.',
			'Que el cumplimiento se garantiza activando el monitoreo de rendimiento y las alarmas de la cuenta, sin revisar el cifrado de cada servicio.',
		],
		correctAnswer: 1,
		explanation:
			'Cada servicio implementa el cifrado con sus propias opciones y reparte las responsabilidades de forma distinta. Antes de dar por cumplido el requisito hay que revisar la configuración concreta del servicio y qué parte gestiona el cliente. Si el requisito añadiera auditoría de esa configuración, entraría un servicio de evaluación de configuración.',
		porQueOpcion: [
			'Incorrecta: los servicios no ofrecen las mismas opciones de cifrado ni los mismos informes.',
			'Correcta: las opciones de cifrado y las responsabilidades del cliente varían según el servicio.',
			'Incorrecta: el cifrado en reposo depende de la configuración del servicio, no solo de la región.',
			'Incorrecta: el monitoreo y las alarmas no garantizan el cumplimiento del cifrado.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html',
		],
	},
	{
		id: '2.2-q18',
		taskId: '2.2',
		objetivos: ['2.2#1'],
		tipo: 'escenario',
		question:
			'Una empresa debe demostrar ante un auditor que aplica controles de seguridad de forma constante y sostenida en el tiempo. ¿Qué enfoque describe mejor la gobernanza en este contexto?',
		options: [
			'Definir y aplicar un conjunto de reglas, controles y procesos internos, y revisar su cumplimiento de forma periódica.',
			'Contratar un nivel de soporte superior para que AWS asuma la responsabilidad de los controles del cliente.',
			'Cifrar todos los datos en reposo y considerar que el cifrado demuestra por sí solo el cumplimiento exigido.',
			'Trasladar el cumplimiento al proveedor de la nube, que queda obligado a responder por la normativa del cliente sin que el cliente revise nada.',
		],
		correctAnswer: 0,
		explanation:
			'La gobernanza es el marco interno de reglas, controles y revisiones con el que la organización sostiene el cumplimiento en el tiempo. Ni el soporte, ni el cifrado, ni el proveedor sustituyen ese marco propio. Si cambia el foco a una obligación externa, el concepto sería compliance.',
		porQueOpcion: [
			'Correcta: la gobernanza es el marco interno de reglas, controles y revisión periódica.',
			'Incorrecta: el nivel de soporte no transfiere a AWS la responsabilidad de los controles del cliente.',
			'Incorrecta: el cifrado es un control, pero no demuestra por sí solo el cumplimiento sostenido.',
			'Incorrecta: el proveedor no responde por la normativa del cliente ni exime de revisar los controles.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html',
		],
	},
	{
		id: '2.2-q19',
		taskId: '2.2',
		objetivos: ['2.2#2'],
		tipo: 'escenario',
		question:
			'Un equipo quiere reducir el impacto de una posible fuga de datos de un bucket y pregunta qué aporta el cifrado frente a otros controles. ¿Qué razonamiento es correcto?',
		options: [
			'El cifrado mantiene los datos ilegibles sin la clave, pero no sustituye al control de acceso ni a las copias de seguridad.',
			'El cifrado impide que un actor no autorizado enumere los objetos del bucket y sustituye a las políticas de acceso y garantiza por sí solo el cumplimiento normativo.',
			'El cifrado evita que los datos salgan de la región elegida y garantiza por sí solo el cumplimiento normativo.',
			'El cifrado elimina la necesidad de clasificar los datos y de revisar los permisos concedidos a cada identidad.',
		],
		correctAnswer: 0,
		explanation:
			'El cifrado protege la confidencialidad, de modo que una copia filtrada no expone la información, pero complementa y no reemplaza a los permisos ni a las copias. No controla el listado de objetos ni la residencia de los datos. Si cambiara el riesgo a la disponibilidad, la respuesta se centraría en copias y redundancia.',
		porQueOpcion: [
			'Correcta: el cifrado protege la confidencialidad, pero no reemplaza los permisos ni las copias de seguridad.',
			'Incorrecta: el cifrado no impide enumerar objetos ni sustituye las políticas de acceso.',
			'Incorrecta: el cifrado no controla la residencia de los datos ni garantiza el cumplimiento por sí solo.',
			'Incorrecta: clasificar los datos y revisar permisos sigue siendo necesario.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html',
		],
	},
	{
		id: '2.2-q20',
		taskId: '2.2',
		objetivos: ['2.2#4'],
		tipo: 'escenario',
		question:
			'Antes de una auditoría, un área legal pide certificaciones e informes de cumplimiento de AWS, y un ingeniero necesita comprobar el estado de configuración de sus propios recursos. ¿Qué recurso corresponde a cada necesidad?',
		options: [
			'Los informes de cumplimiento se descargan del centro de autoservicio de AWS y el estado de configuración se evalúa con AWS Config.',
			'Ambas necesidades se cubren con el centro de autoservicio de informes, que también evalúa la configuración de la cuenta y descarga las certificaciones aplicables al sector.',
			'Ambas necesidades se cubren con AWS Config, que publica las certificaciones de AWS y los acuerdos aplicables al sector.',
			'Los informes se obtienen abriendo una incidencia de soporte y la configuración se revisa en los informes de auditoría.',
		],
		correctAnswer: 0,
		explanation:
			'Las certificaciones e informes de AWS se descargan del centro de autoservicio (AWS Artifact), mientras que el estado de configuración de los recursos se evalúa con AWS Config. No son intercambiables: uno publica documentación de AWS y el otro audita la configuración del cliente. Si cambia la necesidad a la autoría de un cambio, la respuesta sería el historial de actividad de la API.',
		porQueOpcion: [
			'Correcta: los informes se descargan del centro de autoservicio de AWS y la configuración se evalúa con AWS Config.',
			'Incorrecta: el centro de informes no evalúa la configuración de los recursos del cliente.',
			'Incorrecta: AWS Config no publica certificaciones ni los acuerdos de sector.',
			'Incorrecta: los informes se obtienen en autoservicio y la configuración no se revisa en informes de auditoría.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/config/',
			'https://docs.aws.amazon.com/artifact/',
		],
	},
	{
		id: '2.2-q21',
		taskId: '2.2',
		objetivos: ['2.2#7'],
		tipo: 'escenario',
		question:
			'Una aplicación debe proteger los datos cuando se guardan y cuando viajan entre servicios. ¿Qué combinación de cifrado responde a ese requisito?',
		options: [
			'Cifrado en reposo para los datos almacenados y cifrado en tránsito para los datos en movimiento; se complementan.',
			'Cifrado en tránsito únicamente, porque el tráfico interno dentro de la infraestructura de AWS ya viaja protegido.',
			'Cifrado en reposo únicamente, porque el cifrado del almacenamiento protege también el recorrido por la red.',
			'Un solo tipo de cifrado basta si se aplica a todos los servicios, con independencia de dónde estén los datos.',
		],
		correctAnswer: 0,
		explanation:
			'Cubrir ambos momentos exige aplicar cifrado en reposo al dato almacenado y cifrado en tránsito cuando viaja por la red. Ninguno de los dos sustituye al otro. Si cambia el escenario a datos que solo se guardan, bastaría con el cifrado en reposo.',
		porQueOpcion: [
			'Correcta: se necesita cifrado en reposo para lo almacenado y en tránsito para lo que viaja por la red.',
			'Incorrecta: solo el cifrado en tránsito no protege los datos almacenados.',
			'Incorrecta: el cifrado en reposo no protege el recorrido de los datos por la red.',
			'Incorrecta: un solo tipo no cubre ambos momentos del ciclo de vida del dato.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html',
		],
	},
	{
		id: '2.2-q22',
		taskId: '2.2',
		objetivos: ['2.2#4'],
		tipo: 'comparacion',
		question:
			'¿Qué distingue al servicio que entrega los informes de cumplimiento de AWS del que evalúa la configuración de tus propios recursos?',
		options: [
			'El primero publica informes y acuerdos de AWS; el segundo guarda el historial de configuración y evalúa reglas sobre tus recursos.',
			'El primero evalúa la configuración de la cuenta y el estado de los recursos; el segundo descarga informes de auditoría, certificaciones y acuerdos de AWS.',
			'Ambos entregan informes de cumplimiento de AWS y solo se diferencian por la región desde la que se consultan y por el idioma disponible.',
			'Ambos evalúan la configuración de los recursos y publican los acuerdos aplicables a cada cuenta del cliente en autoservicio.',
		],
		correctAnswer: 0,
		explanation:
			'El servicio de informes (AWS Artifact) entrega la documentación de AWS, mientras que el de configuración evalúa los recursos del cliente frente a reglas. Uno aporta evidencia del proveedor y el otro evidencia del estado propio. Si cambia la necesidad a la autoría de los cambios, entraría el historial de actividad de la API.',
		porQueOpcion: [
			'Correcta: Artifact publica los informes de AWS y el servicio de configuración evalúa los recursos del cliente.',
			'Incorrecta: invierte las funciones, pues el historial y la evaluación de reglas son de AWS Config.',
			'Incorrecta: solo uno entrega informes de AWS; el otro evalúa la configuración del cliente.',
			'Incorrecta: no ambos evalúan la configuración ni publican los acuerdos.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/config/',
			'https://docs.aws.amazon.com/artifact/',
		],
	},
	{
		id: '2.2-q23',
		taskId: '2.2',
		objetivos: ['2.2#6'],
		tipo: 'comparacion',
		question:
			'Un equipo debe elegir el servicio adecuado para detectar actividad maliciosa, evaluar vulnerabilidades y mitigar un ataque de volumen. ¿Qué asociación es correcta?',
		options: [
			'Amazon GuardDuty para actividad maliciosa, Amazon Inspector para vulnerabilidades y AWS Shield para ataques de denegación de servicio distribuido.',
			'Amazon Inspector para actividad maliciosa, AWS Shield para vulnerabilidades y Amazon GuardDuty para ataques de denegación de servicio distribuido.',
			'AWS Shield para vulnerabilidades, Amazon GuardDuty para ataques de denegación de servicio distribuido y Amazon Inspector para amenazas.',
			'Los tres servicios cubren las mismas funciones y son intercambiables según la región o el plan de soporte contratado.',
		],
		correctAnswer: 0,
		explanation:
			'Cada servicio tiene un foco: GuardDuty detecta amenazas sobre la actividad, Inspector evalúa vulnerabilidades y Shield mitiga ataques de volumen. No son intercambiables entre sí. Si el requisito pidiera una vista agregada de hallazgos, entraría AWS Security Hub.',
		porQueOpcion: [
			'Correcta: GuardDuty detecta actividad maliciosa, Inspector vulnerabilidades y Shield ataques de volumen.',
			'Incorrecta: intercambia las funciones de los tres servicios.',
			'Incorrecta: vuelve a cruzar los focos de cada servicio.',
			'Incorrecta: cada servicio tiene un foco distinto y no son intercambiables.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/guardduty/',
			'https://docs.aws.amazon.com/inspector/',
			'https://docs.aws.amazon.com/shield/',
			'https://docs.aws.amazon.com/securityhub/',
		],
	},
	{
		id: '2.2-q24',
		taskId: '2.2',
		objetivos: ['2.2#9'],
		tipo: 'comparacion',
		question: 'Al cumplir un requisito de cifrado en reposo, ¿por qué hay que revisar cada servicio por separado?',
		options: [
			'Porque el alcance del cifrado y quién gestiona las claves varían: en algunos servicios AWS lo aplica por defecto y en otros el cliente debe configurarlo.',
			'Porque todos los servicios cifran siempre con las mismas claves administradas por AWS y el cliente no puede elegir ni configurar ninguna opción de cifrado.',
			'Porque el cifrado en reposo solo depende de la región elegida y no del servicio contratado ni de la parte que administra las claves utilizadas.',
			'Porque el cifrado en reposo se activa únicamente al contratar un plan de soporte empresarial y no está disponible en los planes básicos.',
		],
		correctAnswer: 0,
		explanation:
			'El alcance del control y la gestión de claves cambian de un servicio a otro dentro del modelo de responsabilidad compartida, por lo que un mismo requisito se cumple de forma distinta. Asumir que todos los servicios cifran igual lleva a dar por cumplido un requisito que no lo está. Si cambia el servicio, la forma de evidenciar el cifrado también cambia.',
		porQueOpcion: [
			'Correcta: el alcance del cifrado y quién gestiona las claves varían de un servicio a otro.',
			'Incorrecta: no todos los servicios cifran igual ni con claves administradas por AWS.',
			'Incorrecta: el cifrado depende del servicio y de quién administra las claves, no solo de la región.',
			'Incorrecta: el cifrado en reposo no se limita a los planes de soporte empresarial.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html',
		],
	},
];
