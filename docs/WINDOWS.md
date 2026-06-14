# Windows Notes

This repo is designed to be practical on Windows and PowerShell.

## Quick Checks

```powershell
node -v
npm run validate
python --version
git status --short
```

## Codex Startup

From this repository, start Codex normally so the project guidance and shared config can be discovered:

```powershell
codex
```

Named `--profile` arguments are user-level profile files in Codex. If you want named local presets, copy a file from `examples/profiles/` into your Codex home using the naming convention your installed Codex version expects.

## Hooks

Codex hooks in this repo use `commandWindows` so Windows can call Python directly:

```powershell
python .codex/hooks/scripts/hooks.py --hook SessionStart
```

If hooks do not run:

- Confirm Python is available with `python --version`.
- Confirm hooks are enabled with `features.hooks = true`.
- Keep personal overrides in `.codex/hooks/config/hooks-config.local.json`.
- Do not commit generated files under `.codex/hooks/logs/`.

## Common Pitfalls

- PowerShell may display UTF-8 emoji incorrectly in older console settings even when files are valid UTF-8.
- WSL2 and native Windows have different path and sandbox behavior; test the surface you plan to document.
- Prefer repo scripts (`npm run validate`) over long one-off shell chains.
