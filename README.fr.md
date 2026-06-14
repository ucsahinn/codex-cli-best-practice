# &#129504; Codex CLI Operator Handbook - README français complet

[&#127468;&#127463; English](README.md) | [&#127465;&#127466; Deutsch](README.de.md) | [&#127466;&#127480; Español](README.es.md) | [&#127463;&#127479; Português (Brasil)](README.pt-BR.md) | [&#127481;&#127479; Türkçe](README.tr.md) | [&#127467;&#127479; Français](README.fr.md)

> Ce fichier est une page d’entrée française complète, pas un court résumé. Il couvre objectif, limites, usage, validation, sécurité et publication.
>
> README canonique en anglais: [README.md](README.md)

Public handbook for operating Codex CLI with safer config, agents, skills, MCP, hooks and release hygiene.

Commencez par le README canonique si vous voulez la description anglaise la plus actuelle. Utilisez cette page pour lire le même contrat opérationnel en français.

## Statut et signaux de confiance

|Zone | Détail|
|--- | ---|
|Statut | Public repository: ucsahinn/codex-cli-best-practice|
|Source de vérité | [README canonique en anglais](README.md)|
|Utilisateurs | Codex CLI users building a safer local setup.; Teams writing durable AGENTS.md and config contracts.|
|Validation | Docs links resolve locally.; Examples are stored as examples, not active secrets.|
|Sécurité | Documents Codex surfaces instead of hiding them in ad-hoc prompts.; Separates AGENTS.md, config.toml, skills, MCP, hooks, memory and marketplaces.|

## Ce que contient ce dépôt

- A practical Codex CLI operating guide.
- A repository of best-practice notes for AGENTS.md, MCP, config, hooks, memory, skills, subagents and marketplaces.
- A public reference for Windows-friendly Codex setup decisions.
- A validation-backed docs repo that avoids unsupported commands and stale links.

## Ce que ce dépôt n’est pas

- Not the official Codex manual.
- Not a replacement for official OpenAI documentation.
- Not a place for account tokens or private MCP credentials.
- Not a guarantee that every future Codex flag keeps the same behavior.

## Public visé

- Codex CLI users building a safer local setup.
- Teams writing durable AGENTS.md and config contracts.
- Maintainers reviewing skill or plugin distribution decisions.
- Users who want examples before changing global Codex settings.

## Démarrage rapide

1. Clonez ou mettez à jour le dépôt.
2. Lisez README, sécurité et carte documentaire.
3. Lancez les validations adaptées.
4. Stagez uniquement les fichiers explicitement modifiés.
5. Avant push ou release, revérifiez remote, secrets et liens.

## Guide de décision

- Need durable repo instructions -> AGENTS.md.
- Need local model, sandbox or MCP settings -> config.toml.
- Need reusable workflow -> skill.
- Need external live context -> MCP connector.
- Need reviewed lifecycle automation -> hooks.

## Carte du dépôt

|Chemin | Pourquoi c’est important|
|--- | ---|
|[best-practice/](best-practice/) | topic-by-topic Codex guidance|
|[docs/](docs/) | FAQ, Windows notes, public readiness and release checklists|
|[examples/profiles/](examples/profiles/) | sample config profiles|
|[examples/ci-cd/](examples/ci-cd/) | CI examples|
|[scripts/validate-docs.mjs](scripts/validate-docs.mjs) | docs and link validator|
|[AGENTS.md](AGENTS.md) | repo working agreement|

## Flux de travail

1. Read the surface map before changing setup.
2. Prefer official docs and local config evidence for version-sensitive claims.
3. Keep examples copy-pasteable but conservative.
4. Validate docs and links after every public wording change.
5. Run secret scans before push.

## Commandes et validation

Exécutez ces commandes seulement après avoir cloné le dépôt et compris ce qu’elles vérifient ou modifient.

```powershell
npm run validate
node scripts/validate-docs.mjs
git diff --check
gitleaks dir . --no-banner --redact
```

## Liste de vérification

- Docs links resolve locally.
- Examples are stored as examples, not active secrets.
- Security notes do not overpromise sandboxing.
- Release notes and changelog remain aligned with visible changes.
- Remote HEAD is verified after push.

## Limite de sécurité

- Documents Codex surfaces instead of hiding them in ad-hoc prompts.
- Separates AGENTS.md, config.toml, skills, MCP, hooks, memory and marketplaces.
- Includes examples and a docs validator.
- Keeps upstream attribution and public fork boundaries visible.

Public-safe rule: do not add secrets, tokens, cookies, private keys, private prompts, customer data, local-only auth files, generated logs, archives or build outputs unless the canonical README explicitly says they belong in the public repo.

## Hygiène de release et publication

- Docs-only changes still need diff review and validation.
- Do not publish config containing real tokens.
- Keep release notes in docs/ when versioned documentation changes.
- Verify GitHub Actions after push when workflows exist.

## Maintenance

- Keep this localized README aligned with README.md when the repo contract changes.
- Prefer factual repo links over marketing claims.
- Do not invent install commands, metrics, users, releases or support promises.
- If a command is version-sensitive, re-check it before documenting it.
- When a localized file cannot be updated fully, leave a clear note instead of a partial translation.

## Chemin de contribution

- Open a focused change against the smallest set of files.
- Read AGENTS.md or CONTRIBUTING.md when present before editing.
- Run the repo validation commands listed above.
- Review staged diffs explicitly before commit.
- Use security disclosure paths instead of public issues for sensitive reports.

## Définition de terminé

Terminé signifie: contenu complet, liens corrects, limites de sécurité claires, validation exécutée, Git propre et remote HEAD vérifié après le push.

|Recommandation | Pourquoi c’est important|
|--- | ---|
|Content | Public handbook for operating Codex CLI with safer config, agents, skills, MCP, hooks and release hygiene.|
|Links | All referenced local files must exist and resolve from the repository root.|
|Security | Examples are stored as examples, not active secrets.|
|Verification | Validez structure, liens, Markdown, secrets, scripts pertinents et remote HEAD avant toute annonce publique.|
|Remote | After push, compare local HEAD with origin/main and GitHub remote HEAD.|

## Liens importants

|Chemin | Pourquoi c’est important|
|--- | ---|
|[Canonical README](README.md) | README.md|
|[Codex skills guide](best-practice/codex-skills.md) | best-practice/codex-skills.md|
|[Codex MCP guide](best-practice/codex-mcp.md) | best-practice/codex-mcp.md|
|[Windows notes](docs/WINDOWS.md) | docs/WINDOWS.md|
|[Release checklist](docs/RELEASE_CHECKLIST.md) | docs/RELEASE_CHECKLIST.md|
|[Security notes](docs/AGENT_SECURITY.md) | docs/AGENT_SECURITY.md|
