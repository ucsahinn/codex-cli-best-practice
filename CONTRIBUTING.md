# Contributing

Thanks for improving this Codex CLI operator handbook. Keep contributions small, verifiable, and easy to review.

## Before You Edit

- Read `AGENTS.md`.
- Use `rg` to find existing wording before adding a new concept.
- Check `docs/RESEARCH_NOTES.md` before changing version-sensitive Codex claims.
- Choose the right surface: README for onboarding, `best-practice/` for durable guidance, `.codex/config.toml` for configuration, skills for reusable workflows, and `docs/RELEASE_CHECKLIST.md` for publish gates.

## Quality Bar

- Keep the fork identity visible.
- Keep English and Turkish onboarding aligned.
- Prefer concise examples over long theory.
- Do not add personal sponsor links, private tokens, screenshots, logs, or generated archives.
- Do not add dependencies unless the validator or docs workflow genuinely needs them.

## Validation

```bash
npm run validate
```

Run validation before opening a pull request or publishing a release.

## Commit Style

Follow one file, one commit unless a generated output must stay atomic with its source.

## Turkce Kisa Not

Bu repo dokumantasyon odakli. Degisiklik yapmadan once `AGENTS.md` oku, mevcut dili `rg` ile ara, sonra en kucuk anlamli patch'i yap. Release veya push oncesinde `docs/RELEASE_CHECKLIST.md` kullan.
