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
			'Compliance son los controles internos de la empresa; governance son las leyes y certificaciones externas que publica AWS.',
			'Ambos términos describen la misma obligación legal y se usan como sinónimos exactos.',
			'Compliance es sinónimo de cifrado y governance es sinónimo de residencia de datos.',
		],
		correctAnswer: 0,
		explanation:
			'Compliance es cumplir leyes, normas y estándares aplicables; governance es el conjunto de reglas, controles y procesos internos con los que la organización demuestra y mantiene ese cumplimiento. No son sinónimos ni equivalen a un control concreto.',
		porQueOpcion: [
			'Correcta: separa la obligación externa del marco interno que la sostiene.',
			'Incorrecta: invierte los términos del par compliance y governance.',
			'Incorrecta: aunque se relacionan, no son sinónimos exactos.',
			'Incorrecta: cifrado y residencia son controles concretos, no los conceptos globales.',
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
			'Impide por completo que un actor no autorizado enumere los objetos del bucket.',
			'Sustituye a las políticas de acceso y a la clasificación de los datos.',
			'Evita que los datos salgan de la región elegida.',
		],
		correctAnswer: 0,
		explanation:
			'El cifrado protege la confidencialidad: sin la clave, el dato no es legible aunque se copie o se filtre. No impide enumerar objetos, no reemplaza al control de acceso y no restringe la ubicación geográfica de los datos.',
		porQueOpcion: [
			'Correcta: describe el beneficio de confidencialidad del cifrado.',
			'Incorrecta: el cifrado no controla quién puede listar los objetos.',
			'Incorrecta: el cifrado complementa, pero no sustituye, permisos y clasificación.',
			'Incorrecta: la residencia de datos se decide por la región elegida, no por el cifrado.',
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
			'Todos los registros se capturan en un único bucket de Amazon S3 gestionado por AWS, sin configuración adicional.',
		],
		correctAnswer: 0,
		explanation:
			'Cada origen tiene su destino: Amazon CloudWatch recoge métricas y logs operativos, AWS CloudTrail registra las llamadas a la API y AWS Config guarda el historial de configuración. AWS Artifact publica documentación de cumplimiento, no registros.',
		porQueOpcion: [
			'Correcta: asigna cada tipo de registro a su servicio.',
			'Incorrecta: intercambia CloudWatch con CloudTrail y confunde Artifact con Config.',
			'Incorrecta: invierte las funciones de CloudTrail y Config.',
			'Incorrecta: los registros no se centralizan de forma automática en un bucket sin configuración.',
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
			'AWS Artifact es el centro de autoservicio de informes de auditoría, certificaciones y acuerdos de AWS. AWS Config evalúa la configuración, AWS CloudTrail registra la actividad y AWS Trusted Advisor revisa mejores prácticas; ninguno publica los informes de cumplimiento.',
		porQueOpcion: [
			'Correcta: AWS Artifact entrega informes y acuerdos de cumplimiento.',
			'Incorrecta: AWS Config evalúa la conformidad de la configuración, no entrega informes de AWS.',
			'Incorrecta: AWS CloudTrail registra llamadas a la API, no documentación de cumplimiento.',
			'Incorrecta: AWS Trusted Advisor recomienda mejores prácticas, no informes de auditoría.',
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
			'Como AWS es global, las obligaciones son idénticas en todas las regiones y sectores.',
			'La residencia de datos se resuelve únicamente con etiquetas de costos.',
			'Solo el cifrado en tránsito satisface cualquier requisito de residencia.',
		],
		correctAnswer: 0,
		explanation:
			'Las leyes de cada país o región y las normas de cada industria imponen obligaciones distintas, incluida la residencia de datos. El cliente debe revisar la documentación aplicable y escoger región y servicios en consecuencia.',
		porQueOpcion: [
			'Correcta: reconoce que el cumplimiento depende de geografía e industria.',
			'Incorrecta: la cobertura global de AWS no iguala las obligaciones legales locales.',
			'Incorrecta: las etiquetas de costos no tienen efecto sobre la residencia.',
			'Incorrecta: la residencia se determina por dónde se almacenan los datos, no por el cifrado en tránsito.',
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
			'Amazon Inspector para mitigar DDoS, Amazon GuardDuty para centralizar hallazgos y AWS Shield para vulnerabilidades.',
			'AWS Security Hub para cifrado, Amazon GuardDuty para inventario de configuración y Amazon Inspector para mitigar DDoS.',
			'AWS Shield para vulnerabilidades, AWS Security Hub para mitigar DDoS y Amazon Inspector para centralizar hallazgos.',
		],
		correctAnswer: 0,
		explanation:
			'Amazon Inspector evalúa vulnerabilidades en las cargas de trabajo, Amazon GuardDuty detecta actividad maliciosa, AWS Security Hub centraliza y normaliza hallazgos y AWS Shield mitiga ataques de denegación de servicio distribuido (DDoS). Las demás opciones intercambian las funciones.',
		porQueOpcion: [
			'Correcta: asigna a cada servicio su función real.',
			'Incorrecta: intercambia Inspector, GuardDuty y Shield.',
			'Incorrecta: atribuye cifrado e inventario a servicios de detección.',
			'Incorrecta: confunde la mitigación de DDoS con la centralización de hallazgos.',
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
			'Son dos momentos distintos: en reposo con AWS KMS, AWS CloudHSM o el cifrado del servicio, y en tránsito con TLS mediante certificados de AWS Certificate Manager (ACM).',
			'Basta con el cifrado en reposo, porque el tráfico dentro de una VPC nunca requiere cifrado.',
			'El cifrado en tránsito sustituye al cifrado en reposo cuando se usa HTTPS.',
			'AWS Certificate Manager (ACM) cifra los datos almacenados y AWS KMS protege el tráfico de red.',
		],
		correctAnswer: 0,
		explanation:
			'El cifrado en reposo protege los datos almacenados (AWS KMS, AWS CloudHSM o el cifrado propio del servicio) y el cifrado en tránsito protege los datos en movimiento con TLS, usando certificados de AWS Certificate Manager (ACM). Cubren momentos distintos y se complementan.',
		porQueOpcion: [
			'Correcta: distingue ambos momentos y asigna las herramientas adecuadas.',
			'Incorrecta: el tráfico interno también debe cifrarse cuando el requisito lo exige.',
			'Incorrecta: HTTPS cubre el tránsito, no el dato almacenado.',
			'Incorrecta: invierte las funciones de AWS Certificate Manager (ACM) y AWS KMS.',
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
			'Auditoría en Amazon CloudWatch, monitoreo en AWS Config y conformidad de configuración en AWS CloudTrail.',
			'Amazon CloudWatch registra quién hizo qué y AWS CloudTrail genera métricas y alarmas.',
			'Los tres servicios producen únicamente informes de facturación consolidada.',
		],
		correctAnswer: 0,
		explanation:
			'Amazon CloudWatch observa el funcionamiento, AWS CloudTrail audita la actividad de la API y AWS Config evalúa la conformidad de la configuración. Los tres sostienen la gobernanza con propósitos complementarios.',
		porQueOpcion: [
			'Correcta: asigna cada propósito de gobernanza a su servicio.',
			'Incorrecta: intercambia CloudWatch con Config y CloudTrail.',
			'Incorrecta: invierte los papeles de CloudWatch y CloudTrail.',
			'Incorrecta: ninguno se limita a la facturación.',
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
			'Asumir que todos los servicios registran igual, porque el modelo de responsabilidad compartida es idéntico.',
			'Activar AWS Artifact en cada servicio para que genere los registros automáticamente.',
			'Trasladar todo el registro a la capa de red, que es común a todos los servicios.',
		],
		correctAnswer: 0,
		explanation:
			'Cada servicio define su propio alcance dentro del modelo de responsabilidad compartida y ofrece capacidades de registro distintas. Antes de dar por cumplido el requisito hay que revisar cómo lo cubre cada servicio y qué debe hacer el cliente.',
		porQueOpcion: [
			'Correcta: reconoce que el control se implementa de forma distinta según el servicio.',
			'Incorrecta: el modelo es común, pero su aplicación concreta cambia por servicio.',
			'Incorrecta: AWS Artifact no genera registros operativos.',
			'Incorrecta: no todos los registros relevantes pasan por la capa de red.',
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
			'AWS Organizations permite agrupar cuentas, aplicar políticas de control de servicios y consolidar la facturación. AWS Shield mitiga DDoS, Amazon Macie descubre datos sensibles y AWS Certificate Manager (ACM) gestiona certificados; ninguna de esas funciones es de gobierno multi-cuenta.',
		porQueOpcion: [
			'Correcta: AWS Organizations cubre gobierno multi-cuenta y facturación consolidada.',
			'Incorrecta: AWS Shield protege frente a ataques de denegación de servicio distribuido.',
			'Incorrecta: Amazon Macie descubre y clasifica datos sensibles.',
			'Incorrecta: AWS Certificate Manager (ACM) aprovisiona certificados TLS.',
		],
	},
];
