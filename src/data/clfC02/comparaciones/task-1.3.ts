import type { ParConfusionClfC02 } from '@/data/clfC02/types';

export const paresTask13: ParConfusionClfC02[] = [
	{
		id: 'caf-vs-well-architected',
		etiqueta: 'AWS CAF vs AWS Well-Architected Framework',
		a: {
			titulo: 'AWS Cloud Adoption Framework (AWS CAF)',
			resumen:
				'Marco de adopción organizativa. Organiza el cambio en seis perspectivas (Business, People, Governance, Platform, Security y Operations) y busca resultados de negocio: menor riesgo, mejor desempeño ESG, más ingresos y más eficiencia operativa.',
		},
		b: {
			titulo: 'AWS Well-Architected Framework',
			resumen:
				'Marco de diseño técnico de cargas de trabajo. Evalúa y mejora la arquitectura con seis pilares: excelencia operativa, seguridad, fiabilidad, eficiencia del rendimiento, optimización de costes y sostenibilidad.',
		},
		diferenciaClave:
			'El AWS CAF actúa sobre la organización y el negocio (adopción, personas y gobernanza); el AWS Well-Architected Framework actúa sobre la arquitectura técnica de cada carga. Uno planifica el viaje; el otro revisa el diseño.',
		cuandoA: [
			'Cuando la organización necesita ordenar la adopción: estrategia, personas, gobernanza, plataforma, seguridad y operaciones.',
			'Cuando la dirección pide justificar el valor de negocio y gestionar el riesgo del cambio.',
		],
		cuandoB: [
			'Cuando hay que evaluar y mejorar el diseño técnico de una carga de trabajo concreta.',
			'Cuando se buscan decisiones de arquitectura equilibradas entre fiabilidad, seguridad, coste y rendimiento.',
		],
		escenarioA:
			'Una empresa va a migrar a AWS y necesita alinear a negocio, recursos humanos y tecnología: define perspectivas y capacidades para que finanzas vea el retorno y las personas estén preparadas para el cambio.',
		escenarioB:
			'El equipo de una aplicación ya diseñada revisa su arquitectura frente a los pilares para decidir si conviene mejorar la tolerancia a fallos o el uso de servicios gestionados.',
		preguntaIds: ['1.3-q5'],
		objetivos: ['1.3#3'],
	},
	{
		id: 'rehost-vs-replataforma',
		etiqueta: 'Rehost vs replatform',
		a: {
			titulo: 'Rehost (lift and shift)',
			resumen:
				'Mover la aplicación tal cual a AWS, normalmente a servidores equivalentes, sin tocar su arquitectura ni su configuración salvo lo imprescindible. Prioriza la velocidad de salida.',
		},
		b: {
			titulo: 'Replatform (lift, tuck and reshape)',
			resumen:
				'Migrar con ajustes acotados para aprovechar servicios gestionados, por ejemplo cambiar un motor autogestionado por uno gestionado. Equilibra esfuerzo y beneficio operativo.',
		},
		diferenciaClave:
			'Rehost no modifica la aplicación y gana rapidez; replatform introduce cambios limitados y a cambio reduce la carga operativa. El rediseño profundo pertenece a refactor, no a estas dos.',
		cuandoA: [
			'Cuando el plazo manda y se necesita salir del centro de datos cuanto antes.',
			'Cuando la aplicación se va a retirar pronto o no interesa invertir en rediseñarla.',
		],
		cuandoB: [
			'Cuando un cambio acotado permite delegar operación en servicios gestionados.',
			'Cuando el equipo puede asumir una ventana de ajuste a cambio de menor coste operativo a largo plazo.',
		],
		escenarioA:
			'Una empresa debe abandonar su centro de datos en tres meses y traslada sus servidores a AWS sin cambios para cumplir la fecha.',
		escenarioB:
			'La misma empresa migra su base de datos autogestionada a un motor gestionado para reducir las tareas de mantenimiento y parcheo.',
		preguntaIds: ['1.3-q8'],
		objetivos: ['1.3#4'],
	},
];
