# Formalizing existing papers: three concrete projects

## What formalization actually changes

Lean does not certify an English sentence. It certifies that a proof term has a
formal type in a particular environment. Formalizing a paper therefore starts
before proof search:

1. replace mathematical prose by definitions with explicit quantifiers;
2. state domains, finiteness conditions, and exceptional cases;
3. choose an interface between the paper's objects and the library;
4. construct a proof term; and
5. audit whether the formal type still means what the paper says.

The last step is a semantic audit. The kernel answers “does this term inhabit
this type?” It does not answer “is this type the theorem intended by the
author?”

The three projects below make that distinction visible. The source facts are
audited at fixed repository commits. The Zsigmondy–Chebyshev and FinEqs
snapshots were not independently cold-built inside this lecture repository,
because their Mathlib environments are separate; line counts and absence of
`sorry`/`admit` are source-audit facts.

| Project | Paper-level target | Formal object |
|---|---|---|
| Zsigmondy–Chebyshev | primitive prime divisors of \(T_n(a)-1\) | an equivalence with eight explicit exception families |
| FinEqs | replace many equations without changing their common zero set | a finite-linear-algebra existence theorem |
| EML | express 36 elementary primitives using one binary grammar | partial semantics and an evaluation-preserving compiler |

## Zsigmondy–Chebyshev: the exception predicate is part of the theorem

