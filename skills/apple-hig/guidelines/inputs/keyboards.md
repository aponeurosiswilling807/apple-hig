---
title: Keyboards
source_url: https://developer.apple.com/design/human-interface-guidelines/keyboards
platforms: [ios, ipados, macos, tvos, visionos]
value_type: universal
last_verified: 2026-06-14
---
> ⚠️ Re-verify on Apple.

# Keyboards

## Purpose
People use hardware keyboards to enter text and to invoke commands quickly. Well-designed keyboard support speeds up frequent tasks, helps power users, and is essential for many people who navigate without touch or a pointer. macOS expects full keyboard support; iPadOS and visionOS strongly benefit from it when a hardware keyboard is attached.

## Keyboard shortcuts (key commands)
- Define shortcuts for **frequent and important actions** so people can keep their hands on the keyboard.
- Prefer **Command (⌘)** as the primary modifier — it's the most reachable and is the convention for app commands. Add Shift, Option, or Control only when needed; **fewer modifiers are better**.
- Use a **mnemonic key** that maps to the action when possible (e.g., the first letter of the command).
- **Match system conventions** for standard commands — ⌘C copy, ⌘V paste, ⌘X cut, ⌘Z undo, ⇧⌘Z redo, ⌘S save, ⌘N new, ⌘W close, ⌘F find, ⌘P print, ⌘, preferences. Don't reassign these.
- Avoid overriding system-reserved shortcuts.

## Discoverability
- On **iPad/iPadOS**, holding the **Command (⌘) key** shows a discoverability overlay (a heads-up display) listing available shortcuts for the current context — provide clear `discoverabilityTitle`s.
- On **macOS**, surface commands and their shortcut equivalents in the **menu bar** so people can both discover and learn them.

## Full keyboard access & focus
- Support **Full Keyboard Access** so people can reach and activate every control using the keyboard alone, with a visible focus indicator.
- Provide a logical **focus order** and let **Tab** / arrow keys move focus predictably; support **Return/Space** to activate the focused control and **Escape** to cancel/dismiss.

## Platform notes
- **macOS** — full keyboard navigation and menu-bar shortcuts are expected for every app.
- **iPadOS** — support hardware keyboards, ⌘-hold discoverability, and key commands; many users pair a Magic Keyboard.
- **iOS** — support external keyboards where text entry or navigation is common.
- **tvOS** — keyboard support assists text entry; minimize required typing (see [[remotes]]).
- **visionOS** — support attached hardware keyboards and standard shortcuts.

## SwiftUI / UIKit / API
- SwiftUI: `.keyboardShortcut(_:modifiers:)`, `KeyboardShortcut`, `.onKeyPress(_:action:)`, `commands { CommandMenu { ... } }`, `@FocusState` + `.focused(_:)` for focus management.
- UIKit/AppKit: `UIKeyCommand` (with `discoverabilityTitle`, `input`, `modifierFlags`), `keyCommands`/`pressesBegan(_:with:)`, `UIFocusSystem`; AppKit menu items carry `keyEquivalent`.

## Accessibility
- Keyboard access is itself an accessibility feature — ensure **every action** is reachable without a pointer or touch.
- Keep a **clearly visible focus ring** and never trap focus.
- Don't rely on shortcuts that require holding many keys at once; offer single-modifier alternatives where feasible.

## Do / Don't
- Do follow standard shortcut conventions and expose them in menus / discoverability.
- Do keep modifiers minimal and keys mnemonic.
- Don't reassign system or universally expected shortcuts (⌘C/⌘V/⌘Z, etc.).
- Don't make a control reachable only by pointer or touch.

See also: [[accessibility]], [[pointing-devices]], [[gestures]], [[remotes]], [[macos]], [[ipados]], [[visionos]]
