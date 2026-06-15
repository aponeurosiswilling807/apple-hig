---
title: Buttons
source_url: https://developer.apple.com/design/human-interface-guidelines/buttons
platforms: [ios, ipados, macos, watchos, tvos, visionos]
value_type: exact-spec
last_verified: 2026-06-14
---

# Buttons

> 🔢 Sizes are exact-spec / version-dependent. Re-verify on Apple.

## Purpose & hierarchy

A button triggers an action. Each screen typically has **one primary (prominent/filled) button**;
secondary actions are quieter (tinted/gray/bordered), tertiary are plain/borderless. On 26+,
prominent controls render as **Liquid Glass** capsules. See [[liquid-glass]].

## Sizing (exact)

- **Minimum hit target 44×44 pt** (iOS/iPadOS/watchOS); **60 pt** on visionOS; focusable on tvOS.
  This is the operative design-review rule. A small label can keep a larger invisible hit area.
  (The Accessibility page's control-size table separately lists 44 pt as the *default* control size
  with **28×28 pt** as the technical minimum; per-platform defaults/minimums are macOS 28/20,
  tvOS 66/56, visionOS 60/28, watchOS 44/28.) See [[accessibility]].
- iOS button heights are commonly **~44–50 pt** (*approximate / illustrative*, not Apple exact-spec).
  Apple documents only the 44×44 pt minimum hit region; 44 pt is also the typical default button
  height, while **50 pt** is the iPad navigation/tool/tab **bar** container height (iOS 12+), not a
  button height. On iOS 26, standard and prominent buttons are **capsule-shaped by default** and
  corners are **concentric with the container** — the system derives the inner radius from the
  parent's radius minus padding. (Any **~12 pt** corner figure is illustrative, not an Apple-published
  exact value.) See [[layout]].
- **macOS control sizes:** mini/small/medium → rounded rect; **large/x-large → capsule**. See [[macos]].

## States (design all)

default · hover (macOS/iPad pointer) · **pressed** · **focused** (tvOS/keyboard) · selected ·
**disabled** (reduced contrast but still legible) · loading (show a [[progress-indicators]] spinner).

## SwiftUI styles

`.bordered`, `.borderedProminent`, `.borderless`, `.plain`, `.glass` (26+); roles `.destructive`,
`.cancel`; `controlSize` (.mini…​.extraLarge); `buttonBorderShape(.capsule)`.

## Labels (writing)

- Use the **verb** of the action ("Add Photo", "Delete"), title-style caps. A button that opens a
  dialog / needs more input ends with **…** ("Export…"). Avoid "OK/Yes" for consequential actions.
  See [[writing]].
- Destructive actions: destructive styling + clear verb; confirm irreversible ones. See [[alerts]].

## Accessibility

- VoiceOver **label** on every button, including **icon-only** ones (symbol name ≠ label).
- Contrast: text/glyph ≥4.5:1 (3:1 for large). Don't signal state by color alone. See [[accessibility]].

## Do / Don't

- ✅ One clear primary action; align button hierarchy to task importance.
- ❌ Don't make targets <44 pt, don't use ambiguous labels, don't rely on color alone for state.

See also: [[segmented-controls]], [[menus]], [[toggles]], [[liquid-glass]], [[writing]].
