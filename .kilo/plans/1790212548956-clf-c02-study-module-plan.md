# Plan: módulo de estudio AWS Certified Cloud Practitioner (CLF-C02) en la PWA

## Objetivo

Añadir a la PWA un módulo de estudio autónomo **AWS Certified Cloud Practitioner (CLF-C02)** que replique
la misma arquitectura, sintaxis, componentes, navegación, estados, almacenamiento local y formato de
contenido del módulo existente **AIF-C01**, más un apartado nuevo de **Examen profesional (nivel difícil)**.
El contenido se construye desde el Exam Guide oficial vigente de CLF-C02. **No se modifica ni rompe AIF-C01
ni el resto de la PWA.**

## Decisiones cerradas (acordadas con el usuario)

1. **Namespace paralelo `clfC02`.** Copiar la misma arquitectura en `src/data/clfC02`, `src/views/clfC02`,
   `src/components/clfC02`, `src/lib/clfC02*`. Reutilizar tal cual solo lo agnóstico:
   `src/components/ui/*`, `src/lib/markdown.ts`, `src/schemas/examen.ts`. Cero refactor de AIF-C01.
2. **Granularidad de objectives: 1 bullet oficial = 1 objective (132 en total).** Texto oficial en inglés
   verbatim como `titulo`, numerados `taskId#index` (Knowledge of primero, luego Skills in) igual que AIF.
3. **Examen profesional:** banco dedicado separado, opción única (4 opciones), preguntas trampa con
   distractores muy similares y justificación por opción. 65 preguntas por intento con cuota oficial
   (16/19/22/8), 90 min, sin feedback hasta el final, resultado orientativo vs 700. Sin multiple-response.
4. **Ejecución por fases** con el mecanismo existente `TAREAS_PENDIENTES` ("Contenido en preparación"),
   módulo navegable desde el primer corte. Criterio de terminado: 19/19 tasks con contenido y validación
   en cero.

## Fuentes oficiales (investigadas y fijadas)

- Exam guide CLF-C02: https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html
- Dominios: `.../cloud-practitioner-02-domain1.html` … `domain4.html`
- In-scope: `.../clf-02-in-scope-services.html` · Out-of-scope: `.../clf-02-out-of-scope-services.html`
- Tecnologías y conceptos: `.../clf-technologies-concepts.html`
- Página de certificación: https://aws.amazon.com/certification/certified-cloud-practitioner/

Metadatos: código `CLF-C02`, nivel `Foundational`, 65 preguntas (50 puntuadas + 15 no puntuadas),
90 min, escala 100–1000, aprobado 700, vigencia 3 años. Guardar `fuente` y `revisado` en el descriptor,
igual que `certificadoAifC01` (`src/data/aifC01.ts:33`).

## Blueprint oficial (fuente maestra)

Pesos y Task Statements (19 tasks):

| Dominio | Nombre | Peso | Tasks |
|---|---|---|---|
| dominio-1 | Cloud Concepts | 24 % | 1.1, 1.2, 1.3, 1.4 |
| dominio-2 | Security and Compliance | 30 % | 2.1, 2.2, 2.3, 2.4 |
| dominio-3 | Cloud Technology and Services | 34 % | 3.1 … 3.8 |
| dominio-4 | Billing, Pricing, and Support | 12 % | 4.1, 4.2, 4.3 |

Títulos oficiales de cada Task Statement (usar verbatim; están en las páginas domainN):

- 1.1 Define the benefits of the AWS Cloud.
- 1.2 Identify design principles of the AWS Cloud.
- 1.3 Understand the benefits of and strategies for migration to the AWS Cloud.
- 1.4 Understand concepts of cloud economics.
- 2.1 Understand the AWS shared responsibility model.
- 2.2 Understand AWS Cloud security, governance, and compliance concepts.
- 2.3 Identify AWS access management capabilities.
- 2.4 Identify components and resources for security.
- 3.1 Define methods of deploying and operating in the AWS Cloud.
- 3.2 Define the AWS global infrastructure.
- 3.3 Identify AWS compute services.
- 3.4 Identify AWS database services.
- 3.5 Identify AWS network services.
- 3.6 Identify AWS storage services.
- 3.7 Identify AWS artificial intelligence and machine learning (AI/ML) services and analytics services.
- 3.8 Identify services from other in-scope AWS service categories.
- 4.1 Compare AWS pricing models.
- 4.2 Understand resources for billing, budget, and cost management.
- 4.3 Identify AWS technical resources and AWS Support options.

