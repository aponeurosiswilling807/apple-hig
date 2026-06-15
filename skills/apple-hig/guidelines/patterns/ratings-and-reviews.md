---
title: Ratings & Reviews
source_url: https://developer.apple.com/design/human-interface-guidelines/ratings-and-reviews
platforms: [ios, ipados, macos, tvos]
value_type: universal
last_verified: 2026-06-14
---

# Ratings & Reviews

> 🔢 exact-spec / version-dependent. Re-verify on Apple.

Ratings and reviews improve your App Store presence — but only if you ask **rarely**, at a **good
moment**, and through the **system prompt** so you never interrupt or pressure people.

## Purpose

Invite satisfied users to rate or review **without** derailing what they're doing or manipulating
the outcome.

## Guidelines

- **Use the system prompt only.** Request via `SKStoreReviewController` / SwiftUI
  `requestReview`. It shows the standardized rating + review sheet **in-app**, so people never
  leave to the App Store.
- **Ask at a positive moment** — after the user finishes a task, wins a level, or sees a clear
  benefit. Never during onboarding, setup, or a frustrating/critical flow, and never amid an error.
- **Ask sparingly; let the system throttle.** The system limits prompts to **no more than three
  times per 365-day period** per user (and not at all if they've already rated that version), and
  may suppress the prompt entirely — design around that, don't fight it. *(Exact cap is
  Apple-defined and version-dependent — verify on Apple.)*
- **Don't tie the request to a button or custom control.** Because the prompt may not appear, a
  user-triggered "Rate us" button can do nothing and confuse people. (A deep link to your App
  Store **write-a-review** page is acceptable for an explicit "Write a Review" action.)
- **Never gate, bribe, or pre-screen.** Don't block features behind a rating, offer rewards for
  reviews, or intercept low ratings to deflect them — all violate the guidelines.
- **Don't customize the wording.** The prompt is system-owned; you can't add text or change the
  star UI. See [[feedback]], [[rating-indicators]].

## Platform notes

- **iOS / iPadOS / macOS / tvOS** — all support the in-app prompt via StoreKit. Frequency limits
  apply per platform/account. On macOS the same review sheet appears for Mac App Store apps.
- Responding to reviews is done in **App Store Connect**, not in-app.

## API

StoreKit: **`requestReview(in:)`** (SwiftUI/UIKit, scene-based), `SKStoreReviewController`
(`requestReview()`, deprecated forms); write-a-review deep link
`https://apps.apple.com/app/idXXXX?action=write-review`.

## Accessibility

The system sheet is already accessible; don't wrap it in custom, hard-to-dismiss UI. See
[[accessibility]].

## Do / Don't

- Do trigger after a delightful moment, sparingly, via the system prompt.
- Don't beg repeatedly, reward reviews, gate features, or use a "Rate us" button expecting the
  prompt to appear.

See also: [[rating-indicators]], [[feedback]], [[onboarding]], [[privacy]], [[accessibility]]
