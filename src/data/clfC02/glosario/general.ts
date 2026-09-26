import type { TerminoClfC02 } from '@/data/clfC02/types';

export const glosarioGeneralClfC02: TerminoClfC02[] = [
	{
		id: 'agilidad',
		termino: 'Agility («agilidad»)',
		definicion:
			'Capacidad de la nube para crear y desplegar recursos en minutos, probar ideas rápido y ajustar la solución sin esperar compras de hardware.',
		dominios: ['dominio-1'],
		relacionados: ['elasticidad', 'escalabilidad', 'velocidad-de-despliegue'],
	},
	{
		id: 'alta-disponibilidad',
		termino: 'High availability («alta disponibilidad»)',
		definicion:
			'Diseño que mantiene una aplicación operativa aunque falle un componente, normalmente repartiendo carga entre varias zonas de disponibilidad.',
		dominios: ['dominio-1'],
		relacionados: ['availability-zone', 'tolerancia-a-fallos', 'region'],
	},
	{
		id: 'amazon-q',
		termino: 'Amazon Q',
		definicion:
			'Asistente generativo de AWS que responde preguntas sobre la nube, ayuda a escribir código y resume información dentro de la consola y de las aplicaciones.',
		dominios: ['dominio-3'],
		relacionados: ['management-console', 'sage-maker-ai'],
	},
	{
		id: 'amplify',
		termino: 'AWS Amplify',
		definicion:
			'Conjunto de herramientas para construir y desplegar aplicaciones web y móviles con autenticación, APIs y hosting gestionados.',
		dominios: ['dominio-3'],
		relacionados: ['api-gateway', 'cognito'],
	},
	{
		id: 'api-gateway',
		termino: 'Amazon API Gateway',
		definicion:
			'Servicio gestionado para crear, publicar y proteger APIs REST, HTTP y WebSocket que exponen funciones u otros backends.',
		dominios: ['dominio-3'],
		relacionados: ['lambda', 'apis', 'amplify'],
	},
	{
		id: 'apis',
		termino: 'APIs',
		definicion:
			'Interfaces que permiten que unas aplicaciones llamen a otras; en AWS las APIs de servicio se usan con SDKs, la CLI o la consola.',
		dominios: ['dominio-3'],
		relacionados: ['sdks', 'aws-cli', 'api-gateway'],
	},
	{
		id: 'application-discovery-service',
		termino: 'AWS Application Discovery Service',
		definicion:
			'Servicio que inventaría servidores y dependencias on-premises para planificar una migración con datos reales de uso.',
		dominios: ['dominio-1'],
		relacionados: ['migration-hub', 'application-migration-service', 'estrategias-de-migracion'],
	},
	{
		id: 'application-migration-service',
		termino: 'AWS Application Migration Service',
		definicion:
			'Servicio que replica servidores on-premises o de otras nubes hacia AWS y los relanza como instancias EC2 con mínimo tiempo de inactividad.',
		dominios: ['dominio-1'],
		relacionados: ['ec2', 'migration-hub', 'estrategias-de-migracion'],
	},
	{
		id: 'appstream-2-0',
		termino: 'Amazon AppStream 2.0',
		definicion:
			'Servicio de aplicaciones de escritorio en streaming que ejecuta programas en AWS y los entrega a cualquier navegador sin instalar nada localmente.',
		dominios: ['dominio-3'],
		relacionados: ['work-spaces', 'work-spaces-secure-browser'],
	},
	{
		id: 'artifact',
		termino: 'AWS Artifact',
		definicion:
			'Portal de autoservicio donde se descargan informes de cumplimiento de AWS (SOC, ISO, PCI) y se aceptan acuerdos regulatorios.',
		dominios: ['dominio-2'],
		relacionados: ['shared-responsibility-model', 'security-hub'],
	},
	{
		id: 'athena',
		termino: 'Amazon Athena',
		definicion:
			'Servicio de consultas SQL sin servidor que analiza datos directamente en Amazon S3 y se paga por datos escaneados.',
		dominios: ['dominio-3'],
		relacionados: ['s3', 'glue', 'redshift'],
	},
	{
		id: 'aurora',
		termino: 'Amazon Aurora',
		definicion:
			'Motor de base de datos relacional compatible con MySQL y PostgreSQL, gestionado por AWS, con mayor rendimiento y replicación entre zonas.',
		dominios: ['dominio-3'],
		relacionados: ['rds', 'dynamodb', 'documentdb'],
	},
	{
		id: 'auto-scaling',
		termino: 'AWS Auto Scaling',
		definicion:
			'Ajusta automáticamente la cantidad de recursos según la demanda, agregando capacidad en picos y retirándola cuando baja el uso.',
		dominios: ['dominio-3'],
		relacionados: ['ec2', 'elasticidad', 'ec2-instance-types'],
	},
	{
		id: 'availability-zone',
		termino: 'Availability Zone (AZ)',
		definicion:
			'Uno o más centros de datos aislados dentro de una región, con energía y red independientes, usados para lograr alta disponibilidad.',
		dominios: ['dominio-1'],
		relacionados: ['region', 'alta-disponibilidad', 'edge-location'],
	},
	{
		id: 'aws-config',
		termino: 'AWS Config',
		definicion:
			'Servicio que registra la configuración de los recursos y evalúa si cumplen reglas, mostrando el historial de cambios y las desviaciones.',
		dominios: ['dominio-2'],
		relacionados: ['cloudtrail', 'security-hub', 'organizations'],
	},
	{
		id: 'backup',
		termino: 'AWS Backup',
		definicion:
			'Servicio centralizado para definir políticas de copia de seguridad y restaurar recursos de varios servicios desde un solo lugar.',
		dominios: ['dominio-3'],
		relacionados: ['ebs', 'efs', 'elastic-disaster-recovery'],
	},
	{
		id: 'batch',
		termino: 'AWS Batch',
		definicion:
			'Servicio que planifica y ejecuta trabajos de cómputo por lotes, aprovisionando la capacidad necesaria de forma automática.',
		dominios: ['dominio-3'],
		relacionados: ['ec2', 'fargate', 'lambda'],
	},
	{
		id: 'budgets',
		termino: 'AWS Budgets',
		definicion:
			'Permite fijar presupuestos de coste o uso y enviar alertas cuando el gasto real o previsto supera el umbral definido.',
		dominios: ['dominio-4'],
		relacionados: ['cost-explorer', 'cost-and-usage-reports', 'consolidated-billing'],
	},
	{
		id: 'byol',
		termino: 'Bring Your Own License (BYOL)',
		definicion:
			'Estrategia de licenciamiento en la que el cliente reutiliza licencias de software que ya posee al mover cargas a AWS.',
		dominios: ['dominio-1'],
		relacionados: ['dedicated-hosts', 'license-manager', 'tco'],
	},
	{
		id: 'caf',
		termino: 'AWS Cloud Adoption Framework (AWS CAF)',
		definicion:
			'Marco de AWS que organiza la adopción de la nube en perspectivas de negocio, personas, gobernanza, plataforma, seguridad y operaciones.',
		dominios: ['dominio-1'],
		relacionados: ['well-architected-framework', 'estrategias-de-migracion', 'migration-hub'],
	},
	{
		id: 'capacity-reservations',
		termino: 'Capacity Reservations',
		definicion:
			'Reserva de capacidad de EC2 en una zona de disponibilidad concreta para asegurar que las instancias se puedan lanzar cuando se necesiten.',
		dominios: ['dominio-4'],
		relacionados: ['ec2', 'reserved-instances', 'on-demand'],
	},
	{
		id: 'certificate-manager',
		termino: 'AWS Certificate Manager (ACM)',
		definicion:
			'Servicio que aprovisiona, gestiona y renueva certificados TLS/SSL gratuitos para usarlos con servicios de AWS.',
		dominios: ['dominio-2'],
		relacionados: ['cloudfront', 'route-53', 'secrets-manager'],
	},
	{
		id: 'client-vpn',
		termino: 'AWS Client VPN',
		definicion:
			'VPN gestionada de acceso remoto que conecta usuarios individuales a la VPC de AWS desde su equipo.',
		dominios: ['dominio-3'],
		relacionados: ['vpn', 'site-to-site-vpn', 'vpc'],
	},
	{
		id: 'cloudformation',
		termino: 'AWS CloudFormation',
		definicion:
			'Servicio de infraestructura como código que crea y actualiza recursos de AWS a partir de plantillas declarativas versionadas.',
		dominios: ['dominio-3'],
		relacionados: ['iac', 'service-catalog', 'systems-manager'],
	},
	{
		id: 'cloudfront',
		termino: 'Amazon CloudFront',
		definicion:
			'Red de distribución de contenido (CDN) global que cachea contenido en ubicaciones de borde para reducir latencia y proteger el origen.',
		dominios: ['dominio-3'],
		relacionados: ['edge-location', 's3', 'waf', 'latencia'],
	},
	{
		id: 'cloudhsm',
		termino: 'AWS CloudHSM',
		definicion:
			'Módulo de seguridad de hardware dedicado en la nube que ofrece claves criptográficas bajo control exclusivo del cliente.',
		dominios: ['dominio-2'],
		relacionados: ['kms', 'secrets-manager'],
	},
	{
		id: 'cloudtrail',
		termino: 'AWS CloudTrail',
		definicion:
			'Registra las llamadas a la API y las acciones en la cuenta, incluyendo quién, cuándo y desde dónde, para auditoría y cumplimiento.',
		dominios: ['dominio-2'],
		relacionados: ['cloudwatch', 'aws-config', 'iam'],
	},
	{
		id: 'cloudwatch',
		termino: 'Amazon CloudWatch',
		definicion:
			'Servicio de monitoreo que recopila métricas, logs y eventos de los recursos y permite crear alarmas y paneles.',
		dominios: ['dominio-3'],
		relacionados: ['cloudtrail', 'auto-scaling', 'systems-manager'],
	},
	{
		id: 'codebuild',
		termino: 'AWS CodeBuild',
		definicion:
			'Servicio de compilación gestionado que ejecuta builds y pruebas sin administrar servidores, integrándose en una canalización CI/CD.',
		dominios: ['dominio-3'],
		relacionados: ['codepipeline', 'ecr'],
	},
	{
		id: 'codepipeline',
		termino: 'AWS CodePipeline',
		definicion:
			'Servicio de entrega continua que orquesta las etapas de compilación, prueba y despliegue de una aplicación.',
		dominios: ['dominio-3'],
		relacionados: ['codebuild', 'cloudformation'],
	},
	{
		id: 'cognito',
		termino: 'Amazon Cognito',
		definicion:
			'Servicio de identidad para aplicaciones que permite registrar, autenticar y autorizar usuarios, incluido inicio de sesión con proveedores sociales.',
		dominios: ['dominio-2'],
		relacionados: ['iam', 'iam-identity-center', 'amplify'],
	},
	{
		id: 'comprehend',
		termino: 'Amazon Comprehend',
		definicion:
			'Servicio de procesamiento de lenguaje natural que extrae entidades, sentimiento, temas y frases clave de textos.',
		dominios: ['dominio-3'],
		relacionados: ['transcribe', 'translate', 'textract'],
	},
	{
		id: 'compute-optimizer',
		termino: 'AWS Compute Optimizer',
		definicion:
			'Analiza las métricas de uso y recomienda el tipo y tamaño de recurso más adecuado para reducir costes y mejorar rendimiento.',
		dominios: ['dominio-4'],
		relacionados: ['rightsizing', 'cost-explorer', 'ec2-instance-types'],
	},
	{
		id: 'connect',
		termino: 'Amazon Connect',
		definicion:
			'Centro de contacto en la nube que permite configurar atención telefónica y omnicanal sin infraestructura propia.',
		dominios: ['dominio-3'],
		relacionados: ['ses', 'lambda'],
	},
	{
		id: 'consolidated-billing',
		termino: 'Consolidated billing («facturación consolidada»)',
		definicion:
			'Función de AWS Organizations que agrupa la facturación de varias cuentas, facilitando descuentos por volumen y un pago único.',
		dominios: ['dominio-4'],
		relacionados: ['organizations', 'budgets', 'cost-explorer'],
	},
	{
		id: 'control-tower',
		termino: 'AWS Control Tower',
		definicion:
			'Servicio que configura y gobierna un entorno multi-cuenta con buenas prácticas, guardrails y aprovisionamiento automatizado.',
		dominios: ['dominio-2'],
		relacionados: ['organizations', 'aws-config', 'iam-identity-center'],
	},
	{
		id: 'cost-allocation-tags',
		termino: 'Cost allocation tags («etiquetas de asignación de costes»)',
		definicion:
			'Etiquetas aplicadas a los recursos que permiten desglosar y atribuir costes por proyecto, equipo o centro de coste.',
		dominios: ['dominio-4'],
		relacionados: ['cost-explorer', 'cost-and-usage-reports', 'budgets'],
	},
	{
		id: 'cost-and-usage-reports',
		termino: 'AWS Cost and Usage Reports',
		definicion:
			'Informes detallados y personalizables de uso y coste que se entregan en Amazon S3 para su análisis.',
		dominios: ['dominio-4'],
		relacionados: ['cost-explorer', 's3', 'athena', 'budgets'],
	},
	{
		id: 'cost-explorer',
		termino: 'AWS Cost Explorer',
		definicion:
			'Herramienta que visualiza y analiza el gasto histórico y proyectado, permitiendo filtrar por servicio, cuenta o etiqueta.',
		dominios: ['dominio-4'],
		relacionados: ['budgets', 'cost-and-usage-reports', 'cost-allocation-tags'],
	},
	{
		id: 'costes-fijos-variables',
		termino: 'Fixed vs variable costs («costes fijos frente a variables»)',
		definicion:
			'La nube convierte inversiones fijas on-premises en gasto variable ligado al consumo, evitando pagar por capacidad no usada.',
		dominios: ['dominio-1'],
		relacionados: ['economias-de-escala', 'tco', 'on-demand'],
	},
	{
		id: 'data-transfer',
		termino: 'Data transfer («transferencia de datos»)',
		definicion:
			'Cargo facturado por mover datos entre regiones, hacia Internet o entre servicios; la entrada a AWS suele ser gratuita.',
		dominios: ['dominio-4'],
		relacionados: ['region', 'cloudfront', 'cost-explorer'],
	},
	{
		id: 'dedicated-hosts',
		termino: 'Dedicated Hosts',
		definicion:
			'Servidor físico dedicado a un cliente que permite usar licencias propias y cumplir requisitos de aislamiento.',
		dominios: ['dominio-4'],
		relacionados: ['byol', 'ec2', 'license-manager'],
	},
	{
		id: 'detective',
		termino: 'Amazon Detective',
		definicion:
			'Servicio que analiza y correlaciona datos de seguridad para investigar la causa de hallazgos y actividades sospechosas.',
		dominios: ['dominio-2'],
		relacionados: ['guardduty', 'security-hub', 'cloudtrail'],
	},
	{
		id: 'direct-connect',
		termino: 'AWS Direct Connect',
		definicion:
			'Conexión de red privada y dedicada entre un centro de datos on-premises y AWS, con menor latencia y ancho de banda estable.',
		dominios: ['dominio-3'],
		relacionados: ['vpn', 'transit-gateway', 'latencia'],
	},
	{
		id: 'directory-service',
		termino: 'AWS Directory Service',
		definicion:
			'Servicio que ofrece directorios administrados de Microsoft Active Directory en AWS o conecta directorios on-premises.',
		dominios: ['dominio-2'],
		relacionados: ['iam-identity-center', 'organizations'],
	},
	{
		id: 'dms',
		termino: 'AWS Database Migration Service (AWS DMS)',
		definicion:
			'Servicio que migra bases de datos a AWS con replicación continua y mínima interrupción entre motores distintos.',
		dominios: ['dominio-1'],
		relacionados: ['sct', 'rds', 'aurora'],
	},
	{
		id: 'documentdb',
		termino: 'Amazon DocumentDB',
		definicion:
			'Base de datos de documentos gestionada y compatible con MongoDB, escalable y tolerante a fallos.',
		dominios: ['dominio-3'],
		relacionados: ['dynamodb', 'neptune', 'aurora'],
	},
	{
		id: 'dynamodb',
		termino: 'Amazon DynamoDB',
		definicion:
			'Base de datos NoSQL de clave-valor y documentos, sin servidor, con latencia de milisegundos de un solo dígito a cualquier escala.',
		dominios: ['dominio-3'],
		relacionados: ['rds', 'documentdb', 'elasticache', 'lambda'],
	},
	{
		id: 'ebs',
		termino: 'Amazon Elastic Block Store (Amazon EBS)',
		definicion:
			'Volúmenes de almacenamiento en bloque persistentes que se conectan a instancias EC2 en una misma zona de disponibilidad.',
		dominios: ['dominio-3'],
		relacionados: ['ec2', 'efs', 's3', 'backup'],
	},
	{
		id: 'ec2',
		termino: 'Amazon Elastic Compute Cloud (Amazon EC2)',
		definicion:
			'Servicio que proporciona servidores virtuales redimensionables en la nube, con control total del sistema operativo.',
		dominios: ['dominio-3'],
		relacionados: ['ec2-instance-types', 'ebs', 'auto-scaling', 'ami'],
	},
	{
		id: 'ec2-instance-types',
		termino: 'Amazon EC2 instance types («tipos de instancia»)',
		definicion:
			'Familias de instancias optimizadas para distintos usos (cómputo, memoria, almacenamiento o GPU), elegidas según la carga.',
		dominios: ['dominio-3'],
		relacionados: ['ec2', 'rightsizing', 'on-demand', 'spot-instances'],
	},
	{
		id: 'ecr',
		termino: 'Amazon Elastic Container Registry (Amazon ECR)',
		definicion:
			'Registro gestionado de imágenes de contenedores, con control de acceso y escaneo de vulnerabilidades.',
		dominios: ['dominio-3'],
		relacionados: ['ecs', 'eks', 'fargate'],
	},
	{
		id: 'ecs',
		termino: 'Amazon Elastic Container Service (Amazon ECS)',
		definicion:
			'Servicio de orquestación de contenedores propietario de AWS que programa y escala contenedores Docker.',
		dominios: ['dominio-3'],
		relacionados: ['fargate', 'eks', 'ecr'],
	},
	{
		id: 'edge-location',
		termino: 'Edge location («ubicación de borde»)',
		definicion:
			'Punto de presencia global de CloudFront que cachea contenido cerca del usuario para reducir latencia.',
		dominios: ['dominio-1'],
		relacionados: ['cloudfront', 'region', 'availability-zone', 'latencia'],
	},
	{
		id: 'efs',
		termino: 'Amazon Elastic File System (Amazon EFS)',
		definicion:
			'Sistema de archivos de red elástico y compartido para Linux, accesible desde varias instancias y zonas de disponibilidad.',
		dominios: ['dominio-3'],
		relacionados: ['ebs', 's3', 'fsx', 'backup'],
	},
	{
		id: 'eks',
		termino: 'Amazon Elastic Kubernetes Service (Amazon EKS)',
		definicion:
			'Servicio gestionado de Kubernetes que opera el plano de control y facilita ejecutar clústeres en AWS.',
		dominios: ['dominio-3'],
		relacionados: ['ecs', 'fargate', 'ecr'],
	},
	{
		id: 'elastic-beanstalk',
		termino: 'AWS Elastic Beanstalk',
		definicion:
			'Servicio PaaS que despliega y escala aplicaciones web aprovisionando la infraestructura automáticamente, sin ocultar el control de los recursos.',
		dominios: ['dominio-3'],
		relacionados: ['ec2', 'auto-scaling', 'lambda'],
	},
	{
		id: 'elastic-disaster-recovery',
		termino: 'AWS Elastic Disaster Recovery',
		definicion:
			'Servicio que replica servidores hacia AWS de forma continua para recuperación ante desastres con tiempos de recuperación bajos.',
		dominios: ['dominio-3'],
		relacionados: ['recuperacion-ante-desastres', 'backup', 'ec2'],
	},
	{
		id: 'elasticache',
		termino: 'Amazon ElastiCache',
		definicion:
			'Servicio de caché en memoria compatible con Redis y Memcached que acelera aplicaciones reduciendo la carga de las bases de datos.',
		dominios: ['dominio-3'],
		relacionados: ['dynamodb', 'rds', 'latencia'],
	},
	{
		id: 'elasticidad',
		termino: 'Elasticity («elasticidad»)',
		definicion:
			'Capacidad de ajustar automáticamente los recursos a la demanda real, pagando solo por lo que se consume en cada momento.',
		dominios: ['dominio-1'],
		relacionados: ['auto-scaling', 'escalabilidad', 'agilidad'],
	},
	{
		id: 'emr',
		termino: 'Amazon EMR',
		definicion:
			'Servicio de big data gestionado que ejecuta frameworks como Apache Spark y Hadoop para procesar grandes volúmenes de datos.',
		dominios: ['dominio-3'],
		relacionados: ['glue', 'athena', 'redshift'],
	},
	{
		id: 'economias-de-escala',
		termino: 'Economies of scale («economías de escala»)',
		definicion:
			'AWS compra capacidad a gran escala y traslada ese ahorro al cliente mediante precios más bajos por uso agregado.',
		dominios: ['dominio-1'],
		relacionados: ['costes-fijos-variables', 'tco', 'pricing-calculator'],
	},
	{
		id: 'escalabilidad',
		termino: 'Scalability («escalabilidad»)',
		definicion:
			'Capacidad de un sistema para crecer en recursos y atender más carga, de forma vertical (más potente) u horizontal (más nodos).',
		dominios: ['dominio-1'],
		relacionados: ['elasticidad', 'auto-scaling', 'alta-disponibilidad'],
	},
	{
		id: 'estrategias-de-migracion',
		termino: 'Migration strategies («estrategias de migración»)',
		definicion:
			'Enfoques para mover cargas a la nube, como rehost, replatform, refactor, repurchase, retain y retire.',
		dominios: ['dominio-1'],
		relacionados: ['caf', 'migration-hub', 'application-migration-service', 'dms'],
	},
	{
		id: 'eventbridge',
		termino: 'Amazon EventBridge',
		definicion:
			'Bus de eventos sin servidor que enruta eventos entre servicios de AWS, aplicaciones propias y SaaS según reglas.',
		dominios: ['dominio-3'],
		relacionados: ['sns', 'sqs', 'lambda', 'step-functions'],
	},
	{
		id: 'fargate',
		termino: 'AWS Fargate',
		definicion:
			'Motor de cómputo sin servidor para contenedores que ejecuta tareas de ECS y EKS sin gestionar servidores.',
		dominios: ['dominio-3'],
		relacionados: ['ecs', 'eks', 'ecr', 'lambda'],
	},
	{
		id: 'firewall-manager',
		termino: 'AWS Firewall Manager',
		definicion:
			'Servicio que aplica y centraliza políticas de WAF, Shield y grupos de seguridad en todas las cuentas de una organización.',
		dominios: ['dominio-2'],
		relacionados: ['waf', 'shield', 'organizations', 'security-group'],
	},
	{
		id: 'fsx',
		termino: 'Amazon FSx',
		definicion:
			'Servicio de sistemas de archivos gestionados para cargas Windows, Lustre, NetApp ONTAP y OpenZFS.',
		dominios: ['dominio-3'],
		relacionados: ['efs', 'ebs', 's3'],
	},
	{
		id: 'global-accelerator',
		termino: 'AWS Global Accelerator',
		definicion:
			'Servicio de red que dirige el tráfico de usuarios por la red global de AWS para mejorar latencia y disponibilidad.',
		dominios: ['dominio-3'],
		relacionados: ['cloudfront', 'route-53', 'latencia'],
	},
	{
		id: 'glue',
		termino: 'AWS Glue',
		definicion:
			'Servicio ETL sin servidor que cataloga y transforma datos entre orígenes y destinos para analítica.',
		dominios: ['dominio-3'],
		relacionados: ['athena', 'emr', 's3', 'redshift'],
	},
	{
		id: 'guardduty',
		termino: 'Amazon GuardDuty',
		definicion:
			'Servicio de detección de amenazas que analiza continuamente registros y comportamiento en busca de actividad maliciosa.',
		dominios: ['dominio-2'],
		relacionados: ['detective', 'security-hub', 'cloudtrail', 'inspector'],
	},
	{
		id: 'health-dashboard',
		termino: 'AWS Health Dashboard',
		definicion:
			'Panel que informa del estado de los servicios de AWS y de eventos que afectan a los recursos de la propia cuenta.',
		dominios: ['dominio-4'],
		relacionados: ['trusted-advisor', 'support-center', 'cloudwatch'],
	},
	{
		id: 'iac',
		termino: 'Infrastructure as code (IaC)',
		definicion:
			'Práctica de definir la infraestructura en archivos de texto versionados, permitiendo despliegues repetibles y automatizados.',
		dominios: ['dominio-1'],
		relacionados: ['cloudformation', 'codepipeline', 'solutions-architects'],
	},
	{
		id: 'iam',
		termino: 'AWS Identity and Access Management (IAM)',
		definicion:
			'Servicio que gestiona usuarios, grupos, roles y políticas para controlar quién puede acceder a qué recursos de AWS.',
		dominios: ['dominio-2'],
		relacionados: ['iam-user', 'iam-role', 'iam-policy', 'least-privilege', 'mfa', 'root-user'],
	},
	{
		id: 'iam-identity-center',
		termino: 'AWS IAM Identity Center',
		definicion:
			'Servicio que centraliza el acceso de empleados a varias cuentas de AWS y aplicaciones con un único inicio de sesión.',
		dominios: ['dominio-2'],
		relacionados: ['iam', 'organizations', 'directory-service', 'control-tower'],
	},
	{
		id: 'iam-policy',
		termino: 'IAM policy («política de IAM»)',
		definicion:
			'Documento JSON que define qué acciones se permiten o deniegan sobre qué recursos y bajo qué condiciones.',
		dominios: ['dominio-2'],
		relacionados: ['iam', 'iam-role', 'iam-user', 'least-privilege'],
	},
	{
		id: 'iam-role',
		termino: 'IAM role («rol de IAM»)',
		definicion:
			'Identidad con permisos que asumen usuarios, servicios o aplicaciones temporalmente, sin credenciales permanentes.',
		dominios: ['dominio-2'],
		relacionados: ['iam', 'iam-policy', 'iam-user', 'lambda'],
	},
	{
		id: 'iam-user',
		termino: 'IAM user («usuario de IAM»)',
		definicion:
			'Identidad con credenciales permanentes que representa a una persona o aplicación dentro de una cuenta de AWS.',
		dominios: ['dominio-2'],
		relacionados: ['iam', 'iam-role', 'iam-policy', 'root-user', 'least-privilege'],
	},
	{
		id: 'inspector',
		termino: 'Amazon Inspector',
		definicion:
			'Servicio que analiza automáticamente instancias EC2, imágenes de contenedor y funciones Lambda en busca de vulnerabilidades.',
		dominios: ['dominio-2'],
		relacionados: ['guardduty', 'security-hub', 'ecr'],
	},
	{
		id: 'iot-core',
		termino: 'AWS IoT Core',
		definicion:
			'Servicio gestionado que conecta millones de dispositivos IoT a la nube para enviar telemetría y recibir comandos.',
		dominios: ['dominio-3'],
		relacionados: ['lambda', 'kinesis', 'sqs'],
	},
	{
		id: 'kinesis',
		termino: 'Amazon Kinesis',
		definicion:
			'Plataforma para ingerir y procesar datos en streaming en tiempo real, como registros de aplicaciones o telemetría.',
		dominios: ['dominio-3'],
		relacionados: ['sqs', 'glue', 'opensearch-service'],
	},
	{
		id: 'knowledge-center',
		termino: 'AWS Knowledge Center',
		definicion:
			'Biblioteca de artículos técnicos de AWS Support con respuestas a problemas frecuentes y guías de resolución.',
		dominios: ['dominio-4'],
		relacionados: ['re-post', 'support-center', 'prescriptive-guidance'],
	},
	{
		id: 'kms',
		termino: 'AWS Key Management Service (AWS KMS)',
		definicion:
			'Servicio gestionado para crear y controlar claves de cifrado usadas por otros servicios de AWS y aplicaciones propias.',
		dominios: ['dominio-2'],
		relacionados: ['cloudhsm', 'secrets-manager', 's3', 'ebs'],
	},
	{
		id: 'lambda',
		termino: 'AWS Lambda',
		definicion:
			'Servicio de cómputo sin servidor que ejecuta código ante eventos y cobra solo por el tiempo de ejecución consumido.',
		dominios: ['dominio-3'],
		relacionados: ['fargate', 'api-gateway', 'eventbridge', 'sqs', 'iam-role'],
	},
	{
		id: 'latencia',
		termino: 'Latency («latencia»)',
		definicion:
			'Tiempo que tarda una petición en llegar y obtener respuesta; se reduce desplegando recursos y cachés cerca del usuario.',
		dominios: ['dominio-3'],
		relacionados: ['cloudfront', 'edge-location', 'global-accelerator', 'region'],
	},
	{
		id: 'least-privilege',
		termino: 'Least privilege («privilegio mínimo»)',
		definicion:
			'Principio de conceder únicamente los permisos necesarios para realizar una tarea, y nada más.',
		dominios: ['dominio-2'],
		relacionados: ['iam', 'iam-policy', 'root-user', 'mfa'],
	},
	{
		id: 'lex',
		termino: 'Amazon Lex',
		definicion:
			'Servicio para crear interfaces conversacionales de voz y texto (chatbots) con comprensión de lenguaje natural.',
		dominios: ['dominio-3'],
		relacionados: ['polly', 'transcribe', 'connect'],
	},
	{
		id: 'license-manager',
		termino: 'AWS License Manager',
		definicion:
			'Servicio que rastrea y controla el uso de licencias de software para mantener el cumplimiento en AWS y on-premises.',
		dominios: ['dominio-4'],
		relacionados: ['byol', 'dedicated-hosts', 'compute-optimizer'],
	},
	{
		id: 'lightsail',
		termino: 'Amazon Lightsail',
		definicion:
			'Servicio simplificado que ofrece servidores virtuales, almacenamiento y redes con precio mensual predecible para proyectos sencillos.',
		dominios: ['dominio-3'],
		relacionados: ['ec2', 'elastic-beanstalk', 'management-console'],
	},
	{
		id: 'macie',
		termino: 'Amazon Macie',
		definicion:
			'Servicio que descubre y clasifica datos sensibles, como información personal, almacenados en Amazon S3.',
		dominios: ['dominio-2'],
		relacionados: ['s3', 'guardduty', 'security-hub'],
	},
	{
		id: 'management-console',
		termino: 'AWS Management Console',
		definicion:
			'Interfaz web gráfica desde la que se administran y monitorean los servicios y recursos de AWS.',
		dominios: ['dominio-3'],
		relacionados: ['aws-cli', 'sdks', 'lightsail', 'amazon-q'],
	},
	{
		id: 'marketplace',
		termino: 'AWS Marketplace',
		definicion:
			'Catálogo digital donde se compran y despliegan software de terceros que se factura junto con el consumo de AWS.',
		dominios: ['dominio-4'],
		relacionados: ['partner-network', 'consolidated-billing'],
	},
	{
		id: 'mfa',
		termino: 'Multi-factor authentication (MFA)',
		definicion:
			'Segundo factor de autenticación que añade una capa extra de protección al inicio de sesión, muy recomendado en la cuenta raíz.',
		dominios: ['dominio-2'],
		relacionados: ['iam', 'root-user', 'least-privilege'],
	},
	{
		id: 'migration-evaluator',
		termino: 'Migration Evaluator',
		definicion:
			'Herramienta que calcula el coste total actual on-premises y estima el ahorro esperado al migrar a AWS.',
		dominios: ['dominio-1'],
		relacionados: ['tco', 'migration-hub', 'pricing-calculator'],
	},
	{
		id: 'migration-hub',
		termino: 'AWS Migration Hub',
		definicion:
			'Panel que centraliza el seguimiento del progreso de las migraciones realizadas con distintas herramientas de AWS.',
		dominios: ['dominio-1'],
		relacionados: ['application-migration-service', 'dms', 'caf', 'estrategias-de-migracion'],
	},
	{
		id: 'nacl',
		termino: 'Network ACL (NACL)',
		definicion:
			'Cortafuegos opcional a nivel de subred que permite o deniega tráfico de entrada y salida con reglas sin estado.',
		dominios: ['dominio-3'],
		relacionados: ['security-group', 'vpc', 'subred'],
	},
	{
		id: 'neptune',
		termino: 'Amazon Neptune',
		definicion:
			'Base de datos de grafos gestionada para aplicaciones que trabajan con relaciones complejas, como redes sociales o detección de fraude.',
		dominios: ['dominio-3'],
		relacionados: ['documentdb', 'dynamodb', 'aurora'],
	},
	{
		id: 'on-demand',
		termino: 'On-Demand Instances («instancias bajo demanda»)',
		definicion:
			'Modelo de pago por uso de EC2 sin compromiso, facturado por segundo o por hora según la instancia.',
		dominios: ['dominio-4'],
		relacionados: ['reserved-instances', 'savings-plans', 'spot-instances', 'ec2'],
	},
	{
		id: 'opensearch-service',
		termino: 'Amazon OpenSearch Service',
		definicion:
			'Servicio de búsqueda y analítica gestionado que indexa y consulta grandes volúmenes de datos y logs.',
		dominios: ['dominio-3'],
		relacionados: ['kinesis', 'cloudwatch', 'athena'],
	},
	{
		id: 'organizations',
		termino: 'AWS Organizations',
		definicion:
			'Servicio que agrupa varias cuentas de AWS para administrarlas de forma centralizada con políticas y facturación consolidada.',
		dominios: ['dominio-2', 'dominio-4'],
		relacionados: ['consolidated-billing', 'control-tower', 'iam-identity-center', 'service-control-policies'],
	},
	{
		id: 'outposts',
		termino: 'AWS Outposts',
		definicion:
			'Hardware de AWS instalado en el centro de datos propio que extiende servicios y APIs de la nube a instalaciones locales.',
		dominios: ['dominio-3'],
		relacionados: ['ec2', 'vpc', 'ebs'],
	},
	{
		id: 'partner-network',
		termino: 'AWS Partner Network (APN)',
		definicion:
			'Programa global de socios que ofrecen consultoría, software y servicios complementarios a los clientes de AWS.',
		dominios: ['dominio-4'],
		relacionados: ['marketplace', 'professional-services', 'solutions-architects'],
	},
	{
		id: 'pillar-cost-optimization',
		termino: 'Cost Optimization pillar («pilar de optimización de costes»)',
		definicion:
			'Pilar del Well-Architected Framework centrado en entregar valor al menor coste, evitando gasto innecesario.',
		dominios: ['dominio-1'],
		relacionados: ['well-architected-framework', 'rightsizing', 'cost-explorer'],
	},
	{
		id: 'pillar-operational-excellence',
		termino: 'Operational Excellence pillar («pilar de excelencia operativa»)',
		definicion:
			'Pilar del Well-Architected Framework que trata de ejecutar y monitorear sistemas y mejorar procesos de forma continua.',
		dominios: ['dominio-1'],
		relacionados: ['well-architected-framework', 'cloudwatch', 'iac'],
	},
	{
		id: 'pillar-performance-efficiency',
		termino: 'Performance Efficiency pillar («pilar de eficiencia de rendimiento»)',
		definicion:
			'Pilar del Well-Architected Framework que busca usar los recursos de forma eficiente y adaptarlos cuando cambia la demanda.',
		dominios: ['dominio-1'],
		relacionados: ['well-architected-framework', 'escalabilidad', 'compute-optimizer'],
	},
	{
		id: 'pillar-reliability',
		termino: 'Reliability pillar («pilar de fiabilidad»)',
		definicion:
			'Pilar del Well-Architected Framework que garantiza que un sistema se recupere de fallos y cumpla la disponibilidad esperada.',
		dominios: ['dominio-1'],
		relacionados: ['well-architected-framework', 'alta-disponibilidad', 'recuperacion-ante-desastres'],
	},
	{
		id: 'pillar-security',
		termino: 'Security pillar («pilar de seguridad»)',
		definicion:
			'Pilar del Well-Architected Framework que protege datos, sistemas y activos mediante identidad, detección y respuesta.',
		dominios: ['dominio-1'],
		relacionados: ['well-architected-framework', 'iam', 'shared-responsibility-model'],
	},
	{
		id: 'pillar-sustainability',
		termino: 'Sustainability pillar («pilar de sostenibilidad»)',
		definicion:
			'Pilar del Well-Architected Framework que reduce el impacto ambiental de las cargas mediante eficiencia y uso responsable de recursos.',
		dominios: ['dominio-1'],
		relacionados: ['well-architected-framework', 'rightsizing', 'sostenibilidad'],
	},
	{
		id: 'polly',
		termino: 'Amazon Polly',
		definicion:
			'Servicio de texto a voz que convierte texto en habla realista en varios idiomas y voces.',
		dominios: ['dominio-3'],
		relacionados: ['lex', 'transcribe', 'translate'],
	},
	{
		id: 'prescriptive-guidance',
		termino: 'AWS Prescriptive Guidance',
		definicion:
			'Colección de guías, patrones y estrategias de AWS para planificar migraciones, modernizaciones y adopción de la nube.',
		dominios: ['dominio-4'],
		relacionados: ['knowledge-center', 're-post', 'caf'],
	},
	{
		id: 'pricing-calculator',
		termino: 'AWS Pricing Calculator',
		definicion:
			'Herramienta web que estima el coste mensual de una arquitectura antes de crearla, comparando servicios y configuraciones.',
		dominios: ['dominio-4'],
		relacionados: ['cost-explorer', 'tco', 'economias-de-escala'],
	},
	{
		id: 'private-link',
		termino: 'AWS PrivateLink',
		definicion:
			'Permite acceder a servicios de AWS o de terceros de forma privada desde la VPC sin exponer el tráfico a Internet.',
		dominios: ['dominio-3'],
		relacionados: ['vpc', 'transit-gateway', 'api-gateway'],
	},
	{
		id: 'professional-services',
		termino: 'AWS Professional Services',
		definicion:
			'Equipo de AWS que ayuda a los clientes a implementar soluciones y acelerar proyectos de adopción de la nube.',
		dominios: ['dominio-4'],
		relacionados: ['solutions-architects', 'partner-network', 'support-plans'],
	},
	{
		id: 'quick-sight',
		termino: 'Amazon Quick Sight',
		definicion:
			'Servicio de business intelligence que crea paneles y visualizaciones interactivas a partir de datos de varias fuentes.',
		dominios: ['dominio-3'],
		relacionados: ['athena', 'redshift', 's3'],
	},
	{
		id: 'ram',
		termino: 'AWS Resource Access Manager (AWS RAM)',
		definicion:
			'Servicio que permite compartir recursos de AWS con otras cuentas, organizaciones o unidades organizativas.',
		dominios: ['dominio-2'],
		relacionados: ['organizations', 'vpc', 'iam'],
	},
	{
		id: 'rds',
		termino: 'Amazon Relational Database Service (Amazon RDS)',
		definicion:
			'Servicio gestionado de bases de datos relacionales que automatiza copias de seguridad, parches y alta disponibilidad.',
		dominios: ['dominio-3'],
		relacionados: ['aurora', 'dynamodb', 'dms', 'elasticache'],
	},
	{
		id: 're-post',
		termino: 'AWS re:Post',
		definicion:
			'Comunidad y foro de preguntas y respuestas de AWS donde la comunidad y los expertos resuelven dudas técnicas.',
		dominios: ['dominio-4'],
		relacionados: ['knowledge-center', 'prescriptive-guidance', 'support-center'],
	},
	{
		id: 'recuperacion-ante-desastres',
		termino: 'Disaster recovery («recuperación ante desastres»)',
		definicion:
			'Conjunto de estrategias y servicios para restaurar aplicaciones y datos tras un fallo, midiendo RTO y RPO.',
		dominios: ['dominio-1'],
		relacionados: ['elastic-disaster-recovery', 'backup', 'alta-disponibilidad', 'pillar-reliability'],
	},
	{
		id: 'redshift',
		termino: 'Amazon Redshift',
		definicion:
			'Almacén de datos (data warehouse) gestionado y a gran escala para analítica con SQL sobre petabytes de información.',
		dominios: ['dominio-3'],
		relacionados: ['athena', 'glue', 'emr', 'quick-sight'],
	},
	{
		id: 'region',
		termino: 'Region («región»)',
		definicion:
			'Área geográfica con varias zonas de disponibilidad donde se despliegan los recursos de AWS y se eligen por latencia, coste o cumplimiento.',
		dominios: ['dominio-1'],
		relacionados: ['availability-zone', 'edge-location', 'soberania-de-datos', 'latencia'],
	},
	{
		id: 'rekognition',
		termino: 'Amazon Rekognition',
		definicion:
			'Servicio de visión por computadora que detecta objetos, rostros, texto y contenido en imágenes y videos.',
		dominios: ['dominio-3'],
		relacionados: ['textract', 'comprehend', 's3'],
	},
	{
		id: 'reserved-instances',
		termino: 'Reserved Instances (RI)',
		definicion:
			'Compromiso de uso de uno o tres años en EC2 que otorga un descuento significativo frente al precio bajo demanda.',
		dominios: ['dominio-4'],
		relacionados: ['on-demand', 'savings-plans', 'capacity-reservations', 'ec2'],
	},
	{
		id: 'rightsizing',
		termino: 'Rightsizing («ajuste de tamaño»)',
		definicion:
			'Práctica de elegir el tipo y tamaño de recurso que mejor se ajusta a la carga real para no pagar de más.',
		dominios: ['dominio-1'],
		relacionados: ['compute-optimizer', 'pillar-cost-optimization', 'ec2-instance-types'],
	},
	{
		id: 'root-user',
		termino: 'Root user («usuario raíz»)',
		definicion:
			'Identidad inicial de una cuenta de AWS con acceso total; debe protegerse con MFA y usarse solo para tareas imprescindibles.',
		dominios: ['dominio-2'],
		relacionados: ['iam', 'mfa', 'least-privilege', 'iam-user'],
	},
	{
		id: 'route-53',
		termino: 'Amazon Route 53',
		definicion:
			'Servicio de DNS escalable y de alta disponibilidad que también registra dominios y enruta tráfico con políticas de enrutamiento.',
		dominios: ['dominio-3'],
		relacionados: ['cloudfront', 'global-accelerator', 'vpc', 'certificate-manager'],
	},
	{
		id: 's3',
		termino: 'Amazon Simple Storage Service (Amazon S3)',
		definicion:
			'Almacenamiento de objetos prácticamente ilimitado, duradero y accesible por Internet, organizado en buckets.',
		dominios: ['dominio-3'],
		relacionados: ['s3-storage-classes', 's3-glacier', 'ebs', 'efs', 'cloudfront', 'kms'],
	},
	{
		id: 's3-glacier',
		termino: 'Amazon S3 Glacier',
		definicion:
			'Clases de almacenamiento de archivo de bajo coste en S3, pensadas para datos a los que se accede rara vez y con tiempos de recuperación variables.',
		dominios: ['dominio-3'],
		relacionados: ['s3', 's3-storage-classes', 'backup'],
	},
	{
		id: 's3-storage-classes',
		termino: 'S3 storage classes («clases de almacenamiento de S3»)',
		definicion:
			'Niveles de S3 —Standard, Intelligent-Tiering, Standard-IA, One Zone-IA y la familia Glacier (Instant Retrieval, Flexible Retrieval y Deep Archive)— que equilibran coste, latencia, disponibilidad y tiempo de recuperación. One Zone-IA almacena los datos en una sola Availability Zone y por eso ofrece menor durabilidad que las clases que replican entre varias zonas.',
		dominios: ['dominio-3'],
		relacionados: ['s3', 's3-glacier', 'cost-explorer'],
	},
	{
		id: 'sage-maker-ai',
		termino: 'Amazon SageMaker AI',
		definicion:
			'Plataforma gestionada para construir, entrenar y desplegar modelos de machine learning de extremo a extremo.',
		dominios: ['dominio-3'],
		relacionados: ['amazon-q', 'comprehend', 'ec2'],
	},
	{
		id: 'savings-plans',
		termino: 'Savings Plans',
		definicion:
			'Modelo de compromiso de gasto por hora durante uno o tres años que aplica descuentos flexibles en cómputo.',
		dominios: ['dominio-4'],
		relacionados: ['reserved-instances', 'on-demand', 'cost-explorer'],
	},
	{
		id: 'sct',
		termino: 'AWS Schema Conversion Tool (AWS SCT)',
		definicion:
			'Herramienta que convierte esquemas y código de bases de datos de un motor a otro para facilitar migraciones.',
		dominios: ['dominio-1'],
		relacionados: ['dms', 'rds', 'aurora'],
	},
	{
		id: 'sdks',
		termino: 'AWS SDKs',
		definicion:
			'Bibliotecas oficiales en distintos lenguajes que permiten a las aplicaciones llamar a las APIs de AWS de forma programática.',
		dominios: ['dominio-3'],
		relacionados: ['apis', 'aws-cli', 'iam-role'],
	},
	{
		id: 'secrets-manager',
		termino: 'AWS Secrets Manager',
		definicion:
			'Servicio que almacena, rota y audita secretos como contraseñas y claves de API, evitando incluirlos en el código.',
		dominios: ['dominio-2'],
		relacionados: ['kms', 'cloudhsm', 'iam'],
	},
	{
		id: 'security-group',
		termino: 'Security group («grupo de seguridad»)',
		definicion:
			'Cortafuegos virtual con estado a nivel de instancia o recurso que controla el tráfico de entrada y salida permitido.',
		dominios: ['dominio-3'],
		relacionados: ['nacl', 'vpc', 'subred', 'firewall-manager'],
	},
	{
		id: 'security-hub',
		termino: 'AWS Security Hub',
		definicion:
			'Servicio que agrega y prioriza hallazgos de seguridad de varias fuentes y comprueba el cumplimiento de estándares.',
		dominios: ['dominio-2'],
		relacionados: ['guardduty', 'inspector', 'macie', 'detective', 'aws-config'],
	},
	{
		id: 'service-catalog',
		termino: 'AWS Service Catalog',
		definicion:
			'Permite crear catálogos de productos aprobados de infraestructura para que los usuarios desplieguen solo configuraciones permitidas.',
		dominios: ['dominio-3'],
		relacionados: ['cloudformation', 'organizations', 'control-tower'],
	},
	{
		id: 'service-control-policies',
		termino: 'Service control policies (SCP)',
		definicion:
			'Políticas de AWS Organizations que establecen los límites máximos de permisos disponibles para las cuentas de una organización.',
		dominios: ['dominio-2'],
		relacionados: ['organizations', 'iam-policy', 'control-tower', 'least-privilege'],
	},
	{
		id: 'service-quotas',
		termino: 'Service Quotas',
		definicion:
			'Servicio que muestra los límites de uso de los servicios de AWS y permite solicitar su aumento.',
		dominios: ['dominio-4'],
		relacionados: ['trusted-advisor', 'support-center', 'management-console'],
	},
	{
		id: 'ses',
		termino: 'Amazon Simple Email Service (Amazon SES)',
		definicion:
			'Servicio de envío y recepción de correo electrónico a escala para aplicaciones y campañas.',
		dominios: ['dominio-3'],
		relacionados: ['sns', 'connect', 'lambda'],
	},
	{
		id: 'shared-responsibility-model',
		termino: 'AWS Shared Responsibility Model',
		definicion:
			'Modelo que reparte la seguridad entre AWS, responsable de la seguridad «de» la nube, y el cliente, responsable «en» la nube.',
		dominios: ['dominio-2'],
		relacionados: ['iam', 's3', 'ec2', 'pillar-security', 'artifact'],
	},
	{
		id: 'shield',
		termino: 'AWS Shield',
		definicion:
			'Servicio de protección contra ataques de denegación de servicio (DDoS), con nivel Standard gratuito y Advanced de pago.',
		dominios: ['dominio-2'],
		relacionados: ['waf', 'firewall-manager', 'cloudfront'],
	},
	{
		id: 'site-to-site-vpn',
		termino: 'AWS Site-to-Site VPN',
		definicion:
			'Conexión VPN cifrada por Internet entre la red on-premises y una VPC, rápida de montar y sin circuitos dedicados.',
		dominios: ['dominio-3'],
		relacionados: ['vpn', 'vpc', 'transit-gateway', 'direct-connect'],
	},
	{
		id: 'sns',
		termino: 'Amazon Simple Notification Service (Amazon SNS)',
		definicion:
			'Servicio de mensajería pub/sub que envía notificaciones a suscriptores por correo, SMS, HTTP u otros servicios.',
		dominios: ['dominio-3'],
		relacionados: ['sqs', 'eventbridge', 'lambda', 'ses'],
	},
	{
		id: 'soberania-de-datos',
		termino: 'Data sovereignty («soberanía de datos»)',
		definicion:
			'Requisito de que los datos permanezcan bajo las leyes y el control del país donde se almacenan, alcanzable eligiendo la región adecuada.',
		dominios: ['dominio-2'],
		relacionados: ['region', 'artifact', 'organizations'],
	},
	{
		id: 'solutions-architects',
		termino: 'AWS solutions architects',
		definicion:
			'Especialistas de AWS que asesoran a los clientes en el diseño de arquitecturas seguras, resilientes y eficientes.',
		dominios: ['dominio-4'],
		relacionados: ['professional-services', 'well-architected-framework', 'partner-network'],
	},
	{
		id: 'sostenibilidad',
		termino: 'Sustainability («sostenibilidad»)',
		definicion:
			'Objetivo de minimizar el impacto ambiental de las cargas aprovechando la eficiencia energética y las renovables de la infraestructura de AWS.',
		dominios: ['dominio-1'],
		relacionados: ['pillar-sustainability', 'well-architected-framework', 'economias-de-escala'],
	},
	{
		id: 'spot-instances',
		termino: 'Spot Instances («instancias Spot»)',
		definicion:
			'Capacidad de EC2 no utilizada que se ofrece con grandes descuentos y puede interrumpirse con poca antelación.',
		dominios: ['dominio-4'],
		relacionados: ['on-demand', 'reserved-instances', 'batch', 'ec2-instance-types'],
	},
	{
		id: 'sqs',
		termino: 'Amazon Simple Queue Service (Amazon SQS)',
		definicion:
			'Servicio de colas de mensajes gestionado que desacopla componentes para que procesen trabajo de forma asíncrona y resistente.',
		dominios: ['dominio-3'],
		relacionados: ['sns', 'eventbridge', 'lambda', 'kinesis'],
	},
	{
		id: 'step-functions',
		termino: 'AWS Step Functions',
		definicion:
			'Servicio sin servidor que orquesta flujos de trabajo con múltiples pasos y maneja reintentos y errores.',
		dominios: ['dominio-3'],
		relacionados: ['lambda', 'eventbridge', 'sqs'],
	},
	{
		id: 'storage-gateway',
		termino: 'AWS Storage Gateway',
		definicion:
			'Servicio híbrido que conecta el almacenamiento on-premises con el almacenamiento en la nube de AWS para backup, archivo o caché.',
		dominios: ['dominio-3'],
		relacionados: ['s3', 'efs', 'backup', 'fsx'],
	},
	{
		id: 'subred',
		termino: 'Subnet («subred»)',
		definicion:
			'Rango de direcciones IP dentro de una VPC que aísla recursos; puede ser pública, con ruta a Internet, o privada.',
		dominios: ['dominio-3'],
		relacionados: ['vpc', 'availability-zone', 'security-group', 'nacl'],
	},
	{
		id: 'support-center',
		termino: 'AWS Support Center',
		definicion:
			'Portal donde se abren y gestionan casos de soporte, se revisan incidencias y se accede a los recursos de ayuda.',
		dominios: ['dominio-4'],
		relacionados: ['support-plans', 'trusted-advisor', 'knowledge-center', 'health-dashboard'],
	},
	{
		id: 'support-plans',
		termino: 'AWS Support plans («planes de soporte»)',
		definicion:
			'Niveles de soporte Basic, Developer, Business, Enterprise On-Ramp y Enterprise, con distintos tiempos de respuesta y servicios incluidos.',
		dominios: ['dominio-4'],
		relacionados: ['support-center', 'trusted-advisor', 'professional-services'],
	},
	{
		id: 'aws-support',
		termino: 'AWS Support',
		definicion:
			'Organización de AWS que ofrece asistencia técnica y de facturación según el plan contratado.',
		dominios: ['dominio-4'],
		relacionados: ['support-plans', 'support-center', 'trusted-advisor'],
	},
	{
		id: 'systems-manager',
		termino: 'AWS Systems Manager',
		definicion:
			'Conjunto de herramientas para operar flotas de servidores: inventario, parches, comandos remotos y parámetros de configuración.',
		dominios: ['dominio-3'],
		relacionados: ['cloudwatch', 'ec2', 'iam-role', 'service-quotas'],
	},
	{
		id: 'tco',
		termino: 'Total cost of ownership (TCO)',
		definicion:
			'Cálculo del coste completo de una solución, incluidos hardware, energía, personal y mantenimiento, para comparar on-premises con la nube.',
		dominios: ['dominio-1'],
		relacionados: ['costes-fijos-variables', 'migration-evaluator', 'pricing-calculator'],
	},
	{
		id: 'textract',
		termino: 'Amazon Textract',
		definicion:
			'Servicio que extrae automáticamente texto, tablas y formularios de documentos escaneados usando machine learning.',
		dominios: ['dominio-3'],
		relacionados: ['rekognition', 'comprehend', 's3'],
	},
	{
		id: 'tolerancia-a-fallos',
		termino: 'Fault tolerance («tolerancia a fallos»)',
		definicion:
			'Capacidad de un sistema para seguir funcionando correctamente aunque falle alguno de sus componentes.',
		dominios: ['dominio-1'],
		relacionados: ['alta-disponibilidad', 'recuperacion-ante-desastres', 'elasticidad'],
	},
	{
		id: 'transcribe',
		termino: 'Amazon Transcribe',
		definicion:
			'Servicio de reconocimiento de voz que convierte audio en texto y puede identificar a los interlocutores.',
		dominios: ['dominio-3'],
		relacionados: ['polly', 'comprehend', 'translate'],
	},
	{
		id: 'transit-gateway',
		termino: 'AWS Transit Gateway',
		definicion:
			'Concentrador de red que conecta varias VPC y redes on-premises mediante una topología centralizada y simplificada.',
		dominios: ['dominio-3'],
		relacionados: ['vpc', 'direct-connect', 'site-to-site-vpn', 'private-link'],
	},
	{
		id: 'translate',
		termino: 'Amazon Translate',
		definicion:
			'Servicio de traducción automática neuronal entre idiomas para contenido y aplicaciones.',
		dominios: ['dominio-3'],
		relacionados: ['comprehend', 'transcribe', 'polly'],
	},
	{
		id: 'trusted-advisor',
		termino: 'AWS Trusted Advisor',
		definicion:
			'Herramienta que inspecciona la cuenta y ofrece recomendaciones sobre coste, seguridad, tolerancia a fallos, límites y rendimiento.',
		dominios: ['dominio-2', 'dominio-4'],
		relacionados: ['cost-explorer', 'security-hub', 'service-quotas', 'support-plans'],
	},
	{
		id: 'velocidad-de-despliegue',
		termino: 'Speed of deployment («velocidad de despliegue»)',
		definicion:
			'Ventaja de la nube que permite aprovisionar recursos globales en minutos en lugar de semanas de compras e instalación.',
		dominios: ['dominio-1'],
		relacionados: ['agilidad', 'iac', 'region'],
	},
	{
		id: 'vpc',
		termino: 'Amazon Virtual Private Cloud (Amazon VPC)',
		definicion:
			'Red virtual aislada y configurable donde se lanzan los recursos de AWS, con control de direcciones IP, subredes y enrutamiento.',
		dominios: ['dominio-3'],
		relacionados: ['subred', 'security-group', 'nacl', 'route-53', 'private-link'],
	},
	{
		id: 'vpn',
		termino: 'AWS VPN',
		definicion:
			'Familia de conexiones cifradas entre redes o usuarios y AWS, compuesta por Site-to-Site VPN y Client VPN.',
		dominios: ['dominio-3'],
		relacionados: ['site-to-site-vpn', 'client-vpn', 'direct-connect', 'vpc'],
	},
	{
		id: 'waf',
		termino: 'AWS WAF',
		definicion:
			'Cortafuegos de aplicaciones web que filtra tráfico malicioso como inyección SQL o cross-site scripting según reglas.',
		dominios: ['dominio-2'],
		relacionados: ['shield', 'firewall-manager', 'cloudfront', 'api-gateway'],
	},
	{
		id: 'well-architected-framework',
		termino: 'AWS Well-Architected Framework',
		definicion:
			'Conjunto de buenas prácticas organizadas en seis pilares para diseñar y revisar arquitecturas seguras, fiables y eficientes.',
		dominios: ['dominio-1'],
		relacionados: ['pillar-security', 'pillar-reliability', 'pillar-cost-optimization', 'caf', 'solutions-architects'],
	},
	{
		id: 'work-spaces',
		termino: 'Amazon WorkSpaces',
		definicion:
			'Escritorios virtuales gestionados en la nube que los empleados usan desde distintos dispositivos con acceso persistente.',
		dominios: ['dominio-3'],
		relacionados: ['appstream-2-0', 'work-spaces-secure-browser', 'directory-service'],
	},
	{
		id: 'work-spaces-secure-browser',
		termino: 'Amazon WorkSpaces Secure Browser',
		definicion:
			'Navegador aislado y gestionado que permite acceder a sitios web internos o públicos desde cualquier dispositivo sin riesgo local.',
		dominios: ['dominio-3'],
		relacionados: ['work-spaces', 'appstream-2-0'],
	},
	{
		id: 'x-ray',
		termino: 'AWS X-Ray',
		definicion:
			'Servicio de trazabilidad que sigue las peticiones a través de aplicaciones distribuidas para depurar latencia y errores.',
		dominios: ['dominio-3'],
		relacionados: ['cloudwatch', 'lambda', 'api-gateway'],
	},
	{
		id: 'aws-cli',
		termino: 'AWS Command Line Interface (AWS CLI)',
		definicion:
			'Herramienta de línea de comandos multiplataforma que permite administrar los servicios de AWS mediante scripts y automatización.',
		dominios: ['dominio-3'],
		relacionados: ['management-console', 'sdks', 'apis'],
	},
	{
		id: 'ami',
		termino: 'Amazon Machine Image (AMI)',
		definicion:
			'Plantilla que contiene el sistema operativo y el software base para lanzar instancias EC2.',
		dominios: ['dominio-3'],
		relacionados: ['ec2', 'ebs', 'outposts'],
	},
];
