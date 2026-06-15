---
title: Searching
source_url: https://developer.apple.com/design/human-interface-guidelines/searching
platforms: [ios, ipados, macos, tvos, visionos]
value_type: universal
last_verified: 2026-06-14
---

# Searching

> ⚠️ Universal. Re-verify on Apple. Pairs with the [[search-fields]] component.

Help people find content quickly and forgivingly.

## Guidelines

- Put search where users expect it for that surface (nav bar or search field in the tab bar area
  on iOS, toolbar on Mac, search tab on tvOS). Keep it discoverable. See [[search-fields]],
  [[tab-views]].
- **Search as you type** with live results when feasible; show **recent searches** and
  **suggestions/completions** to reduce typing (vital on tvOS/watchOS). See [[tvos]].
- Be **forgiving:** tolerate typos, partial matches, and synonyms; search across relevant fields.
- Offer **scopes/filters** for large result sets; let users refine without starting over.
- Show a helpful **no-results** state: confirm what was searched and suggest next steps (broaden,
  check spelling, clear filters). See [[feedback]].
- Make results **actionable** and clearly ranked; highlight the matching text.
- Preserve the query and results when navigating into and back from a result.

## Accessibility

- Announce **result counts** and updates; results navigable by VoiceOver and keyboard; placeholder
  meets 4.5:1 contrast. See [[accessibility]].

See also: [[search-fields]], [[navigation]], [[lists-and-tables]], [[feedback]].
