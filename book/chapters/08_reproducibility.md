# Reproducibility

## Repository map

```text
presentation/       content, template map, and QA notes
outputs/            final PowerPoint and generated figures
artifacts/sage/      exact arithmetic and chart generation
artifacts/magma/     independent quartic verification
artifacts/lean/      kernel-checked teaching examples
research/data/       claim and source ledger
vault/               Obsidian knowledge base
book/                this Jupyter Book
landing/             GitHub Pages entry point
```

## Exact arithmetic and figures

Run the SageMath certificate from the repository root:

```bash
HOME=/tmp/codex-sage-home SAGE_HOME=/tmp/codex-sage-home \
  sage artifacts/sage/verify_case_numbers.sage
```

It checks the ECDSA score reduction, the quartic Chern arithmetic, and the value
\(G=208\), then writes machine-readable output and the two lecture charts.

## Independent Magma check

With Magma installed locally:

```bash
magma -b artifacts/magma/verify_quartic_case.m
```

The verified remote route used for this release was:

```bash
ssh bnaskrecki@lts-faculty.wmi.amu.edu.pl \
  '/opt/magma/current/magma -b' < artifacts/magma/verify_quartic_case.m
```

The captured output reports nonsingularity over \(\mathbb Q\), profile
`<24,0,32,0>`, \(\bar c_1^2=112\), \(\bar c_2=40\), slope \(14/5\), and
\(G=208\).

## Lean replay

```bash
cd artifacts/lean
lake build
```

The project pins Lean 4.28.0 and uses only core Lean. The original Falenty
project additionally pins Mathlib 4.28.0. Keeping the companion examples core-only
prevents dependency-cache size from becoming part of the lecture's trust claim.

## Presentation QA

The final deck is a native clone-and-edit transformation of the selected source
template. All 37 output slides map to audited template slides. Automated fidelity
checking found no overlay, placeholder, fresh-slide rebuild, or OOXML-bypass
issues. LibreOffice rendering was reviewed as a 37-slide contact sheet, and the
deck contains 37 speaker-note pages.

## Evidence boundaries

Public claims link to public sources or repository artifacts. The SAIR.IGP24 and
private FrontierMath examples are intentionally limited to aggregate or
first-person methodological observations. Confidential task statements, held-out
solutions, and competition instances are not included.
