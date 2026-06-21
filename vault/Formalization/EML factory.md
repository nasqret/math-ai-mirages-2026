# EML factory

Source snapshot: `d7d041df73e14da6ff5db889015d6e6b89615982`.

Audited release metrics:

- 36/36 target primitives;
- 100 public theorems;
- zero `sorry` / zero `admit` in the verified surface;
- 8,062 dispatched jobs.

## Formal object

Target grammar:

`T ::= 1 | xₙ | eml(T,T)`, where `eml(a,b) = exp(a) - log(b)`.

Compiler:

`F36 --translate?--> EL --compile--> EML --ι--> EMLℂ`.

`EMLTerm.eval?` returns `Option ℝ` or `Option ℂ`. This blocks the false boundary
semantics created by Mathlib's total `Real.log 0 = 0`.

## Specification-tightening loop

1. write `∀ x, ...`;
2. submit to Aristotle;
3. receive `COMPLETE_WITH_ERRORS`;
4. diagnose the junk boundary value;
5. restore the paper's `x > 0` domain;
6. resubmit and obtain `exit 0`.

The archive records 25+ submissions, five waves, 36 hours, and 9 clean
first-pass results among 15 submissions in one wave. This was not blind retry:
the theorem statement changed after mathematical diagnosis.

## Concrete audit repairs

- `Real.log 0 = 0` reliance → partial evaluator plus positivity;
- failures at `√0`, `arcosh 1`, `hypot(0,0)` → point-dependent witness families;
- real-part identities presented as complex witnesses → separate claims;
- flat witness list → structural compiler and one correctness theorem.

Separate-model criticism exposed boundary abuse and weak bridges. The key
artifact is the compiler, domain contract, and audit trail—not one generated
proof.

Source: <https://github.com/nasqret/eml-formalization>

See [[Lean and proof assistants]], [[Zsigmondy Chebyshev]], and [[FinEqs]].
