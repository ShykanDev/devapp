import { EXAM_DIFFICULTY_COUNTS, type DifficultyId } from '@/schemas/examen';

export interface TaskStatementAifC01 {
	id: string;
	titulo: string;
	objectives: string[];
}

export interface DominioAifC01 {
	id: string;
	numero: number;
	nombre: string;
	nombreEs: string;
	peso: number;
	descripcion: string;
	taskStatements: TaskStatementAifC01[];
}

export interface TaskStatementPlanoAifC01 extends TaskStatementAifC01 {
	dominioId: string;
	dominioNumero: number;
	pesoDominio: number;
}

export interface SimulacroAifC01 {
	id: string;
	titulo: string;
	topic: string;
	dificultad: DifficultyId;
	preguntas: number;
}

export const certificadoAifC01 = {
	codigo: 'AIF-C01',
	nombre: 'AWS Certified AI Practitioner',
	nivel: 'Foundational',
	dominio: 'AI, ML y IA generativa en AWS',
	duracionMinutos: 90,
	preguntasTotales: 65,
	preguntasPuntuadas: 50,
	preguntasNoPuntuadas: 15,
	escala: '100-1000',
	notaAprobacion: 700,
	vigenciaAnios: 3,
	fuente:
		'https://docs.aws.amazon.com/aws-certification/latest/ai-practitioner-01/ai-practitioner-01.html',
	revisado: '2026-09-16',
};

