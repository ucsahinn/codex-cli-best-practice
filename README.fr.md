# Codex CLI Operator Handbook - Français

<p align="center">
  <a href="README.md"><img src="https://flagcdn.com/w20/gb.png" alt="English" width="20"></a> ·
  <a href="README.de.md"><img src="https://flagcdn.com/w20/de.png" alt="Deutsch" width="20"></a> ·
  <a href="README.es.md"><img src="https://flagcdn.com/w20/es.png" alt="Español" width="20"></a> ·
  <a href="README.pt-BR.md"><img src="https://flagcdn.com/w20/br.png" alt="Português (Brasil)" width="20"></a> ·
  <a href="README.tr.md"><img src="https://flagcdn.com/w20/tr.png" alt="Türkçe" width="20"></a> ·
  <a href="README.fr.md"><img src="https://flagcdn.com/w20/fr.png" alt="Français" width="20"></a>
</p>

> Vue d'ensemble française du handbook public pour Codex CLI. La [README.md](README.md) anglaise reste la source canonique; cette page présente le même contrat opérationnel en français.

## Ce que contient ce dépôt

Ce dépôt est un handbook public pour Codex CLI. Il explique comment séparer prompts, `AGENTS.md`, `.codex/config.toml`, skills, subagents, MCP, hooks, notes Windows, validation et hygiène de release.

Ce n'est pas un starter installable ni une application.

## Relation avec Enterprise Starter

| Dépôt | Rôle |
|---|---|
| `codex-enterprise-starter` | Starter kit installable pour créer un environnement Codex réutilisable |
| `codex-cli-best-practice` | Handbook companion pour exploiter, étendre, valider et publier des workflows Codex en sécurité |

Le starter sert à mettre en place l'environnement. Ce dépôt explique comment l'utiliser et le maintenir correctement.

## Démarrage rapide

```bash
npm run validate
codex
```

## Quelle surface utiliser?

| Surface | Usage |
|---|---|
| Prompt | Contrainte ou tâche ponctuelle |
| `AGENTS.md` | Règles durables du projet et commandes de validation |
| `.codex/config.toml` | Defaults projet, sandbox, approvals, MCP, hooks et agents |
| Skill | Workflow réutilisable |
| Subagent | Rôle spécialiste explicite |
| MCP | Documentation externe actuelle ou outils privés |
| Hook | Automatisation de cycle de vie revue |

## Limites de sécurité

- Ne pas publier de tokens, cookies, clés privées, fichiers d'auth locaux ou logs.
- Les hooks sont des guardrails, pas une frontière de sécurité complète.
- Sandbox et approvals sont des contrôles séparés.
- Publier seulement après validation, revue du diff et secret scan.

## Validation

```bash
npm run validate
node --check scripts/validate-docs.mjs
git diff --check
gitleaks detect --redact --no-banner --verbose
```

## Fichiers importants

| Fichier | Usage |
|---|---|
| [README.md](README.md) | Page canonique anglaise |
| [README.tr.md](README.tr.md) | Guide turc complet |
| [AGENTS.md](AGENTS.md) | Contrat de travail pour Codex |
| [best-practice/](best-practice/) | Guides thématiques |
| [docs/WINDOWS.md](docs/WINDOWS.md) | Notes Windows |
| [docs/RELEASE_CHECKLIST.md](docs/RELEASE_CHECKLIST.md) | Gate de release |
| [docs/AGENT_SECURITY.md](docs/AGENT_SECURITY.md) | Sécurité des workflows agentiques |
