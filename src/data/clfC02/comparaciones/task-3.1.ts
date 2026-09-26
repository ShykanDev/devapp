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
	{
		id: 'nube-vs-hibrido-vs-onpremises',
		etiqueta: 'Modelos de despliegue: nube, híbrido y on-premises',
		a: {
			titulo: 'Nube',
			resumen:
				'Todo el entorno se ejecuta en la nube de AWS: el cliente no compra servidores y obtiene elasticidad, alcance global y pago por uso. Es el modelo por defecto cuando no hay ataduras de hardware ni de cumplimiento.',
		},
		b: {
			titulo: 'Híbrido y on-premises',
			resumen:
				'El híbrido combina instalaciones propias con la nube de AWS, normalmente por normativa, latencia o inversión ya realizada. On-premises mantiene todo en las instalaciones del cliente y da control total a cambio de comprar y mantener la capacidad.',
		},
		diferenciaClave:
			'Nube pone todo en la nube; on-premises lo mantiene todo en instalaciones propias; el híbrido reparte la carga entre ambos mundos. No confundir híbrido (local más nube) con multinube (varios proveedores de nube).',
		cuandoA: [
			'Cuando no hay requisitos de permanencia física y se busca elasticidad, alcance global y pago por uso.',
			'Cuando el equipo quiere delegar la operación de la infraestructura y centrarse en la aplicación.',
		],
		cuandoB: [
			'Cuando parte de los datos debe quedarse en las instalaciones por normativa o por latencia.',
			'Cuando existe una inversión ya amortizada que conviene reutilizar mientras se adopta la nube.',
		],
		escenarioA:
			'Una startup despliega toda su plataforma en la nube y crece añadiendo recursos según la demanda, sin comprar ni mantener servidores propios.',
		escenarioB:
			'Un hospital conserva su sistema clínico en el centro de datos por normativa y ejecuta el análisis y las aplicaciones nuevas en la nube, conectando ambos entornos mediante un enlace dedicado.',
		preguntaIds: ['3.1-q14'],
		objetivos: ['3.1#3', '3.1#6'],
	},
];
