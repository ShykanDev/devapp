import type { ParConfusionClfC02 } from '@/data/clfC02/types';

export const paresTask31: ParConfusionClfC02[] = [
	{
		id: 'iac-vs-consola-vs-cli',
		etiqueta: 'Infraestructura como código vs consola y CLI',
		a: {
			titulo: 'Infraestructura como código (IaC)',
			resumen:
				'Describe el estado deseado de la infraestructura en archivos versionados que se despliegan de forma repetible. El entorno queda documentado, revisable y reconstruible; la definición es la fuente de verdad.',
		},
		b: {
			titulo: 'Consola de administración y CLI',
			resumen:
				'Vías de acceso directo a los servicios de AWS. La consola es visual y guiada, ideal para explorar y para tareas puntuales; la CLI ejecuta comandos desde la terminal y se encadena en scripts, pero el usuario sigue siendo quien los escribe.',
		},
		diferenciaClave:
			'La IaC define y reproduce el entorno a partir de archivos versionados; la consola y la CLI ejecutan acciones concretas en el momento y, por sí mismas, no dejan una definición reutilizable del entorno.',
		cuandoA: [
			'Cuando el mismo entorno debe reproducirse en varias cuentas o regiones con el mismo resultado.',
			'Cuando necesitas auditar quién cambió qué y reconstruir la infraestructura tras un fallo.',
		],
		cuandoB: [
			'Cuando exploras un servicio por primera vez o haces un ajuste puntual.',
			'Cuando ejecutas una tarea rápida desde la terminal sin necesidad de describir todo el entorno.',
		],
		escenarioA:
			'Un equipo define una plantilla con la red, el cómputo y la base de datos y la despliega igual en desarrollo, pruebas y producción; ante un desastre, vuelve a ejecutar la plantilla y recrea el entorno.',
		escenarioB:
			'Una persona recién incorporada abre la consola para entender cómo se ve un servicio y crea un recurso de prueba; otro perfil ejecuta un comando de la CLI para consultar el estado de unos recursos sin escribir una plantilla.',
		preguntaIds: ['3.1-q3'],
		objetivos: ['3.1#2', '3.1#4'],
	},
	{
		id: 'una-vez-vs-repetible',
		etiqueta: 'Operación puntual vs proceso repetible',
		a: {
			titulo: 'Operación puntual',
			resumen:
				'Acción que resuelve una necesidad concreta y no se vuelve a ejecutar. Se hace a mano o con un comando aislado; su valor está en la inmediatez.',
		},
		b: {
			titulo: 'Proceso repetible',
			resumen:
				'Procedimiento definido una vez y diseñado para volver a ejecutarse tantas veces como haga falta, con el mismo resultado. Suele apoyarse en scripts, plantillas o infraestructura como código.',
		},
		diferenciaClave:
			'La operación puntual responde al «ahora» y no requiere definición previa; el proceso repetible invierte tiempo en definirse para que cada ejecución sea consistente y auditable.',
		cuandoA: [
			'Cuando exploras, pruebas o haces un ajuste que no volverá a repetirse.',
			'Cuando el coste de definir y mantener el proceso supera claramente el beneficio.',
		],
		cuandoB: [
			'Cuando la misma tarea se repite en el tiempo o debe aplicarse a varios entornos.',
			'Cuando necesitas resultados idénticos, trazabilidad y menos errores humanos.',
		],
		escenarioA:
			'Una persona crea una instancia de Amazon EC2 para probar una idea durante una tarde y la elimina después; no documenta el proceso porque no volverá a necesitarlo.',
		escenarioB:
			'Un equipo debe crear cada semana un entorno de pruebas completo e idéntico al de producción; define el entorno como código y lo despliega con la misma definición cada vez.',
		preguntaIds: ['3.1-q8'],
		objetivos: ['3.1#5'],
	},
];
