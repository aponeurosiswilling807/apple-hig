---
title: Playing Video
source_url: https://developer.apple.com/design/human-interface-guidelines/playing-video
platforms: [ios, ipados, macos, tvos, visionos]
value_type: universal
last_verified: 2026-06-14
---

# Playing Video

> ⚠️ Universal. Re-verify on Apple.

Use the **standard system player** wherever possible so people get familiar, accessible transport
controls, Picture in Picture, AirPlay, and captions for free.

## Purpose

Present video so it's easy to control, works full screen and inline, and stays watchable across
interruptions, multitasking, and accessibility needs.

## Anatomy / Variants

- **Inline / embedded** — plays within your layout; good for short or supplementary clips.
- **Full screen** — immersive playback; let people enter/exit easily and rotate.
- **Picture in Picture (PiP)** — a floating, resizable window that keeps video playing while the
  user does other things. Support it for primary video; **video-call apps** can adopt PiP too.

## Guidelines

- **Prefer the standard player** (`AVPlayerViewController` / SwiftUI `VideoPlayer`) for built-in
  transport controls, scrubbing, volume, full-screen, AirPlay, PiP, captions, and audio tracks.
  Build custom controls only when you truly need to, and re-create the standard affordances.
- **Don't obscure or duplicate** system controls. Keep your chrome out of the way; let controls
  auto-hide during playback and reappear on tap.
- **Support PiP** so playback continues when the user leaves; allow AirPlay to a TV / external
  display. Continue audio under the rules in [[playing-audio]].
- **Respect orientation and aspect ratio** — letterbox/pillarbox rather than distort; allow
  rotation to full screen.
- **Handle interruptions and route changes** (calls, headphone unplug) — pause sensibly.
- **Provide captions, subtitles, and audio descriptions** and surface the selection control. The
  standard player exposes these automatically when present in the asset.

## Platform notes

- **tvOS** — the player is built for the 10-foot UI and Siri Remote; use it rather than custom
  transport. Support the **info panel** (swipe down) for chapters, subtitles, audio.
- **visionOS** — video can play in a window, in a 3-D environment, or as a fully **immersive**
  experience; use **Docking** to move to a cinema environment. Respect the user's space and offer
  an easy exit. See [[visionos]].
- **macOS** — windowed playback, full screen, and PiP; honor menu-bar and keyboard controls.

## API

AVKit: `AVPlayerViewController` (UIKit/tvOS), `AVPlayerView` (AppKit), SwiftUI **`VideoPlayer`**,
`AVPictureInPictureController`, `AVPlayer` / `AVPlayerItem`; captions via the asset's
`AVMediaSelectionGroup`.

## Accessibility

Captions/SDH and **audio descriptions**; VoiceOver-labeled controls; don't autoplay with sound;
honor Reduce Motion for ambient/looping backgrounds. See [[accessibility]], [[playing-audio]].

## Do / Don't

- Do use the system player and support PiP, AirPlay, and captions.
- Don't trap people in full screen, distort aspect ratio, or hide the exit.

See also: [[playing-audio]], [[playing-haptics]], [[visionos]], [[tvos]], [[accessibility]]
