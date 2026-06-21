# Aletheia and AI Co-Mathematician

## Aletheia / FirstProof

Ten unpublished lemmas, two frozen model snapshots, unchanged problem LaTeX,
one predetermined extraction prompt, no intervention between prompt and output,
and at least two academic assessors per problem. “Correct” meant publishable
after minor revisions.

| Problem | A | B | Best-of-two review |
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

P7: an invalid Euler-characteristic multiplicativity step omitted necessary
finiteness hypotheses. P8: local smoothings were not connected by a complete
global interpolation argument; assessors disagreed whether the gap was minor.

Raw prompts and outputs are public. Limitations: small sample, best-of-two
selection, heterogeneous inference cost, and essential human grading.

## AI Co-Mathematician

The important object is a stateful asynchronous workbench that tracks failed
hypotheses and combines literature, computation, proof, and theory exploration.
It scored 75.6 ± 6.7 on the 41 private FrontierMath Tier-4 v2 problems in the
22 June 2026 Epoch snapshot. This is a system score, not a base-model score.

Sources: <https://arxiv.org/abs/2602.21201>,
<https://arxiv.org/abs/2605.06651>, and [[FrontierMath v2]].
