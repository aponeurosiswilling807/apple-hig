---
title: Edit Menus
source_url: https://developer.apple.com/design/human-interface-guidelines/edit-menus
platforms: [ios, ipados, visionos]
value_type: platform-specific
last_verified: 2026-06-14
---

# Edit Menus

> ⚠️ Re-verify on Apple. (UIKit `UIEditMenuInteraction`.)

## Purpose

An edit menu is the lightweight **callout bar** that appears on a **selection** of content, letting
people make changes to and act on what they selected — standard commands like **Cut, Copy, Paste,
Select, Select All, Look Up, Translate, Share** — plus your **custom** items. Verify on Apple as the
HIG migrates from the 26 to the 27/Golden Gate generation.

## Anatomy

- A small horizontal **bar** floating near the selection, with text/symbol items and a chevron to
  page through overflow.
- System editing commands first; your **custom commands** added contextually.
- On Mac (Catalyst / desktop-class editing) the same actions also live in the **Edit menu** of the
  menu bar. See [[the-menu-bar]].

## Guidelines

- Include only commands **relevant to the current selection and context**; don't show inapplicable
  items (gray out or omit).
- Keep custom items **few** and clearly named with verbs; place them after the standard commands.
  See [[writing]].
- Respect the **standard command names and order** (Cut, Copy, Paste…) so the menu feels native.
- For text, let the system provide editing commands; add custom items only for app-specific actions
  on the selection (e.g. Highlight, Define in your glossary).
- Don't replace the system selection/editing behavior; extend it. See [[context-menus]].

## API (UIKit)

- `UIEditMenuInteraction` + `UIEditMenuInteractionDelegate`:
  `editMenuInteraction(_:menuFor:suggestedActions:)` to return a custom `UIMenu`, and
  `presentEditMenu(with:)` to present from your own gesture/configuration outside a text view.
- Build items with `UIAction` / `UIMenu`; validate with `canPerformAction(_:withSender:)`.

## Accessibility

VoiceOver announces the selection and each available command; ensure custom commands have clear
labels and are reachable without precise pointer placement; honor Dynamic Type. See [[accessibility]].

## Do / Don't

- ✅ Keep standard commands in standard order; ✅ show only applicable items; ✅ name custom verbs
  clearly.
- ❌ Don't crowd the bar; ❌ don't rename system commands; ❌ don't hide essential editing behind only
  this menu.

See also: [[context-menus]], [[menus]], [[the-menu-bar]], [[text-fields]], [[accessibility]]
