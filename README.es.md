# Codex CLI Operator Handbook - Español

<p align="center">
  &#127760; <strong>Documentaci&#243;n:</strong>
  <a href="README.de.md"><img src="https://flagcdn.com/w20/de.png" alt="Deutsch" width="20"></a> |
  <a href="README.es.md"><img src="https://flagcdn.com/w20/es.png" alt="Espa&#241;ol" width="20"></a> |
  <a href="README.md"><img src="https://flagcdn.com/w20/gb.png" alt="English" width="20"></a> |
  <a href="README.pt-BR.md"><img src="https://flagcdn.com/w20/br.png" alt="Portugu&#234;s (Brasil)" width="20"></a> |
  <a href="README.tr.md"><img src="https://flagcdn.com/w20/tr.png" alt="T&#252;rk&#231;e" width="20"></a> |
  <a href="README.fr.md"><img src="https://flagcdn.com/w20/fr.png" alt="Fran&#231;ais" width="20"></a>
</p>

> Vista general en español del handbook público para Codex CLI. La [README.md](README.md) en inglés sigue siendo la fuente canónica; esta página resume el mismo contrato operativo en español.

## Qué es este repositorio

Este repositorio es un handbook público para Codex CLI. Explica cómo separar prompts, `AGENTS.md`, `.codex/config.toml`, skills, subagents, MCP, hooks, notas de Windows, validación e higiene de release.

No es un starter instalable ni una aplicación.

## Relación con Enterprise Starter

| Repositorio | Rol |
|---|---|
| `codex-enterprise-starter` | Starter kit instalable para crear un entorno Codex reutilizable |
| `codex-cli-best-practice` | Handbook companion para operar, extender, validar y publicar flujos Codex con seguridad |

El starter sirve para configurar. Este repositorio explica cómo operar y mantener esa configuración.

## Inicio rápido

```bash
npm run validate
codex
```

## Qué superficie usar

| Superficie | Uso |
|---|---|
| Prompt | Restricción o tarea de una sola vez |
| `AGENTS.md` | Reglas duraderas del proyecto y comandos de validación |
| `.codex/config.toml` | Defaults del proyecto, sandbox, approvals, MCP, hooks y agents |
| Skill | Flujo reutilizable |
| Subagent | Rol especialista explícito |
| MCP | Documentación externa actual o herramientas privadas |
| Hook | Automatización revisada del ciclo de vida |

## Límites de seguridad

- No publicar tokens, cookies, claves privadas, auth local ni logs.
- Los hooks son guardrails, no una frontera de seguridad completa.
- Sandbox y approvals son controles separados.
- Publicar solo después de validación, revisión de diff y secret scan.

## Validación

```bash
npm run validate
node --check scripts/validate-docs.mjs
git diff --check
gitleaks detect --redact --no-banner --verbose
```

## Archivos importantes

| Archivo | Uso |
|---|---|
| [README.md](README.md) | Página canónica en inglés |
| [README.tr.md](README.tr.md) | Guía completa en turco |
| [AGENTS.md](AGENTS.md) | Contrato de trabajo para Codex |
| [best-practice/](best-practice/) | Guías temáticas |
| [docs/WINDOWS.md](docs/WINDOWS.md) | Notas para Windows |
| [docs/RELEASE_CHECKLIST.md](docs/RELEASE_CHECKLIST.md) | Gate de release |
| [docs/AGENT_SECURITY.md](docs/AGENT_SECURITY.md) | Seguridad para workflows agentic |
