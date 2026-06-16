# Local SDK Bridge Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** On macOS with Xcode, sync authoritative current Apple colors + Dynamic Type from the user's own SDK into a user-dir cache the plugin prefers over the bundled values; the bundle stays the universal fallback.

**Architecture:** A static Swift Catalyst probe (`probe.swift`) is compiled+run by a Node runner (`hig-sync.mjs`) that caches the JSON to `~/.cache/apple-hig/live-tokens.json`. Token-using flows prefer the cache when fresh. The runner's decision/cache logic is pure and testable on any OS; the Swift compile is macOS-only.

**Tech Stack:** Node ≥18 (`node:test`), Swift + `xcrun swiftc` (Mac Catalyst), Claude Code plugin commands/skill.

> **Plan location note:** saved under `specs/` (not the skill default `docs/...`) because this repo's `docs/` is the published GitHub Pages site.
>
> **Platform note:** the maintainer is on Windows. Tasks 1, 4–7 are fully verifiable there. The Swift probe (Task 3) and the runner's compile path (Task 2) can only be exercised on macOS / macOS CI — those steps are explicitly gated.

---

### Task 1: `hig-sync.mjs` pure core + tests (runs on Windows)

**Files:**
- Create: `scripts/hig-sync.mjs`
- Create: `scripts/hig-sync.test.mjs`

- [ ] **Step 1: Write the failing tests**

Create `scripts/hig-sync.test.mjs`:

```js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, rmSync, readFileSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { SCHEMA, cacheDir, cachePath, readCache, writeCache, isFresh, prefFromEnv, isMac, decideAction }
  from './hig-sync.mjs';

test('cachePath honors XDG_CACHE_HOME', () => {
  const env = { XDG_CACHE_HOME: '/x/cache' };
  assert.equal(cacheDir(env).replace(/\\/g, '/'), '/x/cache/apple-hig');
  assert.equal(cachePath(env).replace(/\\/g, '/'), '/x/cache/apple-hig/live-tokens.json');
});

test('writeCache/readCache round-trip atomically', () => {
  const dir = mkdtempSync(join(tmpdir(), 'hig-cache-'));
  const p = join(dir, 'live-tokens.json');
  const data = { schema: SCHEMA, xcodeBuild: '17A1', colors: { system: {} } };
  writeCache(data, p);
  assert.equal(existsSync(p + '.tmp'), false);          // temp cleaned up by rename
  assert.deepEqual(readCache(p), data);
  rmSync(dir, { recursive: true, force: true });
});

test('readCache returns null on missing/corrupt', () => {
  assert.equal(readCache(join(tmpdir(), 'nope-hig.json')), null);
});

test('isFresh requires matching schema and xcodeBuild', () => {
  assert.equal(isFresh({ schema: SCHEMA, xcodeBuild: '17A1' }, '17A1'), true);
  assert.equal(isFresh({ schema: SCHEMA, xcodeBuild: '17A1' }, '17B2'), false); // Xcode changed
  assert.equal(isFresh({ schema: 0, xcodeBuild: '17A1' }, '17A1'), false);      // old schema
  assert.equal(isFresh(null, '17A1'), false);
});

test('prefFromEnv defaults to ask and validates', () => {
  assert.equal(prefFromEnv({}), 'ask');
  assert.equal(prefFromEnv({ HIG_SDK_SYNC: 'ALWAYS' }), 'always');
  assert.equal(prefFromEnv({ HIG_SDK_SYNC: 'never' }), 'never');
  assert.equal(prefFromEnv({ HIG_SDK_SYNC: 'garbage' }), 'ask');
});

test('isMac reflects the platform argument', () => {
  assert.equal(isMac('darwin'), true);
  assert.equal(isMac('win32'), false);
});

test('decideAction covers the consent matrix', () => {
  const fresh = { schema: SCHEMA, xcodeBuild: '17A1' };
  const stale = { schema: SCHEMA, xcodeBuild: 'OLD' };
  assert.equal(decideAction({ platform: 'win32', xcodeOk: false, cache: null, xcodeBuild: '17A1', pref: 'ask' }), 'bundle');
  assert.equal(decideAction({ platform: 'darwin', xcodeOk: false, cache: null, xcodeBuild: '17A1', pref: 'ask' }), 'bundle');
  assert.equal(decideAction({ platform: 'darwin', xcodeOk: true, cache: fresh, xcodeBuild: '17A1', pref: 'ask' }), 'use-cache');
  assert.equal(decideAction({ platform: 'darwin', xcodeOk: true, cache: stale, xcodeBuild: '17A1', pref: 'never' }), 'bundle');
  assert.equal(decideAction({ platform: 'darwin', xcodeOk: true, cache: stale, xcodeBuild: '17A1', pref: 'always' }), 'sync-now');
  assert.equal(decideAction({ platform: 'darwin', xcodeOk: true, cache: null, xcodeBuild: '17A1', pref: 'ask' }), 'ask');
});
```

