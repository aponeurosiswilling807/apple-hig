---
title: ID Verifier
source_url: https://developer.apple.com/design/human-interface-guidelines/id-verifier
platforms: [ios]
value_type: platform-specific
last_verified: 2026-06-14
---

> ⚠️ Re-verify on Apple. iPhone-only ("Tap to Present ID on iPhone"); availability is region- and business-eligibility-gated. Verify on Apple as the HIG migrates from the 26 to the 27/Golden Gate generation.

# ID Verifier

## Purpose

ID Verifier lets an eligible business read **mobile IDs in Wallet** in person using iPhone alone — **no external hardware**. A person presents (taps) their ID; the business app reads ISO 18013-5–compliant mobile ID data. Use it for age checks, identity confirmation, and check-in.

## Variants

- **Display Only** — the app receives data (Name, Age, ID Photo, Age-Over-N) and presents a system UI for **visual confirmation** by a human; no data is retained by the app.
- **Data Transfer** — the app receives requested fields programmatically for use cases that need to process or store data (additional entitlement and approval required).

## Guidelines

- **Request the minimum.** Ask only for the fields the task truly needs. For "are you over 21?", request **Age-Over-N**, not full date of birth or name.
- **Get clear consent.** The presenter must understand what's being requested before they share. Use plain language describing exactly which fields and why.
- **Be transparent about the business.** Identify your organization; ID Verifier is gated to eligible, approved businesses.
- **Don't retain more than necessary.** Prefer Display Only when visual confirmation suffices; if you must store data (Data Transfer), store the least, for the shortest time, and secure it.
- **Make the scan affordance obvious.** Guide the cashier/agent and the presenter through the tap clearly; handle failures with a graceful retry.
- **Provide a non-discriminatory fallback** for people without a mobile ID.

## API

- **ProximityReader** framework; entitlement `com.apple.developer.proximity-reader.identity.read` (Display Only) and the Data Transfer variant entitlement.
- Requires Apple approval/eligibility; iOS 17+.

## Accessibility

- Labels and instructions must be VoiceOver-readable; don't rely on color/animation alone to signal success/failure. Keep tap targets ≥44 pt. See [[accessibility]].

## Privacy

- Identity data is highly sensitive — minimize, get explicit consent, never share or log beyond the stated purpose. See [[privacy]].

## Do / Don't

- ✅ Request the narrowest field set (Age-Over-N for age checks).
- ✅ Show explicit, plain-language consent before reading.
- ❌ Don't collect full identity data when a yes/no age answer suffices.
- ❌ Don't retain ID data without a clear, disclosed need.

See also: [[privacy]], [[wallet]], [[in-app-purchase]], [[accessibility]], [[ios]]
