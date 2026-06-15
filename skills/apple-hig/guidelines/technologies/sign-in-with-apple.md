---
title: Sign in with Apple
source_url: https://developer.apple.com/design/human-interface-guidelines/sign-in-with-apple
platforms: [ios, ipados, macos, watchos, tvos, visionos]
value_type: platform-specific
last_verified: 2026-06-14
---

> ⚠️ Re-verify on Apple.

# Sign in with Apple

## Purpose

Sign in with Apple lets people set up an account and sign in with the Apple Account they
already have. It is private by default: people can choose to **hide their email** (Apple
relays mail through a unique, per-app `@privaterelay.appleid.com` address), and the app
receives only the **minimum** data it needs — name and a verified or relayed email at first
sign-in only. See [[privacy]].

## When to offer it

- Offer Sign in with Apple **wherever** you offer any other third-party or social sign-in
  (Google, Facebook, etc.). App Review requires it in that case.
- Place it consistently with your other sign-in options; it can be the primary or an equal
  peer button.

## Button styles (do not restyle)

Use the **system-provided button**; the system draws the Apple logo, label, corner radius,
and sizing correctly. Three appearances:

- **Black** — for light or neutral backgrounds.
- **White** — for dark backgrounds with sufficient contrast.
- **White with outline** — for light/white backgrounds (iOS, macOS, web).

Three labels, set by the system in the user's language: **Sign in with Apple**,
**Sign up with Apple**, **Continue with Apple**. Logo-only variants exist for tight space.

## Guidelines (do's)

- Use the system button (`ASAuthorizationAppleIDButton` in UIKit, `SignInWithAppleButton` in
  SwiftUI) so it always renders the correct, localized, accessible appearance.
- Match the button's **corner radius** to the other buttons in your UI (the API exposes a
  corner-radius value) but otherwise leave it alone.
- Keep adequate clear space around the button; don't crowd or overlap it.
- Respect the user's relayed email — send mail only through the relay address; don't ask them
  to "verify" with a different email.

## SwiftUI / API

- SwiftUI: `SignInWithAppleButton(.signIn) { request in … } onCompletion: { … }` with
  `.signInWithAppleButtonStyle(.black / .white / .whiteOutline)`.
- UIKit / AuthenticationServices: `ASAuthorizationAppleIDButton`,
  `ASAuthorizationAppleIDProvider`, `ASAuthorizationController`.
- Web: render via the official JS button; do not hand-build the markup.

## Accessibility

The system button ships a correct VoiceOver label and meets the hit-target rule
(>=44 pt, 60 pt visionOS). If you build a permitted custom button, supply your own VoiceOver
label and keep contrast >=4.5:1. See [[accessibility]], [[voiceover]].

## Do / Don't

- ✅ Do offer it alongside every other sign-in method; use the system button; honor the relay
  email; localize via the system.
- ❌ Don't recolor, translate, re-letter, distort, or rebuild the button; don't make it
  smaller or less prominent than competing sign-in buttons; don't request more data than you
  need; don't add a separate Apple logo next to it.

See also: [[privacy]], [[buttons]], [[accessibility]], [[voiceover]], [[licensing-and-assets]], [[wallet]]