- [ ] **Step 2: Run the tests to verify they fail**

Run: `node --test scripts/hig-sync.test.mjs`
Expected: FAIL — `Cannot find module ... hig-sync.mjs`.

- [ ] **Step 3: Implement the pure core**

Create `scripts/hig-sync.mjs` with exactly this content (the impure layer is appended in Task 2):

```js
#!/usr/bin/env node
// apple-hig local SDK bridge — see specs/2026-06-15-sdk-bridge-design.md
import { readFileSync, writeFileSync, mkdirSync, renameSync } from 'node:fs';
import { homedir } from 'node:os';
import { join, dirname } from 'node:path';

export const SCHEMA = 1;

export function cacheDir(env = process.env) {
  return join(env.XDG_CACHE_HOME || join(homedir(), '.cache'), 'apple-hig');
}
export function cachePath(env = process.env) {
  return join(cacheDir(env), 'live-tokens.json');
}
export function readCache(p = cachePath()) {
  try { return JSON.parse(readFileSync(p, 'utf8')); } catch { return null; }
}
export function writeCache(data, p = cachePath()) {
  mkdirSync(dirname(p), { recursive: true });
  const tmp = p + '.tmp';
  writeFileSync(tmp, JSON.stringify(data, null, 2));
  renameSync(tmp, p);
  return p;
}
export function isFresh(cache, xcodeBuild) {
  return !!cache && cache.schema === SCHEMA && cache.xcodeBuild === xcodeBuild;
}
export function prefFromEnv(env = process.env) {
  const v = String(env.HIG_SDK_SYNC || 'ask').toLowerCase();
  return ['ask', 'always', 'never'].includes(v) ? v : 'ask';
}
export function isMac(platform = process.platform) {
  return platform === 'darwin';
}
export function decideAction({ platform, xcodeOk, cache, xcodeBuild, pref }) {
  if (!isMac(platform)) return 'bundle';
  if (!xcodeOk) return 'bundle';
  if (isFresh(cache, xcodeBuild)) return 'use-cache';
  if (pref === 'never') return 'bundle';
  if (pref === 'always') return 'sync-now';
  return 'ask';
}
```

- [ ] **Step 4: Run the tests to verify they pass**

Run: `node --test scripts/hig-sync.test.mjs`
Expected: PASS — all 7 tests green.

- [ ] **Step 5: Commit**

```bash
git add scripts/hig-sync.mjs scripts/hig-sync.test.mjs
git commit -m "feat(sdk-bridge): hig-sync pure core (cache, freshness, consent decision) + tests"
```

---

### Task 2: `hig-sync.mjs` impure layer (macOS execution)

**Files:**
- Modify: `scripts/hig-sync.mjs` (append after the pure core)

- [ ] **Step 1: Append the toolchain + probe + dispatch code**

Append this to `scripts/hig-sync.mjs`:

