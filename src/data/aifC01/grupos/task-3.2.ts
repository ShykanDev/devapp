import type { GrupoTematico } from '@/data/aifC01/types';

export const gruposTask32: GrupoTematico[] = [
	{
		id: '3.2-g1',
		titulo: 'Fundamentos y constructos del prompt',
		objetivos: ['3.2#1'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'El **prompt** es todo lo que el modelo recibe antes de generar y, por tanto, el contrato que define su comportamiento. En prompting estructurado se distinguen cuatro constructos:\n\n- **Contexto**: información de apoyo que el modelo no puede conocer por sí solo (políticas internas, fragmentos recuperados, datos del caso).\n- **Instrucción**: la tarea concreta que se pide, con su criterio de éxito.\n- **Entrada o datos**: el contenido sobre el que se opera (un correo, una transcripción, una tabla).\n- **Prompt negativo**: la indicación explícita de lo que no debe aparecer ni hacerse (tono, formato, temas, datos personales).\n\nUn prompt útil combina los cuatro sin mezclarlos: cuando el contexto y la instrucción se confunden, el modelo suele tratar los datos como órdenes.',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Añade **contexto** cuando la respuesta dependa de información privada, reciente o específica de la organización.',
					'Usa **prompt negativo** para acotar formato, tono o contenido no deseado dentro de una tarea legítima.',
					'Separa visualmente instrucción y datos cuando el texto de entrada puede contener frases parecidas a órdenes.',
				],
				noUsar: [
					'No uses solo el prompt negativo como control de seguridad: acota el estilo, no sustituye a los guardrails ni al filtrado de salida.',
					'No acumules contexto irrelevante «por si acaso»: diluye la instrucción y encarece la inferencia por tokens.',
				],
			},
			{
				tipo: 'errorComun',
				error: 'Describir el público o el tono en la sección de datos y creer que eso ya es la instrucción.',
				correccion:
					'Declara cada constructo en su propio apartado: contexto, instrucción, datos y restricciones. La ambigüedad es la primera causa de respuestas inconsistentes.',
			},
			{
				tipo: 'clave',
				items: [
					'Contexto = lo que el modelo necesita saber; instrucción = lo que debe hacer; prompt negativo = lo que debe evitar.',
					'Los cuatro constructos se combinan; ninguno sustituye a los demás.',
					'Redactar con apartados explícitos facilita reutilizar y versionar el prompt.',
				],
			},
			{
				tipo: 'ejemplo',
				md: '```text\nContexto: eres un asistente de soporte de una tienda de bicicletas.\nInstrucción: clasifica la incidencia y propone el siguiente paso.\nDatos: "El pedido 4471 llegó con el cambio trasero doblado."\nRestricciones (negativo): no inventes plazos, no pidas datos personales.\nSalida: JSON con "categoria" y "siguientePaso".\n```',
			},
		],
		preguntasGuia: [
			'¿Qué parte del prompt aporta información que el modelo no puede conocer solo?',
			'¿Cómo indicarías de forma explícita lo que el modelo no debe hacer ni mostrar?',
			'¿Por qué conviene separar la instrucción de los datos de entrada?',
		],
	},
	{
		id: '3.2-g2',
		titulo: 'Técnicas de prompting',
		objetivos: ['3.2#2'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'Las técnicas de prompting escalan la cantidad y la forma del ejemplo que se entrega al modelo:\n\n- **Zero-shot**: solo instrucción, sin ejemplos. Rápido y barato; depende de que la tarea sea común.\n- **Single-shot**: un único ejemplo resuelto que fija formato y criterio.\n- **Few-shot**: varios ejemplos representativos que enseñan el criterio sin reentrenar. Mejora la consistencia cuando la tarea es específica de la organización.\n- **Chain-of-thought**: se pide el razonamiento paso a paso antes de la respuesta final. Ayuda en problemas de varios pasos, a costa de más tokens de salida.\n\nLa elección es un intercambio entre tokens, latencia y precisión: cuantos más ejemplos, más larga la entrada, pero menor la variabilidad de la respuesta.',
			},
			{
				tipo: 'comparacion',
				parId: 'zero-shot-vs-few-shot',
			},
			{
				tipo: 'escenario',
				situacion:
					'Un equipo clasifica incidencias internas en cinco categorías propias. Con una instrucción sin ejemplos, el modelo cambia de etiqueta ante casos parecidos.',
				analisis:
					'Añadir pocos ejemplos **representativos y balanceados** de cada categoría (few-shot) fija el criterio sin reentrenar. Si además el resultado debe seguir un formato, el ejemplo define la plantilla de salida.',
				servicio: 'Amazon Bedrock',
			},
			{
				tipo: 'errorComun',
				error: 'Creer que «few-shot» consiste en pegar muchos ejemplos de la misma categoría o en repetir el mismo caso con distintas palabras.',
				correccion:
					'Usa pocos ejemplos, cada uno de una categoría distinta y redactados con el mismo formato que esperas en la respuesta. Un ejemplo redundante aporta tokens y no aporta criterio.',
			},
			{
				tipo: 'clave',
				items: [
					'Zero-shot = instrucción; single-shot = un ejemplo; few-shot = varios ejemplos; chain-of-thought = pasos intermedios.',
					'Más ejemplos suelen mejorar la consistencia y siempre aumentan el consumo de tokens.',
					'Chain-of-thought no sustituye a un buen criterio de evaluación: mejora el razonamiento en tareas de varios pasos.',
				],
			},
			{
				tipo: 'ejemplo',
				md: '```text\nClasifica el ticket. Ejemplos:\nDatos: "No puedo entrar con mi contraseña" -> categoria: acceso\nDatos: "La factura duplica un cargo" -> categoria: facturacion\nDatos: "La app cierra al abrir el informe" -> categoria: app\nDatos: "El pedido no ha llegado" -> categoria:\n```',
			},
		],
		preguntasGuia: [
			'¿Cuándo basta un prompt zero-shot y cuándo conviene pasar a few-shot?',
			'¿Qué técnica pide el razonamiento intermedio antes de la respuesta final?',
			'¿Qué coste tiene añadir ejemplos a cada llamada?',
		],
	},
	{
		id: '3.2-g3',
		titulo: 'Plantillas y reutilización de prompts',
		objetivos: ['3.2#2', '3.2#3'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'Una **plantilla de prompt** es un texto fijo con huecos variables. La parte estable (rol, criterio, formato, restricciones) se escribe una vez y se rellena con los datos de cada caso. Así el equipo no reescribe el prompt en cada funcionalidad, se reduce la deriva entre versiones y el resultado es comparable entre llamadas.\n\nReutilizar no es copiar: una plantilla bien hecha documenta qué variable cambia, qué formato de salida se espera y qué se considera un buen resultado.',
			},
			{
				tipo: 'comparacion',
				parId: 'prompt-template-vs-prompt-management',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Cuando la misma tarea se repite con datos distintos (resumir, clasificar, extraer campos).',
					'Cuando varias aplicaciones deben compartir exactamente el mismo criterio.',
					'Cuando quieres medir el efecto de un cambio de redacción sobre resultados comparables.',
				],
				noUsar: [
					'En exploración: mientras el criterio aún cambia cada hora, una plantilla rígida estorba.',
					'Para esconder lógica de negocio compleja: la plantilla no valida datos ni sustituye a la aplicación.',
				],
			},
			{
				tipo: 'ejemplo',
				md: '```text\nPlantilla: {{contexto}}\nInstrucción: resume el documento en {{n}} puntos numerados.\nRestricción: no incluyas opiniones ni datos personales.\nDocumento: {{documento}}\n```',
			},
			{
				tipo: 'clave',
				items: [
					'Plantilla = texto estable + variables; reduce trabajo repetido y errores de transcripción.',
					'Una plantilla es también un contrato de formato y de criterio de calidad.',
					'No sustituye al control de acceso ni a la validación de la salida.',
				],
			},
		],
		preguntasGuia: [
			'¿Qué diferencia hay entre una plantilla de prompt y una instrucción escrita de cero?',
			'¿Qué gana un equipo que reutiliza la misma plantilla en tres aplicaciones?',
			'¿Cuándo NO conviene congelar un prompt en una plantilla?',
		],
	},
	{
		id: '3.2-g4',
		titulo: 'Calidad, experimentación y buenas prácticas',
		objetivos: ['3.2#3'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'La calidad de un prompt se mide por el **resultado**, no por su extensión. Las prácticas que más rinden son:\n\n- **Especificidad**: decir qué tarea, para qué público y con qué criterio de éxito.\n- **Concisión**: eliminar contexto redundante y ejemplos que no añaden criterio.\n- **Experimentación**: cambiar una variable a la vez y comparar resultados con casos de prueba.\n- **Guardrails**: acotar el comportamiento con restricciones explícitas y con controles del servicio.\n- **Discovery**: probar el prompt con casos límite antes de ponerlo en producción.\n\nPedir formato de salida verificable (por ejemplo, JSON con campos fijos) convierte una respuesta creativa en un resultado comprobable.',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Define primero el criterio de éxito y después redacta el prompt que lo consigue.',
					'Cambia una sola variable por iteración para poder atribuir la mejora.',
					'Incluye casos límite y negativos en el conjunto de prueba.',
				],
				noUsar: [
					'No añadas más texto para «forzar» una respuesta: suele ser un síntoma de instrucción ambigua.',
					'No des por bueno un prompt porque funcione una vez; la no determinación exige varias ejecuciones.',
				],
			},
			{
				tipo: 'errorComun',
				error: 'Optimizar el prompt contra un único ejemplo y asumir que generaliza.',
				correccion:
					'Prueba con un conjunto pequeño pero variado (casos típicos, límite y adversos) y compara antes y después del cambio.',
			},
			{
				tipo: 'ejemplo',
				md: '```text\nPide la salida en un formato comprobable:\nDevuelve JSON con los campos: {"categoria": string, "confianza": "alta"|"media"|"baja", "razon": string}.\nSi no puedes clasificar, usa categoria: "desconocida" y explica por qué.\n```',
			},
			{
				tipo: 'clave',
				items: [
					'Específico y conciso supera a largo y genérico.',
					'Experimenta de forma controlada: una variable por iteración.',
					'Los guardrails y el formato de salida verificable son parte de la calidad, no un extra.',
				],
			},
		],
		preguntasGuia: [
			'¿Qué práctica conviene al comparar dos redacciones del mismo prompt?',
			'¿Por qué una instrucción específica y concisa rinde mejor que una muy larga?',
			'¿Cómo haces verificable la salida de un modelo generativo?',
		],
	},
	{
		id: '3.2-g5',
		titulo: 'Riesgos y límites del prompt engineering',
		objetivos: ['3.2#4'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'El prompt es una superficie de ataque más. Los cuatro riesgos que el examen agrupa son distintos entre sí:\n\n- **Exposure (exposición)**: se filtra información sensible incluida en el prompt, como instrucciones internas, credenciales o datos personales.\n- **Poisoning (envenenamiento)**: se manipula el contenido del que se alimenta el modelo —datos de entrenamiento o fuentes de una base de conocimiento— para sesgar sus respuestas.\n- **Hijacking (secuestro)**: una instrucción maliciosa incrustada en el contenido consigue que el modelo abandone su tarea original.\n- **Jailbreaking**: el usuario redacta el prompt para saltarse deliberadamente sus reglas de seguridad y obtener contenido restringido.\n\nExposure se previene no incluyendo secretos en el prompt y filtrando la salida; poisoning y hijacking se mitigan validando las fuentes y separando datos de instrucciones; jailbreaking se contiene con guardrails y políticas de contenido.',
			},
			{
				tipo: 'comparacion',
				parId: 'jailbreaking-vs-prompt-injection',
			},
			{
				tipo: 'escenario',
				situacion:
					'Un asistente resume documentos de una base de conocimiento corporativa. Alguien edita silenciosamente varios documentos para que el modelo recomiende siempre un proveedor concreto.',
				analisis:
					'No es un fallo de redacción del prompt: la **fuente** ha sido envenenada (**poisoning**). La respuesta combina controles de integridad y procedencia del contenido con revisión de los documentos indexados y validación de la salida.',
				servicio: 'Amazon Bedrock',
			},
			{
				tipo: 'errorComun',
				error: 'Confundir prompt injection con jailbreaking y tratarlos como el mismo problema.',
				correccion:
					'La inyección introduce instrucciones a través del contenido (a menudo de forma indirecta); el jailbreaking es el usuario intentando saltarse las políticas de seguridad. Se mitigan en capas distintas.',
			},
			{
				tipo: 'clave',
				items: [
					'Exposure = fuga; poisoning = datos manipulados; hijacking = tarea secuestrada; jailbreaking = política de seguridad eludida.',
					'Ninguna redacción de prompt sustituye a validar fuentes, filtrar salidas y controlar accesos.',
					'Separa instrucciones de datos: es la defensa estructural más barata.',
				],
			},
			{
				tipo: 'servicio',
				nombre: 'Amazon Bedrock',
			},
		],
		preguntasGuia: [
			'¿Qué diferencia hay entre exposure y poisoning?',
			'¿Cómo se distingue un intento de jailbreaking de una inyección indirecta?',
			'¿Por qué separar instrucción y datos reduce el riesgo de secuestro?',
		],
	},
	{
		id: '3.2-g6',
		titulo: 'Prompt Management, versionado y ciclo de vida',
		objetivos: ['3.2#5'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'Un prompt en producción es un artefacto que cambia: se ajusta la redacción, se añaden ejemplos y se corrigen sesgos. **Amazon Bedrock Prompt Management** permite almacenar prompts fuera del código de la aplicación, mantener **versiones** inmutables y publicar una versión mediante un **alias** que la aplicación referencia.\n\nLa estrategia habitual es: editar en una versión de trabajo, probar con el conjunto de evaluación, publicar una versión numerada y apuntar el alias de producción a esa versión. Si algo empeora, el alias vuelve a la versión anterior sin desplegar la aplicación.',
			},
			{
				tipo: 'comparacion',
				parId: 'prompt-template-vs-prompt-management',
			},
			{
				tipo: 'escenario',
				situacion:
					'Un cambio de redacción mejora las respuestas en las pruebas, pero al llegar a producción sube el número de respuestas fuera de formato.',
				analisis:
					'Con el prompt gestionado y versionado, se publica una versión nueva, se prueba y el alias de producción se reasigna solo cuando pasa la evaluación. El rollback es inmediato y no requiere un nuevo despliegue de la aplicación.',
				servicio: 'Amazon Bedrock',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Cuando varias aplicaciones o entornos deben compartir el mismo prompt.',
					'Cuando necesitas trazabilidad de qué versión produjo cada respuesta.',
					'Cuando quieres iterar y revertir sin tocar el código de la aplicación.',
				],
				noUsar: [
					'En pruebas de exploración de un solo uso, donde aún no hay criterio estable.',
					'Si no existe un conjunto de evaluación: versionar sin medir solo añade burocracia.',
				],
			},
			{
				tipo: 'errorComun',
				error: 'Versionar el prompt solo en el repositorio de código y creer que eso ya es gestionarlo.',
				correccion:
					'Gestionar implica separar el prompt del despliegue, controlar quién puede publicar, medir el efecto de cada versión y poder volver atrás. El control de acceso se apoya en servicios de identidad y el historial de cambios se audita.',
			},
			{
				tipo: 'clave',
				items: [
					'Versión = contenido inmutable; alias = puntero que la aplicación consume.',
					'Iterar y revertir sin desplegar es el beneficio central.',
					'Publicar sin evaluación previa convierte la agilidad en riesgo.',
				],
			},
			{
				tipo: 'servicio',
				nombre: 'Amazon Bedrock',
			},
		],
		preguntasGuia: [
			'¿Qué aporta separar el prompt del código de la aplicación?',
			'¿Por qué publicar una versión antes de apuntar el alias de producción?',
			'¿Qué relación hay entre una plantilla de prompt y un prompt gestionado?',
		],
	},
];
