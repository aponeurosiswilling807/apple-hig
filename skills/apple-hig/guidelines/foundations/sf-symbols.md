---
title: SF Symbols
source_url: https://developer.apple.com/design/human-interface-guidelines/sf-symbols
platforms: [ios, ipados, macos, watchos, tvos, visionos]
value_type: platform-specific
last_verified: 2026-06-14
---

# SF Symbols

> ⚠️ **Link, don't bundle.** SF Symbols are system-provided images; you may not redistribute the
> set or use symbols in **app icons / logos / trademarks**. See [[licensing-and-assets]].
> Get the app at https://developer.apple.com/sf-symbols/.

## What it is

**SF Symbols 7** — a library of **thousands of symbols** (over 7,000 per the SF Symbols
app/product page) designed to integrate with the SF system font. Requires macOS Sonoma or later
(SF Symbols 6 runs on Ventura+). **SF Symbols 8** is in beta (announced WWDC 2026).

## Weights, scales, modes

- **9 weights** — Ultralight → Black, matching SF font weights. Symbols align to text and pick up
  the surrounding font weight.
- **3 scales** — small / medium / large, relative to cap height.
- **4 rendering modes:**
  - **Monochrome** — single color (tint).
  - **Hierarchical** — one tint, layered opacities for depth.
  - **Palette** — two or more explicit colors.
  - **Multicolor** — the symbol's intrinsic, meaningful colors (e.g. a red battery).
  - Optional **gradient** rendering across all modes.

## Capabilities

- **Draw** animations and **variable / variable-color** rendering (e.g. signal strength).
- **Magic Replace** transitions between related symbols.
- **RTL** mirroring built in; supports **20+ scripts**.
- Symbols are **localized** and accessibility-aware.

## Usage rules

- Prefer SF Symbols for interface glyphs — they scale with **Dynamic Type**, align to text
  baselines, and inherit the control's tint automatically.
- Pick the symbol whose **meaning** matches the action; don't repurpose a glyph for an unrelated
  meaning. Use the **filled** variant for selected/active states (e.g. tab bars).
- Give every **icon-only** control a VoiceOver **label** (the symbol name is not a label).
- Match symbol **weight/scale** to adjacent text.

## Custom symbols

- Export a **variable template** (Ultralight-Small, Regular-Small, Black-Small) from the SF
  Symbols app and keep **path compatibility** so weights/scales interpolate.
- Custom symbols may **not** imitate Apple system symbols in a misleading way.

## Don't

- ❌ Use a symbol in an **app icon or logo** (license + HIG).
- ❌ Ship the symbol set with your app/plugin — reference by **name** (e.g. `"square.and.arrow.up"`).

See also: [[icons]], [[typography]], [[right-to-left]], [[licensing-and-assets]].
