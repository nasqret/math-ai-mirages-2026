#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

test -f .nojekyll
jq -e . research/data/claims.json research/data/status.json >/dev/null
jq -e '.claims | length == 20' research/data/claims.json >/dev/null
jq -e '.task_version == "2.0.0" and .evaluation_rows == 31 and (.top_results | length) == 11' \
  research/data/frontiermath-tier4-v2-2026-06-22.json >/dev/null
node scripts/check_slides.mjs
node scripts/check_vault_links.mjs

HOME=/tmp/codex-sage-home SAGE_HOME=/tmp/codex-sage-home \
  sage artifacts/sage/verify_case_numbers.sage

(cd artifacts/lean && lake build)
rg -q '^PASS: quartic is nonsingular over Q$' artifacts/magma/verification-output.txt

jupyter-book clean book
jupyter-book build book -W --keep-going

echo "PASS: release validation complete."
