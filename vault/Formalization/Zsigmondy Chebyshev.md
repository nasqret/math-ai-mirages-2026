# Zsigmondy–Chebyshev formalization

Paper: Stefan Barańczuk, *Zsigmondy's Theorem for Chebyshev polynomials*.

Source snapshot:
<https://github.com/nasqret/ZsigmondyChebyshev/tree/9633e5a32761e7d5eb1db56107c93a173ba738cb>

## Formal object

`is_primitive_prime_divisor_Chebyshev a n p` means:

- `p` is prime;
- `p ∣ Tₙ(a)-1`; and
- `p ∤ T_d(a)-1` for every `0 < d < n`.

The main theorem is:

`(∃ p, is_primitive_prime_divisor_Chebyshev a n p) ↔
¬ is_exception_Satz2 n a`.

`is_exception_Satz2` contains eight families involving `a ∈ {-1,0,1}`,
`n ∈ {1,2,3,4,6}`, and signed powers of 2 or 3.

## Source audit

- 4,596 lines in `ZsigmondyChebyshev/Main.lean`;
- 187 theorem/lemma declarations;
- no `sorry` or `admit` token at the snapshot.

No independent cold Mathlib build was performed in the lecture repository.
The human audit is whether every sign, strict inequality, exponent range, and
exception family matches Satz 2 in the paper.

See [[Lean and proof assistants]], [[FinEqs]], and [[EML factory]].
