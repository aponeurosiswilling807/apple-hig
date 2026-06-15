---
title: Color Wells
source_url: https://developer.apple.com/design/human-interface-guidelines/color-wells
platforms: [ios, ipados, macos, visionos]
value_type: platform-specific
last_verified: 2026-06-14
---

# Color Wells

> ⚠️ Re-verify on Apple.

## Purpose

A color well lets the user **adjust the color** of text, shapes, guides, and other onscreen
elements. It shows the **current color** as a swatch and, when activated, opens the **system color
picker**. Use it wherever color is a meaningful, user-editable attribute.

## Anatomy

- A swatch showing the currently selected color.
- Tapping/clicking it presents the **system color picker** (eyedropper, grids, sliders, spectrum,
  and — on macOS — the full color panel with custom palettes).

## Guidelines

- Prefer the **system** color well/picker so you inherit eyedropper, opacity, color spaces,
  localization, and accessibility for free — don't build a bespoke picker.
- Make the swatch reflect the **live** selection so the current color is always obvious.
- Don't rely on color **alone** to convey state or meaning — pair with text/shape/labels. See
  [[color]], [[accessibility]].
- Keep the control's tap/click target comfortable — **≥44 pt** (60 pt visionOS); macroscopic
  swatches read better than tiny chips. See [[accessibility]].

## Platform notes

- **macOS:** opens the standard color panel; supports custom color lists and the magnifier
  eyedropper. See [[macos]].
- **iOS/iPadOS/visionOS:** presents the modal system color picker sheet. See [[ios]], [[visionos]].
- Not available on watchOS or tvOS.

## SwiftUI / UIKit / API

- SwiftUI: `ColorPicker("Stroke", selection: $color, supportsOpacity: true)`.
- UIKit: `UIColorWell`; `UIColorPickerViewController` for the picker UI.
- AppKit: `NSColorWell`, backed by the shared `NSColorPanel`.

## Accessibility

Give the well a clear VoiceOver **label** (e.g. "Text color") and announce the selected color by
name where possible; never communicate the value by hue alone. Support Dynamic Type for the
adjacent label (not macOS). See [[accessibility]].

## Do / Don't

- **Do** use the system picker; show the live swatch; provide a descriptive label.
- **Don't** convey state by color only; don't shrink the swatch below a comfortable target; don't
  hardcode a custom picker that skips accessibility and color-space support.

See also: [[color]], [[image-wells]], [[pickers]], [[accessibility]], [[macos]], [[ios]]
