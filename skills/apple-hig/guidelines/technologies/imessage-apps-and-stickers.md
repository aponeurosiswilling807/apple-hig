---
title: iMessage Apps & Stickers
source_url: https://developer.apple.com/design/human-interface-guidelines/imessage-apps-and-stickers
platforms: [ios, ipados, macos]
value_type: platform-specific
last_verified: 2026-06-14
---

> ⚠️ Re-verify on Apple. Sticker pixel guidance is version-dependent — confirm current numbers on Apple. Verify on Apple as the HIG migrates from the 26 to the 27/Golden Gate generation.

# iMessage Apps & Stickers

## Purpose

iMessage apps and sticker packs extend Messages so people can decorate conversations and interact inline — sending stickers, playing games, sharing content — without leaving the thread. A **sticker pack** can ship with no code; a full **iMessage app** uses a Messages extension.

## Types

- **Sticker pack** — a set of images people peel-and-place onto messages. No code required.
- **iMessage app** — an extension with custom UI, interactive content, and the ability to insert messages.

## Presentation styles

iMessage apps run in two states and **must handle both**:

- **Compact** — the default, app-drawer-height presentation. **No keyboard access**, no horizontal-scroll/swipe gesture recognizers (the system uses left/right swipes to switch apps).
- **Expanded** — a taller, near-full-screen presentation for richer interaction; keyboard and more complex UI are available.

Transition between them with `requestPresentationStyle(_:)`; design content so it works in both.

## Guidelines

- **Don't spam the conversation.** Insert content only on a deliberate user action; let people preview before sending. Avoid auto-sending.
- **Design stickers to read at small sizes** and against light and dark conversation backgrounds; use transparency, avoid tiny detail.
- **Keep stickers tasteful and on-brand**; they appear in other people's threads.
- **Make the app icon legible** in the app drawer; provide the required Messages app icon sizes plus the App Store icon.
- **Respect the compact constraints** — don't design flows that need the keyboard in compact mode.

## Sizing (verify current values on Apple)

- Apple recommends three sticker display sizes — **small, regular, large**. Historically ~**100×100 / 136×136 / 206×206 pt** display tiles, with source art commonly supplied at up to **618×618 px** PNG/APNG/GIF, file size typically ≤500 KB. **Treat these as version-dependent and confirm on Apple before shipping.**

## API

- **Messages** framework: `MSMessagesAppViewController`, `MSMessage`, `MSConversation`, `MSSticker`, `MSStickerView`, `MSStickerBrowserViewController`. Sticker packs via a **Sticker Pack** asset catalog.

## Accessibility

- Provide accessibility descriptions for stickers; ensure interactive controls have VoiceOver labels and ≥44 pt targets. Support Dynamic Type in custom UI. See [[accessibility]].

## Do / Don't

- ✅ Insert content only on explicit user action; allow preview.
- ✅ Design stickers to work on light and dark backgrounds.
- ❌ Don't auto-send or flood the thread.
- ❌ Don't require the keyboard in compact mode.

See also: [[accessibility]], [[images]], [[icons]], [[ios]], [[licensing-and-assets]]
