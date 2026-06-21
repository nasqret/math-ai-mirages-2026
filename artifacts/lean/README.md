# Lean examples adapted from the Falenty teaching repository

These are small, compilable examples adapted from the Falenty material. They
show the kernel boundary without pretending that the pedagogical sketch of
Erdős #728 is a complete formal proof. The verification target deliberately
uses only Lean core, so replay does not require downloading the multi-gigabyte
Mathlib cache.

```bash
cd artifacts/lean
lake build
```

The project pins Lean `v4.28.0`, matching the source material. The original
Falenty repository additionally pins Mathlib `v4.28.0`.
