# Best Practice: Config

A comprehensive guide to Codex CLI's TOML-based configuration system — covering config hierarchy, profile files, sandbox modes, approval policies, hooks, MCP, and project-scoped config boundaries.

<table width="100%">
<tr>
<td><a href="../">← Back to Codex CLI Best Practice</a></td>
<td align="right"><img src="../!/codex-jumping.svg" alt="Codex" width="60" /></td>
</tr>
</table>

## Settings Hierarchy

Settings apply in order of precedence (highest to lowest):

| Priority | Location | Scope | Purpose |
|----------|----------|-------|---------|
| 1 | CLI flags / `--config key=value` | Invocation | One-off overrides for a single run |
| 2 | `.codex/config.toml` | Project | Trusted repo defaults, hooks, MCP, agents |
| 3 | `$CODEX_HOME/<profile>.config.toml` | Profile | Named personal safety/model layers selected with `--profile` |
| 4 | `~/.codex/config.toml` | User | Personal defaults across projects |
| 5 | `/etc/codex/config.toml` | System | Organization or machine defaults |
| 6 | Built-in defaults | Runtime | Codex fallback behavior |

## Core Configuration

```toml
# .codex/config.toml
model = "gpt-5.4-mini"
sandbox_mode = "workspace-write"
approval_policy = "on-request"
```

## Profiles

Profiles are separate files next to `~/.codex/config.toml`. Do not put active
`[profiles.<name>]` tables in project `.codex/config.toml`; current Codex
ignores them in project config and no longer reads legacy profile tables from
user config.

Create one top-level TOML file per profile:

```toml
# ~/.codex/conservative.config.toml
model = "gpt-5.4-mini"
sandbox_mode = "read-only"
approval_policy = "untrusted"
```

```toml
# ~/.codex/development.config.toml
model = "gpt-5.4-mini"
sandbox_mode = "workspace-write"
approval_policy = "on-request"
```

```toml
# ~/.codex/trusted-project.config.toml
model = "gpt-5.5"
sandbox_mode = "danger-full-access"
approval_policy = "never"
```

Switch with:

```bash
codex --profile development
codex exec --profile conservative "review this diff"
```

Keep repo-local examples under `examples/profiles/`, but copy them to
`$CODEX_HOME/<profile>.config.toml` before using them with `--profile`.

## Project Config Boundaries

Project-scoped `.codex/config.toml` is for trusted repo defaults. Do not use it
for machine-local provider, auth, notification, profile-selection, or telemetry
settings. Put those in user-level config/profile files instead.

## Sandbox Modes

| Mode | File Access | Network | Best for |
|---|---|---|---|
| `read-only` | Read-only project access | Blocked | Reviews, audits, CI analysis |
| `workspace-write` | Read/write inside the workspace | Blocked | Local development and doc/code edits |
| `danger-full-access` | Unrestricted filesystem access | Allowed | Fully trusted automation that needs network or installs |

## Approval Policies

| Policy | Behavior | Best for |
|---|---|---|
| `untrusted` | Auto-runs only trusted read-style commands; asks for the rest | New repos, audits, reviews |
| `on-request` | Model decides when it should ask | Everyday development |
| `never` | Never asks; failures come straight back to the model | Non-interactive runs and tightly controlled automation |

## Hooks

Enable lifecycle hooks with the canonical feature key:

```toml
[features]
hooks = true
```

`codex_hooks` still works as a deprecated alias, but new examples should use
`hooks`.

## Memories (v0.119.0+)

Enable the cross-session memory pipeline:

```toml
[features]
hooks = true
memories = true

[memories]
use_memories      = true
generate_memories = true
```

Full reference: [`codex-memory.md`](codex-memory.md).

## Unix Socket Allowlists (macOS, v0.121.0+)

Under Seatbelt, Unix sockets are denied by default. Allowlist specific paths
per-permission-profile:

```toml
[permissions.development.network]
enabled = true

[permissions.development.network.unix_sockets]
"/tmp/example.sock"        = "allow"
"/var/run/myservice.sock"  = "allow"
```

Paths are matched as subpath prefixes, so any socket created under an allowed
directory is covered. Use `dangerously_allow_all_unix_sockets = true` only in
throwaway sandboxes.

## Secure Devcontainer (v0.121.0+)

Codex ships a hardened VS Code Dev Container profile for customer environments.
It is a standalone `.devcontainer/devcontainer.secure.json` + `Dockerfile.secure`
— not a `[profiles.*]` entry in `config.toml`:

```bash
devcontainer up --workspace-folder . \
  --config .devcontainer/devcontainer.secure.json
```

The image installs `bubblewrap` setuid, sets `CODEX_ENABLE_FIREWALL=1`, and
restricts egress via `OPENAI_ALLOWED_DOMAINS`. Use this when running Codex
against untrusted code.

## Override

Use `AGENTS.override.md` for personal instruction overrides — loaded before `AGENTS.md`, not committed to git.

## MCP Servers

Declare shared integrations in the same config file:

```toml
[mcp_servers.github]
command = "npx"
args = ["-y", "@modelcontextprotocol/server-github"]
env = { GITHUB_TOKEN = "$GITHUB_TOKEN" }
```

## Agents

Register agents under `[agents.<name>]` and optionally point them at dedicated role files:

```toml
[agents.backend-dev]
description = "Handles backend implementation tasks"
config_file = "agents/backend-dev.toml"
```

## One-Off Overrides

```bash
codex -c model=\"gpt-5.5\" -c approval_policy=\"never\" exec "summarize this diff"
```

## Anti-Patterns

- Using `danger-full-access` for ordinary editing tasks
- Treating `never` as a general-purpose local default
- Using `danger-full-access` and `never` together without a real containment boundary
- Hardcoding secrets instead of using `$ENV_VAR` expansion
- Keeping legacy `[profiles.<name>]` tables in `.codex/config.toml`
- Mixing unrelated concerns into one profile instead of creating focused profile files