```js
import { execFileSync, } from 'node:child_process';
import { mkdtempSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { fileURLToPath } from 'node:url';

const here = () => dirname(fileURLToPath(import.meta.url));
const sh = (cmd, args) => execFileSync(cmd, args, { encoding: 'utf8' }).trim();

export function detectXcode() {
  try {
    sh('xcode-select', ['-p']);
    sh('xcrun', ['--find', 'swiftc']);
    let build = 'unknown';
    try { build = sh('xcodebuild', ['-version']).split('\n').pop().replace(/Build version/i, '').trim(); } catch {}
    let macOS = 'unknown';
    try { macOS = sh('sw_vers', ['-productVersion']); } catch {}
    return { ok: true, build, macOS };
  } catch {
    return { ok: false, reason: 'Xcode / command-line tools not found (xcode-select -p or xcrun swiftc failed)' };
  }
}

function compileProbe() {
  const arch = process.arch === 'x64' ? 'x86_64' : 'arm64';
  const target = `${arch}-apple-ios15.0-macabi`;
  const sdk = sh('xcrun', ['--sdk', 'macosx', '--show-sdk-path']);
  const out = mkdtempSync(join(tmpdir(), 'hig-probe-'));
  const bin = join(out, 'probe');
  const src = join(here(), 'sdk-probe', 'probe.swift');
  execFileSync('xcrun', ['swiftc', '-sdk', sdk, '-target', target, src, '-o', bin], { stdio: ['ignore', 'pipe', 'pipe'] });
  return bin;
}
export function runProbe(extraArgs = []) {
  const bin = compileProbe();
  return JSON.parse(execFileSync(bin, extraArgs, { encoding: 'utf8' }));
}
export function readSfSymbols() {
  const app = '/Applications/SF Symbols.app';
  if (!existsSync(app)) return { mode: 'validate-only' };
  try {
    const version = sh('defaults', ['read', join(app, 'Contents/Info'), 'CFBundleShortVersionString']);
    return { mode: 'inventory', version };
  } catch {
    return { mode: 'validate-only' };
  }
}

export function runSync() {
  if (!isMac()) { console.log('apple-hig: SDK sync is macOS-only — using the bundled reference.'); return 0; }
  const xc = detectXcode();
  if (!xc.ok) { console.log('apple-hig: ' + xc.reason + ' — using the bundled reference.'); return 0; }
  let probe;
  try { probe = runProbe(); }
  catch (e) { console.error('apple-hig: probe build/run failed — keeping any existing cache, using the bundle.\n' + String(e.message || e)); return 0; }
  const data = {
    schema: SCHEMA, generatedAt: new Date().toISOString(),
    xcodeBuild: xc.build, macOS: xc.macOS, probeTarget: 'mac-catalyst',
    sfSymbols: readSfSymbols(), colors: probe.colors, typeRamp: probe.typeRamp,
  };
  const p = writeCache(data);
  const n = Object.keys(probe.colors.system).length + Object.keys(probe.colors.semantic).length;
  console.log(`apple-hig: synced ${n} colors + ${Object.keys(probe.typeRamp).length} text styles (Xcode ${xc.build}, SF Symbols ${data.sfSymbols.version || 'n/a'}) → ${p}`);
  return 0;
}
export function runCheck(names) {
  if (!isMac()) { console.log(JSON.stringify({ error: 'macOS-only' })); return 0; }
  const xc = detectXcode();
  if (!xc.ok) { console.log(JSON.stringify({ error: xc.reason })); return 0; }
  console.log(JSON.stringify(runProbe(['--check', ...names])));
  return 0;
}
export function runStatus() {
  const platform = process.platform;
  const xc = isMac(platform) ? detectXcode() : { ok: false, reason: 'not macOS' };
  const cache = readCache();
  const cacheState = !cache ? 'missing' : (isFresh(cache, xc.build) ? 'fresh' : 'stale');
  const action = decideAction({ platform, xcodeOk: xc.ok, cache, xcodeBuild: xc.build, pref: prefFromEnv() });
  console.log(JSON.stringify({ platform, supported: isMac(platform), xcode: xc, cache: cacheState, action, cachePath: cachePath() }, null, 2));
  return 0;
}

function isMainModule() {
  try { return fileURLToPath(import.meta.url) === process.argv[1]; } catch { return false; }
}
if (isMainModule()) {
  const [mode, ...rest] = process.argv.slice(2);
  if (mode === '--check') process.exit(runCheck(rest));
  else if (mode === '--status') process.exit(runStatus());
  else process.exit(runSync());
}
```