export const dominiosAifC01: DominioAifC01[] = [
	{
		id: 'dominio-1',
		numero: 1,
		nombre: 'Fundamentals of AI and ML',
		nombreEs: 'Fundamentos de AI y ML',
		peso: 20,
		descripcion:
			'Terminología, casos de uso reales y el ciclo de vida de un proyecto de AI/ML en AWS.',
		taskStatements: [
			{
				id: '1.1',
				titulo: 'Explain basic AI concepts and terminologies.',
				objectives: [
					'Define basic AI terms (for example, AI, ML, deep learning, neural networks, computer vision, natural language processing [NLP], model, algorithm, training and inferencing, bias, fairness, fit, large language model [LLM], generative AI [GenAI], agentic AI).',
					'Describe the similarities and differences between AI, ML, GenAI, deep learning, and agentic AI.',
					'Describe various types of inferencing (for example, batch, real-time, asynchronous, serverless).',
					'Describe the different types of data in AI models (for example, labeled and unlabeled, tabular, time-series, image, text, structured and unstructured).',
					'Describe different types of AI/ML learning (for example, supervised learning, unsupervised learning, reinforcement learning methods).',
				],
			},
			{
				id: '1.2',
				titulo: 'Identify practical use cases for AI.',
				objectives: [
					'Recognize applications where AI/ML can provide value (for example, assist human decision making, solution scalability, automation).',
					'Determine when AI/ML solutions are not appropriate (for example, cost-benefit analyses, situations when a specific outcome is needed instead of a prediction).',
					'Select the appropriate AI/ML techniques for specific use cases (for example, regression, classification, clustering).',
					'Identify examples of real-world AI applications (for example, computer vision, NLP, speech recognition, recommendation systems, fraud detection, forecasting, knowledge bases, agentic AI).',
					'Explain the capabilities of AWS managed AI/ML services (for example, Amazon SageMaker AI, Amazon Transcribe, Amazon Translate, Amazon Comprehend, Amazon Lex, Amazon Polly).',
					'Identify when traditional ML models or foundation models (FMs) are appropriate for a specific use case (for example, based on regulatory concerns, explainability requirements, operational constraints).',
				],
			},
			{
				id: '1.3',
				titulo: 'Describe the AI/ML development lifecycle.',
				objectives: [
					'Describe and differentiate components of an AI/ML pipeline.',
					'Describe sources of FM models (for example, open source pre-trained models, training custom models).',
					'Describe methods to use a model in production (for example, managed API service, self-hosted API).',
					'Identify relevant AWS services and features for each stage of an AI/ML pipeline (for example, Amazon Bedrock, Amazon Quick, Kiro, SageMaker AI).',
					'Describe fundamental concepts of ML operations (MLOps) (for example, experimentation, repeatable processes, scalable systems, managing technical debt, achieving production readiness, model monitoring, model re-training).',
					'Describe model performance metrics (for example, accuracy, precision, recall, F1 score) and business metrics (for example, cost per user, development costs, customer feedback, return on investment [ROI]) to evaluate ML models.',
				],
			},
		],
	},
	{
		id: 'dominio-2',
		numero: 2,
		nombre: 'Fundamentals of GenAI',
		nombreEs: 'Fundamentos de IA generativa',
		peso: 24,
		descripcion:
			'Conceptos de GenAI, FM lifecycle, coste por tokens, límites de los modelos y servicios de AWS para construir.',
		taskStatements: [
			{
				id: '2.1',
				titulo: 'Explain the basic concepts of generative AI (GenAI).',
				objectives: [
					'Define foundational GenAI concepts (for example, tokens, chunking, embeddings, vectors, prompt engineering, transformer-based large language models [LLMs], foundation models [FMs], multi-modal models, diffusion models).',
					'Identify potential use cases for GenAI models (for example, image, video, and audio generation; summarization; AI assistants; translation; code generation; customer service agents; search; recommendation engines).',
					'Describe the FM lifecycle (for example, data selection, model selection, pre-training, fine-tuning, evaluation, deployment, feedback).',
					'Describe the token-based pricing model and its effect on cost and performance for inference.',
					'Describe the role of context engineering in FM applications.',
					'Define foundational agentic AI concepts (for example, multi-agent system patterns for complex AI applications, Model Context Protocol [MCP] and its role in connecting agents to external systems, multi-agent communication patterns, memory management, tool usage, and workflow orchestration).',
				],
			},
			{
				id: '2.2',
				titulo: 'Understand the capabilities and limitations of GenAI for solving business problems.',
				objectives: [
					'Describe the advantages of GenAI (for example, adaptability, responsiveness, conversational capabilities, ability to generate content).',
					'Identify disadvantages of GenAI solutions (for example, hallucinations, interpretability, inaccuracy, nondeterminism).',
					'Identify factors to consider when selecting GenAI models (for example, model types, performance requirements, capabilities, constraints, compliance, cost, latency, model complexity).',
					'Determine business value and metrics for GenAI applications (for example, cross-domain performance, ROI, efficiency, conversion rate, average revenue per user, accuracy, customer lifetime value).',
				],
			},
			{
				id: '2.3',
				titulo: 'Describe AWS infrastructure and technologies for building GenAI applications.',
				objectives: [
					'Identify AWS services and features to develop GenAI applications (for example, Amazon Bedrock, Amazon SageMaker AI, SageMaker JumpStart, Amazon Quick, Kiro, Strands Agents, Amazon Bedrock AgentCore).',
					'Describe the advantages of using AWS GenAI services to build applications (for example, accessibility, lower barrier to entry, efficiency, cost-effectiveness, speed to market, ability to meet business objectives).',
					'Describe the benefits of AWS infrastructure for GenAI applications (for example, security, compliance, responsibility, safety).',
					'Describe cost tradeoffs of AWS GenAI services (for example, responsiveness, availability, redundancy, performance, regional coverage, token-based pricing, provision throughput, custom models).',
				],
			},
		],
	},
	{
		id: 'dominio-3',
		numero: 3,
		nombre: 'Applications of Foundation Models',
		nombreEs: 'Aplicaciones de los modelos fundacionales',
		peso: 28,
		descripcion:
			'El dominio más pesado: selección de FMs, prompt engineering, fine-tuning, RAG, agentes y evaluación.',
		taskStatements: [
			{
				id: '3.1',
				titulo: 'Describe design considerations for applications that use foundation models (FMs).',
				objectives: [
					'Identify selection criteria to choose FMs (for example, cost, modality, latency, multi-lingual, model size, model complexity, customization, input/output length, prompt caching).',
					'Describe the effect of inference parameters on model responses (for example, temperature, input/output length).',
					'Define Retrieval Augmented Generation (RAG) and describe its business applications (for example, Amazon Bedrock Knowledge Bases).',
					'Identify AWS services that help store embeddings within vector databases (for example, Amazon OpenSearch Service, Amazon Aurora, Amazon Neptune, Amazon RDS for PostgreSQL).',
					'Explain the cost tradeoffs of various approaches to FM customization (for example, pre-training, fine-tuning, in-context learning, RAG, model distillation).',
					'Define the role of AI agents and describe AI agents\' business applications.',
				],
			},
			{
				id: '3.2',
				titulo: 'Choose effective prompt engineering techniques.',
				objectives: [
					'Define the concepts and constructs of prompt engineering (for example, context, instruction, negative prompts).',
					'Define techniques for prompt engineering (for example, chain-of-thought, zero-shot, single-shot, few-shot, prompt templates).',
					'Identify and describe the benefits and best practices for prompt engineering (for example, response quality improvement, experimentation, guardrails, discovery, specificity and concision, using multiple comments).',
					'Define potential risks and limitations of prompt engineering (for example, exposure, poisoning, hijacking, jailbreaking).',
					'Describe prompt versioning and management strategies that use Amazon Bedrock Prompt Management.',
				],
			},
			{
				id: '3.3',
				titulo: 'Describe the training and fine-tuning process for FMs.',
				objectives: [
					'Describe the key elements of training an FM (for example, pre-training, fine-tuning, continuous pre-training, distillation).',
					'Define methods for fine-tuning an FM (for example, instruction tuning, adapting models for specific domains, transfer learning, continuous pre-training).',
					'Describe how to prepare data to fine-tune an FM (for example, data curation, governance, size, labeling, representativeness, reinforcement learning from human feedback [RLHF]).',
				],
			},
			{
				id: '3.4',
				titulo: 'Describe methods to evaluate FM performance.',
				objectives: [
					'Determine approaches to evaluate FM performance (for example, human-in-the-loop evaluation, benchmark datasets, Amazon Bedrock Model Evaluation).',
					'Identify relevant metrics to assess FM performance (for example, Recall-Oriented Understudy for Gisting Evaluation [ROUGE], Bilingual Evaluation Understudy [BLEU], BERTScore, LLM-as-a-judge).',
					'Determine whether an FM effectively meets business objectives (for example, productivity, user engagement, task engineering).',
					'Identify approaches to evaluate the performance of applications built with FM (for example, RAG, agents, workflows).',
					'Identify business objective alignment metrics for AI applications (for example, task completion rate, user satisfaction, cost per interaction).',
				],
			},
		],
	},
	{
		id: 'dominio-4',
		numero: 4,
		nombre: 'Guidelines for Responsible AI',
		nombreEs: 'Directrices de IA responsable',
		peso: 14,
		descripcion:
			'Sesgo y fairness, riesgos legales, datasets, transparencia, explicabilidad e IA centrada en humanos.',
		taskStatements: [
			{
				id: '4.1',
				titulo: 'Explain the development of AI systems that are responsible.',
				objectives: [
					'Identify features of responsible AI (for example, bias, fairness, inclusivity, robustness, safety, veracity).',
					'Explain how to use tools to identify features of responsible AI (for example, Amazon Bedrock Guardrails).',
					'Define responsible practices to select a model (for example, environmental considerations, sustainability).',
					'Identify legal risks of working with generative AI (GenAI) (for example, intellectual property infringement claims, biased model outputs, loss of customer trust, end user risk, hallucinations).',
					'Identify characteristics of datasets (for example, inclusivity, diversity, curated data sources, balanced datasets).',
					'Describe effects of bias and variance (for example, effects on demographic groups, inaccuracy, overfitting, underfitting).',
					'Describe tools to detect and monitor bias, trustworthiness, and truthfulness (for example, analyzing label quality, human audits, subgroup analysis).',
				],
			},
			{
				id: '4.2',
				titulo: 'Recognize the importance of transparent and explainable models.',
				objectives: [
					'Describe the differences between models that are transparent and explainable and models that are not transparent and explainable.',
					'Describe tools to identify transparent and explainable models (for example, Amazon SageMaker Model Cards, Amazon Bedrock Model Evaluations, open source models, data, licensing).',
					'Identify tradeoffs between model safety and transparency (for example, measure interpretability and performance).',
					'Describe principles of human-centered design for explainable AI (for example, user-feedback mechanisms, AI decision transparency).',
				],
			},
		],
	},
	{
		id: 'dominio-5',
		numero: 5,
		nombre: 'Security, Compliance, and Governance for AI Solutions',
		nombreEs: 'Seguridad, cumplimiento y gobernanza',
		peso: 14,
		descripcion:
			'Seguridad de sistemas de AI, prompt injection, grounding, gobernanza de datos y marcos de cumplimiento.',
		taskStatements: [
			{
				id: '5.1',
				titulo: 'Explain methods to secure AI systems.',
				objectives: [
					'Identify AWS services and features to secure AI systems (for example, IAM roles, policies, and permissions; encryption; Amazon Macie; AWS PrivateLink; AWS shared responsibility model; Amazon Bedrock AgentCore Identity; Policy in AgentCore; Amazon Bedrock Guardrails).',
					'Describe the concept of source citation and documenting data origins (for example, data lineage, data cataloging, Amazon SageMaker Model Cards).',
					'Describe best practices for secure data engineering (for example, assessing data quality, implementing privacy-enhancing technologies, data access control, data integrity).',
					'Describe security and privacy considerations for AI systems (for example, application security, threat detection, vulnerability management, infrastructure protection, prompt injection, encryption at rest and in transit, data leakage prevention, output filtering and validation, audit trail and logging requirements for AI interactions, toxicity).',
					'Describe hallucination detection methods and grounding techniques to improve output accuracy (for example, Retrieval Augmented Generation [RAG] grounding, output validation, confidence scoring).',
				],
			},
			{
				id: '5.2',
				titulo: 'Recognize governance and compliance regulations for AI systems.',
				objectives: [
					'Identify AWS services and features to assist with governance and regulation compliance (for example, AWS Config, Amazon Inspector, AWS Artifact, AWS CloudTrail, AWS Trusted Advisor).',
					'Describe data governance strategies (for example, data lifecycles, logging, residency, monitoring, observation, retention).',
					'Describe processes to follow governance protocols (for example, policies, review cadence, review strategies, governance frameworks such as the Generative AI Security Scoping Matrix, transparency standards, team training requirements).',
				],
			},
		],
	},
];

