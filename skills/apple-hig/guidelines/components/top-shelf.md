---
title: Top Shelf
source_url: https://developer.apple.com/design/human-interface-guidelines/top-shelf
platforms: [tvos]
value_type: platform-specific
last_verified: 2026-06-14
---

# Top Shelf

> ⚠️ Re-verify on Apple.

## Purpose

The Top Shelf is the large featured area at the **top of the tvOS Home Screen** that appears when
your app's icon is in the **top row of the Dock and focused**. It's prime real estate to showcase
fresh, relevant content and deep-link people straight into it. See [[tvos]].

## Types

- **Static** — a single banner image filling the Top Shelf; simplest, good for a hero/promo.
- **Dynamic** — one or more **scrolling rows** of content items (sectioned/inset banner styles),
  personalized per user; each item deep-links into the app.

## Guidelines

- Feature **current, personalized, high-value** content (continue watching, new episodes, top picks)
  — not a static logo. Keep it fresh; update as the user's content changes.
- Provide **crisp, correctly-sized artwork** for the Top Shelf and supply layered/parallax assets
  where appropriate so images respond to focus. (Verify exact pixel dimensions on Apple — they are
  version-dependent.) See [[layout]].
- Each Top Shelf item must **deep-link** to the matching screen in your app, not just open the app.
- Keep text in artwork minimal and legible from across the room; rely on the system's focus styling
  rather than custom chrome. See [[typography]].
- Localize artwork/titles; respect light/dark Home Screen styling.

## Platform notes

- **tvOS only.** Requires a **TV Services** Top Shelf app extension. The widget equivalent on other
  platforms is the widget/complication; see [[widgets]]. See [[tvos]].

## API

`TVTopShelfContentProvider` supplies content; `TVTopShelfSectionedContent` /
`TVTopShelfCarouselContent` / `TVTopShelfInsetContent` for dynamic layouts, `TVTopShelfItem` per
entry with `displayAction` / `playAction` for deep links. Reload via
`TVTopShelfContentProvider.topShelfContentDidChange()`.

## Accessibility

Provide accessible titles for each item; don't convey meaning by artwork alone; ensure focused items
read clearly under VoiceOver and meet contrast. See [[accessibility]].

## Do / Don't

- **Do** show fresh, personalized, deep-linkable content with crisp focus-aware art.
- **Don't** use a static logo, stale content, or items that just open the app's home screen.

See also: [[widgets]], [[tvos]], [[layout]], [[typography]], [[accessibility]]
