import type { TarjetaAifC01 } from '@/data/aifC01/types';

export const tarjetasTask42: TarjetaAifC01[] = [
	{
		id: '4.2-t1',
		taskId: '4.2',
		objetivos: ['4.2#1'],
		tipo: 'diferencia',
		frente:
			'Un compañero afirma que el modelo es explicable porque tras cada decisión genera un párrafo justificándola. ¿Por qué esa afirmación no basta?',
		reverso:
			'Una justificación redactada puede ser plausible y no reflejar la causa real de la decisión. La explicabilidad se respalda con evidencia del comportamiento (variables influyentes, ejemplos, evaluaciones), no solo con una narración verosímil.',
	},
	{
		id: '4.2-t2',
		taskId: '4.2',
		objetivos: ['4.2#1'],
		tipo: 'riesgo',
		frente:
			'Un modelo muy preciso deniega solicitudes y nadie puede indicar qué factor pesó en cada caso. ¿Qué problema crea esa opacidad?',
		reverso:
			'El modelo no es transparente ni explicable. La decisión no puede justificarse ante la persona afectada ni auditarse, lo que resulta inaceptable en usos de alto impacto.',
	},
	{
		id: '4.2-t3',
		taskId: '4.2',
		objetivos: ['4.2#2'],
		tipo: 'servicio',
		frente:
			'Antes de aprobar un modelo, el equipo necesita una ficha con uso previsto, datos, métricas y limitaciones, además de resultados de evaluación comparativa. ¿Qué combinas?',
		reverso:
			'Una ficha documental, como Amazon SageMaker Model Cards, para dejar constancia, y evaluaciones, como Amazon Bedrock Model Evaluations, para obtener evidencia del comportamiento con criterios definidos y revisión humana.',
	},
	{
		id: '4.2-t4',
		taskId: '4.2',
		objetivos: ['4.2#2'],
		tipo: 'diferencia',
		frente:
			'Un modelo de código abierto publica pesos y código, pero su licencia limita el uso comercial y sus datos de entrenamiento no están documentados. ¿Basta para adoptarlo?',
		reverso:
			'No. La apertura facilita la inspección, pero la idoneidad depende también de la licencia y de la trazabilidad de los datos. Sin derechos de uso claros ni documentación, no cumple los requisitos para producción.',
	},
	{
		id: '4.2-t5',
		taskId: '4.2',
		objetivos: ['4.2#3'],
		tipo: 'tradeoff',
		frente:
			'El equipo pide máxima precisión, explicación completa por decisión y sin coste añadido de latencia. ¿Qué respuesta es realista?',
		reverso:
			'Es un intercambio: interpretabilidad y rendimiento se compensan, y calcular explicaciones añade coste. Se elige según el riesgo del caso y se compensa con documentación, evaluación y revisión humana.',
	},
	{
		id: '4.2-t6',
		taskId: '4.2',
		objetivos: ['4.2#4'],
		tipo: 'definicion',
		frente:
			'En una interfaz que decide con IA, el usuario no sabe que se usó IA ni puede pedir revisión de la decisión. ¿Qué principio se ha incumplido?',
		reverso:
			'El diseño centrado en el humano: transparencia de la decisión y mecanismos de retroalimentación y recurso humano. Sin ellos, la persona no puede entender ni impugnar la decisión.',
	},
];
