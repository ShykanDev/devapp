# Plan — Verificación de cumplimiento y remediación de la auditoría CLF-C02

## Objetivo

Confirmar, sección por sección, si el trabajo realizado sobre el módulo **AWS Certified Cloud Practitioner (CLF-C02)** cumple el prompt de auditoría original, y ejecutar todo lo que falte. El plan termina cuando las métricas de aceptación (sección "Definition of Done") están en verde y el reporte A–N está actualizado.

## Alcance y límites

- Solo se toca `src/data/clfC02*`, `src/views/clfC02/**`, `src/lib/clfC02Practice.ts`, `src/router/index.ts` y `tests/unit/clfC02*`.
- **AIF-C01 permanece intacto** (contenido, rutas, componentes, lógica, preguntas, progreso).
- Nada de dumps/braindumps/blogs para fijar alcance; solo fuentes oficiales de AWS.
- No construir por volumen: cada cambio debe cerrar un gap concreto de esta auditoría.

## Estado verificado (evidencia)

- Blueprint (4 dominios / 19 tasks / 135 objectives) coincide con el exam guide oficial vigente y con In-Scope/Out-of-Scope/Technologies.
- Matriz de 135 objectives (diagnóstico): **COMPLETOS 6 · PARCIALES 129 · FALTANTES 0 · con señales de falso dominio 118**.
- Sin bloque `escenario`: **55** (A cobertura real 4 · B superficial 32 · C falso dominio 19 · D 0).
- Sin bloque `comparacion`: **68** (A no aplica 32 · B diferenciación relevante ausente 36 · C/D 0).
- Banco: correcta en posición B 64% (A 92% en profesional) → mitigado por barajado en runtime; correcta estrictamente más larga en 85%; servicio nombrado en el enunciado en 25%.
- Ya aplicado: barajado anti-sesgo, capas `reconocimiento.ts` y `evaluables.ts` con vistas/rutas, correcciones factuales, negativos en 8 grupos, 10 preguntas reescritas, tests `clfC02.transfer.spec.ts` y `clfC02.layers.spec.ts`.

## Matriz de cumplimiento del prompt (25 secciones)

| # | Sección del prompt | Estado | Evidencia / gap |
|---|---|---|---|
| 0 | Auditar antes de modificar | CUMPLIDO | Auditoría y matriz previas a los cambios. |
| 1 | Reinvestigar AWS (fuentes oficiales) | PARCIAL | Verificado exam guide, domains, in-scope, out-of-scope, technologies, support plans. **Falta**: Skill Builder / Official Exam Prep / Official Practice Question Set (calibrar formato y dificultad). |
| 2 | Exam Guide no es lista exhaustiva | CUMPLIDO | Reconocimiento y correcciones derivan de "conocimiento necesario". |
| 3 | Matriz de cobertura | CUMPLIDO | Matriz de 135 objectives generada. Debe quedar como script reproducible. |
| 4 | Niveles de dominio 0–5 | PARCIAL | Niveles heurísticos por script; **falta revisión manual de críticos y familias confundibles**. |
| 5 | Auditoría de servicios in-scope | PARCIAL | Lista comparada 1:1. **Falta rúbrica de 10 puntos por servicio (111 servicios)**. |
| 6 | Service Recognition | PARCIAL | 14 familias, ~62 casos. **Falta cubrir 19 objectives sin reconocimiento y servicios restantes**. |
| 7 | Service Differentiation | PARCIAL | Pares existentes; **36 objectives con diferenciación relevante y ausente**. |
| 8 | Negative knowledge | PARCIAL | Añadido en familias clave; **5 objectives sin negativo (y revisión global)**. |
| 9 | Transferencia | PARCIAL | Diagnóstico por proxy; **sin verificación por concepto con redacción nueva**. |
| 10 | Overfitting de preguntas | PARCIAL | Auditado y mitigado el sesgo posicional; **sesgo de longitud/plantillas sin remediar**. |
| 11 | Variaciones superficiales | PARCIAL | Detección por similitud; **pares casi duplicados sin eliminar**. |
| 12 | Scenario Reasoning | PARCIAL | 32 objectives sin aplicación; falta variedad sistemática. |
| 13 | Scenario Transfer | PENDIENTE | Solo la capa de reconocimiento; falta capa formal de transferencia por concepto crítico. |
| 14 | No convertir en banco de preguntas | CUMPLIDO | Estructura por conocimiento. |
| 15 | Explicaciones con "si cambia X→Y" | PARCIAL | ~10 preguntas; el resto no lo tiene. |
| 16 | "What AWS can test" | CUMPLIDO | `evaluables.ts` (19 tasks) + vista. |
| 17 | Falsos dominios | CUMPLIDO | Lista y señales por objective. |
| 18 | Cobertura de escenarios (10 tipos) | PARCIAL | Auditado por conteo; **falta clasificación por los 10 tipos y cierre**. |
| 19 | Contenido justificable | CUMPLIDO | Principio aplicado. |
| 20 | Contenido innecesario | PARCIAL | Identificado; **remediación mínima**. |
| 21 | Validar contra domains | CUMPLIDO | Estructura oficial verificada. |
| 22 | Validación final | PARCIAL | Ejecutada para lo modificado; falta tras remediación completa. |
| 23 | Reporte A–N | CUMPLIDO | Entregado; debe actualizarse al final. |
| 24 | No modificar AIF-C01 | CUMPLIDO | Verificado en `git status`. |
| 25 | Regla final de calidad | PARCIAL | No verificable hasta cerrar transferencia. |

