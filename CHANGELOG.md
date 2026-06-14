# Changelog

## v0.1.2 - Profile And Anchor Fixes

### Fixed

- Replaced README quick-start `codex --profile development` commands with clone-safe `codex` commands.
- Added explicit README anchors for emoji-prefixed navigation targets.
- Extended validation to check same-document fragments and raw HTML `href` / `src` references.
- Moved named profile guidance out of the project config claim path and clarified that `--profile` is user-level.

### Notes

- `v0.1.1` was tagged before final reviewer findings were applied. Publish `v0.1.2` as the public release.

## v0.1.1 - Public Readiness Upgrade

### Added

- Added public-readiness, Windows, agent-security, and v0.1.1 release notes.
- Added a pull request template with validation, security, and bilingual-doc checks.
- Added stronger validation coverage for JSON files, local-only paths, hook logs, mojibake, and stale Codex config keys.

### Changed

- Rebuilt `README.md` and `README.tr.md` with clearer EN/TR onboarding, emoji-led navigation, safety defaults, and release flow.
- Updated Codex config examples around safer approval defaults, explicit hooks feature flag, and disabled-by-default external MCP examples.
- Refreshed release, research, security, contributing, hook, marketplace, memory, and roadmap documentation against current Codex guidance.
- Hardened GitHub Actions docs guard with syntax checks and a Gitleaks job.

### Security

- Ignored local hook override files and generated hook logs.
- Replaced broad shared Claude permissions with a conservative read/docs-oriented example.

## v0.1.0 - Fork Edition

### Added

- Rebuilt `README.md` as a distinct English/Turkish Codex CLI operator handbook.
- Added `README.tr.md` for Turkish onboarding and maintenance guidance.
- Added `docs/RESEARCH_NOTES.md` to record current-source Codex decisions.
- Added `docs/RELEASE_CHECKLIST.md` for publish, tag, and GitHub Release gates.
- Added `scripts/validate-docs.mjs` and `npm run validate`.
- Added GitHub Actions docs guard for pull requests and pushes.

### Changed

- Reframed the repository around an independent fork identity.
- Updated the weather orchestration example to use Istanbul as the default demo.
- Modernized Codex configuration examples around current model guidance.

### Removed

- Removed upstream sponsor configuration from the fork-facing GitHub surface.
