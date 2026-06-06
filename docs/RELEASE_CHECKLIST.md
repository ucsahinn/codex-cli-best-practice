# Release Checklist

Use this checklist before publishing a tag or GitHub Release for this fork.

## 1. Worktree Reality Check

- Confirm this directory is a real git checkout.
- If `.git` is missing, clone the fork repository first or initialize a remote intentionally.
- Confirm `git remote -v` points to the fork you want to publish.
- Confirm the active branch is the release branch.

```bash
git status --short
git remote -v
git branch --show-current
```

## 2. Local Validation

Run the dependency-free docs validator:

```bash
npm run validate
```

The validator checks:

- Required handbook files exist.
- The welcome page exposes both English and Turkish paths.
- Local markdown links resolve.
- Upstream fork identity markers are not present in the README.

## 3. Manual Documentation Review

Review these files before tagging:

- `README.md`
- `README.tr.md`
- `AGENTS.md`
- `CLAUDE.md`
- `CHANGELOG.md`
- `docs/RESEARCH_NOTES.md`
- `docs/RELEASE_CHECKLIST.md`
- `.codex/config.toml`
- `.codex/agents/weather-agent.toml`
- `.agents/skills/weather-svg-creator/SKILL.md`

Questions to answer:

- Does the first viewport look like this fork, not the upstream repo?
- Does the Turkish guide match the English guide in intent?
- Are dynamic Codex claims backed by current docs?
- Does the release note describe the actual diff?
- Are there any personal sponsor links, stale badges, or upstream-only calls to action?

## 4. Diff Review

Review only the intended release files:

```bash
git diff -- README.md README.tr.md AGENTS.md CLAUDE.md CHANGELOG.md docs .codex .agents .github scripts package.json orchestration-workflow
```

Avoid committing:

- Local auth or token files.
- Generated logs.
- Temporary screenshots.
- Build output.
- Installer or archive artifacts unless the release explicitly needs them.

## 5. Commit Policy

This repository keeps the upstream "one file, one commit" convention for traceable documentation history.

Example:

```bash
git add README.md
git commit -m "Rewrite fork welcome page"

git add README.tr.md
git commit -m "Add Turkish operator guide"
```

Use a broader commit only when a generated file and its source must stay atomic.

## 6. Tag

Use semantic tags for public releases:

```bash
git tag v0.1.0
git push origin main
git push origin v0.1.0
```

If the default branch is not `main`, replace it with the real branch name.

## 7. GitHub Release

Create the release from the pushed tag. Suggested title:

```text
v0.1.0 - Codex CLI Operator Handbook Fork Edition
```

Suggested release body:

```markdown
## Highlights

- Rebuilt the welcome page as an independent EN/TR Codex CLI operator handbook.
- Added a full Turkish onboarding guide.
- Added release checklist, research notes, docs validator, and CI guard.
- Updated the demo workflow around Istanbul weather output.

## Validation

- npm run validate

## Notes

This release preserves the MIT license lineage while replacing the fork-facing documentation layer.
```

## 8. Post-Release Checks

After publishing:

- Open the GitHub repository landing page in a browser.
- Confirm badge/image rendering.
- Confirm `README.tr.md` link works.
- Confirm the GitHub Release points to the expected tag.
- Confirm Actions ran the docs guard successfully.
- Confirm no upstream sponsor button is shown unless intentionally configured.

## Current Blocker In This Workspace

At the time this checklist was added, `C:\Users\ulasc\Desktop\codex-cli-best-practice-main` did not contain `.git`. Local edits can be completed here, but push and release require a real git checkout or an intentionally configured remote.
