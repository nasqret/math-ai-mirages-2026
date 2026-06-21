# Browser-deck visual QA

## Reference and method

- Reference: the accepted browser deck from `ai-w-praktycznej-edukacji`.
- Implementation: this deck's root page, built by `scripts/build_site.sh`.
- Browser: local Chrome through `agent-browser`; the in-app browser runtime was
  unavailable during bootstrap.
- Native projector viewport: 1440×810. Responsive check: 390×844.
- The reference title and implementation title were inspected side by side with
  `view_image`. Temporary screenshots live only in `/private/tmp`.
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
| formal content | code and verification presented as inspectable artifacts | real Lean code, proof state, kernel output, trust boundary | pass |
| responsive behavior | prior deck collapses complex grids | code stack collapses and scrolls intentionally at 390×844 | pass |

## Above-the-fold copy diff

The title scene replaces the education-deck title, Polish subtitle, date, and
course-track selector with the supplied mathematics title, venue/date, author,
affiliations, and one sentence of scope. No benchmark number or capability claim
appears before the argument begins.

## Intentional deviations

- The reference's generated hero illustration is omitted. This technical lecture
  uses data, code, exact formulas, and the Nature Physics figure as its visuals.
- The track selector is removed because this lecture has one 43:20 core route.
- Text density is lower. Detailed qualifications are in speaker notes and the
  companion book.
- Green is added only for successful kernel/build states and verified boundaries.

## Core-path checks

- 33 unique slide hashes and 33 speaker-note blocks.
- Arrow navigation, fragment reveal, previous navigation, Home/End, direct hashes.
- Notes open/close, title and timing update, and Escape close.
- Overview opens; selecting a thumbnail restores the slide and hash.
- Book, JavaScript, and four evidence-image URLs return HTTP 200.
- No browser console errors; no elements exceed the 1440×810 slide boundary.
- Lean fragment changes from an explicit goal to `no goals`.

No material visual mismatch remains.
