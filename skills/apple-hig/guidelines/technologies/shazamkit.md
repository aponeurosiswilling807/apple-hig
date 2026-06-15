---
title: ShazamKit
source_url: https://developer.apple.com/design/human-interface-guidelines/shazamkit
platforms: [ios, ipados, macos, watchos, tvos, visionos]
value_type: platform-specific
last_verified: 2026-06-14
---

> ⚠️ Re-verify on Apple.

# ShazamKit

## Purpose

ShazamKit performs **audio recognition** by matching a captured audio sample against the
Shazam catalog of millions of songs, or against a **custom catalog** you build from your own
prerecorded audio (video, podcasts, ads). Use it to identify music or to make any audio in
your experience recognizable and actionable.

## Types

- **Shazam catalog match** — identify songs from Shazam's library; returns title, artist,
  artwork, and Apple Music linkage.
- **Custom catalog match** — generate signatures from your own audio and match against them
  for app-specific experiences (e.g. trigger content when a known clip plays).

## Guidelines (do's)

- **Request microphone access in context** with a clear purpose string, at the moment the
  person taps to identify audio — not at launch. See [[privacy]].
- Give **clear, immediate feedback** that listening is happening (an animated listening state)
  and a clear result or "no match" outcome; never leave the person guessing.
- Make the **match result actionable** — show what was recognized and an obvious next step
  (play, save, open). Keep results legible with Dynamic Type and semantic colors.
- Handle **no-match and noisy-environment** cases gracefully with a retry affordance.
- If you offer "match from the microphone" and "match from a file," label each clearly.

## Platform notes

- Works across iOS, iPadOS, macOS, watchOS, tvOS, and visionOS; an SDK also exists for Android.
- On watchOS keep the listening UI minimal and glanceable. See [[watchos]].

## API

`ShazamKit` framework: `SHSession`, `SHSignatureGenerator`, `SHCatalog` /
`SHCustomCatalog`, `SHMatch`, `SHMatchedMediaItem`; feed audio via the device microphone
(`SHManagedSession`) or your own buffers. Build custom catalogs with the ShazamKit CLI.

## Accessibility

VoiceOver-label the listen button and announce results; don't convey listening/match state by
animation or color alone — pair with text. Honor Reduce Motion for the listening animation.
See [[accessibility]], [[voiceover]].

## Do / Don't

- ✅ Do ask for the mic in context, show a clear listening state, and make results actionable.
- ❌ Don't request the microphone up front, leave the UI silent during a match, or surface a
  result with no way to act on it.

See also: [[siri]], [[privacy]], [[accessibility]], [[voiceover]], [[watchos]], [[shareplay]]
