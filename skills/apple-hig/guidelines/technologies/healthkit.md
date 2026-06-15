---
title: HealthKit
source_url: https://developer.apple.com/design/human-interface-guidelines/healthkit
platforms: [ios, ipados, watchos, visionos]
value_type: platform-specific
last_verified: 2026-06-14
---

# HealthKit

> ⚠️ Re-verify on Apple.

## Purpose

HealthKit is the central, secure repository for a person's **health and fitness data** across iPhone,
iPad, Apple Watch, and Apple Vision Pro. With permission, an app can **read and write** specific data
types to deliver more personalized health, workout, and wellness experiences. Health data is highly
sensitive — design for **explicit consent, clear purpose, and strict privacy**.

## Permissions model

- **Granular, per-type, per-direction.** People grant **read** and **write** access **for each data
  type** independently (e.g. steps, heart rate, sleep) — not one blanket toggle.
- **Apple hides read authorization status** to protect privacy: you can't tell whether read access was
  denied (a query just returns no data), so design for the no-data case.
- **Request in context** at the moment access is needed, with a clear benefit; never request a type you
  don't use. See [[privacy]].

## Guidelines

- **Explain why before asking.** Provide an in-app rationale and a precise **purpose string** (e.g.
  "to give you a detailed post-workout analysis"). The system shows the data types you request.
- **Never surface another person's or unrelated health data without consent**; don't display sensitive
  values on shared/Always-On surfaces. See [[always-on]].
- **Write back what's appropriate** (e.g. completed workouts) so the person's Health data stays
  complete and useful, and avoid duplicates.
- **Avoid medical overclaims.** Don't present non-clinical estimates as diagnoses; use careful language.
- **Handle absence gracefully.** No data may mean denial or simply no records — degrade to a useful
  state, don't nag or block the app.
- **Use the Apple Health icon and terms only per Apple's rules**; follow the editorial/branding
  guidance. See [[licensing-and-assets]].

## API

- **HealthKit** — `HKHealthStore.requestAuthorization(toShare:read:)`, `HKQuantityType` /
  `HKCategoryType` / `HKWorkoutType`, `HKQuery` family, `HKWorkoutSession` (watchOS). Declare the
  HealthKit capability and usage descriptions (`NSHealthShareUsageDescription`,
  `NSHealthUpdateUsageDescription`).

## Accessibility

Health charts and values need VoiceOver descriptions and Dynamic Type; never convey a reading or trend
by color alone; keep controls ≥44 pt. See [[accessibility]].

## Do / Don't

- ✅ Request minimal per-type access in context, explain purpose, handle no-data, protect privacy.
- ❌ Don't request unused types, expose health data without consent, make medical claims, or assume reads succeeded.

See also: [[ios]], [[watchos]], [[visionos]], [[carekit]], [[privacy]], [[always-on]], [[licensing-and-assets]], [[accessibility]]
