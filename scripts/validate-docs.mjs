import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const requiredFiles = [
  "README.md",
  "README.de.md",
  "README.es.md",
  "README.fr.md",
  "README.pt-BR.md",
  "README.tr.md",
  "AGENTS.md",
  "CLAUDE.md",
  "CONTRIBUTING.md",
  "SECURITY.md",
  "CHANGELOG.md",
  ".github/PULL_REQUEST_TEMPLATE.md",
  ".github/release.yml",
  ".github/workflows/docs-guard.yml",
  "docs/FAQ.md",
  "docs/ROADMAP.md",
  "docs/PUBLIC_READINESS.md",
  "docs/AGENT_SECURITY.md",
  "docs/WINDOWS.md",
  "docs/RELEASE_NOTES_v0.1.0.md",
  "docs/RELEASE_NOTES_v0.1.1.md",
  "docs/RELEASE_NOTES_v0.1.2.md",
  "docs/RELEASE_NOTES_v0.1.3.md",
  "docs/RELEASE_NOTES_v0.1.4.md",
  "docs/RESEARCH_NOTES.md",
  "docs/RELEASE_CHECKLIST.md",
  ".codex/config.toml",
  ".codex/hooks.json",
  ".codex/agents/weather-agent.toml",
  ".agents/skills/weather-svg-creator/SKILL.md",
];

const ignoredDirectories = new Set([
  ".git",
  ".serena",
  ".tmp",
  "node_modules",
  "__pycache__",
]);

const failures = [];

function toRelative(absolute) {
  return path.relative(root, absolute).replaceAll(path.sep, "/");
}

function exists(relativePath) {
  return fs.existsSync(path.join(root, relativePath));
}

function isInsideRoot(target) {
  const relative = path.relative(root, target);
  return relative === "" || (!relative.startsWith("..") && !path.isAbsolute(relative));
}

function listFiles(directory, predicate) {
  const entries = fs.readdirSync(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const absolute = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      if (ignoredDirectories.has(entry.name)) {
        continue;
      }
      files.push(...listFiles(absolute, predicate));
      continue;
    }

    if (entry.isFile() && predicate(entry.name, absolute)) {
      files.push(toRelative(absolute));
    }
  }

  return files;
}

for (const file of requiredFiles) {
  if (!exists(file)) {
    failures.push(`Missing required file: ${file}`);
  }
}

const allTextFiles = listFiles(root, (name) =>
  /\.(md|json|toml|yml|yaml|js|svg)$/i.test(name)
);

const markdownFiles = allTextFiles.filter((file) => file.endsWith(".md"));
const jsonFiles = allTextFiles.filter((file) => file.endsWith(".json"));

const readme = fs.readFileSync(path.join(root, "README.md"), "utf8");

for (const marker of ["#english", "#turkce", "README.tr.md", "docs/RELEASE_CHECKLIST.md"]) {
  if (!readme.includes(marker)) {
    failures.push(`README.md is missing marker: ${marker}`);
  }
}

const blockedMarkers = [
  "shanraisshan/codex-cli-best-practice",
  "Sponsor My Work",
  "buy.polar.sh",
  "codex-cli-best-practice-main",
  "C:\\Users\\ulasc",
  "features.codex_hooks",
  ".codex/hooks/logs/hooks-log.jsonl",
  "WebFetch(domain:*)",
  "Bash(*)",
  "Edit(*)",
  "Write(*)",
  "NotebookEdit(*)",
];

const blockedLocalizedMarkers = [
  "Public handbook for operating Codex CLI",
  "A practical Codex CLI operating guide.",
  "A repository of best-practice notes",
  "A public reference for Windows-friendly Codex setup decisions.",
  "A validation-backed docs repo",
  "Not the official Codex manual.",
  "Need durable repo instructions",
  "Need local model, sandbox or MCP settings",
  "Need reusable workflow",
  "Need external live context",
  "Need reviewed lifecycle automation",
  "Public-safe rule:",
  "Keep this localized README aligned",
  "When a localized file cannot be updated fully",
];

const mojibakeMarkers = [
  "Â",
  "Ã",
  "â€™",
  "â€œ",
  "â€",
  "ðŸ",
  "ÅŸ",
  "Ä±",
  "ÄŸ",
];

