---
title: Disclosure Controls
source_url: https://developer.apple.com/design/human-interface-guidelines/disclosure-controls
platforms: [macos, ios, ipados]
value_type: platform-specific
last_verified: 2026-06-14
---

> ⚠️ Re-verify on Apple.

# Disclosure Controls

## Purpose

Disclosure controls **reveal and hide information and functionality** related to a specific control
or view — a form of **progressive disclosure** that keeps the initial UI simple while letting people
expand for detail. See [[layout]].

## Types

- **Disclosure triangle** — a small triangle/chevron that **expands or collapses** content,
  typically beside a label or at the start of an outline row. Right-pointing (or trailing) =
  collapsed; down-pointing = expanded. Common in **outline views**, sidebars, and inspectors.
  See [[outline-views]].
- **Disclosure button** — a chevron button (often `⌄`/`⌃`) that shows or hides a region of the
  window, e.g. expanding a save panel or a "more options" area on macOS.
- The equivalent affordance is a **disclosure button on the Mac** but commonly a **disclosure
  indicator / link** on iOS (a trailing chevron on a row that pushes a detail). See [[lists-and-tables]].

## Guidelines

- Use disclosure to **hide complexity people don't always need**, not to bury essential controls.
- **Remember state** where appropriate (expanded/collapsed) so the view restores predictably.
- Place the control where people expect it: **leading** for outline/triangle expansion, near the
  region it controls for a disclosure button.
- Keep the hit target comfortable — meet the **>=44 pt** tap-target rule even though the glyph is
  small. See [[accessibility]].
- Label the expandable region clearly so people know what they'll reveal. See [[labels]].

## Platform notes

- **macOS:** disclosure triangles (outline rows, inspectors) and disclosure buttons (panels).
  See [[macos]].
- **iOS/iPadOS:** disclosure indicators on list rows and expandable groups. See [[ios]].
- Not a primary watchOS/tvOS pattern.

## SwiftUI / AppKit

- **SwiftUI:** `DisclosureGroup { content } label: { … }` (and `OutlineGroup` for hierarchical
  expansion); bind an `isExpanded` state for control/persistence.
- **AppKit:** `NSButton` with `bezelStyle = .disclosure` (triangle) or `.pushDisclosure`; outline
  rows expose a disclosure button via `NSOutlineView`.

## Accessibility

- Expose the **expanded/collapsed state** to VoiceOver (don't rely on triangle orientation alone);
  the control needs a meaningful label since it's often glyph-only. Animate expansion respecting
  **Reduce Motion**. See [[accessibility]].

## Do / Don't

- **Do** hide optional detail behind disclosure and persist its state.
- **Don't** hide critical actions, or make the triangle/chevron the only state cue.

See also: [[outline-views]], [[lists-and-tables]], [[buttons]], [[macos]], [[layout]], [[accessibility]]
