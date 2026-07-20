# v0.1.0 - Codex CLI Operator Handbook Fork Edition

## Highlights

- Rebuilt the repository landing page as an independent English/Turkish Codex CLI operator handbook.
- Added a full Turkish onboarding guide for local contributors.
- Added release checklist, research notes, roadmap, contributing guide, security policy, docs validator, and CI docs guard.
- Updated the Agent to Skill demo around Istanbul weather output.
- Removed upstream-facing sponsor and mirror-style landing-page content from the fork identity.

## Validation

- `npm run validate`
- `node --check scripts\validate-docs.mjs`
- `git diff --check`
- `gitleaks detect --redact --no-banner --verbose`

## Release Notes

This release preserves the MIT license lineage while replacing the fork-facing documentation layer with a distinct operator handbook. It is intended as the first public baseline for the fork.

## Publish Checklist

Before publishing:

- Confirm `git status --short --branch` is clean.
- Confirm the target remote is `https://github.com/ucsahinn/codex-cli-best-practice.git`.
- Push `main`.
- Tag `v0.1.0`.
- Create a GitHub Release using this file as the release body.
