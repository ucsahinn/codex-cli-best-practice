# Best Practice: Plugin Marketplace

Plugins package Codex capabilities such as skills, MCP config, hooks, commands, and assets. A marketplace is a catalog that lets teams distribute those plugins intentionally.

<table width="100%">
<tr>
<td><a href="../">Back to Codex CLI Operator Handbook</a></td>
<td align="right"><img src="../!/codex-jumping.svg" alt="Codex" width="60" /></td>
</tr>
</table>

## Commands

Marketplace commands live under `codex plugin marketplace`:

```bash
codex plugin marketplace add <SOURCE> [--ref <REF>] [--sparse <PATH>]...
codex plugin marketplace list
codex plugin marketplace upgrade [MARKETPLACE_NAME]
codex plugin marketplace remove <MARKETPLACE_NAME>
```

Use `/plugins` in the TUI to browse and install marketplace plugins interactively.

## Manifest

Codex looks for marketplace metadata in a `marketplace.json` file. A minimal example:

```json
{
  "name": "team-marketplace",
  "plugins": [
    {
      "name": "release-notes",
      "source": "./plugins/release-notes"
    }
  ]
}
```

## Plugin Safety

- Review plugin manifests before installing.
- Prefer pinned refs or reviewed internal repos for team marketplaces.
- Treat plugin hooks and MCP declarations as executable trust boundaries.
- Do not publish plugins containing credentials, local paths, or private assets.

## Anti-Patterns

| Anti-pattern | Fix |
|---|---|
| Treating marketplace content as harmless docs | Review it like code because plugins can ship tools and hooks |
| Installing from moving branches without review | Pin or review the source before team use |
| Mixing personal and team plugins | Keep personal plugins in user scope and team plugins in a reviewed marketplace |
