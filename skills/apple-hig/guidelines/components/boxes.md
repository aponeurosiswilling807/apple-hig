---
title: Boxes
source_url: https://developer.apple.com/design/human-interface-guidelines/boxes
platforms: [macos, ios, ipados, visionos]
value_type: platform-specific
last_verified: 2026-06-14
---

> ⚠️ Re-verify on Apple.

# Boxes

## Purpose

A box creates a **visually distinct group of logically related information and components**. It is
a lightweight grouping container — a thin border and/or background that sets a region apart, often
with an optional title. Most common on **macOS** (forms, preference/settings panes); used sparingly
elsewhere. A box is a **content-layer** grouping device, not chrome — don't make it Liquid Glass.
See [[liquid-glass]], [[layout]].

## When to use

- Group a small set of related controls or read-only content that belongs together.
- Prefer a box over heavier containers (separate windows/sheets) for light grouping. See [[sheets]].
- On iOS/iPadOS, prefer **grouped lists** / inset-grouped sections for the same job; reach for a box
  only when a list isn't appropriate. See [[lists-and-tables]].

## Anatomy / Variants

- **Border + optional background fill** delimiting the region.
- **Optional title** describing the group; keep it short, ideally a noun phrase.
- macOS box styles historically include a titled bordered box, a separator-only style, and a
  custom style; treat exact rendering as version-dependent.

## Guidelines

- Use boxes to **clarify relationships**, not as decoration — avoid nesting boxes inside boxes.
- Provide a **title** when the grouping isn't obvious from layout; omit it when proximity already
  communicates the relationship. See [[labels]].
- Keep boxes **uncluttered** — a box crammed with many unrelated controls defeats its purpose.
- Maintain consistent inset/padding so grouped content doesn't touch the border.

## Platform notes

- **macOS:** the primary platform; common in settings and inspector panes. See [[macos]].
- **iOS/iPadOS/visionOS:** available but rare; reconsider whether a grouped list or simple spacing
  reads more natively. See [[ios]], [[settings]].
- Not a watchOS or tvOS pattern.

## SwiftUI / AppKit

- **SwiftUI:** `GroupBox { … }` with an optional `label:`; style via `.groupBoxStyle(_:)`. GroupBox
  is the modern cross-platform equivalent.
- **AppKit:** `NSBox` (set `boxType`, `title`, `titlePosition`).

## Accessibility

- The box title should be a real label exposed to VoiceOver; don't rely on the border alone to
  signal grouping. Border/fill must not be the only contrast cue — meet **3:1** for the border if
  it conveys meaning. Support Dynamic Type for the title (not on macOS). See [[accessibility]], [[color]].

## Do / Don't

- **Do** use a box for light grouping of a few related items with a clear title.
- **Don't** nest boxes, use a box as primary navigation, or style it as glass.

See also: [[macos]], [[layout]], [[lists-and-tables]], [[labels]], [[settings]], [[liquid-glass]]
