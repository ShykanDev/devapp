# Plan multiagente — cierre de pendientes CLF-C02

Objetivo: cerrar los gaps que quedaron abiertos tras la remediación
(`.kilo/audit/clf-c02/remediacion.md`): **G9** (trazabilidad/fuentes oficiales),
**SERVICE** (entrenamiento estricto por servicio), **G10** (escenarios con ruido),
**G6/reporte** (reconciliar calibración) y el **commit final**. No se añade
volumen por volumen: cada alta cierra un gap medido.

Alcance de escritura: `src/data/clfC02/**`, `src/schemas/clfC02*`,
`tests/unit/clfC02*`, `.kilo/audit/clf-c02/**`. **No** se toca
`src/schemas/examen.ts` ni AIF-C01.

Línea base a preservar (verde intermedio o final):
`node node_modules/vitest/vitest.mjs run tests/unit --reporter=dot` (41 archivos /
337 tests), `node node_modules/vue-tsc/bin/vue-tsc.js --noEmit`,
`node node_modules/eslint/bin/eslint.js src tests --ext .ts,.vue` (solo el
preexistente `src/main.ts:27`), `node node_modules/vite/bin/vite.js build`.

---

## 0. Estado de partida (verificado en código)

- Banco: **344 estándar + 130 profesional = 474** preguntas; `fuentes` solo existe
  en **10** (`src/data/clfC02/preguntas/multiple.ts`). `fuentes` es
  `string[]` opcional (`src/data/clfC02/types.ts:74`) y el schema
  (`src/schemas/clfC02.ts:21,72-80`) ya exige prefijo `https://docs.aws.amazon.com/`.
- `porQueOpcion` está completo en ambos bancos (`clfC02.perOptionGuard.spec.ts` verde).
- Servicios: 111 in-scope, todos citados (`clfC02.serviceCoverageGuard.spec.ts` verde),
  pero sin criterio estricto correcta/distractor/escenario.
- Auditoría: motor en `tests/unit/clfC02.audit.ts`; `tiposDeEscenario` y
  `reporteSesgo` ya existen (`:540-580`, `:420-435`).
- Calibración: `.kilo/audit/clf-c02/calibracion-oficial.md` ya refleja que score
  100–1,000 / umbral 700 / 90 min / 65 ítems están verificados con fuentes
  oficiales **gratuitas**; el `Official Practice Exam` de pago queda
  **no ejecutado y no bloqueante**. `remediacion.md` aún dice lo contrario.

## 0b. Decisiones cerradas por el usuario

- **D-G9 — Granularidad:** registro canónico `fuentes.ts` (servicio/concepto → URL
  oficial) + `fuentes` obligatorio **por pregunta** (≥1 URL en las 474). El guard
  comprueba que todo servicio citado (enunciado u opciones) tenga su URL en el
  registro y en las `fuentes` del ítem. **No** se añade array por opción.
- **D-SERVICE — Dureza:** estricto **con exenciones declaradas**. Cada servicio
  in-scope necesita ≥1 pregunta donde sea **correcta**, ≥1 donde sea **distractor**,
  y ≥1 contexto de **escenario/transferencia/reconocimiento**. Las exenciones van a
  una lista explícita y justificada (tope ≤10, revisadas por red team), nunca a un
  pase silencioso.
- **D-G10 — Criterio fijo:** ítem "con ruido" = enunciado de tipo
  `escenario|casoDeUso|tradeoff` que contiene ≥1 marcador de información
  irrelevante **y** ≥1 restricción de negocio/técnica. Mínimos por dominio:
  **D1 ≥5, D2 ≥5, D3 ≥8, D4 ≥4**. Por debajo, el guard falla.
- **D-COMMIT — Cierre:** última tarea = commit descriptivo del módulo CLF-C02
  (requiere permiso `git` de un agente de implementación; hoy `git add/commit`
  están denegados y necesitan confirmación one-shot).

---

## 1. Roster de agentes

Cada agente recibe: alcance, archivos permitidos, evidencia y criterio de
aceptación. **Ningún autor de contenido escribe guardrails.**

**A1 — Fuentes Registry Author** (escritor: `src/data/clfC02/fuentes.ts`)
- Crea `FUENTES_OFICIALES` con una entrada por: 111 servicios in-scope, supporting
  terms (DAX, ELB, Systems Center OpsCenter) y conceptos citados en opciones
  (responsabilidad compartida, Well-Architected, CAF, modelos de precio, planes de
  soporte, clases S3, tipos de cómputo, etc.).
- Forma: `{ id, etiqueta, url, categoria, verificadoEn, confidence: 'oficial' }`.
- Prohibido inventar URLs; solo `docs.aws.amazon.com` (o `aws.amazon.com/<servicio>`).
- Evidencia: `.kilo/audit/clf-c02/fuentes-registry.md` (tabla id → URL).
- Revisor: A2 · Guardrail: `fuentesGuard`.

