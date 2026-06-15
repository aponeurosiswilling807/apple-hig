---
title: Outline Views
source_url: https://developer.apple.com/design/human-interface-guidelines/outline-views
platforms: [macos]
value_type: platform-specific
last_verified: 2026-06-14
---

> ⚠️ Re-verify on Apple.

# Outline Views

## Purpose

An outline view presents **hierarchical data in a scrolling list of rows** organized into columns,
where **each level of hierarchy is indented** from its parent. Rows with children can **expand and
collapse** via a disclosure triangle. It's the macOS pattern behind **source lists / sidebars** and
inline tree data. macOS-only. See [[macos]], [[disclosure-controls]].

## Anatomy

- **Rows** at varying indentation depths; deeper = more indented.
- **Disclosure triangle** on parent rows to expand/collapse children. See [[disclosure-controls]].
- **Columns** (an outline view is a tree-capable table — can show multiple sortable columns).

## When to use

- Use for hierarchies you want **visible inline**, where people expand/collapse branches in place.
- Prefer a **column view (browser)** for **deep** hierarchies traversed back-and-forth frequently.
  See [[column-views]].
- Use a plain **list/table** when data is flat. See [[lists-and-tables]].

## Guidelines

- Keep **indentation consistent** so depth is readable at a glance.
- Let people **expand/collapse** freely; **persist** expansion state across launches where it helps.
- When used as a **sidebar / source list**, follow sidebar conventions (sections, selection drives
  content). On macOS 27 ("Golden Gate") sidebars expand and regain active-window color with
  standardized window borders/shapes — verify on Apple as the HIG migrates from the 26 to the
  27/Golden Gate generation. See [[split-views]], [[liquid-glass]].
- Support **sorting** by column where it aids the task; provide context menus and full keyboard nav.
- Don't over-nest — very deep trees become hard to scan; consider a column view instead.

## AppKit

- **`NSOutlineView`** (a subclass of `NSTableView`) with a data source / delegate; rows expose a
  disclosure button (`disclosureButtonIdentifier`).
- **SwiftUI:** `List` with `OutlineGroup` / `children:` for hierarchical, expandable rows; or
  `DisclosureGroup`.

## Accessibility

- Expose **level, expanded/collapsed state, and position** to VoiceOver (not the triangle glyph
  alone). Full **keyboard navigation** (arrow keys expand/collapse and move between rows). Animate
  expansion respecting **Reduce Motion**. Selected state isn't color-only. See [[accessibility]], [[color]].

## Do / Don't

- **Do** use outline views for inline, expandable hierarchies and persist expansion state.
- **Don't** use one for flat data, or for very deep trees better served by a column view.

See also: [[column-views]], [[lists-and-tables]], [[disclosure-controls]], [[split-views]], [[macos]], [[liquid-glass]]
