---
title: Combo Boxes
source_url: https://developer.apple.com/design/human-interface-guidelines/combo-boxes
platforms: [macos]
value_type: platform-specific
last_verified: 2026-06-14
---

# Combo Boxes

> ⚠️ Re-verify on Apple.

## Purpose

A combo box combines a **text field with a list of choices** in a single macOS control. The user
can **either pick a value from the list or type their own**. Use it when there's a useful set of
likely values but the field should still accept arbitrary input.

## Anatomy

- An editable **text field**. See [[text-fields]].
- A **disclosure / pull-down indicator** that reveals a scrollable list of options.

## Combo box vs. pop-up button

- **Combo box** — list **plus** free text entry; choose when custom values are valid (e.g. a font
  size, a recent search, a tag). 
- **Pop-up button** — a **fixed**, mutually exclusive set; the user must pick one of your options
  and **cannot** type. Choose when only your defined values are allowed. See [[pickers]].

## Guidelines

- Use a combo box only when typed input is genuinely useful; if the value set is closed, prefer a
  pop-up button. 
- Seed the list with the **most likely / recent** choices to reduce typing.
- Provide a clear **label**; validate typed input gently and in context. See [[text-fields]],
  [[feedback]].
- Keep the list a manageable length; for very large sets prefer search + list. See [[searching]].

## Platform notes

- **macOS only.** On iOS/iPadOS use a [[text-fields|text field]] with suggestions, or a
  [[menus|menu]]/[[pickers|picker]]. See [[macos]].

## AppKit / SwiftUI API

- AppKit: `NSComboBox` (backed by `NSComboBoxCell`); supply items directly or via a data source
  (`usesDataSource`); `completes` enables autocompletion.
- SwiftUI: no dedicated combo box; approximate with `TextField` + suggestions, or `Picker`/`Menu`
  for the closed-set case.

## Accessibility

Expose the editable field and the list to VoiceOver; announce the current/typed value; ensure full
keyboard navigation (type-ahead, arrow keys) and Full Keyboard Access. See [[accessibility]].

## Do / Don't

- **Do** allow typed values; pre-fill likely options; label the control.
- **Don't** use a combo box for a closed set (use a pop-up button); don't hide that the field is
  editable.

See also: [[text-fields]], [[pickers]], [[menus]], [[macos]], [[searching]], [[accessibility]]
