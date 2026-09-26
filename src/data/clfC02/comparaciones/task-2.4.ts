import type { ParConfusionClfC02 } from '@/data/clfC02/types';

export const paresTask24: ParConfusionClfC02[] = [
	{
		id: 'guardduty-vs-inspector-vs-security-hub',
		etiqueta: 'Amazon GuardDuty, Amazon Inspector y AWS Security Hub',
		a: {
			titulo: 'Detección y evaluación',
			resumen:
				'Amazon GuardDuty vigila la actividad del entorno y avisa de comportamiento sospechoso; Amazon Inspector evalúa vulnerabilidades y exposición de las cargas de trabajo. Ambos examinan y producen hallazgos, pero miran cosas distintas.',
		},
		b: {
			titulo: 'Agregación de hallazgos',
			resumen:
				'AWS Security Hub recopila y prioriza los hallazgos que generan otros servicios de seguridad, incluidos GuardDuty e Inspector, y los presenta en una vista única.',
		},
		diferenciaClave:
			'GuardDuty detecta amenazas sobre la actividad; Inspector busca vulnerabilidades y exposición; Security Hub no descubre por sí mismo, agrega y prioriza lo que otros servicios encuentran.',
		cuandoA: [
			'Cuando quieres detectar actividad sospechosa o potencialmente maliciosa en el entorno.',
			'Cuando necesitas conocer vulnerabilidades y exposición de instancias y contenedores.',
		],
		cuandoB: [
			'Cuando tienes varios servicios de seguridad y quieres una vista única y priorizada de sus hallazgos.',
			'Cuando buscas centralizar la gestión de hallazgos en una o varias cuentas.',
		],
		escenarioA:
			'Una empresa ve picos de tráfico hacia direcciones desconocidas y quiere saber si es actividad maliciosa; en paralelo, revisa sus instancias para localizar vulnerabilidades conocidas.',
		escenarioB:
			'La misma empresa recibe hallazgos de varios servicios de seguridad y los reúne en una sola vista priorizada para que el equipo sepa qué atender primero.',
		preguntaIds: ['2.4-q4'],
		objetivos: ['2.4#3'],
	},
	{
		id: 'waf-vs-shield',
		etiqueta: 'AWS WAF frente a AWS Shield',
		a: {
			titulo: 'AWS WAF',
			resumen:
				'Firewall de aplicaciones web: inspecciona las peticiones HTTP(S) y bloquea patrones maliciosos mediante reglas, por ejemplo inyección SQL o cross-site scripting.',
		},
		b: {
			titulo: 'AWS Shield',
			resumen:
				'Protección gestionada frente a ataques de denegación de servicio distribuido (DDoS): absorbe y mitiga el tráfico de volumen que busca tumbar el servicio.',
		},
		diferenciaClave:
			'AWS WAF decide mirando el contenido de cada petición; AWS Shield decide frente al volumen del ataque. Uno filtra peticiones maliciosas, el otro protege la disponibilidad frente a un DDoS.',
		cuandoA: [
			'Cuando necesitas bloquear peticiones concretas con carga maliciosa contra tu aplicación web.',
			'Cuando quieres aplicar reglas de filtrado asociadas a una distribución o a un balanceador.',
		],
		cuandoB: [
			'Cuando el riesgo es un ataque de volumen que intenta saturar el servicio.',
			'Cuando buscas proteger la disponibilidad sin gestionar tú mismo la mitigación.',
		],
		escenarioA:
			'Un portal detecta intentos de inyección de código en sus formularios y aplica reglas que bloquean las peticiones que coinciden con patrones maliciosos.',
		escenarioB:
			'El mismo portal sufre un pico masivo de tráfico dirigido a dejarlo fuera de servicio y la mitigación del ataque la asume la protección gestionada frente a DDoS.',
		preguntaIds: ['2.4-q3'],
		objetivos: ['2.4#3'],
	},
	{
		id: 'trusted-advisor-vs-security-hub',
		etiqueta: 'Revisión proactiva de la cuenta vs centralización de hallazgos',
		a: {
			titulo: 'Revisión proactiva de la cuenta',
			resumen:
				'AWS Trusted Advisor revisa el entorno y entrega comprobaciones y recomendaciones en categorías como seguridad, rendimiento, tolerancia a fallos, optimización de costes y cuotas de servicio. Señala, pero no corrige por el cliente.',
		},
		b: {
			titulo: 'Centralización de hallazgos',
			resumen:
				'AWS Security Hub recopila, normaliza y prioriza los hallazgos que generan otros servicios de seguridad, incluidos GuardDuty e Inspector, en una vista única para varias cuentas.',
		},
		diferenciaClave:
			'La revisión proactiva mira la configuración de la cuenta y propone mejoras; la centralización no descubre por sí misma, reúne y ordena lo que otros servicios encuentran. Una recomienda y la otra agrega y prioriza.',
		cuandoA: [
			'Cuando se quiere localizar configuraciones de riesgo o desviaciones de las mejores prácticas antes de una auditoría.',
			'Cuando se busca una lista de recomendaciones accionables sobre la propia cuenta.',
		],
		cuandoB: [
			'Cuando varios servicios de seguridad producen hallazgos y se necesita verlos juntos y priorizados.',
			'Cuando se quiere centralizar la gestión de hallazgos en una o varias cuentas de la organización.',
		],
		escenarioA:
			'El equipo revisa las comprobaciones de seguridad del servicio de recomendaciones y corrige las configuraciones señaladas antes de la auditoría.',
		escenarioB:
			'La misma empresa recibe hallazgos de varios servicios de seguridad y los reúne en una sola vista priorizada para saber qué atender primero.',
		preguntaIds: ['2.4-q16'],
		objetivos: ['2.4#6'],
	},
	{
		id: 'marketplace-terceros-vs-servicio-nativo',
		etiqueta: 'Producto de seguridad de un proveedor externo frente a un servicio nativo de AWS',
		a: {
			titulo: 'Producto de un proveedor externo',
			resumen:
				'AWS Marketplace es el catálogo donde proveedores independientes publican productos, incluidos productos de seguridad, que el cliente adquiere por suscripción e integra en su entorno. La herramienta sigue siendo responsabilidad de su proveedor.',
		},
		b: {
			titulo: 'Servicio nativo de AWS',
			resumen:
				'Un servicio de seguridad propio de AWS forma parte del alcance del proveedor: AWS lo opera, lo mantiene y lo soporta, y el cliente lo configura dentro del modelo de responsabilidad compartida.',
		},
		diferenciaClave:
			'En el catálogo de terceros el cliente elige y adquiere la solución de un proveedor externo, que responde de su producto; en el servicio nativo la solución la opera y soporta AWS. Uno amplía las opciones con el ecosistema de terceros y el otro cubre la necesidad con una capacidad propia de AWS.',
		cuandoA: [
			'Cuando se necesita una herramienta especializada o de un fabricante concreto que no existe como servicio nativo.',
			'Cuando se prefiere adquirir la solución por suscripción e integrarla en el entorno en lugar de desarrollarla.',
		],
		cuandoB: [
			'Cuando la necesidad encaja en las capacidades de seguridad que AWS ya ofrece y se quiere que AWS las opere y soporte.',
			'Cuando se busca la integración y el soporte directo de AWS sin depender de un proveedor externo.',
		],
		escenarioA:
			'Una empresa debe cumplir un requisito sectorial con una herramienta de un fabricante especializado que no quiere construir; la adquiere por suscripción desde el catálogo y la integra en su entorno.',
		escenarioB:
			'La misma empresa decide cubrir esa necesidad con una capacidad de seguridad que ya ofrece AWS y que AWS opera y soporta, sin contratar a un proveedor externo.',
		preguntaIds: ['2.4-q17'],
		objetivos: ['2.4#4'],
	},
];