- [ ] **Step 2: Verify it imports and `--status` runs cross-platform**

Run: `node scripts/hig-sync.mjs --status`
Expected (on Windows): JSON with `"supported": false`, `"action": "bundle"`. No crash. (On macOS it reports real Xcode/cache state.)

- [ ] **Step 3: Re-run the Task 1 tests (no regressions)**

Run: `node --test scripts/hig-sync.test.mjs`
Expected: PASS — the appended imports don't break the pure exports.

- [ ] **Step 4: Commit**

```bash
git add scripts/hig-sync.mjs
git commit -m "feat(sdk-bridge): hig-sync runner (detectXcode, probe compile/run, sync/check/status)"
```

> **macOS-gated:** `runSync`/`runCheck`/`runProbe` only execute fully on a Mac with Xcode. On Windows they return the bundle no-op path (verified in Step 2). Full validation happens in macOS CI (Task 3 Step 3).

---

### Task 3: `probe.swift` — the Mac Catalyst probe

**Files:**
- Create: `scripts/sdk-probe/probe.swift`

- [ ] **Step 1: Write the probe**

Create `scripts/sdk-probe/probe.swift`:

```swift
import Foundation
#if canImport(UIKit)
import UIKit

func printJSON(_ obj: Any) {
    let data = try! JSONSerialization.data(withJSONObject: obj, options: [.sortedKeys, .prettyPrinted])
    print(String(data: data, encoding: .utf8)!)
}
func hex(_ color: UIColor, _ style: UIUserInterfaceStyle) -> String {
    let resolved = color.resolvedColor(with: UITraitCollection(userInterfaceStyle: style))
    var r: CGFloat = 0, g: CGFloat = 0, b: CGFloat = 0, a: CGFloat = 0
    resolved.getRed(&r, green: &g, blue: &b, alpha: &a)
    func c(_ v: CGFloat) -> Int { max(0, min(255, Int((v * 255).rounded()))) }
    return a < 0.999
        ? String(format: "#%02X%02X%02X%02X", c(r), c(g), c(b), c(a))
        : String(format: "#%02X%02X%02X", c(r), c(g), c(b))
}
func pair(_ color: UIColor) -> [String: String] { ["light": hex(color, .light), "dark": hex(color, .dark)] }

let systemColors: [(String, UIColor)] = [
    ("blue", .systemBlue), ("green", .systemGreen), ("red", .systemRed), ("orange", .systemOrange),
    ("yellow", .systemYellow), ("pink", .systemPink), ("purple", .systemPurple), ("teal", .systemTeal),
    ("indigo", .systemIndigo), ("brown", .systemBrown), ("mint", .systemMint), ("cyan", .systemCyan),
    ("gray", .systemGray), ("gray2", .systemGray2), ("gray3", .systemGray3),
    ("gray4", .systemGray4), ("gray5", .systemGray5), ("gray6", .systemGray6),
]
let semanticColors: [(String, UIColor)] = [
    ("label", .label), ("secondaryLabel", .secondaryLabel), ("tertiaryLabel", .tertiaryLabel),
    ("quaternaryLabel", .quaternaryLabel), ("placeholderText", .placeholderText),
    ("separator", .separator), ("opaqueSeparator", .opaqueSeparator), ("link", .link),
    ("systemBackground", .systemBackground), ("secondarySystemBackground", .secondarySystemBackground),
    ("tertiarySystemBackground", .tertiarySystemBackground),
    ("systemGroupedBackground", .systemGroupedBackground),
    ("secondarySystemGroupedBackground", .secondarySystemGroupedBackground),
    ("tertiarySystemGroupedBackground", .tertiarySystemGroupedBackground),
]
let textStyles: [(String, UIFont.TextStyle)] = [
    ("largeTitle", .largeTitle), ("title1", .title1), ("title2", .title2), ("title3", .title3),
    ("headline", .headline), ("body", .body), ("callout", .callout),
    ("subheadline", .subheadline), ("footnote", .footnote), ("caption1", .caption1), ("caption2", .caption2),
]

let args = CommandLine.arguments
if args.count > 1, args[1] == "--check" {
    var result: [String: Bool] = [:]
    for name in args.dropFirst(2) { result[name] = UIImage(systemName: name) != nil }
    printJSON(["validate": result]); exit(0)
}

var sys: [String: [String: String]] = [:]
for (k, v) in systemColors { sys[k] = pair(v) }
var sem: [String: [String: String]] = [:]
for (k, v) in semanticColors { sem[k] = pair(v) }
var ramp: [String: [String: Any]] = [:]
for (name, style) in textStyles {
    let f = UIFont.preferredFont(forTextStyle: style)
    ramp[name] = ["size": f.pointSize, "leading": f.lineHeight.rounded(),
                  "face": (f.fontDescriptor.object(forKey: .face) as? String) ?? "Regular"]
}
printJSON(["colors": ["system": sys, "semantic": sem], "typeRamp": ramp])
#else
FileHandle.standardError.write("probe: UIKit unavailable — build with a Mac Catalyst target (-target <arch>-apple-ios<ver>-macabi)\n".data(using: .utf8)!)
exit(1)
#endif
```

