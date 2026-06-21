# Benchmarks, compute, and access

## FrontierMath v2 changed the object being measured

Epoch AI's 12 June 2026 FrontierMath v2 update is important because the audit is
itself a result. The revised set contains 338 problems:

- 295 problems in Tiers 1–3;
- 43 problems in Tier 4.

Epoch reports corrections to 123 Tier 1–3 problems and 12 Tier-4 problems, with
5 and 7 problems removed respectively. In total, issues were addressed in 42% of
the benchmark. Evaluations may use up to one million tokens and Python tools.

Consequently, old percentages should not be compared with v2 percentages as if
the task set and protocol were unchanged. A benchmark version is part of every
score.

## Aletheia and FirstProof

The public Aletheia/FirstProof experiment is unusually inspectable. The paper
reports that 6 of 10 solutions were accepted by a majority of expert assessors;
problem 8 was not unanimous. Raw prompts and outputs were released, and the
protocol includes ten unpublished research lemmas with human solutions withheld
during generation.

The result is strong precisely because its limitations are visible: a small
sample, best-of-two attempts, and essential human grading. The disclosed
experiment is more informative than a decontextualized success percentage.

## AI Co-Mathematician

The 2026 AI Co-Mathematician is best understood as a workbench, not an oracle. It
maintains asynchronous state, failed hypotheses, literature and computation
tools, and a human loop for uncertainty management. This architecture resembles
research practice more closely than single-turn evaluation. Earlier v1 numbers,
including 23 of 48, should not be treated as current capability figures after the
system and protocol changed.

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
