import type { TarjetaAifC01 } from '@/data/aifC01/types';

export const tarjetasTask11: TarjetaAifC01[] = [
	{
		id: '1.1-t1',
		taskId: '1.1',
		objetivos: ['1.1#1'],
		tipo: 'definicion',
		frente:
			'Un ingeniero dice «el algoritmo es el mismo, lo que cambia es el modelo que entrenamos con tus datos». ¿Qué distingue a cada uno?',
		reverso:
			'El algoritmo es el procedimiento de aprendizaje o de decisión; el modelo es el artefacto con los patrones ya aprendidos. Se reutiliza el algoritmo y se obtienen modelos distintos según los datos.',
	},
	{
		id: '1.1-t2',
		taskId: '1.1',
		objetivos: ['1.1#1'],
		tipo: 'diferencia',
		frente:
			'Una empresa lanza un chatbot y comprueba que sus respuestas no mejoran por mucho que se use cada día. ¿Está el modelo entrenándose en producción?',
		reverso:
			'No. En producción solo hay inferencia: el modelo aplica lo ya aprendido y no cambia sus pesos. Para mejorar hay que reentrenar o ajustar con datos nuevos.',
	},
	{
		id: '1.1-t3',
		taskId: '1.1',
		objetivos: ['1.1#1'],
		tipo: 'riesgo',
		frente:
			'Un modelo de selección de personal se entrena con históricos de un solo perfil y rechaza sistemáticamente a otro grupo. ¿Qué conceptos explican la situación?',
		reverso:
			'Hay sesgo (bias) en los datos, que produce resultados poco equitativos y por tanto un problema de fairness. La corrección empieza por revisar la representatividad y el etiquetado.',
	},
	{
		id: '1.1-t4',
		taskId: '1.1',
		objetivos: ['1.1#2'],
		tipo: 'diferencia',
		frente:
			'Un chatbot responde preguntas de un manual y otro, además, consulta el pedido, actualiza su estado y avisa al cliente. ¿Qué distingue al segundo?',
		reverso:
			'Es agentic AI: planifica varios pasos, usa herramientas y actúa sobre sistemas externos. El primero solo genera texto a partir de un contexto.',
	},
	{
		id: '1.1-t5',
		taskId: '1.1',
		objetivos: ['1.1#3'],
		tipo: 'tradeoff',
		frente:
			'Un equipo elige entre inferencia por lotes y en tiempo real para analizar reseñas. ¿Qué decide el intercambio?',
		reverso:
			'Si alguien espera la respuesta, tiempo real; si el resultado se consume más tarde, el lote suele ser más económico y estable. Manda el requisito de latencia, no la novedad del modo.',
	},
	{
		id: '1.1-t6',
		taskId: '1.1',
		objetivos: ['1.1#3'],
		tipo: 'metrica',
		frente:
			'Antes de elegir el modo de inferencia, ¿qué dos medidas conviene fijar para comparar alternativas?',
		reverso:
			'La latencia que tolera el usuario y el volumen o ritmo de peticiones. Con esos números, el tiempo real se justifica solo cuando la espera importa y la carga es interactiva.',
	},
	{
		id: '1.1-t7',
		taskId: '1.1',
		objetivos: ['1.1#4'],
		tipo: 'definicion',
		frente:
			'Un equipo reúne 10.000 fotos sin categoría y quiere agruparlas por estilo. ¿Qué tipo de dato usa y qué puede esperar?',
		reverso:
			'Datos no etiquetados (imagen). Sin etiquetas no se predice una clase conocida: se buscan agrupamientos o similitudes que después pueden guiar el etiquetado.',
	},
	{
		id: '1.1-t8',
		taskId: '1.1',
		objetivos: ['1.1#4'],
		tipo: 'diferencia',
		frente:
			'Un CSV de facturación con importe y fecha, frente a correos y PDF adjuntos. ¿Qué separa a un dato estructurado de uno no estructurado?',
		reverso:
			'El estructurado encaja en un esquema fijo de campos y se consulta con facilidad; el no estructurado (texto, imagen, audio, PDF) carece de esquema rígido y requiere preparación antes de usarse.',
	},
	{
		id: '1.1-t9',
		taskId: '1.1',
		objetivos: ['1.1#5'],
		tipo: 'diferencia',
		frente:
			'Segmentar clientes sin etiquetas frente a predecir impago con un histórico ya marcado. ¿Qué aprendizaje usa cada caso?',
		reverso:
			'Segmentar es no supervisado: busca estructura sin respuesta conocida. Predecir impago es supervisado: aprende de ejemplos etiquetados con el resultado.',
	},
	{
		id: '1.1-t10',
		taskId: '1.1',
		objetivos: ['1.1#5'],
		tipo: 'definicion',
		frente:
			'Un agente de recomendación gana puntos cuando el usuario compra y los pierde cuando ignora la sugerencia. ¿De qué aprende?',
		reverso:
			'Aprendizaje por refuerzo: ajusta su política según recompensas y penalizaciones acumuladas, no según etiquetas correctas predefinidas.',
	},
];
