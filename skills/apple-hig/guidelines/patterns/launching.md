---
title: Launching
source_url: https://developer.apple.com/design/human-interface-guidelines/launching
platforms: [ios, ipados, macos, watchos, tvos, visionos]
value_type: universal
last_verified: 2026-06-14
---

# Launching

> ⚠️ Universal. Re-verify on Apple. Pairs with [[onboarding]] (the combined Onboarding & Launching doc).

People should reach a useful state the instant your app opens. Launching well makes the app feel
**fast, responsive, and respectful** of the person's time.

## Launch instantly

- **Use a launch screen** that is nearly **identical to the first real screen** — same layout,
  background, and placeholder structure. The system shows it momentarily, then swaps in your UI,
  giving the impression of speed.
- A launch screen is **not a splash screen.** No logos that animate, no marketing, no ads, no
  "loading…" branding. A splash screen only advertises that the app had to restart.
- **Defer heavy work.** Load only what the first screen needs; fetch the rest after launch. See
  [[loading]].

## Restore state

- **Bring people back to where they left off** — same screen, scroll position, selection, and
  in-progress input. Avoid making them retrace steps. Restore as much granular detail as possible.
- Persist drafts so an interruption (a call, low battery, app eviction) never loses work.

## First run

- **Don't gate launch** behind sign-in, permissions, or long tutorials. Let people do something
  useful immediately and teach in context. Defer account creation and just-in-time permissions.
  See [[onboarding]], [[privacy]].
- Provide a sensible **empty state** with a clear first action rather than a blank screen.

## API

- iOS/iPadOS/tvOS: a **launch screen** storyboard / `UILaunchScreen` Info.plist (or SwiftUI launch
  configuration). State restoration via scene/window persistence
  (`NSUserActivity`, `UISceneSession`, SwiftUI `@SceneStorage`).
- macOS: restore open windows/documents on relaunch; visionOS/watchOS launch into the primary
  scene quickly.

## Accessibility

The launch screen carries no interactive content, so make the **first real screen** fully
VoiceOver-navigable and Dynamic-Type-ready. Honor Reduce Motion for any launch transition. See
[[accessibility]].

## Do / Don't

- ✅ Launch screen matching first screen, instant useful state, restored context, deferred setup.
- ❌ Splash/branding/ads on launch, forced sign-in before value, lost state, slow blocking loads.

See also: [[onboarding]], [[loading]], [[privacy]], [[managing-accounts]], [[feedback]].
