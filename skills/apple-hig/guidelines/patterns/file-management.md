---
title: File Management
source_url: https://developer.apple.com/design/human-interface-guidelines/file-management
platforms: [ios, ipados, macos, visionos]
value_type: universal
last_verified: 2026-06-14
---

# File Management

> ⚠️ Universal. Re-verify on Apple.

If people create and manage discrete pieces of content — documents, drawings, recordings — build a
**document-based app** and lean on the system's document model instead of inventing your own file UI.

## Principles

- **Let the system manage files.** Use the standard document browser, open/save, and the Files app
  so people get familiar navigation, search, tags, iCloud Drive, and third-party providers for free.
- **Don't build a bespoke file manager.** Avoid custom "My Files" screens that fragment a person's
  documents away from where the rest of their files live.
- **Make storage transparent.** Be clear about what's local vs. in iCloud; reflect download/upload
  state; handle offline gracefully.

## Guidelines

- **Autosave continuously.** Never make people remember to save. The system records **versions**
  over time; let people **browse and revert** to earlier versions (a Time Machine–like history).
- **Use iCloud Documents** so a person's content follows them across devices; resolve conflicts
  sensibly and surface them only when needed. See [[privacy]].
- **Name on first save or infer a sensible default**; allow rename in place.
- **Support standard operations:** duplicate, move, tag, share, and delete — and integrate with the
  system share sheet. See [[collaboration-and-sharing]], [[activity-views]].
- **Open into the document browser** for document-centric apps so people pick or create a document
  before editing.

## SwiftUI / API

- SwiftUI: **`DocumentGroup`** with a `FileDocument` / `ReferenceFileDocument` type.
- UIKit: **`UIDocument`** + `UIDocumentBrowserViewController`; AppKit: **`NSDocument`** +
  `NSDocumentController`. Enable autosave-in-place (`autosavesInPlace`) and versions.
- File access UI: `UIDocumentPickerViewController` / `fileImporter` / `fileExporter`. Declare
  document types (UTIs) and any iCloud container entitlements.

## Accessibility

Document names, version history, and file states must be VoiceOver-readable; sync/conflict status
needs non-color cues. Support Dynamic Type in browsers and pickers. See [[accessibility]].

## Do / Don't

- ✅ Document browser, autosave + versions, iCloud, system share sheet.
- ❌ Custom file lists, manual "Save" buttons as the only way to persist, hidden iCloud state,
  data loss on quit.

See also: [[collaboration-and-sharing]], [[activity-views]], [[privacy]], [[launching]], [[macos]], [[ios]].
