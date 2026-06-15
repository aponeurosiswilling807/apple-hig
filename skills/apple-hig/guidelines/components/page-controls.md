---
title: Page Controls
source_url: https://developer.apple.com/design/human-interface-guidelines/page-controls
platforms: [ios, ipados, tvos, visionos]
value_type: platform-specific
last_verified: 2026-06-14
---

# Page Controls

> ⚠️ Re-verify on Apple.

## Purpose

A row of **indicator dots** showing how many flat pages exist and which is current — used with a
horizontally paged scroll view (onboarding carousels, Home Screen pages, image galleries). See
[[onboarding]].

## Guidelines

- Use only for a **small number of peer pages** (roughly ≤ ~8–10 visible dots; beyond that the
  count is hard to read — consider a list or paging with labels instead).
- The current page dot is emphasized; tapping/dragging the control can move between pages.
- Don't rely on the dots **alone** to convey location for accessibility — expose page position to
  VoiceOver and allow swipe navigation. **Differentiate Without Color** users need more than a
  color difference. See [[accessibility]].
- Keep dots within the safe area; don't overlap meaningful content.

## SwiftUI

`TabView { … }.tabViewStyle(.page)` shows page indicators; `.indexViewStyle` to customize.

## Accessibility

Announce "page X of N" and update on change; ensure the paged content is swipe-navigable with
VoiceOver. See [[accessibility]].

See also: [[onboarding]], [[tab-views]], [[navigation]].
