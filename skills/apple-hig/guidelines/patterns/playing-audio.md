---
title: Playing Audio
source_url: https://developer.apple.com/design/human-interface-guidelines/playing-audio
platforms: [ios, ipados, macos, watchos, tvos, visionos]
value_type: universal
last_verified: 2026-06-14
---

# Playing Audio

> ⚠️ Universal. Re-verify on Apple.

Audio enriches apps but competes for a shared, single resource. Behave predictably so your sound
never fights the user, the system, or other apps.

## Purpose

Play audio in a way that matches user expectations for your **app category** (media, game, voice,
ambient), respects the **physical controls** (volume, ring/silent switch), and cooperates with the
rest of the system.

## Audio session categories

You declare intent via an **audio session category** (AVAudioSession on iOS/watchOS/tvOS/visionOS;
the system mediates on macOS). Choose the one that matches behavior:

- **Ambient** — mixes with others, **obeys the ring/silent switch and screen lock** (sound effects,
  optional game audio). Default-friendly: silenced when the switch is on.
- **Playback** — primary media that **continues when locked / ignores the silent switch** (music,
  podcasts, video). Requires the `audio` background mode if it plays in the background.
- **Record / PlayAndRecord** — capture or two-way voice (calls, voice memos).
- **Solo Ambient** (default) — interrupts other audio, obeys silent switch and lock.

## Guidelines

- **Respect the ring/silent switch** for nonessential and ambient sound. Only category-appropriate
  primary media (a music or video app the user explicitly started) should override it. Never make
  unexpected sound when silenced.
- **Honor the volume buttons and system volume.** Don't reset or force a volume level.
- **Handle interruptions** (calls, Siri, alarms, other apps): pause gracefully, then resume only if
  it makes sense (music yes; a one-shot sound no). Observe the interruption began/ended
  notifications and the **shouldResume** option.
- **Duck, don't blast.** For transient spoken audio (turn-by-turn directions, VoiceOver), lower
  other audio with the **duckOthers** option rather than stopping it.
- **React to route changes** — when headphones unplug or a Bluetooth device disconnects, **pause**
  (don't keep playing aloud through the speaker) per `AVAudioSession.routeChangeNotification`.
- **Mix when appropriate** with `mixWithOthers` so ambient sound doesn't kill the user's music.

## Now Playing & remote controls

- For primary playback, publish metadata to **`MPNowPlayingInfoCenter`** (title, artist, artwork,
  elapsed time, rate) so it appears on the Lock Screen, Control Center, CarPlay, AirPods, watch.
- Handle remote commands via **`MPRemoteCommandCenter`** (play/pause, next/previous, skip, seek) so
  hardware buttons, AirPods, and CarPlay work. See [[live-activities]].

## API

`AVAudioSession` (`setCategory(_:mode:options:)`, `setActive`), `AVAudioEngine` / `AVAudioPlayer`,
`MPNowPlayingInfoCenter`, `MPRemoteCommandCenter`, SwiftUI `AVAudioPlayer` wrappers. visionOS adds
**spatial audio** via PHASE / RealityKit `AudioPlaybackController`.

## Accessibility

Never make sound the **only** signal — pair with visuals/haptics. Support **VoiceOver ducking**;
honor mono audio and balance settings; caption meaningful audio in media. See [[playing-video]],
[[playing-haptics]], [[accessibility]].

## Do / Don't

- Do pause on headphone unplug; resume thoughtfully after interruptions.
- Don't ignore the silent switch for incidental sounds, autoplay loud audio, or hijack the user's
  music without cause.

See also: [[playing-video]], [[playing-haptics]], [[feedback]], [[accessibility]], [[ios]]
