---
title: Split Views & Sidebars
source_url: https://developer.apple.com/design/human-interface-guidelines/split-views
platforms: [ipados, macos, visionos]
value_type: platform-specific
last_verified: 2026-06-14
---

# Split Views & Sidebars

> 🔢 Sidebar width ~320 pt is a historical UIKit default, not a current published exact spec.
> ⚠️ WWDC 2026 (June 2026) refined Liquid Glass and introduced sidebar appearance changes on
> macOS 27 ("Golden Gate") — sidebars expand and regain active-window color, with standardized
> window borders/shapes. The exact sidebar corner-radius value is weakly sourced — not in Apple's
> HIG changelog as of 2026-06-14. Re-verify on Apple as the HIG migrates from the 26 to the
> 27/Golden Gate generation.

## Purpose

A split view shows **2–3 columns** side by side — typically **sidebar (navigation) · content ·
detail** — for hierarchical browsing on large screens. The standard structure for iPad and Mac
apps with many sections. See [[ipados]], [[macos]].

## Columns

- **Sidebar (leading):** top-level destinations / source list. Collapsible. Width ~**320 pt**
  expanded on iPad (a historical UIKit default; varies by app/device). On 26+ the sidebar uses
  Liquid Glass; WWDC 2026 (June 2026) introduced sidebar appearance changes — on macOS 27
  ("Golden Gate") sidebars expand and regain active-window color, with standardized window
  borders/shapes. The exact corner-radius value is weakly sourced; re-verify on Apple.
  See [[liquid-glass]].
- **Content (supplementary):** a list within the selected section.
- **Detail:** the focused content for the selected item; holds its own nav bar/toolbar.

## Adaptivity (important)

- **Regular width** (iPad landscape, Mac, large iPad windows): columns show side by side.
- **Compact width** (iPhone, narrow iPad/Stage Manager windows): the split view **collapses to a
  navigation stack** — sidebar → content → detail become pushed screens. Design both. See [[layout]].
- Support **Slide Over / Split View / Stage Manager** resizing fluidly. See [[multitasking]].

## Guidelines

- Persist and restore selection. Selecting a sidebar item updates content/detail, not a full
  navigation reset.
- Provide a way to collapse/show the sidebar; remember its state.
- Use a **three-column** layout only when the hierarchy genuinely has three levels.

## SwiftUI

`NavigationSplitView { sidebar } content: { list } detail: { detail }`;
`.navigationSplitViewStyle(.balanced/.prominentDetail)`; `TabView(.sidebarAdaptable)` to switch
between tabs and a sidebar by size class. See [[tab-views]].

## Accessibility

Logical focus order across columns; the collapsed (compact) flow must be fully navigable;
Dynamic Type in all columns. See [[accessibility]].

See also: [[ipados]], [[macos]], [[tab-views]], [[lists-and-tables]], [[multitasking]], [[liquid-glass]].
