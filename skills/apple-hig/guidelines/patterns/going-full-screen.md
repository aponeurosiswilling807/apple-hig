---
title: Going Full Screen
source_url: https://developer.apple.com/design/human-interface-guidelines/going-full-screen
platforms: [ios, ipados, macos, tvos]
value_type: universal
last_verified: 2026-06-14
---

# Going Full Screen

> ⚠️ Universal (iPhone, iPad, Mac, Apple TV). Re-verify on Apple. (For visionOS, see immersive
> experiences instead.)

Full-screen mode expands a view to fill the display, hides system and app chrome, and creates a
**distraction-free** environment for media playback, games, presentations, and reading.

## When to use it

- ✅ Content that benefits from the whole screen: **video, photos, games, slideshows, focused
  reading or drawing**. Enter on a clear user action.
- ❌ Don't force full screen on people, and don't use it to hide UI you simply didn't design.

## Guidelines

- **Make exit obvious and reliable.** Always provide a clear way out (a visible control, the Esc
  key on Mac, a swipe/back affordance, the Menu button on tvOS). Never trap people.
- **Auto-hide chrome, then reveal on intent.** Fade controls after a short idle period and bring
  them back on tap, pointer move, or remote interaction — don't make controls vanish permanently.
- **Preserve state.** Keep playback position, zoom, scroll, and selection when entering and
  leaving full screen; restore the prior layout on exit.
- **Respect safe areas and the device.** Lay out within safe areas (notch/Dynamic Island, rounded
  corners, Home indicator); let media letterbox rather than crop important content.
- **Keep essential status reachable** (time remaining, page, score) without cluttering the view.
- On tvOS, design for the **10-foot experience** and focus-based navigation. See [[tvos]].

## API

- iOS/iPadOS: full-screen modal presentation (`.fullScreenCover`), `AVPlayerViewController`
  full-screen, `prefersHomeIndicatorAutoHidden`, `prefersStatusBarHidden`.
- macOS: `NSWindow` `toggleFullScreen(_:)` / `.fullScreenPrimary` collection behavior; Esc exits.
- Hide auto-hiding bars and use immersive presentation styles per platform.

## Accessibility

Keep the exit affordance discoverable by VoiceOver even when chrome is hidden; don't rely on a
hover/idle reveal alone. Honor Reduce Motion for transitions; provide captions for video. See
[[accessibility]].

## Do / Don't

- ✅ Obvious exit, idle-hiding controls, preserved state, safe-area-aware.
- ❌ No visible way out, permanently hidden controls, cropped content, lost playback position.

See also: [[modality]], [[playing-audio]], [[multitasking]], [[tvos]], [[ios]], [[macos]].
