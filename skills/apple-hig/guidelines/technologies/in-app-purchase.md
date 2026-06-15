---
title: In-App Purchase
source_url: https://developer.apple.com/design/human-interface-guidelines/in-app-purchase
platforms: [ios, ipados, macos, watchos, tvos, visionos]
value_type: platform-specific
last_verified: 2026-06-14
---

> ⚠️ Re-verify on Apple. Also governed by the App Review Guidelines (e.g. 3.1.1). Verify on Apple as the HIG migrates from the 26 to the 27/Golden Gate generation.

# In-App Purchase

## Purpose

In-App Purchase (IAP) sells digital content, features, subscriptions, and services inside your app via StoreKit. The purchase experience must be clear, honest, and trustworthy — no dark patterns.

## Types

- **Consumable** — used once (coins, hints); not restorable.
- **Non-consumable** — bought once, owned forever (a feature unlock); **must be restorable**.
- **Auto-renewable subscription** — recurring access that renews until cancelled.
- **Non-renewing subscription** — fixed-period access the user re-buys manually.

## Guidelines

- **Show clear, accurate pricing** using StoreKit's localized price and currency. Never hardcode prices; localize.
- **For subscriptions, state the terms plainly** before purchase: what's included, the price, the billing period, when renewal happens, and how to cancel. Make free-trial → paid transitions unambiguous.
- **Provide a Restore Purchases mechanism** for non-consumables and subscriptions (required by App Review Guideline 3.1.1). Don't make people re-buy what they own.
- **No dark patterns.** Don't disguise the price, pre-check costly options, bury the close button, or trick people into recurring charges. Don't nag relentlessly.
- **Sell in context.** Present the offer where the value is obvious; explain the benefit before the paywall.
- **Support offer codes / promotional offers** where relevant, redeemed through the system flow.
- **Handle every outcome** — success, cancel, pending (Ask to Buy / SCA), failure, and already-purchased — with clear feedback. See [[feedback]].
- **Don't direct users to outside purchase methods** except where Apple's rules explicitly allow.

## API

- **StoreKit 2** (Swift): `Product`, `Product.purchase()`, `Transaction`, `Transaction.currentEntitlements`, `Transaction.updates`, `AppStore.sync()` (restore), `Product.SubscriptionInfo`.
- **SwiftUI StoreKit views**: `StoreView`, `SubscriptionStoreView`, `ProductView` render compliant, localized merchandising UI.
- Configure products in App Store Connect; test with StoreKit configuration files / Sandbox.

## Accessibility

- Price, terms, and purchase buttons must be VoiceOver-readable and support Dynamic Type. Buttons ≥44 pt (60 pt visionOS). Don't convey "selected plan" by color alone. See [[accessibility]].

## Do / Don't

- ✅ Show localized price and full subscription terms before purchase.
- ✅ Offer Restore Purchases; handle pending/cancelled states.
- ❌ Don't use pre-checked add-ons, hidden recurring charges, or hard-to-find cancel info.
- ❌ Don't hardcode prices or omit the restore path.

See also: [[feedback]], [[buttons]], [[onboarding]], [[accessibility]], [[privacy]]
