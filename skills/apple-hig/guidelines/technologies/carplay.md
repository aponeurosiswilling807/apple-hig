---
title: CarPlay
source_url: https://developer.apple.com/design/human-interface-guidelines/carplay
platforms: [ios]
value_type: platform-specific
last_verified: 2026-06-14
---

# CarPlay

> ⚠️ Re-verify on Apple. CarPlay UI is **template-driven**; available templates and categories
> change by OS release — confirm on Apple.

## Purpose

CarPlay projects a focused version of an iPhone app onto the car's built-in display. **Safety and
minimal distraction are paramount**: people are driving, so reduce glances and steps and lean on
voice and large, simple targets.

## Templates, not custom drawing

- Most CarPlay apps **compose Apple-provided templates**; you supply content and respond to selections
  — you don't draw custom pixels (except declared map/audio surfaces). This keeps every app safe and
  consistent and lets the car render at the right scale.
- Each **app category** unlocks a specific set of templates designed for its tasks.

## Supported app categories

Audio, communication (messaging/VoIP), **driving task**, **EV charging**, **fueling**, **navigation**,
**parking**, and **quick food ordering**. (Verify the current list on Apple — categories are added
over time.) Navigation apps may draw their own map; audio apps use list/now-playing templates.

## Guidelines

- **Minimize driver distraction.** Keep tasks short; surface only what's needed while moving; prefer
  **Siri / voice** for input. Don't require reading long text or typing.
- **Use large, well-spaced targets** sized for a moving vehicle and quick taps; keep hierarchy shallow.
- **Support light/dark and the vehicle's day/night** appearance automatically; ensure legibility in
  bright sun and at night. Use clear, high-contrast content.
- **Don't show content that requires the iPhone** to complete; keep state in sync but make the car
  experience self-sufficient for its task.
- Provide an **app icon** at the required CarPlay sizes; don't put a marketing-heavy screen in the car.

## API

- **CarPlay framework** — `CPTemplateApplicationScene`, `CPInterfaceController`, and templates such as
  `CPListTemplate`, `CPGridTemplate`, `CPTabBarTemplate`, `CPMapTemplate`,
  `CPNowPlayingTemplate`, `CPInformationTemplate`, `CPPointOfInterestTemplate`. Request the relevant
  **CarPlay entitlement** from Apple for your category.

## Accessibility

VoiceOver and large type still apply; voice control is central. Don't convey state by color alone.
See [[accessibility]].

## Do / Don't

- ✅ Use the category's templates, big targets, voice-first input, day/night support.
- ❌ Don't draw custom UI where templates exist, require typing while driving, or force iPhone use.

See also: [[ios]], [[accessibility]], [[layout]], [[navigation]]
