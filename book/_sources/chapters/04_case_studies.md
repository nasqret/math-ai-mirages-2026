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
\qquad \frac{\bar c_1^2}{\bar c_2}=\frac{14}{5}>rac{8}{3}.
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

## A private FrontierMath Tier-4 attempt

The speaker also retained a long GPT-5.4 attempt on a private Tier-4 problem.
The run combined local tools and calculations, produced a candidate solution,
and revealed weaknesses in strategy selection. Because the statement,
held-out solution, and full evaluation record are confidential, this is a
first-person case study—not a public benchmark datapoint.
