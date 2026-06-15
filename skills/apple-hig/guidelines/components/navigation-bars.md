---
title: Navigation Bars
source_url: https://developer.apple.com/design/human-interface-guidelines/navigation-bars
platforms: [ios, ipados, macos, visionos]
value_type: exact-spec
last_verified: 2026-06-14
---

# Navigation Bars

> 🔢 Title sizes are exact-spec. Re-verify on Apple.

## Purpose

A navigation bar sits at the **top** of a screen in a drill-down hierarchy: it shows the current
location (title), a **back** control on the leading edge, and a few **contextual actions** on the
trailing edge. On 26+ it floats in **Liquid Glass** with a **scroll edge effect**. See [[liquid-glass]].

## Exact values (iOS)

- **Large title 34 pt** (Bold) that **collapses** to a **compact inline title 17 pt Semibold** as
  the user scrolls. See [[typography]].
- Back button: chevron + previous title on the leading edge (edge-swipe back gesture). Mirror for
  RTL — use `chevron.backward`. See [[right-to-left]].
- Keep trailing actions to **a small number of frequently used controls** (avoid crowding the bar);
  **1–3 is a practical guideline, not an Apple-stated exact number** — prioritize the most important
  controls and move the rest into a [[menus|menu]].
- Bar item tap target ≥44 pt.

## Structure

- **Leading:** back (or close/cancel for modals).
- **Center:** title (large or inline); optionally a segmented control or prompt.
- **Trailing:** primary contextual actions; an overflow menu (`ellipsis.circle`) if needed.

## Platform notes

- **macOS:** the window's unified **title + toolbar** plays this role; commands also live in the
  **menu bar**. See [[macos]], [[toolbars]].
- **iPad:** often paired with a sidebar/split view; the detail column has its own nav bar. See [[split-views]].
- **visionOS:** title/controls may sit in the window's top region or an ornament. See [[visionos]].

## Do / Don't

- ✅ Title names the current screen; keep it short. ✅ Use large title for top-level lists.
- ❌ Don't crowd the bar with actions, don't put primary destructive actions here without
  confirmation, don't hide the back affordance.

## Accessibility

Labels on all bar buttons; Large Content Viewer for the bar at large text sizes. See [[accessibility]].

See also: [[toolbars]], [[tab-views]], [[searching]], [[liquid-glass]], [[typography]].
