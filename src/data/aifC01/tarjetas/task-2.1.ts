import type { TarjetaAifC01 } from '@/data/aifC01/types';

export const tarjetasTask21: TarjetaAifC01[] = [
	{
		id: '2.1-t1',
		taskId: '2.1',
		objetivos: ['2.1#1'],
		tipo: 'definicion',
		frente:
			'Dos prompts con un número parecido de caracteres producen facturas distintas. ¿Qué explica esa diferencia y en qué unidad se mide?',
		reverso:
			'En tokens. El tokenizador divide el texto en unidades que no coinciden con los caracteres, y el consumo se mide en tokens de entrada y de salida, no en palabras ni en caracteres.',
	},
	{
		id: '2.1-t2',
		taskId: '2.1',
		objetivos: ['2.1#1'],
		tipo: 'diferencia',
		frente:
			'Un compañero dice que «un embedding es solo un token más largo». ¿Cómo distingues los dos conceptos con un ejemplo de recuperación de documentos?',
		reverso:
			'El token es la unidad de texto que el modelo procesa y se factura; el embedding es un vector que representa el significado. Al buscar «devoluciones» se recuperan fragmentos que hablan de «reembolsos» porque sus embeddings son cercanos, algo que la coincidencia de tokens no consigue.',
	},
	{
		id: '2.1-t3',
		taskId: '2.1',
		objetivos: ['2.1#2'],
		tipo: 'definicion',
		frente:
			'Los supervisores de soporte dedican la mañana a leer transcripciones completas de llamadas. ¿Qué caso de uso de GenAI elimina ese trabajo de lectura y qué gana la empresa?',
		reverso:
			'El resumen de transcripciones: el modelo condensa cada llamada en pocos puntos y los supervisores revisan solo los casos que requieren atención. El tiempo liberado se dedica a decisiones, no a leer.',
	},
	{
		id: '2.1-t4',
		taskId: '2.1',
		objetivos: ['2.1#3'],
		tipo: 'diferencia',
		frente:
			'En una reunión alguien propone «reentrenar el modelo desde cero con nuestros datos» y otra persona dice «basta con ajustarlo». ¿Qué etapas del ciclo de vida están confundiendo?',
		reverso:
			'Pre-entrenamiento frente a fine-tuning. El pre-entrenamiento construye el conocimiento general desde grandes volúmenes de datos y es costoso; el fine-tuning ajusta un modelo ya existente con datos propios para mejorar formato, tono o dominio.',
	},
	{
		id: '2.1-t5',
		taskId: '2.1',
		objetivos: ['2.1#4'],
		tipo: 'tradeoff',
		frente:
			'Un equipo prueba dos versiones del mismo asistente: una envía el manual completo en cada llamada y otra recupera solo los fragmentos relevantes. ¿Qué intercambio están midiendo?',
		reverso:
			'Tokens de entrada frente a coste y latencia. Enviar el manual completo aporta más contexto pero se paga en cada llamada y retrasa la respuesta; recuperar solo lo relevante reduce el consumo, a cambio de depender de una buena búsqueda.',
	},
	{
		id: '2.1-t6',
		taskId: '2.1',
		objetivos: ['2.1#5'],
		tipo: 'riesgo',
		frente:
			'El historial de conversación crece turno a turno hasta llenar la ventana de contexto, y las respuestas del asistente empiezan a ignorar la instrucción inicial. ¿Qué falla y cómo se corrige?',
		reverso:
			'Falla la ingeniería de contexto: el material acumulado diluye la instrucción. Se corrige presupuestando el contexto, recortando la memoria antigua y manteniendo al principio la instrucción y el formato de salida.',
	},
	{
		id: '2.1-t7',
		taskId: '2.1',
		objetivos: ['2.1#6'],
		tipo: 'diferencia',
		frente:
			'Un sistema encadena siempre las mismas tres llamadas al modelo. Otro decide en cada caso si consulta un sistema, pide datos o escala. ¿Cuál es un agente y por qué?',
		reverso:
			'El segundo: la ruta se decide en ejecución con herramientas y memoria y cambia según el resultado. El primero es un flujo de trabajo con pasos predefinidos, más barato y predecible pero incapaz de adaptarse.',
	},
	{
		id: '2.1-t8',
		taskId: '2.1',
		objetivos: ['2.1#6'],
		tipo: 'definicion',
		frente:
			'Un agente debe usar un CRM, una base de pedidos y un buscador interno, y el equipo prevé añadir más herramientas cada mes. ¿Qué aporta MCP en este escenario?',
		reverso:
			'MCP estandariza cómo se exponen y consumen las herramientas y fuentes externas, así que el agente usa el mismo mecanismo con cada servidor y añadir una herramienta no obliga a reescribir su lógica. Los permisos y la autenticación siguen siendo necesarios.',
	},
	{
		id: '2.1-t9',
		taskId: '2.1',
		objetivos: ['2.1#6'],
		tipo: 'tradeoff',
		frente:
			'Un caso complejo se resuelve con varios agentes especializados, pero el equipo observa más latencia, más consumo y más formas de fallar que con un solo agente. ¿Qué está en juego?',
		reverso:
			'Especialización frente a complejidad operativa. Repartir el trabajo entre agentes mejora la calidad en tareas amplias, pero multiplica las comunicaciones, el coste y los puntos de fallo; conviene empezar por un agente y dividir solo cuando la evaluación lo justifique.',
	},
	{
		id: '2.1-t10',
		taskId: '2.1',
		objetivos: ['2.1#6'],
		tipo: 'riesgo',
		frente:
			'Un agente atiende a varios clientes y recupera sin filtro lo dicho en conversaciones anteriores de otros usuarios. ¿Qué riesgo aparece y qué control lo evita?',
		reverso:
			'Riesgo de fuga de información entre clientes por una memoria compartida. La memoria debe aislarse por usuario o sesión, aplicar los mismos permisos que el sistema de origen y limitar qué se conserva y durante cuánto tiempo.',
	},
];
