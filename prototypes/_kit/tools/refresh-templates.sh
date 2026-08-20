#!/bin/bash
# refresh-templates.sh — пересобрать прод-верные шаблоны экранов из живого Storybook qautomator-ui.
# Идентичность проду = реальный отрендеренный DOM + реальный prod.css, без ручного перевода.
#
# Запуск:  bash prototypes/_kit/tools/refresh-templates.sh [<git-ref>]
#   <git-ref> — ветка/тег qautomator-ui для сверки (по умолчанию trunk). qautomator-shared
#   подтягивается на тот же ref: контракты UI и shared должны совпадать по версии.
#
# Шаги: env → сверка репо → контракты → стейджинг temp-stories → build-storybook (prod.css+ассеты)
#       → dev-storybook → захват групп → вьюеры/индекс → уборка монорепы → проверка чистоты.
# Предпосылки: nvm node, системный Google Chrome (playwright channel=chrome). См.
# reference-storybook-anchor и SKILL.md скилла refresh-templates.
set -euo pipefail

REF="${1:-trunk}"
KIT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
UI="$HOME/dev-projects/qato/qautomator-ui"
SHARED="$HOME/dev-projects/qato/qautomator-shared"
STAGE="$UI/src/__templates__"
SB_STATIC="/tmp/qui-sb-static"
SB_LOG="/tmp/qui-storybook.log"

export PATH="$HOME/.nvm/versions/node/v24.13.0/bin:$PATH"
step(){ echo; echo "▶ $*"; }

step "1/9 pnpm 10 (corepack)"
corepack prepare pnpm@10 --activate >/dev/null 2>&1 || true
pnpm -v

step "2/9 Сверка репо на $REF (ff-only, чистые)"
for R in "$UI" "$SHARED"; do
  if [ -n "$(git -C "$R" status --porcelain)" ]; then
    echo "  ! $R грязный — пропускаю pull (проверь вручную)"
  else
    git -C "$R" fetch origin "$REF" -q && git -C "$R" checkout -q "$REF" && git -C "$R" pull --ff-only -q origin "$REF"
    echo "  $R -> $(git -C "$R" log -1 --format='%h %ci')"
  fi
done

step "3/9 Зависимости UI"
[ -x "$UI/node_modules/.bin/storybook" ] || (cd "$UI" && pnpm install)

step "4/9 Контракты (копия, не симлинк)"
rm -rf "$UI/dist/contracts"; mkdir -p "$UI/dist/contracts"
cp -R "$SHARED/contracts/." "$UI/dist/contracts/"
ls "$UI/dist/contracts/qautomator/api" >/dev/null

step "5/9 Стейджинг temp-stories в монорепу"
rm -rf "$STAGE"; mkdir -p "$STAGE"
cp "$KIT"/templates-src/*.stories.tsx "$STAGE"/
echo "  $(ls "$STAGE" | wc -l | tr -d ' ') файлов -> $STAGE"

step "6/9 build-storybook → prod.css + ассеты"
(cd "$UI" && rm -rf node_modules/.cache && pnpm build-storybook -o "$SB_STATIC" >/tmp/qui-sb-build.log 2>&1)
cat "$SB_STATIC"/assets/iframe-*.css "$SB_STATIC"/assets/CustomScrollbarOverlay-*.css "$SB_STATIC"/assets/index-*.css > "$KIT/prod.css"
mkdir -p "$KIT/assets"; cp "$SB_STATIC"/assets/logo-*.svg "$KIT/assets/" 2>/dev/null || true
echo "  prod.css = $(wc -c < "$KIT/prod.css") b; ассеты: $(ls "$KIT/assets" | tr '\n' ' ')"

step "7/9 dev-storybook :6006 (перезапуск на свежих staged-историях)"
# Всегда рестартим: переиспользование старого процесса даёт устаревший индекс
# (напр. конфликт с уже удалённой temp-story).
lsof -nP -ti :6006 2>/dev/null | xargs kill -9 2>/dev/null || true
sleep 1
(cd "$UI" && nohup pnpm storybook --no-open --ci >"$SB_LOG" 2>&1 &)
for i in $(seq 1 40); do curl -s -o /dev/null http://localhost:6006 && break; sleep 3; done
sleep 2
curl -s -o /dev/null -w "  storybook http %{http_code}\n" http://localhost:6006

step "8/9 Захват групп"
node "$KIT/tools/capture-storybook.mjs" "Pages/RecipePage/StepCard" recipe-stepcard
node "$KIT/tools/capture-storybook.mjs" "Templates/RecipesListPage" recipes-list
node "$KIT/tools/capture-storybook.mjs" "Templates/RecipePage" recipe-page
node "$KIT/tools/capture-storybook.mjs" "Templates/SettingsImport" settings-import
node "$KIT/tools/build-index.mjs"

step "9/9 Уборка монорепы"
rm -rf "$STAGE"
git -C "$UI" checkout -- public/mockServiceWorker.js 2>/dev/null || true
DIRTY="$(git -C "$UI" status --porcelain)"
if [ -n "$DIRTY" ]; then echo "  ! монорепа не чистая:"; echo "$DIRTY"; else echo "  монорепа чистая ✓"; fi

echo; echo "Готово. Открыть индекс:"
echo "  (cd $KIT && python3 -m http.server 4902) → http://localhost:4902/screens/index.html"
