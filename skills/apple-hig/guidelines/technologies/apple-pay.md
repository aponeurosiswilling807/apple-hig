---
title: Apple Pay
source_url: https://developer.apple.com/design/human-interface-guidelines/apple-pay
platforms: [ios, ipados, macos, watchos, visionos]
value_type: platform-specific
last_verified: 2026-06-14
---

# Apple Pay

> ⚠️ Re-verify on Apple.

## Purpose

Apple Pay lets people pay for goods and services securely and privately using cards in **Wallet**,
with **Face ID / Touch ID / passcode** authentication. It removes manual card entry and keeps card
numbers private from the merchant.

## Buttons: types and styles

- **Use the system-provided button** via the standard APIs. **Never** draw, recolor, or mimic your
  own Apple Pay button. See [[licensing-and-assets]].
- **Type** matches the flow's terminology: e.g. **Buy, Pay, Donate, Subscribe, Reload, Add Money,
  Continue, Order, Book, Check Out, Set Up** (an **Apple Pay Set Up** button when the user has no
  card yet). Choose the one that fits the action.
- **Style** controls appearance: **black**, **white**, or **white with outline**. Pick the style with
  enough contrast against the background.

## Guidelines

- **Make Apple Pay the prominent, preferred option** when available; place the button above other
  payment methods.
- **Present the payment sheet** for confirmation; the system handles authentication. Don't ask the
  person to re-enter information the sheet already collects.
- **Request only the data the transaction needs** (shipping, contact, billing). Don't over-collect.
  See [[privacy]].
- **Respect sizing and clear space** specified for the button; keep it tappable (≥44 pt) and don't
  crowd it.
- Support **Wallet** passes (boarding passes, tickets, loyalty, keys) where relevant; keep them
  glanceable and up to date.

## API

- **PassKit** — `PKPaymentButton` (UIKit/AppKit), SwiftUI **`PayWithApplePayButton`**;
  `PKPaymentAuthorizationController` / `PKPaymentRequest` for the sheet.
- **Apple Pay on the Web** — the `apple-pay-button` web component / `ApplePaySession`; style via the
  documented CSS custom properties, not custom art.

## Platform notes

- **watchOS** — double-click the side button; design compact confirmation. **visionOS** — authenticate
  with Optic ID. **macOS** — authenticate on a paired iPhone/Watch or Touch ID.

## Accessibility

The button carries a built-in VoiceOver label; don't override it with something unclear. Ensure the
chosen style meets contrast. See [[accessibility]].

## Do / Don't

- ✅ Use the system button + payment sheet; pick a fitting type/style; request minimal data.
- ❌ Don't restyle/redraw the button, bury it below other methods, or duplicate data entry.

See also: [[ios]], [[macos]], [[privacy]], [[buttons]], [[sheets]], [[licensing-and-assets]]
