# Agent Security

This repo demonstrates Codex surfaces that can run commands, call tools, fetch docs, and write files. Treat those powers as engineering capabilities that need clear boundaries.

## Core Rules

- Sandbox mode controls filesystem/network reach. Approval policy controls whether Codex may ask before doing more.
- Hooks can warn, block, or add context, but they are not the primary security boundary.
- MCP servers and plugins can bring external tools into a session. Enable only the connectors needed for the task.
- Skills are instructions and assets. Review third-party skills before installing them.
- Subagents inherit the parent session's approvals, sandbox, and available tools.

## Public Repo Defaults

- Shared profiles should be conservative.
- Local broad permissions belong in ignored personal config.
- Use `enabled = false` for example MCP servers that execute remote packages.
- Use environment variables for credentials; never commit literal token values.
- Keep generated hook logs ignored because hook inputs can contain command text or file paths.

## Release Gate

Run:

```bash
npm run validate
git diff --check
gitleaks detect --redact --no-banner --verbose
```

If a secret appears in git history, rotate or revoke it first. History cleanup comes after credential safety.
