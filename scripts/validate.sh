#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

DECK="outputs/the-mirages-and-twists-of-mathematics-with-ai.pptx"

jq -e . research/data/claims.json research/data/status.json >/dev/null
jq -e '.claims | length == 15' research/data/claims.json >/dev/null
jq -e '(.slides | length) == 37 and ([.slides[].seconds] | add) == 2865' presentation/content.json >/dev/null

slide_count="$(unzip -Z1 "$DECK" | rg '^ppt/slides/slide[0-9]+\.xml$' | wc -l | tr -d ' ')"
notes_count="$(unzip -Z1 "$DECK" | rg '^ppt/notesSlides/notesSlide[0-9]+\.xml$' | wc -l | tr -d ' ')"
test "$slide_count" = "37"
test "$notes_count" = "37"

jq -e '.status == "pass" and .issueCount == 0' presentation/qa/template-fidelity-check.json >/dev/null
node scripts/check_vault_links.mjs

HOME=/tmp/codex-sage-home SAGE_HOME=/tmp/codex-sage-home \
  sage artifacts/sage/verify_case_numbers.sage

(cd artifacts/lean && lake build)
rg -q '^PASS: quartic is nonsingular over Q$' artifacts/magma/verification-output.txt

jupyter-book build book -W --keep-going

echo "PASS: release validation complete."