**A2 — Sources Verifier** (read-only, independiente de A1)
- Verifica cada URL del registro con `webfetch`: responde 200 y el contenido
  corresponde al servicio. Marca `VERIFIED` / `BROKEN` / `MISMATCH`.
- No puede escribir en `src/`; solo corrige el artefacto de evidencia y devuelve
  la lista de incidencias a A1.
- Evidencia: `.kilo/audit/clf-c02/fuentes-verificacion.md`.

**A3 — Gap Diagnostics** (read-only)
- Con un spec temporal `tests/unit/_clfGaps.dev.spec.ts` (se borra al terminar),
  produce tres JSON en `.kilo/audit/clf-c02/`:
  - `g9-fuentes.json`: por pregunta, `fuentes` presentes y servicios citados sin
    URL en el registro (0 → completo).
  - `servicio-training.json`: por servicio, nº como correcta / distractor /
    escenario, y lista de servicios que no cumplen D-SERVICE.
  - `g10-ruido.json`: recuento por dominio de ítems "con ruido" y lista de ítems de
    escenario sin ruido/restricción.
- Reutiliza la detección de citas de `tests/unit/clfC02.audit.ts` (hoy privada);
  si necesita helpers, los duplica en el spec temporal, no en `src/`.
- Evidencia: los tres JSON + resumen en chat. Revisor: A11.

**A4–A8 — Content Wave Writers** (5 escritores, dominio disjunto)
- Reparto por dominio/tasks (un solo escritor por `task-*.ts`):
  - A4 D1: tasks 1.1–1.4 (estándar + profesional + grupos + comparaciones).
  - A5 D2: tasks 2.1–2.4.
  - A6 D3a: tasks 3.1–3.4.
  - A7 D3b: tasks 3.5–3.8.
  - A8 D4: tasks 4.1–4.3.
- Por cada uno de sus ítems: añade `fuentes` (URLs del registro, sin inventar) y, si
  el diagnóstico lo marca, cierra el gap de servicio (nueva pregunta solo si falta
  correcta/distractor/escenario) y añade ruido+restricción a los escenarios
  señalados. Mantiene `porQueOpcion` alineado y estilo oficial (single 4/1,
  multiple 5/2+).
- Prohibido: inflar preguntas sin justificar el gap, tocar guardrails, tocar
  archivos de otro dominio.
- Revisor: A3 (re-ejecuta diagnósticos) + A11.

**A9 — Guardrail Engineer** (independiente de A4–A8)
- Único dueño de `tests/unit/clfC02.audit.ts`, `tests/unit/clfC02.*Guard.spec.ts`,
  `src/data/clfC02/validacion.ts` y `src/schemas/clfC02.ts`.
- Escribe:
  - `clfC02.fuentesGuard.spec.ts`: toda pregunta de ambos bancos con `fuentes`
    no vacío, URLs `docs.aws.amazon.com`, y cada servicio citado cubierto por una
    URL del registro presente en el ítem.
  - `clfC02.fuentePorOpcionGuard.spec.ts` (redefinido D-G9): toda opción que cite
    un servicio in-scope/supporting debe estar cubierta por las `fuentes` del ítem.
  - `clfC02.serviceTrainingGuard.spec.ts`: D-SERVICE sobre los 111 menos la lista de
    exenciones declarada (`.kilo/audit/clf-c02/serviceTraining-exenciones.json`).
  - `clfC02.g10RuidoGuard.spec.ts`: mínimos D-G10 por dominio.
- Endurece `clfC02QuestionSchema.fuentes` a **obligatorio `.min(1)`** cuando A4–A8
  terminen (aviso: aplica al banco estándar vía `validarPreguntas`).
- Revisor: A11.

**A10 — Docs & Report** (escritor: `.kilo/audit/clf-c02/*.md`)
- Actualiza `remediacion.md`: G6 pasa a **resuelto/no bloqueante** (enlaza
  `calibracion-oficial.md`), G9/SERVICE/G10 a CERRADO con evidencia, backlog
  renovado y nueva decisión final (READY si los gates están verdes).
- Actualiza `blueprint-diff.md` solo si el contenido cambió hechos del blueprint.
- Revisor: A11.

**A11 — Final Red Team** (read-only, independiente)
- Intenta falsar: URLs inventadas/duplicadas, gaming del criterio de servicio
  (correcta y distractor triviales), gaming de ruido (frases vacías), exenciones
  injustificadas, regresiones AIF-C01, y coherencia del reporte.
- No modifica nada. Evidencia: `.kilo/audit/clf-c02/redteam-cierre.md`.
- Revisor: orquestador.

