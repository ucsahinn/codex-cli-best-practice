# Windows Notes

This repo is designed to be practical on Windows and PowerShell.

## Quick Checks

```powershell
node -v
npm run validate
python --version
git status --short
```

## Codex Profiles

Use the normal development profile for local editing:

```powershell
codex --profile development
```

Use `read-only` style profiles for review, research, and CI-like checks.

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
