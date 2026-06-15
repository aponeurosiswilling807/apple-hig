---
title: Toolbars
source_url: https://developer.apple.com/design/human-interface-guidelines/toolbars
platforms: [ios, ipados, macos, visionos]
value_type: platform-specific
last_verified: 2026-06-14
---

# Toolbars

> ⚠️ Re-verify on Apple.

## Purpose

A toolbar gives quick access to **frequent actions** for the current screen/view. Unlike a tab
bar (navigation), a toolbar holds **commands** (compose, share, delete, edit). On 26+ it floats in
**Liquid Glass**. See [[liquid-glass]], [[tab-views]].

## Placement

- **iOS/iPadOS:** a **bottom toolbar** for screen-level actions, or actions in the top nav bar's
  trailing area. See [[navigation-bars]].
- **macOS:** the **window toolbar** (unified with the title); customizable by the user; pairs with
  the **menu bar** (every toolbar action should also exist as a menu command). See [[macos]], [[menus]].
- **visionOS:** an **ornament** anchored below/around the window. See [[visionos]].

## Guidelines

- Show the **most important, most frequent** actions; move the rest into an **overflow menu**
  (`ellipsis.circle`). Don't overflow the bar.
- Use clear **SF Symbols** with labels/VoiceOver labels; group related items; keep order stable.
  See [[sf-symbols]].
- Each item ≥**44 pt** target (60 pt visionOS). Provide the Large Content Viewer. See [[accessibility]].
- Reflect state (enabled/disabled) clearly; don't rely on color alone.

## SwiftUI

`.toolbar { ToolbarItem(placement: .bottomBar/.primaryAction/.navigation) { … } }`;
`ToolbarItemGroup`; on macOS, expose the same actions in `CommandMenu`.

## Do / Don't

- ✅ Frequent, screen-relevant actions; consistent across the app.
- ❌ Don't mix navigation (tabs) into a toolbar, don't bury the primary action, don't exceed what
  fits — overflow gracefully.

See also: [[navigation-bars]], [[menus]], [[tab-views]], [[buttons]], [[liquid-glass]].