export const serviciosEnAlcanceAifC01: Record<string, string[]> = {
	'Machine Learning': [
		'Amazon Bedrock',
		'Amazon Bedrock AgentCore',
		'Amazon Comprehend',
		'Amazon Lex',
		'Amazon Nova',
		'Amazon Personalize',
		'Amazon Polly',
		'Amazon Rekognition',
		'Amazon SageMaker AI',
		'Amazon SageMaker JumpStart',
		'Amazon Textract',
		'Amazon Transcribe',
		'Amazon Translate',
		'AWS Transform',
	],
	Analytics: [
		'AWS Data Exchange',
		'Amazon EMR',
		'AWS Glue',
		'AWS Glue DataBrew',
		'AWS Lake Formation',
		'Amazon OpenSearch Service',
		'Amazon Quick',
		'Amazon Redshift',
	],
	'Developer Tools': ['Kiro', 'Strands Agents'],
	Compute: ['Amazon EC2', 'AWS Lambda'],
	Containers: ['Amazon ECS', 'Amazon EKS'],
	Database: [
		'Amazon Aurora',
		'Amazon DocumentDB',
		'Amazon DynamoDB',
		'Amazon ElastiCache',
		'Amazon Neptune',
		'Amazon RDS',
	],
	Storage: ['Amazon S3', 'Amazon S3 Glacier'],
	'Management and Governance': [
		'AWS CloudTrail',
		'Amazon CloudWatch',
		'AWS Config',
		'AWS Trusted Advisor',
		'AWS Well-Architected Tool',
	],
	'Networking and Content Delivery': ['Amazon CloudFront', 'Amazon VPC'],
	'Security, Identity, and Compliance': [
		'AWS Artifact',
		'AWS Identity and Access Management (IAM)',
		'Amazon Inspector',
		'AWS Key Management Service (AWS KMS)',
		'Amazon Macie',
		'AWS Secrets Manager',
	],
	'Cloud Financial Management': ['AWS Budgets', 'AWS Cost Explorer'],
};

