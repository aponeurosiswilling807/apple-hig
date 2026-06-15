---
title: Onboarding & Launching
source_url: https://developer.apple.com/design/human-interface-guidelines/onboarding
source_url_launching: https://developer.apple.com/design/human-interface-guidelines/patterns/launching
platforms: [ios, ipados, macos, watchos, tvos, visionos]
value_type: universal
last_verified: 2026-06-14
---

# Onboarding & Launching

> ⚠️ Universal. Re-verify on Apple.

> This is a combined doc citing two canonical Apple HIG pages: the **Onboarding** page and the
> separate **[Launching](https://developer.apple.com/design/human-interface-guidelines/patterns/launching)**
> page. Launch-screen and "launch instantly" content derives from the Launching page.

## Principles

- **Get people to value fast.** Don't gate the app behind long tutorials, account creation, or
  permission walls. Let users do something useful immediately; teach in context.
- **Launch instantly** into a useful state. Use a **launch screen** that matches the first real
  screen (not a splash/ad, no logo animation that delays). Restore prior state.
- **Defer sign-in and permissions** until needed; explain the benefit first, then show the system
  prompt. Offer **Sign in with Apple**. See [[privacy]].

## If you must onboard

- Keep it **short** (a few screens), skippable, and benefit-focused — show what the app does for
  them, not a feature tour. Use a page control for steps. See [[page-controls]].
- Teach **gestures/affordances in context** with subtle coach marks, not upfront walls.
- Provide a **clear first action** and a sensible empty state with a path to add the first item.
  See [[feedback]].

## Accounts & data

- Make account creation optional where possible; explain why it's needed when it is. See [[settings]].
- Ask for permissions **just-in-time** with a clear purpose string. See [[privacy]].

## Don't

- ❌ Long unskippable tutorials, ❌ all permissions at launch, ❌ forcing sign-up before any value,
  ❌ splash screens that delay launch.

See also: [[loading]], [[privacy]], [[feedback]], [[settings]], [[page-controls]].
