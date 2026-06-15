---
title: Gauges
source_url: https://developer.apple.com/design/human-interface-guidelines/gauges
platforms: [ios, ipados, macos, watchos, visionos]
value_type: platform-specific
last_verified: 2026-06-14
---

# Gauges

> ⚠️ Re-verify on Apple.

## Purpose

A gauge displays a single numeric value within a known **range** (a minimum and maximum) — for
example speed, battery capacity, signal strength, or a measurement relative to a target. Unlike a
progress indicator, a gauge does not imply a task that completes; it depicts a *reading*. See
[[progress-indicators]].

## Variants

- **Linear** — a bar with a marker positioned along it at the current value.
- **Circular / arc** — value mapped to an arc, common on watchOS complications and compact widgets.
- Optional **current-value label** and **min/max bound labels** at the track ends.
- A tint **color or gradient** can encode magnitude (e.g. green→red), but never carry meaning by
  color alone. See [[color]], [[accessibility]].

## Guidelines

- Label the **range bounds** (min and max) so the value is interpretable; show the current value
  where precision matters.
- Pick **linear** for inline/detail layouts and **circular** for glanceable, space-constrained
  contexts (complications, watch faces, small widgets). See [[widgets]], [[watchos]].
- Keep gauges glanceable: minimal chrome, legible at small sizes, consistent units.
- Use a gauge to *report* a value, not to track ongoing work — for determinate task progress use a
  progress bar instead. See [[progress-indicators]].
- Apply a gradient tint deliberately to communicate "good vs. bad" zones; pair with text/markers.

## Platform notes

- Fully supported via SwiftUI `Gauge` on **iOS, iPadOS, macOS, watchOS, and visionOS**. Gauges are a
  natural fit for **watchOS complications** and the Smart Stack. tvOS support is limited — verify on
  Apple. See [[ios]], [[macos]], [[visionos]].

## SwiftUI / API

- `Gauge(value:in:label:)`, `Gauge(value:in:label:currentValueLabel:minimumValueLabel:maximumValueLabel:)`.
- Styles via `.gaugeStyle(...)`: `.automatic` (default), `.linearCapacity`, `.accessoryLinear`,
  `.accessoryLinearCapacity`, `.accessoryCircular`, `.accessoryCircularCapacity`. Availability of
  each style varies by platform — verify on Apple.
- Tint with `.tint(_:)` (solid or `Gradient`). The `accessory*` styles are intended for
  complications/widgets.

## Accessibility

Expose value, range, and units to VoiceOver (the control is read as its value within min…max); never
rely on color/zone alone; support Dynamic Type for labels (not on macOS). See [[accessibility]].

## Do / Don't

- **Do** label min and max and keep units consistent.
- **Do** choose circular for complications, linear for inline detail.
- **Don't** use a gauge for indeterminate or completing task progress — use [[progress-indicators]].
- **Don't** encode meaning with the tint gradient alone.

See also: [[progress-indicators]], [[activity-rings]], [[sliders]], [[widgets]], [[watchos]], [[color]], [[accessibility]]
