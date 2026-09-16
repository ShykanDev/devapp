import type { TarjetaAifC01 } from '@/data/aifC01/types';

export const tarjetasTask23: TarjetaAifC01[] = [
	{
		id: '2.3-t1',
		taskId: '2.3',
		objetivos: ['2.3#1'],
		tipo: 'servicio',
		frente:
			'Un equipo necesita construir un agente que ejecute herramientas, mantenga memoria y opere con su propia identidad y permisos a escala. ¿Qué servicio de AWS está pensado para esa capa?',
		reverso:
			'Amazon Bedrock AgentCore, con Amazon Bedrock AgentCore Runtime para ejecutar los agentes y Amazon Bedrock AgentCore Identity para su identidad y permisos. La capa de agentes es distinta de la de modelos.',
	},
	{
		id: '2.3-t2',
		taskId: '2.3',
		objetivos: ['2.3#1'],
		tipo: 'diferencia',
		frente:
			'Un compañero dice que Amazon Bedrock y Amazon SageMaker AI «hacen lo mismo porque ambos sirven modelos fundacionales». ¿Cómo lo corriges?',
		reverso:
			'Bedrock ofrece modelos gestionados por API con capacidades integradas como Amazon Bedrock Knowledge Bases, Amazon Bedrock Guardrails o Amazon Bedrock Prompt Management. SageMaker AI es la plataforma para construir, entrenar, ajustar y desplegar modelos con control del ciclo de vida.',
	},
	{
		id: '2.3-t3',
		taskId: '2.3',
		objetivos: ['2.3#1'],
		tipo: 'servicio',
		frente:
			'Quieres desplegar un modelo preentrenado conocido sin construir el pipeline de entrenamiento ni escribir la infraestructura de despliegue. ¿Qué capacidad de AWS acorta ese camino?',
		reverso:
			'Amazon SageMaker JumpStart: un catálogo de modelos preentrenados y soluciones listas para desplegar. Es el atajo entre elegir un modelo y tenerlo sirviendo, no un sustituto del control completo de Amazon SageMaker AI.',
	},
	{
		id: '2.3-t4',
		taskId: '2.3',
		objetivos: ['2.3#2'],
		tipo: 'tradeoff',
		frente:
			'Un equipo sin especialistas en ML debe integrar generación de texto en su producto y quiere validar el valor cuanto antes. ¿Qué ventaja de los servicios gestionados de IA generativa de AWS está aprovechando y qué no desaparece por ello?',
		reverso:
			'La accesibilidad y la menor barrera de entrada: el modelo se consume por API sin entrenarlo ni operar la infraestructura, lo que acelera la velocidad al mercado. Lo que no desaparece es la evaluación de la calidad ni el control de acceso.',
	},
	{
		id: '2.3-t5',
		taskId: '2.3',
		objetivos: ['2.3#2'],
		tipo: 'metrica',
		frente:
			'La dirección pregunta si el proyecto de IA generativa está cumpliendo su objetivo de negocio. ¿Qué evidencia conviene presentar en lugar de impresiones sobre la calidad del modelo?',
		reverso:
			'Métricas alineadas con el objetivo: tiempo ahorrado por tarea, tasa de finalización, coste por interacción o satisfacción de usuario. Los servicios gestionados aceleran la entrega, pero el valor se demuestra con métricas de negocio.',
	},
	{
		id: '2.3-t6',
		taskId: '2.3',
		objetivos: ['2.3#3'],
		tipo: 'riesgo',
		frente:
			'Un asistente que trata datos personales no cifra los datos, no registra las llamadas al modelo y permite invocarlo con credenciales compartidas. ¿Qué beneficios de la infraestructura de AWS se están desaprovechando?',
		reverso:
			'Seguridad y cumplimiento: cifrado con AWS Key Management Service (AWS KMS), permisos con AWS Identity and Access Management (IAM), trazas de auditoría con AWS CloudTrail e informes de conformidad con AWS Artifact. El modelo de responsabilidad compartida exige que el cliente aplique estos controles.',
	},
	{
		id: '2.3-t7',
		taskId: '2.3',
		objetivos: ['2.3#4'],
		tipo: 'tradeoff',
		frente:
			'Una aplicación tiene demanda alta y muy predecible; otra se usa de forma esporádica. ¿Cómo se traduce esa diferencia en el modelo de consumo?',
		reverso:
			'La predecible se beneficia de provisioned throughput, que reserva capacidad estable a cambio de pagar por ella; la esporádica encaja con on-demand, que factura el consumo real. Es un intercambio entre compromiso de capacidad y flexibilidad.',
	},
	{
		id: '2.3-t8',
		taskId: '2.3',
		objetivos: ['2.3#4'],
		tipo: 'metrica',
		frente:
			'El equipo discute si acortar los prompts y limitar la longitud de las respuestas. ¿Qué efecto tiene esa decisión sobre coste, latencia y calidad?',
		reverso:
			'Con precio por tokens, menos tokens de entrada y de salida reducen el coste y suelen mejorar la latencia. El intercambio es de calidad: recortar contexto o detalle puede empeorar respuestas que necesitaban esa información.',
	},
];
