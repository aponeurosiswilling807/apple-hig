---
title: Images
source_url: https://developer.apple.com/design/human-interface-guidelines/images
platforms: [ios, ipados, macos, watchos, tvos, visionos]
value_type: universal
last_verified: 2026-06-14
---

# Images

> ⚠️ Universal guidance with scale-factor specifics. Re-verify on Apple.

## Resolution & assets

- Provide raster art at every scale the platform uses: **@2x / @3x** (iOS), **@1x / @2x** (macOS,
  tvOS HD/4K). Prefer **vector (PDF/SVG) or SF Symbols** so art scales crisply. See [[sf-symbols]].
- Support **Display P3** wide gamut where art benefits; provide an sRGB fallback.
- Use **asset catalogs** with light/dark (and tinted, where relevant) variants.

## Aspect ratio, scale, cropping

- Keep the **subject** within the safe region; designs may be cropped to fit different aspect
  ratios and devices. Don't bake text into images (it can't localize, scale, or meet contrast).
- Avoid stretching/squashing; preserve aspect ratio.

## Dark Mode & contrast

- Provide a **dark variant** for photos/illustrations that look wrong on a dark background.
- Maintain contrast for any text or meaningful detail rendered over an image (add a scrim/material).

## Accessibility

- Supply an **accessibility description** (alt text) for meaningful images; mark decorative
  images as such so VoiceOver skips them.
- Don't convey information by image **color alone**. See [[accessibility]].

## Performance

- Right-size assets to their displayed dimensions; don't ship oversized images.
- Use **SF Symbols** instead of bitmaps for interface glyphs wherever possible.

See also: [[icons]], [[sf-symbols]], [[color]], [[accessibility]].