export const taskStatementsAifC01: TaskStatementPlanoAifC01[] = dominiosAifC01.flatMap(
	(dominio) =>
		dominio.taskStatements.map((taskStatement) => ({
			...taskStatement,
			dominioId: dominio.id,
			dominioNumero: dominio.numero,
			pesoDominio: dominio.peso,
		})),
);

export const sugerenciasPorDominioAifC01: Record<string, string[]> = Object.fromEntries(
	dominiosAifC01.map((dominio) => [
		dominio.id,
		dominio.taskStatements.map((taskStatement) => `${taskStatement.id} ${taskStatement.titulo}`),
	]),
);

export const simulacrosAifC01: SimulacroAifC01[] = [
	...dominiosAifC01.map((dominio) => ({
		id: `simulacro-${dominio.id}`,
		titulo: `Simulacro ${dominio.nombreEs}`,
		topic: `${certificadoAifC01.codigo} ${dominio.nombre} (${dominio.peso}% del examen): ${dominio.descripcion}`,
		dificultad: 'media' as DifficultyId,
		preguntas: EXAM_DIFFICULTY_COUNTS.media,
	})),
	{
		id: 'simulacro-final',
		titulo: `Simulacro final ${certificadoAifC01.codigo}`,
		topic: `${certificadoAifC01.codigo} simulacro final: cubre los 5 dominios del examen con su peso real (${dominiosAifC01
			.map((dominio) => `${dominio.nombreEs} ${dominio.peso}%`)
			.join(', ')}).`,
		dificultad: 'dificil',
		preguntas: EXAM_DIFFICULTY_COUNTS.dificil,
	},
];

