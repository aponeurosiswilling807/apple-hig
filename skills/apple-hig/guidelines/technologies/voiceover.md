---
title: VoiceOver
source_url: https://developer.apple.com/design/human-interface-guidelines/voiceover
platforms: [ios, ipados, macos, watchos, tvos, visionos]
value_type: universal
last_verified: 2026-06-14
---

> ⚠️ Universal. Re-verify on Apple.

# VoiceOver

## Purpose

VoiceOver is Apple's built-in **screen reader**. It speaks (and, with a braille display,
outputs) the interface so people who are blind or have low vision can navigate by gesture,
keyboard, or braille. Every interactive element must be reachable and self-describing — VoiceOver
is the single highest-leverage accessibility feature to support. See [[accessibility]].

## The accessibility attributes

Each element should expose:

- **Label** — a short noun phrase naming the element ("Add", "Profile photo"). Do **not** include
  the type ("…button") — the trait already says it. Localize labels.
- **Value** — the current state/content where it isn't the label (a slider's "70%", a toggle's
  "On", a field's text).
- **Traits** — what it is and how it behaves (button, link, header, selected, adjustable,
  disabled). Drive correct gestures and announcements.
- **Hint** — optional, brief, describes the *result* of acting ("Double-tap to play"); never
  essential information.

## Guidelines (do's)

- **Label every control, especially icon-only ones.** An unlabeled icon button is announced as
  nothing useful. This is non-negotiable.
- **Order matters.** VoiceOver reads in a logical reading order (leading-to-trailing,
  top-to-bottom; respect RTL). Group related elements; fix illogical order with accessibility
  ordering APIs. See [[right-to-left]].
- **Use the rotor.** Expose headings, links, form controls, and **custom rotor categories** so
  people can jump between like elements quickly.
- **Add custom actions** for swipe/contextual actions (e.g. delete, archive) so they're reachable
  without the on-screen gesture.
- **Announce important changes** (`UIAccessibility.post(.announcement / .screenChanged / .layoutChanged)`)
  so dynamic updates aren't missed.
- **Mark headers** with the header trait so rotor heading navigation works.

## SwiftUI / UIKit API

- SwiftUI: `.accessibilityLabel`, `.accessibilityValue`, `.accessibilityHint`,
  `.accessibilityAddTraits(_:)`, `.accessibilityElement(children:)`,
  `.accessibilityAction`, `.accessibilityRotor`, `.accessibilitySortPriority`,
  `.accessibilityHidden`.
- UIKit: `isAccessibilityElement`, `accessibilityLabel/Value/Hint/Traits`,
  `accessibilityCustomActions`, `accessibilityElements`, `UIAccessibilityCustomRotor`,
  `UIAccessibility.post(notification:argument:)`.

## Guidelines beyond labels

- Don't convey meaning by color, shape, or position alone — pair with text/labels.
- Keep hit targets >=44 pt (60 pt visionOS) so the rotor/focus lands cleanly.
- Test by turning VoiceOver on and navigating the whole flow with the screen curtain.

## Do / Don't

- ✅ Do label icon-only controls, expose traits and values, provide custom actions and rotors,
  and announce dynamic changes.
- ❌ Don't repeat the type in the label ("Add button button"), leave controls unlabeled, rely on
  color alone, or put essential info only in a hint.

See also: [[accessibility]], [[siri]], [[right-to-left]], [[typography]], [[color]], [[motion]]
