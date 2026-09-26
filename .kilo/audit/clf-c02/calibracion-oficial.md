# Calibración oficial — AWS CLF-C02

Artefacto de auditoría (A9). Fuente de la calibración Tier 2: set de práctica
oficial completado por el usuario el 2026-09-25. No se reproducen enunciados,
opciones ni explicaciones literales; solo características observadas.

## Tier 2 — Official Practice Question Set (OBSERVED)

| Rasgo | Valor | Estado |
|---|---|---|
| Ítems intentados / aciertos | 20 / 8 (40%) | OBSERVED |
| Reparto de formato | 14 opción única + 6 respuesta múltiple (30%) | OBSERVED |
| Opciones por ítem | 4 en opción única; 5 en respuesta múltiple | OBSERVED |
| Correctas por ítem | 1 en única; 2 en múltiple, con etiqueta `(Select TWO)` | OBSERVED |
| Explicación | obligatoria y **por opción** (`Why this is correct/incorrect`) | OBSERVED |
| Enlace por ítem | `Learn more about <servicio>` a documentación oficial | OBSERVED |
| Estilo de enunciado | 1–2 frases con framing de requisito | OBSERVED |
| Distractores | del mismo dominio, plausibles, diferencia en la explicación | OBSERVED |
| Controles de UX | `Your answer`, Confidence Level opcional, reporte por Domain/Task | OBSERVED |
| Desempeño por dominio | D1 25%, D2 25%, D3 56%, D4 33% | OBSERVED |

## Términos del material oficial fuera de los 111 (OBSERVED)

- Amazon DynamoDB Accelerator (DAX)
- Elastic Load Balancing (ELB)
- AWS Systems Manager OpsCenter

Decisión D7: se admiten como *supporting terms* (distractores/estudio), nunca
como núcleo de los 111 ni como respuesta correcta sin respaldo de la guía.

## Tier 1 — Documentación oficial (parcial)

Verificación de hechos de servicio contra `docs.aws.amazon.com` para los puntos
de diferenciación y terminología del banco. Cobertura: parcial; ver `fuentes`
por pieza en el reporte de remediación.

### Hechos del examen (fuentes oficiales gratuitas)

Verificados 2026-09-25 en dos páginas oficiales de AWS de acceso libre. No
requieren el `Official Practice Exam` (de pago).

Fuente A — Exam guide: `docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html`
- Puntuación escalada **100–1,000**, mínimo aprobatorio **700**.
- **50 preguntas puntuadas + 15 no puntuadas = 65** ítems.
- Opción múltiple: 1 correcta + 3 distractores. Respuesta múltiple: 2+ correctas
  de 5 o más opciones.
- Pesos por dominio: D1 24%, D2 30%, D3 34%, D4 12%.

Fuente B — Página de certificación: `aws.amazon.com/certification/certified-cloud-practitioner/`
- **Duración: 90 minutos**.
- Formato: **65 preguntas** (multiple choice / multiple response).
- Costo 100 USD; validez 3 años.

## External calibration — estado

- **Tier 2 (Official Practice Question Set)**: observado por el usuario.
- **Hechos del examen** (score escalado, umbral 700, temporizador, total de
  ítems): RESOLVED vía fuentes oficiales gratuitas (Tier 1 arriba).
- **Official Practice Exam (pago)**: NO ejecutado. Solo aportaría una
  simulación completa de práctica; no aporta hechos nuevos y no bloquea la
  remediación.

## Consecuencia de diseño

El modelo de pregunta migra de "una explicación" a **razonamiento por opción**
(`porQueOpcion`) más **fuente oficial** (`fuentes`), y la respuesta múltiple se
renderiza con `(Elige DOS)` / `(Elige TRES)` y 5 opciones.
