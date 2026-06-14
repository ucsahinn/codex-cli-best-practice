# FAQ

## Is this still the upstream best-practice repo?

No. This fork keeps MIT license attribution, but the visible documentation is maintained here as a bilingual Codex CLI operator handbook.

## Which file should I read first?

Start with `README.md`. Use `README.tr.md` if you want Turkish onboarding.

## Where do durable Codex rules belong?

Use `AGENTS.md` for repository rules, verification commands, and durable working agreements. Keep it short and route long procedures into docs or skills.

## Where do model, sandbox, approval, and MCP settings belong?

Use `.codex/config.toml`. Keep personal secrets and machine-specific settings in user config or ignored local files.

## Where should reusable workflows live?

Use `.agents/skills/<name>/SKILL.md` when the workflow should be reusable and triggerable by name or description.

## Are subagents automatic?

Official Codex subagents are explicit specialist delegations. This repository may describe local routing policies, but those are operator conventions, not a guarantee that Codex will auto-spawn every specialist.

## Are hooks a security boundary?

No. Hooks are useful guardrails and automation points, but sandboxing, approvals, review, and secret hygiene are still required.

## Where should release instructions live?

Use `docs/RELEASE_CHECKLIST.md` for gates and versioned `docs/RELEASE_NOTES_*.md` files for GitHub Release bodies.

## Can this repo publish itself automatically?

No. Publishing changes public state, so push, tag, and GitHub Release creation stay manual or approval-gated.
