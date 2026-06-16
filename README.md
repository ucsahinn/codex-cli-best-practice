# Codex CLI Operator Handbook

> 🚀 A multilingual, fork-first field guide for running Codex CLI with clear instructions, safer defaults, reusable skills, reviewed hooks, and repeatable release checks.

![Codex CLI](https://img.shields.io/badge/Codex_CLI-operator_handbook-111827?style=flat&labelColor=0f172a)
![Language](https://img.shields.io/badge/language-multilingual-0f766e?style=flat)
![Docs](https://img.shields.io/badge/docs-validated-2563eb?style=flat)
[![README languages](https://img.shields.io/badge/README-6%20languages-0f766e?style=flat)](README.md)
![Security](https://img.shields.io/badge/security-secret_scan_required-b91c1c?style=flat)

<p align="center">
  <img src="!/codex-speaking.svg" alt="Codex CLI operator handbook mascot" width="132" height="132">
</p>

<p align="center">
  &#127760; <strong>Languages:</strong>
  <a href="README.de.md"><img src="https://flagcdn.com/w20/de.png" alt="Deutsch" width="20"></a> |
  <a href="README.es.md"><img src="https://flagcdn.com/w20/es.png" alt="Espa&#241;ol" width="20"></a> |
  <a href="#english"><img src="https://flagcdn.com/w20/gb.png" alt="English" width="20"></a> |
  <a href="README.pt-BR.md"><img src="https://flagcdn.com/w20/br.png" alt="Portugu&#234;s (Brasil)" width="20"></a> |
  <a href="#turkce"><img src="https://flagcdn.com/w20/tr.png" alt="T&#252;rk&#231;e" width="20"></a> |
  <a href="README.fr.md"><img src="https://flagcdn.com/w20/fr.png" alt="Fran&#231;ais" width="20"></a>
  <br>
  <a href="README.tr.md"><img src="https://flagcdn.com/w20/tr.png" alt="T&#252;rk&#231;e" width="20"> full guide</a> |
  <a href="docs/RELEASE_CHECKLIST.md"><img alt="Release checklist" src="https://img.shields.io/badge/release-checklist-111827"></a> |
  <a href="docs/RESEARCH_NOTES.md"><img alt="Research notes" src="https://img.shields.io/badge/research-notes-2563eb"></a>
</p>

This public fork is maintained as an independent Codex best-practices repository. It keeps upstream MIT license attribution, but the handbook, multilingual onboarding, validation, security notes, release flow, and fork-facing identity are owned here.

## 🧭 Start Here

| Need | Open |
|---|---|
| First 5 minutes | [Quick start](#quick-start) |
| Turkish onboarding | [README.tr.md](README.tr.md) |
| Which Codex surface to use | [Codex surface map](#codex-surface-map) |
| Current source decisions | [docs/RESEARCH_NOTES.md](docs/RESEARCH_NOTES.md) |
| Release and publish gate | [docs/RELEASE_CHECKLIST.md](docs/RELEASE_CHECKLIST.md) |
| Public readiness checklist | [docs/PUBLIC_READINESS.md](docs/PUBLIC_READINESS.md) |
| Local validation | `npm run validate` |

## 🧭 Companion Project

This repo is the companion handbook for the broader Codex setup ecosystem:

| Repo | Role |
|---|---|
| `codex-enterprise-starter` | Installable starter kit for setting up a reusable Codex working environment |
| `codex-cli-best-practice` | Public handbook for operating, extending, validating, and releasing Codex workflows safely |

Use the starter when you want a ready setup. Use this handbook when you want to understand the surfaces, safety model, validation path, and maintenance rules behind that setup.

<a id="english"></a>

## <img src="https://flagcdn.com/w20/gb.png" alt="English" width="20"> English

### 🎯 What This Repository Is

This repo is a practical operating handbook for Codex CLI users who want repeatable engineering workflows instead of one-off prompts. It explains where to put durable instructions, how to keep automation reviewable, how to package reusable skills, and how to verify a public release without leaking local state.

It is intentionally a documentation and configuration reference, not an application codebase.

<a id="quick-start"></a>

### ⚡ Quick Start

```bash
npm run validate
codex
```

Try the included agent-to-skill demo:

```text
Fetch the current weather for Istanbul in Celsius and create the SVG weather card output using the repo.
```

Expected outputs:

- `orchestration-workflow/weather.svg`
- `orchestration-workflow/output.md` (ignored because it is generated)

<a id="codex-surface-map"></a>

### 🧩 Codex Surface Map

| Surface | Use it for | Repo example |
|---|---|---|
| Prompt | One-off task constraints | Current user request |
| `AGENTS.md` | Durable project rules and verification commands | [AGENTS.md](AGENTS.md) |
| `.codex/config.toml` | Project defaults, sandboxing, approvals, MCP, hooks, agents | [.codex/config.toml](.codex/config.toml) |
| Skill | Reusable workflow with progressive disclosure | [.agents/skills/weather-svg-creator/SKILL.md](.agents/skills/weather-svg-creator/SKILL.md) |
| Subagent | Explicit specialist role for bounded work | [.codex/agents/weather-agent.toml](.codex/agents/weather-agent.toml) |
| MCP | Live docs, private tools, external context | [best-practice/codex-mcp.md](best-practice/codex-mcp.md) |
| Hook | Reviewed lifecycle automation, never the only security boundary | [best-practice/codex-hooks.md](best-practice/codex-hooks.md) |
| Release checklist | Manual publish gates | [docs/RELEASE_CHECKLIST.md](docs/RELEASE_CHECKLIST.md) |

### 📁 Repository Map

| Area | Path | Purpose |
|---|---|---|
| Welcome | `README.md` | English-first public entry point with multilingual bridge |
| Turkish guide | `README.tr.md` | Full Turkish onboarding and maintenance guide |
| Agent rules | `AGENTS.md`, `CLAUDE.md` | Codex and Claude-compatible operating guidance |
| Codex config | `.codex/` | Project defaults, agents, hooks, hook scripts, examples |
| Skills | `.agents/skills/` | Reusable Codex workflows |
| Best practices | `best-practice/` | Focused Codex surface guides |
| Examples | `examples/` | Profile and CI examples |
| Docs | `docs/` | FAQ, roadmap, research notes, release notes, readiness checks |
| Validation | `scripts/validate-docs.mjs` | Dependency-free repository guard |
| GitHub | `.github/` | Docs guard workflow, issue template, release form, PR template |

### 🛡️ Safety Defaults

- Keep secrets in environment variables or trusted local config, never in repo docs.
- Treat sandboxing and approvals as separate controls.
- Keep broad filesystem or network access out of shared examples.
- Use hooks as guardrails, not as the primary enforcement boundary.
- Keep local overrides in ignored files such as `AGENTS.override.md`, `.codex/config.local.toml`, and `.codex/hooks/config/*.local.json`.
- Run `gitleaks detect --redact --no-banner --verbose` before tags and releases.

### ✅ Validation

```bash
npm run validate
git diff --check
gitleaks detect --redact --no-banner --verbose
```

The validator checks required files, README identity markers, local markdown links, common mojibake sequences, JSON syntax, committed local-only paths, stale Codex keys, and generated hook-log leaks.

### 🚢 Release Flow

Use [docs/RELEASE_CHECKLIST.md](docs/RELEASE_CHECKLIST.md) before publishing. The short version:

```bash
npm run validate
git diff --check
gitleaks detect --redact --no-banner --verbose
git status --short
```

Then commit intentionally, push the branch, tag the release, create the GitHub Release from the matching release notes, and verify the public page, links, Actions run, and release asset state.

<a id="turkce"></a>

## <img src="https://flagcdn.com/w20/tr.png" alt="Turkce" width="20"> Turkce

### 🎯 Bu Repo Ne?

Bu fork, Codex CLI kullananlar için iki dilli bir operator rehberi. Amacı sadece ayar dosyası örneği vermek değil; prompt, `AGENTS.md`, config, skill, subagent, MCP, hook ve release checklist arasında doğru kararı vermeyi öğretmek.

### ⚡ Hızlı Başlangıç

```bash
npm run validate
codex
```

Demo için Codex'e şunu yaz:

```text
Istanbul icin guncel hava durumunu Celsius olarak getir ve repo icindeki SVG hava kartini olustur.
```

### 🧩 Nereden Başlamalı?

| İş | Dosya |
|---|---|
| Repo mantığını öğren | `README.md` |
| Türkçe rehber | `README.tr.md` |
| Kalıcı talimatlar | `AGENTS.md` |
| Codex ayarları | `.codex/config.toml` |
| Skill yazımı | `docs/SKILLS.md`, `best-practice/codex-skills.md` |
| Hook kullanımı | `best-practice/codex-hooks.md`, `.codex/hooks/HOOKS-README.md` |
| Windows notları | `docs/WINDOWS.md` |
| Release hazırlığı | `docs/RELEASE_CHECKLIST.md` |
| Public hazır mı? | `docs/PUBLIC_READINESS.md` |

### 🛡️ Kısa Güvenlik Notu

Token, cookie, private key, lokal auth dosyası, kişisel hook config'i veya log dosyası commitlenmez. Release öncesi validation, diff check ve Gitleaks birlikte çalıştırılır.

## ⚖️ Credits And License

This is an independent fork edition. The original MIT license lineage is preserved in [LICENSE](LICENSE). Fork-specific handbook content, Turkish onboarding, release discipline, validation workflow, and public-readiness docs are maintained in this repository.
