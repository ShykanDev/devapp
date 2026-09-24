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
];
