---
title: Column Views
source_url: https://developer.apple.com/design/human-interface-guidelines/column-views
platforms: [macos]
value_type: platform-specific
last_verified: 2026-06-14
---

> ⚠️ Re-verify on Apple.

# Column Views

## Purpose

A column view — also called a **browser** (or "miller columns") — lets people view and navigate a
**data hierarchy using a series of vertical columns**. Each column represents one level of the
hierarchy and contains horizontal rows of items. The classic example is **Finder's column view**
for navigating directory structures. macOS-only. See [[macos]].

## Anatomy

- **Columns:** one per hierarchy level, left → right. Selecting a parent in one column reveals its
  children in the next column to the right.
- **Parent indicator:** any item containing nested children is marked with a **triangle (chevron)**
  on the trailing edge of its row. Leaf items have none.
- **Preview/last column:** selecting a leaf can show a detail/preview pane.

## When to use

- Use when you have a **deep hierarchy** in which people **navigate back and forth frequently**
  between levels, and you **don't need sorting** (which a list/table provides). See [[lists-and-tables]].
- Prefer an **outline view** when the hierarchy is shallow or you want everything visible inline.
  See [[outline-views]].

## Guidelines

- **Let people resize columns** — important when item names are too long for the default width.
- Keep navigation **predictable**: selecting moves focus rightward; let people move back up to
  explore other branches.
- Show enough context so people don't lose their place in a deep tree.
- Pair with a **detail/preview** for the selected leaf when useful.

## AppKit

- **`NSBrowser`** is the column-view control; configure delegate-driven columns and selection.
- For hierarchical data more generally, also consider `NSOutlineView` (see [[outline-views]]).

## Accessibility

- Full **keyboard navigation** across and within columns; VoiceOver announces column/level and the
  selected item's position. Don't signal "has children" by the triangle alone — expose it as a
  trait. Support **Reduce Motion** for column transitions. See [[accessibility]].

## Do / Don't

- **Do** use column views for deep, frequently-traversed hierarchies that don't need sorting.
- **Don't** use them when you need sortable columns or when the hierarchy is only one or two levels
  deep — use a table or outline view instead.

See also: [[outline-views]], [[lists-and-tables]], [[split-views]], [[macos]], [[layout]]
