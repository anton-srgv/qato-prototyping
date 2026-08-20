#!/usr/bin/env bash
# Создать папку прототипа из kit-шаблона с уже скопированной оболочкой.
# Использование:  bash prototypes/_kit/new.sh QATO-XXXX-slug
# Папка задачи получается самодостаточной (links ./tokens.css …), пригодной
# для per-folder деплоя. Дальше вводишь только изменения экрана.
set -euo pipefail
kit="$(cd "$(dirname "$0")" && pwd)"
root="$(cd "$kit/.." && pwd)"
slug="${1:?usage: new.sh QATO-XXXX-slug}"
dest="$root/$slug"
[ -e "$dest" ] && { echo "✗ $dest уже существует"; exit 1; }
mkdir -p "$dest"
cp "$kit/tokens.css" "$kit/shell.css" "$kit/proto.js" "$kit/prod.css" "$dest/"
cp -R "$kit/assets" "$dest/assets"
cp "$kit/_template/index.html" "$dest/index.html"
echo "✓ $dest готов (index.html + tokens.css + shell.css + proto.js + prod.css + assets/)"
echo "  далее: впиши SCEN/scenbar под задачу, вставь готовый экран из _kit/screens/<screen>/"
echo "  (prod.css уже подключён; нужного экрана нет — добавь через скилл refresh-templates)"
