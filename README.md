# The Mirages and Twists of Mathematics with AI

Materials for Bartosz Naskręcki's 50-minute lecture for professional
mathematicians at MIM UW, Warsaw, 22 June 2026.

- **Live companion:** <https://nasqret.github.io/math-ai-mirages-2026/>
- **Public repository:** <https://github.com/nasqret/math-ai-mirages-2026>

This repository is evidence-first. Claims that can change are tied to dated
primary sources; personal case studies are labelled separately from benchmark
results; formal and computational examples are shipped as executable artifacts.

## Deliverables

- [33-slide, 48-minute browser deck with speaker notes](landing/index.html)
- exact paper-to-Lean case studies for Zsigmondy–Chebyshev and FinEqs, plus the
  original EML specification-tightening loop
- exact FirstProof protocol/result matrix and a dated FrontierMath Tier-4 v2
  score chart
- anonymized eleven-run Tier-4 case analysis from
  [`sources/summary-anonym.tex`](sources/summary-anonym.tex)
- source and claim ledger
- [Jupyter Book](book/intro.md) and [Obsidian knowledge vault](vault/Home.md)
- Lean, SageMath, and Magma examples
- GitHub Pages deployment with the deck at `/` and the companion at `/book/`
- reproducibility and QA reports

The former PowerPoint build is retained as a historical export under `outputs/`,
but is no longer deployed or used as the primary presentation.

Current machine-readable state: [`research/data/status.json`](research/data/status.json).

## Verification

```bash
node scripts/check_slides.mjs

HOME=/tmp/codex-sage-home SAGE_HOME=/tmp/codex-sage-home \
  sage artifacts/sage/verify_case_numbers.sage

(cd artifacts/lean && lake build)

jupyter-book build book -W --keep-going

./scripts/validate.sh
```

The independent Magma replay command and captured output are in
[`artifacts/magma`](artifacts/magma/README.md).
