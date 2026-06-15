---
title: App Clips
source_url: https://developer.apple.com/design/human-interface-guidelines/app-clips
platforms: [ios, ipados]
value_type: platform-specific
last_verified: 2026-06-14
---

# App Clips

> 🔢 exact-spec / version-dependent. Re-verify on Apple.

## Purpose

An App Clip is a **small, fast slice of an app** that lets people complete one focused task —
ordering coffee, renting a scooter, paying for parking — discovered from a link, **App Clip Code**,
NFC tag, QR code, Maps, Messages, or Safari, **without installing the full app first**.

## Invocation

- Launches from: **App Clip Code** (Apple's combined NFC + visual code), NFC tag, QR code, Safari
  Smart App Banner, Messages link, Maps place card, or a website URL.
- Appears as a **card** from the bottom; the person taps to open the experience instantly.

## Size limit (version-dependent — verify on Apple)

- App Clips must stay under an **uncompressed size budget**: historically **10 MB**, raised to
  **15 MB** (iOS 16) and **50 MB** (iOS 17+) for the thinned binary. Confirm the current ceiling on
  Apple before relying on a number. Keep it as small as possible regardless — fast launch is the point.

## Guidelines

- **Focus on a single task** that completes in moments. Don't reproduce the whole app or add
  unrelated navigation.
- **Minimize friction.** Use **Sign in with Apple** for accounts and **Apple Pay** for payment so
  people never type credentials or card details. Request only the data the task needs. See [[apple-pay]],
  [[privacy]].
- **Ask for permissions in context**, and prefer ephemeral/temporary grants (e.g. one-time location).
  An App Clip can't run in the background and is removed after a period of inactivity.
- **Offer the full app afterward** with the system **App Clip overlay / "Open" banner** — only after
  the task succeeds, never blocking the clip's task. Carry state forward so the full app continues
  where the clip left off.
- Match the host app's look so the transition feels continuous. Provide a configured **App Clip Card**
  (title, subtitle, action, header image).

## API

- **App Clip target** in Xcode (shares code with the full app); `NSUserActivity` for the invocation
  URL; **App Clip overlay** via `SKOverlay.AppClipConfiguration`. `ASWebAuthenticationSession`/
  Sign in with Apple, `PKPaymentAuthorizationController` for Apple Pay.

## Accessibility

The clip must be fully accessible (VoiceOver, Dynamic Type) even though it's small; the App Clip Card
needs clear labels. See [[accessibility]].

## Do / Don't

- ✅ One quick task; Sign in with Apple + Apple Pay; prompt the full app after success.
- ❌ Don't pack a full app, require manual sign-up, or nag to install before the task is done.

See also: [[ios]], [[apple-pay]], [[privacy]], [[onboarding]], [[accessibility]]
