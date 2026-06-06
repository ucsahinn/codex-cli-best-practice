import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const requiredFiles = [
  "README.md",
  "README.tr.md",
  "AGENTS.md",
  "CLAUDE.md",
  "CONTRIBUTING.md",
  "SECURITY.md",
  "CHANGELOG.md",
  "docs/ROADMAP.md",
  "docs/RESEARCH_NOTES.md",
  "docs/RELEASE_CHECKLIST.md",
  ".codex/config.toml",
  ".codex/agents/weather-agent.toml",
  ".agents/skills/weather-svg-creator/SKILL.md",
];

const failures = [];

function exists(relativePath) {
  return fs.existsSync(path.join(root, relativePath));
}

for (const file of requiredFiles) {
  if (!exists(file)) {
    failures.push(`Missing required file: ${file}`);
  }
}

const readmePath = path.join(root, "README.md");
const readme = fs.readFileSync(readmePath, "utf8");

for (const marker of ["#english", "#turkce", "README.tr.md", "docs/RELEASE_CHECKLIST.md"]) {
  if (!readme.includes(marker)) {
    failures.push(`README.md is missing marker: ${marker}`);
  }
}

const blockedReadmeMarkers = [
  "shanraisshan/codex-cli-best-practice",
  "Sponsor My Work",
  "buy.polar.sh",
];

for (const marker of blockedReadmeMarkers) {
  if (readme.includes(marker)) {
    failures.push(`README.md still contains upstream marker: ${marker}`);
  }
}

function listMarkdownFiles(directory) {
  const entries = fs.readdirSync(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const absolute = path.join(directory, entry.name);
    const relative = path.relative(root, absolute).replaceAll(path.sep, "/");

    if (entry.isDirectory()) {
      if ([".git", "node_modules", ".serena"].includes(entry.name)) {
        continue;
      }
      files.push(...listMarkdownFiles(absolute));
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      files.push(relative);
    }
  }

  return files;
}

function normalizeLocalHref(href) {
  let normalized = href.trim();

  if (!normalized || normalized.startsWith("#")) {
    return null;
  }

  if (/^(https?:|mailto:)/i.test(normalized)) {
    return null;
  }

  if (normalized.startsWith("<") && normalized.endsWith(">")) {
    normalized = normalized.slice(1, -1);
  }

  normalized = normalized.split("#")[0];
  normalized = normalized.split("?")[0];

  if (!normalized) {
    return null;
  }

  return decodeURIComponent(normalized);
}

const markdownLinkPattern = /!?\[[^\]]*]\(([^)]+)\)/g;

for (const file of listMarkdownFiles(root)) {
  const absolute = path.join(root, file);
  const content = fs.readFileSync(absolute, "utf8").replace(/```[\s\S]*?```/g, "");
  const directory = path.dirname(absolute);
  let match;

  while ((match = markdownLinkPattern.exec(content)) !== null) {
    const href = normalizeLocalHref(match[1]);
    if (!href) {
      continue;
    }

    const target = path.resolve(directory, href);
    if (!target.startsWith(root) || !fs.existsSync(target)) {
      failures.push(`${file} has unresolved local link: ${match[1]}`);
    }
  }
}

if (failures.length > 0) {
  console.error("Documentation validation failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("Documentation validation passed.");
