---
title: Rating Indicators
source_url: https://developer.apple.com/design/human-interface-guidelines/rating-indicators
platforms: [macos, ios, ipados]
value_type: platform-specific
last_verified: 2026-06-14
---

# Rating Indicators

> ⚠️ Re-verify on Apple.

## Purpose

A rating indicator shows a ranking level as a series of horizontally arranged symbols — **stars by
default**. Use it to **display** a rating (e.g. an item's average) or to let people **set** one by
clicking/tapping a symbol. It conveys a small, discrete scale at a glance.

## Anatomy / Behavior

- A fixed row of symbols (commonly 5 stars); filled symbols represent the value.
- **No partial symbols** — the indicator rounds the value to whole symbols only. If you need to show
  fractional averages precisely, display the number alongside (e.g. "4.3") rather than relying on
  the symbols.
- Symbols are **evenly spaced** and keep a constant gap; they do not stretch or shrink to fill the
  control's width.
- An editable rating responds to click/tap and (on macOS) drag across the symbols to set the value.

## Guidelines

- Keep the **star** unless you have a strong reason to change it — it is the near-universal ranking
  symbol; custom symbols may not read as a rating. If you replace it, make the meaning unmistakable.
- Use a **small, consistent maximum** (5 is conventional) so the scale is instantly legible.
- For *collecting* a rating, make symbols a comfortable hit target (≥44 pt; 60 pt visionOS) and give
  immediate feedback on selection. See [[accessibility]].
- Distinguish a **rating indicator** (a numeric score) from a **reviews** feature (written feedback)
  and from **progress**; don't conflate them. See [[progress-indicators]].
- Don't convey the value by color/fill alone — expose the numeric rating to assistive tech.

## Platform notes

- Documented as a control primarily for **macOS** (and applicable on **iOS / iPadOS** via custom
  controls). On macOS the system control is `NSLevelIndicator` with the **rating** style.
- For App Store ratings prompts, use the system review request rather than a custom indicator;
  follow the App Store ratings-and-reviews guidance. See [[ios]], [[macos]].

## API

- **AppKit:** `NSLevelIndicator` with `style = .rating` (`NSLevelIndicator.Style.rating`); configure
  `minValue`/`maxValue` and `numberOfTickMarks`. Editable when the indicator is enabled.
- **SwiftUI:** no first-party star-rating control as of this writing — build one from `Image`/
  `Label` (SF Symbols `star` / `star.fill`) in an `HStack`, exposing an accessible adjustable value.
  Verify on Apple for any newer native control. See [[sf-symbols]], [[licensing-and-assets]].

## Accessibility

Expose the control as an **adjustable** element reporting "N of M" (e.g. "3 of 5 stars"); support
VoiceOver increment/decrement and keyboard for editable ratings; never communicate the score by
color or fill alone; support Dynamic Type for any adjacent numeric label (not on macOS). See
[[accessibility]].

## Do / Don't

- **Do** keep stars, a small max, and show the number for fractional averages.
- **Do** make tappable symbols ≥44 pt and announce "N of M" to VoiceOver.
- **Don't** display partial symbols or stretch symbols to fill width.
- **Don't** swap in an unclear custom symbol or rely on fill/color alone.

See also: [[progress-indicators]], [[gauges]], [[buttons]], [[sf-symbols]], [[macos]], [[ios]], [[accessibility]]
