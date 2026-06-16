# Codex CLI Operator Handbook - Deutsch

<p align="center">
  &#127760; <strong>Dokumentation:</strong>
  <a href="README.de.md"><img src="https://flagcdn.com/w20/de.png" alt="Deutsch" width="20"></a> |
  <a href="README.es.md"><img src="https://flagcdn.com/w20/es.png" alt="Espa&#241;ol" width="20"></a> |
  <a href="README.md"><img src="https://flagcdn.com/w20/gb.png" alt="English" width="20"></a> |
  <a href="README.pt-BR.md"><img src="https://flagcdn.com/w20/br.png" alt="Portugu&#234;s (Brasil)" width="20"></a> |
  <a href="README.tr.md"><img src="https://flagcdn.com/w20/tr.png" alt="T&#252;rk&#231;e" width="20"></a> |
  <a href="README.fr.md"><img src="https://flagcdn.com/w20/fr.png" alt="Fran&#231;ais" width="20"></a>
</p>

> Deutsche Übersicht für das öffentliche Codex-CLI-Handbuch. Die englische [README.md](README.md) bleibt die kanonische Quelle; diese Seite erklärt denselben Vertrag kurz und verständlich auf Deutsch.

## Was dieses Repository ist

Dieses Repository ist ein öffentliches Handbuch für Codex CLI. Es erklärt, wie man Prompts, `AGENTS.md`, `.codex/config.toml`, Skills, Subagents, MCP, Hooks, Windows-Hinweise, Validierung und Release-Hygiene sauber trennt.

Es ist kein Installations-Starter und kein Anwendungscode.

## Beziehung zum Enterprise Starter

| Repository | Rolle |
|---|---|
| `codex-enterprise-starter` | Installierbares Starter-Kit für eine wiederverwendbare Codex-Arbeitsumgebung |
| `codex-cli-best-practice` | Begleitendes Handbuch für Betrieb, Erweiterung, Prüfung und Release-Sicherheit |

Der Starter hilft beim Einrichten. Dieses Repository erklärt, wie man die Einrichtung richtig betreibt.

## Schnellstart

```bash
npm run validate
codex
```

## Welche Codex-Oberfläche wofür?

| Oberfläche | Zweck |
|---|---|
| Prompt | Einmalige Aufgabe oder Einschränkung |
| `AGENTS.md` | Dauerhafte Projektregeln und Prüfkommandos |
| `.codex/config.toml` | Projekt-Defaults, Sandbox, Approvals, MCP, Hooks und Agents |
| Skill | Wiederverwendbarer Arbeitsablauf |
| Subagent | Explizite Spezialistenrolle |
| MCP | Aktuelle externe Dokumentation oder private Werkzeuge |
| Hook | Geprüfte Lifecycle-Automation |

## Sicherheitsgrenzen

- Keine Tokens, Cookies, privaten Schlüssel, lokalen Auth-Dateien oder Logs committen.
- Hooks sind Guardrails, keine vollständige Sicherheitsgrenze.
- Sandbox und Approvals sind getrennte Kontrollen.
- Release nur nach Validierung, Diff-Prüfung und Secret Scan.

## Prüfung

```bash
npm run validate
node --check scripts/validate-docs.mjs
git diff --check
gitleaks detect --redact --no-banner --verbose
```

## Wichtige Dateien

| Datei | Zweck |
|---|---|
| [README.md](README.md) | Kanonische englische Startseite |
| [README.tr.md](README.tr.md) | Vollständiger türkischer Guide |
| [AGENTS.md](AGENTS.md) | Arbeitsvertrag für Codex |
| [best-practice/](best-practice/) | Thematische Best-Practice-Guides |
| [docs/WINDOWS.md](docs/WINDOWS.md) | Windows-Hinweise |
| [docs/RELEASE_CHECKLIST.md](docs/RELEASE_CHECKLIST.md) | Release-Gate |
| [docs/AGENT_SECURITY.md](docs/AGENT_SECURITY.md) | Sicherheitsregeln für agentische Workflows |
