#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

jq -e . research/data/claims.json research/data/status.json >/dev/null
jq -e '.claims | length == 15' research/data/claims.json >/dev/null
node scripts/check_slides.mjs
node scripts/check_vault_links.mjs

HOME=/tmp/codex-sage-home SAGE_HOME=/tmp/codex-sage-home \
  sage artifacts/sage/verify_case_numbers.sage

(cd artifacts/lean && lake build)
rg -q '^PASS: quartic is nonsingular over Q$' artifacts/magma/verification-output.txt

jupyter-book build book -W --keep-going

echo "PASS: release validation complete."
