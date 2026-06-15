---
title: Undo & Redo
source_url: https://developer.apple.com/design/human-interface-guidelines/undo-and-redo
platforms: [ios, ipados, macos, visionos]
value_type: universal
last_verified: 2026-06-14
---

# Undo & Redo

> ⚠️ Universal. Re-verify on Apple.

Undo and redo let people **reverse actions** and explore safely. Support them broadly so mistakes
are never permanent and learning feels low-risk.

## Purpose

Give people a reliable way to take back what they did (and reapply it), reducing fear of error and
the need for confirmation dialogs.

## Guidelines

- **Support multiple levels** of undo/redo, not just one step — back through a sequence of edits in
  order. Preserve the stack while the context is alive.
- **Name the action.** Use action-specific titles so people know what reverts —
  "Undo Typing", "Undo Move", "Redo Delete" — not a bare "Undo". macroOS surfaces these in the
  Edit menu and tooltips.
- **Be consistent and predictable** — undo reverses the most recent reversible action; redo
  reapplies it. Don't undo across unrelated contexts in surprising ways.
- **Prefer undo over confirmation.** For most actions, let people act immediately and undo, rather
  than prompting first. **Still confirm truly destructive, irreversible actions** (permanent
  delete, purchase) with an [[alerts|alert]] or undoable grace period.
- **Discoverability** — on iOS expose undo where people will find it (Edit menu, an Undo button,
  three-finger gestures) rather than relying only on shake. Disable/grey controls when nothing is
  undoable.

## Platform notes

- **iOS / iPadOS** — **Shake to Undo** (gated by `UIApplication.applicationSupportsShakeToEdit`)
  shows a system undo/redo alert; the **three-finger swipe** gesture (swipe left = undo, right =
  redo) and the edit-menu Undo/Redo are the modern, discoverable paths. Hardware-keyboard **⌘Z /
  ⇧⌘Z** also work. See [[ios]].
- **macOS** — Undo/Redo live in the **Edit menu** with **⌘Z** and **⇧⌘Z** (or **⌘Y**); keep titles
  descriptive. See [[macos]].
- **visionOS** — provide menu/keyboard undo; don't rely on shake. See [[visionos]].

## API

**`UndoManager`** (`registerUndo`, `setActionName(_:)`, `beginUndoGrouping`); SwiftUI
`@Environment(\.undoManager)`; Document apps get undo via `UIDocument` / `NSDocument`. UIKit
`applicationSupportsShakeToEdit`.

## Accessibility

Don't make shake the only path (it's hard for some people and conflicts with motor needs); offer a
visible control. Use clear, localized action names that VoiceOver can read. See [[accessibility]].

## Do / Don't

- Do support multi-level undo, name actions, and prefer undo over prompts.
- Don't rely solely on shake, leave actions unnamed, or make routine actions need confirmation.

See also: [[alerts]], [[data-entry]], [[macos]], [[ios]], [[accessibility]]
