---
title: Image Views
source_url: https://developer.apple.com/design/human-interface-guidelines/image-views
platforms: [ios, ipados, macos, watchos, tvos, visionos]
value_type: universal
last_verified: 2026-06-14
---

# Image Views

> ⚠️ Re-verify on Apple.

## Purpose

An image view displays a single image — or in some cases an animated sequence — on a transparent
or opaque background. Use it for photos, illustrations, and bitmap artwork. For scalable, tintable
glyphs prefer **SF Symbols** instead of a bitmap. See [[sf-symbols]], [[images]].

## Content modes

- **Aspect fit** — scales the image to fit fully within the view's bounds, **preserving aspect
  ratio** (may letterbox/pillarbox). Default-safe for unknown content.
- **Aspect fill** — fills the bounds preserving aspect ratio, **cropping** overflow; pair with
  clipping so it doesn't spill.
- **Scale to fill / stretch** — fills the bounds **ignoring** aspect ratio. Avoid for photos —
  it distorts. Use only for intentionally stretchable assets.
- **Center / tile** — place at native size without scaling, or repeat.

## Guidelines

- **Always display images at their intended aspect ratio** to avoid distortion; choose the content
  mode deliberately. See [[layout]].
- **Provide high-resolution assets** (`@2x`, `@3x`); under-resolution images look blurry on Retina
  and lose detail. Prefer vector (PDF/SVG-backed symbols) where scaling matters.
- **Supply light and dark variants** (and high-contrast where needed) so artwork reads in both
  appearances; use **semantic** tints for template/symbol images, never hardcoded hex. See [[color]].
- Show a **placeholder** (or low-res blur) while remote images load, and a graceful fallback on
  failure — never an empty box that looks broken. See [[loading]].
- Keep purely decorative images from stealing focus; respect **safe areas** and let content breathe.
  See [[layout]].

## Platform notes

- **visionOS:** ensure images read against varied real-world backgrounds and at depth. See [[visionos]].
- **watchOS:** keep imagery simple and high-contrast at small sizes. See [[watchos]].
- **tvOS:** large, high-res artwork; account for overscan-safe margins. See [[tvos]].

## SwiftUI / UIKit

SwiftUI: `Image("name")` / `Image(systemName:)`; `.resizable()`, `.aspectRatio(contentMode: .fit/.fill)`,
`.scaledToFit()`, `.clipped()`, `AsyncImage(url:)` for remote loads.
UIKit/AppKit: `UIImageView` / `NSImageView`; `.contentMode = .scaleAspectFit/.scaleAspectFill`.

## Accessibility

Give meaningful images an **accessibility description** (`.accessibilityLabel`) so VoiceOver can
convey them; mark purely decorative images as hidden (`.accessibilityHidden(true)`). Don't embed
essential text inside a bitmap. See [[accessibility]].

## Do / Don't

- **Do** preserve aspect ratio, ship @2x/@3x, and provide dark variants + alt descriptions.
- **Don't** stretch photos to fill, bake text into images, or leave a blank frame while loading.

See also: [[images]], [[sf-symbols]], [[color]], [[layout]], [[accessibility]], [[loading]]
