---
title: iCloud
source_url: https://developer.apple.com/design/human-interface-guidelines/icloud
platforms: [ios, ipados, macos, watchos, tvos, visionos]
value_type: universal
last_verified: 2026-06-14
---

> ⚠️ Re-verify on Apple. Verify on Apple as the HIG migrates from the 26 to the 27/Golden Gate generation.

# iCloud

## Purpose

iCloud lets people seamlessly access the content they care about — photos, documents, app data — from any of their devices **without performing explicit synchronization**. Sync should feel invisible: changes on one device appear on the others.

## Guidelines

- **Make sync seamless and automatic.** People shouldn't manage it. Don't add manual "Sync now" buttons as the primary mechanism; sync continuously in the background.
- **Opt in, don't surprise.** Enable iCloud features with the user's awareness; respect the system iCloud account and the per-app iCloud toggle in Settings.
- **Design for offline and latency.** Devices go offline. Let people keep working locally; reconcile when connectivity returns. Never block the UI waiting on the cloud.
- **Handle conflicts gracefully.** When the same item changes on two devices, resolve automatically where safe; when you can't, present a clear choice rather than silently discarding work.
- **Be storage-aware.** iCloud storage is finite and shared across the user's apps. Don't waste it; communicate clearly if a save fails because storage is full, and point to the system flow to manage/upgrade storage.
- **Respect privacy.** Sync only what the user expects; explain what's stored in iCloud. See [[privacy]].
- **Account changes happen.** Handle sign-in, sign-out, and account switching without data loss or leaking one account's data into another.

## API

- **CloudKit** (`CKContainer`, `CKDatabase`, `CKRecord`, `CKShare`) — structured records in public/private/shared databases; each app is siloed.
- **`CKSyncEngine`** — higher-level sync of local state to/from the cloud (WWDC23+).
- **NSPersistentCloudKitContainer** — Core Data store mirrored to CloudKit.
- **iCloud Drive / `NSUbiquitousKeyValueStore`** — documents and small key-value prefs.
- **CloudKit sharing UI** — `UICloudSharingController` for sharing records with other iCloud users.

## Sharing

- Use the system sharing UI for shared CloudKit data so permissions and invitations match user expectations.
- Make it obvious what's shared, with whom, and how to stop sharing.

## Accessibility

- Surface sync/conflict states with accessible text and VoiceOver, not color alone. See [[accessibility]].

## Do / Don't

- ✅ Sync silently and continuously; reconcile after offline edits.
- ✅ Fail clearly when storage is full and route to the system manage-storage flow.
- ❌ Don't require manual syncing or block the UI on the network.
- ❌ Don't lose or cross-contaminate data across account changes.

See also: [[privacy]], [[loading]], [[feedback]], [[settings]], [[accessibility]]
