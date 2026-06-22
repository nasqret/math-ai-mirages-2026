# Browser-deck visual QA

## Reference and method

- Reference: the accepted browser deck from `ai-w-praktycznej-edukacji`.
- Implementation: this deck's root page, built by `scripts/build_site.sh`.
- Browser: local Chrome through `agent-browser`; the in-app browser runtime was
  unavailable during bootstrap.
- Native projector viewport: 1440×810. Responsive check: 390×844.
- The reference title and implementation title were inspected side by side with
  `view_image`. Temporary screenshots live only in `/private/tmp`.
- For the concrete-content revision, the live former forecast slide and the new
  dated FrontierMath leaderboard were inspected side by side with `view_image`.
- For the formalization revision, the original EML project PDF/SVG and the
  rendered browser slides were inspected with `view_image`; Chrome screenshots
  were taken from the assembled Pages site so the SVG asset path was exercised.
- No new generated concept image was needed: the project already had an accepted
  browser-presentation system. The new deck reuses that system directly.

## Fidelity ledger

| Check | Reference | Implementation | Result |
|---|---|---|---|
| palette | navy ground, cream type, cyan/yellow/coral accents | same tokens, with green reserved for verified states | pass |
| hierarchy | oversized display title, small uppercase kicker | same title rhythm and kicker treatment | pass |
| canvas | full-screen 16:9 scenes | full-screen scenes; no page scroll at 1440×810 | pass |
| chrome | compact controls, progress, counter, timer | book, overview, fullscreen, notes, arrows, progress, counter, timer | pass |
| slide rhythm | statements, workflows, evidence cards, artifact images | same families, reduced to one claim per slide | pass |
| formal content | code and verification presented as inspectable artifacts | exact `Satz_2`, `theorem_1`, EML compiler semantics, project loop, and semantic audit boundary | pass |
| responsive behavior | prior deck collapses complex grids | code stack collapses and scrolls intentionally at 390×844 | pass |

## Concrete-content revision

| Removed pattern | Replacement | Evidence visible on slide |
|---|---|---|
| 12–24 month forecast cards | FrontierMath Tier-4 v2 leaderboard | date, task version, 41 private problems, scores, standard errors |
| generic benchmark warning | protocol and interpretation pair | 43/41 split, 1M/660k token limits, 30-second tools, 2.44 pp/problem |
| one-line FirstProof success rate | three-slide FirstProof sequence | fixed protocol, complete P1–P10 matrix, P7/P8 review failures |
| generic agentic-research diagram | AI Co-Mathematician system slide | 75.6 ± 6.7, retained state, tool classes, human loop |
| broad creativity/forecast claims | anonymized Tier-4 trace analysis | 11 scores, seven-step coverage, code/depth correlations, confidence failure |

The revision preserves the accepted canvas, palette, display type, compact
chrome, and color semantics. It intentionally increases table density where the
mathematical distinctions require exact rows. Generic capability slogans are no
longer used as evidence.

## Formalization revision

| Removed pattern | Concrete replacement | Evidence visible on slide |
|---|---|---|
| section divider and four-object diagram | three-project portfolio + paper-to-interface table | exact theorem target, Lean object, commit, lines, declarations |
| toy `and_symm` proof and local five-job transcript | Zsigmondy–Chebyshev `Satz_2` | primitive-divisor definition, eight exception families, real Lean signature |
| generic kernel-boundary cards | FinEqs `theorem_1` | exact finite-field bound, zero-set equality, blueprint's Lemma 5 warning |
| generic autoformalization pipeline | EML compiler architecture | grammar, F36→EL→EML pipeline, `Option` semantics, release counts |
| generic five-stage EML loop | original EML specification-tightening SVG | 25+ submissions, five waves, 36 hours, 9/15 first-pass proofs |
| abstract statement-alignment warning | project-by-project boundary table | the exact human audit question for Zsigmondy, FinEqs, and EML |

The assembled deck was checked at 1440×810: all 33 active slides have zero
horizontal or vertical overflow. At 390×844 the eight formalization slides have
zero horizontal overflow; the code-heavy Zsigmondy, FinEqs, EML compiler, and
loop slides scroll vertically by design. The built EML loop slide renders the
original project SVG, not a redraw.

## Case-study detail revision

Slides 14–16 now expose the auditable calculation rather than only the headline:

- ECDSA.fail shows both factors of the promoted objective, the baseline product,
  the 9,024-shot harness, and the three zero-valued failure counters.
- SAIR·IGP24 separates the 5 pilot, 18 autonomous, and 28 follow-up pairs and
  shows the complete acceptance path through Magma, the live-open check,
  canonicalization, and deduplication.
- VENIANI-64 gives the quartic equation, incidence profile, both logarithmic
  Chern-number substitutions, the finite-field-to-certificate path, and
  `G = 10n − 2t₂ − t₃ = 208`.

The accepted live ECDSA slide and the revised local rendering were inspected
side by side. The revised slides preserve the navy/cream palette, two-column
case-study layout, display hierarchy, evidence images, and responsive collapse.
Keyboard navigation was exercised from `#ecdsa` through `#igp24` to `#quartic`.
All 33 slides still have zero horizontal and vertical overflow at 1440×810. At
390×844, slides 14–16 have zero horizontal overflow and scroll vertically where
their exact evidence requires it; the source line remains clear of the fixed
controls. No browser console or page errors were reported.

## Above-the-fold copy diff

The title scene replaces the education-deck title, Polish subtitle, date, and
course-track selector with the supplied mathematics title, venue/date, author,
affiliations, and one sentence of scope. No benchmark number or capability claim
appears before the argument begins.

## Intentional deviations

- The reference's generated hero illustration is omitted. This technical lecture
  uses data, code, exact formulas, and the Nature Physics figure as its visuals.
- The track selector is removed because this lecture has one 48:00 core route.
- Expository text remains short, but exact protocols, result matrices, and
  uncertainty are projected rather than hidden in notes.
- Green is added only for successful kernel/build states and verified boundaries.

## Core-path checks

- 33 unique slide hashes and 33 speaker-note blocks.
- Arrow navigation, fragment reveal, previous navigation, Home/End, direct hashes.
- Notes open/close, title and timing update, and Escape close.
- Overview opens; selecting a thumbnail restores the slide and hash.
- Book, JavaScript, and four evidence-image URLs return HTTP 200.
- The generated root contains `.nojekyll`; the JupyterBook theme CSS under
  `book/_static/` must return HTTP 200 on GitHub Pages.
- The deck opens the book in a new tab, preserving the current slide; the book
  sidebar provides a visible “Return to slides” link.
- No browser console errors; all 33 slides pass a programmatic 1440×810 overflow
  audit. The formalization sequence, FirstProof, and the leaderboard were also
  checked at 390×844.

No material visual mismatch remains.

Live verification on 22 June 2026 passed for Pages commit `79a6d44`: 33 slides
and 33 note blocks, the EML SVG, the expanded formalization chapter, JupyterBook
theme and companion CSS, and desktop rendering all loaded without browser
errors. Source commit: `c321b09`.
