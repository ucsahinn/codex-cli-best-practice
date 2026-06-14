# AGENTS.md

This file provides durable working guidance for Codex CLI in this repository.

## What This Is

This repo is a bilingual Codex CLI operator handbook. It documents how to choose between prompts, `AGENTS.md`, config, skills, agents, MCP, hooks, and release checklists while keeping the fork distinct from the upstream starter project.

This is a documentation and configuration reference, not an application codebase.

## Key Surfaces

- `README.md` - English-first welcome page with a Turkish bridge.
- `README.tr.md` - Turkish onboarding and maintenance guide.
- `.codex/config.toml` - project defaults, sandboxing, approval policy, MCP, hooks, and agent registration.
- `.codex/agents/weather-agent.toml` - Istanbul weather demo agent.
- `.agents/skills/weather-svg-creator/SKILL.md` - SVG weather card renderer skill.
- `best-practice/` - focused Codex surface guides.
- `docs/RESEARCH_NOTES.md` - current-source decisions.
- `docs/RELEASE_CHECKLIST.md` - publish gates.
- `docs/PUBLIC_READINESS.md` - public repository readiness gate.
- `docs/AGENT_SECURITY.md` - agent, hook, MCP, and secret-handling guardrails.
- `docs/WINDOWS.md` - Windows setup and troubleshooting notes.
- `scripts/validate-docs.mjs` - dependency-free docs validator.

## Working Standards

- Prefer `rg` / `rg --files` for search.
- Keep edits small, coherent, and tied to the requested Codex surface.
- Preserve the fork identity: do not reintroduce upstream sponsor links, upstream star badges, or maintainer-specific first-viewport content.
- Keep `AGENTS.md` concise; move detailed procedures into docs or skills.
- Skill descriptions should be trigger conditions, not summaries.
- Use official OpenAI Codex docs or the local OpenAI Docs skill before adding version-sensitive Codex claims.
- Do not commit, push, tag, publish, or create releases unless the user explicitly asks.

## Verification

Run the narrowest relevant check first:

```bash
npm run validate
git diff --check
gitleaks detect --redact --no-banner --verbose
```

The validator checks required docs, local markdown links, JSON syntax, fork-facing README identity markers, local-only paths, generated hook-log leaks, and common mojibake sequences.

## Git Convention

Use one file, one commit for documentation changes unless multiple files must stay atomic.

Example:

- `git add README.md && git commit -m "Rewrite fork welcome page"`
- `git add README.tr.md && git commit -m "Add Turkish operator guide"`
- `git add docs/RELEASE_CHECKLIST.md && git commit -m "Add release checklist"`

## Release Boundary

Before publishing, follow `docs/RELEASE_CHECKLIST.md` and `docs/PUBLIC_READINESS.md`. Commit, push, tag, and release only after explicit user approval.
