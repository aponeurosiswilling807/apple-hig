---
title: Lists & Tables
source_url: https://developer.apple.com/design/human-interface-guidelines/lists-and-tables
platforms: [ios, ipados, macos, watchos, tvos, visionos]
value_type: exact-spec
last_verified: 2026-06-14
---

# Lists & Tables

> 🔢 Row height is a derived guideline (from the 44×44 pt tap target), not an Apple exact-spec. Re-verify on Apple.

## Purpose

Present an ordered collection of rows. **Lists** (iOS/iPadOS/watchOS/visionOS) show single-column
rows; **tables** (macOS/iPadOS) show multi-column, sortable data. List content is a **content
layer** — keep it opaque; Liquid Glass is for chrome, not rows. See [[liquid-glass]].

## Styles (iOS)

- **Plain** — flush rows, section headers float.
- **Grouped** — rows in rounded cards on a grouped background (`systemGroupedBackground`).
- **Inset grouped** — grouped cards inset from the edges (common in Settings-style UI). See [[settings]].

## Exact values

- **Row height** — rows are typically at least ~44 pt tall to satisfy Apple's recommended
  **44×44 pt minimum tap target** (Layout/Accessibility foundations); Apple does not publish a
  fixed list/table row height, so treat this as a derived guideline, not an exact-spec. Taller for
  subtitle/▸ multi-line rows. Separators use the `separator` semantic color. See [[color]], [[accessibility]].
- Leading/trailing **swipe actions** on iOS rows (delete, more) — keep the destructive one trailing.
- Section headers/footers for grouping and explanation.

## Row anatomy

Leading icon/image · primary + secondary text · trailing accessory (disclosure ▸, checkmark,
switch, value, detail). Use **disclosure indicator** when tapping pushes a detail. See [[navigation-bars]].

## Behavior

- Support selection (single/multi/edit mode), reordering, swipe actions, and context menus
  (long-press). Provide **pull-to-refresh** and pagination where relevant. See [[drag-and-drop]].
- **Empty state:** explain what goes here + how to add the first item. See [[feedback]].

## macOS tables

- Column headers, sortable, resizable; row striping via `gridColor`; right-click context menus;
  full keyboard navigation. See [[macos]].

## SwiftUI

`List { Section("Title") { … } }`; `.listStyle(.insetGrouped/.plain/.grouped)`; `Table` for
columns; `.swipeActions`, `.contextMenu`, `EditButton`.

## Accessibility

Rows expose labels + traits; selected/checked state not by color alone; supports Dynamic Type
(rows grow). VoiceOver reads row content in order. See [[accessibility]].

See also: [[settings]], [[split-views]], [[pickers]], [[searching]], [[color]].
