---
title: Color
source_url: https://developer.apple.com/design/human-interface-guidelines/color
platforms: [ios, ipados, macos, watchos, tvos, visionos]
value_type: exact-spec
last_verified: 2026-06-14
---

# Color

> 🔢 **exact-spec / version-dependent.** Apple can change system colors per OS release; both
> light and dark are listed here, both support **Display P3** wide gamut. Use **semantic**
> color names in code, not these hex values directly. Re-verify on Apple.

## Rule #1 — use semantic colors, never hardcoded hex

In code, reference `label`, `secondaryLabel`, `systemBackground`, `tintColor`/accent, etc.
The system resolves them per appearance (light/dark), contrast setting, and vibrancy. Hardcoded
hex breaks Dark Mode, Increase Contrast, and wide gamut. The tables below are for *reference and
token export only*.

## System colors (light → dark)

| Name | Light | Dark |
|---|---|---|
| systemBlue | `#007AFF` | `#0A84FF` |
| systemGreen | `#34C759` | `#30D158` |
| systemIndigo | `#5856D6` | `#5E5CE6` |
| systemOrange | `#FF9500` | `#FF9F0A` |
| systemPink | `#FF2D55` | `#FF375F` |
| systemPurple | `#AF52DE` | `#BF5AF2` |
| systemRed | `#FF3B30` | `#FF453A` |
| systemTeal | `#30B0C7` | `#40CBE0` |
| systemMint | `#00C7BE` | `#63E6E2` |
| systemCyan | `#32ADE6` | `#64D2FF` |
| systemYellow | `#FFCC00` | `#FFD60A` |
| systemBrown | `#A2845E` | `#AC8E68` |

`systemBlue` is the default iOS **tint/accent**.

## System grays (light → dark)

| Name | Light | Dark |
|---|---|---|
| systemGray | `#8E8E93` | `#8E8E93` |
| systemGray2 | `#AEAEB2` | `#636366` |
| systemGray3 | `#C7C7CC` | `#48484A` |
| systemGray4 | `#D1D1D6` | `#3A3A3C` |
| systemGray5 | `#E5E5EA` | `#2C2C2E` |
| systemGray6 | `#F2F2F7` | `#1C1C1E` |

## Semantic label & separator colors

| Role | Light | Dark |
|---|---|---|
| label | `#000000` | `#FFFFFF` |
| secondaryLabel | `rgba(60,60,67,0.6)` | `rgba(235,235,245,0.6)` |
| tertiaryLabel | `rgba(60,60,67,0.3)` | `rgba(235,235,245,0.3)` |
| quaternaryLabel | `rgba(60,60,67,0.18)` | `rgba(235,235,245,0.16)` |
| placeholderText | `rgba(60,60,67,0.3)` | `rgba(235,235,245,0.3)` |
| separator | `rgba(60,60,67,0.29)` | `rgba(84,84,88,0.6)` |
| opaqueSeparator | `#C6C6C8` | `#38383A` |
| link | `#007AFF` | `#0984FF` |

## Background colors (iOS)

| Role | Light | Dark (elevated/base) |
|---|---|---|
| systemBackground | `#FFFFFF` | `#000000` |
| secondarySystemBackground | `#F2F2F7` | `#1C1C1E` |
| tertiarySystemBackground | `#FFFFFF` | `#2C2C2E` |
| systemGroupedBackground | `#F2F2F7` | `#000000` |
| secondarySystemGroupedBackground | `#FFFFFF` | `#1C1C1E` |
| tertiarySystemGroupedBackground | `#F2F2F7` | `#2C2C2E` |

## macOS semantic roles (NSColor)

`controlAccentColor` (user-chosen, default blue), `windowBackgroundColor` `#ECECEC` → `#323232`,
`controlBackgroundColor`, `labelColor` (0.85 alpha black/white), `selectedContentBackgroundColor`
`#0063E1` / `#0058D0`, `gridColor`, `separatorColor`. macOS colors are dynamic and respond to the
user's accent + highlight choices in System Settings.

## Contrast (accessibility)

- **4.5:1** minimum for body text; **3:1** for large text (≥18 pt regular / ≥14 pt bold) and
  meaningful glyphs. Placeholder text must also meet **4.5:1**.
- **Never rely on color alone** — pair with text, shape, or an SF Symbol.
- Test with **Increase Contrast**, **Bold Text**, **Reduce Transparency**, and over the
  worst-case background behind any translucent material.

See also: [[accessibility]], [[materials]], [[liquid-glass]], the `/hig-tokens` command, and
the consolidated `references/design-tokens.md`.
