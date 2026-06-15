---
title: Sliders
source_url: https://developer.apple.com/design/human-interface-guidelines/sliders
platforms: [ios, ipados, macos, visionos]
value_type: platform-specific
last_verified: 2026-06-14
---

# Sliders

> ⚠️ Re-verify on Apple.

## Purpose

A slider selects a value from a **continuous range** by dragging a thumb along a track. Use for
approximate, adjustable values where exact precision isn't required (volume, brightness, opacity).

## Guidelines

- Provide **min/max** affordances (icons or labels) showing the range's meaning (e.g. sun icons
  for brightness). Optionally show the current value.
- Add **tick marks** for stepped values; otherwise keep it continuous.
- The thumb must be a comfortable drag target (≥44 pt effective; 60 pt visionOS). See [[accessibility]].
- **Don't** use a slider for precise/discrete numeric entry — use a **[[steppers|stepper]]**,
  **[[text-fields|text field]]**, or **[[pickers|picker]]**.
- Mirror direction for RTL where the value has directional meaning. See [[right-to-left]].
- Give immediate feedback as the value changes (live preview, number, or haptic on macOS/iOS).

## SwiftUI

`Slider(value:, in: 0...1, step:) { } minimumValueLabel: { } maximumValueLabel: { }`.

## Accessibility

Expose as an **adjustable** element (VoiceOver increment/decrement); Digital Crown/keyboard
adjustable; announce value + units; don't convey range meaning by color alone. See [[accessibility]].

See also: [[steppers]], [[pickers]], [[text-fields]], [[gauges → progress-indicators]].
