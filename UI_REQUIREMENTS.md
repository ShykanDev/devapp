# MediApp — UI Requirements & Design System

> Fuente de verdad visual de MediApp. Cualquier pantalla/componente nuevo DEBE seguir estas reglas para mantener una experiencia **premium, minimalista y consistente**, inspirada en los principios de diseño de Apple (contención, tipografía, espacios, jerarquía y limpieza), pero sin copiar su UI.

---

## 1. Identidad y propósito

- **App:** Medicina / salud (educación médica, secciones generadas por IA, consulta con asistente).
- **Objetivo visual:** transmitir **confianza, calma y sofisticación**. Nada de gradientes decorativos, tarjetas flotantes o efectos llamativos. La interfaz debe sentirse costosa sin verse complicada.

---

## 2. Stack y configuraciones fijas

| Área | Valor fijo | Dónde |
|---|---|---|
| Plataforma visual | **iOS (modo `ios` forzado global)** | `src/main.ts` → `.use(IonicVue, { mode: 'ios' })` |
| Framework | Ionic v9 + Vue 3 + Vite | `package.json` |
| CSS utilitario | Tailwind CSS v4 (`@tailwindcss/vite`) | `vite.config.ts` |
| Tokens de diseño | `src/theme/variables.css` (importa `tailwindcss` + theme) | — |
| Tipografía | **Inter** (Google Fonts) con fallback sistema | `index.html`, `--font-sans` |
| Íconos | **ionicons** (`ionicons/icons`) | — |

**No usar** estilos Material (`md`), ni componentes fuera del sistema visual descrito abajo.

---

## 3. Tokens de diseño

Todas las pantallas usan variables CSS `--mt-*` (definidas en `src/theme/variables.css`, con variantes light/dark por `prefers-color-scheme`).

### Color (neutro + acento)

| Token | Light | Dark | Uso |
|---|---|---|---|
| `--mt-canvas` | `#f5f5f7` | `#0d0e11` | Fondo de pantalla (gris cálido muy sutil) |
| `--mt-surface` | `#ffffff` | `#1a1b1f` | Superficies elevadas (listas agrupadas, paneles) |
| `--mt-muted` | `#f0f0f2` | `#232429` | Fondos secundarios (inputs, chips) |
| `--mt-ink` | `#1d1d1f` | `#f5f5f7` | Texto primario |
| `--mt-ink-2` | `#6e6e73` | `#a1a1a6` | Texto secundario |
| `--mt-ink-3` | `#8e8e93` | `#86868b` | Metadatos, placeholders, hints |
| `--mt-line` | `rgba(0,0,0,.08)` | `rgba(255,255,255,.09)` | Bordes / separadores |
| `--mt-line-strong` | `rgba(0,0,0,.16)` | `rgba(255,255,255,.18)` | Bordes en foco/hover |
| `--mt-accent` | `#0a68d6` | `#0a84ff` | Acciones, enlaces, elemento activo |
| `--mt-accent-soft` | `#e8f1fc` | `#1b3a5c` | Fondo de iconos/acento suave |
| `--mt-success` / `--mt-warning` / `--mt-danger` | — | — | Estados semánticos (moderados, sin neón) |

Los colores `--ion-color-*` se mapean a la misma paleta para que los componentes Ionic hereden.

### Radios

| Token | Valor |
|---|---|
| `--radius-btn` | `14px` |
| `--radius-box` | `18px` |
| `--radius-card` | `20px` |

### Sombras

- `--shadow-soft`: `0 1px 1px rgba(...) , 0 6px 20px -12px rgba(...)` — uso en superficies.
- `--shadow-pop`: solo menús / overlays / elevaciones reales.
- **Sin** sombras grandes, glows o múltiples capas.

### Espaciado

- Padding de pantalla: `20px` laterales (móvil y desktop), máx-width de contenido `720px` centrado.
- Vistas con cabecera tipográfica: kicker → título → descripción, con 8–12px entre niveles.
- Altura táctil mínima: `44–48px`.

