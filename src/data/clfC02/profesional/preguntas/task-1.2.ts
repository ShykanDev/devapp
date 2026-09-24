import type { PreguntaProfesionalClfC02 } from '@/data/clfC02/profesional/types';

export const profesionalTask12: PreguntaProfesionalClfC02[] = [
	{
		id: 'prof-1.2-q1',
		taskId: '1.2',
		objetivos: ['1.2#1'],
		tipo: 'trampa',
		question: '¿Qué es el AWS Well-Architected Framework?',
		options: [
			'Un conjunto de buenas prácticas y principios de diseño para evaluar y mejorar arquitecturas en la nube.',
			'Una lista de comprobación obligatoria que AWS valida antes de permitir desplegar en producción.',
			'Una herramienta de facturación que estima el coste mensual de una arquitectura.',
			'Un servicio que aplica parches de seguridad automáticamente a las instancias.',
		],
		correctAnswer: 0,
		explanation:
			'El AWS Well-Architected Framework es una guía de buenas prácticas y principios de diseño que ayuda a revisar y mejorar arquitecturas. No es una validación previa al despliegue, ni una calculadora de costes, ni un servicio de aplicación de parches.',
		porQueOpcion: [
			'Correcta: es el conjunto de buenas prácticas y principios para diseñar y revisar arquitecturas.',
			'Incorrecta: no existe una validación obligatoria de AWS que bloquee despliegues en producción.',
			'Incorrecta: el Framework no factura ni estima costes; eso corresponde a otras herramientas.',
			'Incorrecta: aplicar parches es tarea de gestión, no la función del Framework.',
		],
	},
	{
		id: 'prof-1.2-q2',
		taskId: '1.2',
		objetivos: ['1.2#1'],
		tipo: 'comparacion',
		question:
			'¿Qué relación existe entre el AWS Well-Architected Framework y AWS Well-Architected Tool?',
		options: [
			'El Framework es el conjunto de principios y buenas prácticas; la Tool es el servicio que permite revisar una carga de trabajo frente a esos principios.',
			'El Framework es el servicio de consola y la Tool es la documentación que lo describe.',
			'Ambos son lo mismo: la Tool es solo el nombre del Framework en la consola.',
			'La Tool define los pilares y el Framework almacena los resultados de las revisiones.',
		],
		correctAnswer: 0,
		explanation:
			'El Framework aporta el contenido (principios y buenas prácticas) y AWS Well-Architected Tool es el servicio que guía la revisión de una carga de trabajo contra ese contenido. No son el mismo elemento ni intercambian sus funciones.',
		porQueOpcion: [
			'Correcta: el Framework define el contenido y la Tool lo aplica en revisiones.',
			'Incorrecta: se invierten los papeles; la Tool es el servicio y el Framework la guía.',
			'Incorrecta: no son lo mismo; el Framework es la guía y la Tool una herramienta de revisión.',
			'Incorrecta: los pilares provienen del Framework; la Tool no los define ni almacena resultados.',
		],
	},
	{
		id: 'prof-1.2-q3',
		taskId: '1.2',
		objetivos: ['1.2#2'],
		tipo: 'trampa',
		question: '¿Cuál lista corresponde a los pilares del AWS Well-Architected Framework?',
		options: [
			'Excelencia operativa, seguridad, fiabilidad, eficiencia del rendimiento, optimización de costes y sostenibilidad.',
			'Excelencia operativa, seguridad, escalabilidad automática, eficiencia del rendimiento, optimización de costes y alta disponibilidad.',
			'Seguridad, fiabilidad, elasticidad, rendimiento, control de costes y sostenibilidad.',
			'Excelencia operativa, cumplimiento, fiabilidad, eficiencia del rendimiento, optimización de costes y agilidad.',
		],
		correctAnswer: 0,
		explanation:
			'Los seis pilares son excelencia operativa, seguridad, fiabilidad, eficiencia del rendimiento, optimización de costes y sostenibilidad. Escalabilidad, alta disponibilidad, elasticidad, cumplimiento y agilidad son conceptos importantes, pero no pilares.',
		porQueOpcion: [
			'Correcta: enumera los seis pilares reales del Framework.',
			'Incorrecta: escalabilidad automática y alta disponibilidad no son pilares.',
			'Incorrecta: elasticidad y control de costes sustituyen indebidamente a excelencia operativa y optimización de costes.',
			'Incorrecta: cumplimiento y agilidad no son pilares del Framework.',
		],
	},
	{
		id: 'prof-1.2-q4',
		taskId: '1.2',
		objetivos: ['1.2#2'],
		tipo: 'comparacion',
		question:
			'Un equipo quiere que su carga de trabajo se recupere de fallos y siga satisfaciendo la demanda. ¿Qué pilar se centra directamente en ese objetivo?',
		options: [
			'Fiabilidad (reliability).',
			'Excelencia operativa (operational excellence).',
			'Eficiencia del rendimiento (performance efficiency).',
			'Optimización de costes (cost optimization).',
		],
		correctAnswer: 0,
		explanation:
			'El pilar de fiabilidad se ocupa de que la carga de trabajo funcione correctamente y se recupere de fallos según lo esperado. Excelencia operativa cubre las operaciones, eficiencia del rendimiento el uso óptimo de recursos y optimización de costes el gasto.',
		porQueOpcion: [
			'Correcta: la fiabilidad trata la recuperación ante fallos y el cumplimiento de la demanda.',
			'Incorrecta: la excelencia operativa se centra en ejecutar y mejorar procesos y operaciones.',
			'Incorrecta: la eficiencia del rendimiento optimiza el uso de los recursos para los requisitos dados.',
			'Incorrecta: la optimización de costes busca evitar gasto innecesario.',
		],
	},
	{
		id: 'prof-1.2-q5',
		taskId: '1.2',
		objetivos: ['1.2#2'],
		tipo: 'escenario',
		question:
			'Una empresa debe reducir el consumo de energía y el impacto ambiental de sus cargas de trabajo en AWS. ¿Qué pilar del Framework aborda directamente ese objetivo?',
		options: [
			'Sostenibilidad (sustainability).',
			'Optimización de costes (cost optimization).',
			'Eficiencia del rendimiento (performance efficiency).',
			'Excelencia operativa (operational excellence).',
		],
		correctAnswer: 0,
		explanation:
			'El pilar de sostenibilidad se centra en minimizar el impacto ambiental de las cargas de trabajo. Optimizar costes o rendimiento puede reducir el consumo indirectamente, pero el objetivo ambiental corresponde a sostenibilidad.',
		porQueOpcion: [
			'Correcta: la sostenibilidad aborda explícitamente el impacto ambiental.',
			'Incorrecta: optimización de costes busca reducir gasto, no el impacto ambiental como objetivo.',
			'Incorrecta: eficiencia del rendimiento busca usar mejor los recursos, no medir la huella ambiental.',
			'Incorrecta: excelencia operativa trata procesos y operaciones, no sostenibilidad ambiental.',
		],
	},
	{
		id: 'prof-1.2-q6',
		taskId: '1.2',
		objetivos: ['1.2#3'],
		tipo: 'comparacion',
		question:
			'¿Qué distingue al pilar de fiabilidad del pilar de eficiencia del rendimiento?',
		options: [
			'Fiabilidad busca que la carga se recupere de fallos y cumpla su función; eficiencia del rendimiento busca usar los recursos de forma óptima para los requisitos.',
			'Fiabilidad optimiza el gasto; eficiencia del rendimiento reduce el impacto ambiental.',
			'Fiabilidad se centra en la protección de los datos; eficiencia del rendimiento en la automatización de cambios.',
			'Ambos persiguen lo mismo: reducir el coste por transacción.',
		],
		correctAnswer: 0,
		explanation:
			'La fiabilidad garantiza que la carga funcione y se recupere ante fallos; la eficiencia del rendimiento selecciona y ajusta recursos para cumplir los requisitos de forma óptima. Gasto y sostenibilidad pertenecen a otros pilares.',
		porQueOpcion: [
			'Correcta: separa recuperación ante fallos de uso óptimo de recursos.',
			'Incorrecta: asigna a fiabilidad el coste y a rendimiento la sostenibilidad, que son otros pilares.',
			'Incorrecta: confunde fiabilidad con seguridad y rendimiento con excelencia operativa.',
			'Incorrecta: ninguno de los dos pilares tiene como meta principal el coste por transacción.',
		],
	},
	{
		id: 'prof-1.2-q7',
		taskId: '1.2',
		objetivos: ['1.2#3'],
		tipo: 'comparacion',
		question:
			'Un equipo confunde el pilar de excelencia operativa con el de seguridad. ¿Qué distingue a cada uno?',
		options: [
			'Excelencia operativa cubre la ejecución y la mejora de las operaciones y procesos; seguridad protege la información, los sistemas y los activos.',
			'Excelencia operativa protege los datos; seguridad se ocupa de ejecutar y mejorar las operaciones.',
			'Excelencia operativa reduce el coste; seguridad mide y optimiza el rendimiento.',
			'Ambos tratan exclusivamente del cifrado y de la gestión de identidades.',
		],
		correctAnswer: 0,
		explanation:
			'Excelencia operativa se centra en operar y mejorar procesos y flujos de trabajo; seguridad se centra en proteger información, sistemas y activos. Las demás opciones intercambian o inventan sus responsabilidades.',
		porQueOpcion: [
			'Correcta: operaciones y procesos frente a protección de información y activos.',
			'Incorrecta: intercambia las definiciones de ambos pilares.',
			'Incorrecta: coste y rendimiento pertenecen a otros pilares, no a excelencia operativa ni seguridad.',
			'Incorrecta: el cifrado y las identidades son parte de seguridad, no de excelencia operativa.',
		],
	},
	{
		id: 'prof-1.2-q8',
		taskId: '1.2',
		objetivos: ['1.2#3'],
		tipo: 'tradeoff',
		question:
			'Elegir un pilar como prioridad absoluta es un error común. ¿Qué describe correctamente la relación entre los pilares?',
		options: [
			'No son independientes: muchas decisiones implican compromisos entre ellos, por ejemplo más fiabilidad puede aumentar el coste.',
			'Son totalmente independientes: optimizar uno nunca afecta a los demás.',
			'Solo se puede aplicar un pilar a la vez; combinar dos invalida la revisión.',
			'El pilar de costes siempre prevalece sobre los demás para minimizar la factura.',
		],
		correctAnswer: 0,
		explanation:
			'Los pilares interactúan de forma que las decisiones suelen implicar compromisos: más fiabilidad o rendimiento puede elevar el coste. No son independientes, no se aplican de uno en uno y ninguno prevalece siempre sobre el resto.',
		porQueOpcion: [
			'Correcta: reconoce los compromisos (tradeoffs) entre pilares.',
			'Incorrecta: los pilares se afectan entre sí; no son independientes.',
			'Incorrecta: se evalúan y equilibran en conjunto, no de uno en uno de forma excluyente.',
			'Incorrecta: la optimización de costes no es una prioridad que anule a los demás pilares.',
		],
	},
];
