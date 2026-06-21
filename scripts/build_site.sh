#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="${1:-$ROOT/site}"

if test -e "$OUT"; then
  echo "Refusing to overwrite existing output directory: $OUT" >&2
  exit 1
fi

cd "$ROOT"
jupyter-book clean book
jupyter-book build book -W --keep-going

mkdir -p "$OUT/book" "$OUT/assets"
cp .nojekyll "$OUT/"
cp landing/index.html landing/styles.css landing/app.js landing/favicon.svg "$OUT/"
cp -R book/_build/html/. "$OUT/book/"
cp outputs/assets/eml-by-the-numbers.png "$OUT/assets/"
cp outputs/assets/ecdsafail-score.png "$OUT/assets/"
cp outputs/assets/quartic-slope.png "$OUT/assets/"
cp outputs/assets/ono-naskrecki-figure.png "$OUT/assets/"

echo "Built Pages site at $OUT"