- [ ] **Step 2: Compile check (skip on non-macOS)**

On **Windows/Linux**: skip — there is no Swift/Catalyst toolchain; note "macOS-gated" and proceed.
On **macOS**: Run
`xcrun swiftc -sdk "$(xcrun --sdk macosx --show-sdk-path)" -target arm64-apple-ios15.0-macabi scripts/sdk-probe/probe.swift -o /tmp/probe && /tmp/probe | head -20`
Expected: JSON with `colors.system.blue.light` ≈ `#007AFF` and `typeRamp.body.size` = 17.

- [ ] **Step 3: End-to-end on macOS CI (gated)**

Add to the eventual CI (or run manually on a Mac): `node scripts/hig-sync.mjs && node scripts/hig-sync.mjs --status`
Expected: cache written; `--status` reports `"cache": "fresh"`, `"action": "use-cache"`. Also `node scripts/hig-sync.mjs --check checkmark badwingdingsymbol` → `{"validate":{"checkmark":true,"badwingdingsymbol":false}}`.

- [ ] **Step 4: Commit**

```bash
git add scripts/sdk-probe/probe.swift
git commit -m "feat(sdk-bridge): Mac Catalyst probe (resolved colors, type ramp, symbol validation)"
```

---

### Task 4: `/hig-sync` command

**Files:**
- Create: `commands/hig-sync.md`

- [ ] **Step 1: Write the command**

Create `commands/hig-sync.md`:

```markdown
---
description: Sync authoritative Apple design tokens (colors, Dynamic Type) from the local Xcode SDK into a cache the plugin prefers over the bundled values. macOS + Xcode only.
allowed-tools: Bash, Read
---

Pull live design values from the user's installed SDK.

Run `node "${CLAUDE_PLUGIN_ROOT}/scripts/hig-sync.mjs"`. It is a no-op (and says so) on anything other
than macOS with Xcode — there the bundled reference stays in use.

On success it writes `~/.cache/apple-hig/live-tokens.json` (colors + Dynamic Type ramp, resolved from
the SDK via a Mac Catalyst probe) and prints what it pulled. Relay that summary.

- To check whether a sync is warranted first: `node "${CLAUDE_PLUGIN_ROOT}/scripts/hig-sync.mjs" --status`.
- To validate specific SF Symbol names against the installed SF Symbols: `--check <name> <name> …`.

After a successful sync, `/hig-tokens` and HIG reviews will prefer the cached values automatically.
```

