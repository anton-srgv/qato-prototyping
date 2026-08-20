---
version: alpha
name: QAutomator
description: >
  Design system for QAutomator — an AI-powered UI test automation platform.
  Built on Radix UI primitives and shadcn/ui components, styled with Tailwind CSS and CVA.

colors:
  # --- Text ---
  text-primary: "#1C2024"
  text-secondary: "#60646C"
  text-disabled: "#8B8D98"
  text-inverse: "#FFFFFF"
  text-error: "#CE2C31"
  text-accent-info: "#0D74CE"
  text-accent-success: "#218358"
  text-accent-warning: "#CC4E00"
  text-accent-violet: "#6550B9"

  # --- Background / Surface ---
  bg-canvas: "#FFFFFF"
  bg-surface-subtle: "#F9F9FB"
  bg-surface-primary: "#FFFFFF"
  bg-surface-secondary: "#F0F0F3"
  bg-surface-solid: "#1C2024"

  # --- Actions ---
  action-primary: "#3E63DD"
  action-primary-hover: "#3358D4"
  action-primary-pressed: "#3A5BC7"
  action-primary-disabled: "#ABBDF9"
  action-secondary: "#F0F0F3"
  action-secondary-hover: "#E8E8EC"
  action-secondary-pressed: "#E0E1E6"
  action-destructive: "#E5484D"
  action-destructive-hover: "#DC3E42"
  action-destructive-pressed: "#CE2C31"
  action-destructive-disabled: "#F4A9AA"

  # --- Borders ---
  border-secondary: "#E0E1E6"
  border-primary: "#CDCED6"
  border-error: "#F4A9AA"
  border-focus: "#E0E1E6"

  # --- Accent pairs (surface + solid) ---
  accent-info-surface: "#E6F4FE"
  accent-info-solid: "#0090FF"
  accent-success-surface: "#E6F6EB"
  accent-success-solid: "#30A46C"
  accent-warning-surface: "#FFEFD6"
  accent-warning-solid: "#F76B15"
  accent-error-surface: "#FEEBEC"
  accent-error-solid: "#E5484D"
  accent-neutral-surface: "#F0F0F3"
  accent-neutral-solid: "#1C2024"
  accent-violet-surface: "#F4F0FE"
  accent-violet-solid: "#6E56CF"

  # --- Palette (for reference) ---
  slate-50: "#F9F9FB"
  slate-100: "#F0F0F3"
  slate-200: "#E8E8EC"
  slate-300: "#E0E1E6"
  slate-400: "#D9D9E0"
  slate-500: "#CDCED6"
  slate-600: "#B9BBC6"
  slate-700: "#8B8D98"
  slate-800: "#80838D"
  slate-900: "#60646C"
  slate-default: "#1C2024"

  indigo-100: "#EDF2FE"
  indigo-200: "#E1E9FF"
  indigo-500: "#ABBDF9"
  indigo-700: "#3E63DD"
  indigo-800: "#3358D4"
  indigo-900: "#3A5BC7"

  red-100: "#FEEBEC"
  red-500: "#F4A9AA"
  red-700: "#E5484D"
  red-800: "#DC3E42"
  red-900: "#CE2C31"

  green-100: "#E6F6EB"
  green-700: "#30A46C"
  green-900: "#218358"

  blue-100: "#E6F4FE"
  blue-700: "#0090FF"
  blue-900: "#0D74CE"

  orange-100: "#FFEFD6"
  orange-700: "#F76B15"
  orange-900: "#CC4E00"

  violet-100: "#F4F0FE"
  violet-700: "#6E56CF"
  violet-900: "#6550B9"

