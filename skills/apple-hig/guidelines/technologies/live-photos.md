---
title: Live Photos
source_url: https://developer.apple.com/design/human-interface-guidelines/live-photos
platforms: [ios, ipados, macos, visionos]
value_type: platform-specific
last_verified: 2026-06-14
---

> ⚠️ Re-verify on Apple. Verify on Apple as the HIG migrates from the 26 to the 27/Golden Gate generation.

# Live Photos

## Purpose

A Live Photo captures the moments just before and after a still — motion and audio — turning a photo into a short interactive memory. When displaying Live Photos, reproduce the system experience people already know from the Photos app.

## Guidelines

- **Use the system view.** Display Live Photos with `PHLivePhotoView` so playback, the badge, and gestures match the Photos app exactly. Don't reimplement playback.
- **Show the Live Photo badge.** Mark a Live Photo with the standard badge so people know it's live (not a still). Get the badge from the system, not a custom glyph.
- **Press to play.** People **press and hold** (or use the system affordance) to bring a Live Photo to life. Preserve this interaction; don't auto-loop everywhere or replace it with a custom gesture.
- **Preserve motion and audio together.** Keep the full Live Photo intact through capture, edit, save, and share; don't silently flatten it to a still or strip audio.
- **Be honest in mixed grids.** When Live Photos sit alongside stills, badge them so people aren't surprised by movement/sound.
- **Respect Reduce Motion** and let people mute audio. See [[motion]], [[accessibility]].

## API

- **PhotoKit**: `PHLivePhoto`, `PHLivePhotoView` (display + interaction), `PHAssetResource` for the paired image+video.
- Badge: `PHLivePhotoView.livePhotoBadgeImage(options:)` returns the system badge image.
- Capture: `AVCapturePhotoOutput` with Live Photo movie output.
- visionOS can present Live Photos spatially where supported — verify on Apple.

## Accessibility

- Provide a VoiceOver label that identifies a Live Photo and its playback control. Honor Reduce Motion (don't auto-animate) and offer a still fallback. Keep controls ≥44 pt. See [[accessibility]].

## Do / Don't

- ✅ Use `PHLivePhotoView` and the system badge; press-and-hold to play.
- ✅ Preserve motion + audio through edits and sharing.
- ❌ Don't auto-play looping motion without a Reduce-Motion fallback.
- ❌ Don't flatten Live Photos to stills or drop audio silently.

See also: [[images]], [[motion]], [[icloud]], [[accessibility]], [[ios]], [[visionos]]
