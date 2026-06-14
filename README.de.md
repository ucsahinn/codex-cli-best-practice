# Codex CLI Operator Handbook

<p align="center">
  <a href="README.de.md">&#127465;&#127466; Deutsch</a> ? <a href="README.es.md">&#127466;&#127480; Espa&ntilde;ol</a> ? <a href="README.md">&#127468;&#127463; English</a> ? <a href="README.pt-BR.md">&#127463;&#127479; Portugu&ecirc;s (Brasil)</a> ? <a href="README.tr.md">&#127481;&#127479; T&uuml;rk&ccedil;e</a> ? <a href="README.fr.md">&#127467;&#127479; French</a>
</p>

Fork-first Operator-Handbuch fuer Codex CLI: Oberflaechenwahl, sichere Defaults, Skills, MCP, Hooks, Subagents, Windows-Fixes und Release-Pruefungen.

## Warum dieses Repository existiert

Fork-first Operator-Handbuch fuer Codex CLI: Oberflaechenwahl, sichere Defaults, Skills, MCP, Hooks, Subagents, Windows-Fixes und Release-Pruefungen.

Diese lokalisierte Startseite wird gepflegt, damit Leser das Repository nicht nur ueber ein kurzes Sprach-Badge verstehen muessen. Die tiefe kanonische Referenz bleibt in README.md; diese Seite enthaelt genug Kontext, um den richtigen Einstieg, die Sicherheitsgrenze und die Verifikation zu waehlen.

## Fuer wen es gedacht ist

Codex-Operator, Maintainer und Teams, die reproduzierbare Workflows statt lose Einzelprompts wollen.

## Schnellstart

| Wenn du brauchst... | Oeffne |
| --- | --- |
| Canonical README | [README.md](README.md) |
| Turkish full guide | [README.tr.md](README.tr.md) |
| Codex skills | [best-practice/codex-skills.md](best-practice/codex-skills.md) |
| Codex MCP | [best-practice/codex-mcp.md](best-practice/codex-mcp.md) |
| Windows notes | [docs/WINDOWS.md](docs/WINDOWS.md) |
| Release checklist | [docs/RELEASE_CHECKLIST.md](docs/RELEASE_CHECKLIST.md) |

## Repository-Karte

- AGENTS.md - durable repo guidance
- best-practice/ - Codex surface guides
- docs/ - release, security and Windows notes
- examples/ - profile and CI examples
- orchestration-workflow/ - runnable example workflow
- scripts/validate-docs.mjs - documentation validator

## Validierung und Release-Hygiene

Vor Commit oder Veroeffentlichung sollten Links, Markdown, vorhandene Repo-Validierung und Gitleaks geprueft werden.

Empfohlener Release-/Readiness-Pfad:

1. Relevante README und verlinkte Dokumente pruefen.
2. Die Validierung des Repositories ausfuehren, wenn ein Befehl vorhanden ist.
3. Markdown-Links und lokale Assets kontrollieren.
4. Gitleaks oder den konfigurierten Secret Scan ausfuehren.
5. Nach dem Push origin/main pruefen, bevor Veroeffentlichung als erledigt gemeldet wird.

## Sicherheits- und Public-Scope-Grenze

Keine Secrets in Config, Hooks, Regeln oder Docs. Authentifizierte Connectoren bleiben deaktiviert, bis eine konkrete Aufgabe sie braucht.

## Mitwirken und Pflege

Halten Sie lokalisierte Seiten synchron mit der kanonischen README, wenn sich Scope, Installationsschritte, Release-Regeln oder Sicherheitsgrenzen aendern. Fuegen Sie keine Aussagen hinzu, die nicht durch Repository, Live-Produktdokumentation oder oeffentliche Release-Nachweise gedeckt sind.

## Vollstaendigkeitsstandard

Diese lokalisierte README ist keine Kurznotiz. Sie erklaert Zweck, Einstieg, Repository-Flaechen, Validierung, Sicherheitsgrenze und kanonische Referenzen.

Kanonische Referenz: [README.md](README.md).
