# &#129504; Codex CLI Operator Handbook - README completa en español

[&#127468;&#127463; English](README.md) | [&#127465;&#127466; Deutsch](README.de.md) | [&#127466;&#127480; Español](README.es.md) | [&#127463;&#127479; Português (Brasil)](README.pt-BR.md) | [&#127481;&#127479; Türkçe](README.tr.md) | [&#127467;&#127479; Français](README.fr.md)

> Este archivo es una portada completa en español, no un resumen corto. Cubre propósito, límites, uso, validación, seguridad y publicación.
>
> README canónico en inglés: [README.md](README.md)

Public handbook for operating Codex CLI with safer config, agents, skills, MCP, hooks and release hygiene.

Empieza por el README canónico si necesitas la descripción inglesa más actual. Usa esta página cuando quieras el mismo contrato operativo en español.

## Estado y señales de confianza

|Área | Detalle|
|--- | ---|
|Estado | Public repository: ucsahinn/codex-cli-best-practice|
|Fuente de verdad | [README canónico en inglés](README.md)|
|Usuarios | Codex CLI users building a safer local setup.; Teams writing durable AGENTS.md and config contracts.|
|Validación | Docs links resolve locally.; Examples are stored as examples, not active secrets.|
|Seguridad | Documents Codex surfaces instead of hiding them in ad-hoc prompts.; Separates AGENTS.md, config.toml, skills, MCP, hooks, memory and marketplaces.|

## Qué es este repositorio

- A practical Codex CLI operating guide.
- A repository of best-practice notes for AGENTS.md, MCP, config, hooks, memory, skills, subagents and marketplaces.
- A public reference for Windows-friendly Codex setup decisions.
- A validation-backed docs repo that avoids unsupported commands and stale links.

## Qué no es

- Not the official Codex manual.
- Not a replacement for official OpenAI documentation.
- Not a place for account tokens or private MCP credentials.
- Not a guarantee that every future Codex flag keeps the same behavior.

## Para quién es

- Codex CLI users building a safer local setup.
- Teams writing durable AGENTS.md and config contracts.
- Maintainers reviewing skill or plugin distribution decisions.
- Users who want examples before changing global Codex settings.

## Inicio rápido

1. Clona o actualiza el repositorio.
2. Lee README, seguridad y el mapa de documentación.
3. Ejecuta las validaciones adecuadas.
4. Prepara solo los archivos cambiados de forma explícita.
5. Antes de push o release, revisa remoto, secretos y enlaces otra vez.

## Guía de decisión

- Need durable repo instructions -> AGENTS.md.
- Need local model, sandbox or MCP settings -> config.toml.
- Need reusable workflow -> skill.
- Need external live context -> MCP connector.
- Need reviewed lifecycle automation -> hooks.

## Mapa del repositorio

|Ruta | Por qué importa|
|--- | ---|
|[best-practice/](best-practice/) | topic-by-topic Codex guidance|
|[docs/](docs/) | FAQ, Windows notes, public readiness and release checklists|
|[examples/profiles/](examples/profiles/) | sample config profiles|
|[examples/ci-cd/](examples/ci-cd/) | CI examples|
|[scripts/validate-docs.mjs](scripts/validate-docs.mjs) | docs and link validator|
|[AGENTS.md](AGENTS.md) | repo working agreement|

## Flujo de trabajo

1. Read the surface map before changing setup.
2. Prefer official docs and local config evidence for version-sensitive claims.
3. Keep examples copy-pasteable but conservative.
4. Validate docs and links after every public wording change.
5. Run secret scans before push.

## Comandos y validación

Ejecuta estos comandos solo después de clonar el repositorio y entender qué escriben o verifican.

```powershell
npm run validate
node scripts/validate-docs.mjs
git diff --check
gitleaks dir . --no-banner --redact
```

## Lista de verificación

- Docs links resolve locally.
- Examples are stored as examples, not active secrets.
- Security notes do not overpromise sandboxing.
- Release notes and changelog remain aligned with visible changes.
- Remote HEAD is verified after push.

## Límite de seguridad

- Documents Codex surfaces instead of hiding them in ad-hoc prompts.
- Separates AGENTS.md, config.toml, skills, MCP, hooks, memory and marketplaces.
- Includes examples and a docs validator.
- Keeps upstream attribution and public fork boundaries visible.

Public-safe rule: do not add secrets, tokens, cookies, private keys, private prompts, customer data, local-only auth files, generated logs, archives or build outputs unless the canonical README explicitly says they belong in the public repo.

## Higiene de release y publicación

- Docs-only changes still need diff review and validation.
- Do not publish config containing real tokens.
- Keep release notes in docs/ when versioned documentation changes.
- Verify GitHub Actions after push when workflows exist.

## Mantenimiento

- Keep this localized README aligned with README.md when the repo contract changes.
- Prefer factual repo links over marketing claims.
- Do not invent install commands, metrics, users, releases or support promises.
- If a command is version-sensitive, re-check it before documenting it.
- When a localized file cannot be updated fully, leave a clear note instead of a partial translation.

## Ruta de contribución

- Open a focused change against the smallest set of files.
- Read AGENTS.md or CONTRIBUTING.md when present before editing.
- Run the repo validation commands listed above.
- Review staged diffs explicitly before commit.
- Use security disclosure paths instead of public issues for sensitive reports.

## Definición de terminado

Terminado significa: contenido completo, enlaces correctos, límites de seguridad claros, validación ejecutada, Git limpio y remote HEAD verificado después del push.

|Recomendación | Por qué importa|
|--- | ---|
|Content | Public handbook for operating Codex CLI with safer config, agents, skills, MCP, hooks and release hygiene.|
|Links | All referenced local files must exist and resolve from the repository root.|
|Security | Examples are stored as examples, not active secrets.|
|Verification | Valida estructura, enlaces, Markdown, secretos, scripts relevantes y remote HEAD antes de afirmar que algo está publicado.|
|Remote | After push, compare local HEAD with origin/main and GitHub remote HEAD.|

## Enlaces importantes

|Ruta | Por qué importa|
|--- | ---|
|[Canonical README](README.md) | README.md|
|[Codex skills guide](best-practice/codex-skills.md) | best-practice/codex-skills.md|
|[Codex MCP guide](best-practice/codex-mcp.md) | best-practice/codex-mcp.md|
|[Windows notes](docs/WINDOWS.md) | docs/WINDOWS.md|
|[Release checklist](docs/RELEASE_CHECKLIST.md) | docs/RELEASE_CHECKLIST.md|
|[Security notes](docs/AGENT_SECURITY.md) | docs/AGENT_SECURITY.md|
