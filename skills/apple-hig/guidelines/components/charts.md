---
title: Charts
source_url: https://developer.apple.com/design/human-interface-guidelines/charts
platforms: [ios, ipados, macos, watchos, tvos, visionos]
value_type: platform-specific
last_verified: 2026-06-14
---

# Charts

> ⚠️ Re-verify on Apple.

## Purpose

A chart organizes data into a visual form so people can grasp patterns, comparisons, and trends
at a glance. Charts are a **content layer** — keep them legible and opaque; Liquid Glass is for
chrome, not data marks. See [[liquid-glass]]. Build with **Swift Charts** to get accessibility,
theming, and animation by default. See [[data-entry]].

## Choose the right chart type

- **Line** — change over a continuous dimension (usually time); trends and rate of change.
- **Bar** — compare discrete categories or grouped/stacked values.
- **Area** — magnitude over time, or cumulative/part-to-whole over a range.
- **Point / scatter** — relationship or distribution between two variables.
- **Sector (pie / donut)** — parts of a whole when a few categories sum to 100%.
- **Range / heat / rule** — spans, density, or thresholds.
Match the mark to the question the data answers; don't pick a type for novelty.

## Guidelines

- **Lead with the takeaway.** Give the chart a clear title and, where useful, a one-line summary
  of the insight. See [[writing]].
- **Label axes and units** and choose a sensible value range; avoid truncating a bar axis in a way
  that exaggerates differences. Provide a **legend** when more than one series appears.
- **Distinguish series by more than color** — combine color with **symbol shape, line style, or
  direct labels** so the chart works under color-blindness and Differentiate Without Color. See
  [[color]], [[accessibility]].
- Keep marks readable at the platform's size; **simplify on small screens** (watchOS, complications)
  and let people drill into detail on larger ones. See [[watchos]], [[layout]].
- Support **Dynamic Type** for labels (not on macOS) and respect **Reduce Motion** for transitions.
  See [[typography]], [[motion]].
- Use **semantic / system colors**, never hardcoded hex, so the chart adapts to light/dark and
  high-contrast. See [[color]].

## Platform notes

- **watchOS:** prefer a single focused series; charts often back complications and Smart Stack. See [[widgets]].
- **macOS:** support hover tooltips, selection, and pointer interaction. See [[macos]].
- **visionOS:** ensure marks read against varied backgrounds at depth. See [[visionos]].

## SwiftUI (Swift Charts)

`import Charts`; `Chart { LineMark(x:.value(...), y:.value(...)) }`; `BarMark`, `PointMark`,
`AreaMark`, `RuleMark`, `SectorMark`; `.foregroundStyle(by:)`, `.symbol(by:)`,
`.chartXAxis`, `.chartYAxis`, `.chartLegend`, `.chartXSelection`. Available on every Apple platform.

## Accessibility

Swift Charts is **accessible by default**: marks get customizable VoiceOver labels and an
**Audio Graph** representation (sonification). Add `.accessibilityLabel`/`.accessibilityValue` per
mark, and never rely on color alone to separate series. See [[accessibility]].

## Do / Don't

- **Do** title the chart, label axes/units, and encode series redundantly (color + shape).
- **Don't** distort scales, overload one chart with too many series, or convey meaning by color only.

See also: [[data-entry]], [[color]], [[accessibility]], [[typography]], [[liquid-glass]], [[widgets]]
