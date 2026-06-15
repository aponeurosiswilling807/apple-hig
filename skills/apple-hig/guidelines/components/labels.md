---
title: Labels
source_url: https://developer.apple.com/design/human-interface-guidelines/labels
platforms: [ios, ipados, macos, watchos, tvos, visionos]
value_type: universal
last_verified: 2026-06-14
---

> ⚠️ Re-verify on Apple.

# Labels

## Purpose

A label is a **static piece of text** that people can **read and often copy, but not edit**. Labels
describe interface elements, present read-only values, and provide context. They are **not
interactive** controls — for tappable text use a button or link. See [[buttons]], [[text-fields]].

## When to use

- Title or describe a control, section, or value (field labels, headings, captions, status text).
- Present read-only data (a setting's current value, metadata).
- For editable text use a **text field**; for an action use a **button**. See [[text-fields]].

## Guidelines

- **Be concise and clear** — labels should be legible at a glance; front-load the meaningful words.
- Use **sentence case** for most labels (and title-style sparingly per platform conventions).
  See [[typography]].
- Keep labels **readable** — adequate size and contrast; let them **truncate gracefully** (tail
  truncation with an ellipsis) rather than clipping when space is tight.
- **Align** labels consistently with the content they describe; in forms, a consistent label column
  reads cleanly. See [[layout]].
- Use **semantic text colors** (`label`, `secondaryLabel`, `tertiaryLabel`, `quaternaryLabel`),
  never hardcoded hex, so labels adapt to light/dark and accessibility settings. See [[color]].

## Platform notes

- Universal across platforms. On **macOS** field labels typically sit leading and right-aligned to
  their fields. See [[macos]].
- **watchOS/tvOS/visionOS:** prioritize legibility at distance/glance. See [[watchos]], [[tvos]], [[visionos]].

## SwiftUI / UIKit / AppKit

- **SwiftUI:** `Text("…")`; `Label("Title", systemImage: "…")` pairs text with an SF Symbol.
- **UIKit:** `UILabel` (set `text`, `numberOfLines`, `lineBreakMode`, `adjustsFontForContentSizeCategory`).
- **AppKit:** `NSTextField` configured as a label (non-editable, non-bordered).

## Accessibility

- Support **Dynamic Type** (not on macOS) — set `adjustsFontForContentSizeCategory` / use text
  styles so labels scale; allow multi-line wrapping at large sizes.
- Meet contrast: **4.5:1** for body (<=17 pt), **3:1** for large (>=18 pt) or bold; never convey
  meaning by color alone. See [[color]].
- A label that captions an icon-only control should also serve as that control's VoiceOver label.
- Respect **RTL** — use leading/trailing alignment, not left/right. See [[accessibility]].

## Do / Don't

- **Do** keep labels short, semantic-colored, Dynamic-Type-ready, and truncation-safe.
- **Don't** make labels look tappable, hardcode colors, or stuff full sentences where a phrase works.

See also: [[typography]], [[color]], [[text-fields]], [[buttons]], [[accessibility]], [[layout]]
