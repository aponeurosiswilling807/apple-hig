#!/usr/bin/env node
/* Regenerates docs/loc.svg — a lines-of-code chart for the README.
 *
 * The repo is a small engine wrapped around a large bundled reference, so the
 * chart shows that split explicitly: "plugin code" (markup/logic/config) vs the
 * "Apple HIG reference" (the on-disk Markdown guideline corpus). Binary assets
 * (images, fonts) are excluded — counting their bytes as "lines" is meaningless.
 *
 * No dependencies: it walks the git-tracked files and emits an SVG with a
 * prefers-color-scheme block so it looks right in light and dark README views.
 * The CI workflow (.github/workflows/loc.yml) runs this and commits the result.
 *
 * Usage: node scripts/loc-graph.mjs        # writes docs/loc.svg
 *        node scripts/loc-graph.mjs --check # exit 1 if the committed svg is stale
 */
import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join, dirname } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(ROOT, 'docs', 'loc.svg');

// extension -> { lang, group, color }. group: 'reference' (the HIG corpus) or
// 'code' (everything that makes the plugin run/render). Anything not listed and
// not a known binary is counted as "Other" code; known binaries are skipped.
const LANGS = {
  '.md': { lang: 'Markdown', group: 'reference', color: '#4a7fd6' },
  '.html': { lang: 'HTML', group: 'code', color: '#e34c26' },
  '.htm': { lang: 'HTML', group: 'code', color: '#e34c26' },
  '.css': { lang: 'CSS', group: 'code', color: '#9b6dd6' },
  '.mjs': { lang: 'JavaScript', group: 'code', color: '#f1c40f' },
  '.js': { lang: 'JavaScript', group: 'code', color: '#f1c40f' },
  '.swift': { lang: 'Swift', group: 'code', color: '#f05138' },
  '.json': { lang: 'JSON', group: 'code', color: '#7fb86b' },
  '.yml': { lang: 'YAML', group: 'code', color: '#2aa198' },
  '.yaml': { lang: 'YAML', group: 'code', color: '#2aa198' },
  '.sh': { lang: 'Shell', group: 'code', color: '#89e051' },
  '.svg': { lang: 'SVG', group: 'code', color: '#ff9f1a' },
};
const BINARY = new Set([
  '.png', '.jpg', '.jpeg', '.gif', '.webp', '.ico', '.bmp', '.icns',
  '.woff', '.woff2', '.ttf', '.otf', '.eot', '.mp4', '.mov', '.webm',
  '.zip', '.gz', '.pdf', '.bmp',
]);

function countLines(file) {
  // Match the repo's earlier count method exactly so numbers stay stable.
  try { return readFileSync(join(ROOT, file), 'utf8').split('\n').length; }
  catch { return 0; }
}

function collect() {
  const files = execSync('git ls-files', { cwd: ROOT, encoding: 'utf8' }).split('\n').filter(Boolean);
  const byLang = new Map();   // lang -> { lines, color, group }
  let codeTotal = 0, refTotal = 0, fileCount = 0;
  for (const f of files) {
    if (f === 'docs/loc.svg') continue;   // don't let the generated chart count itself
    const m = f.match(/\.[^.\/]+$/);
    const ext = m ? m[0].toLowerCase() : '';
    if (BINARY.has(ext)) continue;
    const meta = LANGS[ext] || { lang: 'Other', group: 'code', color: '#9aa0a6' };
    const n = countLines(f);
    if (!n) continue;
    fileCount++;
    const cur = byLang.get(meta.lang) || { lines: 0, color: meta.color, group: meta.group };
    cur.lines += n;
    byLang.set(meta.lang, cur);
    if (meta.group === 'reference') refTotal += n; else codeTotal += n;
  }
  return { byLang, codeTotal, refTotal, fileCount };
}

const fmt = (n) => n.toLocaleString('en-US');

