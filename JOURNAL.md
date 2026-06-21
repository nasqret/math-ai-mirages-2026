# Journal

## 2026-06-21 — bootstrap

- Confirmed the workspace was greenfield except for `notes/sketch_slides.md`.
- Initialized a local Git repository on `main`.
- Located the Falenty and EML slide archives and the retained Nature Physics
  figure.
- Located the native reference deck in `nasqret/ai-w-praktycznej-edukacji` and
  selected it as the sole PowerPoint template source.
- Located retained FrontierMath-related Claude project memory and a March 2026
  session record. These will be used only for explicitly labelled first-person
  observations.
- Began an exact source and claim inventory; all recent counts remain pending
  until checked live.

## 2026-06-21 — evidence freeze and deck

- Parsed the Erdős Problems primary categories at commit `0f72fdb`: 237 records,
  190 unique primary problems, 88 green records, and 79 unique green problems.
- Froze current primary-source claims for FrontierMath v2, Aletheia,
  AI Co-Mathematician, Nathanson/Monticone, the Leiden Declaration, GPT-5.4,
  and the unit-distance report.
- Audited local EML, ECDSA.fail, quartic-lines, teaching, IGP24, and private
  Tier-4 evidence with explicit public/private boundaries.
- Built a 37-slide native PowerPoint from the selected reference template.
- Added 37 speaker-note pages and a 47.75-minute timing plan.
- Repaired title and card overflows after full-slide render review.
- Template-plan and final-fidelity checks both passed with zero issues.

## 2026-06-21 — executable artifacts and documentation

- SageMath replay passed and generated machine-readable case numbers plus two
  charts.
- Remote Magma replay on `lts-faculty.wmi.amu.edu.pl` passed nonsingularity,
  profile, log-Chern arithmetic, slope `14/5`, and `G=208`.
- A Mathlib cache download exhausted disk space; removed only the failed 6.2 GB
  project-local checkout and converted the companion examples to core Lean.
- Lean 4.28 build then passed all five jobs.
- Expanded the Jupyter Book to ten source pages; warnings-as-errors build passed.
- Expanded the Obsidian vault into linked case, method, benchmark, teaching,
  governance, and reproducibility notes.
- Built and browser-tested the Pages landing page at desktop and 390×844 mobile.
- GitHub created the public repository but rejected a workflow-bearing push
  because the OAuth token lacked `workflow` scope. Switched the live deployment
  to a generated `gh-pages` branch and retained the Actions workflow as a
  non-active template under `deployment/`.
- Published `main` to <https://github.com/nasqret/math-ai-mirages-2026>.
- Published and enabled the `gh-pages` branch. GitHub reports the site as built,
  public, and HTTPS-enforced at
  <https://nasqret.github.io/math-ai-mirages-2026/>.
- Verified the live landing page and its Jupyter Book link in Chrome; both
  returned the expected title and URL.

## 2026-06-21 — browser deck

- Replaced the marketing landing page with a dependency-free 33-slide browser
  presentation based on the established `ai-w-praktycznej-edukacji` web deck.
- Reduced the projected copy to one claim or evidence object per slide; retained
  detailed qualifications in 33 speaker-note blocks.
- Built an eight-slide formalization sequence with real Lean 4 source, an
  explicit tactic state, the exact five-job build transcript, the kernel versus
  semantic-audit boundary, autoformalization, and EML audit evidence.
- Added direct hashes, fragment navigation, speaker notes, overview, fullscreen,
  timer, touch navigation, and print styles.
- Browser-checked key slides at 1440×810, repaired the mobile Lean code layout,
  exercised the core interaction path, and found no console errors.
- Removed the PowerPoint file from the Pages assembly path. It remains only as a
  historical repository export.
- Published main commit `bec25cc` and Pages commit `af36876`. Verified the live
  root as a 33-slide deck, the Lean fragment as `no goals`, the book and assets
  as HTTP 200, and the former PowerPoint URL as HTTP 404.

## 2026-06-22 — concrete evidence revision

- Removed ten generic summary, forecast, and capability slides while keeping the
  deck at 33 slides by replacing them with source-grounded technical sequences.
- Reconstructed the FirstProof protocol from arXiv:2602.21201 and the released
  artifacts: two frozen snapshots, unchanged LaTeX, fixed extraction prompt, no
  intermediate intervention, complete P1–P10 matrix, and the exact P7/P8 review
  disputes.
- Downloaded the official Epoch benchmark CSV and froze the 31 Tier-4 v2.0.0
  evaluation rows used for the 22 June score chart. The deck reports scores with
  standard errors and separates the 41-problem private set from the 43-problem
  total.
- Audited `sources/summary-anonym.tex` and converted the eleven isolated attempts
  into four slides: experiment design, 0.5-point step scores, seven-step coverage,
  and behavioural findings. The problem statement and answer remain withheld.
- Expanded the companion book and Obsidian benchmark notes with the same exact
  protocols, matrices, scores, caveats, and private-case evidence.
- Compared the former forecast slide with the new current-score slide side by
  side. Desktop 1440×810 and mobile 390×844 checks passed; all 33 desktop slide
  boundaries are clean and the browser console is empty.
- Diagnosed the unstyled public JupyterBook: GitHub Pages returned 404 for
  `book/_static/` because the generated branch lacked `.nojekyll`. Added the
  sentinel to the repository and site builder so the theme assets survive every
  deployment.
- Published main content commit `2bd4969` and Pages commit `b28b597`. Live checks
  confirm the current Tier-4 chart, both JupyterBook theme and companion CSS as
  HTTP 200, new-tab deck-to-book navigation, the “Slides” return link, desktop
  and 390×844 rendering, and an error-free browser console.

## 2026-06-22 — paper-formalization revision

- Re-read `notes/sketch_slides.md` without modifying the user's draft and
  replaced all eight generic formalization slides.
- Audited `nasqret/ZsigmondyChebyshev` at `9633e5a`: `Satz_2`, the primitive
  divisor definition, eight exception families, 4,596 source lines, 187
  theorem/lemma declarations, and no `sorry`/`admit` token.
- Audited `nasqret/fineqs` at `c177541`: the exact zero-set compression theorem,
  its affine/projective consequences, 647 source lines, 10 declarations, and
  the blueprint's explicit warning that Aristotle formalized a slightly
  different version of Lemma 5.
- Audited `nasqret/eml-formalization` at `d7d041d` and reproduced the original
  specification-tightening SVG. The slide now projects the 25+ submissions,
  five waves, 36-hour window, 9/15 first-pass result, and the concrete
  `∀x → ∀x>0` domain repair.
- Added separate EML slides for the F36→EL→EML compiler, partial `Option`
  semantics, boundary repairs, and the cross-project kernel-versus-paper audit.
- Replaced remaining abstract teaching, Nature Physics, and governance language
  with deployed output counts, the diagonal-grid counterexample workflow, and a
  four-artifact release checklist.
- Expanded the Jupyter Book, Obsidian vault, source inventory, and claim ledger
  with the same source-level facts and caveats.
- The fully assembled Pages tree builds without warnings. All 33 slides have
  zero overflow at 1440×810; the eight formalization slides have zero horizontal
  overflow at 390×844; the browser console and error log are empty. Desktop
  screenshots confirm the exact Lean code, tables, compiler slide, and rendered
  original EML loop.
- Published source commit `c321b09` and Pages commit `79a6d44`. Live checks
  confirm 33 slides/notes, the loaded EML SVG, the styled expanded formalization
  chapter, and no browser errors.
