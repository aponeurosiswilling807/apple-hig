---
title: CareKit
source_url: https://developer.apple.com/design/human-interface-guidelines/carekit
platforms: [ios]
value_type: platform-specific
last_verified: 2026-06-14
---

# CareKit

> ⚠️ Re-verify on Apple.

## Purpose

CareKit is an open-source framework for building apps that help people **manage a care plan** —
tracking tasks, logging symptoms, and sharing progress for chronic conditions, recovery after
surgery, or wellness goals. Design for **clarity, motivation, and trust** with sensitive health data.

## Anatomy

- **Care plan** — the set of activities a person follows.
- **Tasks** — actions to complete or log (take medication, do an exercise, record a symptom), shown
  as **task cards** (checklist, button-log, grid, numeric, etc.).
- **Charts** — visualizations of progress and trends over time (e.g. adherence vs. symptom).
- **Contacts** — care team members the person can reach.

## Guidelines

- **Make tasks easy to understand and complete** at a glance; clear titles, instructions, and a simple
  way to mark done or enter a value. Keep daily logging low-effort.
- **Show progress meaningfully.** Use charts to relate behavior to outcomes so people stay motivated;
  avoid clutter and over-precision. See [[feedback]].
- **Treat all health data as private.** Don't surface it on lock/Always-On surfaces or to others
  without explicit consent; store and transmit securely; minimize what you collect. See [[privacy]].
- **Avoid medical overclaims.** Use careful, non-diagnostic language; defer clinical judgment to
  the care team. Provide a clear way to contact a human.
- **Be inclusive and calm.** Health contexts can be stressful — write supportive, plain copy; support
  Dynamic Type, light/dark, and semantic colors. See [[typography]], [[color]], [[inclusion]].

## API

- **CareKit** — `OCKCareKitUI` prebuilt task/chart/contact views; **CareKitStore** schema (patients,
  care plans, tasks, contacts, outcomes). Often paired with **ResearchKit** for onboarding/consent and
  **HealthKit** for samples. See [[healthkit]].

## Accessibility

Every task control needs a VoiceOver label and ≥44 pt target; charts need accessible descriptions;
never convey adherence/health state by color alone. See [[accessibility]].

## Do / Don't

- ✅ Simple completeable tasks, meaningful progress charts, strict privacy, supportive copy.
- ❌ Don't expose health data without consent, make diagnostic claims, or bury logging in friction.

See also: [[ios]], [[healthkit]], [[privacy]], [[inclusion]], [[feedback]], [[accessibility]]
