# v0.1.2 - Profile And Anchor Fixes

## Highlights

- Replaced clone-time quick-start commands with `codex` so a fresh checkout does not depend on user-level profile files.
- Added explicit README anchors for emoji headings and strengthened validation around same-document fragments.
- Extended docs validation to parse raw HTML `href` and `src` references in addition to Markdown links.
- Clarified that named `--profile` presets are user-level Codex profile files, while this repo's `.codex/config.toml` carries project defaults.

## Validation

- `npm run validate`
- `node --check scripts/validate-docs.mjs`
- `git diff --check`
- `gitleaks detect --redact --no-banner --verbose`

## Notes

The earlier `v0.1.1` tag was created before final review findings were applied. This `v0.1.2` release is the public-ready release for the completed upgrade.
