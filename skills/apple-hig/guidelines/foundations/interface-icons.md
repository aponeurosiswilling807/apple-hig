---
title: Icons (Interface Icons)
source_url: https://developer.apple.com/design/human-interface-guidelines/icons
platforms: [ios, ipados, macos, watchos, tvos, visionos]
value_type: universal
last_verified: 2026-06-14
---

# Icons (Interface Icons)

> ⚠️ Re-verify on Apple.

## Purpose

This is the HIG **Icons** foundation: designing the small **interface glyphs/symbols** used
inside the UI — toolbar, tab bar, list, and control icons — **not** the App Icon (see App Icons /
[[icons]]). An effective interface icon expresses a single concept people instantly understand and
sits comfortably next to text.

## Prefer SF Symbols

- Reach for **SF Symbols** first. They align to the text baseline, scale with **Dynamic Type**,
  inherit the control's tint, mirror for **RTL**, ship in 9 weights / 3 scales, and bring
  accessibility for free. See [[sf-symbols]].
- Apple's Icons page also lists **preferred glyphs for common actions** (share, add, delete,
  etc.) — use the conventional symbol for a known action rather than inventing one.
- Pick the symbol whose **meaning** matches the action; use the **filled** variant for
  selected/active states (e.g. tab bars). Don't repurpose a glyph for an unrelated meaning.

## Designing custom interface icons

- Use custom glyphs only when no SF Symbol fits. Build from the **SF Symbols variable template**
  (export Ultralight-Small, Regular-Small, Black-Small and keep **path compatibility**) so your
  glyph interpolates across weights/scales and matches system symbols.
- **Simple, recognizable forms.** Reduce to the essential silhouette; avoid intricate detail that
  blurs at small sizes.
- **Consistent weight & scale.** Match stroke weight and optical size to adjacent text and to the
  other icons in the set, so a row of icons reads as a family.
- **Optical alignment.** Align by perceived center, not bounding box; nudge so circles, triangles,
  and asymmetric shapes look balanced beside square ones. Maintain a consistent optical size even
  when bounding boxes differ.
- **Consistent perspective & style** across the whole icon set (all flat, or all the same angle).

## Platform notes

- **tvOS:** icons must read at a distance and within focus; keep them bold and simple.
- **watchOS:** very small render sizes — favor the simplest forms and SF Symbols.
- **visionOS:** icons appear in spatial chrome/ornaments; keep targets ≥ **60 pt**. See
  [[spatial-layout]].
- Custom interface icons are distinct from the **App Icon**, which is its own 1024-px artwork —
  don't reuse a small UI glyph as the app icon. See App Icons.

## Accessibility

- Give **every icon-only control a VoiceOver label** — the symbol name is not a label. See
  [[accessibility]].
- Icons must meet contrast (**3:1** for meaningful glyphs) and **never carry meaning by color
  alone** — pair with a label or shape.
- Support **Dynamic Type** scaling (not on macOS) so glyphs grow with text.

## Licensing

- Don't ship or redistribute the SF Symbols set — reference symbols by **name** (e.g.
  `"square.and.arrow.up"`). Custom symbols must **not** imitate Apple system symbols misleadingly,
  and **no** SF Symbol may appear in an app icon/logo/trademark. See [[licensing-and-assets]].

## Do / Don't

- ✅ Use SF Symbols (and Apple's preferred-glyph list) for standard actions.
- ✅ Keep custom glyphs simple, consistently weighted, and optically aligned.
- ❌ Invent a glyph when a well-understood SF Symbol exists.
- ❌ Mix inconsistent weights/styles in one icon set, or rely on color alone.

See also: [[sf-symbols]], [[icons]], [[typography]], [[right-to-left]], [[accessibility]], [[licensing-and-assets]]
