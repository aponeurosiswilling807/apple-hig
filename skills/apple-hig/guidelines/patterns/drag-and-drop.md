---
title: Drag and Drop
source_url: https://developer.apple.com/design/human-interface-guidelines/drag-and-drop
platforms: [ios, ipados, macos, visionos]
value_type: universal
last_verified: 2026-06-14
---

# Drag and Drop

> ⚠️ Universal (primarily iPad/Mac, also within iOS). Re-verify on Apple.

Let people move or copy content directly by dragging — within your app and **between** apps
(especially iPad multitasking and Mac).

## Guidelines

- **Show clear affordances and feedback:** the dragged item lifts (with a representative preview),
  valid **drop targets highlight**, and an invalid target shows it won't accept. See [[feedback]].
- **Provide rich representations** so other apps receive the most useful type (text, image, file,
  custom UTType) and a fallback. Decide **copy vs move** by context (and modifier keys on Mac).
- **Support multi-item drag** (drag one, tap to add more) on iPad. Allow drop into lists,
  collections, fields, and across split view / Stage Manager. See [[multitasking]], [[lists-and-tables]].
- **Animate** insertion/removal so the result is clear; respect Reduce Motion. See [[motion]].
- Don't make drag-and-drop the **only** way to do something — always offer a menu/button
  alternative (accessibility + discoverability). See [[menus]], [[accessibility]].

## Platform notes

- **Mac:** full drag-and-drop with the pointer, modifier keys (⌥ copy), and spring-loading. See [[macos]].
- **iPad:** system-wide drag between apps; **visionOS:** drag within/between windows. See [[ipados]], [[visionos]].

## Accessibility

Provide non-drag alternatives (cut/copy/paste, move-to menus); ensure VoiceOver/Full Keyboard
Access can perform the same action. See [[accessibility]].

See also: [[multitasking]], [[lists-and-tables]], [[menus]], [[feedback]].
