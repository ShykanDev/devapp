import type { PreguntaClfC02 } from '@/data/clfC02/types';

/**
 * Preguntas añadidas para cerrar G2: servicios in-scope que no aparecían en
 * ninguna pregunta, opción o grupo del banco. Cada ítem entrena el uso del
 * servicio dentro de un escenario, no solo su nombre.
 */
export const preguntasServiciosG2: PreguntaClfC02[] = [
	{
		id: 'g2-1',
		taskId: '4.2',
		objetivos: ['4.2#8'],
		tipo: 'metrica',
		question:
			'Un área de finanzas necesita un informe detallado y desglosado del uso y los costos por recurso y por etiqueta, que pueda exportarse para analizarlo con herramientas propias de inteligencia de negocio. ¿Qué recurso cubre ese requisito?',
		options: [
			'AWS Cost and Usage Reports, que publica informes detallados del uso y los costos por recurso y etiqueta exportables a herramientas propias.',
			'AWS Cost Explorer, que muestra tendencias y patrones de gasto mediante gráficos y filtros dentro de su propia interfaz interactiva y no entrega el archivo desglosado por recurso.',
			'AWS Budgets, que define presupuestos y envía alertas cuando el gasto real o previsto supera un umbral configurado por el equipo.',
			'AWS Pricing Calculator, que estima el costo mensual de una arquitectura propuesta antes de crearla, sin medir el uso real ya consumido.',
		],
		correctAnswer: 0,
		explanation:
			'AWS Cost and Usage Reports entrega el detalle por recurso y etiqueta que finanzas necesita para conciliar y analizar con sus propias herramientas, mientras que las alternativas se orientan a visualizar tendencias, vigilar umbrales o estimar costos futuros. Si cambia el requisito a una estimación previa al despliegue, la opción adecuada sería AWS Pricing Calculator.',
		porQueOpcion: [
			'Correcta: entrega el informe detallado por recurso y etiqueta que se puede exportar para analizarlo con herramientas propias.',
			'Incorrecta: muestra tendencias de gasto en su propia interfaz, pero no genera el archivo desglosado por recurso que pide finanzas.',
			'Incorrecta: define presupuestos y alertas de umbral, no un informe exportable de uso y costos detallado.',
			'Incorrecta: estima costos futuros antes de desplegar, sin medir ni detallar el uso real consumido.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-what-is.html',
			'https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/budgets-managing-costs.html',
			'https://docs.aws.amazon.com/cur/latest/userguide/what-is-cur.html',
		],
	},
	{
		id: 'g2-2',
		taskId: '3.3',
		objetivos: ['3.3#4'],
		tipo: 'casoDeUso',
		question:
			'Un equipo necesita ejecutar contenedores a demanda sin aprovisionar ni administrar instancias ni clústeres de servidores, pagando solo por los recursos que cada tarea consume mientras se ejecuta. ¿Qué servicio encaja mejor?',
		options: [
			'AWS Fargate, que ejecuta contenedores sin que el equipo administre las instancias ni el clúster subyacente.',
			'AWS Batch, que planifica y programa trabajos de cómputo por lotes en colas según la capacidad disponible.',
			'Amazon EC2, que ofrece instancias virtuales que el equipo debe aprovisionar, parchear y escalar por su cuenta.',
			'Amazon Lightsail, que entrega instancias y bloques de almacenamiento con una configuración simplificada y precio mensual fijo.',
		],
		correctAnswer: 0,
		explanation:
			'El requisito es ejecutar contenedores sin administrar la capa de servidores, y la opción que lo resuelve directamente es AWS Fargate; las demás exigen aprovisionar instancias o gestionar trabajos por lotes. Si cambia el requisito a trabajos por lotes programados que deban encolarse y reintentarse, la opción sería AWS Batch.',
		porQueOpcion: [
			'Correcta: ejecuta contenedores sin que el equipo administre las instancias ni el clúster subyacente, con pago por uso.',
			'Incorrecta: planifica trabajos por lotes en colas, pero no cubre la ejecución de contenedores a demanda sin administrar infraestructura.',
			'Incorrecta: entrega instancias virtuales que el equipo debe aprovisionar, parchear y escalar, justo lo que se quiere evitar.',
			'Incorrecta: ofrece instancias con configuración simplificada y precio fijo, no contenedores sin servidores gestionados.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html',
			'https://docs.aws.amazon.com/batch/',
			'https://docs.aws.amazon.com/ec2/',
			'https://docs.aws.amazon.com/lightsail/',
		],
	},
	{
		id: 'g2-3',
		taskId: '3.1',
		objetivos: ['3.1#6'],
		tipo: 'escenario',
		question:
			'Una empresa debe ejecutar algunas cargas con latencia ultrabaja y residencia de datos dentro de sus propias instalaciones, pero quiere usar las mismas interfaces, herramientas y servicios de nube que ya conoce para operarlas. ¿Qué opción permite ese modelo híbrido?',
		options: [
			'AWS Outposts, que extiende la infraestructura y los servicios de nube a las instalaciones del cliente para ejecutar cargas con baja latencia y residencia local.',
			'AWS Storage Gateway, que integra el almacenamiento local con la nube mediante caché y copias de seguridad, pero no ejecuta cómputo dentro de las instalaciones del cliente.',
			'AWS Direct Connect, que establece una conexión de red dedicada entre las instalaciones y la nube, sin alojar cómputo local.',
			'AWS Site-to-Site VPN, que cifra el tráfico entre la red local y la nube, pero no ejecuta servicios en el edificio.',
		],
		correctAnswer: 0,
		explanation:
			'AWS Outposts lleva la infraestructura y los servicios de nube al edificio del cliente, que es lo que permite cargas locales con las mismas interfaces y herramientas. Las demás opciones solo conectan o integran almacenamiento y red, sin ejecutar cómputo en las instalaciones. Si cambia el requisito a trasladar toda la carga a la nube, la extensión local dejaría de ser necesaria.',
		porQueOpcion: [
			'Correcta: extiende la infraestructura y los servicios de nube a las instalaciones del cliente para cargas con residencia y baja latencia locales.',
			'Incorrecta: integra almacenamiento local con la nube, pero no ejecuta cómputo dentro de las instalaciones.',
			'Incorrecta: ofrece una conexión de red dedicada entre las instalaciones y la nube, sin alojar cómputo local.',
			'Incorrecta: cifra el tráfico entre la red local y la nube, pero no ejecuta servicios en el edificio.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/outposts/',
			'https://docs.aws.amazon.com/storagegateway/',
			'https://docs.aws.amazon.com/directconnect/latest/UserGuide/Welcome.html',
			'https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html',
		],
	},
	{
		id: 'g2-4',
		taskId: '3.3',
		objetivos: ['3.3#3'],
		tipo: 'servicio',
		question:
			'Un equipo construye imágenes de contenedor y necesita almacenarlas de forma privada, versionarlas y que sus clústeres de contenedores las descarguen de manera segura e integrada. ¿Qué servicio cubre ese requisito?',
		options: [
			'Amazon Elastic Container Registry (Amazon ECR), que almacena y versiona imágenes de contenedor de forma privada e integrada con los servicios de contenedores.',
			'Amazon Elastic Container Service (Amazon ECS), que orquesta la ejecución de los contenedores y programa las tareas, pero no es un repositorio donde almacenar y versionar las imágenes.',
			'Amazon Elastic Kubernetes Service (Amazon EKS), que administra clústeres de Kubernetes, pero no actúa como registro de imágenes.',
			'AWS CodeBuild, que compila y prueba el código, pero no funciona como registro privado de imágenes de contenedor.',
		],
		correctAnswer: 0,
		explanation:
			'Amazon Elastic Container Registry (Amazon ECR) es el repositorio gestionado donde se almacenan y versionan las imágenes de contenedor y desde el que los servicios de contenedores las descargan. Los orquestadores ejecutan contenedores y el servicio de compilación construye el código, pero ninguno actúa como registro de imágenes. Si cambia el requisito a compartir el registro entre varias cuentas con control de acceso, habría que evaluar otro repositorio.',
		porQueOpcion: [
			'Correcta: almacena y versiona imágenes de contenedor de forma privada e integrada con los servicios de contenedores.',
			'Incorrecta: orquesta y programa la ejecución de contenedores, pero no es un repositorio donde almacenar y versionar imágenes.',
			'Incorrecta: administra clústeres de Kubernetes, pero no funciona como registro de imágenes de contenedor.',
			'Incorrecta: compila y prueba el código, pero no actúa como registro privado de imágenes de contenedor.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/ecr/',
			'https://docs.aws.amazon.com/ecs/',
			'https://docs.aws.amazon.com/eks/',
			'https://docs.aws.amazon.com/codebuild/',
		],
	},
	{
		id: 'g2-5',
		taskId: '4.1',
		objetivos: ['4.1#1'],
		tipo: 'metrica',
		question:
			'Un equipo quiere recomendaciones basadas en el uso histórico para elegir el tamaño y el tipo de sus recursos de cómputo y evitar pagar por capacidad sobredimensionada. ¿Qué servicio ofrece ese análisis?',
		options: [
			'AWS Compute Optimizer, que analiza la utilización histórica y recomienda el tamaño y el tipo adecuados de los recursos de cómputo.',
			'AWS Trusted Advisor, que revisa buenas prácticas de seguridad, costos y tolerancia a fallos, pero no calcula el tamaño óptimo a partir del uso histórico.',
			'AWS Cost Explorer, que visualiza y analiza el gasto, pero no recomienda el tamaño de cada recurso de cómputo.',
			'AWS Budgets, que vigila el gasto frente a un umbral, pero no analiza la utilización para redimensionar recursos.',
		],
		correctAnswer: 0,
		explanation:
			'AWS Compute Optimizer se basa en métricas de utilización histórica para recomendar el dimensionamiento y el tipo de los recursos de cómputo, que es justo el requisito de reducir el sobredimensionamiento. Las demás herramientas revisan prácticas, visualizan gasto o vigilan umbrales, sin calcular el tamaño óptimo. Si cambia el requisito a reservar capacidad por adelantado en lugar de redimensionarla, la decisión pasaría a los planes de compra.',
		porQueOpcion: [
			'Correcta: analiza la utilización histórica y recomienda el tamaño y el tipo adecuados de los recursos de cómputo.',
			'Incorrecta: revisa buenas prácticas, pero no calcula el tamaño óptimo a partir del uso histórico.',
			'Incorrecta: visualiza y analiza el gasto, pero no recomienda el tamaño de cada recurso de cómputo.',
			'Incorrecta: vigila el gasto frente a un umbral, pero no analiza la utilización para redimensionar recursos.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/compute-optimizer/',
			'https://docs.aws.amazon.com/awssupport/latest/user/trusted-advisor.html',
			'https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-what-is.html',
			'https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/budgets-managing-costs.html',
		],
	},
	{
		id: 'g2-6',
		taskId: '2.4',
		objetivos: ['2.4#1'],
		tipo: 'servicio',
		question:
			'Una organización quiere crear y gobernar un entorno de varias cuentas con reglas de seguridad y configuraciones de referencia aplicadas de forma centralizada desde el primer momento. ¿Qué servicio facilita esa gobernanza?',
		options: [
			'AWS Control Tower, que configura y gobierna un entorno de varias cuentas con reglas y controles de referencia.',
			'AWS Organizations, que agrupa y administra cuentas y su facturación consolidada, pero no despliega por sí solo un entorno con controles de referencia.',
			'AWS Service Catalog, que ofrece catálogos de productos aprobados a los usuarios, pero no crea ni gobierna la estructura de cuentas.',
			'AWS Config, que evalúa la conformidad de los recursos, pero no aprovisiona una estructura multi-cuenta con controles.',
		],
		correctAnswer: 0,
		explanation:
			'AWS Control Tower configura el entorno multi-cuenta y aplica controles de referencia centralizados, que es el requisito completo. Las demás agrupan cuentas, publican productos o evalúan conformidad, pero no despliegan por sí solas ese entorno gobernado. Si cambia el requisito a evaluar solo el cumplimiento de recursos ya existentes, bastaría con un servicio de evaluación de configuración.',
		porQueOpcion: [
			'Correcta: configura y gobierna un entorno de varias cuentas con reglas y controles de referencia de forma centralizada.',
			'Incorrecta: agrupa y administra cuentas y facturación, pero no despliega por sí solo un entorno con controles de referencia.',
			'Incorrecta: ofrece catálogos de productos aprobados, pero no crea ni gobierna la estructura de cuentas.',
			'Incorrecta: evalúa la conformidad de los recursos, pero no aprovisiona una estructura multi-cuenta con controles.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/controltower/',
			'https://docs.aws.amazon.com/organizations/',
			'https://docs.aws.amazon.com/servicecatalog/',
			'https://docs.aws.amazon.com/config/',
		],
	},
	{
		id: 'g2-7',
		taskId: '3.1',
		objetivos: ['3.1#4'],
		tipo: 'casoDeUso',
		question:
			'Un equipo necesita definir sus recursos una sola vez y volver a desplegarlos de forma idéntica en cada entorno, con la definición guardada y revisable. ¿Qué forma de trabajo encaja mejor?',
		options: [
			'La infraestructura como código, porque define los recursos en archivos versionados y los reproduce de forma consistente.',
			'AWS Management Console, porque con sus asistentes visuales se repite el mismo resultado sin dejar una definición versionada.',
			'AWS CLI, porque los comandos escritos una vez en la terminal bastan para reproducir el entorno sin guardar nada.',
			'AWS SDK, porque una llamada puntual desde una aplicación recrea el entorno sin necesidad de versionar la definición.',
		],
		correctAnswer: 0,
		explanation:
			'La infraestructura como código es la única opción que deja una definición versionada y revisable capaz de reproducir el entorno de forma consistente. La consola, los comandos sueltos de terminal y las llamadas puntuales no conservan esa definición. Si cambia el requisito a una tarea puntual y exploratoria, la consola pasaría a ser la opción adecuada.',
		porQueOpcion: [
			'Correcta: define los recursos en archivos versionados y los reproduce de forma consistente en cada entorno.',
			'Incorrecta: sus asistentes visuales no dejan una definición versionada y revisable del entorno.',
			'Incorrecta: los comandos sueltos de terminal sin guardar no reproducen el entorno de forma consistente.',
			'Incorrecta: una llamada puntual desde una aplicación no versiona la definición ni garantiza el mismo resultado.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/what-is.html',
			'https://docs.aws.amazon.com/cli/',
		],
	},
	{
		id: 'g2-8',
		taskId: '3.1',
		objetivos: ['3.1#1'],
		tipo: 'servicio',
		question:
			'Un equipo de plataforma quiere publicar un catálogo de productos ya aprobados y preconfigurados para que otras áreas los desplieguen por sí mismas sin salirse de las reglas de la organización. ¿Qué servicio cubre ese requisito?',
		options: [
			'AWS Service Catalog, que permite publicar y gobernar un catálogo de productos aprobados que las áreas pueden desplegar.',
			'AWS Control Tower, que gobierna la estructura de cuentas y sus controles, pero no publica un catálogo de productos desplegables.',
			'AWS Marketplace, que ofrece software de terceros listo para comprar y suscribir, pero no un catálogo interno de productos aprobados.',
			'AWS Config, que registra y evalúa la conformidad de los recursos, pero no ofrece un catálogo de despliegue por autoservicio.',
		],
		correctAnswer: 0,
		explanation:
			'AWS Service Catalog publica un catálogo curado de productos aprobados para que las áreas los desplieguen dentro de las reglas definidas. Las demás gobiernan cuentas, ofrecen software de terceros o evalúan conformidad, sin entregar ese catálogo de autoservicio. Si cambia el requisito a compartir un recurso ya existente entre cuentas, la respuesta sería otro servicio.',
		porQueOpcion: [
			'Correcta: publica y gobierna un catálogo de productos aprobados que las áreas despliegan por sí mismas.',
			'Incorrecta: gobierna la estructura de cuentas y sus controles, pero no publica un catálogo de productos desplegables.',
			'Incorrecta: ofrece software de terceros para comprar y suscribir, no un catálogo interno de productos aprobados.',
			'Incorrecta: registra y evalúa la conformidad de los recursos, pero no ofrece un catálogo de despliegue por autoservicio.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/servicecatalog/',
			'https://docs.aws.amazon.com/controltower/',
			'https://docs.aws.amazon.com/marketplace/',
			'https://docs.aws.amazon.com/config/',
		],
	},
	{
		id: 'g2-9',
		taskId: '3.1',
		objetivos: ['3.1#1'],
		tipo: 'servicio',
		question:
			'Un equipo necesita consultar los límites máximos de un servicio en su cuenta y solicitar un aumento cuando la demanda lo exige, todo desde un único lugar por región. ¿Qué herramienta cubre ese requisito?',
		options: [
			'Service Quotas, que muestra los límites aplicables por cuenta y región y permite solicitar aumentos desde un único lugar.',
			'AWS Trusted Advisor, que revisa buenas prácticas de seguridad, costos y tolerancia a fallos, pero no concentra los límites ni tramita sus aumentos.',
			'AWS Config, que evalúa la conformidad de la configuración, pero no administra los límites de la cuenta.',
			'AWS Health Dashboard, que informa sobre eventos y mantenimientos, pero no gestiona los límites de servicio.',
		],
		correctAnswer: 0,
		explanation:
			'Service Quotas centraliza los límites aplicables por cuenta y región y permite solicitar aumentos en el mismo lugar. Las demás herramientas revisan prácticas, evalúan conformidad o informan eventos, sin administrar los límites. Si cambia el requisito a controlar el gasto frente a un umbral, la respuesta sería un servicio de presupuestos.',
		porQueOpcion: [
			'Correcta: muestra los límites por cuenta y región y permite solicitar aumentos desde un único lugar.',
			'Incorrecta: revisa buenas prácticas, pero no concentra los límites ni tramita sus aumentos.',
			'Incorrecta: evalúa la conformidad de la configuración, pero no administra los límites de la cuenta.',
			'Incorrecta: informa sobre eventos y mantenimientos, pero no gestiona los límites de servicio.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/awssupport/latest/user/trusted-advisor.html',
			'https://docs.aws.amazon.com/config/',
			'https://docs.aws.amazon.com/health/',
			'https://docs.aws.amazon.com/servicequotas/',
		],
	},
	{
		id: 'g2-10',
		taskId: '3.5',
		objetivos: ['3.5#5'],
		tipo: 'servicio',
		question:
			'Una empresa quiere conectar de forma cifrada su red local con su red virtual en la nube a través de internet, con una configuración rápida y sin contratar un enlace dedicado. ¿Qué opción encaja mejor?',
		options: [
			'AWS Site-to-Site VPN, que crea túneles cifrados entre la red local y la red virtual a través de internet.',
			'AWS Direct Connect, que establece una conexión dedicada y privada entre las instalaciones y la nube, sin depender de internet.',
			'AWS Transit Gateway, que centraliza la conectividad entre redes, pero no sustituye al túnel cifrado por internet.',
			'AWS Client VPN, que conecta a usuarios individuales con la red, pero no enlaza de forma permanente la red local completa.',
		],
		correctAnswer: 0,
		explanation:
			'AWS Site-to-Site VPN levanta túneles cifrados sobre internet entre la red local y la red virtual, que es lo que pide el escenario con configuración rápida y sin enlace dedicado. Las demás opciones ofrecen conexión dedicada, centralizan redes o conectan usuarios sueltos. Si cambia el requisito a un enlace privado y dedicado sin depender de internet, la respuesta sería AWS Direct Connect.',
		porQueOpcion: [
			'Correcta: crea túneles cifrados entre la red local y la red virtual a través de internet.',
			'Incorrecta: ofrece una conexión dedicada y privada, que es justo el enlace que el escenario quiere evitar.',
			'Incorrecta: centraliza la conectividad entre redes, pero no es el túnel cifrado por internet que se pide.',
			'Incorrecta: conecta usuarios individuales, pero no enlaza de forma permanente la red local completa.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/directconnect/latest/UserGuide/Welcome.html',
			'https://docs.aws.amazon.com/vpc/latest/tgw/what-is-transit-gateway.html',
			'https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/what-is.html',
			'https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html',
		],
	},
	{
		id: 'g2-11',
		taskId: '2.2',
		objetivos: ['2.2#7'],
		tipo: 'seguridad',
		question:
			'Un equipo necesita obtener, renovar y desplegar certificados de servidor para cifrar las comunicaciones de sus aplicaciones web sin gestionar el ciclo de vida a mano. ¿Qué servicio cubre ese requisito?',
		options: [
			'AWS Certificate Manager (ACM), que aprovisiona, renueva y despliega certificados para cifrar el tráfico en tránsito.',
			'AWS CloudHSM, que protege claves en un módulo de hardware dedicado, pero no emite ni renueva certificados públicos para aplicaciones web.',
			'AWS Key Management Service (AWS KMS), que administra claves de cifrado para los datos, pero no emite certificados de servidor.',
			'AWS Secrets Manager, que guarda y rota secretos de acceso, pero no emite ni renueva certificados de servidor.',
		],
		correctAnswer: 0,
		explanation:
			'AWS Certificate Manager (ACM) aprovisiona, renueva y despliega certificados de servidor para cifrar las comunicaciones, que es el requisito completo. Los servicios de claves y secretos protegen material criptográfico, pero no emiten certificados de servidor. Si cambia el requisito a proteger claves en hardware dedicado con control total del dispositivo, la respuesta sería AWS CloudHSM.',
		porQueOpcion: [
			'Correcta: aprovisiona, renueva y despliega certificados para cifrar el tráfico en tránsito.',
			'Incorrecta: protege claves en hardware dedicado, pero no emite ni renueva certificados públicos para aplicaciones web.',
			'Incorrecta: administra claves de cifrado de datos, pero no emite certificados de servidor.',
			'Incorrecta: guarda y rota secretos de acceso, pero no emite ni renueva certificados de servidor.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/acm/',
			'https://docs.aws.amazon.com/cloudhsm/',
			'https://docs.aws.amazon.com/kms/',
			'https://docs.aws.amazon.com/secretsmanager/',
		],
	},
	{
		id: 'g2-12',
		taskId: '2.2',
		objetivos: ['2.2#2'],
		tipo: 'seguridad',
		question:
			'Un equipo necesita crear y controlar claves de cifrado que usan sus servicios, con rotación y registro de auditoría, sin adquirir ni administrar hardware dedicado. ¿Qué servicio encaja mejor?',
		options: [
			'AWS Key Management Service (AWS KMS), que administra claves de cifrado integradas con los servicios y no requiere operar hardware dedicado.',
			'AWS CloudHSM, que ofrece módulos de hardware dedicados para proteger claves, pero obliga a administrar el dispositivo, su alta disponibilidad y sus usuarios.',
			'AWS Certificate Manager (ACM), que emite y renueva certificados de servidor, pero no administra claves de cifrado de datos.',
			'AWS Secrets Manager, que almacena y rota secretos de aplicaciones, pero no es el servicio de claves de cifrado de los datos.',
		],
		correctAnswer: 0,
		explanation:
			'AWS Key Management Service (AWS KMS) crea y controla claves de cifrado integradas con los servicios, con rotación y auditoría, y sin operar hardware dedicado. Las demás opciones no administran las claves de cifrado de los datos o exigen gestionar el dispositivo. Si cambia el requisito a controlar claves en hardware dedicado y aislado, la respuesta sería AWS CloudHSM.',
		porQueOpcion: [
			'Correcta: administra claves de cifrado integradas con los servicios y no requiere operar hardware dedicado.',
			'Incorrecta: protege claves en hardware dedicado, pero obliga a administrar el dispositivo y sus usuarios.',
			'Incorrecta: emite y renueva certificados de servidor, pero no administra claves de cifrado de datos.',
			'Incorrecta: almacena y rota secretos de aplicaciones, pero no es el servicio de claves de cifrado de los datos.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/kms/',
			'https://docs.aws.amazon.com/cloudhsm/',
			'https://docs.aws.amazon.com/acm/',
			'https://docs.aws.amazon.com/secretsmanager/',
		],
	},
	{
		id: 'g2-13',
		taskId: '2.3',
		objetivos: ['2.3#10'],
		tipo: 'servicio',
		question:
			'Una empresa quiere que sus empleados inicien sesión una sola vez con sus credenciales corporativas y accedan a varias cuentas y aplicaciones con permisos definidos por rol. ¿Qué servicio cubre mejor ese requisito?',
		options: [
			'AWS IAM Identity Center, que ofrece acceso único con identidades corporativas y permisos por rol sobre varias cuentas y aplicaciones.',
			'AWS Directory Service, que aloja un directorio administrado en la nube, pero no concede por sí solo el acceso único a varias cuentas.',
			'AWS Identity and Access Management (IAM), que administra usuarios y permisos dentro de una cuenta, pero no el acceso único federado a muchas cuentas.',
			'Amazon Cognito, que autentica usuarios de aplicaciones propias, pero no gobierna el acceso de la plantilla a las cuentas de la organización.',
		],
		correctAnswer: 0,
		explanation:
			'AWS IAM Identity Center combina las identidades corporativas con permisos por rol y acceso único a varias cuentas y aplicaciones. El directorio administrado, la gestión de identidades de una sola cuenta y la autenticación de aplicaciones propias no cubren ese acceso único federado. Si cambia el requisito a administrar un directorio propio en la nube, la respuesta sería AWS Directory Service.',
		porQueOpcion: [
			'Correcta: ofrece acceso único con identidades corporativas y permisos por rol sobre varias cuentas y aplicaciones.',
			'Incorrecta: aloja un directorio administrado, pero no concede por sí solo el acceso único a varias cuentas.',
			'Incorrecta: administra usuarios y permisos de una cuenta, pero no el acceso único federado a muchas cuentas.',
			'Incorrecta: autentica usuarios de aplicaciones propias, pero no gobierna el acceso de la plantilla a las cuentas.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/singlesignon/',
			'https://docs.aws.amazon.com/directoryservice/latest/admin-guide/what_is.html',
			'https://docs.aws.amazon.com/cognito/',
			'https://docs.aws.amazon.com/iam/',
		],
	},
	{
		id: 'g2-14',
		taskId: '2.3',
		objetivos: ['2.3#1'],
		tipo: 'servicio',
		question:
			'Una organización quiere compartir un recurso concreto entre varias cuentas de su organización sin crear copias ni configurar permisos uno a uno. ¿Qué servicio está pensado para ese intercambio?',
		options: [
			'AWS Resource Access Manager (AWS RAM), que permite compartir recursos entre cuentas de la organización sin duplicarlos.',
			'AWS IAM Identity Center, que gestiona el acceso único de personas, pero no comparte recursos entre cuentas.',
			'AWS Organizations, que agrupa cuentas y consolida la facturación, pero no es el mecanismo para compartir un recurso concreto.',
			'AWS Service Catalog, que publica productos aprobados para desplegarlos, pero no comparte un recurso ya existente entre cuentas.',
		],
		correctAnswer: 0,
		explanation:
			'AWS Resource Access Manager (AWS RAM) comparte recursos entre cuentas de la organización sin duplicarlos, que es el requisito exacto. Las demás gestionan el acceso de personas, agrupan cuentas o publican productos, sin compartir un recurso ya existente. Si cambia el requisito a publicar productos aprobados para su despliegue, la respuesta sería AWS Service Catalog.',
		porQueOpcion: [
			'Correcta: comparte recursos entre cuentas de la organización sin duplicarlos ni configurar permisos uno a uno.',
			'Incorrecta: gestiona el acceso único de personas, pero no comparte recursos entre cuentas.',
			'Incorrecta: agrupa cuentas y consolida la facturación, pero no comparte un recurso concreto entre ellas.',
			'Incorrecta: publica productos aprobados para desplegarlos, pero no comparte un recurso ya existente entre cuentas.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/ram/latest/userguide/what-is.html',
			'https://docs.aws.amazon.com/singlesignon/',
			'https://docs.aws.amazon.com/organizations/',
			'https://docs.aws.amazon.com/servicecatalog/',
		],
	},
	{
		id: 'g2-15',
		taskId: '3.6',
		objetivos: ['3.6#2'],
		tipo: 'casoDeUso',
		question:
			'Un equipo necesita almacenar y servir archivos estáticos de un sitio web que se acceden por HTTP, con durabilidad y sin administrar ningún sistema de archivos. ¿Qué servicio encaja mejor?',
		options: [
			'Amazon S3, que almacena objetos y los sirve por HTTP con alta durabilidad, sin administrar sistemas de archivos.',
			'Amazon Elastic File System (Amazon EFS), que ofrece un sistema de archivos compartido que se monta en instancias, no un almacén de objetos por HTTP.',
			'Amazon Elastic Block Store (Amazon EBS), que ofrece volúmenes de bloque para una instancia, no almacenamiento de objetos por HTTP.',
			'AWS Storage Gateway, que conecta el almacenamiento local con la nube, pero no sirve objetos estáticos por HTTP.',
		],
		correctAnswer: 0,
		explanation:
			'El almacenamiento de objetos por HTTP sin administrar sistemas de archivos corresponde a Amazon S3. El sistema de archivos compartido, los volúmenes de bloque y la pasarela de almacenamiento no sirven objetos estáticos por HTTP ni evitan administrar un sistema de archivos. Si cambia el requisito a un sistema de archivos compartido montable en varias instancias, la respuesta sería Amazon Elastic File System (Amazon EFS).',
		porQueOpcion: [
			'Correcta: almacena objetos y los sirve por HTTP con alta durabilidad, sin administrar sistemas de archivos.',
			'Incorrecta: ofrece un sistema de archivos que se monta en instancias, no un almacén de objetos servido por HTTP.',
			'Incorrecta: ofrece volúmenes de bloque para una instancia, no almacenamiento de objetos por HTTP.',
			'Incorrecta: conecta el almacenamiento local con la nube, pero no sirve objetos estáticos por HTTP.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/s3/',
			'https://docs.aws.amazon.com/efs/',
			'https://docs.aws.amazon.com/ebs/',
			'https://docs.aws.amazon.com/storagegateway/',
		],
	},
	{
		id: 'g2-16',
		taskId: '3.2',
		objetivos: ['3.2#8'],
		tipo: 'escenario',
		question:
			'Una empresa necesita recuperar sus servidores en otra región con un objetivo de tiempo de recuperación bajo tras una caída, replicando de forma continua sin mantener en marcha la misma capacidad. ¿Qué servicio cubre ese requisito?',
		options: [
			'AWS Elastic Disaster Recovery, que replica de forma continua los servidores y permite recuperarlos en otra región con poco tiempo de inactividad.',
			'AWS Backup, que centraliza y automatiza copias de seguridad programadas de varios recursos, pero no ofrece replicación continua ni una recuperación con bajo tiempo de inactividad.',
			'AWS Storage Gateway, que integra almacenamiento local con la nube, pero no replica servidores para recuperarlos en otra región.',
			'Amazon Elastic File System (Amazon EFS), que ofrece un sistema de archivos compartido y elástico, pero no recupera servidores ante un desastre.',
		],
		correctAnswer: 0,
		explanation:
			'AWS Elastic Disaster Recovery replica de forma continua los servidores y permite recuperarlos en otra región con poco tiempo de inactividad, tal como exige el escenario. Las copias programadas, la integración de almacenamiento y el sistema de archivos compartido no replican servidores para un desastre regional. Si cambia el requisito a copias de seguridad programadas sin recuperación casi inmediata, bastaría con AWS Backup.',
		porQueOpcion: [
			'Correcta: replica de forma continua los servidores y permite recuperarlos en otra región con poco tiempo de inactividad.',
			'Incorrecta: automatiza copias programadas, pero no ofrece replicación continua ni recuperación con bajo tiempo de inactividad.',
			'Incorrecta: integra almacenamiento local con la nube, pero no replica servidores para recuperarlos en otra región.',
			'Incorrecta: ofrece un sistema de archivos compartido y elástico, pero no recupera servidores ante un desastre.',
		],
		fuentes: [
			'https://docs.aws.amazon.com/drs/',
			'https://docs.aws.amazon.com/aws-backup/',
			'https://docs.aws.amazon.com/storagegateway/',
			'https://docs.aws.amazon.com/efs/',
		],
	},
];
