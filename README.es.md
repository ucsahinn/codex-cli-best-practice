# Codex CLI Operator Handbook

<p align="center">
  <a href="README.de.md">&#127465;&#127466; Deutsch</a> ? <a href="README.es.md">&#127466;&#127480; Espa&ntilde;ol</a> ? <a href="README.md">&#127468;&#127463; English</a> ? <a href="README.pt-BR.md">&#127463;&#127479; Portugu&ecirc;s (Brasil)</a> ? <a href="README.tr.md">&#127481;&#127479; T&uuml;rk&ccedil;e</a> ? <a href="README.fr.md">&#127467;&#127479; French</a>
</p>

Handbook fork-first para operar Codex CLI: eleccion de superficies, defaults seguros, skills, MCP, hooks, subagents, fixes Windows y checks de release.

## Por que existe este repositorio

Handbook fork-first para operar Codex CLI: eleccion de superficies, defaults seguros, skills, MCP, hooks, subagents, fixes Windows y checks de release.

Esta portada localizada se mantiene para que el lector entienda el repositorio sin depender de una etiqueta de idioma corta. La referencia canonica profunda sigue en README.md; esta pagina contiene suficiente contexto para elegir el punto de entrada, el limite de seguridad y la verificacion correcta.

## Para quien es

Operadores de Codex, maintainers y equipos que prefieren workflows repetibles en lugar de prompts aislados.

## Inicio rapido

| Si necesitas... | Abre |
| --- | --- |
| Canonical README | [README.md](README.md) |
| Turkish full guide | [README.tr.md](README.tr.md) |
| Codex skills | [best-practice/codex-skills.md](best-practice/codex-skills.md) |
| Codex MCP | [best-practice/codex-mcp.md](best-practice/codex-mcp.md) |
| Windows notes | [docs/WINDOWS.md](docs/WINDOWS.md) |
| Release checklist | [docs/RELEASE_CHECKLIST.md](docs/RELEASE_CHECKLIST.md) |

## Mapa del repositorio

- AGENTS.md - durable repo guidance
- best-practice/ - Codex surface guides
- docs/ - release, security and Windows notes
- examples/ - profile and CI examples
- orchestration-workflow/ - runnable example workflow
- scripts/validate-docs.mjs - documentation validator

## Validacion e higiene de release

Antes de commit o publicacion, revisa links, Markdown, validacion existente del repo y Gitleaks.

Ruta recomendada de release/readiness:

1. Revisar el README relevante y los documentos enlazados.
2. Ejecutar la validacion del repositorio cuando exista un comando.
3. Comprobar links Markdown y assets locales.
4. Ejecutar Gitleaks o el secret scan configurado.
5. Verificar origin/main despues del push antes de afirmar que la publicacion termino.

## Limite de seguridad y alcance publico

No guardar secretos en config, hooks, rules o docs. Los conectores autenticados permanecen desactivados hasta que una tarea concreta los necesite.

## Contribucion y mantenimiento

Mant?n las paginas localizadas alineadas con el README canonico cuando cambien el alcance, los pasos de instalacion, las reglas de release o los limites de seguridad. No agregues afirmaciones que no esten respaldadas por el repositorio, docs live del producto o evidencia publica de release.

## Estandar de completitud

Este README localizado no es una nota corta. Explica proposito, entrada, superficies del repositorio, validacion, limite de seguridad y referencias canonicas.

Referencia canonica: [README.md](README.md).
