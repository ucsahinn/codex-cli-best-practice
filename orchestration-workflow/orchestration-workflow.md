# Orchestration Workflow

This document describes the **Agent → Skill** orchestration workflow, demonstrated through a weather data fetching and SVG rendering system.

<table width="100%">
<tr>
<td><a href="../">← Back to Codex CLI Best Practice</a></td>
<td align="right"><img src="../!/codex-jumping.svg" alt="Codex" width="60" /></td>
</tr>
</table>

## System Overview

The weather system demonstrates two component patterns within a single orchestration workflow:
- **Agent**: `weather-agent` fetches temperature from Open-Meteo using inlined `developer_instructions`
- **Skill** (independent): `weather-svg-creator` is invoked by the agent to create the visual output

This showcases the **Agent → Skill** architecture pattern, where:
- An agent fetches data and orchestrates the workflow
- A skill creates the visual output independently

## ![How to Use](../!/tags/how-to-use.svg)

```bash
codex
> Fetch the current weather for Dubai in Celsius and create the SVG weather card output using the repo.
```

Specify "in Fahrenheit" in your prompt to switch units. The agent defaults to Celsius if no preference is given.

Output files:
- `orchestration-workflow/weather.svg` — SVG weather card
- `orchestration-workflow/output.md` — Markdown summary

> **Note:** This workflow focuses on Codex's documented **Agent → Skill** pattern. Repo-local skills are invoked with `/skills`, `$skill-name`, or implicit description matching; reusable command-style packaging belongs in plugins rather than `.codex/commands/`. The user specifies preferences such as Celsius/Fahrenheit in the prompt.

## Component Summary

| Component | Role | Example |
|-----------|------|---------|
| **Agent** | Entry point, data fetching, skill invocation | [`weather-agent`](../.codex/agents/weather-agent.toml) |
| **Skill** | Creates output independently | [`weather-svg-creator`](../.agents/skills/weather-svg-creator/SKILL.md) |

## Flow Diagram

<p align="center">
  <img src="../!/orchestration-workflow-diagram.svg" alt="Orchestration Workflow: Agent → Skill → Output" width="100%">
</p>

```
╔══════════════════════════════════════════════════════════════════╗
║              ORCHESTRATION WORKFLOW                              ║
║                    Agent  →  Skill                               ║
╚══════════════════════════════════════════════════════════════════╝

                         ┌───────────────────┐
                         │  User Prompt      │
                         │  (specifies C°/F°)│
                         └─────────┬─────────┘
                                   │
                         Step 1 — Agent
                                   │
                                   ▼
         ┌─────────────────────────────────────────────────────┐
         │  weather-agent — Agent ● developer_instructions     │
         └─────────────────────────┬───────────────────────────┘
                                   │
                          Returns: temp + unit
                                   │
                         Step 2 — Skill
                                   │
                                   ▼
         ┌─────────────────────────────────────────────────────┐
         │  weather-svg-creator — Skill ● SVG card + output    │
         └─────────────────────────┬───────────────────────────┘
                                   │
                          ┌────────┴────────┐
                          │                 │
                          ▼                 ▼
                   ┌────────────┐    ┌────────────┐
                   │weather.svg │    │ output.md  │
                   └────────────┘    └────────────┘
```

## Component Details

### 1. Agent

#### `weather-agent` (Agent)
- **Location**: `.codex/agents/weather-agent.toml`
- **Purpose**: Entry point — fetches temperature, invokes skill
- **Model**: gpt-5.4-mini
- **Registration**: `[agents.weather-agent]` in `.codex/config.toml`

The agent's `developer_instructions` contain the full workflow: fetch from Open-Meteo API using curl (using the caller-provided unit preference, defaulting to Celsius), then invoke `$weather-svg-creator` with the data.

### 2. Skill

