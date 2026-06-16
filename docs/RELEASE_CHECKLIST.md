# Release Checklist

Use this checklist before publishing a tag or GitHub Release for this fork.

## 1. Worktree Reality Check

```bash
git status --short --branch --untracked-files=all
git remote -v
git branch --show-current
git tag --list
```

Confirm:

- The active branch is the intended release branch.
- The remote points to the user-owned public fork.
- Untracked local files are either intentionally ignored or excluded from staging.
- The release tag does not already point to a different commit.

## 2. Local Validation

```bash
npm run validate
node --check scripts/validate-docs.mjs
git diff --check
gitleaks detect --redact --no-banner --verbose
```

The validator checks required files, README identity markers, local markdown links, JSON syntax, stale local paths, generated hook-log leaks, stale Codex keys, and common mojibake sequences.

## 3. Manual Documentation Review

Review:

- `README.md`
- `README.tr.md`
- `AGENTS.md`
- `CLAUDE.md`
- `CHANGELOG.md`
- `SECURITY.md`
- `CONTRIBUTING.md`
- `docs/RESEARCH_NOTES.md`
- `docs/PUBLIC_READINESS.md`
- `docs/AGENT_SECURITY.md`
- `docs/WINDOWS.md`
- `.codex/config.toml`
- `.github/workflows/docs-guard.yml`

Questions:

- Does the first viewport clearly belong to this fork?
- Are English and Turkish onboarding paths aligned?
- Are dynamic Codex claims backed by current official docs or clearly marked as repo policy?
- Are local machine paths, hook logs, personal config, or generated scratch files absent?
- Does the release note describe the actual diff?

## 4. Diff Review

```bash
git diff -- README.md README.tr.md AGENTS.md CLAUDE.md CHANGELOG.md SECURITY.md CONTRIBUTING.md docs best-practice .codex .claude .agents .github examples scripts package.json .gitignore
git diff --check
```

Avoid committing:

- Local auth or token files.
- Generated logs.
- Temporary screenshots.
- Build output.
- Installer or archive artifacts unless the release explicitly needs them.

## 5. Commit And Push

```bash
git add <explicit files>
git diff --cached
git commit -m "Prepare Codex handbook public release"
git push origin main
```

Use explicit staging. Do not stage ignored local configs or generated logs.

## 6. Tag

```bash
git tag vX.Y.Z
git push origin vX.Y.Z
```

If the default branch is not `main`, replace it with the real branch name.

## 7. GitHub Release

Create the release from the pushed tag using the matching versioned release notes, such as `docs/RELEASE_NOTES_vX.Y.Z.md`.

Suggested title:

```text
vX.Y.Z - Short Release Title
```

## 8. Post-Release Checks

- Open the GitHub repository landing page.
- Confirm README badges, emoji navigation, and local assets render.
- Confirm `README.tr.md`, docs, issue template, PR template, and release links work.
- Confirm Actions ran the docs guard and secret scan successfully.
- Confirm the release points to the expected tag and commit.
- Confirm GitHub metadata does not advertise upstream-only sponsor, podcast, or personal marketing links.

## Workspace Precondition

Push and release require a real git checkout with the intended fork remote
configured. If `.git` is missing, clone the fork first or configure the remote
intentionally before tagging or publishing.