typography:
  h1:
    fontFamily: Golos Text
    fontSize: 44px
    fontWeight: 700
    lineHeight: 48px
  h2:
    fontFamily: Golos Text
    fontSize: 36px
    fontWeight: 700
    lineHeight: 40px
  h3:
    fontFamily: Golos Text
    fontSize: 28px
    fontWeight: 700
    lineHeight: 32px
  h4:
    fontFamily: Golos Text
    fontSize: 24px
    fontWeight: 700
    lineHeight: 28px
  h5:
    fontFamily: Golos Text
    fontSize: 20px
    fontWeight: 700
    lineHeight: 24px
  body-l-bold:
    fontFamily: Golos Text
    fontSize: 17px
    fontWeight: 500
    lineHeight: 28px
  body-l:
    fontFamily: Golos Text
    fontSize: 17px
    fontWeight: 400
    lineHeight: 28px
  body-m-bold:
    fontFamily: Golos Text
    fontSize: 15px
    fontWeight: 500
    lineHeight: 24px
  body-m:
    fontFamily: Golos Text
    fontSize: 15px
    fontWeight: 400
    lineHeight: 24px
  body-s-bold:
    fontFamily: Golos Text
    fontSize: 13px
    fontWeight: 500
    lineHeight: 20px
  body-s:
    fontFamily: Golos Text
    fontSize: 13px
    fontWeight: 400
    lineHeight: 20px
  body-xs-bold:
    fontFamily: Golos Text
    fontSize: 12px
    fontWeight: 500
    lineHeight: 19px
  body-xs:
    fontFamily: Golos Text
    fontSize: 12px
    fontWeight: 400
    lineHeight: 19px
  ui-l-bold:
    fontFamily: Golos Text
    fontSize: 17px
    fontWeight: 500
    lineHeight: 24px
  ui-l:
    fontFamily: Golos Text
    fontSize: 17px
    fontWeight: 400
    lineHeight: 24px
  ui-m-bold:
    fontFamily: Golos Text
    fontSize: 15px
    fontWeight: 500
    lineHeight: 20px
  ui-m:
    fontFamily: Golos Text
    fontSize: 15px
    fontWeight: 400
    lineHeight: 20px
  ui-s14-bold:
    fontFamily: Golos Text
    fontSize: 14px
    fontWeight: 500
    lineHeight: 16px
  ui-s14:
    fontFamily: Golos Text
    fontSize: 14px
    fontWeight: 400
    lineHeight: 16px
  ui-s-bold:
    fontFamily: Golos Text
    fontSize: 13px
    fontWeight: 500
    lineHeight: 16px
  ui-s:
    fontFamily: Golos Text
    fontSize: 13px
    fontWeight: 400
    lineHeight: 16px
  ui-xs-bold:
    fontFamily: Golos Text
    fontSize: 12px
    fontWeight: 500
    lineHeight: 15px
  ui-xs:
    fontFamily: Golos Text
    fontSize: 12px
    fontWeight: 400
    lineHeight: 15px
  ui-2xs-bold:
    fontFamily: Golos Text
    fontSize: 11px
    fontWeight: 500
    lineHeight: 13px
  ui-2xs:
    fontFamily: Golos Text
    fontSize: 11px
    fontWeight: 400
    lineHeight: 13px
  code:
    fontFamily: IBM Plex Mono
    fontSize: 13px
    fontWeight: 400
    lineHeight: 20px

rounded:
  sm: 4px
  md: 6px
  lg: 8px
  xl: 12px
  2xl: 16px
  full: 9999px

spacing:
  0: 0px
  0.5: 2px
  1: 4px
  1.5: 6px
  2: 8px
  3: 12px
  4: 16px
  5: 20px
  6: 24px
  7: 28px
  8: 32px
  10: 40px
  12: 48px
  16: 64px

