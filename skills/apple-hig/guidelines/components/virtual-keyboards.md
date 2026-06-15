---
title: Virtual Keyboards
source_url: https://developer.apple.com/design/human-interface-guidelines/virtual-keyboards
platforms: [ios, ipados, tvos, visionos]
value_type: platform-specific
last_verified: 2026-06-14
---

# Virtual Keyboards

> ⚠️ Re-verify on Apple.

> Also called onscreen keyboards. On devices without a physical keyboard, the system presents an
> onscreen keyboard for text entry.

## Purpose

Choose the **right keyboard type and behavior** so entry is fast and error-free. You don't draw the
keyboard — you **declare intent** (content type, keyboard type, return key) and the system supplies
the appropriate layout, autocorrect, AutoFill, and localization.

## Keyboard types & when to use

Set `keyboardType` to match the data so the user gets the optimal keys:

- **Default / ASCII-capable** — general text.
- **Email address** — adds `@` and `.`.
- **URL** — adds `/` and `.`.
- **Number pad / Decimal pad** — digits only / with separator (PINs, quantities).
- **Phone pad** — telephone numbers.
- **Numbers and punctuation**, **Twitter**, **Web search** — specialized layouts.

Pair with **`textContentType`** (email, password, oneTimeCode, name, postalCode, …) to unlock
**AutoFill** and **Password AutoFill** — both UX and privacy wins. See [[text-fields]], [[privacy]].

## Guidelines

- Match the keyboard to the field; never make the user switch modes for obvious input.
- Set a meaningful **return key** (`submitLabel`: Go, Search, Next, Done, Join) so the action is
  clear. 
- Use an **input accessory view** for context (Next/Done toolbar, suggestions) — keep it minimal.
- **Avoid keyboard obstruction:** scroll the focused field into view and keep it clear of the
  keyboard. Use the keyboard layout guide / safe areas rather than hardcoded heights, since
  keyboard size varies by language, device, and floating/split modes on iPad. See [[layout]].
- Support hardware keyboards and external input; don't assume onscreen-only.

## Platform notes

- **tvOS:** onscreen entry is **slow** — minimize typed fields; offer dictation, sign-in via phone,
  or pickers instead. See [[tvos]].
- **iPadOS:** the keyboard can **float, split, and dock**; design for variable height/position. See
  [[ipados]].
- **visionOS:** a floating virtual keyboard plus dictation; minimize required typing. See
  [[visionos]].
- **macOS / watchOS:** not the standard model — macOS assumes a hardware keyboard; watchOS uses
  dictation, Scribble, and canned responses. See [[macos]], [[watchos]].

## API

- UIKit: `keyboardType`, `textContentType`, `returnKeyType`, `inputAccessoryView`,
  `UIKeyboardLayoutGuide` (avoidance). 
- SwiftUI: `.keyboardType(.emailAddress)`, `.textContentType(.emailAddress)`,
  `.submitLabel(.next)`, `.scrollDismissesKeyboard(_:)`, `@FocusState`.

## Accessibility

Respect Dynamic Type in fields and accessory views; ensure VoiceOver reaches custom accessory
controls; support Full Keyboard Access and external keyboards; don't trap focus. See
[[accessibility]].

## Do / Don't

- **Do** set keyboard type + content type + return key; keep the field visible above the keyboard.
- **Don't** hardcode keyboard height; don't force heavy typing on tvOS/watchOS/visionOS; don't omit
  AutoFill content types on credentials.

See also: [[text-fields]], [[digit-entry-views]], [[privacy]], [[layout]], [[accessibility]], [[tvos]], [[ipados]], [[visionos]]
