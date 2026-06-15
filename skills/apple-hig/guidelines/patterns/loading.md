---
title: Loading
source_url: https://developer.apple.com/design/human-interface-guidelines/loading
platforms: [ios, ipados, macos, watchos, tvos, visionos]
value_type: universal
last_verified: 2026-06-14
---

# Loading

> ⚠️ Universal. Re-verify on Apple.

Make waiting feel short and intentional. Never show a blank, frozen, or ambiguous screen.

## Guidelines

- **Show something immediately.** Use **skeleton/placeholder** content (redacted shapes) that
  mirrors the real layout so the transition to loaded content is seamless. Prefer this over a bare
  spinner when content has structure. See [[progress-indicators]].
- **Determinate vs indeterminate:** show a progress bar with percentage when you know the
  duration; use a spinner only for short, unknown waits.
- **Load progressively.** Show what you already have; fill in the rest. Don't block the whole
  screen for one slow piece. Cache and reuse.
- **Keep the UI responsive.** Do work off the main thread; let users scroll/cancel while loading.
- **Communicate long waits** with context ("Importing 1 of 20…") and a **cancel** option. See
  [[feedback]].
- **Handle failure** gracefully with a retry and a plain-language message; don't lose the user's
  place. See [[feedback]], [[writing]].

## Launch

- App launch should be near-instant: a launch screen matching the first real screen, then restore
  state. No splash/ad delays. See [[onboarding]].

## Accessibility

- Announce loading start/finish to VoiceOver; don't trap focus on a spinner; honor Reduce Motion
  (the system spinner is fine). See [[accessibility]], [[motion]].

See also: [[progress-indicators]], [[feedback]], [[onboarding]].