Objectives (Knowledge of + Skills in, orden del guide): **132** → D1 18 (3/3/4/8), D2 31 (6/9/10/6),
D3 57 (6/8/6/7/5/7/4/14), D4 26 (6/8/12).

Cuotas de examen final/profesional: 24 %→16, 30 %→20, 34 %→22, 12 %→8 (suma 66); restar 1 al dominio con
mayor redondeo al alza (D2, 19.5) ⇒ **16 / 19 / 22 / 8 = 65**. Declarar las cuotas explícitas y validar que
suman 65 (la implementación de AIF calcula `Math.round` por dominio, que aquí daría 66).

Mínimos de banco por dominio (cuota + 2): **18 / 21 / 24 / 10**.

### Servicios in-scope (definir `serviciosEnAlcanceClfC02` por categoría, strings exactos)

- Analytics: Amazon Athena, Amazon EMR, AWS Glue, Amazon Kinesis, Amazon OpenSearch Service,
  Amazon Quick Sight, Amazon Redshift.
- Application Integration: Amazon EventBridge, Amazon Simple Notification Service (Amazon SNS),
  Amazon Simple Queue Service (Amazon SQS), AWS Step Functions.
- Business Applications: Amazon Connect, Amazon Simple Email Service (Amazon SES).
- Cloud Financial Management: AWS Budgets, AWS Cost and Usage Reports, AWS Cost Explorer, AWS Marketplace.
- Compute: AWS Batch, Amazon EC2, AWS Elastic Beanstalk, Amazon Lightsail, AWS Outposts.
- Containers: Amazon Elastic Container Registry (Amazon ECR), Amazon Elastic Container Service (Amazon ECS),
  Amazon Elastic Kubernetes Service (Amazon EKS).
- Customer Enablement: AWS Support.
- Database: Amazon Aurora, Amazon DocumentDB, Amazon DynamoDB, Amazon ElastiCache, Amazon Neptune, Amazon RDS.
- Developer Tools: AWS CLI, AWS CodeBuild, AWS CodePipeline, AWS X-Ray.
- End User Computing: Amazon AppStream 2.0, Amazon WorkSpaces, Amazon WorkSpaces Secure Browser.
- Frontend Web and Mobile: AWS Amplify.
- Internet of Things (IoT): AWS IoT Core.
- Machine Learning: Amazon Comprehend, Amazon Lex, Amazon Polly, Amazon Q, Amazon Rekognition,
  Amazon SageMaker AI, Amazon Textract, Amazon Transcribe, Amazon Translate.
- Management and Governance: AWS Auto Scaling, AWS CloudFormation, AWS CloudTrail, Amazon CloudWatch,
  AWS Compute Optimizer, AWS Config, AWS Control Tower, AWS Health Dashboard, AWS License Manager,
  AWS Management Console, AWS Organizations, AWS Service Catalog, Service Quotas, AWS Systems Manager,
  AWS Trusted Advisor, AWS Well-Architected Tool.
- Migration and Transfer: AWS Application Discovery Service, AWS Application Migration Service,
  AWS Database Migration Service (AWS DMS), Migration Evaluator, AWS Migration Hub,
  AWS Schema Conversion Tool (AWS SCT).
- Networking and Content Delivery: Amazon API Gateway, Amazon CloudFront, AWS Direct Connect,
  AWS Global Accelerator, AWS PrivateLink, Amazon Route 53, AWS Transit Gateway, Amazon VPC, AWS VPN,
  AWS Site-to-Site VPN, AWS Client VPN.
