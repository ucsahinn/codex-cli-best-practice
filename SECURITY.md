# Security Policy

This repository is a documentation and configuration reference. It should not contain secrets, credentials, signing keys, local auth files, or private environment dumps.

## Supported Surface

Security-sensitive review applies to:

- `.codex/config.toml`
- `.codex/hooks.json`
- `.codex/hooks/scripts/`
- `.agents/skills/`
- `.github/workflows/`
- `scripts/`
- Release instructions in `docs/RELEASE_CHECKLIST.md`

## Reporting

If you find a security issue in this fork, open a private advisory or contact the repository maintainer through the repository's configured GitHub security channel. Do not publish exploitable details in a public issue before the maintainer has time to respond.

## Secret Handling

- Never commit API keys, access tokens, cookies, private keys, signing material, database dumps, or local auth files.
- If a secret-like value appears in history, treat it as compromised and rotate it first.
- Keep `.codex/config.toml` examples free of literal credentials.
- Prefer environment variable placeholders for examples.

## Release Safety

Before publishing a tag or GitHub Release:

```bash
npm run validate
git status --short
```

Use `docs/RELEASE_CHECKLIST.md` for the full release gate.

## Turkce Kisa Not

Bu repoya token, cookie, private key, imza materyali, lokal auth dosyasi veya ortam degiskeni dump'i ekleme. Yanlislikla eklenirse once credential'i rotate et, sonra history temizligini ayri ele al.
