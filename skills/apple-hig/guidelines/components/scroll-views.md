---
title: Scroll Views
source_url: https://developer.apple.com/design/human-interface-guidelines/scroll-views
platforms: [ios, ipados, macos, watchos, tvos, visionos]
value_type: universal
last_verified: 2026-06-14
---

> ⚠️ Re-verify on Apple as the HIG migrates from the 26 to the 27/Golden Gate generation.

# Scroll Views

## Purpose

A **scroll view** lets people view content larger than its bounds by moving it vertically or
horizontally. The framework handles the scrolling interaction; you supply the content and configure
indicators, paging, and edge behavior. See [[layout]].

## Anatomy

- **Scroll indicator:** a translucent indicator that typically appears after scrolling begins, then
  fades. Gives feedback on position/length. Appearance and behavior vary by platform.
- **Content:** can exceed bounds on one or both axes.
- **Edge effect (26+):** content scrolling **under** a navigation bar or toolbar automatically gets
  an **edge effect** — a soft blur/fade that keeps overlapping bar content legible over the Liquid
  Glass chrome. A **hard** style (a crisp line, no blur) suits denser UIs with floating elements.
  See [[liquid-glass]], [[navigation-bars]], [[toolbars]].

## Guidelines

- **One scroll view per screen per axis.** Avoid nesting a scroll view inside another with the
  **same orientation** — large swipes make the inner/outer ambiguous and hard to control.
- Perpendicular nesting (e.g. a horizontal carousel inside a vertical scroll) is acceptable when the
  axes don't conflict.
- Support standard **system scrolling gestures and keyboard shortcuts** everywhere; people expect
  systemwide scrolling behavior to just work.
- **Paging:** in page-by-page mode, scrolling reveals a whole new page. Consider a **page control**
  to show count/position — and **disable the scroll indicator on the same axis** to avoid confusion.
  See [[page-controls]].
- **Pull-to-refresh:** support refreshing where content updates over time; don't make it the only
  way to refresh critical data.
- **Keyboard avoidance:** when the keyboard appears, ensure focused fields and content scroll clear
  of it; restore position on dismiss. See [[text-fields]].
- Preserve and restore **scroll position** across navigation and relaunch where it aids continuity.
- Honor **safe areas** and let content scroll edge-to-edge under bars (with the edge effect) rather
  than boxing it in. See [[layout]].

## Platform notes

- **tvOS:** focus-driven scrolling — content scrolls as focus moves; design for the focus engine.
- **watchOS:** Digital Crown scrolls; map the crown to the primary scroll axis.
- **visionOS:** scroll within windows; avoid very long scroll content that forces head/neck strain.
- **macOS:** overlay (auto-hiding) vs legacy scrollers per system preference; support trackpad
  momentum and keyboard.

## SwiftUI / UIKit / AppKit

- SwiftUI: `ScrollView`, `.scrollIndicators(_:)`, `.scrollTargetBehavior(.paging)`,
  `.scrollPosition(_:)`, `.scrollEdgeEffectStyle(_:for:)` (`.soft` default / `.hard`),
  `.refreshable {}`, `.scrollDismissesKeyboard(_:)`, `.scrollClipDisabled()`.
- UIKit: `UIScrollView` (`isPagingEnabled`, `showsVerticalScrollIndicator`, `refreshControl`),
  `UIScrollEdgeEffect` with `UIScrollEdgeEffect.Style` (`.soft` / `.hard`),
  `UIScrollEdgeElementContainerInteraction` (assign `contentScrollView` + `edge`) for custom
  overlay containers.
- AppKit: `NSScrollView`; edge effect style configurable on the scroll view.

## Accessibility

VoiceOver three-finger scroll and "scroll to" actions must work; don't trap focus; ensure
keyboard-avoidance keeps the focused element visible; respect Reduce Motion for any
scroll-triggered animation. See [[accessibility]].

## Do / Don't

- **Do** keep one same-axis scroll view per screen and let content flow under bars with the edge
  effect.
- **Do** pair paging with a page control and disable the same-axis indicator.
- **Don't** nest conflicting same-orientation scroll views.
- **Don't** rely on pull-to-refresh as the sole refresh mechanism.

See also: [[layout]], [[page-controls]], [[navigation-bars]], [[toolbars]], [[lists-and-tables]], [[liquid-glass]], [[accessibility]].
