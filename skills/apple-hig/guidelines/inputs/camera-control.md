---
title: Camera Control
source_url: https://developer.apple.com/design/human-interface-guidelines/camera-control
platforms: [ios]
value_type: platform-specific
last_verified: 2026-06-14
---

# Camera Control

> ⚠️ Re-verify on Apple. Hardware-specific (iPhone 16 line and later) — do not assume availability.

## Purpose

A pressure-sensitive **hardware control** on the side of supported iPhones (iPhone 16 family and
later) for launching the camera and capturing photos/video, with a touch-sensitive surface for quick
in-frame adjustments. Use it to make capture fast and one-handed.

## Gestures

- **Press (full click):** launch camera; press again to take a photo or start/stop video.
- **Light press:** a half-press that reveals capture controls and lets people **lock focus/exposure**
  or open the adjustments overlay.
- **Double light press:** cycle between adjustable settings (e.g. exposure, depth, zoom, lenses).
- **Slide (swipe along the surface):** adjust the currently selected setting (zoom, exposure value,
  etc.).
- A light-press requires deliberate force — cases and incidental squeezes should not trigger it.

## Guidelines

- Reserve Camera Control for **camera/capture experiences**; don't repurpose it for unrelated app
  actions.
- Map gestures to **standard capture meanings** (press = capture, slide = adjust) so behavior matches
  the system Camera and other apps.
- Show clear **on-screen feedback** for what the slide is adjusting and the current value; reflect
  state changes immediately. See [[feedback]].
- Keep adjustments **quick and reversible**; don't bury critical capture functions behind the control
  only.

## API

- Use the AVFoundation **capture controls** APIs (e.g. `AVCaptureControl` subclasses such as a
  slider/picker, surfaced through `AVCaptureSession`) to attach your zoom/exposure/lens controls to
  Camera Control. The system handles the gesture routing.
- Don't read the hardware button as a raw key; register capture controls instead.

## Accessibility

Provide on-screen equivalents for every Camera Control action (tap-to-capture, sliders, buttons) so
the hardware control is never required. Respect VoiceOver and assistive input. See [[accessibility]].

## Do / Don't

- **Do** mirror system capture conventions, show live adjustment feedback, and keep on-screen parity.
- **Don't** assume the hardware exists, hijack it for non-camera tasks, or make it the only way to capture.

See also: [[ios]], [[action-button]], [[feedback]], [[game-controls]], [[accessibility]]
