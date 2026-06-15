---
title: Wallet
source_url: https://developer.apple.com/design/human-interface-guidelines/wallet
platforms: [ios, watchos]
value_type: platform-specific
last_verified: 2026-06-14
---

> ⚠️ Re-verify on Apple.

# Wallet

## Purpose

Wallet stores **passes** — boarding passes, event tickets, transit and access keys, store and
loyalty cards, coupons, and IDs — in one place on iPhone and Apple Watch. A pass is a signed
bundle (`.pkpass`) created and updated with **PassKit**. Passes can surface on the **Lock
Screen** at the right time and place, and update live (gate changes, balances). Wallet also
hosts payment cards (Apple Pay), which follow Apple Pay rules.

## Pass types (style picks the layout)

| Style | `passStyle` key | Use for |
|---|---|---|
| Boarding pass | `boardingPass` | Air/rail/transit travel with a time + place window |
| Event ticket | `eventTicket` | Admission to a dated event |
| Coupon | `coupon` | Promotions and discounts |
| Store card | `storeCard` | Loyalty / membership with a balance |
| Generic | `generic` | Membership cards, claim tickets, anything else |

The chosen style determines the default layout and the time/location **relevance** window.

## Anatomy

- **Logo + logo text**, **header fields**, **primary fields**, **secondary fields**,
  **auxiliary fields**, and the **back fields** (tap the "i"/flip for details and pull-to-refresh).
- **Barcode** — QR, Aztec, or PDF417; show the account/membership number as text below as a
  fallback. NFC enables contactless redemption for eligible passes.

## Guidelines (do's)

- **Pick the right style** so relevance behaves correctly — boarding passes have a tighter
  time/place window than, say, a store card.
- **Use relevance** (location and/or time) so the pass surfaces on the Lock Screen exactly when
  it's needed; don't over-trigger.
- **Keep passes current** — push **updates** for changes (gate, seat, balance); never let a
  pass look stale. iCloud syncs passes across the user's devices.
- **Design for scanning** — high-contrast barcode, adequate quiet zone; the system locks to
  portrait and boosts backlight during scan. Test on real optical and laser scanners.
- **Brand clearly but legibly** — choose background/foreground/label colors with sufficient
  contrast; use semantic legibility, not just brand color. See [[color]].
- Offer the standard **Add to Apple Wallet** badge (system API in-app; official badge art for
  web/email/print). Don't redraw the badge. See [[licensing-and-assets]].

## Platform notes

- **iPhone** is the primary surface; eligible passes also live on **Apple Watch**. Keep the most
  important fields readable at watch size. See [[watchos]].

## API

`PassKit`: `PKPass`, `PKPassLibrary`, `PKAddPassesViewController`, `PKAddPassButton`; pass
bundle = `pass.json` + assets, signed with an Apple-issued pass certificate. Live updates via
the PassKit web service + push (`PKPushType.complication`/APNs).

## Accessibility

Wallet renders pass fields with its own VoiceOver support, but keep your field **labels and
values meaningful**, ensure color contrast >=4.5:1 against the pass background, and don't encode
status in color alone. See [[accessibility]], [[voiceover]].

## Do / Don't

- ✅ Do choose the correct pass style, set relevance, push timely updates, and design barcodes
  for reliable scanning.
- ❌ Don't let passes go stale, cram unreadable fields, rely on brand color over contrast,
  redraw the Add to Wallet badge, or skip a text fallback under the barcode.

See also: [[tap-to-pay-on-iphone]], [[sign-in-with-apple]], [[color]], [[accessibility]], [[voiceover]], [[licensing-and-assets]], [[watchos]]
