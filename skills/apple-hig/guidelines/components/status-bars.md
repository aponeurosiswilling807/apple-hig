---
title: Status Bars
source_url: https://developer.apple.com/design/human-interface-guidelines/status-bars
platforms: [ios, ipados]
value_type: platform-specific
last_verified: 2026-06-14
---

# Status Bars

> ⚠️ Re-verify on Apple.

## Purpose

The status bar sits at the **top edge** of the screen and shows system information — time,
cellular/Wi-Fi, battery, and status indicators. The system manages it; your job is to make sure it
stays **legible** over your content and to choose the right content style. See [[ios]], [[ipados]].

## Content style

- Two content styles: **dark** (black glyphs/text) for light backgrounds, and **light** (white) for
  dark backgrounds. Pick the style that keeps the status bar readable over what's behind it.
- The status bar background is **transparent** by default; content shows through. Ensure adequate
  contrast — a navigation bar automatically provides a status-bar background, or place a solid/
  gradient color or blur behind it. See [[navigation-bars]], [[liquid-glass]].

## Guidelines

- **Keep it readable** at all times; don't let busy content make the glyphs hard to see, and don't
  imply the area behind the status bar is interactive.
- **Hide it sparingly** — only temporarily, for **full-screen immersive media** (photo/video
  viewers, games) where it would distract. Bring it back as soon as the user interacts.
- **Never draw a fake status bar** or cover/obscure the real one with custom content; don't relocate
  or replace system indicators.
- Respect the **safe area** — the status bar (and notch / Dynamic Island / home indicator) define
  insets; lay content out within the safe area so nothing important is clipped. See [[layout]].
- Consider light/dark appearance and per-screen needs (a media screen may differ from a list screen).

## Platform notes

- **iOS / iPadOS** only. macOS has a menu bar (different component); tvOS/watchOS/visionOS don't use
  this status bar. Verify on Apple.

## UIKit / SwiftUI

`preferredStatusBarStyle` (`.default` / `.lightContent` / `.darkContent`) and
`prefersStatusBarHidden` on the view controller; in SwiftUI use `.statusBarHidden(_:)` and
`.toolbarColorScheme` / appearance to drive the effective style. Use the layout safe area, not
hardcoded insets.

## Accessibility

Status-bar legibility is part of overall contrast; honor Increase Contrast / Reduce Transparency for
any custom background you place behind it. Don't hide the status bar in a way that removes essential
context for long periods. See [[accessibility]].

## Do / Don't

- **Do** choose a content style that stays legible and respect the safe area.
- **Don't** fake, obscure, permanently hide, or treat the status bar as tappable content.

See also: [[navigation-bars]], [[layout]], [[liquid-glass]], [[ios]], [[ipados]], [[accessibility]]
