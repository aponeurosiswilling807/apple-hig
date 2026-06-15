#!/usr/bin/env node
// apple-hig — install the Apple HIG ruleset into your project for any AI coding tool.
// Generates each tool's rules file from the single canonical ruleset (integrations/apple-hig.md).
//
//   node scripts/install-rules.mjs --list
//   node scripts/install-rules.mjs --tool cursor
//   node scripts/install-rules.mjs --tool agents,cursor,copilot
//   node scripts/install-rules.mjs --tool all --vendor
//   npx github:elevatormusic/apple-hig --tool cursor      (via the package bin)
//
// Flags: --tool <slug|csv|all>  --dir <project dir>  --vendor  --force  --list  --help

import { readFileSync, writeFileSync, mkdirSync, existsSync, cpSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO = resolve(HERE, '..');
const CANONICAL = join(REPO, 'integrations', 'apple-hig.md');
const GUIDELINES = join(REPO, 'skills', 'apple-hig', 'guidelines');
const REFERENCES = join(REPO, 'skills', 'apple-hig', 'references');
const URL = 'https://github.com/elevatormusic/apple-hig';

// shared = the file may hold unrelated content, so append/refresh a delimited block instead of overwriting.
// dedicated = the file is ours (apple-hig.*), so write it whole.
const TOOLS = {
  agents:   { name: 'AGENTS.md (Codex, Zed, Amp, goose, opencode, Jules, Warp, Factory, Kilo Code, RooCode, …)', path: 'AGENTS.md', shared: true,  frontmatter: '' },
  cursor:   { name: 'Cursor',                 path: '.cursor/rules/apple-hig.mdc',                  shared: false, frontmatter: '---\ndescription: Apple Human Interface Guidelines (HIG) — apply Apple-platform UI/UX conventions\nglobs:\nalwaysApply: true\n---\n\n' },
  windsurf: { name: 'Windsurf',               path: '.windsurf/rules/apple-hig.md',                shared: false, frontmatter: '---\ntrigger: always_on\ndescription: Apple Human Interface Guidelines (HIG) ruleset for Apple-platform UI.\n---\n\n' },
  copilot:  { name: 'GitHub Copilot',         path: '.github/copilot-instructions.md',             shared: true,  frontmatter: '', note: 'Repo-wide, always applied. For path-scoping instead, use .github/instructions/apple-hig.instructions.md with an `applyTo` glob; keep "chat.includeApplyingInstructions" enabled in VS Code.' },
  cline:    { name: 'Cline',                  path: '.clinerules/apple-hig.md',                    shared: false, frontmatter: '' },
  roo:      { name: 'Roo Code',               path: '.roo/rules/apple-hig.md',                     shared: false, frontmatter: '' },
  aider:    { name: 'Aider',                  path: 'CONVENTIONS.md',                              shared: true,  frontmatter: '', note: 'Aider does NOT auto-load it. Add `read: CONVENTIONS.md` to .aider.conf.yml, or run `aider --read CONVENTIONS.md`.' },
  gemini:   { name: 'Gemini CLI',             path: 'GEMINI.md',                                   shared: true,  frontmatter: '' },
  amazonq:  { name: 'Amazon Q Developer',     path: '.amazonq/rules/apple-hig.md',                 shared: false, frontmatter: '' },
  continue: { name: 'Continue',               path: '.continue/rules/apple-hig.md',                shared: false, frontmatter: '---\nname: Apple HIG\ndescription: Apple Human Interface Guidelines for UI design and implementation\nalwaysApply: true\n---\n\n' },
  junie:    { name: 'JetBrains Junie',        path: '.junie/guidelines.md',                        shared: true,  frontmatter: '', note: 'For JetBrains AI Assistant (not Junie), use .aiassistant/rules/apple-hig.md instead.' },
  claude:   { name: 'Claude Code (CLAUDE.md fallback)', path: 'CLAUDE.md',                         shared: true,  frontmatter: '', note: 'Prefer the native plugin (see README); use this only to load the rules as plain memory.' },
};

function parseArgs(argv) {
  const a = { tools: [], dir: process.cwd(), vendor: false, force: false, list: false, help: false };
  for (let i = 0; i < argv.length; i++) {
    const x = argv[i];
    if (x === '--tool' || x === '-t') a.tools.push(...String(argv[++i] || '').split(',').map(s => s.trim()).filter(Boolean));
    else if (x === '--dir' || x === '-d') a.dir = resolve(String(argv[++i] || '.'));
    else if (x === '--vendor') a.vendor = true;
    else if (x === '--force' || x === '-f') a.force = true;
    else if (x === '--list' || x === '-l') a.list = true;
    else if (x === '--help' || x === '-h') a.help = true;
  }
  return a;
}

const usage = () => {
  console.log(`apple-hig — install the Apple HIG ruleset for your AI coding tool\n
Usage: apple-hig --tool <slug|csv|all> [--dir <project>] [--vendor] [--force]\n
Tools:`);
  for (const [slug, t] of Object.entries(TOOLS)) console.log(`  ${slug.padEnd(9)} ${t.path.padEnd(40)} ${t.name}`);
  console.log(`\nExamples:
  apple-hig --tool cursor
  apple-hig --tool agents,copilot,windsurf
  apple-hig --tool all --vendor      # also copy the HIG guideline files into ./apple-hig/
\n--vendor copies skills/apple-hig/guidelines into <project>/apple-hig so the assistant can read the
full, sourced specs. --force overwrites an existing dedicated rules file.`);
};

function ensureDir(p) { mkdirSync(dirname(p), { recursive: true }); }

function writeShared(file, body) {
  const begin = `<!-- BEGIN apple-hig (${URL}) -->`;
  const end = '<!-- END apple-hig -->';
  let existing = existsSync(file) ? readFileSync(file, 'utf8') : '';
  existing = existing.replace(new RegExp(`\\n*${begin.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[\\s\\S]*?${end}\\n*`, 'g'), '\n').trim();
  const block = `${begin}\n${body.trim()}\n${end}\n`;
  const out = existing ? `${existing}\n\n${block}` : block;
  ensureDir(file);
  writeFileSync(file, out);
  return existing.length > 0 ? 'updated block in' : 'wrote';
}

function writeDedicated(file, frontmatter, body, force) {
  if (existsSync(file) && !force) return 'exists (use --force to overwrite):';
  ensureDir(file);
  writeFileSync(file, `${frontmatter}${body.trim()}\n`);
  return 'wrote';
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) { usage(); return; }
  if (args.list || args.tools.length === 0) { usage(); if (!args.list) console.log('\nNothing installed — pass --tool <slug|all>.'); return; }

  if (!existsSync(CANONICAL)) { console.error('Cannot find the canonical ruleset at ' + CANONICAL); process.exit(1); }
  const body = readFileSync(CANONICAL, 'utf8');

  let slugs = args.tools.includes('all') ? Object.keys(TOOLS) : args.tools;
  const unknown = slugs.filter(s => !TOOLS[s]);
  if (unknown.length) { console.error('Unknown tool(s): ' + unknown.join(', ') + '\nRun with --list to see valid slugs.'); process.exit(1); }

  console.log(`Installing apple-hig rules into ${args.dir}\n`);
  for (const slug of slugs) {
    const t = TOOLS[slug];
    const file = join(args.dir, t.path);
    const action = t.shared ? writeShared(file, body) : writeDedicated(file, t.frontmatter, body, args.force);
    console.log(`  ${slug.padEnd(9)} ${action} ${t.path}`);
    if (t.note) console.log(`            note: ${t.note}`);
  }

  if (args.vendor) {
    const dest = join(args.dir, 'apple-hig');
    cpSync(GUIDELINES, join(dest, 'guidelines'), { recursive: true });
    cpSync(REFERENCES, join(dest, 'references'), { recursive: true });
    console.log(`\n  vendored guideline files -> ${join('apple-hig', 'guidelines')} (+ references)`);
  }

  console.log(`\nDone. Start a new session in your tool so it picks up the rules.`);
}

main();
