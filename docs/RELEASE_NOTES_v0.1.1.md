# v0.1.1 - Public Readiness Upgrade

## Highlights

- Rebuilt the English and Turkish README flow with clearer emoji-led navigation, fork identity, safety defaults, and release guidance.
- Added public-readiness, Windows, and agent-security documentation.
- Hardened validation to catch unresolved links, JSON syntax errors, mojibake, local-only paths, stale Codex keys, and generated hook-log leaks.
- Updated shared Codex and Claude examples to avoid broad default permissions and local-only files.
- Added a PR template and CI secret-scan job for public repository hygiene.

## Validation

- `npm run validate`
- `node --check scripts/validate-docs.mjs`
- `git diff --check`
- `gitleaks detect --redact --no-banner --verbose`

## Notes

This release keeps upstream MIT license attribution while making the public fork read as a maintained bilingual Codex best-practices handbook.
