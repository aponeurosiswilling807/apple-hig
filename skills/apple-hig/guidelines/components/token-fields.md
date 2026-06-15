---
title: Token Fields
source_url: https://developer.apple.com/design/human-interface-guidelines/token-fields
platforms: [macos]
value_type: platform-specific
last_verified: 2026-06-14
---

# Token Fields

> ⚠️ Re-verify on Apple. (Apple's HIG page lists this as a macOS component; first-class API is
> AppKit's `NSTokenField`. There is no native SwiftUI/UIKit token field — see API notes.)

## Purpose

A token field is a [[text-fields|text field]] that converts entered text into discrete, selectable
**tokens** (pill/chip-shaped objects) — for example, the recipients in a Mail "To:" field. Tokens
are easier to recognize, select, and remove than a long comma-separated string. See [[macos]].

## Anatomy / Behavior

- The user types text, then presses a **tokenizing character** (default: **comma** or **Return**) to
  turn the text into a token. Each token is a self-contained, removable chip.
- As the user types, the field can show a **completion list** and narrow it to matching strings; the
  user finishes typing or clicks a suggestion to commit a token.
- Tokens can be **selected, copied, and deleted** as units; a represented object can back each token
  (so display text differs from the underlying value, e.g. a contact vs. its email).

## Guidelines

- Use token fields where input is a **set of discrete items** drawn from a known or completable pool
  (recipients, tags, keywords) — not for free-form prose.
- Provide **autocompletion** when a reasonable candidate set exists; it speeds entry and reduces
  errors. Pair with a clear, persistent field **label**.
- Make tokens visually distinct from typed-but-not-yet-tokenized text, and make **removal** obvious.
- Validate represented objects (e.g. resolve a name to a contact) and indicate unresolved tokens
  rather than silently accepting them. See [[feedback]].

## Platform notes

- macOS is the canonical platform (`NSTokenField`). Equivalent **token/recipient** experiences on
  iOS/iPadOS (e.g. Mail's address field, tag entry) are **custom controls**, not a system token-field
  component — build them from a text field plus chip views and report selection/removal to
  assistive tech. See [[ios]], [[ipados]], [[text-fields]].

## AppKit / API

- **AppKit:** `NSTokenField` (cell `NSTokenFieldCell`). Key delegate methods:
  `tokenField(_:completionsForSubstring:indexOfToken:indexOfSelectedItem:)`,
  `tokenField(_:representedObjectForEditingString:)`,
  `tokenField(_:displayStringForRepresentedObject:)`,
  `tokenField(_:styleForRepresentedObject:)` (rounded vs. plain token style).
- Configure tokenizing with `tokenizingCharacterSet` (default
  `NSTokenField.defaultTokenizingCharacterSet`) and `completionDelay`.
- **SwiftUI** has no native token field; bridge `NSTokenField` via `NSViewRepresentable`.

## Accessibility

- Expose each token as a **discrete, labeled element** with its represented value, and make
  add/remove operations reachable via **Full Keyboard Access** and announced to **VoiceOver**.
  Don't convey a token's meaning by color/shape alone. Support Reduce Motion when tokens animate in.
  See [[accessibility]].

## Do / Don't

- **Do** use tokens for completable, set-like input with autocompletion and easy removal.
- **Don't** use a token field for sentences/long text, and don't ship unresolved tokens without
  signaling them.

See also: [[text-fields]], [[search-fields]], [[pickers]], [[path-controls]], [[macos]], [[accessibility]]
