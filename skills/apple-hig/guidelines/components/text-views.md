---
title: Text Views
source_url: https://developer.apple.com/design/human-interface-guidelines/text-views
platforms: [ios, ipados, macos, watchos, tvos, visionos]
value_type: universal
last_verified: 2026-06-14
---

# Text Views

> ⚠️ Re-verify on Apple.

## Purpose

A text view displays **multiline, styled text** that can optionally be **editable**. Use it when
content is long, scrollable, editable, or specially formatted — as opposed to a single line of input
(use a [[text-fields|text field]]) or non-interactive label runs. Text views can be any height and
scroll when content exceeds the view. By default content is leading-aligned and uses the
`label` semantic color.

## When to use vs. a text field

- **Text view** — paragraphs, notes, comments, rich/attributed text, anything multi-line.
- **Text field** — a single line of input (name, email, search). See [[text-fields]], [[data-entry]].

## Guidelines

- **Make editability obvious.** In iOS/iPadOS/visionOS, selecting an editable text view raises the
  keyboard; show a clear caret and selection. Use a non-editable text view for display-only content.
- **Respect the user's text settings.** Support **Dynamic Type** (not on macOS) so text scales, and
  use the **system label colors** for automatic light/dark and high-contrast adaptation — never
  hardcoded hex. See [[typography]], [[color]].
- **Keep formatting purposeful.** Use attributed/rich text for emphasis and structure, not
  decoration; maintain readable line length and **4.5:1** body contrast (3:1 large/bold). See
  [[accessibility]].
- Support standard **text interactions**: selection, copy/paste, lookup, dictation, and find. Enable
  **data detectors** (links, dates, addresses, phone numbers) when actionable content is likely.
- Honor **leading/trailing** alignment for RTL languages rather than hardcoded left/right. See
  [[right-to-left]].
- Pair the right **keyboard type** and content type for editable views, and provide an obvious way
  to dismiss the keyboard. See [[data-entry]].

## Platform notes

- **tvOS / watchOS:** on-device typing is slow — minimize free text; favor dictation, Scribble, or
  canned responses. See [[tvos]], [[watchos]].
- **iPadOS:** support hardware keyboard, Scribble, and the edit menu. See [[ipados]].

## SwiftUI / UIKit

SwiftUI: `TextEditor(text:)` (editable multi-line); `Text(...)` for static, with
`.font(.body)`, `.textSelection(.enabled)`, `AttributedString` for rich text.
UIKit/AppKit: `UITextView` / `NSTextView`; `isEditable`, `isSelectable`, `dataDetectorTypes`,
`attributedText`.

## Accessibility

VoiceOver reads the content and announces editability; Dynamic Type grows the view; support
hardware keyboard and Full Keyboard Access. Don't convey meaning by formatting/color alone. See
[[accessibility]].

## Do / Don't

- **Do** support Dynamic Type, selection, dictation, and data detectors; use semantic colors.
- **Don't** use a text view for single-line input, or disable selection on readable content.

See also: [[text-fields]], [[data-entry]], [[typography]], [[color]], [[accessibility]], [[right-to-left]]
