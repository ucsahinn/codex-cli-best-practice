# Codex CLI Operator Handbook

<p align="center">
  <a href="README.de.md">&#127465;&#127466; Deutsch</a> ? <a href="README.es.md">&#127466;&#127480; Espa&ntilde;ol</a> ? <a href="README.md">&#127468;&#127463; English</a> ? <a href="README.pt-BR.md">&#127463;&#127479; Portugu&ecirc;s (Brasil)</a> ? <a href="README.tr.md">&#127481;&#127479; T&uuml;rk&ccedil;e</a> ? <a href="README.fr.md">&#127467;&#127479; French</a>
</p>

Handbook fork-first para operar o Codex CLI: escolha de superficies, defaults seguros, skills, MCP, hooks, subagents, fixes Windows e checks de release.

## Por que este repositorio existe

Handbook fork-first para operar o Codex CLI: escolha de superficies, defaults seguros, skills, MCP, hooks, subagents, fixes Windows e checks de release.

Esta pagina localizada e mantida para que leitores entendam o repositorio sem depender apenas de uma etiqueta curta de idioma. A referencia canonica profunda continua em README.md; esta pagina traz contexto suficiente para escolher a entrada, o limite de seguranca e a verificacao correta.

## Para quem e

Operadores de Codex, maintainers e equipes que preferem workflows repetiveis em vez de prompts soltos.

## Comeco rapido

| Se voce precisa... | Abra |
| --- | --- |
| Canonical README | [README.md](README.md) |
| Turkish full guide | [README.tr.md](README.tr.md) |
| Codex skills | [best-practice/codex-skills.md](best-practice/codex-skills.md) |
| Codex MCP | [best-practice/codex-mcp.md](best-practice/codex-mcp.md) |
| Windows notes | [docs/WINDOWS.md](docs/WINDOWS.md) |
| Release checklist | [docs/RELEASE_CHECKLIST.md](docs/RELEASE_CHECKLIST.md) |

## Mapa do repositorio

- AGENTS.md - durable repo guidance
- best-practice/ - Codex surface guides
- docs/ - release, security and Windows notes
- examples/ - profile and CI examples
- orchestration-workflow/ - runnable example workflow
- scripts/validate-docs.mjs - documentation validator

## Validacao e higiene de release

Antes de commit ou publicacao, revise links, Markdown, validacao existente do repo e Gitleaks.

Caminho recomendado de release/readiness:

1. Revise o README relevante e os documentos linkados.
2. Execute a validacao do repositorio quando existir um comando.
3. Verifique links Markdown e assets locais.
4. Execute Gitleaks ou o secret scan configurado.
5. Verifique origin/main depois do push antes de afirmar que a publicacao terminou.

## Limite de seguranca e escopo publico

Nao armazenar segredos em config, hooks, rules ou docs. Conectores autenticados ficam desativados ate que uma tarefa concreta precise deles.

## Contribuicao e manutencao

Mantenha as paginas localizadas alinhadas com o README canonico quando escopo, passos de instalacao, regras de release ou limites de seguranca mudarem. Nao adicione afirmacoes sem respaldo no repositorio, docs live do produto ou evidencia publica de release.

## Padrao de completude

Este README localizado nao e uma nota curta. Ele explica proposito, entrada, superficies do repositorio, validacao, limite de seguranca e referencias canonicas.

Referencia canonica: [README.md](README.md).
