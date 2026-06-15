# v0.1.3 - Localized README Coverage

## Highlights

- Added localized README entry points for German, Spanish, French, and Brazilian Portuguese.
- Expanded the main README language navigation so users can open every localized guide from the first viewport.
- Kept Turkish onboarding as the full maintenance guide while adding lighter localized entry points for additional readers.
- Extended validation so all localized README files are required release artifacts.

## Validation

- `npm run validate`
- `node --check scripts/validate-docs.mjs`
- `git diff --check`
- `gitleaks detect --redact --no-banner --verbose`

## Notes

This release brings the current `main` branch back under a versioned release after the multilingual README updates landed after `v0.1.2`.
