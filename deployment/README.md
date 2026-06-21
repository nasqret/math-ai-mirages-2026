# Deployment

The live site is published from the `gh-pages` branch because the authenticated
GitHub OAuth token used for the initial release did not include the `workflow`
scope. Run `scripts/build_site.sh <empty-output-directory>` and publish that
directory to `gh-pages`.

`pages-workflow.yml` is the equivalent GitHub Actions workflow. It can be moved
to `.github/workflows/pages.yml` after authenticating with the `workflow` scope.
