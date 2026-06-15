---
title: Pickers
source_url: https://developer.apple.com/design/human-interface-guidelines/pickers
platforms: [ios, ipados, macos, watchos, tvos, visionos]
value_type: platform-specific
last_verified: 2026-06-14
---

# Pickers

> ⚠️ Re-verify on Apple.

## Purpose

A picker lets the user choose **one value from a defined set** — including the specialized
**date/time picker** and **color/photo pickers**. Use when the set is known and finite.

## Variants & when to use

- **Wheel picker** — short-to-medium lists where scrolling feels natural (watchOS pairs it with
  the Digital Crown). See [[watchos]].
- **Menu / pop-up picker** — compact; shows the current value, opens a [[menus|menu]] of options.
  Best when space is tight or the list is long.
- **Segmented picker** — a small number of mutually exclusive options shown inline (Apple: five or
  fewer on iPhone). See [[segmented-controls]].
- **Inline / list picker** — options as selectable rows with a checkmark. See [[lists-and-tables]].
- **Date pickers** — compact, wheels, inline, automatic (iOS/iPadOS); textual and graphical (macOS).
  Use the **system** date picker so it localizes formats, calendars, and RTL automatically. See
  [[right-to-left]].

## Guidelines

- Default to a sensible current value; make the selected option obvious (not by color alone).
- Use the **system** picker so you inherit localization, accessibility, and platform behavior.
- For huge sets, prefer **search** + list over a giant wheel. See [[searching]].
- Each interactive element ≥44 pt (60 pt visionOS) — Apple's recommended/default control size
  (absolute minimum 28×28 pt). See [[accessibility]].

## SwiftUI

`Picker("Label", selection:) { … }` with `.pickerStyle(.menu/.segmented/.wheel/.inline/
.navigationLink)`; `DatePicker`, `ColorPicker`, `PhotosPicker`.

## Accessibility

Announce current value + that it's adjustable; Crown/keyboard adjustable; Dynamic Type. See
[[accessibility]].

See also: [[segmented-controls]], [[menus]], [[steppers]], [[sliders]], [[data-entry]].
