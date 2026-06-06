# CLAUDE.md

This file gives Claude Code equivalent repository guidance.

## What This Is

This repo is a bilingual Codex CLI operator handbook. It documents practical Codex surfaces: prompts, `AGENTS.md`, `.codex/config.toml`, skills, agents, MCP, hooks, memory, and release gates.

This is a documentation/configuration reference, not a traditional application.

## Key Surfaces

- `README.md` - English-first welcome page with Turkish bridge.
- `README.tr.md` - Turkish onboarding and maintenance guide.
- `.codex/config.toml` - Codex profiles, model defaults, sandboxing, approvals, MCP, and agent registration.
- `.codex/agents/weather-agent.toml` - Istanbul weather demo agent.
- `.agents/skills/weather-svg-creator/SKILL.md` - SVG weather card renderer skill.
- `best-practice/` - topic guides for Codex config, skills, hooks, MCP, memory, agents, marketplace, and `AGENTS.md`.
- `docs/RESEARCH_NOTES.md` - current-source decisions and refresh notes.
- `docs/RELEASE_CHECKLIST.md` - release and publish checklist.
- `scripts/validate-docs.mjs` - dependency-free docs validator.

## Working Standards

- Use existing repository structure and naming.
- Prefer targeted file reads and `rg` searches.
- Keep the fork identity visible and do not restore upstream sponsor or star-badge surfaces.
- Keep durable behavior in `AGENTS.md`; put detailed workflows in docs or skills.
- Treat skills as reusable workflows with trigger-focused descriptions.
- Verify current Codex claims against official OpenAI docs before adding version-sensitive details.

## Verification

```bash
npm run validate
```

Run this before release, before PR review, and after changing markdown links or required handbook files.

## Commit Convention

Use one file, one commit for documentation changes unless a generated artifact and its source must stay atomic.

## Release Boundary

Follow `docs/RELEASE_CHECKLIST.md` before publishing. If this folder has no `.git` directory, push and release steps must be done from a real fork checkout.
