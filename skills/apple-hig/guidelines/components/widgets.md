---
title: Widgets
source_url: https://developer.apple.com/design/human-interface-guidelines/widgets
platforms: [ios, ipados, macos, watchos]
value_type: platform-specific
last_verified: 2026-06-14
---

# Widgets (incl. Complications & Top Shelf)

> ⚠️ Re-verify on Apple.

## Purpose

A widget shows **glanceable, timely, personal** information from your app on the Home Screen,
Lock Screen, Today view, Notification Center, StandBy, the Mac desktop, or the watch (as a
**complication** / Smart Stack). It's a window into the app, not a mini-app. See [[watchos]].

## Guidelines

- Show the **most relevant** info at a glance; one clear focus per widget. No scrolling; limited
  interactivity (some widgets support tap targets / toggles via App Intents).
- Support the platform's **size families** (small / medium / large on the Home Screen; **extra-large
  on iPad, Mac, and Apple Vision Pro only** — not on iPhone Home Screen; Lock Screen
  inline/circular/rectangular; watch complication families). Design each size as its own layout.
- Update on a sensible **timeline**; never look stale or empty. Provide a useful placeholder/
  redacted state while loading. See [[loading]].
- Respect **light/dark** and the system tint; use semantic colors; keep text legible at small
  sizes with **Dynamic Type**. See [[color]], [[typography]], [[accessibility]].
- Tapping deep-links into the relevant place in the app. Keep tap targets ≥44 pt.
- **Top Shelf** (tvOS) and **complications** (watchOS) are the equivalent glanceable surfaces. See
  [[tvos]], [[watchos]].

## SwiftUI / WidgetKit

`Widget` + `TimelineProvider` (or App Intents timeline); `.containerBackground`;
`supportedFamilies`; `Gauge`/`ProgressView` for ring/bar complications.

## Accessibility

Every widget needs VoiceOver labels; don't convey state by color alone; honor Reduce Motion. See
[[accessibility]].

See also: [[live-activities]], [[notifications]], [[loading]], [[color]], [[watchos]], [[tvos]].
