# Benchmarks, compute, and access

## FrontierMath Tier 4 v2: the task and the current chart

Epoch AI's 12 June 2026 FrontierMath v2 update is important because the audit is
itself a result. The revised set contains 338 problems:

- 295 problems in Tiers 1–3;
- 43 problems in Tier 4.

Epoch reports corrections to 123 Tier 1–3 problems and 12 Tier-4 problems, with
5 and 7 problems removed respectively. In total, issues were addressed in 42% of
the benchmark. Evaluations may use up to one million tokens and Python tools.

The Tier-4 v2 private evaluation has 41 problems; two further Tier-4 problems are
public. Each private problem therefore contributes about (100/41=2.44)
percentage points. The protocol allows one million hard tokens, forces a
submission at 660,000 tokens, and gives each Python call 30 seconds. The final
artifact is often an exact integer or a SymPy object returned by `answer()`.

The dated official CSV snapshot used in the lecture (22 June 2026, task version
2.0.0) reports:

| System | Score | Standard error |
|---|---:|---:|
| Claude Fable 5 (max) | 87.8% | 5.2 pp |
| GPT-5.5 Pro (xhigh) | 78.0% | 6.5 pp |
| AI Co-Mathematician | 75.6% | 6.7 pp |
| GPT-5.5 (xhigh) | 72.5% | 7.1 pp |
| GPT-5.4 Pro (xhigh) | 58.5% | 7.8 pp |
| Claude Opus 4.8 (max) | 56.1% | 7.8 pp |

This ranking is exact for the published rows. Its interpretation is conditional:
the systems mix base models, reasoning settings, agents, and unreleased systems;
their confidence intervals substantially overlap; and inference compute is not
normalized. Old percentages must not be compared with v2 percentages as if the
task set and protocol were unchanged.

## Aletheia and FirstProof

The public Aletheia/FirstProof experiment is unusually inspectable. Ten
unpublished research lemmas were sent to two frozen model snapshots. The problem
LaTeX was copied without modification, a predetermined extraction prompt was
used, no human altered an intermediate answer, and the systems returned LaTeX.
Every problem was then read by at least two academic mathematicians. “Correct”
meant publishable after minor revisions, not publication-ready prose.

The complete matrix is more informative than “6/10”:

| Problem | Aletheia A | Aletheia B | Best-of-two expert result |
|---|---|---|---:|
| P1 | no output | no output | — |
| P2 | correct | correct | 4/4 |
| P3 | no output | no output | — |
| P4 | no output | no output | — |
| P5 | correct | misinterpreted | 4/4 |
| P6 | no output | no output | — |
| P7 | critically flawed | correct | 3/3 |
| P8 | inadequate | correct? | 5/7 |
| P9 | correct | correct | 4/4 |
| P10 | correct | correct | 2/2 |

P7 exposes the value of expert review. One apparently plausible proof asserted
that a free order-two automorphism forces the compactly supported rational Euler
characteristic to be divisible by two, without the finiteness assumptions needed
for the claimed multiplicativity. P8 exposes a different boundary: the local
vertex smoothings were plausible, but the global edge interpolation was omitted,
and assessors disagreed on whether that gap was a minor revision.

The result is strong precisely because its limitations are visible: a small
sample, best-of-two attempts, and essential human grading. The disclosed
experiment is more informative than a decontextualized success percentage.

## AI Co-Mathematician

The 2026 AI Co-Mathematician is best understood as a workbench, not an oracle. It
maintains asynchronous state, retains failed hypotheses, combines literature,
computation, proof, and theory tools, and keeps a human loop for intent and
uncertainty management. The current Tier-4 v2 row is 75.6% ± 6.7 pp. That is a
system score: the agent scaffold and human-facing workflow are part of the
evaluated object. It is not a clean estimate of a base model's ability.

## Minimum benchmark report

A serious mathematical score should include at least:

1. the exact task and version;
2. model, sampling, context, and tool configuration;
3. total compute, retries, and selection rule;
4. known errors, exclusions, and corrections;
5. grading protocol and disagreements; and
6. raw traces where confidentiality permits.

Without these fields a score is a marketing datum, not a reproducible scientific
claim.

## Compute and voice

Scaling inference can produce qualitative gains, but access is highly unequal.
If compute-rich institutions set the tasks, own the traces, and define the
graders, benchmark success can amplify existing inequalities in who gets to make
mathematical claims. Governance must therefore treat access, disclosure, and
credit as part of evaluation design.
