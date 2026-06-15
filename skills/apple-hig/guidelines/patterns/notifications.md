---
title: Notifications
source_url: https://developer.apple.com/design/human-interface-guidelines/notifications
platforms: [ios, ipados, macos, visionos, watchos]
value_type: universal
last_verified: 2026-06-14
---

# Notifications

> ⚠️ Universal. Re-verify on Apple.

Notifications deliver **timely, relevant** information when your app isn't active. Respect the
user's attention — irrelevant notifications get your app muted or deleted.

## Guidelines

- **Be timely and relevant.** Every notification should be worth interrupting for and personal to
  the recipient. Avoid marketing/promotional pushes (and policy may forbid them without consent).
- **Ask to notify at the right moment** — explain the value first, then request permission in
  context (not at first launch). Handle denial gracefully. See [[privacy]], [[onboarding]].
- **Write clear content:** a concise title + body that's actionable and understandable on the Lock
  Screen. Localize. See [[writing]].
- **Add actions** (reply, mark done, snooze) so users can act without opening the app; group
  related notifications; support **interruption levels** (passive, active, time-sensitive,
  critical) appropriately — reserve time-sensitive/critical for genuinely urgent items.
- **Keep badges accurate** and let users clear them; don't badge for vanity.
- Consider **Live Activities** for ongoing real-time events instead of repeated pushes. See
  [[live-activities]].
- Provide **notification settings** so users tune what they get. See [[settings]].

## Accessibility

VoiceOver reads notification content and actions; don't rely on color/sound alone; honor Do Not
Disturb / Focus. See [[accessibility]].

See also: [[live-activities]], [[privacy]], [[feedback]], [[settings]], [[widgets]].
