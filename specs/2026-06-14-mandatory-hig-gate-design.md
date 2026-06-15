# Mandatory HIG review gate — design

- **Date:** 2026-06-14
- **Status:** approved (pending spec review)
- **Component:** `apple-hig` plugin

## Goal

Make a passing Apple-HIG design review **mandatory before a UI-touching commit can be created**
from inside a Claude Code session, and ship that gate on-by-default to everyone who installs the
plugin. The gate must be bound to the exact content being committed (review-once-then-edit must not
slip through).

## Non-goals

- Catching commits made outside Claude (terminal / IDE). Out of scope by decision — only commits
  Claude runs in-session are intercepted. A real `git` pre-commit hook (deterministic lint only) is a
  possible later add-on, not v1.
- Gating `git push` in v1. Every UI commit is gated at creation, so a push only ships
  already-gated commits. A per-commit `git notes` push gate is a future add-on.
- A formal/provable guarantee. "Pass" is judged by the `design-reviewer` agent (an LLM), not proven.

## Decisions (from brainstorming)

| Decision | Choice |
|---|---|
| Distribution | **On by default** for all installers (with an off-switch) |
| Which commits | **Only UI-touching commits** (staged files match a UI extension allowlist) |
| Enforcement | **Block**, with a **logged bypass** escape hatch |
| Where enforced | **Claude session only** — a plugin `PreToolUse` hook |
| Verification | **Content-hash marker** (Approach A) |
| Pass criterion | **No 🔴 high-severity** HIG violations (medium/low reported, not blocking). Adjustable. |
| Push gate | Not in v1 (commit is the enforcement point) |

## Architecture

Three units, each independently testable.

### 1. `hooks/hig-gate.mjs` — the gate engine (Node, cross-platform)

A single Node script with subcommands so the hook and the review command share one source of truth
for what "UI files" and "the staged hash" mean (no drift):

- **`hig-gate.mjs hook`** (default; receives the PreToolUse payload on stdin)
  1. Parse the tool payload; read the Bash command string.
  2. If the command is not a `git commit` (regex `\bgit\b(\s+-C\s+\S+)?\s+commit\b`), **exit 0** (allow).
  3. If `HIG_GATE` is `off/0/false` → **exit 0** (allow). If `HIG_GATE_BYPASS` is truthy → append a
     line to the bypass log and **exit 0** (allow).
  4. Compute the staged UI set + hash (see "Hashing"). **Empty set → exit 0** (allow non-UI commit).
  5. Read the marker for this repo. If `marker.verdict === "pass"` **and** `marker.hash === currentHash`
     → **exit 0** (allow). Otherwise **exit 2** (block) and print the block message (see "Block message")
     to stderr so Claude receives it.
  6. **Fail-open** on infrastructure errors (git missing, not a repo, unreadable payload): allow, but
     print a one-line warning. Rationale: a plumbing error must never brick the user's commits; the
     gate degrades to a no-op rather than a hard wall.

- **`hig-gate.mjs --hash`** — print `currentHash` and the staged UI file list as JSON. Used by the
  review command so it hashes identically to the hook.

- **`hig-gate.mjs --pass`** — write the marker `{hash, verdict:"pass", high:0, files, ts}` for the
  current staged hash. Called by `/hig-review --staged` after a passing review.

- **`hig-gate.mjs --status`** — print whether the current staged UI set has a valid pass marker
  (debugging aid).

**Hashing.** UI set = staged files (`git diff --cached --name-only --diff-filter=ACMR -z`) whose
extension is in the allowlist: `.tsx .jsx .ts .js .vue .svelte .html .htm .css .scss .sass .less
.swift .kt .java .xml .storyboard .xib` (configurable via `HIG_GATE_EXT`). Hash =
`sha256(` output of `git ls-files -s -z -- <ui set>` `)`. Git's staged blob OIDs change whenever
staged content changes, so the marker self-invalidates on any edit/restage.

**Marker location.** `os.tmpdir()/apple-hig-gate/<sha256(repoTopLevel)>.json`. Never written into the
repo (no `.gitignore` churn, no risk of committing the marker). Bypass log:
`os.tmpdir()/apple-hig-gate/bypass.log`.

