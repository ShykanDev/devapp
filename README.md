# DevApp

Aplicación de estudio de programación: chat con IA, secciones generadas, exámenes y enciclopedia de temas.

## Stack

- Vue 3 + Vite + vue-router + Tailwind v4
- Ionic (ionicons)
- PWA instalable (vite-plugin-pwa / Workbox)
- Firebase Auth (Google) + Firestore
- AWS
- Cloudflare Worker para la generación con IA (`ai-worker/ai-worker-inference`), usando el provider CommandCode

## Scripts

```bash
npm install      # dependencias
npm run dev      # servidor de desarrollo
npm run build    # typecheck + build de producción (dist/)
npm run lint     # eslint
npm run test:unit
```

Antes de usar login e IA, reemplaza los placeholders en `src/config/firebase.ts` y `src/config/worker.ts`.