- [ ] **Step 2: Commit**

```bash
git add commands/hig-sync.md
git commit -m "feat(sdk-bridge): add /hig-sync command"
```

---

### Task 5: Make the plugin prefer the cache

**Files:**
- Modify: `skills/apple-hig/references/design-tokens.md` (top banner)
- Modify: `commands/hig-tokens.md`
- Modify: `skills/apple-hig/SKILL.md`
- Modify: `agents/design-reviewer.md`

- [ ] **Step 1: Banner in `design-tokens.md`**

Immediately after the closing `---` of the front matter (before `# Design Tokens (consolidated...)`), insert:

```markdown
> 🔄 **Prefer live values when present.** If `~/.cache/apple-hig/live-tokens.json` exists and its
> `schema` is `1`, use its `colors` and `typeRamp` instead of the tables below (they were resolved
> from the user's own SDK and are more current). Everything else on this page stays authoritative.
> Generate or refresh that cache with `/hig-sync` (macOS + Xcode only).
```

- [ ] **Step 2: `commands/hig-tokens.md` — check cache first**

Add this paragraph at the end of `commands/hig-tokens.md`:

```markdown
## Live values (macOS)

Before emitting colors or the type ramp, check for `~/.cache/apple-hig/live-tokens.json`. If it exists
with `schema: 1`, emit its `colors`/`typeRamp` and note "(live, from your SDK — Xcode <build>)".
Otherwise emit the bundled `references/design-tokens.md` values. On macOS + Xcode with no cache, and
unless `HIG_SDK_SYNC=never`, offer to run `/hig-sync` first (run it automatically if `HIG_SDK_SYNC=always`).
```

- [ ] **Step 3: `SKILL.md` — note the bridge under "Related plugin tools"**

In `skills/apple-hig/SKILL.md`, in the "Related plugin tools" section, add a bullet:

```markdown
- **On macOS with Xcode, want exact current values?** Run `/hig-sync` to cache live colors + Dynamic
  Type from the local SDK; tokens then prefer `~/.cache/apple-hig/live-tokens.json` over the bundled
  set. Set `HIG_SDK_SYNC=always|never|ask` (default `ask`) to control prompting.
```

- [ ] **Step 4: `design-reviewer.md` — symbol validation**

In `agents/design-reviewer.md`, after the checklist item about SF Symbols in app icons, add:

```markdown
- **SF Symbol availability (macOS):** if the code names SF Symbols, you may verify they exist in the
  user's installed set with `node "${CLAUDE_PLUGIN_ROOT}/scripts/hig-sync.mjs" --check <name> …`
  (returns `{name: bool}`); flag any that come back `false` as unavailable in the installed SF Symbols.
```

- [ ] **Step 5: Commit**

```bash
git add skills/apple-hig/references/design-tokens.md commands/hig-tokens.md skills/apple-hig/SKILL.md agents/design-reviewer.md
git commit -m "feat(sdk-bridge): prefer the live-token cache across tokens/skill/reviewer"
```

---

### Task 6: package.json script + README

**Files:**
- Modify: `package.json` (scripts)
- Modify: `README.md`

- [ ] **Step 1: Add the `hig-sync` script**

In `package.json`, change the `"scripts"` block to:

```json
  "scripts": {
    "install-rules": "node scripts/install-rules.mjs",
    "test": "node --test",
    "hig-sync": "node scripts/hig-sync.mjs"
  },
```

- [ ] **Step 2: Verify the full test suite still passes**

Run: `npm test`
Expected: PASS — both `hooks/hig-gate.test.mjs` and `scripts/hig-sync.test.mjs` are discovered and green.

- [ ] **Step 3: Document the bridge in the README**

