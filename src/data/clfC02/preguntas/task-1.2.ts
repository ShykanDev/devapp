import type { PreguntaClfC02 } from '@/data/clfC02/types';

export const preguntasTask12: PreguntaClfC02[] = [
	{
		id: '1.2-q1',
		taskId: '1.2',
		objetivos: ['1.2#1'],
		tipo: 'conocimiento',
		question: '¿Qué es el AWS Well-Architected Framework?',
		options: [
			'Un servicio gestionado que despliega de forma automática una arquitectura de referencia y la mantiene actualizada.',
			'Un conjunto de buenas prácticas, principios y preguntas para evaluar y mejorar el diseño de una carga de trabajo.',
			'Una certificación obligatoria para publicar aplicaciones en la nube.',
			'El AWS Well-Architected Tool, que reúne las buenas prácticas y principios de diseño del marco.',
		],
		correctAnswer: 1,
		explanation:
			'El AWS Well-Architected Framework es una guía de diseño: reúne buenas prácticas y preguntas para revisar una carga de trabajo. No despliega recursos, no certifica y no es el AWS Well-Architected Tool, que es el servicio que aplica ese contenido al revisar una carga. Si el objetivo fuera estimar el coste de una configuración, la herramienta adecuada sería otra y no este marco de diseño.',
		porQueOpcion: [
			'Incorrecta: el Framework no despliega recursos; es una guía de diseño y no un servicio gestionado.',
			'Correcta: reúne buenas prácticas, principios y preguntas para evaluar y mejorar el diseño de una carga de trabajo.',
			'Incorrecta: no es una certificación obligatoria para publicar aplicaciones en la nube.',
			'Incorrecta: el AWS Well-Architected Tool es el servicio que guía la revisión, no el marco que reúne las buenas prácticas y principios.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/wellarchitected/',
		],
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
			'Un grupo de AWS Auto Scaling que mida la disponibilidad y genere el informe de riesgos de la carga.',
			'Un bucket de Amazon S3 para almacenar los diagramas de la arquitectura.',
			'El panel de facturación, porque resume el gasto por servicio.',
		],
		correctAnswer: 0,
		explanation:
			'El AWS Well-Architected Tool conduce la revisión pilar a pilar y produce un informe de riesgos con un plan de mejora. No es un servicio de cómputo ni de almacenamiento: apoya la revisión del diseño. Si el requisito fuera solo almacenar los diagramas de la arquitectura, bastaría con un servicio de almacenamiento de objetos.',
		porQueOpcion: [
			'Correcta: la AWS Well-Architected Tool guía la revisión por pilar y genera un plan de mejora con los riesgos priorizados.',
			'Incorrecta: Auto Scaling ajusta capacidad de cómputo; no realiza revisiones de arquitectura ni informes de riesgos.',
			'Incorrecta: un bucket de S3 solo almacena objetos y no evalúa el diseño de la carga.',
			'Incorrecta: el panel de facturación resume gasto, no documenta riesgos ni prioriza mejoras de arquitectura.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/autoscaling/',
			'https://docs.aws.amazon.com/s3/',
			'https://docs.aws.amazon.com/wellarchitected/',
		],
	},
	{
		id: '1.2-q3',
		taskId: '1.2',
		objetivos: ['1.2#2'],
		tipo: 'comparacion',
		question: '¿Cuál de estos conjuntos enumera correctamente los pilares del AWS Well-Architected Framework?',
		options: [
			'Operational excellence, security, reliability, performance efficiency, cost optimization y sustainability.',
			'Compute, storage, database, networking, security y cost management como categorías de servicios de la carga.',
			'Business, people, governance, platform, security y operations.',
			'Rehost, replatform, repurchase, refactor, retire y retain.',
		],
		correctAnswer: 0,
		explanation:
			'Los seis pilares son operational excellence, security, reliability, performance efficiency, cost optimization y sustainability. La opción con business, people y governance corresponde al AWS Cloud Adoption Framework; compute, storage y database son categorías de servicios; y rehost, replatform y refactor son estrategias de migración. Si el escenario pidiera ordenar la adopción organizativa, la respuesta correcta sería la lista del AWS CAF.',
		porQueOpcion: [
			'Correcta: enumera los seis pilares oficiales del AWS Well-Architected Framework.',
			'Incorrecta: compute, storage y database son categorías de servicios, no pilares del Framework.',
			'Incorrecta: business, people y governance son perspectivas del AWS Cloud Adoption Framework, no pilares.',
			'Incorrecta: rehost, replatform y refactor son estrategias de migración (las «7 R»), no pilares.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html',
		],
	},
	{
		id: '1.2-q4',
		taskId: '1.2',
		objetivos: ['1.2#2'],
		tipo: 'escenario',
		question:
			'Una empresa con un presupuesto mensual acotado quiere que su aplicación siga atendiendo peticiones aunque falle un componente y, a la vez, que ante un pico de tráfico crezca de forma automática. ¿Qué pilares abordan estos dos requisitos?',
		options: [
			'Reliability y performance efficiency.',
			'Security y cost optimization.',
			'Sustainability y operational excellence.',
			'Operational excellence y security.',
		],
		correctAnswer: 0,
		explanation:
			'Seguir operando pese a un fallo es Reliability, que cubre redundancia y tolerancia a fallos; adaptarse a la demanda con eficiencia es Performance efficiency, que cubre la selección de recursos y la elasticidad. Si el escenario pidiera solo uno de los dos requisitos, la respuesta se reduciría a Reliability o a Performance efficiency según el caso.',
		porQueOpcion: [
			'Correcta: Reliability cubre seguir operando ante fallos y Performance efficiency, adaptarse a la demanda con eficiencia.',
			'Incorrecta: Security protege datos y accesos y Cost optimization reduce gasto; ninguno aborda tolerancia a fallos ni elasticidad.',
			'Incorrecta: Sustainability reduce impacto ambiental y Operational excellence mejora procesos; no cubren esos dos requisitos.',
			'Incorrecta: Operational excellence automatiza operaciones y Security gestiona identidades, no tolerancia a fallos ni escalado.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html',
		],
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
			'Los runbooks, la automatización de despliegues y la mejora continua pertenecen a Operational excellence. No es un problema de coste, de rendimiento ni de sostenibilidad. Si el escenario fuera un corte del servicio, el hallazgo apuntaría a Reliability y no a Operational excellence.',
		porQueOpcion: [
			'Incorrecta: la falta de runbooks no es un problema de gasto, sino de operación.',
			'Correcta: procedimientos documentados y automatización de despliegues pertenecen a Operational excellence.',
			'Incorrecta: Sustainability mide consumo e impacto ambiental, no la documentación de operaciones.',
			'Incorrecta: Performance efficiency elige recursos y escala; no trata la falta de procedimientos operativos.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html',
		],
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
			'Reliability diseña la automatización de las operaciones; performance efficiency, la gobernanza de las identidades y de los accesos de la organización.',
		],
		correctAnswer: 0,
		explanation:
			'Reliability responde a si el sistema sigue funcionando ante fallos; performance efficiency, a si la carga usa los recursos adecuados y escala. La automatización operativa es Operational excellence y la gestión de identidades es Security. Si el escenario pidiera reducir el gasto, la respuesta sería Cost optimization y no Performance efficiency.',
		porQueOpcion: [
			'Correcta: distingue sobrevivir a fallos (Reliability) de usar los recursos adecuados y escalar (Performance efficiency).',
			'Incorrecta: la factura es Cost optimization y la seguridad de datos es Security; no definen estos dos pilares.',
			'Incorrecta: son pilares distintos con propósitos diferentes, no el mismo con otro nombre.',
			'Incorrecta: la automatización operativa es Operational excellence y la gestión de identidades es Security.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html',
		],
	},
	{
		id: '1.2-q7',
		taskId: '1.2',
		objetivos: ['1.2#3'],
		tipo: 'conocimiento',
		question: '¿Qué diferencia fundamental separa cost optimization de sustainability?',
		options: [
			'Cost optimization busca aumentar el gasto de forma sostenida y deliberada, y sustainability busca reducirlo cada año en la nube.',
			'Cost optimization reduce el coste que no aporta valor; sustainability reduce el consumo de recursos y el impacto ambiental.',
			'Cost optimization es un pilar y sustainability es una perspectiva del AWS Cloud Adoption Framework.',
			'Ambos son sinónimos: los dos miden la factura por servicio.',
		],
		correctAnswer: 1,
		explanation:
			'Cost optimization se centra en pagar solo por lo que aporta valor y evitar el gasto innecesario; sustainability, en reducir el consumo y la huella ambiental de la carga. Son pilares distintos, aunque medidas como el right-sizing o apagar lo ocioso mejoran ambos. Si el requisito fuera solo reducir la factura, la respuesta sería Cost optimization; el matiz ambiental corresponde a Sustainability.',
		porQueOpcion: [
			'Incorrecta: Cost optimization busca evitar el gasto innecesario, no aumentar el gasto de forma deliberada.',
			'Correcta: separa el coste que no aporta valor (Cost optimization) del consumo y la huella ambiental (Sustainability).',
			'Incorrecta: Sustainability es un pilar del Well-Architected Framework, no una perspectiva del AWS CAF.',
			'Incorrecta: no son sinónimos: persiguen objetivos distintos aunque medidas concretas mejoren ambos.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html',
		],
	},
	{
		id: '1.2-q8',
		taskId: '1.2',
		objetivos: ['1.2#3'],
		tipo: 'escenario',
		question:
			'Una aplicación con recursos bien dimensionados responde con latencia alta bajo carga y el informe de revisión lo etiqueta como «problema de fiabilidad». ¿Qué corrección es más precisa?',
		options: [
			'Es un problema de operational excellence, porque faltan automatización y runbooks en el despliegue de los cambios.',
			'Es un problema de security, porque la latencia expone los datos.',
			'Es un problema de performance efficiency: los recursos no se eligen ni se escalan de forma adecuada para la carga.',
			'Es un problema de cost optimization, porque la latencia indica gasto excesivo.',
		],
		correctAnswer: 2,
		explanation:
			'La latencia mide rendimiento y corresponde a Performance efficiency. Reliability trataría la tolerancia a fallos, no la velocidad; ni Security ni Cost optimization describen este síntoma. Si el escenario fuera un corte por el fallo de una zona, entonces sí sería un problema de Reliability.',
		porQueOpcion: [
			'Incorrecta: no faltan runbooks ni automatización; el síntoma es latencia bajo carga, propio del rendimiento.',
			'Incorrecta: la latencia es un problema de rendimiento y no expone los datos, que sería Security.',
			'Correcta: la latencia alta indica que los recursos no se eligen ni escalan de forma adecuada para la carga.',
			'Incorrecta: la latencia no demuestra gasto excesivo; el síntoma corresponde a Performance efficiency.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html',
		],
	},
	{
		id: '1.2-q9',
		taskId: '1.2',
		objetivos: ['1.2#2'],
		tipo: 'tradeoff',
		question:
			'Un equipo debe decidir entre replicar en dos ubicaciones para tolerar fallos o consolidar en una sola para reducir coste. ¿Cómo aborda el AWS Well-Architected Framework esta decisión?',
		options: [
			'Elige siempre la opción más barata, porque cost optimization es el pilar que siempre debe priorizarse por encima de los demás.',
			'Equilibra los pilares: documenta el compromiso entre reliability y cost optimization según el impacto de negocio.',
			'Ignora el coste, porque la fiabilidad siempre va primero.',
			'Traslada la decisión a sustainability, que cubre ambos pilares.',
		],
		correctAnswer: 1,
		explanation:
			'La revisión no corona un pilar: hace explícito el compromiso. La redundancia mejora Reliability a cambio de asumir más coste; el equipo decide el equilibrio según la criticidad y el presupuesto, y documenta la decisión. Si el requisito fuera minimizar el gasto a cualquier precio, no sería un buen equilibrio y el Framework seguiría pidiendo documentar el compromiso.',
		porQueOpcion: [
			'Incorrecta: el Framework no corona un pilar ni prioriza siempre el menor coste; hace explícito el compromiso.',
			'Correcta: equilibra los pilares documentando el trade-off entre Reliability y Cost optimization según el impacto de negocio.',
			'Incorrecta: ignorar el coste tampoco es correcto: el compromiso debe considerar el impacto de negocio.',
			'Incorrecta: Sustainability trata el consumo ambiental y no cubre la decisión entre fiabilidad y coste.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html',
		],
	},
	{
		id: '1.2-q10',
		taskId: '1.2',
		objetivos: ['1.2#1'],
		tipo: 'escenario',
		question:
			'Un equipo va a poner en producción una aplicación nueva y quiere detectar riesgos de diseño antes del lanzamiento, dejando constancia de las mejoras acordadas. ¿Qué recurso encaja mejor?',
		options: [
			'Revisar la carga de trabajo con la AWS Well-Architected Tool, que guía el cuestionario por pilar y produce un plan de mejora.',
			'Contratar AWS Enterprise Support, porque su equipo rediseña por completo la arquitectura de la aplicación durante el proyecto de migración.',
			'Abrir un caso en el AWS Support Center para que AWS valide la arquitectura antes de permitir el despliegue.',
			'Habilitar AWS Trusted Advisor, porque aplica automáticamente las recomendaciones de diseño al entorno.',
		],
		correctAnswer: 0,
		explanation:
			'La AWS Well-Architected Tool conduce la revisión pilar a pilar de una carga de trabajo y genera un plan de mejora con los riesgos priorizados, que es justo lo que el equipo busca antes de lanzar. El soporte no certifica ni reescribe la arquitectura, y AWS Trusted Advisor aporta recomendaciones pero no aplica los cambios por sí solo. Si el requisito fuera validar técnicamente el diseño de una sola carga, la herramienta de revisión seguiría siendo la respuesta; el soporte encajaría si lo que se pidiera fuera asistencia técnica de cuenta.',
		porQueOpcion: [
			'Correcta: la Well-Architected Tool guía la revisión por pilar y produce un plan de mejora con riesgos priorizados.',
			'Incorrecta: el soporte no rediseña la arquitectura ni sustituye la revisión de la carga.',
			'Incorrecta: el AWS Support Center no valida ni certifica arquitecturas como requisito de despliegue.',
			'Incorrecta: Trusted Advisor aporta recomendaciones, pero no aplica los cambios de diseño por sí solo.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/awssupport/latest/user/trusted-advisor.html',
			'https://docs.aws.amazon.com/wellarchitected/',
			'https://docs.aws.amazon.com/awssupport/latest/user/getting-started.html',
		],
	},
];
