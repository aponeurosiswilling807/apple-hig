---
title: ResearchKit
source_url: https://developer.apple.com/design/human-interface-guidelines/researchkit
platforms: [ios]
value_type: platform-specific
last_verified: 2026-06-14
---

> ⚠️ Re-verify on Apple. ResearchKit is an open-source framework; APIs evolve independently
> of the OS release.

# ResearchKit

## Purpose

ResearchKit helps you build apps for **medical and behavioral research** — recruiting
participants, obtaining consent, and collecting study data on iPhone. Because these apps deal
with **sensitive health data and human subjects**, privacy, transparency, and the
participant's right to withdraw are paramount. See [[privacy]].

## Three modules

- **Informed consent** — a guided, sectioned flow that explains the study (purpose, data
  collected, risks, time commitment, data use), often with a final signature step. Make every
  section understandable to a layperson.
- **Surveys** — standard question UIs (multiple choice, scale, text, date, image choice);
  works with validated instruments (e.g. SF-12, EQ-5D).
- **Active tasks** — semi-controlled tests where the participant follows step-by-step
  instructions while device sensors collect data (e.g. gait, tapping, audio, cognition).

## Guidelines (do's)

- **Make consent genuinely informed.** Explain in plain language what data you collect, how
  it's used and stored, and the risks/benefits — before the person agrees. Use the consent
  templates as a starting point.
- **Allow withdrawal at any time**, clearly and without penalty; explain what happens to
  already-collected data.
- **Collect the minimum** data the study needs; request each sensor/permission in context with
  a specific purpose string. Never collect identifying data you don't need.
- **Keep tasks clear and low-burden** — concise instructions, obvious progress, the ability to
  pause or stop. Don't make active tasks stressful or unsafe.
- Be transparent about who runs the study and how to contact them.

## Platform notes

iOS (iPhone) primarily; some study apps extend to Apple Watch sensors via companion APIs.
For care/treatment flows, pair with **CareKit**. ResearchKit is distributed open source, not
bundled in the SDK.

## API

`ResearchKit`: `ORKTaskViewController`, `ORKOrderedTask`, `ORKConsentDocument` /
`ORKVisualConsentStep` / `ORKConsentReviewStep`, `ORKQuestionStep`, `ORKActiveStep`,
`ORKResult`. Health data via HealthKit with explicit user authorization.

## Accessibility

Consent text and surveys must support Dynamic Type, VoiceOver, and contrast >=4.5:1 — research
populations skew toward people with disabilities and older adults. Don't gate consent or
questions on color or fine motor precision alone. See [[accessibility]], [[voiceover]].

## Do / Don't

- ✅ Do obtain clear informed consent, allow withdrawal, minimize data, and explain data use.
- ❌ Don't bury or rush consent, collect more than the study needs, hide the withdrawal option,
  or make active tasks burdensome or unsafe.

See also: [[privacy]], [[accessibility]], [[voiceover]], [[ios]], [[data-entry]], [[onboarding]]
