import type { GrupoTematico } from '@/data/clfC02/types';

export const gruposTask35: GrupoTematico[] = [
	{
		id: '3.5-g1',
		titulo: 'Servicios de red y componentes de una VPC',
		objetivos: ['3.5#1', '3.5#2'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'La categoría de **redes y entrega de contenido** agrupa los servicios que conectan, aíslan y publican recursos: **Amazon VPC** para la red virtual privada, **Amazon Route 53** para DNS, **Amazon CloudFront** para entrega de contenido, **AWS Direct Connect** y **AWS VPN** para enlazar instalaciones propias, y **AWS Transit Gateway**, **AWS PrivateLink** o **AWS Global Accelerator** para interconectar redes y acercar el tráfico.\n\n**Amazon VPC** es una red virtual aislada dentro de una región, con el rango de direcciones IP que tú defines. Sus componentes principales son:\n\n- **Subnet**: división del rango de la VPC confinada a una sola Availability Zone; puede ser pública o privada.\n- **Route table**: reglas que deciden por dónde sale cada paquete.\n- **Internet gateway**: puerta de entrada y salida hacia internet para las subredes públicas.\n- **NAT gateway**: salida a internet para subredes privadas, sin exponerlas a conexiones entrantes.\n- **VPC endpoint**: acceso privado a servicios de AWS sin salir a internet.',
			},
			{
				tipo: 'ejemplo',
				md: '```text\nDiseño habitual de una VPC:\n- Subred pública:  internet gateway + route table 0.0.0.0/0 hacia el gateway\n- Subred privada:  NAT gateway para la salida, sin entrada desde internet\n- Un par de subredes por Availability Zone para tolerar el fallo de una\n```',
			},
			{
				tipo: 'errorComun',
				error: 'Creer que cualquier subred puede salir a internet por el simple hecho de estar dentro de una VPC.',
				correccion:
					'Para que una subred sea pública necesita un internet gateway asociado a la VPC y una route table que envíe el tráfico a ese gateway. Sin esa ruta, la subred queda privada aunque el rango de direcciones sea válido.',
			},
		],
		preguntasGuia: [
			'¿Qué servicios de AWS pertenecen a la categoría de red y para qué sirve cada uno?',
			'¿Qué componentes forman una VPC y qué papel cumple cada uno?',
			'¿Qué diferencia hay entre una subred pública y una privada?',
		],
	},
	{
		id: '3.5-g2',
		titulo: 'Seguridad dentro de una VPC',
		objetivos: ['3.5#3'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'La seguridad de una VPC se aplica en capas que conviene no mezclar.\n\n- **Security group**: cortafuegos **con estado** (stateful) asociado a recursos como instancias. Solo admite reglas de permiso (allow); la respuesta de una conexión permitida vuelve sola, sin regla inversa. Actúa a nivel de instancia o recurso.\n- **Network ACL**: cortafuegos **sin estado** (stateless) asociado a una subred. Admite reglas de permiso y de denegación, se evalúa por orden de número de regla y obliga a definir explícitamente el tráfico de respuesta. Actúa a nivel de subred.\n\nAdemás, **Amazon Inspector** evalúa de forma continua las instancias para detectar vulnerabilidades conocidas y exposiciones de red no deseadas, mientras que **AWS Shield** y **AWS WAF** protegen frente a ataques en la capa de aplicación.',
			},
			{
				tipo: 'comparacion',
				parId: 'security-group-vs-nacls',
			},
			{
				tipo: 'escenario',
				situacion:
					'Un equipo revisa por qué una instancia con un security group restrictivo sigue recibiendo tráfico inesperado. Quiere saber qué herramienta detecta configuraciones de red peligrosas y vulnerabilidades en sus servidores.',
				analisis:
					'El **security group** controla el tráfico permitido a la instancia y el **network ACL** filtra a nivel de subred; son controles preventivos. Para el análisis continuo de vulnerabilidades y exposiciones se usa **Amazon Inspector**, que evalúa las instancias y reporta hallazgos en lugar de bloquear el tráfico.',
				servicio: 'Amazon Inspector',
			},
			{
				tipo: 'errorComun',
				error: 'Creer que los network ACLs y los security groups son lo mismo y que basta con configurar uno de los dos.',
				correccion:
					'Son capas complementarias: el network ACL filtra en la subred y el security group en el recurso. El tráfico debe superar ambos controles, así que conviene revisar las dos capas y no asumir que una sustituye a la otra.',
			},
		],
		preguntasGuia: [
			'¿Qué diferencia hay entre un security group y un network ACL?',
			'¿Para qué sirve Amazon Inspector dentro de la seguridad de la VPC?',
			'¿Por qué se aplican controles a nivel de subred y a nivel de recurso?',
		],
	},
	{
		id: '3.5-g3',
		titulo: 'Propósito de Amazon Route 53',
		objetivos: ['3.5#4'],
		bloques: [
			{
				tipo: 'concepto',
				md: '**Amazon Route 53** es el servicio de DNS administrado de AWS. Traduce nombres de dominio legibles (por ejemplo, `app.ejemplo.com`) a direcciones IP o a destinos de AWS, de modo que los usuarios no tengan que conocer la dirección del servidor.\n\nSus usos principales son:\n\n- **Registro de dominios**: registrar y administrar el nombre de dominio público.\n- **Resolución DNS**: responder consultas mediante registros como A, AAAA o CNAME.\n- **Enrutamiento**: políticas por latencia, geolocalización, ponderación o failover.\n- **Comprobaciones de estado**: retirar un destino no saludable y desviar el tráfico al que sigue disponible.\n\nRoute 53 no reemplaza al alojamiento web ni a la entrega de contenido: resuelve nombres y dirige el tráfico hacia el destino correcto.',
			},
			{
				tipo: 'cuandoUsar',
				usar: [
					'Usa Amazon Route 53 cuando necesites publicar un dominio público y resolver nombres hacia tus recursos en AWS.',
					'Configura comprobaciones de estado y failover cuando quieras desviar el tráfico automáticamente si un destino deja de responder.',
					'Elige políticas de enrutamiento por latencia o geolocalización cuando los usuarios estén repartidos por varias ubicaciones.',
				],
				noUsar: [
					'No esperes que Route 53 almacene o sirva el contenido: para eso se usan el alojamiento y la entrega de contenido.',
					'No confundas Route 53 con un balanceador de carga: el DNS dirige la resolución de nombres, no reparte conexiones dentro de una red.',
				],
			},
			{
				tipo: 'errorComun',
				error: 'Pensar que Amazon Route 53 solo registra dominios y no interviene en la disponibilidad del servicio.',
				correccion:
					'Además del registro, Route 53 resuelve consultas y aplica políticas de enrutamiento y comprobaciones de estado. Con failover puede retirar un destino no saludable y enviar a los usuarios a otro destino disponible.',
			},
		],
		preguntasGuia: [
			'¿Cuál es el propósito principal de Amazon Route 53?',
			'¿Qué aportan las comprobaciones de estado y las políticas de enrutamiento?',
			'¿En qué se diferencia Route 53 de un balanceador de carga?',
		],
	},
	{
		id: '3.5-g4',
		titulo: 'Opciones de conectividad de red hacia AWS',
		objetivos: ['3.5#5'],
		bloques: [
			{
				tipo: 'concepto',
				md: 'Conectar una red propia con AWS se apoya en dos piezas distintas: la **VPN** y la **conexión dedicada**.\n\n- **AWS VPN**: levanta un túnel cifrado sobre internet entre la red local y la VPC. Se despliega rápido y sirve como enlace de respaldo o para necesidades puntuales. Incluye variantes de sitio a sitio y de cliente remoto, como **AWS Client VPN**.\n- **AWS Direct Connect**: enlace dedicado y privado que no atraviesa internet, con ancho de banda y latencia más estables y predecibles. Exige contratar la conexión con un proveedor y tarda en aprovisionarse.\n\nA partir de ahí, **AWS Transit Gateway** conecta muchas VPC y redes locales desde un único punto, y **AWS PrivateLink** da acceso privado a servicios sin exponerlos a internet. La decisión habitual es Direct Connect para tráfico estable y crítico, y VPN para rapidez de despliegue, bajo volumen o respaldo.',
			},
			{
				tipo: 'comparacion',
				parId: 'vpn-vs-direct-connect',
			},
			{
				tipo: 'escenario',
				situacion:
					'Una empresa necesita transferir cada noche grandes volúmenes de datos entre su centro de datos y AWS con un ancho de banda estable y una latencia predecible. Además quiere un enlace de respaldo por si el principal falla.',
				analisis:
					'El requisito de ancho de banda estable y latencia predecible encaja con **AWS Direct Connect**, que no depende de las variaciones de internet. Como respaldo y para tráfico puntual se añade **AWS VPN**, que se despliega rápido sobre internet y puede asumir la conexión si el enlace dedicado se interrumpe.',
				servicio: 'AWS Direct Connect',
			},
			{
				tipo: 'errorComun',
				error: 'Elegir AWS VPN o AWS Direct Connect solo por el precio, sin mirar la latencia, el ancho de banda ni la privacidad del tráfico.',
				correccion:
					'AWS VPN es más rápida de desplegar y más económica, pero el tráfico viaja cifrado por internet y su rendimiento puede variar. AWS Direct Connect ofrece un enlace dedicado y privado con mayor estabilidad a cambio de contratación y tiempo de aprovisionamiento. La elección depende del requisito de red.',
			},
			{
				tipo: 'clave',
				items: [
					'AWS VPN = túnel cifrado sobre internet; rápida de desplegar, apta para respaldo y bajo volumen.',
					'AWS Direct Connect = enlace dedicado y privado; ancho de banda y latencia estables, sin atravesar internet.',
					'AWS Transit Gateway = concentrador para conectar muchas VPC y redes locales.',
					'AWS PrivateLink = acceso privado a servicios sin exponerlos a internet.',
				],
			},
		],
		preguntasGuia: [
			'¿Qué diferencia hay entre AWS VPN y AWS Direct Connect?',
			'¿Cuándo conviene un enlace dedicado y cuándo basta con una VPN?',
			'¿Qué servicios ayudan a interconectar varias VPC y a exponer servicios de forma privada?',
		],
	},
];
