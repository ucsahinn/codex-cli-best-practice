# Best Practice: Hooks

Hooks let Codex run reviewed commands at lifecycle points such as session start, prompt submission, tool use, and turn stop. Use them for deterministic guardrails, logging, context injection, and lightweight checks.

<table width="100%">
<tr>
<td><a href="../">Back to Codex CLI Operator Handbook</a></td>
<td align="right"><img src="../!/codex-jumping.svg" alt="Codex" width="60" /></td>
</tr>
</table>

## Status

Hooks are an active Codex feature. Keep the exact event list and output schema refreshed from official docs before release.

## Feature Flag

Use the current feature key:

```toml
[features]
hooks = true
```

## Discovery Locations

| Location | Scope |
|---|---|
| `.codex/hooks.json` | Project-shared hooks |
| `~/.codex/hooks.json` | Personal hooks |

Project hooks and user hooks can both run. Keep shared hooks small, reviewed, and deterministic.

## Supported Events

| Event | Use |
|---|---|
| `SessionStart` | Add startup context or run a light initialization check |
| `UserPromptSubmit` | Validate or enrich a submitted prompt |
| `PreToolUse` | Inspect a pending tool call before execution |
| `PostToolUse` | Inspect a completed tool call result |
| `Stop` | Add final checks or request continuation |

## Windows Commands

Use `commandWindows` when the POSIX command is not portable:

```json
{
  "type": "command",
  "command": "python3 .codex/hooks/scripts/hooks.py --hook SessionStart",
  "commandWindows": "python .codex/hooks/scripts/hooks.py --hook SessionStart",
  "timeout": 10
}
```

## Safety Rules

- Treat hooks as guardrails, not a complete security boundary.
- Keep hook timeouts short.
- Parse JSON from stdin defensively.
- Keep local overrides in `.codex/hooks/config/*.local.json`.
- Ignore generated hook logs.
- Do not put tokens or auth material in hook config.

## Anti-Patterns

| Anti-pattern | Fix |
|---|---|
| Relying on hooks as the only protection | Combine sandbox, approvals, review, and secret scanning |
| Committing local hook overrides | Use ignored `*.local.json` files |
| Writing long-running hook commands | Keep hooks fast and bounded |
| Logging full sensitive payloads | Redact or disable logging |
| Using only POSIX commands | Add `commandWindows` when sharing with Windows users |
