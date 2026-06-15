---
title: Live-Viewing Apps
source_url: https://developer.apple.com/design/human-interface-guidelines/live-viewing-apps
platforms: [ios, ipados, tvos]
value_type: universal
last_verified: 2026-06-14
---

# Live-Viewing Apps

> ⚠️ Authored mainly for iOS/iPadOS/tvOS streaming experiences. Re-verify on Apple.

A live-viewing app shows **continuously updating, real-time content** — sports, live events, news,
security/baby cameras, auctions, live shopping. People expect it to feel **current, immediate, and
glanceable**.

## Use it for

- ✅ Content whose value depends on being **live right now** and that updates on its own.
- ❌ Not for on-demand catalogs or static content dressed up as "live."

## Guidelines

- **Prioritize the content.** Make the live video/feed the hero; keep chrome minimal and let it
  fade so it doesn't compete with the action. Pairs naturally with [[going-full-screen]].
- **Keep it fresh and low-latency.** Minimize delay (adopt Low-Latency HLS where it matters for
  sports/auctions); reflect the true current state, never a stale frame.
- **Show clear live status.** A visible **LIVE** indicator, current score/time, and connection
  state at a glance; distinguish live from delayed/replay. Don't convey status by color alone.
- **Handle interruptions gracefully.** Buffering, reconnect, and quality drops should degrade
  smoothly with honest feedback, not a frozen screen. See [[feedback]], [[loading]].
- **Update in the background** so the feed is current when people return; surface key moments via
  **Live Activities** and **notifications** without forcing the app open. See [[live-activities]],
  [[notifications]].
- **Make controls glanceable** and reachable (mute, full screen, quality, switch feed/camera);
  auto-hide them during viewing.
- On tvOS, design for the 10-foot, focus-driven experience. See [[tvos]].

## API

- Streaming via **HLS / Low-Latency HLS** with `AVPlayer` / `AVPlayerViewController`; background
  refresh (`BGAppRefreshTask`); push for live moments; **ActivityKit** Live Activities for
  on-the-go scores/status.

## Accessibility

Provide captions/audio descriptions for live media; announce score/status changes via VoiceOver;
keep the LIVE state perceivable without color; honor Reduce Motion. See [[accessibility]].

## Do / Don't

- ✅ Fresh low-latency feed, clear LIVE status, graceful buffering, background updates, glanceable controls.
- ❌ Stale frames, hidden connection state, color-only "live" cue, chrome that blocks the action.

See also: [[live-activities]], [[going-full-screen]], [[playing-audio]], [[notifications]], [[feedback]], [[tvos]].
