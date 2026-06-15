---
title: Data Entry
source_url: https://developer.apple.com/design/human-interface-guidelines/entering-data
platforms: [ios, ipados, macos, watchos, tvos, visionos]
value_type: universal
last_verified: 2026-06-14
---

# Data Entry

> ⚠️ Universal. Re-verify on Apple.

Make entering information fast, forgiving, and minimal.

## Guidelines

- **Ask for the least.** Only request what you truly need now; pre-fill from context, AutoFill,
  and the system (name, address, payment, **Sign in with Apple**). See [[privacy]].
- **Pick the right control** for each value: text field, picker, stepper, slider, toggle,
  date picker, segmented control. Don't make people type what they can select. See [[pickers]],
  [[steppers]], [[toggles]], [[text-fields]].
- **Set the right keyboard & content type** (email, number, phone, one-time-code) to enable the
  correct keyboard and AutoFill. See [[text-fields]].
- **Validate gently and in context:** inline messages, clear required/optional marking, format as
  the user types where helpful; don't block typing or punish with an alert. See [[feedback]].
- **Show progress** for multi-step forms; allow back/edit; preserve entered data on interruption.
- **Mark errors clearly** (not by color alone) and place the message next to the field. See
  [[accessibility]], [[writing]].

## Platform notes

- **tvOS/watchOS:** typing is painful — minimize fields; use selection, dictation, Scribble, or
  hand-off to iPhone. See [[tvos]], [[watchos]].
- **iPad:** support hardware keyboard, Scribble (Apple Pencil), and pointer. See [[ipados]].

## Accessibility

Persistent labels tied to fields; announce validation errors; Dynamic Type; Full Keyboard
Access / Voice Control. See [[accessibility]].

See also: [[text-fields]], [[pickers]], [[steppers]], [[toggles]], [[feedback]], [[privacy]].
