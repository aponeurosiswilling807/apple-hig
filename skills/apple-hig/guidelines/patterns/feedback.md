---
title: Feedback
source_url: https://developer.apple.com/design/human-interface-guidelines/feedback
platforms: [ios, ipados, macos, watchos, tvos, visionos]
value_type: universal
last_verified: 2026-06-14
---

# Feedback

> ⚠️ Universal. Re-verify on Apple.

Keep people informed about what's happening, what succeeded or failed, and what to do next —
without nagging. Match the feedback's weight to the event's importance.

## Status & progress

- Show **progress** for any operation >~1s so the app never seems frozen; allow **cancel** for
  long tasks. See [[progress-indicators]], [[loading]].
- Reflect state changes immediately (selected, saved, sent). Use **optimistic UI** where safe and
  reconcile if it fails.

## Success / error

- **Success:** confirm subtly (inline change, brief checkmark/haptic) — don't interrupt with an
  alert for routine success.
- **Errors:** say **what happened** and **how to fix it**, in plain language, blaming the
  situation not the user; no raw codes. Prefer **inline, in-context** messages over alerts;
  reserve [[alerts|alerts]] for critical blocking errors. See [[writing]].

## Empty states

- Explain what belongs here and give a clear path to the first action ("Add your first note").
  Don't show a blank screen.

## Haptics & sound

- Use **haptics** (iOS/watchOS) and sound to reinforce meaningful events — never as the **only**
  channel (accessibility). Keep them purposeful and sparing. See [[motion]], [[accessibility]].

## Notifications

- For events that happen while the app isn't active, use **notifications** thoughtfully; respect
  the user's attention and settings. See [[notifications]].

## Accessibility

- Announce important changes to **VoiceOver**; don't convey status by **color alone**; honor
  Reduce Motion for feedback animations. See [[accessibility]].

See also: [[loading]], [[progress-indicators]], [[alerts]], [[notifications]], [[writing]].
