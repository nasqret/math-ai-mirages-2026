# Case studies from the speaker's work

## ECDSA.fail: audited optimization

In the [ECDSA.fail challenge](https://ecdsa.fail/), the `nasqret` campaign
produced a promoted record on 14 June 2026 with:

- objective score: 1,677,861,900;
- 1,434,070 Toffoli gates;
- peak width of 1,170 qubits;
- 9,024 trusted shots; and
- zero recorded classical, phase, or ancilla failures.

Relative to the initial circuit score, the promoted result was 84.3% lower. The
repository attributes the solver to GPT-Codex. This is strong challenge evidence:
the optimization is executable and the trusted harness is reproducible. It is
not evidence that every input is correct or that the system discovered a new
mathematical theory.

## Quartic lines: breaking a Chern-slope bound

The most prominent case in the lecture is the joint project with Piotr Pokora.
A GPT Pro plus Codex campaign located and certified a characteristic-zero
counterexample to a conjectural logarithmic Chern-slope bound. The quartic is

\[
x_0^4-x_0x_1^3-x_2^4+x_2x_3^3=0.
\]

For its line arrangement, the exact profile is

\[
(n,t_2,t_3,t_4)=(24,0,32,0).
\]

The certified arithmetic is

\[
\bar c_1^2=112,\qquad \bar c_2=40,
\qquad \frac{\bar c_1^2}{\bar c_2}=\frac{14}{5}>\frac{8}{3}.
\]

The auxiliary quantity used in the search is

\[
G=10n-2t_2-t_3=10\cdot24-0-32=208.
\]

Finite-field discovery was followed by exact reconstruction over
\(\overline{\mathbb Q}\), then independent SageMath and Magma checks. The model
label is part of project provenance, not an official capability claim from the
provider. The mathematics is carried by the certificates.

## Computation as scaffolding, not a permanent crutch

The [quadrics project](https://github.com/nasqret/quadrics) illustrates a
different endpoint. Gröbner-basis calculations can discover the route, enumerate
cases, and test conjectural lemmas; the final exposition can still be reorganized
into a computer-free proof. The strongest workflow is often asymmetric:
machines search broadly, then a mathematician extracts the invariant and
compresses the computation into structure.

## Orphic symmetry and the amplified mathematician

In the Nature Physics work with Ken Ono, rapid computational exploration found a
diagonal-grid counterexample and exposed a false formulation. The mathematical
contribution was identifying the structural defect, refining the chain of
objects, and selecting the durable statement. The workflow diagram reproduced in
the lecture distinguishes informal mathematics, formalization, autoformalization,
machine assistance, and the still-hypothetical fully autonomous “superhuman
mathematician.” The 2026 evidence fills the intermediate boxes; it does not erase
the final distinction.

## One private FrontierMath Tier-4 problem, eleven isolated attempts

The public, Epoch-approved
[`sources/summary-anonym.tex`](https://github.com/nasqret/math-ai-mirages-2026/blob/main/sources/summary-anonym.tex)
report compares eleven
independent attempts at the same exact-integer problem in arithmetic algebraic
geometry. There was no memory between runs. Each used roughly 100,000 or more
reasoning tokens; the first ten transcripts contain 26,128 lines. Exact problem
details remain withheld.

The reference solution was decomposed into seven conceptual steps:

1. structural decomposition;
2. invariant computation;
3. deep geometric structure;
4. associated objects;
5. counting formula;
6. constraint classification; and
7. global cancellation.

The attempt scores, one point per fully discovered step with half credit for a
partial step, were

\[
1,\;0.5,\;2.5,\;3,\;3,\;2.5,\;4,\;0.5,\;4.5,\;0.5,\;7.
\]

Only the final run was complete. The first ten averaged 2.2/7. Every run engaged
with steps 1 and 2, but nine of eleven missed step 7. The transition from local
calculation to the global cancellation was the actual phase boundary.

Four further observations are concrete but descriptive, not causal:

- code-submitting runs averaged 3.4/7, versus 0.6/7 without code;
- runs that deeply used two or three strategies averaged 3.6/7, versus 0.5/7
  for shallow exploration;
- all three heuristic numerical guesses overestimated the answer by 6.4–6.8%;
- even the correct run called its answer a “best guess,” so expressed confidence
  did not identify correctness.

This is first-person trace analysis, not an additional public benchmark score.
Its value is diagnostic: large budgets reliably produced plausible local work,
while selection and control of the global structure remained fragile.
