---
title: Pop-up Buttons
source_url: https://developer.apple.com/design/human-interface-guidelines/pop-up-buttons
platforms: [ios, ipados, macos, visionos]
value_type: platform-specific
last_verified: 2026-06-14
---

# Pop-up Buttons

> ⚠️ Re-verify on Apple.

## Purpose

A pop-up button displays a menu of **mutually exclusive options** and **shows the currently selected
value** on its face. Tapping it opens the menu so the user can choose a different single value; the
button label updates to reflect the new selection. It's a compact alternative to a [[pickers|picker]]
when space is tight and the option list is short. Verify on Apple as the HIG migrates from the 26 to
the 27/Golden Gate generation.

## vs. related controls

- **Pop-up button** — persistent **single selection**; face shows the chosen value. (This control.)
- **[[pull-down-buttons|Pull-down button]]** — a menu of **actions/options with no persistent
  selection**; face shows the button's purpose, not a chosen value.
- **[[pickers|Picker]]** — wheel/segmented/inline selection; use for longer lists or when the choice
  benefits from a richer surface.

## Guidelines

- Use when there's **one current value** out of a **short, well-defined set** and the user needs to
  see the current choice at a glance.
- Indicate the selected item with a **checkmark** in the open menu; keep option labels short and
  parallel. See [[writing]].
- Provide a **menu indicator** (chevron) so people know it opens a menu; show a meaningful default.
- Don't use a pop-up button for **actions** — use a [[pull-down-buttons|pull-down button]] or
  [[menus|menu]] instead.
- For long lists or hierarchical choices, prefer a [[pickers|picker]] or a separate selection screen.

## Platform notes

- **macOS:** a classic control (`NSPopUpButton`, pull-down style off); common in forms and toolbars.
  See [[macos]].
- **iOS / iPadOS / visionOS:** a button with `.menu` content reflecting selection.

## SwiftUI / UIKit

- SwiftUI: `Picker("Label", selection:) { … }` with `.pickerStyle(.menu)` renders as a pop-up button.
- UIKit: `UIButton` with `changesSelectionAsPrimaryAction = true` and a `UIMenu` of single-choice
  `UIAction`s; or `NSPopUpButton` (macOS).

## Accessibility

VoiceOver announces the control as a pop-up with its **current value**; ensure a label and that
selection changes are announced; honor Dynamic Type and ≥44 pt (60 visionOS) targets. See
[[accessibility]].

## Do / Don't

- ✅ Show the current value; ✅ checkmark the selection; ✅ keep the list short.
- ❌ Don't use it for actions; ❌ don't pack long lists into it; ❌ don't hide the menu indicator.

See also: [[pull-down-buttons]], [[pickers]], [[menus]], [[buttons]], [[macos]]
