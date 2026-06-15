---
title: HomeKit
source_url: https://developer.apple.com/design/human-interface-guidelines/homekit
platforms: [ios, ipados, macos, watchos, tvos]
value_type: platform-specific
last_verified: 2026-06-14
---

> ⚠️ Re-verify on Apple. Liquid Glass is the current chrome design language ("26" generation, refined into "27"/Golden Gate at WWDC 2026); verify on Apple as the HIG migrates from the 26 to the 27/Golden Gate generation.

# HomeKit

## Purpose

HomeKit lets people securely control connected accessories — lights, locks, thermostats, cameras, sensors — using Siri or the Home app on iPhone, iPad, Apple Watch, Mac, and Apple TV. Apps integrate to provide a custom or accessory-specific experience. Matter accessories are supported (iOS 16.1+).

## The home model

HomeKit organizes accessories into a hierarchy people already understand:

- **Home** — the top-level container (a person can have several).
- **Room** — a named space ("Kitchen", "Bedroom") that groups accessories.
- **Zone** — a group of rooms ("Upstairs", "Outside").
- **Accessory** — a physical device; may expose multiple **services** (a fan + light).
- **Scene** — one tap sets many accessories to chosen states ("Good Morning").
- **Action / automation** — triggered by time, location, sensor, or accessory state.

## Guidelines

- **Don't duplicate the Home app unnecessarily.** Add value the Home app doesn't — accessory-specific setup, diagnostics, richer controls — rather than re-skinning home control.
- **Show reliable, current status.** Reflect real accessory state; surface unreachable/updating/no-response states honestly instead of guessing. Never imply a lock is locked when state is unknown.
- **Mirror the user's room/zone organization** so names and grouping match the Home app.
- **Make destructive or safety-relevant actions deliberate** (unlocking a door, disarming, opening a garage). Confirm and require authentication where appropriate.
- **Respect setup flows.** Use the system accessory-setup UI; don't reinvent pairing.
- **Use semantic colors and SF Symbols** for accessory categories; support light/dark. See [[color]], [[sf-symbols]].

## API

- `HomeKit` framework: `HMHomeManager`, `HMHome`, `HMRoom`, `HMZone`, `HMAccessory`, `HMService`, `HMCharacteristic`, `HMActionSet` (scenes), `HMTrigger`.
- `HomeKitUI` / `HMAccessorySetupManager` for system-provided accessory setup.
- **Works with Apple Home** badge has its own usage rules — link to Apple, don't fabricate marks. See [[licensing-and-assets]].

## Accessibility

- Give every accessory control a clear VoiceOver label including its name and state ("Front Door, locked"). Never convey state by color alone. See [[accessibility]].
- Keep controls ≥44 pt (60 pt visionOS). Support Dynamic Type.

## Privacy & security

- Home data is sensitive. Request Home access in context with a clear purpose string; never share accessory data unexpectedly. See [[privacy]].
- Camera/sensor feeds are especially sensitive — show clear in-use indicators.

## Do / Don't

- ✅ Reflect true accessory state, including failure states.
- ✅ Match the user's home/room/zone naming and grouping.
- ❌ Don't show stale or optimistic status for locks, alarms, or doors.
- ❌ Don't clone the Home app with no added value.

See also: [[privacy]], [[accessibility]], [[color]], [[sf-symbols]], [[ios]], [[watchos]], [[licensing-and-assets]]
