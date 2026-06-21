# Browser deck design specification

## Reference and intent

The deck reuses the accepted browser-presentation language from
`ai-w-praktycznej-edukacji`: full-screen 16:9 scenes, navy ground, cream type,
coral/cyan/yellow evidence accents, keyboard navigation, fragments, overview,
speaker notes, and a running clock. No generated imagery is needed because an
established project-specific design system already exists.

The lecture is for professional mathematicians. Each slide therefore carries
one claim, one evidential object, or one explicit distinction. Paragraphs belong
in speaker notes and the companion book, not on the projected surface.

## Visual system

- Ground: `#061b35`; surface: `#0b2947`; text: `#f6ebce`.
- Accents: coral `#ff654d`, cyan `#2db9da`, yellow `#ffc64b`, green `#58d18b`.
- Display type: Avenir Next/Futura/system fallback; code: SFMono/Consolas.
- Native canvas: responsive 16:9, verified at 1440x810 and 1920x1080.
- Minimum projected body text: 24 px at a 1440x810 viewport.
- Persistent UI is confined to the outer 48 px: progress, counter, clock, notes,
  overview, fullscreen, and companion-book link.

## Slide families

1. Statement: one large judgement and at most one qualifying sentence.
2. Evidence: a small number of exact values with a source strip.
3. Process: 3-6 stages with an explicit verification boundary.
4. Code: real Lean source with a proof-state or kernel-output panel.
5. Case study: exact artifact on the left, scope/caveat on the right.
6. Image: one research figure with a restrained explanatory caption.

## Content constraints

- Maximum one headline claim per slide.
- Prefer 3 facts to 6 bullets; remove repeated labels and rhetorical setup.
- Attribute provider reports and private evidence explicitly.
- Formalization sequence must distinguish formal statement, proof term, kernel
  verification, statement alignment, novelty, and mathematical responsibility.
- Every slide has speaker notes and a duration; total target is 43-48 minutes,
  leaving room for transitions inside a 50-minute lecture.

## Interaction

- Next: right/down/space/enter/PageDown or swipe left.
- Previous: left/up/backspace/PageUp or swipe right.
- `N`: notes; `O`: overview; `F`: fullscreen; Home/End: first/last.
- Hash URLs make every slide directly addressable.
- Print styles render one 16:9 slide per page with fragments visible.