- Security, Identity, and Compliance: AWS Artifact, AWS Certificate Manager (ACM), AWS CloudHSM,
  Amazon Cognito, Amazon Detective, AWS Directory Service, AWS Firewall Manager, Amazon GuardDuty,
  AWS Identity and Access Management (IAM), AWS IAM Identity Center, Amazon Inspector,
  AWS Key Management Service (AWS KMS), Amazon Macie, AWS Resource Access Manager (AWS RAM),
  AWS Secrets Manager, AWS Security Hub, AWS Shield, AWS WAF.
- Serverless: AWS Fargate, AWS Lambda.
- Storage: AWS Backup, Amazon Elastic Block Store (Amazon EBS), Amazon Elastic File System (Amazon EFS),
  AWS Elastic Disaster Recovery, Amazon FSx, Amazon S3, Amazon S3 Glacier, AWS Storage Gateway.

Además, `TECNOLOGIAS_Y_CONCEPTOS_CLFC02` con la lista oficial de "Technologies and Concepts"
(APIs, AWS CAF, IaC, AWS Knowledge Center, AWS re:Post, AWS Prescriptive Guidance, AWS Professional Services,
AWS solutions architects, AWS Partner Network, AWS Support plans, AWS Well-Architected Framework, etc.) y
`serviciosFueraDeAlcanceClfC02` con la lista out-of-scope, usada solo para avisos de validación.

## Mapa de replicación (archivo AIF-C01 → archivo CLF-C02)

| AIF-C01 | CLF-C02 |
|---|---|
| `src/data/aifC01.ts` | `src/data/clfC02.ts` |
| `src/data/aifC01/types.ts` | `src/data/clfC02/types.ts` |
| `src/data/aifC01/blueprint-ext.ts` | `src/data/clfC02/blueprint-ext.ts` |
| `src/data/aifC01/registroContenido.ts` | `src/data/clfC02/registroContenido.ts` |
| `src/data/aifC01/validacion.ts` | `src/data/clfC02/validacion.ts` |
| `src/data/aifC01/cobertura.ts` | `src/data/clfC02/cobertura.ts` |
| `src/data/aifC01/busqueda.ts` | `src/data/clfC02/busqueda.ts` |
| `src/data/aifC01/{grupos,preguntas,tarjetas,comparaciones}/task-N.N.ts` | `src/data/clfC02/{...}/task-N.N.ts` (19 c/u) |
| `src/data/aifC01/glosario/general.ts` | `src/data/clfC02/glosario/general.ts` |
| `src/data/aifC01/servicios/general.ts` | `src/data/clfC02/servicios/general.ts` |
| — | `src/data/clfC02/profesional/{types,registro}.ts` + `profesional/preguntas/task-N.N.ts` |
| `src/lib/aifC01Progress.ts` | `src/lib/clfC02Progress.ts` (clave `devapp:clf-c02:progress`) |
| `src/lib/aifC01Practice.ts` | `src/lib/clfC02Practice.ts` (+ `construirExamenProfesional`) |
| `src/lib/aifC01Index.ts` | `src/lib/clfC02Index.ts` |
| `src/views/aifC01/*.vue` (11) | `src/views/clfC02/*.vue` (11 + `ClfProfessional.vue`) |
| `src/components/aifC01/*.vue` (11) | `src/components/clfC02/*.vue` (11 + `ClfProfessionalResult.vue`) |
| `src/router/index.ts:71-124` | 12 rutas nuevas `/cloud-practitioner/*` (conservar nombres `clf-*`) |
| `src/App.vue:102` | nueva entrada `{ title: 'Cloud Practitioner', url: '/cloud-practitioner', icon: ribbonOutline }` |
| `tests/unit/aifC01.*.spec.ts` | `tests/unit/clfC02.*.spec.ts` |

Renombrar símbolos `Aif*`/`aifC01` → `Clf*`/`clfC02` (p. ej. `DominioClfC02`, `PreguntaClfC02`,
`ClfPracticeRunner`, `useClfC02Progress`). Mantener el mismo orden de campos, nombres de bloques y sintaxis.

### Puntos que hay que parametrizar (AIF los tiene hardcodeados)

- `totalObjetivos = 69`, textos "5 dominios / 14 tasks / 69 objectives" y pesos "20·24·28·14·14"
  (`AifOverview.vue:179`, `AifCoverage.vue`): derivar de `objetivosClfC02`, `taskStatementsClfC02` y pesos.
