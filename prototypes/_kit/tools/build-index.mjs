// Сборка standalone-вьюеров полноэкранных шаблонов и общего индекса screens/index.html.
// Запускается после capture-storybook.mjs. Читает screens/<dir>/_manifest.json.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const KIT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const SCREENS = resolve(KIT, 'screens');

// Полноэкранные шаблоны (страницы) + подписи и состояние для индекса.
// Порядок = порядок в индексе. state — свободная пометка (populated / пустое состояние).
const PAGES = [
  { dir: 'recipes-list', items: [{ slug: 'full', label: 'Список рецептов', state: 'populated' }] },
  { dir: 'recipe-page', items: [{ slug: 'full', label: 'Рецепт целиком', state: 'populated' }] },
  {
    dir: 'settings-import',
    items: [
      { slug: 'environment', label: 'Настройки · Окружение', state: 'populated' },
      { slug: 'integrations', label: 'Настройки · Интеграции', state: 'populated' },
      { slug: 'members', label: 'Настройки · Участники', state: 'populated' },
      { slug: 'project-context', label: 'Настройки · Контекст проекта', state: 'populated' },
      { slug: 'import', label: 'Импорт из TMS', state: 'populated' },
    ],
  },
];

// Библиотеки компонентов (галерея делается движком capture) — только ссылки в индексе.
const GALLERIES = [
  { dir: 'recipe-stepcard', label: 'Внутри рецепта · StepCard (17 состояний)' },
];

const FONT = `<link href="https://fonts.googleapis.com/css2?family=Golos+Text:wght@400;500;600;700&display=swap" rel="stylesheet">`;

function viewerHtml(bodyHtml) {
  return `<!doctype html><html lang="ru"><head><meta charset="utf-8">
${FONT}
<link rel="stylesheet" href="../../prod.css">
<style>html,body{height:100%;margin:0}#screen{height:100vh}</style>
</head><body><div id="screen">
${bodyHtml}
</div></body></html>`;
}

const cards = [];
for (const page of PAGES) {
  for (const it of page.items) {
    const src = resolve(SCREENS, page.dir, `${it.slug}.html`);
    if (!existsSync(src)) {
      console.warn(`  ! пропуск ${page.dir}/${it.slug}.html — нет файла`);
      continue;
    }
    const body = readFileSync(src, 'utf8');
    const viewRel = `${it.slug}.view.html`;
    writeFileSync(resolve(SCREENS, page.dir, viewRel), viewerHtml(body), 'utf8');
    cards.push(
      `  <div class="card"><div class="cap"><span>${it.label}</span><span class="st">${it.state}</span></div>` +
        `<div class="thumb"><iframe src="${page.dir}/${viewRel}" loading="lazy"></iframe></div></div>`,
    );
    console.log(`  ✓ вьюер ${page.dir}/${viewRel}`);
  }
}

const galleryLinks = GALLERIES.filter((g) => existsSync(resolve(SCREENS, g.dir, '_gallery.html')))
  .map((g) => `<a href="${g.dir}/_gallery.html">${g.label}</a>`)
  .join(' · ');

const index = `<!doctype html><html lang="ru"><head><meta charset="utf-8">
<title>Шаблоны экранов qautomator-ui</title>
${FONT}
<style>
  :root{--w:1280px;--h:720px;--s:.42}
  body{margin:0;background:#e9ecf1;font-family:'Golos Text',sans-serif;color:#1c2330}
  .top{padding:20px 28px;background:#fff;border-bottom:1px solid #dbe0e8}
  .top h1{margin:0;font-size:18px} .top p{margin:4px 0 0;font-size:13px;color:#69707d}
  .top a{color:#3b5bdb}
  .grid{padding:24px 28px;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:22px}
  .card{background:#fff;border:1px solid #dbe0e8;border-radius:12px;overflow:hidden}
  .cap{padding:9px 14px;font-size:12px;font-weight:600;color:#69707d;background:#f7f8fa;border-bottom:1px solid #eceef2;text-transform:uppercase;letter-spacing:.03em;display:flex;justify-content:space-between}
  .cap .st{color:#8b93a1;font-weight:500;text-transform:none;letter-spacing:0}
  .thumb{position:relative;width:100%;height:calc(var(--h) * var(--s));overflow:hidden;background:#fff}
  .thumb iframe{width:var(--w);height:var(--h);border:0;transform:scale(var(--s));transform-origin:top left;pointer-events:none}
</style></head><body>
<div class="top"><h1>Шаблоны экранов · qautomator-ui</h1>
<p>Заморожено из живого Storybook под prod.css. Каждый экран открывается standalone, без React.</p></div>
<div class="grid">
${cards.join('\n')}
</div>
<div class="top" style="border-top:1px solid #dbe0e8;border-bottom:0"><p>Компоненты: ${galleryLinks || '—'}</p></div>
</body></html>`;
writeFileSync(resolve(SCREENS, 'index.html'), index, 'utf8');
console.log('Готово. Индекс: screens/index.html');
