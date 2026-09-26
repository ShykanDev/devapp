import type { PreguntaProfesionalClfC02 } from '@/data/clfC02/profesional/types';

export const profesionalTask22: PreguntaProfesionalClfC02[] = [
	{
		id: 'prof-2.2-q1',
		taskId: '2.2',
		objetivos: ['2.2#1'],
		tipo: 'trampa',
		question:
			'Una auditoría interna pide distinguir compliance de governance. ¿Qué afirmación es correcta?',
		options: [
			'Compliance es cumplir las obligaciones externas aplicables; governance son las reglas, controles y procesos internos que sostienen ese cumplimiento.',
			'Compliance son los controles internos que define la empresa; governance son las leyes, normas y certificaciones externas que publica AWS para sus servicios.',
			'Ambos términos describen la misma obligación legal y se usan como sinónimos exactos en la normativa de cumplimiento.',
			'Compliance es sinónimo de cifrado y governance es sinónimo de residencia de datos en una región concreta.',
		],
		correctAnswer: 0,
		explanation:
			'Compliance es cumplir leyes, normas y estándares aplicables; governance es el conjunto de reglas, controles y procesos internos con los que la organización demuestra y mantiene ese cumplimiento. No son sinónimos ni equivalen a un control concreto. Si cambia el foco y se pregunta por un control técnico concreto, ya no sería ninguno de los dos conceptos.',
		porQueOpcion: [
			'Correcta: separa la obligación externa del marco interno que la sostiene.',
			'Incorrecta: invierte los términos del par compliance y governance.',
			'Incorrecta: aunque se relacionan, no son sinónimos exactos.',
			'Incorrecta: cifrado y residencia son controles concretos, no los conceptos globales.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html',
		],
	},
	{
		id: 'prof-2.2-q2',
		taskId: '2.2',
		objetivos: ['2.2#2'],
		tipo: 'escenario',
		question:
			'Una empresa quiere reducir el impacto de una posible filtración de datos de un bucket de Amazon S3. ¿Cómo ayuda principalmente el cifrado?',
		options: [
			'Mantiene los datos ilegibles sin la clave, de modo que una copia filtrada no expone la información.',
			'Impide por completo que un actor no autorizado enumere los objetos del bucket y sustituye a las políticas de acceso y a los permisos.',
			'Sustituye a las políticas de acceso y a la clasificación de los datos.',
			'Evita que los datos salgan de la región elegida.',
		],
		correctAnswer: 0,
		explanation:
			'El cifrado protege la confidencialidad: sin la clave, el dato no es legible aunque se copie o se filtre. No impide enumerar objetos, no reemplaza al control de acceso y no restringe la ubicación geográfica de los datos. Si cambia el riesgo a la disponibilidad, la respuesta se centraría en copias y redundancia.',
		porQueOpcion: [
			'Correcta: describe el beneficio de confidencialidad del cifrado.',
			'Incorrecta: el cifrado no controla quién puede listar los objetos.',
			'Incorrecta: el cifrado complementa, pero no sustituye, permisos y clasificación.',
			'Incorrecta: la residencia de datos se decide por la región elegida, no por el cifrado.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/s3/',
		],
	},
	{
		id: 'prof-2.2-q3',
		taskId: '2.2',
		objetivos: ['2.2#3'],
		tipo: 'comparacion',
		question:
			'El equipo debe explicar dónde se capturan los distintos registros asociados a la seguridad. ¿Qué asignación es correcta?',
		options: [
			'Métricas y logs operativos en Amazon CloudWatch, llamadas a la API en AWS CloudTrail y cambios de configuración en AWS Config.',
			'Llamadas a la API en Amazon CloudWatch, métricas en AWS CloudTrail y cambios de configuración en AWS Artifact.',
			'Cambios de configuración en AWS CloudTrail y actividad de la API en AWS Config.',
			'Todos los registros se capturan en un único bucket de Amazon S3 gestionado por AWS, sin configuración adicional, y se consultan desde un panel único de la cuenta.',
		],
		correctAnswer: 0,
		explanation:
			'Cada origen tiene su destino: Amazon CloudWatch recoge métricas y logs operativos, AWS CloudTrail registra las llamadas a la API y AWS Config guarda el historial de configuración. AWS Artifact publica documentación de cumplimiento, no registros. Si cambia el registro a los cambios de configuración, la respuesta sería AWS Config.',
		porQueOpcion: [
			'Correcta: asigna cada tipo de registro a su servicio.',
			'Incorrecta: intercambia CloudWatch con CloudTrail y confunde Artifact con Config.',
			'Incorrecta: invierte las funciones de CloudTrail y Config.',
			'Incorrecta: los registros no se centralizan de forma automática en un bucket sin configuración.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/cloudwatch/',
			'https://docs.aws.amazon.com/cloudtrail/',
			'https://docs.aws.amazon.com/config/',
			'https://docs.aws.amazon.com/artifact/',
			'https://docs.aws.amazon.com/s3/',
		],
	},
	{
		id: 'prof-2.2-q4',
		taskId: '2.2',
		objetivos: ['2.2#4'],
		tipo: 'servicio',
		question:
			'Un auditor solicita los informes de cumplimiento de AWS y los acuerdos aplicables a la cuenta. ¿Qué servicio los entrega en autoservicio?',
		options: ['AWS Artifact.', 'AWS Config.', 'AWS CloudTrail.', 'AWS Trusted Advisor.'],
		correctAnswer: 0,
		explanation:
			'AWS Artifact es el centro de autoservicio de informes de auditoría, certificaciones y acuerdos de AWS. AWS Config evalúa la configuración, AWS CloudTrail registra la actividad y AWS Trusted Advisor revisa mejores prácticas; ninguno publica los informes de cumplimiento. Si el requisito fuera evaluar la configuración propia, la respuesta sería AWS Config.',
		porQueOpcion: [
			'Correcta: AWS Artifact entrega informes y acuerdos de cumplimiento.',
			'Incorrecta: AWS Config evalúa la conformidad de la configuración, no entrega informes de AWS.',
			'Incorrecta: AWS CloudTrail registra llamadas a la API, no documentación de cumplimiento.',
			'Incorrecta: AWS Trusted Advisor recomienda mejores prácticas, no informes de auditoría.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/artifact/',
			'https://docs.aws.amazon.com/config/',
			'https://docs.aws.amazon.com/cloudtrail/',
			'https://docs.aws.amazon.com/awssupport/latest/user/trusted-advisor.html',
		],
	},
	{
		id: 'prof-2.2-q5',
		taskId: '2.2',
		objetivos: ['2.2#5'],
		tipo: 'escenario',
		question:
			'Una empresa debe almacenar datos personales dentro de un país concreto y, además, cumplir una norma sectorial local. ¿Qué conclusión es correcta?',
		options: [
			'Las obligaciones de residencia y de sector dependen de la geografía y la industria, por lo que hay que elegir región y servicios antes de diseñar.',
			'Como AWS es global y opera en muchas regiones, las obligaciones de residencia y de sector son idénticas en todas ellas y en todas las industrias sin importar el sector.',
			'La residencia de datos se resuelve únicamente con etiquetas de costos y con la facturación consolidada de la organización.',
			'Solo el cifrado en tránsito satisface cualquier requisito de residencia y de normativa sectorial en cualquier país.',
		],
		correctAnswer: 0,
		explanation:
			'Las leyes de cada país o región y las normas de cada industria imponen obligaciones distintas, incluida la residencia de datos. El cliente debe revisar la documentación aplicable y escoger región y servicios en consecuencia. Si cambia el país de residencia, los requisitos aplicables también cambiarían.',
		porQueOpcion: [
			'Correcta: reconoce que el cumplimiento depende de geografía e industria.',
			'Incorrecta: la cobertura global de AWS no iguala las obligaciones legales locales.',
			'Incorrecta: las etiquetas de costos no tienen efecto sobre la residencia.',
			'Incorrecta: la residencia se determina por dónde se almacenan los datos, no por el cifrado en tránsito.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html',
		],
	},
	{
		id: 'prof-2.2-q6',
		taskId: '2.2',
		objetivos: ['2.2#6'],
		tipo: 'multiConcepto',
		question:
			'Un equipo quiere asignar correctamente los servicios que le ayudan a proteger sus recursos. ¿Qué asociación es válida?',
		options: [
			'Amazon Inspector para vulnerabilidades, Amazon GuardDuty para detección de amenazas, AWS Security Hub para centralizar hallazgos y AWS Shield para mitigar DDoS.',
			'Amazon Inspector para mitigar ataques de denegación de servicio, Amazon GuardDuty para centralizar los hallazgos y AWS Shield para evaluar las vulnerabilidades en las cargas de trabajo.',
			'AWS Security Hub para cifrado, Amazon GuardDuty para inventario de configuración y Amazon Inspector para mitigar ataques de volumen.',
			'AWS Shield para vulnerabilidades, AWS Security Hub para mitigar DDoS y Amazon Inspector para centralizar los hallazgos de seguridad.',
		],
		correctAnswer: 0,
		explanation:
			'Amazon Inspector evalúa vulnerabilidades en las cargas de trabajo, Amazon GuardDuty detecta actividad maliciosa, AWS Security Hub centraliza y normaliza hallazgos y AWS Shield mitiga ataques de denegación de servicio distribuido (DDoS). Las demás opciones intercambian las funciones. Si cambia el requisito a descubrir datos sensibles, la respuesta sería Amazon Macie.',
		porQueOpcion: [
			'Correcta: asigna a cada servicio su función real.',
			'Incorrecta: intercambia Inspector, GuardDuty y Shield.',
			'Incorrecta: atribuye cifrado e inventario a servicios de detección.',
			'Incorrecta: confunde la mitigación de DDoS con la centralización de hallazgos.',
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
		id: 'prof-2.2-q7',
		taskId: '2.2',
		objetivos: ['2.2#7'],
		tipo: 'comparacion',
		question:
			'Una arquitectura debe cifrar datos en reposo y en tránsito y cumplir una norma que exige control exclusivo de las claves. ¿Qué razonamiento es correcto?',
		options: [
			'Son dos momentos distintos: en reposo con AWS KMS, AWS CloudHSM o el cifrado del servicio, y en tránsito con TLS usando certificados de AWS Certificate Manager (ACM).',
			'Basta con aplicar el cifrado en reposo, porque el tráfico que circula dentro de una VPC nunca requiere cifrado ni certificados en los endpoints de los servicios.',
			'El cifrado en tránsito sustituye al cifrado en reposo cuando la aplicación usa HTTPS, de modo que no haría falta cifrar los datos que permanecen almacenados en los servicios.',
			'El servicio de certificados cifra los datos almacenados y el de gestión de claves protege el tráfico de red entre los servicios de la arquitectura.',
		],
		correctAnswer: 0,
		explanation:
			'El cifrado en reposo protege los datos almacenados (AWS KMS, AWS CloudHSM o el cifrado propio del servicio) y el cifrado en tránsito protege los datos en movimiento con TLS, usando certificados de AWS Certificate Manager (ACM). Cubren momentos distintos y se complementan. Si cambia el requisito a control exclusivo de claves, encajaría un módulo de seguridad de hardware.',
		porQueOpcion: [
			'Correcta: distingue ambos momentos y asigna las herramientas adecuadas.',
			'Incorrecta: el tráfico interno también debe cifrarse cuando el requisito lo exige.',
			'Incorrecta: HTTPS cubre el tránsito, no el dato almacenado.',
			'Incorrecta: invierte las funciones de AWS Certificate Manager (ACM) y AWS KMS.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/kms/',
			'https://docs.aws.amazon.com/cloudhsm/',
			'https://docs.aws.amazon.com/acm/',
		],
	},
	{
		id: 'prof-2.2-q8',
		taskId: '2.2',
		objetivos: ['2.2#8'],
		tipo: 'comparacion',
		question: '¿Qué servicio corresponde a cada función de gobernanza?',
		options: [
			'Monitoreo en Amazon CloudWatch, auditoría de actividad en AWS CloudTrail y conformidad de la configuración en AWS Config.',
			'Auditoría en Amazon CloudWatch, monitoreo en AWS Config y conformidad de configuración en AWS CloudTrail en todas las cuentas de la organización.',
			'Amazon CloudWatch registra quién hizo qué y AWS CloudTrail genera métricas y alarmas.',
			'Los tres servicios producen únicamente informes de facturación consolidada.',
		],
		correctAnswer: 0,
		explanation:
			'Amazon CloudWatch observa el funcionamiento, AWS CloudTrail audita la actividad de la API y AWS Config evalúa la conformidad de la configuración. Los tres sostienen la gobernanza con propósitos complementarios. Si cambia la pregunta a «quién eliminó el recurso», la respuesta sería AWS CloudTrail.',
		porQueOpcion: [
			'Correcta: asigna cada propósito de gobernanza a su servicio.',
			'Incorrecta: intercambia CloudWatch con Config y CloudTrail.',
			'Incorrecta: invierte los papeles de CloudWatch y CloudTrail.',
			'Incorrecta: ninguno se limita a la facturación.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/cloudwatch/',
			'https://docs.aws.amazon.com/cloudtrail/',
			'https://docs.aws.amazon.com/config/',
		],
	},
	{
		id: 'prof-2.2-q9',
		taskId: '2.2',
		objetivos: ['2.2#9'],
		tipo: 'tradeoff',
		question:
			'Dos servicios deben cumplir el mismo requisito de registro de auditoría, pero sus opciones difieren. ¿Qué enfoque es correcto?',
		options: [
			'Revisar cómo cada servicio expone sus registros y qué parte gestiona el cliente, porque el alcance del control varía entre servicios.',
			'Asumir que todos los servicios registran igual, porque el modelo de responsabilidad compartida es idéntico en cada servicio de AWS y en cada región.',
			'Activar el centro de informes de cumplimiento en cada servicio para que genere los registros de auditoría de forma automática.',
			'Trasladar todo el registro a la capa de red, que es común a todos los servicios y no depende de la configuración de cada uno.',
		],
		correctAnswer: 0,
		explanation:
			'Cada servicio define su propio alcance dentro del modelo de responsabilidad compartida y ofrece capacidades de registro distintas. Antes de dar por cumplido el requisito hay que revisar cómo lo cubre cada servicio y qué debe hacer el cliente. Si cambia el requisito a un control concreto de cifrado, el alcance también variaría por servicio.',
		porQueOpcion: [
			'Correcta: reconoce que el control se implementa de forma distinta según el servicio.',
			'Incorrecta: el modelo es común, pero su aplicación concreta cambia por servicio.',
			'Incorrecta: AWS Artifact no genera registros operativos.',
			'Incorrecta: no todos los registros relevantes pasan por la capa de red.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/artifact/',
		],
	},
	{
		id: 'prof-2.2-q10',
		taskId: '2.2',
		objetivos: ['2.2#8'],
		tipo: 'servicio',
		question:
			'Una empresa necesita crear y agrupar cuentas, aplicar políticas de control de servicios y consolidar la facturación de toda su organización. ¿Qué servicio encaja mejor?',
		options: ['AWS Organizations.', 'AWS Shield.', 'Amazon Macie.', 'AWS Certificate Manager (ACM).'],
		correctAnswer: 0,
		explanation:
			'AWS Organizations permite agrupar cuentas, aplicar políticas de control de servicios y consolidar la facturación. AWS Shield mitiga DDoS, Amazon Macie descubre datos sensibles y AWS Certificate Manager (ACM) gestiona certificados; ninguna de esas funciones es de gobierno multi-cuenta. Si cambia el requisito a centralizar hallazgos de seguridad, la respuesta sería AWS Security Hub.',
		porQueOpcion: [
			'Correcta: AWS Organizations cubre gobierno multi-cuenta y facturación consolidada.',
			'Incorrecta: AWS Shield protege frente a ataques de denegación de servicio distribuido.',
			'Incorrecta: Amazon Macie descubre y clasifica datos sensibles.',
			'Incorrecta: AWS Certificate Manager (ACM) aprovisiona certificados TLS.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/organizations/',
			'https://docs.aws.amazon.com/shield/',
			'https://docs.aws.amazon.com/macie/',
			'https://docs.aws.amazon.com/acm/',
			'https://docs.aws.amazon.com/securityhub/',
		],
	},
];
