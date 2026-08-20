# Prototype kit

Общая основа для прототипов: убирает переэмичивание ~250 строк бойлерплейта
(токены DESIGN.md, оболочка, scenbar, меню/модалки/тосты, рантайм) в каждой задаче.
Не источник стиля сам по себе — производная DESIGN.md; при расхождении правь
`tokens.css`/`shell.css` и сверяйся с DESIGN.md.

## Состав

| Файл | Что внутри |
|---|---|
| `tokens.css` | `:root` — все токены DESIGN.md + короткие алиасы |
| `shell.css` | оболочка (rail/content-card/sidebar), scenbar, кнопки, бейджи, меню, overlay/modal, toast, tooltip |
| `proto.js` | рантайм: scenbar-драйвер, переключение `.screen`, `openMenu()` (fixed, анти-обрезка), `toast()`, init иконок |
| `_template/index.html` | стартовый скелет, линкует kit |
| `prod.css` | **реальный** скомпилированный CSS приложения (из `build-storybook`) — истина по проду |
| `assets/` | реальные ассеты (логотипы), на которые ссылается прод-разметка |
| `screens/` | прод-верные шаблоны экранов, заморожены из Storybook (см. ниже) |
| `templates-src/` | исходники temp-stories для заморозки страниц (source of truth, не в монорепе) |
| `tools/` | движок заморозки: `capture-storybook.mjs`, `build-index.mjs`, `refresh-templates.sh` |
| `new.sh` | бутстрап папки задачи |

## Как начать прототип

```bash
bash prototypes/_kit/new.sh QATO-XXXX-slug
```

Создаёт `prototypes/QATO-XXXX-slug/` с копиями kit-ассетов и `index.html`.
Папка самодостаточна (per-folder деплой работает). Дальше:

1. Впиши `QATO-XXXX`, наполни `<select>` сценариями и массив `window.SCEN`.
2. Вставь экран: из `screens/<screen>/` (замороженный прод-DOM) — скопируй разметку и
   подключи `prod.css`; правь текст/данные под сценарий. Экрана нет в библиотеке — см.
   скилл `build-prototype` (сними живой компонент) и `refresh-templates` (добавь в библиотеку).
3. Доопредели `window.applyScenario(id)` под побочные эффекты состояний.

`shell.css`/`tokens.css` остаются для scenbar и рантайм-хрома (меню/модалки/тосты). Кожу
самих экранов даёт `prod.css` (реальный CSS прода), не рукописный слой.

### Рантайм-хелперы (атрибутами, без своего JS)

- `data-action="prev-scen|next-scen|reset"` — навигация scenbar (готова).
- `data-action="goto" data-scen="id"` — перейти к состоянию.
- `data-action="kebab" data-menu="#my-menu" [data-align="left"]` — открыть меню
  через `openMenu()` (position:fixed по rect, **не обрезается**). Меню рендерь
  как `<div class="menu" id="my-menu">`.
- `data-action="modal" data-modal="#my-overlay"` / `data-action="close-modal"`.
- `toast(title, sub, 'green'|'red'|'violet')` — тост справа сверху.

## Библиотека экранов `screens/` — прод-верные шаблоны

Замороженные из живого Storybook экраны: реальный отрендеренный DOM под `prod.css`,
**идентичны проду**, не «рисунок по мотивам». Поддерживаются скиллом `refresh-templates`
(растут и актуализируются пачкой, по релизам). Полное устройство — в `screens/README.md`.

- ⚠️ **Файлы генерируются**, руками не правь — в каждом провенанс-шапка (story + дата).
  Изменения прода прилетают через `refresh-templates`, не через ручную подгонку.
- **Редизайн не начинай с шаблона как с данности** — он показывает текущую модель прода;
  задача редизайна обычно в том, чтобы её *изменить*
  (`[[feedback-prototype-fidelity]]`, `[[feedback-prototype-redesign-model]]`).

Пересобрать / добавить экран:
```bash
bash prototypes/_kit/tools/refresh-templates.sh [<git-ref>]
```
