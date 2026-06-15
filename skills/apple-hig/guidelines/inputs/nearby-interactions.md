---
title: Nearby Interactions
source_url: https://developer.apple.com/design/human-interface-guidelines/nearby-interactions
platforms: [ios, watchos]
value_type: platform-specific
last_verified: 2026-06-14
---
> ⚠️ Re-verify on Apple.

# Nearby Interactions

## Purpose
Nearby interactions let an app sense the **relative position (distance and direction)** of other devices and accessories using **Ultra Wideband (UWB)** hardware (Apple's U1 / second-generation chip, on iPhone 11 and later, supported Apple Watch, and third-party accessories). They power on-device experiences that integrate the presence of people and objects nearby — directional finding, proximity-triggered content, and precise hand-offs.

## Design principles
- **Consider distance and ability** — UWB gives a directional "point toward" experience when devices are close and roughly facing each other; design for the practical range and orientation, and degrade gracefully as devices move apart.
- **Provide continuous feedback** — show live distance/direction (an arrow, "getting warmer" cues, haptics) so people understand they're moving the right way.
- **Embrace the physical action** — encourage natural movement (raising and pointing the device) and reward it with responsive onscreen and haptic feedback.

## Guidelines
- Make the **purpose obvious** before starting a session, and explain why proximity is needed.
- Combine UWB with **haptics and sound** for eyes-free guidance.
- Keep sessions **short and goal-oriented**; stop ranging when the task is done to save power.

## Permission & privacy
- Nearby Interaction requires **user permission**; the system prompts on first use. Provide a clear **purpose string** (`NSNearbyInteractionUsageDescription`) explaining the benefit.
- Position data is sensitive — use it only for the stated feature, keep it on-device where possible, and never use it for tracking beyond the user-visible purpose.

## Fallback when unsupported
- Many devices lack a UWB chip — **always design a fallback**. Detect support (`NISession.deviceCapabilities` / `isSupported`) and offer an alternative (e.g., Bluetooth proximity, QR/AirDrop-style hand-off, manual selection) so the feature still works.

## Platform notes
- **iOS** — primary platform; iPhone 11 and later provide directional UWB ranging.
- **watchOS** — supports Nearby Interaction on UWB-capable Apple Watch (verify current model support on Apple).
- Third-party **accessories** implement the Nearby Interaction accessory protocol with a compatible UWB chipset.

## API
- Framework: **Nearby Interaction**.
- `NISession`, `NINearbyObject` (carries `distance` and `direction`), `NINearbyPeerToken` / discovery token exchange, `NINearbyAccessoryConfiguration` for accessories.
- Check support before starting and handle session invalidation/interruption.

## Accessibility
- Don't rely on a **visual-only** arrow — pair direction with **haptics** and **spoken/sound cues** so the experience works for VoiceOver users and in eyes-free situations.
- Provide a non-directional fallback path to complete the task.
- Avoid requiring sustained, precise device movement that some people can't perform.

## Do / Don't
- Do show continuous, multimodal feedback (visual + haptic + sound).
- Do request permission with a clear purpose string and provide a fallback when UWB is absent.
- Don't use proximity/position data beyond the stated feature.
- Don't make the experience depend solely on a visual indicator.

See also: [[accessibility]], [[gestures]], [[playing-haptics]], [[ios]], [[watchos]], [[privacy]]
