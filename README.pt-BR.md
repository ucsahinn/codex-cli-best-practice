# Codex CLI Operator Handbook - Português do Brasil

[English](README.md) | [Deutsch](README.de.md) | [Español](README.es.md) | [Português (Brasil)](README.pt-BR.md) | [Türkçe](README.tr.md) | [Français](README.fr.md)

> Visão geral em português do Brasil do handbook público para Codex CLI. A [README.md](README.md) em inglês continua sendo a fonte canônica; esta página resume o mesmo contrato operacional em português.

## O que este repositório é

Este repositório é um handbook público para Codex CLI. Ele explica como separar prompts, `AGENTS.md`, `.codex/config.toml`, skills, subagents, MCP, hooks, notas de Windows, validação e higiene de release.

Não é um starter instalável nem uma aplicação.

## Relação com Enterprise Starter

| Repositório | Papel |
|---|---|
| `codex-enterprise-starter` | Starter kit instalável para criar um ambiente Codex reutilizável |
| `codex-cli-best-practice` | Handbook companion para operar, estender, validar e publicar workflows Codex com segurança |

O starter ajuda a configurar. Este repositório explica como operar e manter essa configuração.

## Início rápido

```bash
npm run validate
codex
```

## Qual superfície usar?

| Superfície | Uso |
|---|---|
| Prompt | Restrição ou tarefa pontual |
| `AGENTS.md` | Regras duráveis do projeto e comandos de validação |
| `.codex/config.toml` | Defaults do projeto, sandbox, approvals, MCP, hooks e agents |
| Skill | Workflow reutilizável |
| Subagent | Papel especialista explícito |
| MCP | Documentação externa atual ou ferramentas privadas |
| Hook | Automação revisada de ciclo de vida |

## Limites de segurança

- Não publicar tokens, cookies, chaves privadas, auth local ou logs.
- Hooks são guardrails, não uma fronteira de segurança completa.
- Sandbox e approvals são controles separados.
- Publicar somente depois de validação, revisão de diff e secret scan.

## Validação

```bash
npm run validate
node --check scripts/validate-docs.mjs
git diff --check
gitleaks detect --redact --no-banner --verbose
```

## Arquivos importantes

| Arquivo | Uso |
|---|---|
| [README.md](README.md) | Página canônica em inglês |
| [README.tr.md](README.tr.md) | Guia completo em turco |
| [AGENTS.md](AGENTS.md) | Contrato de trabalho para Codex |
| [best-practice/](best-practice/) | Guias temáticos |
| [docs/WINDOWS.md](docs/WINDOWS.md) | Notas para Windows |
| [docs/RELEASE_CHECKLIST.md](docs/RELEASE_CHECKLIST.md) | Gate de release |
| [docs/AGENT_SECURITY.md](docs/AGENT_SECURITY.md) | Segurança para workflows agentic |
