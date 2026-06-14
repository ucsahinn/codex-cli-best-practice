# Codex CLI Operator Handbook

<p align="center">
  <a href="README.de.md">&#127465;&#127466; Deutsch</a> ? <a href="README.es.md">&#127466;&#127480; Espa&ntilde;ol</a> ? <a href="README.md">&#127468;&#127463; English</a> ? <a href="README.pt-BR.md">&#127463;&#127479; Portugu&ecirc;s (Brasil)</a> ? <a href="README.tr.md">&#127481;&#127479; T&uuml;rk&ccedil;e</a> ? <a href="README.fr.md">&#127467;&#127479; French</a>
</p>

Handbook fork-first pour operer Codex CLI: choix des surfaces, defaults surs, skills, MCP, hooks, subagents, corrections Windows et checks de release.

## Pourquoi ce depot existe

Handbook fork-first pour operer Codex CLI: choix des surfaces, defaults surs, skills, MCP, hooks, subagents, corrections Windows et checks de release.

Cette page localisee est maintenue pour que le lecteur comprenne le depot sans dependre d un simple badge de langue. La reference canonique complete reste dans README.md; cette page donne assez de contexte pour choisir le bon point d entree, la limite de securite et la verification correcte.

## Pour qui

Operateurs Codex, mainteneurs et equipes qui veulent des workflows repetables plutot que des prompts isoles.

## Demarrage rapide

| Si vous avez besoin de... | Ouvrez |
| --- | --- |
| Canonical README | [README.md](README.md) |
| Turkish full guide | [README.tr.md](README.tr.md) |
| Codex skills | [best-practice/codex-skills.md](best-practice/codex-skills.md) |
| Codex MCP | [best-practice/codex-mcp.md](best-practice/codex-mcp.md) |
| Windows notes | [docs/WINDOWS.md](docs/WINDOWS.md) |
| Release checklist | [docs/RELEASE_CHECKLIST.md](docs/RELEASE_CHECKLIST.md) |

## Carte du depot

- AGENTS.md - durable repo guidance
- best-practice/ - Codex surface guides
- docs/ - release, security and Windows notes
- examples/ - profile and CI examples
- orchestration-workflow/ - runnable example workflow
- scripts/validate-docs.mjs - documentation validator

## Validation et hygiene de release

Avant commit ou publication, verifiez les liens, le Markdown, la validation existante du depot et Gitleaks.

Parcours release/readiness recommande:

1. Relire le README pertinent et les documents lies.
2. Executer la validation du depot lorsqu une commande existe.
3. Verifier les liens Markdown et les assets locaux.
4. Executer Gitleaks ou le secret scan configure.
5. Verifier origin/main apres le push avant d annoncer que la publication est terminee.

## Limite securite et perimetre public

Ne pas stocker de secrets dans config, hooks, regles ou docs. Les connecteurs authentifies restent desactives jusqu a une tache precise.

## Contribution et maintenance

Gardez les pages localisees alignees avec le README canonique lorsque le perimetre, les etapes d installation, les regles de release ou les limites de securite changent. N ajoutez pas d affirmations sans preuve dans le depot, les docs live du produit ou les elements publics de release.

## Standard de completude

Ce README localise n est pas une note courte. Il explique le but, l entree rapide, les surfaces du depot, la validation, la limite de securite et les references canoniques.

Reference canonique: [README.md](README.md).
