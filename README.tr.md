# Codex CLI Operator Handbook - Turkce Rehber

Bu dosya, repoyu Turkce kullanan ekipler icin hazirlanan pratik baslangic rehberidir. Ana sayfa iki dilli kisa giris sunar; bu dosya ise karar alma, dogrulama ve release akislarini daha acik anlatir.

## 🎯 Amac

Bu fork artik sadece upstream repo kopyasi gibi davranmaz. Hedef:

- Codex CLI yuzeylerini anlasilir hale getirmek.
- `AGENTS.md`, skill, agent, config, MCP, hook ve release kararlarini ayirmak.
- Turkce ve Ingilizce dokumantasyonu ayni kalite seviyesinde tutmak.
- Her degisikligin dogrulanabilir olmasini saglamak.
- Release oncesi kontrol listesini repo icinde tutmak.

## ⚡ Ilk Calistirma

```bash
npm run validate
codex --profile development
```

Eger `npm run validate` hata verirse once linkleri, zorunlu dosyalari ve README kimligini duzelt.

## 🧩 Codex Yuzeyleri

| Yuzey | Ne zaman kullanilir? | Dosya |
|---|---|---|
| Prompt | Tek seferlik talimat | Aktif konusma |
| `AGENTS.md` | Kalici repo kurallari | `AGENTS.md` |
| Config | Model, sandbox, approval, MCP | `.codex/config.toml` |
| Skill | Tekrar kullanilabilir is akisi | `.agents/skills/<name>/SKILL.md` |
| Agent | Uzmanlasmis rol | `.codex/agents/<name>.toml` |
| MCP | Canli veya versiyon hassas dis kaynak | `.codex/config.toml` |
| Hook | Yasam dongusu otomasyonu | `.codex/hooks.json` |
| Release checklist | Yayin kapilari | `docs/RELEASE_CHECKLIST.md` |
| Release notlari | Ilk release metni | `docs/RELEASE_NOTES_v0.1.0.md` |
| SSS | Sik sorulan kararlar | `docs/FAQ.md` |
| Katki | Degisiklik kurallari | `CONTRIBUTING.md` |
| Guvenlik | Secret ve disclosure notlari | `SECURITY.md` |
| Roadmap | Siradaki isler | `docs/ROADMAP.md` |

## ⚙️ Onerilen Calisma Akisi

1. `rg` ile mevcut dosyalari ve tekrar eden metinleri ara.
2. Davranisin hangi Codex yuzeyinde yasamasi gerektigini sec.
3. Kucuk ama tam bir degisiklik yap.
4. `npm run validate` calistir.
5. Diff'i oku.
6. Commit ve release icin checklist kullan.

## 🧪 Agent-Skill Demo

Bu repodaki demo Istanbul hava durumunu kullanir:

```text
Kullanici promptu
  -> weather-agent
    -> Open-Meteo ile Istanbul sicakligi
    -> weather-svg-creator skill
      -> weather.svg
      -> output.md
```

Deneme promptu:

```text
Istanbul icin guncel hava durumunu Celsius olarak getir ve repo icindeki SVG hava kartini olustur.
```

## 🛠️ Config Profilleri

`.codex/config.toml` icindeki profiller:

| Profil | Amac |
|---|---|
| `conservative` | Okuma, denetim, riskli repo inceleme |
| `development` | Gunluk yazma ve dokuman duzenleme |
| `deep-research` | Daha fazla akil yurutme isteyen arastirma |
| `trusted` | Sadece guvenli, sinirli ve bilincli kullan |
| `ci` | Non-interactive kontrol |
| `review` | Diff ve PR inceleme |

Model erisimi hesaba gore degisebilir. Eger profil modelini calistiramiyorsan ayni profilde sadece `model` satirini kendi erisimin olan modelle degistir.

## 🚀 Release Hazirligi

Bu klasorde `.git` yoksa push ve release calismaz. Gercek fork checkout'una gecmeden yayin adimina gecme.

Minimum lokal kontrol:

```bash
npm run validate
git status --short
git diff -- README.md README.tr.md docs .codex .agents .github scripts package.json CHANGELOG.md
```

Tag ornegi:

```bash
git tag v0.1.0
git push origin main --tags
```

GitHub Release metni icin [CHANGELOG.md](CHANGELOG.md) ve [docs/RELEASE_CHECKLIST.md](docs/RELEASE_CHECKLIST.md) kullan.

## 🧭 Bakim Kurallari

- Upstream sponsor, star, maintainer veya kisisel linklerini karşılama sayfasina geri ekleme.
- Dinamik Codex iddialarini resmi manual veya OpenAI docs ile yenile.
- Skill aciklamalarini ozet gibi degil, tetikleyici kosul gibi yaz.
- `AGENTS.md` dosyasini kisa tut.
- Release oncesinde validator calismadan tag olusturma.
- Katki, guvenlik ve release belgelerini README ile birlikte guncelle.

## ⚖️ Lisans

Bu fork bagimsiz dokumantasyon ve operator rehberi katmani ekler. Orijinal MIT lisans soyu [LICENSE](LICENSE) dosyasinda korunur.
