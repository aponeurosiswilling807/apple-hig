---
title: Controls
source_url: https://developer.apple.com/design/human-interface-guidelines/controls
platforms: [ios, ipados]
value_type: platform-specific
last_verified: 2026-06-14
---

# Controls

> ⚠️ Re-verify on Apple.

## Purpose

A control gives **quick access to a single feature or action** of your app from system surfaces —
**Control Center**, the **Lock Screen**, and the **Action button** (iOS 18+ / iPadOS 18+). Controls
focus on **actions and succinct status** (e.g. start a timer, toggle a mode, open a specific screen).
Built with **WidgetKit** + **App Intents**.

## Types

- **Toggle** — a binary on/off control whose state reflects an app value (e.g. a mode on/off).
- **Button** — performs a one-shot action (run an intent, deep-link into the app).
- **Value / stateful** — shows a current value or status alongside its action.

## Guidelines

- Each control does **one thing**; keep it instantly understandable from its glyph + name.
- Provide an **SF Symbol**, a concise name, and a clear tinted **active/inactive** appearance so a
  toggle's state is obvious. Don't rely on color alone for state. See [[color]], [[accessibility]].
- Reflect **real, current state** (a toggle must show the live value, not a guess); update promptly
  after the action runs.
- Make controls **configurable** where it helps (e.g. which timer, which room) using App Intent
  parameters.
- Controls share the App Intents that power your **App Shortcuts** and widgets — reuse the same
  intent. See [[app-shortcuts]], [[widgets]].

## Platform notes

- **iOS / iPadOS 18+** only. The **Action button** can be bound to a control; Lock Screen and
  Control Center host controls in a unified gallery. See [[ios]], [[ipados]].
- Not available on macOS/watchOS/tvOS/visionOS as of this surface — verify on Apple.

## SwiftUI / WidgetKit

`ControlWidget` with `ControlWidgetToggle` / `ControlWidgetButton`; `value(provider:)` for live
state; backed by an `AppIntent`. Tint and symbol set per control; configurable via
`AppIntentControlConfiguration`.

## Accessibility

VoiceOver must announce the control's name and on/off state and the action it performs; ensure the
glyph and tint pass contrast and aren't the sole state indicator. Target ≥44 pt. See [[accessibility]].

## Do / Don't

- **Do** keep one focused action per control and mirror live state accurately.
- **Don't** stuff multiple actions into one control or show stale/ambiguous state.

See also: [[app-shortcuts]], [[widgets]], [[snippets]], [[ios]], [[ipados]], [[color]], [[accessibility]]
