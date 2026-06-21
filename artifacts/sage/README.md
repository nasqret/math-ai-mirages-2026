# SageMath evidence artifact

Run from the repository root:

```bash
HOME=/tmp/codex-sage-home SAGE_HOME=/tmp/codex-sage-home \
  sage artifacts/sage/verify_case_numbers.sage
```

The script checks the exact log-Chern arithmetic for the `VENIANI-64`
counterexample, checks the promoted ECDSA.fail score, writes a JSON certificate,
and renders the two data figures used in the presentation.
