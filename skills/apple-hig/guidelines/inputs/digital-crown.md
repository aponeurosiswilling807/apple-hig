---
title: Digital Crown
source_url: https://developer.apple.com/design/human-interface-guidelines/digital-crown
platforms: [watchos, visionos]
value_type: platform-specific
last_verified: 2026-06-14
---

# Digital Crown

> ⚠️ Re-verify on Apple. Behavior differs sharply between watchOS and visionOS.

## Purpose

A physical rotating dial. On **Apple Watch** it drives precise scrolling and value adjustment without
covering the small screen with a finger. On **Apple Vision Pro** it controls the **level of immersion**
(blending passthrough with an immersive scene) and re-centers content.

## Platform notes

- **watchOS:** rotate to scroll long lists, zoom, or change a focused value (volume, time, picker).
  The system plays **haptic detents** (taps) as the value changes, and a rubber-banding feel at the
  ends of a finite range. Pressing the Crown is a hardware navigation/Home action — don't override it.
- **visionOS:** rotate to dial immersion up/down in a **progressive immersive space**; press to
  recenter. With a progressive style the minimum immersion is not necessarily 0 — you can specify the
  initial/min/max immersion amount. Press routing depends on whether an immersive space is open.

## Guidelines

- Pair Crown rotation with a clear **on-screen indicator** so people see the value moving (a scroll
  position, slider thumb, number, or immersion meter). Never make rotation change something invisible.
- Map rotation direction to expectation: rotate **up/away to increase**, down/toward to decrease;
  mirror for RTL only when the value is directional. See [[right-to-left]].
- Use **haptic detents** for discrete/stepped values and continuous (haptic-light) feel for ranges.
- Keep the Crown as an **accelerator**, not the only input — on-screen controls must also work.

## API (SwiftUI)

- `.digitalCrownRotation(_:from:through:by:sensitivity:isContinuous:isHapticFeedbackEnabled:onChange:onIdle:)`
  binds a value to Crown rotation, with detent/haptic options.
- `focusable()` + `.digitalCrownRotation` to route the Crown to the focused element on watchOS.
- visionOS immersion is controlled via `ImmersiveSpace` with a **progressive** `ImmersionStyle`
  (configurable min/initial/max).

## Accessibility

Expose Crown-driven controls as **adjustable** elements (VoiceOver increment/decrement) and ensure
on-screen alternatives exist. Don't require fine Crown precision for essential tasks. Respect Reduce
Motion when immersion changes animate. See [[accessibility]], [[motion]].

## Do / Don't

- **Do** show a live indicator, use detents for steps, and keep on-screen parity.
- **Don't** override the Crown press, change invisible state, or make it the sole input path.

See also: [[watchos]], [[visionos]], [[sliders]], [[eyes]], [[motion]], [[accessibility]]
