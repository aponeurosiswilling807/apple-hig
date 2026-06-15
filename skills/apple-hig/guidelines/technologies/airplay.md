---
title: AirPlay
source_url: https://developer.apple.com/design/human-interface-guidelines/airplay
platforms: [ios, ipados, macos, tvos]
value_type: universal
last_verified: 2026-06-14
---

# AirPlay

> ⚠️ Re-verify on Apple.

## Purpose

AirPlay lets people stream audio and video wirelessly from an app to **Apple TV, HomePod, AirPlay-
enabled TVs and speakers**, and Macs. Surface a standard route picker so people can send playback to
another destination without leaving the current context.

## Guidelines

- **Use the system route picker**, not a custom control. The picker shows available destinations and
  the current route; it adapts as devices appear/disappear.
- **Place the route button where playback lives** — in the media transport controls, alongside
  play/pause and volume. Don't hide it behind extra navigation.
- **Don't block or disable AirPlay** unless a real constraint requires it (e.g. DRM, a route that
  can't carry the content). If you must restrict, explain why.
- **Match the right glyph**: use the **video** route glyph for video content and the **audio** route
  glyph for audio-only content so the destination list filters appropriately.
- Keep playing smoothly across a route change; don't reset position or lose state. Reflect the active
  route in the UI so people know where sound/video is going.

## API

- **`AVRoutePickerView`** (UIKit/AppKit) — the standard AirPlay route button; set `.prioritizesVideoDevices`
  for video content.
- **SwiftUI** — `RoutePickerView` (wrap `AVRoutePickerView`) or the system media controls in
  `AVPlayerViewController` / `VideoPlayer`, which include the picker automatically.
- `MPVolumeView` (legacy) also exposes a route button. Use `AVRoutePickerView` for new code.
- Don't redraw the glyph yourself; use the Apple-provided assets/views. See [[licensing-and-assets]].

## Platform notes

- **tvOS** — playback is already on the TV; AirPlay is mainly relevant for receiving, not picking.
- **macOS** — the picker appears in media chrome and the menu bar/Control Center.
- Liquid Glass styling applies to surrounding transport chrome (verify on Apple as the HIG migrates
  from the 26 to the 27/Golden Gate generation). See [[liquid-glass]].

## Accessibility

The route button needs a clear VoiceOver label ("AirPlay"); announce route changes. Don't convey the
active destination by color alone. Keep the target ≥44 pt. See [[accessibility]].

## Do / Don't

- ✅ Show the route picker in transport controls; preserve playback across route changes.
- ❌ Don't build a custom AirPlay button, hide the control, or restyle the glyph.

See also: [[ios]], [[tvos]], [[macos]], [[accessibility]], [[liquid-glass]]