- Fallback "Task 3.2" en `AifOverview.vue:232`, `AifWeak.vue`, `AifReview.vue`: usar la primera task con
  contenido de CLF.
- Prefijo de rutas y sugerencias de búsqueda (`AifSearch.vue:103`): adaptar a CLF.
- Clave de localStorage y `TipoIntento` (añadir `'profesional'`).
- `PESOS_ESPERADOS`, `TASKS_POR_DOMINIO_ESPERADOS`, `CUOTAS_EXAMEN_FINAL`, totales de `validacion.ts`.

## Examen profesional (apartado nuevo, no se quita nada)

- **Ruta:** `/cloud-practitioner/profesional` (nombre `clf-professional`) → `src/views/clfC02/ClfProfessional.vue`.
- **Entrada:** tarjeta en "Accesos" de `ClfOverview.vue` (junto al examen final). No añadir al menú global.
- **Datos:** `src/data/clfC02/profesional/`
  - `types.ts`: `PreguntaProfesionalClfC02 extends ExamenQuestion` con `id` (`prof-N.N-qN`), `taskId`,
    `objetivos: string[]`, `tipo: 'trampa' | 'comparacion' | 'escenario' | 'tradeoff' | 'multiConcepto' | 'servicio'`,
    `explanation` (obligatoria) y `porQueOpcion?: string[]` (longitud 4, justifica por qué cada distractor
    similar es incorrecto; alineado a `options`).
  - `preguntas/task-N.N.ts` (19 archivos) con consts `profesionalTask11`, etc. + `registro.ts` que agrega
    `PREGUNTAS_PROFESIONAL_POR_TASK`, `TODAS_LAS_PREGUNTAS_PROFESIONAL`, `MAPA_PROFESIONAL`.
- **Banco objetivo ~130** (recomendado ≈ 2× cuota: 32/38/44/16), mínimo validado = cuota+2 (18/21/24/10).
- **Builder:** `construirExamenProfesional({ rng })` en `src/lib/clfC02Practice.ts` con `CUOTAS_PROFESIONAL`
  (16/19/22/8), falla con motivo claro si el banco no cubre la cuota (mismo patrón que `construirExamenFinal`).
- **UI:**
  - Portada con reglas, distribución ponderada, aviso orientativo y toggle de temporizador
    (`fijarTemporizadorClfC02`).
  - Ejecución con copia del runner en `modo="final"`, `minutos="90"`, sin feedback hasta el final.
  - Resultado con `ClfProfessionalResult.vue`: puntaje, desglose por dominio, preguntas falladas,
    opción correcta vs elegida, `explanation` y `porQueOpcion`, y "repetir falladas".
- **Progreso:** `registrarIntento({ tipo: 'profesional', scope: 'profesional', ... })` y
  `registrarRespuesta` por objective, igual que el resto.

## Comparaciones obligatorias (entre otras que salgan del blueprint)

Cubrir con pares de confusión (`ParConfusionClfC02`) al menos los temas que el usuario señaló, todos
in-scope: S3 vs EBS vs EFS, RDS vs Aurora vs DynamoDB, EC2 vs Lambda, ECS vs EKS vs Fargate,
CloudWatch vs CloudTrail vs Config, GuardDuty vs Inspector vs Security Hub, WAF vs Shield,
IAM User vs IAM Role, Savings Plans vs Reserved Instances vs Spot, SNS vs SQS vs EventBridge.
Añadir además: Regiones vs AZ vs edge locations, Well-Architected pillars, planes de AWS Support,
Budgets vs Cost Explorer vs Pricing Calculator, VPN vs Direct Connect, S3 storage classes,
On-Demand vs Dedicated Hosts vs Capacity Reservations, CAF vs Well-Architected.

## Reutilización conceptual desde AIF-C01 (sin asumir cobertura)

Aprovechar y reescribir para el alcance CLF (no copiar a ciegas):