---

## 4. Tipografía

- **Inter** 400–800, con `-apple-system`/SF Pro de fallback.
- Jerarquía con clases globales (`variables.css`):

| Clase | Uso |
|---|---|
| `.mt-h-display` | Título de página principal (clamp 30–40px, `700`, tracking `-0.028em`) |
| `.mt-body` | Texto descriptivo (15.5px, `--mt-ink-2`, line-height 1.62) |
| `.mt-kicker` | Eyebrow en mayúsculas (12px, `600`, tracking `0.1em`, acento) |
| `.mt-label` | Etiquetas secundarias (13px, `500`, `--mt-ink-2`) |

- Se usan **peso, tamaño, espaciado y color** para jerarquizar antes que contenedores.

---

## 5. Modo claro/oscuro

- `dark.system.css` de Ionic + sobrescritura de tokens `--mt-*`/`--ion-*` en `@media (prefers-color-scheme: dark)`.
- **Siempre** usar variables (`var(--mt-*)`), nunca literales por componente.

---

## 6. Componentes y patrones

### Encabezados / navegación

- `ion-header` translúcido con clase `app-header` (blur sutil) + toolbar `48px`.
- Botón menú/back en acento. Título centrado en 17px/600.

### Listas / navegación lateral

- Menú lateral: superficie `--mt-surface`, ancho `272px`, con marca + enlaces con icono, label y punto indicador del activo.
- Listas "inset" = contenedor `.group-list` (surface + borde `--mt-line` + radio `--radius-card`), rows con separador `1px`, sin chevrons decorativos cuando la fila completa es accionable.

### Tarjetas / superficies

- **Preferir listas planas agrupadas y tipografía** a tarjetas flotantes.
- Si hay contenedor elevado: `.surface` + borde + `--shadow-soft` (nunca cajas de colores ni gradientes).
- Los "callouts" semánticos usan acento/danger con tinta muy baja sobre `surface`.

### Botones

- `ion-button` global: `14px` radio, `48px` alto, `600` weight. Solid por defecto con `--mt-accent`.
- `fill="outline"` para acciones secundarias; `fill="clear"` para terciarias en barra.
- En toolbars los botones heredan el estilo compacto de Ionic.

### Inputs

- `ion-input`/`ion-textarea` con fondo `--mt-muted`, radio `14px`, placeholder `--mt-ink-3`.
- Para campos dentro de un "search well" usar la clase local correspondiente (p. ej. `.search-well__input`).

### Estados vacíos / error / carga

- Bloque `.state-block`: icono en tile `--mt-muted`, título, hint y CTA; centrado sobre surface con borde.
- Carga: spinner acento pequeño + texto `--mt-ink-3`.

### Chat

- Burbujas del asistente: surface + borde, radio asimétrico sutil; del usuario: acento sólido.
- Composer: campo redondeado `22px` surface sobre barra inferior con safe-area.

### Animación

- Solo transiciones rápidas y sutiles (150–200ms ease), indicadores tipados puntuales, y todo desactivado con `prefers-reduced-motion`.

---

## 7. Checklist al terminar una pantalla

- [ ] ¿Se usan tokens `--mt-*` en lugar de literales de color?
- [ ] ¿La jerarquía usa tipografía y espacios (no cajas decorativas)?
- [ ] ¿Las superficies son `surface` + borde + `--shadow-soft`, sin gradientes?
- [ ] ¿Los headers son translúcidos con la clase `app-header`?
- [ ] ¿El contenido respeta `max-width: 720px` y padding `20px`?
- [ ] ¿Los textos son en español, calmos y claros (sin slang)?
- [ ] ¿El dark mode se ve igual de pulido?

---

_Actualizar este archivo si se cambia cualquier token de diseño (colores, radios, tipografía, patrones de componente)._
