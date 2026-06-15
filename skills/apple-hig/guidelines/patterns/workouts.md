---
title: Workouts
source_url: https://developer.apple.com/design/human-interface-guidelines/workouts
platforms: [watchos, ios]
value_type: platform-specific
last_verified: 2026-06-14
---

# Workouts

> ⚠️ Authored primarily for **watchOS**; iOS/iPadOS can start/control sessions. Re-verify on Apple.

A great workout experience encourages people to engage with their **current activity** and track
**progress** at a glance, even mid-exercise, while running reliably in the background.

## Purpose

Capture an accurate, savable workout session and present **glanceable** real-time metrics that work
when the wrist is down, wet, or moving.

## Guidelines

- **Use HealthKit workout sessions.** Run an `HKWorkoutSession` so the system keeps your app active
  during exercise, gathers metrics (heart rate, energy, distance, GPS), and **saves the workout to
  the Health database** in one canonical place. Don't roll your own background timer.
- **Design for Always On.** During a workout the screen dims to **Always On**; keep the layout
  legible and stable in that state (the system hides subseconds and some indicators). Avoid
  per-second motion that flickers; update at a sensible cadence. See [[watchos]].
- **Be glanceable.** Show a few large, high-priority metrics (time, heart rate, distance, pace).
  Strong hierarchy, big type, semantic colors; the user reads in a glance while moving. See
  [[typography]], [[color]].
- **Support pause/resume and auto-pause.** Let people pause, resume, and end clearly. For supported
  activities use **auto-pause** (`HKWorkoutEventType.motionPaused` / `.motionResumed`) so stops are
  reflected automatically.
- **Handle Water Lock** for swimming/water activities — the system can enable Water Lock at session
  start; people **turn the Digital Crown** to eject water and unlock.
- **Mind the battery.** GPS and high-rate sensors drain power on a long workout — sample
  appropriately and avoid unnecessary screen wake.
- **End and summarize.** On finish, save the workout and show a clear summary (duration, splits,
  energy, route).

## Platform notes

- **watchOS** — primary surface: full workout session, Always On, Water Lock, Smart Stack
  presentation, complications. Request HealthKit and (where used) location authorization. See
  [[watchos]].
- **iOS / iPadOS** — people can **start, pause, resume, and cancel** a workout (including via Siri
  / Lock Screen) and review saved workouts; iOS can host workout tracking with HealthKit too.

## API

HealthKit: `HKWorkoutSession`, `HKWorkoutBuilder` / `HKLiveWorkoutBuilder`, `HKWorkout`,
`HKWorkoutEventType` (`.motionPaused`, `.motionResumed`); `WKExtendedRuntimeSession`; Water Lock
via `WKInterfaceDevice.enableWaterLock()`; CoreLocation for route.

## Accessibility

Large, high-contrast, VoiceOver-readable metrics; don't convey status by color alone; honor Dynamic
Type and Reduce Motion in the Always On layout. See [[accessibility]].

## Do / Don't

- Do use HealthKit sessions, design for Always On, and keep metrics glanceable.
- Don't drain battery with needless updates, hide pause/end, or block on Water Lock.

See also: [[watchos]], [[live-activities]], [[feedback]], [[ios]], [[accessibility]]
