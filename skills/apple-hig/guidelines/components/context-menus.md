---
title: Context Menus
source_url: https://developer.apple.com/design/human-interface-guidelines/context-menus
platforms: [ios, ipados, macos, visionos]
value_type: platform-specific
last_verified: 2026-06-14
---

# Context Menus

> ⚠️ Re-verify on Apple.

## Purpose

A context menu gives quick access to functionality **directly related to a specific item**, without
cluttering the interface. People open it by **long-pressing** (touch), **right/secondary-clicking**
(pointer), or **trackpad force-click** (Mac). Verify on Apple as the HIG migrates from the 26 to the
27/Golden Gate generation.

## Anatomy

- A list of **actions/options** scoped to the item, optionally grouped by dividers, with SF Symbols.
- An optional **preview** of the item shown above/alongside the menu (iOS/iPadOS); tapping the
  preview can open the item.
- **Destructive** items styled red and placed last; submenus only one level deep.

## Guidelines

- Keep the menu **short** and the actions **relevant to the targeted item**; order by frequency.
- **Always provide a non-gesture alternative** — every context-menu action must also be reachable
  another way (a toolbar/overflow button, swipe action, or selection action), because the menu is
  hidden and not discoverable. See [[menus]], [[lists-and-tables]].
- Don't bury the item's **primary** action only in the context menu; keep it visible. See [[buttons]].
- Group related commands; use a leading SF Symbol per item for scannability. See [[sf-symbols]].
- Use the **preview** to confirm which item is targeted, not as decoration.

## Platform notes

- **iOS / iPadOS / visionOS:** long-press / look-and-pinch; supports a rich preview and inline
  swipe alternatives in lists.
- **macOS:** secondary-click; no large preview — a plain menu. Mirror items into the **menu bar**
  where it makes sense. See [[macos]], [[the-menu-bar]].

## SwiftUI / UIKit

- SwiftUI: `.contextMenu { Button … ; Divider(); Button(role: .destructive) … }`;
  `.contextMenu(menuItems:preview:)` for a custom preview.
- UIKit: `UIContextMenuInteraction` + `UIContextMenuConfiguration(previewProvider:actionProvider:)`.

## Accessibility

VoiceOver must expose the same actions without the long-press gesture (custom actions rotor or a
visible control); honor Dynamic Type and Reduce Motion in the reveal animation. See [[accessibility]].

## Do / Don't

- ✅ Scope actions to the item; ✅ keep it short; ✅ provide a visible alternative path.
- ❌ Don't make a feature reachable only via long-press; ❌ don't nest deep submenus; ❌ don't repeat
  the whole app's commands here.

See also: [[menus]], [[lists-and-tables]], [[buttons]], [[edit-menus]], [[macos]], [[accessibility]]
