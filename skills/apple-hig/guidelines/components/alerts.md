---
title: Alerts
source_url: https://developer.apple.com/design/human-interface-guidelines/alerts
platforms: [ios, ipados, macos, watchos, tvos, visionos]
value_type: universal
last_verified: 2026-06-14
---

# Alerts

> ⚠️ Re-verify on Apple.

## Purpose

An alert delivers **critical information or a decision** that requires the user's attention right
now, interrupting the flow. Use **sparingly** — overuse trains people to dismiss without reading.

## Anatomy

- **Title** — short, says what's happening (sentence- or title-style). Optional **message** — one
  or two plain-language sentences with detail. See [[writing]].
- **Buttons** — prefer **one or two**; if you need more choices, use an action sheet instead of
  adding alert buttons. Three or more buttons stack **vertically** and add complexity. Each button
  is the **verb** of its action ("Delete", "Keep"), never just "OK/Cancel" for consequential
  choices. **Cancel** is the safe default.
- **Destructive** action uses destructive (red) styling and is **not** the default/return button.

## Rules

- Reserve for **must-act-now** situations (data loss, errors blocking progress, confirmations of
  irreversible actions). For non-critical info use inline UI, a banner, or [[feedback]].
- Don't use alerts for marketing, tips, or routine confirmations.
- Keep text concise; no error codes alone; say how to recover. See [[writing]].
- Two-button layout: Cancel + action. Make the **least destructive** choice the easy/default one.

## Platform notes

- **macOS:** alerts appear as a **sheet** attached to the relevant window or as a dialog; include
  a suppression checkbox only when truly repetitive. See [[macos]].
- **watchOS/tvOS:** keep to one or two large, focusable buttons. See [[watchos]], [[tvos]].

## Alert vs action sheet vs sheet

- **Alert** — critical decision, centered. **Action sheet** — choices for one action, from the
  origin. **Sheet** — a task/form. See [[action-sheets]], [[sheets]], [[modality]].

## SwiftUI

`.alert("Title", isPresented:) { Button("Delete", role: .destructive) {}; Button("Cancel", role:
.cancel) {} } message: { Text("…") }`.

## Accessibility

VoiceOver announces the alert and moves focus to it; buttons have clear labels + roles; honor
Reduce Motion on present. See [[accessibility]].

See also: [[action-sheets]], [[sheets]], [[feedback]], [[writing]].
