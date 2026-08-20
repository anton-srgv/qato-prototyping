// Захват реальной разметки компонентов из живого Storybook qautomator-ui.
// Движок актуализации шаблонов: рендерит каждую story и замораживает её DOM
// как есть (прод-Tailwind классы), без ручного перевода. Пара к prod.css.
//
// Запуск (Storybook должен быть поднят на :6006, см. reference-storybook-anchor):
//   node capture-storybook.mjs "<title-prefix>" <out-subdir> [<sb-url>]
// Примеры:
//   node capture-storybook.mjs "Pages/RecipePage/StepCard" recipe-stepcard
//   node capture-storybook.mjs "UI/" ui
//
// Playwright берётся из монорепы (в дизайн-репо его не ставим).

import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const PW = '/Users/a.sergeev/dev-projects/qato/qautomator-ui/node_modules/playwright/index.js';
const pw = await import(PW);
const chromium = pw.chromium || pw.default?.chromium;

const __dirname = dirname(fileURLToPath(import.meta.url));
const KIT = resolve(__dirname, '..');

const titlePrefix = process.argv[2] || 'Pages/RecipePage/StepCard';
const outSub = process.argv[3] || 'recipe-stepcard';
const SB = process.argv[4] || 'http://localhost:6006';
const outDir = resolve(KIT, 'screens', outSub);
mkdirSync(outDir, { recursive: true });

const today = process.env.CAPTURE_DATE || new Date().toISOString().slice(0, 10);

const index = await (await fetch(`${SB}/index.json`)).json();
const stories = Object.values(index.entries || index.stories || {}).filter(
  (e) => e.type === 'story' && (e.title || '').startsWith(titlePrefix),
);
if (!stories.length) {
  console.error(`Нет story под префиксом "${titlePrefix}"`);
  process.exit(1);
}
console.log(`Захватываю ${stories.length} story под "${titlePrefix}" → screens/${outSub}/`);

// Свой билд chromium у playwright может не совпасть с кэшем; берём системный Chrome.
const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage({ deviceScaleFactor: 2, viewport: { width: 1280, height: 800 } });

const manifest = [];
for (const s of stories) {
  const url = `${SB}/iframe.html?id=${encodeURIComponent(s.id)}&viewMode=story`;
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForSelector('#storybook-root > *', { timeout: 15000 }).catch(() => {});
  await page.waitForTimeout(1500);
  const html = await page.$eval('#storybook-root', (el) => el.innerHTML.trim());
  const slug = s.id.split('--').pop();
  const header = `<!-- story: ${s.title} · ${s.name}\n     из qautomator-ui Storybook (id ${s.id})\n     заморожено: ${today} -->\n`;
  writeFileSync(resolve(outDir, `${slug}.html`), header + html + '\n', 'utf8');
  manifest.push({ slug, name: s.name, title: s.title, html });
  console.log(`  ✓ ${slug}  (${html.length} b)  ${s.name}`);
}
await browser.close();

// Локальная галерея: все замороженные состояния под prod.css.
const cards = manifest
  .map(
    (m) =>
      `<section class="g-card"><h3 class="g-h">${m.name}</h3>\n<div class="g-body">${m.html}</div>\n</section>`,
  )
  .join('\n');
const galleryTpl = `<!doctype html><html lang="ru"><head><meta charset="utf-8">
<title>Шаблоны: ${titlePrefix}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Golos+Text:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../../prod.css">
<style>
  body{margin:0;background:#eef0f4;font-family:'Golos Text',sans-serif}
  .g-top{padding:20px 28px;border-bottom:1px solid #dfe3ea;background:#fff}
  .g-top h1{margin:0;font-size:18px;color:#1c2330}
  .g-top p{margin:4px 0 0;font-size:13px;color:#69707d}
  .g-grid{padding:24px 28px;display:grid;grid-template-columns:repeat(auto-fill,minmax(560px,1fr));gap:24px;align-items:start}
  .g-card{background:#fff;border:1px solid #e3e7ee;border-radius:12px;overflow:hidden}
  .g-h{margin:0;padding:10px 14px;font-size:12px;font-weight:600;color:#69707d;background:#f7f8fa;border-bottom:1px solid #eceef2;text-transform:uppercase;letter-spacing:.03em}
  .g-body{padding:16px;background:#f9f9fb}
</style></head><body>
<div class="g-top"><h1>Шаблоны · ${titlePrefix}</h1>
<p>Заморожено из живого Storybook qautomator-ui под prod.css. Идентично проду, без React.</p></div>
<div class="g-grid">
${cards}
</div></body></html>`;
writeFileSync(resolve(outDir, '_gallery.html'), galleryTpl, 'utf8');
writeFileSync(
  resolve(outDir, '_manifest.json'),
  JSON.stringify(manifest.map(({ slug, name, title }) => ({ slug, name, title })), null, 2),
  'utf8',
);
console.log(`Готово. Галерея: screens/${outSub}/_gallery.html`);
