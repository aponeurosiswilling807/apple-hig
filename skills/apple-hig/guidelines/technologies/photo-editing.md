---
title: Photo Editing
source_url: https://developer.apple.com/design/human-interface-guidelines/photo-editing
platforms: [ios, ipados, macos]
value_type: platform-specific
last_verified: 2026-06-14
---

> ⚠️ Re-verify on Apple.

# Photo Editing

## Purpose

A **photo-editing extension** lets people apply your filters and adjustments to photos and
videos **without leaving the Photos app**. The extension loads in a modal view inside Photos;
editing is **non-destructive** — Photos always preserves the original and saves your changes as
re-editable adjustments, so people can revert or re-open the edit later. See [[images]].

## How it works

- A photo enters **edit mode** in Photos; tapping the extensions control shows available
  editing extensions; selecting yours presents its UI in a modal that **already has a
  navigation bar**.
- Dismissing **confirms and saves**; canceling discards. Photos stores the **original**, the
  **current** (most-recent adjustments), and the **adjustment data** used to recreate the edit.
- If your extension supports the adjustment data, Photos hands back the original plus your prior
  adjustments so people can **alter or revert** earlier edits.

## Guidelines (do's)

- **Be non-destructive; preserve the original.** Never overwrite the source; write edits as
  adjustments so they can be undone or revised.
- **Don't provide your own navigation bar.** The host modal already supplies one — a second bar
  confuses people and steals space from the content.
- **Let people preview the result** before they confirm; editing is hard to approve unseen.
- **Confirm cancellation.** If someone taps Cancel, ask them to confirm and warn that edits
  will be lost — don't silently discard work.
- **Keep the content the star** — give the photo/video maximum space; keep controls compact and
  standard. Support the system editing affordances people already know.
- Round-trip your **adjustment data** so a returning user can refine, not redo, their edit.

## Platform notes

- iOS, iPadOS, and macOS Photos host editing extensions. Behavior and exact UI differ by
  platform; the non-destructive model is shared. See [[ios]], [[ipados]], [[macos]].

## API

`PhotosUI` / `PhotoKit`: `PHContentEditingController` (`canHandle(_:)`,
`startContentEditing(with:placeholderImage:)`, `finishContentEditing(completionHandler:)`,
`cancelContentEditing()`), `PHContentEditingInput` / `PHContentEditingOutput`,
`PHAdjustmentData`. Save changes through `PHPhotoLibrary` change requests.

## Accessibility

Editing controls (sliders, swatches, toggles) need VoiceOver labels and announced values,
contrast >=4.5:1, hit targets >=44 pt, and must not signal state by color alone — important for
adjustment sliders. Honor Reduce Motion for preview transitions. See [[accessibility]],
[[voiceover]], [[sliders]].

## Do / Don't

- ✅ Do edit non-destructively, preserve the original, preview before saving, confirm cancels,
  and reuse the host navigation bar.
- ❌ Don't overwrite the original, add a second navigation bar, discard edits without
  confirmation, or hide the preview.

See also: [[images]], [[ios]], [[ipados]], [[macos]], [[accessibility]], [[voiceover]], [[sliders]]
