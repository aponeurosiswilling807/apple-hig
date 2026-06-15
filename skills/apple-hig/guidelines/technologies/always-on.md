---
title: Always On
source_url: https://developer.apple.com/design/human-interface-guidelines/always-on
platforms: [watchos, ios]
value_type: platform-specific
last_verified: 2026-06-14
---

# Always On

> ⚠️ Re-verify on Apple.

## Purpose

On devices with an **Always-On display** (Apple Watch Series 5+, Apple Watch Ultra, iPhone 14 Pro
and later), the system keeps an app's interface visible in a **dimmed, low-power state** after the
person stops interacting — so glanceable info stays available without a raise-to-wake or tap.

## How the system dims

- The system **lowers brightness and reduces the refresh/update rate**; motion and rapidly changing
  content are minimized or paused. Design for a calm, legible dimmed frame, not animation.
- On Apple Watch, the watch face and your app/complications keep showing; on iPhone the Lock Screen
  and supported Live Activities/widgets persist.

## Guidelines

- **Redact sensitive and personal data** in the Always-On state — balances, messages, health
  details, names. Show a placeholder or generalized value; reveal specifics only when the person
  actively engages. This protects privacy from over-the-shoulder viewing. See [[privacy]].
- **Reduce update frequency.** Don't drive frequent redraws; budget for low-power refresh. Stale-
  looking precision (e.g. live seconds) is usually inappropriate while dimmed.
- **Keep the layout stable** between active and Always-On so the transition isn't jarring; avoid
  large content shifts. Honor Reduce Motion. See [[motion]].
- **Stay legible when dimmed** — keep contrast and type size adequate at low brightness; use semantic
  colors. See [[color]], [[typography]], [[accessibility]].

## API

- **watchOS** — `isLuminanceReduced` in the SwiftUI `EnvironmentValues` (and
  `WKExtendedRuntimeSession` for extended-runtime apps) tells you to switch to the dimmed, redacted
  presentation. `TimelineView` schedules low-frequency updates.
- **iOS** — Always-On surfaces the Lock Screen, widgets, and Live Activities; design those for the
  dimmed state. See [[widgets]], [[live-activities]].

## Accessibility

VoiceOver and interaction resume the active state; never hide essential info behind dimming such that
it's unreachable. Don't rely on color alone to mark redaction. See [[accessibility]].

## Do / Don't

- ✅ Redact private data; slow updates; keep layout and contrast stable while dimmed.
- ❌ Don't show sensitive details, animate, or refresh aggressively in the Always-On state.

See also: [[watchos]], [[ios]], [[widgets]], [[live-activities]], [[privacy]], [[motion]]
