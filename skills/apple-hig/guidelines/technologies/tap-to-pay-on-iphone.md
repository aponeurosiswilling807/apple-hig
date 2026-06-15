---
title: Tap to Pay on iPhone
source_url: https://developer.apple.com/design/human-interface-guidelines/tap-to-pay-on-iphone
platforms: [ios]
value_type: platform-specific
last_verified: 2026-06-14
---

> ⚠️ Re-verify on Apple.

# Tap to Pay on iPhone

## Purpose

Tap to Pay on iPhone lets a **merchant accept contactless payments** directly on a supported
iPhone — no external reader or extra hardware. Customers pay by tapping a contactless card,
Apple Pay, Apple Watch, or another NFC wallet against the merchant's iPhone. Apps can also
issue refunds, accept loyalty cards, and validate cards. The payment sheet and tap experience
are **system-provided**; you build the surrounding merchant flow.

## Guidelines (do's)

- **Know the final amount before starting.** Confirm the exact total the customer owes before
  the merchant initiates the Tap to Pay experience.
- **Educate the merchant first.** Show brief instructional content during initial setup —
  explain how to accept payment from cards, digital wallets, Apple Watch, and other wearables.
- **Make terms easy to accept.** Let the merchant accept Tap to Pay on iPhone terms and
  conditions before a customer interaction begins, not mid-transaction.
- **Keep the customer-facing moment simple** — a clear prompt to hold the card/device near the
  top of the iPhone, clear success/failure feedback.
- **Don't place an Apple Pay button near a Tap to Pay button.** They mean different things
  (paying vs. accepting payment); adjacency confuses merchants and customers.

## Platform notes

- **iPhone only** (eligible models). Availability is **region- and bank-dependent**, and
  merchants must be onboarded through a supported payment service provider — verify eligibility
  with the provider and Apple. See [[ios]].
- Uses the device's built-in NFC; no accessory pairing.

## API

`ProximityReader` framework: `PaymentCardReaderSession`, `PaymentCardReader`; payment
processing runs through your supported PSP's SDK. The tap UI and card-read are presented by
the system.

## Accessibility

Surrounding merchant UI must meet the universal rules: hit targets >=44 pt, contrast >=4.5:1,
VoiceOver labels on all controls, Dynamic Type, and never status-by-color-alone. The system
tap sheet handles its own accessibility. See [[accessibility]], [[voiceover]].

## Do / Don't

- ✅ Do confirm the amount up front, educate merchants during setup, and surface terms early.
- ❌ Don't show Apple Pay and Tap to Pay buttons next to each other, start a tap before the
  total is known, or assume availability without checking merchant/region eligibility.

See also: [[wallet]], [[ios]], [[accessibility]], [[voiceover]], [[privacy]], [[sign-in-with-apple]]
