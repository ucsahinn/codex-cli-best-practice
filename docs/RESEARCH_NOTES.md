# Research Notes

These notes record the current-source decisions used while rebuilding this fork. They are intentionally short so future maintainers can refresh the claims without reading the whole repository.

## Sources Checked

| Source | How it was used |
|---|---|
| OpenAI Codex manual | Refreshed with the local OpenAI Docs skill helper on 2026-06-06. Used for Codex surfaces, CLI behavior, customization, skills, MCP, hooks, plugins, memories, and subagents. |
| `https://developers.openai.com/api/docs/guides/latest-model.md` | Used for current model guidance. The fetched page identified `gpt-5.5` as the latest model at refresh time. |
| Context7 `/openai/codex` | Used as a secondary docs index for Codex CLI configuration and repository examples. |

## Stable Decisions

- Keep durable repo behavior in `AGENTS.md`, not in the README.
- Keep execution controls in `.codex/config.toml`: sandbox mode, approval policy, model defaults, profiles, MCP servers, hooks, and agent registration.
- Use skills for reusable workflows. A skill description should answer "when should this fire?" rather than market the skill.
- Use agents for specialized roles that can own a bounded task or demo workflow.
- Use MCP for live context or version-sensitive documentation instead of copying volatile facts into prompts.
- Use hooks for reviewed lifecycle automation, not as the primary security boundary.
- Use release checklists for publish gates because push, tag, and release creation are side-effectful.

## Model Guidance

The current OpenAI docs fetch named `gpt-5.5` as the latest model and emphasized outcome-first prompts, success criteria, tool descriptions, reasoning effort tuning, and concise output controls. This repo therefore uses `gpt-5.5` in current examples but keeps model references easy to replace for accounts that do not have that model enabled.

## Claims To Refresh Before A Release

- Current Codex CLI slash commands.
- Current plugin and marketplace behavior.
- Current hooks maturity and feature flag requirements.
- Current memory configuration keys.
- Latest model name and reasoning-effort recommendations.
- Any version-specific references in `best-practice/`.

## What Was Intentionally Removed From The Welcome Page

- Upstream star badges and repository-specific sponsor links.
- Personal upstream community credit badges in the first viewport.
- Long external reading lists that make the fork look like a mirror.
- Release-specific claims that require daily updates.

## Refresh Command

```bash
node C:\Users\ulasc\.codex\skills\.system\openai-docs\scripts\fetch-codex-manual.mjs
```

If that helper is unavailable, use the OpenAI Developer Docs MCP server or the official Codex manual page as the fallback source.
