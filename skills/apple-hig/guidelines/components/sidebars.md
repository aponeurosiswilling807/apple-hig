---
title: Sidebars
source_url: https://developer.apple.com/design/human-interface-guidelines/sidebars
platforms: [ipados, macos, visionos]
value_type: platform-specific
last_verified: 2026-06-14
---

# Sidebars

> ⚠️ WWDC 2026 (June 2026) refined Liquid Glass and changed macOS sidebars (macOS 27, "Golden
> Gate"): sidebars expand and regain active-window color, with standardized window borders/shapes.
> Sidebar width values below are historical defaults, not a current published exact spec. Re-verify
> on Apple as the HIG migrates from the 26 to the 27/Golden Gate generation.

## Purpose

A sidebar sits on the **leading edge** of a window and provides **top-level navigation** between the
areas of an app or between collections of content (folders, playlists, mailboxes) — historically the
macOS "source list." It is the primary navigation surface for content-rich iPad and Mac apps. See
[[macos]], [[ipados]].

## Anatomy

- A vertical, often **grouped/sectioned** list of destinations, each with an SF Symbol + label.
  See [[sf-symbols]].
- Selecting an item updates the **content/detail** area — sidebars are the navigation column of a
  [[split-views|split view]] (`sidebar · content · detail`).
- Collapsible; remember and restore collapsed/expanded state and the current selection.
- Width is **roughly adaptive / ~320 pt** expanded on iPad (a historical UIKit default; varies by
  app and device) — not a current published exact spec.

## Liquid Glass & WWDC 2026 notes

- On the 26 generation the sidebar adopts **Liquid Glass** (chrome-only — never the content layer;
  variants regular/clear). See [[liquid-glass]].
- WWDC 2026 / macOS 27 ("Golden Gate"): sidebars **expand** and **regain active-window color**,
  with standardized window borders and shapes. Still Liquid Glass, not a new system. Verify exact
  appearance on Apple.

## Platform notes

- **iPadOS:** since iPadOS 18 a `TabView` can present its tabs as **either** a tab bar **or** a
  sidebar; users can switch, and sidebar items can be **reordered by drag and drop**. In **compact
  width** the sidebar collapses into a navigation stack. See [[tab-views]], [[tab-bars]], [[layout]].
- **macOS:** a `TabView`/tab controller that supports a sidebar adopts the **standard Mac sidebar
  appearance** automatically.
- **visionOS:** for root tabs the navigation appears as an **ornament** on the window's leading
  edge rather than a flat sidebar. See [[visionos]].
- Sidebars are **not** a watchOS or tvOS pattern. See [[watchos]], [[tvos]].

## SwiftUI / UIKit

- **SwiftUI:** `NavigationSplitView { sidebar } content: { … } detail: { … }`; or
  `TabView { … }.tabViewStyle(.sidebarAdaptable)` to switch between a tab bar and a sidebar by size
  class. Use `List(selection:)` for the sidebar items; `.listStyle(.sidebar)` on macOS.
- **UIKit:** `UISplitViewController` (`.sidebar` column) / a sidebar-style `UICollectionViewList`.

## Accessibility

- Each item needs a clear label and **selected trait**; don't signal selection with color alone.
  Logical focus order; the collapsed compact flow must be fully navigable; support Dynamic Type
  (not on macOS) and Full Keyboard Access. See [[accessibility]].

## Do / Don't

- **Do** use a sidebar for **stable, top-level** destinations and collections.
- **Don't** bury actions or transient steps in a sidebar (use a [[toolbars|toolbar]] / sheet), and
  don't show a sidebar in compact width where a tab bar or stack fits better.

See also: [[split-views]], [[tab-views]], [[tab-bars]], [[navigation-bars]], [[liquid-glass]], [[macos]], [[ipados]], [[visionos]]
