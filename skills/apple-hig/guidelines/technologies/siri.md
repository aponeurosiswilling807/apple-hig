---
title: Siri
source_url: https://developer.apple.com/design/human-interface-guidelines/siri
platforms: [ios, ipados, macos, watchos, tvos, visionos]
value_type: universal
last_verified: 2026-06-14
---

> ⚠️ Re-verify on Apple as the HIG migrates from the 26 to the 27/Golden Gate generation.

# Siri

## Purpose

Siri lets people use their voice (or typed Siri) to get things done with your app, hands-free
and eyes-free. Expose your app's content and actions through **App Intents** so Siri,
Spotlight, Shortcuts, widgets, and Apple Intelligence can find and run them. The legacy path
was SiriKit Intents; **App Intents is the current, preferred framework**.

## How it works

- **App Intent** — a single, focused action your app can perform (e.g. "Start a workout",
  "Log water"). Each intent declares parameters, a summary, and a result.
- **App Shortcut** — wraps an App Intent so it's available system-wide with zero user setup,
  surfaced in Spotlight and runnable by voice via your **trigger phrases**.
- **Snippet / result** — a small, glanceable visual the system shows after running an intent.

## Guidelines (do's)

- Pick **trigger phrases** that are natural, short, and include your app name (Siri needs the
  app name to disambiguate), e.g. "Order my usual with [AppName]". Provide several
  natural-language variations.
- **No setup required** — App Shortcuts must work the first time the app is installed, with no
  configuration.
- **Confirm consequential actions** (sending money, deleting, ordering) before performing them;
  let people cancel. Run safe, reversible actions immediately.
- Respond with **both voice and visual** — speak a concise confirmation and show a snippet
  where appropriate. Keep spoken responses short.
- Handle ambiguity and missing parameters by asking a brief follow-up, not by failing.
- Keep intent **titles and summaries** in plain language; they appear in Shortcuts and Siri.

## SwiftUI / API

- `AppIntent`, `AppShortcut`, `AppShortcutsProvider`, `@Parameter`, `IntentParameter`,
  `ProvidesDialog`, `ShowsSnippetView` (App Intents framework).
- Donate / predict with `IntentDonationManager`; `AppEntity` / `EntityQuery` model your app's
  data for Siri and Spotlight.

## Accessibility

Voice is inherently accessible, but the visual snippet still needs VoiceOver labels, contrast
>=4.5:1, and Dynamic Type. Don't rely on color alone in results. See [[accessibility]],
[[voiceover]].

## Do / Don't

- ✅ Do expose key actions as App Intents; confirm risky actions; respond briefly in voice and
  visuals; require no setup.
- ❌ Don't bury actions behind setup; don't perform irreversible actions without confirmation;
  don't write long spoken responses; don't omit your app name from trigger phrases.

See also: [[shareplay]], [[shazamkit]], [[accessibility]], [[voiceover]], [[writing]], [[widgets]], [[notifications]]