#### `weather-svg-creator` (Skill)
- **Location**: `.agents/skills/weather-svg-creator/SKILL.md`
- **Purpose**: Create a visual SVG weather card and write output files
- **Invocation**: Via skill invocation from the agent
- **Outputs**:
  - `orchestration-workflow/weather.svg` — SVG weather card
  - `orchestration-workflow/output.md` — Weather summary

## Execution Flow

1. **User Prompt**: User prompts Codex, specifying city and unit preference (e.g., "Dubai in Celsius")
2. **Agent Start**: Codex auto-selects `weather-agent` based on the task
3. **Data Fetching**: Agent fetches temperature from Open-Meteo API for Dubai using curl
4. **Skill Invocation**: Agent invokes the `$weather-svg-creator` skill
   - Skill creates SVG weather card at `orchestration-workflow/weather.svg`
   - Skill writes summary to `orchestration-workflow/output.md`
5. **Result Display**: Summary shown to user with temperature, SVG location, and output file

## Example Execution

```
Input: Fetch the current weather for Dubai in Celsius and create the SVG weather card
├─ Step 1: Agent fetches from Open-Meteo API
│  └─ Returns: temperature=29, unit=Celsius, city=Dubai
├─ Step 2: Agent invokes skill → $weather-svg-creator
│  ├─ Creates: orchestration-workflow/weather.svg
│  └─ Writes: orchestration-workflow/output.md
└─ Output:
   ├─ Unit: Celsius
   ├─ Temperature: 29°C
   ├─ SVG: orchestration-workflow/weather.svg
   └─ Summary: orchestration-workflow/output.md
```

## Key Design Principles

1. **Agent as Entry Point**: The agent handles data fetching and skill invocation — no separate orchestrator needed
2. **Skill for Rendering**: The SVG creator runs independently, receiving data from the agent's context
3. **Inlined Instructions**: The agent's `developer_instructions` contain the fetching logic directly, since Codex CLI subagents do not support preloaded skills
4. **Clean Separation**: Fetch (agent) → Render (skill) — each component has a single responsibility
5. **Idempotent Output**: Running the workflow again overwrites the previous output cleanly

## Architecture Patterns

### Agent (Developer Instructions)

```toml
# In agent definition (.codex/agents/weather-agent.toml)
name = "weather-agent"
description = "Fetches temperature from Open-Meteo, invokes skill."
developer_instructions = """
Step 1: Fetch from Open-Meteo API (use caller's unit preference, default Celsius)
Step 2: Invoke $weather-svg-creator skill
"""
```

- **Self-contained**: The agent has everything it needs — data fetching and skill invocation
- **No preloaded skills**: Codex CLI subagents do not support the `skills:` preloading pattern
- **Prompt-driven skill invocation**: The agent tells Codex to invoke `$weather-svg-creator` via natural language instructions

### Skill (Direct Invocation)

```yaml
# In skill definition (.agents/skills/weather-svg-creator/SKILL.md)
---
name: weather-svg-creator
description: Creates an SVG weather card...
---
```

- **Invoked by agent**: Agent instructions tell Codex to invoke `$weather-svg-creator`
- **Independent execution**: Runs in the conversation context with the temperature data available
- **Receives data from context**: Uses temperature data already available in the conversation

## Comparison with Claude Code

| Aspect | Claude Code | Codex CLI |
|---|---|---|
| **Entry point** | Custom Command (`.claude/commands/`) | Agent (`.codex/agents/`) |
| **User interaction** | Command asks via `AskUserQuestion` tool | User specifies in prompt (no mid-turn asking) |
| **Data fetching** | Agent with preloaded skill | Agent with inlined `developer_instructions` |
| **Skill invocation** | `Skill()` tool call (deterministic) | `$skill-name` mention or description match (prompt-driven) |
| **Agent knowledge** | Preloaded skills via `skills:` field | Inlined via `developer_instructions` |
| **Pattern name** | Command → Agent → Skill | Agent → Skill |
| **Orchestration style** | Imperative (explicit tool calls) | Declarative (instruction-based) |