The [ZsigmondyChebyshev
repository](https://github.com/nasqret/ZsigmondyChebyshev/tree/9633e5a32761e7d5eb1db56107c93a173ba738cb)
formalizes Stefan Barańczuk's *Zsigmondy's Theorem for Chebyshev polynomials*.
The first nontrivial choice is the definition:

```lean
def is_primitive_prime_divisor_Chebyshev
    (a : ℤ) (n p : ℕ) : Prop :=
  p.Prime ∧
  (p : ℤ) ∣ (Chebyshev.T ℤ n).eval a - 1 ∧
  ∀ d, 0 < d → d < n →
    ¬ (p : ℤ) ∣ (Chebyshev.T ℤ d).eval a - 1
```

The main theorem is then:

```lean
theorem Satz_2 (n : ℕ) (a : ℤ) (hn : n > 0) :
  (∃ p : ℕ, is_primitive_prime_divisor_Chebyshev a n p) ↔
    ¬ is_exception_Satz2 n a := by
  ...
```

`is_exception_Satz2` is not a placeholder. It is a disjunction of eight
families, covering \(a\in\{-1,0,1\}\), the indices
\(n\in\{1,2,3,4,6\}\), and signed families involving powers of \(2\) and
\(3\). The proof separates \(|a|\leq 1\), those five small indices, and the
large-\(n\) argument.

At commit `9633e5a`, the main source contains 4,596 lines, 187 theorem or lemma
declarations, and no `sorry` or `admit` token. The remaining mathematical audit
is exact and local: do the signs, inequalities, exponent ranges, and eight
encoded families coincide with Satz 2 in the paper?

## FinEqs: a kernel-checked theorem and an explicit semantic warning

The [FinEqs
repository](https://github.com/nasqret/fineqs/tree/c177541d98f66b1c624acfa6947b7775228ae96e)
formalizes Barańczuk's *Reducing the number of equations defining a subset of
the \(n\)-space over a finite field*. For a family \(S\) of functions, it
defines

\[
Z(S)=\{x : \forall f\in S,\ f(x)=0\}.
\]

The main formal statement says that, if

\[
|X|\leq\frac{q^{n+1}-q}{q-1},
\]

then every finite \(S\) with \(|S|>n\) admits a finite
\(T\subseteq\operatorname{span}(S)\) such that \(|T|\leq n\) and
\(Z(T)=Z(S)\):

```lean
theorem theorem_1 [Finite X] (n : ℕ) (S : Set (X → F))
    (hS : S.Finite) (hn : S.ncard > n)
    (hX : Nat.card X ≤
      (Fintype.card F ^ (n + 1) - Fintype.card F) /
      (Fintype.card F - 1)) :
  ∃ T : Set (X → F),
    T ⊆ Submodule.span F S ∧ T.Finite ∧
    T.ncard ≤ n ∧ ZeroSet T = ZeroSet S := by
  ...
```

The development also contains the sharpness proposition and affine and
projective corollaries. At commit `c177541`, the main source has 647 lines, 10
theorem or lemma declarations, and no `sorry` or `admit`.

The project's own blueprint nevertheless records the sentence:

> Aristotle formalized a slightly different version of this lemma.

That note concerns the auxiliary `theorem_1_aux` corresponding to Lemma 5. It
is the important methodological fact: a sorry-free Lean file can coexist with
an unresolved paper-to-Lean equivalence question. The kernel checks the chosen
auxiliary statement; a mathematician must decide whether it is the right
statement.

## EML: the paper claim became a compiler

The [EML formalization
project](https://github.com/nasqret/eml-formalization/tree/d7d041df73e14da6ff5db889015d6e6b89615982)
formalizes Odrzywołek's elementary mathematical language. The target grammar is

\[
T ::= 1 \mid x_n \mid \operatorname{eml}(T,T),\qquad
\operatorname{eml}(a,b)=\exp(a)-\log(b).
\]

The durable object is a compiler architecture:

```text
F36 --translate?--> EL --compile--> EML --ι--> EMLℂ
```

`F36` represents the paper's 36 primitives. The intermediate language `EL`
supports structural translation. `EML` is the one-operator target grammar. The
correctness theorem connects evaluation of a source expression to evaluation of
the compiled term.

The key design decision is partial semantics:

```lean
noncomputable def EMLTerm.eval?
    (env : Nat → ℝ) : EMLTerm → Option ℝ
  | .one     => some 1
  | .var n   => some (env n)
  | .eml a b =>
      match EMLTerm.eval? env a, EMLTerm.eval? env b with
      | some va, some vb =>
          if 0 < vb
          then some (Real.exp va - Real.log vb)
          else none
      | _, _ => none
```

Mathlib's total function has `Real.log 0 = 0`. Using it without a domain layer
can make a false boundary statement look provable. The `Option` result records
undefinedness instead. Compiler bridges have the shape

```text
source.eval? env e = some v
  → ∃ t : EMLTerm, t.eval? env = some v.
```

For interior points, one structural witness can suffice. At boundary points
such as \(\sqrt 0\), \(\operatorname{arcosh}(1)\), and
\(\operatorname{hypot}(0,0)\), the correct full-domain statement may instead
require a point-dependent witness family:

\[
\forall\,\mathrm{env},\ \text{hypotheses}(\mathrm{env})
\longrightarrow \exists t,\ t.\operatorname{eval?}(\mathrm{env})
=\operatorname{some}(v).
\]

The audited release records 36 of 36 primitives, 100 public theorems, 8,062
build jobs, and no `sorry` or `admit` in the verified surface.

## The EML specification-tightening loop

The project archive records more than 25 Aristotle submissions in five waves
over 36 hours, with roughly ten concurrent slots and an approximately six-hour
rate-limit pause. In one 15-submission wave, nine returned a clean proof on the
first pass. Long existential constructions often returned
`COMPLETE_WITH_ERRORS`.

The response was not to repeat the same request:

```text
write ∀ x, ... → submit → COMPLETE_WITH_ERRORS
  → diagnose Real.log 0 = 0
  → recover the paper's x > 0 domain
  → submit ∀ x > 0, ... → exit 0
```

This loop combines proof search with mathematical specification work. The
failed formal run exposes a mismatch; the human or reviewing model reads the
paper and the library semantics; the theorem changes; only then is proof search
restarted.

The later adversarial audit found four concrete classes of defects:

| Defect | Cause | Repair |
|---|---|---|
| a boundary “proof” used `Real.log 0 = 0` | total library function outside the natural domain | partial `Option` evaluator and explicit positivity |
| one witness failed at special boundary points | the expression became undefined | point-dependent witness families |
| real-part identities were presented as complex witnesses | the bridge theorem was weaker than the paper claim | separate real and complex grammar claims |
| a flat witness catalogue looked complete | no theorem composed the primitives | structural compiler plus one correctness theorem |

The strongest product of the loop was therefore not one more generated proof.
It was a stronger formal architecture.

## The operational boundary

Across all three projects, the division of responsibility is concrete:

| Project | Kernel checks | Mathematician still checks |
|---|---|---|
| Zsigmondy–Chebyshev | `Satz_2` from the encoded exception predicate | fidelity of all eight exception families |
| FinEqs | existence of \(T\) with \(Z(T)=Z(S)\) | equivalence of the auxiliary formal lemma to Lemma 5 |
| EML | evaluation-preserving compilation on a declared domain | fidelity of the grammar, domain, and paper claim |

Agentic tools can search libraries, generate terms, repair local tactics, split
goals, and replay large batches. The kernel can verify the resulting term.
Neither replaces the semantic comparison between the formal interface and the
paper.
