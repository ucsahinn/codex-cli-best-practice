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
- Public readiness instructions in `docs/PUBLIC_READINESS.md`
- Shared Claude compatibility settings in `.claude/settings.json`

## Reporting

If you find a security issue in this fork, open a private advisory or contact the repository maintainer through the repository's configured GitHub security channel. Do not publish exploitable details in a public issue before the maintainer has time to respond.

## Secret Handling

- Never commit API keys, access tokens, cookies, private keys, signing material, database dumps, or local auth files.
- If a secret-like value appears in history, treat it as compromised and rotate it first.
- Keep `.codex/config.toml` examples free of literal credentials.
- Prefer environment variable placeholders for examples.
- Keep `.codex/hooks/config/*.local.json`, generated hook logs, and personal agent state out of git.
- Do not add broad shared permissions such as unrestricted shell, write, or web access unless the risk is explicitly reviewed.

## Agent And Hook Safety

- Hooks are guardrails, not a security boundary. A model with write access can alter scripts unless the surrounding sandbox and review process prevent it.
- Shared MCP examples should be disabled by default when they install or execute external packages.
- Approval policies and sandbox modes must be reviewed together. `approval_policy = "never"` is appropriate for constrained non-interactive jobs, not as a default for broad local editing.
- Public CI examples should avoid sending untrusted pull request code to write-capable automation unless that behavior is intentionally reviewed.

## Release Safety

Before publishing a tag or GitHub Release:

```bash
npm run validate
git status --short
git diff --check
gitleaks detect --redact --no-banner --verbose
```

Use `docs/RELEASE_CHECKLIST.md` for the full release gate.

## Turkce Kisa Not

Bu repoya token, cookie, private key, imza materyali, lokal auth dosyasi veya ortam degiskeni dump'i ekleme. Yanlislikla eklenirse once credential'i rotate et, sonra history temizligini ayri ele al.
