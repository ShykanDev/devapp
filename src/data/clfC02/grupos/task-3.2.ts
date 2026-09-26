import type { GrupoTematico } from '@/data/clfC02/types';

export const gruposTask32: GrupoTematico[] = [
	{
		id: '3.2-g1',
		titulo: 'Regiones, Availability Zones y edge locations',
		objetivos: ['3.2#1', '3.2#5'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'La infraestructura global de AWS se organiza en capas anidadas:\n\n- **Región**: área geográfica independiente (por ejemplo, `eu-west-1`). Cada región es un despliegue separado con sus propios servicios y su propio aislamiento frente al resto.\n- **Availability Zone (AZ)**: uno o varios centros de datos aislados dentro de una región, conectados entre sí por red de baja latencia. Una región tiene al menos tres AZ en la mayoría de los casos.\n- **Edge location**: punto de presencia cercano al usuario final que usan servicios de entrega de contenido y DNS para acercar la respuesta.\n\nLa relación es de continente a edificio a punto de proximidad: la **región** agrupa AZ, y las **edge locations** están fuera de ese eje, repartidas por muchas ciudades para reducir la distancia hasta el usuario. Un recurso se despliega en una región concreta; las AZ de esa región dan tolerancia a fallos; las edge locations aceleran la entrega global.',
			},
			{
				tipo: 'comparacion',
				parId: 'regiones-vs-az-vs-edge',
			},
			{
				tipo: 'escenario',
				situacion:
					'Una empresa europea sirve una aplicación web a clientes de Europa, América y Asia. Necesita baja latencia de descarga, pero también cumplir que los datos personales de sus clientes europeos permanezcan almacenados en Europa.',
				analisis:
					'Los **datos** se alojan en una región europea para respetar la residencia de datos; las **edge locations** distribuyen el contenido estático cerca de cada usuario sin mover los datos de origen. Es el patrón habitual: región para el dato y el cómputo, edge para la entrega.',
				servicio: 'Amazon CloudFront',
			},
			{
				tipo: 'errorComun',
				error: 'Pensar que una edge location es una región más pequeña o que se puede crear una instancia de cómputo general en ella.',
				correccion:
					'Las edge locations no alojan los servicios generales: son puntos de presencia para entrega de contenido y resolución DNS. Para cómputo y datos se despliega en una región, repartiendo entre sus AZ.',
			},
			{
				tipo: 'clave',
				items: [
					'Región = área geográfica con varios centros de datos aislados (AZ).',
					'AZ = centro de datos aislado dentro de la región, con red de baja latencia entre AZ.',
					'Edge location = punto de presencia cercano al usuario para entrega de contenido y DNS.',
					'La relación geográfica es: región ⊃ Availability Zones; edge locations, fuera de ese eje.',
				],
			},
		],
		preguntasGuia: [
			'¿Cuál es la relación entre una región y sus Availability Zones?',
			'¿Para qué sirve una edge location y en qué se diferencia de una AZ?',
			'¿Qué se despliega en una región y qué se sirve desde el edge?',
		],
	},
	{
		id: '3.2-g2',
		titulo: 'Alta disponibilidad con varias Availability Zones',
		objetivos: ['3.2#2', '3.2#6', '3.2#7'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'La **alta disponibilidad** es la capacidad de seguir atendiendo el servicio aunque falle un componente. AWS la consigue repartiendo la carga entre **varias Availability Zones** de una misma región: si una AZ se cae, las otras siguen respondiendo.\n\nLa clave está en el aislamiento: cada AZ tiene su propia alimentación, refrigeración y red, y **no comparten un punto único de fallo**. Un error de configuración o un fallo físico en una AZ no se propaga automáticamente a la otra. Para aprovecharlo hay que **desplegar réplicas** en más de una AZ y distribuir el tráfico entre ellas; tener todo en una sola AZ no aporta ninguna tolerancia.',
			},
			{
				tipo: 'ejemplo',
				md: '```text\nBase de datos en una sola AZ:\n  falla la AZ -> la base de datos no está disponible\n\nBase de datos con instancia en espera en otra AZ:\n  falla la AZ -> conmutación (failover) a la instancia en espera; sigue el servicio\n\nBalanceador de carga delante:\n  reparte el tráfico entre instancias de varias AZ\n```',
			},
			{
				tipo: 'errorComun',
				error: 'Confundir alta disponibilidad con copia de seguridad y creer que tener un snapshot basta para seguir operando si se cae una AZ.',
				correccion:
					'La alta disponibilidad se logra con redundancia activa en varias AZ, no con copias de seguridad. El snapshot sirve para recuperar datos tras una pérdida, no para mantener el servicio en marcha durante un fallo de zona.',
			},
		],
		preguntasGuia: [
			'¿Cómo consigue AWS que una AZ no sea punto único de fallo?',
			'¿Basta con desplegar en una AZ para tener alta disponibilidad?',
			'¿Qué diferencia hay entre alta disponibilidad y copia de seguridad?',
		],
	},
	{
		id: '3.2-g3',
		titulo: 'Cuándo usar varias regiones y para qué sirve el edge',
		objetivos: ['3.2#3', '3.2#4', '3.2#8'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'Usar **varias regiones** va más allá de la alta disponibilidad: añade distancia geográfica. Los motivos oficiales para hacerlo son:\n\n- **Disaster recovery (DR)**: mantener una copia o una capacidad de recuperación en otra región para el caso extremo de pérdida total de una región.\n- **Continuidad de negocio**: seguir operando aunque una región completa quede indisponible durante más tiempo.\n- **Baja latencia para el usuario final**: servir desde la región más cercana a cada audiencia.\n- **Soberanía de los datos**: mantener los datos de un país o zona dentro de sus fronteras.\n\nLas **edge locations** atacan el mismo problema de latencia desde otro ángulo: no replican la aplicación, sino que acercan la entrega de contenido y la resolución DNS. Son complementarias a la elección de región: el dato vive en una región y el edge lo distribuye.',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Usa varias regiones cuando necesites DR con independencia geográfica, continuidad de negocio o residencia de datos por país.',
					'Elige la región más cercana a los usuarios para reducir latencia, y apóyate en el edge para la entrega de contenido.',
					'Documenta la estrategia de recuperación: región principal, región de respaldo y qué datos se replican.',
				],
				noUsar: [
					'No replices en varias regiones «por si acaso»: multiplica coste, complejidad operativa y consistencia de datos.',
					'No esperes que el edge sustituya a una región de DR: el edge no reemplaza el dato ni la lógica de negocio.',
				],
			},
			{
				tipo: 'ejemplo',
				md: '```text\nMotivo -> decisión de diseño\n- Cumplir residencia de datos      -> fijar región por país\n- Sobrevivir a la caída de región  -> réplica en otra región (DR)\n- Descargas rápidas en 3 continentes -> edge locations (entrega)\n- Usuarios solo en un país         -> una región con varias AZ\n```',
			},
		],
		preguntasGuia: [
			'¿Qué cuatros motivos justifican usar varias regiones?',
			'¿En qué se diferencian las edge locations de una región de respaldo?',
			'¿Cuándo basta con una sola región y varias AZ?',
		],
	},
];
