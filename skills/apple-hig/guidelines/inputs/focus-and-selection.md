---
title: Focus & Selection
source_url: https://developer.apple.com/design/human-interface-guidelines/focus-and-selection
platforms: [tvos, visionos, ios, ipados, macos]
value_type: platform-specific
last_verified: 2026-06-14
---

# Focus & Selection

> ⚠️ Re-verify on Apple. The focus model is strongest on tvOS; relevance varies by platform.

## Purpose

**Focus** shows which on-screen element an indirect input (Siri Remote, keyboard, game controller,
pointer) will act on. **Selection** is acting on the focused element. A clear focus model lets people
navigate confidently without a touchscreen. Central to **tvOS**; also applies to keyboard navigation
(iPadOS/macOS) and pointer/eye targeting on visionOS.

## How it works

- The **Focus Engine** (tvOS / UIKit) moves focus between focusable elements based on directional
  input and on-screen geometry. Only one element is focused at a time.
- On tvOS the focused element lifts and responds with the **parallax** effect (layered image stack,
  2–5 layers) — a subtle 3D tilt that tracks where it "sits." Buttons/cells enlarge slightly and gain
  a highlight.

## Guidelines

- Make **every actionable element focusable**, and make non-actionable decoration unfocusable.
- Show a **clearly visible focus state** — ring, scale, glow, or parallax — that's obvious at a
  distance (tvOS) and never conveyed by color alone. See [[color]], [[accessibility]].
- Provide a **logical focus order** that matches visual layout and reading direction; mirror for RTL.
  See [[right-to-left]].
- Set a sensible **initial / preferred focus** when a screen appears, and **restore focus** when
  returning. Don't trap focus or leave it nowhere.
- Keep movement **predictable** — directional input should land on the nearest sensible neighbor.

## API

- **tvOS / UIKit:** `UIFocusEnvironment`, `preferredFocusEnvironments`, `UIFocusGuide`,
  `setNeedsFocusUpdate()`; image stacks (`.imagestack`) for parallax; `adjustsImageWhenFocused`.
- **SwiftUI:** `@FocusState` + `.focusable()` / `.focused(_:)`, `.defaultFocus(_:)`,
  `.focusSection()` to group; `.prefersDefaultFocus(in:)` on tvOS.
- **AppKit:** key view loop / `nextKeyView` for keyboard focus.

## Accessibility

Keyboard, **Full Keyboard Access**, Switch Control, and VoiceOver must reach and activate the same
elements in the same logical order. Don't make focus visible only via color or subtle change — ensure
a strong, non-color indicator. See [[accessibility]].

## Do / Don't

- **Do** make actionables focusable, show a strong visible focus state, and set/restore preferred focus.
- **Don't** rely on color for focus, trap focus, or leave illogical/dead-end focus paths.

See also: [[tvos]], [[visionos]], [[eyes]], [[game-controls]], [[navigation]], [[accessibility]], [[color]]
