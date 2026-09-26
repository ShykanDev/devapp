# Plan de remediación multiagente — AWS CLF-C02

Objetivo: reducir la diferencia entre "lo que creemos que hay que saber" y "lo que AWS
puede razonablemente evaluar dentro del alcance de CLF-C02", evitando repetir el fallo de
AIF-C01 (dominio en nuestro banco, huecos en el examen real). **No** es un plan para
añadir preguntas por volumen.

Alcance: solo `src/data/clfC02/**`, `src/views/clfC02/**`, `src/lib/clfC02*`,
`src/schemas/clfC02*`, `src/router/index.ts` (aditivo), `tests/unit/clfC02*`.
AIF-C01 solo se toca si es imprescindible para infraestructura compartida, con tests
de regresión.

---

## 0. Estado actual (evidencia de la auditoría previa)

- Blueprint: 4 dominios, 19 tasks, **135 objectives** (18/31/58/28), 111 servicios in-scope,
  56 out-of-scope; coincide 1:1 con la guía oficial verificada por fetch.
- Banco: 315 estándar + 130 profesional = 445; 73 grupos, 96 tarjetas, 64 pares, 172
  términos, 27 familias / 125 casos de reconocimiento, 22 escenarios de transferencia.
- Sesgos: correcta-más-larga 9,7 % (0 con margen >25); fugas de servicio 0; casi-duplicados
  estándar >0,6 = 0; **posición profesional [119,10,1,0]**; **banco profesional sin guardrails**.
- Barajado en runtime: `clfC02Practice.ts:120-170,219,288,326,359`; ~6 % de preguntas
  (18 estándar / 8 profesional) no se barajan por `esOrdenSensible`.
- **Gaps confirmados:** G1 sin respuesta múltiple (formato oficial real); G2 16 servicios sin
  ninguna pregunta; G3 61/111 servicios sin par y 10/12 clústeres PARTIAL; G4 el guard de
  diferenciación pasa con un **par lookalike** (`2.3#3` cita `iam-user-vs-iam-role`,
  `objetivos=['2.3#1']`); G5 reconocimiento sin validación cruzada de `objetivos`; G6 sin
  contraste con práctica oficial; G7–G12 (guardrails profesional, sesgo residual, sin
  fuentes por servicio, escenarios con ruido escasos, duplicado 1.2-q1/prof-1.2-q1, Lustre).
- No existe archivo del reporte de auditoría; el texto completo vive en la sesión y **debe
  entregarse como input a los agentes 2, 3, 7, 8 y 12**.

Línea base verde a preservar: `vitest run tests/unit` (33 archivos/305 tests), `vue-tsc`,
ESLint sin errores nuevos (persiste `src/main.ts:27`), `vite build`.

---

## 0b. Calibración oficial observada (Official Practice Question Set, 2026-09-25)

El usuario completó el `Official Practice Question Set: CLF-C02` (20 ítems). Datos
**OBSERVED** (no copiar enunciados; solo características):

- **Formato:** 14 ítems de opción única (4 opciones, 1 correcta) y **6 ítems de respuesta
  múltiple** (30 % del set) marcados literalmente `(Select TWO)`, con **5 opciones** y 2
  correctas. Es decir: multiple-response = 5 opciones / 2 correctas; single = 4 opciones.
- **Explicación por opción OBLIGATORIA:** cada opción trae `Why this is correct` o
  `Why this would be incorrect`, más un enlace **`Learn more about <servicio/capacidad>`**
  a documentación oficial. No existe un campo único de explicación: el modelo es
  **por-opción**.
