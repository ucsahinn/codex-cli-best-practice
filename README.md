# Codex CLI Operator Handbook

> A bilingual field guide for running Codex CLI as a disciplined, reviewable, and shippable engineering system.

![Codex CLI](https://img.shields.io/badge/Codex_CLI-operator_handbook-111827?style=flat&labelColor=0f172a)
![Language](https://img.shields.io/badge/language-EN_%2B_TR-0f766e?style=flat)
![Docs](https://img.shields.io/badge/docs-validated-2563eb?style=flat)
![Release](https://img.shields.io/badge/release-ready_checklist-7c3aed?style=flat)

<p align="center">
  <img src="!/codex-speaking.svg" alt="Codex CLI operator handbook mascot" width="132" height="132">
</p>

<p align="center">
  <a href="#english">English</a> ·
  <a href="#turkce">Turkce</a> ·
  <a href="README.tr.md">TR full guide</a> ·
  <a href="docs/RELEASE_CHECKLIST.md">Release checklist</a> ·
  <a href="docs/RESEARCH_NOTES.md">Research notes</a>
</p>

This fork is rebuilt as an independent Codex CLI reference kit. The welcome page, operating model, Turkish guide, release checklist, validation script, and CI guard are no longer a mirror of the upstream starter repository.

## Start Here

| Need | Open |
|---|---|
| First 5 minutes | [Quick start](#quick-start) |
| Turkish onboarding | [README.tr.md](README.tr.md) |
| What each folder does | [Repository map](#repository-map) |
| Current Codex source notes | [docs/RESEARCH_NOTES.md](docs/RESEARCH_NOTES.md) |
| Release and publish flow | [docs/RELEASE_CHECKLIST.md](docs/RELEASE_CHECKLIST.md) |
| Local validation | `npm run validate` |

## English

### What This Repository Is

This repository turns Codex CLI setup into a small operating system for engineering work:

- `AGENTS.md` keeps durable project instructions short, explicit, and reviewable.
- `.codex/config.toml` defines safety profiles, MCP servers, model defaults, and project agents.
- `.agents/skills/` stores reusable workflows with progressive disclosure.
- `.codex/agents/` stores task-specific agent role files.
- `best-practice/` explains each Codex surface with practical rules and anti-patterns.
- `orchestration-workflow/` demonstrates an Agent to Skill workflow with a live weather card.
- `scripts/validate-docs.mjs` checks the docs before a release.

### Quick Start

```bash
npm run validate
codex --profile development
```

Try the included orchestration demo:

```text
Fetch the current weather for Istanbul in Celsius and create the SVG weather card output using the repo.
```

The workflow writes:

- `orchestration-workflow/weather.svg`
- `orchestration-workflow/output.md`

### Repository Map

| Surface | Path | Why it exists |
|---|---|---|
| Welcome page | `README.md` | English-first project entry point with Turkish bridge |
| Turkish guide | `README.tr.md` | Copy-paste friendly Turkish onboarding |
| Project instructions | `AGENTS.md` | Durable Codex working rules for this repo |
| Claude compatibility | `CLAUDE.md` | Equivalent guidance for Claude Code users |
| Codex config | `.codex/config.toml` | Shared profiles, MCP registration, and agent registration |
| Weather agent | `.codex/agents/weather-agent.toml` | Fetches Istanbul weather and delegates rendering |
| Weather skill | `.agents/skills/weather-svg-creator/SKILL.md` | Creates the SVG card and markdown report |
| Best practices | `best-practice/` | Focused guides for config, skills, hooks, MCP, memory, agents, and marketplace |
| Release checklist | `docs/RELEASE_CHECKLIST.md` | Local, git, tag, release, and post-release gates |
| Research log | `docs/RESEARCH_NOTES.md` | Current-source decisions used by this fork |
| Contributing | `CONTRIBUTING.md` | Contribution rules for docs, skills, agents, and releases |
| Security | `SECURITY.md` | Secret handling and responsible disclosure notes |
| Roadmap | `docs/ROADMAP.md` | Next improvements for the fork edition |
| CI guard | `.github/workflows/docs-guard.yml` | Runs docs validation on pull requests and pushes |

### Operating Loop

Use this loop for real work in the repo:

1. Inspect the current tree with `rg` and targeted file reads.
2. Pick the narrowest Codex surface that owns the behavior.
3. Change docs, config, skills, or agents in the smallest coherent patch.
4. Run `npm run validate`.
5. Review the diff before commit or release.
6. Use the release checklist before publishing a tag.

### Codex Surface Rules

| Put it in | When it should live there |
|---|---|
| Prompt | One-off task constraints |
| `AGENTS.md` | Repo conventions, verification commands, safety rules |
| `.codex/config.toml` | Profiles, sandboxing, model defaults, MCP servers, hooks |
| Skill | Reusable workflow that should trigger by name or description |
| Agent | Specialized role that can own part of a larger task |
| MCP | Live external context, private tools, or version-sensitive docs |
| Hook | Reviewed lifecycle automation around tool use or session events |
| Release checklist | Manual publish gates that must stay visible |

### Built-In Demo

The demo intentionally stays small: one agent fetches data, one skill renders output.

```text
User prompt
  -> weather-agent
    -> Open-Meteo current temperature for Istanbul
    -> weather-svg-creator skill
      -> weather.svg
      -> output.md
```

Why this matters:

- It shows how to keep data fetching and rendering separate.
- It gives contributors a concrete agent/skill example without a full application.
- It provides a quick smoke test for Codex CLI, network access, and file output.

### Validation

```bash
npm run validate
```

The validation script checks required handbook files, verifies local markdown links, and guards the fork identity in the welcome page. It has no third-party dependencies.

### Release Flow

Use [docs/RELEASE_CHECKLIST.md](docs/RELEASE_CHECKLIST.md) before tagging. The short version:

```bash
npm run validate
git status --short
git diff -- README.md README.tr.md docs .codex .agents .github scripts package.json CHANGELOG.md
```

Then commit intentionally, tag, push, and create the GitHub Release from a real git checkout. This local folder currently needs `.git` metadata before push/release commands can run.

## Turkce

### Bu Repo Ne?

Bu fork, Codex CLI kullanan ekipler icin iki dilli bir operator rehberi olarak yeniden duzenlendi. Amac sadece "ayar dosyalari ornegi" vermek degil; Codex ile nasil planlanir, nasil dogrulanir, hangi bilginin hangi yuzeyde tutulacagi nasil secilir ve release oncesi ne kontrol edilir sorularini tek yerde cevaplamak.

### Hizli Baslangic

```bash
npm run validate
codex --profile development
```

Demo icin Codex'e sunu yaz:

```text
Istanbul icin guncel hava durumunu Celsius olarak getir ve repo icindeki SVG hava kartini olustur.
```

Olusan dosyalar:

- `orchestration-workflow/weather.svg`
- `orchestration-workflow/output.md`

### Bu Forkta Neler Degisti?

- Karşılama sayfası bastan yazildi.
- Turkce tam rehber eklendi: [README.tr.md](README.tr.md).
- Release ve publish kontrol listesi eklendi.
- Resmi Codex manual ve OpenAI latest-model bilgisinden karar notlari cikarildi.
- Istanbul odakli agent-skill demosu hazirlandi.
- Sponsor/upstream odakli GitHub yuzeyi temizlendi.
- Bagimliliksiz docs validator ve GitHub Actions kontrolu eklendi.

### Nereden Baslamali?

| Is | Dosya |
|---|---|
| Repo mantigini anla | `README.md` |
| Turkce kullan | `README.tr.md` |
| Codex yuzeylerini sec | `AGENTS.md`, `.codex/config.toml`, `.agents/skills/` |
| Release hazirla | `docs/RELEASE_CHECKLIST.md` |
| Kaynak kararlarini denetle | `docs/RESEARCH_NOTES.md` |
| Katki kurallarini oku | `CONTRIBUTING.md` |
| Guvenlik notlarini oku | `SECURITY.md` |
| Siradaki isleri gor | `docs/ROADMAP.md` |

### Yayina Cikmadan Once

Bu klasor su anda git checkout degilse push veya release yapilamaz. Once fork reposunun gercek checkout'u gerekir. Sonra:

```bash
npm run validate
git status --short
git tag v0.1.0
git push origin main --tags
```

Release notlarini [CHANGELOG.md](CHANGELOG.md) ve [docs/RELEASE_CHECKLIST.md](docs/RELEASE_CHECKLIST.md) uzerinden hazirla.

## Credits And License

This is an independent fork edition. The original MIT license lineage is preserved in [LICENSE](LICENSE). New handbook, Turkish onboarding, release checklist, validation workflow, and fork-specific documentation are maintained in this repository.
