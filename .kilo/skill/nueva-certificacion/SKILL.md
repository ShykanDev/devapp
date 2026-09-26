---
name: nueva-certificacion
description: Úsala cuando el usuario pida agregar un módulo/sección de estudio para una certificación nueva en DevApp (por ejemplo "crea el módulo para AWS Developer Associate" o "agrega la guía de tal certificado"). Define el molde completo: requisitos de formato oficial, capas de contenido, anti-sesgo, guardrails, pipeline multiagente, layout de archivos, verificación y Definition of Done, derivado de la implementación CLF-C02.
---

# Skill — Nueva certificación (molde DevApp)

Esta skill es el **molde reutilizable** para agregar una sección completa de estudio
de una certificación nueva, con la sintaxis mejorada y sin repetir los errores de la
primera sección (AIF-C01: demasiado contenido memorizable y preguntas internas que no
reflejaban el formato real del examen).

**Implementación de referencia (canónica):** el módulo CLF-C02 que ya existe en este
repo. Cópiala como está: mismas capas, mismos guardrails, mismos umbrales. Rutas:
`src/data/clfC02/**`, `src/schemas/clfC02.ts`, `src/views/clfC02/**`,
`tests/unit/clfC02*`. Antes de escribir nada, léelas.

---

## 0. Regla de oro (por qué existe esta skill)

El objetivo **no** es acumular definiciones ni rellenar preguntas. El objetivo es que
un concepto se reconozca **en la dirección y formulación que usa el examen real**
(requisito → servicio/capacidad), con distractores plausibles y sin pistas de formato.
Cualquier decisión que no aumente transferencia comprobable no se implementa.

Prohibido:
- Copiar enunciados, opciones o explicaciones de material oficial.
- Inventar datos, servicios, URLs o cifras no verificadas.
- Presentar cobertura interna o "% interno" como probabilidad de aprobar.
- Cerrar un gap citando "el objective está cubierto", "hay N preguntas" o "el test pasa".

---

## 1. Especificación de formato oficial (obligatoria)

Antes de generar contenido, verificar el formato real del examen en sus fuentes
oficiales (guía del examen + página de certificación). Para AWS las reglas observadas
son:

- **Opción única:** exactamente **4 opciones**, **1 correcta**.
- **Respuesta múltiple:** exactamente **5 opciones**, **2+ correctas**, con etiqueta
  visible `(Elige DOS)` / `(Elige TRES)` en el enunciado.
- **Razonamiento por opción obligatorio** (`porQueOpcion`): cada opción —correcta e
  incorrecta— explica por qué lo es, imitando el `Why this is correct / Why this would
  be incorrect` oficial.
- **Fuente oficial por ítem** (`fuentes`): ≥1 URL oficial (`docs.aws.amazon.com` o
  `aws.amazon.com`) que respalde el ítem; sustituye al `Learn more` oficial.
