---
title: Branding
source_url: https://developer.apple.com/design/human-interface-guidelines/branding
platforms: [ios, ipados, macos, watchos, tvos, visionos]
value_type: universal
last_verified: 2026-06-14
---

# Branding

> ⚠️ Re-verify on Apple.

## Purpose

Express a unique brand identity in ways that make the app instantly recognizable while still
feeling at home on the platform. Brand emerges from refined, intentional decisions about
typography, color, imagery, and interaction — not from overriding platform conventions or
plastering a logo across the UI.

## Guidelines

- **Defer to content.** Branding should never crowd out the content and functionality people
  came for. Real estate spent on a static brand asset is real estate not spent on what matters.
- **Be refined and unobtrusive.** Incorporate brand cues so they support, not distract from, the
  experience. Subtlety reads as quality.
- **Don't show your logo persistently.** Resist displaying a logo throughout the UI just for
  branding — on-device, people already know which app they're in. Show it only where it provides
  genuine context (e.g. a splash/launch moment, an About screen, a wordmark in a store listing).
- **Use brand color deliberately.** Reserve the brand's primary/accent color for interactive
  elements (buttons, links, switches, selection) so people learn that "this color = tappable."
  Don't flood large neutral surfaces with a saturated brand color.
- **Mix custom + system fonts.** A custom font can work for headlines/subheads; prefer the system
  font for body and captions, which is tuned for legibility at small sizes and supports Dynamic
  Type. See [[typography]].
- **Respect platform idioms.** Adopt standard navigation, controls, materials, and Liquid Glass
  chrome. Familiar structure makes the brand feel trustworthy, not foreign. See [[liquid-glass]].

## Platform notes

- **Game vs app:** games have more latitude for fully custom, immersive branded UI; standard apps
  should lean on system components.
- **App Store presence** (icon, name, screenshots, preview) is a primary, durable branding
  surface — invest there rather than in persistent in-app logos. See [[icons]] / App Icons.
- **WWDC 2026 "Communicate your brand identity on iOS"** reinforces expressing brand through the
  experience itself; verify on Apple as the HIG migrates from the 26 to the 27/Golden Gate
  generation.

## Accessibility

- Brand colors must still meet contrast: **4.5:1** body (≤17 pt), **3:1** large (≥18 pt)/bold;
  never rely on color alone to convey state or interactivity. See [[accessibility]].
- Custom brand fonts must support **Dynamic Type** (not on macOS) and remain legible at AX sizes.
- Don't let decorative brand imagery defeat **Reduce Transparency** / **Increase Contrast**.

## Licensing

- Never bundle or redistribute **SF fonts**, **SF Symbols**, or Apple templates — link to Apple
  only. SF Symbols may **not** appear in app icons, logos, or trademarks. See
  [[licensing-and-assets]].

## Do / Don't

- ✅ Express brand through font, color, imagery, motion, and a polished, on-platform experience.
- ✅ Limit accent/brand color to interactive elements.
- ❌ Display a logo persistently across screens just to remind people of the brand.
- ❌ Override platform navigation/controls purely to look "branded."
- ❌ Sacrifice legibility, contrast, or content space for a brand asset.

See also: [[typography]], [[color]], [[icons]], [[liquid-glass]], [[accessibility]], [[licensing-and-assets]], [[principles]]