Add this section to `README.md` (after the "Mandatory review gate" section):

```markdown
## Live values from your SDK (macOS)

The bundled token reference is portable but can drift between OS releases, and Apple ships no design
data API. On **macOS with Xcode**, run `/hig-sync` (or `npm run hig-sync`) to read authoritative
current **colors** and the **Dynamic Type ramp** from your own installed SDK via a small Mac Catalyst
probe. Values are cached at `~/.cache/apple-hig/live-tokens.json`, and `/hig-tokens` plus HIG reviews
then prefer the cache over the bundle. Everyone else keeps the bundled reference unchanged.

- `HIG_SDK_SYNC=ask` (default) — offer to sync when values are needed and the cache is missing/stale.
- `HIG_SDK_SYNC=always` — sync without asking. `HIG_SDK_SYNC=never` — never sync; always use the bundle.
- `…/scripts/hig-sync.mjs --check <symbol> …` validates SF Symbol names against the installed set.

Note: control-size minimums, spacing, and corner radii aren't exposed at runtime, so they stay
bundled; Catalyst-resolved iOS values are very close but not a pure on-device render.
```

- [ ] **Step 4: Commit**

```bash
git add package.json README.md
git commit -m "feat(sdk-bridge): npm hig-sync script + README docs"
```

---

### Task 7: Version bump 1.2.0

**Files:**
- Modify: `.claude-plugin/plugin.json`, `.claude-plugin/marketplace.json`, `package.json`

- [ ] **Step 1: Bump all version fields `1.1.0` → `1.2.0`**

Set `"version": "1.2.0"` in `.claude-plugin/plugin.json`, both the `metadata.version` and the
plugin-entry `version` in `.claude-plugin/marketplace.json`, and `package.json`.

- [ ] **Step 2: Validate the plugin**

Run (from the repo's PARENT directory): `claude plugin validate ./apple-hig`
Expected: validation passes.

- [ ] **Step 3: Commit**

```bash
git add .claude-plugin/plugin.json .claude-plugin/marketplace.json package.json
git commit -m "chore: release 1.2.0 — local SDK bridge (live token sync)"
```

---

## Self-Review

**Spec coverage:** probe (Task 3) ✓; runner preflight/build/run/cache/--check/--status (Tasks 1–2) ✓; consent decision + `HIG_SDK_SYNC` (Task 1 `decideAction` + Tasks 5–6 docs) ✓; cache at `~/.cache/apple-hig/` honoring XDG (Task 1) ✓; supersede via instructions in tokens/hig-tokens/SKILL/reviewer (Task 5) ✓; SF Symbols inventory-or-validate (Task 2 `readSfSymbols` + probe `--check`) ✓; honest scope — only colors/type synced (probe emits only those; Task 6 README states the carve-out) ✓; `/hig-sync` command (Task 4) ✓; tests run on Windows (Task 1) ✓; version bump (Task 7) ✓.

**Placeholder scan:** none — every code/edit step is complete. `<build>`, `<name>`, `<ver>` inside doc copy are user-facing parameter placeholders, not unfinished plan items.

**Type/name consistency:** exports `SCHEMA`, `cacheDir`, `cachePath`, `readCache`, `writeCache`, `isFresh`, `prefFromEnv`, `isMac`, `decideAction` are defined in Task 1 and consumed identically in Task 2 and the tests; cache shape `{schema, generatedAt, xcodeBuild, macOS, probeTarget, sfSymbols, colors, typeRamp}` is written in `runSync` and checked by `isFresh`/`runStatus`; the probe emits exactly `{colors:{system,semantic}, typeRamp}` (plus `{validate}` in `--check`) which `runProbe`/`runSync` consume.

**Known limits (by design):** the Swift probe and the runner's compile path are macOS-only and can't be validated on the maintainer's Windows box — gated to macOS CI; SF Symbols full-inventory parsing is recorded as version+mode only (deep metadata parse deferred), with `--check` as the reliable validation path.
