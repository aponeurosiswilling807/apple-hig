---
title: Charting Data
source_url: https://developer.apple.com/design/human-interface-guidelines/charting-data
platforms: [ios, ipados, macos, watchos, tvos, visionos]
value_type: universal
last_verified: 2026-06-14
---

# Charting Data

> ⚠️ Universal. Re-verify on Apple. Pairs with the [[charts]] component.

A chart turns data into a visual story. Use one when a picture communicates a relationship,
trend, comparison, or distribution faster than raw numbers or a table.

## When to chart

- ✅ Reveal a **trend over time**, **compare** values, show **composition** or **distribution**,
  or highlight an **outlier** people would otherwise miss.
- ❌ Don't chart when a single value, a sentence, or a [[lists-and-tables]] table is clearer.
  Don't decorate data that doesn't benefit from visualization.

## Pick the right chart

- **Line** — change over a continuous range (time series, sensor data).
- **Bar / column** — compare discrete categories or values.
- **Area** — magnitude/accumulation over time; stacked area for parts of a whole over time.
- **Point/scatter** — relationship/correlation between two variables.
- **Pie/donut** — simple part-to-whole at a glance (few slices only).
- **Heatmap / range** — density or min–max spans.

## Guidelines

- **Lead with clarity.** Keep the data prominent and the chrome minimal; remove non-essential
  gridlines, labels, and decoration. One clear takeaway per chart.
- **Label meaningfully.** Give axes units and a concise title; annotate the value that matters.
- **Scale honestly.** Choose axis ranges that don't distort the story; be consistent across
  comparable charts.
- **Use color with intent**, never as the only differentiator — pair with shape, position, label,
  or pattern. Use **semantic** colors and support light/dark. See [[color]].
- Make charts **interactive** where it adds value (tap/hover to inspect a value, scrub a range),
  but keep a useful static read.
- Adapt density and detail to the surface — a watch or widget chart shows far less than a Mac.

## SwiftUI / API

- **Swift Charts** (`import Charts`) is the system framework: `Chart { }` with marks like
  `LineMark`, `BarMark`, `AreaMark`, `PointMark`, `RectangleMark`, `RuleMark`, `SectorMark`
  (pie/donut). Configure with `.chartXAxis`, `.chartYAxis`, `.chartLegend`,
  `.foregroundStyle(by:)`, `.symbol(by:)`. Swift Charts is **accessible by default**.

## Accessibility

- Swift Charts auto-generates VoiceOver labels per mark and provides an **audio graph** (sonified
  data) so the chart is navigable non-visually. Customize with `.accessibilityLabel`,
  `.accessibilityValue`, and `AXChart` / audio-graph APIs.
- Always provide a **text alternative** summarizing the chart's takeaway. Don't rely on color
  alone; meet 4.5:1 contrast for labels (3:1 large). Support Dynamic Type and Reduce Motion.
  See [[accessibility]].

## Do / Don't

- ✅ One takeaway, honest scales, labeled axes, accessible by default.
- ❌ 3-D effects, chart-junk, rainbow palettes, charting a single number.

See also: [[charts]], [[color]], [[accessibility]], [[lists-and-tables]], [[gauges]], [[activity-rings]].
