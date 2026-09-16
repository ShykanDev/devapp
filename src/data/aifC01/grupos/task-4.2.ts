import type { GrupoTematico } from '@/data/aifC01/types';

export const gruposTask42: GrupoTematico[] = [
	{
		id: '4.2-g1',
		titulo: 'Modelos transparentes, explicables y de caja negra',
		objetivos: ['4.2#1'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'Un modelo es **transparente** cuando se puede inspeccionar cómo llega a su resultado: qué datos usó, qué variables pesan y qué reglas internas sigue. Es **explicable** cuando, sin necesidad de abrir el modelo, sus decisiones se pueden justificar de forma comprensible para una persona. Un modelo **de caja negra** (ni transparente ni explicable) puede ser muy preciso, pero no permite responder «¿por qué esta decisión y no otra?».\n\n- **Transparencia intrínseca**: el propio modelo es interpretable por construcción (árboles de decisión, regresiones con pocas variables).\n- **Explicabilidad post hoc**: se añaden herramientas externas para aproximar una explicación (importancia de variables, ejemplos representativos, resúmenes de comportamiento).\n- **Opacidad justificada**: hay casos donde el rendimiento o la protección de la propiedad intelectual llevan a no abrir el modelo, siempre que existan controles compensatorios.\n\nLa clave es no confundir «potente» con «explicable»: son ejes independientes y un proveedor puede ser opaco incluso siendo excelente.',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Cuando la decisión afecta a derechos, dinero o acceso a un servicio y debe poder justificarse ante la persona afectada o ante un auditor.',
					'Cuando el equipo está dispuesto a ceder algo de precisión para ganar trazabilidad.',
					'Cuando quieres comparar el comportamiento entre versiones del modelo con evidencia, no con impresiones.',
				],
				noUsar: [
					'No exijas transparencia total en tareas creativas o de bajo impacto donde no se decide sobre personas.',
					'No interpretes transparencia como publicar pesos, datos o código: es una propiedad del proceso, no una obligación de apertura total.',
				],
			},
			{
				tipo: 'errorComun',
				error: 'Creer que un modelo generativo es explicable porque devuelve un párrafo que justifica su decisión.',
				correccion:
					'Una explicación redactada puede ser plausible y no ser la causa real de la decisión. La explicabilidad se respalda con evidencia del comportamiento del modelo (variables influyentes, ejemplos, evaluaciones), no con una narración verosímil.',
			},
			{
				tipo: 'ejemplo',
				md: '```text\nPregunta típica: ¿qué significa que un modelo sea "explicable"?\nIncorrecto: "que el proveedor publique el código fuente".\nCorrecto: "que sus decisiones puedan justificarse de forma comprensible para las personas afectadas".\n```',
			},
		],
		preguntasGuia: [
			'¿Qué diferencia hay entre transparencia y explicabilidad?',
			'¿Por qué un modelo de caja negra puede ser preciso y, aun así, inadecuado para ciertos usos?',
			'¿Cuándo resulta razonable aceptar un modelo que no es explicable?',
		],
	},
	{
		id: '4.2-g2',
		titulo: 'Herramientas para identificar modelos transparentes y explicables',
		objetivos: ['4.2#2'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'Para saber si un modelo es transparente y explicable no basta con la ficha comercial del proveedor: hay que documentar y medir. Las herramientas habituales son:\n\n- **Fichas de modelo (model cards)**: documentan uso previsto, datos de entrenamiento, métricas, limitaciones y licencia. **Amazon SageMaker Model Cards** permite registrar esta documentación junto al modelo.\n- **Evaluaciones de modelos**: comparan modelos con conjuntos de referencia y criterios de calidad. **Amazon Bedrock Model Evaluations** permite ejecutar evaluaciones automáticas y con revisión humana sobre modelos de Amazon Bedrock.\n- **Modelos de código abierto**: el acceso a los pesos y al código permite inspeccionar y reproducir, a cambio de asumir el mantenimiento y verificar la licencia de uso comercial.\n- **Datos y licencias**: la trazabilidad del origen de los datos y los términos de uso condicionan si el modelo puede auditarse y desplegarse.\n\nNingún artefacto sustituye a los demás: la licencia no describe el rendimiento, la ficha no demuestra el comportamiento y la apertura del código no garantiza que los datos sean adecuados.',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Antes de aprobar un modelo para un caso de uso regulado: revisa ficha, licencia y evidencias de evaluación.',
					'Cuando necesitas comparar dos modelos candidatos con los mismos criterios y el mismo conjunto de pruebas.',
					'Cuando quieres dejar constancia auditable de qué se evaluó y con qué resultado.',
				],
				noUsar: [
					'No uses la ficha del proveedor como sustituto de una evaluación con tus propios datos.',
					'No asumas que un modelo de código abierto es automáticamente transparente para tu caso: la licencia y los datos también importan.',
				],
			},
			{
				tipo: 'ejemplo',
				md: '```text\nComparación de dos candidatos antes de elegir:\n1. Ficha del modelo: uso previsto, datos, licencia y limitaciones.\n2. Evaluación con Amazon Bedrock Model Evaluations sobre el mismo conjunto de casos.\n3. Decisión documentada con el resultado y los límites aceptados.\n```',
			},
			{
				tipo: 'servicio',
				nombre: 'Amazon SageMaker AI',
			},
		],
		preguntasGuia: [
			'¿Qué documenta una ficha de modelo y qué no documenta?',
			'¿Qué aportan las evaluaciones de modelos frente a la ficha del proveedor?',
			'¿Qué implicaciones tiene la licencia al adoptar un modelo de código abierto?',
		],
	},
	{
		id: '4.2-g3',
		titulo: 'Tradeoffs entre seguridad, transparencia y rendimiento',
		objetivos: ['4.2#3'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'Más transparencia no siempre significa mejor modelo. Existen intercambios reales:\n\n- **Interpretabilidad frente a rendimiento**: los modelos sencillos suelen ser más fáciles de explicar y algo menos precisos; los modelos profundos ganan precisión y pierden trazabilidad.\n- **Explicabilidad frente a seguridad**: publicar pesos, datos o explicaciones detalladas puede facilitar ataques de evasión o revelar información del conjunto de entrenamiento.\n- **Transparencia frente a propiedad intelectual**: abrir el modelo expone la inversión del proveedor y habilita usos no previstos.\n- **Explicación frente a coste**: calcular explicaciones por decisión añade latencia y cómputo en cada inferencia.\n\nLa decisión depende del riesgo del caso: en decisiones de alto impacto se prioriza poder justificar; en tareas de bajo riesgo puede primar el rendimiento. La mitigación habitual es combinar un modelo potente con controles compensatorios (documentación, evaluación, revisión humana) en lugar de exigir transparencia total.',
			},
			{
				tipo: 'comparacion',
				parId: 'transparency-vs-performance',
			},
			{
				tipo: 'errorComun',
				error: 'Exigir a la vez el máximo rendimiento y la transparencia total del modelo, sin definir qué hay que poder justificar.',
				correccion:
					'Es un intercambio. Define primero qué decisiones deben explicarse y qué nivel de precisión es aceptable; después elige el modelo y los controles que cumplen ese umbral.',
			},
			{
				tipo: 'clave',
				items: [
					'Interpretabilidad y rendimiento son ejes separados que a menudo se compensan.',
					'La transparencia total puede crear riesgo de seguridad y de propiedad intelectual.',
					'La respuesta práctica suele ser modelo potente más documentación, evaluación y revisión humana.',
				],
			},
			{
				tipo: 'ejemplo',
				md: '```text\nCaso de examen:\nSe pide "máxima precisión con explicación completa por decisión y sin coste añadido".\nAnálisis: el requisito es contradictorio; hay que jerarquizar según el riesgo del uso.\n```',
			},
		],
		preguntasGuia: [
			'¿Por qué decimos que interpretabilidad y rendimiento son ejes independientes?',
			'¿Qué riesgos de seguridad puede introducir una transparencia excesiva?',
			'¿Cómo se compensa un modelo potente pero opaco en un caso de alto impacto?',
		],
	},
	{
		id: '4.2-g4',
		titulo: 'Diseño centrado en el humano y confianza en la IA',
		objetivos: ['4.2#4'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'El diseño centrado en el humano parte de la persona que recibe la decisión, no del modelo. Sus principios para la IA explicable son:\n\n- **Explicación orientada al usuario**: la explicación debe responder a la pregunta que la persona realmente tiene y en su lenguaje, no volcar detalles técnicos.\n- **Transparencia de la decisión**: indicar que se usó IA, qué factores relevantes influyeron y qué margen de error existe.\n- **Mecanismos de retroalimentación**: dar a la persona un canal para corregir, impugnar o aportar contexto, y usar esas señales para mejorar el sistema.\n- **Control y recurso humano**: permitir revisión o apelación en decisiones de alto impacto.\n- **Confianza calibrada**: ni confianza ciega ni rechazo total; la interfaz debe comunicar la incertidumbre y los límites del modelo.\n\nUna explicación que nadie entiende no cumple el objetivo: la explicabilidad se mide por si la persona puede tomar una decisión informada.',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Cuando la IA apoya decisiones que afectan a personas: crédito, salud, empleo o atención al cliente.',
					'Cuando quieres que los usuarios detecten y corrijan errores del modelo mediante retroalimentación.',
					'Cuando la organización necesita justificar la decisión ante un reclamante o un regulador.',
				],
				noUsar: [
					'No uses la explicabilidad como escudo legal: una explicación no sustituye el cumplimiento ni la revisión humana.',
					'No muestres la explicación técnica cruda al usuario final si su pregunta era otra.',
				],
			},
			{
				tipo: 'ejemplo',
				md: '```text\nInterfaz de una decisión asistida por IA:\n- "Esta solicitud se ha revisado con apoyo de IA."\n- "El factor principal fue el historial de pagos; también se consideró la antigüedad."\n- "Puedes solicitar una revisión humana y explicar tu situación."\n```',
			},
			{
				tipo: 'clave',
				items: [
					'La explicación se escribe para la persona, no para el ingeniero.',
					'Transparencia de la decisión y retroalimentación son principios, no opciones de interfaz.',
					'En decisiones de alto impacto debe existir recurso humano.',
				],
			},
		],
		preguntasGuia: [
			'¿A quién debe servir una explicación de IA para considerarse útil?',
			'¿Qué papel cumple la retroalimentación del usuario en un sistema explicable?',
			'¿Por qué la explicabilidad no exime de ofrecer revisión humana?',
		],
	},
];
