---
title: Pull-down Buttons
source_url: https://developer.apple.com/design/human-interface-guidelines/pull-down-buttons
platforms: [ios, ipados, macos, visionos]
value_type: platform-specific
last_verified: 2026-06-14
---

# Pull-down Buttons

> ⚠️ Re-verify on Apple.

## Purpose

A pull-down button displays a menu of **items or actions that relate directly to the button's
purpose**. Unlike a pop-up button, it has **no persistent selection** — its face shows the button's
own label/symbol, not a chosen value. It's the standard control for grouping related commands or for
**overflow** behind an ellipsis. Verify on Apple as the HIG migrates from the 26 to the 27/Golden
Gate generation.

## vs. related controls

- **Pull-down button** — menu of **actions/options**, no stored selection; face = button purpose.
  (This control.)
- **[[pop-up-buttons|Pop-up button]]** — persistent **single selection**; face = current value.
- **[[menus|Menu]]** — the underlying menu construct; a pull-down button is the button that reveals it.

## Guidelines

- Use to group **related actions** under one control, or as an **overflow** for secondary commands
  using the ellipsis symbol (`ellipsis.circle` / `ellipsis`). See [[toolbars]], [[navigation-bars]].
- Order items by **importance/frequency**; separate groups with dividers; keep menus **shallow**.
  Put **destructive** items last with destructive styling. See [[menus]].
- Use **verbs** for action items; an item that opens a dialog ends with **…**; pair each with an
  **SF Symbol**. See [[writing]], [[sf-symbols]].
- Don't bury the **primary** action only inside a pull-down — keep it as a visible button. See
  [[buttons]].
- Provide a **menu indicator** (chevron / ellipsis) so the affordance reads as a menu opener.

## Platform notes

- **macOS:** `NSPopUpButton` in pull-down mode, or a toolbar item with a menu. See [[macos]].
- **iOS / iPadOS / visionOS:** a `UIButton`/`Menu`-backed control, common in nav bars and toolbars.

## SwiftUI / UIKit

- SwiftUI: `Menu("Label") { Button … ; Divider(); Button(role: .destructive) … }`; use a `Label`
  or `Image(systemName: "ellipsis.circle")` for overflow.
- UIKit: `UIButton` with `menu: UIMenu` and `showsMenuAsPrimaryAction = true`; or `NSPopUpButton`
  (pull-down) on macOS.

## Accessibility

VoiceOver announces it as a menu button; items expose labels, state, and (macOS) shortcuts; ensure
≥44 pt (60 visionOS) targets and Dynamic Type support. See [[accessibility]].

## Do / Don't

- ✅ Group related actions; ✅ use ellipsis for overflow; ✅ verbs + SF Symbols.
- ❌ Don't show a "current value" (that's a pop-up button); ❌ don't nest deep submenus; ❌ don't hide
  the primary action only here.

See also: [[pop-up-buttons]], [[menus]], [[buttons]], [[toolbars]], [[navigation-bars]]
