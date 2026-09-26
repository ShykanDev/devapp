# Remediación CLF-C02 — reporte A–R

Fecha de cierre: 2026-09-26 (remediación base: 2026-09-25).
Alcance: `src/data/clfC02/**`, `src/views/clfC02/**`, `src/lib/clfC02*`,
`src/schemas/clfC02*`, `tests/unit/clfC02*`. AIF-C01 intacto.

## Verificación global

| Comando | Resultado |
|---|---|
| `vitest run tests/unit` | 45 archivos / 343 tests en verde (línea base 33/305) |
| `vue-tsc --noEmit` | limpio |
| ESLint (`src tests`) | solo el preexistente `src/main.ts:27` |
| `vite build` | correcto |

## Estado en 8 bloques (§9) — sin traducir a "% de aprobar"

| Bloque | Estado | Evidencia |
|---|---|---|
| STRUCTURAL | COMPLETO | 4 dominios / 19 tasks / 135 objectives / 111 servicios verificados contra el exam guide |
| CONCEPTUAL | COMPLETO | 135 objectives con grupo, pregunta, negativo y aplicación; críticos con checklist completo |
| SCENARIO | COMPLETO | 0 objectives sin pregunta de aplicación; transferencia en todos los críticos |
| SERVICE | COMPLETO | `serviceTrainingGuard`: los 111 servicios con rol correcto + distractor + escenario/reconocimiento (0 exenciones) |
| DIFFERENTIATION | COMPLETO | 0 objectives con alternativas sin par que los declare (validación estricta + regresión) |
| FORMAT | COMPLETO | single 4/1 y multiple 5/2+ con `(Elige DOS)`; banco de formato de 10 ítems; scoring por conjunto exacto |
| EXTERNAL CALIBRATION | COMPLETO (sin Practice Exam) | Tier 2 OBSERVED (Practice Question Set, 20 ítems) + Tier 1 verificado en fuentes oficiales gratuitas (score 100–1,000, umbral 700, 90 min, 65 ítems). El Practice Exam de pago queda no ejecutado y no bloqueante |
| UNKNOWN-UNVERIFIED | RESUELTO | score escalado, temporizador y nº de ítems verificados en exam guide + página de certificación (ver `calibracion-oficial.md`) |

## Gaps G1–G12

| Gap | Estado | Nota |
|---|---|---|
| G1 sin respuesta múltiple | CERRADO | 10 ítems `multiple` + infra completa |
| G2 16 servicios sin banco | CERRADO | 16 ítems en `preguntas/servicios-g2.ts`; `serviceCoverageGuard` |
| G3 diferenciación incompleta | CERRADO | 3 pares nuevos + 5 pares extendidos; 11 objectives cubiertos |
| G4 par lookalike `2.3#3` | CERRADO | validación por `par.objetivos` + `clfC02.antilookalike.spec.ts` |
| G5 reconocimiento sin validación | CERRADO | `caso.objetivos` obligatorio, válido y servicio en alcance |
| G6 calibración externa | CERRADO (no bloqueante) | hechos del examen verificados con fuentes oficiales gratuitas; Practice Exam opcional |
| G7/G8 sesgo y guardrails profesional | CERRADO | `professionalGuard`, `sessionGuard`; duplicados corregidos |
| G9 trazabilidad/fuentes | CERRADO | `fuentes.ts` (111 servicios + conceptos + supporting terms + documentos), `fuentes` en las 474 preguntas, `fuentesGuard` + `fuentePorOpcionGuard` |
| G10 escenarios con ruido | CERRADO | criterio fijo en `ruido.ts`; `g10RuidoGuard` con mínimos 5/5/8/4 por dominio |
| G11 duplicado 1.2-q1/prof-1.2-q1 | CERRADO | 8 duplicados profesional reescritos |
| G12 Lustre | CERRADO | verificado como fuera de alcance, sin fugas |

## Cambios relevantes

- **Validación (`validacion.ts`)**: un `comparacion` solo diferencia objectives que el par
  declara (`bloque.comparacionDesalineada`); validación de reconocimiento; formato
  single/multiple, `porQueOpcion` y `fuentes` (ahora obligatorio en el esquema).
- **Tipos/scoring/UI**: `formato`, `correctAnswers`, `porQueOpcion`, `fuentes`; puntuación
  por conjunto exacto con `parciales`; barajado remapea arrays; runner multiselección +
  razonamiento por opción en resultados; `src/schemas/clfC02.ts`.
- **Trazabilidad (G9)**: `src/data/clfC02/fuentes.ts` (registro canónico verificado),
  `citas.ts` (detección de citas con alias), `fuentes` en los 474 ítems.
- **Servicios (SERVICE)**: `coberturaServicios.ts` mide correcta/distractor/escenario por
  servicio; `exencionesServicio.ts` (lista vacía).
- **Ruido (G10)**: `ruido.ts` define el criterio fijo y los mínimos por dominio.
- **D7**: `TERMINOS_MATERIAL_OFICIAL` (DAX, ELB, OpsCenter) como distractores; fuera del
  núcleo de 111.
- **Contenido**: `porQueOpcion` en los 315 estándar; 10 de respuesta múltiple; 16 para
  servicios sin banco; 3 pares + 3 preguntas de comparación; 8 duplicados profesionales
  reescritos; distractores añadidos para ECR, API Gateway, S3 Glacier, Systems Manager y
  Well-Architected Tool; ruido+restricción en 26 escenarios (28 en total con los
  preexistentes); AWS RAM con distractor real en `2.3-q15` tras corregir el falso
  positivo del alias `RAM` (red team C1).
- **Guardrails nuevos**: `antilookalike`, `officialStyle`, `multipleResponse`,
  `perOptionGuard`, `professionalGuard`, `sessionGuard`, `serviceCoverageGuard`,
  `fuentesGuard`, `fuentePorOpcionGuard`, `serviceTrainingGuard`, `g10RuidoGuard`.

## Banco final

| Banca | Preguntas |
|---|---|
| Estándar | 344 |
| Profesional | 130 |
| Total | 474 |
| Pares de confusión | 67 |

## Qué NO podemos afirmar

- Que aprobar el módulo implique aprobar el examen: no se ejecutó el `Official Practice
  Exam` de pago; la calibración externa se apoya en el Practice Question Set y en fuentes
  oficiales gratuitas.
- Que los porcentajes internos midan probabilidad de aprobar (prohibido por el plan).

## Decisión (Fase H)

**READY.** El red team independiente emitió un CRITICAL (falso positivo del alias
`RAM` en G9/SERVICE); se corrigió `citas.ts`, se dio a AWS RAM evidencia real de
distractor (`2.3-q15`), se añadió la regresión `clfC02.citas.spec.ts` y se
eliminaron los artefactos de diagnóstico obsoletos. No quedan CRITICAL abiertos;
G9/SERVICE/G10 cierran con guardrails en verde y la línea base está verde
(45 archivos / 343 tests). Los WARNING restantes están documentados como
limitaciones conocidas en `.kilo/audit/clf-c02/redteam-cierre.md` (addendum).

## Backlog opcional

1. `Official Practice Exam` (pago) para calibrar la simulación completa (no bloqueante).
2. Fuente por opción estricta (array independiente) si se quiere granularidad mayor que la
   actual (fuente por ítem + cobertura por opción).