for (const file of allTextFiles) {
  const content = fs.readFileSync(path.join(root, file), "utf8");

  for (const marker of blockedMarkers) {
    if (content.includes(marker)) {
      failures.push(`${file} contains blocked marker: ${marker}`);
    }
  }

  for (const marker of mojibakeMarkers) {
    if (content.includes(marker)) {
      failures.push(`${file} contains likely mojibake marker: ${marker}`);
    }
  }
}

for (const file of ["README.de.md", "README.es.md", "README.fr.md", "README.pt-BR.md"]) {
  const content = fs.readFileSync(path.join(root, file), "utf8");
  for (const marker of blockedLocalizedMarkers) {
    if (content.includes(marker)) {
      failures.push(`${file} contains untranslated localized README marker: ${marker}`);
    }
  }
}

for (const file of jsonFiles) {
  try {
    JSON.parse(fs.readFileSync(path.join(root, file), "utf8"));
  } catch (error) {
    failures.push(`${file} is not valid JSON: ${error.message}`);
  }
}

function normalizeLocalReference(href) {
  let normalized = href.trim();

  if (!normalized) {
    return null;
  }

  if (/^(https?:|mailto:)/i.test(normalized)) {
    return null;
  }

  if (normalized.startsWith("<") && normalized.endsWith(">")) {
    normalized = normalized.slice(1, -1);
  }

  const [withoutFragment, fragment = ""] = normalized.split("#");
  normalized = withoutFragment;
  normalized = normalized.split("?")[0];

  return {
    pathPart: normalized ? decodeURIComponent(normalized) : "",
    fragment: fragment ? decodeURIComponent(fragment) : "",
  };
}

const markdownLinkPattern = /!?\[[^\]]*]\(([^)]+)\)/g;
const htmlReferencePattern = /\b(?:href|src)=["']([^"']+)["']/g;

function githubLikeSlug(text) {
  return text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/<[^>]+>/g, "")
    .replace(/[^\p{Letter}\p{Number}\s-]/gu, "")
    .trim()
    .replace(/\s+/g, "-");
}

function hasFragmentTarget(target, fragment) {
  if (!fragment) {
    return true;
  }

  const content = fs.readFileSync(target, "utf8");
  if (
    content.includes(`id="${fragment}"`) ||
    content.includes(`id='${fragment}'`) ||
    content.includes(`name="${fragment}"`) ||
    content.includes(`name='${fragment}'`)
  ) {
    return true;
  }

  const headingPattern = /^#{1,6}\s+(.+)$/gm;
  let match;
  while ((match = headingPattern.exec(content)) !== null) {
    if (githubLikeSlug(match[1]) === fragment) {
      return true;
    }
  }

  return false;
}

function checkLocalReference(file, directory, rawHref) {
  const reference = normalizeLocalReference(rawHref);
  if (!reference) {
    return;
  }

  const target = reference.pathPart
    ? path.resolve(directory, reference.pathPart)
    : path.join(root, file);

  if (!isInsideRoot(target) || !fs.existsSync(target)) {
    failures.push(`${file} has unresolved local reference: ${rawHref}`);
    return;
  }

  if (reference.fragment && !hasFragmentTarget(target, reference.fragment)) {
    failures.push(`${file} has unresolved local fragment: ${rawHref}`);
  }
}

for (const file of markdownFiles) {
  const absolute = path.join(root, file);
  const content = fs.readFileSync(absolute, "utf8").replace(/```[\s\S]*?```/g, "");
  const directory = path.dirname(absolute);
  let match;

  while ((match = markdownLinkPattern.exec(content)) !== null) {
    checkLocalReference(file, directory, match[1]);
  }

  while ((match = htmlReferencePattern.exec(content)) !== null) {
    checkLocalReference(file, directory, match[1]);
  }
}

const hookLogDirectory = path.join(root, ".codex", "hooks", "logs");
if (fs.existsSync(hookLogDirectory)) {
  for (const file of fs.readdirSync(hookLogDirectory)) {
    if (file !== ".gitkeep") {
      failures.push(`Generated hook log must not be committed: .codex/hooks/logs/${file}`);
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
