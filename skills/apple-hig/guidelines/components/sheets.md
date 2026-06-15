---
title: Sheets
source_url: https://developer.apple.com/design/human-interface-guidelines/sheets
platforms: [ios, ipados, macos, visionos]
value_type: platform-specific
last_verified: 2026-06-14
---

# Sheets

> ⚠️ Re-verify on Apple.

## Purpose

A sheet presents a **self-contained, often modal** task or set of related options over the current
context — without leaving the screen entirely. Use for focused tasks (compose, edit, configure)
that the user completes and dismisses. See [[modality]].

## iOS / iPadOS

- Slides up from the bottom by default; **rounded top corners**; the parent shows through at the top
  (card stack). On **26+ (Liquid Glass)** a sheet can also **morph/animate from its presenting
  (toolbar) control** rather than only sliding from the bottom — mark the presenting item as the
  source for a source-anchored zoom transition. See [[liquid-glass]]. Supports **detents**:
  `.medium` (~half height) and `.large` (full); can be resizable with a grabber. Use a **non-modal**
  detent only when the user benefits from seeing context underneath.
- **Dismiss:** swipe down, a **Cancel/Done** pair in the sheet's nav bar, or tap outside (for
  non-data-loss sheets). If dismiss could lose data, **confirm** with an action sheet. See [[action-sheets]].
- Top corners on 26+ are concentric Liquid Glass chrome; content stays opaque. See [[liquid-glass]].

## macOS / visionOS

- **macOS:** a sheet **attaches** to its parent window's title bar and is modal to that window
  (not the whole app). Use for document-scoped tasks; use a separate window/panel for parallel work.
- **visionOS:** sheets present within the window as a layered glass surface. See [[visionos]].

## Structure

Title (what this is) · Cancel (leading) · confirm/Done (trailing, often prominent) · the task
content. Keep it focused; deep multi-step flows may warrant a full-screen cover or pushed navigation.

## Sheet vs other modals

- **Sheet** — a task or form. **Popover** — contextual options anchored to a control (iPad/Mac).
  **Alert** — a critical short decision. **Action sheet** — a set of choices for a single action.
  See [[popovers]], [[alerts]], [[action-sheets]], [[modality]].

## SwiftUI

`.sheet(isPresented:)`; `.presentationDetents([.medium, .large])` (built-in) — also supports
**custom detents** `.fraction(0.3)` and `.height(200)`, e.g.
`.presentationDetents([.fraction(0.3), .large])` (iOS 16+);
`.presentationDragIndicator(.visible)`; `.fullScreenCover` for immersive modals.

## Accessibility

Trap focus within the sheet; provide a clear dismiss; respect Dynamic Type (content scrolls).
See [[accessibility]].

See also: [[modality]], [[popovers]], [[alerts]], [[action-sheets]], [[liquid-glass]].
