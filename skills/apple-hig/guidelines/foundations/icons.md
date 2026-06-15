---
title: App Icons
source_url: https://developer.apple.com/design/human-interface-guidelines/app-icons
platforms: [ios, ipados, macos, watchos, tvos, visionos]
value_type: exact-spec
last_verified: 2026-06-14
---

# App Icons

> 🔢 **exact-spec / version-dependent.** Master sizes shifted with the "26" generation and the
> move to **Icon Composer** + layered icons. Confirm current values in Icon Composer / Xcode.

## Master asset

- Single **1024×1024 px** master, **PNG**, square, **Display P3** supported.
- **iOS/iPadOS:** no transparency, **no manual rounded corners or effects** — the system applies
  the mask, shadow, and Liquid Glass treatment. Do not pre-round.
- Design for the six rendered appearances — **Default, Dark, Clear (light), Clear (dark),
  Tinted (light), Tinted (dark)**; assemble **layered** icons in **Icon Composer** for the 26
  generation's parallax and appearance modes. See [[liquid-glass]].

## Per-platform specifics

| Platform | Notes |
|---|---|
| iOS / iPadOS | Xcode generates all sizes from the 1024 master. Layered via Icon Composer. |
| macOS | 1024×1024 px layered (Icon Composer), square layout masked to rounded rectangle; same master as iOS, adopts Liquid Glass. |
| watchOS | **Circular**; master reported at **1088 px** in the 26 generation. |
| tvOS | **Layered** parallax icon; supply all required layers/sizes. |
| visionOS | **1024** layered/circular icon: a background + 1–2 layers, **3D parallax** on gaze. |

## Design guidance

- Simple, recognizable, **single focal concept**; legible at the smallest size.
- Fill the canvas per platform conventions (no letterboxing); avoid photographic detail and
  long text.
- Don't reuse small UI glyphs as the app icon; an app icon is its own artwork.
- **Do not use SF Symbols — or confusingly similar glyphs — in icons or logos** (license + HIG).
  See [[licensing-and-assets]] and [[sf-symbols]].
- Keep the concept consistent across light/dark/tinted variants.

## In-app / custom UI icons

- Prefer **SF Symbols** for interface glyphs (toolbar/tab/list icons) — they align to text,
  scale with Dynamic Type, mirror for RTL, and inherit tint. See [[sf-symbols]].
- Custom glyphs: build from the SF Symbols variable template for weight/scale compatibility,
  give every icon-only control a **VoiceOver label**.

See also: [[sf-symbols]], [[images]], [[liquid-glass]], [[licensing-and-assets]].