## Definition of Done (métricas de aceptación)

Tests guardrail en verde (se añaden como permanentes):

1. **Matriz**: 0 objectives FALTA; 0 SEÑALES DE FALSO DOMINIO.
2. **Diferenciación**: 0 objectives con alternativas relevantes sin par/bloque/pregunta de comparación.
3. **Aplicación**: 0 objectives sin pregunta de aplicación (escenario/tradeoff/caso de uso).
4. **Negativo**: 0 objectives sin `noUsar`/`errorComun`.
5. **Reconocimiento**: 100% de objetivos de servicio con caso requisito→servicio.
6. **Transferencia**: 100% de objectives críticos con ≥1 escenario nuevo sin nombre de servicio y con correcta no más larga.
7. **Banco**: 0 enunciados que nombren el servicio en objetivos de reconocimiento; 0 pares de preguntas con similitud >0,7; correcta estrictamente más larga en <20% (objetivo 0 con margen >25 caracteres).
8. **Explicaciones**: 100% con "por qué la correcta" + "por qué cada distractor falla" + "si cambia X→Y".
9. **Checklist #25**: 9/9 para cada objective crítico.
10. `vue-tsc`, ESLint (sin nuevos errores) y `vitest` en verde; `vite build` correcto.

## Fases y tareas

### Fase A — Cerrar fuentes oficiales y rúbrica por servicio (secciones 1 y 5)
- [x] A1 Dejar evidencia de alcance: URLs oficiales consultadas y resultado (estructura idéntica).
- [x] A2 Consultar Official Practice Question Set / Exam Prep (Skill Builder). Si requiere cuenta no disponible, marcar como "no accesible" y no usarlo para alcance. → **No accesible** (requiere cuenta); no se usó para fijar alcance.
- [x] A3 Crear `src/data/clfC02/auditoriaServicios.ts` con la rúbrica de 10 checks por cada servicio in-scope; generar el informe y listar los "no".

