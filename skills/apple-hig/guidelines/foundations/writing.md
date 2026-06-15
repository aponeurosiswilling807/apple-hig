---
title: Writing & Content Style
source_url: https://developer.apple.com/design/human-interface-guidelines/writing
platforms: [ios, ipados, macos, watchos, tvos, visionos]
value_type: universal
last_verified: 2026-06-14
---

# Writing & Content Style

> ⚠️ Universal. Apple's authoritative reference is the **Apple Style Guide** (updated June 2025);
> for anything it doesn't cover, Apple defers to **The Chicago Manual of Style** (usage) and
> **Merriam-Webster's Collegiate Dictionary** (spelling). Re-verify on Apple.

## Voice

- Be **clear, concise, and specific**. Lead with what matters. Cut filler.
- Use **plain language**; avoid jargon, internal terms, and developer-speak in user-facing copy.
- Be **friendly and respectful**, not cute or condescending. Address the user as "you."

## Capitalization (exact rule)

- **Title-style** (for most labels, buttons, menu titles, alert titles): capitalize the first and
  last word and all principal words; **lowercase** articles (a, an, the), coordinating conjunctions
  (and, or, but…), and short prepositions (≤4 letters: at, by, for, in, of, on, to, up…) unless
  first/last.
- **Sentence-style** (for full sentences, messages, longer descriptions): capitalize only the
  first word and proper nouns.
- Be **consistent** within a surface.

## Punctuation & specifics

- A menu item or button that **opens a dialog / needs more input** ends with an **ellipsis (…)**
  — e.g. "Save As…", "Export…". A button that acts immediately does **not** (e.g. "Save").
- Use the real ellipsis character `…`, curly quotes `"  "  '  '`, and an en/em dash where correct.
- Avoid all-caps for emphasis; it hurts legibility and Dynamic Type.

## Buttons & actions

- Label buttons with the **verb of the action** ("Delete", "Add Photo"), not "OK"/"Yes" for
  consequential choices. Destructive buttons name the action and are styled destructive.
- Alert buttons: the **action** the user is confirming, plus a clear **Cancel**. See [[alerts]].

## Errors & empty states

- Errors: say **what happened** and **how to fix it**, blame the situation not the user, no codes
  alone. Empty states: explain what goes here and how to add the first item. See [[feedback]].

## Localization

- Write for translation: avoid idioms, allow room for text expansion (translated strings can run
  noticeably longer — a general industry rule of thumb is ~30–40%, not a published Apple spec),
  don't concatenate sentence fragments, and keep strings out of images. See [[inclusion]],
  [[right-to-left]].

See also: [[inclusion]], [[alerts]], [[feedback]], [[onboarding]].
