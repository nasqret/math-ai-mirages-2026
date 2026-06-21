# Browser presentation

GitHub Pages entry point and primary lecture deck. It is a dependency-free
HTML/CSS/JavaScript presentation with 33 slides, speaker notes, fragments,
direct hashes, overview mode, fullscreen mode, a timer, and print styles.

Controls: arrows/space for navigation, `N` for notes, `O` for overview, and `F`
for fullscreen. `scripts/build_site.sh` assembles the deck, four evidence images,
and the Jupyter Book into one deployable site. The release is served from the
`gh-pages` branch; an optional Actions workflow template lives under
`deployment/`.

The design and content constraints are recorded in `DESIGN.md`; browser QA is
recorded in `qa.md`.
