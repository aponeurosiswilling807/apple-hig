---
title: Lockups
source_url: https://developer.apple.com/design/human-interface-guidelines/lockups
platforms: [tvos]
value_type: platform-specific
last_verified: 2026-06-14
---

> ⚠️ Re-verify on Apple.

# Lockups

## Purpose

A lockup **combines multiple separate views into a single, interactive unit** — typically an image
plus text (and sometimes a footer) — that behaves as one **focusable** element. Lockups are the
building blocks of **tvOS shelves and grids**, where rows of media tiles let people browse content
from across the room. tvOS-only. See [[tvos]], [[collections]].

## Anatomy / Types

- **Content** (image/poster) + optional **title/subtitle** + optional **footer**, grouped so the
  whole tile receives focus as a unit.
- Common forms include **image lockups**, **caption-button lockups**, and **poster/monogram**
  styles; exact set is version-dependent.
- Lockups are arranged in **shelves** (horizontal rows) and grids. See [[collections]].

## Focus & motion

- The **focus engine** drives navigation with the Siri Remote; the focused lockup **lifts, scales,
  and gains a parallax effect** to signal selection. Design artwork with layered, edge-safe content
  so parallax reads well.
- Keep lockups in a row a **consistent size** so focus movement is predictable.
- Provide enough spacing that the focused (enlarged) lockup doesn't crowd its neighbors. See [[layout]].

## Guidelines

- Make the **focusable target generous** — tvOS hit/focus targets are large by design; don't pack
  tiny tiles. (visionOS uses a 60x60 pt minimum; tvOS relies on focus scale.) See [[accessibility]].
- Keep **titles short** and legible at TV viewing distance; truncate gracefully. See [[labels]], [[typography]].
- Use **high-resolution, edge-to-edge artwork**; avoid baked-in text that parallax will distort.

## TVUIKit / SwiftUI

- **TVUIKit:** lockup view components conform to `TVLockupViewComponent`; system lockup views
  provide the standard focus/parallax behavior.
- **SwiftUI (tvOS):** apply `.focusable()` / `.focusSection()`; the system supplies focus
  highlighting and the hover/parallax effect for card-style content.

## Accessibility

- Each lockup exposes a single, meaningful **VoiceOver label** describing its content (not its
  sub-views individually). Respect **Reduce Motion** — diminish parallax/scaling. Ensure title
  contrast over artwork meets **4.5:1** (3:1 large). See [[accessibility]], [[color]].

## Do / Don't

- **Do** size lockups consistently per shelf, use rich artwork, and let the focus engine animate.
- **Don't** overload a lockup with text, use tiny tiles, or fight the system focus/parallax effect.

See also: [[tvos]], [[collections]], [[labels]], [[typography]], [[layout]], [[accessibility]]
