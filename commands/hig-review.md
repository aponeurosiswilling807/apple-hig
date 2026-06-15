---
description: Audit the current file/selection (or a path you pass) against Apple's Human Interface Guidelines and report violations with rule, Apple source, and a concrete fix.
argument-hint: "[file path or glob — defaults to the active file/selection]"
allowed-tools: Read, Grep, Glob, Task
---

Review UI code for Apple Human Interface Guidelines compliance.

**Target:** $ARGUMENTS
If no target is given, review the file/selection currently in focus.

Dispatch the **`design-reviewer`** subagent via the Task tool (`subagent_type: "design-reviewer"`) and
pass it the target path(s). That agent knows how to load the bundled guidelines and pull each rule's
Apple `source_url`. Ask it to detect the platform(s) and stack, then audit for at least: touch targets
< 44 pt (60 pt visionOS); hardcoded/non-semantic colors; missing dark-mode variants; off-grid spacing;
insufficient contrast (< 4.5:1 body / < 3:1 large); non-standard corner radii; motion that ignores
Reduce Motion; missing VoiceOver labels on icon-only controls; and hardcoded type sizes / no Dynamic
Type. It should report each issue as `[severity] rule — file:line` with **Problem**, **Fix** (corrected
snippet), and the Apple **Source** URL, grouped high → medium → low, plus a short "Looks good" list.

Relay the subagent's report. Do not modify files unless I ask you to apply the fixes.

If a Playwright/preview/browser MCP is available and the UI can actually be run, also render it and
verify visually (screenshot; check rendered contrast, spacing, dark mode, and target sizes) and include
those findings. Install it with `/plugin install playwright@claude-plugins-official` for visual checks.

If the `design-reviewer` subagent isn't available (e.g. the plugin isn't installed), fall back to
invoking the **apple-hig** skill and performing the same audit yourself using its guidelines.
