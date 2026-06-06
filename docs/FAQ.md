# FAQ

## Is this still the upstream best-practice repo?

No. This fork keeps the MIT license lineage but rebuilds the visible documentation as a bilingual Codex CLI operator handbook.

## Which file should I read first?

Start with `README.md`. Use `README.tr.md` if you want Turkish onboarding.

## Where do durable Codex rules belong?

Use `AGENTS.md` for repository rules, verification commands, and durable working agreements. Keep it short.

## Where do model, sandbox, approval, and MCP settings belong?

Use `.codex/config.toml`.

## Where should reusable workflows live?

Use `.agents/skills/<name>/SKILL.md` when the workflow should be reusable and triggerable by name or description.

## Where should release instructions live?

Use `docs/RELEASE_CHECKLIST.md` for gates and `docs/RELEASE_NOTES_v0.1.0.md` for the first release body.

## Can this repo publish itself automatically?

No. Publishing changes public state, so push, tag, and GitHub Release creation stay manual or approval-gated.
