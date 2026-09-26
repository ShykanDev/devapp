# RED TEAM read-only — cierre CLF-C02

Fecha: 2026-09-26. Alcance: `src/data/clfC02/**`, `src/schemas/clfC02.ts`,
`tests/unit/clfC02*`. Sin modificar `src/` ni `tests/`. Único archivo escrito:
este informe.

## Método

- Lectura de `fuentes.ts`, `citas.ts`, `coberturaServicios.ts`, `ruido.ts`,
  `exencionesServicio.ts`, `validacion.ts`, `schemas/clfC02.ts`, `types.ts`,
  `registroContenido.ts`, `blueprint-ext.ts`, `alcance.ts`, `auditoriaServicios.ts`
  y los guards de G9/SERVICE/G10.
- Carga read-only del grafo de módulos con Vite (`ssrLoadModule` en `node -e`) para
  recalcular la matriz de cobertura, detectar fuentes ruidosas y medir ruido.
  No se escribió ningún archivo temporal.
- `webfetch` sobre 28 URLs del registro + guía de examen + página de certificación.
- Verificación de línea base (read-only):
  - `node node_modules/vitest/vitest.mjs run tests/unit` → **45 archivos / 343 tests en verde**.
  - `clfC02QuestionSchema` aplicado a ambos bancos → **0 inválidos** (344 estándar + 130 profesional).
  - `git status` → `src/schemas/examen.ts` y todo `aifC01/**` sin modificar.

---

## CRITICAL

### C1. El cierre SERVICE de "AWS Resource Access Manager (AWS RAM)" es un falso positivo del detector de citas

**Hecho.** `citas.ts` reconoce el alias corto `RAM` como el servicio
`AWS Resource Access Manager (AWS RAM)` porque `RAM` no está en
`TOKENS_GENERICOS` (`src/data/clfC02/citas.ts:12-41`) y `aliasDeServicio`
lo considera distintivo (`citas.ts:63-79`). Cualquier enunciado con "memoria RAM"
se interpreta como cita de AWS RAM.

**Evidencia de la contaminación.** En los 5 ítems que el detector marca como
"citando AWS RAM", solo `g2-14` es real:

| id | ¿real? | por qué se detecta | fuente RAM inyectada |
|---|---|---|---|
| `g2-14` | sí | nombra `AWS Resource Access Manager (AWS RAM)` | legítima |
| `3.3-q2` | no | opción "…prioriza la memoria **RAM**…" | `preguntas/task-3.3.ts:52-54` |
| `3.3-q12` | no | correctas con "memoria **RAM**" | `preguntas/task-3.3.ts:298-320` |
| `3.4-q9` | no | texto de la base "en memoria"/"**RAM**" | `preguntas/task-3.4.ts:235-261` |
| `3.4-q10` | no | explicación sobre caché en memoria/`RAM` | `preguntas/task-3.4.ts:265-290` |

**Impacto en el criterio (`coberturaServicios.ts:51-73,94`).** Recalculado el
desglose por servicio:

- `AWS RAM`: correcta = `g2-14` + `3.3-q12`(falso) + reconocimiento `fam-seguridad-identidad`;
  **distractor = `3.3-q2`(falso) + `3.3-q12`(falso)**; escenario = reconocimiento.
- Sin el falso positivo, `AWS RAM` queda con **`distractor = 0`** → no cumple
  `correcta > 0 && distractor > 0 && escenario > 0` y `serviciosSinCumplir()`
  lo devolvería como incumplido.

