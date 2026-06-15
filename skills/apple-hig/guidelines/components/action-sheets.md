---
title: Action Sheets
source_url: https://developer.apple.com/design/human-interface-guidelines/action-sheets
platforms: [ios, ipados, watchos]
value_type: platform-specific
last_verified: 2026-06-14
---

# Action Sheets

> ⚠️ Re-verify on Apple. (UIKit `UIAlertController` `.actionSheet`; SwiftUI `confirmationDialog`.)

## Purpose

An action sheet presents a **set of choices related to a single action or task** the user
initiated — typically a short list of options plus **Cancel**. Use it to confirm or branch an
action (e.g. "Delete Draft / Save Draft / Cancel").

## Anatomy & placement

- A list of **buttons**, each the verb of its option. A **Cancel** button is present on iPhone
  (in the bottom action sheet); on iPad it appears in a popover with no Cancel (tapping outside cancels).
- **Destructive** options use destructive (red) styling and sit apart from the safe choices.
- **iPhone (iOS 26+ / Liquid Glass):** the action sheet **springs/animates from the originating
  control** (its source), not unconditionally from the screen bottom — attach `confirmationDialog`
  to the triggering view so the Liquid Glass source animation works. (Pre-26: slid up from the bottom.)
  **iPad / regular width:** presented in a **popover** anchored to the originating control
  (no Cancel button needed there — tapping outside cancels). See [[popovers]].

## When to use

- ✅ Branching a user-initiated action (especially with a destructive option).
- ❌ Not for critical app-initiated alerts → use an **[[alerts|alert]]**.
- ❌ Not for a full task/form → use a **[[sheets|sheet]]**.
- ❌ Not for a persistent set of commands on a control → use a **[[menus|menu]]**.

## Guidelines

- Keep the option list **short**; group logically; put the destructive option clearly separated.
- Label each option with its action verb; provide a clear Cancel. See [[writing]].

## SwiftUI

`.confirmationDialog("Title", isPresented:) { Button("Delete", role: .destructive) {}; Button(
"Cancel", role: .cancel) {} }` — automatically adapts to a popover on iPad.

## Accessibility

VoiceOver focus moves to the sheet; options are clearly labeled with roles; honor Dynamic Type.
See [[accessibility]].

See also: [[alerts]], [[sheets]], [[menus]], [[popovers]], [[modality]].
