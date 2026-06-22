# Project memory

## Fixed brief

- Title: **The Mirages and Twists of Mathematics with AI**
- Speaker: Bartosz Naskręcki
- Affiliations: Adam Mickiewicz University Poznań; Centre for Credible AI,
  Warsaw University of Technology
- Venue/audience: MIM UW; professional mathematicians
- Date: 22 June 2026
- Timing: 50 minutes plus discussion
- Public contact: https://x.com/nasqret

## Editorial contract

1. Separate verified fact, model/vendor claim, inference, and first-person
   experience.
2. Use primary sources for unstable numbers and current model capabilities.
3. Do not equate a formal checker with truth outside the formal statement,
   definitions, axioms, or trusted kernel.
4. Treat benchmark scores as conditional on task construction, access,
   compute, scaffolding, and evaluation protocol.
5. Preserve the speaker's central judgement: recombination and verified
   completion are improving rapidly; creativity that introduces durable new
   structures and representations remains consistently hard.

## Required case studies

- Erdős problems campaign
- EML and Falenty proof-formalization factory
- ECDSA.fail and SAIR/IGP24 agentic research loops
- Pokora–Naskręcki Chern-slope record computation
- FrontierMath Tier 4 personal attempt
- Aletheia and co-mathematician campaigns
- Leiden Declaration on AI and Mathematics
- Aristotle and adjacent formalization systems
- Nathanson conjecture / Pietro Monticone
- Nature Physics work with Ken Ono
- teaching deployments and the 25-hour staff course

## State labels

- `verified`: checked against a primary source or executable artifact
- `first_person`: speaker's documented experience, not an external benchmark
- `vendor_reported`: claim published by a model/tool provider
- `review_needed`: evidence found but not sufficient for a public claim
- `pending`: not yet researched or built

## Frozen release decisions

- The primary deck is the browser-native `landing/` presentation, using the
  accepted visual language of the `ai-w-praktycznej-edukacji` web deck.
- Final browser deck: 33 slides, 48:40 planned core speaking time, 33 note blocks.
- The formalization core is eight source-level slides: a three-project
  comparison; the paper-to-interface operation; exact Zsigmondy and FinEqs
  theorems; the EML compiler; the original EML specification loop; concrete
  defects/repairs; and the semantic versus kernel audit boundary.
- Formalization claims are frozen at `ZsigmondyChebyshev@9633e5a`,
  `fineqs@c177541`, and `eml-formalization@d7d041d`. The first two are source
  audits, not independent cold Mathlib rebuilds.
- Generic forecast and capability-summary slides were removed. FirstProof now has
  three technical slides; FrontierMath v2 and the anonymized private problem have
  seven slides with exact protocols, scores, uncertainty, and trace evidence.
- The PowerPoint build is a historical export and is not deployed.
- Erdős counts use community-wiki commit `0f72fdb`; records and unique problems
  are never conflated.
- FrontierMath statistics use the 12 June 2026 v2 task and the official score
  snapshot accessed on 22 June 2026; the frozen chart data records task version
  2.0.0 and all 31 matching evaluation rows.
- No official GPT-5.6 release source was found; any such label is described only
  as project-reported provenance.
- Private IGP24 material is aggregate. The Tier-4 case uses only the
  Epoch-approved anonymized public summary; the problem and held-out answer stay
  confidential.
- The quartic certificate is independently replayed in SageMath and Magma.
- Companion Lean examples use core Lean 4.28 to keep replay independent of the
  multi-gigabyte Mathlib cache; Falenty itself pins Mathlib 4.28.

## Release artifacts

- `landing/{index.html,styles.css,app.js}`
- `landing/{DESIGN.md,qa.md}`
- historical export: `outputs/the-mirages-and-twists-of-mathematics-with-ai.pptx`
- `research/data/claims.json`
- `book/`
- `vault/`
- `artifacts/{sage,magma,lean}/`
- `landing/`, `scripts/build_site.sh`, and the `gh-pages` deployment branch

## Public release

- Repository: https://github.com/nasqret/math-ai-mirages-2026
- Pages: https://nasqret.github.io/math-ai-mirages-2026/
- Concrete-evidence deck commit: `2bd4969`; Pages commit: `b28b597`
- Paper-formalization deck commit: `c321b09`; Pages commit: `79a6d44`
- Pages source: `gh-pages`, HTTPS enforced, verified live on 22 June 2026
- The generated Pages root must contain `.nojekyll`; otherwise GitHub Pages
  suppresses JupyterBook's `book/_static/` theme assets and renders raw HTML.
