---
title: Managing Accounts
source_url: https://developer.apple.com/design/human-interface-guidelines/managing-accounts
platforms: [ios, ipados, macos, watchos, tvos, visionos]
value_type: universal
last_verified: 2026-06-14
---

# Managing Accounts

> ⚠️ Universal. Re-verify on Apple (account-deletion and Sign in with Apple requirements are
> App Store policy and change over time).

Accounts are tied directly to a person's **privacy and control** over their data. Make signing in,
signing out, and deleting an account straightforward and transparent.

## Don't force sign-in

- **Let people use the app first.** Delay or avoid requiring an account; only ask when an account
  is genuinely needed (sync, purchases, personalization) and explain the benefit first. See
  [[onboarding]], [[launching]].
- Offer a clear path to value without an account wherever possible.

## Make sign-in easy

- **Offer Sign in with Apple** alongside other options. If you offer third-party or social sign-in
  with account *creation*, App Store rules require **Sign in with Apple** as an equivalent option.
- **Use Password AutoFill and passkeys.** Prefer **passkeys** (Face ID / Touch ID, no password to
  remember or leak); support AutoFill and one-time-code AutoFill from Messages for legacy flows.
- Keep sign-up minimal: ask for the least information needed; verify lazily where you can.

## Sign out & delete

- **Make sign-out obvious** and reversible; don't bury it.
- **Provide in-app account deletion.** Apps that support account creation must let people **initiate
  deletion of their account from within the app** — not just disable it. Delete the data, don't
  merely deactivate; confirm clearly and explain what's removed.
- For Sign in with Apple, **revoke tokens** server-side on deletion (Sign in with Apple REST API).

## Confirm changes transparently

- Account, email, and password changes should be clear and confirmable; tell people what changed
  and how to undo or recover. Surface security events honestly. See [[privacy]].

## API

- **AuthenticationServices**: `ASAuthorizationAppleIDProvider` / `SignInWithAppleButton`,
  passkey/`ASAuthorizationPlatformPublicKeyCredentialProvider`, Password AutoFill
  (`textContentType` = `.username` / `.password` / `.oneTimeCode`). Account deletion uses your
  backend + Sign in with Apple REST `revoke`.

## Accessibility

Label icon-only sign-in/out controls; ensure error and confirmation messages are VoiceOver-read;
don't gate auth behind color-only states; support Dynamic Type in forms. See [[accessibility]].

## Do / Don't

- ✅ Sign in with Apple, passkeys + AutoFill, deferred sign-in, in-app deletion, clear sign-out.
- ❌ Forced account at launch, password-only flows, deactivate-not-delete, hidden sign-out, opaque
  account changes.

See also: [[onboarding]], [[launching]], [[privacy]], [[collaboration-and-sharing]], [[settings]].