function buildSvg({ byLang, codeTotal, refTotal, fileCount }) {
  const date = new Date().toISOString().slice(0, 10);
  const codeLangs = [...byLang.entries()]
    .filter(([, v]) => v.group === 'code')
    .map(([lang, v]) => ({ lang, ...v }))
    .sort((a, b) => b.lines - a.lines);

  const W = 760, PAD = 24;
  const barX = 200, barMaxW = W - barX - 90;     // leave room for value labels
  const max = Math.max(refTotal, codeTotal, 1);
  const barH = 30, rowGap = 22;
  const titleY = 38, firstBarY = 72;
  const legendY = firstBarY + barH + rowGap + barH + 30;
  const footerY = legendY + 34;
  const H = footerY + 16;

  // code bar: stacked segments by language
  const codeW = (codeTotal / max) * barMaxW;
  let seg = '', x = barX;
  for (const c of codeLangs) {
    const w = codeTotal ? (c.lines / codeTotal) * codeW : 0;
    seg += `<rect x="${x.toFixed(1)}" y="${firstBarY}" width="${Math.max(0, w).toFixed(1)}" height="${barH}" fill="${c.color}"><title>${c.lang}: ${fmt(c.lines)} lines</title></rect>`;
    x += w;
  }
  const refW = (refTotal / max) * barMaxW;
  const refY = firstBarY + barH + rowGap;

  // legend chips for the code languages
  let lx = PAD, legend = '';
  for (const c of codeLangs) {
    const label = `${c.lang} ${fmt(c.lines)}`;
    legend += `<rect x="${lx}" y="${legendY - 9}" width="11" height="11" rx="2" fill="${c.color}"/>`;
    legend += `<text class="muted" x="${lx + 16}" y="${legendY}" font-size="11.5">${label}</text>`;
    lx += 16 + label.length * 6.7 + 18;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="Lines of code: ${fmt(codeTotal)} of plugin code and ${fmt(refTotal)} of Apple HIG reference.">
  <style>
    text { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; fill: #1f2328; }
    .muted { fill: #656d76; }
    .track { fill: #eaeef2; }
    .value { font-weight: 600; }
    @media (prefers-color-scheme: dark) {
      text { fill: #e6edf3; }
      .muted { fill: #8b949e; }
      .track { fill: #21262d; }
    }
  </style>
  <text x="${PAD}" y="${titleY}" font-size="17" font-weight="700">Lines of code</text>
  <text class="muted" x="${W - PAD}" y="${titleY}" font-size="12" text-anchor="end">auto-updated by CI</text>

  <text x="${PAD}" y="${firstBarY + 20}" font-size="13" font-weight="600">Plugin code</text>
  <rect class="track" x="${barX}" y="${firstBarY}" width="${barMaxW}" height="${barH}" rx="5"/>
  ${seg}
  <text class="value" x="${barX + Math.max(codeW, 4) + 10}" y="${firstBarY + 20}" font-size="13">${fmt(codeTotal)}</text>

  <text x="${PAD}" y="${refY + 20}" font-size="13" font-weight="600">HIG reference</text>
  <text class="muted" x="${PAD}" y="${refY + 20 + 15}" font-size="10.5">Markdown</text>
  <rect class="track" x="${barX}" y="${refY}" width="${barMaxW}" height="${barH}" rx="5"/>
  <rect x="${barX}" y="${refY}" width="${refW.toFixed(1)}" height="${barH}" rx="5" fill="#4a7fd6"><title>Apple HIG reference: ${fmt(refTotal)} lines</title></rect>
  <text class="value" x="${barX + refW + 10}" y="${refY + 20}" font-size="13">${fmt(refTotal)}</text>

  ${legend}
  <text class="muted" x="${PAD}" y="${footerY}" font-size="11.5">${fmt(codeTotal + refTotal)} lines across ${fileCount} text files · updated ${date} · binary assets excluded</text>
</svg>
`;
}

const data = collect();
const svg = buildSvg(data);
const prev = existsSync(OUT) ? readFileSync(OUT, 'utf8') : '';

// Compare ignoring the "updated <date>" stamp, so an unchanged count never
// rewrites the file (and CI never commits a date-only diff). The date only
// advances when the numbers actually move.
const strip = (s) => s.replace(/ · updated \d{4}-\d{2}-\d{2} ·/, ' · updated DATE ·');
const changed = strip(prev) !== strip(svg);

if (process.argv.includes('--check')) {
  if (changed) {
    console.error('docs/loc.svg is stale — run: node scripts/loc-graph.mjs');
    process.exit(1);
  }
  console.log('docs/loc.svg is up to date.');
  process.exit(0);
}

if (!changed) {
  console.log('docs/loc.svg unchanged — counts identical, nothing to write.');
  process.exit(0);
}

writeFileSync(OUT, svg);
console.log(`Wrote docs/loc.svg — code ${fmt(data.codeTotal)}, reference ${fmt(data.refTotal)}, ${data.fileCount} files.`);