components:
  # Buttons
  button-primary:
    backgroundColor: "{colors.action-primary}"
    textColor: "{colors.text-inverse}"
    rounded: "{rounded.lg}"
    padding: "0 16px"
    height: 40px
  button-primary-hover:
    backgroundColor: "{colors.action-primary-hover}"
    textColor: "{colors.text-inverse}"
  button-primary-pressed:
    backgroundColor: "{colors.action-primary-pressed}"
    textColor: "{colors.text-inverse}"
  button-primary-disabled:
    backgroundColor: "{colors.action-primary-disabled}"
    textColor: "{colors.text-inverse}"
  button-secondary:
    backgroundColor: "{colors.action-secondary}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.lg}"
    padding: "0 16px"
    height: 40px
  button-secondary-hover:
    backgroundColor: "{colors.action-secondary-hover}"
    textColor: "{colors.text-primary}"
  button-destructive:
    backgroundColor: "{colors.action-destructive}"
    textColor: "{colors.text-inverse}"
    rounded: "{rounded.lg}"
    padding: "0 16px"
    height: 40px
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.lg}"
    padding: "0 16px"
    height: 40px
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.lg}"
    padding: "0 16px"
    height: 40px

  # Button sizes
  button-size-lg:
    height: 40px
    padding: "0 16px"
    typography: "{typography.ui-m-bold}"
  button-size-md:
    height: 32px
    padding: "0 12px"
    typography: "{typography.ui-s-bold}"
  button-size-sm:
    height: 24px
    padding: "0 8px"
    typography: "{typography.ui-xs-bold}"

  # Input
  input-default:
    backgroundColor: "{colors.bg-surface-primary}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.lg}"
    padding: "0 12px"
    height: 40px
  input-size-l:
    height: 40px
  input-size-m:
    height: 32px
  input-placeholder:
    textColor: "{colors.text-disabled}"
  input-error:
    backgroundColor: "{colors.bg-surface-primary}"
    textColor: "{colors.text-primary}"

  # Badge
  badge-accent:
    rounded: "{rounded.full}"
    padding: "2px 8px"
    typography: "{typography.ui-xs-bold}"
  badge-secondary:
    backgroundColor: "{colors.accent-neutral-surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.full}"
    padding: "2px 8px"
    typography: "{typography.ui-xs-bold}"
  badge-info:
    backgroundColor: "{colors.accent-info-surface}"
    textColor: "{colors.text-accent-info}"
  badge-success:
    backgroundColor: "{colors.accent-success-surface}"
    textColor: "{colors.text-accent-success}"
  badge-warning:
    backgroundColor: "{colors.accent-warning-surface}"
    textColor: "{colors.text-accent-warning}"
  badge-error:
    backgroundColor: "{colors.accent-error-surface}"
    textColor: "{colors.text-error}"
  badge-violet:
    backgroundColor: "{colors.accent-violet-surface}"
    textColor: "{colors.text-accent-violet}"

  # Card / Surface
  card:
    backgroundColor: "{colors.bg-surface-primary}"
    rounded: "{rounded.2xl}"
    padding: 16px

  # Sidebar — icon rail (narrow, always visible)
  sidebar-rail:
    backgroundColor: "{colors.bg-canvas}"
    width: 56px
    padding: 12px
  sidebar-rail-icon-active:
    backgroundColor: "{colors.action-secondary-pressed}"
    rounded: "{rounded.lg}"
    size: 32px
  sidebar-rail-icon-inactive:
    backgroundColor: "transparent"
    rounded: "{rounded.lg}"
    size: 32px

  # Sidebar — navigation panel (collapsible)
  sidebar-nav:
    backgroundColor: "{colors.bg-canvas}"
    width: 320px
    padding: 16px

  # Status dot (test run status indicator)
  status-dot:
    size: 12px
    rounded: "{rounded.full}"
  status-dot-new:
    backgroundColor: "{colors.accent-neutral-surface}"
  status-dot-generating:
    backgroundColor: "{colors.accent-info-solid}"
  status-dot-ready:
    backgroundColor: "{colors.accent-success-solid}"
  status-dot-needs-work:
    backgroundColor: "{colors.accent-warning-solid}"
  status-dot-running:
    backgroundColor: "{colors.accent-info-solid}"
---

## Overview

QAutomator is an AI-powered UI test automation platform. The visual language is **clean, functional and professional** — neutral grays dominate, with Indigo as the primary action color. The system prioritizes clarity, density and developer-grade precision over decorative elements.

Design principles:
- **Neutral by default** — slate palette as the primary neutral, indigo for calls-to-action
- **Semantic color pairs** — every accent color has a `surface` (tinted background) + `solid` (icon/badge fill) variant
- **Density over whitespace** — UI is compact; default button is 32px (md), not 40px (lg)
- **Accessible contrast** — all text/background combinations target WCAG AA (4.5:1)

---

## Colors

### Neutral (Slate)
The foundational palette. Used for text, borders, backgrounds, and secondary actions.

