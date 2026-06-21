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
