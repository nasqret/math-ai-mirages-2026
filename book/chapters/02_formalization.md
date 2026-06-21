# Formalization: what the checker certifies

## The trust boundary

Lean does not certify English. It certifies that a term has the stated type in a
particular environment. Once a theorem has been translated correctly, a small
kernel gives a strong local guarantee: dependencies are explicit and the proof
can be replayed. The guarantee does not establish that the formal statement is
the theorem the author intended, that the assumptions are natural, or that the
result is new and important.

This shifts the bottleneck upstream. Proof search is accelerating, while
statement extraction, semantic alignment, and library architecture remain
expensive.

## EML as a formalization factory

The [EML formalization project](https://github.com/nasqret/eml-formalization)
treated a paper-to-Lean effort as a compiler and audit system rather than a
single generated proof. Its release-level accounting records:

- 36 of 36 target calculator primitives;
- 100 public theorem statements;
- no `sorry` and no `admit` in the verified surface;
- 8,062 dispatched search/build jobs; and
- a replayable, versioned trail of review and repair.

The durable contribution is the architecture:

```text
paper -> theorem catalogue -> adversarial review -> Lean repair
      -> dependency structure -> clean replay
```

Separate-model criticism mattered. It exposed boundary abuse, unresolved
placeholders, and broken bridges between otherwise correct local results. That
lesson generalizes: a second independent critic is often more valuable than one
more continuation from the same transcript.

## Falenty: teaching the distinction

The [Falenty 2026 repository](https://github.com/nasqret/falenty-2026) uses a
simple teaching brief: choose a theorem, state the assumptions, compile it,
expose every gap, and explain the resulting proof term in prose. Students should
be able to distinguish:

- a kernel-checked proof;
- an incomplete sketch containing `sorry`; and
- a polished informal explanation.

The companion repository includes two small Lean 4.28 examples adapted from
that material. They deliberately use only Lean core so the trust boundary can be
replayed without a multi-gigabyte dependency download.

## Aristotle and discovery plus verification

Formal tools are also entering discovery workflows. Monticone's 2026 result on
Nathanson's questions gives a clean example: a complete classification of
product-intersection sets in semigroups was autonomously discovered and verified
in Lean by Aristotle, with a public preprint and named human authors who provide
review and exposition. This is stronger evidence than an isolated generated
proof because both the mathematical result and its formal artifact are
inspectable.

The operational rule is concise:

> Delegate proof search; retain mathematical responsibility.

Tools can search libraries, synthesize terms, repair routine gaps, and replay at
scale. Humans must select the statement, inspect assumptions, assess novelty,
and own the published claim.

## The auto-formalization frontier

The near-term frontier is not “press a button, formalize any paper.” It is an
agentic pipeline that alternates translation, elaboration, library search,
counterexample generation, local proof search, and human semantic review. This
pipeline is already useful at theorem scale. Long informal papers, implicit
conventions, equivalence between differently stated theorems, and maintainable
library design remain costly.
