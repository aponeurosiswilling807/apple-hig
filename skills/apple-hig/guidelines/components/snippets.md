---
title: Snippets
source_url: https://developer.apple.com/design/human-interface-guidelines/snippets
platforms: [ios, ipados, macos, watchos]
value_type: platform-specific
last_verified: 2026-06-14
---

# Snippets

> ⚠️ Re-verify on Apple.

## Purpose

A snippet is a **compact, custom SwiftUI view** that an **App Intent** returns to show a
**confirmation or result** inline inside **Siri**, **Spotlight**, and the **Shortcuts** app —
without opening your app. It's the visual companion to the intent's spoken/written dialog. See
[[app-shortcuts]], [[controls]].

## When snippets appear

App Intents can present UI at three phases:

- **Value confirmation** — confirm a parameter the system resolved (e.g. "Send to Alex?").
- **Intent confirmation** — confirm the action before it runs (e.g. a Pay/Send button).
- **Result** — show the outcome after `perform()` completes (e.g. order placed, current status).

## Guidelines

- Keep snippets **glanceable and focused** — one result or one decision. They render **alongside**
  system chrome (snippet title, confirmation buttons), so design to feel at home inside Siri.
- Pair every snippet with a clear **dialog** string; the dialog (not the view) is what Siri speaks,
  so the snippet must not be the only way to understand the result. See [[accessibility]].
- Use **semantic colors**, system text styles, and Dynamic Type; respect light/dark. Keep layouts
  short — snippets are not a place to rebuild your app's screen. See [[color]], [[typography]].
- Classic result snippets are **non-interactive** (no custom animation/gestures). **Interactive
  snippets** (iOS 26+) allow buttons that re-run App Intents — verify current capability on Apple.

## App Intents / API

Return a snippet from the intent result, e.g. `.result(dialog:view:)` or conform to
`ShowsSnippetView`; entity visuals come from `DisplayRepresentation(title:subtitle:image:)`.
Interactive snippets use App Intent-backed buttons (iOS 26+). Verify exact API on Apple as it
evolves.

## Accessibility

Always provide a spoken/dialog equivalent of the snippet; ensure VoiceOver reads the result; meet
contrast and Dynamic Type. Don't convey success by color/icon alone. See [[accessibility]].

## Do / Don't

- **Do** keep it short, glanceable, and paired with a clear dialog string.
- **Don't** reproduce a full app screen, or rely on the view as the only source of the result.

See also: [[app-shortcuts]], [[controls]], [[widgets]], [[color]], [[typography]], [[accessibility]]
