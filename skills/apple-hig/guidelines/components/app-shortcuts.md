---
title: App Shortcuts
source_url: https://developer.apple.com/design/human-interface-guidelines/app-shortcuts
platforms: [ios, ipados, macos, watchos]
value_type: platform-specific
last_verified: 2026-06-14
---

# App Shortcuts

> ⚠️ Re-verify on Apple.

## Purpose

An App Shortcut surfaces a single, high-value action from your app to the system — **Siri**,
**Spotlight**, the **Shortcuts** app, and Suggestions — with **zero setup** by the user. Built on
the **App Intents** framework, it lets people run a task by voice or tap without opening the app.
Reserve App Shortcuts for your app's most common, frame-able actions.

## Guidelines

- Expose only the **most useful, self-contained** actions; don't flood the system with every
  feature. Each App Shortcut maps to one `AppIntent`.
- Write **natural, memorable invocation phrases**; always include your **app name** in the phrase
  (Siri needs it to disambiguate). Provide several phrasings/synonyms for the same action.
- Keep the action **fast and predictable**; show a clear result (dialog + optional snippet) so the
  outcome is glanceable without opening the app. See [[snippets]].
- **Donate** intents as people perform actions in-app so the system can rank Suggestions; donate the
  specific, completed action, not a generic one.
- Provide a **localized** title/phrase set; the system surfaces your phrases in the user's language.
- If an action needs input, define App Intent **parameters** and let the system prompt for them.

## Platform notes

- **iOS / iPadOS:** Siri, Spotlight, Shortcuts app, Lock Screen / Action button via Controls. See
  [[controls]], [[ios]], [[ipados]].
- **macOS:** Spotlight and the Shortcuts app surface App Intents. See [[macos]].
- **watchOS:** runs via Siri and the Shortcuts/Smart Stack surface. See [[watchos]].
- Not a tvOS/visionOS-primary surface; verify current platform coverage on Apple.

## App Intents / API

`AppShortcutsProvider` with `appShortcuts` returning `AppShortcut(intent:phrases:shortTitle:systemImageName:)`;
`AppIntent` defines `perform()`; donate via `IntentDonationManager` / predictable actions. Use the
`\(.applicationName)` token inside phrases so Siri always hears the app name.

## Accessibility

Phrases must work for voice-first users; the result dialog should read clearly under VoiceOver.
Don't rely on a visual snippet alone to convey success — provide spoken/dialog confirmation. See
[[accessibility]].

## Do / Don't

- **Do** include the app name in every phrase and keep actions atomic.
- **Don't** require manual configuration, or expose obscure/rarely-used actions as App Shortcuts.

See also: [[controls]], [[snippets]], [[widgets]], [[ios]], [[macos]], [[watchos]], [[accessibility]]
