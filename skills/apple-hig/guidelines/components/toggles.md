---
title: Toggles (Switches)
source_url: https://developer.apple.com/design/human-interface-guidelines/toggles
platforms: [ios, ipados, macos, watchos, visionos]
value_type: platform-specific
last_verified: 2026-06-14
---

# Toggles (Switches)

> ⚠️ Re-verify on Apple.

## Purpose

A toggle is a **binary on/off** control for a single setting that takes effect **immediately**.
The "on" state uses the tint/accent color (default `systemGreen` on iOS switches). See [[color]].

## Guidelines

- Use for **instant** settings (no separate "Apply"). If a change needs confirmation or a save
  step, use a checkbox/selection control instead.
- Pair with a **clear label** describing what "on" does; the label, not the switch, carries the
  text. Toggles usually sit at the **trailing** edge of a list row. See [[lists-and-tables]], [[settings]].
- **Don't rely on color alone** for state — the knob position + label convey it; Differentiate
  Without Color users still need it clear. See [[accessibility]].
- Target ≥44 pt (60 pt visionOS).

## Platform notes

- **macOS:** a switch for instant settings; a **checkbox** for options applied on a form submit.
  See [[macos]].
- **watchOS:** large, simple toggles; one primary setting at a time. See [[watchos]].

## SwiftUI

`Toggle("Wi-Fi", isOn: $on)`; `.toggleStyle(.switch/.button/.checkbox)` (checkbox on macOS).

## Accessibility

VoiceOver reads label + on/off state and the switch trait; honor Bold Text/Dynamic Type on the
label. See [[accessibility]].

See also: [[settings]], [[lists-and-tables]], [[buttons]], [[color]].
