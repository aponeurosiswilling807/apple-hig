---
title: Motion
source_url: https://developer.apple.com/design/human-interface-guidelines/motion
platforms: [ios, ipados, macos, watchos, tvos, visionos]
value_type: universal
last_verified: 2026-06-14
---

# Motion

> ⚠️ Universal. Re-verify on Apple.

## Purpose, not decoration

- Use motion to **convey hierarchy and spatial relationships**, communicate status, give
  feedback, direct attention, and celebrate key moments.
- Keep motion **brief, smooth, and consistent** with system transitions (push, modal present,
  zoom). Liquid Glass adds fluid morph transitions for chrome — see [[liquid-glass]].
- Don't animate for its own sake; gratuitous motion distracts and can cause discomfort.

## Reduce Motion (must honor)

- When **Reduce Motion** is on, replace large translational/parallax/zoom animation with a
  **crossfade** or no animation.
- **Never convey essential information through motion alone** — pair with text/state changes so
  a reduced-motion or VoiceOver user gets the same information.
- In SwiftUI, gate animations on `accessibilityReduceMotion`; in UIKit, check
  `UIAccessibility.isReduceMotionEnabled`.

## Complement with haptics & audio

- Pair meaningful moments with **haptics** (iOS/watchOS) and/or audio where appropriate — but
  never make haptics/audio the *only* channel.

## Platform notes

- **visionOS:** avoid moving the **camera/viewpoint** or large field-of-view motion — it causes
  motion sickness. Keep a **stationary frame of reference**, animate objects not the world, and
  prefer gentle, damped motion. See [[visionos]].
- **tvOS:** focus uses a subtle **parallax**/tilt on the focused item; keep it consistent. See [[tvos]].
- **watchOS:** short, glanceable transitions; respect the small screen and battery.

## Performance

- Target the platform's frame rate (often 60–120 fps); avoid jank during scroll. Don't block the
  main thread during animation.

See also: [[liquid-glass]], [[accessibility]], [[feedback]].
