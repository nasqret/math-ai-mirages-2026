# Governance and the Leiden Declaration

The [Leiden Declaration on AI for Mathematics](https://leidendeclaration.ai/)
was released on 2 June 2026 and endorsed by the International Mathematical Union.
Its importance is not a fixed list of permitted tools. It is the insistence that
mathematical communities govern how acceleration changes proof, credit, access,
and responsibility.

## Three operational principles

### Keep mathematics open

Arguments, formal artifacts, benchmark versions, and public infrastructure
should remain inspectable. Closed traces may sometimes be necessary, but they
weaken the public claim and should be labelled accordingly.

### Disclose meaningful AI use

Disclosure should name the tools, compute, and interventions that materially
affected the result. A generic sentence that “AI was used” is not enough for a
campaign whose search strategy, proof repair, or scoring depended on agents.

### Own the claim

Humans take credit and responsibility. Authors must be able to explain, defend,
and extend the result. Formal verification can narrow the error surface, but it
does not assign authorship or assess significance.

## Governance without freezing methods

Rules should preserve autonomy without freezing the current technology stack.
The relevant invariants are openness, inspectability, disclosure, fair access,
and accountable authorship. These remain meaningful whether the next system is
an LLM agent, a proof-search engine, a world model, or a hybrid architecture.

## A protocol for research groups

Before a run:

- write the exact claim and its evidence bar;
- decide which data or benchmark details are confidential;
- specify budgets and stopping rules.

During a run:

- version all artifacts;
- separate generation from criticism;
- use independent tools for decisive checks.

Before publication:

- establish novelty against the literature;
- disclose meaningful model and compute use;
- publish failures, exclusions, and provenance where possible; and
- make a named human responsible for the final mathematical statement.
