import type { PreguntaAifC01 } from '@/data/aifC01/types';

export const preguntasTask33: PreguntaAifC01[] = [
	{
		id: '3.3-q1',
		taskId: '3.3',
		objetivos: ['3.3#1'],
		tipo: 'conocimiento',
		question:
			'Un equipo ha obtenido un modelo que completa frases y genera texto coherente sobre temas generales a partir de millones de documentos sin etiquetar, pero no sigue instrucciones ni respeta formatos. ¿Qué etapa produjo ese comportamiento?',
		options: [
			'El pre-training con datos sin etiquetar.',
			'El instruction tuning con pares de instrucción y respuesta.',
			'La destilación desde un modelo mayor.',
			'El ajuste con retroalimentación humana (RLHF).',
		],
		correctAnswer: 0,
		explanation:
			'El pre-training con grandes volúmenes de datos sin etiquetar es la etapa que da la capacidad general de generar texto. Seguir instrucciones y respetar formatos se consigue después, con instruction tuning o RLHF, que requieren datos y señal adicionales.',
	},
	{
		id: '3.3-q2',
		taskId: '3.3',
		objetivos: ['3.3#1'],
		tipo: 'comparacion',
		question:
			'Una empresa observa que obtener el modelo base fue un gasto puntual y elevado, mientras que cada consulta de usuario genera un coste recurrente que crece con los tokens procesados. ¿Qué comparación describe mejor esta situación?',
		options: [
			'Entrenamiento, que fija los pesos una vez, frente a inferencia, que los aplica en cada uso.',
			'Pre-training frente a continuous pre-training.',
			'Instruction tuning frente a adaptación a un dominio específico.',
			'Curaduría de datos frente a gobernanza de datos.',
		],
		correctAnswer: 0,
		explanation:
			'El entrenamiento modifica los pesos del modelo y ocurre antes de usarlo; la inferencia solo aplica esos pesos en cada petición y se factura por consumo de tokens. Las demás opciones comparan variantes de entrenamiento o actividades de preparación de datos, no el uso frente a la construcción.',
	},
	{
		id: '3.3-q3',
		taskId: '3.3',
		objetivos: ['3.3#1', '3.3#2'],
		tipo: 'comparacion',
		question:
			'Una consultora necesita que el modelo adopte el vocabulario y el formato de sus informes técnicos. El conocimiento general del modelo ya es suficiente y dispone de unos miles de informes ya etiquetados. ¿Qué enfoque es el más proporcionado?',
		options: [
			'Rehacer el pre-training con todos los informes de la consultora.',
			'Fine-tuning supervisado con los informes etiquetados.',
			'Incluir los informes completos en cada prompt.',
			'Destilar el modelo a uno más pequeño.',
		],
		correctAnswer: 1,
		explanation:
			'El fine-tuning supervisado parte del modelo preentrenado y adapta comportamiento y estilo con un conjunto pequeño y específico. Rehacer el pre-training exige datos masivos sin etiquetar y no es proporcionado; los informes completos no caben en el prompt y no se actualizarían solos.',
	},
	{
		id: '3.3-q4',
		taskId: '3.3',
		objetivos: ['3.3#2'],
		tipo: 'escenario',
		question:
			'Un asistente de atención al cliente responde con información correcta, pero se salta la estructura de tres apartados que exige la empresa y cambia el tono entre respuestas. El equipo probó con ejemplos en el prompt y el resultado sigue siendo irregular. ¿Qué método es el más adecuado?',
		options: [
			'Continuous pre-training con la documentación sin etiquetar de la empresa.',
			'Instruction tuning con pares de instrucción y respuesta en el formato y el tono requeridos.',
			'Pre-training desde cero con el histórico de conversaciones.',
			'Destilación del modelo actual a uno de menor tamaño.',
		],
		correctAnswer: 1,
		explanation:
			'Al ser una carencia de comportamiento y formato, no de conocimiento, instruction tuning es el método indicado: se entrena con ejemplos que muestran la instrucción y la respuesta esperada. El continuous pre-training aporta documentación pero no fija formato ni tono, y destilar no corrige el comportamiento.',
	},
	{
		id: '3.3-q5',
		taskId: '3.3',
		objetivos: ['3.3#2'],
		tipo: 'servicio',
		question:
			'Un equipo quiere personalizar un modelo fundacional con datos propios y seguir consumiéndolo como API gestionada, sin administrar instancias ni contenedores de entrenamiento. ¿Qué servicio de AWS se ajusta mejor al requisito?',
		options: [
			'Amazon Bedrock.',
			'Amazon EC2.',
			'Amazon Macie.',
			'Amazon Lex.',
		],
		correctAnswer: 0,
		explanation:
			'Amazon Bedrock ofrece personalización de modelos fundacionales y los expone como API gestionada, sin que el equipo administre la infraestructura de entrenamiento. Amazon EC2 daría control pero exige gestionar los recursos, y Amazon Macie y Amazon Lex cubren otros problemas.',
	},
	{
		id: '3.3-q6',
		taskId: '3.3',
		objetivos: ['3.3#3'],
		tipo: 'tradeoff',
		question:
			'El equipo debate entre etiquetar un volumen enorme de ejemplos con anotadores externos o invertir ese tiempo en una rúbrica clara, formar a los anotadores y revisar la calidad de un conjunto menor. ¿Qué afirmación describe mejor el intercambio?',
		options: [
			'El volumen con etiquetas incoherentes suele degradar el ajuste; un conjunto menor, consistente y representativo rinde mejor, a cambio de más esfuerzo de diseño y control de calidad.',
			'Más ejemplos etiquetados siempre producen un modelo mejor, sin importar la consistencia.',
			'La rúbrica de etiquetado solo importa cuando el conjunto supera cierto tamaño.',
			'Cuantos menos ejemplos se usen, mayor es la representatividad del conjunto.',
		],
		correctAnswer: 0,
		explanation:
			'La calidad de las etiquetas determina la calidad del ajuste: el ruido se aprende igual que la señal. Invertir en rúbrica, formación y revisión de un conjunto representativo es más eficaz que acumular ejemplos incoherentes, aunque exige más trabajo previo.',
	},
	{
		id: '3.3-q7',
		taskId: '3.3',
		objetivos: ['3.3#3'],
		tipo: 'conocimiento',
		question:
			'En un proyecto de RLHF para un asistente corporativo, ¿qué papel cumple la retroalimentación humana en el proceso de ajuste?',
		options: [
			'Los evaluadores ordenan o puntúan respuestas alternativas y esas preferencias entrenan un modelo de recompensa que guía el ajuste del modelo.',
			'Los evaluadores escriben manualmente las respuestas correctas para cada consulta posible.',
			'Los evaluadores eliminan los datos personales del conjunto de entrenamiento.',
			'Los evaluadores definen el número de tokens que el modelo puede generar.',
		],
		correctAnswer: 0,
		explanation:
			'En RLHF las personas comparan respuestas y expresan preferencias; con esas comparaciones se entrena un modelo de recompensa que orienta el ajuste hacia salidas útiles, seguras y con el tono esperado. Escribir respuestas correctas o depurar datos personales corresponde a otras actividades, no al RLHF.',
	},
	{
		id: '3.3-q8',
		taskId: '3.3',
		objetivos: ['3.3#3'],
		tipo: 'seguridad',
		question:
			'Antes de ajustar un modelo con un histórico de conversaciones con clientes, el equipo detecta que contiene datos personales y documentos con distintos niveles de confidencialidad. ¿Qué práctica corresponde aplicar primero?',
		options: [
			'Gobernanza de datos: clasificar el conjunto, eliminar o enmascarar los datos personales y controlar acceso, procedencia y retención antes de entrenar.',
			'Duplicar el conjunto para equilibrar las categorías y mejorar el ajuste.',
			'Aumentar el tamaño del modelo para que absorba mejor la información.',
			'Etiquetar solo las conversaciones que no contienen datos personales y descartar las demás sin documentarlo.',
		],
		correctAnswer: 0,
		explanation:
			'La gobernanza del dato precede al entrenamiento: clasificar, depurar o enmascarar información personal, limitar el acceso con controles de identidad y cifrado, y dejar trazabilidad de la procedencia y de la retención. Documentos y conversaciones sensibles requieren además controles de acceso y cifrado con servicios como AWS IAM y AWS Key Management Service (AWS KMS).',
	},
	{
		id: '3.3-q9',
		taskId: '3.3',
		objetivos: ['3.3#2'],
		tipo: 'tradeoff',
		question:
			'El catálogo de productos y las condiciones comerciales cambian cada semana, y el equipo debate entre reajustar el modelo con cada actualización o servir esa información desde una base de conocimiento consultada en el momento de la respuesta. ¿Qué afirmación describe mejor el intercambio?',
		options: [
			'El fine-tuning es siempre preferible porque el conocimiento queda fijado en los pesos del modelo y no hay que recuperarlo.',
			'La recuperación en el momento evita reajustar por cada cambio y mantiene la información vigente, a cambio de construir y mantener la búsqueda y de verificar que los fragmentos recuperados sean correctos.',
			'Las dos opciones son equivalentes porque el modelo consulta la web por defecto durante la inferencia.',
			'La recuperación exige reajustar el modelo cada vez que cambia un documento.',
		],
		correctAnswer: 1,
		explanation:
			'Para hechos que cambian con frecuencia, recuperar el contexto en tiempo de inferencia es más barato y más actual que reajustar el modelo en cada cambio; a cambio hay que montar la tubería de recuperación y vigilar la calidad de los fragmentos. El fine-tuning encaja mejor para fijar comportamiento, tono o formato que para datos volátiles.',
	},
	{
		id: '3.3-q10',
		taskId: '3.3',
		objetivos: ['3.3#2'],
		tipo: 'escenario',
		question:
			'Un equipo ajusta un modelo de propósito general con un conjunto muy específico de informes legales. Tras el ajuste acierta en ese dominio, pero empeora en tareas generales que antes resolvía bien, como resumir correos internos. ¿Qué conviene revisar?',
		options: [
			'Nada, porque el ajuste siempre mejora todas las capacidades del modelo a la vez.',
			'El tamaño del prompt few-shot usado durante la inferencia.',
			'El número de tokens de salida configurado en la inferencia.',
			'El ajuste excesivo sobre un dominio estrecho puede degradar capacidades generales; conviene reducir épocas o tasa de aprendizaje, mezclar ejemplos generales y medir la regresión.',
		],
		correctAnswer: 3,
		explanation:
			'Un ajuste demasiado agresivo o demasiado estrecho puede provocar olvido y degradar capacidades generales del modelo. La mitigación pasa por ajustar hiperparámetros como épocas y tasa de aprendizaje, mezclar datos generales y evaluar la regresión en tareas no objetivo antes de publicar.',
	},
	{
		id: '3.3-q11',
		taskId: '3.3',
		objetivos: ['3.3#3'],
		tipo: 'escenario',
		question:
			'En un proyecto de RLHF los revisores tienden a puntuar mejor las respuestas más largas, aunque no sean más útiles. Tras el ajuste, el asistente responde con textos extensos y repetitivos. ¿Qué explica mejor el resultado?',
		options: [
			'El modelo de recompensa aprendió un sesgo de los revisores y el ajuste optimizó esa señal en lugar de la utilidad real.',
			'La gobernanza de datos eliminó los ejemplos cortos del conjunto de preferencias.',
			'El pre-training se ejecutó con documentos sin etiquetar de origen desconocido.',
			'La temperatura de inferencia se configuró demasiado baja.',
		],
		correctAnswer: 0,
		explanation:
			'En RLHF el modelo se orienta hacia lo que premia el modelo de recompensa; si los revisores confunden longitud con calidad, el ajuste explota ese sesgo. Se corrige con rúbricas claras, calibración y formación de los anotadores y control de calidad de las preferencias recogidas.',
	},
	{
		id: '3.3-q12',
		taskId: '3.3',
		objetivos: ['3.3#1'],
		tipo: 'conocimiento',
		question:
			'¿Qué secuencia describe mejor cómo se construye y se alinea un modelo fundacional?',
		options: [
			'Instruction tuning, después pre-training con datos sin etiquetar y por último RLHF.',
			'RLHF, después pre-training con datos sin etiquetar y por último instruction tuning.',
			'Pre-training con datos sin etiquetar, después instruction tuning con pares de instrucción y respuesta y por último la alineación con retroalimentación humana.',
			'Pre-training, después despliegue en producción y por último recolección de preferencias de los usuarios.',
		],
		correctAnswer: 2,
		explanation:
			'El modelo adquiere capacidad general en el pre-training, aprende a seguir instrucciones y formatos con el instruction tuning y se alinea con las preferencias humanas mediante RLHF. El orden importa porque cada etapa parte de los pesos de la anterior.',
	},
];
