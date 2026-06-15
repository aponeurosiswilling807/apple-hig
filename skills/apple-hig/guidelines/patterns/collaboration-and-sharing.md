---
title: Collaboration & Sharing
source_url: https://developer.apple.com/design/human-interface-guidelines/collaboration-and-sharing
platforms: [ios, ipados, macos, visionos]
value_type: universal
last_verified: 2026-06-14
---

# Collaboration & Sharing

> ⚠️ Universal. Re-verify on Apple. Pairs with the [[activity-views]] (share sheet) component.

Help people share content and work together with the least friction. Great sharing experiences are
**simple and responsive**, letting people engage with the content while communicating clearly.

## Sharing vs. collaborating

- **Sharing** sends a copy or a link out (Messages, Mail, AirDrop, third-party apps). Use the
  **system share sheet** so people get the destinations and actions they expect. See [[activity-views]].
- **Collaboration** invites others into the *same* living document with ongoing access and roles.
  Make it obvious which mode a person is choosing.

## Guidelines

- **Use the system share sheet** (`UIActivityViewController` / `ShareLink`) rather than a bespoke
  picker — it surfaces AirDrop, recent contacts, Copy, Save, and app extensions, and respects user
  privacy. Offer **Collaborate** vs **Send Copy** when both make sense.
- **Make ownership and roles clear.** Show who owns the item, who can view vs. edit, and how to
  change access. Surface participants and presence (cursors/avatars) during live collaboration.
- **Keep it responsive.** Reflect others' changes promptly; show sync/conflict status; never lose
  edits. Make joining and leaving obvious and low-stakes.
- **Be explicit about permissions.** Confirm what is being shared and with whom before it leaves
  the device; let people revoke access and stop sharing easily. See [[privacy]].
- For real-time *experiences* (watch, listen, play, draw together over FaceTime/Messages), adopt
  **SharePlay**.

## SharePlay / API

- **Group Activities** framework: define a `GroupActivity`; start via the share sheet or
  `GroupActivitySharingController`; coordinate state with `GroupSession`. People discover SharePlay
  from the FaceTime share menu or your app's share sheet.
- **Sharing:** `ShareLink`, `UIActivityViewController`; collaboration via shared `CKShare`
  (CloudKit) or document-based shared files. See [[file-management]].

## Accessibility

VoiceOver must announce participants, roles, and permission changes; presence indicators need
non-color cues. Label icon-only share/collaborate controls. See [[accessibility]].

## Do / Don't

- ✅ System share sheet, clear roles, visible sync state, easy revoke.
- ❌ Custom share grids, hidden permissions, silent data leaves, ambiguous "share" that could mean
  copy or collaborate.

See also: [[activity-views]], [[privacy]], [[file-management]], [[managing-accounts]], [[notifications]].
