---
title: Progress Indicators & Gauges
source_url: https://developer.apple.com/design/human-interface-guidelines/progress-indicators
platforms: [ios, ipados, macos, watchos, tvos, visionos]
value_type: platform-specific
last_verified: 2026-06-14
---

# Progress Indicators, Gauges & Activity Rings

> ⚠️ Re-verify on Apple.

> **Note:** Apple's HIG treats these as separate component pages, each with its own source.
> Progress indicators: <https://developer.apple.com/design/human-interface-guidelines/progress-indicators> ·
> Gauges: <https://developer.apple.com/design/human-interface-guidelines/gauges> ·
> Activity rings: <https://developer.apple.com/design/human-interface-guidelines/activity-rings>.
> This page merges them for convenience; consult the per-component pages for full detail.

## Choose the right indicator

- **Determinate progress bar (linear; or circular via SwiftUI `.circular` `ProgressView`)** — when you
  know how much work remains (downloads, exports). Apple names the two determinate variants
  "progress bars" (linear) and "circular progress indicators" (circular).
  Show a percentage or counts where helpful.
- **Indeterminate spinner (activity indicator)** — when duration is unknown but the wait is short.
- **Gauge** — display a value within a range (speed, capacity), not necessarily task progress.
- **Activity rings** (watchOS) — closed-ring progress toward goals. See [[watchos]].
- **Rating indicator** — show a score (e.g. stars), separate concern from progress.

## Guidelines

- **Always show feedback** for any operation that takes noticeable time so the app never looks frozen
  (the ~1 second mark is a common rule of thumb, not an Apple-published figure). See [[loading]].
- Prefer **skeletons/placeholders** for content loading over a bare spinner where it improves
  perceived speed. See [[loading]].
- Keep the indicator near the affected content/action; don't block the whole UI for background work.
- For long tasks, show **what's happening** and allow **cancel** where possible. See [[feedback]].
- Honor **Reduce Motion** (the system spinner is acceptable; avoid extra flourishes). See [[motion]].

## SwiftUI

`ProgressView(value:total:)` (determinate) · `ProgressView()` (indeterminate) ·
`.progressViewStyle(.circular/.linear)` · `Gauge(value:in:)`.

## Accessibility

Announce progress changes and completion; don't convey progress by color alone; label the task.
See [[accessibility]].

See also: [[loading]], [[feedback]], [[motion]].
