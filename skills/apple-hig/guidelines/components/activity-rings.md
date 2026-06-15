---
title: Activity Rings
source_url: https://developer.apple.com/design/human-interface-guidelines/activity-rings
platforms: [watchos, ios]
value_type: platform-specific
last_verified: 2026-06-14
---

# Activity Rings

> ⚠️ Re-verify on Apple.

## Purpose

Activity rings show a person's daily progress toward three goals — **Move**, **Exercise**, and
**Stand** — as three concentric, closed-ring meters. A ring fills clockwise as the day's value
climbs toward its goal and visibly **closes** when the goal is reached. The closed-ring metaphor is
a strong, recognizable motivator: the aim is to "close your rings."

## Anatomy

- **Move** (outer, red/magenta) — active energy burned (kilocalories), a user-set daily goal.
- **Exercise** (middle, green) — minutes of brisk activity.
- **Stand** (inner, blue/cyan) — hours in which the person stood and moved.
- Three distinct hues + concentric position encode which metric is which; never rely on color alone
  (label or expose each value to assistive tech). See [[accessibility]].

## Guidelines

- **Reserve the exact rings semantics for Apple's Move/Exercise/Stand activity data.** Don't reuse
  the three-ring visual with the same colors to depict unrelated metrics — it implies Fitness data
  and confuses people. For your own multi-goal data, design a distinct meter.
- Use rings to celebrate completion and streaks; pair with clear numeric values and units.
- Keep rings legible at small sizes (watch face complications, widgets); maintain ring thickness and
  spacing so all three remain distinguishable.
- Animate closing moments sparingly and honor **Reduce Motion**. See [[motion]].

## Platform notes

- Origin and richest use is **watchOS** (Activity app, complications, watch faces). Surfaced on
  **iOS** via the Fitness app and widgets. See [[watchos]], [[ios]], [[widgets]].
- The rings appear in complications and in the Smart Stack / widgets; design for tiny canvases.

## API

- **HealthKit / HealthKitUI** exposes activity-ring data: `HKActivitySummary`
  (`activeEnergyBurned`, `appleExerciseTime`, `appleStandHours` and their goals) rendered with
  `HKActivityRingView` (UIKit/AppKit). Reading these requires HealthKit permission. Verify current
  APIs on Apple.
- Custom ring-style meters in SwiftUI are typically built with `Gauge` + a circular style or a
  custom `Shape`; that is *not* the official Activity Rings control. See [[gauges]].

## Accessibility

Expose each ring's metric, current value, goal, and percent complete to VoiceOver; announce goal
completion as text, not color. Support Dynamic Type in accompanying labels and respect Reduce Motion
for closing animations. See [[accessibility]].

## Do / Don't

- **Do** use the canonical colors and order only for genuine Move/Exercise/Stand data.
- **Do** show the underlying numbers and units alongside the rings.
- **Don't** repurpose the three-ring look for arbitrary KPIs or dashboards.
- **Don't** signal completion with color change alone.

See also: [[gauges]], [[progress-indicators]], [[watchos]], [[ios]], [[widgets]], [[accessibility]], [[color]]
