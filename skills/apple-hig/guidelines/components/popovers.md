---
title: Popovers
source_url: https://developer.apple.com/design/human-interface-guidelines/popovers
platforms: [ipados, macos, visionos]
value_type: platform-specific
last_verified: 2026-06-14
---

# Popovers

> ⚠️ Primarily iPad/Mac (regular width). Re-verify on Apple.

## Purpose

A transient view **anchored** to a control or region, with an **arrow** pointing at its source.
Use for contextual options, details, or a small focused task tied to that element.

## When to use

- **iPad / Mac** (regular width), pointer/large screens. On **compact iPhone width**, a popover
  automatically **adapts to a sheet** — design for that fallback. See [[sheets]].
- Use for a short set of controls/options related to the anchor; dismiss by tapping outside,
  pressing Escape (Mac), or completing the task.

## Guidelines

- Keep it **small and focused**; don't nest popovers or build deep navigation inside one.
- Point the arrow clearly at the **source**; position so it doesn't cover the anchor.
- For a list of actions on a control, prefer a **[[menus|menu]]**; for a critical decision, an
  **[[alerts|alert]]**; for a full task, a **[[sheets|sheet]]**.
- Non-modal feel: the user can dismiss easily. Don't put destructive-without-confirm actions here.

## SwiftUI

`.popover(isPresented:)` with `.presentationCompactAdaptation(.popover/.sheet)` to control the
compact fallback.

## Accessibility

Move VoiceOver focus into the popover on present; provide an obvious dismiss; respect Dynamic
Type. See [[accessibility]].

See also: [[sheets]], [[menus]], [[alerts]], [[modality]].
