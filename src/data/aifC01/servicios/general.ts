import type { ServicioAifC01 } from '@/data/aifC01/types';

export const serviciosGeneralAifC01: ServicioAifC01[] = [
	{
		nombre: 'Amazon Bedrock',
		categoria: 'Machine Learning',
		queResuelve:
			'Da acceso a modelos fundacionales de distintos proveedores a través de una API gestionada, sin construir ni operar la infraestructura de inferencia.',
		paraQueSeUsa:
			'Construir aplicaciones de IA generativa: invocar modelos, gestionar prompts con versiones y alias, aplicar guardrails, evaluar modelos y conectar fuentes de conocimiento.',
		seDiferenciaDe: ['Amazon SageMaker AI'],
		tareas: ['2.1', '2.3', '3.1', '3.2', '3.3', '3.4', '4.1', '5.1', '5.2'],
		relacionados: ['prompt-management', 'guardrail', 'grounding', 'base-de-conocimiento', 'amazon-bedrock'],
	},
	{
		nombre: 'Amazon Bedrock AgentCore',
		categoria: 'Machine Learning',
		queResuelve:
			'Aporta la infraestructura gestionada para ejecutar agentes: identidad, runtime, herramientas y aislamiento de sesiones.',
		paraQueSeUsa:
			'Desplegar agentes que necesitan identidad propia, ejecución de herramientas y límites de permisos sin montar el runtime a mano.',
		seDiferenciaDe: ['Amazon Bedrock'],
		tareas: ['2.1', '2.3', '3.1'],
		relacionados: ['agente-ia', 'mcp', 'gobernanza'],
	},
	{
		nombre: 'Amazon SageMaker AI',
		categoria: 'Machine Learning',
		queResuelve:
			'Ofrece el ciclo completo de ML: preparación de datos, entrenamiento, ajuste, despliegue de endpoints y monitorización de modelos.',
		paraQueSeUsa:
			'Entrenar o ajustar modelos propios, alojarlos en endpoints y observarlos en producción cuando se necesita control sobre el modelo y no solo consumirlo.',
		seDiferenciaDe: ['Amazon Bedrock'],
		tareas: ['1.2', '1.3', '2.3', '3.3', '3.4', '4.1', '4.2'],
		relacionados: ['entrenamiento', 'inferencia', 'model-card', 'fine-tuning'],
	},
	{
		nombre: 'Amazon SageMaker JumpStart',
		categoria: 'Machine Learning',
		queResuelve:
			'Pone a disposición modelos preentrenados y soluciones listas para desplegar sin partir de cero.',
		paraQueSeUsa:
			'Elegir un modelo base público, probarlo y desplegarlo con rapidez cuando no hace falta entrenamiento propio.',
		seDiferenciaDe: ['Amazon SageMaker AI'],
		tareas: ['2.3', '3.3'],
		relacionados: ['modelo-fundacional', 'fine-tuning'],
	},
	{
		nombre: 'Amazon Comprehend',
		categoria: 'Machine Learning',
		queResuelve:
			'Extrae significado del texto: idioma, entidades, sentimiento, sintaxis y temas, sin entrenar un modelo de NLP.',
		paraQueSeUsa:
			'Analizar opiniones de clientes, clasificar documentos y detectar información sensible en texto de forma gestionada.',
		seDiferenciaDe: ['Amazon Textract'],
		tareas: ['1.1', '1.2', '5.1'],
		relacionados: ['llm', 'cifrado'],
	},
	{
		nombre: 'Amazon Transcribe',
		categoria: 'Machine Learning',
		queResuelve:
			'Convierte audio en texto con reconocimiento automático del habla y marcas de tiempo.',
		paraQueSeUsa:
			'Transcribir llamadas, reuniones o subtítulos y alimentar después análisis de texto o búsqueda.',
		seDiferenciaDe: ['Amazon Polly'],
		tareas: ['1.2'],
		relacionados: ['llm', 'metricas-de-modelo'],
	},
	{
		nombre: 'Amazon Translate',
		categoria: 'Machine Learning',
		queResuelve:
			'Traduce texto entre idiomas de forma automática y gestionada.',
		paraQueSeUsa:
			'Localizar contenido, atender a clientes en varios idiomas y preprocesar texto multilingüe.',
		seDiferenciaDe: ['Amazon Transcribe'],
		tareas: ['1.2'],
		relacionados: ['llm'],
	},
	{
		nombre: 'Amazon Polly',
		categoria: 'Machine Learning',
		queResuelve:
			'Sintetiza voz realista a partir de texto en múltiples idiomas y voces.',
		paraQueSeUsa:
			'Generar audio para accesibilidad, asistentes por voz o lectura de contenido en aplicaciones.',
		seDiferenciaDe: ['Amazon Transcribe'],
		tareas: ['1.2'],
		relacionados: ['llm'],
	},
	{
		nombre: 'Amazon Lex',
		categoria: 'Machine Learning',
		queResuelve:
			'Construye interfaces conversacionales con reconocimiento de intención y gestión del diálogo.',
		paraQueSeUsa:
			'Crear chatbots de atención al cliente o asistentes por voz integrados con servicios backend.',
		seDiferenciaDe: ['Amazon Polly'],
		tareas: ['1.2'],
		relacionados: ['agente-ia', 'llm'],
	},
	{
		nombre: 'Amazon Rekognition',
		categoria: 'Machine Learning',
		queResuelve:
			'Analiza imágenes y vídeo para detectar objetos, escenas, texto y contenido inapropiado.',
		paraQueSeUsa:
			'Moderar contenido visual, verificar identidad o indexar catálogos de imágenes sin entrenar visión por computadora.',
		seDiferenciaDe: ['Amazon Textract'],
		tareas: ['1.1', '1.2'],
		relacionados: ['metricas-de-modelo', 'sesgo'],
	},
	{
		nombre: 'Amazon Textract',
		categoria: 'Machine Learning',
		queResuelve:
			'Extrae texto, formularios y tablas de documentos escaneados, no solo de texto plano.',
		paraQueSeUsa:
			'Digitalizar facturas, contratos y formularios y pasar su contenido a un proceso automatizado.',
		seDiferenciaDe: ['Amazon Comprehend'],
		tareas: ['1.2'],
		relacionados: ['llm', 'cifrado'],
	},
	{
		nombre: 'Amazon Personalize',
		categoria: 'Machine Learning',
		queResuelve:
			'Genera recomendaciones personalizadas a partir del comportamiento de los usuarios sin construir el modelo desde cero.',
		paraQueSeUsa:
			'Recomendar productos, contenido o acciones y aumentar conversión con datos históricos de interacción.',
		seDiferenciaDe: ['Amazon SageMaker AI'],
		tareas: ['1.2'],
		relacionados: ['machine-learning', 'metricas-de-modelo'],
	},
	{
		nombre: 'Amazon Nova',
		categoria: 'Machine Learning',
		queResuelve:
			'Aporta modelos fundacionales propios de AWS con distintas modalidades y relaciones calidad-coste.',
		paraQueSeUsa:
			'Invocar modelos de texto, imagen o vídeo desde Amazon Bedrock cuando encajan con el caso de uso.',
		seDiferenciaDe: ['Amazon Bedrock'],
		tareas: ['2.3'],
		relacionados: ['modelo-fundacional', 'llm', 'precio-por-tokens'],
	},
	{
		nombre: 'Amazon Quick',
		categoria: 'Analytics',
		queResuelve:
			'Ofrece análisis y asistencia sobre datos de negocio con lenguaje natural y paneles accesibles.',
		paraQueSeUsa:
			'Consultar indicadores, generar resúmenes y apoyar decisiones de negocio sin escribir consultas.',
		seDiferenciaDe: ['Amazon SageMaker AI'],
		tareas: ['1.3', '2.3'],
		relacionados: ['ia-generativa', 'metricas-de-modelo'],
	},
	{
		nombre: 'Amazon OpenSearch Service',
		categoria: 'Analytics',
		queResuelve:
			'Indexa y busca datos, incluidos vectores, con recuperación por similitud y por palabra clave.',
		paraQueSeUsa:
			'Almacenar embeddings y servir la búsqueda de una base de conocimiento en una arquitectura RAG.',
		seDiferenciaDe: ['Amazon Aurora'],
		tareas: ['3.1'],
		relacionados: ['embeddings', 'base-de-datos-vectorial', 'base-de-conocimiento', 'rag'],
	},
	{
		nombre: 'AWS Glue',
		categoria: 'Analytics',
		queResuelve:
			'Cataloga y transforma datos para prepararlos de forma repetible y gobernada.',
		paraQueSeUsa:
			'Construir y ejecutar trabajos ETL que alimentan los datos con los que se entrena o evalúa un modelo.',
		seDiferenciaDe: ['AWS Glue DataBrew'],
		tareas: ['1.3', '5.2'],
		relacionados: ['gobernanza', 'auditoria'],
	},
	{
		nombre: 'AWS Glue DataBrew',
		categoria: 'Analytics',
		queResuelve:
			'Permite perfilar y limpiar datos visualmente, sin escribir código.',
		paraQueSeUsa:
			'Detectar valores atípicos, nulos o duplicados antes de usar un dataset en entrenamiento o análisis.',
		seDiferenciaDe: ['AWS Glue'],
		tareas: ['1.3', '5.1'],
		relacionados: ['sesgo', 'machine-learning'],
	},
	{
		nombre: 'AWS Lake Formation',
		categoria: 'Analytics',
		queResuelve:
			'Centraliza los permisos finos sobre el data lake y su catálogo.',
		paraQueSeUsa:
			'Conceder acceso a tablas y columnas concretas y mantener la trazabilidad de quién puede leer cada dato.',
		seDiferenciaDe: ['AWS Glue'],
		tareas: ['3.1', '5.1'],
		relacionados: ['gobernanza', 'cifrado', 'auditoria'],
	},
	{
		nombre: 'Amazon Aurora',
		categoria: 'Database',
		queResuelve:
			'Proporciona una base de datos relacional gestionada, compatible con MySQL y PostgreSQL, de alto rendimiento.',
		paraQueSeUsa:
			'Almacenar datos transaccionales y, con la extensión vectorial, embeddings junto al resto de la aplicación.',
		seDiferenciaDe: ['Amazon RDS'],
		tareas: ['3.1'],
		relacionados: ['embeddings', 'base-de-datos-vectorial'],
	},
	{
		nombre: 'Amazon RDS',
		categoria: 'Database',
		queResuelve:
			'Gestiona motores relacionales en la nube ocupándose de parches, copias y alta disponibilidad.',
		paraQueSeUsa:
			'Ejecutar bases de datos relacionales tradicionales sin administrar servidores.',
		seDiferenciaDe: ['Amazon Aurora'],
		tareas: ['3.1'],
		relacionados: ['base-de-datos-vectorial'],
	},
	{
		nombre: 'Amazon Neptune',
		categoria: 'Database',
		queResuelve:
			'Almacena y consulta grafos de relaciones entre entidades.',
		paraQueSeUsa:
			'Modelar redes de conocimiento o dependencias donde la relación entre datos es tan importante como el dato.',
		seDiferenciaDe: ['Amazon Aurora'],
		tareas: ['3.1'],
		relacionados: ['base-de-conocimiento'],
	},
	{
		nombre: 'Amazon S3',
		categoria: 'Storage',
		queResuelve:
			'Almacena objetos de forma duradera y escalable con control de acceso y versionado.',
		paraQueSeUsa:
			'Guardar datasets, documentos fuente de una base de conocimiento y artefactos de modelos, con cifrado y políticas de acceso.',
		seDiferenciaDe: ['Amazon S3 Glacier'],
		tareas: ['3.1', '5.1', '5.2'],
		relacionados: ['cifrado', 'retencion-de-datos', 'base-de-conocimiento'],
	},
	{
		nombre: 'Amazon S3 Glacier',
		categoria: 'Storage',
		queResuelve:
			'Archiva objetos a bajo coste con tiempos de recuperación mayores.',
		paraQueSeUsa:
			'Cumplir requisitos de retención a largo plazo guardando datos que rara vez se consultan.',
		seDiferenciaDe: ['Amazon S3'],
		tareas: ['5.2'],
		relacionados: ['retencion-de-datos', 'residencia-de-datos', 'gobernanza'],
	},
	{
		nombre: 'AWS CloudTrail',
		categoria: 'Management and Governance',
		queResuelve:
			'Registra las llamadas a la API de AWS para saber quién hizo qué, cuándo y desde dónde.',
		paraQueSeUsa:
			'Auditar cambios de configuración, accesos y acciones sobre recursos de IA y reconstruir la trazabilidad de un incidente.',
		seDiferenciaDe: ['Amazon CloudWatch'],
		tareas: ['3.2', '5.1', '5.2'],
		relacionados: ['registro-de-actividad', 'auditoria', 'gobernanza', 'version-de-prompt', 'alias-de-prompt'],
	},
	{
		nombre: 'Amazon CloudWatch',
		categoria: 'Management and Governance',
		queResuelve:
			'Recoge métricas, logs y alarmas del comportamiento de los recursos y aplicaciones.',
		paraQueSeUsa:
			'Observar latencia, errores y consumo, y disparar alarmas cuando una métrica se sale de rango.',
		seDiferenciaDe: ['AWS CloudTrail'],
		tareas: ['4.1', '5.1'],
		relacionados: ['registro-de-actividad', 'inferencia'],
	},
	{
		nombre: 'AWS Config',
		categoria: 'Management and Governance',
		queResuelve:
			'Evalúa de forma continua si la configuración de los recursos cumple las reglas definidas.',
		paraQueSeUsa:
			'Demostrar cumplimiento, detectar cambios de configuración y conservar el historial para una auditoría.',
		seDiferenciaDe: ['AWS CloudTrail'],
		tareas: ['5.2'],
		relacionados: ['cumplimiento', 'gobernanza', 'auditoria'],
	},
	{
		nombre: 'AWS Trusted Advisor',
		categoria: 'Management and Governance',
		queResuelve:
			'Revisa la cuenta y señala recomendaciones de seguridad, coste, rendimiento y cuotas.',
		paraQueSeUsa:
			'Detectar configuraciones de riesgo o ineficiencias antes de que se conviertan en incidentes.',
		seDiferenciaDe: ['AWS Config'],
		tareas: ['5.2'],
		relacionados: ['gobernanza', 'cumplimiento'],
	},
	{
		nombre: 'AWS Artifact',
		categoria: 'Security, Identity, and Compliance',
		queResuelve:
			'Facilita informes de cumplimiento y acuerdos de AWS bajo demanda.',
		paraQueSeUsa:
			'Reunir evidencia de auditoría y requisitos regulatorios sin solicitarla manualmente.',
		seDiferenciaDe: ['AWS Config'],
		tareas: ['2.3', '5.2'],
		relacionados: ['cumplimiento', 'auditoria', 'gobernanza'],
	},
	{
		nombre: 'AWS Identity and Access Management (IAM)',
		categoria: 'Security, Identity, and Compliance',
		queResuelve:
			'Define qué identidades pueden realizar qué acciones sobre qué recursos, con permisos explícitos y auditables.',
		paraQueSeUsa:
			'Controlar quién puede crear, publicar y consumir prompts gestionados, y limitar el acceso de cada aplicación a los modelos y recursos que necesita.',
		seDiferenciaDe: ['AWS Secrets Manager'],
		tareas: ['3.2', '5.1'],
		relacionados: ['prompt-management', 'gobernanza', 'registro-de-actividad'],
	},
	{
		nombre: 'AWS Key Management Service (AWS KMS)',
		categoria: 'Security, Identity, and Compliance',
		queResuelve:
			'Crea y controla las claves criptográficas con las que se cifran los datos.',
		paraQueSeUsa:
			'Cifrar en reposo y auditar el uso de claves en los servicios que procesan datos de IA.',
		seDiferenciaDe: ['AWS Secrets Manager'],
		tareas: ['5.1'],
		relacionados: ['cifrado', 'gobernanza', 'auditoria'],
	},
	{
		nombre: 'Amazon Inspector',
		categoria: 'Security, Identity, and Compliance',
		queResuelve:
			'Analiza cargas de trabajo en busca de vulnerabilidades y exposiciones conocidas.',
		paraQueSeUsa:
			'Gestionar vulnerabilidades de la infraestructura que aloja aplicaciones de IA y priorizar su corrección.',
		seDiferenciaDe: ['Amazon Macie'],
		tareas: ['5.1', '5.2'],
		relacionados: ['cumplimiento', 'veracidad'],
	},
	{
		nombre: 'Amazon Macie',
		categoria: 'Security, Identity, and Compliance',
		queResuelve:
			'Descubre y clasifica datos sensibles almacenados en Amazon S3.',
		paraQueSeUsa:
			'Detectar datos personales o credenciales antes de usarlos en entrenamiento o exponerlos a un modelo.',
		seDiferenciaDe: ['Amazon Inspector'],
		tareas: ['5.1'],
		relacionados: ['cifrado', 'gobernanza', 'alucinacion'],
	},
	{
		nombre: 'Amazon ECS',
		categoria: 'Containers',
		queResuelve:
			'Ejecuta contenedores de forma gestionada sin administrar el plano de control.',
		paraQueSeUsa:
			'Desplegar APIs que sirven modelos o aplicaciones de IA empaquetadas en contenedores.',
		seDiferenciaDe: ['Amazon EKS'],
		tareas: ['2.3'],
		relacionados: ['inferencia'],
	},
	{
		nombre: 'Amazon EKS',
		categoria: 'Containers',
		queResuelve:
			'Ofrece Kubernetes gestionado para orquestar contenedores a escala.',
		paraQueSeUsa:
			'Ejecutar cargas de trabajo de ML que requieren orquestación avanzada y portabilidad entre entornos.',
		seDiferenciaDe: ['Amazon ECS'],
		tareas: ['2.3'],
		relacionados: ['inferencia'],
	},
	{
		nombre: 'Amazon VPC',
		categoria: 'Networking and Content Delivery',
		queResuelve:
			'Aísla los recursos en una red virtual con subredes, reglas de firewall y conectividad privada.',
		paraQueSeUsa:
			'Evitar que el tráfico de la aplicación hacia los servicios de IA salga a internet y segmentar el acceso.',
		seDiferenciaDe: ['Amazon CloudFront'],
		tareas: ['5.1'],
		relacionados: ['cifrado', 'gobernanza'],
	},
];
