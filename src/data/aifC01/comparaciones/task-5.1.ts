import type { ParConfusionAifC01 } from '@/data/aifC01/types';

export const paresTask51: ParConfusionAifC01[] = [
	{
		id: 'iam-vs-guardrails',
		etiqueta: 'AWS IAM vs Amazon Bedrock Guardrails',
		a: {
			titulo: 'AWS Identity and Access Management (IAM)',
			resumen:
				'Define roles, políticas y permisos: controla qué identidad puede invocar qué recurso y con qué alcance.',
		},
		b: {
			titulo: 'Amazon Bedrock Guardrails',
			resumen:
				'Aplica políticas de contenido sobre la entrada y la salida del modelo: temas bloqueados, palabras prohibidas, datos personales y filtros de toxicidad.',
		},
		diferenciaClave:
			'IAM responde a quién puede llamar a qué recurso; los guardrails responden a qué contenido entra y qué contenido sale. Son capas complementarias, no alternativas.',
		cuandoA: [
			'Cuando hay que acotar el acceso de una aplicación, un agente o un usuario a los recursos de IA.',
			'Cuando se quiere mínimo privilegio y separación de funciones entre equipos.',
		],
		cuandoB: [
			'Cuando hay que filtrar temas, lenguaje tóxico o datos personales en la conversación.',
			'Cuando se necesita una barrera que actúe aunque el modelo intente producir contenido no permitido.',
		],
		escenarioA:
			'Un agente solo debe invocar un modelo concreto y leer un prefijo de bucket. Se resuelve con un rol y una política de mínimo privilegio.',
		escenarioB:
			'El mismo agente no debe responder sobre temas médicos ni mostrar datos de tarjeta. Se resuelve con un guardrail sobre la entrada y la salida.',
		preguntaIds: ['5.1-q1'],
		objetivos: ['5.1#1'],
	},
	{
		id: 'exposure-vs-poisoning',
		etiqueta: 'Exposure vs poisoning',
		a: {
			titulo: 'Exposure (exposición)',
			resumen:
				'Fuga de información sensible que estaba en el prompt o en el contexto: instrucciones internas, credenciales o datos personales que acaban en la salida.',
		},
		b: {
			titulo: 'Poisoning (envenenamiento)',
			resumen:
				'Manipulación de las fuentes de las que se alimenta el modelo, ya sean datos de entrenamiento o documentos indexados, para sesgar sus respuestas.',
		},
		diferenciaClave:
			'En exposure la información sensible sale del sistema; en poisoning la información falsa entra en el sistema. Una se contiene filtrando la salida y no colocando secretos en el prompt; la otra, controlando la integridad y la procedencia de las fuentes.',
		cuandoA: [
			'Cuando el prompt incluye instrucciones internas, credenciales o datos personales.',
			'Cuando la salida del modelo se muestra sin filtrar al usuario final.',
		],
		cuandoB: [
			'Cuando el asistente recupera documentos o se entrena con datos de origen no controlado.',
			'Cuando varias personas o sistemas pueden editar el contenido indexado.',
		],
		escenarioA:
			'El prompt del sistema contiene una clave de API y la respuesta cruda del modelo la reproduce al usuario.',
		escenarioB:
			'Alguien edita los documentos de la base de conocimiento para que el asistente recomiende siempre el mismo proveedor.',
		preguntaIds: ['5.1-q8'],
		objetivos: ['5.1#4'],
	},
];
