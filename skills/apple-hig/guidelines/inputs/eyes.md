---
title: Eyes
source_url: https://developer.apple.com/design/human-interface-guidelines/eyes
platforms: [visionos]
value_type: exact-spec
last_verified: 2026-06-14
---

# Eyes

> 🔢 exact-spec / version-dependent. Re-verify on Apple.

## Purpose

On Apple Vision Pro, **eyes are the primary targeting mechanism**: people look at an element to
target it, then **pinch** their fingers to select (the spatial equivalent of a tap). Designing for
eyes means making elements easy and comfortable to look at and act on.

## Guidelines

- **Target size:** give each interactive element a minimum target area of **60 pt**. The visible
  element can be smaller than 60 pt if you reach the target area by combining size with **spacing**.
  (For a fixed-scale 3D object, 60 pt ≈ ~2.5° angular size ≈ ~4.4 cm at 1 m.) Treat these numbers as
  version-dependent.
- **Shapes:** prefer **rounded shapes** — circles, pills, rounded rectangles — because they draw the
  eye to the center and are easier to fixate than sharp corners.
- **Hover feedback:** highlight an element on look (the system applies a hover effect to standard
  controls). Custom views should adopt the hover effect so people get a clear "this is targetable" cue.
- **Comfort:** avoid placing important targets at the far edges of the field of view or requiring
  rapid back-and-forth glances; keep frequently used controls central and well-spaced.
- **No gaze-only timing:** never trigger actions purely from where someone looks or from dwell time.
  Require an explicit gesture (pinch) to act, so looking around never causes accidental activation.

## Privacy

Where a person looks is **private** and is **not shared with your app**. Don't try to infer or log
gaze; the system provides only standard hover/selection events, not raw eye position.

## API

- Standard SwiftUI/RealityKit controls get eye targeting + hover for free.
- Adopt `hoverEffect` (e.g. `.hoverEffect()` / `HoverEffect`) on custom interactive views so look
  highlighting works. Selection arrives as ordinary tap/gesture events on pinch.

## Accessibility

Support alternatives to eyes+pinch: **Pointer Control** (head/wrist/finger pointer), **Dwell**, and
**VoiceOver** for people who can't use precise gaze. Keep targets large and spaced. Don't rely on a
specific eye gesture as the only way to act. See [[accessibility]].

## Do / Don't

- **Do** use ≥60 pt targets, rounded shapes, hover highlighting, and an explicit pinch to confirm.
- **Don't** act on gaze alone, store/infer gaze, crowd small targets, or assume everyone can look precisely.

See also: [[visionos]], [[focus-and-selection]], [[digital-crown]], [[accessibility]], [[privacy]], [[layout]]
