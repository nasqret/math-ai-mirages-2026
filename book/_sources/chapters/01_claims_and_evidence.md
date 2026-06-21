# Claims, evidence, and the problem of headlines

## Four different nouns

Reports about “AI solving mathematics” routinely collapse four distinct objects:

| Object | Minimum evidence | What remains open |
|---|---|---|
| answer | a final value or candidate | correctness and derivation |
| proof | an argument checked by experts or a kernel | statement choice and novelty |
| theorem | a genuinely new mathematical result | importance and explanatory value |
| theory | reusable concepts, structure, and explanation | broad transfer and durability |

The frontier rises sharply from the first row to the fourth. A system may be
excellent at searching a fixed space and still be poor at selecting the right
representation, defining a useful invariant, or deciding which statement is
worth proving.

## The Erdős Problems campaign

The community-maintained [Erdős Problems wiki](https://www.erdosproblems.com/)
is a remarkable research record. It is also a poor single-number benchmark.
At repository commit `0f72fdb` (22 June 2026), parsing the primary AI-contribution
categories 1a–1d gives:

- 237 contribution records attached to 190 unique primary problems;
- 88 green, full-resolution contribution records;
- 79 unique problems represented among those green records.

Records and problems must be counted separately because one problem can have
several contributions. The denominator is adaptive: people choose tractable or
interesting targets, literature may be discovered after a result, statements
can be corrected, and obscurity is not the same thing as difficulty. The wiki
itself explicitly warns that the campaign is not a benchmark.

Erdős problem 728 is still a useful blueprint. The public record combines a
model-proposed strategy, an Aristotle-produced Lean artifact, expert inspection,
and a later literature comparison. The milestone is not merely that a system
returned a proof-shaped string. It is that proposal, formal search, and human
ratification can be inspected.

## Why campaigns and benchmarks answer different questions

A research campaign optimizes for progress. It permits adaptive problem choice,
iterative human intervention, literature search, and unequal budgets. A
benchmark should instead specify a frozen task version, sampling rule, compute
budget, exclusions, and an auditable scoring procedure.

This does not make campaigns scientifically weak. It means their right output is
a collection of case studies, artifacts, failures, and workflow hypotheses—not
a scalar claim about general intelligence.

## A practical evidence ladder

For each headline, ask:

1. Is the exact statement public and versioned?
2. Is the full output available, including failures?
3. Was the result checked by a formal kernel, independent computation, or named
   experts?
4. Are retries, model selection, tools, and human interventions disclosed?
5. Is novelty established against the literature?
6. Can another group replay the decisive step?

The later chapters use this ladder consistently, including for the speaker's own
projects.
