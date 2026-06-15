---
title: Menus & Context Menus
source_url: https://developer.apple.com/design/human-interface-guidelines/menus
platforms: [ios, ipados, macos, tvos, visionos]
value_type: platform-specific
last_verified: 2026-06-14
---

# Menus & Context Menus

> ⚠️ Re-verify on Apple.

## Types

- **Pull-down menu** — a button that reveals a list of **actions or options** in no particular
  order of importance; the button keeps its label. Good for overflow (`ellipsis.circle`).
- **Pop-up menu** — shows the **currently selected** value and lets you pick another (single
  choice). Acts like a compact picker. See [[pickers]].
- **Context menu** — long-press (touch) / right-click (pointer) on an element to reveal actions
  **specific to that item**. See [[lists-and-tables]].
- **Menu bar** (macOS) — the always-present top menus; **every** command belongs in a logically
  grouped menu (File, Edit, etc.); assign **keyboard shortcuts** to frequently used commands (not
  literally every command). See [[macos]].

## Guidelines

- **Group** related items; separate groups with dividers; order by frequency/importance. Keep
  menus shallow — avoid deep submenus. Prefer **inline grouped sections** (dividers) over nested
  submenus; reserve submenus for genuinely secondary, closely related choices and keep them to a
  single level.
- Use **verbs** for actions; a menu item that opens a dialog ends with **…**; show **keyboard
  shortcuts** (macOS) and **checkmarks** for current state. See [[writing]].
- Put **destructive** items at the bottom, styled destructive, and confirm if irreversible.
- Provide **SF Symbols** beside items for scannability. See [[sf-symbols]].
- Don't hide the **primary** action in a menu — keep it visible as a button. See [[buttons]].

## SwiftUI

`Menu("Options") { Button … ; Divider(); Button(role: .destructive) … }`; `.contextMenu { … }`;
on macOS use `CommandGroup`/`CommandMenu` for the menu bar.

## Accessibility

VoiceOver navigates items with labels, state, and shortcuts; context-menu actions must also be
reachable without long-press (provide an alternate affordance). See [[accessibility]].

See also: [[toolbars]], [[pickers]], [[buttons]], [[macos]], [[lists-and-tables]].
