import type { ParConfusionAifC01 } from '@/data/aifC01/types';

export const paresTask32: ParConfusionAifC01[] = [
	{
		id: 'zero-shot-vs-few-shot',
		etiqueta: 'Zero-shot vs few-shot',
		a: {
			titulo: 'Zero-shot',
			resumen:
				'Se entrega solo la instrucción, sin ejemplos resueltos. El modelo se apoya en lo que ya aprendió durante su entrenamiento.',
		},
		b: {
			titulo: 'Few-shot',
			resumen:
				'Se entregan varios ejemplos resueltos dentro del prompt para fijar el criterio, el formato y el nivel de detalle esperado.',
		},
		diferenciaClave:
			'Zero-shot no muestra el criterio; few-shot lo demuestra con ejemplos. La diferencia no está en la instrucción, sino en si el prompt incluye casos resueltos.',
		cuandoA: [
			'Tareas comunes y bien definidas (traducir, resumir, reescribir).',
			'Cuando el presupuesto de tokens de entrada es ajustado.',
			'Para una primera prueba antes de invertir en ejemplos.',
		],
		cuandoB: [
			'Cuando el criterio es propio de la organización y no se deduce de la instrucción.',
			'Cuando la respuesta debe seguir un formato o taxonomía cerrada.',
			'Cuando la consistencia entre llamadas importa más que el coste de entrada.',
		],
		escenarioA:
			'Un equipo resume correos de clientes y el formato lo define la propia instrucción. Zero-shot basta y ahorra tokens.',
		escenarioB:
			'El mismo equipo clasifica incidencias en cinco categorías internas. Sin ejemplos, etiqueta de forma inconsistente; con tres ejemplos representativos, el criterio queda fijado.',
		preguntaIds: ['3.2-q3'],
		objetivos: ['3.2#2'],
	},
	{
		id: 'jailbreaking-vs-prompt-injection',
		etiqueta: 'Jailbreaking vs prompt injection',
		a: {
			titulo: 'Jailbreaking',
			resumen:
				'Un usuario redacta el prompt para eludir deliberadamente las reglas de seguridad del modelo y obtener contenido restringido.',
		},
		b: {
			titulo: 'Prompt injection',
			resumen:
				'Instrucciones maliciosas que llegan incrustadas en el contenido que el modelo procesa (un documento, una página recuperada, una respuesta de una herramienta).',
		},
		diferenciaClave:
			'El jailbreaking ataca desde la intención declarada del usuario; la inyección ataca a través de los datos. La primera se contiene con políticas y guardrails; la segunda exige tratar todo contenido externo como no confiable.',
		cuandoA: [
			'Riesgo presente en cualquier interfaz conversacional abierta al usuario final.',
			'Se mitiga con guardrails, filtrado de contenido y límites de tema.',
		],
		cuandoB: [
			'Riesgo presente en asistentes con RAG, herramientas o contenido de terceros.',
			'Se mitiga separando instrucciones de datos, validando fuentes y filtrando la salida.',
		],
		escenarioA:
			'Un usuario encadena peticiones con roles ficticios para que el asistente ignore sus políticas. Es un intento de jailbreaking.',
		escenarioB:
			'Un asistente RAG recupera una página manipulada que ordena revelar el historial de la conversación. Es una inyección indirecta que secuestra la tarea.',
		preguntaIds: ['3.2-q8'],
		objetivos: ['3.2#4'],
	},
	{
		id: 'prompt-template-vs-prompt-management',
		etiqueta: 'Plantilla de prompt vs Prompt Management',
		a: {
			titulo: 'Plantilla de prompt',
			resumen:
				'Texto reutilizable con variables que el equipo guarda junto al código y rellena en cada llamada.',
		},
		b: {
			titulo: 'Amazon Bedrock Prompt Management',
			resumen:
				'Servicio que almacena prompts fuera de la aplicación, con versiones inmutables, alias y control de acceso, para iterar y revertir sin desplegar.',
		},
		diferenciaClave:
			'La plantilla es una técnica de redacción; la gestión es el ciclo de vida del prompt en producción (versión, alias, acceso y trazabilidad).',
		cuandoA: [
			'Prompts estables, de un solo equipo y de bajo riesgo.',
			'Prototipos donde el criterio todavía cambia.',
		],
		cuandoB: [
			'Varias aplicaciones o entornos que comparten el mismo prompt.',
			'Cuando hay que medir el efecto de cada cambio y poder revertir con rapidez.',
		],
		escenarioA:
			'Una utilidad interna usa un prompt que rara vez cambia y vive en el repositorio junto al código que lo consume.',
		escenarioB:
			'Un asistente en producción comparte su prompt con tres aplicaciones. Publicar una versión nueva y reasignar el alias evita un despliegue coordinado y permite volver atrás al instante.',
		preguntaIds: ['3.2-q5'],
		objetivos: ['3.2#2', '3.2#5'],
	},
];