export function temaDeTarea(taskStatement: TaskStatementPlanoAifC01): string {
	const objetivos = taskStatement.objectives.join(' ');
	return `${certificadoAifC01.codigo} Dominio ${taskStatement.dominioNumero} (${taskStatement.pesoDominio}%) - Task ${taskStatement.id} ${taskStatement.titulo} Cubre exactamente estos objetivos del exam guide: ${objetivos}`;
}

/* ---------------------------------------------------------------------------
   Extensión del blueprint para el módulo de estudio.
   Solo añade profundidad y el índice de objetivos (69): el texto de cada
   objective se deriva del blueprint por índice, nunca se transcribe.
--------------------------------------------------------------------------- */

export type ProfundidadAifC01 = 'esencial' | 'estandar' | 'critico';

export interface ObjetivoAifC01 {
	/** Id del Task Statement al que pertenece, p. ej. '3.2'. */
	taskId: string;
	/** Posición 1-based dentro de `taskStatements[].objectives`. */
	index: number;
	/** Texto oficial del objective, verbatim desde el blueprint. */
	titulo: string;
	profundidad: ProfundidadAifC01;
	/** Conceptos citados en el propio objective (chips derivados del texto). */
	conceptos: string[];
}

/**
 * Objectives marcados como `critico`. Agrupa los 9 temas críticos acordados
 * en el plan expandidos a los objectives que realmente los cubren, de modo
 * que la regla "critico ⇒ comparación + escenario + error común" sea
 * verificable objective a objective.
 */
export const OBJETIVOS_CRITICOS_AIFC01: ReadonlySet<string> = new Set([
	'2.1#6',
	'2.3#1',
	'3.1#1',
	'3.1#3',
	'3.1#4',
	'3.2#2',
	'3.2#4',
	'3.2#5',
	'3.3#2',
	'3.3#3',
	'3.4#2',
	'4.1#1',
	'4.1#6',
	'5.1#4',
	'5.1#5',
	'5.2#3',
]);

/**
 * Extrae los conceptos citados entre paréntesis en el texto de un objective.
 * Es puramente derivado: si el blueprint cambia, los chips cambian con él.
 */
export function conceptosDeObjective(objective: string): string[] {
	const conceptos: string[] = [];
	const parentesis = /\((?:for example|e\.g\.|such as|por ejemplo)[,:]?\s*([^)]*)\)/gi;
	let coincidencia: RegExpExecArray | null;
	while ((coincidencia = parentesis.exec(objective)) !== null) {
		for (const parte of coincidencia[1].split(/[;,]/)) {
			const limpio = parte
				.trim()
				.replace(/\.$/, '')
				.replace(/^(?:and|y|o|or)\s+/i, '')
				.trim();
			if (limpio.length > 0 && !conceptos.includes(limpio)) {
				conceptos.push(limpio);
			}
		}
	}
	return conceptos;
}

export function profundidadDeObjective(objetivoId: string): ProfundidadAifC01 {
	return OBJETIVOS_CRITICOS_AIFC01.has(objetivoId) ? 'critico' : 'estandar';
}

export const objetivosAifC01: ObjetivoAifC01[] = taskStatementsAifC01.flatMap(
	(taskStatement) =>
		taskStatement.objectives.map((titulo, posicion) => {
			const id = `${taskStatement.id}#${posicion + 1}`;
			return {
				taskId: taskStatement.id,
				index: posicion + 1,
				titulo,
				profundidad: profundidadDeObjective(id),
				conceptos: conceptosDeObjective(titulo),
			};
		}),
);

export function idObjetivoAifC01(taskId: string, index: number): string {
	return `${taskId}#${index}`;
}
