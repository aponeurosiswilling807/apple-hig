---
title: Spatial Layout
source_url: https://developer.apple.com/design/human-interface-guidelines/spatial-layout
platforms: [visionos]
value_type: exact-spec
last_verified: 2026-06-14
---

# Spatial Layout

> 🔢 **exact-spec / version-dependent.** Re-verify on Apple.

## Purpose

Spatial layout positions content across the infinite canvas of Apple Vision Pro so it is
engaging, legible, and physically comfortable. Use depth, placement, and scale deliberately so
people don't experience eye or neck fatigue.

## Placement & field of view

- **Center the important stuff.** The more centered content is in the field of view, the more
  comfortable it is for the eyes. Place primary content and actions near center.
- **Favor landscape.** Wide, landscape layouts match the headset's wide field of view; people
  turn their head left/right far more easily than up/down, so spread content horizontally and
  avoid stacking it too tall.
- **Place windows at a comfortable distance and angle.** Position content roughly at arm's length
  and tilt it to face the wearer; avoid putting content too close, too high, or too low (which
  forces uncomfortable neck/eye angles).
- **Curve large layouts inward.** Turn side elements toward the viewer so they're easier to read
  off-axis (e.g. Safari's visionOS tab grid).

## Dynamic scaling

- Content **scales with distance** so it stays a comfortable apparent size: as a window moves
  farther away, the system can scale it up to preserve legibility; nearer content scales down.
- Side/peripheral elements may scale down and angle inward so they aren't too far from center.
- Design at the system's default reference distance and let dynamic scaling preserve readable
  sizes rather than hardcoding pixel dimensions.

## Targets & ergonomics (exact)

- **Interactive targets: ≥60×60 pt** on visionOS (eye-tracking is less precise than touch). The
  Accessibility control-size table lists visionOS **60 / 28 pt** default / minimum; use **60 pt**
  as the operative rule. See [[accessibility]].
- Provide adequate spacing between targets (≥ ~4 pt; generous spacing helps gaze selection).
- **Minimize the number of windows** and keep the interface cohesive to reduce head/eye travel.
- Account for **neck range of motion**: easier to rotate horizontally than to look up/down — keep
  content within a comfortable vertical band.

## Depth & layering

- Use depth to express hierarchy, but **subtly** — extreme separation forces the eyes to refocus
  (vergence) and causes fatigue. Keep related content at similar depths.
- Liquid Glass and materials provide visionOS chrome; content layers sit behind chrome, never on
  glass. See [[materials]], [[liquid-glass]].

## visionOS / API

- SwiftUI: `WindowGroup`, `Volume` / volumetric `WindowGroup`, `.windowStyle(.volumetric)`,
  ornaments for controls anchored to windows; RealityKit for 3D content placement and anchoring.
- Respect the user's chosen window position — let people place and move windows.

## Accessibility

- ≥60 pt targets; legible type at the chosen distance; honor **Reduce Motion** and avoid
  large moving fields. See [[motion]].
- Support eyes + hands and VoiceOver; don't rely on color or depth alone for meaning.

## Do / Don't

- ✅ Center primary content, favor landscape, place windows at a comfortable distance/angle.
- ✅ Let dynamic scaling preserve readable sizes; keep targets ≥60 pt.
- ❌ Put content too high, too low, or too close; don't force big vertical neck movement.
- ❌ Scatter many windows or use exaggerated depth that strains the eyes.

See also: [[immersive-experiences]], [[visionos]], [[layout]], [[materials]], [[accessibility]]
