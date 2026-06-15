---
title: Layout
source_url: https://developer.apple.com/design/human-interface-guidelines/layout
platforms: [ios, ipados, macos, watchos, tvos, visionos]
value_type: exact-spec
last_verified: 2026-06-14
---

# Layout

> 🔢 Mixes universal rules with exact-spec values. Per-device dimensions live in the platform
> files (`platforms/`). Re-verify on Apple.

## Units & resolution

- **Points (pt)** are resolution-independent. **@2x** = 2×2 px/pt, **@3x** = 3×3 px/pt,
  **@1x** = 1 px/pt (older Macs, tvOS HD).
- Design in **points**; export raster assets at each scale the platform needs.

## Safe areas & margins (non-negotiable)

- Keep content and controls inside the **safe area** — clear of the notch / **Dynamic Island**,
  camera housing, **Home indicator**, status bar, nav/tab bars, and (tvOS) **overscan**.
- Respect **layout margins**: the system default leading/trailing content inset is **16 pt in
  compact width** and **20 pt in regular width** (size-class driven, not device model).
- Extend **backgrounds** edge-to-edge; keep **interactive/text** content within safe area + margins.
- **tvOS overscan safe area:** inset primary content **60 pt** from top and bottom and **80 pt**
  from the sides (current guidance; older overscan guidance was ~90/60 px).

## Spacing rhythm

- Use a consistent spacing scale. A common Apple-aligned **convention** (not an official Apple
  spec) is an **8 pt** step (with 4 pt half-steps): `4, 8, 12, 16, 20, 24, 32, …`. Keep spacing
  **on-grid**; avoid arbitrary values like 7 or 13. (44 pt is a touch-target size, not a grid step.)
- **Standard inter-element gap ≈ 8 pt**; **section/group gap ≈ 16–20 pt**; **screen margin 16 pt**.

## Adaptivity (size classes)

- iOS/iPadOS use **size classes**: **compact** and **regular** width/height. Lay out from the
  size class, not the device model.
- iPhone portrait = compact width; most iPhone landscape = compact height; iPad and large iPhones
  in landscape can be regular width → show sidebars/split views. See [[ipados]], [[split-views]].
- **Adapt, don't fix to breakpoints**: support every window size continuously (Stage Manager,
  Mac windows, visionOS resizing).

## Touch targets & hit areas

- Minimum **44×44 pt** interactive target on touch platforms; **60 pt** on visionOS; tvOS uses
  focus, not direct targets. Provide ≥ **8 pt** spacing between adjacent targets (≥4 pt on visionOS).
- A small glyph can have a larger invisible hit area to reach 44 pt.
- The operative design-review rule is **≥44 pt (60 visionOS)**. For reference, the Accessibility
  control-size table lists per-platform **default / minimum** sizes: iOS/iPadOS **44 / 28 pt**,
  macOS **28 / 20 pt**, tvOS **66 / 56 pt**, visionOS **60 / 28 pt**, watchOS **44 / 28 pt**. See
  [[accessibility]]. (44 is the recommended minimum hit target; 28 is the technical floor.)

## Corner radii (concentric)

- Match a control's corner radius to its container, concentric with the **display's** rounded
  corners (Harmony principle). Don't mix unrelated radii.
- Use **continuous** (squircle) curvature rather than a simple circular arc.
- Common iOS radii (approximate community conventions, **not Apple-published exact specs**):
  buttons/cards ~12 pt, sheets ~10–16 pt top corners. Apple's HIG specifies the concentric +
  continuous-curvature principle, not fixed radius values.

## Alignment & reading order

- Establish a clear grid; align labels and controls to it. Group related items.
- Reading order follows the language direction; **mirror for RTL** (see [[right-to-left]]).

See also: [[ios]], [[ipados]], [[macos]], [[tvos]], [[visionos]], [[accessibility]].
