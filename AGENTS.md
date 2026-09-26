# AGENTS.md — DevApp

Instrucciones para agentes de IA que trabajen en este repositorio.

## Stack autorizado (no proponer alternativas)

- Frontend: Vue 3 (SFC + `<script setup lang="ts">`) + Vite.
- Router: vue-router.
- Estilos: Tailwind CSS v4.
- UI móvil/iconos: Ionic (`ionicons`). Componentes propios en `src/components/ui`.
- Auth + base de datos: Firebase (Auth con Google + Firestore).
- Backend / inferencia IA: Cloudflare Workers (`ai-worker/ai-worker-inference`), gestionado con Wrangler.
- Cloud: AWS.
- Validación de datos: Zod.
- PWA: `vite-plugin-pwa` / Workbox.

## Prohibido

- React, Next.js, Remix, React Native, Redux, Zustand, hooks de React, JSX/TSX ni dependencias `react-*`.
- Sugerir Angular, Svelte, Solid u otros frameworks alternativos.
- Reescribir componentes Vue como componentes de otro ecosistema.
- Añadir dependencias nuevas sin preguntar y sin que encajen con el stack de arriba.

## Convenciones de código

- Componentes Vue en SFC con Composition API y `<script setup lang="ts">`.
- Estado con `ref` / `reactive` / composables. Nada de stores tipo Redux.
- Textos y mensajes de producto en español.
- UI reutilizable en `src/components/ui/`; componentes dinámicos en `src/components/dynamic/`.
- Las llamadas a IA pasan por el Worker (ver `src/config/worker.ts` y `src/lib/*`). Nunca exponer API keys en el frontend.
- Acceso a Firestore en `src/services/`.

## Comandos

Frontend (raíz `devapp/`):

- `npm run dev` — servidor de desarrollo.
- `npm run build` — typecheck (`vue-tsc`) + build de producción.
- `npm run lint` — ESLint.
- `npm run test:unit` — tests con Vitest.

Worker (`devapp/ai-worker/ai-worker-inference/`):

- `npx wrangler dev` — desarrollo local.
- `npx wrangler deploy` — desplegar a Cloudflare.
- `npx wrangler types` — regenerar tipos tras cambiar bindings.

Nota Windows: si PowerShell bloquea `npx.ps1` (execution policy), usar
`node node_modules/wrangler/bin/wrangler.js <comando>`.

## Módulos de certificación (secciones de examen)

Para agregar una **sección nueva** de estudio de otra certificación, seguir el molde
reutilizable `.kilo/skill/nueva-certificacion/SKILL.md`. Es obligatorio: define el
formato oficial de preguntas, las 7 capas de contenido, las reglas anti-sesgo, los
guardrails con umbrales, el pipeline multiagente, el layout de archivos y la
Definition of Done, derivados de la implementación de referencia CLF-C02.

- Copiar la estructura canónica: `src/data/clfC02/**`, `src/schemas/clfC02.ts`,
  `src/views/clfC02/**`, `tests/unit/clfC02*`.
- No reescribir módulos existentes (AIF-C01, CLF-C02): las secciones nuevas son
  aditivas.
- Verificar fuentes oficiales con `webfetch` antes de escribir contenido; prohibido
  inventar URLs o datos.
- Los guardrails los escribe un agente distinto del que escribe el contenido.

