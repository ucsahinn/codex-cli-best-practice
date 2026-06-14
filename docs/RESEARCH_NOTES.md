# Research Notes

Checked on 2026-06-14. Refresh these notes before each public release because Codex behavior, plugin commands, hooks, models, and config keys can change.

## Source Map

| Source | Type | Confidence | Outdated risk | What it supports | Repo impact |
|---|---|---:|---:|---|---|
| OpenAI Codex customization docs | Official docs | High | Medium | `AGENTS.md`, skills, MCP, memories, and config are separate instruction/context layers | Keep surface map explicit and avoid putting every rule in README |
| OpenAI Codex config reference | Official docs | High | Medium | Project/user config boundaries, profiles, sandbox, approvals, MCP, features | Keep `.codex/config.toml` conservative and comment volatile examples |
| OpenAI Codex security and approvals docs | Official docs | High | Medium | Sandbox and approvals are separate controls; network is restricted unless configured | Document safe profiles and release gates |
| OpenAI Codex skills docs | Official docs | High | Medium | Skills use progressive disclosure through `SKILL.md` metadata and supporting files | Keep skill descriptions trigger-focused |
| OpenAI Codex plugins docs | Official docs | High | Medium | Plugins can distribute skills, MCP, hooks, commands, and assets | Keep plugin guidance separate from skill guidance |
| OpenAI Codex hooks docs | Official docs | High | High | Hooks are enabled with `features.hooks`, support lifecycle events, and may use `commandWindows` | Keep examples on the current hooks feature key |
| OpenAI Codex subagents docs | Official docs | High | Medium | Subagents are explicit specialist delegations and inherit session controls | Describe auto-routing as local policy, not Codex default |
| OpenAI Codex Windows docs | Official docs | High | Medium | Native Windows and WSL2 have different sandbox and command behavior | Add Windows-specific troubleshooting |
| OpenAI latest-model guide | Official docs | High | High | Current model guidance and prompt/eval emphasis | Use model names as refreshable examples, not permanent claims |
| OWASP Top 10 for LLM Applications | Security reference | High | Medium | Prompt injection, sensitive information disclosure, tool misuse, supply-chain risks | Add agent-security and secret-handling guidance |
| OpenSSF Scorecard / GitHub security patterns | Security reference | Medium | Medium | CI, branch, release, and dependency hygiene expectations | Add CI secret scan and public-readiness checklist |
| Public Codex and agent-skill examples | Public repos/examples | Medium | High | Useful repo layout and packaging patterns, not authority | Use only as patterns; do not copy incompatible content |

## Stable Decisions

- Keep durable repo behavior in `AGENTS.md`, not only in prompts.
- Keep execution controls in `.codex/config.toml`: sandbox mode, approval policy, model defaults, profiles, MCP servers, hooks, and agent registration.
- Use skills for reusable workflows. A skill description should answer when it should fire.
- Use subagents for explicit specialist delegation. Any automatic routing in this repo is a local operating policy.
- Use MCP for live context or version-sensitive documentation instead of copying volatile facts into static prompts.
- Use hooks for reviewed lifecycle automation, not as the primary security boundary.
- Use release checklists for publish gates because push, tag, and release creation are side-effectful.
- Keep Windows examples practical: prefer `commandWindows`, PowerShell-friendly checks, and explicit Python command differences.

## Claims To Refresh Before A Release

- Current Codex CLI slash commands and plugin commands.
- Current hook events and feature flag names.
- Current memory configuration keys.
- Current Windows sandbox notes.
- Latest model name and reasoning-effort recommendations.
- Any version-specific references in `best-practice/`.

## Intentionally Out Of Scope

- Benchmarks not run by this repository.
- Fake user feedback, GitHub stats, or support guarantees.
- Private or incompatible repo content.
- Auto-release workflows that publish without human approval.
