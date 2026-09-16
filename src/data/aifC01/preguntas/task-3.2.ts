import type { PreguntaAifC01 } from '@/data/aifC01/types';

export const preguntasTask32: PreguntaAifC01[] = [
	{
		id: '3.2-q1',
		taskId: '3.2',
		objetivos: ['3.2#1'],
		tipo: 'conocimiento',
		question:
			'Una empresa redacta un prompt que incluye el rol del asistente, los datos del cliente y la frase «no incluyas datos personales en la respuesta». ¿Qué constructo del prompt engineering representa esa última frase?',
		options: [
			'La instrucción principal de la tarea.',
			'El contexto recuperado del sistema de origen.',
			'El prompt negativo o restricción de lo no deseado.',
			'La plantilla de prompt reutilizable.',
		],
		correctAnswer: 2,
		explanation:
			'El prompt negativo declara de forma explícita lo que el modelo debe evitar (tono, formato, contenido o datos). La instrucción describe la tarea y el contexto aporta información de apoyo.',
	},
	{
		id: '3.2-q2',
		taskId: '3.2',
		objetivos: ['3.2#1'],
		tipo: 'casoDeUso',
		question:
			'Un asistente debe responder según el manual interno de la empresa, que se actualiza cada mes y no forma parte del entrenamiento del modelo. ¿Qué elemento del prompt aporta esa información?',
		options: [
			'El prompt negativo.',
			'El contexto, incorporando el manual o los fragmentos recuperados.',
			'La temperatura de la inferencia.',
			'El número de ejemplos few-shot.',
		],
		correctAnswer: 1,
		explanation:
			'El contexto es la sección destinada a información que el modelo no puede conocer por sí solo. Los ejemplos few-shot enseñan un formato o criterio, pero no aportan un documento actualizado.',
	},
	{
		id: '3.2-q3',
		taskId: '3.2',
		objetivos: ['3.2#2'],
		tipo: 'comparacion',
		question:
			'Un equipo necesita clasificar incidencias en cinco categorías propias. Con una instrucción sin ejemplos, el modelo etiqueta de forma inconsistente casos parecidos. ¿Qué técnica mejora la consistencia sin reentrenar el modelo?',
		options: [
			'Few-shot prompting con pocos ejemplos representativos de cada categoría.',
			'Zero-shot prompting con una instrucción más larga.',
			'Chain-of-thought para que el modelo razone en voz alta.',
			'Fine-tuning del modelo con el histórico completo de incidencias.',
		],
		correctAnswer: 0,
		explanation:
			'Few-shot enseña el criterio con ejemplos dentro del propio prompt, sin reentrenar. Zero-shot depende de que el modelo ya conozca la tarea, y chain-of-thought mejora el razonamiento en varios pasos más que la consistencia de etiquetas.',
	},
	{
		id: '3.2-q4',
		taskId: '3.2',
		objetivos: ['3.2#2'],
		tipo: 'escenario',
		question:
			'Un modelo resuelve mal problemas aritméticos de varios pasos aunque el enunciado se copia exactamente y el formato de salida es correcto. ¿Qué técnica de prompting es la más indicada para mejorar el razonamiento?',
		options: [
			'Pedir la respuesta final directamente y sin explicaciones.',
			'Pedir al modelo que muestre los pasos intermedios antes de la respuesta final.',
			'Añadir un prompt negativo que prohíba equivocarse.',
			'Reducir el número de ejemplos para acortar el prompt.',
		],
		correctAnswer: 1,
		explanation:
			'Chain-of-thought pide el razonamiento intermedio antes de concluir, lo que mejora tareas de varios pasos. Un prompt negativo no corrige un error de razonamiento ni una instrucción de formato.',
	},
	{
		id: '3.2-q5',
		taskId: '3.2',
		objetivos: ['3.2#2', '3.2#5'],
		tipo: 'comparacion',
		question:
			'La misma plantilla de prompt se reutiliza en tres aplicaciones y el equipo necesita cambiar su redacción en todas sin recompilar ni desplegar. ¿Qué enfoque conviene?',
		options: [
			'Duplicar la plantilla en cada aplicación para no acoplar los despliegues.',
			'Gestionar el prompt en Amazon Bedrock Prompt Management y consumirlo por versión o alias.',
			'Mover el texto del prompt a una variable de entorno por aplicación.',
			'Reentrenar el modelo para que incorpore la nueva redacción.',
		],
		correctAnswer: 1,
		explanation:
			'La gestión de prompts separa el texto del código de la aplicación: se publica una versión y la aplicación la consume mediante un alias, sin desplegar. Duplicar o usar variables de entorno obliga a mantener y desplegar cada copia.',
	},
	{
		id: '3.2-q6',
		taskId: '3.2',
		objetivos: ['3.2#3'],
		tipo: 'conocimiento',
		question:
			'¿Cuál de estas prácticas mejora de forma más directa la calidad de las respuestas de un modelo fundacional?',
		options: [
			'Redactar un prompt lo más largo posible para cubrir todos los casos.',
			'Ser específico sobre la tarea, el criterio de éxito y el formato de salida, eliminando la información redundante.',
			'Repetir la misma instrucción tres veces al final del prompt.',
			'Indicar únicamente el tema y dejar que el modelo decida el formato.',
		],
		correctAnswer: 1,
		explanation:
			'Especificidad y concisión son las buenas prácticas centrales: una instrucción clara con formato verificable reduce la variabilidad. Acumular texto o repetir órdenes suele diluir la señal.',
	},
	{
		id: '3.2-q7',
		taskId: '3.2',
		objetivos: ['3.2#3'],
		tipo: 'casoDeUso',
		question:
			'El equipo quiere elegir entre dos redacciones del mismo prompt y no sabe cuál produce mejores respuestas. ¿Qué práctica describe la situación?',
		options: [
			'Experimentación: cambiar una variable a la vez y comparar resultados con un conjunto de casos de prueba.',
			'Discovery: publicar ambas versiones en producción y esperar a que los usuarios decidan.',
			'Guardrails: limitar la salida a un formato fijo.',
			'Prompt negativo: prohibir las respuestas incorrectas.',
		],
		correctAnswer: 0,
		explanation:
			'La experimentación controlada compara variantes con casos de prueba antes de publicar. Publicar sin medir no es experimentar y traslada el coste al usuario.',
	},
	{
		id: '3.2-q8',
		taskId: '3.2',
		objetivos: ['3.2#4'],
		tipo: 'comparacion',
		question:
			'Un usuario redacta una instrucción pensada para que el modelo ignore sus reglas de seguridad y responda contenido restringido. ¿Qué riesgo describe este comportamiento?',
		options: [
			'Poisoning de la base de conocimiento.',
			'Exposure de las instrucciones del sistema.',
			'Jailbreaking, porque el usuario intenta eludir las políticas de seguridad.',
			'Hijacking, porque el modelo cambia de tarea por sí solo.',
		],
		correctAnswer: 2,
		explanation:
			'Jailbreaking es el intento deliberado del usuario de saltarse las reglas de seguridad. La inyección y el secuestro llegan a través del contenido, y el poisoning manipula los datos que alimentan al modelo.',
	},
	{
		id: '3.2-q9',
		taskId: '3.2',
		objetivos: ['3.2#4'],
		tipo: 'escenario',
		question:
			'Un asistente resume documentos de una wiki corporativa. Alguien edita varios artículos para que el modelo recomiende siempre un proveedor concreto. ¿Qué riesgo se ha materializado?',
		options: [
			'Exposure, porque se filtraron datos internos.',
			'Poisoning, porque se manipuló la fuente de información que alimenta las respuestas.',
			'Jailbreaking, porque el usuario rompió las reglas de seguridad.',
			'Un error de formato en la plantilla del prompt.',
		],
		correctAnswer: 1,
		explanation:
			'El poisoning manipula el contenido del que se alimenta el modelo, en este caso una fuente de conocimiento. Exposure es fuga de información y jailbreaking es un intento del usuario contra las políticas de seguridad.',
	},
	{
		id: '3.2-q10',
		taskId: '3.2',
		objetivos: ['3.2#4'],
		tipo: 'seguridad',
		question:
			'Un desarrollador incluye en el prompt del sistema políticas internas y valores de configuración que no deberían salir del entorno. ¿Qué riesgo conviene evaluar de inmediato?',
		options: [
			'Exposure, es decir, la exposición de información sensible incluida en el prompt.',
			'Poisoning de los datos de entrenamiento.',
			'Un aumento del coste por tokens.',
			'La pérdida de determinismo del modelo.',
		],
		correctAnswer: 0,
		explanation:
			'Incluir información sensible en el prompt crea riesgo de exposure si la salida la revela. La mitigación combina no incluir secretos, filtrar la salida y controlar el acceso al prompt.',
	},
	{
		id: '3.2-q11',
		taskId: '3.2',
		objetivos: ['3.2#5'],
		tipo: 'conocimiento',
		question:
			'¿Qué aporta Amazon Bedrock Prompt Management al operar prompts en producción?',
		options: [
			'Entrena automáticamente un modelo propio con los prompts del equipo.',
			'Almacena prompts fuera del código, con versiones y alias reutilizables por varias aplicaciones.',
			'Impide que un usuario malintencionado escriba prompts en el chat.',
			'Sustituye la necesidad de evaluar la calidad de las respuestas.',
		],
		correctAnswer: 1,
		explanation:
			'Prompt Management guarda y versiona prompts y permite consumirlos mediante un alias, lo que facilita reutilizar, iterar y revertir sin desplegar. No entrena modelos ni exime de evaluar resultados o de aplicar guardrails.',
	},
	{
		id: '3.2-q12',
		taskId: '3.2',
		objetivos: ['3.2#5'],
		tipo: 'tradeoff',
		question:
			'El equipo debate entre escribir el prompt directamente en el código de la aplicación o gestionarlo en Amazon Bedrock Prompt Management. ¿Qué afirmación describe mejor el intercambio?',
		options: [
			'El prompt en código da control total, pero cada cambio exige desplegar; gestionarlo centraliza versiones y permite revertir sin desplegar, a cambio de gobernar el acceso y depender del servicio.',
			'Gestionar el prompt elimina la necesidad de control de acceso y de auditoría.',
			'El prompt en código siempre produce respuestas de mayor calidad.',
			'Gestionar el prompt impide usar plantillas con variables.',
		],
		correctAnswer: 0,
		explanation:
			'La gestión centralizada gana en velocidad de iteración, trazabilidad y rollback, pero introduce dependencia del servicio y exige gobierno del acceso. La calidad depende del contenido y de la evaluación, no de dónde se guarde el texto.',
	},
];
