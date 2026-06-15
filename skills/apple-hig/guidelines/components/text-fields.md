---
title: Text Fields
source_url: https://developer.apple.com/design/human-interface-guidelines/text-fields
platforms: [ios, ipados, macos, watchos, tvos, visionos]
value_type: platform-specific
last_verified: 2026-06-14
---

# Text Fields

> ⚠️ Re-verify on Apple.

## Purpose

A text field accepts a **single line** of editable text (use a text view for multi-line). The
foundation of data entry — pair with the right keyboard, content type, and validation. See [[data-entry]].

## Guidelines

- Provide a **label** (and/or placeholder describing the expected input). Placeholder text must
  meet **4.5:1** contrast and is **not** a substitute for a persistent label. See [[accessibility]].
- Set the correct **keyboard type** and **textContentType** (email, telephone, oneTimeCode,
  password, name, postalCode…) so iOS shows the right keyboard, **AutoFill**, and **Password
  AutoFill**. This is both UX and privacy/security. See [[privacy]].
- Show a **clear button** for quick erase; support paste, dictation, and (where relevant) Scribble
  on iPad. See [[ipados]].
- **Validate gently:** prefer inline, in-context validation with a helpful message over an alert;
  don't block typing. Indicate required vs optional clearly. See [[feedback]], [[writing]].
- Field height comfortable for tapping (≥44 pt row; 60 pt visionOS). Adopt secure entry for
  passwords.

## Platform notes

- **tvOS:** text entry is slow — minimize fields; offer sign-in via phone / dictation. See [[tvos]].
- **watchOS:** prefer dictation, Scribble, or canned responses over long typing. See [[watchos]].

## SwiftUI

`TextField("Email", text:)` / `SecureField`; `.keyboardType(.emailAddress)`;
`.textContentType(.emailAddress)`; `.submitLabel(.next)`; `TextEditor` for multi-line.

## Accessibility

Persistent label tied to the field; announce errors; Dynamic Type grows the field; support
hardware keyboard + Full Keyboard Access. See [[accessibility]].

See also: [[data-entry]], [[pickers]], [[feedback]], [[searching]], [[privacy]].