**Block message (stderr, shown to Claude):**
> 🔴 apple-hig gate: this commit stages UI changes (`<files>`) with no passing HIG review.
> Run `/hig-review --staged` — on a pass (no high-severity issues) it records approval; then retry the
> commit. Emergency bypass: set `HIG_GATE_BYPASS=1` (logged). Disable entirely: `HIG_GATE=off`.

### 2. `hooks/hooks.json` — wiring

Add a `PreToolUse` entry matching `Bash` that runs
`node "${CLAUDE_PLUGIN_ROOT}/hooks/hig-gate.mjs" hook`. Keep the existing `SessionStart` tip.

### 3. `/hig-review --staged` — the path that records a pass

Extend `commands/hig-review.md` with a `--staged` mode:
1. Resolve the staged UI files via `hig-gate.mjs --hash`.
2. Dispatch the `design-reviewer` agent on exactly those files (agent stays read-only: it reviews and
   reports; it does **not** write the marker).
3. Read the agent's verdict. **Pass = zero 🔴 high-severity findings.** Medium/low are surfaced to the
   user but do not block.
4. On pass, the command (main loop) runs `hig-gate.mjs --pass` to write the marker. On fail, it prints
   the findings and writes nothing (commit stays blocked until fixed + re-reviewed).

The `design-reviewer` agent gains one line: end its report with a machine-readable verdict
`HIG-VERDICT: pass|fail (high=<n> medium=<n> low=<n>)` so the command can parse pass/fail deterministically.

## Data flow (the gated loop)

```
Claude runs `git commit`
   └─ PreToolUse → hig-gate hook
        ├─ not a commit / non-UI / HIG_GATE=off / bypass / valid marker → ALLOW
        └─ UI staged, no valid marker → BLOCK (exit 2) with message
              └─ Claude runs `/hig-review --staged`
                   ├─ design-reviewer → HIG-VERDICT: fail → show findings → (Claude fixes) → loop
                   └─ HIG-VERDICT: pass → `hig-gate --pass` writes marker
                        └─ Claude retries `git commit` → hook sees valid marker → ALLOW
```

## Edge cases / error handling

- **Not a git repo / git absent / bad payload** → fail-open (allow) + warning.
- **`git commit --amend` with nothing staged** → no UI staged → allowed (known v1 gap; document).
- **Chained commands** (`a && git commit`) → detected by the regex. Aliases / scripts that wrap commit
  are **not** caught (documented limitation).
- **Stale marker after edit** → blobs change → hash mismatch → re-blocked (intended).
- **Multiple repos / worktrees** → marker keyed by repo top-level path, so they don't collide.

## Limitations (to document in README)

- Only intercepts commits Claude runs in-session, not terminal/IDE commits.
- "Pass" is LLM-judged, not a formal guarantee.
- Ships on-by-default to every installer; `HIG_GATE=off` disables it; `HIG_GATE_BYPASS=1` bypasses a
  single action (logged).

## Testing

- **Unit (`hig-gate.mjs`):** non-git dir → allow; staged non-UI file → allow; staged `.css` with no
  marker → block(2); write marker via `--pass` then re-run → allow; edit the `.css`, re-stage → block
  (hash changed); `HIG_GATE=off` → allow; `HIG_GATE_BYPASS=1` → allow + bypass-log line.
- **Command parsing:** `git commit -m x`, `git -C . commit`, `foo && git commit` → matched; `git status`,
  `git log` → not matched.
- **Integration:** in a scratch repo, stage a UI file, attempt commit through the hook, confirm block →
  run review → confirm allow.

## Files changed

- `hooks/hig-gate.mjs` (new)
- `hooks/hooks.json` (add PreToolUse → Bash)
- `commands/hig-review.md` (add `--staged` mode + marker write)
- `agents/design-reviewer.md` (add `HIG-VERDICT:` line)
- `README.md` (document the gate, on-by-default, `HIG_GATE` / `HIG_GATE_BYPASS`)
- version bump in `plugin.json` / `marketplace.json` / `package.json`
