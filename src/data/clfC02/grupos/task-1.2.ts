import type { GrupoTematico } from '@/data/clfC02/types';

export const gruposTask12: GrupoTematico[] = [
	{
		id: '1.2-g1',
		titulo: 'El Well-Architected Framework como guía de diseño',
		objetivos: ['1.2#1'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'El **Well-Architected Framework** es una guía de diseño que reúne buenas prácticas, principios y preguntas para evaluar y mejorar la arquitectura de una carga de trabajo en la nube. No crea ni gestiona recursos: ordena las decisiones de diseño para que la carga sea segura, fiable, eficiente y sostenible. Su unidad de análisis es la **carga de trabajo (workload)**, no la cuenta ni la organización.\n\nLa revisión se apoya en la **Well-Architected Tool**, que conduce un cuestionario pilar a pilar, recoge las respuestas y genera un plan de mejora con los riesgos identificados. El resultado es un informe de riesgos altos y medios que el equipo prioriza; no es una certificación ni una auditoría automática.',
			},
			{
				tipo: 'ejemplo',
				md: '```text\nRevisión de una aplicación web:\n1. Describir la carga: usuarios, datos y dependencias.\n2. Responder las preguntas de cada pilar.\n3. Marcar los riesgos altos y medios.\n4. Acordar un plan de mejora con responsables.\n\nEntrada -> preguntas de diseño\nSalida  -> lista priorizada de mejoras, nunca recursos creados\n```',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Antes de poner una carga en producción, para detectar riesgos de diseño a tiempo.',
					'Tras un incidente o un cambio grande, para comprobar si el diseño sigue siendo el adecuado.',
					'Como marco común entre equipos para hablar de fiabilidad, coste y seguridad con el mismo vocabulario.',
				],
				noUsar: [
					'No lo uses como sustituto de las pruebas de carga ni de los planes de continuidad: orienta el diseño, no ejecuta la validación.',
					'No esperes que cree la infraestructura ni que corrija los hallazgos por sí solo; el plan de mejora lo ejecuta el equipo.',
				],
			},
			{
				tipo: 'clave',
				items: [
					'El Well-Architected Framework es una guía de diseño, no un servicio que despliegue infraestructura.',
					'Se aplica a una carga de trabajo y la revisa pilar a pilar.',
					'La Well-Architected Tool conduce la revisión y produce un plan de mejora con riesgos priorizados.',
					'El resultado es una lista de mejoras acordadas, no una certificación.',
				],
			},
		],
		preguntasGuia: [
			'¿Qué es el Well-Architected Framework y qué no es?',
			'¿Sobre qué se aplica la revisión: la cuenta o una carga de trabajo?',
			'¿Qué aporta la Well-Architected Tool al proceso de revisión?',
		],
	},
	{
		id: '1.2-g2',
		titulo: 'Los seis pilares y el equilibrio entre ellos',
		objetivos: ['1.2#2'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'El Well-Architected Framework se organiza en **seis pilares**, y cada uno responde a una pregunta distinta de diseño:\n\n- **Operational excellence**: ¿cómo operamos la carga y la mejoramos de forma continua? Cubre despliegues, observabilidad, runbooks y aprendizaje tras los incidentes.\n- **Security**: ¿cómo protegemos la información y el acceso? Cubre identidades, permisos, cifrado, detección y respuesta.\n- **Reliability**: ¿cómo sigue funcionando la carga cuando algo falla? Cubre redundancia, recuperación y tolerancia a fallos.\n- **Performance efficiency**: ¿cómo usamos los recursos de forma adecuada y escalamos con la demanda? Cubre selección de recursos y elasticidad.\n- **Cost optimization**: ¿cómo pagamos solo por lo que aporta valor? Cubre dimensionado, compromiso de uso y control del gasto.\n- **Sustainability**: ¿cómo reducimos el consumo y el impacto ambiental de la carga? Cubre eficiencia energética y ciclo de vida de los recursos.\n\nLos pilares no compiten entre sí: se equilibran. Un diseño excelente en fiabilidad pero insostenible en coste no es un buen diseño; la revisión hace explícitos los compromisos.',
			},
			{
				tipo: 'comparacion',
				parId: 'well-architected-pillars',
			},
			{
				tipo: 'escenario',
				situacion: 'Un equipo revisa su plataforma y encuentra tres problemas a la vez: la base de datos se cae con frecuencia, no existen procedimientos de operación ni despliegues automatizados, y la factura creció por instancias sobredimensionadas. Necesita clasificar cada hallazgo en el pilar que le corresponde.',
				analisis: 'El fallo recurrente de la base de datos apunta a **Reliability**; la ausencia de runbooks y automatización, a **Operational excellence**; y el sobredimensionamiento, a **Cost optimization**. Asignar cada hallazgo a un pilar concreto permite priorizar acciones en lugar de tratar la revisión como un único aprobado o suspenso.',
				servicio: 'AWS Well-Architected Tool',
			},
			{
				tipo: 'errorComun',
				error: 'Elegir un pilar favorito, normalmente seguridad o coste, y evaluar la carga solo contra él.',
				correccion: 'La revisión recorre los seis pilares. Un buen diseño equilibra fiabilidad, coste, rendimiento y sostenibilidad a la vez; dejar un pilar sin evaluar mantiene sus riesgos fuera del informe.',
			},
			{
				tipo: 'clave',
				items: [
					'Seis pilares: operational excellence, security, reliability, performance efficiency, cost optimization y sustainability.',
					'Cada pilar responde a una pregunta de diseño distinta.',
					'La revisión busca equilibrio entre pilares, no un pilar ganador.',
					'Cada hallazgo se asigna al pilar que le corresponde para poder priorizarlo.',
				],
			},
		],
		preguntasGuia: [
			'¿Qué pregunta de diseño responde cada uno de los seis pilares?',
			'¿Por qué la revisión no elige un pilar prioritario sobre los demás?',
			'¿A qué pilar asignarías un fallo de disponibilidad o un sobredimensionamiento?',
		],
	},
	{
		id: '1.2-g3',
		titulo: 'Diferencias entre pilares: asignar bien cada decisión',
		objetivos: ['1.2#3'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'Cada pilar mira la carga desde un ángulo distinto, y por eso una misma decisión técnica puede mejorar uno y empeorar otro.\n\n- **Reliability** pregunta si el sistema sigue funcionando pese a los fallos; **performance efficiency** pregunta si usa los recursos adecuados y escala con la demanda.\n- **Cost optimization** pregunta si se paga solo por lo que aporta valor; **sustainability** pregunta si se reduce el consumo y el impacto ambiental.\n- **Security** pregunta si se protegen la información y el acceso; **operational excellence** pregunta si se opera y se mejora con procesos y automatización.\n\nDistinguir el pilar correcto evita confundir causas: una latencia alta es un asunto de rendimiento, no de fiabilidad; una factura inflada es un asunto de coste, no de seguridad.',
			},
			{
				tipo: 'comparacion',
				parId: 'well-architected-pillars',
			},
			{
				tipo: 'ejemplo',
				md: '```text\nSíntoma -> pilar al que apunta\n- Se pierde una ubicación y hay corte       -> Reliability\n- La aplicación responde lenta con carga    -> Performance efficiency\n- Instancias sobredimensionadas             -> Cost optimization\n- Datos sin cifrar ni control de acceso     -> Security\n- Sin runbooks ni automatización            -> Operational excellence\n- Recursos ociosos y desperdicio energético -> Sustainability\n```',
			},
			{
				tipo: 'errorComun',
				error: 'Atribuir todo problema de lentitud a la fiabilidad o todo sobrecoste a la seguridad, mezclando el pilar que corresponde.',
				correccion: 'Cada pilar responde a una pregunta distinta y la solución cambia con él: la fiabilidad se resuelve con redundancia y recuperación, el rendimiento con dimensionado y escalado, y el coste con compromiso de uso y control del gasto.',
			},
		],
		preguntasGuia: [
			'¿En qué se diferencia reliability de performance efficiency?',
			'¿Qué separa cost optimization de sustainability?',
			'¿Cómo se asigna un síntoma concreto al pilar correcto?',
		],
	},
];