| Token | Hex | Usage |
|---|---|---|
| `text-primary` | `#1C2024` | Body text, labels |
| `text-secondary` | `#60646C` | Secondary text, captions |
| `text-disabled` | `#8B8D98` | Disabled states, placeholders |
| `text-inverse` | `#FFFFFF` | Text on dark/filled backgrounds |
| `bg-canvas` | `#FFFFFF` | Page background |
| `bg-surface-subtle` | `#F9F9FB` | Sidebar, secondary panels |
| `bg-surface-secondary` | `#F0F0F3` | Tags, chips, secondary areas |
| `bg-surface-solid` | `#1C2024` | Dark card backgrounds |
| `border-secondary` | `#E0E1E6` | Default input/card borders |
| `border-primary` | `#CDCED6` | Emphasized borders |

### Actions (Indigo)
Primary interactive color. Only used for clickable, actionable elements.

| State | Hex |
|---|---|
| Default | `#3E63DD` |
| Hover | `#3358D4` |
| Pressed | `#3A5BC7` |
| Disabled | `#ABBDF9` |

### Destructive (Red)
Used exclusively for irreversible or dangerous actions (delete, remove).

| State | Hex |
|---|---|
| Default | `#E5484D` |
| Hover | `#DC3E42` |
| Pressed | `#CE2C31` |

### Accent pairs
Every semantic state has a `surface` (light tinted bg) and `solid` (saturated fill) variant.
Use `surface` for backgrounds/highlights, `solid` for icons, badges, and indicators.

| Accent | Surface | Solid |
|---|---|---|
| Info | `#E6F4FE` | `#0090FF` |
| Success | `#E6F6EB` | `#30A46C` |
| Warning | `#FFEFD6` | `#F76B15` |
| Error | `#FEEBEC` | `#E5484D` |
| Neutral | `#F0F0F3` | `#1C2024` |
| Violet | `#F4F0FE` | `#6E56CF` |

---

## Typography

