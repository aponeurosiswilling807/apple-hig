---
title: Tab Views & Tab Bars
source_url: https://developer.apple.com/design/human-interface-guidelines/tab-bars
platforms: [ios, ipados, tvos, visionos]
value_type: exact-spec
last_verified: 2026-06-14
---

# Tab Views & Tab Bars

> 🔢 iOS 26 changed the tab bar shape significantly. Re-verify on Apple.

## Purpose

A tab bar gives flat, persistent access to the app's **top-level sections**. Use it for peer
sections the user switches between often — not for actions (use a [[toolbars|toolbar]]) and not
for sequential steps.

## iOS / iPadOS specifics (exact)

- **2–5 tabs** on iPhone. Each tab: an **SF Symbol** + short label; selected tab uses the
  **filled** symbol variant + tint color. See [[sf-symbols]].
- **iOS 26:** the tab bar is a **floating, inset, pill-shaped capsule** in **Liquid Glass** (not
  full-width), and **search** is often a **separate/dedicated search tab** (`Tab(role: .search)`
  in SwiftUI; `UISearchTab` in UIKit) presented as its own element beside the floating tab bar
  rather than a 5th list tab.
  Controls float above content; **scroll edge effect** keeps it legible. See [[liquid-glass]].
- Labels **~10–11 pt** (approximate, not an Apple-published exact spec): they follow a system
  caption-style text style and **scale with Dynamic Type**. Tap target **≥44 pt** (60 pt
  visionOS). Provide the **Large Content Viewer** for large text.
- On iPad, a **sidebar** often replaces or augments the tab bar in regular width; the system can
  present the same `TabView` as a sidebar. See [[ipados]], [[split-views]].

## tvOS / visionOS

- **tvOS:** tab bar runs across the **top**, focus-driven. See [[tvos]].
- **visionOS:** tabs appear as an **ornament** on the leading edge of the window. See [[visionos]].

## Behavior

- Keep the same tabs available everywhere; selecting a tab restores its prior navigation state.
- Tapping the current tab scrolls to top / pops to root. Badge tabs for counts sparingly.
- Don't hide the tab bar on scroll in a way that strands the user (the 26 floating bar shrinks,
  it doesn't disappear).
- The floating bar can **minimize on scroll** via the SwiftUI `tabBarMinimizeBehavior` modifier
  (e.g. `.onScrollDown`, re-expanding on the opposite scroll; also `.onScrollUp`, `.automatic`,
  `.never`), and you can place an **optional accessory view** above the tab bar (e.g. a now-playing
  bar) via `tabViewBottomAccessory`.

## SwiftUI

`TabView { Tab("Home", systemImage: "house") { … } }`; `.tabViewStyle(.sidebarAdaptable)` to adapt
to a sidebar on iPad; `Tab(role: .search)` for the dedicated search tab.

## Accessibility

- Each tab needs a clear label + selected **trait**. Don't exceed 5 on iPhone; overflow into
  "More" loses discoverability. Don't rely on color alone for the selected state. See [[accessibility]].

See also: [[navigation-bars]], [[split-views]], [[searching]], [[liquid-glass]], [[ios]].
