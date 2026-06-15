---
title: Digit Entry Views
source_url: https://developer.apple.com/design/human-interface-guidelines/digit-entry-views
platforms: [ios, watchos, tvos]
value_type: platform-specific
last_verified: 2026-06-14
---

# Digit Entry Views

> ⚠️ Re-verify on Apple.

## Purpose

A digit entry view **fills the screen** and prompts the user to enter a **fixed-length series of
digits** — a PIN, passcode, or verification code — using a **digit-specific keyboard**. Use it for
short numeric secrets, not for general numeric input.

## Anatomy

- A row of **placeholder positions** (one per expected digit) that fill as the user types.
- A large, **digits-only** keypad with oversized targets.
- Usually **secure** (entered digits are masked).

## Guidelines

- Use only for **known, fixed-length** numeric values (e.g. 4- or 6-digit PINs/codes). For longer
  or alphanumeric secrets use a [[text-fields|secure text field]]. 
- Keep keypad targets **large** and well spaced — comfortable for fast, glanceable entry, and
  essential on watchOS and across the room on tvOS. Operative target rule: **≥44 pt** (60 pt
  visionOS). See [[accessibility]].
- **Auto-advance / auto-submit** when the last digit is entered; show progress as positions fill.
- For one-time codes from Messages, set the **`oneTimeCode`** content type so the system can offer
  AutoFill / Security Code AutoFill. See [[privacy]].
- Mask entered digits by default; give clear, in-context error feedback on a wrong code. See
  [[feedback]].

## Platform notes

- **watchOS / tvOS:** the canonical use — system PIN/passcode entry; typing is otherwise painful,
  so keep it short. See [[watchos]], [[tvos]].
- **iOS:** used for passcode/verification flows; prefer AutoFill of SMS codes to manual entry.
  See [[ios]].

## API

- UIKit: a secure `UITextField` with `textContentType = .oneTimeCode` and
  `keyboardType = .numberPad`; tvOS provides system digit-entry UI.
- SwiftUI: `SecureField` / `TextField` with `.textContentType(.oneTimeCode)` and
  `.keyboardType(.numberPad)`; no single dedicated multi-box component, compose positions.

## Accessibility

Announce how many digits are expected and remaining; label the field clearly; support VoiceOver and
Full Keyboard Access; never reveal masked digits aloud. See [[accessibility]].

## Do / Don't

- **Do** keep it fixed-length and short; enable one-time-code AutoFill; auto-submit on completion.
- **Don't** use it for long/alphanumeric secrets; don't make keys small; don't block paste of a
  copied code.

See also: [[text-fields]], [[virtual-keyboards]], [[privacy]], [[accessibility]], [[watchos]], [[tvos]]
