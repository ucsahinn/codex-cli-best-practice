# codex-cli-best-practice
Windows-first, bilingual Codex CLI best-practice fork for agentic engineering.

![updated with Codex CLI](https://img.shields.io/badge/updated_with_Codex_CLI-v0.137.0%20(Jun%2006%2C%202026)-white?style=flat&labelColor=555) <a href="https://github.com/ucsahinn/codex-cli-best-practice/stargazers"><img src="https://img.shields.io/github/stars/ucsahinn/codex-cli-best-practice?style=flat&label=%E2%98%85&labelColor=555&color=white" alt="GitHub Stars"></a>

[English](README.md) · [Türkçe](README.tr.md)

> Maintained fork by [@ucsahinn](https://github.com/ucsahinn). Upstream: [shanraisshan/codex-cli-best-practice](https://github.com/shanraisshan/codex-cli-best-practice).

[![Best Practice](!/tags/best-practice.svg)](best-practice/) [![Implemented](!/tags/implemented.svg)](.codex/) [![Orchestration Workflow](!/tags/orchestration-workflow.svg)](orchestration-workflow/orchestration-workflow.md) [![Codex](!/tags/codex.svg)](https://developers.openai.com/codex/overview)<br>
<img src="!/tags/a.svg" height="14"> = Agents · <img src="!/tags/c.svg" height="14"> = Commands · <img src="!/tags/s.svg" height="14"> = Skills

<p align="center">
  <img src="!/codex-jumping.svg" alt="Codex CLI mascot jumping" width="120" height="100">
</p>

## 🧠 CONCEPTS

| Feature | Location | Description |
|---------|----------|-------------|
| <img src="!/tags/c.svg" height="14"> [**Commands**](https://developers.openai.com/codex/cli/slash-commands) | `interactive session / slash popup` | Built-in slash commands for session control — examples include `/plan`, `/fast`, `/fork`, `/review`, `/status`, `/mcp`, `/agent`, `/apps`, `/model`, and `/permissions` |
| <img src="!/tags/a.svg" height="14"> [**Subagents**](https://developers.openai.com/codex/subagents) | [`.codex/agents/<name>.toml`](.codex/agents/) | [![Best Practice](!/tags/best-practice.svg)](best-practice/codex-subagents.md) [![Implemented](!/tags/implemented.svg)](.codex/agents/) Custom agents registered under `[agents.<name>]` with dedicated TOML role configs, parallel subagent orchestration, and CSV batch processing · Global settings live under `[agents]` (`max_threads`, `max_depth`, `job_max_runtime_seconds`) · Built-in: `default`, `worker`, `explorer` |
| <img src="!/tags/s.svg" height="14"> [**Skills**](https://developers.openai.com/codex/skills) | [`.agents/skills/<name>/SKILL.md`](.agents/skills/) | [![Best Practice](!/tags/best-practice.svg)](best-practice/codex-skills.md) [![Implemented](!/tags/implemented.svg)](.agents/skills/) [Reference](docs/SKILLS.md) Reusable instruction packages with required `name` + `description` metadata and progressive disclosure via `scripts/`, `references/`, `assets/`, and optional `agents/openai.yaml` · Invoke explicitly via `/skills` or `$skill-name`, or implicitly by description match · Built-in examples: `$plan`, `$skill-creator`, `$skill-installer` · Distributed via [Plugins](https://developers.openai.com/codex/plugins) |
| [**Plugins**](https://developers.openai.com/codex/plugins) | `.codex-plugin/plugin.json` | Distributable bundles combining skills + app integrations + MCP servers — local/personal [marketplace](https://developers.openai.com/codex/plugins/build) system · Built-in: `$plugin-creator` · Browse via `/plugins` or Codex App |
| [**Marketplace**](https://developers.openai.com/codex/plugins) ![new](!/tags/beta.svg) | `$CODEX_HOME` → `[marketplaces.*]` | [![Best Practice](!/tags/best-practice.svg)](best-practice/codex-marketplace.md) Plugin catalog system (v0.121.0+) — `codex plugin marketplace add\|upgrade\|remove` accepts GitHub shorthand, git URLs, and local directories · Manifest at `.agents/plugins/marketplace.json` · Browse installed marketplaces via `/plugins` tabs |
| [**Memories**](https://developers.openai.com/codex/memories) ![new](!/tags/beta.svg) | `$CODEX_HOME/memories/` | [![Best Practice](!/tags/best-practice.svg)](best-practice/codex-memory.md) Cross-session memory pipeline (v0.119.0+) — enable with `[features].memories = true` and configure under `[memories]` · TUI control via `/memories` (use · generate · reset) · Per-thread toggle persists in state DB · Scope is per-user, not per-project |
| [**Workflows**](https://developers.openai.com/codex/workflows/) | [`.codex/agents/weather-agent.toml`](.codex/agents/weather-agent.toml) | [![Orchestration Workflow](!/tags/orchestration-workflow.svg)](orchestration-workflow/orchestration-workflow.md) End-to-end usage patterns — explain codebase, fix bugs, write tests, prototype from screenshot, iterate UI, delegate to cloud, code review, update docs |
| [**MCP Servers**](https://developers.openai.com/codex/mcp) | `config.toml` → `[mcp_servers.*]` | [![Best Practice](!/tags/best-practice.svg)](best-practice/codex-mcp.md) [![Implemented](!/tags/implemented.svg)](.codex/config.toml) Model Context Protocol for external tools — STDIO + Streamable HTTP servers · OAuth support (`codex mcp login`) · Also acts as MCP **server** via `codex mcp-server` (exposes `codex()` + `codex-reply()` tools) · **MCP Apps** (v0.119.0+): resource reads, elicitations, file-parameter uploads · **Parallel calls** (v0.121.0+): `supports_parallel_tool_calls = true` per server · CLI management: `codex mcp add\|get\|list\|login\|logout\|remove` |
| [**Config**](https://developers.openai.com/codex/config-basic) | [`.codex/config.toml`](.codex/config.toml) | [![Best Practice](!/tags/best-practice.svg)](best-practice/codex-config.md) [![Implemented](!/tags/implemented.svg)](.codex/config.toml) TOML-based layered config system · profile files live at `$CODEX_HOME/<profile>.config.toml` and are selected with `--profile` · [Sandbox](https://developers.openai.com/codex/cli/features) · [Approval Policy](https://developers.openai.com/codex/cli/features) · [Advanced](https://developers.openai.com/codex/config-advanced) (`[features]`, `[shell_environment_policy]`, `[tui]`, model providers, granular approvals) · [Trust](https://developers.openai.com/codex/config-basic) system for project configs · `developer_instructions` · `model_instructions_file` for custom system prompts |
| [**Rules**](https://developers.openai.com/codex/rules) | `.codex/rules/` | Starlark-based command execution policies via `prefix_rule()` — `allow`, `prompt`, `forbidden` decisions with exact-prefix matching · Test via `codex execpolicy check` · Rules work alongside granular `approval_policy` controls and user-managed approvals |
| [**AGENTS.md**](https://developers.openai.com/codex/guides/agents-md) | [`AGENTS.md`](AGENTS.md) | [![Best Practice](!/tags/best-practice.svg)](best-practice/codex-agents-md.md) Project-level context for Codex CLI — hierarchical discovery from cwd to repo root, capped at 32 KiB (`project_doc_max_bytes`) · `AGENTS.override.md` for personal overrides |
| [**Hooks**](https://developers.openai.com/codex/hooks) ![beta](!/tags/beta.svg) | [`.codex/hooks.json`](.codex/) | [![Best Practice](!/tags/best-practice.svg)](best-practice/codex-hooks.md) [![Implemented](!/tags/implemented.svg)](.codex/hooks.json) User-defined shell scripts that inject into the agentic loop — logging, security scanning, validation, and custom automation · Enable with `[features].hooks = true`; Windows commands can use `commandWindows` |
| [**Speed**](https://developers.openai.com/codex/speed) | `config.toml` → `service_tier` | Fast Mode via `service_tier = "fast"` plus `[features].fast_mode = true` — toggle with `/fast on\|off\|status` · GPT-5.3-Codex-Spark for near-instant iteration (Pro subscribers) |
| [**Code Review**](https://developers.openai.com/codex/cli/features) | `/review` | Review branches, uncommitted changes, or specific commits — configurable `review_model` in config.toml · Custom review instructions |
| [**Sessions**](https://github.com/openai/codex/releases) ![new](!/tags/beta.svg) | `$CODEX_HOME/sessions/` · `/archive` | Session lifecycle management — resume or fork prior threads · **archive** via `/archive` (TUI) or `codex archive` / `codex unarchive` (CLI); archived threads are protected from resume/fork until restored (v0.137.0+) · **search local conversation history** with case-insensitive content matches + result previews (v0.135.0+) |
| **AI Terms** | | Agentic Engineering · Context Engineering · Vibe Coding |
| [**Best Practices**](https://developers.openai.com/codex/learn/best-practices) | | Official best practices · [Prompt Engineering](https://platform.openai.com/docs/guides/prompt-engineering) · [Codex Guides](https://developers.openai.com/codex/overview) |

<p align="center">
  <img src="!/codex-jumping.svg" alt="section divider" width="60" height="50">
</p>

[![Orchestration Workflow](!/tags/orchestration-workflow-hd.svg)](orchestration-workflow/orchestration-workflow.md)

See [orchestration-workflow](orchestration-workflow/orchestration-workflow.md) for implementation details of <img src="!/tags/a.svg" height="14"> **Agent** → <img src="!/tags/s.svg" height="14"> **Skill** pattern. The agent fetches temperature from Open-Meteo and invokes the SVG creator skill.

<p align="center">
  <img src="!/orchestration-workflow-diagram.svg" alt="Orchestration Workflow: Agent → Skill → Output" width="100%">
</p>

![How to Use](!/tags/how-to-use.svg)

```bash
codex
> Fetch the current weather for Dubai in Celsius and create the SVG weather card output using the repo.
```

> **Note:** This workflow focuses on Codex's documented <img src="!/tags/a.svg" height="14"> **Agent** → <img src="!/tags/s.svg" height="14"> **Skill** pattern. Repo-local skills are invoked with `/skills`, `$skill-name`, or implicit description matching; reusable command-style packaging belongs in plugins rather than `.codex/commands/`.

<p align="center">
  <img src="!/codex-jumping.svg" alt="section divider" width="60" height="50">
</p>

## ⚙️ WORKFLOW PATTERNS

All major workflows converge on the same operational loop: **Research → Plan → Execute → Review → Ship**.

| Pattern | Use When | Codex Surface |
|---|---|---|
| Explore → Plan → Patch → Verify | General repo work and bug fixes | Prompt, plan tool, shell, `apply_patch` |
| Agent → Skill | A role fetches/organizes data and a reusable workflow renders output | `.codex/agents/` + `.agents/skills/` |
| Review → Risk List → Tests | PR review, security review, release checks | `/review`, focused prompts, project scripts |
| Profile Switch | Moving between audit, development, CI, and trusted automation | `$CODEX_HOME/<profile>.config.toml` |
| Hook Guardrails | Deterministic local feedback, logging, or policy checks | `.codex/hooks.json` |

Use external workflow repos as inspiration, not as source-of-truth for this fork. This repository keeps the checked-in examples small, current, and verifiable.

<p align="center">
  <img src="!/codex-jumping.svg" alt="section divider" width="60" height="50">
</p>

## 💡 TIPS AND TRICKS

[Prompting](#tips-prompting) · [Planning](#tips-planning) · [AGENTS.md](#tips-agentsmd) · [Agents](#tips-agents) · [Skills](#tips-skills) · [Hooks](#tips-hooks) · [Memories](#tips-memory) · [Workflows](#tips-workflows) · [Advanced](#tips-workflows-advanced) · [Git / PR](#tips-git-pr) · [Debugging](#tips-debugging) · [Utilities](#tips-utilities) · [Daily](#tips-daily)

![Community](!/tags/community.svg)

<a id="tips-prompting"></a>■ **Prompting (3)**

| Tip |
|-----|
| challenge Codex — "prove to me this works" and have Codex diff between main and your branch |
| after a mediocre fix — "knowing everything you know now, scrap this and implement the elegant solution" |
| Codex fixes most bugs by itself — paste the bug, say "fix", don't micromanage how |

<a id="tips-planning"></a>■ **Planning (4)**

| Tip |
|-----|
| use [/plan](https://developers.openai.com/codex/cli/slash-commands) when you want an explicit plan — Codex may also plan automatically for multi-step tasks |
| always make a phase-wise gated plan, with each phase having multiple tests (unit, automation, integration) |
| spin up a second Codex thread or reviewer agent to review your plan as a staff engineer |
| write detailed specs and reduce ambiguity before handing work off — the more specific you are, the better the output |

<a id="tips-agentsmd"></a>■ **AGENTS.md (5)**

| Tip |
|-----|
| keep [AGENTS.md](https://developers.openai.com/codex/guides/agents-md) concise — 150 lines is a useful heuristic, but the actual limit is byte-based (32 KiB) |
| use [AGENTS.override.md](https://developers.openai.com/codex/rules) for personal preferences without affecting the team |
| any developer should be able to launch Codex, say "run the tests" and it works on the first try — if it doesn't, your AGENTS.md is missing essential setup/build/test commands |
| keep codebases clean and finish migrations — partially migrated frameworks confuse models that might pick the wrong pattern |
| use [config.toml](https://developers.openai.com/codex/config-basic) for harness-enforced behavior (approval policy, sandbox, model) — don't put behavioral rules in AGENTS.md when config.toml settings are deterministic |

<a id="tips-agents"></a><img src="!/tags/a.svg" height="14"> **Agents (3)**

| Tip |
|-----|
| have feature specific [sub-agents](https://developers.openai.com/codex/subagents) with [skills](https://developers.openai.com/codex/skills) instead of general qa, backend engineer |
| use [multi-agent](https://developers.openai.com/codex/multi-agent/) to throw more compute at a problem — offload tasks to keep your main context clean and focused |
| use test time compute — separate context windows make results better; one agent can cause bugs and another can find them |

<a id="tips-skills"></a><img src="!/tags/s.svg" height="14"> **Skills (7)**

| Tip |
|-----|
| use [skills](https://developers.openai.com/codex/skills) with clear name and description frontmatter for auto-discovery |
| skills are folders, not files — use references/, scripts/, examples/ subdirectories for [progressive disclosure](https://developers.openai.com/codex/skills) |
| build a Gotchas section in every skill — highest-signal content, add Codex's failure points over time |
| skill description field is a trigger, not a summary — write it for the model ("when should I fire?") |
| don't state the obvious in skills — focus on what pushes Codex out of its default behavior |
| don't railroad Codex in skills — give goals and constraints, not prescriptive step-by-step instructions |
| use the built-in skill creator to scaffold new skills, and document one invocation style consistently across the repo |

<a id="tips-hooks"></a>■ **Hooks (3)**

| Tip |
|-----|
| use [hooks](https://developers.openai.com/codex/hooks) for logging, security scanning, and validation — enable with `[features].hooks = true` |
| use hooks for auto-formatting code — Codex generates well-formatted code, the hook handles the last 10% to avoid CI failures |
| branch `SessionStart` on `source` (`startup \| resume \| clear`) — skip heavy context on `clear` so `/clear` stays snappy (v0.120.0+) |

<a id="tips-memory"></a>■ **Memories (2)**

| Tip |
|-----|
| enable [memories](https://developers.openai.com/codex/memories) once and forget about it — consolidation runs between sessions, not mid-turn |
| set `no_memories_if_mcp_or_web_search = true` for threads that touch secrets or untrusted content — reset via `/memories → Reset` if exposure happens |

<a id="tips-workflows"></a>■ **Workflows (4)**

| Tip |
|-----|
| vanilla Codex is better than any workflows with smaller tasks |
| use [profiles](https://developers.openai.com/codex/config-basic) to switch between safety levels — copy examples to `$CODEX_HOME/<profile>.config.toml`, then run `codex --profile <name>` |
| start with [on-request](https://developers.openai.com/codex/cli/features) approval policy — only escalate to never when confident |
| use [/fork](https://developers.openai.com/codex/cli/slash-commands) in-session (or `codex fork`) to explore alternatives without losing your current thread, and [/resume](https://developers.openai.com/codex/cli/slash-commands) (or `codex resume`) to pick up where you left off |

<a id="tips-workflows-advanced"></a>■ **Workflows Advanced (5)**

| Tip |
|-----|
| use [multi-agent](https://developers.openai.com/codex/multi-agent/) to spawn sub-agents for parallel fan-out work (GA — enabled by default) |
| use [codex exec](https://developers.openai.com/codex/noninteractive) for headless/CI pipelines |
| combine [sandbox modes](https://developers.openai.com/codex/cli/features) with [approval policies](https://developers.openai.com/codex/cli/features) — workspace-write + on-request is a good default |
| [git worktrees](https://git-scm.com/docs/git-worktree) for parallel development |
| use ASCII diagrams a lot to understand your architecture |

<a id="tips-git-pr"></a>■ **Git / PR (3)**

| Tip |
|-----|
| keep PRs small and focused — one feature per PR, easier to review and revert |
| always squash merge PRs — clean linear history, one commit per feature, easy git revert and git bisect |
| commit often — as soon as a task is completed, commit |

<a id="tips-debugging"></a>■ **Debugging (5)**

| Tip |
|-----|
| ask Codex to run long-lived terminal commands as background tasks when logs matter |
| use MCP ([Chrome DevTools](https://developer.chrome.com/blog/chrome-devtools-mcp), [Playwright](https://github.com/microsoft/playwright-mcp)) so Codex can inspect browser console logs |
| use screenshots when visual state matters |
| use a second review pass with a stronger model or a separate agent before merging risky changes |
| agentic search (`rg`, glob, grep) beats stale RAG when code and permissions drift |

<a id="tips-utilities"></a>■ **Utilities (4)**

| Tip |
|-----|
| use a terminal setup with readable scrollback and split panes for long Codex sessions |
| keep hook feedback local and deterministic: sounds, logs, and validations should be optional |
| explore config.toml features like [profiles](https://developers.openai.com/codex/config-basic), [sandbox modes](https://developers.openai.com/codex/cli/features), and [MCP](https://developers.openai.com/codex/mcp) for a personalized experience |
| keep repo-local examples copy-ready for Windows, macOS, and Linux |

<a id="tips-daily"></a>■ **Daily (2)**

| Tip |
|-----|
| keep Codex CLI current, but read release notes before changing team defaults |
| re-run `codex doctor` after config, profile, MCP, or hook changes |

<p align="center">
  <img src="!/codex-jumping.svg" alt="section divider" width="60" height="50">
</p>

## Fork Scope

This fork keeps upstream attribution but removes personal media, subscribe, sponsor, and personality-branding sections that belong to the original maintainer.

What this fork adds:

- Windows-first Codex hook fixes with `commandWindows`
- Turkish + English usage docs
- Current Codex profile-file guidance for `0.134.0+`
- Copy-ready profile and CI examples
- Cleaner Agent → Skill documentation for practical use

## Attribution

This project is a maintained fork by [@ucsahinn](https://github.com/ucsahinn). The original project and historical foundation belong to [shanraisshan/codex-cli-best-practice](https://github.com/shanraisshan/codex-cli-best-practice).
