---
title: Image Wells
source_url: https://developer.apple.com/design/human-interface-guidelines/image-wells
platforms: [macos]
value_type: platform-specific
last_verified: 2026-06-14
---

# Image Wells

> ⚠️ Re-verify on Apple.

## Purpose

An image well is an **editable image view** on macOS: it **displays an image and accepts a new
one** via drag-and-drop or paste. Use it where the user supplies a picture — an account avatar,
a document icon, a thumbnail, a custom artwork slot.

## Anatomy

- A framed region showing the **current image** (or an empty/placeholder state).
- Acts as a **drop target** for dragged images and supports **copy/paste** and **cut**.

## Guidelines

- Use an image well when the user genuinely **provides or replaces** an image; for read-only
  display use a plain image view instead.
- Make it obvious the well is **editable** and a valid **drop target** (highlight on drag-over).
- Support the full editing set the user expects: **drag-in, paste, cut, copy, delete**, and
  ideally an alternative picker (e.g. a button that opens an open-panel) for users who don't drag.
- Show a meaningful **placeholder** when empty; preserve aspect ratio / show how the image will be
  cropped or scaled.

## Platform notes

- **macOS only.** On iOS/iPadOS/visionOS use **PhotosPicker** or a file importer plus an image
  view rather than a drag-well. See [[pickers]], [[ios]], [[macos]].

## AppKit / SwiftUI API

- AppKit: an **editable `NSImageView`** (`isEditable = true`) handles drag-in, cut/copy/paste; pair
  with `NSOpenPanel` for a browse fallback.
- SwiftUI: compose `Image` with `.onDrop(of:)` / drag-and-drop modifiers and a paste command; use
  `.fileImporter` or `PhotosPicker` for the browse path.

## Accessibility

Label the well (e.g. "Profile photo, editable"); announce when an image is set or cleared; offer a
**non-drag** alternative so the action isn't drag-only; support Full Keyboard Access. See
[[accessibility]].

## Do / Don't

- **Do** highlight on drag-over; support paste and a browse fallback; show a clear placeholder.
- **Don't** make image replacement **drag-only**; don't use an image well for static, non-editable
  images.

See also: [[color-wells]], [[pickers]], [[macos]], [[accessibility]], [[ios]]
