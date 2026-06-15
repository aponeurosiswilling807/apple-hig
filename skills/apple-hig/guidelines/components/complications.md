---
title: Complications
source_url: https://developer.apple.com/design/human-interface-guidelines/complications
platforms: [watchos]
value_type: platform-specific
last_verified: 2026-06-14
---

# Complications

> ⚠️ Re-verify on Apple.

## Purpose

A complication displays **timely, glanceable** information from your app directly on the **watch
face**, where people see it every time they raise their wrist. Tapping it launches the app to the
relevant content. Complications are built with **WidgetKit** (modern complications share the widget
infrastructure introduced in watchOS 9). See [[widgets]], [[watchos]].

## Families (WidgetKit accessory families)

- **`accessoryCircular`** — small round; gauge/ring, glyph, or short value.
- **`accessoryRectangular`** — multi-line text, small chart, or richer data.
- **`accessoryInline`** — a single line of text (+ optional glyph) placed in the face's inline slot.
- **`accessoryCorner`** — **watchOS-only** corner family (curved gauge/text in a face corner).

Design each family as its own layout; don't crop one design into another.

## Guidelines

- Show the **single most relevant** value; complications are tiny — favor one clear data point or a
  ring/gauge over dense text. Use `Gauge` / `ProgressView` for rings and bars.
- Keep content **fresh** via the timeline; never look stale or empty. Provide a sensible redacted /
  placeholder state while loading. See [[loading]].
- Respect the face: complications render in the face's tint and adapt to the watch face's styling;
  use **system text styles** (watchOS uses **SF Compact** / rounded numerals) and avoid hardcoded
  colors. See [[typography]], [[color]].
- Make the whole complication a **tap target** that deep-links into the right screen.
- Support the Smart Stack where relevant; a good complication often doubles as an accessory widget.

## SwiftUI / WidgetKit

`Widget` + `supportedFamilies([.accessoryCircular, .accessoryRectangular, .accessoryInline, .accessoryCorner])`;
`AccessoryWidgetGroup`, `Gauge`, `widgetLabel` for the curved corner label; timeline via
`TimelineProvider` or App Intents. (Legacy `ClockKit` is superseded by WidgetKit — verify on Apple.)

## Accessibility

Provide a VoiceOver label that reads the value and units; never convey state by color alone; honor
Reduce Motion. Keep glyphs legible at the tiny rendered size. See [[accessibility]].

## Do / Don't

- **Do** pick one focused metric and keep it current and legible.
- **Don't** pack multiple unrelated values in, or rely on color/charts without a text equivalent.

See also: [[widgets]], [[watch-faces]], [[watchos]], [[typography]], [[color]], [[loading]], [[accessibility]]
