---
title: Multitasking
source_url: https://developer.apple.com/design/human-interface-guidelines/multitasking
platforms: [ipados, macos]
value_type: universal
last_verified: 2026-06-14
---

# Multitasking

> ⚠️ Primarily iPadOS & macOS. Re-verify on Apple.

Your app must work well when it isn't the only thing on screen — and at **any** size.

## iPadOS modes

- The current ('26') model has three modes: **Full Screen Apps**, **Windowed Apps**
  (free-form resizable/tiled windows with window controls), and **Stage Manager** (overlapping,
  freely resizable windows + external display). iPadOS 26 reworked iPad multitasking: classic
  **Split View** and **Slide Over** were reworked (Slide Over returned as a drag target in 26.1).
- Design for **continuous resizing**, not fixed breakpoints. Use **size classes**: a window can
  be **compact** width even on iPad → collapse split views into stacks, swap sidebars for tab
  bars. See [[split-views]], [[layout]], [[ipados]].

## macOS

- Multiple **resizable windows**, multiple windows per document, full-screen and Split View. Honor
  a sensible **minimum** window size; restore window state. See [[macos]].

## Guidelines

- Never assume full-screen dimensions; lay out from the current window size.
- Keep state consistent across resizes; don't lose the user's place when the layout changes.
- Support **drag and drop between apps** (a core multitasking benefit). See [[drag-and-drop]].
- Test at the **narrowest** and **widest** sizes, and across the compact↔regular transition.

## Accessibility

Layouts must remain navigable and legible at every size with Dynamic Type and VoiceOver. See
[[accessibility]].

See also: [[split-views]], [[drag-and-drop]], [[ipados]], [[macos]], [[layout]].
