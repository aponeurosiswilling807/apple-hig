---
title: Collections
source_url: https://developer.apple.com/design/human-interface-guidelines/collections
platforms: [ios, ipados, macos, tvos, visionos]
value_type: platform-specific
last_verified: 2026-06-14
---

> ⚠️ Re-verify on Apple.

# Collections

## Purpose

A collection manages an **ordered set of content** and presents it in a **customizable, highly
visual layout** — grids, columns, or arbitrary arrangements of items. Use a collection when the
**visual content itself is the point** (photos, albums, media tiles); use a **list/table** when
rows of text-led data read better. See [[lists-and-tables]]. Collection items are a **content
layer** — keep them opaque; Liquid Glass is chrome only. See [[liquid-glass]].

## When to use vs. lists

- **Collection** — flexible, multi-column, image-forward layouts; items vary in size; grid feel.
- **List/table** — single-column rows, text-led, sortable columns (macOS/iPadOS tables).

## Guidelines

- **Use a consistent layout** so items read as a set; avoid surprising the user with erratic sizing.
- Make **spacing and margins consistent**; let items breathe. See [[layout]].
- Support **selection** (single/multi/edit mode), **reordering**, and **context menus**; reflect
  selection by more than color (border/checkmark). See [[menus]], [[drag-and-drop]].
- Adapt the number of columns to **size class / window size** rather than hardcoding. See [[split-views]].
- Provide a clear **empty state** that explains what goes here and how to add the first item.
  See [[feedback]].

## Platform notes

- **iOS/iPadOS:** the core grid/gallery pattern; supports drag-and-drop and reordering.
- **tvOS:** items are **focusable lockups** in shelves with parallax; design for the focus engine.
  See [[lockups]], [[tvos]].
- **macOS:** gallery/grid layouts; resizable, keyboard-navigable. See [[macos]].
- Not a primary watchOS pattern.

## UIKit / AppKit / SwiftUI

- **UIKit:** `UICollectionView` with **`UICollectionViewCompositionalLayout`** (item → group →
  section → layout); diffable data sources for updates.
- **AppKit:** `NSCollectionView` with `NSCollectionViewCompositionalLayout`.
- **SwiftUI:** `LazyVGrid` / `LazyHGrid` with `GridItem` columns inside a `ScrollView`; `Grid` for
  fixed table-like grids.

## Accessibility

- Each item exposes a meaningful **VoiceOver label** and traits; selection state isn't color-only.
- Support **Dynamic Type** (item text grows; let layout reflow), **Reduce Motion** (tone down
  parallax/scroll effects), and logical focus order. See [[accessibility]].

## Do / Don't

- **Do** keep item sizing/spacing consistent and adapt columns to available width.
- **Don't** use a collection for plain text rows (use a list) or apply glass to item content.

See also: [[lists-and-tables]], [[layout]], [[lockups]], [[split-views]], [[drag-and-drop]], [[tvos]], [[liquid-glass]]