**Consecuencia.** Las afirmaciones `remediacion.md:23` ("los 111 servicios con
rol correcto + distractor + escenario/reconocimiento (0 exenciones)") y
`servicio-training.json` ("incumplen": []) **no son válidas**: 1 de los 111
servicios pasa el guard solo por un alias genérico mal interpretado. Además, el
URL oficial de RAM se inyectó como fuente en 4 ítems que no hablan de RAM, lo que
también contamina la trazabilidad G9 (ver W2/W3).

**Repro lógico (sin comandos):** `serviciosCitadosConAlias("la memoria RAM del servidor")`
→ `['AWS Resource Access Manager (AWS RAM)']`.

---

## WARNING

### W1. El criterio SERVICE se puede "gamear": correcta/distractor/escenario se satisfacen con una sola flashcard de reconocimiento

`coberturaServicios.ts` cuenta como evidencia: `caso.servicio` (correcta +
escenario), `caso.descartar` (distractor), `transferencia` por substring
(`JSON.stringify(...).includes(nombre)`, líneas 75-77) y `par.titulo/etiqueta`
por substring (líneas 79-87). Ejemplos concretos recalculados:

1. **Amazon EMR**: `correcta = 1` (reconocimiento `fam-analytics-bigdata`),
   `distractor = 1` (mismo `descartar` de esa familia), `escenario = 1` (misma
   familia). **Cero preguntas** en el banco; cumple por un único caso de reconocimiento.
2. **Amazon DocumentDB**: correcta + distractor + escenario, todos de
   `fam-bases-relacionales`. Cero preguntas.
3. **Amazon Q**: correcta/escenario de `fam-ia`, distractor de `descartar` de
   `fam-ia-gestionada`. Cero preguntas.
4. **AWS CloudFormation**: `escenario = 1` proviene solo de su flashcard de
   reconocimiento; `escQ = []`, `escTr = []`, `escPar = []`. No tiene ninguna
   pregunta de aplicación.
5. **AWS License Manager**: `distractor = 2`, ambos de listas `descartar` de
   reconocimiento; sin preguntas.

Mismo patrón en `Service Quotas`, `AWS Systems Manager`, `Amazon Macie`,
`AWS Directory Service`, `Amazon Detective`, `AWS Client VPN` (escenario vía
reconocimiento/transferencia). El comentario de `coberturaServicios.ts:5-7`
admite "reconocimiento", pero `remediacion.md:23` lo presenta como
"escenario/reconocimiento", lo que sobrestima la profundidad real.

### W2. G9: 28 ítems declaran una fuente de servicio que el ítem no cita; el guard solo comprueba la dirección directa

`fuentesGuard.spec.ts:47-59` exige "todo servicio citado tiene su fuente", pero
**no** "toda fuente de servicio corresponde a un servicio citado". Recalculado:
28 ítems tienen en `fuentes` el URL de un servicio que no aparece en el ítem.
La mayoría son fuentes raíz genéricas del tema (defendibles), pero 4 son
incorrectas:

- `3.3-q2` (familias de instancias) → `https://docs.aws.amazon.com/ram/latest/userguide/what-is.html`
  (`preguntas/task-3.3.ts:53`): fuente de AWS RAM por el falso positivo "RAM".
- `3.3-q12`, `3.4-q9`, `3.4-q10` → mismo URL RAM (`task-3.3.ts:320`,
  `task-3.4.ts:261`, `task-3.4.ts:290`).

Otros ejemplos de fuente raíz no probatoria: `3.3-q1` usa solo `/ec2/` para una
afirmación sobre serverless vs. VM (no cita EC2); `3.6-q1` usa solo `/s3/` para
objetos vs. bloque vs. archivos (no cita S3); `3.6-q2` igual. El registro
admite cualquier URL del registro aunque no respalde la afirmación concreta.

### W3. `fuentes.ts` contiene fuentes semánticamente incorrectas o marcadas como obsoletas

- **`Amazon S3 Glacier` → página de Amazon Glacier legacy.** `fuentes.ts:231`
  apunta a `https://docs.aws.amazon.com/amazonglacier/latest/dev/introduction.html`.
  La propia página avisa: *"only for existing customers of the Amazon Glacier
  service using Vaults… no longer accepting new customers… distinct from Amazon
  S3 and the Amazon S3 Glacier storage classes"*. El servicio in-scope
  (`serviciosEnAlcanceClfC02`, categoría Storage) es S3 Glacier, no el servicio
  standalone de vaults.
- **`AWS Professional Services` (`fuentes.ts:91`)** y **`AWS Compliance`
  (`fuentes.ts:81`)** apuntan a whitepapers con banner *"This whitepaper is for
  historical reference only. Some content might be outdated"*. `confidence:
  'oficial'` y `fuentesGuard` los tratan como autoritativos.
- **`Amazon Quick Sight` (`fuentes.ts:109`)**: `/quicksight/` ahora sirve
  "Amazon Quick Documentation" (canonical `https://docs.aws.amazon.com/quick/`).
  La etiqueta está desactualizada.
- **`AWS Support plans` (`fuentes.ts:87`)**: la página ahora documenta el fin de
  Developer/Business/Enterprise On-Ramp (1 ene 2027) y nuevos planes
  (Business Support+, Unified Operations), mientras el blueprint y el banco
  enseñan los planes anteriores (`src/data/clfC02.ts:334`).
- `verificadoEn: '2026-09-26'` es uniforme para las 133 fuentes; no refleja la
  comprobación individual (las páginas reportan `generated_on` 2026-09-25/26).

### W4. G10: el criterio de "escenario con ruido" es satisfacible por coincidencia léxica y mide relleno

`ruido.ts:17-26` cuenta como ruidoso cualquier ítem de aplicación cuyo
**enunciado** contenga a la vez `MARCADOR_RUIDO` (`aunque|sin embargo|no importa|pese a|…`)
y `RESTRICCION_NEGOCIO` (`coste|presupuesto|factura|disponibilidad|…`), sin
verificar que el dato sea irrelevante ni que cambie el razonamiento.

- Ruido puramente de relleno (irrelevancia explícita): `4.2-q14` ("aunque el
  sector… no es relevante"), `4.2-q16` ("aunque el número de cuentas… no afecta"),
  `prof-4.2-q2` ("aunque el tamaño de cada filial no afecta"), `3.4-q11`
  ("Aunque el equipo valora migrar de motor… no es relevante"),
  `3.6-q3` ("aunque cambie de herramientas de edición").
- Falsos positivos (no son ruido deliberado): `1.1-q2` ("aunque su presupuesto sea
  limitado" es la premisa del problema), `1.1-q7` ("sin embargo la latencia se
  mantiene estable" es un dato pertinente), `3.4-q16` y `prof-2.1-q9` (la
  restricción es parte del caso, no un distractor irrelevante).
- Solo se inspecciona `pregunta.question`; ruido en opciones/explicación no cuenta.

**Inconsistencia de conteo:** el artefacto `g10-ruido.json` suma
6+6+10+6 = **28** ítems, pero `remediacion.md:63` afirma **26**. El guard pasa
porque el mínimo real es 22 (`ruido.ts:29-34`).

### W5. Evidencia de auditoría contradictoria (artefacto previo al cierre)

`.kilo/audit/clf-c02/g9-fuentes.json` (mismo 2026-09-25 20:27) declara
`"total": 474, "sinFuentes": 464` e incluye ítems con `"fuentes": []`
(p. ej. `1.1-q1`). Esto contradice `remediacion.md:40,54` ("`fuentes` en los 474
ítems"). El archivo no tiene marca de "estado previo" ni se regeneró tras G9.
Comprobado hoy: **0/474 sin fuentes**. El reporte no explica el artefacto.

### W6. Asimetría de validación entre bancos y entre schema y guards

- `validacion.ts:386` recorre solo `TODAS_LAS_PREGUNTAS` (estándar) y aplica
  `clfC02QuestionSchema` en la línea 404. El banco profesional (130 ítems)
  **no pasa por el schema** en `validacion.ts`; su conformidad depende de
  `professional.spec.ts`/`perOptionGuard.spec.ts`. Hoy no hay violaciones
  (verificado: 0 inválidos en ambos bancos), pero la brecha es latente.
- `types.ts:74` declara `fuentes?: string[]` (opcional) mientras
  `schemas/clfC02.ts:21` lo exige (`min(1)`): un ítem tipado puede carecer de
  `fuentes` y `validacion.ts` no lo reportaría para el banco profesional.
- `schemas/clfC02.ts:72-83` acepta cualquier URL con prefijo
  `https://aws.amazon.com/` o `https://docs.aws.amazon.com/`; `fuentesGuard`
  exige pertenencia al registro. Un ítem con URL oficial **no registrada** pasa
  el schema (y `validacion.ts`) y falla `fuentesGuard`. No son contradictorios,
  pero **un guard no cubre lo del otro**.
- `validacion.ts` `TIPOS_PREGUNTA` no incluye los tipos profesionales
  (`trampa`, `multiConcepto`, etc. en `profesional/types.ts`), porque no valida
  ese banco.

---

## SUGGESTION

- **S1.** Endurecer `citas.ts`: marcar `RAM` (y otros acrónimos genéricos de
  ≤3 letras o palabras comunes) como no distintivos salvo que vengan precedidos
  de `AWS`/`Amazon`; añadir test de falso positivo con "memoria RAM".
- **S2.** Añadir el chequeo inverso en G9: cada URL de servicio en `fuentes`
  debe corresponder a un servicio citado en el ítem (o a un documento/concepto).
- **S3.** Revisar/corregir las fuentes de `fuentes.ts`: S3 Glacier → página de
  clases de almacenamiento S3 Glacier; Quick Sight → etiqueta "Amazon Quick";
  sustituir whitepapers con banner histórico por páginas vigentes; revisar
  vigencia de la página de planes de soporte.
- **S4.** Regenerar/renombrar `g9-fuentes.json` como estado previo a G9 y alinear
  `remediacion.md:63` con los 28 ítems reales de `g10-ruido.json`.
- **S5.** Hacer explícito en `coberturaServicios.ts` qué aporta cada capa
  (pregunta vs. reconocimiento vs. transferencia vs. par) o exigir al menos una
  pregunta de aplicación para `escenario`, en lugar de que una flashcard baste.
- **S6.** Aplicar `clfC02QuestionSchema` también a `TODAS_LAS_PREGUNTAS_PROFESIONAL`
  dentro de `validacion.ts` y unificar `fuentes` como obligatorio en el tipo.

---

## Muestreo de URLs (28 verificadas con webfetch, 0 × 404)

| # | URL (etiqueta) | Resultado |
|---|---|---|
| 1 | `/athena/` | 200 |
| 2 | `/step-functions/` | 200 |
| 3 | `/connect/` | 200; ahora "Connect Customer" |
| 4 | `/outposts/` | 200 |
| 5 | `/amplify/` | 200 |
| 6 | `/quicksight/` (Amazon Quick Sight) | 200; canonical `/quick/` ("Amazon Quick") |
| 7 | `/amazonq/` | 200 |
| 8 | `/health/` | 200 |
| 9 | `/wellarchitected/` | 200 |
| 10 | `/marketplace/` | 200 |
| 11 | `aws.amazon.com/migration-evaluator/` | 200 |
| 12 | `/amazonglacier/latest/dev/introduction.html` (Amazon S3 Glacier) | 200; es Amazon Glacier legacy (ver W3) |
| 13 | `/prescriptive-guidance/latest/patterns/welcome.html` | 200 |
| 14 | `/partner-central/latest/getting-started/becoming.html` | 200 |
| 15 | `/whitepapers/.../aws-professional-services.html` | 200; banner histórico (W3) |
| 16 | `/pricing-calculator/.../what-is-pricing-calculator.html` | 200 |
| 17 | `/awssupport/latest/user/aws-support-plans.html` | 200; planes discontinuados (W3) |
| 18 | `/sdkref/latest/guide/overview.html` | 200 |
| 19 | `/workspaces-web/` | 200 |
| 20 | `/sagemaker/` | 200 |
| 21 | `/global-accelerator/.../what-is-global-accelerator.html` | 200 |
| 22 | `/vpn/latest/s2svpn/VPC_VPN.html` | 200 |
| 23 | `/vpn/latest/clientvpn-admin/what-is.html` | 200 |
| 24 | `/whitepapers/.../infrastructure-as-code.html` | 200 |
| 25 | `/wellarchitected/.../select-the-best-pricing-model.html` | 200 |
| 26 | `/whitepapers/.../compliance.html` | 200; banner histórico (W3) |
| 27 | `Guía oficial del examen CLF-C02` | 200 |
| 28 | `aws.amazon.com/certification/certified-cloud-practitioner/` | 200 |

- **URLs inventadas (fuera del registro): 0.** El `fuentesGuard` pasa; toda URL
  de `fuentes` pertenece a `URLS_FUENTES_OFICIALES`.
- **404: 0.** No se hallaron enlaces roto.

---

## AIF-C01 (nada compartido roto)

- `src/schemas/examen.ts` **sin cambios** (`git diff --stat HEAD` vacío).
- Ningún archivo de `src/data/aifC01/**` ni tests AIF modificados.
- Usos compartidos detectados: `EXAM_DIFFICULTY_COUNTS`/`DifficultyId` en
  `src/data/clfC02.ts:1` y `src/data/clfC02.ts` (simulacros); el tipo
  `ExamenQuestion` en `src/data/clfC02/types.ts:1` (solo tipo, sin runtime).
- `examen.ts` usa `.strict()` y no admite campos nuevos, pero CLF no reutiliza
  ese schema (usa `schemas/clfC02.ts`), así que no hay fuga.
- Suite completa 45/343 verde, incluidos `aifC01.*` y `examen.schema.spec.ts`.

## Contraste de reportes

- `remediacion.md:11` → 45/343 verificado.
- `remediacion.md:27` y `calibracion-oficial.md:42-52` → verificados contra la
  guía de examen (50 puntuadas + 15 no puntuadas = 65; 100–1,000; umbral 700;
  24/30/34/12) y la página de certificación (90 min; 65 ítems; 100 USD; 3 años).
- `remediacion.md:40,54` → "fuentes en 474": verificado (0 sin fuentes), pero
  contradicho por el artefacto `g9-fuentes.json` (W5).
- `remediacion.md:41` → mínimos G10 5/5/8/4: el guard pasa; `:63` "26
  escenarios" no coincide con los 28 reales (W4).
- `remediacion.md:23` → "111 servicios … 0 exenciones": **refutado** por C1.

---

## Veredicto

**NO APTO** para declarar READY.

Motivo principal (CRITICAL C1): el guard `serviceTrainingGuard` no demuestra el
cierre SERVICE de los 111 servicios; `AWS Resource Access Manager (AWS RAM)`
solo lo supera por un falso positivo del detector de citas sobre la palabra
genérica "RAM", y ese mismo defecto inyecta el URL de RAM en 4 ítems ajenos
(contaminando G9). Hasta corregir el alias y dar a RAM evidencia real
(correcta + distractor + contexto, sin exención), las afirmaciones de cierre
G9/SERVICE no son sostenibles. El resto de hallazgos son WARNING/SUGGESTION y no
bloquean por sí solos, salvo la evidencia contradictoria del artefacto G9 (W5),
que debe reconciliarse antes de publicar el cierre.

---

## Addendum de resolución (2026-09-26, posterior al informe)

Estado de cada hallazgo tras las correcciones del orquestador:

| Hallazgo | Estado | Acción |
|---|---|---|
| **C1** alias `RAM` | **RESUELTO** | `citas.ts` marca `ram` como token genérico; la sigla solo se reconoce como `AWS RAM`. Regresión añadida en `tests/unit/clfC02.citas.spec.ts`. |
| **C1** evidencia real de AWS RAM | **RESUELTO** | `2.3-q15` usa `AWS Resource Access Manager (AWS RAM)` como distractor con `porQueOpcion` y fuente; `matrizCoberturaServicios` vuelve a cumplir los 111. |
| **W2** fuentes de servicio no citado | Aceptado | Las URLs raíz de tema son defensa en profundidad; no se añade chequeo inverso (S2) en esta iteración. |
| **W3** fuentes obsoletas | Aceptado / documentado | 0 enlaces roto; S3 Glacier (legacy de vaults), whitepapers históricos de Professional Services/Compliance y planes de soporte discontinuados quedan como limitación conocida. |
| **W4** G10 léxico | Aceptado | Criterio fijo documentado en `ruido.ts`; algunos ítems son refuerzo léxico. Reporte ajustado a 28 ítems (26 añadidos + 2 preexistentes). |
| **W5** artefacto G9 contradictorio | **RESUELTO** | Se eliminaron los tres JSON de diagnóstico transitorios; la evidencia viva son los guards en verde. |
| **W6** asimetría de validación | Aceptado | Schema único para estándar; profesional cubierto por `professionalGuard`/`perOptionGuard`. |
| **S1** test de falso positivo | **HECHO** | `clfC02.citas.spec.ts`. |

Re-verificación tras las correcciones: `clfC02.fuentesGuard`, `fuentePorOpcionGuard`,
`serviceTrainingGuard` y `g10RuidoGuard` en verde (4 archivos / 6 tests), y specs
focalizados de integridad/cobertura/estilo/matriz/antilookalike en verde (44 tests).
Con C1 resuelto, no queda ningún CRITICAL; WARNING/SUGGESTION restantes están
documentados como limitaciones conocidas y no bloquean por sí solos.

