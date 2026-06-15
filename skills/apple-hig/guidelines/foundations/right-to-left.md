---
title: Right to Left
source_url: https://developer.apple.com/design/human-interface-guidelines/right-to-left
platforms: [ios, ipados, macos, watchos, tvos, visionos]
value_type: universal
last_verified: 2026-06-14
---

# Right to Left (RTL)

> ⚠️ Universal. Re-verify on Apple.

For right-to-left languages (Arabic, Hebrew, Persian, Urdu…), **mirror** the interface so reading
order, flow, and directional meaning are preserved.

## What to mirror

- **Overall layout & reading order** — leading edge moves to the right; navigation flows
  right-to-left. Back chevrons, progress, carousels, and sliders reverse direction.
- **Directional SF Symbols** mirror automatically (e.g. `chevron.forward`, `arrow.backward`);
  use the **semantic** "leading/trailing/forward/backward" names, not "left/right". See [[sf-symbols]].
- **Text alignment** flips to right-aligned for RTL content.
- **Controls** that imply direction (back/forward, indentation, reveal chevrons).

## What to keep unmirrored

- **Numerals, time, and progress that moves forward in time** stay in their natural direction
  where appropriate (e.g. media scrubbers showing elapsed time, clocks).
- **Phone numbers**, version numbers, and certain universal symbols.
- **Brand logos** and real-world imagery that has a fixed orientation.

## Implementation

- Use **leading/trailing** (not left/right) for constraints, padding, and stack alignment so the
  system mirrors automatically.
- Don't hardcode left/right; let SF Symbols and Auto Layout/SwiftUI handle mirroring.
- **Test** in an RTL language (or the RTL pseudolanguage) including mixed LTR/RTL strings
  (e.g. Latin brand names inside Arabic text).

## Bidirectional text

- Handle **bidi** correctly: numbers and embedded Latin words inside RTL paragraphs follow Unicode
  bidi rules — rely on the system text engine, don't manually reorder.

See also: [[layout]], [[sf-symbols]], [[typography]], [[inclusion]].
