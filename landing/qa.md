# Landing-page visual QA

## Reference and method

- Accepted design reference: final presentation slide 1, using the established
  navy/cream/cyan/coral/gold lecture system.
- Browser method: `agent-browser` with local Chrome. The in-app browser and the
  sandboxed Playwright launch were unavailable.
- Viewports: 1440×900 desktop and 390×844 mobile.
- Final screenshots were inspected with `view_image`; temporary screenshots are
  not part of the release.

Because the landing page extends an already accepted lecture design system, no
new image-generation concept was needed.

## Fidelity ledger

| Check | Reference evidence | Render evidence | Result |
|---|---|---|---|
| palette | navy field, cream type, cyan and gold accents | exact token reuse across hero and sections | pass |
| title hierarchy | condensed, high-contrast title on slide 1 | large cream H1 with the same line rhythm | pass |
| copy | title, date, author, evidence-first thesis | all required hero strings present; no unapproved claim | pass |
| container model | broad bands and flat cards | full-width color bands; no nested wrapper clutter | pass |
| section rhythm | dark/cream/coral alternation in deck | evidence, cases, and verification bands alternate | pass |
| desktop first viewport | strong title plus thesis panel | title, CTAs, thesis, and next-section preview visible | pass |
| mobile | no source reference | 390×844: no overflow, isolated nav rows, intentional title wraps | pass |
| links | deck and companion are primary actions | Book resolves to `/book/intro.html`; deck path returns HTTP 200 | pass |

## Above-the-fold copy diff

The visible copy is limited to the supplied title, author/affiliations, venue/date,
the lecture thesis, and the two required artifact actions. No unexplained badge,
metric, or marketing claim was added.

## Intentional deviations

- The slide illustration is not reused on the website. The landing page uses the
  lecture's code-native color and typography system so it remains fast,
  responsive, and accessible.
- The deck title uses an ampersand for visual fit while document metadata and the
  book preserve the full title.

No material visual mismatch remains.
