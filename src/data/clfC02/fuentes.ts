/**
 * Registro de fuentes oficiales del módulo CLF-C02 (G9).
 *
 * Cada servicio in-scope, término del material oficial y concepto clave tiene una
 * URL oficial verificada. Las preguntas declaran `fuentes` con estas URLs; los
 * guardrails comprueban que todo servicio citado en un ítem esté respaldado por
 * su URL.
 *
 * Prohibido añadir URLs no verificadas. `verificadoEn` indica la fecha de la
 * última comprobación con `webfetch`.
 */
export interface FuenteOficialClfC02 {
	etiqueta: string;
	url: string;
	categoria: string;
	verificadoEn: string;
	confidence: 'oficial';
}

const FECHA = '2026-09-26';

function fuente(etiqueta: string, categoria: string, url: string): FuenteOficialClfC02 {
	return { etiqueta, categoria, url, verificadoEn: FECHA, confidence: 'oficial' };
}

const ENTRADAS: FuenteOficialClfC02[] = [
	// Conceptos y documentos oficiales
	fuente(
		'Guía oficial del examen CLF-C02',
		'Exam guide',
		'https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html',
	),
	fuente(
		'AWS Well-Architected Framework',
		'Conceptos',
		'https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html',
	),
	// Documentos oficiales usados por el banco
	fuente(
		'Documento: infraestructura global',
		'Documentos',
		'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/global-infrastructure.html',
	),
	fuente(
		'Documento: cómo funciona el precio de AWS',
		'Documentos',
		'https://docs.aws.amazon.com/whitepapers/latest/how-aws-pricing-works/welcome.html',
	),
	fuente(
		'Documento: modelo de responsabilidad compartida',
		'Documentos',
		'https://docs.aws.amazon.com/whitepapers/latest/aws-risk-and-compliance/shared-responsibility-model.html',
	),
	fuente(
		'Documento: introducción a IAM',
		'Documentos',
		'https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html',
	),
	fuente(
		'Documento: AWS CloudFormation',
		'Documentos',
		'https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html',
	),
	fuente(
		'Documento: Amazon EC2 Auto Scaling',
		'Documentos',
		'https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html',
	),
	fuente(
		'Documento: guía de usuario de Amazon S3',
		'Documentos',
		'https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html',
	),
	fuente(
		'Documento: API de AWS Cost Management',
		'Documentos',
		'https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/Welcome.html',
	),
	// Conceptos oficiales
	fuente('AWS Cloud Adoption Framework (AWS CAF)', 'Conceptos', 'https://docs.aws.amazon.com/whitepapers/latest/overview-aws-cloud-adoption-framework/welcome.html'),
	fuente('AWS Compliance', 'Conceptos', 'https://docs.aws.amazon.com/whitepapers/latest/introduction-aws-security/compliance.html'),
	fuente('Amazon EC2 instance types', 'Conceptos', 'https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html'),
	fuente('AWS global infrastructure', 'Conceptos', 'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/global-infrastructure.html'),
	fuente('Infrastructure as code (IaC)', 'Conceptos', 'https://docs.aws.amazon.com/whitepapers/latest/introduction-devops-aws/infrastructure-as-code.html'),
	fuente('AWS pricing models', 'Conceptos', 'https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/select-the-best-pricing-model.html'),
	fuente('AWS shared responsibility model', 'Conceptos', 'https://docs.aws.amazon.com/whitepapers/latest/aws-risk-and-compliance/shared-responsibility-model.html'),
	fuente('AWS Support plans', 'Conceptos', 'https://docs.aws.amazon.com/awssupport/latest/user/aws-support-plans.html'),
	fuente('AWS Partner Network (APN)', 'Conceptos', 'https://docs.aws.amazon.com/partner-central/latest/getting-started/becoming.html'),
	fuente('AWS Prescriptive Guidance', 'Conceptos', 'https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/welcome.html'),
	fuente('AWS Pricing Calculator', 'Conceptos', 'https://docs.aws.amazon.com/pricing-calculator/latest/userguide/what-is-pricing-calculator.html'),
	fuente('AWS Professional Services', 'Conceptos', 'https://docs.aws.amazon.com/whitepapers/latest/public-sector-cloud-transformation/aws-professional-services.html'),
	fuente('AWS SDKs', 'Conceptos', 'https://docs.aws.amazon.com/sdkref/latest/guide/overview.html'),
	fuente('AWS Support Center', 'Conceptos', 'https://docs.aws.amazon.com/awssupport/latest/user/accessing-support.html'),
	fuente('Reserved Instances', 'Conceptos', 'https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-reserved-instances.html'),
	fuente('On-Demand Instances', 'Conceptos', 'https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-on-demand-instances.html'),
	fuente('Spot Instances', 'Conceptos', 'https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-spot-instances.html'),
	fuente('Availability Zones', 'Conceptos', 'https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html'),
	fuente('AWS Regions', 'Conceptos', 'https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html'),
	// Supporting terms del material oficial (D7)
	fuente('DynamoDB Accelerator (DAX)', 'Supporting terms', 'https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.html'),
	fuente('Elastic Load Balancing (ELB)', 'Supporting terms', 'https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/what-is-load-balancing.html'),
	fuente('AWS Systems Manager OpsCenter', 'Supporting terms', 'https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html'),
	// Analytics
	fuente('Amazon Athena', 'Analytics', 'https://docs.aws.amazon.com/athena/'),
	fuente('Amazon EMR', 'Analytics', 'https://docs.aws.amazon.com/emr/'),
	fuente('AWS Glue', 'Analytics', 'https://docs.aws.amazon.com/glue/'),
	fuente('Amazon Kinesis', 'Analytics', 'https://docs.aws.amazon.com/kinesis/'),
	fuente('Amazon OpenSearch Service', 'Analytics', 'https://docs.aws.amazon.com/opensearch-service/'),
	fuente('Amazon Quick Sight', 'Analytics', 'https://docs.aws.amazon.com/quicksight/'),
	fuente('Amazon Redshift', 'Analytics', 'https://docs.aws.amazon.com/redshift/'),
	// Application Integration
	fuente('Amazon EventBridge', 'Application Integration', 'https://docs.aws.amazon.com/eventbridge/'),
	fuente('Amazon Simple Notification Service (Amazon SNS)', 'Application Integration', 'https://docs.aws.amazon.com/sns/'),
	fuente('Amazon Simple Queue Service (Amazon SQS)', 'Application Integration', 'https://docs.aws.amazon.com/sqs/'),
	fuente('AWS Step Functions', 'Application Integration', 'https://docs.aws.amazon.com/step-functions/'),
	// Business Applications
	fuente('Amazon Connect', 'Business Applications', 'https://docs.aws.amazon.com/connect/'),
	fuente('Amazon Simple Email Service (Amazon SES)', 'Business Applications', 'https://docs.aws.amazon.com/ses/'),
	// Cloud Financial Management
	fuente('AWS Budgets', 'Cloud Financial Management', 'https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/budgets-managing-costs.html'),
	fuente('AWS Cost and Usage Reports', 'Cloud Financial Management', 'https://docs.aws.amazon.com/cur/latest/userguide/what-is-cur.html'),
	fuente('AWS Cost Explorer', 'Cloud Financial Management', 'https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-what-is.html'),
	fuente('AWS Marketplace', 'Cloud Financial Management', 'https://docs.aws.amazon.com/marketplace/'),
	// Compute
	fuente('AWS Batch', 'Compute', 'https://docs.aws.amazon.com/batch/'),
	fuente('Amazon EC2', 'Compute', 'https://docs.aws.amazon.com/ec2/'),
	fuente('AWS Elastic Beanstalk', 'Compute', 'https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/Welcome.html'),
	fuente('Amazon Lightsail', 'Compute', 'https://docs.aws.amazon.com/lightsail/'),
	fuente('AWS Outposts', 'Compute', 'https://docs.aws.amazon.com/outposts/'),
	// Containers
	fuente('Amazon Elastic Container Registry (Amazon ECR)', 'Containers', 'https://docs.aws.amazon.com/ecr/'),
	fuente('Amazon Elastic Container Service (Amazon ECS)', 'Containers', 'https://docs.aws.amazon.com/ecs/'),
	fuente('Amazon Elastic Kubernetes Service (Amazon EKS)', 'Containers', 'https://docs.aws.amazon.com/eks/'),
	// Customer Enablement
	fuente('AWS Support', 'Customer Enablement', 'https://docs.aws.amazon.com/awssupport/latest/user/getting-started.html'),
	// Database
	fuente('Amazon Aurora', 'Database', 'https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html'),
	fuente('Amazon DocumentDB', 'Database', 'https://docs.aws.amazon.com/documentdb/'),
	fuente('Amazon DynamoDB', 'Database', 'https://docs.aws.amazon.com/dynamodb/'),
	fuente('Amazon ElastiCache', 'Database', 'https://docs.aws.amazon.com/elasticache/'),
	fuente('Amazon Neptune', 'Database', 'https://docs.aws.amazon.com/neptune/'),
	fuente('Amazon RDS', 'Database', 'https://docs.aws.amazon.com/rds/'),
	// Developer Tools
	fuente('AWS CLI', 'Developer Tools', 'https://docs.aws.amazon.com/cli/'),
	fuente('AWS CodeBuild', 'Developer Tools', 'https://docs.aws.amazon.com/codebuild/'),
	fuente('AWS CodePipeline', 'Developer Tools', 'https://docs.aws.amazon.com/codepipeline/'),
	fuente('AWS X-Ray', 'Developer Tools', 'https://docs.aws.amazon.com/xray/'),
	// End User Computing
	fuente('Amazon AppStream 2.0', 'End User Computing', 'https://docs.aws.amazon.com/appstream2/'),
	fuente('Amazon WorkSpaces', 'End User Computing', 'https://docs.aws.amazon.com/workspaces/'),
	fuente('Amazon WorkSpaces Secure Browser', 'End User Computing', 'https://docs.aws.amazon.com/workspaces-web/'),
	// Frontend Web and Mobile
	fuente('AWS Amplify', 'Frontend Web and Mobile', 'https://docs.aws.amazon.com/amplify/'),
	// Internet of Things (IoT)
	fuente('AWS IoT Core', 'Internet of Things (IoT)', 'https://docs.aws.amazon.com/iot/'),
	// Machine Learning
	fuente('Amazon Comprehend', 'Machine Learning', 'https://docs.aws.amazon.com/comprehend/'),
	fuente('Amazon Lex', 'Machine Learning', 'https://docs.aws.amazon.com/lex/'),
	fuente('Amazon Polly', 'Machine Learning', 'https://docs.aws.amazon.com/polly/'),
	fuente('Amazon Q', 'Machine Learning', 'https://docs.aws.amazon.com/amazonq/'),
	fuente('Amazon Rekognition', 'Machine Learning', 'https://docs.aws.amazon.com/rekognition/'),
	fuente('Amazon SageMaker AI', 'Machine Learning', 'https://docs.aws.amazon.com/sagemaker/'),
	fuente('Amazon Textract', 'Machine Learning', 'https://docs.aws.amazon.com/textract/'),
	fuente('Amazon Transcribe', 'Machine Learning', 'https://docs.aws.amazon.com/transcribe/'),
	fuente('Amazon Translate', 'Machine Learning', 'https://docs.aws.amazon.com/translate/'),
	// Management and Governance
	fuente('AWS Auto Scaling', 'Management and Governance', 'https://docs.aws.amazon.com/autoscaling/'),
	fuente('AWS CloudFormation', 'Management and Governance', 'https://docs.aws.amazon.com/cloudformation/'),
	fuente('AWS CloudTrail', 'Management and Governance', 'https://docs.aws.amazon.com/cloudtrail/'),
	fuente('Amazon CloudWatch', 'Management and Governance', 'https://docs.aws.amazon.com/cloudwatch/'),
	fuente('AWS Compute Optimizer', 'Management and Governance', 'https://docs.aws.amazon.com/compute-optimizer/'),
	fuente('AWS Config', 'Management and Governance', 'https://docs.aws.amazon.com/config/'),
	fuente('AWS Control Tower', 'Management and Governance', 'https://docs.aws.amazon.com/controltower/'),
	fuente('AWS Health Dashboard', 'Management and Governance', 'https://docs.aws.amazon.com/health/'),
	fuente('AWS License Manager', 'Management and Governance', 'https://docs.aws.amazon.com/license-manager/'),
	fuente('AWS Management Console', 'Management and Governance', 'https://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/what-is.html'),
	fuente('AWS Organizations', 'Management and Governance', 'https://docs.aws.amazon.com/organizations/'),
	fuente('AWS Service Catalog', 'Management and Governance', 'https://docs.aws.amazon.com/servicecatalog/'),
	fuente('Service Quotas', 'Management and Governance', 'https://docs.aws.amazon.com/servicequotas/'),
	fuente('AWS Systems Manager', 'Management and Governance', 'https://docs.aws.amazon.com/systems-manager/'),
	fuente('AWS Trusted Advisor', 'Management and Governance', 'https://docs.aws.amazon.com/awssupport/latest/user/trusted-advisor.html'),
	fuente('AWS Well-Architected Tool', 'Management and Governance', 'https://docs.aws.amazon.com/wellarchitected/'),
	// Migration and Transfer
	fuente('AWS Application Discovery Service', 'Migration and Transfer', 'https://docs.aws.amazon.com/application-discovery/'),
	fuente('AWS Application Migration Service', 'Migration and Transfer', 'https://docs.aws.amazon.com/mgn/'),
	fuente('AWS Database Migration Service (AWS DMS)', 'Migration and Transfer', 'https://docs.aws.amazon.com/dms/'),
	fuente('Migration Evaluator', 'Migration and Transfer', 'https://aws.amazon.com/migration-evaluator/'),
	fuente('AWS Migration Hub', 'Migration and Transfer', 'https://docs.aws.amazon.com/migrationhub/'),
	fuente('AWS Schema Conversion Tool (AWS SCT)', 'Migration and Transfer', 'https://docs.aws.amazon.com/SchemaConversionTool/'),
	// Networking and Content Delivery
	fuente('Amazon API Gateway', 'Networking and Content Delivery', 'https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html'),
	fuente('Amazon CloudFront', 'Networking and Content Delivery', 'https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html'),
	fuente('AWS Direct Connect', 'Networking and Content Delivery', 'https://docs.aws.amazon.com/directconnect/latest/UserGuide/Welcome.html'),
	fuente('AWS Global Accelerator', 'Networking and Content Delivery', 'https://docs.aws.amazon.com/global-accelerator/latest/dg/what-is-global-accelerator.html'),
	fuente('AWS PrivateLink', 'Networking and Content Delivery', 'https://docs.aws.amazon.com/vpc/latest/privatelink/what-is-privatelink.html'),
	fuente('Amazon Route 53', 'Networking and Content Delivery', 'https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html'),
	fuente('AWS Transit Gateway', 'Networking and Content Delivery', 'https://docs.aws.amazon.com/vpc/latest/tgw/what-is-transit-gateway.html'),
	fuente('Amazon VPC', 'Networking and Content Delivery', 'https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html'),
	fuente('AWS VPN', 'Networking and Content Delivery', 'https://docs.aws.amazon.com/vpn/'),
	fuente('AWS Site-to-Site VPN', 'Networking and Content Delivery', 'https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html'),
	fuente('AWS Client VPN', 'Networking and Content Delivery', 'https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/what-is.html'),
	// Security, Identity, and Compliance
	fuente('AWS Artifact', 'Security, Identity, and Compliance', 'https://docs.aws.amazon.com/artifact/'),
	fuente('AWS Certificate Manager (ACM)', 'Security, Identity, and Compliance', 'https://docs.aws.amazon.com/acm/'),
	fuente('AWS CloudHSM', 'Security, Identity, and Compliance', 'https://docs.aws.amazon.com/cloudhsm/'),
	fuente('Amazon Cognito', 'Security, Identity, and Compliance', 'https://docs.aws.amazon.com/cognito/'),
	fuente('Amazon Detective', 'Security, Identity, and Compliance', 'https://docs.aws.amazon.com/detective/'),
	fuente('AWS Directory Service', 'Security, Identity, and Compliance', 'https://docs.aws.amazon.com/directoryservice/latest/admin-guide/what_is.html'),
	fuente('AWS Firewall Manager', 'Security, Identity, and Compliance', 'https://docs.aws.amazon.com/firewall-manager/'),
	fuente('Amazon GuardDuty', 'Security, Identity, and Compliance', 'https://docs.aws.amazon.com/guardduty/'),
	fuente('AWS Identity and Access Management (IAM)', 'Security, Identity, and Compliance', 'https://docs.aws.amazon.com/iam/'),
	fuente('AWS IAM Identity Center', 'Security, Identity, and Compliance', 'https://docs.aws.amazon.com/singlesignon/'),
	fuente('Amazon Inspector', 'Security, Identity, and Compliance', 'https://docs.aws.amazon.com/inspector/'),
	fuente('AWS Key Management Service (AWS KMS)', 'Security, Identity, and Compliance', 'https://docs.aws.amazon.com/kms/'),
	fuente('Amazon Macie', 'Security, Identity, and Compliance', 'https://docs.aws.amazon.com/macie/'),
	fuente('AWS Resource Access Manager (AWS RAM)', 'Security, Identity, and Compliance', 'https://docs.aws.amazon.com/ram/latest/userguide/what-is.html'),
	fuente('AWS Secrets Manager', 'Security, Identity, and Compliance', 'https://docs.aws.amazon.com/secretsmanager/'),
	fuente('AWS Security Hub', 'Security, Identity, and Compliance', 'https://docs.aws.amazon.com/securityhub/'),
	fuente('AWS Shield', 'Security, Identity, and Compliance', 'https://docs.aws.amazon.com/shield/'),
	fuente('AWS WAF', 'Security, Identity, and Compliance', 'https://docs.aws.amazon.com/waf/'),
	// Serverless
	fuente('AWS Fargate', 'Serverless', 'https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html'),
	fuente('AWS Lambda', 'Serverless', 'https://docs.aws.amazon.com/lambda/latest/dg/welcome.html'),
	// Storage
	fuente('AWS Backup', 'Storage', 'https://docs.aws.amazon.com/aws-backup/'),
	fuente('Amazon Elastic Block Store (Amazon EBS)', 'Storage', 'https://docs.aws.amazon.com/ebs/'),
	fuente('Amazon Elastic File System (Amazon EFS)', 'Storage', 'https://docs.aws.amazon.com/efs/'),
	fuente('AWS Elastic Disaster Recovery', 'Storage', 'https://docs.aws.amazon.com/drs/'),
	fuente('Amazon FSx', 'Storage', 'https://docs.aws.amazon.com/fsx/'),
	fuente('Amazon S3', 'Storage', 'https://docs.aws.amazon.com/s3/'),
	fuente('Amazon S3 Glacier', 'Storage', 'https://docs.aws.amazon.com/amazonglacier/latest/dev/introduction.html'),
	fuente('AWS Storage Gateway', 'Storage', 'https://docs.aws.amazon.com/storagegateway/'),
];

export const FUENTES_OFICIALES: Record<string, FuenteOficialClfC02> = Object.fromEntries(
	ENTRADAS.map((entrada) => [entrada.etiqueta, entrada]),
);

export const URLS_FUENTES_OFICIALES: ReadonlySet<string> = new Set(
	ENTRADAS.map((entrada) => entrada.url),
);

/** URL oficial del servicio in-scope (null si no está registrado). */
export function urlDeServicio(nombre: string): string | null {
	return FUENTES_OFICIALES[nombre]?.url ?? null;
}

export const URL_GUIA_EXAMEN =
	FUENTES_OFICIALES['Guía oficial del examen CLF-C02'].url;
