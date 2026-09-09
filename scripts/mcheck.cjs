const fs = require('fs');
const path = require('path');
const base = path.join(__dirname, '..', 'src');
const targets = ['views/AiChat.vue', 'views/LoginPage.vue', 'views/EnciclopediaArticle.vue', 'main.ts', 'router/index.ts', 'services/dynamicPages.ts', 'services/streamChat.ts', 'views/MisSecciones.vue'];
for (const t of targets) {
  const p = path.join(base, t);
  if (!fs.existsSync(p)) { console.log('MISSING', t); continue; }
  const st = fs.statSync(p);
  console.log(st.mtime.toISOString().replace('T', ' ').slice(0, 19), t, st.size + 'B');
}