### Fase B — Consolidar matriz y clasificar escenarios (secciones 3, 4, 18)
- [x] B1 Script reproducible `tests/unit/clfC02.matrix.spec.ts` (o script dev) que regenera la matriz de 135 (sin escribir en el repo).
- [x] B2 Revisión manual de niveles 0–5 en críticos y familias confundibles; ajustar.
- [x] B3 Clasificar cada objective importante según los 10 tipos de escenario (#18) y marcar faltantes.

### Fase C — Remediación de contenido (secciones 6, 7, 8, 12, 13, 16, 19, 20)
- [x] C1 Diferenciación: crear comparaciones para los objectives con diferenciación relevante ausente (lista de la auditoría), con común/diferencia/cuándo cada uno/cuándo NO/requisito que descarta.
- [x] C2 Negativo: completar `noUsar` en los objectives sin negativo.
- [x] C3 Aplicación: escenarios para los objectives sin aplicación, variando contexto/industria/tamaño/restricción/información irrelevante.
- [x] C4 Reconocimiento: extender la capa a los objectives sin reconocimiento y a servicios sin caso (0/111 sin caso).
- [x] C5 Transfer: crear capa "scenario transfer" por concepto crítico (mismo requisito, redacción/contexto distintos, sin nombrar el servicio).
- [ ] C6 Poda: reducir contenido fuera de alcance/avanzado (banco profesional D1, solapamientos 3.1↔D1 y 3.4↔1.3, detalle de NAT gateway, etc.). → **Diferido**: es poda discrecional, no una métrica de aceptación; requiere revisión de alcance caso a caso.

### Fase D — Remediación del banco (secciones 9, 10, 11, 15, 17)
- [x] D1 Normalizar longitudes: la correcta deja de ser la más larga y los distractores son del mismo dominio y plausibles.
- [x] D2 Eliminar fuga de servicio en enunciados de reconocimiento.
- [x] D3 Diversidad: eliminar pares casi duplicados y asegurar ≥2 tipos de razonamiento por objective.
- [x] D4 Explicaciones con "por qué falla cada distractor" + "si cambia X→Y" en todas las preguntas con alternativas plausibles.
- [ ] D5 (Decisión) Soporte de respuesta múltiple: schema + runner + contenido. **Diferido**: `src/schemas/examen.ts` es compartido con AIF-C01 (no debe tocarse) y el almacén de respuestas (`Record<string, number>`) es transversal; un soporte contenido exige un tipo de pregunta y un runner propios de CLF-C02.

### Fase E — Validación y reporte (secciones 22, 23, 25)
- [x] E1 Re-ejecutar matriz; confirmar métricas de aceptación.
- [x] E2 Checklist #25 (9 preguntas) por objective crítico.
- [x] E3 Actualizar reporte A–N.
- [x] E4 Dejar los guardrails como tests permanentes.

## Guardrails (tests a añadir)

- `clfC02.transferGuard.spec.ts`: longitud de correcta, fuga de servicio, similitud de preguntas, tipos por objective.
- `clfC02.coverageGuard.spec.ts`: aplicación, diferenciación relevante, negativo y reconocimiento por objective.
- `clfC02.servicesGuard.spec.ts`: todo servicio in-scope con ficha y con caso de reconocimiento o justificación.

## Riesgos

- Reescribir ~190 preguntas con sesgo de longitud es extenso; mitigación: proceso por lotes con el guardrail de longitud como red de seguridad.
- La revisión manual de 135 objectives y 111 servicios puede introducir subjetividad; mitigación: criterios fijos y evidencia citada.
- El soporte multiple-response toca schema/runner y puede afectar flujos existentes; mitigación: hacerlo al final y con tests de puntuación.

## Decisiones abiertas (con recomendación)

1. **Respuesta múltiple**: incluir (recomendado) o dejar fuera de alcance.
2. **Banco profesional**: mantener separado (recomendado) o integrar en el estándar.
3. **Umbral de longitud**: exigir 0 con margen >25 caracteres (recomendado) vs tasa <20%.
4. **Contenido fuera de alcance**: reducir (recomendado) vs solo marcar.

## Orden de ejecución

Fase A → B → C1/C2 → C3/C4/C5 → D1–D4 → E1/E2 → D5 → E3/E4.

## Estado de ejecución (2026-09-24)

Métricas medidas por los guardrails permanentes (`clfC02.matrix.spec.ts`,
`clfC02.coverageGuard.spec.ts`, `clfC02.transferGuard.spec.ts`,
`clfC02.servicesGuard.spec.ts`) tras la remediación:

| Métrica | Antes (auditoría) | Después |
|---|---|---|
| Objectives COMPLETOS | 6 | 135 |
| Objectives sin contenido / sin preguntas | 0 | 0 |
| Objectives sin conocimiento negativo | 5 | 0 |
| Objectives con alternativas sin diferenciación | 36 | 0 |
| Objectives sin pregunta de aplicación | 32 | 0 |
| Objectives de servicio sin reconocimiento | 19 (ampliado: 41) | 0 |
| Objectives críticos sin transferencia | 22 | 0 |
| Señales de falso dominio | 118 | 0 |
| Servicios in-scope sin caso de reconocimiento | 58 de 111 | 0 de 111 |
| Enunciados con fuga de servicio | 52 | 0 |
| Preguntas con correcta estrictamente más larga | 84 % | 9.7 % (< 20 %) |
| Preguntas con margen de longitud > 25 | 202 | 0 |
| Pares de preguntas con similitud > 0,7 | 0 | 0 |
| Explicaciones sin cierre "si cambia X → Y" | mayoría | 0 |
| Banco total (estándar + profesional) | 354 | 444 |

Validación: `vitest` 33 archivos / 305 tests en verde; `vue-tsc --noEmit` limpio;
ESLint sin errores nuevos (persiste el preexistente `src/main.ts:27`); `vite build` correcto.

Backlog explícito (no bloquea las métricas de aceptación): D5 (respuesta múltiple) y
C6 (poda de contenido fuera de alcance).
