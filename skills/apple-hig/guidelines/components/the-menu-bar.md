---
title: The Menu Bar
source_url: https://developer.apple.com/design/human-interface-guidelines/the-menu-bar
platforms: [macos]
value_type: exact-spec
last_verified: 2026-06-14
---

# The Menu Bar

> 🔢 exact-spec / version-dependent. Re-verify on Apple.

## Purpose

The menu bar runs along the **top of the screen** on a Mac and lists every app's **top-level menus**
(Apple menu, app menu, File, Edit, …, plus the system status area on the trailing side). It is the
canonical, always-available home for **all of an app's commands**, grouped logically. Verify on Apple
as the HIG migrates from the 26 to the 27/Golden Gate generation (macOS 27 "Golden Gate").

## Exact values (macOS)

- **Menu bar height ≈ 24 pt** on a standard display; **≈ 37 pt** on displays with the **camera
  housing (notch)**, where the bar grows to clear the housing.
- These are **version-dependent** layout figures — confirm against the current macOS release before
  relying on them; treat as guidance, not contract.

## Standard menus & grouping

- Standard order: **Apple menu** (system), **App menu** (About, Settings…, Services, Quit), **File**,
  **Edit**, **Format/View** (as applicable), app-specific menus, **Window**, **Help**, then the
  trailing **status menus**.
- **Every command belongs in a logically grouped menu** — File for document lifecycle, Edit for
  cut/copy/paste/undo, etc. Group related items and separate groups with dividers. See [[menus]].
- An item that opens a dialog ends with **…**; show **state** with checkmarks; use **verbs** for
  actions. See [[writing]].

## Keyboard shortcuts

- Assign **keyboard shortcuts to frequently used commands** (not to every command). Reuse the
  **standard** shortcuts (⌘C, ⌘V, ⌘Z, ⌘S, ⌘W…) and avoid overriding system ones.
- Display each shortcut beside its menu item so people can learn it.

## Guidelines

- Keep menu titles **short** (one or two words); don't overload the bar with too many top-level menus.
- Mirror important commands into **toolbars**, **context menus**, and the **Dock menu** for quick
  access, but the menu bar remains the complete list. See [[toolbars]], [[context-menus]],
  [[dock-menus]].
- Disable (gray out) commands that don't apply in the current context rather than hiding them.

## API

- AppKit: define `NSMenu` / `NSMenuItem` hierarchy (main menu in the app's menu nib or built in code).
- SwiftUI: `.commands { CommandGroup(…) ; CommandMenu("Custom") { … } }`; `CommandGroupPlacement`
  to insert into standard menus.

## Accessibility

VoiceOver navigates menus and reads titles, state, and shortcuts; ensure every command has a clear
label and that shortcuts are discoverable. See [[accessibility]].

## Do / Don't

- ✅ Place all commands in logical menus; ✅ shortcuts for frequent commands; ✅ standard menu order.
- ❌ Don't hide essential commands from the bar; ❌ don't invent nonstandard shortcuts for standard
  actions; ❌ don't crowd the bar with too many top-level menus.

See also: [[menus]], [[dock-menus]], [[toolbars]], [[context-menus]], [[macos]]