- **Estilo de enunciado:** 1–2 frases con framing de requisito ("Un usuario necesita…",
  "Una empresa requiere…", "¿Qué servicio cumple estos requisitos?", "¿Cuál es la
  opción MÍNIMA…?"). Sin relleno.
- **Distractores:** del mismo dominio, plausibles, con diferencia decisiva en la
  explicación; nunca absurdos.
- **Scoring:** acierto solo con **conjunto exacto**; subconjunto propio no vacío = fallo
  parcial (diagnóstico, no suma); seleccionar todo = fallo. No replicar el scoring
  escalado de AWS.

Si una certificación no es de AWS: obtener su formato oficial equivalente y registrar
las diferencias en la documentación del módulo.

---

## 2. Arquitectura de contenido (7 capas)

Cada módulo DEBE implementar las mismas capas. Sin capas no hay transferencia.

1. **Blueprint** (`src/data/<modulo>.ts`): dominios con peso, tasks, objectives,
   servicios in/out de alcance, tecnologías/conceptos, metadatos de la certificación
   (código, URL de la guía oficial, fecha de revisión, nº de preguntas y duración).
2. **Grupos temáticos** (`grupos/task-X.Y.ts`): el material de estudio por task, con
   bloques tipados (ver §3).
3. **Tarjetas** (`tarjetas/task-X.Y.ts`): repaso activo; cada crítica debe tener tarjeta.
4. **Comparaciones** (`comparaciones/task-X.Y.ts`): pares de confusión reales
   (A-vs-B) con diferencia decisiva, cuándo usar cada uno y escenario. Cada par declara
   los `objetivos` que diferencia.
5. **Reconocimiento** (`reconocimiento.ts`): requisito → servicio/capacidad. Cada caso
   tiene `descartar[]` (por qué NO las otras). **Prohibido nombrar el servicio en el
   requisito.**
6. **Transferencia** (`transferencia.ts`): escenarios donde el mismo objective se
   pregunta de otra forma; el requisito tampoco nombra el servicio.
7. **Evaluables** (`evaluables.ts`): capacidades evaluables por task.

Más: **glosario** (`glosario/general.ts`) y **fichas de servicio**
(`servicios/general.ts`). El banco de preguntas (`preguntas/task-X.Y.ts`) consume todo
lo anterior.

---

## 3. Tipos y bloques (contrato)

`types.ts` define, como mínimo:

- `Bloque`: `concepto` (`md`), `comparacion` (`parId`), `cuandoUsar` (`usar[]`,
  `noUsar[]`), `escenario` (`situacion`, `analisis`, `servicio?`), `errorComun`
  (`error`, `correccion`), `clave` (`items[]`), `ejemplo` (`md`), `servicio`
  (`nombre`).
- `GrupoTematico`: `{ id, titulo, objetivos[], bloques[], preguntasGuia[] }`.
- `PreguntaBase`: `{ id, taskId, objetivos[], question, options[], correctAnswer,
  explanation, formato?, correctAnswers?, porQueOpcion?, fuentes? }`.
  - `formato: 'single' | 'multiple'` (ausente = single).
  - `correctAnswers` en múltiple incluye `correctAnswer`.
  - `respuestasCorrectas(pregunta)` devuelve los índices correctos de ambos formatos.
- `ParConfusion`: `{ id, etiqueta, a, b, diferenciaClave, cuandoA[], cuandoB[],
  escenarioA, escenarioB, preguntaIds[], objetivos[] }`.
- `Servicio`: `{ nombre, categoria, queResuelve, paraQueSeUsa, seDiferenciaDe[],
  tareas[], relacionados[] }`.

`explanation` cierra con el patrón **"si cambia X → Y"** (opcional como extra, pero es
la convención del repo).

---

## 4. Anti-sesgo (lo que delató la respuesta en AIF-C01)

Implementar y medir con guardrails; umbrales exactos:

| Regla | Umbral | Dónde |
|---|---|---|
| La correcta NO es la más larga en el banco | ratio < 0.20 | `reporteSesgo().correctaMasLargaRatio` |
| Ventaja de longitud de la correcta | margen ≤ 25 caracteres | `reporteSesgo().conMargenMayor25 === 0` |
| Ningún objective con ≥60 % de preguntas de correcta-más-larga | 0 | `filasAuditoria().falsoDominio` |
| Sin fuga del servicio en enunciados de reconocimiento | 0 | `reporteSesgo().fugasServicio === 0` |
| Sin casi-duplicados | similitud ≤ 0.70 | `paresSimilares()` |
| Dispersión posicional en sesiones reales | barajado uniforme | `sessionGuard` |

Reglas adicionales:
- **Barajar en runtime** siempre: al construir práctica/examen, permutar opciones y
  **remapear** `correctAnswer`, `correctAnswers` y `porQueOpcion`. Las opciones
  "orden-sensibles" (que contienen "todas las anteriores", "ambas", "N."…) se dejan
  fuera del barajado de forma deliberada.
- **No delatar por longitud**: al escribir una opción correcta larga, alargar también
  un distractor.
- Nunca mostrar el nombre del servicio en el enunciado cuando se evalúa
  reconocimiento (requisito → servicio).

---

## 5. Cobertura y evidencia

- Objetivos con `profundidad` (`critico` / `esencial` / `estandar`).
- Todo **crítico** necesita: grupo con `concepto` + `comparacion` + `escenario` +
  `errorComun`, pregunta de aplicación (escenario/tradeoff), tarjeta y transferencia.
- **Diferenciación estricta:** un objetivo solo cuenta como diferenciado si el par de
  confusión **declara ese objetivo** en `objetivos` (evita el bug "lookalike": un par de
  A usado para dar por cubierto B). Debe existir un test de regresión que falle si se
  reintroduce.
- **Reconocimiento validado:** `caso.objetivos` obligatorio, existente y con servicio
  en alcance.
- **Fuentes:** toda pregunta con `fuentes`; todo servicio citado en el ítem respaldado
  por su URL oficial registrada.
- **Entrenamiento por servicio/capacidad:** cada uno in-scope debe aparecer como mínimo
  como correcto, como distractor y en un contexto de escenario/reconocimiento/
  transferencia. Exenciones explícitas y justificadas, nunca pases silenciosos.
- **Ruido deliberado:** un porcentaje mínimo de ítems de aplicación con información
  irrelevante + restricción de negocio/técnica, bajo criterio fijo y con guardrail.

---

## 6. Guardrails a implementar (equivalen a los de CLF-C02)

Crear en `tests/unit/<modulo>.*Guard.spec.ts`:

- `integrity` / esquema (`<modulo>QuestionSchema` con Zod).
- `officialStyle` (4/1 y 5/2+ con etiqueta).
- `coverage` y `coverageGuard` (objectives y mínimos de banco).
- `antilookalike` (regresión de la diferenciación estricta).
- `perOptionGuard` (`porQueOpcion` completo y alineado).
- `fuentesGuard` + `fuentePorOpcionGuard` (URLs oficiales y cobertura de citas).
- `serviceCoverageGuard` (todos los servicios citados) y `serviceTrainingGuard`
  (correcto + distractor + escenario).
- `g10RuidoGuard` (mínimos por dominio).
- `transferGuard` (sesgos, casi-duplicados, cierres X→Y).
- `sessionGuard` (dispersión posicional real).
- `matrix` (matriz de cobertura de objectives) y `layers` (capas).
- `professionalGuard` si hay banco de nivel difícil.
- Motor compartido `<modulo>.audit.ts` (no es spec) que consumen los guardrails.
- `validacion.ts` con `validar<Modulo>()` que emite hallazgos con código.

Ningún autor de contenido escribe los guardrails que validan su contenido.

---

## 7. Protocolo de fuentes (verificación externa)

Orden de precedencia: documentación oficial del producto > guía del examen > páginas
oficiales de certificación > material oficial de práctica > contenido interno.

Reglas:
- Solo fuentes oficiales. Prohibido Reddit, blogs, dumps, cursos de terceros.
- **Verificar cada URL con `webfetch`** antes de registrarla; prohibido inventar URLs.
- Registrar `{ id, etiqueta, url, categoria, verificadoEn, confidence }` en
  `fuentes.ts`, con lista `URLS_FUENTES_OFICIALES` y helper `urlDeServicio()`.
- Si no hay evidencia oficial → marcar `UNVERIFIED`, no rellenar con suposiciones.

---

## 8. Pipeline multiagente (el que funcionó)

Usar subagentes con **propiedad de archivos disjunta** y fases con gates:

- **Fase 0 — Investigación (read-only) + registro.**
  - A1: diferencia el blueprint oficial (dominios, tasks, objectives, in/out of scope).
  - A2: crea `fuentes.ts` y verifica URLs con `webfetch` (un verificador distinto del
    autor).
  - A3: diagnósticos de gaps (fuentes, entrenamiento por servicio, ruido) con un spec
    temporal que se borra al terminar.
  - **Gate:** blueprint sin faltantes y registro sin URLs rotas.
- **Fase 1 — Contenido en oleadas por dominio (escritura disjunta).**
  - Un escritor por `task-X.Y.ts`; nunca dos agentes en el mismo archivo.
  - Cada oleada: `fuentes` + cierre de gaps de servicio + ruido.
  - **Gate:** diagnósticos en 0 faltantes.
- **Fase 2 — Guardrails (autor independiente).** Se publican tras el contenido y deben
  nacer verdes.
- **Fase 3 — Red team adversarial (read-only).** Intenta falsar el cierre (URLs
  inventadas, gaming de criterios, exenciones injustificadas, regresiones de otros
  módulos). Deja un informe y un veredicto; los hallazgos se resuelven con addendum.
- **Fase 4 — Reporte + verificación global + decisión.**
- **Fase 5 — Commit** descriptivo (solo si el usuario lo pide).

Regla de conflictos: se resuelve por evidencia citada, nunca por votos de agentes.

---

## 9. Layout de archivos esperado

```
src/data/<modulo>.ts                       # blueprint
src/data/<modulo>/
  types.ts  alcance.ts  citas.ts  fuentes.ts  ruido.ts
  registroContenido.ts  coberturaServicios.ts  validacion.ts
  reconocimiento.ts  transferencia.ts  evaluables.ts
  grupos/task-X.Y.ts  tarjetas/...  preguntas/...  comparaciones/...
  glosario/general.ts  servicios/general.ts
  profesional/{types.ts,registro.ts,preguntas/task-X.Y.ts}   # opcional
src/schemas/<modulo>.ts
src/views/<modulo>/*.vue                    # overview, dominio, task, práctica, review,
                                            # glosario, servicios, búsqueda, cobertura,
                                            # reconocimiento, transferencia, evaluables
src/router/index.ts                         # rutas aditivas bajo /<slug>
tests/unit/<modulo>*.spec.ts  +  <modulo>.audit.ts
.kilo/audit/<modulo>/                       # reportes y evidencia
.kilo/plans/<timestamp>-<modulo>-*.md       # plan de la ejecución
```

Sin dependencias nuevas fuera del stack autorizado (Vue 3 + Vite + Tailwind v4 +
Ionic + Firebase + Zod; ver `AGENTS.md`).

---

## 10. Verificación obligatoria

```
node node_modules/vitest/vitest.mjs run tests/unit --reporter=dot
node node_modules/vue-tsc/bin/vue-tsc.js --noEmit
node node_modules/eslint/bin/eslint.js src tests --ext .ts,.vue
node node_modules/vite/bin/vite.js build
```

Notas del entorno:
- PowerShell bloquea `npx.ps1`: usar `node node_modules/...` directamente.
- No usar pipes ni `;` en comandos.
- `git add`/`commit` requieren confirmación explícita del usuario.

---

## 11. Definition of Done

Un módulo se puede declarar **READY** solo si:
- Cero hallazgos CRITICAL abiertos; el bug "lookalike" tiene test de regresión.
- Todos los guardrails de §6 en verde y la verificación de §10 limpia.
- Todo objetivo crítico con las capas de §5; diferenciación estricta y reconocimiento
  validados.
- Todo servicio/capacidad in-scope entrenado (o exención justificada y revisada).
- Fuentes oficiales verificadas por un agente distinto del que las escribió.
- Red team con veredicto y addendum de resolución.
- Reporte en `.kilo/audit/<modulo>/` en español, con bloques de estado separados
  (STRUCTURAL / CONCEPTUAL / SCENARIO / SERVICE / DIFFERENTIATION / FORMAT /
  EXTERNAL CALIBRATION / UNKNOWN-UNVERIFIED).

**Advertencia obligatoria en el reporte:** READY significa "sin huecos pendientes del
plan", **no** "garantía de aprobar". La calibración externa se declara con su cobertura
real (p. ej. set de práctica oficial) y lo que falte se marca como limitación conocida.

---

## 12. Cómo usarlo (flujo cuando el usuario pide una certificación nueva)

1. Confirmar con el usuario: **código**, **nombre**, **idioma del contenido**, **nivel**
   y alcance (¿incluye banco profesional?).
2. Leer la implementación de referencia CLF-C02 antes de crear nada.
3. Ejecutar §7 (fuentes) y §8 Fase 0 antes de escribir contenido.
4. Seguir las fases con gates y la propiedad de archivos.
5. Cerrar con §10, §11 y el reporte.

Rellena y conserva esta plantilla por módulo:

```text
Certificación: <nombre> (<código>)
Idioma del contenido: <es | en | ...>
Nivel: <foundational | associate | professional>
Examen real: <nº preguntas> preguntas, <minutos> min, umbral <score>
Dominios y pesos: <D1 xx% / D2 xx% / ...>
Formato oficial: <reglas de opción/opciones y multiple>
Fuentes oficiales: <URL guía del examen, URL certificación>
Alcance de servicios/capacidades: <in / out>
¿Banco profesional?: <sí / no>
Slug de rutas: /<slug>
```