- Servicios y conceptos compartidos: shared responsibility model, IAM/roles/identidades, KMS/Secrets Manager,
  CloudTrail/CloudWatch/Config/Trusted Advisor, EC2/Lambda, S3/S3 Glacier, RDS/Aurora/DynamoDB/ElastiCache,
  ECS/EKS, CloudFront/VPC/PrivateLink, Budgets/Cost Explorer, SageMaker AI/Lex/Comprehend/Polly/Rekognition/
  Textract/Transcribe/Translate.
- **No portar** contenido AIF de GenAI, foundation models, RAG, prompt engineering ni Amazon Bedrock:
  fuera de alcance en CLF-C02. El AIF de IA/ML se limita a lo que pide el Task 3.7 (qué tarea resuelve cada
  servicio).
- Cuidar diferencias de nomenclatura oficial: `Amazon Quick Sight` (no "Amazon Quick"),
  `Amazon SageMaker AI`, `AWS Application Migration Service` (sucesor de Server Migration Service).

## Tareas de implementación (orden)

### Fase 0 — Congelar blueprint
1. Crear `src/data/clfC02.ts` con `certificadoClfC02`, `dominiosClfC02` (4 dominios, 19 Task Statements y
   sus bullets Knowledge/Skills verbatim), `serviciosEnAlcanceClfC02`, `TECNOLOGIAS_Y_CONCEPTOS_CLFC02`,
   `serviciosFueraDeAlcanceClfC02`, derivados (`taskStatementsClfC02`, `objetivosClfC02`,
   `conceptosDeObjective`, `profundidadDeObjective`, `idObjetivoClfC02`, `simulacrosClfC02`, `temaDeTarea`).
2. Definir `OBJETIVOS_CRITICOS_CLFC02` (curar el set: shared responsibility 2.1, IAM/root/least privilege 2.3,
   cifrado/Artifact 2.2, WAF/Shield/GuardDuty 2.4, Regiones/AZ 3.2, EC2/compute y serverless 3.3,
   bases de datos 3.4, VPC/Route 53/connectivity 3.5, storage/S3 classes 3.6, IA/analytics 3.7,
   integración/mensajería 3.8, pricing 4.1, Organizations/Budgets/Cost Explorer 4.2, support plans 4.3).
   **Congelar el orden de bullets**: cualquier reordenamiento cambia los `#index` y rompe referencias.

### Fase 1 — Estructura compilable con banco vacío
3. Portar `types.ts`, `blueprint-ext.ts`, `registroContenido.ts` (mapas vacíos), `validacion.ts`,
   `cobertura.ts`, `busqueda.ts`, `glosario/general.ts` (`[]`), `servicios/general.ts` (`[]`),
   `profesional/{types,registro}.ts` (vacío).
4. Portar `lib/clfC02Progress.ts` (clave nueva, `TipoIntentoClfC02` con `'profesional'`),
   `lib/clfC02Practice.ts` (incl. `construirExamenProfesional`), `lib/clfC02Index.ts`.
5. Portar las 11 vistas y 11 componentes a `src/views/clfC02` y `src/components/clfC02` adaptando rutas,
   imports y textos; crear `ClfProfessional.vue` y `ClfProfessionalResult.vue` (pueden empezar en estado vacío).
6. Añadir las 12 rutas en `src/router/index.ts` y la entrada de menú en `src/App.vue`.
7. Crear esqueletos de tests `tests/unit/clfC02.*.spec.ts`.
   **Aceptación:** `npm run build` y `npm run lint` pasan; todas las vistas renderizan estados vacíos/
   "Contenido en preparación"; AIF-C01 intacto.

### Fase 2 — Contenido D3 (34 %) y D2 (30 %) [64 % del examen]
8. Por cada task 3.1–3.8 y 2.1–2.4: `grupos/task-N.N.ts` (≥1 grupo por objective con bloque `concepto`),
   `preguntas/task-N.N.ts` (≥1 por objective; escenario/tradeoff en críticos; `tipo` correcto;
   `explanation` obligatoria), `tarjetas/task-N.N.ts` (≥1 por objective crítico),
   `comparaciones/task-N.N.ts` (pares obligatorios del listado, cada uno con ≥1 pregunta `comparacion`).
