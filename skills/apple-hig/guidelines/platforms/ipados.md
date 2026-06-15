---
title: iPadOS (iPad)
source_url: https://developer.apple.com/design/human-interface-guidelines/designing-for-ipados
platforms: [ipados]
value_type: exact-spec
last_verified: 2026-06-14
---

# iPadOS (iPad)

> 🔢 Device sizes are **exact-spec / version-dependent**. Re-verify on Apple.

## Design tenets

iPad is **flexible**: scale iPhone patterns up with **sidebars**, **multi-column / split views**,
and **multitasking**. Support both touch and **pointer + hardware keyboard**. Adapt continuously
to window size (Split View, Slide Over, **Stage Manager**, external display).

## Input model

- **Touch** (44×44 pt targets) **plus** trackpad/mouse **pointer** (which morphs over controls)
  and **hardware keyboard** (full shortcut support, focus ring). **Apple Pencil** for drawing,
  handwriting (Scribble), and markup. See [[accessibility]].

## Navigation model

- **Sidebar** (primary) for top-level navigation in regular width — collapsible; pairs with a
  detail or content column. See [[split-views]].
- **Split view** with 2–3 columns (sidebar · content · detail). Collapses to a stack in compact
  width (e.g. Slide Over, narrow Stage Manager window). See [[split-views]].
- Tab bars still valid for simpler apps; many iPad apps combine a sidebar with a top toolbar.
- ⚠️ WWDC 2026 (June 2026, iPadOS 27) refined Liquid Glass with **sidebar appearance changes**
  (sidebars expand and regain active-window color, more consistent refraction). The specific
  "sidebar corner radii" figure is weakly sourced — verify on Apple as the HIG migrates from the
  26 to the 27/Golden Gate generation. See [[liquid-glass]].

## Multitasking

- **Split View** (two apps side by side), **Slide Over** (floating app), **Stage Manager**
  (overlapping resizable windows + external display). Design every layout to **resize fluidly**;
  never assume full-screen. Use **size classes**, not fixed widths. See [[multitasking]].

## Key exact values

- All iPads render **@2x** (264 PPI; mini 326 PPI).
- Sidebar width ~**320 pt** expanded — a typical value, not an Apple-published spec; sidebar width
  is adaptive (varies). Content/detail fill the rest.
- Touch target **44×44 pt**; pointer enables denser secondary controls.

## iPad sizes (points, all @2x)

| Model | Points | Pixels |
|---|---|---|
| iPad Pro 13" (M4/M5) | 1032 × 1376 | 2064 × 2752 |
| iPad Pro 12.9" / Air 13" | 1024 × 1366 | 2048 × 2732 |
| iPad Pro 11" (M4) | 834 × 1210 | 1668 × 2420 |
| iPad Pro 11" (older) | 834 × 1194 | 1668 × 2388 |
| iPad Air 11" / Air 10.9" / iPad 11" (base) | 820 × 1180 | 1640 × 2360 |
| iPad 10.2" (7th/8th/9th gen) | 810 × 1080 | 1620 × 2160 |
| iPad mini | 744 × 1133 | 1488 × 2266 (326 PPI) |

## Safe areas

Respect the camera, Home indicator, and (when keyboard attached) the software keyboard inset.
Design for any window size, not just full screen.

See also: [[ios]], [[macos]], [[split-views]], [[multitasking]], [[layout]], [[liquid-glass]].
