---
title: Live Activities
source_url: https://developer.apple.com/design/human-interface-guidelines/live-activities
platforms: [ios, ipados, watchos]
value_type: platform-specific
last_verified: 2026-06-14
---

# Live Activities

> ⚠️ iOS/iPadOS authored, but presentations are no longer limited to the iPhone Lock Screen +
> Dynamic Island: iOS Live Activities auto-appear in the **Apple Watch Smart Stack** (since
> watchOS 11 / iOS 18), and the system derives iPadOS / macOS / CarPlay presentations in the '26
> generation. Re-verify on Apple.

A Live Activity shows the **real-time progress of an ongoing event** — a ride, delivery, game
score, timer, workout — on the **Lock Screen** and in the **Dynamic Island**, without the user
opening the app.

## Use it for

- ✅ A discrete, time-bound event with **meaningful real-time updates** the user wants to glance at.
- ❌ Not for static info, ads, or always-on content. End it promptly when the event is over.

## Design the presentations

A Live Activity must design **all** of these presentations from the **same data model**:

- **Lock Screen / banner** — a compact card; show the essential status + glanceable detail.
- **Dynamic Island — compact** (leading + trailing mini regions around the sensor area).
- **Dynamic Island — minimal** (when multiple activities share the island; one tiny glyph).
- **Dynamic Island — expanded** (long-press): richer layout with more detail and limited actions.
- **Apple Watch Smart Stack** — since watchOS 11 / iOS 18, iPhone Live Activities auto-appear here
  (and the system likewise derives a CarPlay/Mac presentation). Design from the same data so every
  surface stays consistent.

## Guidelines

- Keep content **glanceable**: one clear status, minimal text, strong hierarchy. Use semantic
  colors, support light/dark and **Dynamic Type**. See [[color]], [[typography]], [[accessibility]].
- Update at a sensible cadence; never look stale. Tapping opens the relevant place in the app.
- Since iOS 17, the Lock Screen and Dynamic Island expanded view support interactive SwiftUI
  Buttons and Toggles backed by App Intents (`LiveActivityIntent`). Still show restraint: limit
  interactivity to a few high-value actions; don't recreate the app.
- Respect the **sensor/camera region** in the Dynamic Island; keep content clear of it. See [[ios]].

## Accessibility

VoiceOver reads the activity status and actions; don't convey status by color alone; honor Reduce
Motion. See [[accessibility]].

See also: [[notifications]], [[widgets]], [[ios]], [[feedback]].