9. Cubrir los mínimos de banco por dominio (18/21/24/10) al cerrar dominios 2 y 3.

### Fase 3 — Contenido D1 (24 %) y D4 (12 %)
10. Tasks 1.1–1.4 y 4.1–4.3 con las cuatro familias y los mínimos de banco.

### Fase 4 — Glosario y servicios
11. `glosario/general.ts`: términos oficiales en inglés con definición en español, `dominios` y
    `relacionados` válidos (objetivo ≥150 términos).
12. `servicios/general.ts`: **toda** la lista in-scope, con `queResuelve`, `paraQueSeUsa`, `seDiferenciaDe`,
    `tareas` y `relacionados`, y `categoria` idéntica a la del blueprint (la validación lo exige).

### Fase 5 — Banco y apartado profesional
13. Autorizar el banco profesional (~130; mínimo 18/21/24/10) con preguntas trampa, dos opciones muy
    similares y `porQueOpcion` de longitud 4.
14. Completar `ClfProfessional.vue`/`ClfProfessionalResult.vue`, la entrada en "Accesos" y el registro de
    intentos `'profesional'`.

### Fase 6 — Verificación y cierre
15. Ejecutar la validación y dejar `erroresValidacionClfC02()` en cero; 19/19 tasks con contenido.

## Validación y verificación

- **Comandos:** `npm run build` (typecheck `vue-tsc` + build), `npm run lint`, `npm run test:unit`.
- **Tests nuevos** (espejo de AIF):
  - `clfC02.integrity.spec.ts`: `erroresValidacionClfC02()` vacío; 132 objectives; 19 tasks; cada objective
    con grupo y pregunta (+ tarjeta y escenario/comparación/error común si es crítico).
  - `clfC02.coverage.spec.ts`: 4 dominios, pesos 24/30/34/12 (suma 100), tasks 4/4/8/3, cuotas 16/19/22/8
    (suma 65), mínimo de banco por dominio, servicios fuera de alcance no citados.
  - `clfC02.search.spec.ts`, `clfC02.progress.spec.ts`, `clfC02.practice.spec.ts`, `clfC02.views.spec.ts`,
    `clfC02.professional.spec.ts` (banco mínimo, cuotas, sin múltiples respuestas).
- **Debe seguir pasando** toda la suite `aifC01.*` y `examen.schema.spec.ts`.
- **Manual:** navegar las 13 rutas CLF, comprobar progreso persistido bajo `devapp:clf-c02:progress`,
  correr un examen profesional completo con temporizador, y abrir rutas AIF-C01 para confirmar que no
  cambiaron.
- **Trazabilidad:** cada `titulo` de objective es texto oficial verbatim del Exam Guide; no introducir
  servicios fuera de la lista in-scope como objetivos del examen.

## Riesgos

- **Volumen (~2× AIF):** mitigado con `TAREAS_PENDIENTES` y entrega por fases; la cobertura visible evita
  deriva. El criterio de cierre es 19/19 tasks con contenido.
- **Estabilidad de ids:** editar/reordenar bullets del blueprint rompe `taskId#index`; congelar primero y
  cubrir con un test de conteos (132 / 18-31-57-26).
- **Cuota 66 vs 65:** usar cuotas explícitas 16/19/22/8 y test que las valide.
- **Contaminación de alcance:** no llevar contenido GenAI/Bedrock de AIF a CLF; verificar con el test que
  cita servicios y con `serviciosFueraDeAlcanceClfC02`.
- **Nomenclatura oficial:** copiar strings exactos de la página in-scope (Quick Sight, SageMaker AI, etc.).
- **Aislamiento:** no tocar archivos `aifC01`, servicios, `components/dynamic`, ni añadir dependencias npm.

## Abiertos menores (decidir durante la implementación)

- Composición final de `OBJETIVOS_CRITICOS_CLFC02` (mapear a los índices reales de cada bullet).
- Tamaño final del glosario (objetivo ≥150) y del banco profesional (objetivo ~130).
- Si el examen profesional se registra además con métrica propia en la vista de cobertura (por defecto: no).