**Primary font:** [Golos Text](https://fonts.google.com/specimen/Golos+Text) — weights 400, 500, 700.
**Monospace font:** [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) — weight 400. Used for code blocks only.
**Base:** `font-size: 16px`, `font-family: Golos Text`, `font-smoothing: antialiased`.

### Scale structure

Two parallel scales exist — `body/*` for content text and `ui/*` for interface elements (buttons, labels, form fields). The difference is tighter line-height in UI scale.

#### Headings
| Variant | Size | Weight | Line height |
|---|---|---|---|
| H1 | 44px | 700 | 48px |
| H2 | 36px | 700 | 40px |
| H3 | 28px | 700 | 32px |
| H4 | 24px | 700 | 28px |
| H5 | 20px | 700 | 24px |

#### Body (reading text)
| Variant | Size | Weight | Line height |
|---|---|---|---|
| body/L Bold | 17px | 500 | 28px |
| body/L | 17px | 400 | 28px |
| body/M Bold | 15px | 500 | 24px |
| body/M | 15px | 400 | 24px |
| body/S Bold | 13px | 500 | 20px |
| body/S | 13px | 400 | 20px |
| body/XS Bold | 12px | 500 | 19px |
| body/XS | 12px | 400 | 19px |

#### UI (interface elements)
| Variant | Size | Weight | Line height |
|---|---|---|---|
| ui/L Bold | 17px | 500 | 24px |
| ui/L | 17px | 400 | 24px |
| ui/M Bold | 15px | 500 | 20px |
| ui/M | 15px | 400 | 20px |
| ui/S14 Bold | 14px | 500 | 16px |
| ui/S14 | 14px | 400 | 16px |
| ui/S Bold | 13px | 500 | 16px |
| ui/S | 13px | 400 | 16px |
| ui/XS Bold | 12px | 500 | 15px |
| ui/XS | 12px | 400 | 15px |
| ui/2XS Bold | 11px | 500 | 13px |
| ui/2XS | 11px | 400 | 13px |

---

## Layout & Spacing

### Spacing
Based on a **4px grid**. All spacing values are multiples of 4px.

Common values: `2px`, `4px`, `6px`, `8px`, `12px`, `16px`, `20px`, `24px`, `32px`, `40px`, `48px`.

Typical internal component padding: **8px** (compact) / **12px** (default) / **16px** (comfortable).

### Layout system

Приложение использует **двухуровневый сайдбар** + главная область:

```
┌──────┬──────────────────────┬──────────────────────────────┐
│ Rail │  Navigation sidebar  │       Main content           │
│ 56px │       320px          │        flexible              │
└──────┴──────────────────────┴──────────────────────────────┘
```

#### Артборд (body)
- Фон: `bg-surface-secondary` (`#F0F0F3`) — серый фон всего экрана

#### Icon rail (56px)
- **Без собственного фона** — сидит прямо на сером артборде
- Padding: `12px`
- Логотип (32×32px) вверху
- Разделитель: `1px border-primary` под логотипом
- Иконки навигации (Lucide 16px внутри кнопки 32×32px), `border-radius: 8px`:
  - Активная: фон `action-secondary-pressed` (`#E0E1E6`)
  - Неактивная: прозрачный фон (ghost)
- Аватар пользователя (32px, round) внизу

#### Content card (основной контейнер)
Белая карточка, которая занимает всё пространство правее рейла:
- `margin: 12px 12px 12px 0` (12px сверху/справа/снизу, flush к рейлу слева)
- `background: bg-canvas` (`#FFFFFF`)
- `border: 1px solid border-secondary` (`#E0E1E6`)
- `border-radius: 12px`
- `overflow: hidden`

Внутри content card находятся nav sidebar и main content рядом.

#### Navigation sidebar (320px) — внутри content card
- Фон: `bg-surface-subtle` (`#F9F9FB`)
- `border-right: 1px solid border-secondary`
- Padding заголовка: `16px 16px 0`
- Элементы дерева/меню: высота `32px`, `border-radius: 6px`, padding `0 12px`
  - Активный: фон `indigo-200` (`#E1E9FF`), текст `indigo-700` (`#3E63DD`), font-weight 500
  - Неактивный: transparent, `text-primary`
  - Hover: `action-secondary-hover` (`#E8E8EC`)
- Иконка активного пункта меню: `indigo-700`

#### Main content area — внутри content card
- Фон: `bg-canvas`
- Page header: `padding: 20px 24px 16px`
- Page title: `font-size: 20px`, `font-weight: 700` (H5)
- Page body: `padding: 0 24px 24px`

> **Статус редизайна:** новый layout внедряется постепенно.
> - ✅ **Экран проекта** (тест-кейсы, участники, интеграции, настройки) — в работе, использует новый layout
> - ✅ **Балк-импорт тестов из TMS** — в разработке, использует новый layout
> - ⏸ **No-code редактор** — остаётся в старом дизайне до проведения пользовательских исследований

### Border radius
| Token | Value | Usage |
|---|---|---|
| `sm` | 4px | Tags, small badges |
| `md` | 6px | Rarely used |
| `lg` | 8px | Buttons, inputs, dropdowns |
| `xl` | 12px | Medium cards |
| `2xl` | 16px | Panels, cards, dialogs |
| `full` | 9999px | Pills, avatars, circular icons |

---

## Elevation & Depth

Shadows use `#1C2024` (slate-default) at varying opacity. No color tinting.

| Token | Value | Usage |
|---|---|---|
| `shadow-small` | `0px 4px 20px 0px rgba(28,32,36,0.10)` | Cards, dropdowns |
| `shadow-small-hover` | `0px 8px 32px 0px rgba(28,32,36,0.16)` | Hovered cards |
| `shadow-medium` | `0px 6px 32px 0px rgba(28,32,36,0.12)` | Modals, popovers |
| `shadow-medium-hover` | `0px 12px 48px 0px rgba(28,32,36,0.18)` | Hovered modals |
| `shadow-popup` | `0px 20px 64px 0px rgba(28,32,36,0.18)` | Dialogs, command palettes |

---

## Shapes

The system uses a **consistently rounded** aesthetic — sharp corners are absent.
- **Interactive elements** (buttons, inputs, selects): `border-radius: 8px`
- **Containers** (cards, panels, dialogs): `border-radius: 16px`
- **Pills** (badges, avatars, circular icon buttons): `border-radius: 9999px`

No fully square corners anywhere in the UI.

---

## Components

### Button
Three sizes: `lg` (40px), `md` (32px, default), `sm` (24px).
Five variants: `primary`, `secondary`, `outline`, `ghost`, `destructive`.
Typography: `ui/M Bold` (md size) — `font-size: 13px`, `font-weight: 500`.
`border-radius: 8px`. Gap between icon and label: `6px`.

**Primary** — Indigo fill, white text. Use for the single main action per view.
**Secondary** — Slate-100 fill, dark text. Use for secondary actions.
**Outline** — Transparent fill, border `border-secondary`, dark text. Alternative to secondary.
**Ghost** — No fill, no border. Use in toolbars and icon-heavy contexts.
**Destructive** — Red fill, white text. Use only for delete/remove actions.

### Icon Button
Same sizing (40/32/24px) and variants as Button, but square aspect ratio with a single icon (no label).
Additional variant: `round` — `border-radius: 9999px`.

### Input
Two sizes: `l` (40px height), `m` (32px height, default).
`border-radius: 8px`. Border color: `border-secondary` default, `border-error` on error.
Placeholder: `text-disabled` color. Label above, description/error below.

### Textarea
Min-height: `80px`. Same border behavior as Input.

### Badge
Inline pill element. `border-radius: 9999px`. Sizes: `sm` / default.
Typography: `ui/XS Bold` (12px, 500).
Seven variants matching accent palette: `info`, `success`, `warning`, `error`, `neutral`, `violet`, `secondary`.
Use `surface` color as background, darker accent text color for legibility.

### Icons (Lucide)
Иконки берутся исключительно из [lucide-react](https://lucide.dev/). Кастомных иконок нет.

Два стандартных размера:
- **16px** — в строках таблиц, inline в тексте, в компактных элементах (section-header counter, status)
- **24px** — в section-header кнопках, основных action-элементах, пустых состояниях

Цвет иконки наследуется от родительского элемента (`currentColor`).

### Status Dot
Маленький цветной круг (12×12px) — индикатор статуса тест-кейса в строке таблицы.

| Статус | Цвет |
|---|---|
| Новый | `accent-neutral-surface` (`#F0F0F3`) |
| Генерация | `accent-info-solid` (`#0090FF`) |
| Готов | `accent-success-solid` (`#30A46C`) |
| Требует доработки | `accent-warning-solid` (`#F76B15`) |

### Table
Sticky header. Row height: `40px` (md). Padding per cell: `0 16px`.
Header: `bg-surface-subtle`, `text-secondary`, `ui/S Bold`.
Body rows: `bg-canvas`, alternating hover `bg-surface-subtle`.
Dividers: `border-secondary` (1px solid).

### Table — Section Group
Паттерн группировки строк таблицы по смысловым разделам (используется на экране тест-кейсов).

**Section header** (40px высота):
- Иконка-кнопка `chevron-right/down` (24px, ghost) — для сворачивания
- Название раздела (`ui/S Bold`, `text-primary`)
- Счётчик количества элементов (маленький бейдж)
- Пара ghost-иконок (add, more) справа — контролы раздела

**Структура строки** (40px высота), слева направо:
1. Чекбокс (14px)
2. Иконка приоритета (16px) — `equal`, `chevron-up`, `chevrons-up`, `chevron-down`
3. ID (числовой, `ui/S`, `text-secondary`)
4. Status dot (12px)
5. Название тест-кейса (flexible width, `ui/S`, `text-primary`)
6. Бейджи тегов (pill, `badge-secondary` или `badge-neutral`)
7. Счётчик шагов (`ui/S`, `text-secondary`)
8. Дата обновления (`ui/S`, `text-secondary`)
9. Кнопка-иконка действий more (24px, ghost, появляется при hover)

### Integration card
Карточка интеграции со сторонним сервисом. Две ключевые зоны:

**Header** (`padding: 20px 24px`, `border-bottom: 1px border-secondary`):
- Иконка сервиса (40×40px, `border-radius: 10px`, border)
- Название + описание
- Badge статуса (success/neutral)

**Body** (`padding: 24px`, gap `16px`):
- Поля отображаются в **readonly-режиме** по умолчанию — значения как текст, без input-рамки
- API-ключ: маскируется точками (`text-disabled`)
- Form actions: деструктивная кнопка «Отключить» слева + «Изменить» (secondary) справа
- В режиме редактирования: «Отмена» (secondary) + «Сохранить» (primary) справа, destructive слева

### Env / Stand card
Аккордеон-карточка для стенда (environment):

**Header** (`height: 52px`, `padding: 0 16px`, `border-bottom: 1px border-secondary` когда открыт):
- Chevron (16px, ghost) для раскрытия
- Название стенда + URL (monospace, 11px, `text-secondary`)
- Счётчик переменных (`text-secondary`, 12px)
- Badge статуса
- Кнопка-меню more

**Body** (раскрываемый, `bg-surface-subtle`, `padding: 12px 16px 16px`):
- Таблица переменных: ключ / значение / кнопка редактирования
- Секретные значения: `letter-spacing: .04em`, `text-disabled`
- Кнопка «Добавить переменную» (secondary sm) внизу

### Dialog / Modal
`border-radius: 16px`, `shadow-popup`.
Background overlay: `rgba(28,32,36,0.50)`.
Padding: `24px`. Max-width: `520px` (default), configurable.

### Dropdown / Select
`border-radius: 8px`, `shadow-medium`.
Item height: `32px`, padding `0 8px`, `border-radius: 4px` on hover.
Separator: `border-secondary` (1px).

### Alert
Two variants: `default` (neutral), `destructive`.
`border-radius: 8px`, border `1px solid`, left icon.

### Spinner
Variants: `inline` (within content flow), `centered` (fills parent), `absolute`, `fixed`, `overlay`.
Color: `action-primary` by default.

### Avatar
Default size: `40px` (round). Small: `24px`.
`border-radius: 9999px`. Fallback: initials on `bg-surface-secondary`.

### Tooltip
`border-radius: 8px`, `shadow-medium`.
Background: `bg-surface-solid` (`#1C2024`), text: `text-inverse`.
Typography: `ui/XS` (12px). Max-width: `240px`.

### Toast (Sonner)
Bottom-right position. `border-radius: 12px`, `shadow-medium`.
Auto-dismiss: `4000ms`.

### Tabs
Горизонтальная навигация между разделами внутри страницы.

Высота таб-бара: `40px`. Активный таб подчёркнут снизу (2px, `action-primary`).
Каждый таб может содержать:
- Цветную точку-статус (12px) — для фильтрации по статусу
- Анимированный спиннер (12px) вместо точки — если статус «в процессе»
- Счётчик количества (`ui/XS Bold`, `bg-surface-secondary`, `border-radius: 4px`)

### Wizard / Multi-step flow
Паттерн для сложных флоу с несколькими шагами (например, балк-импорт из TMS).

- Фон страницы: тёмный overlay (`bg-surface-solid` или `rgba(28,32,36,0.90)`)
- Контент каждого шага: светлая карточка, `border-radius: 16px`, `shadow-popup`
- Шаги могут быть представлены как последовательность экранов или как stepper-индикатор
- Финальный (подтверждающий) шаг может использовать стандартный светлый фон без overlay
- Кнопки навигации: «Назад» (secondary) + «Далее» / «Готово» (primary), выровнены по правому краю

---

## Do's and Don'ts

**Do:**
- Use `action-primary` (Indigo) only for the primary CTA per view — keep it rare and impactful
- Use semantic accent pairs: `surface` for background, matching text color for legibility
- Apply `ui/*` typography variants to all interface labels, buttons, and inputs (not `body/*`)
- Use `border-radius: 16px` for all panels and cards
- Keep button sizes consistent within a view — don't mix `lg` and `sm` in the same toolbar

**Don't:**
- Don't use raw hex colors outside the token system — always reference a named token
- Don't use Golos Text `font-weight: 600` — the system uses `500` (medium) as "bold" for UI
- Don't create custom shadows — use the five defined elevation levels
- Don't use `bg-surface-solid` as a general dark mode — it's a UI accent, not a theme
- Don't place more than one `primary` button per section of a page
- Don't use `body/*` typography variants for buttons, inputs, or navigation labels
- Don't use icons outside the Lucide pack — кастомных иконок нет, только lucide-react
- Don't apply `action-primary` (Indigo) к активным иконкам в icon rail — там используется `action-secondary-pressed` (серый)
- Don't design no-code editor в новом стиле — он остаётся в старом дизайне
