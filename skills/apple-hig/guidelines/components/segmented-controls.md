---
title: Segmented Controls
source_url: https://developer.apple.com/design/human-interface-guidelines/segmented-controls
platforms: [ios, ipados, macos, tvos, visionos]
value_type: platform-specific
last_verified: 2026-06-14
---

# Segmented Controls

> ⚠️ Re-verify on Apple.

## Purpose

A horizontal set of **mutually exclusive** segments (at least two) — pick exactly one. Use to switch
between **views/modes of the same content** (e.g. Day / Week / Month) or filter a list. Exactly one
segment is always selected.

## Guidelines

- **Aim for five or fewer segments** (Apple's "five or fewer" guidance is iPhone-specific); a
  control needs **at least two** to be meaningful, but Apple states no hard 2–5 range. Limit the
  count and keep segments wide enough to tap; all visible at once. If you need more options, use a
  **[[pickers|menu/picker]]**.
- Keep segment labels **short and parallel** (all text **or** all icons, not mixed). Equal,
  predictable widths read best.
- Use for **switching what's shown**, not for triggering actions (use [[buttons]]) and not for
  multi-select (use toggles/checkboxes). One selection persists.
- Selected state must be clear beyond color (Differentiate Without Color). See [[accessibility]].
- Each segment ≥44 pt target (60 pt visionOS); legible with Dynamic Type (may need to wrap/scroll).

## SwiftUI

`Picker("View", selection:) { Text("Day").tag(0); … }.pickerStyle(.segmented)`.

## Accessibility

Announce as a selector with the current selection; segments labeled; selection not by color
alone. See [[accessibility]].

See also: [[pickers]], [[tab-views]], [[buttons]], [[toggles]].
