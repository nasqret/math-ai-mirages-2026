# The Mirages and Twists of Mathematics with AI

Materials for Bartosz Naskręcki's 50-minute lecture for professional
mathematicians at MIM UW, Warsaw, 22 June 2026.

- **Live companion:** <https://nasqret.github.io/math-ai-mirages-2026/>
- **Public repository:** <https://github.com/nasqret/math-ai-mirages-2026>

This repository is evidence-first. Claims that can change are tied to dated
primary sources; personal case studies are labelled separately from benchmark
results; formal and computational examples are shipped as executable artifacts.

## Deliverables

- [37-slide PowerPoint with speaker notes](outputs/the-mirages-and-twists-of-mathematics-with-ai.pptx)
- source and claim ledger
- [Jupyter Book](book/intro.md) and [Obsidian knowledge vault](vault/Home.md)
- Lean, SageMath, and Magma examples
- [GitHub Pages landing site](landing/index.html)
- reproducibility and QA reports

Current machine-readable state: [`research/data/status.json`](research/data/status.json).

## Verification

```bash
HOME=/tmp/codex-sage-home SAGE_HOME=/tmp/codex-sage-home \
  sage artifacts/sage/verify_case_numbers.sage

(cd artifacts/lean && lake build)

jupyter-book build book -W --keep-going
```

The independent Magma replay command and captured output are in
[`artifacts/magma`](artifacts/magma/README.md).
