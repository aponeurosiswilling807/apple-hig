---
title: Augmented Reality
source_url: https://developer.apple.com/design/human-interface-guidelines/augmented-reality
platforms: [ios, ipados]
value_type: platform-specific
last_verified: 2026-06-14
---

# Augmented Reality

> ⚠️ Re-verify on Apple. (For headset-worn spatial experiences see [[visionos]].)

## Purpose

Augmented reality blends virtual content with the live camera view of the real world on iPhone and
iPad. Aim for **immersion, comfort, and believable placement** — virtual objects should feel like
they belong in the person's space.

## Onboarding & coaching

- Use the **coaching overlay** (`ARCoachingOverlayView`) to guide people through initialization and
  **relocalization** (e.g. "Move iPhone to start"). It appears automatically when tracking starts or
  is interrupted.
- **Hide your custom UI while the coaching overlay is visible** so the instruction is unambiguous;
  restore controls once tracking is ready.
- Explain what to do clearly; some people are new to AR. Indicate when more space or better light is
  needed.

## Guidelines

- **Encourage stable placement.** Detect surfaces/anchors before placing; let objects rest believably
  on detected planes; keep them stable as the camera moves. Cast contact shadows and match real
  lighting where possible.
- **Design for comfort and safety.** Don't require people to hold awkward poses, move backward, or
  walk into hazards. Keep sessions short enough to avoid fatigue; warn before motion-heavy moments.
- **Respect the environment.** Adapt to varying light; degrade gracefully in poor conditions instead
  of failing silently.
- **Make interactions direct and forgiving** — tap, drag, pinch-to-scale, rotate on the object
  itself. Give clear feedback. See [[feedback]].
- **Always provide a clear way out** of the AR experience and back to standard UI.
- Minimize on-screen chrome so the real+virtual scene stays the focus; keep controls within reach.

## API

- **ARKit** for tracking/anchors; **RealityKit** (`ARView` / `RealityView`) for rendering, physics,
  and lighting; `ARCoachingOverlayView` for onboarding; **Reality Composer / Reality Composer Pro**
  and **USDZ** for content and AR Quick Look previews.

## Accessibility

Provide non-visual alternatives and clear audio/haptic feedback; don't make the core task depend on
fine motor precision or sustained holding. Honor Reduce Motion. See [[accessibility]], [[motion]].

## Do / Don't

- ✅ Use the coaching overlay, hide app UI during it, place objects on detected surfaces, offer an exit.
- ❌ Don't require uncomfortable poses, ignore real lighting, or trap people in the AR view.

See also: [[ios]], [[visionos]], [[feedback]], [[motion]], [[accessibility]]
