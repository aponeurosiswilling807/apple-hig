---
title: Offering Help
source_url: https://developer.apple.com/design/human-interface-guidelines/offering-help
platforms: [ios, ipados, macos, visionos]
value_type: universal
last_verified: 2026-06-14
---

# Offering Help

> ⚠️ Universal. Re-verify on Apple.

The best help is a clear, self-explanatory interface. When people still need guidance, offer it
**in context, discoverably, and without getting in the way**.

## Principles

- **Design so help is rarely needed.** Clear labels, familiar patterns, sensible defaults, and good
  empty states prevent most questions. See [[onboarding]], [[feedback]].
- **Make help contextual.** Surface guidance near the feature it explains, at the moment it's
  relevant — not as a wall of docs up front.
- **Be discoverable, not intrusive.** Don't block tasks with tutorials or repeated popovers; let
  people dismiss help and find it again when they want it.

## Patterns

- **Tips (TipKit).** Lightweight, well-timed callouts that highlight a feature people may have
  missed. Show a tip once, respect frequency rules, and let people dismiss it; never nag.
- **Contextual help.** Inline hints, help buttons (the **?** help button on macOS), tooltips/help
  tags on hover, and placeholder/secondary text that explains a field. See [[text-fields]].
- **Help menu (macOS).** Provide a **Help** menu with searchable help and links to documentation;
  follow the standard menu structure. See [[macos]], [[menus]].
- **Onboarding** for genuinely new concepts — short, skippable, benefit-focused. See [[onboarding]].
- **In-depth documentation** for complex tasks, linked from help — not forced inline.

## Guidelines

- Time tips to the user's progress; don't show everything at once.
- Use plain, action-oriented language. See [[writing]].
- Make every help affordance dismissible and re-findable.

## API

- **TipKit**: `Tip` protocol with `title`/`message`/`image`, `Rules` and `Events` for eligibility
  and frequency; present via `TipView`, `.popoverTip`, or `TipUIPopoverViewController`.
- macOS: `NSHelpManager`, help books, and the standard **Help** menu; help buttons
  (`NSButton` help style). Tooltips via `help`/`toolTip`.

## Accessibility

Tips, help buttons, and tooltips must be VoiceOver-reachable with descriptive labels; don't convey
help only through hover or color; honor Reduce Motion for tip animations; support Dynamic Type. See
[[accessibility]].

## Do / Don't

- ✅ Contextual, dismissible, well-timed tips; macOS Help menu; plain language.
- ❌ Upfront tutorial walls, repeated popovers, hover-only help, help that can't be reopened.

See also: [[onboarding]], [[feedback]], [[writing]], [[menus]], [[text-fields]], [[macos]].
