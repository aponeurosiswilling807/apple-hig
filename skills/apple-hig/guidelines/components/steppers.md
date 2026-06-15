---
title: Steppers
source_url: https://developer.apple.com/design/human-interface-guidelines/steppers
platforms: [ios, ipados, macos, visionos]
value_type: platform-specific
last_verified: 2026-06-14
---

# Steppers

> ⚠️ Re-verify on Apple.

## Purpose

A stepper is a **two-segment − / +** control for making **small, discrete adjustments** to a
value (quantity, count, font size). Use when changes are in small increments and the value is
near a known starting point.

## Guidelines

- Always show the **current value** next to the stepper (the stepper itself doesn't display it).
- Use for **small ranges / small steps**. For large ranges, pair with a **[[text-fields|text
  field]]** for direct entry, or use a **[[sliders|slider]]** / **[[pickers|picker]]**.
- Support **press-and-hold** to repeat; define a sensible step, min, and max; clamp at bounds.
- Each segment ≥44 pt target (60 pt visionOS). See [[accessibility]].
- On **watchOS**, the **Digital Crown** is usually the better fit for adjusting values. See [[watchos]].

## SwiftUI

`Stepper(value:, in: range, step:) { Text("Qty: \(n)") }`.

## Accessibility

Adjustable element; announce value on change; keyboard/Crown adjustable. See [[accessibility]].

See also: [[sliders]], [[pickers]], [[text-fields]], [[data-entry]].
