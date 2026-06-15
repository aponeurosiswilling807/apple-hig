---
title: Playing Haptics
source_url: https://developer.apple.com/design/human-interface-guidelines/playing-haptics
platforms: [ios, visionos]
value_type: platform-specific
last_verified: 2026-06-14
---

# Playing Haptics

> ⚠️ iPhone-class hardware (Taptic Engine); visionOS delivers haptics through paired/handheld
> input. Not available on iPad, Mac, or Apple TV. Re-verify on Apple.

Haptics are physical taps and vibrations that **reinforce** what people see and hear. Use them to
confirm actions and signal events — never as the sole channel.

## Purpose

Add a tactile dimension that makes interactions feel responsive and grounded, and that conveys
meaning (success, warning, alignment) the moment it happens.

## Types

Two layers exist; prefer the **system patterns** unless you genuinely need custom design.

- **System feedback (UIFeedbackGenerator)** — predefined, consistent patterns:
  - **Notification** — `success`, `warning`, `error`.
  - **Impact** — a physical collision/snap; styles `light`, `medium`, `heavy`, plus `soft` /
    `rigid`.
  - **Selection** — a subtle tick as a value changes (picker/slider stepping).
- **Custom haptics (Core Haptics)** — compose **transient** and **continuous** events, varying
  **intensity** and **sharpness**, optionally synced with audio, for richer experiences (games,
  signature moments).

## Guidelines

- **Complement, don't replace.** Pair haptics with visual and/or audible feedback so meaning never
  depends on touch alone. See [[feedback]], [[accessibility]].
- **Be purposeful and sparing.** Constant or gratuitous buzzing feels noisy and drains battery and
  attention. Reserve haptics for meaningful moments.
- **Match the haptic to the meaning** — use `success`/`warning`/`error` for outcomes, `selection`
  for value changes, impact for collisions/snaps. Consistency builds an intuitive vocabulary.
- **Align with the visuals/audio** — fire the haptic at the exact instant of the on-screen event so
  it reads as one experience.
- **Honor the user's settings** — System Haptics can be off, and some contexts (low-power, calls)
  suppress them. Don't depend on a haptic landing.
- **Standard controls already vibrate** — switches, pickers, and date wheels play system haptics;
  don't double up.

## Platform notes

- **iOS / iPhone** — full Taptic Engine support. Custom Core Haptics requires capable hardware;
  check `CHHapticEngine.capabilitiesForHardware()`.
- **visionOS** — haptics arrive through compatible input accessories, not the headset itself; treat
  as optional reinforcement. See [[visionos]].

## API

`UINotificationFeedbackGenerator`, `UIImpactFeedbackGenerator`, `UISelectionFeedbackGenerator`;
SwiftUI **`.sensoryFeedback(_:trigger:)`**; **Core Haptics** (`CHHapticEngine`,
`CHHapticPattern`, `CHHapticEvent`, AHAP files).

## Accessibility

Some people can't perceive haptics; always provide an equivalent visual/audible cue. Don't use
haptics to convey information not available elsewhere. See [[accessibility]].

## Do / Don't

- Do reinforce key events and align with visuals/audio.
- Don't overuse, rely on haptics alone, or assume every device/user receives them.

See also: [[feedback]], [[playing-audio]], [[playing-video]], [[accessibility]], [[ios]]
