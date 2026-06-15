# Codex CLI Operator Handbook - Türkçe Rehber

<p align="center">
  <a href="README.de.md">🇩🇪 Deutsch</a> ·
  <a href="README.es.md">🇪🇸 Español</a> ·
  <a href="README.md">🇬🇧 English</a> ·
  <a href="README.pt-BR.md">🇧🇷 Português (Brasil)</a> ·
  <a href="README.tr.md">🇹🇷 Türkçe</a> ·
  <a href="README.fr.md">🇫🇷 French</a>
</p>

> 🚀 Codex CLI için fork-first, çok dilli, güvenli ve release'e hazır operator rehberi.

[← English README](README.md) · [Release checklist](docs/RELEASE_CHECKLIST.md) · [Araştırma notları](docs/RESEARCH_NOTES.md) · [Public readiness](docs/PUBLIC_READINESS.md)

## 🎯 Bu Repo Ne?

Bu repo, Codex CLI ile çalışan kişiler ve ekipler için pratik bir başvuru setidir. Hangi bilginin promptta kalacağını, hangisinin `AGENTS.md` dosyasına taşınacağını, ne zaman skill yazılacağını, MCP'nin nerede anlamlı olduğunu, hook'ların nasıl güvenli tutulacağını ve release öncesi nelerin doğrulanacağını tek yerde toplar.

Bu bir uygulama kod tabanı değildir. Dokümantasyon, config, örnek workflow, hook ve release disiplini reposudur.

## 🧭 Enterprise Starter ile farkı ne?

Bu repo, `codex-enterprise-starter` ile çakışmaz; onu tamamlar.

| Repo | Görev |
|---|---|
| `codex-enterprise-starter` | Kurulabilir başlangıç paketi; hazır Codex çalışma düzeni verir |
| `codex-cli-best-practice` | Companion handbook; bu düzenin nasıl işletileceğini, genişletileceğini ve güvenli yayınlanacağını anlatır |

Kısaca: starter kurulum içindir, bu repo doğru kullanım ve bakım içindir.

## ⚡ İlk 5 Dakika

```bash
npm run validate
codex
```

Demo prompt:

```text
Istanbul icin guncel hava durumunu Celsius olarak getir ve repo icindeki SVG hava kartini olustur.
```

Beklenen çıktı:

- `orchestration-workflow/weather.svg`
- `orchestration-workflow/output.md` (üretilen dosya olduğu için ignore edilir)

## 🧩 Codex Yüzeyleri

| Yüzey | Ne zaman kullanılır? | Bu repodaki örnek |
|---|---|---|
| Prompt | Tek seferlik istek ve sınırlar | Güncel kullanıcı isteği |
| `AGENTS.md` | Kalıcı repo kuralları, doğrulama, güvenlik çizgileri | [AGENTS.md](AGENTS.md) |
| `.codex/config.toml` | Project defaults, sandbox, approval, MCP, hook ve agent kayıtları | [.codex/config.toml](.codex/config.toml) |
| Skill | Tekrar kullanılacak iş akışı | [.agents/skills/weather-svg-creator/SKILL.md](.agents/skills/weather-svg-creator/SKILL.md) |
| Subagent | Açıkça çağrılan uzman rol | [.codex/agents/weather-agent.toml](.codex/agents/weather-agent.toml) |
| MCP | Güncel doküman, dış bağlam, private tool | [best-practice/codex-mcp.md](best-practice/codex-mcp.md) |
| Hook | İncelenmiş lifecycle otomasyonu | [best-practice/codex-hooks.md](best-practice/codex-hooks.md) |
| Release checklist | Yayına çıkmadan önceki kapılar | [docs/RELEASE_CHECKLIST.md](docs/RELEASE_CHECKLIST.md) |

## 📁 Repo Haritası

| Alan | Yol | Amaç |
|---|---|---|
| Karşılama | `README.md` | İngilizce ana sayfa ve Türkçe köprü |
| Türkçe rehber | `README.tr.md` | Türkçe onboarding ve bakım akışı |
| Agent kuralları | `AGENTS.md`, `CLAUDE.md` | Codex ve Claude uyumlu çalışma kuralları |
| Codex config | `.codex/` | Profiller, agent, hook ve hook scriptleri |
| Skill'ler | `.agents/skills/` | Tekrar kullanılabilir Codex iş akışları |
| Best practice | `best-practice/` | Her Codex yüzeyi için kısa rehber |
| Örnekler | `examples/` | Profil ve CI örnekleri |
| Dokümanlar | `docs/` | SSS, roadmap, araştırma, release ve public readiness |
| Validasyon | `scripts/validate-docs.mjs` | Bağımlılıksız repo kontrolü |
| GitHub | `.github/` | Workflow, issue template, PR template ve release formu |

## 🛡️ Güvenlik İlkeleri

- Token, cookie, private key, lokal auth dosyası ve environment dump commitlenmez.
- Kişisel override dosyaları repo dışında veya ignore edilen dosyalarda kalır.
- Hook güvenlik duvarı değildir; sadece yardımcı guardrail'dir.
- Sandbox ve approval ayrı kontrollerdir, birbirinin yerine geçmez.
- `danger-full-access` ve `approval_policy = "never"` birlikte public örneklerde normal varsayılan gibi sunulmaz.
- Release öncesi `npm run validate`, `git diff --check` ve Gitleaks çalıştırılır.

## ✅ Doğrulama

```bash
npm run validate
git diff --check
gitleaks detect --redact --no-banner --verbose
```

Validator şunları kontrol eder:

- Zorunlu dosyalar var mı?
- README fork kimliğini ve TR/EN köprülerini taşıyor mu?
- Markdown iç linkleri çözülüyor mu?
- JSON dosyaları parse ediliyor mu?
- Mojibake, lokal path, stale Codex key veya hook log sızıntısı var mı?

## 🚢 Release Akışı

1. `docs/RELEASE_CHECKLIST.md` dosyasını uygula.
2. `CHANGELOG.md` ve ilgili `docs/RELEASE_NOTES_*.md` dosyasını güncelle.
3. Validation, diff check ve secret scan'i çalıştır.
4. Sadece amaçlanan dosyaları stage et.
5. Commit, push, tag ve GitHub Release adımlarını aynı tag üzerinden doğrula.
6. Public README, release sayfası, Actions sonucu ve linkleri tarayıcıdan kontrol et.

## 🤝 Katkı

Katkı yaparken yeni iddiaları kaynaksız ekleme. Codex davranışı sürüme göre değişebildiği için resmi OpenAI/Codex dokümanlarını veya repo içindeki güncel araştırma notlarını esas al. Türkçe ve İngilizce rehberlerin niyeti aynı kalmalı; birebir çeviri şart değil, kullanıcı akışı aynı olmalı.

## ⚖️ Lisans

Bu bağımsız fork sürümü upstream MIT lisans çizgisini korur. Fork'a özgü rehber, Türkçe içerik, validasyon, güvenlik ve release dokümanları bu repoda sürdürülür.
