---
title: SharePlay
source_url: https://developer.apple.com/design/human-interface-guidelines/shareplay
platforms: [ios, ipados, macos, tvos, visionos]
value_type: platform-specific
last_verified: 2026-06-14
---

> ⚠️ Re-verify on Apple as the HIG migrates from the 26 to the 27/Golden Gate generation.

# SharePlay

## Purpose

SharePlay lets multiple people share an activity together — watching a movie, listening to
music, playing a game, sketching on a whiteboard — while on a **FaceTime call** or in a
**Messages conversation**. The system synchronizes media playback and shared state across
everyone's devices via **Group Activities**, so each person runs the activity locally and the
session stays in sync.

## Anatomy

- **Group Activity** — the shared experience your app defines (`GroupActivity` conforming type).
- **Group Session** — the live, synchronized session connecting participants.
- **Coordinated playback** — `GroupSessionMessenger` / `AVPlaybackCoordinator` keep transport
  controls (play, pause, seek) synced for everyone.

## Guidelines (do's)

- Make activities **easy to start** — surface a SharePlay affordance in your UI, in the system
  share sheet, and let it begin from an active FaceTime call.
- Let anyone **join late** and leave at any time without breaking the session for others; show
  clear join/leave state.
- Keep everyone **in sync**: any participant's play/pause/seek should affect all; design for
  latency and brief disconnections gracefully.
- Show **who's in the session** and what's playing; make shared vs. personal controls clear
  (e.g. volume is local, transport is shared).
- Respect each person's context — don't force-fullscreen or hijack their device.

## Platform notes

- **visionOS** — SharePlay supports **spatial Personas**: participants appear placed around a
  shared experience; design shared content so it reads from multiple viewpoints. See
  [[visionos]].
- **tvOS** — shared viewing pairs with FaceTime on a nearby iPhone/iPad. See [[tvos]].
- Not currently a watchOS activity surface.

## API

`GroupActivities` framework: `GroupActivity`, `GroupSession`, `GroupSessionMessenger`,
`AVPlaybackCoordinator`, `GroupStateObserver`; present via `groupActivityShareSheet` /
`activate()`. AirPlay-over-AirDrop can hand a media URL into a session.

## Accessibility

Provide VoiceOver labels for session controls and participant indicators; honor Reduce Motion
for shared transitions; don't convey "who's talking / in session" by color alone. See
[[accessibility]], [[voiceover]].

## Do / Don't

- ✅ Do keep transport synced, allow join/leave any time, and make starting an activity obvious.
- ❌ Don't desync participants, block latecomers, hide who's present, or assume a stable
  connection.

See also: [[siri]], [[visionos]], [[tvos]], [[ios]], [[macos]], [[accessibility]], [[shazamkit]]
