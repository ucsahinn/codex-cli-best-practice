# &#129504; Codex CLI Operator Handbook - vollständige deutsche README

[&#127468;&#127463; English](README.md) | [&#127465;&#127466; Deutsch](README.de.md) | [&#127466;&#127480; Español](README.es.md) | [&#127463;&#127479; Português (Brasil)](README.pt-BR.md) | [&#127481;&#127479; Türkçe](README.tr.md) | [&#127467;&#127479; Français](README.fr.md)

> Diese Datei ist eine vollständige deutsche Einstiegseite, kein kurzer Platzhalter. Sie fasst Zweck, Grenzen, Bedienung, Prüfung, Sicherheit und Veröffentlichung in einer Datei zusammen.
>
> Kanonische englische README: [README.md](README.md)

Public handbook for operating Codex CLI with safer config, agents, skills, MCP, hooks and release hygiene.

Beginnen Sie mit der kanonischen README, wenn Sie die aktuellste englische Beschreibung brauchen. Verwenden Sie diese Seite, wenn Sie den gleichen Vertrag auf Deutsch lesen wollen.

## Status und Vertrauensrahmen

|Bereich | Details|
|--- | ---|
|Status | Public repository: ucsahinn/codex-cli-best-practice|
|Wahrheit | [Kanonische englische README](README.md)|
|Benutzer | Codex CLI users building a safer local setup.; Teams writing durable AGENTS.md and config contracts.|
|Prüfung | Docs links resolve locally.; Examples are stored as examples, not active secrets.|
|Sicherheit | Documents Codex surfaces instead of hiding them in ad-hoc prompts.; Separates AGENTS.md, config.toml, skills, MCP, hooks, memory and marketplaces.|

## Was dieses Repository ist

- A practical Codex CLI operating guide.
- A repository of best-practice notes for AGENTS.md, MCP, config, hooks, memory, skills, subagents and marketplaces.
- A public reference for Windows-friendly Codex setup decisions.
- A validation-backed docs repo that avoids unsupported commands and stale links.

## Was es nicht ist

- Not the official Codex manual.
- Not a replacement for official OpenAI documentation.
- Not a place for account tokens or private MCP credentials.
- Not a guarantee that every future Codex flag keeps the same behavior.

## Für wen es gedacht ist

- Codex CLI users building a safer local setup.
- Teams writing durable AGENTS.md and config contracts.
- Maintainers reviewing skill or plugin distribution decisions.
- Users who want examples before changing global Codex settings.

## Schnellstart

1. Repository klonen oder aktualisieren.
2. README, Sicherheitsdateien und Dokumentationskarte lesen.
3. Die passenden Prüfungen ausführen.
4. Nur explizit geänderte Dateien stagen.
5. Vor Push oder Release Remote-Status, Secrets und Links erneut prüfen.

## Entscheidungshilfe

- Need durable repo instructions -> AGENTS.md.
- Need local model, sandbox or MCP settings -> config.toml.
- Need reusable workflow -> skill.
- Need external live context -> MCP connector.
- Need reviewed lifecycle automation -> hooks.

## Repository-Karte

|Pfad | Warum es wichtig ist|
|--- | ---|
|[best-practice/](best-practice/) | topic-by-topic Codex guidance|
|[docs/](docs/) | FAQ, Windows notes, public readiness and release checklists|
|[examples/profiles/](examples/profiles/) | sample config profiles|
|[examples/ci-cd/](examples/ci-cd/) | CI examples|
|[scripts/validate-docs.mjs](scripts/validate-docs.mjs) | docs and link validator|
|[AGENTS.md](AGENTS.md) | repo working agreement|

## Arbeitsablauf

1. Read the surface map before changing setup.
2. Prefer official docs and local config evidence for version-sensitive claims.
3. Keep examples copy-pasteable but conservative.
4. Validate docs and links after every public wording change.
5. Run secret scans before push.

## Befehle und Prüfung

Führen Sie diese Befehle nur aus, wenn Sie das Repository lokal geclont haben und die Wirkung verstehen.

```powershell
npm run validate
node scripts/validate-docs.mjs
git diff --check
gitleaks dir . --no-banner --redact
```

## Validierungs-Checkliste

- Docs links resolve locally.
- Examples are stored as examples, not active secrets.
- Security notes do not overpromise sandboxing.
- Release notes and changelog remain aligned with visible changes.
- Remote HEAD is verified after push.

## Sicherheitsgrenze

- Documents Codex surfaces instead of hiding them in ad-hoc prompts.
- Separates AGENTS.md, config.toml, skills, MCP, hooks, memory and marketplaces.
- Includes examples and a docs validator.
- Keeps upstream attribution and public fork boundaries visible.

Public-safe rule: do not add secrets, tokens, cookies, private keys, private prompts, customer data, local-only auth files, generated logs, archives or build outputs unless the canonical README explicitly says they belong in the public repo.

## Release- und Publikationshygiene

- Docs-only changes still need diff review and validation.
- Do not publish config containing real tokens.
- Keep release notes in docs/ when versioned documentation changes.
- Verify GitHub Actions after push when workflows exist.

## Wartung

- Keep this localized README aligned with README.md when the repo contract changes.
- Prefer factual repo links over marketing claims.
- Do not invent install commands, metrics, users, releases or support promises.
- If a command is version-sensitive, re-check it before documenting it.
- When a localized file cannot be updated fully, leave a clear note instead of a partial translation.

## Beitragspfad

- Open a focused change against the smallest set of files.
- Read AGENTS.md or CONTRIBUTING.md when present before editing.
- Run the repo validation commands listed above.
- Review staged diffs explicitly before commit.
- Use security disclosure paths instead of public issues for sensitive reports.

## Definition von fertig

Fertig bedeutet: Inhalt ist lokal vollständig, Links funktionieren, Sicherheitsgrenzen sind klar, Validierung ist gelaufen, Git ist sauber und der Remote-Stand ist nach dem Push geprüft.

|Empfehlung | Warum es wichtig ist|
|--- | ---|
|Content | Public handbook for operating Codex CLI with safer config, agents, skills, MCP, hooks and release hygiene.|
|Links | All referenced local files must exist and resolve from the repository root.|
|Security | Examples are stored as examples, not active secrets.|
|Verification | Prüfen Sie Struktur, Links, Markdown, Secrets, relevante Skripte und Remote-HEAD, bevor Sie eine öffentliche Aussage machen.|
|Remote | After push, compare local HEAD with origin/main and GitHub remote HEAD.|

## Wichtige Links

|Pfad | Warum es wichtig ist|
|--- | ---|
|[Canonical README](README.md) | README.md|
|[Codex skills guide](best-practice/codex-skills.md) | best-practice/codex-skills.md|
|[Codex MCP guide](best-practice/codex-mcp.md) | best-practice/codex-mcp.md|
|[Windows notes](docs/WINDOWS.md) | docs/WINDOWS.md|
|[Release checklist](docs/RELEASE_CHECKLIST.md) | docs/RELEASE_CHECKLIST.md|
|[Security notes](docs/AGENT_SECURITY.md) | docs/AGENT_SECURITY.md|
