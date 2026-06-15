---
title: Gyroscope & Accelerometer
source_url: https://developer.apple.com/design/human-interface-guidelines/gyroscope-and-accelerometer
platforms: [ios, watchos]
value_type: platform-specific
last_verified: 2026-06-14
---
> ⚠️ Re-verify on Apple.

# Gyroscope & Accelerometer

> Note: Apple's HIG page slug is `gyro-and-accelerometer`; verify the canonical URL on Apple.

## Purpose
On-device gyroscopes and accelerometers supply data about a device's movement and orientation in the physical world. Apps can use this motion data to enrich experiences — fitness and activity tracking, gaming, parallax effects, orientation-aware UI, and gesture-style shortcuts.

## Sensors
- **Accelerometer** — measures linear acceleration (including gravity) along three axes.
- **Gyroscope** — measures rotation rate around three axes.
- **Device motion (sensor fusion)** — combines accelerometer, gyroscope, and magnetometer into attitude, rotation rate, and user acceleration.

## Guidelines
- Use motion data **sparingly and purposefully** — to support the experience, not as a gimmick. People should understand why the device is responding to movement.
- **Respond predictably**: map physical motion to onscreen change in a way that feels natural and direct; avoid jittery or exaggerated responses.
- **Mind battery and performance**: request only the update frequency you need and stop updates when the related UI isn't visible. Higher sample rates drain battery faster.
- Don't require **large, awkward, or fatiguing motions** (e.g., vigorous shaking) — and never assume a person can perform them.
- Account for context: motion may be unreliable when the device is on a flat surface, in a vehicle, or mounted.

## Platform notes
- **iOS** — full Core Motion access; common for games, AR, fitness, and parallax.
- **watchOS** — motion drives workout detection, fall/crash-style signals, and gesture features; sensors are central to fitness experiences but power-sensitive.
- **iPadOS / macOS / tvOS / visionOS** are not the primary targets for this guidance; verify per-platform sensor availability on Apple.

## API
- Framework: **Core Motion**.
- `CMMotionManager` — `startAccelerometerUpdates`, `startGyroUpdates`, `startDeviceMotionUpdates(to:withHandler:)`; set `deviceMotionUpdateInterval` (and related intervals) to the lowest rate that works.
- `CMDeviceMotion` exposes `attitude`, `rotationRate`, `userAcceleration`, `gravity`.
- Stop updates (`stopDeviceMotionUpdates`, etc.) as soon as they're no longer needed.

## Accessibility
- **Never make a motion gesture the only way** to trigger an action — provide an equivalent on-screen control. People using a mount, with limited mobility, or with motor differences may be unable to move the device.
- Honor **Reduce Motion** for any motion-driven visual effects (parallax, tilt).
- Avoid relying on shake/tilt for critical or destructive actions.

## Do / Don't
- Do request the minimum update frequency and stop when offscreen.
- Do provide a non-motion alternative for every motion-triggered action.
- Don't drain battery with high-rate updates left running.
- Don't require strenuous or precise device movements.

See also: [[accessibility]], [[gestures]], [[ios]], [[watchos]], [[playing-haptics]]
