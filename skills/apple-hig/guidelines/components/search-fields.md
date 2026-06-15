---
title: Search Fields
source_url: https://developer.apple.com/design/human-interface-guidelines/searching
platforms: [ios, ipados, macos, tvos, visionos]
value_type: platform-specific
last_verified: 2026-06-14
---

# Search Fields

> ⚠️ Re-verify on Apple. (Pairs with the [[searching]] pattern.)

## Purpose

A search field lets people find content by entering text. Place it where users expect search for
that surface and keep it discoverable.

## Placement

- **iOS:** in the navigation bar (appears under a large title and can hide on scroll) or, on
  **iOS 26**, as a **Tab with the search role** that sits apart in the Liquid Glass tab bar and
  expands into a floating search field at the bottom of the screen when selected. See [[tab-views]], [[navigation-bars]].
- **macOS:** in the toolbar (trailing) or a list header. See [[toolbars]].
- **iPad/visionOS:** toolbar/sidebar; **tvOS:** a dedicated search tab with a keyboard. See [[tvos]].

## Guidelines

- Provide a clear **placeholder** ("Search") and a **clear/cancel** affordance. Placeholder meets
  4.5:1 contrast. See [[accessibility]].
- Search **as you type** with live results when feasible; otherwise search on submit. Show recent
  searches and **suggestions/scopes** where helpful. See [[searching]].
- Offer **scope bars** or filters for large result sets; show a helpful **no-results** state with
  next steps. See [[feedback]].
- Don't make search the only way to reach important content.

## SwiftUI

`.searchable(text:, placement:)`; `.searchScopes`; `.searchSuggestions`.

## Accessibility

Label the field; announce result counts; keyboard + VoiceOver navigable results; Dynamic Type.
See [[accessibility]].

See also: [[searching]], [[text-fields]], [[navigation-bars]], [[tab-views]].
