# FinEqs formalization

Paper: Stefan Barańczuk, *Reducing the number of equations defining a subset of
the n-space over a finite field*.

Source snapshot:
<https://github.com/nasqret/fineqs/tree/c177541d98f66b1c624acfa6947b7775228ae96e>

## Formal object

For `ZeroSet S = {x | ∀ f ∈ S, f x = 0}`, the main theorem states:

If `|X| ≤ (q^(n+1)-q)/(q-1)` and `S` is finite with `|S| > n`, then there is a
finite `T ⊆ span(S)` such that `|T| ≤ n` and `ZeroSet T = ZeroSet S`.

The file also contains the sharpness proposition and affine and projective
corollaries.

## Source audit

- 647 lines in `fineqs/Main.lean`;
- 10 theorem/lemma declarations;
- no `sorry` or `admit` token at the snapshot.

The blueprint explicitly says that Aristotle formalized a slightly different
version of the auxiliary Lemma 5 (`theorem_1_aux`). This is the semantic audit:
a kernel-checked auxiliary statement may still require proof that it is
equivalent to the paper's lemma.

No independent cold Mathlib build was performed in the lecture repository.

See [[Lean and proof assistants]], [[Zsigmondy Chebyshev]], and [[EML factory]].
