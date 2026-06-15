---
title: Watch Faces
source_url: https://developer.apple.com/design/human-interface-guidelines/watch-faces
platforms: [watchos]
value_type: platform-specific
last_verified: 2026-06-14
---

# Watch Faces

> ⚠️ Re-verify on Apple.

## Purpose

A watch face is the primary view people choose on Apple Watch. You don't ship custom faces, but your
app participates through **complications** placed in the face's slots and through **face-adjacent**
design — so your content looks at home on whatever face the user picked. See [[complications]],
[[watchos]].

## Guidelines

- Design **complications**, not faces — place glanceable data in the face's complication slots and
  let it adapt to the chosen face's tint and styling. See [[complications]], [[widgets]].
- **Respect the face's real estate**: complication slots are small and fixed; keep content to one
  clear value and use the face's tint rather than hardcoded colors. See [[color]].
- **Don't imitate or recreate system watch faces** inside your app or marketing — Apple watch faces
  are system-owned; mimicking them or shipping look-alike "faces" is not allowed.
- Use **system text styles** (watchOS uses **SF Compact**, with rounded numerals on many faces) and
  honor Dynamic Type so values stay legible at a glance. See [[typography]].
- Make complications **tap-to-launch** into the relevant screen; keep the interaction one step.
- For Smart Stack / wrist-raise glances, keep data **fresh and timely** via the timeline. See
  [[loading]].

## Platform notes

- **watchOS only.** Faces are configured by the user (and via shareable face configurations); your
  surface is complications + the Smart Stack, not a custom face. See [[watchos]].

## API

Complications are built with **WidgetKit** accessory families (`accessoryCircular`,
`accessoryRectangular`, `accessoryInline`, `accessoryCorner`); use `Gauge`/`ProgressView` for rings
and `widgetLabel` for the corner curved label. (Legacy `ClockKit` is superseded — verify on Apple.)

## Accessibility

Provide VoiceOver labels reading the value and units; never convey state by color alone; respect
Reduce Motion. Keep glyphs and numerals legible at the tiny rendered size. See [[accessibility]].

## Do / Don't

- **Do** focus on well-designed complications that respect the face's space and styling.
- **Don't** imitate Apple's system faces or fight the face's tint with hardcoded colors.

See also: [[complications]], [[widgets]], [[watchos]], [[typography]], [[color]], [[accessibility]]
