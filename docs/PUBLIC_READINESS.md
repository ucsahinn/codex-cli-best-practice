# Public Readiness

Use this before calling the repository public-ready.

## Repository Identity

- README first viewport clearly names this fork and its purpose.
- Upstream license attribution remains in `LICENSE`.
- Upstream sponsor, podcast, subscribe, or unrelated marketing links are not reintroduced.
- GitHub description, topics, homepage, and release title match the fork-first Codex handbook positioning.

## Documentation

- `README.md` and `README.tr.md` lead users to the same workflows.
- `AGENTS.md` and `CLAUDE.md` stay concise and route details into docs.
- `best-practice/` pages separate official Codex behavior from local operator policy.
- Release notes describe only verified changes.

## Safety

- No secrets, local auth files, generated hook logs, private paths, screenshots, archives, or environment dumps are staged.
- Shared config avoids broad default permissions.
- MCP examples that install or run remote packages are disabled by default.
- Hook docs state that hooks are guardrails, not a security boundary.

## Verification

```bash
npm run validate
node --check scripts/validate-docs.mjs
git diff --check
gitleaks detect --redact --no-banner --verbose
git status --short --branch --untracked-files=all
```

## GitHub

- Issues are enabled if issue templates are shipped.
- PR template is present.
- Docs Guard workflow passes on the release commit.
- The release tag and GitHub Release point to the same commit.
- Public links in README and release notes resolve.
