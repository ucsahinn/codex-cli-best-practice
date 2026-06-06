# codex-cli-best-practice

vibe coding'den agentic engineering'e — pratik Codex'i keskinleştirir.

[English](README.md) · [Türkçe](README.tr.md)

> [@ucsahinn](https://github.com/ucsahinn) tarafından bakımı yapılan fork. Upstream: [shanraisshan/codex-cli-best-practice](https://github.com/shanraisshan/codex-cli-best-practice).

Bu repo, **Codex CLI** ve **Claude Code** için güncel bir best-practice referansıdır. Geleneksel bir uygulama değil; yapılandırma, ajan, skill, hook, MCP ve workflow desenlerini gösteren dokümantasyon + örnek konfigürasyon deposudur.

## Ne Gösteriyor?

| Sistem | Konum | Amaç |
|---|---|---|
| Config | `.codex/config.toml` | Proje kapsamlı model, sandbox, approval, MCP, feature flag, hook ve ajan ayarları |
| Agents | `.codex/agents/*.toml` | Belirli rollere ayrılmış Codex ajanları |
| Skills | `.agents/skills/<name>/SKILL.md` | Tekrarlanabilir görev akışları ve domain talimatları |
| Hooks | `.codex/hooks.json` + `.codex/hooks/scripts/` | Session, prompt ve tool lifecycle noktalarında deterministik otomasyon |
| Guides | `best-practice/` | Config, AGENTS.md, skills, subagents, hooks, MCP, marketplace ve memory rehberleri |
| Workflow | `orchestration-workflow/` | Agent → Skill deseninin hava durumu SVG örneği |

## Hızlı Kullanım

```bash
codex
```

Ardından şu prompt'u ver:

```text
Fetch the current weather for Dubai in Celsius and create the SVG weather card output using the repo.
```

Beklenen akış:

```text
User Prompt
  → weather-agent Open-Meteo'dan sıcaklığı alır
  → $weather-svg-creator SVG kartı üretir
  → orchestration-workflow/weather.svg yazılır
  → orchestration-workflow/output.md yazılır
```

## Güncel Codex Notları

- Profile ayarları artık `.codex/config.toml` içinde `[profiles.<name>]` olarak tutulmaz.
- Profile dosyaları `$CODEX_HOME/<profile>.config.toml` konumunda durur ve `codex --profile <name>` ile seçilir.
- Proje config'i `.codex/config.toml`, güvenilen projelerde yüklenir; provider/auth/telemetry/profile seçimi gibi makineye özel anahtarlar proje config'inde yok sayılır.
- Hooks için kanonik feature flag `[features].hooks = true`; eski `codex_hooks` adı deprecated alias olarak kalmıştır.
- JSON hook config'lerinde Windows için `commandWindows` kullanılabilir. Bu repo Windows'ta `python`, POSIX sistemlerde `python3` kullanır.
- Skills custom slash command değildir; `/skills`, `$skill-name` veya description match ile tetiklenir.

## Profile Örnekleri

Örnek dosyalar `examples/profiles/` altındadır. Gerçek kullanım için ilgili dosyayı `$CODEX_HOME` içine kopyala:

```bash
# macOS / Linux
cp examples/profiles/development.toml ~/.codex/development.config.toml
codex --profile development
```

PowerShell:

```powershell
Copy-Item .\examples\profiles\development.toml $env:USERPROFILE\.codex\development.config.toml
codex --profile development
```

Önerilen kullanım:

| Profile | Model | Sandbox | Approval | Kullanım |
|---|---|---|---|---|
| `development` | `gpt-5.4-mini` | `workspace-write` | `on-request` | Günlük geliştirme |
| `conservative` | `gpt-5.4-mini` | `read-only` | `untrusted` | Yeni repo, audit, review |
| `trusted-project` | `gpt-5.5` | `danger-full-access` | `never` | Sadece tamamen güvenilen, branch ile korunan otomasyon |

## Hook Sorun Giderme

Windows'ta `python3` Microsoft Store alias'ı bazen hook'ları `exit code 1` ile düşürür. Bu fork'ta `.codex/hooks.json` içinde `commandWindows` alanları `python` kullanır.

Elle test:

```powershell
python .codex/hooks/scripts/hooks.py --hook UserPromptSubmit
python .codex/hooks/scripts/hooks.py --hook Stop
python .codex/hooks/scripts/hooks.py --hook SessionStart
```

JSON doğrulama:

```powershell
python -m json.tool .codex/hooks.json
```

## Repo Bakım Standardı

- Önce `rg` / `rg --files` ile incele.
- Gereksiz yerleri değil, kök sebebi düzelt.
- Dokümanları resmi Codex docs ile uyumlu tut.
- Hook, config ve skill örneklerini çalışır durumda bırak.
- Commit/push öncesi `git status --short`, explicit stage, `git diff --cached` ve secret scan/pre-commit kontrolü yap.
- Bu repo özelinde **one file, one commit** kuralını koru.

## Fork Kapsamı

Bu fork, upstream emeğini açıkça kredilendirir ama orijinal maintainer'a ait kişisel podcast, sponsor, subscribe ve kişisel marka bölümlerini taşımaz.

Bu fork'un farkı:

- Windows-first Codex hook düzeltmeleri
- Türkçe + İngilizce kullanım dokümanları
- Codex `0.134.0+` profile-file formatına uyum
- Kopyalanabilir profile ve CI örnekleri
- Pratik Agent → Skill workflow anlatımı

## Kaynaklar

- [Codex Config Basics](https://developers.openai.com/codex/config-basic)
- [Codex Advanced Config](https://developers.openai.com/codex/config-advanced)
- [Codex Config Reference](https://developers.openai.com/codex/config-reference)
- [Codex Hooks](https://developers.openai.com/codex/hooks)
- [Codex Skills](https://developers.openai.com/codex/skills)
- [Codex Models](https://developers.openai.com/codex/models)
- [Codex Speed](https://developers.openai.com/codex/speed)