**Orquestador**
- Gating de fases, ejecución de los comandos de verificación, decisión READY/NOT
  READY y commit final.

---

## 2. Propiedad de archivos (anti-conflicto)

- `src/data/clfC02/fuentes.ts` → **A1** (único escritor, se congela antes de Fase 1).
- `src/data/clfC02/preguntas/task-*.ts`, `profesional/preguntas/task-*.ts`,
  `grupos/task-*.ts`, `comparaciones/task-*.ts` → un escritor por archivo (A4–A8).
- `src/data/clfC02/preguntas/multiple.ts` y `servicios-g2.ts` → **A6** (D3a).
- `tests/unit/clfC02.audit.ts`, `tests/unit/clfC02.*Guard.spec.ts`,
  `src/data/clfC02/validacion.ts`, `src/schemas/clfC02.ts` → **A9** exclusivo.
- `.kilo/audit/clf-c02/*.md/**` → **A10** (excepto los JSON de A3, que A3 regenera).
- Prohibido que A4–A8 editen guardrails o el registro.

---

## 3. Fases y gating

1. **Fase 0 (paralelo, solo lectura/registro):** A1 crea el registro, A2 lo verifica,
   A3 publica los tres diagnósticos.
   **Gate:** registro sin `BROKEN`/`MISMATCH` y diagnósticos publicados.
2. **Fase 1 (paralelo, escritura disjunta):** A4–A8 en oleadas por dominio,
   consumiendo registro + diagnósticos. Cada uno cierra `fuentes`, servicio y
   ruido de sus tasks.
   **Gate:** `g9-fuentes.json` en 0 faltantes; `servicio-training.json` sin
   incumplidos (salvo exenciones); `g10-ruido.json` ≥ mínimos; spec temporal borrado.
3. **Fase 2 (implementación):** A9 publica los cuatro guardrails y endurece el
   schema. Los guardrails deben nacer verdes.
   **Gate:** `vitest run tests/unit` verde (41 + 4 nuevos archivos).
4. **Fase 3 (solo lectura):** A11 red team; puede devolver hallazgos a Fase 1/2.
5. **Fase 4:** A10 actualiza el reporte; orquestador corre los 4 comandos globales.
6. **Fase 5:** decisión **READY / NOT READY** y **commit** (D-COMMIT).
   READY prohibido si queda un CRITICAL o si algún guard está rojo.

Ninguna fase avanza con un gate rojo.

---

## 4. Criterios de aceptación

- **G9:** 474/474 preguntas con `fuentes` ≥1 URL oficial; 0 servicios citados sin
  URL en el registro; `fuentesGuard` y `fuentePorOpcionGuard` verdes; schema
  `fuentes` obligatorio.
- **SERVICE:** `serviceTrainingGuard` verde para 111 − exenciones; cada exención con
  justificación firmada y revisada por el red team.
- **G10:** `g10RuidoGuard` verde con los mínimos D-G10.
- **Reporte:** `remediacion.md` refleja G6 resuelto/no bloqueante y G9/SERVICE/G10
  cerrados, con evidencia fechada.
- **Global:** `vitest run tests/unit`, `vue-tsc`, ESLint y `vite build` verdes;
  AIF-C01 intacto (sin cambios en `schemas/examen.ts`).
- **Commit** creado con mensaje descriptivo.

---

## 5. Verificación (comandos exactos)

```
node node_modules/vitest/vitest.mjs run tests/unit --reporter=dot
node node_modules/vue-tsc/bin/vue-tsc.js --noEmit
node node_modules/eslint/bin/eslint.js src tests --ext .ts,.vue
node node_modules/vite/bin/vite.js build
git status
git add <archivos del módulo>
git commit -m "<mensaje>"
```

Notas: no usar pipes ni `;` (denegados); `git add/commit` requiere confirmación
one-shot. El spec temporal `tests/unit/_clfGaps.dev.spec.ts` se elimina al cerrar
Fase 1.

---

## 6. Riesgos y mitigaciones

- **URLs inventadas:** A2 verifica cada URL con `webfetch` antes de congelar; el
  guard exige membresía en el registro.
- **Escritores concurrentes:** propiedad disjunta por archivo (A4–A8).
- **Guardrails rojos intermedios:** A9 los publica después de Fase 1; baseline se
  preserva al final.
- **Gaming del criterio de servicio/ruido:** red team A11 + revisión de exenciones.
- **Calibración externa incompleta:** documentada como no bloqueante (D-G6).

## 7. Fuera de alcance

- Ejecutar el `Official Practice Exam` de pago (no bloqueante).
- Tocar AIF-C01 o `src/schemas/examen.ts`.
- Reescribir preguntas por volumen (solo para cerrar gaps medidos).
