# FrontierMath v2

Epoch update, 12 June 2026; score snapshot, 22 June 2026:

- 338 total problems;
- 295 in Tiers 1–3;
- 43 in Tier 4;
- 2 Tier-4 problems public and 41 in the private evaluation;
- issues addressed in 42% of all problems;
- one million hard tokens, forced submission at 660,000;
- 30 seconds per Python call; exact objects returned through `answer()`.

Current leading v2 rows:

| System | Score ± SE |
|---|---:|
| Claude Fable 5 (max) | 87.8 ± 5.2 |
| GPT-5.5 Pro (xhigh) | 78.0 ± 6.5 |
| AI Co-Mathematician | 75.6 ± 6.7 |
| GPT-5.5 (xhigh) | 72.5 ± 7.1 |
| GPT-5.4 Pro (xhigh) | 58.5 ± 7.8 |

One private problem is 2.44 percentage points. The evaluated rows mix base
models, reasoning settings, and agent systems; compute is not normalized and
many intervals overlap.

The audit changed the benchmark. Old model percentages must not be compared to
v2 scores as if the task set were unchanged.

Sources: <https://epoch.ai/benchmarks/frontiermath-tier-4-v2> and
<https://epoch.ai/data/benchmarks.csv>. Frozen local chart data:
`research/data/frontiermath-tier4-v2-2026-06-22.json`.

See also [[Aletheia and Co-mathematician]].
