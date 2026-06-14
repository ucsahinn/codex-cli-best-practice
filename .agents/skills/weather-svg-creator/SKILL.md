---
name: weather-svg-creator
description: Use when weather data has already been fetched and Codex must render orchestration-workflow/weather.svg plus orchestration-workflow/output.md.
argument-hint: "[city] [temperature] [unit]"
---

# Weather SVG Creator

Create the visual output for the repository's agent-to-skill demo.

## Inputs

Use the values already provided by the calling agent:

- City name
- Temperature value
- Unit: Celsius or Fahrenheit
- Fetch timestamp when available

Do not call the weather API yourself.

## Output Files

Write two files:

- `orchestration-workflow/weather.svg`
- `orchestration-workflow/output.md`

Create `orchestration-workflow/` if it does not exist. Overwrite old demo output.

## SVG Requirements

Use a clean, readable 400 by 200 SVG card:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200" width="400" height="200">
  <rect width="400" height="200" rx="10" fill="#101827"/>
  <text x="200" y="48" text-anchor="middle" fill="#dbeafe" font-family="system-ui" font-size="16">[City Name]</text>
  <text x="200" y="112" text-anchor="middle" fill="#ffffff" font-family="system-ui" font-size="50" font-weight="700">[value]°[C/F]</text>
  <text x="200" y="150" text-anchor="middle" fill="#93c5fd" font-family="system-ui" font-size="12">Codex Agent to Skill Demo</text>
  <text x="200" y="180" text-anchor="middle" fill="#64748b" font-family="system-ui" font-size="10">Weather data from Open-Meteo</text>
</svg>
```

## Markdown Requirements

Write `orchestration-workflow/output.md`:

```markdown
# Weather Report

![Weather Card](weather.svg)

**Location:** [City Name]
**Temperature:** [value]°[C/F]
**Fetched At:** [ISO 8601 timestamp]

Data source: [Open-Meteo](https://open-meteo.com/)
```

## Quality Bar

- Preserve the exact temperature value from the agent.
- Use `°C` for Celsius and `°F` for Fahrenheit.
- Keep text inside the SVG readable.
- Mention both output paths in the final response.
