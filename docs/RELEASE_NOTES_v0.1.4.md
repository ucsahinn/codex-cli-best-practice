# v0.1.4 - Companion Handbook Positioning

## Highlights

- Reframed the main README as a multilingual gateway for the Codex CLI Operator Handbook.
- Added the explicit ecosystem split: `codex-enterprise-starter` is the installable starter kit, while this repo is the companion handbook.
- Reworked German, Spanish, French, and Brazilian Portuguese README files as concise localized overview pages.
- Improved the Turkish README with the same companion-project positioning.
- Extended validation to catch untranslated localized README template phrases.

## Validation

- `npm run validate`
- `node --check scripts/validate-docs.mjs`
- `git diff --check`
- `gitleaks detect --redact --no-banner --verbose`
