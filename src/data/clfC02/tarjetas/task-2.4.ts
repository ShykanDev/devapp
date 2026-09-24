import type { TarjetaClfC02 } from '@/data/clfC02/types';

export const tarjetasTask24: TarjetaClfC02[] = [
	{
		id: '2.4-t1',
		taskId: '2.4',
		objetivos: ['2.4#3'],
		tipo: 'diferencia',
		frente:
			'Un compañero dice que basta con activar AWS Shield para detener los intentos de inyección en los formularios del sitio. ¿Qué matizas?',
		reverso:
			'AWS Shield protege frente a ataques de denegación de servicio distribuido por volumen, no inspecciona el contenido de cada petición. El filtrado de peticiones HTTP(S) maliciosas corresponde a AWS WAF.',
	},
	{
		id: '2.4-t2',
		taskId: '2.4',
		objetivos: ['2.4#3'],
		tipo: 'diferencia',
		frente:
			'Separa estas tres funciones: comportamiento sospechoso, vulnerabilidades de las cargas y vista agregada de hallazgos. ¿Qué servicio cubre cada una?',
		reverso:
			'Amazon GuardDuty detecta amenazas sobre la actividad; Amazon Inspector evalúa vulnerabilidades y exposición; AWS Security Hub agrega y prioriza los hallazgos en una vista única.',
	},
	{
		id: '2.4-t3',
		taskId: '2.4',
		objetivos: ['2.4#1'],
		tipo: 'definicion',
		frente: '¿En qué dominios se agrupan las capacidades de seguridad que ofrece AWS?',
		reverso:
			'Identidad y acceso, protección de la red y las aplicaciones, detección, protección de datos, visibilidad y auditoría, y cumplimiento. Se combinan: ninguna cubre todo por sí sola.',
	},
	{
		id: '2.4-t4',
		taskId: '2.4',
		objetivos: ['2.4#4'],
		tipo: 'servicio',
		frente: '¿Dónde encuentra un cliente productos de seguridad de terceros para integrarlos con AWS?',
		reverso:
			'En AWS Marketplace, el catálogo donde proveedores independientes publican software y servicios, incluidos productos de seguridad, que el cliente adquiere como suscripciones.',
	},
	{
		id: '2.4-t5',
		taskId: '2.4',
		objetivos: ['2.4#6'],
		tipo: 'servicio',
		frente: '¿Para qué sirve AWS Trusted Advisor en materia de seguridad?',
		reverso:
			'Revisa el entorno y entrega comprobaciones y recomendaciones en categorías como seguridad, rendimiento, tolerancia a fallos, optimización de costes y cuotas de servicio. Señala configuraciones de riesgo, pero no aplica correcciones.',
	},
	{
		id: '2.4-t6',
		taskId: '2.4',
		objetivos: ['2.4#2', '2.4#5'],
		tipo: 'definicion',
		frente:
			'Empareja cada recurso con su uso: AWS Security Center, AWS Security Blog, AWS Knowledge Center y AWS Artifact.',
		reverso:
			'AWS Security Center reúne la información de seguridad; AWS Security Blog publica artículos y novedades; AWS Knowledge Center responde dudas puntuales; AWS Artifact entrega informes de cumplimiento.',
	},
];
