import type { PreguntaClfC02 } from '@/data/clfC02/types';

export const preguntasTask12: PreguntaClfC02[] = [
	{
		id: '1.2-q1',
		taskId: '1.2',
		objetivos: ['1.2#1'],
		tipo: 'conocimiento',
		question: '¿Qué es el AWS Well-Architected Framework?',
		options: [
			'Un servicio que despliega una arquitectura de referencia de forma automática.',
			'Un conjunto de buenas prácticas, principios y preguntas para evaluar y mejorar el diseño de una carga de trabajo.',
			'Una certificación obligatoria para publicar aplicaciones en la nube.',
			'Una herramienta de facturación que reparte los costes entre cuentas.',
		],
		correctAnswer: 1,
		explanation:
			'El AWS Well-Architected Framework es una guía de diseño: reúne buenas prácticas y preguntas para revisar una carga de trabajo. No despliega recursos, no certifica y no sustituye a la facturación.',
	},
	{
		id: '1.2-q2',
		taskId: '1.2',
		objetivos: ['1.2#1'],
		tipo: 'servicio',
		question:
			'Un equipo quiere dejar constancia de la revisión de su arquitectura, marcar los riesgos y priorizar las mejoras. ¿Qué recurso encaja mejor?',
		options: [
			'El AWS Well-Architected Tool, que guía el cuestionario por pilar y genera un plan de mejora.',
			'Un grupo de AWS Auto Scaling para medir la disponibilidad.',
			'Un bucket de Amazon S3 para almacenar los diagramas de la arquitectura.',
			'El panel de facturación, porque resume el gasto por servicio.',
		],
		correctAnswer: 0,
		explanation:
			'El AWS Well-Architected Tool conduce la revisión pilar a pilar y produce un informe de riesgos con un plan de mejora. No es un servicio de cómputo ni de almacenamiento: apoya la revisión del diseño.',
	},
	{
		id: '1.2-q3',
		taskId: '1.2',
		objetivos: ['1.2#2'],
		tipo: 'comparacion',
		question: '¿Cuál de estos conjuntos enumera correctamente los pilares del AWS Well-Architected Framework?',
		options: [
			'Operational excellence, security, reliability, performance efficiency, cost optimization y sustainability.',
			'Compute, storage, database, networking, security y cost management.',
			'Business, people, governance, platform, security y operations.',
			'Rehost, replatform, repurchase, refactor, retire y retain.',
		],
		correctAnswer: 0,
		explanation:
			'Los seis pilares son operational excellence, security, reliability, performance efficiency, cost optimization y sustainability. La opción con business, people y governance corresponde al AWS Cloud Adoption Framework; compute, storage y database son categorías de servicios; y rehost, replatform y refactor son estrategias de migración.',
	},
	{
		id: '1.2-q4',
		taskId: '1.2',
		objetivos: ['1.2#2'],
		tipo: 'escenario',
		question:
			'Una empresa quiere que su aplicación siga atendiendo peticiones aunque falle un componente y, a la vez, que ante un pico de tráfico crezca de forma automática. ¿Qué pilares abordan estos dos requisitos?',
		options: [
			'Reliability y performance efficiency.',
			'Security y cost optimization.',
			'Sustainability y operational excellence.',
			'Operational excellence y security.',
		],
		correctAnswer: 0,
		explanation:
			'Seguir operando pese a un fallo es Reliability, que cubre redundancia y tolerancia a fallos; adaptarse a la demanda con eficiencia es Performance efficiency, que cubre la selección de recursos y la elasticidad.',
	},
	{
		id: '1.2-q5',
		taskId: '1.2',
		objetivos: ['1.2#2'],
		tipo: 'escenario',
		question:
			'Durante una revisión se detecta que no hay procedimientos documentados de operación ni automatización de despliegues. ¿A qué pilar corresponde el hallazgo?',
		options: [
			'Cost optimization.',
			'Operational excellence.',
			'Sustainability.',
			'Performance efficiency.',
		],
		correctAnswer: 1,
		explanation:
			'Los runbooks, la automatización de despliegues y la mejora continua pertenecen a Operational excellence. No es un problema de coste, de rendimiento ni de sostenibilidad.',
	},
	{
		id: '1.2-q6',
		taskId: '1.2',
		objetivos: ['1.2#3'],
		tipo: 'comparacion',
		question:
			'Un mismo cambio puede mejorar un pilar y empeorar otro. ¿Qué afirmación distingue correctamente reliability de performance efficiency?',
		options: [
			'Reliability se ocupa de sobrevivir a los fallos; performance efficiency, de usar los recursos adecuados y escalar con eficiencia.',
			'Reliability mide la factura mensual; performance efficiency, la seguridad de los datos.',
			'Reliability y performance efficiency son el mismo pilar con distinto nombre.',
			'Reliability diseña la automatización operativa; performance efficiency, la gobernanza de identidades.',
		],
		correctAnswer: 0,
		explanation:
			'Reliability responde a si el sistema sigue funcionando ante fallos; performance efficiency, a si la carga usa los recursos adecuados y escala. La automatización operativa es Operational excellence y la gestión de identidades es Security.',
	},
	{
		id: '1.2-q7',
		taskId: '1.2',
		objetivos: ['1.2#3'],
		tipo: 'conocimiento',
		question: '¿Qué diferencia fundamental separa cost optimization de sustainability?',
		options: [
			'Cost optimization busca aumentar el gasto y sustainability busca reducirlo.',
			'Cost optimization reduce el coste que no aporta valor; sustainability reduce el consumo de recursos y el impacto ambiental.',
			'Cost optimization es un pilar y sustainability es una perspectiva del AWS Cloud Adoption Framework.',
			'Ambos son sinónimos: los dos miden la factura por servicio.',
		],
		correctAnswer: 1,
		explanation:
			'Cost optimization se centra en pagar solo por lo que aporta valor y evitar el gasto innecesario; sustainability, en reducir el consumo y la huella ambiental de la carga. Son pilares distintos, aunque medidas como el right-sizing o apagar lo ocioso mejoran ambos.',
	},
	{
		id: '1.2-q8',
		taskId: '1.2',
		objetivos: ['1.2#3'],
		tipo: 'escenario',
		question:
			'Una aplicación con recursos bien dimensionados responde con latencia alta bajo carga y el informe de revisión lo etiqueta como «problema de fiabilidad». ¿Qué corrección es más precisa?',
		options: [
			'Es un problema de operational excellence, porque falta automatización.',
			'Es un problema de security, porque la latencia expone los datos.',
			'Es un problema de performance efficiency: los recursos no se eligen ni se escalan de forma adecuada para la carga.',
			'Es un problema de cost optimization, porque la latencia indica gasto excesivo.',
		],
		correctAnswer: 2,
		explanation:
			'La latencia mide rendimiento y corresponde a Performance efficiency. Reliability trataría la tolerancia a fallos, no la velocidad; ni Security ni Cost optimization describen este síntoma.',
	},
	{
		id: '1.2-q9',
		taskId: '1.2',
		objetivos: ['1.2#2'],
		tipo: 'tradeoff',
		question:
			'Un equipo debe decidir entre replicar en dos ubicaciones para tolerar fallos o consolidar en una sola para reducir coste. ¿Cómo aborda el AWS Well-Architected Framework esta decisión?',
		options: [
			'Elige siempre la opción más barata, porque cost optimization es el pilar prioritario.',
			'Equilibra los pilares: documenta el compromiso entre reliability y cost optimization según el impacto de negocio.',
			'Ignora el coste, porque la fiabilidad siempre va primero.',
			'Traslada la decisión a sustainability, que cubre ambos pilares.',
		],
		correctAnswer: 1,
		explanation:
			'La revisión no corona un pilar: hace explícito el compromiso. La redundancia mejora Reliability a cambio de asumir más coste; el equipo decide el equilibrio según la criticidad y el presupuesto, y documenta la decisión.',
	},
];
