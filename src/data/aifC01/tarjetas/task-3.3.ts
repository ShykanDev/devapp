import type { TarjetaAifC01 } from '@/data/aifC01/types';

export const tarjetasTask33: TarjetaAifC01[] = [
	{
		id: '3.3-t1',
		taskId: '3.3',
		objetivos: ['3.3#1'],
		tipo: 'definicion',
		frente:
			'Un modelo grande genera miles de respuestas que se usan para entrenar un modelo mucho más pequeño, capaz de ejecutarse en un dispositivo con latencia estricta. ¿Qué técnica se aplicó y qué se pierde?',
		reverso:
			'Distillation: el modelo grande actúa como profesor del pequeño. Se gana eficiencia en latencia y coste por inferencia, y se sacrifica parte de la capacidad y la precisión del modelo original.',
	},
	{
		id: '3.3-t2',
		taskId: '3.3',
		objetivos: ['3.3#1'],
		tipo: 'diferencia',
		frente:
			'Una empresa recibe cada mes miles de páginas de documentación nueva sin etiquetar y quiere que el modelo incorpore esa terminología sin rehacer el entrenamiento desde cero ni producir pares de instrucción y respuesta. ¿Qué etapa describe esto?',
		reverso:
			'Es continuous pre-training: se sigue entrenando el modelo con datos sin etiquetar para actualizar su conocimiento del dominio. El fine-tuning supervisado, en cambio, exige ejemplos etiquetados de entrada y salida deseada.',
	},
	{
		id: '3.3-t3',
		taskId: '3.3',
		objetivos: ['3.3#2'],
		tipo: 'diferencia',
		frente:
			'Un modelo responde en el formato pedido pero confunde la terminología del sector; otro domina la jerga pero ignora la estructura solicitada. ¿Qué método atiende cada carencia?',
		reverso:
			'La falta de formato y de seguimiento de órdenes se corrige con instruction tuning; el desconocimiento del vocabulario y del criterio del sector, con la adaptación del modelo a un dominio específico usando ejemplos de ese dominio.',
	},
	{
		id: '3.3-t4',
		taskId: '3.3',
		objetivos: ['3.3#2'],
		tipo: 'tradeoff',
		frente:
			'El catálogo de productos y las condiciones comerciales cambian cada semana y el equipo propone resolver la desactualización con fine-tuning. ¿Cuál es la consecuencia de ese enfoque?',
		reverso:
			'El fine-tuning no mantiene los hechos al día por sí solo: fija comportamiento y estilo, y cada cambio obligaría a repetir el ajuste. Para información volátil conviene recuperar el dato vigente y entregarlo como contexto en la consulta.',
	},
	{
		id: '3.3-t5',
		taskId: '3.3',
		objetivos: ['3.3#3'],
		tipo: 'riesgo',
		frente:
			'El histórico usado para ajustar un asistente proviene casi todo de un mismo producto y de un mismo idioma. El modelo funciona bien en las pruebas internas y falla con clientes de otras líneas. ¿Qué falló en el conjunto de datos?',
		reverso:
			'La representatividad. Si las categorías y los idiomas reales están infrarrepresentados, el modelo aprende ese sesgo y lo reproduce en producción. La corrección empieza en la curaduría del conjunto, no en el prompt.',
	},
	{
		id: '3.3-t6',
		taskId: '3.3',
		objetivos: ['3.3#3'],
		tipo: 'definicion',
		frente:
			'Dos respuestas del asistente son igual de correctas en los datos, pero una es más clara y menos arriesgada. Un grupo de revisores indica cuál prefiere y esas preferencias se usan para seguir ajustando el modelo. ¿Qué técnica es?',
		reverso:
			'RLHF: la retroalimentación humana en forma de comparaciones entrena un modelo de recompensa que guía el ajuste. Se usa cuando el criterio es difícil de escribir como regla, como el tono, la utilidad o la seguridad.',
	},
	{
		id: '3.3-t7',
		taskId: '3.3',
		objetivos: ['3.3#3'],
		tipo: 'servicio',
		frente:
			'Antes de ajustar un modelo con conversaciones de clientes, el equipo necesita localizar información sensible en el conjunto y proteger los datos almacenados mientras se procesan. ¿Qué servicios de AWS encajan en esa gobernanza?',
		reverso:
			'Amazon Macie descubre y clasifica datos sensibles en el almacenamiento; el cifrado de las claves se gestiona con AWS Key Management Service (AWS KMS) y el acceso se limita con AWS IAM. La trazabilidad de la procedencia y la retención del dato se definen antes de empezar el ajuste, no después.',
	},
];
