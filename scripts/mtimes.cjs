const fs = require('fs');
const path = require('path');
const dirs = ['src/views', 'src/components/dynamic', 'src/services', 'src/lib', 'src/data', 'src'];
const files = [];
const seen = new Set();
for (const d of dirs) {
  const full = path.join(__dirname, '..', d);
  if (!fs.existsSync(full)) continue;
  for (const f of fs.readdirSync(full)) {
    if (!/\.(vue|ts)$/.test(f)) continue;
    const p = path.join(full, f);
    const key = p;
    if (seen.has(key)) continue;
    seen.add(key);
    files.push({ p, m: fs.statSync(p).mtime });
  }
}
files.sort((a, b) => a.m - b.m);
for (const f of files) {
  console.log(f.m.toISOString().replace('T', ' ').slice(0, 19), f.p.replace(__dirname + '\\..\\', ''));
}
