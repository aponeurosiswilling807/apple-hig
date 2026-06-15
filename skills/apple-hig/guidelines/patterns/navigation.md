---
title: Navigation
source_url: https://developer.apple.com/design/human-interface-guidelines/navigation
platforms: [ios, ipados, macos, watchos, tvos, visionos]
value_type: universal
last_verified: 2026-06-14
---

# Navigation

> ⚠️ Universal. Re-verify on Apple.

## Three navigation styles

1. **Flat (tab-based)** — switch between **peer** top-level sections. Use a [[tab-views|tab bar]]
   (iOS/tvOS) or a [[split-views|sidebar]] (iPad/Mac). Best when sections are equally important.
2. **Hierarchical (drill-down)** — push/pop through a tree (list → detail). Use a
   [[navigation-bars|navigation bar]] with a back control. Best for content with depth.
3. **Content-driven / experience-driven** — move directly through content (e.g. a game, a book, a
   page-based gallery). Use page controls or gestures. See [[page-controls]].

Most apps **combine** these: tabs at the top level, drill-down within each tab.

## Principles

- Make the user's **location** always clear (titles, selected tab/sidebar item, breadcrumbs on Mac).
- Provide a predictable **way back** (back button, edge-swipe, Escape on Mac). Never strand the user.
- Keep hierarchies **shallow**; don't bury key content deep. Preserve and restore navigation state.
- Match the platform model: **tabs/sidebar** for sections, **push** for depth, **modal** only for
  focused tasks. See [[modality]].
- Choose chrome by **size class**: tab bar (compact) ↔ sidebar (regular) can adapt automatically.
  See [[split-views]], [[ipados]].

## Platform mapping

- **iOS:** tab bar + navigation stack. **iPad/Mac:** sidebar + split view + toolbar. **watchOS:**
  vertical/page nav with the Crown. **tvOS:** top tab bar + focus. **visionOS:** ornaments +
  windows. See each platform file.

## Don't

- ❌ Invent non-standard back behavior, ❌ deep nesting, ❌ losing place on return, ❌ mixing
  navigation into action toolbars.

See also: [[tab-views]], [[navigation-bars]], [[split-views]], [[modality]], [[searching]].
