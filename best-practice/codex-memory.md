# Best Practice: Memories

Memories are a user-scoped context system. They can help Codex remember useful patterns across sessions, but they should not replace project docs or committed instructions.

<table width="100%">
<tr>
<td><a href="../">Back to Codex CLI Operator Handbook</a></td>
<td align="right"><img src="../!/codex-jumping.svg" alt="Codex" width="60" /></td>
</tr>
</table>

## Feature Flag

```toml
[features]
memories = true

[memories]
use_memories = true
generate_memories = true
disable_on_external_context = false
```

Prefer current official keys for the installed Codex version and refresh this page before release.

## Scope

| Scope | Where it belongs |
|---|---|
| Durable project rules | `AGENTS.md` |
| Reusable workflow instructions | `.agents/skills/<name>/SKILL.md` |
| User-specific cross-session context | `$CODEX_HOME/memories/` |
| Temporary memory extension notes | User memory extension directories |

## Good Habits

- Use memories as background context, not as source of truth.
- Disable or reset memories when handling sensitive or unrelated domains.
- Keep secrets out of memory-generating sessions.
- Use `AGENTS.md` for facts every contributor must see.

## Anti-Patterns

| Anti-pattern | Fix |
|---|---|
| Expecting memories to scope to a repo | Use committed repo docs for project facts |
| Storing secrets in remembered context | Rotate exposed credentials and reset memories |
| Relying on memories for release gates | Put gates in `docs/RELEASE_CHECKLIST.md` |
