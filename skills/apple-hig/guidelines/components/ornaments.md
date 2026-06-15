---
title: Ornaments
source_url: https://developer.apple.com/design/human-interface-guidelines/ornaments
platforms: [visionos]
value_type: platform-specific
last_verified: 2026-06-14
---

# Ornaments

> ⚠️ Re-verify on Apple.

## Purpose

In **visionOS**, an ornament presents **controls and information related to a window** — anchored
just **outside the window's edge** — without crowding or obscuring the window's contents. Common
uses: a **toolbar**, a **tab bar**, or supplementary controls. Ornaments render in **Liquid Glass**
and visually float alongside their window. Verify on Apple as the HIG migrates from the 26 to the
27/Golden Gate generation.

## Anatomy / placement

- Attached to a **window edge** (typically bottom or leading), floating slightly off the window
  plane so it doesn't cover content. The system gives it a glass background.
- Use for **frequently used tools/commands** and window-scoped navigation (tab bar ornament).
- Liquid Glass here is **chrome only** — never the content layer; use the **regular** variant unless
  contrast demands the **clear** variant. See [[liquid-glass]], [[materials]].

## Guidelines

- Keep ornaments **uncluttered**; show only commonly needed controls and move the rest into a
  [[menus|menu]].
- **Don't obscure content** — let the ornament sit outside the window so the main view stays clear.
- Place the **tab bar** as a leading ornament and the **toolbar** as a bottom ornament, matching
  system conventions; people expect them in familiar spots. See [[tab-views]], [[toolbars]].
- Respect **hit targets ≥60 pt** for visionOS so controls are comfortable to look-and-pinch.
- Support **hover effects** so controls highlight on gaze/pointer; avoid tiny, tightly packed items.

## SwiftUI

- `.ornament(visibility:attachmentAnchor:contentAlignment:) { … }` to attach custom content.
- System bars become ornaments automatically: `.toolbar { … }`, `TabView { … }` in a visionOS window.

## Accessibility

Provide VoiceOver labels on icon-only controls; ensure hover/gaze targets meet the 60 pt guideline;
honor Reduce Motion for ornament transitions. See [[accessibility]], [[visionos]].

## Do / Don't

- ✅ Keep it sparse; ✅ anchor toolbars/tab bars where users expect; ✅ ≥60 pt targets.
- ❌ Don't obscure window content; ❌ don't overstuff an ornament; ❌ don't use glass as a content
  background.

See also: [[visionos]], [[toolbars]], [[tab-views]], [[liquid-glass]], [[materials]], [[accessibility]]
