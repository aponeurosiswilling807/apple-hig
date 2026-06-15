---
title: Action Button
source_url: https://developer.apple.com/design/human-interface-guidelines/action-button
platforms: [ios, watchos]
value_type: platform-specific
last_verified: 2026-06-14
---

# Action Button

> ⚠️ Re-verify on Apple. Hardware availability is device-specific — do not assume it exists.

## Purpose

A customizable **hardware** button that gives people quick, one-press access to a favorite
feature. Present on supported iPhone (iPhone 15 Pro / Pro Max and later, including iPhone 16/16e
and the 17 line) and on Apple Watch Ultra. It replaces the iPhone Ring/Silent switch; people assign
its behavior in **Settings → Action Button**.

## Variants

- **iPhone:** runs an **App Shortcut** (via App Intents) on a press-and-hold/press. Default action
  is mute toggle; users can reassign to camera, flashlight, Focus, Translate, Magnifier, a Shortcut,
  or your app's intent.
- **Apple Watch Ultra:** a dedicated side button; apps can start/stop a **workout** or **dive**
  session, or run an App Shortcut.

## Guidelines

- Expose a **single, clear, primary action** that's valuable enough to earn the button — not a deep
  flow or a destination that needs further choices.
- Make the action **fast and predictable**; it runs without app launch UI when possible. Provide
  immediate **system feedback** (haptic + Dynamic Island / on-watch confirmation) so people know it
  fired. See [[feedback]].
- It's **opt-in and user-assigned** — never assume your app owns the button, and don't nag people to
  set it. Treat it as a bonus accelerator, not a required path.
- Keep the action **idempotent / safe** to trigger by accident; avoid destructive or irreversible
  effects without confirmation.

## API

- **App Intents:** expose an `AppIntent` / `AppShortcut`; the system surfaces eligible intents for
  Action button assignment. On watchOS use the workout/dive session APIs (`ActionButton` /
  `HKWorkoutSession`, `WorkoutKit`).
- Don't read the hardware button directly — the system routes it to the assigned intent.

## Accessibility

The action must have an equivalent in-app/VoiceOver-reachable path; never make the hardware button
the **only** way to perform something. Respect that the button may be reassigned for accessibility
features (Magnifier, etc.). See [[accessibility]].

## Do / Don't

- **Do** make it one tap to a single high-value outcome with clear feedback.
- **Don't** require multi-step interaction, assume availability, or treat it as primary navigation.

See also: [[buttons]], [[feedback]], [[app-intents → settings]], [[watchos]], [[ios]], [[camera-control]], [[accessibility]]
