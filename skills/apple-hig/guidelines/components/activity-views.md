---
title: Activity Views (Share Sheets)
source_url: https://developer.apple.com/design/human-interface-guidelines/activity-views
platforms: [ios, ipados, macos, visionos]
value_type: platform-specific
last_verified: 2026-06-14
---

# Activity Views (Share Sheets)

> ⚠️ Re-verify on Apple. (UIKit `UIActivityViewController`; SwiftUI `ShareLink`.)

## Purpose

An activity view — commonly called a **share sheet** — presents a contextual set of **activities**
(tasks) people can perform with the current selection or screen content: share, copy, save, print,
AirDrop, add to a service, run an app's custom activity. The user initiates it from a control; the
system populates it from registered apps and extensions. Verify on Apple as the HIG migrates from
the 26 to the 27/Golden Gate generation.

## Anatomy

- A **share preview** at the top (item thumbnail, title, subtitle) for shared content.
- A row of **suggested contacts/destinations** (iOS), then **system activities** (Copy, Save to
  Files, Print, AirDrop, Markup…) and your **custom activities**.
- Presented in a **sheet** on iPhone, a **popover** anchored to the source on iPad/Mac/visionOS.

## Guidelines

- Present from the control the user tapped (a Share button, `square.and.arrow.up`); never auto-present.
- **Don't pre-judge** what people will share or which services they use — expose the full system
  sheet rather than a hand-picked subset, so the OS and user preferences decide ordering.
- Provide a rich, accurate **preview** of what's being shared; use `UIActivityItemSource` /
  `Transferable` so each destination receives the right representation.
- Define **custom activities** (`UIActivity`) only for genuinely app-specific tasks; give each a
  clear title and an SF Symbol. See [[sf-symbols]].
- Use `excludedActivityTypes` sparingly; removing common activities frustrates users.

## Platform notes

- **iPad / Mac / visionOS:** present in a popover from the source control; supply a `sourceItem`
  /`sourceView` + rect so the arrow points correctly. See [[popovers]].
- **macOS:** also surfaces via the standard **Share** menu (`NSSharingServicePicker`). See [[macos]].

## SwiftUI / UIKit

- SwiftUI: `ShareLink(item:)`, `ShareLink(item:preview:)` with `SharePreview(_:image:)`.
- UIKit: `UIActivityViewController(activityItems:applicationActivities:)`; set
  `completionWithItemsHandler`; conform models to `Transferable` (SwiftUI) or `UIActivityItemSource`.

## Accessibility

VoiceOver labels every activity; the Share button needs a label when icon-only; honor Dynamic Type
in the sheet. See [[accessibility]].

## Do / Don't

- ✅ Trigger from a visible Share control; ✅ provide an accurate preview; ✅ let the system order
  destinations.
- ❌ Don't present unprompted; ❌ don't strip the sheet down to a curated few; ❌ don't share a
  different item than the preview shows.

See also: [[menus]], [[popovers]], [[sheets]], [[drag-and-drop]], [[macos]], [[ios]]
