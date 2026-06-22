# Agents, loops, and auto-research

## From prompts to controlled state machines

The successful methodology is rarely one brilliant prompt. It is a controlled
state machine with explicit artifacts:

```text
plan -> execute -> test -> critique -> checkpoint -> plan
```

Every cycle should leave a state, a test, and a reason to continue. A practical
research run stores hypotheses, counterexamples, programs, logs, and a compact
status file outside the model's context window. This makes failure resumable and
lets another reviewer attack the result without inheriting the same narrative.

## Inference-time compute is part of the method

A single attempt and a campaign with hundreds of tool calls are different
experimental treatments. At larger budgets agents can branch over variants,
run exact calculations, search literature, maintain external memory, and assign
specialized critic roles. Reports should therefore state:

- model and version;
- wall-clock and token or tool budget;
- number of retries and branches;
- external software and databases;
- human interventions; and
- the selection rule for the reported output.

Unequal access to compute changes who can run these experiments. Compute is thus
both a technical variable and a governance variable.

## SAIR.IGP24: campaign logic

The speaker's ongoing SAIR.IGP24 work is private, so only aggregate repository
counts are reported. In the 17 June snapshot, 51 accepted distinct pairs were
partitioned into:

- 5 pilot pairs used for manual calibration;
- 18 autonomous pairs from stateful search; and
- 28 follow-up pairs checked with exact Magma computations.

The public acceptance loop was: generate a candidate, verify it exactly in
Magma, check that it was still open, canonicalize the representation, and
deduplicate before recording acceptance.

The conclusion is methodological, not a public leaderboard claim: persistent
state, exact checking, and follow-up campaigns outperformed one-shot attempts in
this setting. Private instances and ongoing competition details are withheld.

## Failure modes of loops

More iterations do not automatically yield more truth. Common failures include:

- optimizing a proxy that drifts from the theorem;
- repeatedly repairing symptoms of a wrong representation;
- selecting the luckiest output after undisclosed retries;
- allowing generated tests to share the same blind spot as generated code; and
- accumulating an audit trail too large for any human to inspect.

The remedy is not to prohibit agents. It is to place exact checks, independent
critics, versioned checkpoints, and stopping rules inside the loop.