- **Estilo de enunciado:** 1–2 frases, framing de requisito ("A user needs to…",
  "A company requires…", "Which AWS service can meet these requirements?", "What is the
  MINIMUM…"). Imperativo y directo; sin relleno largo.
- **Distractores:** todos servicios/capacidades del alcance o del lenguaje oficial,
  plausibles y del mismo dominio, con diferencia decisiva en la explicación
  ("X does not perform Y").
- **Controles de UX oficiales:** marcador `Your answer`, componente opcional
  **Confidence Level** (Confident / Educated Guess / Unsure), y **reporte de desempeño por
  Domain y por Task** con nº de preguntas, correctas e incorrectas.
- **NO observado:** puntuación escalada 100–1000, temporizador y nº de ítems del examen
  completo no aparecen en este set → siguen `UNVERIFIED` (Tier 2 parcial).
- **Resultado del intento de referencia:** 8/20 (40 %); D1 25 %, D2 25 %, D3 56 %, D4 33 %.
  Se registra como evidencia de que el material actual **no** prepara al nivel observado.

**Hallazgo de alcance (contradicción detectada):** el set oficial usa términos que **no
están** en nuestra lista de 111 in-scope, en particular **Amazon DynamoDB Accelerator (DAX)**
y **Elastic Load Balancing (ELB)**, además de **AWS Systems Manager OpsCenter**. La guía
declara su lista *"non-exhaustive"*, así que la lista no es un techo. Regla provisional del
plan: la lista oficial de 111 define el núcleo, pero los términos observados en material
oficial de práctica se admiten como **"supporting terms"** (distractores/estudio), sin
contarlos como parte de los 111. Decisión D7.

**Consecuencia de diseño:** el modelo de pregunta debe migrar de "una explicación" a
**razonamiento por opción + fuente oficial por opción**, y el componente de
respuesta múltiple debe renderizar `(Elige DOS)`/`(Elige TRES)` con 5 opciones.

---

## 1. Qué NO cuenta como evidencia (regla de aceptación)

Ningún agente puede cerrar un gap citando: "el objective está cubierto", "hay tarjeta",
"hay 5 preguntas", "el test pasa", "100 % coverage interno", "está en el glosario",
"el banco es grande". Cada claim debe indicar: `tipo de cobertura` (estructural / conceptual
/ servicios / diferenciación / escenario / transferencia / formato / calibración externa /
UNVERIFIED), `fuente` y `fecha de verificación`.

Prohibido presentar cualquier porcentaje interno como probabilidad de aprobar.

Prohibido **copiar** enunciados/opciones/textos del material oficial de práctica en el repo.
Solo se usa como calibración de características; los ítems del módulo se redactan originales.
El `Learn more` oficial se sustituye por una URL propia de `docs.aws.amazon.com`.

---

## 2. Grafo de gaps y dependencias

- G1 formato → independiente del contenido; bloquea "format coverage".
- G6 calibración externa → **bloquea READY**; si no hay acceso → `UNVERIFIED` (decisión abierta D1).
- G3/G4 diferenciación → depende de la matriz de Agente 4 (respaldada por doc oficial).
- G2/G10 escenarios → dependen de Agente 1 (inventario) y Agente 4 (diferenciación).
- G5/G4 guardrails → dependen del esquema de Agente 6 (si cambia tipos) y de que el
  contenido esté congelado; **deben ser escritos por un agente que no escribió el contenido**.
- G7/G8/G11 auditoría de banco → dependen de G1 (nuevo formato) para auditar multiple-response.
- G9 trazabilidad → produce `fuentes.ts`, que G5/G11 consumen.
- G12 Lustre → verificación manual dentro de G2.

Orden por dependencia: `1,2` → `3,4,7,8,9,10(registry)` → `5,6` → `10(aplicar),11` → `12`.

---

## 3. Roster de agentes (12)

Formato: responsabilidad · entradas · evidencia (artefacto) · archivos que puede tocar ·
revisor independiente · guardrail asociado.

**A1 — Source / AWS Official Researcher** (read-only)
- Verifica: Exam Guide, domain1–4, 19 tasks, Knowledge/Skills, in/out-of-scope,
  technologies, cert page, Exam Prep, Official Practice Set si hay acceso, y doc oficial de
  cada servicio relevante.
- Evidencia: `fuentes-candidatas.md` + registro `src/data/clfC02/fuentes.ts`
  (`servicio`, `url`, `titulo`, `verificadoEn`, `confidence`).
- Prohibido: Reddit/blogs/dumps/Udemy. Secundarias solo como material adicional, nunca
  definiendo alcance.
- Revisor: A2 (mismo dato contra blueprint) · Guardrail: `fuentesGuard`.

**A2 — Exam Blueprint Auditor** (read-only)
- Diff `AWS source VS src/data/clfC02.ts`: MATCH / MISSING / EXTRA / AMBIGUOUS / OUTDATED,
  cubriendo dominios, tasks, 135 objectives, pesos, formato, puntuadas/no puntuadas,
  multiple choice/response, escala.
- Evidencia: `blueprint-diff.md` + lista de objectives con `titulo`/`conceptos` desalineados.
- No se apoya en guardrails existentes. Revisor: A12 · Guardrail: `blueprintGuard` (snapshot).

**A3 — Service Coverage Auditor** (read-only)
- Matriz **111 × 11**: ficha, definición, reconocimiento, aparece-en-preguntas,
  como-correcta, como-distractor, escenario, diferenciación, par-similar, fuente-oficial,
  riesgo-"solo-nombrado".
- Foco obligatorio en los 16 servicios sin banco y en `AWS Outposts`/`Service Quotas` (7/10).
- Evidencia: `servicios-111x11.json`. Revisor: A12 · Guardrail: extiende `servicesGuard`.

**A4 — Service Differentiation Specialist** (read-only + propuesta)
- Matriz de confusabilidad real (no A-vs-B arbitrarios). Mínimos: RDS/Aurora,
  CloudTrail/Config, SNS/SQS, Athena/Glue, EBS/EFS, EBS/FSx, KMS/CloudHSM,
  GuardDuty/Inspector/Detective/Macie, Region/AZ, Budgets/Cost Explorer, S3/EFS, S3/EBS,
  clases S3/Glacier, Lambda/ECS/EKS/Fargate.
- Por par: `sharedPurpose`, `decisiveDifference`, `whenA`, `whenB`, `commonDistractor`,
  `officialSource`, `fecha`.
- Evidencia: `diferenciacion-propuesta.json`. Revisor: A1 (fuente) + A12 · Guardrail:
  `differentiationGuard` endurecido.

**A5 — Scenario / Reasoning Designer** (contenido, dueño por-task en oleadas)
- Audita preguntas actuales: keyword matching, distractores absurdos, escenarios sin
  trade-off, ausencia de ruido/restricciones/requisitos contradictorios, dos servicios
  plausibles. Diseña escenarios por requisito→restricciones→descarte→elección.
- Suprime/reescribe preguntas pobres; **no infla**. Regla: cada pregunta nueva debe declarar
  `objetivos`, `fuente` conceptual y el gap que cierra.
- **Estilo oficial (calibración §0b):** enunciado de 1–2 frases con framing de requisito
  ("Un usuario necesita…", "Una empresa requiere…", "¿Qué servicio AWS cumple estos
  requisitos?"); single = 4 opciones; **multiple = 5 opciones**; distractores plausibles del
  mismo dominio.
- **Razonamiento por opción:** cada opción debe llevar `porQueOpcion` ("Por qué es correcta" /
  "Por qué es incorrecta") y una **fuente oficial** (`fuentes`/`fuenteOpcion`) a
  `docs.aws.amazon.com`, cubriendo correcta y distractores. Sustituye al `explanation` único
  como mecanismo principal (se conserva como resumen).
- Archivos: `preguntas/task-*.ts`, `profesional/preguntas/task-*.ts`, `grupos/task-*.ts`,
  `comparaciones/task-*.ts` (por oleada y por dominio; ver §5).
- Revisor: A7 (auditoría de banco) + A12.

**A6 — Multiple-Response Specialist** (infraestructura + banco de formato)
- **No toca `src/schemas/examen.ts`** (compartido con AIF). Crea `src/schemas/clfC02.ts`.
- Tipos en `src/data/clfC02/types.ts`: discr. `formato: 'single' | 'multiple'`; en múltiple
  `options` ≥5 y `correctAnswers: number[]` (≥2). Mantiene `correctAnswer` para single.
- Scoring (`clfC02Practice.ts:78,384-394`): respuesta `number | number[]`; evaluación por
  conjunto; **seleccionar todo falla**; separar formato de puntuación escalada (no replicar el
  scoring de AWS).
- **Formato observado (§0b):** single = 4 opciones / 1 correcta; multiple = **5 opciones** /
  **2+ correctas**, con etiqueta visible `(Elige DOS)`/`(Elige TRES)` en el enunciado.
- UI: `ClfPracticeRunner.vue`, `ClfPracticeResult.vue`, `ClfProfessionalResult.vue`,
  `ClfProfessional.vue`, `ClfPractice.vue`; multiselección + **razonamiento por opción** en
  resultados (correcta e incorrectas), con fuente oficial.
- Extender el tipo de pregunta estándar con `porQueOpcion?: string[]` y `fuentes?: string[]`
  (el profesional ya tiene `porQueOpcion`); alinear ambos bancos.
- Persistencia: `clfC02Progress.ts` — verificar que solo guarda ids (hoy sí) y que el
  estado de respuesta admite arrays.
- Evidencia: diff + `clfC02.multipleResponse.spec.ts` + `aifC01.regression.spec.ts`.
- Revisor: A7 + A11 · Guardrail: `multipleResponseGuard` + `perOptionGuard`.

**A7 — Question Bank Auditor** (read-only)
- Audita **estándar, profesional, transfer, reconocimiento y multiple-response** con las
  mismas reglas: duplicados, casi-duplicados, posición, longitud, patrones lingüísticos,
  distractores obvios, correcta-sobre-detallada, keyword leaks, concentración por
  servicio/dominio/task/tipo.
- Evidencia: `banco-audit.md` + `banco-audit.json` (incluye profesional, hoy no auditado).
- Revisor: A12 · Guardrail: `bankGuard` ampliado a profesional.

**A8 — Anti-False-Confidence Agent** (adversarial, read-only)
- Intenta demostrar falsa preparación: qué evalúa AWS y no medimos; servicios nunca usados;
  conceptos indirectos; pares faltantes; formato no simulable; conocimiento tras un bullet;
  métricas internas que dan verde con gap; cobertura "por referencia textual".
- Evidencia: `falsa-confianza.md` con vectores reproducibles. Revisor: A12.

**A9 — Official Practice Calibration** (read-only)
- **Estado: OBSERVED** — el usuario completó el set de 20 ítems; resultados en §0b.
- Debe consolidar `calibracion-oficial.md` con: formato (4 opciones single / 5 opciones
  multiple, 30 % multiple en la muestra), explicación por opción + `Learn more`, estilo de
  enunciado, distractores, controles de UX (Your answer / Confidence Level / reporte por
  Task), y los **supporting terms** detectados (DAX, ELB, OpsCenter).
- Debe marcar `UNVERIFIED` lo no observado (puntuación escalada, temporizador, formato del
  examen completo) e indicar cómo cubrirlo (Official Practice Exam si hay suscripción).
- Añade la calibración **Tier 1** contra documentación oficial para hechos de servicio.
- Prohibido copiar ítems; prohibido inventar resultados.
- Revisor: A12.

**A10 — Traceability Engineer**
- Cadena: `source → domain → task → objective → concept → service → differentiation →
  scenario → question → explanation`. Implementa `fuentes.ts` como fuente de verdad y el
  campo `fuente`/`objetivos` en cada pieza; hook en `validacion.ts` que exige fuente en
  afirmaciones de servicio/diferenciación.
- Revisor: A2 + A12 · Guardrail: `traceabilityGuard`.

**A11 — Test / Guardrail Engineer** (independiente de A5/A6)
- Endurece `src/data/clfC02/validacion.ts` y los `clfC02.*Guard.spec.ts`:
  objectives faltantes; servicios sin preguntas/diferenciación; **recognition con objective
  inválido**; **differentiation con objective incorrecto**; preguntas sin fuente; múltiple
  inválida; sesgo posicional (incluido **profesional**); duplicados/casi-duplicados
  (incluido profesional); correcta delatada por longitud; fuera de scope (servicio y
  pregunta); gaps por task/domain.
- **Test de regresión específico antilookalike:** reproducir `2.3#3` — para todo objective con
  bloque `comparacion`, el par referenciado debe incluir el objective en `objetivos`; hoy el
  validador mira el tipo de bloque (`validacion.ts:278-283,328-333`) y no debe poder volver a
  pasar. Igual para reconocimiento: `caso.objetivos` debe existir, ser id válido y cubrir los
  objectives de servicio.
- Revisor: A12 · Dueño exclusivo de `tests/unit/clfC02.audit.ts` y de los `*Guard.spec.ts`.

**A12 — Final Red Team** (read-only, independiente de todo lo anterior)
- Recibe: Exam Guide, salidas de A1–A11, banco final, tests, fuentes, matrices.
- Responde 10 preguntas (qué falta, claims no demostrados, gaps de falsa confianza, qué
  depende aún del corpus, qué formato no simulamos, servicios débiles, diferencias faltantes,
  evidencia externa, qué NO podemos afirmar, qué corregir antes de READY).
- No modifica nada. Revisor: orquestador.

---

## 4. Fases de ejecución (gating)

- **Fase A (paralelo, read-only):** A1, A2.
- **Fase B (paralelo, read-only):** A3, A4(propuesta), A7, A8, A9, A10(registro).
  Gate: existe `blueprint-diff` sin MISSING y `fuentes.ts` inicial.
- **GATE DE ENTRADA EXTERNA (usuario) — BLOQUEA FASE C:** antes de iniciar cualquier
  escritura de contenido o formato, el usuario entrega la plantilla de calibración del
  `Official Practice Question Set` (§12b/§12c). Sin esa entrada, **la Fase C no arranca**;
  el bloque EXTERNAL CALIBRATION queda `UNVERIFIED` y READY queda bloqueado. Las fases A y B
  son de solo lectura y pueden ejecutarse mientras tanto, si el usuario lo autoriza.
- **Fase C (paralelo, escritura disjunta):** A5 (contenido por dominio, ya informado por la
  calibración) y A6 (infra + formato).
  Gate: A4 entregado, plantilla externa recibida y esquema multiple-response congelado antes
  de que A5 lo use.
- **Fase D (paralelo, read-only):** A8(refresco adversarial sobre cambios), A9(calibración final).
- **Fase E (implementación):** A10 aplica trazabilidad a todo el contenido; A5 cierra gaps G2/G3/G10.
- **Fase F (independiente):** A11 endurece validación y guardrails; **no puede ser autor** de lo
  que valida.
- **Fase G (read-only):** A12 red team sobre el resultado congelado.
- **Fase H (orquestador):** reconciliación, reporte final A–R, decisión READY/NOT READY.

Ninguna fase avanza si un gate falla; las discrepancias se resuelven por §6.

### Checklist ordenado

1. **Fase A** — A1 fuentes + A2 blueprint diff. Gate: diff sin MISSING sin justificar.
2. **Fase B** — A3 (111×11), A4 (matriz de confusabilidad con fuente), A7 (auditoría de banco
   incl. profesional), A8 (adversarial), A9 (Tier 1), A10 (registro `fuentes.ts`).
   En paralelo, el usuario completa el Practice Question Set y devuelve la plantilla de A9.
3. **Fase C** — A6 (multiple-response: schema CLF, tipos, scoring exacto, UI, tests, AIF
   regression) congelado; A5 contenido por dominio en oleadas (un writer por task).
4. **Fase D** — A9 publica `calibracion-oficial.md` (Tier 1 + Tier 2 con `OBSERVED`/`UNVERIFIED`);
   A8 re-testea los cambios.
5. **Fase E** — A4/A3 cierran G2/G3; A10 propaga trazabilidad y fuentes; A5 cierra G10.
6. **Fase F** — A11 endurece `validacion.ts` y guardrails, incluido el **test de regresión
   antilookalike de `2.3#3`**. Verificación global: `vitest run tests/unit`, `vue-tsc --noEmit`,
   ESLint, `vite build`, y `aifC01.regression.spec.ts`.
7. **Fase G** — A12 red team read-only sobre el resultado congelado.
8. **Fase H** — Reconciliación y reporte A–R; decisión READY/NOT READY.

---

## 5. Propiedad de archivos (anti-conflicto)

- Escritura **single-owner** por archivo compartido: `reconocimiento.ts` (A5-owner único),
  `transferencia.ts` (A5), `clfC02.ts`/blueprint (solo si A2 lo exige, owner A2),
  `validacion.ts` (A11), `auditoriaServicios.ts` (A3), `fuentes.ts` (A10), `alcance.ts` (A4/A10
  en secuencia), `types.ts`/`src/schemas/clfC02.ts` (A6, congelado antes de F), views (A6).
- Contenido por-task (19 tasks): se reparte en oleadas por dominio, **un solo agente por
  task**; nunca dos agentes en el mismo `task-*`.
- `tests/unit/clfC02.audit.ts` y los `*Guard.spec.ts`: A11 exclusivo.
- Prohibido a los autores de contenido escribir o ajustar guardrails.

---

## 6. Regla de conflictos (precedencia, no mayoría)

1. Documentación oficial de servicio AWS.
2. AWS Exam Guide.
3. Páginas oficiales de certificación.
4. Material oficial de práctica AWS.
5. Contenido interno.
Una discrepancia se resuelve por evidencia citada; nunca por votos de agentes. Si la
evidencia oficial no existe → `UNVERIFIED`.

---

## 7. Guardrails/tests a añadir

- `blueprintGuard`: snapshot de dominios/tasks/objectives/pesos/formato vs `fuentes.ts`.
- `fuentesGuard`: todo servicio in-scope y toda ficha/diferenciación con `fuente` no vacía.
- `traceabilityGuard`: objective→concept→service→diferenciación→escenario→pregunta con enlaces
  reales (no lookalike).
- `differentiationGuard` (endurecido): el par referenciado incluye el objective;
  cada objective con alternativas tiene diferencia decisiva y fuente.
- `recognitionGuard`: `caso.objetivos` válidos; caso por objective de servicio; labels in-scope.
- `serviceTrainingGuard`: ningún servicio in-scope sin al menos una pregunta donde pueda ser
  correcta y otra donde sea distractor, y un escenario de elección.
- `multipleResponseGuard`: 5+ opciones, 2+ correctas, scoring correcto, no "seleccionar todo".
- `perOptionGuard`: cada opción de cada pregunta (estándar, profesional y multiple) tiene
  `porQueOpcion` no vacío que explica por qué es correcta o incorrecta.
- `fuentePorOpcionGuard`: cada servicio/capacidad citado en opciones lleva fuente oficial de
  `docs.aws.amazon.com`; prohibido dejar la fuente vacía.
- `officialStyleGuard`: single = 4 opciones con 1 correcta; multiple = 5 opciones con 2+
  correctas y etiqueta visible `(Elige DOS)`/`(Elige TRES)` en el enunciado.
- **Sustituir** el criterio actual de cierre "si cambia X→Y" (`MARCADOR_CIERRE` en
  `clfC02.audit.ts`) por el modelo por-opción: el requisito primario pasa a ser
  `porQueOpcion` completo; la cláusula X→Y queda opcional como extra.
- `bankGuard` (ampliado a profesional): posición, longitud, duplicados, keyword leaks.
- `scopeGuard`: ningún servicio/pregunta fuera de alcance; `Lustre` explícitamente verificado.
- `sessionGuard`: dispersión posicional real en sesiones (estándar y profesional), incluidas
  las no-barajadas.
- `aifC01.regression.spec.ts`: comportamiento de AIF-C01 intacto si se tocó infra compartida.

---

## 8. Criterios de aceptación

Globales: línea base verde; cero CRITICAL abiertos; G4/G5 con test de regresión que **falla**
si se reintroduce el lookalike; banco profesional auditado; múltiple respuesta funcionando
con anti-exploit; todo servicio in-scope entrenado (no solo nombrado); **razonamiento por
opción + fuente oficial en todas las preguntas**; estilo oficial (4/5 opciones, `(Elige DOS)`)
verificado contra §0b; calibración externa Tier 1 + Tier 2 parcial publicada como `OBSERVED`,
y `UNVERIFIED` solo en lo no observado.

Por agente: A2 sin MISSING/AMBIGUOUS sin justificar; A3 matriz 111×11 completa;
A4 todos los pares con fuente; A5 sin keyword-matching detectable y gaps G2/G3/G10 cerrados;
A6 tests verdes + AIF intacto; A7 sin duplicados >0,6 y sesgo posicional corregido;
A11 todos los guardrails en verde y regresión antilookalike; A12 sin hallazgos CRITICAL.

---

## 9. Métricas separadas y prohibición de sobreconfianza

Salida de estado en 8 bloques: STRUCTURAL / CONCEPTUAL / SCENARIO / SERVICE /
DIFFERENTIATION / FORMAT / EXTERNAL CALIBRATION / UNKNOWN-UNVERIFIED. Nunca convertir
ningún bloque en "% de probabilidad de aprobar". Si no hay evidencia externa, escribir
`UNVERIFIED` y no rellenar con suposiciones.

---

## 10. AIF-C01

Solo se reutiliza infraestructura genérica (`components/ui`, `markdown`, y solo si es
imprescindible `schemas/examen.ts`). Cualquier reutilización lleva test de regresión
`aifC01.regression.spec.ts` y verificación de que AIF-C01 sigue navegable y con sus tests en
verde. Preferencia: **no tocar `schemas/examen.ts`**; crear `src/schemas/clfC02.ts`.

---

## 11. Entregable final (Fase H)

Reporte A–R: (A) fuentes verificadas, (B) cambios, (C) gaps encontrados, (D) gaps corregidos,
(E) gaps abiertos, (F) servicios 111/111, (G) diferenciaciones, (H) multiple response,
(I) scenario reasoning, (J) auditoría del banco, (K) auditoría profesional, (L) calibración
externa, (M) trazabilidad, (N) guardrails, (O) hallazgos del red team, (P) riesgos residuales,
(Q) qué NO podemos afirmar, (R) estado final **READY / NOT READY**.
**READY prohibido** si hay un CRITICAL abierto.

---

## 12. Decisiones

- **D1 — Acceso al Official Practice Question Set: RESUELTA.** El usuario tiene acceso a
  Skill Builder. Se usa el **`Official Practice Question Set: CLF-C02 - English`** (gratuito,
  30 min) y, opcionalmente, el `Official Practice Exam` si hay suscripción. NO se copian
  preguntas: la calibración es a nivel de características y la ejecuta el usuario (§12b).
- **D2 — Puntuación de multiple-response: RESUELTA.** Acierto solo con **conjunto exacto**;
  subconjunto no vacío se registra como `parcial` (diagnóstico, no suma acierto); seleccionar
  todo = fallo. Separado del hipotético scoring escalado de AWS.
- **D3 — Modelo de ejecución: RESUELTA.** Subagentes `task` en el mismo repo con **propiedad
  de archivos disjunta** y oleadas por dependencia (§4/§5). No Agent Manager/worktrees.
- **D4 — Volumen vs reemplazo: RESUELTA.** **Reemplazar** preguntas pobres y **ampliar solo
  para cerrar gaps** concretos (servicios sin banco G2, diferenciación G3, escenarios con
  ruido G10), con tope explícito de crecimiento por task y justificando cada alta.
- **D5 — Alcance del gate del Exam Prep: RESUELTA.** La entrega de la plantilla del Practice
  Question Set **bloquea solo la Fase C** (contenido/formato). Las fases A y B, de solo lectura,
  pueden ejecutarse antes. Sin la plantilla, Fase C no arranca y READY queda bloqueado.
  **El usuario aportará el Exam Prep antes de la Fase C.**
- **D6 — Razonamiento por opción: RESUELTA.** Toda pregunta de todos los bancos debe llevar
  `porQueOpcion` por cada opción (correcta e incorrectas) más fuente oficial, imitando el
  formato `Why this is correct` / `Why this would be incorrect` + `Learn more` (§0b). El
  banco estándar debe extenderse (hoy solo lo tiene el profesional).
- **D7 — "Supporting terms" fuera de los 111: RESUELTA.** Los 111 son el **núcleo**. DAX,
  ELB y Systems Manager OpsCenter se admiten como **supporting terms**
  (`origen: 'material-oficial'`): válidos como distractores y para estudio, **no** cuentan
  como in-scope ni se usan como respuesta correcta salvo respaldo de la guía. Implementación:
  `alcance.ts` gana una lista `TERMINOS_MATERIAL_OFICIAL` que el `scopeGuard` acepta como
  distractor pero excluye del recuento de los 111.

## 12b. Protocolo de calibración Tier 2 (usuario-ejecuta, A9 interpreta)

Como A9 no puede iniciar sesión, la calibración de estilo es **mediada por el usuario**:

1. El usuario completa el `Official Practice Question Set: CLF-C02 - English` (y, opcional,
   el Practice Exam) **sin copiar enunciados literalmente**.
2. El usuario rellena la plantilla §12c y la entrega **antes de la Fase C** (gate de entrada
   externa). No hace falta copiar preguntas: basta con características observadas.
3. A9 convierte eso en `.kilo/audit/clf-c02/calibracion-oficial.md` con cada campo marcado
   `OBSERVED` o `UNVERIFIED`.
4. A9 hace además la calibración **Tier 1** contra documentación oficial de AWS
   (`docs.aws.amazon.com`, whitepapers y blogs oficiales) para hechos de servicio,
   diferenciación y terminología.

Consecuencia para READY: el bloque EXTERNAL CALIBRATION deja de ser puramente UNVERIFIED;
se publica con su cobertura real (1 Practice Question Set + Tier 1). Si el usuario no aporta
la plantilla, el bloque vuelve a `UNVERIFIED`.

## 12c. Plantilla de calibración (la rellena el usuario)

Responder sin copiar enunciados ni opciones literales. Marcar `NO OBSERVADO` donde no aplique.

1. Ítems intentados / aciertos (si el set los muestra).
2. Nº de ítems multiple-choice y nº de ítems multiple-response.
3. Nº de opciones por ítem: ¿4? ¿5 o más? ¿variaba?
4. Longitud de enunciados: corta / media / larga (aproximado, sin transcribir).
5. ¿Había escenarios con contexto? ¿Información irrelevante deliberada? ¿Restricciones de
   negocio (coste, plazo, cumplimiento, equipo reducido)?
6. Dificultad percibida por dominio (fácil / media / difícil), si se muestra.
7. Servicios o categorías de servicio vistos (nombres de servicio; son hechos).
8. Estilo de distractores: ¿plausibles y del mismo dominio, o absurdos?
9. ¿Cada ítem traía explicación? ¿Y por qué falla cada distractor?
10. Términos, servicios o tipos de razonamiento que nuestro módulo no cubre.
11. Cualquier otro rasgo relevante (orden, agrupación, temporizador, formato de la UI).

---

## 13. Riesgos

- Cierre epistémico: todo se valida contra el corpus propio (mitigado solo por A1/A9/A12).
- A9 sin acceso deja la calibración externa en UNVERIFIED (riesgo no eliminable).
- A6 cambia tipos y scoring: riesgo de romper sesiones/persistencia; mitigado con congelación
  y tests.
- Writers concurrentes: mitigado por propiedad de archivos (§5).
- Red team puede seguir encontrando huecos → no forzar READY.

---

## 14. Protocolo de ejecución con subagentes

- Cada agente recibe: alcance, archivos permitidos, formato de evidencia, comando de
  verificación y criterio de aceptación.
- Salidas grandes → artefactos en `.kilo/audit/clf-c02/` (md/json), no en `src/`.
- Verificación obligatoria por el revisor asignado; **ningún agente es juez único**.
- Al final de cada fase: correr `vitest run tests/unit`, `vue-tsc --noEmit`, ESLint y build.
- Los specs temporales de medición se eliminan.
