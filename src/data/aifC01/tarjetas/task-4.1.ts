import type { TarjetaAifC01 } from '@/data/aifC01/types';

export const tarjetasTask41: TarjetaAifC01[] = [
	{
		id: '4.1-t1',
		taskId: '4.1',
		objetivos: ['4.1#1'],
		tipo: 'riesgo',
		frente:
			'El equipo celebra que su clasificador tenga un 95 % de exactitud, pero al desagregar por idioma descubre que falla el doble con los usuarios que no escriben en inglés. ¿Qué característica de la IA responsable ha fallado y por qué el promedio no lo detectó?',
		reverso:
			'La equidad e inclusividad: el modelo rinde peor para un grupo aunque la métrica agregada sea buena. El promedio oculta el daño; se mide por subgrupo.',
	},
	{
		id: '4.1-t2',
		taskId: '4.1',
		objetivos: ['4.1#1'],
		tipo: 'definicion',
		frente:
			'Un asistente responde con total seguridad datos que no puede verificar contra ninguna fuente. ¿Qué característica de la IA responsable incumple y qué control la reduce?',
		reverso:
			'La veracidad: afirmar sin respaldo verificable. Se reduce anclando la respuesta a fuentes (grounding) y validando la salida antes de mostrarla.',
	},
	{
		id: '4.1-t3',
		taskId: '4.1',
		objetivos: ['4.1#6'],
		tipo: 'diferencia',
		frente:
			'Un modelo predice casi perfectamente el histórico con el que se entrenó y, al desplegarse con clientes nuevos, su error se dispara. ¿Qué fenómeno explica la diferencia y cómo se detecta?',
		reverso:
			'Overfitting (varianza alta): memoriza el ruido del entrenamiento y no generaliza. Se detecta comparando el error de entrenamiento con el de validación y midiendo por subgrupo.',
	},
	{
		id: '4.1-t4',
		taskId: '4.1',
		objetivos: ['4.1#6'],
		tipo: 'diferencia',
		frente:
			'Un modelo falla de forma parecida en entrenamiento y en producción, y añadir más datos de los mismos no mejora nada. ¿Qué componente del error domina y qué mueve el resultado?',
		reverso:
			'Sesgo alto (underfitting): el modelo no captura la relación real. Se corrige con más capacidad o mejores variables, no con más volumen de los mismos datos.',
	},
	{
		id: '4.1-t5',
		taskId: '4.1',
		objetivos: ['4.1#2'],
		tipo: 'servicio',
		frente:
			'Un asistente divulga información confidencial y responde sobre temas que la empresa no permite. ¿Qué control de Amazon Bedrock bloquea esto antes de que la respuesta llegue al usuario?',
		reverso:
			'Amazon Bedrock Guardrails: políticas de contenido y de tema que filtran la entrada y la salida, con validación de la respuesta.',
	},
	{
		id: '4.1-t6',
		taskId: '4.1',
		objetivos: ['4.1#7'],
		tipo: 'metrica',
		frente:
			'El cuadro de calidad muestra una exactitud global estable, pero los usuarios de un idioma concreto reportan más errores. ¿Qué análisis habría detectado el problema antes de que llegara a los usuarios?',
		reverso:
			'La subgroup analysis: desagregar las métricas por idioma, segmento o grupo. Una auditoría humana sobre la muestra confirma el hallazgo.',
	},
	{
		id: '4.1-t7',
		taskId: '4.1',
		objetivos: ['4.1#4'],
		tipo: 'riesgo',
		frente:
			'Un equipo publica ilustraciones generadas por IA en su catálogo y recibe un reclamo por reproducir un estilo reconocible. ¿Qué riesgo legal se ha materializado?',
		reverso:
			'Un reclamo por infracción de propiedad intelectual. Se mitiga revisando las licencias de los datos, filtrando coincidencias y verificando el contenido antes de publicar.',
	},
	{
		id: '4.1-t8',
		taskId: '4.1',
		objetivos: ['4.1#5'],
		tipo: 'metrica',
		frente:
			'Antes de entrenar, el equipo comprueba que cada subgrupo atendido aparece en una proporción comparable a su presencia real en los datos. ¿Qué característica del dataset están verificando?',
		reverso:
			'El balance y la inclusividad: una representación equilibrada evita que el modelo aprenda mejor unos subgrupos que otros.',
	},
	{
		id: '4.1-t9',
		taskId: '4.1',
		objetivos: ['4.1#3'],
		tipo: 'tradeoff',
		frente:
			'Un equipo quiere pasar una tarea interna que ya resuelve con un modelo pequeño al modelo más grande disponible. ¿Qué consideración responsable entra en juego?',
		reverso:
			'La sostenibilidad y el coste: el modelo mayor consume más energía y recursos sin garantizar una mejora medible. Se elige el modelo más pequeño que supere el criterio de calidad.',
	},
	{
		id: '4.1-t10',
		taskId: '4.1',
		objetivos: ['4.1#6'],
		tipo: 'diferencia',
		frente:
			'Un modelo acierta el 99 % con los datos que usó para entrenarse y solo el 60 % con casos nuevos. ¿Qué es el overfitting, en palabras simples, y con qué imagen lo explicarías?',
		reverso:
			'Overfitting: el modelo se «aprendió de memoria» los ejemplos de entrenamiento, incluido su ruido, en lugar de entender el patrón. Es como memorizar las respuestas de un examen: perfecto con lo ya visto, malo ante una pregunta nueva. Se delata por la brecha entre entrenamiento (error bajo) y validación (error alto).',
	},
	{
		id: '4.1-t11',
		taskId: '4.1',
		objetivos: ['4.1#6'],
		tipo: 'diferencia',
		frente:
			'Un modelo usa solo dos variables y se equivoca casi igual con los datos de entrenamiento que con los casos nuevos. ¿Qué es el underfitting y cómo se corrige?',
		reverso:
			'Underfitting: el modelo es demasiado simple y no captura la relación real, por eso falla en los dos conjuntos. Es como presentarse al examen sin haber estudiado: mal en todo. Se corrige con un modelo más capaz, mejores variables o menos regularización; añadir más datos de los mismos no ayuda.',
	},
	{
		id: '4.1-t12',
		taskId: '4.1',
		objetivos: ['4.1#6'],
		tipo: 'metrica',
		frente:
			'Tienes el error de entrenamiento y el de validación de un modelo. ¿Cómo distingues overfitting de underfitting con esos dos números y qué haces en cada caso?',
		reverso:
			'Mira la brecha entre los dos: si el error es alto y parecido en ambos, hay underfitting (falta de capacidad) y se sube la complejidad; si es bajo en entrenamiento y alto en validación, hay overfitting (memoriza el ruido) y se añaden datos o regularización. Nunca se decide mirando solo el error de entrenamiento.',
	},
	{
		id: '4.1-t13',
		taskId: '4.1',
		objetivos: ['4.1#1', '4.1#6'],
		tipo: 'diferencia',
		frente:
			'En una reunión alguien dice «este modelo tiene mucho sesgo» y dos personas entienden cosas distintas. ¿A qué dos significados puede referirse «sesgo» y en qué se diferencian?',
		reverso:
			'Al sesgo social (fairness): el modelo trata peor a un grupo de personas y se corrige revisando los datos y midiendo por subgrupo. Y al sesgo estadístico (bias-variance): el modelo es demasiado simple y no captura la relación, que es el underfitting. Uno hace daño a personas; el otro hace que el modelo prediga mal en general.',
	},
];
